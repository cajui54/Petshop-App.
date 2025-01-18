"use client";
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
import { addNewSchedule } from "@/app/_actions/shedule/create-schedule";
import LoadingComponent from "@/app/_components/loading-component";
import { IMessage } from "@/app/register/_components/form-register-user";
import MessageComponent from "@/app/_components/message";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ScreenSchedule = ({ dateSchedule, setDateSchedule }: CalendaryProps) => {
  const [schedule, setSchedule] = useState<ISchedule | null>(null);
  const { getStorageByKey } = useManagerStorage();
  const [message, setMessage] = useState<IMessage>({
    status: false,
    content: "",
    type: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
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
    try {
      setLoading(true);
      if (schedule) {
        if (schedule.date && schedule.time) {
          addNewSchedule(schedule);
          setMessage({
            status: true,
            type: "success",
            content: "Agendamento feito com sucesso!",
          });
          return;
        }
      }
    } catch (error) {
      setMessage({
        status: true,
        type: "error",
        content: `Ocorreu um erro no agendamento, ${error}`,
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setMessage({ status: false, type: "", content: "" });
        setDateSchedule!({ date: null, time: undefined });
      }, 2000);
    }
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
          {!loading ? (
            <button
              onClick={handleSendSchedule}
              disabled={!(schedule.date && schedule.time)}
              className={`${
                !(schedule.date && schedule.time) && "opacity-25"
              } w-4/5 mb-4 mx-auto block p-1 mt-8 rounded-md bg-pink-500`}
            >
              Confirmar
            </button>
          ) : (
            <button
              disabled
              className="mb-4 w-4/5 mx-auto flex opacity-50 justify-center items-center p-1 mt-8 rounded-md bg-pink-500 "
            >
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
              loading...
            </button>
          )}
          {message.status && <MessageComponent {...message} />}
        </>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default ScreenSchedule;
