import { SiPug } from "react-icons/si";
import ButtonRegisterForm from "../_components/button-register-form";
import {
  IconTitleComponent,
  SubtitleComponent,
  TitleComponent,
  TitlesWithLogo,
} from "../_components/titles-with-logo";
import ButtonLogin from "../_components/button-login";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-[85%] sm:w-[500px]  bg-neutral-900 rounded-lg border shadow-md shadow-pink-300 border-pink-500">
        <div>
          <TitlesWithLogo>
            <IconTitleComponent>
              <SiPug />
            </IconTitleComponent>
            <TitleComponent>Petshop App.</TitleComponent>
            <SubtitleComponent>Banho e Tosa</SubtitleComponent>
          </TitlesWithLogo>
          <ButtonLogin />
          <ButtonRegisterForm />
        </div>
      </div>
    </div>
  );
}
