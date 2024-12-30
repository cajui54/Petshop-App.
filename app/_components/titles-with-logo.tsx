import React from "react";
import { IoPawOutline } from "react-icons/io5";

interface ChildrenProps {
  children: React.ReactNode;
}

export const IconTitleComponent = ({ children }: ChildrenProps) => {
  return <div className="text-pink-500 text-8xl">{children}</div>;
};
export const TitleComponent = ({ children }: ChildrenProps) => {
  return <h2 className="text-pink-500 text-4xl">{children}</h2>;
};
export const SubtitleComponent = ({ children }: ChildrenProps) => {
  return (
    <h3 className="text-[16px] -ml-20 -mt-2 text-neutral-400">{children}</h3>
  );
};

export const TitlesWithLogo = ({ children }: ChildrenProps) => {
  return (
    <div className="w-[90%] my-8 mx-auto flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
