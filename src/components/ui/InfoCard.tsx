"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { Modal } from "./Modal";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
  link: string;
  modalImageSrc?: string;
  modalImageAlt?: string;
  modalHeader?: string;
  modalParagraph1?: string;
  modalParagraph2?: string;
  modalLinkText?: string;
  modalLink?: string;
  cardStyle: string;
  imageStyle: string;
  textContentStyle: string;
  headerStyle: string;
  paragraphStyle: string;
  arrowStyle: string;
}

export function InfoCard({
  imageSrc,
  title,
  description,
  modalImageSrc = "",
  modalImageAlt = "",
  modalHeader = "",
  modalParagraph1 = "",
  modalParagraph2 = "",
  modalLinkText = "",
  modalLink = "",
  cardStyle,
  imageStyle,
  textContentStyle,
  headerStyle,
  paragraphStyle,
  arrowStyle,
}: InfoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        className={`transition-transform duration-300 will-change-transform ${cardStyle} `}
      >
        <div className={`relative ${imageStyle}`}>
          <Image src={imageSrc} alt={title} fill draggable={false} />
        </div>
        <div className={`${textContentStyle}`}>
          <h2 className={`${headerStyle}`}>{title}</h2>
          <p className={`${paragraphStyle}`}>{description}</p>
          <div className="mt-2 lg:mt-6">
            <div className={`${arrowStyle}`}>
              <span className=" text-4xl">→</span>
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
