"use client";

import Image from "next/image";
import { ContactForm } from "../forms/ContactForm";

export function GetStarted() {
  return (
    <section className="flex w-full h-auto ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 my-10 md:my-15">
          <div className="w-full md:flex-1">
            <ContactForm />
          </div>
          <div className="relative my-10 w-full md:flex-1">
            <Image className="w-full object-cover rounded-lg" src="/Møte-rom.png" alt="Møterom i Bergen.Works" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
