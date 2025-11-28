import FilmmakingContent from "../components/service-details/FilmmakingContent";
import PhotographyContent from "../components/service-details/PhotographyContent";
import EditingContent from "../components/service-details/EditingContent";
import DigitalContent from "../components/service-details/DigitalContent";
import StudioContent from "../components/service-details/StudioContent";

export const servicesData = [
  {
    id: "filmmaking-cinematography",
    title: "Filmmaking & Cinematography",
    icon: "🎥",
    shortDescription: "We craft visual narratives that resonate emotionally and visually.",
    description: "From concept to screen, we breathe life into stories. Our filmmaking approach combines Hollywood-level cinematography techniques with compelling storytelling.",
    tags: ["Narrative Direction", "4K/8K Cinema", "Drone Aerials", "Scriptwriting"],
    component: FilmmakingContent,
    // Valid: Cinema Camera Set
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1925",
  },
  {
    id: "photography",
    title: "Photography",
    icon: "📸",
    shortDescription: "Capturing moments with editorial precision and artistic flair.",
    description: "Frozen in time, etched in light. Our photography services go beyond simple snapshots. Whether it is high-fashion editorial or intricate product macro-photography.",
    tags: ["Editorial & Fashion", "Product Styling", "Corporate Headshots", "Event Coverage"],
    component: PhotographyContent,
    // Valid: Camera Lens Close-up
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1634",
  },
  {
    id: "editing-post-production",
    title: "Editing & Post-Production",
    icon: "🎬",
    shortDescription: "Where raw footage transforms into a polished masterpiece.",
    description: "The magic happens in the edit. Our post-production suite is where narrative rhythm is found, colors are graded to perfection, and soundscapes are engineered.",
    tags: ["Color Grading", "VFX & Motion Graphics", "Sound Design", "DCP Mastering"],
    component: EditingContent,
    // UPDATED: Your specific link (resolution increased for Hero quality)
    imageUrl: "https://images.unsplash.com/photo-1574717024239-25253f4ef40a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: "digital-content-creation",
    title: "Digital Content Creation",
    icon: "📲",
    shortDescription: "Scroll-stopping content designed for the viral age.",
    description: "In an era of infinite scroll, we make you stop. Our digital content team specializes in short-form video (Reels/Shorts) and engaging social graphics.",
    tags: ["Reels & Shorts", "Social Strategy", "Brand Animation", "Influencer Campaigns"],
    component: DigitalContent,
    // Valid: Mobile Content Creation vibe
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1674",
  },
  {
    id: "studio-services-coimbatore",
    title: "Studio Services (Coimbatore)",
    icon: "🎙️",
    shortDescription: "A state-of-the-art creative sanctuary for artists and brands.",
    description: "Our Coimbatore facility is a playground for creators. Equipped with acoustically treated spaces, green screens, and professional lighting grids.",
    tags: ["Green Screen", "Acoustic Pods", "Equipment Rental", "Set Construction"],
    component: StudioContent,
    // Valid: Studio Lighting Setup
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2070",
  }
];