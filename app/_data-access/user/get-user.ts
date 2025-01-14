import { checkAuthUser } from "@/app/_actions/auth/check-auth";
import { db } from "@/app/_libs/prisma";
import { redirect } from "next/navigation";

interface UseDto {
  id: string;
  name: string;
  email: string;
  type: string;
  image: string;
  isBloqued: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const getUser = async (id: string): Promise<UseDto> => {
  await checkAuthUser(id);

  const findUser = await db.user.findUnique({
    where: { id },
  });

  if (findUser) {
    return findUser;
  }
  redirect("/access-not-allowed");
};
