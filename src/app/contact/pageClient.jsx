"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaComments, FaDownload, FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';
import GetInTouch from '../../components/GetInTouch';
import Maps from '../../components/Maps';

const ContactPage = () => {
  // Page animation variants
  const pageVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const decorativeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section with Contact Us Heading */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-20 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Decorative Icon */}
          <motion.div 
            className="mb-8"
            variants={decorativeVariants}
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaEnvelope className="text-2xl sm:text-3xl text-white" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            variants={headerVariants}
          >
            Contact <span className="text-green-400">Us</span>
            <br />
            <span className="text-lg sm:text-3xl md:text-4xl font-normal text-blue-200">Get In Touch Today</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8"
            variants={subtitleVariants}
          >
            Ready to discuss your medical equipment needs? Our expert team is here to help you 
            find the perfect solutions for your healthcare facility.
          </motion.p>

          {/* Quick Contact Info */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-3 text-white"
              variants={contactInfoVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
                <FaPhone className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-sm text-blue-200">Call Us</div>
                <div className="font-semibold">+919899239541 </div>
              </div>
            </motion.div>
            
            <div className="hidden sm:block w-px h-12 bg-blue-300/30"></div>
            
            <motion.div 
              className="flex items-center space-x-3 text-white"
              variants={contactInfoVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-sm text-blue-200">Email Us</div>
                <div className="font-semibold">apsinstruments@gmail.com, aps.inst2010@gmail.com</div>
              </div>
            </motion.div>
            
            <div className="hidden sm:block w-px h-12 bg-blue-300/30"></div>
            
            <motion.div 
              className="flex items-center space-x-3 text-white"
              variants={contactInfoVariants}
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-left">
                <div className="text-sm text-blue-200">Visit Us</div>
                <div className="font-semibold">Delhi, India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaComments className="mr-2" />
              Start Conversation
            </motion.button>
            
            <motion.a
              href="/APS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="APS.pdf"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download Brochure
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#f8fafc"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f8fafc"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Get In Touch Component Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white"
      >
        <GetInTouch />
      </motion.section>

      {/* Contact Info Cards Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Multiple Ways to <span className="text-blue-600">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method of communication. We're here to assist you 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Phone Card */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaPhone className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our experts</p>
              <div className="text-green-600 font-semibold">+919899239541 </div>
              <div className="text-sm text-gray-500 mt-2">Mon-Sat 9AM-6PM</div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaEnvelope className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us detailed inquiries</p>
              <div className="text-blue-600 font-semibold">apsinstruments@gmail.com, aps.inst2010@gmail.com</div>
              <div className="text-sm text-gray-500 mt-2">Response within 24hrs</div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat & support</p>
              <div className="text-green-600 font-semibold">+919899239541 </div>
              <div className="text-sm text-gray-500 mt-2">Instant messaging</div>
            </motion.div>

            {/* Visit Card */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaMapMarkerAlt className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">See equipment in person</p>
              <div className="text-red-600 font-semibold">Delhi, India</div>
              <div className="text-sm text-gray-500 mt-2">Appointment required</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Maps Component Section */}
      <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white"
      >
        <Maps />
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of medical equipment do you manufacture?",
                answer: "We manufacture a wide range of medical equipment including laboratory instruments, diagnostic devices, surgical tools, and hospital furniture."
              },
              {
                question: "Do you provide installation and training services?",
                answer: "Yes, we provide complete installation, training, and after-sales support for all our equipment to ensure optimal performance."
              },
              {
                question: "What is your warranty policy?",
                answer: "We offer comprehensive warranty coverage ranging from 1-3 years depending on the equipment, with 24/7 technical support."
              },
              {
                question: "Do you ship internationally?",
                answer: "Currently, we serve customers across India. International shipping is available for bulk orders upon request."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <FaQuestionCircle className="text-blue-600 mr-2 sm:mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16 px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our team is standing by to help you find the perfect medical equipment solutions. 
            Don't wait - reach out today!
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="mr-2" />
              Call Now: +919899239541 
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="mr-2" />
              Send Email
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;
