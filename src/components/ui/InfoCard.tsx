import Image from "next/image";
import React from "react";
import Link from "next/link";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
  alt: string;
  link?: string;
}

export function InfoCard({
  imageSrc,
  title,
  description,
  bgColor,
  link = "/",
}: InfoCardProps) {
  return (
    <div
      className={` ${bgColor} flex justify-center items-center w-full h-[140]  lg:h-[200]  rounded-2xl  transition-all duration-300 md:hover:scale-105`}
      style={{
        willChange: "transform",
      }}
    >
      <div className="w-full flex justify-center items-center select-none ">
        <div className="p-2">
          <Image
            src={imageSrc}
            alt={title}
            width={100}
            height={100}
            draggable={false}
            className=" w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]"
          />
        </div>
        <div className=" flex flex-col justify-center p-4 xl:px-8 ">
          <h2 className="h-full text-2xl  font-bold  ">{title}</h2>
          <p className="mt-2 text-sm sm:text-base">{description}</p>
          <div className="mt-2 lg:mt-6">
            <Link href={link}>
              <button className="text-sm lg:text-base rounded-lg py-1 px-4  bg-white text-[var(--text-dark)] font-semibold  md:hover:bg-accept-600 md:hover:text-[var(--text-light)] transition-colors duration-300 cursor-pointer">
                Se mer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
