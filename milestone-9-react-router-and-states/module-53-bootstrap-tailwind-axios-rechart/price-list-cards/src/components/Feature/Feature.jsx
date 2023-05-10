import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="pl-2 flex items-center gap-1 mb-2">
      <CheckCircleIcon className="w-5 h-5 text-green-500" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
