"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'

const Encryption = () => {
  return (
    <div className="hidden sm:flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-8 md:top-12 lg:top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl md:text-4xl lg:text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-800">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-30px] md:translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[40px] md:w-[50px] translate-y-4 md:translate-y-5 transition-all duration-200 group-hover:translate-y-9 md:group-hover:translate-y-11"
          />
          <img
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10 w-[60px] md:w-[70px]"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[11px] md:text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-6 md:bottom-[10px] px-[5px]">
        <div className="cursive text-lg md:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  )
}

export default Encryption