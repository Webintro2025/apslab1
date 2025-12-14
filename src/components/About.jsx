import React from 'react'

const About = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 animate-fadein">
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/blood.png" alt="About APS Lab Instruments" className="rounded-2xl shadow-lg w-full max-w-md object-cover border-4 border-[#23286b] hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="md:w-1/2 w-full">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wide sm:text-4xl md:text-3xl text-2xl">About Us</h2>
              <h1 className="text-lg text-yellow-300 mb-4 font-semibold sm:text-lg md:text-base text-sm">APS Lab Instruments Pvt. Ltd.</h1>
              <p className="text-black text-base md:text-lg mb-4 sm:text-base md:text-lg text-sm">APS Lab Instruments Pvt. Ltd. is a leading manufacturer and supplier of high-performance laboratory and medical equipment. With a commitment to quality, innovation, and customer satisfaction, we serve hospitals, research institutes, and laboratories across India and beyond.</p>
          <ul className="list-disc pl-5 text-black text-base space-y-2 mb-4">
            <li>Over a decade of experience in the industry</li>
            <li>ISO-certified manufacturing processes</li>
            <li>Wide range of products for medical, research, and industrial use</li>
            <li>Dedicated support and after-sales service</li>
          </ul>
          <p className="text-black text-base">Our mission is to empower scientific and medical communities with reliable, innovative, and affordable solutions.</p>
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default About