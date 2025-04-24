'use client';
import Image from "next/image";
import HeroSection from "@/component/herosection";
import Header from "@/component/header";
import Frequently from "@/component/faq";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Frequently />
    </div>
    
  );
}
