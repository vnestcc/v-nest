// components/StartupSection.jsx
"use client";
import React, { useEffect, useState } from 'react';
import HoneycombGrid from './HoneycombGrid';

// Create a client-side only component for stars
const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Only generate stars on the client side after component mounts
    const newStars = Array(100).fill().map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 5
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden z-10 pointer-events-none">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute w-1 h-1 rounded-full bg-white opacity-30"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${star.duration}s infinite ${star.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
};

const StartupSection = () => {
  const startups = [
    {
      id: 1,
      name: "STEMTEC",
      category: "Engineering & Technology",
      description: "STEMTEC provides innovative engineering solutions with cutting-edge technology for industrial applications.",
      logo: "/Startups/STEMTEC_logo.jpg",
      founded: "2021",
      funding: "$2.5M Seed",
      website: "https://example.com"
    },
    {
      id: 2,
      name: "Quinproc",
      category: "Process Automation",
      description: "Quinproc develops advanced process automation technologies for manufacturing and industrial sectors.",
      logo: "/Startups/Quinproc.jpeg",
      founded: "2022",
      funding: "$3.7M Series A",
      website: "https://example.com"
    },
    {
      id: 3,
      name: "Mechonix D2R",
      category: "Robotics & Automation",
      description: "Mechonix D2R creates customizable robotics solutions for diverse industrial applications and automation needs.",
      logo: "/Startups/Mechonix_D2R.png",
      founded: "2020",
      funding: "$4.2M Series A",
      website: "https://example.com"
    },
    {
      id: 4,
      name: "Mechatronix India",
      category: "Mechatronics",
      description: "Mechatronix India specializes in integrated mechanical and electronic systems for precision engineering tasks.",
      logo: "/Startups/Mechatronix India.jpeg",
      founded: "2021",
      funding: "$3.2M Seed",
      website: "https://example.com"
    },
    {
      id: 5,
      name: "MAFKIN ROBOTICS",
      category: "Robotics",
      description: "MAFKIN ROBOTICS designs cutting-edge robotic systems for industrial use and specialized applications.",
      logo: "/Startups/MAFKIN ROBOTICS.jpeg",
      founded: "2023",
      funding: "$5M Series A",
      website: "https://example.com"
    },
    {
      id: 6,
      name: "MEDxAI Innovations",
      category: "Healthcare AI",
      description: "MEDxAI Innovations leverages artificial intelligence to improve healthcare outcomes and diagnostic accuracy.",
      logo: "/Startups/LOGO_MEDxAI_Innovations.jpg",
      founded: "2022",
      funding: "$6.1M Seed",
      website: "https://example.com"
    },
    {
      id: 7,
      name: "JIVAN",
      category: "Sustainable Technologies",
      description: "JIVAN creates sustainable technology solutions for environmental preservation and resource optimization.",
      logo: "/Startups/JIVAN.png",
      founded: "2023",
      funding: "$2.5M Seed",
      website: "https://example.com"
    },
    {
      id: 8,
      name: "INICIOTEK",
      category: "Information Technology",
      description: "INICIOTEK provides advanced IT infrastructure and services for enterprise-level applications.",
      logo: "/Startups/INICIOTEK.jpg",
      founded: "2022",
      funding: "$7M Series A",
      website: "https://example.com"
    },
    {
      id: 9,
      name: "FEYNMAN TECHSOL",
      category: "Technical Solutions",
      description: "FEYNMAN TECHSOL delivers complex technical solutions for engineering and scientific challenges.",
      logo: "/Startups/FEYNMAN_TECHSOL.png",
      founded: "2021",
      funding: "$3.8M Seed",
      website: "https://example.com"
    },
    {
      id: 10,
      name: "CRACKUBE",
      category: "Software Solutions",
      description: "CRACKUBE develops innovative software solutions for business process optimization and efficiency.",
      logo: "/Startups/CRACKUBE LOGO JPG TRANSPARENT.png",
      founded: "2020",
      funding: "$4.2M Series A",
      website: "https://example.com"
    },
    {
      id: 11,
      name: "Chakaralaya Analytics",
      category: "Data Analytics",
      description: "Chakaralaya Analytics provides data-driven insights and analytics solutions for business intelligence.",
      logo: "/removedbg/Chakaralaya_Analytics-removebg-preview.png",
      founded: "2022",
      funding: "$2.8M Seed",
      website: "https://example.com"
    },
    {
      id: 12,
      name: "Centurion Mobility",
      category: "Transportation",
      description: "Centurion Mobility develops innovative transportation solutions for urban and industrial applications.",
      logo: "/Startups/Centurion Mobility.jpeg",
      founded: "2023",
      funding: "$3.2M Seed",
      website: "https://example.com"
    },
    {
      id: 13,
      name: "SASI",
      category: "Software Systems",
      description: "SASI creates integrated software systems for enterprise resource planning and management.",
      logo: "/Startups/sasi1.jpg",
      founded: "2022",
      funding: "$2.1M Seed",
      website: "https://example.com"
    }
  ];

  return (
    <section className="w-screen bg-black relative overflow-hidden">
      {/* Add global CSS for text shadow and gradients */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 0 15px rgba(186, 104, 255, 0.7);
        }
        .title-glow {
          text-shadow: 0 0 30px rgba(186, 104, 255, 0.9), 0 0 60px rgba(186, 104, 255, 0.5);
        }
        .bg-radial-purple {
          background: radial-gradient(circle at center, rgba(126, 34, 206, 0.3) 0%, rgba(0, 0, 0, 0) 80%);
          width: 100vw;
          height: 100vh;
        }
        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 0.7; }
          100% { opacity: 0.1; }
        }
      `}</style>
      
      {/* Client-side rendered stars */}
      <StarsBackground />
      
      <div className="container mx-auto px-4 w-full py-8">
        <div className="pt-10 pb-12 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 title-glow tracking-wide uppercase">
            OUR STARTUPS
          </h1>
        </div>
        
        <div className="relative">
          <HoneycombGrid startups={startups} />
        </div>
      </div>
    </section>
  );
};

export default StartupSection;