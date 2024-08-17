import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function NavFlot(...inputs) {
  return twMerge(clsx(inputs));
}
