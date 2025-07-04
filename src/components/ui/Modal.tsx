// components/Modal.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalImageSrc: string;
  modalImageAlt: string;
  modalHeader: string;
  modalParagraph1: string;
  modalParagraph2: string;
  modalLinkText: string;
  modalLink: string;
}

export function Modal({
  open,
  onClose,
  modalImageSrc,
  modalImageAlt,
  modalHeader,
  modalParagraph1,
  modalParagraph2,
  modalLinkText,
  modalLink,
}: ModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm px-10 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-moss-200 rounded-lg shadow-xl w-full max-w-5xl py-4 md:py-10 lg:py-16 px-5 md:px-2  transform transition-all duration-500 ${
          show ? "scale-100 opacity-100" : "scale-30 opacity-0"
        } flex flex-col justify-center items-center md:flex-row`}
      >
        <div className="relative w-full h-80  md:w-1/2 ">
          <Image
            src={modalImageSrc}
            alt={modalImageAlt}
            fill
            className="object-contain"
            draggable={false}
          />
        </div>
        <div className="w-full md:w-1/2 text-dark-text p-6 lg:p-0  lg:pr-16 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-2  ">
            {modalHeader}
          </h2>
          <p className="mb-4 text-lg  md:text-xl font-semibold">
            {modalParagraph1}
          </p>
          <p className="mb-4 lg:text-lg">{modalParagraph2}</p>
          <div className="mt-4 ">
            <Link
              onClick={onClose}
              href={modalLink}
              className="inline-block w-full md:w-auto px-8 py-4  text-center md:text-lg rounded-md font-semibold bg-white hover:bg-gray-200  transition-colors duration-300 "
            >
              {modalLinkText}
            </Link>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-1 right-3  sm:hover:cursor-pointer sm:hover:scale-105  text-4xl "
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
