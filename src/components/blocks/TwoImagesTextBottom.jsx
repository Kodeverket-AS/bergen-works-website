
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function TwoImagesTextBottom({ value }) {
  return (
    <div className="my-8 text-moss-600 font-sans">
      <div className="flex gap-4 mb-4">
        {value.images?.map((img, i) => (
          <div
            key={i}
            className="relative flex-1 h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src={img.asset.url}
              alt={value.altTexts?.[i] || ""}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="text-moss-500 leading-relaxed">
        <PortableText value={value.text} />
      </div>
    </div>
  );
}
