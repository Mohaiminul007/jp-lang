import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function FlipWordsLib(...inputs) {
  return twMerge(clsx(inputs));
}
