"use client"
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const productDropdownList = [
    { name: 'STEAM STERILIZER VERTICAL HIGH PRESSURE', slug: '/steam-sterilizer-vertical-high-pressure' },
    { name: 'STEAM STERILIZER HORIZONTAL RECTANGULAR', slug: '/rectangular-horizontal-autoclave' },
    { name: 'DENTAL AUTOCLAVE', slug: '/dental-autoclave' },
    { name: 'ETO STERILIZER', slug: '/eto-sterilizer' },
    { name: 'HORIZONTAL STEAM STERILIZER', slug: '/horizontal-steam-sterilizer' },
    { name: 'VERTICAL STEAM STERILIZER', slug: '/vertical-steam-sterilizer' },
    { name: 'DEEP FREEZER', slug: '/deep-freezer' },
    { name: 'BIO-SAFETY CABINET', slug: '/bio-safety-cabinet' },
    { name: 'HOSPITAL FURNITURE', slug: '/hospital-furniture' },
    { name: 'OT LIGHT', slug: '/ot-light' },
    { name: 'OT TABLE', slug: '/ot-table' },
    { name: 'LAMINAR AIR FLOW', slug: '/laminar-air-flow' },
    { name: 'BLOOD BANK REFRIGERATOR', slug: '/blood-bank-refrigerator' },
    { name: 'BOD INCUBATOR', slug: '/bod-incubator' },
    { name: 'CO2 INCUBATOR', slug: '/co2-incubator' },
    { name: 'DYNAMIC PASS BOX', slug: '/dynamic-pass-box' },
    { name: 'PLANT GROWTH CABINET', slug: '/plant-growth-cabinet' },
    { name: 'WALK IN COLD ROOM', slug: '/walk-in-cold-room' },
    { name: 'EXAMINATION COUCH', slug: '/examination-couch' },
    { name: 'STRETCHER TROLLEY DELUXE', slug: '/stretcher-trolley-deluxe' },
    { name: 'BED SIDE LOCKER', slug: '/bed-side-locker' },
    { name: 'OT CARE SOLUTIONS', slug: '/ot-care-solutions' },
    { name: 'GYNAE & OBSTETRIC SOLUTIONS', slug: '/gynae-obstetric-solutions' },
    { name: 'FURNITURE & MATTRESS', slug: '/furniture-mattress' },
    { name: 'WARMER', slug: '/warmer' },
    { name: 'SURGICAL SCRUB STATION', slug: '/surgical-scrub-station' },
    { name: 'MORTUARY CHAMBER', slug: '/mortuary-chamber' },
    { name: 'FREEZE DRYER / LYOPHILIZER', slug: '/freeze-dryer-lyophilizer' },
    { name: 'LABORATORY REFRIGERATOR', slug: '/laboratory-refrigerator' },
    { name: 'ORBITAL SHAKING INCUBATOR', slug: '/orbital-shaking-incubator' },
    { name: 'BACTERIOLOGICAL INCUBATOR', slug: '/bacteriological-incubator' },
    { name: 'HOT AIR OVEN', slug: '/hot-air-oven' },
    { name: 'FUME HOOD', slug: '/fume-hood' },
    { name: 'Environmental Chamber', slug: '/environmental-chamber' },
   
    { name: 'WARD-CARE GENERAL PEDIATRIC BEDS', slug: '/general-pediatric-beds' },
    { name: 'WARD-CARE FULL FOWLER BEDS', slug: '/full-fowler-beds' },
    { name: 'WARD-CARE SEMI FOWLER BEDS', slug: '/semi-fowler-beds' },
    { name: 'WARD-CARE ICU BEDS', slug: '/icu-beds' },
  ];
  const filteredProducts = productDropdownList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const dropdownTimeout = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => clearTimeout(dropdownTimeout.current);
  }, []);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top bar */}
      {isSticky && <div style={{ height: 60 }}></div>}
    <div className='h-auto'>
  <div className="bg-[#2c328f] text-white text-[11px] lg:text-base flex flex-row flex-wrap items-center px-2 lg:px-10 py-2 gap-x-3 gap-y-1">
    <div className="flex items-center space-x-1 sm:space-x-2 hidden lg:flex">
      <i className="fas fa-home"></i>
      <span className="transition-all duration-300 text-yellow-200 drop-shadow-md hover:text-yellow-400 cursor-pointer">
        GST- 07AAMCA1994N1Z0
      </span>
    </div>
    {/* Show only one number and one email on mobile, both on large screens */}
    <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
      <i className="fas fa-phone-alt"></i>
      <span className="transition-all duration-300 text-yellow-200 drop-shadow-md hover:text-yellow-400 cursor-pointer block lg:hidden">
        Call: +91-9899239541
      </span>
      <span className="transition-all duration-300 text-yellow-200 drop-shadow-md hover:text-yellow-400 cursor-pointer hidden lg:block">
        Call: +91-9899239541 / 9015219541
      </span>
    </div>
    <div className="flex items-center space-x-2 ml-auto">
      <i className="fas fa-envelope"></i>
      <span className="transition-all duration-300 text-yellow-200 drop-shadow-md hover:text-yellow-400 cursor-pointer block lg:hidden">
        apsinstruments@gmail.com
      </span>
      <span className="transition-all duration-300 text-yellow-200 drop-shadow-md hover:text-yellow-400 cursor-pointer hidden lg:block">
        apsinstruments@gmail.com, aps.inst2010@gmail.com
      </span>
    </div>
  </div>
        {/* Navigation bar */}
        <nav
          className={`flex flex-col lg:flex-row items-center lg:items-center justify-between px-4 lg:px-10 py-4 z-50 w-full transition-all duration-500 ${
            isSticky ? 'fixed bg-[#23286b] text-white' : 'relative'
          }`}
          style={{
            top: isSticky ? 0 : 'unset',
            left: 0,
            background: isSticky ? 'rgba(35, 40, 107, 0.98)' : 'transparent',
            boxShadow: isSticky
              ? '0 6px 24px 0 rgba(31,38,135,0.37), 0 4px 16px 0 rgba(0,0,0,0.18)'
              : 'none',
            transform: isSticky ? 'translateY(0)' : 'translateY(0)',
            animation: isSticky ? 'slideDownNav 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
        >
          <style>{`
            @keyframes slideDownNav {
              0% { transform: translateY(-100%); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .hamburger div {
              transition: all 0.3s ease;
            }
            .hamburger.open .line1 {
              transform: rotate(-45deg) translate(-5px, 6px);
            }
            .hamburger.open .line2 {
              opacity: 0;
            }
            .hamburger.open .line3 {
              transform: rotate(45deg) translate(-5px, -6px);
            }
          `}</style>
          <div className="flex w-full lg:w-auto justify-between">

            <div className="w-auto">
              <a href="/" className="cursor-pointer">
                <img
                  alt="Neelkanth Ortho Dent logo showing a blue stylized tree with text Neelkanth below it and 'Since 1993' above"
                  className="h-10 sm:h-12 pb-1"
                  src="/logo.png"
                />
              </a>
            </div>
            {/* Hamburger right on mobile, hidden on desktop */}
            <button
              className={`lg:hidden hamburger flex flex-col justify-center items-center space-y-1.5 w-10 h-10 ${!isSticky ? 'bg-white' : ''}`}
              onClick={toggleMobileMenu}
              style={{ order: 2 }}
            >
              <div className={`line1 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line2 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`line3 w-6 h-0.5 ${!isSticky ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>
          <div className="flex ml-14 justify-start lg:justify-end">
            <ul
              className={`flex flex-col lg:flex-row lg:space-x-12 xl:space-x-16 text-base font-semibold w-full lg:w-auto lg:justify-center lg:items-center ${
                isMobileMenuOpen ? 'flex text-white' : 'hidden lg:flex' 
              } mt-0 lg:mt-0 bg-[#23286b] lg:bg-transparent absolute lg:static top-full left-0 lg:transform-none ${
                isSticky ? 'bg-[#23286b]' : ''
              } lg:flex-row`}>
              {/* Mobile search bar as first menu item in mobile menu */}
              {isMobileMenuOpen && (
                <li className="block lg:hidden w-full px-4 py-2">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-black"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && filteredProducts.length > 0 && (
                      <ul className="bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto absolute left-0 right-0 z-50">
                        {filteredProducts.map((item, idx) => (
                          <li key={item.slug} className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-black" onClick={() => { setIsMobileMenuOpen(false); setDropdownOpen(false); window.location.href = item.slug; }}>
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )}
              <li className="w-full lg:w-auto flex  justify-start lg:flex-row">
                <a
                  className={`block px-4 py-2 sm:p-0 relative border-b-2 border-[#2c328f] sm:border-b-2 sm:pb-1 transition-all duration-500 ${
                    isSticky
                      ? 'text-white hover:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right bg-clip-text text-transparent hover:text-transparent animate-gradient'
                  }`}
                  href="/"
                  style={isSticky ? {} : {
                    backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'right';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'left';
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li className="w-full lg:w-auto flex lg:flex-row">
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 ${
                    isSticky
                      ? 'text-white hover:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right bg-clip-text text-transparent hover:text-transparent animate-gradient'
                  }`}
                  href="/about"
                  style={isSticky ? {} : {
                    backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'right';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'left';
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li
                className="relative w-full lg:w-auto"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 cursor-pointer ${
                    isSticky
                      ? 'text-white hover:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right bg-clip-text text-transparent hover:text-transparent animate-gradient'
                  }`}
                  href="#"
                  style={isSticky ? {} : {
                    backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'right';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'left';
                  }}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Product
                </a>
                <div
                  className={`absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-full left-0 w-full sm:min-w-[280px] bg-white text-[#23286b] sm:rounded-xl sm:shadow-2xl transition-all duration-300 ease-out z-50 sm:mt-2 sm:drop-shadow-lg ${
                    dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    boxShadow: isSticky
                      ? '0 12px 32px 0 rgba(31,38,135,0.18), 0 2px 8px 0 rgba(0,0,0,0.10)'
                      : 'none',
                  }}
                >
                  <style>{`
                    .animate-dropdown {
                      animation: dropdownSlide 0.5s cubic-bezier(0.4,0,0.2,1);
                    }
                    @keyframes dropdownSlide {
                      0% { opacity: 0; transform: translateY(-20px) scaleY(0.95); }
                      100% { opacity: 1; transform: translateY(0) scaleY(1); }
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 6px;
                      background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: #f1f5f9;
                      border-radius: 10px;
                      margin: 8px 0;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                      border-radius: 10px;
                      border: 1px solid #e2e8f0;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(135deg, #2563eb, #7c3aed);
                    }
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: #3b82f6 #f1f5f9;
                    }
                    .dropdown-item {
                      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                      transform: translateX(0);
                    }
                    .dropdown-item:hover {
                      transform: translateX(8px);
                      background: linear-gradient(135deg, #23286b, #3b82f6);
                      box-shadow: 0 4px 12px rgba(35, 40, 107, 0.2);
                    }
                    .dropdown-item:nth-child(1) { animation-delay: 0.05s; }
                    .dropdown-item:nth-child(2) { animation-delay: 0.1s; }
                    .dropdown-item:nth-child(3) { animation-delay: 0.15s; }
                    .dropdown-item:nth-child(4) { animation-delay: 0.2s; }
                    .dropdown-item:nth-child(5) { animation-delay: 0.25s; }
                    .dropdown-item:nth-child(6) { animation-delay: 0.3s; }
                    .dropdown-item:nth-child(7) { animation-delay: 0.35s; }
                    .dropdown-item:nth-child(8) { animation-delay: 0.4s; }
                    .dropdown-item:nth-child(9) { animation-delay: 0.45s; }
                    .dropdown-item:nth-child(10) { animation-delay: 0.5s; }
                    .dropdown-item:nth-child(11) { animation-delay: 0.55s; }
                    .dropdown-item:nth-child(12) { animation-delay: 0.6s; }
                    @keyframes slideInLeft {
                      0% { opacity: 0; transform: translateX(-20px); }
                      100% { opacity: 1; transform: translateX(0); }
                    }
                    .animate-slide-in {
                      animation: slideInLeft 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
                    }
                  `}</style>

                  <ul className="flex flex-col py-2 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {/* --- GENERAL PEDIATRIC BEDS at top --- */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/general-pediatric-beds" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-child text-pink-500"></i>
                        <span>WARD-CARE GENERAL BEDS</span>
                      </a>
                    </li>
                    {/* --- FULL FOWLER BEDS at top --- */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/full-fowler-beds" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-bed text-blue-700"></i>
                        <span>WARD-CARE FULL FOWLER BEDS</span>
                      </a>
                    </li>
                    {/* --- SEMI FOWLER BEDS at top --- */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/semi-fowler-beds" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-bed text-green-500"></i>
                        <span>WARD-CARE SEMI FOWLER BEDS</span>
                      </a>
                    </li>
                    {/* --- ICU BEDS at top --- */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/icu-beds" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-procedures text-blue-500"></i>
                        <span>ICU BEDS</span>
                      </a>
                    </li>
                    {/* --- All Steam Sterilizer/Autoclave at top --- */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/steam-sterilizer-vertical-high-pressure" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-temperature-high text-red-400"></i>
                        <span>STEAM STERILIZER VERTICAL HIGH PRESSURE</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/rectangular-horizontal-autoclave" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-cube text-indigo-400"></i>
                        <span>STEAM STERILIZER HORIZONTAL RECTANGULAR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/dental-autoclave" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-tooth text-blue-400"></i>
                        <span>DENTAL AUTOCLAVE</span>
                      </a>
                    </li>
                      <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/eto-sterilizer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-atom text-orange-500"></i>
                        <span>ETO STERILIZER</span>
                      </a>
                    </li>
                       <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/horizontal-steam-sterilizer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-burn text-red-600"></i>
                        <span>HORIZONTAL STEAM STERILIZER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/vertical-steam-sterilizer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-burn text-orange-500"></i>
                        <span>VERTICAL STEAM STERILIZER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/deep-freezer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-snowflake text-blue-500"></i>
                        <span>DEEP FREEZER</span>
                      </a>
                    </li>
                    {/* AUTOCLAVE (STEAM STERILIZER) removed as requested */}
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/bio-safety-cabinet" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-shield-virus text-green-500"></i>
                        <span>BIO-SAFETY CABINET</span>
                      </a>
                    </li>
                    {/* CSSD EQUIPMENTS removed as requested */}
                  
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/ot-light" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-lightbulb text-yellow-400"></i>
                        <span>OT LIGHT</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/ot-table" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-procedures text-indigo-500"></i>
                        <span>OT TABLE</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/laminar-air-flow" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-wind text-teal-500"></i>
                        <span>LAMINAR AIR FLOW</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/blood-bank-refrigerator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-tint text-red-600"></i>
                        <span>BLOOD BANK REFRIGERATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/bod-incubator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-thermometer-half text-pink-500"></i>
                        <span>BOD INCUBATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/co2-incubator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-vial text-green-600"></i>
                        <span>CO2 INCUBATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/dynamic-pass-box" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-exchange-alt text-indigo-600"></i>
                        <span>DYNAMIC PASS BOX</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/plant-growth-cabinet" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-seedling text-green-600"></i>
                        <span>PLANT GROWTH CABINET</span>
                      </a>
                    </li>
                 
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/walk-in-cold-room" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-snowflake text-blue-500"></i>
                        <span>WALK IN COLD ROOM</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/examination-couch" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-bed text-purple-600"></i>
                        <span>EXAMINATION COUCH</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/stretcher-trolley-deluxe" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-ambulance text-amber-700"></i>
                        <span>STRETCHER TROLLEY DELUXE</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/bed-side-locker" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-lock text-blue-700"></i>
                        <span>BED SIDE LOCKER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/ot-care-solutions" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-heartbeat text-pink-600"></i>
                        <span>OT CARE SOLUTIONS</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/gynae-obstetric-solutions" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-baby text-rose-500"></i>
                        <span>GYNAE & OBSTETRIC SOLUTIONS</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/furniture-mattress" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-couch text-yellow-700"></i>
                        <span>FURNITURE & MATTRESS</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/warmer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-thermometer-half text-orange-600"></i>
                        <span>WARMER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/surgical-scrub-station" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-hand-sparkles text-cyan-700"></i>
                        <span>SURGICAL SCRUB STATION</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/mortuary-chamber" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-procedures text-gray-800"></i>
                        <span>MORTUARY CHAMBER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/freeze-dryer-lyophilizer" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-icicles text-cyan-600"></i>
                        <span>FREEZE DRYER / LYOPHILIZER</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/laboratory-refrigerator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-snowflake text-blue-400"></i>
                        <span>LABORATORY REFRIGERATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/orbital-shaking-incubator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-sync-alt text-blue-700"></i>
                        <span>ORBITAL SHAKING INCUBATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/bacteriological-incubator" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-biohazard text-green-700"></i>
                        <span>BACTERIOLOGICAL INCUBATOR</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/hot-air-oven" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-fire text-orange-600"></i>
                        <span>HOT AIR OVEN</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/fume-hood" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-smog text-gray-700"></i>
                        <span>FUME HOOD</span>
                      </a>
                    </li>
                    <li className={`dropdown-item px-6 py-3 hover:bg-[#23286b] hover:text-white cursor-pointer rounded-md mx-2 ${dropdownOpen ? 'animate-slide-in' : ''}`}>
                      <a href="/environmental-chamber" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <i className="fas fa-temperature-low text-cyan-500"></i>
                        <span>Environmental Chamber</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-full lg:w-auto">
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 ${
                    isSticky
                      ? 'text-white hover:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right bg-clip-text text-transparent hover:text-transparent animate-gradient'
                  }`}
                  href="/contact"
                  style={isSticky ? {} : {
                    backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'right';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'left';
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ContactUs
                </a>
              </li>
              {/* Download Certificates menu item */}
              <li className="w-full lg:w-auto">
                <a
                  className={`block px-4 py-2 sm:p-0 relative transition-all duration-500 ${
                    isSticky
                      ? 'text-white hover:text-gray-200'
                      : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right bg-clip-text text-transparent hover:text-transparent animate-gradient'
                  }`}
                  href="/certificates"
                  style={isSticky ? {} : {
                    backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 50%, #ec4899 100%)',
                    backgroundSize: '200% 200%',
                    backgroundPosition: 'left',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'right';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSticky) e.currentTarget.style.backgroundPosition = 'left';
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download Certificates
                </a>
              </li>
              <li className="w-full lg:w-auto lg:flex hidden"></li>
              <li className="w-full lg:w-auto flex lg:hidden px-4 py-2"></li>
            </ul>
          </div>


            {/* Desktop search bar only (hidden on mobile and tablet) */}
            <div className="flex-1 flex justify-end items-center ml-2 hidden lg:flex">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 text-sm ${isSticky ? 'border-white placeholder-white text-white bg-[#23286b]' : 'border-black placeholder-gray-400 text-black bg-white'}`}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={isSticky ? { '::placeholder': { color: 'white' } } : {}}
                />
                {searchQuery && filteredProducts.length > 0 && (
                  <ul className="bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto absolute left-0 right-0 z-50">
                    {filteredProducts.map((item, idx) => (
                      <li key={item.slug} className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-black" onClick={() => { setIsMobileMenuOpen(false); setDropdownOpen(false); window.location.href = item.slug; }}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
              {/* Remove duplicate search bar on desktop, keep only in menu for mobile and above navbar for desktop */}
          {/* Desktop WhatsApp button - right corner with gap */}
          <div className="hidden md:flex items-center justify-end w-auto md:ml-10 lg:ml-16 xl:ml-24">
            <div className="hidden md:block" style={{ minWidth: '32px' }}></div>
            <a
              href="https://wa.me/919899239541"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-md font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-[length:200%_200%] bg-left hover:bg-right animate-gradient"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 50%, #1e40af 100%)',
                backgroundSize: '200% 200%',
                backgroundPosition: 'left',
                boxShadow: '0 2px 8px 0 rgba(37, 99, 235, 0.2)',
                transition: 'background-position 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = 'right'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = 'left'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-whatsapp mr-2 text-lg"></i>
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;