import React from 'react'
import { productDropdownList } from '../data/productList';

const Footer = () => {
  return (
<>
  <div className="bg-[#1d1f1f] text-white">
  <footer className="w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
      <div className="md:w-1/4 flex flex-col gap-4 items-start">
        <a href="/" className="cursor-pointer">
          <img src="/logo.png" alt="APS Lab Instruments Logo" className="h-16 w-auto mb-2 animate-fadein" />
        </a>
        <a href="/" className="cursor-pointer">
          <h4 className="text-3xl font-extrabold leading-none tracking-wide text-white animate-fadein hover:text-yellow-400 transition-colors duration-200">
            APS LAB INSTRUMENTS PVT LTD DELHI
          </h4>
        </a>
        <p className="text-xs md:text-sm max-w-[280px] text-white">
          I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039
        </p>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-white decoration-1 pb-1">
          Quick Links :
        </h2>
        <nav className="flex flex-col gap-2 text-sm md:text-base text-gray-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Product's</a>
          <a href="/certificates" className="hover:text-white">Download Certificate</a>
          <a href="/contact" className="hover:text-white">Contact Us</a>
        </nav>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-white decoration-1 pb-1 text-white">
          Services :
        </h2>
        <nav className="grid grid-cols-2 gap-1 sm:flex sm:flex-col sm:gap-2 text-xs sm:text-sm md:text-base text-white max-h-56 overflow-auto custom-scrollbar px-1 sm:px-0">
          {productDropdownList.map((item) => (
            <a key={item.slug} href={item.slug} className="hover:text-yellow-400 transition-colors duration-200 py-1 sm:py-0">
              {item.name}
            </a>
          ))}
        </nav>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: #23286b;
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #facc15;
            border-radius: 8px;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #facc15 #23286b;
          }
        `}</style>
      </div>
      <div className="md:w-1/4 flex flex-col gap-2 text-white">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-white decoration-1 pb-1 mb-2">
          Reach Us :
        </h2>
        <div className="flex items-center gap-2 mb-1 animate-fadein">
          <i className="fas fa-map-marker-alt"></i>
          <span>I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-id-card"></i>
          <span>GST- 07AAMCA1994N1Z0</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-phone-alt"></i>
          <span>Call/Whatsapp: <a href="tel:+919899239541" className="hover:text-yellow-400 transition-colors duration-200">+91-9899239541</a> / <a href="tel:+919015219541" className="hover:text-yellow-400 transition-colors duration-200">9015219541</a> / <a href="tel:+919125530276" className="hover:text-yellow-400 transition-colors duration-200">9125530276</a></span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-envelope"></i>
          <span>Mail: <a href="mailto:apsinstruments@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">apsinstruments@gmail.com</a> , <a href="mailto:aps.inst2010@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">aps.inst2010@gmail.com</a></span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-envelope"></i>
          <span><a href="mailto:sales.apslab@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">sales.apslab@gmail.com</a></span>
        </div>
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
          .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
        `}</style>
      </div>
    </div>
    <div className="border-t border-gray-700 max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center text-white text-sm md:text-base">
      {/* Phone Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center gap-2 mb-1">
          <i className="fas fa-phone-alt"></i>
          <span className="font-serif">Phone Number :-</span>
        </div>
        <div className="flex flex-col font-semibold">
          <span><a href="tel:+919899239541" className="hover:text-yellow-400 transition-colors duration-200">+91-9899239541</a></span>
          <span><a href="tel:+919015219541" className="hover:text-yellow-400 transition-colors duration-200">+91-9015219541</a></span>
          <span><a href="tel:+919125530276" className="hover:text-yellow-400 transition-colors duration-200">+91-9125530276</a></span>
        </div>
      </div>
      {/* Address Section */}
      <div className="flex flex-col items-center text-center font-serif font-semibold">
        <div className="flex items-center gap-2 mb-1">
          <i className="fas fa-map-marker-alt"></i>
          <span>Address :-</span>
        </div>
        <span>I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039</span>
      </div>
      {/* Mail Section */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="flex items-center gap-2 mb-1">
          <i className="far fa-envelope"></i>
          <span className="font-serif">E - Mail :-</span>
        </div>
        <span className="font-semibold"><a href="mailto:apsinstruments@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">apsinstruments@gmail.com</a> , <a href="mailto:aps.inst2010@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">aps.inst2010@gmail.com</a></span>
        <span className="font-semibold"><a href="mailto:sales.apslab@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">sales.apslab@gmail.com</a></span>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 text-center text-white text-xs md:text-sm font-serif">
      © 2025 All Rights Reserved. APS LAB INSTRUMENTS PVT LTD DELHI. Developed & Managed By With
      <span className="text-yellow-400">❤</span>
      <a href="https://webintro.in" target="_blank" className="text-yellow-400 hover:underline" rel="noopener noreferrer">Webintro.in</a>,
      <a href="https://webintro.in/delhi/" target="_blank" className="text-yellow-400 hover:underline" rel="noopener noreferrer">Google Promotion Services</a>
    </div>
    
  </footer>
  </div>

</>
  )
}

export default Footer