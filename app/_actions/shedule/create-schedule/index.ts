"use server";
import { ISchedule } from "@/app/_interfaces/schedule";
import { db } from "@/app/_libs/prisma";
import { formatDateBr } from "@/app/_utils/format-date";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const addNewSchedule = async (schedule: ISchedule) => {
  try {
    if (schedule.date && schedule.time) {
      const newSchedule = {
        ...schedule,
        price: new Prisma.Decimal(schedule.price),
        date: formatDateBr(schedule.date),
        time: schedule.time,
      };
      await db.schedule.create({ data: newSchedule });
    }
  } catch (error) {
    alert(`Ocorreu um erro inesperado! ${error}`);
  } finally {
    revalidatePath("client/:id/schedule");
  }
};
