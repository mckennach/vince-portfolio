import { cn } from "@/src/lib/utils";
import React, { useCallback, useMemo } from "react";
import type { HeaderPanelProps } from "../types";
import { getNavSlices } from "../utils";
import { NavItem } from "./nav-item";

const HeaderPanel = React.forwardRef<HTMLDivElement, HeaderPanelProps>(
  ({ data, isOpen, onClose, className }, ref) => {
    const { middle, last } = getNavSlices(data);

    const handleOnClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    const panelClasses = useMemo(() => {
      return cn(
        "nav-container top-0 left-0 col-span-full h-[90%] lg:h-full w-full overflow-hidden fixed lg:relative  lg:col-start-10 xl:col-start-11 lg:col-end-13",
        "bg-white lg:bg-transparent",
        "lg:grid lg:translate-y-0",
        "px-container lg:px-0",
        "transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)]",
        isOpen ? "translate-y-0" : "-translate-y-full",
        className,
      );
    }, [isOpen, className]);

    const innerPanelClasses = useMemo(() => {
      return cn(
        "h-full w-full lg:grid lg:items-center",
        "lg:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)]",
        isOpen ? "translate-y-0" : "translate-y-full",
      );
    }, [isOpen]);

    return (
      <div ref={ref} className={panelClasses}>
        <div className={innerPanelClasses}>
          <nav className="mt-56 lg:mt-0">
            <ul className="col-span-full items-center gap-x-8 gap-y-1 lg:col-end-13 lg:grid lg:grid-cols-2">
              {middle.map((slice, index) => (
                <li key={slice.id} className="lg:grid">
                  <NavItem
                    field={slice?.primary?.link}
                    label={slice?.primary?.label}
                    onClick={handleOnClose}
                    isOpen={isOpen}
                    index={index + 1}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  },
);

HeaderPanel.displayName = "HeaderPanel";

export { HeaderPanel };
