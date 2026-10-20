// * imports
import React from "react";
import Image from "next/image";

// * local imports
import ContactDesign from "@/public/ContactDesign.png";
import FormContactUsComp from "./Form-ContactUs";

const ContactUsComp = () => {
  const obfuscate = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ display: 'none' }}>{char}</span>
    )).concat(text.split('').map((char, index) => (
      <span key={index + text.length}>{char}</span>
    )));
  };

  const email = "info@newdefines.com";
  const phone = "514-659-5337";

  return (
    <>
      {/* main container */}
      <div
        id="contactUs"
        className="flex flex-col gap-8 items-start p-[5%] justify-start w-full h-auto min-h-screen lg:flex-row bg-[#dff2f6]"
      >
        {/* left div */}
        <div className="w-full h-full space-y-8 lg:w-1/2">
          <div className="flex flex-col items-start justify-start w-full h-auto gap-3">
            <h1 className="text-fNavyBlue text-[40px] font-bold">Contact Us</h1>
            <span className="text-[#000000] font-normal xl:text-base lg:text-sm text-xs">
              {`  We'd love to hear from you! Whether you have questions about our services, need support, or
            want to discuss your project, feel free to reach out`}
            </span>
            <ul>
              <li>● Email: <a href={`mailto:${email}`}>{obfuscate(email)}</a></li>
              <li>● Phone: <a href={`tel:${phone}`}>{obfuscate(phone)}</a></li>
              <li>
                ● Contact Form: Fill out the form on our website for a quick
                response.
              </li>
            </ul>
            <span>Our team is ready to assist you and provide the information you need. Get in touch with us
              today</span>
          </div>

          <Image
            src={ContactDesign}
            alt="FAQDesign"
            width={500}
            height={500}
            className="object-contain xl:max-w-[591px] w-auto xl:max-h-[579px] h-auto"
          />
        </div>

        {/* right div */}
        <div className="flex items-center justify-center w-full h-full p-4 lg:w-1/2">
          <FormContactUsComp />
        </div>
      </div>
    </>
  );
};

export default ContactUsComp;
