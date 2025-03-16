"use client";
import { loginSystem } from "@/app/_actions/auth/login-system-user";
import {
  loginSystemSchema,
  LoginSystemSchema,
} from "@/app/_actions/auth/login-system-user/schema";
import ButtonsContainer from "@/app/_components/buttons-container";
import {
  IconInput,
  InfoErrorInput,
  Input,
  InputAsterist,
  InputContainer,
  LabelInput,
  SpanInput,
} from "@/app/_components/input-component";
import MessageComponent from "@/app/_components/message";
import ShowPassword from "@/app/_components/show-password";
import { IMessage } from "@/app/register/_components/form-register-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { flattenValidationErrors } from "next-safe-action";
import { useAction } from "next-safe-action/hooks";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";

const FormLogin = ({ email }: { email: string }) => {
  const [message, setMessage] = useState<IMessage>({
    status: false,
    content: "",
    type: "",
  });
  const { execute: executeLoginSystem } = useAction(loginSystem, {
    onError: ({ error: { validationErrors } }) => {
      const flatternedErrors = flattenValidationErrors(validationErrors);

      setMessage({
        status: true,
        type: "error",
        content: `- ${flatternedErrors.formErrors[0]}`,
      });
    },
    onSuccess: () => {
      setMessage({
        status: true,
        content: "Efetuando o login com sucesso!",
        type: "success",
      });
    },
  });
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<LoginSystemSchema>({
    defaultValues: { email, password: "" },
    resolver: zodResolver(loginSystemSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginSystemSchema> = async (data) => {
    executeLoginSystem(data);
  };
  useEffect(() => {
    setFocus("password");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-4/5">
      <InputContainer>
        <LabelInput>
          <SpanInput>email</SpanInput>
          <IconInput Icon={MdOutlineMailOutline} />

          <Input>
            <input
              className="w-[90%] rounded-lg border border-neutral-400 bg-neutral-800 py-5 pl-9 text-2xl font-extralight tracking-wide text-gray-300 placeholder:text-lg focus:border-pink-500 focus:bg-neutral-700"
              type="email"
              {...register("email", { required: true })}
              placeholder="example@gmail.com"
            />
          </Input>
          <InputAsterist />
        </LabelInput>
        {errors.email && (
          <InfoErrorInput>{errors.email.message}</InfoErrorInput>
        )}
      </InputContainer>

      <InputContainer>
        <LabelInput>
          <SpanInput>senha</SpanInput>
          <IconInput Icon={MdOutlineMailOutline} />

          <Input>
            <input
              className="w-[90%] rounded-lg border border-neutral-400 bg-neutral-800 py-5 pl-9 text-2xl font-extralight tracking-wide text-gray-300 placeholder:text-lg focus:border-pink-500 focus:bg-neutral-700"
              type={!showPassword ? "password" : "text"}
              {...register("password", { required: true })}
              placeholder="* * * * * *"
            />
          </Input>
          <ShowPassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <InputAsterist />
        </LabelInput>
        {errors.password && (
          <InfoErrorInput>{errors.password.message}</InfoErrorInput>
        )}
      </InputContainer>

      <ButtonsContainer>
        <button disabled={isSubmitting} type="submit" className="bg-pink-600">
          {isSubmitting ? (
            <div className="flex">
              <BsArrowRepeat className="mr-2 animate-spin text-2xl" />
              <span>Carregando...</span>
            </div>
          ) : (
            <span>Entrar</span>
          )}
        </button>
        <button type="reset" className="mt-4 bg-neutral-800">
          Cancelar
        </button>
      </ButtonsContainer>

      {message.status && <MessageComponent {...message} />}
    </form>
  );
};

export default FormLogin;
