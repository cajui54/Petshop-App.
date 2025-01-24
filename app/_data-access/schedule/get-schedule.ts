"use server";
import { db } from "@/app/_libs/prisma";
interface User {
  image: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: string;
  type: string;
  isBloqued: boolean;
}
export interface ScheduleDto {
  id: string;
  service: string;
  price: number;
  date: string;
  time: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

const getScheduleDto = async (date: string): Promise<ScheduleDto[] | []> => {
  const clients = await db.schedule.findMany({
    where: { date },
    include: { user: true },
  });

  const filterClient = clients.map((client) => ({
    ...client,
    price: Number(client.price),
  }));
  return filterClient;
};

export default getScheduleDto;
