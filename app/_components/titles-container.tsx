import React from "react";

interface TitlesContainerProps {
  title: string;
  subtile: string;
}

const TitlesContainer = ({ title, subtile }: TitlesContainerProps) => {
  return (
    <div className="w-4/5 sm:w-[400px] mx-auto">
      <h2 className="text-3xl font-extrabold text-pink-500">{title}</h2>
      <p className="text-lg tracking-wide">{subtile}</p>
    </div>
  );
};

export default TitlesContainer;
