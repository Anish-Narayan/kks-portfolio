import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Added Linkedin to the imports
import { Send, MapPin, Phone, Mail, Instagram, Linkedin, CheckCircle, XCircle, Loader2 } from "lucide-react";
import Threads from "../gsap/Threads";

const MemoizedThreads = memo(Threads);

function Contact() {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const WEB3FORMS_ACCESS_KEY = "2b02edd5-9b4f-4365-8e67-1acedfa8902b"; 

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const object = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: "KK's Pixel Portfolio",
      subject: `New Lead: ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(object),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <MemoizedThreads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/80 to-[#050505] pointer-events-none" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-cyan-500"></span>
              <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest">Available Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
              LET'S <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">TALK.</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light mb-12 max-w-md leading-relaxed">
              Have an idea for a shoot or a film? We're ready to bring it to life. Reach out and let's start the journey.
            </p>

            <div className="space-y-6">
              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Inquiries</h4>
                  <p className="text-gray-400">contact@kkspixel.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                  <p className="text-gray-400 underline decoration-white/10 hover:decoration-blue-400 transition-all cursor-pointer">
                    <a href="https://www.linkedin.com/company/kks-pixel" target="_blank" rel="noreferrer">KK's Pixel</a>
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-purple-500/50 transition-all duration-500">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Phone</h4>
                  <p className="text-gray-400">+91 99406 32121</p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS ROW */}
            <div className="mt-12 flex gap-4">
              <a 
                href="https://instagram.com/kks.pixel" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/kks-pixel" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.02] backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative min-h-[520px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                      <CheckCircle size={48} className="text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-gray-400 max-w-xs mx-auto">Thanks for reaching out! We will get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              ) : status === "error" ? (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-4"
                >
                  <XCircle size={64} className="text-red-500 mx-auto" />
                  <h3 className="text-2xl font-bold">Something went wrong</h3>
                  <p className="text-gray-400">Please try again or email us directly.</p>
                  <button onClick={() => setStatus("idle")} className="text-cyan-400 underline pt-4">Try Again</button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="relative">
                    <label className={`absolute left-0 transition-all duration-300 ${focused === "name" || formData.name ? "-top-6 text-xs text-cyan-400" : "top-2 text-gray-500"}`}>Full Name</label>
                    <input 
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => handleFocus("name")} onBlur={handleBlur}
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-0 transition-all duration-300 ${focused === "email" || formData.email ? "-top-6 text-xs text-cyan-400" : "top-2 text-gray-500"}`}>Email Address</label>
                    <input 
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => handleFocus("email")} onBlur={handleBlur}
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-0 transition-all duration-300 ${focused === "msg" || formData.message ? "-top-6 text-xs text-cyan-400" : "top-2 text-gray-500"}`}>How can we help?</label>
                    <textarea 
                      rows="4" required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => handleFocus("msg")} onBlur={handleBlur}
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-cyan-500 resize-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full mt-4 bg-white text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 group"
                  >
                    {status === "sending" ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        Send Message 
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;