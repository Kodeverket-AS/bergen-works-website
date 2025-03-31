"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" pr-5 pl-5 top-0 sticky z-30 lg:flex justtify-between lg:justify-between 3xl:px-80 mb-8 ">
      <div className="flex justify-between items-center">
        <img
          src="/BW_Logo.png"
          alt="BergenWorks logo"
          className="rounded-2xl h-17 w-37 "
        />

        <button
          className="lg:hidden  text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-end space-y-4 pb-5 lg:flex lg:flex-row lg:gap-8  lg:space-y-0 lg:text-xl lg:items-end`}
      >
        <li>
          <Link href="/fasiliteter" className=" hover:underline lg:text-lg" onClick={handleLinkClick}>Fasiliteter</Link>
        </li>
        <li>
          <Link href="/medlemskap" className=" hover:underline lg:text-lg" onClick={handleLinkClick}>Medlemskap</Link>
        </li>
        <li>
          <Link href="/inkubator" className=" hover:underline md:text-lg" onClick={handleLinkClick}>Inkubator</Link>
        </li>
        <li>
          <Link href="Om oss" className=" hover:underline md:text-lg" onClick={handleLinkClick}>Om oss</Link>
        </li>
        <li>
          <Link href="Artikler" className=" hover:underline md:text-lg" onClick={handleLinkClick}>Artikler</Link>
        </li>
      </ul>
    </nav>
  );
}