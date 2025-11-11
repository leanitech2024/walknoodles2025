import React from 'react';
import shopPhoto from '/shop-photo.png';

const FindUsSection = () => {
  const mapLink = "https://maps.app.goo.gl/AoWzApja8Cn2jMJC6"; // Updated link

  return (
    <section className="py-6 bg-white lg:py-16">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl lg:px-8">
        <div
          className="flex flex-row items-stretch rounded-2xl overflow-hidden shadow-xl h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] 
                     lg:h-[450px] lg:rounded-3xl lg:shadow-2xl"
        >
          {/* Left Column: Shop Photo */}
          <div className="w-[40%]">
            <img
              src={shopPhoto}
              alt="WalkN'oodles Shop Front"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="w-[60%] relative group">
            {/* Embedded Google Map */}
            <iframe
              title="WalkN'oodles Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.987906712634!2d77.3682349!3d28.6380471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaf847a0be1d%3A0xfcc1bb5e4cb7b30b!2sWalkN&#39;oodles!5e0!3m2!1sen!2sin!4v1731319012000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 transition-all duration-500 group-hover:opacity-80 group-hover:scale-[1.02]"
            ></iframe>

            {/* Overlay + Visit Button */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold cursor-pointer bg-gold text-dark-blue
                           transition-all duration-300 ease-in-out hover:bg-light-blue hover:text-white lg:px-10 lg:py-4 lg:text-xl"
              >
                Visit us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
