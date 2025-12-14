import { locations } from '../../../marketplace';
import ContactForm from '@/components/ContactForm';
import React from 'react';

// Dynamic SEO metadata for each location page
export function generateMetadata({ params }) {
  const { slug } = params;
    const locationName =
      locations.find(
        (loc) =>
          loc.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
      ) || slug.replace(/-/g, ' ');
    const title = `Blood Bank Refrigerator Manufacturers in ${locationName} | APS Lab Instruments`;
    const description = `Need Blood Bank Refrigerator Manufacturers in ${locationName} Call APS Lab Instruments, Bio Safety Cabinet Manufacturers in ${locationName}, Autoclave Manufacturers in India.`;
    const keywords = [
      `Blood Bank Refrigerator Manufacturers in ${locationName}`,
      `Lab Equipment Supplier in ${locationName}`,
      `Bio-Safety Cabinet Manufacturers in ${locationName}`,
      `Autoclave Manufacturers in ${locationName}`,
      `Medical Equipment Exporter in ${locationName}`,
      `Hospital Equipment Supplier in ${locationName}`,
      `Blood Bank Refrigerator Dealer in ${locationName}`,
      `Best Lab Instruments in ${locationName}`
    ].join(', ');

    return {
      title,
      description,
      keywords,
      alternates: {
        canonical: `https://apsinstrument.in/location/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://apsinstrument.in/location/${slug}`,
        siteName: 'APS Lab',
        images: [
          {
            url: '/logo.png',
            width: 400,
            height: 200,
            alt: 'APS Lab Logo',
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        site: '@apslab',
        images: [
          {
            url: '/logo.png',
            alt: 'APS Lab Logo',
          },
        ],
      },
    };
  };


export default function LocationPage({ params }) {
  const { slug } = params;
  const locationName =
    locations.find(
      (loc) =>
        loc.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
    ) || slug.replace(/-/g, ' ');
  return (
    <main className="w-full ">
     



<div className="relative w-full h-[220px] xs:h-[3=200px] sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[700px]">
  <img
  alt={` Blood Bank Refrigerator Manufacturers in ${locationName}`}
    className=" lg:h-[600px]  h-[200px] object-cover brightness-50"

    src="/banneraps.jpg"
    width={1920}
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      Blood Bank Refrigerator Manufacturers in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://apsinstrument.in/">APS Lab Instruments Pvt. Ltd.</a>, If You Are Looking For <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best Blood Bank Refrigerator in {locationName}</strong>, Bio-Safety Cabinet Manufacturers in {locationName}, Autoclave (Steam Sterilizer) in {locationName}, India.
    </p>
    <button
      className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://apsinstrument.in/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
          Blood Bank Refrigerator Manufacturers in {locationName} – APS Lab Instruments Pvt. Ltd.
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          Healthcare institutions rely on advanced medical and laboratory equipment to deliver accurate results, save lives, and maintain safety. One of the most vital pieces of equipment in any medical setup is the <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>. At APS Lab Instruments Pvt. Ltd., we specialize in designing and manufacturing high-performance blood bank refrigerators Manufacturers, autoclaves Manufacturers, and bio-safety cabinets Manufacturers that meet international standards.
          Founded in 2019, APS Lab Instruments Pvt. Ltd. has grown into a trusted name in the medical equipment industry. With 5+ years of experience, a strong portfolio of 100+ equipment types, and 500+ happy clients across India, we are committed to providing healthcare institutions with reliable, innovative, and high quality solutions.

Our focus is not just on <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong> but on transforming healthcare efficiency through precision-driven products.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Blood Bank Refrigerator Manufacturers in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/blood.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
  Bio Safety Cabinet Manufacturers in {locationName}
      <br className="hidden xs:block" />
      <span className="text-base xs:text-lg md:text-2xl font-normal block">APS Lab Instruments Pvt. Ltd.</span>
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
  <strong>At APS Lab Instruments Pvt. Ltd.</strong>, we specialize in delivering high-performance medical and laboratory equipment that healthcare institutions can trust. Our flagship product, the <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>, is designed with advanced cooling technology to safely store whole blood and its components at a stable temperature, ensuring reliability and life-saving readiness during emergencies. Alongside this, our <strong>Autoclave (Steam Sterilizer) Manufacturers in {locationName}</strong> unmatched sterilization by using high-pressure steam to eliminate harmful microorganisms from surgical instruments, lab glassware, and medical tools guaranteeing infection-free practices in hospitals and labs. To further enhance safety, our <strong>Bio-Safety Cabinet in {locationName}</strong> offers a contamination-free working environment with HEPA filtration, UV sterilization, and laminar airflow, protecting both healthcare professionals and sensitive biological samples. Together, these products reflect our commitment to innovation, safety, and quality, making us one of the most trusted names among Blood Bank Refrigerator Manufacturers in India.
    </p>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>








<div className="bg-white text-[#1a1a1a] w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 border-t border-b border-gray-300 py-4 sm:py-6">
    <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-6 pb-6 md:pb-0">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
  Benefits of Choosing APS Lab in {locationName}?
      </h2>
      <p>
        🔹Long-lasting, reliable equipment<br/>

🔹Customizable solutions for your institution<br/>

🔹Affordable pricing with premium quality<br/>

🔹Quick delivery and efficient after-sales service<br/>
      </p>
    </div>
    <div className="w-full md:w-1/2 pl-0 md:pl-6 mt-8 md:mt-0">
      <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-center leading-[1.2] mb-4 sm:mb-8 font-semibold">
  Industries & Institutions We Serve in {locationName}
      </h2>
            <p>
        🔹Leading Hospitals<br/>

🔹Government and private Blood Banks<br/>

🔹Research Laboratories<br/>

🔹Pharmaceutical Companies <br/>
      </p>
      
    </div>
  </div>
</div>





<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  APS Lab Instruments Pvt. Ltd. – Our Product Range in {locationName}
  </h2>
<ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Blood Bank Refrigerator Manufacturers And Suppliers in {locationName}</span><br />
      Our Blood Bank Refrigerator is the heart of our product line and a crucial necessity for every hospital, <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>, and healthcare institution.<br/>

🔹 Purpose: Designed to store whole blood and blood components like plasma and platelets at a safe, controlled temperature (typically between 2°C to 6°C).<br/>
🔹 Features:

Accurate digital temperature control & display

In-built alarms for temperature fluctuations and power failure

Advanced cooling system for uniform temperature distribution

Strong insulation to prevent heat exchange

Spacious storage racks for blood bags<br/>

🔹 Benefits:

Maintains the integrity and safety of blood

Ensures availability during critical emergencies

Saves lives by providing reliable storage solutions

Compliant with international healthcare standards<br/>
    </li>
    <li>
      <span className="font-bold">2. Autoclave (Steam Sterilizer) Manufacturers And Suppliers in {locationName}</span><br />
      Sterilization is the backbone of infection control in hospitals and laboratories. Our <strong>Autoclave Steam Sterilizer Manufacturers in {locationName}</strong> is engineered to deliver maximum safety and efficiency.<br/>
      🔹 Purpose: Used to sterilize surgical instruments, lab equipment, glassware, and other medical tools using pressurized steam.<br/>
🔹 Features:

Stainless steel body for durability

Automatic pressure and temperature control

High safety standards with safety valve and pressure gauge

Available in vertical and horizontal models<br/>

🔹 Benefits:

Eliminates harmful bacteria, viruses, and microorganisms

Ensures infection-free equipment for patients and staff

Easy to operate and maintain

Energy-efficient and long-lasting design<br/>
    </li>
    <li>
      <span className="font-bold">3. Bio Safety Cabinet Manufacturers And Suppliers in {locationName}</span><br />
      Laboratories and research facilities need safe and contamination-free environments. Our <strong>Bio Safety Cabinet Manufacturers in {locationName}</strong> is built to protect both users and samples.<br/>

      🔹 Purpose: Provides a sterile and safe workspace for handling infectious or sensitive biological samples.<br/>
🔹 Features:

High-Efficiency Particulate Air (HEPA) filters for clean airflow

UV germicidal lamp for sterilization

Noise-free operation with ergonomic design

Strong build for maximum durability<br/>

🔹 Benefits:

Protects healthcare professionals from harmful pathogens

Prevents contamination of samples and work environment

Essential for virology, microbiology, pharmaceutical, and research labs

Enhances accuracy and reliability in experiments<br/>
    </li>
  </ul>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Best Blood Bank Refrigerator Manufacturers in {locationName}</strong>? APS Lab Instruments Pvt. Ltd. is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-9899239541</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://apsinstrument.in/">www.apsinstrument.in</a></li>
      <li>👉 <strong>Our Email Address</strong> – apsinstruments@gmail.com </li>
    </ul>
  </div>
</div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
  Why Choose APS Lab Instruments Pvt. Ltd.
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
  Choosing the right partner for medical and laboratory equipment is not just about buying a product it’s about investing in quality, reliability, and trust. At APS Lab Instruments Pvt. Ltd., we understand how critical equipment like <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>, <strong>Autoclaves and Bio-Safety Cabinet Manufacturers in {locationName}</strong> are for healthcare institutions. That’s why we focus on delivering world-class solutions that empower hospitals, clinics, laboratories, and blood banks to operate with confidence and precision.

Here’s why thousands of professionals across India trust us as one of the leading <strong>Blood Bank Refrigerator Manufacturers in India:</strong>
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Proven Experience in Healthcare Equipment</span><br />
      We have been serving the medical industry since 2019, and in this short span, we’ve become a recognized leader in the field. With 5+ years of expertise, we have developed deep insights into the requirements of healthcare facilities and designed solutions that truly make a difference.
    </li>
    <li>
      <span className="font-bold">2. Trusted by 500+ Happy Clients</span><br />
      Our reputation is built on trust. Over 500+ hospitals, clinics, laboratories, and research institutions across India rely on APS Lab Instruments Pvt. Ltd. Every client we serve becomes a part of our extended family, and we ensure they receive products that exceed their expectations.
    </li>
    <li>
      <span className="font-bold">3. Wide Range of High-Performance Equipment</span><br />
      From our flagship Blood Bank Refrigerators to Autoclaves (Steam Sterilizers) and Bio-Safety Cabinet Manufacturers in {locationName}, we offer a diverse product portfolio of 100+ equipment types. This wide range allows us to serve every corner of the healthcare industry with reliable solutions.
    </li>
    <li>
      <span className="font-bold">4. Superior Quality and Innovation</span><br />
      Our products are manufactured using cutting-edge technology, ensuring high precision, durability, and compliance with international standards. Each product undergoes rigorous testing to ensure consistent performance, energy efficiency, and reliability.
    </li>
    <li>
      <span className="font-bold">5. Commitment to Safety and Compliance</span><br />
When it comes to storing blood or handling biological materials, safety is non-negotiable. We Are Best <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>. Our products are designed to meet WHO and ISO guidelines, ensuring complete compliance with global healthcare standards.
    </li>
    <li>
      <span className="font-bold">6. Nationwide Supply & Service Support</span><br />
      We don’t just deliver products; we deliver peace of mind. With our pan-India supply chain and service support, we ensure that no matter where your hospital, lab, or clinic is located, you get timely delivery and reliable after-sales support.
    </li>

        <li>
      <span className="font-bold">7. EEAT – Experience, Expertise, Authoritativeness, Trustworthiness</span><br />
      Experience: More than 5 years in the industry , Expertise: Skilled engineers and advanced R&D team, Authoritativeness: Recognized and trusted across India, Trustworthiness: Transparent business practices with 500+ satisfied clients.
    </li>

  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
  <strong>APS Lab Instruments Pvt. Ltd.</strong> has established itself as a leading manufacturer and supplier of <strong>Blood Bank Refrigerator Manufacturers in {locationName}</strong>, Autoclaves and Bio-Safety Cabinet in  {locationName}. With innovation, commitment to quality, and trust from over 500+ clients, we continue to empower healthcare institutions. If you’re seeking reliability, precision, and excellence, APS Lab is the right choice.
  </p>
</div>

    </main>
  );
}