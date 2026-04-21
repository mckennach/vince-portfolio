"use client";

import { cn } from "@/src/lib/utils";
import { PrismicNextLink } from "@prismicio/next";
import React, { useMemo } from "react";
import type { NavItemProps } from "../types";

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, field, onClick, isOpen, ...props }, ref) => {
    const spanClasses = useMemo(() => {
      return cn(
        "pointer-events-auto inline-block lg:translate-y-0 transition-transform duration-[500ms] ease-linear",
        isOpen ? "translate-y-0" : "translate-y-full",
      );
    }, [isOpen]);

    return (
      <PrismicNextLink
        {...props}
        ref={ref}
        className="nav-link"
        field={field}
        onClick={onClick}
      >
        <span className={spanClasses}>{label}</span>
      </PrismicNextLink>
    );
  },
);

NavItem.displayName = "NavItem";

export { NavItem };
