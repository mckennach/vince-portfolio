import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `ImageTextSection`.
 */
export type ImageTextSectionProps =
  SliceComponentProps<Content.ImageTextSectionSlice>;

/**
 * Component for "ImageTextSection" Slices.
 */
const ImageTextSection: FC<ImageTextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_text_section (variation: {slice.variation}
      ) slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
      {/**
       * 💡 Use the Prismic MCP server with your code editor
       * 📚 Docs: https://prismic.io/docs/ai#code-with-prismics-mcp-server
       */}
    </section>
  );
};

export default ImageTextSection;
