import React from "react";
import FormLogin from "./_components/form-login";
import {
  IconTitleComponent,
  SubtitleComponent,
  TitleComponent,
  TitlesWithLogo,
} from "../_components/titles-with-logo";
import { IoPawOutline } from "react-icons/io5";
import { getSessionEmail } from "../_data-access/get-session-email";

const AuthLoginPage = async () => {
  const email = await getSessionEmail();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/5 sm:w-[450px] rounded-xl border border-pink-500 bg-neutral-900">
        <TitlesWithLogo>
          <IconTitleComponent>
            <IoPawOutline />
          </IconTitleComponent>
          <TitleComponent>Petshop App.</TitleComponent>
          <SubtitleComponent>Autenticação do sistema</SubtitleComponent>
        </TitlesWithLogo>
        <FormLogin email={email} />
      </div>
    </div>
  );
};

export default AuthLoginPage;
