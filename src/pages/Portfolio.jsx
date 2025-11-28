import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Layers, Camera } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import Threads from "../gsap/Threads";

// Get unique categories for the filter tabs
const categories = ["All", ...new Set(portfolioData.map((item) => item.category))];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredData =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden">
      
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />


      {/* --- Main Container --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
                <Layers className="text-cyan-500" size={20} />
                <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest">Visual Archive</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-600">
              SELECTED<br />WORKS.
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-lg">
              A curation of moments. Hover over the cards to reveal the details.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === cat
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>


        {/* Gallery Grid (Masonry using CSS columns) */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 5 }}
                key={item.id}
                className="break-inside-avoid"
              >
                {/* Card Container */}
                <div className="group relative block w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-crosshair shadow-2xl transform-gpu">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-black">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      // UPDATED: Changed duration-700 to duration-[1200ms] and ease-in-out to ease-out
                      className="w-full h-auto object-cover 
                                 blur-md grayscale brightness-75 scale-105
                                 group-hover:blur-none group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-100
                                 transition-all duration-[1200ms] ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<div class="h-64 flex items-center justify-center text-gray-500 font-mono text-sm">Image Not Found</div>';
                      }}
                    />
                    
                    {/* Dark Overlay (Fades out slowly) */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors duration-[1000ms]" />
                    
                    {/* Center Icon (Fades out) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-0 transition-opacity duration-[1000ms] pointer-events-none">
                       <Camera className="text-white drop-shadow-lg" size={32} />
                    </div>
                  </div>

                  {/* Info Card */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-[1000ms]">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-cyan-500 text-xs font-mono uppercase tracking-widest mb-1 block opacity-80 group-hover:opacity-100">
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="w-full py-20 text-center text-gray-500">
            <Filter className="mx-auto mb-4 opacity-50" size={48} />
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Portfolio;