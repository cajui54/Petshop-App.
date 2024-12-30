import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}
const ButtonsContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="w-[90%] my-6 h-20  flex flex-col [&>*]:flex [&>*]:items-center [&>*]:w-full [&>*]:justify-center [&>*]:opacity-75 [&>*]:hover:opacity-100 [&>*]:rounded-lg [&>*]:py-2 justify-center items-center">
      {children}
    </div>
  );
};

export default ButtonsContainer;
