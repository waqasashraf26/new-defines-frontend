// * imports
import React from "react";
import Image from "next/image";

// * lib imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

//* local imports

import QuoteIcon from "@/public/quote.png";
import { CarousalData } from "@/utils/data";

const SliderComp = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <Carousel className="w-full max-w-[85%] max-md:w-[70%]">
        <CarouselContent className="-ml-1">
          {CarousalData?.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="lg:w-[400px] w-full h-[188px] drop-shadow-md max-sm:h-auto">
                  <CardContent className="flex flex-col gap-[10px] aspect-square w-full h-full items-center sm:justify-center justify-start lg:p-6 p-3">
                    <div className="flex items-center justify-between w-full h-auto">
                      {/* left div */}
                      <div className="w-auto h-auto flex justify-start items-center gap-[14px]">
                        {/* image dp */}
                        <Image
                          src={item.img}
                          alt="dp"
                          width={500}
                          height={500}
                          className="object-contain w-[50px] h-[50px] rounded-full"
                        />

                        {/* info div */}
                        <div className="flex flex-col items-start justify-start w-auto font-normal">
                          <h1 className="text-xl text-black">{item.name}</h1>
                          <span className="text-[#777777] text-xs">
                            {item.post}
                          </span>
                        </div>
                      </div>

                      {/* right div */}
                      <div className="flex items-center justify-start w-auto h-auto gap-1">
                        <Image
                          src={QuoteIcon}
                          alt="quote"
                          width={500}
                          height={500}
                          className="object-contain w-[28px] h-[52px] "
                        />
                        <Image
                          src={QuoteIcon}
                          alt="quote"
                          width={500}
                          height={500}
                          className="object-contain w-[28px] h-[52px] "
                        />
                      </div>
                    </div>

                    {/* bottom container */}
                    <div className="w-full sm:h-[91px] h-auto text-[#777777] text-sm font-normal">
                      {item.about}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SliderComp;
