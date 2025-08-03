import React from "react";
import { motion } from "framer-motion";
import { FaImages, FaArrowRight } from "react-icons/fa";

const GalleryHighlights = () => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/7a/29/0f/7a290fe517c932552232cf134e9b4149.jpg",
      alt: "गणेश मूर्ती",
      category: "मूर्ती"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mumbai%27s_Ganesh_Festival_%283884643013%29.jpg/1200px-Mumbai%27s_Ganesh_Festival_%283884643013%29.jpg",
      alt: "आरती सोहळा",
      category: "आरती"
    },
    {
      src: "https://www.loksatta.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-12.38.34_b401a6f7-1.jpg",
      alt: "शोभायात्रा",
      category: "मिरवणूक"
    },
    {
      src: "https://www.loksatta.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-17-at-12.38.34_b401a6f7-1.jpg",
      alt: "फुलांची सजावट",
      category: "सजावट"
    },
    {
      src: "https://thumbs.dreamstime.com/b/lord-ganpati-idol-replica-jejuri-gad-festival-shivaji-nagar-pune-145536229.jpg",
      alt: "गणपती मंडप",
      category: "मंडप"
    },
    {
      src: "https://notintown.net/old/article_pic/2022/4-1663527752.jpg",
      alt: "कार्यक्रमाचे क्षण",
      category: "कार्यक्रम"
    },
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-4 flex items-center justify-center gap-3">
            <FaImages className="text-amber-500" />
            गॅलरी झलक
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आमच्या मंडळाच्या विशेष क्षणांचे सुंदर दृश्य...
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-w-4 aspect-h-3">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-orange-600 rounded-full">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{img.alt}</h3>
                </div>
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
            पूर्ण गॅलरी पहा
            <FaArrowRight className="text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHighlights;