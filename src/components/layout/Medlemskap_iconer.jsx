
const Medlemskap_iconer = () => {
  const tiles = [
    {
      src: "wi-fi_logo.png",
      text: "Wi-Fi",
      bg: "bg-moss-200",
      textColor: "text-black",
    },
    {
      src: "./fasilitiesIcons/printer-icon-white.png",
      text: "Printer",
      bg: "bg-moss-600",
      textColor: "text-white",
    },
    {
      src: "telefon-rom_logo.png",
      text: "Phone Booth",
      bg: "bg-moss-200",
      textColor: "text-black",
    },
    {
      src: "./fasilitiesIcons/kaffe-tee-icon-white.png",
      text: "Keffe/Te",
      bg: "bg-moss-600",
      textColor: "text-white",
    },
    {
      src: "./fasilitiesIcons/moterom-icon-white.png",
      text: "Møterom",
      bg: "bg-moss-600",
      textColor: "text-white",
    },
    {
      src: "event_logo.png",
      text: "Eventer/Kurs",
      bg: "bg-moss-200",
      textColor: "text-black",
    },
    {
      src: "./fasilitiesIcons/kjokken-icon-white.png",
      text: "Kjøkken",
      bg: "bg-moss-600",
      textColor: "text-white",
    },
    {
      src: "nettverk_logo.png",
      text: "Nettverk",
      bg: "bg-moss-200",
      textColor: "text-black",
    },
  ];
  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center ${tile.bg} ${tile.textColor} rounded-2xl p-4 shadow-md transition-all`}
          >
            <img
              className="h-20 w-20 object-contain"
              src={tile.src}
              alt={tile.text}
            />
            <p className="text-center text-lg md:text-xl mt-2">{tile.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Medlemskap_iconer;