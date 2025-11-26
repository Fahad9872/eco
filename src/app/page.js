import Image from "next/image";
import HeroSection from "./components/HomeLanding/HeroSection";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import ComplexImageGridSection from "./components/HomeLanding/ComplexImageGridSection";
import ProductGridSection from "./components/HomeLanding/ProductGridSection";
import HappyCustomersSection from "./components/HomeLanding/HappyCustomersSection";
import NewsletterSection from "./components/HomeLanding/NewsletterSection";
import MainFooter from "./components/HomeLanding/MainFooter";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <NewArrivals/> */}
      <ComplexImageGridSection />
      <ProductGridSection />
      <HappyCustomersSection />
      <NewsletterSection />
      <MainFooter />
    </main>
  );
}
