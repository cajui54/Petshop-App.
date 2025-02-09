import HeroComponent, { HeroProps } from "@/app/_components/hero";
import imgDog from "@/app/_assets/images/dog-pug.png";
import React from "react";
import GridServices from "../_components/grid-services";
import { Metadata } from "next";
import BookingComponent from "@/app/_components/booking";
import { getBooking } from "@/app/_data-access/booking/get-booking";

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
const ClientPage = async ({ params }: PropsParam) => {
  const bookings = await getBooking(params.id);

  return (
    <div className="h-full w-full">
      <HeroComponent {...heroData} />
      <div className="mx-auto mb-24 mt-16 h-[230px] w-full overflow-y-auto sm:w-[500px]">
        <h2 className="ml-4 mt-4">Meus Agendamentos</h2>
        {bookings.length > 0 && <BookingComponent bookings={bookings} />}
      </div>

      <GridServices id={params.id} />
    </div>
  );
};

export default ClientPage;
