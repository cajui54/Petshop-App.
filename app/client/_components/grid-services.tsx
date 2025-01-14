import TitlesContainer from "@/app/_components/titles-container";
import React, { Suspense } from "react";
import { getServices } from "@/app/_data-access/service/get-services";
import SkeletonItem from "./skeleton-item";
import ContainerServices from "./container-services";
import { IService } from "@/app/_interfaces/service";

const GridServices = async ({ id }: { id: string }) => {
  const services = await getServices();
  const datasService = services.map((service): IService => {
    return { ...service, price: Number(service.price) };
  });

  return (
    <div className="w-[95%] mt-28 m-auto p-2 h-80">
      <TitlesContainer
        title="Preços e Serviços"
        subtile="Selecione um ou mais serviço"
      />

      <Suspense fallback={<SkeletonItem />}>
        <ContainerServices services={datasService} id={id} />
      </Suspense>
    </div>
  );
};

export default GridServices;
