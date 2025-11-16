import React from 'react'
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden"
    >
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="
            absolute 
            left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            z-[1] 
            object-cover
            top-[61px]
            sm:top-[57px]
            md:top-[54px]
            lg:top-[52px]
            xl:top-[50px]
            2xl:top-[50px]
            w-[600px] h-[280px]
            sm:w-[800px] sm:h-[450px]
            md:w-[1000px] md:h-[570px]
            lg:w-[1200px] lg:h-[680px]
            xl:w-[1500px] xl:h-[790px]
            2xl:w-[1800px] 2xl:h-[900px]"
          style={{
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 80%)',
          }}
        >
          <source src="/BlackHole2.mp4" type="video/webm" />
        </video>
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero;