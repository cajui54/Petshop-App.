"use client";
import React, { ChangeEvent, Suspense, useEffect, useState } from "react";
import { CalendaryProps } from "./schedule-manager";
import { getTimes } from "@/app/_data-access/time/get-times";
import { Time } from "@prisma/client";
import LoadingComponent from "@/app/_components/loading-component";
import { convertTimeToNumber, formatDateBr } from "@/app/_utils/format-date";
import { IoWarningSharp } from "react-icons/io5";

const ScheduleTime = ({ setDateSchedule, dateSchedule }: CalendaryProps) => {
  const date = new Date();
  const [times, setTimes] = useState<Time[] | []>([]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "default") {
      setDateSchedule!((prev) => ({ ...prev, time: event.target.value }));
    } else {
      setDateSchedule!((prev) => ({ ...prev, time: undefined }));
    }
  };

  useEffect(() => {
    const requestTimes = async () => {
      const newDate =
        dateSchedule?.date ||
        `${date.getFullYear()}/${date.getDay()}/${date.getDate() + 1}`;
      const _date = formatDateBr(newDate);

      const _times = await getTimes(_date);

      setTimes(_times);
    };
    requestTimes();
  }, [dateSchedule?.date]);

  return (
    <div className="relative mx-auto w-4/5 rounded-lg bg-neutral-800 p-3 sm:w-[400px] lg:ml-0">
      <button
        onClick={() => setDateSchedule!({ date: null, time: undefined })}
        className="absolute -right-3 -top-5 rounded-full bg-red-600 p-1 px-2 text-center"
      >
        X
      </button>
      <p className="text-sm font-bold tracking-wider">
        Confira os horários disponíveis abaixo:
      </p>
      <label className="relative mx-auto my-7 flex h-20 w-4/5 items-center justify-center rounded-lg bg-neutral-700 p-3">
        <Suspense fallback={<LoadingComponent />}>
          {times.length > 0 ? (
            <>
              <span className="absolute left-14 top-4 text-[12px]">
                Selecione um horário
              </span>
              <select
                className="mx-auto w-4/5 cursor-pointer rounded-full border border-pink-500 bg-neutral-900 py-3 text-center text-sm font-extrabold tracking-wide outline-none"
                onChange={handleChange}
              >
                <option value="default" className="text-[2px]">
                  -
                </option>
                {times
                  .sort(
                    (a, b) =>
                      convertTimeToNumber(a.time) - convertTimeToNumber(b.time),
                  )
                  .map(({ time, id }) => (
                    <option value={time} key={id}>
                      {time}
                    </option>
                  ))}
              </select>
            </>
          ) : (
            <div className="w-full text-center">
              <p className="text-1xl flex items-center justify-center font-black">
                <IoWarningSharp className="mr-2 animate-pulse text-2xl text-yellow-500" />
                No momento
              </p>
              <p className="text-[10px]">
                não há horários disponíveis nessa data.
              </p>
              <p>Tente outra data diferente!</p>
            </div>
          )}
        </Suspense>
      </label>
    </div>
  );
};

export default ScheduleTime;
