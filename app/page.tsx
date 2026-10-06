"use client";

import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureItem[] = [
  {
    title: "Lightning Fast",
    description: "Optimized for maximum speed and next-gen web performance metrics.",
    icon: "⚡",
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade data encryption and fully compliant authentication modules.",
    icon: "🛡️",
  },
  {
    title: "Highly Scalable",
    description: "A flexible architecture designed to grow seamlessly with your user base.",
    icon: "📈",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-between">
      
      {/* 1. Hero Section */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-indigo-100 dark:border-indigo-900/50">
          ✨ Introducing Version 2.0
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Build your next big idea <span className="text-indigo-600 dark:text-indigo-400">faster than ever</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          A neat, clean platform explicitly engineered to handle high-performance operations and modern web workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:scale-[1.02]">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-medium rounded-xl transition-all duration-200">
            Live Demo
          </button>
        </div>
      </section>

      {/* 2. Metrics Block */}
      <section className="bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700/60 py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">99.9%</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">15M+</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">API Requests</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">&lt;200ms</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Global Latency</div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm flex flex-col items-start space-y-4"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center text-2xl select-none">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
