import Image from "next/image";
import React from "react";

// * local imports
import BigCard from "@/public/big-card.png";
import { Button } from "./ui/button";

const BlogCardsComp = ({ data }) => {
  return (
    <>
      {/* main container */}
      <div className="transition-all duration-300 flex flex-col rounded-[10px] items-center justify-between w-full shadow-md h-auto">
        <Image
          src={data.imageSrc}
          alt="big card"
          width={500}
          height={500}
          className="object-cover w-full h-auto rounded-t-[10px]"
        />
        {/* description body  */}
        <div className="flex flex-col items-start justify-start w-full h-auto p-2 space-y-2">
          <Button
            // size="lg"
            className="h-8 text-sm font-normal leading-5 bg-transparent border border-fSeaGreen text-fSeaGreen hover:bg-transparent"
          >
            Website Design
          </Button>

          <h1 className="w-full h-auto text-base font-normal leading-5 text-fNavyBlue">
            {data.heading}
          </h1>

          <div className="flex items-center justify-between w-full h-auto gap-2 text-center">
            <span className="text-xs font-normal leading-5 text-fSeaGreen">
              By James Williams
            </span>
            {/* <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span> */}
            <span className="text-xs leading-5 text-[#777777] font-normal">
              12 Jan, 2024
            </span>
          </div>
        </div>
      </div>
    </>

  );
};

export default BlogCardsComp;
