import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RefundPolicy() {
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
                    Refund <span className="text-teal-600">Policy</span>
                  </h1>
                  <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
                    Our commitment to your satisfaction and how we handle refunds.
                  </p>
                  <p className="mt-2 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            </section>

            {/* Refund Policy Content */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-teal max-w-none">
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
                    <p className="text-gray-700 text-lg font-medium m-0">
                      At Bayou Pristine Cleaning, your satisfaction is our top priority. We stand behind the quality of our work and are committed to ensuring you are completely happy with our services. This Refund Policy outlines our commitment to you and the circumstances under which refunds may be issued.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our 100% Satisfaction Guarantee</h2>
                  <p className="text-gray-700">
                    We are confident in the quality of our cleaning services and back every job with our 100% Satisfaction Guarantee. If you are not completely satisfied with the cleaning service we provided, please let us know within 24-48 hours of the service completion, and we will make it right.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Eligibility</h2>
                  <p className="text-gray-700">
                    Refunds are considered under the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Unsatisfactory Service:</strong> If the cleaning service does not meet the agreed-upon standards and we are unable to resolve the issue through a re-clean</li>
                    <li><strong>Cancellation:</strong> If you cancel a scheduled service within the allowed timeframe (see cancellation policy below)</li>
                    <li><strong>Double Booking or Scheduling Error:</strong> In the rare event of a scheduling error on our part that prevents us from delivering the service</li>
                    <li><strong>Service Not Rendered:</strong> If we are unable to provide the service for reasons within our control</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cancellation Policy</h2>
                  <p className="text-gray-700">
                    We understand that plans can change. Our cancellation policy is designed to be fair to both our customers and our team:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Free Cancellation:</strong> Cancel or reschedule your service at least 24 hours before your scheduled appointment with no penalty or charge</li>
                    <li><strong>Late Cancellation:</strong> Cancellations made within 24 hours of the scheduled service may be subject to a cancellation fee of up to 50% of the service cost</li>
                    <li><strong>No-Show:</strong> If our team arrives at your property and cannot gain access or the service cannot be performed, a fee may be charged</li>
                    <li><strong>Emergency Cancellation:</strong> We will consider emergency situations on a case-by-case basis</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Process</h2>
                  <p className="text-gray-700">
                    To request a refund, please follow these steps:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                    <li><strong>Contact Us:</strong> Reach out to our customer service team within 24-48 hours of your service</li>
                    <li><strong>Provide Details:</strong> Share your concerns and the reason for your dissatisfaction</li>
                    <li><strong>Allow Us to Make It Right:</strong> We will first offer to send a team back to re-clean any areas that did not meet our standards</li>
                    <li><strong>Refund Consideration:</strong> If a re-clean is not possible or does not resolve the issue, we will process a partial or full refund based on the circumstances</li>
                  </ol>
                  <p className="text-gray-700 mt-4">
                    Refunds will be processed using the original payment method. Please allow 5-10 business days for the refund to appear in your account.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Re-Cleaning Policy</h2>
                  <p className="text-gray-700">
                    We take pride in our work and want you to be completely satisfied. If there is any area of your home or business that you feel was not cleaned to your satisfaction:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Re-Clean Request:</strong> Contact us within 24-48 hours of your service</li>
                    <li><strong>Free Re-Clean:</strong> We will schedule a free re-clean of the areas in question</li>
                    <li><strong>Timeframe:</strong> Re-cleaning services are typically scheduled within 48-72 hours of your request</li>
                    <li><strong>Scope:</strong> The re-clean focuses specifically on the areas that did not meet our standards</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Please note that re-cleaning requests must be made in a timely manner so our team can effectively address your concerns.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-Refundable Items and Services</h2>
                  <p className="text-gray-700">
                    The following are generally not eligible for refunds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Services that have been fully performed to the agreed-upon standards</li>
                    <li>Deposits or advanced payments for scheduled services (except in cases of service cancellation by our team)</li>
                    <li>Services where the client was not present to provide access at the scheduled time</li>
                    <li>Additional services requested and performed on-site beyond the original agreement</li>
                    <li>Damage or issues caused by pre-existing conditions, lack of maintenance, or normal wear and tear</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
                  <p className="text-gray-700">
                    If you are not satisfied with our initial response to your refund request:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>You may escalate your concern to our management team</li>
                    <li>We will review your case thoroughly and provide a final resolution</li>
                    <li>If a resolution cannot be reached, you may be eligible to pursue other dispute resolution methods as provided by applicable law</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exceptions and Special Circumstances</h2>
                  <p className="text-gray-700">
                    We understand that every situation is unique. We reserve the right to make exceptions to this policy on a case-by-case basis to ensure customer satisfaction. Factors we may consider include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Length of time as a customer with us</li>
                    <li>Frequency of services</li>
                    <li>Specific circumstances that may have impacted the service delivery</li>
                    <li>Communication history with our team</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about our refund policy or need to request a refund, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4 border border-gray-200">
                    <p className="text-gray-700 m-0">
                      <strong>Bayou Pristine Cleaning</strong><br />
                      2200 Jan St, Monroe, LA 71201<br />
                      <strong>Phone:</strong> (318) 555-0123<br />
                      <strong>Email:</strong> refunds@bayoupristine.com<br />
                      <strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM
                    </p>
                  </div>

                  <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100 text-center">
                    <p className="text-sm text-gray-600 m-0">
                      We value your trust and are committed to providing you with the highest quality cleaning services. 
                      Your satisfaction is not just a goal—it's our promise.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-teal-600">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Our Policies?</h2>
                <p className="text-lg mb-8 text-white/90">
                  We're here to help. Contact us anytime with your questions or concerns.
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
                  <Link to="/RefundPolicy" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">Refund Policy</Link>
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

export default RefundPolicy;