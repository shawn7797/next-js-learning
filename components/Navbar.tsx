"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname(); // Tracks the current active URL path

  const role = user?.publicMetadata?.role;

  // Define nav links dynamically to keep code clean and readable
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    ...(isSignedIn && role === "vendor"
      ? [{ href: "/vendor/profile", label: "Vendor Profile" }]
      : []),
    ...(isSignedIn && role === "customer"
      ? [{ href: "/customer/profile", label: "Customer Profile" }]
      : []),
  ];

  return (
    <nav className="flex gap-4 py-4 items-center">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
              isActive
                ? "text-white"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            {/* The Active Sliding Cursor Effect */}
            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-neutral-900 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
