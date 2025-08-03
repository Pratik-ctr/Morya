import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaPrayingHands } from "react-icons/fa";
import Hero_img from "../assets/Hero.jpeg";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageAnim = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-amber-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange-300 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-300 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-yellow-200 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                <FaPrayingHands className="mr-2" />
                श्री गणेशाय नमः
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-orange-600">गणपती</span>{" "}
              <span className="text-amber-600">बाप्पा मोरया!</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-gray-700 text-lg md:text-xl max-w-lg"
            >
              Welcome to{" "}
              <span className="font-semibold text-orange-600">
                नव गजानन मित्र मंडळ-ट्रस्ट
              </span>
              . Join us in the divine celebration of devotion, culture, and
              eternal traditions.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#events"
                className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <FaCalendarAlt />
                View Events
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
              >
                Our Story
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25+</div>
                <div className="text-gray-600">वर्षे</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100+</div>
                <div className="text-gray-600">कार्यकर्ते</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10+</div>
                <div className="text-gray-600">कार्यक्रम</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={imageAnim}
            initial="hidden"
            animate="show"
          >
            <div className="relative">
              <img
                src={Hero_img}
                alt="Ganpati Bappa"
                className="w-full max-w-md mx-auto rounded-tl-[100px] rounded-br-[100px] border-8 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl">
                  🕉️
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
