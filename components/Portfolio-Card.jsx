"use client";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from "next/image";

// * local imports
import redirectIcon from "@/public/redirect.png";

const PortfolioCardComp = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const showModal = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <>
      {/* main container */}
      {data?.map((item, idx) => (
        <div
          key={idx}
          className="relative xl:min-h-[478px] h-auto rounded-[10px] text-black bg-white flex flex-col justify-start items-center"
        >
          <Image
            src={item.img}
            alt="portfolio"
            // width={500}
            // height={500}
            className="object-cover rounded-tl-[10px] rounded-tr-[10px] w-full h-full"
          />

          {/* bottom container */}
          <div className="flex items-center justify-around w-full h-auto gap-1 p-4">
            <div className="xl:min-w-[244px] w-auto h-full flex flex-col justify-start items-center gap-1 text-[#000000] xl:text-base lg:text-sm text-xs font-normal">
              <h1 className="flex  h-auto text-base lg:text-xl font-semibold  flex-nowrap w-full">
                {item.title}
              </h1>
              <p className="w-full h-auto">{item.description}</p>
            </div>
            <div className=" bg-white rounded-[50%] shadow-sm" onClick={() => showModal(item)}>
              <span
                className="border-[2px] rounded-full border-[#00C9A2] xl:w-[57px] lg:w-10 lg:h-10 xl:h-[57px] w-8 h-8 bg-transparent flex justify-center items-center"
              >
                <Image
                  src={redirectIcon}
                  alt="portfolio"
                  width={500}
                  height={500}
                  className="object-contain w-3 h-3 lg:w-4 lg:h-4"
                />
              </span>
            </div>
          </div>
        </div>
      ))}
      {currentItem && (
        <Modal
          title={currentItem?.title}
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div className='w-full p-4'>
            <p>{currentItem?.descc}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PortfolioCardComp;
