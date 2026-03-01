import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Camera, ArrowRight, Video, TrendingUp, 
  Instagram, Linkedin, Globe
} from "lucide-react";
import Threads from "../gsap/Threads";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function About() {
  const evolutionData = [
    { year: "2019", label: "The Genesis", desc: "Started with portrait and product photography, mastering lighting and composition." },
    { year: "2021", label: "Digital Pivot", desc: "Launched creative designing and social media branding for small businesses." },
    { year: "2023", label: "Official Brand", desc: "Officially branded as KK's Pixel, offering full-scale professional production." },
    { year: "2024", label: "Market Growth", desc: "Specializing in food photography and social media marketing for local cafes." },
    { year: "2025", label: "Creative Scaling", desc: "Built a specialized Gen Z team to lead marketing for emerging boutiques." },
    { year: "2026", label: "Registered Co.", desc: "Full-service registered agency expanding into wedding & corporate events." },
  ];

  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden font-sans">

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-32 md:mb-56"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-cyan-500"></span>
            <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em]">Story of KK’S Pixel</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase text-white">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500">DIGITAL LEGACIES.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
            Based in Coimbatore, we are a Gen Z-powered creative house that bridges the gap between high-end visual art and result-driven marketing strategy.
          </motion.p>
        </motion.div>


        {/* 2. TEAM / FOUNDER SECTION (NORMAL IMAGE) */}
        <div className="mb-56">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Side - Now Full Color */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-zinc-900">
                <img
                  src="/Team.webp"
                  alt="KK's Pixel Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border border-white/5 rounded-[3rem] -z-10 hidden lg:block"></div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">The Creative <span className="text-cyan-500">Force</span></h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Our journey began in 2019 with a simple camera and a vision to capture the unseen. Over 7 years, we have evolved from a portrait studio into a registered production and marketing powerhouse.
                </p>
                <p>
                  Powered by a <span className="text-white font-medium italic underline decoration-cyan-500 underline-offset-4">Gen Z creative team</span>, we don't just follow trends—we create them. We understand how people consume content today, and we use that knowledge to make your brand stand out.
                </p>
              </div>

              <div className="flex gap-4 mt-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">100+</span>
                  <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">Projects Done</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10 mx-6"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">100%</span>
                  <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* 3. OUR EVOLUTION (Match to Image Layout) */}
        <div className="mb-56 border-t border-white/10 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-10">
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">Our Evolution</h2>
             <p className="text-gray-500 max-w-sm md:text-right text-sm leading-relaxed font-light">
               From a technical foundation in lighting and composition to a registered full-scale marketing agency.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {evolutionData.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Ghost Year BG */}
                <div className="absolute -top-12 left-0 text-7xl md:text-8xl font-black text-white/[0.03] group-hover:text-cyan-500/[0.05] transition-colors duration-500 select-none">
                  {step.year}
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-cyan-500 font-mono text-sm font-bold mb-4 tracking-tight flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-cyan-500"></span>
                    {step.year} — {step.label}
                  </h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 4. SERVICES QUICK GRID */}
        <div className="mb-56">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Camera className="text-cyan-400" size={32} />, 
                title: "Photography", 
                desc: "Wedding, Fashion, Product, & Studio photography that captures emotion." 
              },
              { 
                icon: <Video className="text-purple-400" size={32} />, 
                title: "Videography", 
                desc: "Cinematic films and viral-ready Reels designed for the modern audience." 
              },
              { 
                icon: <TrendingUp className="text-green-400" size={32} />, 
                title: "Digital Marketing", 
                desc: "Complete social handling and branding for Cafes, Gyms, and Boutiques." 
              },
            ].map((s, i) => (
              <div key={i} className="p-12 bg-zinc-900/40 border border-white/5 rounded-[3rem] hover:border-white/20 transition-all duration-500 group">
                <div className="mb-8 p-4 bg-black/40 rounded-2xl w-fit group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* 5. FINAL CTA */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-16 md:p-32 rounded-[4rem] border border-white/10 text-center overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
            
            <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-[0.9]">
              Let’s create <br /> <span className="text-cyan-500">something</span> iconic.
            </h2>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-xl hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
            >
              START A PROJECT
              <ArrowRight size={24} />
            </Link>
        </motion.div>

      </div>
    </div>
  );
}

export default About;