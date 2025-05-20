import React from "react";
import Image from "next/image";

export default function FourImageGrid({ value }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 text-moss-600 font-sans">
      {value.images?.map((img, i) => (
        <div key={i} className="relative h-[250px] rounded-lg overflow-hidden">
          <Image
            src={img.asset.url}
            alt={value.altTexts?.[i] || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}
