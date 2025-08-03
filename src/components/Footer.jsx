import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { RiLeafLine } from 'react-icons/ri';

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-orange-600 to-orange-700 text-white pt-16 pb-8">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-10">
        <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-yellow-300 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-amber-300 filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Mandal Info */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-4">
              <RiLeafLine className="text-2xl text-yellow-300" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                श्री गणेश मंडळ
              </h3>
            </div>
            <p className="text-orange-100">
              आम्ही सामाजिक, सांस्कृतिक व धार्मिक कार्यक्रमांचे आयोजन करतो. उत्सवात आपले मनापासून स्वागत!
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <FaWhatsapp className="text-white" />
              </div>
              <span className="text-sm">+91 98765 43210</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-300">
              जलद दुवे
            </h3>
            <ul className="space-y-3">
              {['मुख्यपृष्ठ', 'कार्यक्रम', 'गॅलरी', 'संपर्क'].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="#" 
                    className="text-orange-100 hover:text-yellow-300 flex items-center gap-2 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-300">
              संपर्क
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt />, text: 'पुणे, महाराष्ट्र, भारत' },
                { icon: <FaPhoneAlt />, text: '+91 98765 43210' },
                { icon: <FaEnvelope />, text: 'ganpatimandal@email.com' }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 text-orange-100"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-yellow-300 mt-1">{contact.icon}</span>
                  <span>{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-yellow-300">
              सोशल मीडिया
            </h3>
            <div className="flex gap-4 mb-6">
              {[
                { icon: <FaInstagram />, color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
                { icon: <FaFacebookF />, color: 'bg-blue-600' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full ${social.color} text-white flex items-center justify-center hover:scale-110 transition-transform`}
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-orange-100 text-sm">
              आमच्या नवीनतम अपडेटसाठी आम्हाला फॉलो करा
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-orange-100 text-sm mt-16 pt-6 border-t border-orange-400/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <RiLeafLine className="text-yellow-300" />
            <span>© {new Date().getFullYear()}  नव गजानन मित्र मंडळ ट्रस्ट. सर्व हक्क राखीव.</span>
            <RiLeafLine className="text-yellow-300" />
          </div>
          <p className="text-xs">Made with ❤️ for Bappa</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;