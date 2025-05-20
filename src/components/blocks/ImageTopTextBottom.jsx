
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ImageTopTextBottom({ value }) {
  return (
    <div className="my-8 text-moss-600 font-sans">
      {value.image && (
        <div className="relative w-full h-[400px] sm:h-[500px]">
          <Image
            src={value.image.asset.url}
            alt={value.alt || ""}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}
      <div className="mt-4 text-moss-500 leading-relaxed">
        <PortableText value={value.text} />
      </div>
    </div>
  );
}
