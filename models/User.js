import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    status: {
      type: String,
      enum: ["Verified", "Unverified"],
      default: "Unverified",
    },
    token: String,
    avatar: String,
    role: { type: String, enum: ["Admin", "User"], default: "User" },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
