import React from "react";
import Hero from "../components/layout/hero/page";
import Partnere from "../components/Partnere";
import Fasiliteter from "../components/Fasiliteter";
import InformationSection from "@/components/Informasjon";
export default function Home() {
  return (
  <main>
    <Hero />
    <InformationSection />
    <Fasiliteter />
    <Partnere />
  </main>
  );
}