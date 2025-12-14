"use client";
import React from 'react'
import { motion } from 'framer-motion'

const chooseList = [
  {
    icon: 'fas fa-award',
    title: 'Legacy of Experience',
    desc: 'With over a decade of manufacturing excellence, we understand the intricate requirements of medical and laboratory environments.'
  },
  {
    icon: 'fas fa-certificate',
    title: 'Superior Product Quality',
    desc: 'We use high-grade materials and cutting-edge manufacturing practices to ensure durability, functionality, and regulatory compliance.'
  },
  {
    icon: 'fas fa-sliders-h',
    title: 'Customized Solutions',
    desc: 'Our team provides tailored equipment solutions that match the specific needs of hospitals, labs, and research institutes.'
  },
  {
    icon: 'fas fa-headset',
    title: 'Reliable After-Sales Support',
    desc: 'We offer prompt installation, training, and after-sales services, ensuring seamless operation and client satisfaction.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Certified & Compliant',
    desc: 'Our products adhere to national and international safety and performance standards, ensuring you work with safe and certified technology.'
  },
  {
    icon: 'fas fa-users',
    title: 'Trusted by Industry Leaders',
    desc: 'Our clientele spans reputed hospitals, government organizations, universities, and private research labs across India and beyond.'
  },
];

const Choose = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      x: 10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const missionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-12 px-4 md:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-white mb-6 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p 
          className="text-center text-sm sm:text-base text-yellow-300 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Choosing APS Lab Instruments Pvt. Ltd. means choosing precision, quality, and trust. Here's why our customers count on us:
        </motion.p>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 mb-10"
          variants={containerVariants}
        >
          {chooseList.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 bg-white/90 rounded-xl shadow-lg p-6 border border-[#23286b] group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.span 
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 flex items-center justify-center text-xl text-white"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className={item.icon}></i>
              </motion.span>
              <motion.div variants={textVariants} whileHover="hover">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#23286b] mb-1 group-hover:text-yellow-500 transition-colors duration-200">{item.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-[#1d1f1f] font-medium">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="bg-white/90 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-[#23286b] cursor-pointer"
          variants={missionVariants}
          whileHover="hover"
        >
          <h3 className="text-sm sm:text-base md:text-xl font-bold text-[#23286b] mb-2">Our Mission</h3>
          <p className="text-[10px] sm:text-xs md:text-base text-[#1d1f1f] mb-4">To empower medical and research institutions with advanced, affordable, and reliable equipment that enhances efficiency, safety, and innovation.</p>
          <h3 className="text-sm sm:text-base md:text-xl font-bold text-[#23286b] mb-2">Our Vision</h3>
          <p className="text-[10px] sm:text-xs md:text-base text-[#1d1f1f]">To be a globally recognized leader in manufacturing high-quality lab and hospital equipment that shapes the future of diagnostics, healthcare, and research.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Choose;