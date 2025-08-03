import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Megaphone } from 'lucide-react';
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const announcements = [
    "🪔 गणेशोत्सवाची तयारी जोरात सुरू आहे!",
    "📅 विसर्जन मिरवणूक 12 सप्टेंबर रोजी सायंकाळी 4 वाजता सुरु होईल.",
    "🎉 मंडळाच्या वतीने सर्व नागरिकांना हार्दिक आमंत्रण!",
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img
                src="/logo.png" // Replace with your logo path
                alt="Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-lg font-bold text-orange-600">नव गजानन मित्र मंडळ</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="relative text-gray-700 font-medium group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Announcement Button */}
              <button
                onClick={() => setShowAnnouncements(true)}
                className="text-orange-600 hover:text-orange-800 transition-transform hover:scale-110 relative"
                aria-label="View announcements"
              >
                <Megaphone size={24} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-orange-600 focus:outline-none"
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {navOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-50"
                    onClick={() => setNavOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Announcement Popup */}
      <AnimatePresence>
        {showAnnouncements && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAnnouncements(false)}
          >
            <motion.div 
              className="bg-white max-w-md w-full p-6 rounded-xl shadow-2xl relative"
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowAnnouncements(false)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                aria-label="Close announcements"
              >
                <FaTimes />
              </button>
              
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-orange-500" size={24} />
                <h2 className="text-xl font-bold text-orange-600">महत्वाची घोषणा</h2>
              </div>
              
              <ul className="space-y-3 text-gray-800">
                {announcements.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="p-3 bg-orange-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;