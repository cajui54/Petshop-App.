import Image, { StaticImageData } from "next/image";
import React from "react";

export interface HeroProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
}
const HeroComponent = ({ title, subtitle, image }: HeroProps) => {
  return (
    <div className="relative md:flex md:items-center lg:justify-between md:w-3/5 w-[95%]  overflow-hidden mt-8 mx-auto h-52 bg-pink-500 rounded-lg">
      <div className="relative lg:ml-20 z-20 md:min-w-[300px]">
        <p className="mx-auto text-center xl:text-6xl mt-8 text-4xl font-black">
          {title}
        </p>
        <p className="text-gray-900 max-[350px]:text-[20px] -mt-1 mx-auto text-center text-4xl font-black">
          {subtitle}
        </p>
      </div>
      <Image
        className="z-10 drop-shadow-md sm:w-[300px] sm:-top-28 sm:-right-20 md:relative md:top-8 md:w-[350px] md:right-14 absolute -top-5 min-[500px]:-top-20"
        src={image}
        alt="animal dog"
      />
    </div>
  );
};

export default HeroComponent;
