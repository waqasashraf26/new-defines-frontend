import React from "react";
import ServicesComp from "@/components/ServicesComp2";
import PortfolioComp from "@/components/Portfolio";
import FAQComp from "@/components/FAQ";
import ContactUsComp from "@/components/ContactUs";
import BlogComp from "@/components/BlogComp";
import SliderComp from "@/components/Slider";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Servicepage = () => {
  return (
    <>
      {/* <div className="w-full h-48 bg-slate-200 flex flex-col justify-center items-center text-fNavyBlue text-center">
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 top-[20%] left-[10%] max-sm:hidden"></div>
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45  right-[20%] max-sm:hidden"></div>
        <div className="absolute bg-[#ff085b] w-[20.38px] h-[20.38px] rotate-45 top-[20%] left-[86%] max-md:hidden"></div>
        <div className="absolute bg-[#00C9A29C] w-[20.38px] h-[20.38px] rotate-45 top-[35%] right-[86%] max-md:hidden"></div>
        <h1 className=" text-4xl mt-4 font-extrabold  relative md:z-50 z-auto  ">
          {`Services Us`}
        </h1>
      </div> */}
      <div className="w-full  flex flex-col items-center justify-center">
        <ServicesComp />
        <div className="flex w-full justify-center ">
          <Link href={'/services'} className="border rounded-lg p-3 flex w-fit items-center text-lg mx-auto shadow-xl gap-3  hover:scale-110 duration-100 transition-all">
            Explore More
            <FaArrowRight />
          </Link>
        </div>
      </div>
      {/* <PortfolioComp /> */}
      {/* <FAQComp /> */}
      {/* <ContactUsComp /> */}
      <div className="transition-all duration-300 w-full h-auto bg-white flex flex-col justify-start gap-16 items-center relative py-[5%]">
        <div className="absolute bg-fNavyBlue w-[37px] h-[37px] rotate-45 top-[12%] right-[15%] max-sm:hidden"></div>
        <div className="absolute bg-fSeaGreen w-[16.6px] h-[16.6px] rotate-45 top-[20%] left-[12%] max-sm:hidden"></div>
        <div className="absolute bg-[#FE50867A] w-[18.25px] h-[18.25px] rotate-45 top-[55%] right-[30%] max-sm:hidden"></div>
        <div className="flex flex-col items-center  gap-4">
          <h1 className="text-2xl font-normal lg:text-5xl text-fNavyBlue">
            {`Client Success Stories`}
          </h1>
          <p className="md:w-[70%] w-full text-center p-4">
            Our client&apos;s success is our greatest achievement. From startups to enterprise-level organizations,
            we&apos;ve had the privilege of partnering with businesses of all sizes and industries to deliver
            transformative solutions that drive tangible results. Explore our portfolio of success stories
            to see how NewDefines has helped businesses like yours overcome challenges, seize
            opportunities, and achieve their full potential.
          </p>
        </div>
        <div className="w-full h-auto">
          <SliderComp />
        </div>
      </div>
      {/* <BlogComp /> */}
    </>
  );
};

export default Servicepage;