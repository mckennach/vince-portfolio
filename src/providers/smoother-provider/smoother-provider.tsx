"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { SmootherContext } from "./smoother-context";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const SmootherProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // 1. Create the smoother instance
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      smootherRef.current = smoother;

      // 2. Reset scroll to top immediately on route change
      // This prevents the "disappearing" effect caused by being scrolled
      // past the height of the new page.
      window.scrollTo(0, 0);
      smoother.scrollTop(0);

      // 3. Force a calculation refresh
      ScrollTrigger.refresh();

      return () => {
        // 4. Cleanup: kill the instance so the new route starts fresh
        smoother.kill();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <SmootherContext.Provider value={smootherRef}>
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          {children}
        </div>
      </div>
    </SmootherContext.Provider>
  );
};

export default SmootherProvider;
