"use client";

import React from "react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Jenkins",
    role: "CEO & Founder",
    avatar: "👩‍💼",
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    avatar: "👨‍💻",
  },
  {
    name: "Elena Rostova",
    role: "Product Designer",
    avatar: "👩‍🎨",
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-12">
      
      {/* Top Section: Hero / Story Block */}
      <div className="max-w-4xl mx-auto w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side: Indigo Focus Block */}
        <div className="bg-indigo-600 p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Our Mission</h2>
            <p className="mt-4 text-indigo-100 max-w-sm">
              We build scalable, beautiful tools designed to simplify your everyday workflows and accelerate your product development.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="border-l-4 border-indigo-200 pl-4">
              <h4 className="font-bold text-lg text-white">Innovation First</h4>
              <p className="text-sm text-indigo-100">Pushing engineering boundaries daily.</p>
            </div>
            <div className="border-l-4 border-indigo-200 pl-4">
              <h4 className="font-bold text-lg text-white">User Centric</h4>
              <p className="text-sm text-indigo-100">Designed for humans, optimized for speed.</p>
            </div>
          </div>

          <div className="text-xs text-indigo-200 mt-8">
            Est. 2026 • Driven by passion.
          </div>
        </div>

        {/* Right Side: Narrative Copy Block */}
        <div className="p-8 flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who We Are</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Founded by a dedicated team of engineers and designers, we realized that building for the web shouldn't feel like a compromise. We focus on writing clean code, building responsive interfaces, and ensuring exceptional developer experiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">What We Value</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Transparency, performance, and accessibility. Every system layout we design follows strict criteria ensuring full cross-device functionality out-of-the-box.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Section: Team Grid Layout */}
      <div className="max-w-4xl mx-auto w-full text-center">
        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/50 rounded-full flex items-center justify-center text-4xl mb-4 select-none">
                {member.avatar}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name}
              </h4>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
