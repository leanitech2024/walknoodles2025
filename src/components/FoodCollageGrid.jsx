import React from 'react';
import { motion } from 'framer-motion';

export default function FoodGridLayout() {
  const images = [
    { src: '/gallery/img-1.jpg', alt: 'Delicious Asian noodles and ramen dishes' },
    { src: '/gallery/img-2.jpg', alt: 'Fresh dim sum and small plates from Walk Noodles' },
    { src: '/gallery/img-3.jpg', alt: 'Vegetarian pad thai noodles with fresh vegetables' },
    { src: '/gallery/img-4.png', alt: 'Butter chicken noodles fusion dish' },
    { src: '/gallery/img-5.jpg', alt: 'Spicy ramen bowl with authentic Asian flavors' },
    { src: '/gallery/img-6.jpg', alt: 'Colorful Asian cuisine presentation' },
    { src: '/gallery/img-7.jpg', alt: 'Healthy noodles made with wholesome ingredients' },
  ];

  // Different starting positions for each image
  const animations = [
    { x: -400, y: -400, rotate: -45 }, // Top left - from top-left corner
    { x: 0, y: -500, rotate: 0 },      // Top middle - from top
    { x: 400, y: -400, rotate: 45 },   // Top right - from top-right corner
    { x: -500, y: 0, rotate: -90 },    // Middle left - from left
    { x: 500, y: 0, rotate: 90 },      // Middle right - from right
    { x: 0, y: 500, rotate: 0 },       // Bottom middle - from bottom
    { x: 400, y: 400, rotate: 45 },    // Bottom right - from bottom-right corner
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = (initial) => ({
    hidden: {
      x: initial.x,
      y: initial.y,
      rotate: initial.rotate,
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      }
    }
  });

  return (
    <div className="bg-gray-100 flex items-center justify-center p-2 mt-5"> 
      <motion.div 
        className="w-full max-w-4xl aspect-square grid grid-cols-3 grid-rows-3 gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image 1 - Top left */}
        <motion.div 
          className="col-start-1 row-start-1 overflow-hidden rounded-lg"
          variants={itemVariants(animations[0])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 2 - Top middle (tall, spans 2 rows) */}
        <motion.div 
          className="col-start-2 row-start-1 row-span-2 overflow-hidden rounded-lg"
          variants={itemVariants(animations[1])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[3].src} 
            alt={images[3].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 3 - Top right */}
        <motion.div 
          className="col-start-3 row-start-1 overflow-hidden rounded-lg"
          variants={itemVariants(animations[2])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[2].src} 
            alt={images[2].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 4 - Middle left (tall, spans 2 rows) */}
        <motion.div 
          className="col-start-1 row-start-2 row-span-2 overflow-hidden rounded-lg"
          variants={itemVariants(animations[3])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[1].src} 
            alt={images[1].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 5 - Middle right (wide, spans 2 columns) */}
        <motion.div 
          className="col-start-2 col-span-2 row-start-2 overflow-hidden rounded-lg"
          variants={itemVariants(animations[4])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[4].src} 
            alt={images[4].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 6 - Bottom middle */}
        <motion.div 
          className="col-start-2 row-start-3 overflow-hidden rounded-lg"
          variants={itemVariants(animations[5])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[5].src} 
            alt={images[5].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Image 7 - Bottom right */}
        <motion.div 
          className="col-start-3 row-start-3 overflow-hidden rounded-lg"
          variants={itemVariants(animations[6])}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img 
            src={images[6].src} 
            alt={images[6].alt} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}