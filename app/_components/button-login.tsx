"use client";
import React from "react";
import SVG_Google from "./svg-google";
import { signInWithGoogle } from "../_actions/auth/signin-use";

const ButtonLogin = () => {
  return (
    <div className="[&>*]:py-1 [&>*]:w-4/5 [&>*]: [&>*]:rounded-lg w-4/5 mx-auto h-16 flex flex-col justify-center items-center">
      <button
        onClick={async () => await signInWithGoogle("/auth")}
        className="flex items-center justify-center opacity-50 hover:opacity-100 w-4/5 bg-neutral-950"
      >
        <SVG_Google />
        Login com o google
      </button>
    </div>
  );
};

export default ButtonLogin;
