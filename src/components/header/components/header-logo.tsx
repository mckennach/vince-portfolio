"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "../../icon";
import type { HeaderLogoProps } from "../types";

const HeaderLogo = React.forwardRef<HTMLDivElement, HeaderLogoProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className="pointer-events-auto z-1 col-span-3 flex items-end justify-between lg:col-span-3"
        aria-expanded={isOpen}
      >
        <Link href="/" onClick={onClick}>
          <Icon name="logo" className="max-w-full" />
        </Link>
      </div>
    );
  },
);

HeaderLogo.displayName = "HeaderLogo ";

export { HeaderLogo };
