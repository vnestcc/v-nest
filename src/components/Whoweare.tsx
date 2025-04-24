'use client'; 
import React, { useEffect, useState } from 'react'; 
import { 
  GraduationCap, DollarSign, Users, Star, Box, FileText, 
  UserPlus, Share2, Cpu, Shield, Layers, GitPullRequest, 
} from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';

const WhoWeAre: React.FC = () => { 
  const convenors = [ 
    { id: 1, name: 'Dr. Sasikumar M', position: 'Director, V-NEST', image: '/convenors/image.png' }, 
    { id: 2, name: 'Dr. Ravi V', position: 'Assistant Director, V-NEST (IIC)', image: '/convenors/image2.png' }, 
    { id: 3, name: 'Dr. Karthiyaini S', position: 'Assistant Director, V-NEST (EDC)', image: '/convenors/image3.png' }, 
    { id: 4, name: 'Dr. Jayarangan L', position: 'Manager, Incubation', image: '/convenors/image.png' }, 
  ];
  

  const benefitsList = [ 
    { name: 'Full Attendance Relaxation', icon: <GraduationCap size={20} /> }, 
    { name: '2 lakh Seed Money', icon: <DollarSign size={20} /> }, 
    { name: 'Mentorship from Experts', icon: <Users size={20} /> }, 
    { name: 'Grant Opportunities', icon: <Star size={20} /> }, 
    { name: 'Startup Showcases', icon: <Box size={20} /> }, 
    { name: 'Workshops & Hackathons', icon: <FileText size={20} /> }, 
    { name: 'Collaboration Space', icon: <UserPlus size={20} /> }, 
    { name: 'Investor Networking', icon: <Share2 size={20} /> }, 
    { name: 'Tech Resource Access', icon: <Cpu size={20} /> }, 
    { name: 'Brand Building Support', icon: <Shield size={20} /> }, 
    { name: 'Legal & IP Guidance', icon: <Layers size={20} /> }, 
    { name: 'Product Development Help', icon: <GitPullRequest size={20} /> }, 
  ];

  const [visibleBenefits, setVisibleBenefits] = useState<boolean[]>(Array(benefitsList.length).fill(false));
  
  // Image gallery for "Who We Are" section - using placeholder images
  const imageGallery = [
    '/whoweare/IMG_4808.webp',
    '/whoweare/IMG_4810.webp',
    '/whoweare/IMG_4854.webp',
    '/whoweare/IMG_4850.webp',
    '/whoweare/IMG_4863.webp',
  ];

  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Force benefits to be visible on component mount
  useEffect(() => {
    // Set a short delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      setVisibleBenefits(Array(benefitsList.length).fill(true));
    }, 500);
    
    return () => clearTimeout(timer);
  }, [benefitsList.length]);

  return (
    <>
      {/* Who We Are */}
      <section className="pt-20 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
          <div className="bg-purple-950/40 p-8 rounded-2xl border border-purple-800/30">
            <SectionHeading className="text-6xl font-extrabold mb-8" isHero={false} isFirstComponent={false}>
              Who are we
            </SectionHeading>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700">
                    <Box size={18} className="text-white" />
                  </div>
                </div>
                <div className="text-lg text-white/90">
                  <strong className="text-violet-300">V-NEST</strong>, the startup and research foundation of VIT Chennai, nurtures innovation by supporting students, faculty, and external entrepreneurs in building impactful startups.
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700">
                    <Users size={18} className="text-white" />
                  </div>
                </div>
                <div className="text-lg text-white/90">
                  It collaborates with partners like Startup TN and Startup India to offer grants and mentorship.
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-700">
                    <Star size={18} className="text-white" />
                  </div>
                </div>
                <div className="text-lg text-white/90">
                  In just three years, V-NEST has empowered nearly 30 startups, aiming to set new standards in incubation and market success.
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {/* Top row: 3 images */}
            <div 
              className={`col-span-2 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${hoveredImage === 0 ? 'transform scale-110 z-10' : hoveredImage !== null ? 'scale-95' : ''}`}
              onMouseEnter={() => setHoveredImage(0)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={imageGallery[0]} alt="V-NEST" className="h-full w-full object-cover" />
            </div>
            <div 
              className={`col-span-2 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${hoveredImage === 1 ? 'transform scale-110 z-10' : hoveredImage !== null ? 'scale-95' : ''}`}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={imageGallery[1]} alt="V-NEST" className="h-full w-full object-cover" />
            </div>
            <div 
              className={`col-span-1 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${hoveredImage === 2 ? 'transform scale-110 z-10' : hoveredImage !== null ? 'scale-95' : ''}`}
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={imageGallery[2]} alt="V-NEST" className="h-full w-full object-cover" />
            </div>
            
            {/* Bottom row: 2 images */}
            <div 
              className={`col-span-2 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${hoveredImage === 3 ? 'transform scale-110 z-10' : hoveredImage !== null ? 'scale-95' : ''}`}
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={imageGallery[3]} alt="V-NEST" className="h-full w-full object-cover" />
            </div>
            <div 
              className={`col-span-3 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${hoveredImage === 4 ? 'transform scale-110 z-10' : hoveredImage !== null ? 'scale-95' : ''}`}
              onMouseEnter={() => setHoveredImage(4)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img src={imageGallery[4]} alt="V-NEST" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Convenors */}
      <section className="pt-32 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading className="text-5xl font-extrabold mb-16 text-white" isHero={false} isFirstComponent={false}>
            Convenors
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {convenors.map((c) => (
          <div key={c.id} className="group relative h-80">
            {/* Convenor Image */}
            <div className="absolute inset-x-0 top-0 rounded-xl bg-[#3b0a64] overflow-hidden h-64 cursor-pointer transform transition-all duration-700 ease-in-out group-hover:-translate-y-6 group-hover:shadow-lg">
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:translate-y-[-10px]"
          />
            </div>
            {/* Convenor Details */}
            <div className="absolute inset-x-0 bottom-0 bg-[#2a003f] rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out delay-100 shadow-lg border border-purple-500/30">
          <h3 className="text-xl font-bold text-white text-wrap">
            {c.name}
          </h3>
          <p className="text-purple-300 mt-1">{c.position}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits-section" className="pt-32 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading className="text-5xl font-extrabold mb-8" isHero={false} isFirstComponent={false}>
            Benefits
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((b, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 border-2 border-violet-400 rounded-full px-6 py-4 transition-all duration-700 ${
                  visibleBenefits[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-transparent border-2 border-violet-400 flex items-center justify-center text-violet-300">
                  {b.icon}
                </div>
                <span className="text-lg font-medium text-white/90">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;