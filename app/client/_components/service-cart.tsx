"use client";
import { IService } from "@/app/_interfaces/service";
import { formatMoney } from "@/app/_utils/format-money";
import useManagerStorage from "@/app/_hooks/useManagerStorage";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";

interface ServiceCartProps {
  cartBuy: IService[];
  setCartBuy: React.Dispatch<React.SetStateAction<IService[]>>;
}

const ServiceCart = ({ cartBuy, setCartBuy }: ServiceCartProps) => {
  const { saveInStorage } = useManagerStorage();
  const [callRedirect, setCallRedirect] = useState(false);

  const handleCartBuy = () => {
    saveInStorage({ key: "services", value: cartBuy });
    setCallRedirect(true);
  };
  useEffect(() => {
    const handleNextPage = () => {
      setCallRedirect(false);
      redirect("/client/41759b20-70ea-46d3-92ec-295fc6fa3c11/schedule");
    };
    callRedirect && handleNextPage();
  }, [callRedirect]);

  const calculateTotal = (): number => {
    return cartBuy
      .map((item) => Number(item.price))
      .reduce((acc, curr) => acc + curr, 0);
  };
  const removeService = (id: string): void => {
    const upadateList = cartBuy.filter((item) => {
      if (!(item.id === id)) {
        return item;
      }
      return;
    });
    setCartBuy(upadateList);
  };
  return (
    <div className="p-2 w-[95%] sm:w-[600px] relative bottom-0 mx-auto mt-8">
      <div className="py-5 bg-neutral-900 rounded-full flex items-center justify-between">
        <span className="text-2xl font-bold">Total:</span>
        <div className="text-4xl text-pink-500">
          {cartBuy.length > 0 ? (
            <span>{formatMoney(calculateTotal())}</span>
          ) : (
            <span>R$ 0:00</span>
          )}
        </div>
      </div>
      <div className="customScrollbar w-[95%] overflow-auto bg-neutral-900 rounded-xl p-4 h-36 mx-auto my-4">
        {cartBuy.length > 0 ? (
          cartBuy.map((cart) => (
            <div
              key={cart.id}
              className="flex mt-2 justify-between items-center bg-black w-[95%] p-2 rounded-lg border border-pink-500"
            >
              <span className="font-black">{cart.name}</span>
              <div className="flex min-w-16 rounded-xl p-1 bg-neutral-950">
                <span className="mr-2 font-bold">
                  {formatMoney(Number(cart.price))}
                </span>
                <button
                  onClick={() => removeService(cart.id)}
                  className="bg-red-700 rounded-lg p-1"
                >
                  <CiSquareRemove />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-8">
            Não há serviços adicionados ainda!
          </p>
        )}
      </div>
      <button
        className={`${
          cartBuy.length > 0 ? "opacity-100" : "opacity-55"
        } bg-pink-400 my-2 rounded-lg py-1 w-4/5 mx-auto block`}
        //disabled={cartBuy.length === 0}
        onClick={handleCartBuy}
      >
        Confirmar
      </button>
    </div>
  );
};

export default ServiceCart;
