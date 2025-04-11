import nodemailer from "nodemailer";

export default async function sendEmail({ to, subject, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"ZamZam" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });

  return info;
}
