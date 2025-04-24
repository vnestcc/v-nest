"use client";
import React, { useState, useEffect } from 'react';

// Create a client-side only component for stars
const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Only generate stars on the client side after component mounts
    const newStars = Array(100).fill().map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 5
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div className="absolute inset-0 w-screen h-full overflow-hidden z-10 pointer-events-none">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="absolute w-1 h-1 rounded-full bg-white opacity-30"
          style={{
            top: star.top,
            left: star.left,
            animation: `twinkle ${star.duration}s infinite ${star.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
};

const StepsToApply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // Step content
  const steps = [
    {
      id: 1,
      title: "Submit Application",
      content: "Submit your application with your innovative startup idea. We're looking for disruptive solutions that leverage cutting-edge technology to solve real-world problems."
    },
    {
      id: 2,
      title: "Initial Review",
      content: "Our expert panel will review your application and evaluate the potential of your idea, market fit, and technical feasibility. Selected teams will be invited to the next stage."
    },
    {
      id: 3,
      title: "Interview",
      content: "Pitch your idea to our panel of investors, industry experts, and mentors. Be prepared to demonstrate your prototype and answer questions about your business model."
    },
    {
      id: 4,
      title: "Funding",
      content: "Selected startups will receive funding, mentorship, office space, and access to our network of partners. Join our accelerator program and take your startup to the next level."
    }
  ];

  // Step positions - adjusted for better visibility and scrolling
  const stepPositions = [
    { x: 50, y: 250 },   // Step 1
    { x: 300, y: 350 },  // Step 2
    { x: 600, y: 520 },  // Step 3
    { x: 850, y: 650 }   // Step 4 - moved up to be visible within viewport
  ];

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create curved path (semicircle) SVG between two points
  const createCurvedPath = (x1, y1, x2, y2) => {
    // Calculate midpoint with a vertical offset to create an arch
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Adjust the curve height based on distance
    const curveHeight = distance * 0.3; // Increase this value for more curve
    
    // Calculate control point for the quadratic curve
    // For a downward curve when moving right
    const cpx = (x1 + x2) / 2;
    const cpy = Math.min(y1, y2) - curveHeight;
    
    return `M${x1},${y1} Q${cpx},${cpy} ${x2},${y2}`;
  };

  const goToNextStep = () => {
    if (currentStep < steps.length && !animating) {
      setAnimating(true);
      setCurrentStep(currentStep + 1);
      setTimeout(() => setAnimating(false), 600);
      
      // Auto-scroll to make step 4 visible
      if (currentStep === 3) {
        window.scrollTo({
          top: window.scrollY + 200,
          behavior: 'smooth'
        });
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1 && !animating) {
      setAnimating(true);
      setCurrentStep(currentStep - 1);
      setTimeout(() => setAnimating(false), 600);
    }
  };

  const handleStepClick = (stepId) => {
    if (!animating && stepId !== currentStep) {
      setAnimating(true);
      setCurrentStep(stepId);
      setTimeout(() => setAnimating(false), 600);
      
      // Auto-scroll to make step 4 visible if clicked
      if (stepId === 4) {
        window.scrollTo({
          top: window.scrollY + 200,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ name: '', email: '' });
    setShowForm(false);
    // Show success message or redirect
    alert('Application submitted successfully!');
  };

  // Responsive adjustments for mobile
  const isMobile = dimensions.width < 768;
  const mobileStepPositions = [
    { x: 30, y: 150 },   // Step 1
    { x: 30, y: 250 },   // Step 2
    { x: 30, y: 350 },   // Step 3
    { x: 30, y: 450 }    // Step 4
  ];

  const positions = isMobile ? mobileStepPositions : stepPositions;

  return (
    <section className="w-full relative overflow-x-hidden overflow-y-auto pb-24">
      {/* Client-side rendered stars */}
      <StarsBackground />

      {/* Custom CSS */}
      <style jsx global>{`
        .bg-radial-purple {
          background: radial-gradient(circle at center, rgba(126, 34, 206, 0.3) 0%, rgba(0, 0, 0, 0) 80%);
        }
        .path-svg {
          position: absolute;
          z-index: 5;
          pointer-events: none;
        }
        .path-line {
          fill: none;
          stroke: rgba(230,166,255,0.8);
          stroke-width: 4;
          stroke-linecap: round;
          filter: drop-shadow(0 0 12px rgba(230,166,255,0.6));
          transition: opacity 0.5s ease;
        }
        .step-circle {
          width: 80px;
          height: 80px;
          background-color: rgba(230,166,255,0.9);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          position: absolute;
          z-index: 10;
          box-shadow: 0 0 30px rgba(230,166,255,0.8);
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: var(--font-heading), system-ui, sans-serif;
        }
        .step-content {
          position: absolute;
          background-color: rgba(30, 10, 60, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          max-width: 380px;
          display: none;
          border: 1px solid rgba(230,166,255,0.4);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(230,166,255,0.3);
          z-index: 20;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 16px;
          letter-spacing: 0.3px;
        }
        .step-content.active {
          display: block;
          animation: fadeIn 0.5s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.1; }
          50% { opacity: 0.7; }
          100% { opacity: 0.1; }
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
        
        @media (max-width: 768px) {
          .step-circle {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }
          .step-content {
            left: 110px !important;
            max-width: 100%;
            width: calc(100% - 130px);
          }
          .modal-content {
            padding: 24px;
          }
        }
      `}</style>
      
      {/* Add radial purple gradient */}


      <div className="relative w-full min-h-screen overflow-visible">

        {/* Heading and Navigation */}
        <div className="sticky top-16 right-8 text-right z-30 p-4 float-right">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white title-glow">
            Steps to Apply
          </h1>
          <div className="flex justify-end gap-4">
            <button 
              onClick={goToPreviousStep}
              className={`border border-purple-300/50 text-purple-200 px-8 py-3 rounded-[8px] whitespace-nowrap hover:bg-purple-300/10 transition-all shadow-lg shadow-purple-900/20 ${currentStep === 1 ? 'opacity-50' : ''} subheading`}
              disabled={currentStep === 1 || animating}
            >
              Previous
            </button>
            <button 
              onClick={goToNextStep}
              className={`bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-3 rounded-[8px] whitespace-nowrap hover:opacity-90 transition-all shadow-lg shadow-purple-900/30 ${currentStep === steps.length ? 'opacity-50' : ''} fancy-text`}
              disabled={currentStep === steps.length || animating}
            >
              Next Step
            </button>
          </div>
        </div>

        {/* SVG Curved Paths between steps */}
        {!isMobile && (
          <>
            <svg className="path-svg" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
              <path 
                className="path-line" 
                d={createCurvedPath(
                  positions[0].x + 40, 
                  positions[0].y + 40, 
                  positions[1].x + 40, 
                  positions[1].y + 40
                )}
                style={{ opacity: currentStep > 1 ? 1 : 0.3 }}
              />
              <path 
                className="path-line" 
                d={createCurvedPath(
                  positions[1].x + 40, 
                  positions[1].y + 40, 
                  positions[2].x + 40, 
                  positions[2].y + 40
                )}
                style={{ opacity: currentStep > 2 ? 1 : 0.3 }}
              />
              <path 
                className="path-line" 
                d={createCurvedPath(
                  positions[2].x + 40, 
                  positions[2].y + 40, 
                  positions[3].x + 40, 
                  positions[3].y + 40
                )}
                style={{ opacity: currentStep > 3 ? 1 : 0.3 }}
              />
            </svg>
          </>
        )}
        
        {isMobile && (
          <div className="absolute left-[60px] top-[150px] w-[2px] h-[300px] bg-gradient-to-b from-purple-400/80 to-purple-400/40 opacity-30"></div>
        )}

        {/* Step Circles */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="step-circle"
            onClick={() => handleStepClick(step.id)}
            style={{
              left: `${positions[index].x}px`,
              top: `${positions[index].y}px`,
              backgroundColor: step.id === currentStep 
                ? 'rgba(230,166,255,0.9)' 
                : step.id < currentStep 
                  ? 'rgba(230,166,255,0.7)' 
                  : 'rgba(230,166,255,0.3)',
              boxShadow: step.id === currentStep 
                ? '0 0 35px rgba(230,166,255,0.9)' 
                : step.id < currentStep 
                  ? '0 0 25px rgba(230,166,255,0.7)' 
                  : '0 0 20px rgba(230,166,255,0.3)',
              transform: step.id === currentStep ? 'scale(1.1)' : 'scale(1)'
            }}
          >
            {step.id}
          </div>
        ))}

        {/* Step Content with improved UI */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step-content ${step.id === currentStep ? 'active' : ''}`}
            style={{
              left: `${positions[index].x + 90}px`,
              top: `${positions[index].y - 80}px`
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-200 fancy-text">{step.title}</h3>
            <p className="text-white/90 subheading">{step.content}</p>
            
            {/* Apply button only for step 4 */}
            {step.id === 4 && currentStep === 4 && (
              <button 
                className="apply-button mt-4"
                onClick={handleApplyClick}
              >
                Apply Now
              </button>
            )}
          </div>
        ))}
        
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
      </div>
    </section>
  );
};

export default StepsToApply; 


