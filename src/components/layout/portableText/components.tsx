import { type SanityImageAsset } from "@/types/sanity/sanity.types";
import { type PortableTextReactComponents } from "next-sanity";
import { urlFor } from "@/libs/sanity/fetch";
import Image from "next/image";
import Link from "next/link";

async function PortableTextImage(asset: SanityImageAsset) {
  return (
    <Image
      alt={asset.altText || " "}
      loading="lazy"
      src={(await urlFor(asset)).url()}
      width={500}
      height={200}
      className="object-contain rounded-lg"
    />
  );
}

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return <PortableTextImage {...value} />;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
  block: {
    p: ({ children }) => (
      <p className="text-lg text-text-light mb-4">{children}</p>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-text-light mb-4">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl text-moss-600 mb-6 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl mt-12 text-moss-500 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl text-moss-500 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 text-text-light text-lg italic mb-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-5 overflow-clip text-ellipsis">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 overflow-clip text-ellipsis">
        {children}
      </ol>
    ),
  },
};
