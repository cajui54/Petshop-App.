"use client";
import React, { ChangeEvent, Suspense, useEffect, useState } from "react";
import { CalendaryProps } from "./schedule-manager";
import { getTimes } from "@/app/_data-access/time/get-times";
import { Time } from "@prisma/client";
import LoadingComponent from "@/app/_components/loading-component";
import { formatDateBr } from "@/app/_utils/format-date";

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
    <div className="w-4/5 relative lg:ml-0 sm:w-[400px] mx-auto p-3 bg-neutral-800 rounded-lg">
      <button
        onClick={() => setDateSchedule!({ date: null, time: undefined })}
        className="absolute -right-3 -top-5 bg-red-600 p-1 px-2 text-center rounded-full"
      >
        X
      </button>
      <p className="text-sm font-bold tracking-wider">
        Confira os horários disponíveis abaixo:
      </p>
      <label className="w-4/5 my-7 h-20 mx-auto rounded-lg relative bg-neutral-700 p-3 flex justify-center items-center">
        <Suspense fallback={<LoadingComponent />}>
          {times.length > 0 ? (
            <>
              <span className="absolute text-[12px] top-4 left-14">
                Selecione um horário
              </span>
              <select
                className="w-4/5 text-sm py-3 tracking-wide	mx-auto text-center bg-neutral-900 font-extrabold outline-none cursor-pointer rounded-full border border-pink-500"
                onChange={handleChange}
              >
                <option value="default" className="text-[2px]">
                  -
                </option>
                {times.map(({ time, id }) => (
                  <option value={time} key={id}>
                    {time}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <div className="text-center">
              <p className="text-[10px]">
                No momento não há horários diponíveis nessa data.
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
