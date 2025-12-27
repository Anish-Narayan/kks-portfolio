import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles, Mail, Star, ShieldCheck, Zap, Heart } from "lucide-react";
import { servicesData } from "../data/servicesData";
import Threads from "../gsap/Threads";

function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);
  const { scrollY } = useScroll();

  // Parallax and Opacity effects for Hero
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <Sparkles className="text-cyan-500 mb-4 animate-pulse" size={48} />
        <h2 className="text-4xl font-bold mb-4 tracking-tighter">Service Not Found</h2>
        <Link to="/services" className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
          Return to Services
        </Link>
      </div>
    );
  }

  const ServiceContentComponent = service.component;

  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Threads amplitude={1.2} distance={0.8} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/20 via-[#050505]/90 to-[#050505] pointer-events-none" />

      {/* --- PROGRESS BAR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-500 origin-left z-[100]"
        style={{ scaleX: useScroll().scrollProgress }}
      />

      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-8 left-6 md:left-12 z-50">
        <Link 
          to="/services" 
          className="group flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
        >
          <div className="p-1 rounded-full bg-white/5 group-hover:bg-cyan-500 transition-colors">
            <ArrowLeft size={16} className="text-white group-hover:text-black transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">Back</span>
        </Link>
      </nav>

      {/* --- HERO SECTION WITH PARALLAX --- */}
      <section className="relative z-10 w-full h-[70vh] lg:h-[85vh] flex items-end overflow-hidden">
        <motion.div style={{ y: y1, scale: scaleHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale-[20%] brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-cyan-500"></span>
              <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs">Premium Service</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white leading-[0.85] mb-4">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-4">{word}</span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <div className="relative z-20 -mt-10 mb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl">
            {[
              { icon: <ShieldCheck size={20}/>, label: "Quality Guaranteed" },
              { icon: <Zap size={20}/>, label: "Fast Delivery" },
              { icon: <Star size={20}/>, label: "Expert Team" },
              { icon: <Heart size={20}/>, label: "Customized Fit" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 border-r last:border-0 border-white/5">
                <span className="text-cyan-500">{item.icon}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: CONTENT */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent opacity-50 hidden md:block" />
                <h2 className="text-4xl font-bold mb-8 tracking-tight">
                  Crafting excellence in <span className="text-cyan-500">{service.title}</span>
                </h2>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  <ServiceContentComponent service={service} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              
              {/* Highlights Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles size={40} />
                </div>
                
                <h3 className="text-xl font-bold mb-8 tracking-tight flex items-center gap-2">
                  Key Deliverables
                </h3>
                
                <ul className="space-y-5">
                  {service.tags?.map((tag, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-gray-300 group/item"
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      <span className="text-sm font-medium tracking-wide group-hover/item:text-white transition-colors">{tag}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Action Card */}
              <div className="relative group p-[1px] rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 animate-gradient-xy" />
                <div className="relative bg-[#0a0a0a] rounded-[2.4rem] p-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Next Step?</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Ready to elevate your project with KK’s Pixel? Let’s discuss your vision.
                  </p>
                  <Link 
                    to="/contact" 
                    className="w-full group/btn relative overflow-hidden py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="relative z-10">Start a Conversation</span>
                  </Link>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ServicePage;