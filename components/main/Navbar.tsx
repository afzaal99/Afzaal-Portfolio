"use client"
import { useState } from 'react'
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10 hidden md:block">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <img
              src="/AFZ.png"
              alt="logo"
              width={70}
              className="ccursor-pointer hover:animated-slowspin w-[60px] md:w-[65px] lg:w-[70px] xl:w-[75px]"
            />
            <span className="font-bold text-gray-300 mx-3 md:mx-4 lg:mx-5 text-base md:text-lg lg:text-xl">
              Afzaal GBN
            </span>
          </a>

          <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer hover:text-yellow-600 transition-colors">About me</a>
              <a href="#skills" className="cursor-pointer hover:text-yellow-600 transition-colors">Skills</a>
              <a href="#projects" className="cursor-pointer hover:text-yellow-600 transition-colors">Projects</a>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://www.instagram.com/afzaalgbn?utm_source=qr&igsh=MW45emd3d2hxaThvMw==" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity">
              <RxInstagramLogo size={28} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/afzaalghaiyyas/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity">
              <RxLinkedinLogo size={28} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar*/}
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:hidden">
        <div className="w-full h-full flex flex-row items-center justify-between">
          <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <img
              src="/AFZ.png"
              alt="logo"
              width={50}
              className="cursor-pointer w-[64px] xs:w-[67px] sm:w-[70px]"
            />
          </a>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="https://www.instagram.com/afzaalgbn?utm_source=qr&igsh=MW45emd3d2hxaThvMw==" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity">
              <RxInstagramLogo className="text-white w-[25px] h-[25px] xs:w-[27px] xs:h-[27px] sm:w-[29px] sm:h-[29px]" />
            </a>
            <a href="https://www.linkedin.com/in/afzaalghaiyyas/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-70 transition-opacity">
              <RxLinkedinLogo className="text-white w-[25px] h-[25px] xs:w-[27px] xs:h-[27px] sm:w-[29px] sm:h-[29px]" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar