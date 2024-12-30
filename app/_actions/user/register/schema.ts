import { z } from "zod";
import { checkIfThereEmail } from "../../_utils/email/check-email";

export const registerUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Campo nome é obrigatório!" })
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    })
    .refine((name) => name.length > 3, {
      message: "Campo nome de conter ao menos 3 caracteres!",
    }),
  email: z
    .string()
    .trim()
    .min(5, { message: "Campo email é obrigatório!" })
    .toLowerCase()
    .email({ message: "Não é um email valido!" })
    .refine(async (email) => checkIfThereEmail({ email }), {
      message: "Este email já foi usado, tente outro!",
    }),
  password: z
    .string()
    .min(6, { message: "Senha de conter ao menos 6 caracteres!" }),
  image: z.string(),
  isBloqued: z.boolean(),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
