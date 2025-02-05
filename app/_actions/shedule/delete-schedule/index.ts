"use server";
import { db } from "@/app/_libs/prisma";
import { revalidatePath } from "next/cache";

export const deleteSchedule = async (id: string) => {
  await db.schedule.delete({ where: { id } });
  revalidatePath("/", "layout");
};
