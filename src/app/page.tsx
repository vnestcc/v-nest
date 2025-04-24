// app/page.js
"use client";
import React from 'react';
import StartupSection from '../components/StartupSection';
import StepsToApply from '../components/StepsToApply';
import FoundersNote from '../components/FoundersNote';
import Whoweare from '../components/Whoweare';
import HeroSection from "@/components/herosection";
import Header from "@/components/header";
import Frequently from "@/components/faq";

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-screen overflow-hidden relative">
      {/* Global backgrounds - Applied once for the entire page */}
      <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-purple-950 via-black to-purple-950 -z-50"></div>
      
      {/* Honeycomb-like background overlay */}
      <div className="fixed inset-0 opacity-20 -z-40" 
        style={{
          backgroundImage: `radial-gradient(rgba(126, 34, 206, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}>
      </div>
      
      {/* Global CSS for shared effects */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 0.7; }
          100% { opacity: 0.1; }
        }
        
        .title-glow {
          text-shadow: 0 0 30px rgba(186, 104, 255, 0.9), 0 0 60px rgba(186, 104, 255, 0.5);
        }
      `}</style>
      <Header />
      <HeroSection />
      <Whoweare />
      <StartupSection />
      <StepsToApply />
      <FoundersNote />
      <Frequently />
      
    </main>
  );
}

