import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Megaphone } from 'lucide-react';

const announcements = [
  "🪔 गणेशोत्सवाची तयारी जोरात सुरू आहे!",
  "📅 विसर्जन मिरवणूक 12 सप्टेंबर रोजी सायंकाळी 4 वाजता सुरु होईल.",
  "🎉 मंडळाच्या वतीने सर्व नागरिकांना हार्दिक आमंत्रण!",
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

const AnnouncementBanner = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white max-w-md w-full p-6 rounded-xl shadow-2xl relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
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
  );
};

export default AnnouncementBanner;