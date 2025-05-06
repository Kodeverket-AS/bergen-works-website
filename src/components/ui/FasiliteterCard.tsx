import Image from "next/image";

interface FasiliteterCardProps {
  imageSrc: string;
  alt: string;
  headerText: string;
  paragraphText: string;
  smallScreenReverse: boolean;
  largeScreenReverse: boolean;
  cardStyle: string;
  imageContainerStyle: string;
  imageStyle?: string;
  textContainerStyle: string;
  headerStyle: string;
  paragraphStyle: string;
  button?: React.ReactNode;
}

export function FasiliteterCard({
  imageSrc,
  alt = "",
  headerText,
  paragraphText,
  button,
  smallScreenReverse = false,
  largeScreenReverse = false,
  cardStyle = "",
  imageContainerStyle = "",
  imageStyle = "",
  textContainerStyle = "",
  headerStyle = "",
  paragraphStyle = "",
}: FasiliteterCardProps) {
  return (
    <div
      className={`flex w-full h-full px-10 md:px-0 gap-6 mb-10 ${cardStyle} 
        ${smallScreenReverse ? "flex-col-reverse" : "flex-col"} 
        ${largeScreenReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className={`relative w-full ${imageContainerStyle}`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={`object-cover select-none pointer-events-none rounded-2xl ${imageStyle}`}
          draggable={false}
        />
      </div>

      <div
        className={`p-10 shadow-card flex flex-col rounded-2xl ${textContainerStyle}`}
      >
        <h2 className={`font-semibold ${headerStyle}`}>{headerText}</h2>
        <p className={`${paragraphStyle}`}>{paragraphText}</p>
        {<div className="">{button}</div>}
      </div>
    </div>
  );
}
