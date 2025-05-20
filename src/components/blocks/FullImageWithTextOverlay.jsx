import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function FullImageWithTextOverlay({ value }) {
  console.log("ImageTopTextBottom value:", value);

  const positionClasses = {
    center: "inset-0 flex justify-center items-center text-center absolute",
    "top-left": "top-0 left-0 p-4 text-left absolute",
    "bottom-right": "bottom-0 right-0 p-4 text-right absolute",
    "top-right": "top-0 right-0 p-4 text-right absolute",
    "bottom-left": "bottom-0 left-0 p-4 text-left absolute",
    top: "top-0 left-1/2 transform -translate-x-1/2 p-4 text-center absolute",
    bottom:
      "bottom-0 left-1/2 transform -translate-x-1/2 p-4 text-center absolute",
  };

  const posClass =
    positionClasses[value.textPosition] || positionClasses.center;

  return (
    <div className="relative my-8 h-[500px] rounded-lg overflow-hidden text-white font-sans">
      {value.image && (
        <Image
          src={value.image.asset.url}
          alt={value.alt || ""}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      )}
      <div className={posClass}>
        <div className="max-w-lg">
          <PortableText value={value.overlayText} />
        </div>
      </div>
    </div>
  );
}
