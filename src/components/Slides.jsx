"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/autoclave.png', alt: 'Autoclave' },
  { src: '/bacteriological-incubator.png', alt: 'Bacteriological Incubator' },
  { src: '/biosafety.png', alt: 'Biosafety Equipment' },
  { src: '/blood.png', alt: 'Blood Testing Equipment' },
  { src: '/bod.png', alt: 'BOD Equipment' },
  { src: '/Carbon Dioxide Incubator.png', alt: 'Carbon Dioxide Incubator' },
  { src: '/cssd.png', alt: 'CSSD Equipment' },
  { src: '/DEEP FREEZER.png', alt: 'Deep Freezer' },
  { src: '/dynamic-pass-box.png', alt: 'Dynamic Pass Box' },
  { src: '/enviroment.png', alt: 'Environment Equipment' },
  { src: '/ETO.png', alt: 'ETO Equipment' },
  { src: '/examination-couch.png', alt: 'Examination Couch' },
  { src: '/freeze-dryer-lyophilizer.png', alt: 'Freeze Dryer Lyophilizer' },
  { src: '/fume-hood.png', alt: 'Fume Hood' },
  { src: '/furniture-mattress.png', alt: 'Furniture Mattress' },
  { src: '/gynae-obstetric-solutions.png', alt: 'Gynae Obstetric Solutions' },
  { src: '/horizontal-steam-sterilizer.png', alt: 'Horizontal Steam Sterilizer' },
  { src: '/hospital-furniture.png', alt: 'Hospital Furniture' },
  { src: '/hot-air-oven.png', alt: 'Hot Air Oven' },
  { src: '/laboratory-refrigerator.png', alt: 'Laboratory Refrigerator' },
  { src: '/laminar.png', alt: 'Laminar Flow' },
  { src: '/mortuary-chamber.png', alt: 'Mortuary Chamber' },
  { src: '/orbital-shaking-incubator.png', alt: 'Orbital Shaking Incubator' },
  { src: '/ot tables.png', alt: 'OT Tables' },
  { src: '/ot-care-solutions.png', alt: 'OT Care Solutions' },
  { src: '/otligths.png', alt: 'OT Lights' },
  { src: '/plant-growth-cabinet.png', alt: 'Plant Growth Cabinet' },
  { src: '/stretcher-trolley-deluxe.png', alt: 'Stretcher Trolley Deluxe' },
  { src: '/surgical-scrub-station.png', alt: 'Surgical Scrub Station' },
  { src: '/vertical-steam-sterilizer.png', alt: 'Vertical Steam Sterilizer' },
  { src: '/walk-in-cold-room.png', alt: 'Walk In Cold Room' },
  { src: '/warmer.png', alt: 'Warmer' },
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => {
        if (isMobile) {
          return (prevIndex + 1) % images.length;
        } else {
          return (prevIndex + 3) % images.length;
        }
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex + 3) % images.length;
      }
    });
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex - 1 + images.length) % images.length;
      } else {
        return (prevIndex - 3 + images.length) % images.length;
      }
    });
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get current images to display
  const getCurrentImages = () => {
    const result = [];
    const count = isMobile ? 1 : 3;
    for (let i = 0; i < count; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      result.push({ ...images[imageIndex], index: imageIndex });
    }
    return result;
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const containerVariants = {
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const currentImages = getCurrentImages();

  return (
    <div className="w-full">
      <motion.div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white overflow-hidden"
        variants={containerVariants}
        whileHover="hover"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            className={`absolute inset-0 w-full h-full flex gap-2 p-4 ${isMobile ? 'justify-center' : ''}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {currentImages.map((image, idx) => (
              <motion.div
                key={`${image.index}-${idx}`}
                className={`relative bg-gray-50 rounded-lg overflow-hidden shadow-md ${isMobile ? 'w-full max-w-xs mx-auto' : 'flex-1'}`}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <h4 className="text-sm font-medium">
                    {image.alt}
                  </h4>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6"/>
          </svg>
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({ length: Math.ceil(images.length / (isMobile ? 1 : 3)) }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index * (isMobile ? 1 : 3))}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / (isMobile ? 1 : 3)) === index
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

        {/* Remove the Image Title Overlay since titles are now on individual images */}
      </motion.div>

      {/* Thumbnail Navigation */}
  <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex 
                ? 'border-blue-600 scale-110' 
                : 'border-gray-300 hover:border-blue-400'
            }`}
            whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Slides;
