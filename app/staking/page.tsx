"use client";
import { HeroComponent } from "@/components/banner/hero";
import { BenefitsComponent } from "@/components/benefits/benefits";
import { FeaturesComponent } from "@/components/features/features";
import { FooterComponent } from "@/components/footer/footer";
import { HowItWorksComponent } from "@/components/how-it-works/how-it-works";
import { StateComponent } from "@/components/stats/stats";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-[100px] gap-[50px] max-w-screen-2xl">
      <HeroComponent />
      <StateComponent />
      <BenefitsComponent />
      <HowItWorksComponent />
      <FeaturesComponent />
      <Image
        className="mx-auto"
        objectFit="cover"
        src="/allLogos.png"
        alt="all logos"
        width={1180}
        height={73}
      />
      <FooterComponent />
    </main>
  );
}
