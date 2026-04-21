"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { createContext } from "react";

export const SmootherContext =
  createContext<React.RefObject<ScrollSmoother | null> | null>(null);
