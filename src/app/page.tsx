import React from "react";
import Hero from "../components/layout/hero/page";
import Partnere from "../components/layout/partnere/page";
import Fasiliteter from "../components/layout/fasilteter/page";
import Kontaktform from "../components/layout/kontaktform/page";

export default function Home() {
  return (
  <main>
    <Hero />
    <Fasiliteter />
    <Partnere />
    <Kontaktform />
  </main>
  );
}
