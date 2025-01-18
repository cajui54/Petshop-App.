import React from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const LoadingComponent = () => {
  return (
    <div className="w-4/5 flex items-center justify-center">
      <FaArrowRotateRight className="animate-spin text-pink-600" />
      <p className="ml-2">loading...</p>
    </div>
  );
};

export default LoadingComponent;
