// src/Pixel.js
import React from 'react';
import { motion } from 'framer-motion';
import { photoData } from '../data/photography';
import PhotoCard from '../components/PhotoCard';
import { AnimatedText } from './Creation'; // Assuming you've exported AnimatedText from Creation.js or moved it to a shared file

function Pixel() {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // This function assigns grid span classes for a dynamic masonry layout
  const getCardClassName = (item, index) => {
    if (item.orientation === 'landscape') {
      return 'md:col-span-2';
    }
    if (index % 5 === 0) { // Make some portrait images taller
      return 'md:row-span-2';
    }
    return '';
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full bg-[#0A0A0A] text-neutral-200 font-sans p-8 md:p-16 lg:p-24 overflow-hidden"
    >
      <header className="max-w-4xl mb-16">
        <AnimatedText
          text="Pixel Gallery"
          el="h1"
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-neutral-100"
        />
        <AnimatedText
          text="A collection of moments, captured and curated from travels near and far."
          el="p"
          className="mt-4 text-lg md:text-xl text-neutral-400"
        />
      </header>

      <motion.div
        variants={gridVariants}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
      >
        {photoData.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            animationVariant={cardVariant}
            className={getCardClassName(photo, index)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Pixel;

// For this to work, make sure AnimatedText is accessible.
// You can either move AnimatedText to its own component file, or export it from Creation.js
// e.g. in Creation.js: export const AnimatedText = (...) => { ... };