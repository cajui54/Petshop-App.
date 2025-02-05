import React from "react";

const SkeletonClient = () => {
  return (
    <div className="mx-auto my-6 flex h-[250px] w-[95%] items-center rounded-xl border border-neutral-500 bg-neutral-800">
      <div className="mx-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-neutral-500 bg-neutral-600 sm:h-[80px] sm:w-[80px]"></div>
      <div className="h-[80%] w-4/5">
        <div className="mx-auto my-2 h-10 w-4/5 bg-neutral-600"></div>
        <div className="mx-auto my-6 h-6 w-4/5 bg-neutral-600"></div>
        <div className="mx-auto my-6 h-6 w-4/5 bg-neutral-600"></div>
      </div>
    </div>
  );
};

export default SkeletonClient;
