import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-800 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
          <ProjectCard
            src="/RealEstateCluster.png"
            title="Analisis Faktor Utama Penentu Nilai Properti di Taipei Menggunakan PCA dan K-Means untuk Clustering pada Dataset Real Estate Valuation"
            description="Performed PCA and K-Means clustering on Taipei real estate data to identify key property value drivers and segment the market into four actionable clusters for investment insight."
          />
          <ProjectCard
            src="/NitrosterDocumentation.png"
            title="Nitroster - Coffee E-Commerce Website"
            description="Developed an e-commerce platform dedicated to local coffee businesses, aiming to support MSME digitalization and improve market accessibility.
            The platform allows partners to manage products, track orders, and engage with customers online, helping small roasters grow their brand presence.
            Built with a focus on responsive design, scalability, and user experience, it bridges traditional business models with the digital marketplace."
          />
          <ProjectCard
            src="/Distributed.png"
            title="Real-Time Auction System - Distributed Multi-Client Network Simulation"
            description="Developed a real-time auction system using socket programming and a distributed multi-client architecture within GNS3.
            Simulated live bidding with secure TCP/IP communication, VPN, and NAT integration to ensure reliability and scalability.
            Showcases how distributed systems enable real-world online auctions with data integrity and secure connectivity."
          />
        </div>
      </div>
    </section>
  )
}

export default Projects