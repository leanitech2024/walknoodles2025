/* import React from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  
  const galleryImages = [
    '/gallery/img-1.jpg',
    '/gallery/img-2.jpg',
    '/gallery/img-3.jpg',
    '/gallery/img-5.jpg',
    '/gallery/img-6.jpg',
    '/gallery/img-7.jpg', 
  ];

  return (
    <footer className="bg-dark-blue text-cream-text py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 items-start w-full
                     min-h-[120px] md:min-h-[140px] lg:min-h-40"
        >
          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2 
                       lg:items-start lg:text-left" 
            style={{ gap: "0.5rem" }}
          >
            <h3
              className="text-gold font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2"
            >
              Connect With Us
            </h3>

            <a
              href="https://www.instagram.com/walknoodles/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold transition-colors duration-200"
            >
              <FaInstagram
                className="shrink-0 text-gold text-base sm:text-lg lg:text-xl" // Replaced clamp with responsive Tailwind classes
                aria-hidden
              />
              <span className="text-white text-sm sm:text-base lg:text-lg"> 
                @walknoodles
              </span>
            </a>

            <a
              href="mailto:info@walknoodles.com"
              className="flex items-center justify-center sm:justify-start gap-3 hover:text-gold transition-colors duration-200"
            >
              <FaEnvelope
                className="shrink-0 text-gold text-base sm:text-lg lg:text-xl" 
                aria-hidden
              />
              <span className="text-white text-sm sm:text-base lg:text-lg"> 
                info@walknoodles.com
              </span>
            </a>
          </div>

          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-600/40 -translate-x-1/2 z-0 lg:hidden" />

          <div
            className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-2
                       lg:items-start lg:text-left" 
            style={{ gap: "0.5rem" }}
          >
            <h3
              className="text-gold font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2" 
            >
              Our Location
            </h3>

            <div className="flex items-start justify-center sm:justify-start gap-3">
              <FaMapMarkerAlt
                className="shrink-0 mt-1 text-gold text-base sm:text-lg lg:text-xl" 
                aria-hidden
              />
              <p
                className="leading-relaxed text-white text-sm sm:text-base lg:text-lg" 
              >
                Shop No.5, GC, Grand Street,
                <br />
                Vaibhav Khand, Indirapuram,
                <br />
                Ghaziabad, Uttar Pradesh 201014
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-start text-center px-2">
            <h3 className="text-gold font-semibold text-xl xl:text-2xl mb-4">
              Our Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
              {galleryImages.map((src, index) => (
                <div key={index} className="w-full aspect-square overflow-hidden rounded-md shadow-sm">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400 lg:mt-10">
          &copy; {new Date().getFullYear()} WalkNoodles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; */

import React from "react";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const galleryImages = [
    '/gallery/img-1.jpg',
    '/gallery/img-2.jpg',
    '/gallery/img-3.jpg',
    '/gallery/img-5.jpg',
    '/gallery/img-6.jpg',
    '/gallery/img-7.jpg',
  ];

  return (
    <footer className="bg-dark-blue text-cream-text pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img 
                src="/logo.png" 
                alt="WalkNoodles Logo" 
                className="h-16 w-auto object-contain drop-shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <div className="h-1 w-12 bg-gold rounded-full" /> {/* Decorative underline */}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Savor the authentic taste of premium hand-pulled noodles and Asian street delicacies right in the heart of Indirapuram.
            </p>
          </div>

          {/* Column 2: Connect With Us */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-[0.2em]">
              Connect
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="https://www.instagram.com/walknoodles/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-white/90 hover:text-gold transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <FaInstagram className="text-xl group-hover:scale-110" />
                </div>
                <span className="text-base font-medium">@walknoodles</span>
              </a>

              <a
                href="mailto:info@walknoodles.com"
                className="group flex items-center gap-3 text-white/90 hover:text-gold transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <FaEnvelope className="text-xl group-hover:scale-110" />
                </div>
                <span className="text-base font-medium">info@walknoodles.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Our Location */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-[0.2em]">
              Visit Us
            </h3>
            <div className="flex items-start gap-4 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-lg text-gold" />
              </div>
              <p className="text-base leading-relaxed text-center md:text-left pt-1">
                Shop No.5, GC, Grand Street,<br />
                Vaibhav Khand, Indirapuram,<br />
                Ghaziabad, UP 201014
              </p>
            </div>
          </div>

          {/* Column 4: Gallery */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-[0.2em]">
              Our Gallery
            </h3>
            <div className="grid grid-cols-3 gap-2 w-full max-w-[220px]">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gray-900 border border-white/5"
                >
                  <img 
                    src={src} 
                    alt={`Gallery preview ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-light">
            &copy; {new Date().getFullYear()} <span className="text-gold/80">WalkNoodles</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;