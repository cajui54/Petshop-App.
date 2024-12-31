"use client";
import React from "react";
import { signInWithGoogle } from "../_actions/auth/signin-use";
import SVG_Google from "./svg-google";

const ButtonRegisterForm = async () => {
  return (
    <div className="w-4/5 my-10 mx-auto">
      <p className="text-white text-sm mb-3"></p>
      <form action={async () => await signInWithGoogle("/register")}>
        <button className="p-2 rounded-lg text-white w-full flex justify-center items-center">
          <SVG_Google />
          <span className="underline">Registre-se com o google.</span>
        </button>
      </form>
    </div>
  );
};

export default ButtonRegisterForm;
