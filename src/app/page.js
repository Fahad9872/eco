import Image from "next/image";
import HeroSection from "./components/HomeLanding/HeroSection";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import ComplexImageGridSection from "./components/HomeLanding/ComplexImageGridSection";
import ProductGridSection from "./components/HomeLanding/ProductGridSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <NewArrivals/> */}
      <ComplexImageGridSection />
      <ProductGridSection />
    </main>
  );
}
