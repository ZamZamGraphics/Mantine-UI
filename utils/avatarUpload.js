import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

export async function avatarUpload(avatar) {
  if (avatar) {
    // Size validation (e.g., max 2MB)
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB
    if (avatar.size > MAX_SIZE) {
      return { success: false, message: "File size exceeds 2MB limit." };
    }

    // Type validation (e.g., only images)
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(avatar.type)) {
      return {
        success: false,
        message: "Invalid file type. Only JPG, PNG, and WEBP allowed.",
      };
    }

    // Optional: Extension validation
    const extension = avatar.name.split(".").pop()?.toLowerCase();
    if (!["jpg", "jpeg", "png", "webp"].includes(extension || "")) {
      return { success: false, message: "Invalid file extension." };
    }

    // Extract original extension
    const ext = avatar.name.split(".").pop()?.toLowerCase() || "bin";

    // Generate a new filename (e.g., using UUID)
    const newFileName = `${randomUUID()}.${ext}`;

    // Save the file
    const arrayBuffer = await avatar.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, newFileName);
    fs.writeFileSync(filePath, buffer);

    return {
      success: true,
      filename: newFileName,
      message: "Avatar successfully uploaded.",
    };
  } else {
    return { success: true, filename: null, message: "No avatar uploaded" };
  }
}
