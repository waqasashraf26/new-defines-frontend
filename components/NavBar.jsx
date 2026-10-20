'use client'

// * imports
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// * local imports
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "@/public/logo.png";
import { NavItemsData } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { useScrollContext } from "@/utils/ScrollContext";
import { usePathname } from "next/navigation";

const NavBarComp = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = useScrollContext();
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    scrollToSection('contactUs');
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-icon')) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sm:relative sticky top-0 left-0 bg-white z-50">
      {/* main container */}
      <div className="w-full h-auto relative flex flex-nowrap justify-between items-center text-center py-4 px-[6%] shadow-md bg-[#FFFFFF] gap-4 mt-1">
        {/* logo */}
        <Link href={'/'}>
          <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="w-[80px] h-[46px] object-contain"
          />
        </Link>

        {/* nav Items */}
        <div className="w-[533px] h-full flex justify-between z-50 space-x-2 items-center max-md:hidden">
          {NavItemsData?.map((item, idx) => (
            <Link
              href={item.src}
              key={idx}
              className={`text-[#191919] text-base font-normal px-4 rounded-lg py-2 transition-colors duration-300 ${pathname === item.src ? 'text-fSeaGreen' : ''}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* contact us button */}
        <Button
          onClick={handleClick}
          variant="custom"
          className="w-[175px] bg-fSeaGreen text-white h-[51px] text-[20px] font-normal max-md:hidden block"
        >
          {`Contact Us`}
        </Button>
        
        <div className="md:hidden block menu-icon">
          <RiMenu3Fill onClick={handleOpenMenu} className="text-3xl" />
        </div>

        {open && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu}></div>
            <div className="mobile-menu fixed top-0 right-0 px-2 py-4 bg-white z-50 w-[40%] min-h-screen shadow-lg rounded-lg">
              <div className="flex flex-col items-center h-[96vh] justify-between relative">
                <RxCross1 onClick={handleOpenMenu} className="text-2xl absolute top-1 left-0" />

                <div className="flex flex-col items-start gap-6 pt-10">
                  {NavItemsData?.map((item, idx) => (
                    <Link
                      href={item.src}
                      key={idx}
                      className={`text-[#191919] text-base font-normal ${pathname === item.src ? 'text-fSeaGreen' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <Button
                  onClick={handleClick}
                  variant="custom"
                  className="px-4 bg-fSeaGreen text-white py-2 font-normal"
                >
                  {`Contact Us`}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBarComp;
