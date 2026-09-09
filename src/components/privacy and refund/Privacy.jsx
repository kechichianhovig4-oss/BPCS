import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Privacy() {
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
                    Privacy <span className="text-teal-600">Statement</span>
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
                    How we collect, use, and protect your personal information.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            </section>

            {/* Privacy Content */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-teal max-w-none">
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
                    <p className="text-gray-700 text-lg font-medium m-0">
                      At Bayou Pristine Cleaning, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Statement explains how we collect, use, and safeguard your data when you interact with our services.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                  <p className="text-gray-700">
                    We collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Request a free estimate or quote</li>
                    <li>Schedule a cleaning service</li>
                    <li>Contact us via phone, email, or our website contact form</li>
                    <li>Subscribe to our newsletter or promotional communications</li>
                    <li>Provide feedback or complete a survey</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    The information we may collect includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Personal Identification Information:</strong> Full name, email address, phone number, home address, and property details</li>
                    <li><strong>Service Preferences:</strong> Type of cleaning services requested, frequency, and special requirements</li>
                    <li><strong>Payment Information:</strong> Billing details and payment method (processed securely through our payment partners)</li>
                    <li><strong>Communication Records:</strong> Correspondence with our team via email, phone, or chat</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide, maintain, and improve our cleaning services</li>
                    <li>Process your service requests and payments</li>
                    <li>Communicate with you about your appointments, estimates, and service updates</li>
                    <li>Send you promotional offers and information about our services (you may opt out at any time)</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Improve our website, services, and customer experience</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Protect Your Information</h2>
                  <p className="text-gray-700">
                    We take the security of your personal information seriously. We implement a variety of security measures to maintain the safety of your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Encryption:</strong> We use industry-standard encryption protocols to protect data transmitted online</li>
                    <li><strong>Access Controls:</strong> Only authorized personnel have access to your personal information</li>
                    <li><strong>Secure Storage:</strong> Your information is stored on secure servers with appropriate safeguards</li>
                    <li><strong>Payment Security:</strong> Payment transactions are processed through secure, PCI-compliant payment gateways</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business, such as payment processors, scheduling software, and communication platforms</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We ensure that any third-party service providers we work with are bound by confidentiality agreements and adhere to strict data protection standards.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights and Choices</h2>
                  <p className="text-gray-700">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request that we delete your personal information (subject to legal obligations)</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-700">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how visitors interact with our site. You can control cookie preferences through your browser settings. For more information, please refer to our Cookie Policy.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
                  <p className="text-gray-700">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Statement</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Statement from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated statement on our website with the revised date. We encourage you to review this Privacy Statement periodically.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions, concerns, or requests regarding this Privacy Statement or our privacy practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4 border border-gray-200">
                    <p className="text-gray-700 m-0">
                      <strong>Bayou Pristine Cleaning</strong><br />
                      2200 Jan St, Monroe, LA 71201<br />
                      <strong>Phone:</strong> (318) 555-0123<br />
                      <strong>Email:</strong> privacy@bayoupristine.com<br />
                      <strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM
                    </p>
                  </div>

                  <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100 text-center">
                    <p className="text-sm text-gray-600 m-0">
                      By using our services and providing your information, you agree to the terms of this Privacy Statement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-teal-600">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Your Privacy?</h2>
                <p className="text-lg mb-8 text-white/90">
                  We're here to help. Contact us anytime with your privacy concerns or questions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/contact"
                    onClick={() => handleNavClick('/contact')}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-white text-teal-600 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all"
                  >
                    <span className="truncate">Contact Us</span>
                  </Link>
                  <button 
                    onClick={openEstimateModal}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-teal-700 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-teal-800 transition-all"
                  >
                    <span className="truncate">Free Estimate</span>
                  </button>
                </div>
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

export default Privacy;