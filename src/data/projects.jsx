import React from 'react';
import { FaReact, FaSearchDollar, FaPenNib } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export const projectData = [
  {
    slug: 'interactive-portfolio-hub', // URL-friendly identifier
    icon: <FaReact />,
    title: 'Interactive Portfolio Hub',
    description: 'A dynamic, animated portfolio built with React and Framer Motion to create a memorable user experience.',
    tags: ['React', 'Framer Motion', 'UI/UX', 'Tailwind CSS'],
    details: 'This project was an exploration into creating fluid, engaging user interfaces. The core challenge was to build a seamless experience using advanced animations, a custom cursor, and physics-based interactions without sacrificing performance. The entire application is architected with reusable components and a centralized data store for easy updates.'
  },
  {
    slug: 'seo-marketing-dashboard',
    icon: <FaSearchDollar />,
    title: 'SEO & Marketing Dashboard',
    description: 'A data visualization tool for tracking keyword performance and campaign ROI for digital marketing clients.',
    tags: ['Data Viz', 'SEO', 'Marketing', 'API Integration'],
    details: 'Built for a marketing agency, this dashboard connects to multiple APIs (Google Analytics, SEMrush) to provide a unified view of campaign performance. The front-end uses Chart.js for interactive graphs, allowing clients to easily understand complex data and make informed decisions about their marketing spend.'
  },
  {
    slug: 'ecommerce-platform',
    icon: <SiNextdotjs />,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site using Next.js for server-side rendering, ensuring fast load times and SEO.',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'Full-stack'],
    details: 'This platform was built from the ground up to be a high-performance, scalable solution for online retailers. It features server-side rendering for optimal SEO, a secure checkout process integrated with Stripe, and a full admin panel for managing products, orders, and customers.'
  },
  // Add slugs and details for your other projects...
];