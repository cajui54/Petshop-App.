"use client";
import {
  AmountClient,
  getTotalClient,
} from "@/app/_data-access/amount-client/get-amout-client";
import { ContextCalenday } from "@/app/context/contextCalendary";
import React, { useContext, useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPlayerTime } from "react-icons/gi";
import { LuTimerReset } from "react-icons/lu";
import Skeleton from "./skeleton";

const ScreenAmountClient = () => {
  const { calendary } = useContext(ContextCalenday);
  const [scheduleManager, setScheduleManager] = useState<AmountClient>({
    amountSchedule: 0,
    timesAvailable: 0,
    totalClient: 0,
  });
  const [isLoadind, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const requestAmountClient = async () => {
      try {
        setIsLoading(true);
        const date = await getTotalClient();
        setScheduleManager(date);
      } catch (error) {
        alert(`Ocorreu um erro inesperado! ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    requestAmountClient();
  }, []);

  return (
    <div className="mx-auto mt-8 flex min-h-40 w-[94%] flex-col items-center rounded-md bg-neutral-950 py-2 sm:w-[600px]">
      {!isLoadind ? (
        <ul className="mx-auto w-4/5 [&>*]:mt-3 [&>*]:flex [&>*]:justify-between [&>*]:rounded-lg [&>*]:bg-neutral-800 [&>*]:px-4 [&>*]:py-3">
          <li>
            <span className="flex items-center">
              <FaPeopleGroup className="mr-3 block rounded-full bg-pink-400 p-1 text-3xl" />
              Clientes marcados:
            </span>
            <span className="text-2xl font-bold text-pink-400">
              {scheduleManager.amountSchedule}
            </span>
          </li>

          <li>
            <span className="flex items-center">
              <LuTimerReset className="mr-3 block rounded-full bg-pink-400 p-1 text-3xl" />
              Horários disponíveis:
            </span>
            <span className="text-2xl font-bold text-pink-400">
              {scheduleManager.timesAvailable}
            </span>
          </li>

          <li>
            <span className="flex items-center">
              <GiPlayerTime className="mr-3 block rounded-full bg-pink-400 p-1 text-3xl" />
              Capacidade Total:
            </span>
            <span className="text-2xl font-bold text-pink-400">
              {scheduleManager.totalClient}
            </span>
          </li>
        </ul>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default ScreenAmountClient;
