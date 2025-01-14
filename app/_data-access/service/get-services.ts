"use server";
import { db } from "@/app/_libs/prisma";
import { Service } from "@prisma/client";

export const getServices = async (): Promise<Service[] | []> => {
  const services = db.service.findMany();

  return services;
};
