"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-[40px] font-bold text-white max-w-[600px] w-auto h-auto"
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-800'> Skills </span>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[-10px] text-center"
      >
        never miss a task, deadline or idea
      </motion.div>
    </div>
  )
}

export default SkillText