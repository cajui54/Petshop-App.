"use client";
import React, { ChangeEvent } from "react";
import { CalendaryProps } from "./schedule-manager";

const ScheduleTime = ({ setDateSchedule }: CalendaryProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDateSchedule!((prev) => ({ ...prev, time: event.target.value }));
  };
  return (
    <div className="w-4/5 sm:w-[400px] mx-auto p-3 bg-neutral-800 rounded-lg">
      <p className="font-bold tracking-wider">selecione um horários</p>
      <label className="w-4/5 my-7 h-20 mx-auto rounded-lg relative bg-neutral-700 p-3 flex justify-center items-center">
        <span className="top-4 tracking-wide	 left-14 text-pink-500 text-[12px] absolute">
          Horários disponíveis:
        </span>
        <select
          name=""
          className="w-4/5 py-3 tracking-wide	mx-auto text-center bg-neutral-900 font-extrabold outline-none cursor-pointer rounded-full border border-pink-500"
          onChange={handleChange}
        >
          <option value={"8:00"}>8:00</option>
          <option value={"8:30"}>8:30</option>
          <option value={"9:00"}>9:00</option>
        </select>
      </label>
    </div>
  );
};

export default ScheduleTime;
