"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full m-4 shadow-xl  lg:flex justtify-between lg:justify-between  mb-8 ">
      <div className="flex justify-between items-center">
      <Link href="/" scroll={true}>
        <img
        src="/BW_Logo.png"
        alt="BergenWorks logo"
        className="rounded-2xl m-4 w-1/2 "
        />
      </Link>

        <button
          className="lg:hidden px-10 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-end space-y-4 p-8 lg:flex lg:flex-row lg:gap-8  lg:space-y-0 lg:text-xl lg:items-end`}
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
          <Link href="/omoss" className=" hover:underline md:text-lg" onClick={handleLinkClick}>Om oss</Link>
        </li>
        <li>
          <Link href="Artikler" className=" hover:underline md:text-lg" onClick={handleLinkClick}>Artikler</Link>
        </li>
      </ul>
    </nav>
  );
}