// components/StartupSection.jsx
"use client";
import React, { useEffect, useState } from 'react';
import HoneycombGrid from './HoneycombGrid';
import SectionHeading from './SectionHeading';

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
      logo: "/removedbg/Centurion_Mobility-removebg-preview.png",
      founded: "2023",
      funding: "$3.2M Seed",
      website: "https://example.com"
    },
    {
      id: 13,
      name: "Delight Departures",
      category: "Travel & Tourism",
      description: "Delight Departures offers innovative travel solutions and premium holiday experiences with personalized service.",
      logo: "/removedbg/Delight_Departures-removebg-preview.png",
      founded: "2022",
      funding: "$3.5M Seed",
      website: "https://example.com"
    },
    {
      id: 14,
      name: "DAIRA",
      category: "Lifestyle & Wellness",
      description: "DAIRA creates holistic wellness solutions where every step leads to continuous personal growth and development.",
      logo: "/removedbg/DAIRA_Logo-removebg-preview.png",
      founded: "2021",
      funding: "$2.8M Seed",
      website: "https://example.com"
    },
    {
      id: 15,
      name: "Quetzalcoatl",
      category: "Digital Identity",
      description: "Quetzalcoatl specializes in secure digital identity solutions and advanced biometric authentication systems.",
      logo: "/removedbg/Quetzalcoatl-removebg-preview.png",
      founded: "2021",
      funding: "$4.1M Seed",
      website: "https://example.com"
    },
    {
      id: 16,
      name: "SpectoV",
      category: "Integrated Systems",
      description: "SpectoV creates innovative integrated systems that harmonize diverse technologies for optimal performance.",
      logo: "/removedbg/SpectoV-Photoroom.png",
      founded: "2022",
      funding: "$5.7M Series A",
      website: "https://example.com"
    },
    {
      id: 17,
      name: "Azitta S AI",
      category: "Artificial Intelligence",
      description: "Azitta S AI is innovating with intelligence to develop cutting-edge AI solutions that transform industries and enhance business operations.",
      logo: "/removedbg/AzittaS_AI-removebg-preview.png",
      founded: "2021",
      funding: "$4.8M Seed",
      website: "https://example.com"
    },
    {
      id: 18,
      name: "TESSA",
      category: "Energy Solutions",
      description: "TESSA Energy Solutions provides advanced renewable energy systems and sustainable power management technology.",
      logo: "/removedbg/TESSA-removebg-preview.png",
      founded: "2020",
      funding: "$6.2M Series A",
      website: "https://example.com"
    },
    {
      id: 19,
      name: "The Energy Company",
      category: "Renewable Energy",
      description: "The Energy Company develops innovative renewable energy solutions with a focus on sustainability and efficiency.",
      logo: "/removedbg/The_Energy_Company-removebg-preview.png",
      founded: "2021",
      funding: "$4.9M Seed",
      website: "https://example.com"
    },
    {
      id: 20,
      name: "ZVIA",
      category: "Fashion & Design",
      description: "ZVIA creates elegant, minimalist design solutions with a focus on sustainable fashion and lifestyle products.",
      logo: "/removedbg/ZVIA-removebg-preview.png",
      founded: "2022",
      funding: "$3.4M Seed",
      website: "https://example.com"
    },
    {
      id: 21,
      name: "SPICE",
      category: "Lifestyle & Culinary",
      description: "SPICE revolutionizes the culinary experience with innovative food tech solutions and flavor optimization.",
      logo: "/removedbg/ChatGPT Image Apr 24, 2025, 11_42_40 PM-Photoroom.png",
      founded: "2023",
      funding: "$2.3M Seed",
      website: "https://example.com"
    }
  ];

  return (
    <section className="w-screen relative overflow-hidden min-h-[150vh]">
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
          height: 140vh;
        }
      `}</style>
      
      <div className="container mx-auto px-4 w-full py-8">
        <div className="pt-10 pb-12 relative z-10 text-center">
          <SectionHeading isFirstComponent={true} className="mb-6">
            OUR STARTUPS
          </SectionHeading>
        </div>
        
        <div className="relative">
          <HoneycombGrid startups={startups} />
        </div>
      </div>
    </section>
  );
};

export default StartupSection;