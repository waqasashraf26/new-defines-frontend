import React from "react";
import AccordionComp from "./Accordion";
import { AccordionData } from "@/utils/data";
import Image from "next/image";
import FAQDesign from "@/public/FAQDesign.png";

const FAQComp = () => {
  return (
    <>
      {/* main container */}
      <div className="flex flex-col items-start justify-between py-[7%] lg:px-[5%] px-[2%] duration-300 w-full h-auto min-h-screen lg:flex-row gap-4">
        {/* left div */}
        <div className="flex flex-col items-start justify-start w-full h-full gap-8 md:gap-10 lg:w-1/2">
          <div className="flex flex-col items-start justify-start w-full h-auto">
            <h1 className="text-fSeaGreen text-[40px] font-bold">FAQ</h1>
            <h1 className="text-fNavyBlue text-[40px] font-bold">
              Frequently Ask Questions{" "}
            </h1>
          </div>

          {/* FAQ ACCordion */}
          <div className="flex flex-col items-center justify-start w-full h-auto space-y-4">
            <AccordionComp data={AccordionData} />
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full p-4 lg:w-1/2">
          <Image
            src={FAQDesign}
            alt="FAQDesign"
            width={500}
            height={500}
            className="object-contain xl:max-w-[591px] w-auto xl:max-h-[579px] h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default FAQComp;
