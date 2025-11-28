import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DarkVeil from "../gsap/DarkVeil";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

function Home() {
  return (
    // Use h-[100dvh] for better mobile browser support (accounts for address bar)
    <div className="w-full h-[100dvh] relative overflow-hidden bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        <DarkVeil />
      </div>
      
      {/* Gradients & Noise */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 md:px-6">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-cyan-500"></span>
            <span className="text-cyan-400 font-mono text-[10px] md:text-sm uppercase tracking-[0.3em]">
              Creative Production Studio
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-cyan-500"></span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="relative">
            {/* Responsive text sizing: text-5xl on mobile -> text-9xl on desktop */}
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white mb-2">
              KK's PIXEL
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500">
              STUDIO<span className="text-cyan-500">.</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants} 
            className="mt-6 md:mt-8 text-base md:text-2xl text-gray-400 font-light max-w-xs sm:max-w-2xl mx-auto leading-relaxed"
          >
            Crafting visuals that connect, inspire, and engage. <br className="hidden md:block" />
            Based in Coimbatore, designed for the world.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/portfolio" 
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-cyan-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link 
              to="/contact" 
              className="w-full sm:w-auto min-w-[160px] px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all text-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;