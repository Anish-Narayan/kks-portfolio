import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles, Mail, Star } from "lucide-react";
import { servicesData } from "../data/servicesData";
import Threads from "../gsap/Threads";

function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-cyan-400 hover:underline">Return to Services</Link>
      </div>
    );
  }

  const ServiceContentComponent = service.component;

  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
        <Threads amplitude={1.5} distance={1} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/10 via-black/80 to-[#050505] pointer-events-none" />
      {/* Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>


      {/* --- NAVIGATION (FIXED OVERLAP ISSUE) --- */}
      {/* Changed top-6 to top-24 to sit BELOW the Navbar Logo */}
      <nav className="fixed top-24 left-6 z-40 animate-in fade-in slide-in-from-left-4 duration-1000">
        <Link 
          to="/services" 
          className="group flex items-center gap-3 px-5 py-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl"
        >
          <ArrowLeft size={18} className="text-gray-300 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide text-gray-200">All Services</span>
        </Link>
      </nav>


      {/* --- HERO SECTION --- */}
      <div className="relative z-10 w-full h-[55vh] lg:h-[65vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full max-w-7xl mx-auto px-6 pb-12 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Decorative Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                <Sparkles size={14} />
              </span>
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Premium Service</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </div>


      {/* --- CONTENT LAYOUT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Detailed Description (8 cols) */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Content Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              
              {/* Subtle hover glow effect inside card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

              <div className="relative z-10">
                 <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span> 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Overview
                  </span>
                 </h2>

                 {/* Rendering the specific inner component */}
                 <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed font-light">
                   <ServiceContentComponent service={service} />
                 </div>
              </div>
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="sticky top-28 space-y-6">
              
              {/* Card 1: Key Features / Tags */}
              <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  Highlights
                </h3>
                
                <ul className="space-y-4">
                  {service.tags ? (
                    service.tags.map((tag, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 className="text-cyan-500 min-w-[20px] mt-1" size={18} />
                        <span className="text-sm font-medium">{tag}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 text-sm">Features loading...</li>
                  )}
                </ul>
              </div>

              {/* Card 2: Contact / Action */}
              <div className="group relative overflow-hidden rounded-3xl p-[1px]">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                
                <div className="relative h-full bg-[#0a0a0a] rounded-3xl p-8 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Ready to Start?</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Let's translate your vision into reality. Reach out to discuss your project.
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-cyan-50 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}

export default ServicePage;