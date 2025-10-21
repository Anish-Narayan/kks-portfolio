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
    description: "...", // Your description here
    component: FilmmakingContent,
    imageUrl: "https://images.unsplash.com/photo-1578845425729-54f4b51829cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "photography",
    title: "Photography",
    icon: "📸",
    description: "...", // Your description here
    component: PhotographyContent,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
  },
  {
    id: "editing-post-production",
    title: "Editing & Post-Production",
    icon: "🎬",
    description: "...", // Your description here
    component: EditingContent,
    imageUrl: "https://images.unsplash.com/photo-1574717537233-5c726a454529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "digital-content-creation",
    title: "Digital Content Creation",
    icon: "📲",
    description: "...", // Your description here
    component: DigitalContent,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  },
  {
    id: "studio-services-coimbatore",
    title: "Studio Services (Coimbatore)",
    icon: "🎙️",
    description: "...", // Your description here
    component: StudioContent,
    imageUrl: "https://images.unsplash.com/photo-1603412534029-0d354d855755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  }
];