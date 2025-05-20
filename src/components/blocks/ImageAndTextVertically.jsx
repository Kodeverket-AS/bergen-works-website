import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function ImageAndTextVertically({ value }) {
  return (
    <div className="flex flex-col items-center mb-8 gap-4">
      <Image
        src={value.image.asset.url}
        alt={value.alt}
        width={600}
        height={400}
        className="rounded-lg object-cover"
      />
      <div className="max-w-3xl">
        <PortableText value={value.text} />
      </div>
    </div>
  );
}
