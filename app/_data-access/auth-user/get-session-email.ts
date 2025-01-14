"use server";
import { auth } from "auth";
import { redirect } from "next/navigation";

export const getSessionEmail = async () => {
  const session = await auth();
  if (!session || !session.user || !session.user?.email) {
    redirect("/access-not-allowed");
  }
  return session.user.email;
};
