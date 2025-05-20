
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ImageLeftTextRight({ value }) {
  return (
    <div className="my-8 flex gap-4 items-center text-moss-600 font-sans">
      {value.image && (
        <div className="relative w-[45%] h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
          <Image
            src={value.image.asset.url}
            alt={value.alt || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="flex-1 text-moss-500 leading-relaxed">
        <PortableText value={value.text} />
      </div>
    </div>
  );
}
