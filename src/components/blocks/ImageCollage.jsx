
import Image from "next/image";


export default function ImageCollage({ value }) {
  return (
    <div className="my-8 text-moss-600 font-sans">
      {value.mainImage && (
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
          <Image
            src={value.mainImage.asset.url}
            alt={value.mainAlt || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="flex gap-4">
        {value.bottomImages?.map((img, i) => (
          <div
            key={i}
            className="relative flex-1 h-[250px] rounded-lg overflow-hidden"
          >
            <Image
              src={img.asset.url}
              alt={value.bottomAlts?.[i] || ""}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
