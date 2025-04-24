// components/HexagonCard.jsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HexagonCard = ({ startup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        className="cursor-pointer transition-all duration-300"
        onClick={toggleExpand}
        whileHover={{ scale: 1.05 }}
      >
        <svg
          className="w-full h-auto"
          viewBox="0 0 100 86.6"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M50 0L0 25v36.6L50 86.6l50-25V25L50 0z"
            fill="transparent"
            className="transition-all duration-300"
            stroke="rgba(186, 104, 255, 0.7)"
            strokeWidth="1.5"
          />
          <foreignObject x="25" y="25" width="50" height="36.6">
            <div className="flex items-center justify-center h-full">
              <img
                src={startup.logo}
                alt={startup.name}
                className="w-10 h-10"
              />
            </div>
          </foreignObject>
        </svg>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleExpand}
          >
            <motion.div
              className="relative bg-gradient-to-br from-purple-900/90 to-gray-900/90 border border-purple-500/50 rounded-xl p-6 m-4 max-w-lg max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 30px rgba(186, 104, 255, 0.3)'
              }}
            >
              <button
                className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors"
                onClick={toggleExpand}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-center">
                <div className="bg-white/10 p-3 rounded-lg shadow-inner mb-4">
                  <img src={startup.logo} alt={startup.name} className="w-20 h-20 object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 fancy-text">{startup.name}</h2>
                <p className="text-sm text-purple-200 mb-4 subheading">{startup.category}</p>
                <p className="text-white mb-6 subheading leading-relaxed">{startup.description}</p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-purple-900/40 p-4 rounded-lg border border-purple-700/40">
                    <h4 className="text-purple-300 text-sm font-bold mb-2 fancy-text">Founded</h4>
                    <p className="text-white subheading">{startup.founded}</p>
                  </div>
                  <div className="bg-purple-900/40 p-4 rounded-lg border border-purple-700/40">
                    <h4 className="text-purple-300 text-sm font-bold mb-2 fancy-text">Funding</h4>
                    <p className="text-white subheading">{startup.funding}</p>
                  </div>
                </div>
                
                {/* Tags section */}
                {startup.tags && startup.tags.length > 0 && (
                  <div className="mt-5 w-full">
                    <h4 className="text-purple-300 text-sm font-bold mb-2 fancy-text">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {startup.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-800/30 text-purple-200 text-sm rounded-full border border-purple-500/30 tech-text">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <a 
                  href={startup.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white py-2 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 fancy-text hover:-translate-y-1"
                >
                  Visit Website
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HexagonCard;


