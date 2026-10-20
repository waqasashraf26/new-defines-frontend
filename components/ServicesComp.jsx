import React from "react";
import ServiceCardComp from "./Service-Card";
import { ServiceCardData1, ServiceCardData2 } from "@/utils/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServicesComp = () => {
  return (
    <>
      {/* main div */}
      <div className="flex flex-col items-center justify-between gap-8 w-full min-h-screen h-auto duration-300 lg:flex-row py-8 px-[5%]">
        {/* left div */}
        <div className="flex flex-col items-start justify-start w-full h-auto gap-4 duration-300 lg:w-auto grow">
          <h1 className="text-fNavyBlue sm:text-[48px] text-3xl font-extrabold  relative z-auto gap-4">
            {`Our Services`}
          </h1>

          <p className="w-full h-auto text-[#777777] text-[16px] font-normal  relative z-auto">
            {`At NewDefines, we offer a comprehensive suite of services designed to elevate your business.
From Power Platform and Microsoft Dynamics 365 to tailored Project Consultation, we've got
your technology needs covered. Our Web Development, including Landing Page and Full
Website Development, combined with Front End Development and API Integrations, ensures a
robust online presence. We specialize in Application Development for iOS and Android, along
with cutting-edge UI/UX, Social Media, and e-commerce designs. Enhance your visibility with
our SEO and SEO-Friendly Content Writing. Plus, our Architectural Services and hands-on
Training will keep you ahead of the curve.`}
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start w-full h-auto gap-2 mt-12  lg:gap-8 ">
            <ServiceCardComp data={ServiceCardData1} />
            <div className="flex w-full justify-center ">
            <Link href={'/services'} className="border rounded-lg p-3 flex w-fit items-center text-lg mx-auto shadow-xl gap-3  hover:scale-110 duration-100 transition-all">
              Explore More
              <FaArrowRight />
            </Link>
            </div>
          </div>
        </div>
        {/* <div className="lg:min-w-[35vw] h-full duration-300 w-full flex lg:flex-col flex-row max-lg:flex-wrap lg:justify-start justify-start items-start lg:gap-4 gap-2 lg:pl-8 pl-0">
          <ServiceCardComp data={ServiceCardData2} />
        </div> */}
      </div>
    </>
  );
};

export default ServicesComp;
