"use server";
import { signIn } from "auth";

export const signInWithGoogle = async (redirect: string) => {
  await signIn("google", { redirectTo: redirect });
};
