import React from "react";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#23286b] mb-5 sm:mb-8 text-left">
            Contact Information
          </h2>
          <div className="bg-gradient-to-br from-[#e0e7ff] via-white to-[#c7d2fe] border-l-4 sm:border-l-8 border-[#facc15] shadow-xl rounded-2xl p-4 sm:p-6 md:p-10 max-w-xl mx-auto flex flex-col gap-4 sm:gap-7 animate-fadein">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-[#23286b] text-yellow-300 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-bounce">
                <i className="fas fa-building"></i>
              </span>
              <div>
                <div className="text-[#23286b] font-semibold text-xs sm:text-sm">
                  APS LAB INSTRUMENTS PVT LTD DELHI
                </div>
                <div className="text-[#23286b] font-bold text-sm sm:text-base md:text-lg">
                  I-142, Sector-3, Bawana Industrial Area, DSIIDC, New Delhi-110039
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-yellow-300 text-[#23286b] rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-pulse">
                <i className="fas fa-id-card"></i>
              </span>
              <div>
                <div className="text-[#23286b] font-semibold text-xs sm:text-sm">
                  GST Number
                </div>
                <div className="text-[#23286b] font-bold text-sm sm:text-base md:text-lg">
                  07AAMCA1994N1Z0
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-[#23286b] text-yellow-300 rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-bounce">
                <i className="fas fa-phone-alt"></i>
              </span>
              <div>
                <div className="text-[#23286b] font-semibold text-xs sm:text-sm">
                  Call/Whatsapp
                </div>
                <div className="text-[#23286b] font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-yellow-400">
                  <a href="tel:+919899239541" className="hover:underline hover:text-yellow-400 transition-colors duration-200">+91-9899239541</a> / 
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="bg-yellow-300 text-[#23286b] rounded-full p-2 sm:p-3 text-base sm:text-xl transition-transform duration-300 group-hover:scale-110 animate-pulse">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <div className="text-[#23286b] font-semibold text-xs sm:text-sm">
                  Mail
                </div>
                <div className="text-[#23286b] font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 group-hover:text-yellow-400">
                  <a href="mailto:apsinstruments@gmail.com" className="hover:underline hover:text-yellow-400 transition-colors duration-200">apsinstruments@gmail.com</a> , <a href="mailto:aps.inst2010@gmail.com" className="hover:underline hover:text-yellow-400 transition-colors duration-200">aps.inst2010@gmail.com</a>

                </div>
              </div>
            </div>
            <style>{`
              @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
              .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
            `}</style>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <div className="bg-gray-50 p-4 sm:p-8 border mt-16 border-gray-100 max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <section className="bg-gradient-to-r from-[#0f3a66] via-[#0a2a4a] to-[#0f3a66] py-4 sm:py-6 px-2 sm:px-6 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white text-sm sm:text-lg font-light max-w-xl text-center sm:text-left">
            If You Need Any Industrial Solution{" "}
            <span className="text-yellow-400 font-semibold">
              ... We Are Available For You
            </span>
          </p>
          <button className="bg-yellow-400 text-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-sm whitespace-nowrap hover:bg-yellow-500 transition-colors text-xs sm:text-sm">
            CONTACT US
          </button>
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;