// src/components/PhotoCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PhotoCard = ({ photo, className, animationVariant }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={animationVariant}
      onClick={() => navigate(`/pixel/${photo.slug}`)}
      data-cursor-hover
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-xl font-bold">{photo.title}</h3>
        <p className="text-sm text-neutral-300">{photo.location}</p>
      </div>
    </motion.div>
  );
};

export default PhotoCard;