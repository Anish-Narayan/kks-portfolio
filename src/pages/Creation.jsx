import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Import the data from our dedicated file

import { projectData } from '../data/projects';
// The AnimatedText component can remain here or be moved to a shared components folder
const AnimatedText = ({ text, el: Wrapper = 'p', className }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.1 },
    }),
  };

  const child = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span aria-hidden variants={container} initial="hidden" animate="visible">
        {text.split(' ').map((word, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 mr-[0.5ch]">
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};


function Creation() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full bg-[#0A0A0A] text-neutral-200 font-sans p-8 md:p-16 lg:p-24 overflow-hidden"
    >
      <header className="max-w-4xl mb-16">
        <AnimatedText
          text="Digital Creations"
          el="h1"
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-neutral-100"
        />
        <AnimatedText
          text="A curated selection of my work in web development, design, and digital marketing."
          el="p"
          className="mt-4 text-lg md:text-xl text-neutral-400"
        />
      </header>
      
      <motion.div
        variants={gridVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* We now map over the imported projectData */}
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={project.title}
            description={project.description}
            tags={project.tags}
            animationVariant={cardVariant}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Creation;