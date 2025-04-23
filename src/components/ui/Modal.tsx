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
      className="fixed inset-0 z-10 flex items-center justify-center md:flex-row bg-black/50 backdrop-blur-sm p-4 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-moss-200 rounded-lg shadow-2xl w-full max-w-5xl py-10 px-6  transform transition-all duration-500 ${
          show ? "scale-100 opacity-100" : "scale-50 opacity-0"
        } flex flex-col justify-center items-center md:flex-row`}
      >
        <div className="relative w-full h-80 md:w-1/2 md:h-[350px] ">
          <Image
            src={modalImageSrc}
            alt={modalImageAlt}
            fill
            className="object-contain"
            draggable={false}
          />
        </div>
        <div className="w-full md:w-1/2 text-[var(--text-dark)]  p-6 md:p-6 flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">{modalHeader}</h2>
          <p className="mb-4 text-lg  md:text-xl">{modalParagraph1}</p>
          <p className="mb-4 md:text-lg">{modalParagraph2}</p>
          <div className="mt-4 ">
            <Link
              href={modalLink}
              className="inline-block w-full md:w-auto px-4 py-2 text-center md:text-lg rounded-md font-semibold bg-white hover:bg-gray-200  transition-colors duration-300 "
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
