//! imports
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
// ! local imports
import Icon1 from "@/public/icon1.png";
import Link from "next/link";

const bgColor = "#FFF4E8";

const ServiceCardComp = ({ data }) => {
  return (
    <>
      {/* main container */}
      {data?.map((item, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: item.bgColor }} // Use inline styles for dynamic bgColor
          className={`lg:max-w-[398px] sm:w-[80%] w-full min-h-[225px] h-auto rounded-[6px] flex flex-col sm:justify-start justify-center sm:p-6 p-3 items-start gap-2`}
        >
          <div className="w-[55px] h-[55px] max-sm:w-[40px] max-sm:h-[40px] bg-[#EF9634] rounded-sm flex justify-center items-center">
            <Image
              src={item.icons}
              alt="icons"
              width={500}
              height={500}
              className="object-contain w-[28px] h-[28px]"
            />
          </div>

          <h1 className="text-lg font-normal sm:text-2xl">{item.title}</h1>
          <p className="text-sm font-normal sm:text-base">{item.description}</p>
        </div>
      ))}

      {/* <Link href={'/services'} className="border rounded-lg p-3 flex w-fit items-center text-lg mx-auto shadow-xl gap-3  hover:scale-110 duration-100 transition-all">
        Explore More
        <FaArrowRight />
      </Link> */}
    </>
  );
};

export default ServiceCardComp;
