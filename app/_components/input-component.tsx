import React, { ElementType, ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}
export const InputAsterist = () => {
  return (
    <span className="relative -top-6 text-gray-500 left-3 text-2xl">*</span>
  );
};
export const InputContainer = ({ children }: ChildrenProps) => {
  return <div className="mt-10">{children}</div>;
};
export const LabelInput = ({ children }: ChildrenProps) => {
  return <label className="relative">{children}</label>;
};
export const SpanInput = ({ children }: ChildrenProps) => {
  return (
    <span className="text-neutral-400 text-1xl absolute -top-8 left-2">
      {children}
    </span>
  );
};
export const IconInput = ({ Icon }: { Icon: ElementType }) => {
  return <Icon className="absolute -top-2 left-2 text-neutral-300 text-2xl" />;
};
export const Input = ({ children }: ChildrenProps) => {
  return <>{children}</>;
};
export const InfoErrorInput = ({ children }: ChildrenProps) => {
  return <p className=" text-red-600 mt-2 text-sm ml-2">{children}</p>;
};
