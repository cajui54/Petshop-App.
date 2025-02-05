"use server";
import { db } from "@/app/_libs/prisma";
import { Time } from "@prisma/client";

export const getTimes = async (date: string): Promise<Time[]> => {
  const schedule = await db.schedule.findMany({ where: { date } });
  const getDatas = schedule.map((schedule) => schedule.date);
  const getTime = schedule.map((schedule) => schedule.time);

  const times = await db.time.findMany();

  const filterTimes = times.filter((time) => {
    if (getDatas.includes(date)) {
      if (!getTime.includes(time.time)) {
        return time;
      }
    } else {
      return time;
    }
  });

  return filterTimes;
};
