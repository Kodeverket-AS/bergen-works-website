import type { Metadata } from "next";
import "@/assets/styles/global.css";

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
        {children}
      </body>
    </html>
  );
}
