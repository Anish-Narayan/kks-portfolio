import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, CheckCircle } from "lucide-react";
import Threads from "../gsap/Threads";

function Contact() {
  const [focused, setFocused] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Handle Input Focus for floating labels
  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused(null);

  // Handle Form Submission (Simulated)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen relative bg-[#050505] text-white selection:bg-cyan-500 selection:text-black overflow-hidden flex items-center justify-center">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-black/80 to-[#050505] pointer-events-none" />

      {/* --- MAIN CONTAINER --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 lg:py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Info & Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="text-cyan-500 font-mono text-sm uppercase tracking-widest mb-4">Get in Touch</h5>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S START <br />
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">PROJECT.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
              Have a vision? We’d love to hear about it. Send us a message and we’ll get back to you within 24 hours.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Studio Location</h4>
                  <p className="text-gray-400">397, Ramasamy nagar, Pangujamil Road, Ramanathapuram, Coimbatore-641045</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email Us</h4>
                  <p className="text-gray-400">hello@kksstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full border border-white/10">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-gray-400">+91 99406 32121</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex gap-4">
              {[<Instagram />].map((icon, i) => (
                <a key={i} href="https://www.instagram.com/kks.pixel?igsh=MXQ2aWc5aDA5NHhycQ==" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.03] backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Success Overlay */}
            {isSent && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-20 bg-[#050505]/95 flex flex-col items-center justify-center text-center p-8"
              >
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll be in touch with you shortly.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name Input */}
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focused === "name" || formData.name ? "-top-6 text-xs text-cyan-500" : "top-3 text-gray-500"
                  }`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="relative pt-4">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focused === "email" || formData.email ? "-top-2 text-xs text-cyan-500" : "top-7 text-gray-500"
                  }`}
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="relative pt-4">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focused === "message" || formData.message ? "-top-2 text-xs text-cyan-500" : "top-7 text-gray-500"
                  }`}
                >
                  Tell us about your project
                </label>
                <textarea 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                disabled={isSubmitting}
                className="w-full mt-4 bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Decor Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none"></div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;