
import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Header } from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { SanityProvider } from "@/components/SanityContext"; 
import "@fontsource/space-grotesk"; 
import "@fontsource/space-grotesk/400.css";





export const metadata: Metadata = {
  title: "Bergen Works",
  description: "Nettside for Bergen Works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SanityProvider>
          <Header />
          {children}
          <Footer />
        </SanityProvider>
      </body>
    </html>
  );
}
