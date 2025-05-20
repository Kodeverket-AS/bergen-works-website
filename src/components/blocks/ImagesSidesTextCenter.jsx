
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ImagesSidesTextCenter({ value }) {
  return (
    <div className="my-8 flex items-center gap-4 text-moss-600 font-sans">
      {value.leftImage && (
        <div className="relative w-[25%] h-[300px] rounded-lg overflow-hidden">
          <Image
            src={value.leftImage.asset.url}
            alt={value.leftAlt || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="flex-1 text-center text-moss-500 leading-relaxed">
        <PortableText value={value.text} />
      </div>

      {value.rightImage && (
        <div className="relative w-[25%] h-[300px] rounded-lg overflow-hidden">
          <Image
            src={value.rightImage.asset.url}
            alt={value.rightAlt || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
}
