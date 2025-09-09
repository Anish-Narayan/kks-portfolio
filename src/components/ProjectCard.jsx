// src/components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ icon, title, description, tags, animationVariant }) => {
  return (
    <motion.div
      variants={animationVariant}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      data-cursor-hover // This makes it interact with your custom cursor
      className="group relative flex flex-col h-full p-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl shadow-black/20"
    >
      <div className="text-4xl text-neutral-500 mb-4 transition-colors duration-300 group-hover:text-cyan-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral-100 mb-2">{title}</h3>
      <p className="text-neutral-400 flex-grow mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs font-medium text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="mt-auto text-neutral-300 font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-cyan-400"
      >
        View Project
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;