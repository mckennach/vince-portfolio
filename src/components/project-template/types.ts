import type { ProjectDocument } from "@/prismicio-types";

export type ProjectTemplateProps = ProjectDocument<string> & {
  className?: string;
};
