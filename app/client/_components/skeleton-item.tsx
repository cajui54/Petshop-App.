import React from "react";

const SkeletonItem = () => {
  return (
    <div className="w-[95%]  sm:w-[500px] flex items-center p-2 justify-between h-28 mx-auto mt-8 rounded-2xl border border-neutral-800 ">
      <div className="h-24  overflow-hidden w-24 bg-neutral-800 rounded-full"></div>
      <div className="grow p-3 h-full">
        <h2 className=" bg-neutral-800 h-10 w-4/5 rounded-lg"></h2>
        <span className=" bg-neutral-800 h-4 mt-3 w-4/5 rounded-lg block"></span>
      </div>
      <div className="h-16  flex w-16 rounded-full hover:opacity-100 bg-neutral-800"></div>
    </div>
  );
};

export default SkeletonItem;
