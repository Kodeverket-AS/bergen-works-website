"use client"
import React from "react";
import Hero from "../components/layout/navigation/hero/Hero";
import Partnere from "../components/Partnere";
import Fasiliteter from "../components/Fasiliteter";
import InformationSection from "@/components/Informasjon";
import ArticlesMain from "../components/ArticlesMain"

export default function Home() {

  return (
  <main>
    <Hero />
    <InformationSection />
    <ArticlesMain/>
    <Fasiliteter />
    <Partnere />
  </main>
  );
}