"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { FaHome, FaChevronRight, FaCheckCircle, FaShieldAlt, FaTools, FaStar, FaCogs, FaCheck, FaPhone, FaDownload, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import servicesData from '../../service.js';

const ProductPage = ({ params }) => {
  // Unwrap params if it's a Promise (Next.js 14+)
  const actualParams = typeof params.then === 'function' ? React.use(params) : params;
  const { slug } = actualParams;

  // Find the product by slug
  const product = servicesData.equipment_list.find(item => item.slug === slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  // Animation variants
  const pageVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1
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

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Extract features from description, handling both string and object types
  const getKeyFeatures = (description) => {
    if (typeof description === 'string') {
      const sentences = description.split('. ');
      return sentences.slice(1, 4).map((sentence, index) => ({
        id: index,
        text: sentence.trim() + (sentence.endsWith('.') ? '' : '.')
      }));
    } else if (description && Array.isArray(description.features)) {
      return description.features.slice(0, 3).map((feature, index) => ({
        id: index,
        text: feature
      }));
    } else {
      return [];
    }
  };

  const keyFeatures = getKeyFeatures(product.description);

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0l-2 2-2-2v4l2 2 2-2zM2 26h4v4H2v-4zm32-24h4v4h-4V2zM2 58h4v4H2v-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
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
          className="absolute top-1/3 right-20 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Textual Hero Content */}
            <div className="flex-1 w-full">
              {/* Breadcrumb */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <nav className="flex items-center space-x-2 text-blue-200 text-xs sm:text-sm">
                  <a href="/" className="hover:text-white transition-colors duration-200 flex items-center">
                    <FaHome className="mr-1" />
                    Home
                  </a>
                  <FaChevronRight className="text-xs" />
                  <a href="/products" className="hover:text-white transition-colors duration-200 flex items-center">
                    Products
                  </a>
                  <FaChevronRight className="text-xs" />
                  <span className="text-yellow-400 font-semibold">
                    {product.title.split(' – ')[0]}
                  </span>
                </nav>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                variants={headerVariants}
              >
                {product.title.split(' – ')[0]}
                <br />
                <span className="text-base sm:text-2xl md:text-3xl font-normal text-blue-200">
                  {product.title.split(' – ')[1]}
                </span>
              </motion.h1>

              {/* Quick Info */}
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white/20">
                  <span className="text-green-400 font-semibold flex items-center text-xs sm:text-base">
                    <FaCheckCircle className="mr-2" />
                    Medical Grade
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white/20">
                  <span className="text-yellow-400 font-semibold flex items-center text-xs sm:text-base">
                    <FaShieldAlt className="mr-2" />
                    Certified Quality
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-white/20">
                  <span className="text-blue-400 font-semibold flex items-center text-xs sm:text-base">
                    <FaTools className="mr-2" />
                    Professional Use
                  </span>
                </div>
              </motion.div>
            </div>
            {/* Right: Product Image, plain, no border/padding/bg */}
            <div className="flex-1 flex justify-end items-center mt-10 lg:mt-0">
              <motion.img 
                src={product.image} 
                alt={product.title}
                className="w-full max-w-[420px] h-auto object-contain lg:max-h-[340px]"
                style={{ aspectRatio: '1/1' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
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

      {/* Main Content Section */}
      <section className=" px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image removed as per request */}
            {/* Product Details */}
            <motion.div 
              className="space-y-8"
              variants={contentVariants}
            >
              {/* Removed Product Overview, Key Features, and CTA Buttons as requested */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Product Details
          </motion.h2>
          <motion.div 
            className="prose prose-lg prose-blue max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              {typeof product.description === 'string' ? (
                product.description.split('. ').map((sentence, index) => (
                  <motion.p
                    key={index}
                    className="text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {sentence.trim()}{sentence.endsWith('.') ? '' : '.'}
                  </motion.p>
                ))
              ) : product.description.operationTables ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">Operation Tables Overview</h3>
                  <p className="mb-4">{product.description.operationTables.overview}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Types:</h4>
                    <ul className="list-disc pl-6">
                      {product.description.operationTables.types.map((type, i) => (
                        <li key={i}>{type}</li>
                      ))}
                    </ul>
                  </div>
                  {product.description.operationTables.bariatricTable && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Bariatric Table (Model: {product.description.operationTables.bariatricTable.model})</h4>
                      <div className="mb-2">
                        <strong>Specifications:</strong>
                        <ul className="list-disc pl-6">
                          {Object.entries(product.description.operationTables.bariatricTable.specifications).map(([spec, value], i) => (
                            <li key={i}>
                              <span className="font-semibold capitalize">{spec.replace(/_/g, ' ')}:</span> {typeof value === 'object' ? Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ') : value}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-2">
                        <strong>Features:</strong>
                        <ul className="list-disc pl-6">
                          {product.description.operationTables.bariatricTable.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Available Models:</h4>
                    <div className="w-full overflow-x-auto">
                      <table className="min-w-full border border-gray-300 rounded-lg block w-full overflow-x-auto whitespace-nowrap text-xs sm:text-sm md:text-base">
                        <thead className="bg-gray-100">
                          <tr>
                            {Object.keys(product.description.operationTables.models[0]).map((col, i) => (
                              <th key={i} className="px-4 py-2 border-b text-left font-semibold text-gray-700 whitespace-nowrap">{col.replace(/_/g, ' ').toUpperCase()}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {product.description.operationTables.models.map((model, i) => (
                            <tr key={i} className="even:bg-gray-50">
                              {Object.values(model).map((val, j) => (
                                <td key={j} className="px-4 py-2 border-b text-gray-800 whitespace-nowrap">{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-1">Attachments:</h4>
                    <ul className="list-disc pl-6">
                      {product.description.operationTables.attachments.map((att, i) => (
                        <li key={i}>{att}</li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : product.description.otLights ? (
                <>
                  <h3 className="text-2xl font-bold mb-4">OT Light Models & Specifications</h3>
                  <div className="grid gap-6 mb-4">
                    {product.description.otLights.map((model, i) => (
                      <div key={i} className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow">
                        <h4 className="text-lg font-semibold mb-2 text-blue-900">{model.model || 'Model'}</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm">
                          {Object.entries(model).filter(([k]) => k !== 'model').map(([key, value], j) => (
                            <li key={j} className="mb-1">
                              <span className="font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').replace(/^./, c => c.toUpperCase())}:</span> <span className="text-gray-800">{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {product.description.title && (
                    <h3 className="text-2xl font-bold mb-2">{product.description.title}</h3>
                  )}
                  {product.description.category && (
                    <p className="text-base font-semibold mb-2">Category: {product.description.category}</p>
                  )}
                  {product.description.type && (
                    <p className="text-base font-semibold mb-2">Type: {product.description.type}</p>
                  )}
                  {product.description.applications && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Applications:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.applications.map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.features && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Features:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.construction_features && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Construction Features:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.construction_features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.refrigeration_technique && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Refrigeration Technique:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.refrigeration_technique.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.control_technology && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Control Technology:</h4>
                      <ul className="list-disc pl-6">
                        {Object.entries(product.description.control_technology).map(([key, value], i) => (
                          <li key={i}>
                            <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}:</span> {Array.isArray(value) ? value.join(', ') : value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.user_convenience && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">User Convenience:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.user_convenience.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.safety_features && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Safety Features:</h4>
                      <ul className="list-disc pl-6">
                        {product.description.safety_features.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.description.models && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Available Models:</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              {Object.keys(product.description.models[0]).map((col, i) => (
                                <th key={i} className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">{col.replace(/_/g, ' ').toUpperCase()}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {product.description.models.map((model, i) => (
                              <tr key={i} className="even:bg-gray-50">
                                {Object.values(model).map((val, j) => (
                                  <td key={j} className="px-4 py-2 border-b text-sm text-gray-800">
                                    {typeof val === 'object' && val !== null
                                      ? <ul className="list-disc pl-4">
                                          {Object.entries(val).map(([k, v], idx) => (
                                            <li key={idx}><span className="font-semibold">{k.replace(/_/g, ' ')}:</span> {v}</li>
                                          ))}
                                        </ul>
                                      : String(val)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {product.description.controller && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Controller:</h4>
                      <p>{product.description.controller}</p>
                    </div>
                  )}

                  {/* Render root-level categories with nested products if present */}
                  {product.categories && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">Categories & Products</h3>
                      {product.categories.map((cat, i) => (
                        <div key={i} className="mb-6">
                          <h4 className="text-lg font-semibold mb-2 text-blue-900">{cat.category}</h4>
                          {cat.products && cat.products.length > 0 && (
                            <div className="overflow-x-auto">
                              <table className="min-w-full border border-gray-300 rounded-lg mb-2">
                                <thead className="bg-gray-100">
                                  <tr>
                                    {Object.keys(cat.products[0]).map((col, idx) => (
                                      <th key={idx} className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">{col.replace(/_/g, ' ').toUpperCase()}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {cat.products.map((prod, j) => (
                                    <tr key={j} className="even:bg-gray-50">
                                      {Object.values(prod).map((val, k) => (
                                        <td key={k} className="px-4 py-2 border-b text-sm text-gray-800">
                                          {Array.isArray(val)
                                            ? <ul className="list-disc pl-4">{val.map((item, l) => <li key={l}>{item}</li>)}</ul>
                                            : typeof val === 'object' && val !== null
                                              ? <ul className="list-disc pl-4">{Object.entries(val).map(([kk, vv], l) => <li key={l}><span className="font-semibold">{kk.replace(/_/g, ' ')}:</span> {vv}</li>)}</ul>
                                              : String(val)}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render root-level specifications if present */}
                  {product.specifications && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Specifications:</h4>
                      <ul className="list-disc pl-6">
                        {Object.entries(product.specifications).map(([key, value], i) => (
                          <li key={i}><span className="font-semibold capitalize">{key.replace(/_/g, ' ')}:</span> {value}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Render root-level models if present */}
                  {product.models && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Available Models:</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          <thead className="bg-gray-100">
                            <tr>
                              {Object.keys(product.models[0]).map((col, i) => (
                                <th key={i} className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">{col.replace(/_/g, ' ').toUpperCase()}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {product.models.map((model, i) => (
                              <tr key={i} className="even:bg-gray-50">
                                {Object.values(model).map((val, j) => (
                                  <td key={j} className="px-4 py-2 border-b text-sm text-gray-800">
                                    {typeof val === 'object' && val !== null
                                      ? <ul className="list-disc pl-4">
                                          {Object.entries(val).map(([k, v], idx) => (
                                            <li key={idx}><span className="font-semibold">{k.replace(/_/g, ' ')}:</span> {v}</li>
                                          ))}
                                        </ul>
                                      : String(val)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Render root-level optional_features if present */}
                  {product.optional_features && (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-1">Optional Features:</h4>
                      <ul className="list-disc pl-6">
                        {product.optional_features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Interested in This Product?
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-xl text-blue-100 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact our experts for detailed specifications, pricing, and customization options.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center"
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
              <FaWhatsapp className="mr-2" />
              WhatsApp: +91 9899239541
            </motion.button>
            
            <motion.button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="mr-2" />
              Email Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProductPage;
