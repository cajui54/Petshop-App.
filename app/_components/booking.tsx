import React from "react";

const BookingComponent = () => {
  return (
    <>
      <h2 className="ml-4 mt-4">Agendamento</h2>
      <div className="mx-auto mt-2 flex h-[100px] w-[95%] items-center justify-between rounded-lg border border-neutral-700 px-4">
        <div>
          <span className="rounded-lg bg-pink-500 p-1 font-bold">
            Confirmado
          </span>
          <h3 className="mt-2 text-2xl">Banho + Tosa</h3>
        </div>

        <div className="flex flex-col items-center border-l-2 border-neutral-700 px-3">
          <p className="text-sm">Fevereiro</p>
          <p className="text-3xl">07</p>
          <p className="text-sm">20:04</p>
        </div>
      </div>
    </>
  );
};

export default BookingComponent;
