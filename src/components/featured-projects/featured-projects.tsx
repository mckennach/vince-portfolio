import { cn } from "@/src/lib/utils";
import { FeaturedProjectItem } from "./featured-project-item";
import type { FeaturedProjectsProps } from "./types";

const FeaturedProjects = ({ primary, className }: FeaturedProjectsProps) => {
  const { projects } = primary;
  return (
    <div
      className={cn(
        "px-container z-100 min-h-screen w-full py-24 lg:py-14",
        className,
      )}
    >
      <div className="grid grid-cols-6 items-center gap-8 lg:grid-cols-12">
        <div className="col-span-full flex flex-col gap-y-8 lg:col-start-4 lg:col-end-10 xl:col-end-11">
          {projects.map(({ project }, index) => {
            return <FeaturedProjectItem key={index} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

FeaturedProjects.displayName = "FeaturedProjects";

export default FeaturedProjects;
