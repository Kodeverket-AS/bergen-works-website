import React from "react";
import Hero from "../components/layout/hero/page";
import Partnere from "../components/layout/partnere/page";
import Fasiliteter from "../components/layout/fasilteter/page";
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
