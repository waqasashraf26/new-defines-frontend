'use client'
import PortfolioCardComp from '@/components/Portfolio-Card'
import { Button } from '@/components/ui/button'
import { PortfolioCardData } from '@/utils/data'
import Link from 'next/link'
import React, { useState } from 'react'
import dot from '@/public/dot-pattern.png'
import Image from 'next/image'


const Page = () => {

    const [activeButton, setActiveButton] = useState(null);

    const btns = [
        { name: 'All' },
        { name: 'Web Development' },
        { name: 'CRM Development' },
        { name: 'APP Development' },
        { name: 'UI UX Design' },
        { name: 'Graphic Design' },
        { name: 'Logo Design' },
        { name: 'Digital Marketing' },
    ]

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div>
            <div className="w-full h-56 bg-portFolio relative flex flex-col justify-center items-center text-fNavyBlue text-center">
                <div className='absolute left-0 top-8' >
                    <Image alt='' src={dot} className='w-7 h-12' />
                </div>
                <div className='absolute right-0 bottom-8' >
                    <Image alt='' src={dot} className='w-7 h-12' />
                </div>
                <h1 className=" text-4xl mt-4 font-extrabold  relative md:z-50 z-auto  ">
                    {`Portfolio`}
                </h1>
                {/* <p>Home → Services Us </p> */}
            </div>

            <div className='px-20 pb-20' >
                <div className='flex flex-col items-center gap-4'>
                    <h1 className=" text-4xl mt-4 text-fNavyBlue font-extrabold  relative md:z-50 z-auto  ">
                        {`Our Work`}
                    </h1>
                    <p className='text-center'>Welcome to the NewDefines portfolio</p>
                </div>

                {/* <div className='border border-[#00C9A242] py-3 px-4 mt-6 flex justify-between bg-[#00C9A205]' >
                    {
                        btns.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index)}
                                className={`border-[#00C9A242] border px-6 py-1 rounded-sm ${activeButton === index ? 'bg-[#00C9A2] text-white' : ''}`}
                            >
                                <p className={`${activeButton === index ? 'text-white' : 'text-[#00C9A2]'}`}>{item.name}</p>
                            </button>
                        ))
                    }
                </div> */}

                <div className="flex flex-col items-center justify-start w-full h-auto  mt-12 lg:gap-16 gap-8 text-white ">
                    {/* main container */}
                    <div className="grid grid-cols-3 items-center w-full h-auto lg:gap-x-8 gap-x-2 lg:gap-y-16 gap-y-8 justify-between">
                        <PortfolioCardComp data={PortfolioCardData} />
                    </div>
                    {/* <Link href={"/portfolio"}>
                        <Button
                            variant="custom"
                            className="min-w-[200px] bg-fSeaGreen text-white min-h-[50px] p-4 text-[20px] font-normal"
                        >
                            View More
                        </Button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Page
