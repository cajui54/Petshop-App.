import { z } from "zod";

export const checkEmailSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Campo email é obrigatório!" })
    .toLowerCase()
    .email({ message: "Não é um email valido!" }),
});

export type CheckEmailSchema = z.infer<typeof checkEmailSchema>;
