import { Backend_and_Data_Analysis, Frontend_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 sm:pb-60 md:pb-80 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center max-w-7xl">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center max-w-7xl">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-2 sm:mt-3 md:mt-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center max-w-7xl">
        {Backend_and_Data_Analysis.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-80 absolute flex items-center justify-center my-25 bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/Saturn.mp4"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 60%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills