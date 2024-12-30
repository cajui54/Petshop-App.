import React from "react";
import { ImEye } from "react-icons/im";
import { LuEyeClosed } from "react-icons/lu";

interface ShowPasswordProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}
const ShowPassword = ({ showPassword, setShowPassword }: ShowPasswordProps) => {
  return (
    <div className="absolute [&>*]:cursor-pointer ease-in duration-300 [&>*]:hover:scale-125 [&>*]:hover:text-pink-500 right-8 -top-2 text-2xl">
      {!showPassword ? (
        <LuEyeClosed onClick={() => setShowPassword(true)} />
      ) : (
        <ImEye onClick={() => setShowPassword(false)} />
      )}
    </div>
  );
};

export default ShowPassword;
