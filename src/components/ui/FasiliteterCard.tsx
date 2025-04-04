import Image from "next/image";
import Link from "next/link";

interface FasiliteterCardProps {
  imageSrc: string;
  alt: string;
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonLink: string;
  reverse: boolean;
  cardStyle: string;
  imageContainerStyle: string;
  textContainerStyle: string;
  headerStyle: string;
  paragraphStyle: string;
  buttonStyle?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const FasiliteterCard: React.FC<FasiliteterCardProps> = ({
  imageSrc,
  alt = "",
  headerText,
  paragraphText,
  buttonText,
  buttonLink,
  reverse = false,
  cardStyle = "",
  imageContainerStyle = "",
  textContainerStyle = "",
  headerStyle = "",
  paragraphStyle = "",
  buttonStyle = "",
  imageWidth = 500,
  imageHeight = 350,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row  gap-6 items-start h-full  rounded-lg  mx-auto w-full ${
        reverse ? "lg:flex-row-reverse" : ""
      } 
      items-center rounded-lg  
       m-6 ${cardStyle}`}
    >
      <div className={` w-full ${imageContainerStyle} $`}>
        <Image
          src={imageSrc}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </div>

      <div
        className={`w-full p-10 h-full shadow-card flex flex-col rounded-lg ${textContainerStyle}`}
      >
        <h2 className={`font-bold ${headerStyle}`}>{headerText}</h2>
        <p className={`my-4 h-full   ${paragraphStyle}`}>{paragraphText}</p>
        <div className="flex   lg:justify-start ">
          <Link
            href={buttonLink}
            className={`text-[var(--text-light)] mt-6  lg:my-1 w-full md:w-1/2  xl:w-1/2 px-4 py-4 rounded-md transition-all duration-300 text-center font-semibold bg-moss-600 hover:bg-accept-600 hover:text-[var(--text-dark)] ${buttonStyle}`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FasiliteterCard;
