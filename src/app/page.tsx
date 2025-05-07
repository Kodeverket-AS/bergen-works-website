export const revalidate = 600; // Regenerate the page at most once every 10 minutes

import React from "react";
import Hero from "../components/layout/navigation/hero/Hero";
import Partnere from "../components/Partnere";
import Fasiliteter from "../components/Fasiliteter";
import InformationSection from "@/components/Informasjon";
import ArticlesMain from "../components/ArticlesMain"
import KontaktForm from "../components/KontaktForm"
import { getArticles } from "./sanity/lib/getArticles"

export default async function Home() {
  const last6Articles = await getArticles(6); 

  return (
    <main>
      <Hero />
      <InformationSection />
      <ArticlesMain articles={last6Articles} /> 
      <Fasiliteter />
      <Partnere />
      <KontaktForm />
    </main>
  );
}