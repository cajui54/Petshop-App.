import { SiPug } from "react-icons/si";
import ButtonRegisterForm from "../_components/button-register-form";
import {
  IconTitleComponent,
  SubtitleComponent,
  TitleComponent,
  TitlesWithLogo,
} from "../_components/titles-with-logo";
import ButtonLogin from "../_components/button-login";
import imgPug from "../_assets/images/dog-pug.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="w-[95%] rounded-lg bg-neutral-900 sm:w-[400px]">
        <div className="relative mx-auto mt-1 h-[200px] w-[99%] overflow-hidden">
          <div className="gradientBg absolute z-10 h-full w-full"></div>
          <Image
            src={imgPug}
            alt="4 dogs pug"
            className="mx-auto -mt-28 w-[350px]"
          />
        </div>
        <TitlesWithLogo>
          <TitleComponent>Petshop App.</TitleComponent>
          <SubtitleComponent>Banho e Tosa</SubtitleComponent>
        </TitlesWithLogo>
        <ButtonLogin />
        <ButtonRegisterForm />
      </div>
    </div>
  );
}
