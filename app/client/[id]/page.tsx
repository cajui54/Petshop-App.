import HeroComponent, { HeroProps } from "@/app/_components/hero";
import imgDog from "@/app/_assets/images/dog-pug.png";
import React from "react";
import GridServices from "../_components/grid-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendamento",
};
interface PropsParam {
  params: { id: string };
}
const heroData: HeroProps = {
  title: "Banho & Tosa",
  subtitle: "50% de desconto",
  image: imgDog,
};
const ClientPage = ({ params }: PropsParam) => {
  return (
    <div className="w-full h-full">
      <HeroComponent {...heroData} />
      <GridServices id={params.id} />
    </div>
  );
};

export default ClientPage;
