"use server";
import { db } from "@/app/_libs/prisma";
import { getDateTodaySeparate } from "@/app/_utils/format-date";

export const getBooking = async (id: string) => {
  const booking = await db.schedule.findMany({
    where: {
      userId: id,
    },
  });

  return booking
    .filter((item) => {
      if (
        Number(item.date.split("/")[1]) >= Number(getDateTodaySeparate().month)
      ) {
        if (
          Number(item.date.split("/")[0]) >= Number(getDateTodaySeparate().day)
        ) {
          return item;
        }
      }
    })
    .sort((a, b) => {
      return Number(a.date.split("/")[0]) - Number(b.date.split("/")[0]);
    });
};
