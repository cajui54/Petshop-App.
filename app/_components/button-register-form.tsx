import React from "react";
import { signInWithGoogle } from "../_actions/auth/signin-use";
import SVG_Google from "./svg-google";

const ButtonRegisterForm = async () => {
  return (
    <div className="w-4/5 my-10 mx-auto">
      <p className="text-white text-xl mb-3">Já é cadastrado?</p>
      <form action={signInWithGoogle}>
        <button className="bg-pink-500 p-2 rounded-lg text-white w-full flex justify-center items-center">
          <SVG_Google />
          <span>Registre-se com o google.</span>
        </button>
      </form>
    </div>
  );
};

export default ButtonRegisterForm;
