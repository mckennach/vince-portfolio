import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { AboutTemplateProps } from "./types";

const AboutTemplate = ({ data }: AboutTemplateProps) => {
  const { description, featured_image } = data;
  return (
    <section className="w-full py-28">
      <div className="px-container mx-auto grid grid-cols-6 items-center gap-8 lg:grid-cols-12">
        <div className="col-span-full flex h-full max-h-max flex-col items-center gap-y-8 lg:order-1 lg:col-start-7 lg:col-end-11">
          <PrismicRichText field={description} />
        </div>
        <div className="col-span-full lg:col-end-6">
          <PrismicNextImage field={featured_image} fallbackAlt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutTemplate;
