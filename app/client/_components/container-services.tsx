"use client";
import React, { useState } from "react";
import ItemService from "./item-service";
import ServiceCart from "./service-cart";
import { IService } from "@/app/_interfaces/service";
import useManagerStorage from "@/app/_hooks/useManagerStorage";

interface ContainerServicesProps {
  services: IService[];
  id: string;
}
const ContainerServices = ({ services, id }: ContainerServicesProps) => {
  const { saveInStorage } = useManagerStorage();
  const [cartBuy, setCartBuy] = useState<IService[]>([]);

  saveInStorage({ key: "userId", value: id });
  return (
    <div className="pb-3 lg:flex">
      <div className="customScrollbar w-full max-h-[600px] overflow-auto">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.id}>
              <ItemService
                service={{ ...service, price: service.price }}
                setCartBuy={setCartBuy}
              />
            </div>
          ))
        ) : (
          <div className="w-4/5 p-3 text-center mt-28 sm:w-[400px] mx-auto">
            Não há serviços cadastrado!
          </div>
        )}
      </div>
      <ServiceCart cartBuy={cartBuy} setCartBuy={setCartBuy} />
    </div>
  );
};

export default ContainerServices;
