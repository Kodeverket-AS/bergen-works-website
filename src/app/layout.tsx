import type { Metadata } from "next";
import "@/assets/styles/global.css";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
