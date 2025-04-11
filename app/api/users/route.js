import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import { avatarUpload } from "@/utils/avatarUpload";
import sendEmail from "@/utils/sendEmail";
import { render } from "@react-email/render";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import VerifyEmailTemplate from "./VerifyEmail";

export async function GET() {
  await dbConnect();
  const users = await User.find();
  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");

    const password = formData.get("password");
    const hashedPassword = await bcrypt.hash(password, 11);

    const avatar = formData.get("avatar");
    const avatarURL = await avatarUpload(avatar);

    if (avatarURL && avatarURL?.success === false) {
      return NextResponse.json(
        { message: avatarURL?.message },
        { status: 400 }
      );
    }

    // Generate token by jsonwebtoken
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: 60 * 5,
    });

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      token,
      avatar: avatarURL?.filename,
    });

    const user = await newUser.save();

    const generateURL = `${process.env.APP_URL}/verify?token=${token}`;
    const emailHtml = await render(
      <VerifyEmailTemplate name={user.name} url={generateURL} />
    );

    // send email to verify account
    await sendEmail({
      to: user.email,
      subject: "Verify Your Email Address to activate the account",
      html: emailHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Check user email to activate the account",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error,
      },
      { status: 500 }
    );
  }
}
