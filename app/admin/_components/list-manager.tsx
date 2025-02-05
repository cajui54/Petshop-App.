"use client";
import { months } from "@/app/_utils/calendary";
import {
  addZeroNumber,
  formatDateBr,
  getDateToday,
} from "@/app/_utils/format-date";
import React, { Suspense, useState } from "react";
import ShowClients from "./show-clients";
import SkeletonItem from "@/app/client/_components/skeleton-item";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

export interface ManagerDate {
  month: string;
  dateFull: string;
  today: number;
}

const ListManager = () => {
  const dateSystem = new Date();
  const [indexMonth, setIndexMonth] = useState<number>(dateSystem.getMonth());
  const [dateManager, setDateManager] = useState<ManagerDate>({
    month: months[dateSystem.getMonth()].month,
    dateFull: getDateToday(),
    today: Number(getDateToday().split("/")[0]),
  });

  const handleBeforeDate = () => {
    if (indexMonth >= 0) {
      if (dateManager.today > 0) {
        const _day = addZeroNumber(dateManager.today.toString());
        const _month = dateManager.dateFull.split("/")[1];
        const _year = dateManager.dateFull.split("/")[2];
        const getDateDinamic = `${_day}/${_month}/${_year}`;

        setDateManager((prevState) => ({
          ...prevState,
          dateFull: getDateDinamic,
          today: Number(dateManager.today) - 1,
        }));
      } else {
        const updateIndex = indexMonth > 0 ? indexMonth - 1 : 0;
        const getLastDayOfMonth = Math.max(...months[updateIndex].days);
        const getMonth = months[updateIndex].number;
        const newDate = `${addZeroNumber(getLastDayOfMonth.toString())}/${addZeroNumber((getMonth + 1).toString())}/${dateSystem.getFullYear()}`;

        setDateManager({
          month: months[updateIndex].month,
          dateFull: newDate,
          today: getLastDayOfMonth,
        });
        setIndexMonth(updateIndex);
      }
    }
  };

  const handleNextDate = () => {
    const getLastDayOfMonth = Math.max(...months[indexMonth].days);

    if (indexMonth <= 11) {
      if (dateManager.today > getLastDayOfMonth) {
        const getDay = months[indexMonth + 1].days[0];
        const getMonth = months[indexMonth + 1].number + 1;
        const newDate = `${addZeroNumber(getDay.toString())}/${addZeroNumber(
          getMonth.toString(),
        )}/${dateSystem.getFullYear()}`;

        setIndexMonth((prevState) => prevState + 1);
        setDateManager((prevState) => ({
          ...prevState,
          month: months[indexMonth + 1].month,
          dateFull: newDate,
          today: 1,
        }));
      } else if (dateManager.today <= getLastDayOfMonth) {
        const _day = addZeroNumber(dateManager.today.toString());
        const _month = dateManager.dateFull.split("/")[1];
        const _year = dateManager.dateFull.split("/")[2];
        const getDateDinamic = `${_day}/${_month}/${_year}`;

        setDateManager((prevState) => ({
          ...prevState,
          dateFull: getDateDinamic,
          today: Number(dateManager.today) + 1,
        }));
      }
    }
  };
  return (
    <div>
      <div className="mt-11">
        <div className="mx-auto flex w-[400px] items-center justify-center">
          <button
            onClick={handleBeforeDate}
            className="mr-4 rounded-md bg-pink-600 p-1 text-2xl"
          >
            <MdArrowLeft />
          </button>

          <div>
            <h2 className="text-center text-4xl font-black text-pink-500">
              {dateManager.month}
            </h2>
            <p className="text-center text-2xl tracking-widest">
              {dateManager.dateFull}
            </p>
          </div>

          <button
            onClick={handleNextDate}
            className="ml-4 rounded-md bg-pink-600 p-1 text-2xl"
          >
            <MdArrowRight />
          </button>
        </div>

        <Suspense fallback={<SkeletonItem />}>
          <ShowClients date={dateManager.dateFull} />
        </Suspense>
      </div>
    </div>
  );
};

export default ListManager;
