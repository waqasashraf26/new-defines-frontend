// * imports

import React from "react";
import Image from "next/image";

// * local imports
import BigCard from "@/public/big-card.png";
import SliderComp from "./Slider";
import { Button } from "./ui/button";
import BlogCardsComp from "./Blog-Cards";
import { BlogCardsData } from "@/utils/data";

const BlogComp = () => {
  return (
    <>
      {/* main container */}
      <div className="transition-all duration-300 w-full h-auto bg-white flex flex-col justify-start gap-16 items-center relative py-[5%]">
        {/* ------------------------- */}

        {/* pattern div starts here */}
        {/* rectangle navy blue */}
        <div className="absolute bg-fNavyBlue w-[37px] h-[37px] rotate-45 top-[12%] right-[15%] max-sm:hidden"></div>

        {/* rectangle sea green */}
        <div className="absolute bg-fSeaGreen w-[16.6px] h-[16.6px] rotate-45 top-[20%] left-[12%] max-sm:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-[#FE50867A] w-[18.25px] h-[18.25px] rotate-45 top-[55%] right-[30%] max-sm:hidden"></div>

        {/* pattern div ends here */}

        {/* ------------------------- */}

        {/* main title starts here */}
        <h1 className="text-2xl font-normal lg:text-5xl text-fNavyBlue">
          {`What They’re Saying`}
        </h1>
        {/* main title starts here */}
        {/* ------------------------- */}

        {/* blog slider starts here */}
        <div className="w-full h-auto">
          <SliderComp />
        </div>
        {/* blog slider ends here */}
        {/* ------------------------- */}
      </div>

      {/* blog container */}
      <div className="transition-all duration-300 w-full h-auto bg-white flex flex-col justify-start items-center pb-[5%] space-y-16">
        {/* main title starts here */}
        <h1 className="text-2xl font-normal lg:text-5xl text-fNavyBlue">
          {`Our Latest Blogs`}
        </h1>

        {/* main body  */}
        <div className="flex flex-col items-start justify-between w-[85%] gap-8 h-auto lg:flex-row transition-all duration-300">
          {/* left div */}
          <div className="w-full h-full lg:w-1/2">
            {/* card */}
            <div className="transition-all duration-300 flex flex-col rounded-[10px] items-center justify-between md:w-[70%] sm:w-[80%] w-full mx-auto lg:w-full shadow-md h-auto">
              <Image
                src={BigCard}
                alt="big card"
                width={500}
                height={500}
                className="object-fill w-full lg:min-h-[421px] h-auto"
              />
              {/* description body  */}
              <div className="flex flex-col items-start justify-start w-full h-auto p-4 space-y-4 lg:p-6">
                <Button
                  size="lg"
                  className="h-8 text-base font-semibold leading-5 bg-transparent border lg:h-12 border-fSeaGreen text-fSeaGreen hover:bg-transparent"
                >
                  Website Design
                </Button>

                <h1 className="w-full h-auto text-base font-normal leading-5 lg:text-2xl lg:leading-8 text-fNavyBlue">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </h1>

                <span className="w-full h-auto text-xs lg:text-base leading-6 text-[#777777] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </span>

                <div className="flex items-center justify-start w-full h-auto gap-2 text-center">
                  <span className="text-xs font-normal leading-5 lg:text-base text-fSeaGreen">
                    By James Williams
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="text-xs lg:text-base leading-5 text-[#777777] font-normal">
                    12 Jan, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* right div div */}
          <div className="grid w-full h-auto grid-cols-2 gap-4 transition-all duration-300 lg:w-1/2 place-items-center max-sm:grid-cols-1">
            {/* cards */}
            {BlogCardsData?.map((item, idx) => (
              <BlogCardsComp key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogComp;
