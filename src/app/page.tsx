import React from "react";
import Hero from "../components/layout/hero/page";
import Partnere from "../components/layout/partnere/page";
import Artikler from "@/components/layout/artikler/artikler";

export default function Home() {
  return (
  <main>
    <Hero />
    <Partnere />
    <Artikler />
  </main>
  );
}
