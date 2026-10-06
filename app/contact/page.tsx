"use client";

import React, { FormEvent, useState } from "react";

const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., fetch API route call)
    console.log("Form submitted successfully!");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-12">
      
      {/* Main Container */}
      <div className="max-w-4xl mx-auto w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side: Indigo Info Block */}
        <div className="bg-indigo-600 p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-indigo-100 max-w-sm">
              Have questions, feedback, or a project in mind? Drop us a line and our team will get back to you within 24 hours.
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-500/50 rounded-xl flex items-center justify-center text-xl">
                📍
              </div>
              <div>
                <h4 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Office</h4>
                <p className="text-sm text-white">123 Innovation Way, Tech Suite 500</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-500/50 rounded-xl flex items-center justify-center text-xl">
                📞
              </div>
              <div>
                <h4 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Phone</h4>
                <p className="text-sm text-white">+1 (555) 019-2834</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-500/50 rounded-xl flex items-center justify-center text-xl">
                ✉️
              </div>
              <div>
                <h4 className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Email</h4>
                <p className="text-sm text-white">support@example.com</p>
              </div>
            </div>
          </div>

          <div className="text-xs text-indigo-200 mt-8">
            © 2026 Your Company. All rights reserved.
          </div>
        </div>

        {/* Right Side: Interactive Form Block */}
        <div className="p-8 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-5xl">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your message has been sent. We'll be in touch shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
