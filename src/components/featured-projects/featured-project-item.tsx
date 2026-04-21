"use client";

import { cn } from "@/src/lib/utils";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";
import type { FeaturedProjectItemProps } from "./types";
const FeaturedProjectItem = React.forwardRef<
  HTMLAnchorElement,
  FeaturedProjectItemProps
>(({ project, ...props }, ref) => {
  const { slug, data } = project;
  const { title, featured_image, tags } = data;

  return (
    <Link
      href={`/project/${slug}`}
      className="group block"
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          "w-full max-w-full cursor-pointer text-left",
          props.className,
        )}
      >
        <div className="relative w-full max-w-full overflow-hidden rounded-sm">
          <div>
            <PrismicNextImage
              className="h-auto w-full object-cover"
              field={featured_image}
              fallbackAlt=""
            />
          </div>

          <div className="from-foreground/80 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-4 transition duration-300 lg:opacity-0 lg:group-hover:opacity-100">
            <div>
              <PrismicRichText
                field={title}
                components={{
                  heading1: ({ children }) => (
                    <h3 className="text-background font-sans text-3xl font-bold tracking-wider italic transition duration-700 lg:translate-y-[150%] lg:group-hover:translate-y-0">
                      {children}
                    </h3>
                  ),
                }}
              />
              {tags && (
                <div className="flex flex-wrap gap-2 transition duration-1500 lg:opacity-0 lg:group-hover:opacity-100">
                  {" "}
                  <span className="text-background text-xs italic">
                    {" "}
                    {tags.map((t) => asText(t.tag)).join(", ")}{" "}
                  </span>{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

FeaturedProjectItem.displayName = "FeaturedProjectItem";

export { FeaturedProjectItem };
