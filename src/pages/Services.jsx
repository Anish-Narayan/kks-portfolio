import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Threads from "../gsap/Threads";
import PixelTransition from "../gsap/PixelTransition";
import { servicesData } from "../data/servicesData";

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

function Services() {
  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white overflow-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
      </div>
      
      {/* Background Gradient/Noise for texture */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 2. Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-600">
              OUR EXPERTISE.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
              Designing the future through pixel-perfect precision and immersive digital experiences.
            </p>
          </motion.div>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 via-transparent to-transparent mt-12 origin-left"
          />
        </div>

        {/* Grid Section */}
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <motion.li key={service.id} variants={cardVariants} className="group relative">
              <Link to={`/services/${service.id}`} className="block h-full">
                
                {/* Card Container */}
                <div className="relative w-full h-[450px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  
                  {/* Pixel Transition Wrapper */}
                  <div className="absolute inset-0 z-10">
                    <PixelTransition
                      firstContent={
                        <div className="w-full h-full relative">
                           <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                      }
                      secondContent={
                        <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 p-8 text-center relative overflow-hidden">
                          {/* Abstract background shape for reveal */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                          
                          <h3 className="text-4xl font-bold text-white mb-2 relative z-10 tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm font-mono mt-2 opacity-80 uppercase tracking-widest">
                            Explore Service
                          </p>
                        </div>
                      }
                      gridSize={10}
                      pixelColor='#18181b' // Zinc-900 to match bg
                      animationStepDuration={0.35}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Label overlay (Visible initially, hidden on hover via pixel transition logic usually, 
                      but since PixelTransition handles the switch, we add a permanent footer for context) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 pointer-events-none flex justify-between items-end bg-gradient-to-t from-black/90 to-transparent pt-20 group-hover:opacity-0 transition-opacity duration-300">
                    <div>
                      <span className="text-cyan-400 font-mono text-xs mb-1 block">0{index + 1}</span>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Services;