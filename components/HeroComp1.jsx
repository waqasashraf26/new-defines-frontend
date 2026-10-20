// * imports
import Image from "next/image";

// * local imports
import Rectangle from "@/public/Rectangle 10.png";
import DotPattern from "@/public/dot-pattern.png";
import MenInChair from "@/public/men-in-chair1.png";

const HeroComp1 = () => {
  return (
    <>
      {/* main container */}
      <div className="relative flex flex-col items-start justify-start w-full h-auto sm:min-h-screen overflow-hidden bg-white md:flex-row md:justify-center">
        {/* rectangle navy blue */}
        <div className="absolute bg-[#00C9A29C] w-[39px] h-[39px] rotate-45 top-[15%] right-[13%] max-sm:hidden"></div>

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

        <div className="relative flex flex-col items-start md:pl-[100px] pl-2 md:pt-[3%] justify-start w-full h-full md:w-1/2 md:min-h-screen gap-4">
          <Image
            src={MenInChair}
            alt="men-in-chair"
            width={500}
            height={500}
            className=" max-md:hidden object-contain w-[90%] h-[80%] z-50"
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
        <div className="w-full  lg:px-0 sm:px-12 px-4 h-full pt-[8%] md:w-1/2">
          <h1 className="text-fSeaGreen text-2xl font-normal relative z-auto">
            {`Newdefines`}
          </h1>

          <h1 className="text-fNavyBlue sm:text-5xl text-3xl sm:mt-4 font-extrabold  relative z-auto">
            {`Defining Microsoft`}
          </h1>
          <h1 className="text-fNavyBlue sm:text-5xl text-3xl font-extrabold sm:my-4 relative z-auto">
            {`Dynamics & More For You`}
          </h1>

          <p className="md:w-[40vw] sm:w-[80%] w-full h-auto text-[#777777] text-[16px] font-normal  relative z-auto my-4">
            {`Newdefines is your one-stop solution for anything within the Microsoft Dynamics Universe. We’re here to serve you with not only the recent release from Microsoft’s business management software but also all of the assistance and guidance you require for full integration, as well as ongoing assistance and suggestions of additional features. Whether you are just beginning or are an expanding business, you’re in the right place.`}
          </p>
          <p className="md:w-[40vw] sm:w-[80%] w-full h-auto text-[#777777] text-[16px] font-normal  relative z-auto my-4">
            {`It can take expert knowledge to make dynamic decisions for your business, which is where we step in. Learn more about our services below and become a part of the Newdefines family and help us narrow the gap between IT and your business needs.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroComp1;
