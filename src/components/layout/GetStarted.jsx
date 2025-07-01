"use client";

import Image from "next/image";
import { ContactForm } from "../forms/ContactForm";

export function GetStarted() {
  return (
    <section className="flex w-full h-auto my-4 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-4 ">
          <div className="relative  w-full h-64 md:h-90 lg:h-100 xl:h-auto xl:flex-1">
            <Image className="w-full object-cover rounded-2xl" src="/Møte-rom.png" alt="Møterom i Bergen.Works" fill />
          </div>
          <div className="w-full lg:flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
