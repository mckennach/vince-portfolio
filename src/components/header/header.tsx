"use client";

import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HeaderLogo,
  HeaderOverlay,
  HeaderPanel,
  HeaderToggle,
} from "./components";
import { useMobileNavigation } from "./hooks";
import type { HeaderProps } from "./types";

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ data }, ref) => {
    const pathname = usePathname();
    const { isOpen, close, toggle } = useMobileNavigation();
    return (
      <header
        ref={ref}
        className={cn(
          "px-container z-header pointer-events-none top-10 left-0 grid w-full grid-cols-6 items-center gap-8 lg:grid-cols-12",
          {
            "fixed lg:top-1/3": pathname === "/" || pathname === "",
            "sticky lg:top-0 lg:py-4": pathname !== "/",
          },
        )}
      >
        {/* Overlay */}
        <HeaderOverlay isOpen={isOpen} onClick={close} />
        {/* Logo */}
        <HeaderLogo isOpen={isOpen} onClick={toggle} />
        {/* Toggle */}
        <HeaderToggle isOpen={isOpen} onToggle={toggle} />
        {/* Panel */}
        <HeaderPanel data={data} isOpen={isOpen} onClose={close} />
      </header>
    );
  },
);

Header.displayName = "Header";

export default Header;
