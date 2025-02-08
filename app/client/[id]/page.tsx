import HeroComponent, { HeroProps } from "@/app/_components/hero";
import imgDog from "@/app/_assets/images/dog-pug.png";
import React from "react";
import GridServices from "../_components/grid-services";
import { Metadata } from "next";
import BookingComponent from "@/app/_components/booking";

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
    <div className="h-full w-full">
      <HeroComponent {...heroData} />
      <BookingComponent />
      <GridServices id={params.id} />
    </div>
  );
};

export default ClientPage;
