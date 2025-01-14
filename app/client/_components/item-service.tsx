"use client";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import Image from "next/image";
import { formatMoney } from "@/app/_utils/format-money";
import { IService } from "@/app/_interfaces/service";
import { PiDogDuotone } from "react-icons/pi";
import { TbDogBowl } from "react-icons/tb";
import useReduceImages from "@/app/_hooks/useReduceImages";

interface ItemServiceProps {
  service: IService;
  setCartBuy: React.Dispatch<React.SetStateAction<IService[]>>;
}
const ItemService = ({ service, setCartBuy }: ItemServiceProps) => {
  const { setImage } = useReduceImages();

  const handleSetCart = (_service: IService) => {
    setCartBuy((prevState) => {
      const getId = prevState.map(({ id }) => id);
      if (getId.includes(_service.id)) {
        return prevState;
      }

      return [...prevState, service];
    });
  };
  return (
    <div className="w-[95%]  sm:w-[500px] flex items-center p-2 justify-between h-28 mx-auto mt-8 rounded-2xl border border-pink-500 ">
      <div className="h-24  overflow-hidden w-24 bg-pink-500 border border-white rounded-full">
        {service.image ? (
          <Image
            src={setImage({ type: service.name }).image}
            className="w-full h-full"
            width={100}
            height={100}
            alt={`Dog ${service.name}`}
          />
        ) : (
          <div className="flex w-full h-full flex-col justify-center items-center">
            <PiDogDuotone className="text-4xl" />
            <TbDogBowl className="text-2xl" />
          </div>
        )}
      </div>
      <div className="grow p-3 h-full">
        <h2 className="text-pink-500 font-black text-4xl">{service.name}</h2>
        <span className="font-semibold ml-5">
          {formatMoney(Number(service.price))}
        </span>
      </div>
      <div
        onClick={() => handleSetCart(service)}
        className="h-16 cursor-pointer opacity-50 flex justify-center items-center flex-col w-16 rounded-full hover:opacity-100 bg-pink-500"
      >
        <FaRegPlusSquare className="text-3xl" />
        <span className="text-[8px] mt-1">Adicionar</span>
      </div>
    </div>
  );
};

export default ItemService;
