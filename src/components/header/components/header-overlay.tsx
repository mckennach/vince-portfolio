"use client";
import { cn } from "@/src/lib/utils";
import React, { useMemo } from "react";
import type { HeaderOverlayProps } from "../types";

const HeaderOverlay = React.forwardRef<HTMLDivElement, HeaderOverlayProps>(
  ({ isOpen, onClick }, ref) => {
    const overlayClasses = useMemo(() => {
      return cn(
        "header-overlay fixed top-0 left-0 h-screen w-screen bg-black opacity-0 transition-opacity duration-300 ease-in-out lg:hidden",
        isOpen ? "pointer-events-auto opacity-80" : "pointer-events-none",
      );
    }, [isOpen]);

    return <div ref={ref} className={overlayClasses} onClick={onClick} />;
  },
);

HeaderOverlay.displayName = "HeaderOverlay ";

export { HeaderOverlay };
