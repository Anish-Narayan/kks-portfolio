import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// We now accept 'slug' as a prop
const ProjectCard = ({ icon, title, description, tags, slug, animationVariant }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={animationVariant}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      data-cursor-hover
      onClick={() => navigate(`/creation/${slug}`)} // Navigate on click
      className="group relative flex flex-col h-full p-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl shadow-black/20 cursor-pointer"
    >
      <div className="text-4xl text-neutral-500 mb-4 transition-colors duration-300 group-hover:text-cyan-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral-100 mb-2">{title}</h3>
      <p className="text-neutral-400 flex-grow mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-medium text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* This is now just a visual indicator, not a real link */}
      <div className="mt-auto text-neutral-300 font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-cyan-400">
        View Project
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;