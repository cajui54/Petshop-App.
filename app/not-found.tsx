import React from "react";

import { TbFaceIdError } from "react-icons/tb";
import { Metadata } from "next";
import ButtonBackHome from "./_components/button-back-home";

export const metadata: Metadata = {
  title: "Not Found / PetShop App.",
};

const NotFound = () => {
  return (
    <div className="bg_image_4pugs flex h-full justify-center items-center">
      <div className="w-4/5 bg-gradient-to-t from-45% from-black  to-transparent  py-4 rounded-xl sm:w-[500px] flex flex-col justify-center items-center">
        <TbFaceIdError className="mb-5 text-9xl text-red-600" />
        <p className="text-5xl font-semibold text-emerald-500">Erro 404</p>
        <h3 className="text-2xl text-gray-100">Page Not Found!</h3>
        <ButtonBackHome />
      </div>
    </div>
  );
};

export default NotFound;
