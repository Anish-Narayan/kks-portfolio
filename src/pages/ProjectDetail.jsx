import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { projectData } from '../data/projects';

function ProjectDetail() {
  const { slug } = useParams(); // Gets the 'slug' from the URL
  const navigate = useNavigate();
  const project = projectData.find(p => p.slug === slug);

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0A0A0A] text-neutral-200 p-8">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <button
          onClick={() => navigate('/creation')}
          className="mt-8 text-cyan-400 flex items-center gap-2 font-semibold"
          data-cursor-hover
        >
          <FiArrowLeft />
          Back to Creations
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full bg-[#0A0A0A] text-neutral-200 font-sans p-8 md:p-16 lg:p-24"
    >
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/creation')}
          className="text-cyan-400 flex items-center gap-2 font-semibold mb-8 transition-all hover:gap-3"
          data-cursor-hover
        >
          <FiArrowLeft />
          Back to Creations
        </button>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="text-6xl text-cyan-400 mb-6">{project.icon}</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-neutral-100">{project.title}</h1>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2 my-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-cyan-300 bg-cyan-900/50 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </motion.div>
        
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-neutral-300 leading-relaxed">
          {project.details}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ProjectDetail;