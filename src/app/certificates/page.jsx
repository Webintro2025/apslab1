
import React from "react";
import { FaFilePdf } from "react-icons/fa";

const certificates = [
  { name: "CE Marking APS LAB INSTRUMENTS PRIVATE LIMITED", url: "/CE Marking  APS LAB INSTRUMENTS PRIVATE LIMITED.pdf" },
  { name: "CERTIFICATION OF APS 2024 (1)", url: "/CERTIFICATION OF APS 2024 (1).pdf" },
  { name: "GMP APS LAB INSTRUMENTS PRIVATE LIMITED", url: "/GMP  APS LAB INSTRUMENTS PRIVATE LIMITED.pdf" },
  { name: "ISO 13485 APS LAB INSTRUMENTS PRIVATE LIMITED", url: "/ISO 13485 APS LAB INSTRUMENTS PRIVATE LIMITED.pdf" },
  { name: "ISO 13485 IAF BODY APS LAB INSTRUMENTS PVT LTD", url: "/ISO 13485 IAF BODY APS LAB INSTRUMENTS PVT LTD.pdf" },
  { name: "ISO CE FDA UPDATED", url: "/ISO CE FDA UPDATED.pdf" },
  { name: "USFDA APS LAB INSTRUMENTS PRIVATE LIMITED", url: "/USFDA APS LAB INSTRUMENTS PRIVATE LIMITED.pdf" },
];

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-2 sm:py-10 sm:px-4 md:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-blue-900">Download Certificates</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 border border-gray-100 min-h-[220px]"
          >
            <FaFilePdf className="text-red-500 text-4xl sm:text-5xl mb-3 sm:mb-4" />
            <div className="font-semibold text-center text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg break-words w-full">
              {cert.name}
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center font-medium transition-colors duration-200 shadow text-sm sm:text-base"
            >
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
