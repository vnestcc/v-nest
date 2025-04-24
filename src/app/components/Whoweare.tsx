'use client'; 
import React, { useEffect, useState } from 'react'; 
import { 
  GraduationCap, DollarSign, Users, Star, Box, FileText, 
  UserPlus, Share2, Cpu, Shield, Layers, GitPullRequest, 
} from 'lucide-react';

const WhoWeAre: React.FC = () => { 
  const convenors = [ 
    { id: 1, name: 'Dr. Sasikumar M', position: 'Director, V-NEST' }, 
    { id: 2, name: 'Dr. Ravi V', position: 'Assistant Director, V-NEST (IIC)' }, 
    { id: 3, name: 'Dr Karthiyaini S', position: 'Assistant Director, V-NEST (EDC)' }, 
    { id: 4, name: 'Dr. Jayarangan L', position: 'Manager, Incubation' }, 
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

  useEffect(() => { 
    const handleScroll = () => { 
      const updatedVisibility = [...visibleBenefits]; 
      benefitsList.forEach((_, index) => { 
        const el = document.getElementById(`benefit-${index}`); 
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.8) { 
          updatedVisibility[index] = true; 
        } 
      }); 
      if (!updatedVisibility.every((val, idx) => val === visibleBenefits[idx])) { 
        setVisibleBenefits(updatedVisibility); 
      } 
    };

    window.addEventListener('scroll', handleScroll); 
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, [visibleBenefits.length]);

  return (
    <div className="text-white bg-gradient-to-br from-purple-950 via-black to-purple-950">
      {/* Who We Are */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-8">Who are we</h1>
            <ul className="space-y-6 text-lg leading-relaxed list-disc list-inside text-white/90">
              <li><strong>V-NEST</strong>, the startup and research foundation of VIT Chennai, nurtures innovation by supporting students, faculty, and external entrepreneurs in building impactful startups.</li>
              <li>It collaborates with partners like Startup TN and Startup India to offer grants and mentorship.</li>
              <li>In just three years, V-NEST has empowered nearly 30 startups, aiming to set new standards in incubation and market success.</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(5)].map((_, index) => (
              <div key={index}
                className={`h-40 bg-[#3b0a64] rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out ${index === 3 ? 'col-span-2' : ''}`}/>
            ))}
          </div>
        </div>
      </section>

      {/* Convenors */}
      <section className="pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-16 text-white">Convenors</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {convenors.map((c) => (
              <div key={c.id} className="group relative h-80">
                <div className="absolute inset-x-0 top-0 rounded-xl bg-[#3b0a64] overflow-hidden h-64 cursor-pointer transform transition-all duration-700 ease-in-out group-hover:-translate-y-6">
                  <div className="w-full h-full bg-gradient-to-br from-[#3b0a64] to-[#5a1090]"></div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#2a003f] rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out delay-100 shadow-lg border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-purple-300 mt-1">{c.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8">Benefits</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((b, i) => (
              <div
                key={i}
                id={`benefit-${i}`}
                className={`flex items-center gap-4 border-2 border-violet-400 rounded-full px-6 py-4 hover:shadow-[0_0_15px_#c084fc] transition-all duration-300 ${
                  visibleBenefits[i] ? 'opacity-100 translate-y-0 transition-all duration-700 ease-in' : 'opacity-0 translate-y-8'
                }`}
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
    </div>
  );
};

export default WhoWeAre;
