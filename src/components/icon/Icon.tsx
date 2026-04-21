import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import * as IconSVGs from "./jsx";
import { IconProps } from "./types";

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    { name, className, size = 16, color = "currentColor", title, ...props },
    ref,
  ) => {
    const IconComponent = IconSVGs[name];

    if (!IconComponent) {
      return null;
    }

    return (
      <IconComponent
        ref={ref}
        className={cn("shrink-0", className)}
        width={size}
        height={size}
        fill={color}
        aria-label={title}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";

export { Icon };
