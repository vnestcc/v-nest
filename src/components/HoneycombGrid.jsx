// components/HoneycombGrid.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoneycombGrid = ({ startups }) => {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [backgroundHexagons, setBackgroundHexagons] = useState([]);

  // Generate background hexagons on client-side only
  useEffect(() => {
    // Create fewer background hexagons with varying properties
    const hexagons = Array(15).fill().map((_, i) => {
      // Random size with more variation
      const size = Math.random() * 200 + 80;
      
      // Random position covering the entire screen
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      
      // Random opacity with mostly lower values for background effect
      const opacity = Math.random() * 0.08 + 0.02;
      
      // Random rotation for variety
      const rotation = Math.random() * 30 - 15;
      
      // Randomly determine line thickness
      const strokeWidth = Math.random() < 0.7 ? 0.3 : 0.5;
      
      // Generate a purple shade for this hexagon
      const purpleValue = 180 + Math.floor(Math.random() * 75); // 180-255 range for purple
      const purpleColor = `rgba(${purpleValue}, ${Math.floor(purpleValue/2)}, 255, ${opacity})`;
      
      // Randomly determine if it has an inner line
      const hasInnerLine = Math.random() > 0.5;
      
      return {
        id: i,
        size,
        left,
        top,
        opacity,
        rotation,
        strokeWidth,
        purpleColor,
        hasInnerLine
      };
    });
    
    setBackgroundHexagons(hexagons);
  }, []);

  // Map startup names to their transparent images
  const getTransparentImagePath = (startupName) => {
    const nameMap = {
      "STEMTEC": "/removedbg/STEMTEC_logo-removebg-preview.png",
      "Quinproc": "/removedbg/Quinproc-removebg-preview.png",
      "Mechonix D2R": "/removedbg/Mechonix_D2R-removebg-preview.png",
      "Mechatronix India": "/removedbg/Mechatronix_India-removebg-preview.png",
      "MAFKIN ROBOTICS": "/removedbg/MAFKIN_ROBOTICS-removebg-preview.png",
      "JIVAN": "/removedbg/JIVAN-removebg-preview.png",
      "INICIOTEK": "/removedbg/INICIOTEK-removebg-preview.png",
      "FEYNMAN TECHSOL": "/removedbg/FEYNMAN_TECHSOL-removebg-preview.png",
      "CRACKUBE": "/removedbg/CRACKUBE_LOGO_JPG_TRANSPARENT-removebg-preview.png",
      "Chakaralaya Analytics": "/removedbg/Chakaralaya_Analytics-removebg-preview.png",
      "MEDxAI Innovations": "/removedbg/LOGO_MEDxAI_Innovations-Photoroom.png"
    };
    
    return nameMap[startupName] || null;
  };

  // Generate main hexagons with varying sizes and positions
  const generateMainHexagons = () => {
    // Exactly positioned hexagons to match the first reference image
    const positions = [
      // Left column
      { x: '33%', y: '46%', size: 230, index: 0 }, // QuantumAI
      
      // Left-center column
      { x: '42%', y: '20%', size: 240, index: 1 }, // GreenEco
      { x: '25.2%', y: '20%', size: 220, index: 2 }, // MediSync 
      
      // Center column
      { x: '74%', y: '20%', size: 230, index: 3 }, // CyberShield
      { x: '50%', y: '50%', size: 250, index: 4 }, // FinLeap (larger)
      { x: '39%', y: '72%', size: 200, index: 5 }, // EduTech
      
      // Right-center column
      { x: '58%', y: '23%', size: 200, index: 6 }, // SpaceVista
      { x: '60%', y: '75%', size: 220, index: 7 }, // BlockSafe
      
      // Right column
      { x: '67%', y: '47%', size: 220, index: 8 }, // RoboTech
      
      // Bottom (extra)
      { x: '24%', y: '71%', size: 220, index: 9 }, // AgroSmart - positioned below
      { x: '76%', y: '71%', size: 220, index: 10 }, // AgroSmart - positioned below
    ];

    return positions.map((position, i) => {
      // Use modulo to cycle through startups if there are more positions than startups
      const startupIndex = i % startups.length;
      const startup = startups[startupIndex];
      
      // Calculate glow size based on hexagon size
      const glowSize = 3 + (position.size / 100);
      
      // Check if we have a transparent image for this startup
      const transparentImage = getTransparentImagePath(startup.name);
      const hasTransparentImage = transparentImage !== null;
      
      // Special handling for FEYNMAN TECHSOL to make it appear larger
      const isFeynmanTechsol = startup.name === "FEYNMAN TECHSOL";
      
      return (
        <motion.div
          key={`hexagon-${i}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          style={{
            left: position.x,
            top: position.y,
            width: `${position.size}px`,
            height: `${position.size * 0.866}px`, // Height of a hexagon is width * 0.866
            zIndex: position.index === 4 ? 11 : 10, // FinLeap has higher z-index
          }}
        >
          <div 
            className="cursor-pointer group transition-all duration-300 relative w-full h-full"
            onClick={() => setSelectedStartup(startup)}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 86.6"
            >
              {/* Glow effect - only visible on hover */}
              <filter id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation={glowSize} result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Logo glow filter */}
              <filter id={`logo-glow-${i}`}>
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Main hexagon with glow only on hover */}
              <path
                d="M50 0L0 25v36.6L50 86.6l50-25V25L50 0z"
                fill="transparent"
                stroke="rgba(186, 104, 255, 0.7)"
                strokeWidth="2"
                className="group-hover:filter group-hover:stroke-purple-300 group-hover:stroke-[2.5] transition-all duration-300"
                style={{ filter: 'none' }}
                data-hover-filter={`url(#glow-${i})`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = e.currentTarget.dataset.hoverFilter;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
              />
              
              {/* Inner hexagon line for depth effect */}
              <path
                d="M50 5L5 27.5v31.6L50 81.6l45-22.5V27.5L50 5z"
                fill="transparent"
                stroke="rgba(186, 104, 255, 0.4)"
                strokeWidth="1"
                className="group-hover:stroke-purple-200 transition-all duration-300"
              />
              
              {/* Inner fill - white background for hexagons with transparent images, gradient for others */}
              <path
                d="M50 8L8 30v26.6L50 78.6l42-22V30L50 8z"
                fill={hasTransparentImage ? "white" : "url(#hexBg)"}
                className={hasTransparentImage ? "" : "opacity-20 group-hover:opacity-30 transition-all duration-300"}
              />
              
              {/* Create radial gradient definition for hexagon inner fill */}
              <defs>
                <radialGradient id="hexBg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(186, 104, 255, 0.6)" />
                  <stop offset="100%" stopColor="rgba(45, 20, 60, 0.3)" />
                </radialGradient>
                
                {/* Create a hexagonal clip path */}
                <clipPath id={`hexClip-${i}`}>
                  <path d="M50 10L10 35v26.6L50 76.6l40-15V35L50 10z" />
                </clipPath>
              </defs>
              
              {/* Subtle gradient overlay for hexagons with transparent images */}
              {hasTransparentImage && (
                <path
                  d="M50 8L8 30v26.6L50 78.6l42-22V30L50 8z"
                  fill="url(#purpleGlow)"
                  className="opacity-10"
                />
              )}
              
              {/* Startup logo image with different handling for special hexagon */}
              <foreignObject 
                x={isFeynmanTechsol ? "10" : "15"} 
                y={isFeynmanTechsol ? "22" : "12"} 
                width={isFeynmanTechsol ? "80" : "70"} 
                height={isFeynmanTechsol ? "42.6" : "60"} 
                clipPath={`url(#hexClip-${i})`}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" 
                  className={`w-full h-full flex items-center justify-center ${!hasTransparentImage ? 'bg-gradient-to-br from-purple-900/20 to-black/30 rounded-full p-3' : ''}`}
                  style={{
                    boxShadow: !hasTransparentImage ? 'inset 0 0 15px rgba(186, 104, 255, 0.2)' : 'none',
                    paddingLeft: isFeynmanTechsol ? '0.5px' : 'inherit'
                  }}
                >
                  <div className="transform group-hover:scale-110 transition-all duration-300 flex items-center justify-center w-full h-full">
                    <img 
                      src={hasTransparentImage ? transparentImage : startup.logo} 
                      alt={startup.name} 
                      className={`
                        ${isFeynmanTechsol ? 'w-[90%] h-auto' : hasTransparentImage ? 'w-[85%] h-[85%]' : 'w-[75%] h-[75%]'}
                        object-contain transition-all duration-300 group-hover:brightness-110
                      `}
                      style={{ 
                        filter: !hasTransparentImage ? 'drop-shadow(0 0 2px rgba(186, 104, 255, 0.2))' : 'none'
                      }}
                    />
                  </div>
                </div>
              </foreignObject>
              
              {/* Add purple border for hexagons with transparent images */}
              {hasTransparentImage && (
                <path
                  d="M50 8L8 30v26.6L50 78.6l42-22V30L50 8z"
                  fill="none"
                  stroke="rgba(186, 104, 255, 0.7)"
                  strokeWidth="0.8"
                  className="opacity-80"
                />
              )}
              
              {/* Company name displayed below */}
              <text 
                x="50" 
                y="96" 
                textAnchor="middle" 
                className="fill-purple-200 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  fontFamily: 'sans-serif', 
                  fontSize: '6px',
                  fontWeight: 'bold',
                  filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.9))'
                }}
              >
                {startup.name}
              </text>
            </svg>
          </div>
        </motion.div>
      );
    });
  };

  // Render background hexagons from state
  const renderBackgroundHexagons = () => {
    return backgroundHexagons.map((hexagon) => (
      <svg
        key={`bg-hex-${hexagon.id}`}
        className="absolute"
        style={{
          left: hexagon.left,
          top: hexagon.top,
          width: `${hexagon.size}px`,
          height: `${hexagon.size * 0.866}px`,
          opacity: hexagon.opacity,
          transform: `rotate(${hexagon.rotation}deg)`,
          zIndex: 0,
        }}
        viewBox="0 0 100 86.6"
      >
        <path
          d="M50 0L0 25v36.6L50 86.6l50-25V25L50 0z"
          fill="transparent"
          stroke={hexagon.purpleColor}
          strokeWidth={hexagon.strokeWidth}
        />
        
        {/* Some hexagons have an inner line */}
        {hexagon.hasInnerLine && (
          <path
            d="M50 5L5 27.5v31.6L50 81.6l45-22.5V27.5L50 5z"
            fill="transparent"
            stroke={hexagon.purpleColor}
            strokeWidth={hexagon.strokeWidth * 0.7}
          />
        )}
      </svg>
    ));
  };

  // Modal for startup details - with improved visual styling
  const renderModal = () => {
    if (!selectedStartup) return null;
    
    // Check if the startup has a transparent image
    const transparentImage = getTransparentImagePath(selectedStartup.name);
    const hasTransparentImage = transparentImage !== null;
    
    // Special handling for FEYNMAN TECHSOL in modal
    const isFeynmanTechsol = selectedStartup.name === "FEYNMAN TECHSOL";
    
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedStartup(null)}
        >
          <motion.div
            className="relative bg-gradient-to-b from-purple-900 to-black border border-purple-500 rounded-lg p-6 m-4 max-w-lg max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 0 20px rgba(186, 104, 255, 0.4)'
            }}
          >
            <button
              className="absolute top-4 right-4 text-purple-300 hover:text-white"
              onClick={() => setSelectedStartup(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <div className={`${hasTransparentImage ? 'bg-white p-3 rounded-lg' : ''} mb-4 ${isFeynmanTechsol ? 'w-full max-w-[280px]' : ''}`}>
                <img 
                  src={hasTransparentImage ? transparentImage : selectedStartup.logo} 
                  alt={selectedStartup.name} 
                  className={`${isFeynmanTechsol ? 'w-full' : 'w-36 h-36'} object-contain`}
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 text-shadow">{selectedStartup.name}</h2>
              <p className="text-sm text-purple-200 mb-4">{selectedStartup.category}</p>
              <p className="text-white mb-4">{selectedStartup.description}</p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-purple-900 bg-opacity-50 p-3 rounded border border-purple-700">
                  <h4 className="text-purple-300 text-sm font-bold">Founded</h4>
                  <p className="text-white">{selectedStartup.founded}</p>
                </div>
                <div className="bg-purple-900 bg-opacity-50 p-3 rounded border border-purple-700">
                  <h4 className="text-purple-300 text-sm font-bold">Funding</h4>
                  <p className="text-white">{selectedStartup.funding}</p>
                </div>
              </div>
              <a 
                href={selectedStartup.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-colors duration-300 shadow-lg shadow-purple-900/50"
              >
                Visit Website
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  // Add a script to handle hover effects for SVG filters
  const addHoverEffectScript = () => {
    return (
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const paths = document.querySelectorAll('path[data-hover-filter]');
            paths.forEach(path => {
              path.addEventListener('mouseenter', function() {
                this.style.filter = this.dataset.hoverFilter;
              });
              path.addEventListener('mouseleave', function() {
                this.style.filter = 'none';
              });
            });
          });
        `
      }} />
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background gradient - updated to ensure full-width coverage */}
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-black via-purple-950/10 to-purple-950/30 opacity-80 -z-10"></div>
      
      {/* Background hexagons layer - made wider */}
      <div className="absolute inset-0 w-screen">
        {renderBackgroundHexagons()}
      </div>
      
      {/* Main hexagons layer */}
      <div className="absolute inset-0 w-full h-full">
        {generateMainHexagons()}
      </div>
      
      {/* Modal for detailed view */}
      {renderModal()}

      {/* Add stronger purple radial gradient in center for depth - made wider */}
      <div className="fixed inset-0 w-screen h-screen bg-radial-purple opacity-30 pointer-events-none -z-5"></div>
      
      {/* Add script for hover effects */}
      {addHoverEffectScript()}
    </div>
  );
};

export default HoneycombGrid;