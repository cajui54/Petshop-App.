import Link from "next/link";
import React from "react";
import { TiArrowBackOutline } from "react-icons/ti";

const ButtonBackHome = () => {
  return (
    <Link
      href="/"
      className="flex justify-center items-center w-28 text-center py-1 mt-6 rounded-md bg-emerald-500"
    >
      <TiArrowBackOutline className="text-2xl text-white" />
      Voltar
    </Link>
  );
};

export default ButtonBackHome;
