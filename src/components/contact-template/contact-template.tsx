import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { ContactTemplateProps } from "./types";
const ContactTemplate = ({ data }: ContactTemplateProps) => {
  const { description, featured_image } = data;
  return (
    <section className="w-full py-28">
      <div className="px-container mx-auto grid grid-cols-6 gap-8 lg:grid-cols-12">
        <div className="col-span-full flex flex-col items-center justify-center">
          <PrismicRichText
            field={description}
            components={{
              heading1: ({ children }) => (
                <h1 className="mb-2.5! text-4xl font-bold">{children}</h1>
              ),
            }}
          />
        </div>
        <div className="col-span-full aspect-video overflow-hidden rounded-sm">
          <PrismicNextImage field={featured_image} fallbackAlt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactTemplate;
