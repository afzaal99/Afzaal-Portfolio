"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 mt-20 sm:mt-32 md:mt-40 w-full z-[20] gap-8 md:gap-0"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col gap-3 sm:gap-5 justify-center text-center md:text-start order-2 md:order-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0 w-fit md:mt-[40px] lg:mt-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px] md:text-[13px] ">
            Web Development & Data Analysis Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-3 sm:mt-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-800'> Meaningful Digital Experiences </span>
            Through Data and Design
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-3 sm:my-5 max-w-full md:max-w-[580px] px-2 sm:px-0"
        >
          I&apos;m Muhammad Afzaal Ghaiyyas Budi Nurendra, a Computer Science undergraduate specializing in Web Development, Data Analysis, and User Experience Design.
          I create functional and data-driven digital solutions, including e-commerce websites, real-time systems, and analytical models that connect technology with user needs.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="Muhammad_Afzaal_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[200px] mx-auto md:mx-0 hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Download CV
        </motion.a>

      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="
          w-full md:w-1/2 
          h-full 
          flex 
          justify-center 
          items-center 
          order-1 md:order-2 
          sm:flex
          pt-[60px] sm:pt-[70px] md:pt-[5px] lg:pt-[10px] xl:pt-[20px]
          pb-[10px] sm:pb-[10px] md:pb-[20px] lg:pb-[25px] xl:pb-[30px]
          px-[10px] sm:px-[10px] md:px-[20px] lg:px-[30px] xl:px-[40px]
        "
      >
        <div className="
          relative 
          w-[280px] h-[280px] 
          sm:w-[350px] sm:h-[350px] 
          md:w-[400px] md:h-[400px] 
          lg:w-[450px] lg:h-[450px] 
          xl:w-[500px] xl:h-[500px]
          2xl:w-[550px] 2xl:h-[550px]
          translate-x-[5px] sm:translate-x-[5px] md:translate-x-[50px] lg:translate-x-[70px] xl:translate-x-[120px]
        ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
            }}
          >
            <source src="./VideoPortfolioAfzaal.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent