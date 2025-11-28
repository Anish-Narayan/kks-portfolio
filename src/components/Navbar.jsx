import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Portfolio", link: "/portfolio" },
  { label: "Contact", link: "/contact" },
];

const socialLinks = [
  { icon: <Instagram size={20} />, href: "https://instagram.com" },
  { icon: <Twitter size={20} />, href: "https://twitter.com" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
];

// --- MENU ANIMATIONS ---
const menuVariants = {
  closed: { 
    x: "100%",
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 }
  },
  open: { 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  closed: { x: 30, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 
        NOTE: z-[9999] ensures it is above EVERYTHING.
        If this is still hidden, check your App.js for "overflow-hidden" on the main wrapper.
      */}
      <header 
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-[9999] transition-all duration-300 ${
          scrolled || isMobileMenuOpen
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
            : "bg-transparent py-5"
        }`}
      >
        {/* --- LOGO --- */}
        <Link to="/" className="relative z-[10000] block">
          <span className="text-white font-black text-2xl tracking-tighter hover:text-cyan-400 transition-colors">
            KK<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:block relative z-[10000]">
          <ul className="flex gap-8 items-center">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <li key={item.label}>
                  <Link 
                    to={item.link} 
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group py-2 ${
                      isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300 ${isActive ? 'scale-x-100 origin-left' : ''}`}></span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/contact" className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold hover:bg-white hover:text-black transition-all">
                Let's Talk
              </Link>
            </li>
          </ul>
        </nav>

        {/* --- MOBILE TOGGLE BUTTON (Simplified) --- */}
        {/* We use a div wrapper to ensure Flexbox doesn't collapse it */}
        <div className="md:hidden relative z-[10000] flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {/* Direct conditional rendering without animation wrapper to guarantee visibility */}
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[9998] bg-[#0a0a0a] md:hidden flex flex-col px-8 pt-32 h-screen w-full overflow-y-auto"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            {/* Menu Links */}
            <ul className="space-y-6 relative z-10">
              {menuItems.map((item, index) => {
                 const isActive = location.pathname === item.link;
                 return (
                  <motion.li key={item.label} variants={itemVariants}>
                    <Link 
                      to={item.link} 
                      onClick={() => setIsMobileMenuOpen(false)} // Auto-close on click
                      className={`text-4xl font-black tracking-tight flex items-center gap-4 group ${
                        isActive ? "text-cyan-500" : "text-white"
                      }`}
                    >
                      <span className="text-sm font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">0{index + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                 );
              })}
            </ul>

            {/* Footer */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/10 relative z-10"
            >
              <div className="flex gap-6 mb-8">
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.href} className="text-gray-400 hover:text-white p-2 border border-white/10 rounded-full">
                    {social.icon}
                  </a>
                ))}
              </div>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-lg text-cyan-400 font-bold"
              >
                Start a Project <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;