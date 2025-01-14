import Image from "next/image";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}
export const HeaderComponent = ({ children }: HeaderProps) => {
  return (
    <header className="h-24 w-full flex justify-between items-center">
      {children}
    </header>
  );
};
export const HeaderUserContainer = ({ children }: HeaderProps) => {
  return (
    <div className="flex items-center ml-5 w-4/6 sm:w-72 border border-pink-500 bg-neutral-950 rounded-full p-3">
      {children}
    </div>
  );
};
export const HeaderUserImageContainer = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <div className="mr-3">
      <Image
        className="rounded-full"
        src={image}
        alt={`image profile ${name}`}
        width={50}
        height={50}
      />
    </div>
  );
};
export const HeaderUserInfo = ({ name }: { name: string }) => {
  return (
    <p>
      Olá,
      <span className="text-pink-500 font-bold text-lg"> {name} </span>
    </p>
  );
};
export const HeaderLogoRight = ({ children }: HeaderProps) => {
  return (
    <div className="text-4xl mr-7 ml-4 w-24 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
export const HeaderLogoText = ({ children }: HeaderProps) => {
  return <span className="text-sm text-pink-600">{children}</span>;
};
