import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
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
                        className="text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
                      >
                        Services
                      </Link>
                      <button 
                        onClick={toggleServicesDropdown}
                        className="text-gray-900 hover:text-teal-600 transition-colors p-1"
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
                    className="text-teal-600 text-sm font-bold leading-normal"
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
                          className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-teal-600 transition-colors"
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
                      className="block px-2 py-3 text-teal-600 text-sm font-bold leading-normal border-t border-gray-100"
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
                    Contact <span className="text-teal-600">Us</span>
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                    Have questions or ready to schedule a cleaning? We'd love to hear from you!
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <p className="text-gray-600 mb-8">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                    <form className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                          placeholder="John Doe" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                          placeholder="john@example.com" 
                          required 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                          placeholder="(318) 555-0123" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                          <option>General Inquiry</option>
                          <option>Residential Cleaning</option>
                          <option>Commercial Cleaning</option>
                          <option>Construction Cleaning</option>
                          <option>Move In & Move Out Cleaning</option>
                          <option>Free Estimate Request</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea 
                          rows="5" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" 
                          placeholder="Tell us about your cleaning needs..." 
                          required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors text-base"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                    <p className="text-gray-600 mb-8">
                      We're here to help! Reach out to us through any of the following channels.
                    </p>
                    
                    <div className="space-y-6">
                      {/* Monroe Office */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-teal-600">location_on</span>
                          Monroe, LA Office
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-teal-600 text-sm">location_on</span>
                            <span>2200 Jan St, Monroe, LA 71201</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-teal-600 text-sm">phone</span>
                            <span>(318) 555-0123</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-teal-600 text-sm">email</span>
                            <span>info@bayoupristine.com</span>
                          </li>
                        </ul>
                      </div>

                      {/* Business Hours */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <span className="material-symbols-outlined text-teal-600">schedule</span>
                          Business Hours
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span className="font-medium">8:00 AM - 6:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Saturday</span>
                            <span className="font-medium">9:00 AM - 4:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sunday</span>
                            <span className="font-medium">Closed</span>
                          </li>
                        </ul>
                      </div>

                      {/* Quick Contact Buttons */}
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={openEstimateModal}
                          className="flex items-center justify-center gap-2 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">calculate</span>
                          Free Estimate
                        </button>
                        <a 
                          href="tel:3185550123" 
                          className="flex items-center justify-center gap-2 py-3 bg-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">phone</span>
                          Call Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Map Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Find Us</h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                  Visit our Monroe office or give us a call. We're always happy to help!
                </p>
                <div className="bg-gray-300 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-500">map</span>
                    <p className="text-gray-600 mt-2">Map Location - Monroe, LA</p>
                    <p className="text-sm text-gray-500">2200 Jan St, Monroe, LA 71201</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-teal-600">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Cleaner Space?</h2>
                <p className="text-lg mb-8 text-white/90">
                  Schedule your cleaning service today and experience the Bayou Pristine difference.
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
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Construction Cleaning</option>
                  <option>Move In & Move Out Cleaning</option>
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

export default Contact;