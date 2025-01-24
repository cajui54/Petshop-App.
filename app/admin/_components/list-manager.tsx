"use client";
import { months } from "@/app/_utils/calendary";
import { getDateToday } from "@/app/_utils/format-date";
import React, { Suspense, useState } from "react";
import ShowClients from "./show-clients";
import SkeletonItem from "@/app/client/_components/skeleton-item";

export interface ManagerDate {
  month: string;
  dateFull: string;
}

const ListManager = () => {
  const dateSystem = new Date();

  const [dateManager, setDateManager] = useState<ManagerDate>({
    month: months[dateSystem.getMonth()].month,
    dateFull: getDateToday(),
  });

  return (
    <div>
      <div className="mt-11">
        <div>
          <h2 className="text-center text-4xl text-pink-500 font-black">
            {dateManager.month}
          </h2>
          <p className="text-center text-2xl tracking-widest">
            {dateManager.dateFull}
          </p>
        </div>
        <Suspense fallback={<SkeletonItem />}>
          <ShowClients date={dateManager.dateFull} />
        </Suspense>
      </div>
    </div>
  );
};

export default ListManager;
