"use client";

import Link from "next/link";
import React from "react";
import type { FooterProps } from "./types";
const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ ...props }, ref) => {
    return (
      <footer {...props} ref={ref}>
        <div className="px-container mx-auto">
          <div className="flex w-full items-center justify-between py-8">
            <div>
              <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Vince Calabrese. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <Link href="mailto:email.com">linkedin</Link>

              <Link href="mailto:email.com">email</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = "Footer";

export default Footer;
