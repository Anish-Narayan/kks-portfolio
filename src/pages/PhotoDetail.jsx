// src/pages/PhotoDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { photoData } from '../data/photography';

function PhotoDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const photo = photoData.find(p => p.slug === slug);

  if (!photo) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0A0A0A] text-neutral-200 p-8">
        <h1 className="text-4xl font-bold">Photo Not Found</h1>
        <button onClick={() => navigate('/pixel')} className="mt-8 text-cyan-400 flex items-center gap-2 font-semibold" data-cursor-hover>
          <FiArrowLeft />
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-[#0A0A0A] text-neutral-200 font-sans p-4 md:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/pixel')} className="text-cyan-400 flex items-center gap-2 font-semibold my-8 transition-all hover:gap-3" data-cursor-hover>
          <FiArrowLeft />
          Back to Gallery
        </button>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <motion.div
            className="lg:col-span-2 mb-8 lg:mb-0"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-auto object-contain rounded-2xl shadow-2xl shadow-black/30" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-100">{photo.title}</h1>
            <p className="text-lg text-neutral-400 mt-2 mb-6">{photo.location}</p>
            <p className="text-neutral-300 leading-relaxed">{photo.details}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default PhotoDetail;