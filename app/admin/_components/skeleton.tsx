import React from "react";

const Skeleton = () => {
  return (
    <ul>
      <li>
        <span className="flex items-center">
          <div className="mr-3 block h-8 w-8 rounded-full bg-neutral-500" />
          <p className="h-5 w-32 rounded-lg bg-neutral-500"></p>
        </span>
        <span className="h-10 w-6 rounded-lg bg-neutral-500"></span>
      </li>

      <li>
        <span className="flex items-center">
          <div className="mr-3 block h-8 w-8 rounded-full bg-neutral-500" />
          <p className="h-5 w-32 rounded-lg bg-neutral-500"></p>
        </span>
        <span className="h-10 w-6 rounded-lg bg-neutral-500"></span>
      </li>

      <li>
        <span className="flex items-center">
          <div className="mr-3 block h-8 w-8 rounded-full bg-neutral-500" />
          <p className="h-5 w-32 rounded-lg bg-neutral-500"></p>
        </span>
        <span className="h-10 w-6 rounded-lg bg-neutral-500"></span>
      </li>
    </ul>
  );
};

export default Skeleton;
