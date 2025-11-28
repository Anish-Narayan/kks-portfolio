import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Award, Clock, Heart, ArrowRight, Zap, Target } from "lucide-react";
import Threads from "../gsap/Threads";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function About() {
  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/80 to-[#050505] pointer-events-none" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        
        {/* 1. HERO SECTION */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-32 md:mb-48"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-cyan-500"></span>
            <span className="text-cyan-500 font-mono text-sm uppercase tracking-[0.2em]">Who We Are</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            CAPTURING THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">UNSEEN.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
            We are not just photographers or filmmakers. We are visual architects obsessed with light, composition, and the raw emotion of the moment.
          </motion.p>
        </motion.div>


        {/* 2. THE VISION (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
              Driven by <span className="text-cyan-500">Passion</span>, <br />
              Defined by <span className="text-purple-500">Precision</span>.
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                Founded on the belief that every frame should tell a story, KK's Studio has evolved from a passion project into a full-scale creative production house.
              </p>
              <p>
                Whether it's the chaotic beauty of a wedding, the controlled precision of a product shoot, or the high-octane energy of a commercial film, we bring a cinematic approach to everything we touch.
              </p>
            </motion.div>

            {/* Signature / Decorative Element */}
            <motion.div variants={fadeInUp} className="mt-12 opacity-80">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 invert opacity-50" />
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* The Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
               <img 
                 src="https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80&w=2006" 
                 alt="Photographer at work" 
                 className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[1200ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <div className="absolute bottom-6 left-6">
                  <p className="font-mono text-xs text-cyan-400">EST. 2018</p>
                  <p className="text-white font-bold">Coimbatore, India</p>
               </div>
            </div>

            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-white/5 rounded-2xl z-0 hidden lg:block"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>


        {/* 3. STATS SECTION */}
        <div className="mb-32 border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Years Active", value: "06+", icon: <Clock size={20} /> },
              { label: "Projects Done", value: "250+", icon: <Camera size={20} /> },
              { label: "Awards Won", value: "12", icon: <Award size={20} /> },
              { label: "Happy Clients", value: "100%", icon: <Heart size={20} /> },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 md:p-12 text-center group hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4 text-gray-500 group-hover:text-cyan-400 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-sm font-mono uppercase tracking-widest text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 4. VALUES / WHY US */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            The KK's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Advantage</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Artistic Vision", 
                desc: "We don't just record events; we create art. Every angle is calculated, every light source utilized.",
                icon: <Target className="text-purple-500" size={32} />
              },
              { 
                title: "High-End Gear", 
                desc: "Utilizing industry-standard cinema cameras, drones, and lighting to ensure broadcast quality.",
                icon: <Camera className="text-cyan-500" size={32} />
              },
              { 
                title: "Fast Turnaround", 
                desc: "Our post-production workflow is optimized to get your memories back to you while the excitement is fresh.",
                icon: <Zap className="text-yellow-500" size={32} />
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-zinc-900 border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 5. CTA SECTION */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 p-12 md:p-24 text-center">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20 pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to create magic?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether it's a commercial project or a personal milestone, let's discuss how we can bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 hover:gap-5 transition-all duration-300 group"
            >
              Start a Project
              <ArrowRight size={20} className="group-hover:text-cyan-600 transition-colors" />
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default About;