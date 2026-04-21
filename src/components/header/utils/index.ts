import { LayoutDocument } from "@/prismicio-types";

export const getNavSlices = (data: LayoutDocument<string>["data"]) => {
  const slices = data.slices ?? [];
  const first = slices[0];
  const last = slices[slices.length - 1];
  const middle = slices.slice(0);

  return { first, middle, last };
};
