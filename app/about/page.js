import Image from "next/image";
import React from "react";
import MenInChair from "@/public/men-in-chair1.png";
import Rectangle from "@/public/Rectangle 10.png";
import DotPattern from "@/public/dot-pattern.png";
import ServicesComp from "@/components/ServicesComp";
import PortfolioComp from "@/components/Portfolio";
import FAQComp from "@/components/FAQ";
import ContactUsComp from "@/components/ContactUs";
import BlogComp from "@/components/BlogComp";
import ourstory from "@/public/ourstory.png";
import ourapproch from "@/public/ourapproch.png";

const AboutPage = () => {
  return (
    <>
      {/* <div className="w-full h-48 bg-slate-200 flex flex-col justify-center items-center text-fNavyBlue text-center">
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 top-[20%] left-[10%] max-sm:hidden"></div>
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45  right-[20%] max-sm:hidden"></div>
        <div className="absolute bg-[#ff085b] w-[20.38px] h-[20.38px] rotate-45 top-[20%] left-[86%] max-md:hidden"></div>
        <div className="absolute bg-[#00C9A29C] w-[20.38px] h-[20.38px] rotate-45 top-[35%] right-[86%] max-md:hidden"></div>
        <h1 className=" text-4xl mt-4 font-extrabold  relative md:z-50 z-auto ">
          {`About Us`}
        </h1>
      </div> */}
      {/* main container */}
      <div className="relative flex flex-col items-start gap-4 justify-start w-full h-auto md:min-h-screen overflow-hidden bg-white md:flex-row md:justify-center">
        {/* rectangle navy blue */}

        {/* rectangle pink */}
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 top-[12%] right-[30%] max-sm:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-[#FE50867A] w-[18.25px] h-[18.25px] rotate-45 top-[81%] right-[30%] max-sm:hidden"></div>

        {/* dot pattern */}

        <Image
          src={DotPattern}
          alt="DotPattern"
          width={500}
          height={500}
          className="object-contain absolute min-w-[202px] w-auto top-[17%] h-[35%] left-[10%] max-md:hidden"
        />

        {/* left div */}

        <div className="relative flex flex-col items-start md:pl-[100px] pl-2 md:pt-[3%] justify-start w-full h-full md:w-1/2 md:min-h-screen gap-2">
          <div className="absolute bg-[#00C9A29C] w-[39px] h-[39px] rotate-45 top-[15%] left-[18%] max-sm:hidden"></div>

          <Image
            src={MenInChair}
            alt="men-in-chair"
            width={300}
            height={300}
            className=" max-md:hidden object-contain w-[400px] h-[400%] z-50"
          />
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={500}
            height={500}
            className="absolute max-md:hidden -top-10 left-0 object-contain w-[100%] h-[100%] z-40"
          />
          {/* <div className="absolute max-md:hidden w-[418px] h-[437px] z-40"></div> */}
        </div>
        {/* right div */}
        <div className="w-full h-full pt-[8%] md:px-0 sm:px-8 px-6  md:w-1/2">
          <h1 className="text-fNavyBlue sm:text-5xl text-3xl mt-4 font-extrabold  relative md:z-50 z-auto">
            {`Welcome to NewDefines`}
          </h1>

          <p className="md:w-[40vw] sm:w-[80%] h-auto text-[#777777] text-[16px] font-normal  relative md:z-50 z-auto my-4">
            `
            {`At NewDefines, we're passionate about closing the gap between technology and business. Our
journey began with a vision to simplify complex technological landscapes for businesses of all
sizes. We specialize in Microsoft CRM Dynamics, Power Platform, and Web Development,
providing innovative solutions tailored to your unique needs. Our team of experts is dedicated to
delivering top-notch services that drive efficiency and growth, making technology work for you in
the most effective way.
`}
          </p>
        </div>
      </div>

      <div className="px-8 py-4 flex items-center bg-fNavyBlue w-full  text-white">
        {/* First Pair */}
        <div className="flex-1">
          {/* Text Content */}
          <div>
            <h1 className="pl-4 pb-4 text-3xl font-bold">Our Mission</h1>
            <p>
              Our mission at NewDefines is to transform the digital landscape with creativity and expertise.
              We strive to bring a touch of fun and innovation to everything we do, ensuring that our clients
              not only achieve their business goals but also enjoy the process. From UI/UX design to mobile
              app development, our services are designed to offer comprehensive support and exceptional
              results. We believe in a collaborative approach, working closely with our clients to understand
              their vision and bring it to life with cutting-edge technology.
            </p>
          </div>
        </div>

        <div className="flex-1 md:block hidden">
          {/* Image */}
          <Image
            src={ourstory}
            alt="Your Image"
            className="pl-28 "
            width={350}
            height={150}
          />
        </div>
      </div>

      <div className="px-8 py-4 flex items-center bg-fNavyBlue w-full gap-4  text-white">
        {/* Second Pair */}
        <div className="flex-1 md:block hidden">
          {/* Image */}
          <Image
            src={ourapproch}
            alt="Your Image"
            className="pl-28 "
            width={350}
            height={150}
          />
        </div>

        <div className="flex-1">
          {/* Text Content */}
          <div>
            <h1 className="pl-4 pb-4 text-3xl font-bold">Our Approach</h1>
            <p>
              At NewDefines, our approach is centered on understanding and aligning with your business
              goals. We begin by deeply analyzing your unique needs and challenges, ensuring we tailor our
              solutions to fit perfectly. Our team emphasizes collaboration, working closely with you at every
              step to foster innovation and deliver results that exceed expectations. We combine technical
              expertise with a creative mindset, ensuring our solutions are not only effective but also
              engaging. With a focus on continuous improvement, we stay ahead of industry trends to provide
              you with cutting-edge, sustainable solutions.
            </p>
          </div>
        </div>
      </div>
      <ServicesComp />
      {/* <PortfolioComp /> */}
      {/* <FAQComp />/ */}
      <ContactUsComp />
      {/* <BlogComp /> */}
    </>
  );
};

export default AboutPage;
