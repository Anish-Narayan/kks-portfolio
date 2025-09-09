// src/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCameraRetro, FaCode } from 'react-icons/fa';
import CustomCursor from './CustomCursor';
import ChoiceCard from './ChoiceCard';

// Wrapper for the text reveal animation
const AnimatedText = ({ text, el: Wrapper = 'p', className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.2 },
    }),
  };

  const childVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        aria-hidden
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap"
      >
        {text.split(' ').map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.5ch]">
            <motion.span variants={childVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

function Home() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } 
    },
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#0A0A0A] text-white font-sans overflow-hidden">
        <div className="text-center max-w-4xl mb-16">
          <AnimatedText
            text="Welcome to KK's Pixel"
            el="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-neutral-100"
          />
          <AnimatedText
            text="A curated space where visual storytelling meets digital craftsmanship. Choose a path to explore."
            className="mt-4 text-lg md:text-xl text-neutral-400"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <ChoiceCard
            icon={<FaCameraRetro />}
            title="Pixel Gallery"
            description="A journey through my lens. Discover moments captured in time."
            path="/pixel"
            animationVariant={cardVariant}
          />
          <ChoiceCard
            icon={<FaCode />}
            title="Creation Hub"
            description="Innovative projects and code. See what I've been building."
            path="/creation"
            animationVariant={cardVariant}
          />
        </motion.div>
      </div>
    </>
  );
}

export default Home;