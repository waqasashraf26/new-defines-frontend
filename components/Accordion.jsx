"use client";

// * imports
import React, { useState } from "react";
import Image from "next/image";

// * local imports
import PlusVector from "@/public/plus.png";

const AccordionComp = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (idx) => {
    setOpenAccordion(idx === openAccordion ? null : idx);
  };
  return (
    <>
      {/* main container */}
      {data?.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-start w-full h-auto gap-4 duration-300"
        >
          {/* accordion item */}
          <div className="flex items-start justify-start w-full h-auto gap-4 text-base font-normal flex-nowrap">
            <button
              className="min-w-[51px] min-h-[51px] rounded-[5px] bg-fNavyBlue flex justify-center items-center"
              onClick={() => handleAccordionClick(idx)}
            >
              {openAccordion !== idx && (
                <Image
                  src={PlusVector}
                  alt="plus"
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
              )}
            </button>

            <div className="w-full min-h-[51px] h-auto flex flex-col justify-start items-center gap-4">
              <div className=" flex flex-wrap items-center justify-start w-full min-h-[51px] rounded-[5px] h-auto text-white grow bg-fNavyBlue px-4 max-lg:py-2">
                <span>{item.question}</span>
              </div>
              {openAccordion === idx && (
                <div className=" duration-300 top-16 p-4 right-0 bg-[#1C12580D] w-full min-h-[51px] h-auto border rounded-[5px] text-black">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionComp;
