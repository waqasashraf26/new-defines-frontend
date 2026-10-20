import React from "react";
import ServiceCardComp from "./Service-Card";
import { ServiceCardData1, ServiceCardData2, ServiceCombineData } from "@/utils/data";

const ServicesComp = () => {
  return (
    <>
      {/* main div */}
      <div className="flex flex-col items-center justify-center gap-8 w-full py-20 h-auto duration-300 SM:px-[5%]">
        {/* left div */}
        <div className="flex flex-col items-center  justify-center w-full h-auto gap-4 duration-300 lg:w-auto grow">
          <h1 className="text-fNavyBlue sm:text-[48px] text-3xl font-extrabold  relative z-auto gap-4">
            {`Our Services`}
          </h1>

          <p className="sm:w-[70%] w-full h-auto text-[#777777] text-[16px] font-normal text-center relative z-auto">
            {`Newdefines is your one-stop solution for anything within the Microsoft Dynamics Universe. We’re here to serve you with not only the recent release from Microsoft’s business management software but also all of the assistance and guidance you require for full integration, as well as ongoing assistance and suggestions of additional features. Whether you are just beginning or are an expanding business, you’re in the right place.`}
          </p>

        </div>
        <div className="w-full flex justify-center">
          <div className="duration-300 w-full  h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center  gap-6 ">
            <ServiceCardComp data={ServiceCombineData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesComp;
