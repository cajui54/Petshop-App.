import React, { useMemo, useState } from "react";
import { months } from "@/app/_utils/calendary";
import { CalendaryProps } from "./schedule-manager";

const CalendarySchedule = ({ setDateSchedule }: CalendaryProps) => {
  const date = new Date();
  const [monthIndex, setMonthIndex] = useState<number>(date.getMonth());
  const monthsDate = useMemo(() => months, []);

  const handleDateTime = (day: number, _month: number) => {
    const _date = `${date.getFullYear()}/${day}/${_month + 1}`;
    setDateSchedule!({ date: _date });
  };

  return (
    <div className="bg-neutral-800 py-2 w-4/5 sm:w-[400px] rounded-lg my-9 mx-auto">
      <div className="text-center text-2xl ">
        {monthsDate[monthIndex].month}
      </div>
      <div className="w-4/5 sm:w-[400px] mx-auto grid grid-cols-7 text-center">
        {monthsDate[monthIndex].days.map((day, index) => {
          return day >= date.getDate() ? (
            <span
              key={index}
              className={`${
                day === date.getDate() && "!bg-pink-600 !text-white"
              } cursor-pointer hover:scale-125 hover:text-pink-500 hover:transition-color hover:ease-in-out hover:font-bold p-1 rounded-lg`}
              onClick={() => handleDateTime(day, monthsDate[monthIndex].number)}
            >
              {day}
            </span>
          ) : (
            <span key={index} className="text-neutral-600">
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarySchedule;
