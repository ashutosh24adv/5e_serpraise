export type GalleryCategory =
  | "All"
  | "Leadership & Stewardship"
  | "Team Synergy & GOTEL"
  | "Executive Business Meets"
  | "Experiential Learning Labs";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Leadership & Stewardship" | "Team Synergy & GOTEL" | "Executive Business Meets" | "Experiential Learning Labs";
  location: string;
  year: string;
  caption: string;
  tagline: string;
  aspectRatio: "video" | "square" | "portrait" | "tall";
  useArchFrame?: boolean;
  imageSrc?: string;
  featured?: boolean;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  categories: GalleryCategory[];
  items: GalleryItem[];
}

export const galleryContent: GalleryContent = {
  eyebrow: "PHOTOGRAPHIC ARCHIVE",
  title: "In Practice & In Action.",
  subtitle: "Visual chronicles of experiential learning, leadership alignment, and organizational transformation across two decades.",
  description:
    "Explore moments from our flagship training programs (LILLY, GOTEL, SALAM, COPPTER), semi-outbound team interventions, and executive strategy meets across India and Australia.",
  categories: [
    "All",
    "Leadership & Stewardship",
    "Team Synergy & GOTEL",
    "Executive Business Meets",
    "Experiential Learning Labs",
  ],
  items: [
    {
      id: "gal-1",
      title: "SALAM Leadership Alignment Colloquium",
      category: "Leadership & Stewardship",
      location: "Chennai, India",
      year: "2024",
      caption: "Senior enterprise managers analyzing subordinate readiness and the LAMB behavioral framework.",
      tagline: "Situational Delegation & Stewardship",
      aspectRatio: "video",
      useArchFrame: true,
      featured: true,
    },
    {
      id: "gal-2",
      title: "GOTEL Semi-Outbound Synergy Challenge",
      category: "Team Synergy & GOTEL",
      location: "Bangalore, India",
      year: "2024",
      caption: "Cross-functional engineering and commercial teams engaging in experiential simulations to master the Principle of Synergy.",
      tagline: "People, Process & Profit",
      aspectRatio: "square",
      useArchFrame: false,
    },
    {
      id: "gal-3",
      title: "COPPTER Executive Strategy Confluence",
      category: "Executive Business Meets",
      location: "Melbourne, Australia",
      year: "2023",
      caption: "Executive leaders mapping the 4C Model, core values alignment, and operational growth roadmaps.",
      tagline: "Strategic Roadmap Formulation",
      aspectRatio: "tall",
      useArchFrame: true,
    },
    {
      id: "gal-4",
      title: "Personal Growth Lab (PGL) in Session",
      category: "Experiential Learning Labs",
      location: "Mumbai, India",
      year: "2023",
      caption: "Participants in reflective self-awareness exercises during a 2-day LILLY personal liberation workshop.",
      tagline: "Values, Purpose & Self-Mastery",
      aspectRatio: "portrait",
      useArchFrame: false,
    },
    {
      id: "gal-5",
      title: "Annual Business Meet & Leadership Retreat",
      category: "Executive Business Meets",
      location: "Hyderabad, India",
      year: "2023",
      caption: "Annual enterprise conference uniting strategic retrospectives with outdoor alignment activities.",
      tagline: "Enterprise Cohesion & Vision",
      aspectRatio: "video",
      useArchFrame: false,
      featured: true,
    },
    {
      id: "gal-6",
      title: "Inter-Departmental Synergy Matrix",
      category: "Team Synergy & GOTEL",
      location: "Sydney, Australia",
      year: "2022",
      caption: "Resolving cross-departmental friction points and establishing internal Service Level Agreements (SLAs).",
      tagline: "Cross-Functional Collaboration",
      aspectRatio: "square",
      useArchFrame: true,
    },
    {
      id: "gal-7",
      title: "Assessment Center Behavioral Simulation",
      category: "Experiential Learning Labs",
      location: "Pune, India",
      year: "2022",
      caption: "Multi-rater behavioral simulations and in-basket exercises for high-potential managerial candidates.",
      tagline: "Objective Capability Evaluation",
      aspectRatio: "video",
      useArchFrame: false,
    },
    {
      id: "gal-8",
      title: "Stewardship & Servant Leadership Workshop",
      category: "Leadership & Stewardship",
      location: "Coimbatore, India",
      year: "2021",
      caption: "Facilitated dialogue on purpose-driven stewardship and fostering long-term human legacy in enterprise.",
      tagline: "Leading Through Service",
      aspectRatio: "tall",
      useArchFrame: true,
    },
  ],
};
