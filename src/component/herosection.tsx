"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "../components/SectionHeading";

function HeroSection() {
  const [state, setState] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

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
      @keyframes fadeInModal {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        animation: fadeIn 0.3s ease;
      }
      
      .modal-content {
        background-color: rgba(30, 10, 60, 0.9);
        border-radius: 16px;
        width: 90%;
        max-width: 500px;
        padding: 32px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5), 0 0 25px rgba(230,166,255,0.3);
        border: 1px solid rgba(230,166,255,0.3);
        animation: fadeInModal 0.5s ease;
      }
      
      .form-input {
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 16px;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(230,166,255,0.3);
        border-radius: 8px;
        color: white;
        font-size: 16px;
        transition: all 0.3s ease;
        font-family: var(--font-primary), system-ui, sans-serif;
      }
      
      .form-input:focus {
        outline: none;
        border-color: rgba(230,166,255,0.8);
        box-shadow: 0 0 10px rgba(230,166,255,0.4);
        background-color: rgba(255, 255, 255, 0.15);
      }
      
      .apply-button {
        background: linear-gradient(135deg, #a855f7 0%, #7e22ce 100%);
        color: white;
        padding: 10px 24px;
        border-radius: 8px;
        font-weight: 600;
        margin-top: 16px;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        box-shadow: 0 4px 15px rgba(126, 34, 206, 0.4);
        font-family: var(--font-heading), system-ui, sans-serif;
        letter-spacing: var(--ls-wide);
      }
      
      .apply-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(126, 34, 206, 0.6);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '' });
    setShowForm(false);
    // Show success message or redirect
    alert('Application submitted successfully!');
  };

  return (
    <section className="relative h-[100vh]">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-16 md:py-48 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text with animations */}
          <div className="space-y-6 animate-[fadeIn_1s_ease-in-out]">
            <div className="animate-[slideInLeft_0.8s_ease-in-out]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white title-glow uppercase">
                WELCOME TO
                <br />
                <span className="text-violet-300">V-NEST</span>
              </h1>
            </div>
            <p className="text-white/90 text-xl md:text-2xl animate-[fadeIn_1.2s_ease-in-out]">
              VIT Chennai Startups and Research Foundation
              <br />
              <span className="text-violet-300 font-medium">We Nurture You to Fly High</span>
            </p>
            <div className="animate-[fadeIn_1.5s_ease-in-out]">
              <button 
                onClick={handleApplyClick}
                className="flex items-center justify-center gap-x-2 py-3 px-8 mt-6 text-base md:text-lg text-white font-medium bg-purple-700 hover:bg-purple-600 active:bg-purple-800 duration-300 rounded-full border-2 border-violet-400 hover:shadow-lg hover:shadow-purple-700/50 transform transition-all hover:-translate-y-1"
              >
                Apply Now
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

      {/* Application Modal Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold mb-6 text-purple-200 fancy-text">Submit Your Application</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-purple-200 mb-2 font-medium subheading" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-purple-200 mb-2 font-medium subheading" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handleFormClose}
                  className="px-6 py-2 border border-purple-300/50 text-purple-200 rounded-lg hover:bg-purple-900/30 transition-all subheading"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="apply-button"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
export default HeroSection;