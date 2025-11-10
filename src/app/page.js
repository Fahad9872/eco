import Image from "next/image";
import HeroSection from "./components/HomeLanding/HeroSection";
import ComplexImageGridSection from "./components/HomeLanding/ComplexImageGridSection";
import ProductGridSection from "./components/HomeLanding/ProductGridSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ComplexImageGridSection />
      <ProductGridSection />
    </main>
  );
}
