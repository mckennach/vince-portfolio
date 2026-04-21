"use client";
import React from "react";
import type { HeaderToggleProps } from "../types";

const HeaderToggle = React.forwardRef<HTMLDivElement, HeaderToggleProps>(
  ({ isOpen, onToggle }, ref) => {
    return (
      <div
        ref={ref}
        className="z-header pointer-events-auto col-start-5 col-end-7 flex items-center justify-end lg:hidden"
      >
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="cursor-pointer"
        >
          MENU
        </button>
      </div>
    );
  },
);

HeaderToggle.displayName = "HeaderToggle";

export { HeaderToggle };
