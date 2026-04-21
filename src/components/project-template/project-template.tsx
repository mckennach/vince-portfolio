"use client";

import { cn } from "@/src/lib/utils";
// import { useGSAP } from "@gsap/react";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ProjectTemplateProps } from "./types";

gsap.registerPlugin(ScrollTrigger);

interface ProjectTemplatePropsWithChildren extends ProjectTemplateProps {
  children?: React.ReactNode;
}

const ProjectTemplate = ({
  data,
  className,
}: ProjectTemplatePropsWithChildren) => {
  const { title, description, tags, image_gallery } = data;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(
  //   () => {
  //     const section = sectionRef.current;
  //     const text = textRef.current;
  //     const textContainer = textContainerRef.current;
  //     const images = imagesRef.current;

  //     if (!section || !text || !images || !textContainer) return;

  //     let trigger: ScrollTrigger;

  //     const init = () => {
  //       ScrollTrigger.refresh();

  //       const scrollDistance = images.offsetHeight - textContainer.offsetHeight;

  //       if (scrollDistance <= 0) {
  //         console.warn("Scroll distance invalid:", scrollDistance);
  //         return;
  //       }

  //       trigger = ScrollTrigger.create({
  //         trigger: section,
  //         start: "top top",
  //         end: `+=${scrollDistance}`,
  //         pin: text,
  //         pinSpacing: false,
  //         markers: true,
  //         invalidateOnRefresh: true,
  //         anticipatePin: 1,
  //         refreshPriority: 1,
  //       });
  //     };

  //     const waitForLayout = () => {
  //       requestAnimationFrame(() => {
  //         requestAnimationFrame(() => {
  //           init();
  //           ScrollTrigger.refresh();
  //         });
  //       });
  //     };

  //     const imagesLoaded = images.querySelectorAll("img");
  //     let loadedCount = 0;

  //     if (imagesLoaded.length === 0) {
  //       waitForLayout();
  //     } else {
  //       imagesLoaded.forEach((img) => {
  //         if (img.complete) {
  //           loadedCount++;
  //         } else {
  //           img.onload = () => {
  //             loadedCount++;
  //             if (loadedCount === imagesLoaded.length) {
  //               waitForLayout();
  //             }
  //           };
  //         }
  //       });

  //       if (loadedCount === imagesLoaded.length) {
  //         waitForLayout();
  //       }
  //     }

  //     return () => {
  //       trigger?.kill();
  //     };
  //   },
  //   { scope: sectionRef, dependencies: [], revertOnUpdate: true },
  // );

  return (
    <div ref={sectionRef}>
      <div className={cn("w-full", className)}>
        <div className="grid grid-cols-6 gap-8 lg:grid-cols-12">
          <div className="col-span-full lg:col-end-7">
            <article
              ref={textRef}
              className="flex max-h-screen flex-col gap-y-8 pl-4 md:pl-12"
            >
              <div
                ref={textContainerRef}
                className="prose lg:prose-xl py-28 pr-4 md:pr-12"
              >
                <PrismicRichText
                  field={title}
                  components={{
                    heading1: ({ children }) => (
                      <h1 className="mb-2.5! text-4xl font-bold">{children}</h1>
                    ),
                  }}
                />
                {tags && (
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    <span className="text-xs italic">
                      {" "}
                      {tags.map((t) => asText(t.tag)).join(", ")}{" "}
                    </span>{" "}
                  </div>
                )}
                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-base">{children}</p>
                    ),
                  }}
                />
              </div>
            </article>
          </div>

          <div
            ref={imagesRef}
            className="col-span-full flex max-h-max flex-col gap-y-8 py-28 pr-4 md:pr-12 lg:col-start-7"
          >
            {image_gallery.map(({ image }, i: number) => (
              <div key={i}>
                <PrismicNextImage
                  field={image}
                  fallbackAlt=""
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
