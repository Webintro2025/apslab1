"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStethoscope, FaPhone, FaBookOpen } from "react-icons/fa";
import About from "../../components/About";
import Slides from "../../components/Slides";
import Curve from "../../components/Curve";
import Count from "../../components/Count";
import Choose from "../../components/Choose";
import WhatWeDo from "../../components/WhatWeDo";

const AboutPageClient = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } },
  };

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.6 } },
  };

  return (
    <motion.div className="min-h-screen bg-gray-50" variants={pageVariants} initial="hidden" animate="visible">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 px-4 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m40 40v-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
          animate={{ y: [0, 15, 0], x: [0, -10, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/20 rounded-full blur-xl"
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div className="mb-8" variants={decorativeVariants}>
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaStethoscope className="text-2xl sm:text-3xl text-blue-900" />
            </div>
          </motion.div>

          <motion.h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" variants={headerVariants}>
            About <span className="text-yellow-400">APS Lab</span>
            <br />
            <span className="text-lg sm:text-3xl md:text-4xl font-normal text-blue-200">Instruments</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8"
            variants={subtitleVariants}
          >
            Leading manufacturer and supplier of premium medical equipment, serving healthcare institutions across India since 2019.
          </motion.p>
        </div>
      </section>

      {/* Rest Sections */}
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <About />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <WhatWeDo />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-white">
        <Slides />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Curve />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="bg-gray-50">
        <Choose />
      </motion.section>
      <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Count />
      </motion.section>
    </motion.div>
  );
};

export default AboutPageClient;
