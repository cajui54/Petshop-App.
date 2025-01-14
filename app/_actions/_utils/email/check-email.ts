"use server";
import { db } from "@/app/_libs/prisma";
import { CheckEmailSchema, checkEmailSchema } from "./schema";

export const checkIfThereEmail = async ({
  email,
}: CheckEmailSchema): Promise<boolean> => {
  checkEmailSchema.parseAsync({ email });
  let findEmail;
  try {
    findEmail = await db.user.findUnique({ where: { email } });
    console.log(findEmail);
  } catch (error) {
    alert("Ocorreu um erro inesperado");
  } finally {
    return !findEmail;
  }
};
