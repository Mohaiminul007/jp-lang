"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import MagicBtn from "./ui/MagicBtn";


export const FloatingMenu = ({
        // navItems,
        className,
      }) => {
        const { scrollYProgress } = useScroll();
        const [visible, setVisible] = useState(true);
      
        const previousYProgress = useRef(0); // To track the previous scroll position
      
        useMotionValueEvent(scrollYProgress, "change", (current) => {
          // Check if current is not undefined and is a number
          if (typeof current === "number") {
            let direction = current - previousYProgress.current;
      
            // If scrolling down or near the top, show the nav
            if (direction > 0 || scrollYProgress.get() < 0.05) {
              setVisible(true);
            } 
            else {
              // If scrolling up, hide the nav
              setVisible(false);
            }
      
            // Update the previous scroll position
            previousYProgress.current = current;
          }
        });
      
        return (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 1,
                y: 100, // Start from the bottom
              }}
              animate={{
                y: visible ? 0 : 100, // Move up when visible, down when not
                opacity: visible ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className={cn(
                "flex max-w-fit fixed bottom-2 inset-x-0 mx-auto     z-[5000]  items-center justify-center space-x-4 ",
                className
              )}
            >
              {
            //   navItems.map((navItem, idx) => (
                <div
                //   className={cn(
                //     "relative  items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                //   )}
                >
                  {/* <span className="block sm:hidden">{navItem.icon}</span> */}
                  <Link href='/hiragana'>
                    <MagicBtn/>
                  </Link>
                    
                </div>
            //   ))
              }
            </motion.div>
          </AnimatePresence>
        );
      };
  