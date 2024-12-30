"use server";
import { actionClient } from "@/app/_libs/safe-actions";
import { registerUserSchema } from "./schema";
import { returnValidationErrors } from "next-safe-action";
import { db } from "@/app/_libs/prisma";
import { checkIfThereEmail } from "../../_utils/email/check-email";
import { checkEmailSchema } from "../../_utils/email/schema";

export const registerUserAction = actionClient
  .schema(registerUserSchema)
  .action(async ({ parsedInput: data }) => {
    const checkEmail = await checkIfThereEmail({ email: data.email });
    if (checkEmail) {
      await db.user.create({ data });
      return;
    } else {
      returnValidationErrors(checkEmailSchema, {
        _errors: ["Já exite este email, tente outro!"],
      });
    }
  });
