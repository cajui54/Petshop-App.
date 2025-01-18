import { Decimal } from "@prisma/client/runtime/library";

export interface ISchedule {
  service: string;
  price: number;
  date: string | null;
  time: string | null;
  userId: string;
}
