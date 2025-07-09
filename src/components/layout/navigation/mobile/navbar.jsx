"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full rounded-2xl shadow-navbar lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-between items-center ">
        <div className="m-6">
          <Link href="/" scroll={true}>
            <img
              width={150}
              height={150}
              src="/BW_Logo.png"
              alt="BergenWorks logo"
              className="rounded-2xl"
            />
          </Link>
        </div>
        <button
          className="lg:hidden  mx-10 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-end space-y-4 p-8 lg:flex lg:flex-row lg:gap-8  lg:space-y-0 lg:text-xl lg:items-end font-medium `}
      >
        <li>
          <Link
            href="/fasiliteter"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Fasiliteter
          </Link>
        </li>
        <li>
          <Link
            href="/medlemskap"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Medlemskap
          </Link>
        </li>
        <li>
          <Link
            href="/inkubator"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Inkubator
          </Link>
        </li>
        <li>
          <Link
            href="/omoss"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Om oss
          </Link>
        </li>
        <li>
          <Link
            href="/articlez"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Artikler
          </Link>
        </li>
      </ul>
    </nav>
  );
}
