"use client";
import ButtonsContainer from "@/app/_components/buttons-container";
import {
  IconInput,
  Input,
  InputContainer,
  LabelInput,
  SpanInput,
} from "@/app/_components/input-component";
import ShowPassword from "@/app/_components/show-password";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form className="w-4/5 mx-auto">
      <InputContainer>
        <LabelInput>
          <SpanInput>email</SpanInput>
          <IconInput Icon={MdOutlineMailOutline} />

          <Input>
            <input
              className="focus:border-pink-500 bg-neutral-800 placeholder:text-lg text-gray-300 focus:bg-neutral-700 font-extralight  text-2xl tracking-wide   py-5 w-[90%] border pl-9 border-neutral-400 rounded-lg"
              type="email"
              placeholder="example@gmail.com"
            />
          </Input>
        </LabelInput>
      </InputContainer>

      <InputContainer>
        <LabelInput>
          <SpanInput>senha</SpanInput>
          <IconInput Icon={MdOutlineMailOutline} />

          <Input>
            <input
              className="focus:border-pink-500  bg-neutral-800 placeholder:text-lg text-gray-300 focus:bg-neutral-700 font-extralight  text-2xl tracking-wide   py-5 w-[90%] border pl-9 border-neutral-400 rounded-lg"
              type={!showPassword ? "password" : "text"}
              placeholder="* * * * * *"
            />
          </Input>
          <ShowPassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </LabelInput>
      </InputContainer>

      <ButtonsContainer>
        <button className=" bg-pink-600">Entrar</button>
        <button className="bg-neutral-800 mt-4">Cancelar</button>
      </ButtonsContainer>
    </form>
  );
};

export default FormLogin;
