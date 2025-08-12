"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./Modal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
  link?: string;
  isVippsLink?: boolean;
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
  isVippsLink = false,
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
        className={`transition-transform duration-300 will-change-transform ${cardStyle}`}
      >
        <div className={`relative ${imageStyle}`}>
          <Image src={imageSrc} alt={title} fill draggable={false} />
        </div>
        <div className={`${textContentStyle}`}>
          <h4 className={`${headerStyle}`}>{title}</h4>
          <p className={`${paragraphStyle}`}>{description}</p>
          <div className="mt-2 lg:mt-10">
            <div className={`${arrowStyle}`}>
              <ArrowForwardIcon
                sx={{
                  cursor: "pointer",
                  color: "inherit",
                  transition: "color 0.3s ease, transform 0.3s ease",

                  fontSize: "36px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isVippsLink={isVippsLink}
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
