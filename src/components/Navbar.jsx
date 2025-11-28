import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import StaggeredMenu from "../gsap/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Portfolio", ariaLabel: "View our portfolio", link: "/portfolio" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Twitter", link: "https://twitter.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="relative z-50 group">
        <span className="text-white font-black text-2xl tracking-tighter group-hover:text-cyan-400 transition-colors duration-300">
          KK<span className="text-cyan-500">.</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 items-center">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <li key={item.label}>
                <Link 
                  to={item.link} 
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group py-2 ${
                    isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Hover Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 origin-right transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left ${isActive ? 'scale-x-100 origin-left' : ''}`}></span>
                </Link>
              </li>
            );
          })}
          
          {/* CTA Button */}
          <li>
            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Let's Talk
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Wrapper */}
      <div className="md:hidden relative z-50">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#ffffff" // White hamburger
          openMenuButtonColor="#ffffff" // White X icon
          changeMenuColorOnOpen={false} 
          colors={["#0a0a0a", "#111111"]} // Dark theme colors for the menu bg
          logoUrl="" 
          accentColor="#06b6d4" // Cyan-500
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
    </header>
  );
}

export default Navbar;