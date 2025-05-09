// app/layout.tsx
import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Header } from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { SanityProvider } from "@/context/SanityContext";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/400.css";
import { getArticles } from "./sanity/lib/getArticles"; 

export const metadata: Metadata = {
  title: "Bergen Works",
  description:
    "Coworking space i hjertet av Bergen.",
  keywords: [
    "Bergen.Works",
    "cowowrking Bergen",
    "open office",
    "åpent kontorlandskap",
    "moderne arbeidsplass",
    "fleksible arbeidsområder",
    "kontorfellesskap",
    "coworking space",
    "åpent kontor",
    "delt kontor",
    "kreativt arbeidsmiljø",
    "samspill og samarbeid",
    "åpen bedriftskultur",
    "delte kontorlokaler",
    "sosialt arbeidsmiljø",
    "nettverksbygging",
    "lavere kostnader kontor",
    "kontor med fellesskap",
    "felles fasiliteter",
    "fleksible leieavtaler",
    "kontor med møteplasser",
    "inspirasjon og innovasjon",
    "tverrfaglig samarbeid",
    "bedriftsnettsted",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Bergen.Works | Innovation in the heart of the city",
    description:
      "Her har vi drevet med coworking siden 2017. Våre medlemmer er stort sett opptatte av kreativ innovasjon...",
    url: "https://bergen.works/",
    siteName: "Bergen.Works",
    images: [
      {
        url: "/bwbygg.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "no_NO",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const articles = await getArticles(); 

  return (
    <html lang="en">
      <body>
        <SanityProvider articles={articles}>
          <Header />
          {children}
          <Footer />
        </SanityProvider>
      </body>
    </html>
  );
}
