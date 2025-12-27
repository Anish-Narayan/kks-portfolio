import FilmmakingContent from "../components/service-details/FilmmakingContent";
import PhotographyContent from "../components/service-details/PhotographyContent";
import EditingContent from "../components/service-details/EditingContent";
import DigitalContent from "../components/service-details/DigitalContent";
import StudioContent from "../components/service-details/StudioContent";
import WebsiteDesignContent from "../components/service-details/WebsiteDesignContent";

export const servicesData = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "📈",
    shortDescription: "Powerful digital strategies designed to help businesses stand out and grow.",
    description: "At KK’s Pixel, we build powerful digital strategies that help businesses stand out. From social media marketing and ad campaigns to content creation and brand storytelling, we focus on delivering real growth. Our goal is simple: reach the right audience, build trust, and convert engagement into revenue.",
    tags: [
      "Social Media Management",
      "Content Creation",
      "Social Media Advertising",
      "Brand Building & Strategy",
      "SEO & Online Visibility",
      "Influencer Marketing",
      "Lead Generation & Paid Promotions"
    ],
    component: DigitalContent,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1674",
  },
  {
    id: "photography-videography",
    title: "Photography & Videography",
    icon: "📸",
    shortDescription: "Bringing your vision to life through lighting, motion, and emotion.",
    description: "At KK’s Pixel, we specialize in photography and videography that brings your vision to life. From candid events and pre-wedding shoots to commercial and lifestyle projects, our team focuses on lighting, angles, motion, and emotion to deliver visuals that make a lasting impression.",
    tags: [
      "Event & Wedding Photography",
      "Portrait Photography",
      "Couple Shoots & Videography",
      "Corporate & Branding Photography",
      "Product & Commercial Photography",
      "Event & Wedding Videography",
      "Social Media & Reels Videography",
      "Promotional & Brand Videos"
    ],
    component: PhotographyContent,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1634",
  },
  {
    id: "studio-services",
    title: "Studio Services",
    icon: "🎙️",
    shortDescription: "A full range of creative studio services designed to bring your vision to life.",
    description: "We provide a full range of creative studio services designed to bring your vision to life. From podcast production and model shoots to portrait sessions, portfolio creation, and commercial or product photography, our team focuses on lighting, composition, and storytelling to deliver high-quality visuals. We also specialize in kids and baby photography, capturing the joy and innocence of every moment.",
    tags: [
      "Podcast Production",
      "Portrait Photography",
      "Model Shoots",
      "Portfolio Creation",
      "Commercial Photography",
      "Product Photography",
      "Kids & Baby Photography"
    ],
    component: StudioContent,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "filmmaking",
    title: "Filmmaking",
    icon: "🎥",
    shortDescription: "End-to-end filmmaking services crafted with precision and cinematic quality.",
    description: "We offer end-to-end filmmaking services to bring your creative vision to life. From pre-production planning and storyboarding to post-production editing, SFX, VFX, and sound design, our team ensures every project is crafted with precision and cinematic quality. We also specialize in commercial and corporate ads, creating engaging videos that promote your brand effectively.",
    tags: [
      "Pre-Production Planning & Storyboarding",
      "Production & Direction",
      "Post-Production Editing",
      "Special Effects (SFX)",
      "Visual Effects (VFX)",
      "Sound Design & Mixing",
      "Cinematic Short Films",
      "Music Videos & Promotional Films",
      "Commercial & Corporate Ads"
    ],
    component: FilmmakingContent,
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1925",
  },
  {
    id: "editing-post-production",
    title: "Editing & Post-Production",
    icon: "🎬",
    shortDescription: "Transforming raw footage into polished, professional, and engaging content.",
    description: "Our Editing & Post-Production services transform raw footage and photos into polished, professional content. We specialize in video editing, reel creation, and album design, ensuring every project is visually appealing and engaging. Our team also provides color grading, motion graphics, audio enhancement, and special effects integration.",
    tags: [
      "Video Editing",
      "Reel & Short-Form Video Editing",
      "Album Design & Layout",
      "Color Grading & Correction",
      "Motion Graphics & Animation",
      "Audio Enhancement & Sound Editing",
      "Corporate & Commercial Video Editing",
      "Event Highlight Reels",
      "Social Media Content Editing"
    ],
    component: EditingContent,
    imageUrl: "https://images.unsplash.com/photo-1574717024239-25253f4ef40a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "website-design",
    title: "Website Design Services",
    icon: "🌐",
    shortDescription: "Modern, responsive, and visually engaging websites that build a strong online presence.",
    description: "At KK’s Pixel, we design modern, responsive, and visually engaging websites that help your brand stand out. From layout planning and UI/UX design to content placement and mobile optimization, we create websites that look great and perform even better. Whether you need a business website, portfolio site, or landing page, we focus on clean design and fast performance.",
    tags: [
      "Business Website Design",
      "Portfolio Website Design",
      "Landing Page Design",
      "UI/UX Layout Design",
      "Responsive & Mobile-Friendly Design",
      "Content Integration & Structuring",
      "Basic SEO Setup",
      "Website Redesign & Makeovers",
      "Branding & Visual Identity Design",
      "Maintenance & Updates"
    ],
    component: WebsiteDesignContent,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
  },
];