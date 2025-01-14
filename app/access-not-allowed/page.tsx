import React from "react";
import ButtonBackHome from "../_components/button-back-home";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const AccessNotAllowedPage = () => {
  return (
    <div className="bg_image_pug_sad h-full w-full flex flex-col justify-center items-start">
      <div className="w-4/5 bg-gray-300 p-3 rounded-md sm:w-[500px] mx-auto flex items-center justify-center flex-col">
        <MdOutlineReportGmailerrorred className="text-9xl text-red-600" />
        <h2 className="text-3xl text-neutral-950 font-semibold">
          Acesso não permitido
        </h2>
        <p className="text-neutral-800 text-1xl">Ocorreu um erro inesperado!</p>
        <ButtonBackHome />
      </div>
    </div>
  );
};

export default AccessNotAllowedPage;
