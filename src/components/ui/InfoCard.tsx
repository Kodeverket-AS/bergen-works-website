import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
  alt: string;
  link?: string;
}

const InfoCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  bgColor,
  link = "/",
}) => {
  return (
    <div
      className={` ${bgColor} flex justify-center items-center w-[342] h-[122] md:w-[430px] lg:h-[170] lg:w-[325] xl:w-[400px] rounded-2xl  transition-all duration-300 md:hover:scale-105`}
      style={{
        willChange: "transform",
      }}
    >
      <div className="w-full flex justify-center items-center gap-x-10">
        <div>
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            className="mx-2 w-[70px] h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[125px] xl:h-[125px]"
          />
        </div>
        <div className=" flex flex-col justify-center w-1/2 ">
          <h2 className="h-full text-2xl  font-bold ">{title}</h2>
          <p className="mt-2 text-sm sm:text-base">{description}</p>
          <div className="mt-2 lg:mt-6">
            <Link href={link}>
              <button className="text-sm rounded-sm py-1 px-4  bg-white text-[var(--text-dark)] font-semibold  md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
                Se mer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
