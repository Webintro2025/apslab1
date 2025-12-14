import React from "react";
import { FaWhatsapp, FaDownload, FaYoutube } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <>
      {/* YouTube Icon - Right Bottom (before WhatsApp) */}
      <a
        href="https://www.youtube.com/@apslabinstrumentspvtltd"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-4 bottom-24 sm:right-6 sm:bottom-24 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300"
        aria-label="YouTube"
      >
        <FaYoutube className="text-3xl sm:text-4xl" />
      </a>
      {/* WhatsApp Icon - Right Bottom */}
      <a
        href="https://wa.me/919899239541"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-3xl sm:text-4xl" />
      </a>
      {/* Download PDF Icon - Left Bottom */}
      <a
        href="/APS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 left-4 bottom-4 sm:left-6 sm:bottom-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300"
        aria-label="Download Brochure"
      >
        <FaDownload className="text-3xl sm:text-4xl" />
      </a>
    </>
  );
};

export default FloatingIcons;
