import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import DarkVeil from "../gsap/DarkVeil";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

function Home() {
  return (
    <div className="w-full h-[100dvh] relative overflow-hidden bg-[#050505] text-white">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Visionary Production
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="mb-6">
            <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-2">
              KK's PIXEL
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.2em] text-gray-500 uppercase">
              Studio
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-medium mb-10"
          >
            A high-end creative sanctuary based in Coimbatore, <br/>
            crafting cinematic narratives for the global stage.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="/portfolio" 
              className="group relative px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link 
              to="/contact" 
              className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              The Brief
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;