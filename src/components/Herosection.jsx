import React from "react";
import Carousel from "./Carousel";
import { nunitoSans } from "@/app/layout";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="">
      <div className={` flex ${nunitoSans}`}>
        <Carousel />
      </div>
    </div>
  );
};

export default Herosection;
