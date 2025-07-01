"use client";

import Image from "next/image";
import { ContactForm } from "../forms/ContactForm";

export function GetStarted() {
  return (
    <section className="flex w-full h-auto ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-10 my-10 lg:my-15">
          <div className="relative my-10 w-full h-64 md:h-90 lg:h-110 xl:h-auto xl:flex-1">
            <Image className="w-full object-cover rounded-lg" src="/Møte-rom.png" alt="Møterom i Bergen.Works" fill />
          </div>
          <div className="w-full lg:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
