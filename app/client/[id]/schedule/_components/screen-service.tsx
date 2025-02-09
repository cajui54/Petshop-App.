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
    <div className="mx-auto my-6 w-[95%] overflow-hidden rounded-lg bg-neutral-800 sm:w-[400px]">
      <div className="h-full">
        <h2 className="mx-auto my-4 w-4/5 text-2xl font-semibold tracking-wide">
          Serviços solicitados:
        </h2>
        {services ? (
          <div>
            {services.map((service) => {
              const Icon = iconManager(service.name).icon;
              return (
                <div
                  key={service.id}
                  className="mx-auto mb-3 flex w-4/5 items-center justify-around rounded-lg border border-pink-600 bg-neutral-950 py-2"
                >
                  <Icon className="text-3xl text-pink-600" />
                  <span className="text-xl text-neutral-200">
                    {service.name}
                  </span>
                  <span>{formatMoney(service.price)}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex h-4/5 flex-col items-center justify-center">
            <LoadingComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenService;
