import type { ProjectDocumentData } from "@/prismicio-types";
import type {
  Content,
  FilledContentRelationshipField,
} from "@prismicio/client";

export type FeaturedProjectProps = Omit<
  FilledContentRelationshipField<ProjectDocumentData>,
  "data"
> & {
  data: ProjectDocumentData;
};

export type FeaturedProjectsPrimaryProps = Omit<
  Content.FeaturedProjectsSliceDefaultPrimary,
  "projects"
> & {
  projects: {
    project: Omit<
      FilledContentRelationshipField<ProjectDocumentData>,
      "data"
    > & {
      data: ProjectDocumentData;
    };
  }[];
};

export type FeaturedProjectItemProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    project: FeaturedProjectProps;
  };

export type FeaturedProjectsProps = {
  primary: FeaturedProjectsPrimaryProps;
  className?: string;
};
