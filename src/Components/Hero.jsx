"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from 'react'
import { FlipWords } from "./ui/FlipWords";


export  function Hero() {


    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%","100%"])
    const textY = useTransform(scrollYProgress, [0,1], ["0%","100%"])
    const mount1Y = useTransform(scrollYProgress, [0,1], ["0%","40%"])





    return (

        <div>
            {/* <p className="text-center absolute inset-x-0 top-20 z-10 ">dsjfksjf</p> */}
            
        
                                   
            <div
            ref={ref}

            className='w-full h-screen overflow-hidden relative grid place-items-center'>
                <motion.h1 
                    style={{y:textY}}
                    className=" absolute inset-x-0 z-10 text-3xl md:text-7xl text-center sm:mt-20 md:mt-8 text-transparent stroke-text  font-bold">
                        <span className="mx-1 "><FlipWords/></span > Japanese 
                        
                        
                 </motion.h1>
                
            
            <motion.div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url('assets/hero-imgs/Hero.png')`,
                    backgroundPosition: 'bottom',
                    backgroundSize: "cover",
                    y:backgroundY
                }}
            />
           
            
            <motion.div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url('assets/hero-imgs/Group2.png')`,
                    backgroundPosition: 'bottom',
                    backgroundSize: "cover",
                    y:mount1Y

                }}
            />
            <motion.div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url('assets/hero-imgs/Group1.png')`,
                    backgroundPosition: 'bottom',
                    backgroundSize: "cover",
                   
                    

                }}
            />
           



        </div>
        </div>
    )
}

export default Hero