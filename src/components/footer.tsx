'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="relative w-full overflow-hidden mt-[-1rem]">
      {/* Background with modern gradient effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated background with subtle wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-60 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%238B5CF6' fill-opacity='0.3' d='M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Diagonal lines for modern effect */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)`,
            backgroundSize: '100px 100px'
          }}>
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-purple-500/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-14 w-3 h-3 rounded-full bg-indigo-500/30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-violet-500/30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-purple-500/30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-purple-400/20 animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/4 w-3 h-3 rounded-full bg-indigo-400/20 animate-pulse"></div>
      </div>

      {/* Diagonal divider */}
      <div className="absolute top-0 left-0 w-full h-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700/30 to-indigo-600/30 transform -skew-y-3"></div>
      </div>

      {/* Floating scroll-to-top button */}
      <button 
        onClick={scrollToTop}
        className="group fixed right-6 bottom-6 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-300 z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>

      {/* Main footer content */}
      <div className="relative py-8 px-6 z-10">
        {/* Enhanced connect with us floating at top */}
        <div className="absolute top-3 right-6 flex items-center gap-3">
          <span className="text-white/70 text-sm font-medium">Connect:</span>
          <div className="flex space-x-3">
            {['instagram', 'twitter', 'linkedin', 'mail'].map((social, index) => (
              <Link 
                key={index}
                href="#" 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 border border-white/10 hover:scale-110 hover:border-transparent"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {social === 'instagram' && <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />}
                  {social === 'twitter' && <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />}
                  {social === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                  {social === 'mail' && <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />}
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Four column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative mt-10">
          {/* Logo section - now full height */}
          <div className="md:col-span-3 relative flex flex-col items-center md:items-center justify-center h-full">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full blur-md bg-gradient-to-r from-purple-600/30 to-indigo-600/30"></div>
              <Image src="/v-nest-logo.svg" alt="V-NEST" width={150} height={75} className="relative z-10 drop-shadow-lg" />
            </div>
            <p className="text-white/70 text-xs text-center mt-2">
              V-NEST is VIT Chennai&#39;s Startup Incubator
            </p>
          </div>
          
          {/* Vertical line divider */}
          <div className="hidden md:block md:col-span-1 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>
          </div>
          
          {/* Links section */}
          <div className="md:col-span-2 relative">
            <h2 className="text-white text-base font-bold mb-2 inline-block relative">
              Explore
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h2>
            <div className="flex flex-col space-y-1.5">
              {['Home', 'Our Startups', 'Steps to apply', 'FAQs', 'Events', 'Partners'].map((item, index) => (
                <Link 
                  key={index}
                  href={`/${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white text-xs group flex items-center transition-all duration-300 hover:translate-x-1"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 mr-0 group-hover:mr-1 bg-purple-400 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick links section */}
          <div className="md:col-span-2 relative">
            <h2 className="text-white text-base font-bold mb-2 inline-block relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h2>
            <div className="flex flex-col space-y-1.5">
              {['Apply Now', 'Mentor Program', 'Innovation Hub', 'Careers', 'Resources', 'Success Stories'].map((item, index) => (
                <Link 
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white text-xs group flex items-center transition-all duration-300 hover:translate-x-1"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 mr-0 group-hover:mr-1 bg-purple-400 transition-all duration-300"></span>
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-4 relative">
            <h2 className="text-white text-base font-bold mb-2 inline-block relative">
              Get in touch
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h2>
            
            <div className="flex flex-col space-y-2 text-xs">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-4 h-4 mr-1.5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  VIT Chennai, Kelambakkam - Vandalur Rd, Chennai, Tamil Nadu, IN - 600127
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-4 h-4 mr-1.5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-white">91-xxxxxxxxxx</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-4 h-4 mr-1.5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-white">contact@vnest.org</div>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center w-4 h-4 mr-1.5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">Mon-Fri: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Newsletter section - centered below main columns */}
        <div className="mt-8 md:mt-10 md:mx-auto md:max-w-md">
          <div className="text-center">
            <h2 className="text-white text-base font-bold mb-2 inline-block relative">
              Stay Updated
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h2>
          </div>
          
          {/* <p className="text-gray-300 text-xs text-center mb-2">Subscribe for updates on startups, events, and opportunities.</p> */}
          
          <div className="relative mb-3 group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full py-1.5 px-3 text-xs bg-white/5 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-all duration-300 group-hover:border-purple-500/50"
            />
            <button className="absolute right-1 top-1 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-0.5 text-xs text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md hover:shadow-purple-500/20">
              Subscribe
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 mr-1.5">
              <div className="absolute -inset-1 rounded-full bg-green-500/20 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-xs">We&#39;re currently accepting applications</p>
          </div>
        </div>
      </div>

      {/* Divider with enhanced line pattern */}
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 flex">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="h-px flex-1 bg-gradient-to-r from-purple-500/10 via-purple-500/30 to-purple-500/10"
              style={{
                marginRight: '6px'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative py-3 px-6 bg-black/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/70 text-xs">© 2025 VNEST. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/50 text-xs hover:text-white hover:underline transition-colors duration-300">Privacy</Link>
            <Link href="#" className="text-white/50 text-xs hover:text-white hover:underline transition-colors duration-300">Terms</Link>
            <Link href="#" className="text-white/50 text-xs hover:text-white hover:underline transition-colors duration-300">Cookies</Link>
            <Link href="#" className="text-white/50 text-xs hover:text-white hover:underline transition-colors duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 