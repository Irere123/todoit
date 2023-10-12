import React from "react";
import { Spinner } from "./Spinner";

export const CenterLoader: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};
