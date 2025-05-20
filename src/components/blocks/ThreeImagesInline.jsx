
import Image from "next/image";

export default function ThreeImagesInline({ value }) {
  return (
    <div className="my-8 flex gap-4 text-moss-600 font-sans">
      {value.images?.map((img, i) => (
        <div
          key={i}
          className="relative flex-1 h-[250px] rounded-lg overflow-hidden"
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
  );
}
