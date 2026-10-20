// * imports
import Image from "next/image";
// * local imports
import HeroComp1 from "@/components/HeroComp1";
import HeroComp from "@/components/HeroComp";
import ServicesComp from "@/components/ServicesComp";
import PortfolioComp from "@/components/Portfolio";
import FAQComp from "@/components/FAQ";
import ContactUsComp from "@/components/ContactUs";
import BlogComp from "@/components/BlogComp";

export default function Home() {

  return (
    <main className="w-full h-auto">
      <HeroComp />
      <HeroComp1 />
      <ServicesComp />
      <PortfolioComp />
      <FAQComp />
      <ContactUsComp />
      {/* <BlogComp /> */}
    </main>
  );
}
