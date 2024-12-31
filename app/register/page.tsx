import React from "react";
import { getSessionAuth } from "../_data-access/auth-user/get-session";
import { IoPawOutline } from "react-icons/io5";
import {
  IconTitleComponent,
  SubtitleComponent,
  TitleComponent,
  TitlesWithLogo,
} from "../_components/titles-with-logo";
import FormRegisterUser from "./_components/form-register-user";

const RegisterPage = async () => {
  const session = await getSessionAuth();

  const data = {
    ...session,
    isBloqued: false,
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[90%] sm:w-[400px]  bg-neutral-900 rounded-lg border shadow-md shadow-pink-300 border-pink-500">
        <TitlesWithLogo>
          <IconTitleComponent>
            <IoPawOutline />
          </IconTitleComponent>
          <TitleComponent>Petshop App</TitleComponent>
          <SubtitleComponent>Banho e Tosa</SubtitleComponent>
        </TitlesWithLogo>
        <FormRegisterUser {...data} />
      </div>
    </div>
  );
};

export default RegisterPage;
