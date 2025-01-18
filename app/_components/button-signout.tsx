"use client";
import React from "react";
import { HeaderLogoText } from "./header";
import { SiPug } from "react-icons/si";
import { signOutOfGoogle } from "../_actions/auth/signout-use";

const ButtonSignout = () => {
  return (
    <div
      onClick={async () => await signOutOfGoogle()}
      className="mr-10 flex flex-col cursor-pointer justify-center items-center"
    >
      <SiPug className="text-3xl hover:scale-150 transition-all delay-300" />
      <HeaderLogoText>Sair.</HeaderLogoText>
    </div>
  );
};

export default ButtonSignout;
