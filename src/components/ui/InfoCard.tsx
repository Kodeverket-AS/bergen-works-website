import Image from "next/image";
import React from "react";

import { useState } from "react";
import { Modal } from "./Modal";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
  alt: string;
  link: string;
  modalImageSrc?: string;
  modalImageAlt?: string;
  modalHeader?: string;
  modalParagraph1?: string;
  modalParagraph2?: string;
  modalLinkText?: string;
  modalLink?: string;
}

export function InfoCard({
  imageSrc,
  title,
  description,
  bgColor,
  modalImageSrc = "",
  modalImageAlt = "",
  modalHeader = "",
  modalParagraph1 = "",
  modalParagraph2 = "",
  modalLinkText = "",
  modalLink = "",
}: InfoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        className={` ${bgColor} flex justify-center items-center w-full h-[140] group cursor-pointer lg:h-[200]  rounded-2xl  transition-all duration-300 md:hover:scale-105`}
        style={{
          willChange: "transform",
        }}
      >
        <div className="w-full flex justify-center items-center select-none ">
          <div className="p-2">
            <Image
              src={imageSrc}
              alt={title}
              width={150}
              height={150}
              draggable={false}
              className=" w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]"
            />
          </div>
          <div className=" flex flex-col justify-center p-4 xl:px-8 ">
            <h2 className="h-full text-2xl  font-bold  ">{title}</h2>
            <p className="mt-2 text-sm sm:text-base">{description}</p>
            <div className="mt-2 lg:mt-6">
              <div className="absolute bottom-4 right-4  transition-transform duration-300 md:group-hover:-translate-x-1 md:group-hover:translate-y-1 md:group-hover:rotate-45">
                <span className=" text-4xl">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalImageSrc={modalImageSrc}
        modalImageAlt={modalImageAlt}
        modalHeader={modalHeader}
        modalParagraph1={modalParagraph1}
        modalParagraph2={modalParagraph2}
        modalLinkText={modalLinkText}
        modalLink={modalLink}
      />
    </>
  );
}
