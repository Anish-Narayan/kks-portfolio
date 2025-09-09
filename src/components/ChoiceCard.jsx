// src/components/ChoiceCard.js
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ChoiceCard = ({ icon, title, description, path, animationVariant }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  // Tuned physics for a smoother, more subtle magnetic pull
  const magneticSpringConfig = { stiffness: 120, damping: 20, mass: 0.1 };
  const mousePosition = {
    x: useSpring(0, magneticSpringConfig),
    y: useSpring(0, magneticSpringConfig),
  };

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mousePosition.x.set(x * 0.2); // Dampen the effect for subtlety
    mousePosition.y.set(y * 0.2);
    
    // Spotlight effect
    ref.current.style.setProperty('--x', `${clientX - left}px`);
    ref.current.style.setProperty('--y', `${clientY - top}px`);
  };

  const handleMouseLeave = () => {
    mousePosition.x.set(0);
    mousePosition.y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={animationVariant}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(path)}
      style={{ x: mousePosition.x, y: mousePosition.y }}
      data-cursor-hover // Attribute for custom cursor detection
      className="spotlight-card group relative w-full md:w-80 lg:w-96 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 shadow-2xl shadow-black/20"
      transition={{ type: 'spring', ...magneticSpringConfig }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-5xl text-neutral-500 transition-colors duration-300 group-hover:text-cyan-400">
          {icon}
        </div>
        <FiArrowUpRight className="text-neutral-500 text-3xl transform transition-transform duration-300 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <h2 className="text-2xl font-bold text-neutral-200 mb-2">{title}</h2>
      <p className="text-neutral-400">{description}</p>
    </motion.div>
  );
};

export default ChoiceCard;