"use client";
import React from "react";
import Hero from "../components/layout/navigation/hero/Hero";
import Partnere from "../components/Partnere";
import Fasiliteter from "../components/Fasiliteter";
import InformationSection from "@/components/Informasjon";
import ArticlesMain from "../components/ArticlesMain";
/* import KontaktForm from "../components/KontaktForm"; */
import Events from "../components/Events";
import { ContactForm } from "@/components/forms/ContactForm";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <InformationSection />
      <Fasiliteter />
      <Partnere />
      <ArticlesMain />
      <Events />
      {/* <KontaktForm /> */}
      <ContactForm />
    </main>
  );
}
