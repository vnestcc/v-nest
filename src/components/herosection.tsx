"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function HeroSection() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Bookings", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Support", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target: any = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        {/* <img
          src=""
          width={120}
          height={50}
          alt="Float UI logo"
        /> */}
        <h1 className="text-2xl text-white font-semibold">LOGO</h1>
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-violet-300 hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  // Define animation keyframes
  const fadeIn = {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 }
  };

  const slideInLeft = {
    "0%": { transform: "translateX(-50px)", opacity: 0 },
    "100%": { transform: "translateX(0)", opacity: 1 }
  };

  // Set keyframes in style
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInLeft {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-950 via-black to-purple-950 h-[100vh]">
      <section className="relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-16 md:py-48 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text with animations */}
            <div className="space-y-6 animate-[fadeIn_1s_ease-in-out]">
              <h2 className="text-4xl text-white font-extrabold md:text-5xl animate-[slideInLeft_0.8s_ease-in-out]">
                Build website quick <span className="text-violet-300">like a professional</span>.
              </h2>
              <p className="text-white/90 animate-[fadeIn_1.2s_ease-in-out]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium architecto nemo doloribus saepe odio cupiditate!
                Create stunning websites with our powerful tools.
              </p>
              <div className="animate-[fadeIn_1.5s_ease-in-out]">
                <button className="flex items-center justify-center gap-x-2 py-2.5 px-6 mt-3 text-sm text-white font-medium bg-purple-700 hover:bg-purple-600 active:bg-purple-800 duration-300 rounded-full border-2 border-violet-400 hover:shadow-lg hover:shadow-purple-700/50 transform transition-all hover:-translate-y-1">
                  Getting started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-x-4 text-violet-300 text-sm animate-[fadeIn_1.8s_ease-in-out]">
                <div className="flex">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                  </svg>
                </div>
                <p>
                  <span className="text-white">5.0</span> by over 200 users
                </p>
              </div>
            </div>
            
            {/* Right side - Image with animations */}
            <div className="flex justify-center items-center animate-[fadeIn_1s_ease-in-out]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg blur opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-300 animate-pulse"></div>
                <div className="relative w-full h-full bg-[#2a003f] rounded-xl overflow-hidden border-2 border-violet-400/50 transform transition-all duration-500 hover:scale-105">
                  <Image 
                    src="/abt-vnest.jpeg" 
                    alt="Digital workspace"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a003f] to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background gradient blur effect */}
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[108px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(139, 92, 246, 0.30) 15.73%, rgba(124, 58, 237, 0.41) 15.74%, rgba(192, 132, 252, 0.26) 56.49%, rgba(109, 40, 217, 0.4) 115.91%)",
          }}
        ></div>
      </section>
    </div>
  );
}
export default HeroSection;