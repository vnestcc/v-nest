"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

const FoundersNote = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  
  // Reveal card with animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="w-full relative overflow-x-hidden overflow-y-auto pb-32">
      {/* Custom CSS for animations and effects */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 25px rgba(122, 58, 227, 0.5); }
          50% { box-shadow: 0 0 40px rgba(122, 58, 227, 0.7); }
          100% { box-shadow: 0 0 25px rgba(122, 58, 227, 0.5); }
        }
        
        @keyframes subtle-rotate {
          0% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
          100% { transform: rotate(-1deg); }
        }
        
        .twitter-card-shadow {
          box-shadow: 0 0 30px rgba(122, 58, 227, 0.5);
          animation: pulse 4s infinite;
        }
        
        .profile-image-container {
          position: relative;
          width: 280px;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(122, 58, 227, 0.6);
          z-index: 15;
        }
      `}</style>

      <div className="container mx-auto px-4 w-full py-16">
        <div className="pt-10 pb-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionHeading isHero={false} isFirstComponent={false}>
              FOUNDER'S NOTE
            </SectionHeading>
          </motion.div>
          <motion.p 
            className="fancy-text text-xl text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Insights from our visionary leader
          </motion.p>
        </div>
        
        <div className="relative flex justify-center">
          {/* Left side profile image */}
          <motion.div 
            className="hidden md:block absolute left-[22%] top-9"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ animation: 'float 8s ease-in-out infinite' }}
          >
            <div className="profile-image-container">
              <Image 
                src="/sasi1.jpg" 
                alt="Founder" 
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative backing cards */}
            <div className="relative w-[280px] h-[280px] -z-10" style={{ position: 'absolute', top: 0, left: 0 }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/10 to-purple-500/5 backdrop-blur-sm border border-purple-500/20 rounded-lg transform rotate-12 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/15 to-purple-500/5 backdrop-blur-sm border border-purple-500/25 rounded-lg transform rotate-6 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 to-purple-500/5 backdrop-blur-sm border border-purple-500/30 rounded-lg transform rotate-0 shadow-xl"></div>
            </div>
          </motion.div>
          
          {/* Twitter-style card with backing cards */}
          <div className="relative z-20 max-w-md mx-auto transform translate-x-42">
            {/* Backing tilted cards for more depth */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-purple-800/20 rounded-3xl border border-purple-600/30 twitter-card-shadow"
              style={{ transform: 'rotate(-3deg) translateY(5px) translateX(-8px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            ></motion.div>
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-800/30 rounded-3xl border border-purple-600/40 twitter-card-shadow"
              style={{ transform: 'rotate(3deg) translateY(5px) translateX(8px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            ></motion.div>
            
            {/* Main card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isCardVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ animation: 'subtle-rotate 8s ease-in-out infinite' }}
            >
              <div className="bg-[#1e0b36] twitter-card-shadow rounded-3xl overflow-hidden border border-purple-600/50">
                {/* Card Header */}
                <div className="p-5 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-purple-700 overflow-hidden flex items-center justify-center">
                    <div className="fancy-text text-2xl font-bold text-white">S</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold fancy-text">Dr. Sasikumar M</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1D9BF0]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                      </svg>
                    </div>
                    {/* <p className="text-gray-400 text-sm subheading">@sasisettu</p> */}
                  </div>
                </div>

                {/* Tweet content */}
                <div className="px-5 py-2">
                  <motion.p 
                    className="text-white text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    "At <span className="heading-gradient font-bold">V-NEST</span>, we're dedicated to empowering innovators who dare to think differently. Join us in creating solutions that will shape tomorrow's world. Your vision, our support—together we'll build something extraordinary."
                  </motion.p>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 text-gray-400 border-t border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-sm tech-text">9:30 AM · Jun 15, 2023 · Twitter for Web</span>
                  </div>
                  <div className="flex items-center pt-3 border-t border-gray-800 mt-3">
                    <motion.div 
                      className="flex items-center mr-6"
                      whileHover={{ scale: 1.1, color: "#F91880" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>2,543</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center mr-6"
                      whileHover={{ scale: 1.1, color: "#1D9BF0" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>128</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.1, color: "#00BA7C" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>875</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote; 