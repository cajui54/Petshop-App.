"use server";
import { returnValidationErrors } from "next-safe-action";
import { actionClient } from "@/app/_libs/safe-actions";
import { loginSystemSchema } from "./schema";
import { db } from "@/app/_libs/prisma";
import { redirect } from "next/navigation";

export const loginSystem = actionClient
  .schema(loginSystemSchema)
  .action(async ({ parsedInput: data }) => {
    const findUser = await db.user.findUnique({
      where: {
        email: data.email,
        password: data.password,
      },
    });

    if (findUser) {
      const pathUser = findUser.type === "admin" ? "/admin" : "/client";
      return redirect(`/client/${findUser.id}`);
    } else {
      returnValidationErrors(loginSystemSchema, {
        _errors: ["Email ou Senha, invalido!"],
      });
    }
  });
