import Image from "next/image";

interface FasiliteterCardProps {
  imageSrc: string;
  alt: string;
  headingTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerText: string;
  paragraphText: string;
  smallScreenReverse: boolean;
  largeScreenReverse: boolean;
  cardStyle: string;
  imageContainerStyle: string;
  imageStyle?: string;
  imageInnerDivStyle?: string;
  textContainerStyle: string;
  headerStyle: string;
  paragraphStyle: string;
  button?: React.ReactNode;
}

export function FasiliteterCard({
  imageSrc,
  alt = "",
  headingTag = "h2",
  headerText,
  paragraphText,
  button,
  smallScreenReverse = false,
  largeScreenReverse = false,
  cardStyle = "",
  imageContainerStyle = "",
  imageStyle = "",
  imageInnerDivStyle = "",
  textContainerStyle = "",
  headerStyle = "",
  paragraphStyle = "",
}: FasiliteterCardProps) {
  const Heading = headingTag;

  return (
    <div
      className={`flex w-full h-full mb-10 ${cardStyle}
        ${smallScreenReverse ? "flex-col-reverse" : "flex-col"}
        ${largeScreenReverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div className={`relative w-full ${imageContainerStyle}`}>
        <div className={` ${imageInnerDivStyle}`}>
          {imageStyle ? (
            <Image
              src={imageSrc}
              alt={alt}
              className={`object-contain select-none pointer-events-none rounded-2xl ${imageStyle}`}
              draggable={false}
              fill
            />
          ) : (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className={`object-cover select-none pointer-events-none rounded-2xl`}
              draggable={false}
            />
          )}
        </div>
      </div>

      <div
        className={`p-10 shadow-card flex flex-col rounded-2xl ${textContainerStyle}`}
      >
        <Heading className={`font-semibold ${headerStyle}`}>
          {headerText}
        </Heading>
        <p className={`${paragraphStyle}`}>{paragraphText}</p>
        {<div className="">{button}</div>}
      </div>
    </div>
  );
}
