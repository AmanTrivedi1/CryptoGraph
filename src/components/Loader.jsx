import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = () => {
  return (
    <div>
      <Skeleton
        className="flex flex-wrap  w-10/12 border-b-2  m-auto pt-20  justify-center gap-8 items-center"
        count={5}
      />
    </div>
  );
};

export default Loader;
