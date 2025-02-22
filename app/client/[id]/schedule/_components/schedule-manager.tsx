"use client";
import TitlesContainer from "@/app/_components/titles-container";

import React, { Suspense, useState } from "react";
import CalendarySchedule from "./schedule-calendary";
import SkeletonItem from "@/app/client/_components/skeleton-item";
import ScheduleTime from "./schedule-time";
import ScreenSchedule from "./screen-schedule";

export interface DateSchedule {
  date: string | null;
  time?: string | undefined;
}
export interface CalendaryProps {
  dateSchedule?: DateSchedule;
  setDateSchedule?: React.Dispatch<React.SetStateAction<DateSchedule>>;
}
const ScheduleManager = () => {
  const [dateSchedule, setDateSchedule] = useState<DateSchedule>({
    date: null,
    time: undefined,
  });

  return (
    <div className="w-[95%] rounded-xl mx-auto">
      <TitlesContainer
        title="Agendamentos"
        subtile="Dias e Horários disponíveis"
      />

      <div className="lg:flex lg:justify-center lg:items-center lg:w-[90%] mx-auto">
        <CalendarySchedule setDateSchedule={setDateSchedule} />

        {dateSchedule.date && (
          <Suspense fallback={<SkeletonItem />}>
            <ScheduleTime
              setDateSchedule={setDateSchedule}
              dateSchedule={dateSchedule}
            />
          </Suspense>
        )}
        {dateSchedule.time && (
          <ScreenSchedule
            dateSchedule={dateSchedule}
            setDateSchedule={setDateSchedule}
          />
        )}
      </div>
    </div>
  );
};

export default ScheduleManager;
