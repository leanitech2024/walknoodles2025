import { MapPin, Mail } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export default function ContactInfoCard() {
  return (
    <div className="max-w-md mx-auto p-6 lg:max-w-lg lg:p-10">
      <div
        className="group border-2 border-dark-blue rounded-3xl p-6 space-y-8 
                   bg-white transition-all duration-300
                   lg:p-10 lg:space-y-10 lg:rounded-[2.5rem] 
                   lg:hover:border-gold 
                   lg:hover:bg-light-blue/5 lg:hover:scale-[1.02]"
      >
        {/* Address Section */}
        <div className="flex items-start gap-4 lg:gap-6">
          <div className="shrink-0">
            <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold 
                           group-hover:bg-gold transition-colors duration-300">
              <MapPin
                className="w-6 h-6 text-gold group-hover:text-white transition duration-300 group-hover:rotate-6"
                strokeWidth={2.5}
              />
            </div>
            <MapPin className="w-10 h-10 text-dark-blue lg:hidden" strokeWidth={2} />
          </div>
          <div>
            <h3 className="hidden lg:block text-dark-blue text-xl font-bold mb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/AoWzApja8Cn2jMJC6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-blue font-semibold text-base lg:text-lg lg:leading-relaxed mt-1 
                         hover:underline hover:text-light-blue transition-colors duration-200 
                         lg:font-extrabold"
            >
              Shop No.5, GC, Grand Street, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014
            </a>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start gap-4 lg:gap-6">
          <div className="shrink-0">
            <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold 
                           group-hover:bg-gold transition-colors duration-300">
              <Mail
                className="w-6 h-6 text-gold group-hover:text-white transition duration-300 group-hover:scale-110"
                strokeWidth={2.5}
              />
            </div>
            <Mail className="w-10 h-10 text-dark-blue lg:hidden" strokeWidth={2} />
          </div>
          <div>
            <h3 className="hidden lg:block text-dark-blue text-xl font-bold mb-1">Email Us</h3>
            <p className="text-dark-blue font-semibold text-base lg:text-lg mt-0">
              <a
                href="mailto:info@walknoodles.com"
                className="hover:underline text-light-blue transition-colors duration-200 
                            lg:text-dark-blue lg:font-extrabold lg:group-hover:text-light-blue"
              >
                info@walknoodles.com
              </a>
            </p>
          </div>
        </div>

        {/* Phone/WhatsApp Section */}
        <div className="flex items-start gap-4 lg:gap-6">
          <div className="shrink-0">
            <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 border border-gold 
                           group-hover:bg-gold transition-colors duration-300">
              <BsWhatsapp
                className="w-7 h-7 text-gold group-hover:text-white transition duration-300 group-hover:-translate-y-0.5"
              />
            </div>
            <BsWhatsapp className="w-11 h-11 text-dark-blue lg:hidden" />
          </div>
          <div>
            <h3 className="hidden lg:block text-dark-blue text-xl font-bold mb-1">Message</h3>
            <p className="text-dark-blue font-semibold text-base lg:text-lg mt-1">
              <a
                href="tel:+918448277676"
                className="hover:underline text-light-blue transition-colors duration-200 
                            lg:text-dark-blue lg:font-extrabold lg:group-hover:text-light-blue"
              >
                +91 8448277676
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
