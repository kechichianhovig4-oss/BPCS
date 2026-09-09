import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ResidentialCleaning() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const openEstimateModal = () => {
    setIsEstimateModalOpen(true);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const closeEstimateModal = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="bg-white font-display text-gray-900">
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-4 sm:px-10 lg:px-20 py-3">
              <div className="flex items-center gap-4 text-gray-900">
                <Link 
                  to="/" 
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="size-10 text-teal-600 flex items-center justify-center">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      <path d="M13 8h-2v5h5v-2h-3z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">Bayou Pristine</h2>
                    <p className="text-xs text-teal-600 font-medium -mt-0.5">Cleaning Services</p>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <div className="flex items-center gap-8">
                  <Link 
                    to="/" 
                    onClick={() => handleNavClick('/')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                  >
                    Home
                  </Link>
                  
                  {/* Services Dropdown - Clickable + Dropdown */}
                  <div className="relative">
                    <div className="flex items-center">
                      <Link 
                        to="/services" 
                        onClick={() => handleNavClick('/services')}
                        className="text-teal-600 text-sm font-bold leading-normal"
                      >
                        Services
                      </Link>
                      <button 
                        onClick={toggleServicesDropdown}
                        className="text-teal-600 hover:text-teal-700 transition-colors p-1"
                      >
                        <span className="material-symbols-outlined text-base">
                          {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                    </div>
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link 
                          to="/services/residential" 
                          onClick={() => handleNavClick('/services/residential')}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          Residential Cleaning
                        </Link>
                        <Link 
                          to="/services/commercial" 
                          onClick={() => handleNavClick('/services/commercial')}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          Commercial Cleaning
                        </Link>
                        <Link 
                          to="/services/construction" 
                          onClick={() => handleNavClick('/services/construction')}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          Construction Cleaning
                        </Link>
                        <Link 
                          to="/services/move-in-out" 
                          onClick={() => handleNavClick('/services/move-in-out')}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                        >
                          Move In & Move Out Cleaning
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  <Link 
                    to="/about" 
                    onClick={() => handleNavClick('/about')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/gallery" 
                    onClick={() => handleNavClick('/gallery')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => handleNavClick('/contact')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
                <button 
                  onClick={openEstimateModal}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-teal-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-all"
                >
                  <span className="truncate">Free Estimate</span>
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-900 p-2"
                >
                  <span className="material-symbols-outlined">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  <div className="space-y-3">
                    <Link 
                      to="/" 
                      onClick={() => handleNavClick('/')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                    >
                      Home
                    </Link>
                    
                    {/* Mobile Services Accordion */}
                    <div className="border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <Link 
                          to="/services" 
                          onClick={() => handleNavClick('/services')}
                          className="block px-2 py-3 text-teal-600 text-sm font-bold leading-normal"
                        >
                          Services
                        </Link>
                        <button 
                          onClick={toggleServicesDropdown}
                          className="px-2 py-3 text-gray-900 hover:text-teal-600 transition-colors"
                        >
                          <span className="material-symbols-outlined text-base">
                            {isServicesDropdownOpen ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      </div>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 space-y-2">
                          <Link 
                            to="/services/residential" 
                            onClick={() => handleNavClick('/services/residential')}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            Residential Cleaning
                          </Link>
                          <Link 
                            to="/services/commercial" 
                            onClick={() => handleNavClick('/services/commercial')}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            Commercial Cleaning
                          </Link>
                          <Link 
                            to="/services/construction" 
                            onClick={() => handleNavClick('/services/construction')}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            Construction Cleaning
                          </Link>
                          <Link 
                            to="/services/move-in-out" 
                            onClick={() => handleNavClick('/services/move-in-out')}
                            className="block px-2 py-2 text-sm text-gray-600 hover:text-teal-600 transition-colors"
                          >
                            Move In & Move Out Cleaning
                          </Link>
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      to="/about" 
                      onClick={() => handleNavClick('/about')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors border-t border-gray-100"
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/gallery" 
                      onClick={() => handleNavClick('/gallery')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors border-t border-gray-100"
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={() => handleNavClick('/contact')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors border-t border-gray-100"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <button 
                    onClick={openEstimateModal}
                    className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-teal-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-all mt-4"
                  >
                    <span className="truncate">Free Estimate</span>
                  </button>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section */}
            <section className="relative px-4 sm:px-10 lg:px-20 py-20 bg-gradient-to-r from-teal-50 to-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-[-0.033em]">
                    <span className="text-teal-600">Residential</span> Cleaning
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
                    Professional house cleaning services tailored to your home's unique needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Residential Cleaning</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Our comprehensive residential cleaning services are designed to leave your home spotless. We handle all the essential tasks, including dusting, vacuuming floors, wiping down kitchen and bathroom surfaces, emptying trash, scrubbing sinks and toilets, washing dishes, and even laundry (just confirm during booking). We also ensure that those hard-to-reach areas—like under beds and behind furniture—are thoroughly cleaned, so no corner is left untouched.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Imagine having a cleaner home, more often, without the stress of doing it yourself. If weekends are spent catching up on cleaning, we've got a better solution. Let Bayou Pristine Cleaning handle your housekeeping needs, giving you more time to enjoy what truly matters.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Don't stress about your pets or children—our environmentally friendly products are safe, non-toxic, and effective. We treat your home with the utmost care, as if it were our own. Our goal is simple: to leave your sanctuary spotless and welcoming.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button 
                        onClick={openEstimateModal}
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-teal-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-all"
                      >
                        <span className="truncate">Get a Free Estimate</span>
                      </button>
                      <Link 
                        to="/contact"
                        onClick={() => handleNavClick('/contact')}
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border-2 border-teal-600 text-teal-600 text-base font-bold leading-normal hover:bg-teal-50 transition-all"
                      >
                        <span className="truncate">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Dusting all surfaces and furniture</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Vacuuming and mopping floors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Kitchen surface cleaning and sanitizing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Bathroom cleaning - sinks, toilets, showers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Trash removal and recycling</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Hard-to-reach areas - under beds, behind furniture</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700">Eco-friendly, pet-safe cleaning products</span>
                        </li>
                      </ul>
                    </div>

                    {/* Licensed & Insured Badge */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex items-center gap-4">
                      <span className="material-symbols-outlined text-4xl text-teal-600">verified</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Licensed, Bonded & Insured</h4>
                        <p className="text-sm text-gray-600">Professionally trained experts you can trust</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing That Fits Your Needs</h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Our residential cleaning rates are customized based on your home's size and cleaning frequency.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Small Home */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">apartment</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Small Home</h3>
                      <p className="text-gray-500 text-sm">1-2 bedrooms • 1 bathroom</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$120</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from per visit</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Standard deep clean
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Up to 3 hours
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Medium Home */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">house</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Medium Home</h3>
                      <p className="text-gray-500 text-sm">3-4 bedrooms • 2 bathrooms</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$180</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from per visit</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Comprehensive deep clean
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Up to 5 hours
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Large Home */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">villa</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Large Home</h3>
                      <p className="text-gray-500 text-sm">5+ bedrooms • 3+ bathrooms</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$250</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from per visit</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Premium deep clean
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Up to 8 hours
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Pricing Based on Your Needs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-600">home</span>
                        Home Size
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Small home (1-2 beds): Starting at $120/visit</li>
                        <li>• Medium home (3-4 beds): Starting at $180/visit</li>
                        <li>• Large home (5+ beds): Starting at $250/visit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-600">schedule</span>
                        Frequency
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Weekly service: Best value with discounted rates</li>
                        <li>• Bi-weekly service: Perfect for regular maintenance</li>
                        <li>• Monthly service: Ideal for deeper cleans</li>
                        <li>• One-time service: Great for special occasions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <p className="text-sm text-gray-700 text-center">
                      <strong className="text-teal-600">Note:</strong> Pricing can go up to $2,000 depending on the size of the home, the number of rooms, and how many times we come in a week. 
                      Contact us for a custom quote tailored to your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Choose Bayou Pristine?</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                  With our team of licensed, bonded, and professionally trained experts, you can trust that your home will always be fresh, healthy, and well-maintained.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">verified</span>
                    <h4 className="font-bold text-gray-900 mt-3">Licensed & Insured</h4>
                    <p className="text-sm text-gray-600 mt-1">Fully bonded and insured for your peace of mind</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">eco</span>
                    <h4 className="font-bold text-gray-900 mt-3">Eco-Friendly</h4>
                    <p className="text-sm text-gray-600 mt-1">Safe, non-toxic products for your family and pets</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">star</span>
                    <h4 className="font-bold text-gray-900 mt-3">100% Satisfaction</h4>
                    <p className="text-sm text-gray-600 mt-1">We're not happy until you're completely satisfied</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">schedule</span>
                    <h4 className="font-bold text-gray-900 mt-3">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-600 mt-1">Weekly, bi-weekly, monthly, or one-time visits</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-teal-600">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Cleaner Home?</h2>
                <p className="text-lg mb-8 text-white/90">
                  Schedule your residential cleaning service today and experience the Bayou Pristine difference.
                </p>
                <button 
                  onClick={openEstimateModal}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white text-teal-600 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all mx-auto"
                >
                  <span className="truncate">Free Estimate</span>
                </button>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Bayou Pristine Cleaning</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    We have been providing residential and commercial cleaning services with excellence and dedication.
                  </p>
                </div>

                {/* Services Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link to="/services/residential" className="hover:text-teal-400 transition-colors">Residential Cleaning</Link></li>
                    <li><Link to="/services/commercial" className="hover:text-teal-400 transition-colors">Commercial Cleaning</Link></li>
                    <li><Link to="/services/construction" className="hover:text-teal-400 transition-colors">Construction Cleaning</Link></li>
                    <li><Link to="/services/move-in-out" className="hover:text-teal-400 transition-colors">Move In & Move Out Cleaning</Link></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">Monroe, LA Office</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-teal-400">location_on</span>
                      <span>2200 Jan St, Monroe, LA 71201</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-teal-400">phone</span>
                      <span>(318) 555-0123</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm text-teal-400">email</span>
                      <span>info@bayoupristine.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer Bottom */}
              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                <p className="text-gray-400">© {new Date().getFullYear()} Bayou Pristine Cleaning Services. All rights reserved.</p>
                <div className="flex gap-6">
                  <Link to="/PrivacyStatement" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Statement</Link>
                  <Link to="/RefundPolicy" className="text-gray-400 hover:text-teal-400 transition-colors">Refund Policy</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Free Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative">
            <button 
              onClick={closeEstimateModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Estimate</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="(318) 555-0123" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Home Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Small (1-2 bedrooms)</option>
                  <option>Medium (3-4 bedrooms)</option>
                  <option>Large (5+ bedrooms)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cleaning Frequency</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>One-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tell us about your cleaning needs..."></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
                Request Estimate
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default ResidentialCleaning;