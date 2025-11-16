import React from 'react'

interface Props {
  src: string
  title: string
  description: string
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group flex flex-col w-full md:w-1/3">
      {/* Container gambar dengan tinggi tetap */}
      <div className="relative w-full h-56 overflow-hidden flex-shrink-0 bg-[#0a0118]">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain opacity-70 group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>

      <div className="relative p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard