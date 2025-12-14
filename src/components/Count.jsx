"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaTools, FaHandshake } from 'react-icons/fa';

const statsData = [
  {
    icon: <FaUsers className="text-xl text-blue-900" />, // Happy Clients
    number: 500,
    suffix: '+',
    title: 'Happy Clients',
    description: 'Satisfied customers across India'
  },
  {
    icon: <FaAward className="text-xl text-blue-900" />, // Years Experience
    number: 5,
    suffix: '+',
    title: 'Years Experience',
    description: 'Since 2019 establishment'
  },
  {
    icon: <FaTools className="text-xl text-blue-900" />, // Equipment Types
    number: 100,
    suffix: '+',
    title: 'Equipment Types',
    description: 'Medical & laboratory instruments'
  },
  {
    icon: <FaHandshake className="text-xl text-blue-900" />, // Projects Completed
    number: 50,
    suffix: '+',
    title: 'Projects Completed',
    description: 'Successful installations'
  }
];

// Animated Counter Component
const AnimatedCounter = ({ targetNumber, suffix = '', duration = 3000 }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return; // Don't animate if already completed

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        // Calculate current number based on progress
        const newNumber = Math.floor(targetNumber * progress);
        setCurrentNumber(newNumber);
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Animation complete, set final number and mark as completed
        setCurrentNumber(targetNumber);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetNumber, duration, hasAnimated]);

  return (
  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white block leading-none">
      {currentNumber}{suffix}
    </span>
  );
};

const Count = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const numberVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
  <section className="w-full py-10 px-2 sm:px-4 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence in medical equipment manufacturing
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-200"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="mb-4"
                  variants={numberVariants}
                  whileHover="hover"
                >
                  <AnimatedCounter 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    duration={3000 + index * 500} // Stagger animation timing
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs sm:text-sm md:text-lg text-blue-100 mb-6">
            Trusted by hospitals, laboratories, and research institutions across India
          </p>
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 opacity-70">
            <motion.div 
              className="text-white/60"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-hospital text-lg sm:text-xl md:text-2xl"></i>
              <p className="text-[10px] sm:text-xs mt-1">Hospitals</p>
            </motion.div>
            <motion.div 
              className="text-white/60"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-flask text-lg sm:text-xl md:text-2xl"></i>
              <p className="text-[10px] sm:text-xs mt-1">Labs</p>
            </motion.div>
            <motion.div 
              className="text-white/60"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-university text-lg sm:text-xl md:text-2xl"></i>
              <p className="text-[10px] sm:text-xs mt-1">Universities</p>
            </motion.div>
            <motion.div 
              className="text-white/60"
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-microscope text-lg sm:text-xl md:text-2xl"></i>
              <p className="text-[10px] sm:text-xs mt-1">Research</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Count;