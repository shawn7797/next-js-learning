"use client";

import React from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Documentation", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {/* Brand Identity / Left Column */}
          <div className="col-span-2 space-y-4">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-2"
            >
              <span className="text-indigo-600 dark:text-indigo-400">⚡</span>{" "}
              AcmeCorp
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs font-medium leading-relaxed">
              Engineering high-performance web experiences designed to scale
              with your ideas.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg transition-colors"
                aria-label="GitHub"
              >
                💻
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>

          {/* Dynamic Link Groups */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="col-span-1 space-y-3">
              <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Utility Bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-700/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400 dark:text-gray-500">
          <div>
            © {new Date().getFullYear()} Shawn Mathias. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
