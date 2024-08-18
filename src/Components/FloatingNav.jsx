"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [activeIndex, setActiveIndex] = useState(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });


  
  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100 ,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit  fixed top-2 inset-x-0 mx-auto border p-1 md:p-0 rounded-2xl bg-primary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  items-center justify-center space-x-4 border-white/[0.2]",
          className
        )}
      >
        {navItems.map((navItem , idx) => (
          <Link
            key={`link=${idx}`}
            // key={`${idx}`}
            href={navItem.link}
            className={cn(
              `relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600   md:hover:bg-blue-500/15 rounded-xl py-2 px-1  md:px-4 md:py-4 
              ${ activeIndex === idx ? 'bg-blue-500' : 'bg-transparent'}`
            )}
            onClick={() => {handleFocus(idx)}}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm">{navItem.name}</span>
          </Link>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};
