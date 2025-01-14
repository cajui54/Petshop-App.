"use client";
import { FaArrowRotateRight } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { PiUserFocus } from "react-icons/pi";
import { LiaPawSolid } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { ImEye } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  registerUserSchema,
  RegisterUserSchema,
} from "@/app/_actions/user/register/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOutOfGoogle } from "@/app/_actions/auth/signout-use";
import { useAction } from "next-safe-action/hooks";
import { registerUserAction } from "@/app/_actions/user/register";
import { flattenValidationErrors } from "next-safe-action";
import ShowPassword from "@/app/_components/show-password";
import MessageComponent from "@/app/_components/message";
export interface FormProps {
  name: string;
  email: string;
  image: string;
  type: "admin" | "user";
  isBloqued: boolean;
}
export interface IMessage {
  status: boolean;
  content: string;
  type: "success" | "error" | "";
}

const FormRegisterUser = (props: FormProps) => {
  const [message, setMessage] = useState<IMessage>({
    status: false,
    content: "",
    type: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: props,
  });
  const { execute: executeRegiterUser } = useAction(registerUserAction, {
    onError: ({ error: { validationErrors, serverError } }) => {
      const flatternedErrors = flattenValidationErrors(validationErrors);
      setMessage({
        status: true,
        content: serverError ?? flatternedErrors.formErrors[0],
        type: "error",
      });
    },
    onSuccess: () => {
      setMessage({
        status: true,
        content: "Usuário cadastrado com sucesso!",
        type: "success",
      });
    },
  });
  const onReset = async () => {
    reset();
    await signOutOfGoogle();
  };
  const onSubmit: SubmitHandler<RegisterUserSchema> = (data) => {
    executeRegiterUser(data);

    setTimeout(() => {
      setMessage({ status: false, content: "", type: "" });
    }, 3000);
    reset();
  };
  useEffect(() => {
    setFocus("password");
  }, []);
  return (
    <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="w-[90%] mx-auto pb-5">
        <legend className="text-gray-300 text-sm">
          Cadastre-se para ter acesso ao sistema:
        </legend>

        <div className="mt-10">
          <label className="relative">
            <span className="text-neutral-400 text-1xl absolute  left-2">
              nome:
            </span>
            <PiUserFocus className="absolute -top-2 left-2 text-neutral-300 text-2xl" />
            <input
              {...register("name", { required: true })}
              className="focus:border-pink-500 bg-neutral-800 placeholder:text-lg text-gray-300 focus:bg-neutral-700 font-extralight  text-2xl tracking-wide   py-5 w-[90%] border pl-9 border-neutral-400 rounded-lg"
              type="text"
              placeholder="Maria Silva"
            />
            <span className="relative -top-6 text-gray-500 left-3 text-2xl">
              *
            </span>
          </label>
          {errors.name && (
            <p className="text-red-600 mt-2 text-sm ml-2">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="mt-10">
          <label className="relative">
            <span className="text-neutral-400 text-1xl absolute  left-2">
              email:
            </span>
            <PiUserFocus className="absolute -top-2 left-2 text-neutral-300 text-2xl" />
            <input
              {...register("email", { required: true })}
              className="focus:border-pink-500 bg-neutral-800 placeholder:text-lg text-gray-300 focus:bg-neutral-700 font-extralight  text-2xl tracking-wide   py-5 w-[90%] border pl-9 border-neutral-400 rounded-lg"
              type="email"
              readOnly
              placeholder="example@gmail.com"
            />
            <span className="relative -top-6 text-gray-500 left-3 text-2xl">
              *
            </span>
          </label>
          {errors.email && (
            <p className="text-red-600 mt-2 text-sm ml-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mt-10">
          <label className="relative">
            <span className="text-neutral-400 text-1xl absolute  left-2">
              senha:
            </span>
            <PiUserFocus className="absolute -top-2 left-2 text-neutral-300 text-2xl" />
            <input
              {...register("password", { required: true })}
              className="focus:border-pink-500 bg-neutral-800 placeholder:text-lg text-gray-300 focus:bg-neutral-700 font-extralight  text-2xl tracking-wide   py-5 w-[90%] border pl-9 border-neutral-400 rounded-lg"
              type={!showPassword ? "password" : "text"}
              placeholder="******"
            />

            <ShowPassword
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <span className="relative -top-6 text-gray-500 left-3 text-2xl">
              *
            </span>
          </label>
          {errors.password && (
            <p className="text-red-600 mt-2 text-sm ml-2">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="w-[90%] my-6 h-20  flex flex-col [&>*]:flex [&>*]:items-center [&>*]:w-full [&>*]:justify-center [&>*]:opacity-75 [&>*]:hover:opacity-100 [&>*]:rounded-lg [&>*]:py-2 justify-center items-center">
          <button
            disabled={isSubmitting}
            className=" bg-pink-600"
            type="submit"
          >
            {!isSubmitting ? (
              <LiaPawSolid className="text-2xl mr-2" />
            ) : (
              <FaArrowRotateRight className="animate-spin text-2xl mr-2" />
            )}
            Cadastrar
          </button>
          <button
            onClick={onReset}
            type="reset"
            className="bg-neutral-800 mt-4"
          >
            <MdOutlineCancel className="text-2xl mr-2" />
            Cancelar
          </button>
        </div>
      </fieldset>
      {message.status && <MessageComponent {...message} />}
    </form>
  );
};

export default FormRegisterUser;
