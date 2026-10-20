import React from "react";
import PortfolioCardComp from "./Portfolio-Card";
import { PortfolioCardData } from "@/utils/data";
import { Button } from "./ui/button";
import Link from "next/link";

const PortfolioComp = () => {
  return (
    <>
      {/* main container */}
      <div className="flex flex-col items-center justify-start w-full h-auto min-h-screen p-[5%] lg:gap-16 gap-8 text-white bg-fNavyBlue" id="projects">
        <h1 className="text-white sm:text-[48px] text-3xl font-extrabold  relative z-auto gap-4">
        {`Projects`}
          </h1>
        {/* main container */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center w-full h-auto lg:gap-x-8 gap-x-2 lg:gap-y-16 gap-y-8 justify-evenly">
          <PortfolioCardComp data={PortfolioCardData} />
        </div>
        <Link href={"/projects"}>
          <Button
            variant="custom"
            className="min-w-[200px] bg-fSeaGreen text-white min-h-[50px] p-4 text-[20px] font-normal"
          >
            View More
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PortfolioComp;
