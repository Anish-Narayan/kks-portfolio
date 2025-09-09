// We need to import the icons here, as this file now defines the component to be rendered.
import React from 'react';
import { FaReact, FaSearchDollar, FaPenNib } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export const projectData = [
  {
    icon: <FaReact/>,
    title: 'Interactive Portfolio Hub',
    description: 'A dynamic, animated portfolio built with React and Framer Motion to create a memorable user experience.',
    tags: ['React', 'Framer Motion', 'UI/UX', 'Tailwind CSS'],
  },
  {
    icon: <FaSearchDollar />,
    title: 'SEO & Marketing Dashboard',
    description: 'A data visualization tool for tracking keyword performance and campaign ROI for digital marketing clients.',
    tags: ['Data Viz', 'SEO', 'Marketing', 'API Integration'],
  },
  {
    icon: <SiNextdotjs />,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site using Next.js for server-side rendering, ensuring fast load times and SEO.',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'Full-stack'],
  },
  {
    icon: <FaPenNib />,
    title: 'Brand Identity & Design System',
    description: 'Developed a comprehensive design system and brand guide for a SaaS startup, ensuring visual consistency.',
    tags: ['Branding', 'Figma', 'Design System', 'UI Design'],
  },
  {
    icon: <SiTailwindcss />,
    title: 'Utility-First Component Library',
    description: 'Created a reusable component library based on Tailwind CSS, accelerating development for future projects.',
    tags: ['Web Development', 'Tailwind CSS', 'Components'],
  },
];