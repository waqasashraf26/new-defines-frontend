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

        <h1 className="text-fNavyBlue sm:text-[48px] text-3xl font-extrabold  relative z-auto gap-4">
          {`Portfolio`}
        </h1>
        {/* <p>Home → Services Us </p> */}
      </div>

      <div className='md:px-20 sm:px-12 px-4 pb-20' >

        <div className="flex flex-col items-center justify-start w-full h-auto  mt-12 lg:gap-16 gap-8 text-white ">
          {/* main container */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center w-full h-auto lg:gap-x-8 gap-x-2 lg:gap-y-16 gap-y-8 justify-between">
            <PortfolioCardComp data={PortfolioCardData} />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Page
