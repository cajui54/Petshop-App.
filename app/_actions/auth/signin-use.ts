"use server";
import { signIn, auth } from "auth";

export const signInWithGoogle = async () => {
  await signIn("google", { redirectTo: "/register" });
};
