import Image from "next/image";

export default function Information() {
  return (
    <main className="m-[2em] flex flex-col items-center gap-4 ">
      <div className=" bg-[#1D1D1D] rounded-2xl flex flex-col items-center h-[567px] w-[342px] gap-4  ">
        <Image
          src="/infoImage.png"
          alt="Picture of logo and people in meetingroom"
          width={294}
          height={303}
          className="mt-[1.5em]  rounded-2xl"
          priority
        />
        <div className="text-[var(--text-light)] w-[294px] h-[117px] ">
          <h1 className="font-bold text-[40px]">Co-work</h1>
          <p className="text-base text-start ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis ex fuga sint praesentium!
          </p>
          <button className="mt-[2em] w-[294px] h-[51px] rounded-sm py-4 px-8 bg-white text-[var(--text-dark)] md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
            Ta kontakt
          </button>
        </div>
      </div>
      <div className="w-[342] h-[398] my-[1em]  flex flex-col justify-around ">
        <div className=" flex justify-evenly items-end p-[2em] w-[342] h-[122] rounded-2xl bg-moss-200 text-[var(--text-dark)] ">
          <Image src="/infoIcon1.png" alt="icon" width={58} height={58} />
          <div className=" px-[1.5em] flex flex-col justify-end tracking-wide ">
            <h1 className="text-2xl text-light font-bold leading-10">
              Fast plass
            </h1>
            <p className="">xxxx,- / mnd</p>
          </div>
          <div className="mb-[0.34em] h-full flex items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" flex justify-evenly items-end p-[2em] w-[342] h-[122] rounded-2xl bg-moss-600 text-[var(--text-light)] ">
          <Image src="/infoIcon2.png" alt="icon" width={58} height={58} />
          <div className=" px-[1.5em] flex flex-col justify-end tracking-wide ">
            <h1 className="text-2xl text-light font-bold leading-10">
              Åpen plass
            </h1>
            <p className="">xxxx,- / mnd</p>
          </div>
          <div className="mb-[0.34em] h-full flex items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" flex justify-evenly items-end p-[2em] w-[342] h-[122] rounded-2xl bg-moss-200 text-[var(--text-dark)] ">
          <Image src="/infoIcon3.png" alt="icon" width={58} height={58} />
          <div className=" px-[1.5em] flex flex-col justify-end tracking-wide ">
            <h1 className="text-2xl text-light font-bold leading-10">
              Inkubasjon
            </h1>
            <p className="">Gratis for deltakere</p>
          </div>
          <div className="mb-[0.34em] h-full flex items-end">
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.28767 1.57211L21.1439 20.4283M21.1439 20.4283L21.1439 3.92913M21.1439 20.4283L4.6447 20.4283"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
