"use client";
import getScheduleDto, {
  ScheduleDto,
} from "@/app/_data-access/schedule/get-schedule";
import {
  convertTimeToNumber,
  getDateToday,
  getDateTodaySeparate,
  getTimeNow,
  separateDate,
} from "@/app/_utils/format-date";
import { formatMoney } from "@/app/_utils/format-money";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { GiDogBowl, GiMoneyStack } from "react-icons/gi";
import { PiClockUserFill } from "react-icons/pi";
import { SiPug } from "react-icons/si";
import SkeletonClient from "./skeleton-client";
import { deleteSchedule } from "@/app/_actions/shedule/delete-schedule";
interface ShowClientsProps {
  date: string;
}
interface ManagerCard {
  startTime: null | string;
  endTime: null | string;
  indexs: number[];
  ids: string[];
}
interface ScheduleManager {
  startTime: string;
  endTime: string | null;
  index: number;
}
const ShowClients = ({ date }: ShowClientsProps) => {
  const _dateNow = new Date();
  const [datas, setDatas] = useState<ScheduleDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [managerCard, setManagerCard] = useState<ManagerCard>({
    startTime: null,
    endTime: null,
    indexs: [],
    ids: [],
  });
  const [scheduleManager, setScheduleManager] = useState<ScheduleManager[]>([]);

  useEffect(() => {
    const requestSchedule = async () => {
      try {
        setIsLoading(true);
        const _getDateToday = getDateTodaySeparate();
        const _hour = _dateNow.getHours();
        const _minutes = _dateNow.getMinutes();
        const clients = await getScheduleDto(date);

        const _ids = clients
          .filter((client) => {
            if (
              Number(separateDate(client.date, client.time).month) <
              Number(_getDateToday.month)
            ) {
              return client.id;
            } else if (
              Number(separateDate(client.date, client.time).month) ===
                Number(_getDateToday.month) &&
              Number(separateDate(client.date, client.time).day) <
                Number(_getDateToday.day)
            ) {
              return client.id;
            } else if (client.date === getDateToday()) {
              if (
                separateDate(client.date, client.time).hour < _hour &&
                separateDate(client.date, client.time).minute < _minutes
              ) {
                return client.id;
              }
            }
          })
          .map((client) => client.id);
        setManagerCard((prevState) => ({ ...prevState, ids: _ids }));

        setDatas(clients);
      } catch (error) {
        alert(`Ocorreu um erro inesperado: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    requestSchedule();
  }, [date]);

  const handleFinish = (index: number) => {
    const timeNow = getTimeNow();

    const findIndex = scheduleManager.map((schedule) => {
      if (schedule.index === index) {
        return {
          ...schedule,
          endTime: timeNow,
        };
      }
      return schedule;
    });

    setScheduleManager(findIndex);
  };
  const handleStartTime = (_index: number) => {
    const timeNow = getTimeNow();
    const findIndex = scheduleManager.find(
      (schedule) => schedule.index === _index,
    );

    if (!findIndex) {
      setScheduleManager((prevState) => [
        ...prevState,
        { startTime: timeNow, index: _index, endTime: null },
      ]);
    }
    return;
  };
  const isFinally = (index: number): boolean => {
    const findSchedule = scheduleManager.find(
      (schedule) => schedule.index === index,
    );

    return findSchedule?.endTime ? true : false;
  };
  const checkIfThereId = (id: string): boolean => {
    return !managerCard.ids.includes(id);
  };
  const getStartOrEndTime = (key: "startTime" | "endTime", index: number) => {
    return scheduleManager.find((schedule) => schedule.index === index)?.[key];
  };
  const handleDeleteSchedule = (id: string) => {
    if (
      window.confirm("Após à confirmação a deleção não podera ser revertida!")
    ) {
      deleteSchedule(id);
    }
  };
  return (
    <div
      className={`customScrollbar mx-auto my-8 h-[500px] w-full overflow-auto rounded-2xl bg-neutral-950 py-2 sm:w-[600px]`}
    >
      {!isLoading ? (
        <>
          {datas.length > 0 ? (
            datas
              .sort(
                (a, b) =>
                  convertTimeToNumber(a.time) - convertTimeToNumber(b.time),
              )
              .map((client, index) => (
                <div
                  key={client.id}
                  className={`${
                    checkIfThereId(client.id) ? "opacity-100" : "opacity-45"
                  } ${isFinally(index) && "opacity-45"} mx-auto my-6 flex h-[250px] w-[95%] items-center rounded-xl border border-pink-500 bg-neutral-800`}
                >
                  <div className="mx-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-pink-500 sm:h-[80px] sm:w-[80px]">
                    <Image
                      src={client.user.image}
                      alt={`profile image ${client.user.name}`}
                      width={50}
                      height={50}
                      className="h-[50px] w-[50px] rounded-full sm:h-[70px] sm:w-[70px]"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between pr-5">
                      <h2 className="mb-1 text-xl font-semibold tracking-wider text-white">
                        {client.user.name}
                      </h2>

                      <p className="text-2xl text-pink-500">{client.service}</p>
                    </div>
                    <ul className="clientList pr-2">
                      <li>
                        <span>
                          <GiMoneyStack className="mr-1 text-2xl text-green-500" />
                          Preço:
                        </span>
                        <span>{formatMoney(client.price)}</span>
                      </li>
                      <li className="clientList">
                        <span>
                          <PiClockUserFill className="mr-1 text-2xl text-green-500" />
                          Horário:
                        </span>
                        <span>{client.time}</span>
                      </li>

                      <li className="flex h-[70px] items-center justify-between">
                        <p className="flexRowsCenter">
                          <GiDogBowl className="mr-2 text-2xl text-green-500" />
                          Ações:
                        </p>
                        <div className="flex w-[120px] items-center justify-center">
                          <button
                            onClick={() => handleStartTime(index)}
                            className="flex flex-col items-center text-sm"
                          >
                            <CiSquareCheck className="rounded-md bg-blue-500 p-1 text-2xl" />
                            <span className="text-[7px]">Iniciar</span>
                          </button>

                          <button
                            disabled={
                              getStartOrEndTime("endTime", index) ? true : false
                            }
                            onClick={() => handleFinish(index)}
                            className="mx-2 flex flex-col items-center justify-center rounded-lg text-sm"
                          >
                            <CiSquareCheck className="rounded-md bg-green-500 p-1 text-2xl" />
                            <span className="text-[7px]">Finalizar</span>
                          </button>

                          <button
                            onClick={() => handleDeleteSchedule(client.id)}
                            className="flex flex-col items-center justify-center rounded-lg text-sm"
                          >
                            <CiSquareCheck className="rounded-md bg-red-500 p-1 text-2xl" />
                            <span className="text-[7px]">Excluir</span>
                          </button>
                        </div>
                      </li>
                    </ul>

                    {scheduleManager.find(
                      (schedule) => schedule.index === index,
                    ) && (
                      <div className="my-2 flex h-6 w-[95%] items-center justify-around rounded-lg bg-neutral-900">
                        <p>
                          <span>Início:</span>
                          <span className="font-semibold text-pink-500">
                            {getStartOrEndTime("startTime", index)}
                          </span>
                        </p>

                        <p>
                          <span>Finalizado as </span>
                          <span className="font-semibold text-pink-500">
                            {getStartOrEndTime("endTime", index)}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <div className="mx-auto mt-8 w-4/5 py-7">
              <SiPug className="mx-auto block rounded-full p-2 text-[80px] text-pink-500" />

              <p className="text-center text-2xl">Não há agendamentos</p>
              <p className="-mt-2 text-center text-2xl">
                para data
                <span className="font-semibold text-pink-500"> {date}</span>
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          <SkeletonClient />
          <SkeletonClient />
        </>
      )}
    </div>
  );
};

export default ShowClients;
