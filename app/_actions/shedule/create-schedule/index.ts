"use server";
import { ISchedule } from "@/app/_interfaces/schedule";
import { db } from "@/app/_libs/prisma";
import { formatDateBr } from "@/app/_utils/format-date";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { actionClient } from "@/app/_libs/safe-actions";

export const addNewSchedule = async (schedule: ISchedule) => {
  try {
    if (schedule.date && schedule.time) {
      const newSchedule = {
        ...schedule,
        price: new Prisma.Decimal(schedule.price),
        date: formatDateBr(schedule.date),
        time: schedule.time,
      };
      const checkDate = await db.schedule.findMany({
        where: { date: newSchedule.date },
      });
      const getTimes = checkDate.map((data) => data.time);

      if (!getTimes.includes(newSchedule.time)) {
        await db.schedule.create({ data: newSchedule });

        revalidatePath("/", "layout");
      }
    }
  } catch (error) {
    alert(`Ocorreu um erro inesperado! ${error}`);
  }
};
