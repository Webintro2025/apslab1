import React from 'react'
import { FaSnowflake, FaVial, FaShieldVirus, FaPumpMedical, FaProcedures, FaBiohazard, FaLightbulb, FaWind, FaTint, FaFlask, FaTemperatureLow } from 'react-icons/fa';


const services = [
  {
    icon: <FaSnowflake />,
    title: 'Deep Freezers',
    desc: 'Designed for long-term storage of biological samples, vaccines, and chemicals at low temperatures with maximum efficiency.'
  },
  {
    icon: <FaVial />,
    title: 'Autoclave (Steam Sterilizer)',
    desc: 'Used for sterilizing surgical instruments, laboratory glassware, and medical waste through high-pressure steam.'
  },
  {
    icon: <FaShieldVirus />,
    title: 'Bio-Safety Cabinets',
    desc: 'Provide a sterile and safe working environment for handling sensitive biological materials and preventing contamination.'
  },
  {
    icon: <FaPumpMedical />,
    title: 'CSSD Equipment',
    desc: 'Complete Central Sterile Supply Department solutions for cleaning, disinfecting, and sterilizing medical equipment.'
  },
  {
    icon: <FaProcedures />,
    title: 'Hospital Furniture',
    desc: 'A wide range of durable and ergonomic furniture including patient beds, trolleys, stools, and examination tables.'
  },
  {
    icon: <FaBiohazard />,
    title: 'ETO Sterilizer',
    desc: 'Ethylene Oxide Gas Sterilizers designed for sterilizing heat-sensitive medical equipment and devices.'
  },
  {
    icon: <FaLightbulb />,
    title: 'OT Lights & OT Tables',
    desc: 'Advanced operation theatre lights and tables built for stability, precision, and improved surgical performance.'
  },
  {
    icon: <FaWind />,
    title: 'Laminar Air Flow Systems',
    desc: 'Ensure clean airflow for sterile workspaces in labs and pharma facilities, ideal for microbiological testing.'
  },
  {
    icon: <FaTint />,
    title: 'Blood Bank Refrigerator',
    desc: 'Maintains a controlled temperature environment for storing blood and blood products safely.'
  },
  {
    icon: <FaFlask />,
    title: 'BOD Incubator',
    desc: 'Used for incubation of biological samples under controlled temperature for microbiological testing and research.'
  },
  {
    icon: <FaTemperatureLow />,
    title: 'Environmental Chamber (Cooled Stability Chamber)',
    desc: 'Simulates different climatic conditions for stability testing in pharmaceuticals, biotech, and research labs.'
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-8 px-2 sm:px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-black mb-6 tracking-wide animate-fadein">What We Do</h2>
        <p className="text-center text-base sm:text-lg text-yellow-300 mb-8 animate-fadein">At APS Lab Instruments Pvt. Ltd., we specialize in manufacturing and supplying high-performance equipment designed for hospitals, laboratories, research institutes, and medical facilities. Our product categories include:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="flex items-start gap-3 sm:gap-4 bg-white/90 rounded-xl shadow-lg p-4 sm:p-6 border border-[#23286b] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fadein"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex-shrink-0">
                <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-blue-600 to-blue-300 flex items-center justify-center text-2xl sm:text-3xl text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#23286b] mb-1 group-hover:text-yellow-500 transition-colors duration-200">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-[#1d1f1f] font-medium">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default WhatWeDo