"use server";
import { signOut } from "auth";

export const signOutOfGoogle = async () => {
  await signOut({ redirectTo: "/" });
};
