"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Curve = () => {
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
      y: -50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
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

  return (
    <div className="relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left side with curved right border */}
        <div
          className="relative w-full md:w-1/2 flex flex-col justify-center rounded-r-full items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(90deg, #2563eb 0%, #ffffff 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* DEEP FREEZER */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  DEEP FREEZER
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  Ultra-low temperature freezers designed for long-term storage of 
                  medical samples, vaccines, and biological specimens at precise 
                  temperatures ranging from -20°C to -86°C.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-snowflake text-white text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* AUTOCLAVE (STEAM STERILIZER) */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  AUTOCLAVE (STEAM STERILIZER)
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  High-pressure steam sterilization equipment that eliminates all 
                  forms of microbial life from medical instruments and equipment, 
                  ensuring complete sterility for safe medical procedures.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-fire text-white text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* BIO-SAFETY CABINET */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  BIO-SAFETY CABINET
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  Enclosed workspaces with HEPA-filtered airflow that provide 
                  protection for laboratory personnel, environment, and samples 
                  when working with infectious microorganisms and hazardous materials.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Center image */}
        <motion.div 
          className="relative w-full md:w-auto -mx-20 md:mx-0 z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            rotate: 15,
            rotateY: 15,
            rotateX: 10,
            transition: { duration: 0.4 }
          }}
        >
          <img
            alt="Medical equipment and hospital furniture"
            className="object-contain"
            height={500}
            src="/ot tables.png"
            width={600}
          />
        </motion.div>
        {/* Right side with curved left border */}
        <div
          className="relative w-full rounded-l-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(270deg, #2563eb 0%, #ffffff 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* CSSD EQUIPMENTS */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-cogs text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  CSSD EQUIPMENTS
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  Central Sterile Supply Department equipment including washers, 
                  sterilizers, and packaging systems that ensure proper cleaning, 
                  disinfection, and sterilization of medical instruments.
                </p>
              </div>
            </motion.div>
            {/* HOSPITAL FURNITURE */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-bed text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  HOSPITAL FURNITURE
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  Comprehensive range of medical furniture including hospital beds, 
                  examination tables, storage cabinets, and specialized seating 
                  designed for patient comfort and healthcare efficiency.
                </p>
              </div>
            </motion.div>
            {/* ETO STERILIZER */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#9b5a37] w-20 h-20 flex items-center justify-center hidden sm:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-atom text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  ETO STERILIZER
                </h3>
                <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                  Ethylene Oxide sterilization system for heat and moisture-sensitive 
                  medical devices and instruments, providing low-temperature sterilization 
                  while maintaining material integrity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Curve;