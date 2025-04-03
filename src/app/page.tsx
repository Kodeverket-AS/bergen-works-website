import React from "react";

import Hero from "../components/layout/navigation/hero/Hero";
import Partnere from "../components/layout/partnere/page";
import Fasiliteter from "../components/layout/fasilteter/page";


export default function Home() {
  return (
  <main>
    <Hero />
    <Fasiliteter />
    <Partnere />
  </main>
  );
}

