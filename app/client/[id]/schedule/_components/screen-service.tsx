"use client";
import { IService } from "@/app/_interfaces/service";
import { formatMoney } from "@/app/_utils/format-money";
import { iconManager } from "@/app/_utils/iconManager";
import useManagerStorage from "@/app/_hooks/useManagerStorage";
import React from "react";
import LoadingComponent from "@/app/_components/loading-component";

const ScreenService = () => {
  const { getStorageByKey } = useManagerStorage();
  const services: IService[] | null = getStorageByKey("services");

  return (
    <div className="w-[95%] sm:w-[400px] py-1 mx-auto my-6 bg-neutral-800 rounded-lg">
      <h2 className="my-4 w-4/5 mx-auto text-2xl font-semibold tracking-wide">
        Serviços solicitados:
      </h2>
      {services ? (
        <div>
          {services.map((service) => {
            const Icon = iconManager(service.name).icon;
            return (
              <div
                key={service.id}
                className="bg-neutral-950 w-4/5 py-2 mx-auto rounded-lg mb-3 border border-pink-600 flex justify-around items-center"
              >
                <Icon className="text-3xl text-pink-600" />
                <span className="text-neutral-200 text-xl">{service.name}</span>
                <span>{formatMoney(service.price)}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-4/5 flex justify-center flex-col items-center">
          <LoadingComponent />
        </div>
      )}
    </div>
  );
};

export default ScreenService;
