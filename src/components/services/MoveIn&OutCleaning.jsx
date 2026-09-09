import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MoveInOutCleaning() {
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
                    <span className="text-teal-600">Move In & Move Out</span> Cleaning Services
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
                    Moving out of your home or apartment? Let us take the cleaning off your hands with our thorough move-out cleaning services.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Stress-Free Moving Cleaning</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Moving out of your home or apartment? Let us take the cleaning off your hands with our thorough move-out cleaning services. Our team will ensure that your property is left in pristine condition for the next occupants, making your transition smoother.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      With our move-out cleaning service, your property will be spotless and ready for inspection, guaranteeing you will get your deposit back. Let us handle the cleaning, so you can focus on your move!
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      For landlords, having a property that needs cleaning before new tenants move in can be a headache. For tenants, the stress of moving out and not having enough time to clean while still wanting to get your security deposit back can be overwhelming. That's where our move-in/move-out cleaning service comes in—providing the perfect solution for all your cleaning needs! Whether you're preparing for new tenants or ensuring you get your deposit back, we've got you covered.
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
                          <span className="text-gray-700"><strong>Deep cleaning of all floors:</strong> Vacuuming, mopping, and spot cleaning all carpeted areas and hard floors</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Kitchen cleaning:</strong> Wiping down cabinets, countertops, appliances (including stove, oven, fridge, microwave), and sinks to remove grease and grime</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Bathroom cleaning:</strong> Scrubbing and sanitizing sinks, toilets, bathtubs, and showers; wiping down mirrors and cleaning all bathroom surfaces</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Dusting:</strong> Dusting all surfaces, baseboards, light fixtures, ceiling fans, and vents</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Windows and mirrors:</strong> Cleaning windows, window tracks, and mirrors to leave them streak-free</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Trash removal:</strong> Emptying all trash bins and disposing of any unwanted items</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Inside cabinets and closets:</strong> Wiping down shelves and removing any lingering dust or debris</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Cleaning behind and under furniture:</strong> Removing dust, dirt, and debris from areas that are usually out of sight</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-teal-600">check_circle</span>
                          <span className="text-gray-700"><strong>Final touch-up:</strong> Ensuring every detail is attended to, so your space is sparkling clean and ready for the next occupant</span>
                        </li>
                      </ul>
                    </div>

                    {/* Deposit Guarantee Badge */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex items-center gap-4">
                      <span className="material-symbols-outlined text-4xl text-teal-600">verified</span>
                      <div>
                        <h4 className="font-bold text-gray-900">Deposit Back Guarantee</h4>
                        <p className="text-sm text-gray-600">We'll make sure your property is inspection-ready</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Move In & Move Out Pricing</h2>
                  <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Our move-in/move-out cleaning rates are customized based on the size of your property.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Studio/1 Bedroom */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">apartment</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">Studio / 1 Bedroom</h3>
                      <p className="text-gray-500 text-sm">Up to 600 sq ft</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$150</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Full move-out clean
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Up to 3 hours
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 2-3 Bedroom */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">house</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">2-3 Bedroom</h3>
                      <p className="text-gray-500 text-sm">600 - 1,500 sq ft</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$250</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Comprehensive move-out clean
                        </li>
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Up to 5 hours
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 4+ Bedroom */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-600">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-5xl text-teal-600">villa</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">4+ Bedroom</h3>
                      <p className="text-gray-500 text-sm">1,500 - 3,000+ sq ft</p>
                      <div className="my-4">
                        <span className="text-3xl font-bold text-gray-900">$400</span>
                        <span className="text-gray-500">+</span>
                      </div>
                      <p className="text-gray-600 text-sm">Starting from</p>
                      <ul className="mt-4 text-left space-y-2 text-sm">
                        <li className="flex items-center gap-2 text-gray-600">
                          <span className="material-symbols-outlined text-teal-600 text-sm">check</span>
                          Premium move-out clean
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Move In & Move Out Pricing Breakdown</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-600">home</span>
                        Property Size
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Studio / 1 bedroom: Starting at $150</li>
                        <li>• 2-3 bedrooms: Starting at $250</li>
                        <li>• 4+ bedrooms: Starting at $400</li>
                        <li>• Large homes / estates: Custom quote</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-teal-600">checklist</span>
                        What's Included
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Deep floor cleaning (all types)</li>
                        <li>• Full kitchen & appliance cleaning</li>
                        <li>• Bathroom sanitization</li>
                        <li>• Windows, mirrors & tracks</li>
                        <li>• Inside cabinets & closets</li>
                        <li>• Behind & under furniture</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Notes about larger properties */}
                  <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                    <p className="text-sm text-gray-700 text-center">
                      <strong className="text-teal-600">Note:</strong> For larger properties, multi-story homes, or properties with extensive cleaning needs, pricing may range up to <strong>$800 - $1,500+</strong> depending on the size and scope of the job. 
                      Contact us for a custom quote tailored to your specific move-in/move-out cleaning needs.
                    </p>
                  </div>
                </div>

                {/* Custom Proposal CTA */}
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">
                    Every move is unique. Let us create a custom cleaning proposal just for you.
                  </p>
                  <button 
                    onClick={openEstimateModal}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-teal-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-teal-700 transition-all mx-auto"
                  >
                    <span className="truncate">Get Your Custom Proposal</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Choose Bayou Pristine?</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                  We take the stress out of moving so you can focus on what matters most — your new beginning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">verified</span>
                    <h4 className="font-bold text-gray-900 mt-3">Licensed & Insured</h4>
                    <p className="text-sm text-gray-600 mt-1">Fully bonded and insured for your peace of mind</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">payments</span>
                    <h4 className="font-bold text-gray-900 mt-3">Deposit Back Guarantee</h4>
                    <p className="text-sm text-gray-600 mt-1">We ensure your property is inspection-ready</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">star</span>
                    <h4 className="font-bold text-gray-900 mt-3">100% Satisfaction</h4>
                    <p className="text-sm text-gray-600 mt-1">We're not happy until you're completely satisfied</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-4xl text-teal-600">schedule</span>
                    <h4 className="font-bold text-gray-900 mt-3">Flexible Scheduling</h4>
                    <p className="text-sm text-gray-600 mt-1">We work around your moving timeline</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-teal-600">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Restore Your Home or Business?</h2>
                <p className="text-lg mb-8 text-white/90">
                  We are committed to providing excellent cleaning service. Schedule a virtual or in-person consultation today!
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Move Out Cleaning</option>
                  <option>Move In Cleaning</option>
                  <option>Both Move In & Move Out</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                  <option>Studio / 1 Bedroom</option>
                  <option>2-3 Bedroom</option>
                  <option>4+ Bedroom</option>
                  <option>Large Home / Estate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Tell us about your move-in/move-out cleaning needs..."></textarea>
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

export default MoveInOutCleaning;