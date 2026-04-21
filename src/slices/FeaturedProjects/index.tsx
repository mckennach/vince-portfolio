import FeaturedProjectsList from "@/src/components/featured-projects";
import { FeaturedProjectsProps as FeaturedProjectPropsFC } from "@/src/components/featured-projects/types";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `FeaturedProjects`.
 */
export type FeaturedProjectsProps =
  SliceComponentProps<Content.FeaturedProjectsSlice>;

/**
 * Component for "FeaturedProjects" Slices.
 */
const FeaturedProjects: FC<FeaturedProjectsProps> = ({ slice }) => {
  const featuredProjects =
    slice.primary as Content.FeaturedProjectsSliceDefaultPrimary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FeaturedProjectsList
        primary={slice.primary as FeaturedProjectPropsFC["primary"]}
      />
    </section>
  );
};

export default FeaturedProjects;
