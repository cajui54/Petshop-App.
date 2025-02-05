"use server";
import { db } from "@/app/_libs/prisma";
import { getDateToday } from "@/app/_utils/format-date";

export interface AmountClient {
  amountSchedule: number;
  timesAvailable: number;
  totalClient: number;
}

export const getTotalClient = async (): Promise<AmountClient> => {
  const timesTotal = await db.time.count();
  const timeSchedule = await db.schedule.count({
    where: { date: getDateToday() },
  });

  return {
    amountSchedule: timeSchedule,
    timesAvailable: timeSchedule === 0 ? timesTotal : timesTotal - timeSchedule,
    totalClient: timesTotal,
  };
};
