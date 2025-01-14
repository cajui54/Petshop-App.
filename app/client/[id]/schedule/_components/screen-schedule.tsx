"use client";
import MessageComponent from "@/app/_components/message";
import { ISchedule } from "@/app/_interfaces/schedule";
import { IService } from "@/app/_interfaces/service";
import useManagerStorage from "@/app/_hooks/useManagerStorage";
import { Service } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { PiDogFill } from "react-icons/pi";
import { CalendaryProps } from "./schedule-manager";
import { formatMoney } from "@/app/_utils/format-money";
import { formatDateBr } from "@/app/_utils/format-date";

const ScreenSchedule = ({ dateSchedule }: CalendaryProps) => {
  const [schedule, setSchedule] = useState<ISchedule | null>(null);
  const { getStorageByKey } = useManagerStorage();

  useEffect(() => {
    if (getStorageByKey("services") && getStorageByKey("userId")) {
      const getServices = getStorageByKey("services");
      const getIdUser: string = getStorageByKey("userId");
      const service: string = getServices
        .map((_service: Service) => _service.name)
        .join(" & ");
      const total: number = getServices.reduce(
        (acc: number, curr: IService) => acc + curr.price,
        0
      );
      setSchedule({
        service,
        price: total,
        userId: getIdUser,
        date: dateSchedule?.date || null,
        time: dateSchedule?.time || null,
      });
    }
  }, [dateSchedule]);

  const handleSendSchedule = () => {
    if (schedule) {
      if (schedule.date && schedule.time) {
        console.log(schedule);

        return;
      }
    }
    alert("Ocorreu um error nos dados!");
  };
  return (
    <div className="w-4/5 sm:w-[400px] mx-auto p-3 my-6 rounded-lg  bg-neutral-800">
      <h2 className="text-lg">Confira os dados abaixo:</h2>
      {schedule ? (
        <>
          <ul className="mt-4 [&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:p-1 [&>*]:bg-neutral-900  [&>*]:my-2 [&>*]:rounded-md [&>*]:px-4">
            <li>
              <span className="flex justify-between items-center">
                <PiDogFill className="mx-2 text-2xl text-pink-500" />
                Serviços:
              </span>
              <span>{schedule.service}</span>
            </li>

            <li>
              <span className="flex justify-between items-center">
                <GiMoneyStack className="mx-2 text-2xl text-pink-500" />
                Preço:
              </span>
              <span>{formatMoney(schedule.price)}</span>
            </li>

            <li>
              <span className="flex justify-between items-center">
                <IoCalendarOutline className="mx-2 text-2xl text-pink-500" />
                Data:
              </span>
              <span>
                {schedule.date
                  ? formatDateBr(schedule.date)
                  : "selecione uma data"}
              </span>
            </li>

            <li>
              <span className="flex justify-between items-center">
                <LuAlarmClock className="mx-2 text-2xl text-pink-500" />
                Horário:
              </span>
              <span>
                {schedule.time ? schedule.time : "selecione um horário"}
              </span>
            </li>
          </ul>
          <button
            onClick={handleSendSchedule}
            disabled={!(schedule.date && schedule.time)}
            className={`${
              !(schedule.date && schedule.time) && "opacity-25"
            } w-4/5 mx-auto block p-1 mt-8 rounded-md bg-pink-500`}
          >
            Confirmar
          </button>
        </>
      ) : (
        <MessageComponent
          content={`Ocorreu um erro inesperado! \n ${schedule}`}
          type="error"
        />
      )}
    </div>
  );
};

export default ScreenSchedule;
