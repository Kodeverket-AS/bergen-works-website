export function NavBarDesktop() {
  return (
<nav className="pr-12 top-0 md: px-12 sticky z-30  lg:flex justtify-between lg:justify-between 3xl:px-80 mb-8 ">
      <div className="flex justify-between items-center">
        <img
          src="/BW_Logo.png"
          alt="BergenWorks logo"
          className="rounded-2xl h-17 w-37 "
        />

        <button
          className="lg:hidden  text-4xl"
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
          <a
            href="Fasiliteter"
            className=" hover:underline lg:text-lg"
            onClick={handleLinkClick}
          >
            Fasiliteter
          </a>
        </li>
        <li>
          <a
            href="Medlemskap"
            className=" hover:underline lg:text-lg"
            onClick={handleLinkClick}
          >
            Medlemskap
          </a>
        </li>
        <li>
          <a
            href="Inkubator"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Inkubator
          </a>
        </li>
        <li>
          <a
            href="Om oss"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Om oss
          </a>
        </li>
        <li>
          <a
            href="Artikler"
            className=" hover:underline md:text-lg"
            onClick={handleLinkClick}
          >
            Artikler
          </a>
        </li>
      </ul>
    </nav>
  );
}
