"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const EcosystemPartners = () => {
  const [backgroundHexagons, setBackgroundHexagons] = useState([]);

  // Generate background hexagons
  useEffect(() => {
    const hexagons = Array(15).fill().map((_, i) => {
      const size = Math.random() * 180 + 60;
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const opacity = Math.random() * 0.06 + 0.01;
      const rotation = Math.random() * 30 - 15;
      const strokeWidth = Math.random() < 0.7 ? 0.3 : 0.5;
      
      // Generate a purple shade for this hexagon
      const purpleValue = 180 + Math.floor(Math.random() * 75);
      const purpleColor = `rgba(${purpleValue}, ${Math.floor(purpleValue/2)}, 255, ${opacity})`;
      
      return {
        id: i,
        size,
        left,
        top,
        opacity,
        rotation,
        strokeWidth,
        purpleColor,
        hasInnerLine: Math.random() > 0.5
      };
    });
    
    setBackgroundHexagons(hexagons);
  }, []);

  // Render floating background hexagons
  const renderBackgroundHexagons = () => {
    return backgroundHexagons.map((hexagon) => (
      <div
        key={`bg-hex-${hexagon.id}`}
        className="absolute pointer-events-none"
        style={{
          width: `${hexagon.size}px`,
          height: `${hexagon.size * 0.866}px`,
          left: hexagon.left,
          top: hexagon.top,
          transform: `rotate(${hexagon.rotation}deg)`,
          zIndex: 1,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 86.6"
        >
          <path
            d="M50 0L0 25v36.6L50 86.6l50-25V25L50 0z"
            fill="transparent"
            stroke={hexagon.purpleColor}
            strokeWidth={hexagon.strokeWidth}
            className="animate-float"
            style={{ animationDelay: `${hexagon.id * 0.2}s` }}
          />
          
          {hexagon.hasInnerLine && (
            <path
              d="M50 5L5 27.5v31.6L50 81.6l45-22.5V27.5L50 5z"
              fill="transparent"
              stroke={hexagon.purpleColor}
              strokeWidth={hexagon.strokeWidth / 2}
              className="animate-float"
              style={{ animationDelay: `${hexagon.id * 0.2 + 0.1}s` }}
            />
          )}
        </svg>
      </div>
    ));
  };

  return (
    <section className="relative w-full overflow-hidden py-12 pt-6 pb-32">
      {/* Background hexagons */}
      {renderBackgroundHexagons()}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60 pointer-events-none"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <SectionHeading isHero={false} isFirstComponent={false}>
            Ecosystem Partners
          </SectionHeading>
          <p className="text-purple-200/80 text-lg max-w-3xl mx-auto">
            Driving innovation through powerful strategic collaborations that accelerate startup growth and ecosystem development.
          </p>
        </div>
        
        {/* Partners image with hover effects */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Glow effect overlay */}
          <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          
          {/* Main image with shadow and border */}
          <div className="relative overflow-hidden rounded-xl shadow-[0_0_25px_rgba(186,104,255,0.3)] border border-purple-500/30">
            <Image 
              src="/Understanding.png" 
              alt="Ecosystem Partners" 
              width={1200} 
              height={800}
              className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Subtle animated pulse overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-800/5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemPartners; 