import { clsx, type ClassValue } from "clsx";
import { ImageLoaderProps } from "next/image";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getRoute = (
  slug?: string[],
): {
  uid: string;
  documentType: "page" | "project";
} => {
  if (!slug)
    return {
      uid: "home",
      documentType: "page",
    };

  if (slug.length === 1) {
    return {
      uid: slug[0],
      documentType: "page",
    };
  }

  return {
    uid: slug[slug.length - 1],
    documentType: slug[0] as "page" | "project",
  };
};

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const imageUrl = new URL(src);
  return imageUrl.search
    ? `${src}&w=${width}&q=${quality || 75}`
    : `${src}?w=${width}&q=${quality || 75}`;
};
