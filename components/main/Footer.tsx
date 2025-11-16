import React from 'react'
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx"

import { FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-auto flex flex-col items-center justify-center gap-6">
          <div className="flex flex-row items-center justify-center gap-8">
            <a href="https://github.com/afzaal99" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity relative z-50">
              <RxGithubLogo size={28} />
              <span className="text-[15px]">GitHub</span>
            </a>
            <a href="https://www.instagram.com/afzaalgbn?utm_source=qr&igsh=MW45emd3d2hxaThvMw==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity relative z-50">
              <RxInstagramLogo size={28} />
              <span className="text-[15px]">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/afzaalghaiyyas/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity relative z-50">
              <RxLinkedinLogo size={28} />
              <span className="text-[15px]">LinkedIn</span>
            </a>
          </div>

          <a href="mailto:m.afzaal.gbn@gmail.com" className="text-[15px] hover:text-gray-300 transition-colors cursor-pointer mb-6 relative z-50">
            m.afzaal.gbn@gmail.com
          </a>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Muhammad Afzaal Ghaiyyas Budi Nurendra 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer


