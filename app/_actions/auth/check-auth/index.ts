"use server";

import { db } from "@/app/_libs/prisma";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const checkAuthSession = async (): Promise<void> => {
  const session = await auth();

  if (session) {
    return;
  }
  redirect("/access-not-allowed");
};
const checkUserIsBloqued = async (isBloqued: boolean) => {
  if (!isBloqued) {
    return;
  }
  redirect("/access-not-allowed");
};

export const checkAuthUser = async (id: string): Promise<void> => {
  await checkAuthSession();

  const findId = await db.user.findUnique({
    where: { id },
  });

  if (findId) {
    await checkUserIsBloqued(findId.isBloqued);
    return;
  }
  redirect("/access-not-allowed");
};
