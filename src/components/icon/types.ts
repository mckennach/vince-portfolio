import { SVGProps } from "react";
import * as IconSVGs from "./jsx";

export type IconName = keyof typeof IconSVGs;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
  title?: string;
  color?: string;
}
