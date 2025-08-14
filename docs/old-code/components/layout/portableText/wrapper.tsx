import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./components";
import { Article } from "@/types/sanity/sanity.types";

export async function PortableTextWrapper({
  value,
}: {
  value: Article["articleBody"];
}) {
  if (!value) return;
  return <PortableText value={value} components={PortableTextComponents} />;
}
