import React from "react";
import { Layout, Smartphone, Search, Globe } from "lucide-react";

export default function WebsiteDesignContent() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Website Design Services</h3>
        <p className="text-gray-300">
          At KK’s Pixel, we design modern, responsive, and visually engaging websites that help your brand stand out. From layout planning and UI/UX design to content placement and mobile optimization, we create websites that look great and perform even better. Whether you need a business website, portfolio site, or landing page, we focus on clean design, smooth user experience, and fast performance to ensure your online presence is strong and professional.        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-blue-500">
          <Layout className="text-blue-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">UI/UX Layout Design</h4>
          <p className="text-sm text-gray-400 mt-2">User-centric design focusing on intuitive navigation and clean visual storytelling.</p>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-purple-500">
          <Smartphone className="text-purple-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Responsive Optimization</h4>
          <p className="text-sm text-gray-400 mt-2">Ensuring your site looks and functions perfectly across all mobile and desktop devices.</p>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-amber-500">
          <Search className="text-amber-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Basic SEO Setup</h4>
          <p className="text-sm text-gray-400 mt-2">Optimizing site structure and content integration for better search engine visibility.</p>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-2xl border-l-4 border-pink-500">
          <Globe className="text-pink-500 mb-2" size={28} />
          <h4 className="text-lg font-bold text-white">Maintenance & Makeovers</h4>
          <p className="text-sm text-gray-400 mt-2">Ongoing updates and redesigns to keep your digital presence strong and modern.</p>
        </div>
      </div>
    </div>
  );
}