"use client";
import React, { useState, useEffect, useRef } from 'react';

const images = ['/banner1.jpg', '/banner2.jpg'];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
  <div className="w-full relative overflow-hidden h-[180px] sm:h-[260px] md:h-[400px] lg:h-[550px] bg-gray-100 border border-blue-300">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt="banner"
          className={`w-full h-full absolute top-0 left-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ objectFit: 'cover' }}
        />
      ))}
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-md z-20"
        aria-label="Previous slide"
      >
        <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-md z-20"
        aria-label="Next slide"
      >
        <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
      </button>
    </div>
  );
};

export default HomeBanner;