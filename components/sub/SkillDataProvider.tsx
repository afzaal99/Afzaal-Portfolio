"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative"
    >
      <img
        src={src}
        alt="skill icon"
        className="
          w-auto h-auto
          scale-[0.75] 
          sm:scale-[0.85] 
          md:scale-[0.95] 
          lg:scale-100
          transition-transform duration-300
          hover:scale-110
        "
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </motion.div>
  );
};

export default SkillDataProvider;