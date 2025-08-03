import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaDrum, FaWater, FaPrayingHands } from "react-icons/fa";

const EventCard = () => {
  const events = [
    {
      title: "गणेश स्थापना",
      date: "२ सप्टेंबर २०२५, सकाळी ८:००",
      description: "परंपरागत पूजा विधी व गणपती बाप्पाची स्थापना.",
      icon: <FaPrayingHands className="text-orange-500 text-2xl" />
    },
    {
      title: "महाआरती",
      date: "३ सप्टेंबर २०२५, सायंकाळी ७:००",
      description: "ढोल-ताशा आणि भजनसंध्या सह भव्य महाआरती.",
      icon: <FaDrum className="text-amber-500 text-2xl" />
    },
    {
      title: "विसर्जन मिरवणूक",
      date: "८ सप्टेंबर २०२५, सायंकाळी ५:००",
      description: "आनंदी, रंगीत,ढोल-ताशा आणि भक्तिभावपूर्ण विसर्जन मिरवणूक.",
      icon: <FaWater className="text-blue-500 text-2xl" />
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4 flex items-center justify-center gap-3">
            <FaCalendarAlt className="text-amber-500" />
            आगामी कार्यक्रम
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आमच्या मंडळाचे विशेष कार्यक्रमांचे वेळापत्रक. सर्व भक्तांना सादर...
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  {event.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-amber-600 mb-4">
                  <FaCalendarAlt />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-700 mb-6">{event.description}</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            सर्व कार्यक्रम पहा
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCard;