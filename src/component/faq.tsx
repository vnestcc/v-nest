'use client';
import { useState } from "react";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Who can apply to V-NEST?",
    answer: "Anyone with a viable startup idea or early-stage startup can apply.",
  },
  {
    question: "What kind of support does V-NEST offer?",
    answer: "V-NEST offers mentorship, funding access, workspace, and networking.",
  },
  {
    question: "Is there any fee to incubate a startup at V-NEST?",
    answer: "No, incubation at V-NEST is completely free of charge.",
  },
  {
    question: "How do I apply to V-NEST?",
    answer: "You can apply online via the V-NEST website by filling out the application form.",
  },
];

export default function Frequently() {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-12 bg-gradient-to-br from-purple-950 via-black to-purple-950 relative">
      
      
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
        <h1 className="text-6xl text-white mb-18 ml-20 heading-gradient title-glow">
          FAQS
        </h1>

        {faqs.map((faq, index) => (
          <button
        key={index}
        onClick={() => setSelectedFAQ(faq)}
        className="text-left px-6 py-4 border border-purple-500 rounded-xl text-white text-lg font-medium shadow-lg hover:shadow-purple-500/50 transition-all duration-300 mb-10 h-22 w-[34rem]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          boxShadow: '-8px 8px 10px rgba(168, 85, 247, 0.5)',
        }}
          >
        {faq.question}
          </button>
        ))}
      </div>

      
      <div className="w-full relative flex justify-end mt-24">
        
        <Image 
          src="/faq.svg" 
          alt="FAQ building" 
          width={700} 
          height={700} 
          className="object-contain w-[700px] h-[700px]" 
        />

        {selectedFAQ ? (
          <div className="absolute top-[180px] right-[325px] w-[220px] h-[160px] -rotate-3 text-white p-4 text-center font-medium fancy-text">
            <p>{selectedFAQ.answer}</p>
          </div>
        ) : (
          <div className="absolute top-[160px] right-[250px] -rotate-3 text-white text-4xl font-bold heading-gradient">
            V-NEST
          </div>
        )}
      </div>
    </div>
  );
}
