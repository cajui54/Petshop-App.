import { z } from "zod";

export const loginSystemSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Preencha o campo email!" })
    .email({ message: "não é um email valido!" }),
  password: z
    .string()
    .trim()
    .min(1, { message: "Campo senha é obrigatório!" })
    .refine((password) => password.length >= 6, {
      message: "Senha deve conter ao menos 6 caracteres",
    }),
});

export type LoginSystemSchema = z.infer<typeof loginSystemSchema>;
