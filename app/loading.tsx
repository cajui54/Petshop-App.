import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingPage = () => {
  return (
    <div className="w-full h-full flex-col flex justify-center items-center">
      <AiOutlineLoading3Quarters className="text-4xl text-pink-500 animate-spin" />
      <h2>Carregando...</h2>
    </div>
  );
};

export default LoadingPage;
