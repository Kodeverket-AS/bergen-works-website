import Image from "next/image";
import Link from "next/link";

interface FasiliteterCardProps {
  imageSrc: string;
  alt: string;
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonLink: string;
  smallScreenReverse: boolean;
  largeScreenReverse: boolean;
  cardStyle: string;
  imageContainerStyle: string;
  textContainerStyle: string;
  headerStyle: string;
  paragraphStyle: string;
  buttonStyle: string;
}

export function FasiliteterCard({
  imageSrc,
  alt = "",
  headerText,
  paragraphText,
  buttonText,
  buttonLink,
  smallScreenReverse = false,
  largeScreenReverse = false,
  cardStyle = "",
  imageContainerStyle = "",
  textContainerStyle = "",
  headerStyle = "",
  paragraphStyle = "",
  buttonStyle = "",
}: FasiliteterCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row w-full h-full ${cardStyle} ${
        smallScreenReverse ? "flex-col-reverse" : "flex-col "
      }
          ${largeScreenReverse ? "md:flex-row-reverse" : "md:flex-row"} 
        `}
    >
      <div className={`relative w-full ${imageContainerStyle}`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover w-full h-full select-none pointer-events-none rounded-2xl "
          draggable={false}
        />
      </div>

      <div
        className={`w-full p-10 h-full shadow-card flex flex-col rounded-2xl ${textContainerStyle}`}
      >
        <h2 className={`font-bold ${headerStyle}`}>{headerText}</h2>
        <p className={` ${paragraphStyle}`}>{paragraphText}</p>
        <div className="flex lg:justify-start md:items-end h-full ">
          <Link
            href={buttonLink}
            className={`px-4 py-4 rounded-md transition-all duration-300 text-center font-semibold focus-visible:outline-none
             focus-visible:ring-4 focus-visible:ring-purple-500 focus-visible:ring-offset-0  ${buttonStyle}`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
