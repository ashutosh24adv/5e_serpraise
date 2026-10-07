export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
  children?: NavDropdownItem[];
}

export interface CredibilityItem {
  metric: string;
  label: string;
  description?: string;
}

export interface FiveEPillar {
  code: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  colorScheme: "navy" | "vermilion" | "brass" | "sand-navy" | "sand-outline";
  iconName: string;
}

export interface HeritageTimelineMilestone {
  stage: string;
  yearOrEra: string;
  title: string;
  description: string;
}

export interface PhilosophyPillar {
  title: string;
  headline: string;
  statement: string;
  description: string;
}

export interface OrganizationClient {
  name: string;
  category: string;
  engagement: string;
  establishedCohort?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  establishedYear: number;
  contactEmail: string;
  locations: string[];
  navItems: NavItem[];
  credibility: CredibilityItem[];
  fiveEPillars: FiveEPillar[];
  timeline: HeritageTimelineMilestone[];
  organizationsServed: OrganizationClient[];
  purpose: {
    vision: {
      title: string;
      meaning: string;
      description: string;
    };
    mission: {
      title: string;
      tagline: string;
      pillars: PhilosophyPillar[];
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "5e Serpraise",
  tagline: "Enriching people. Strengthening organizations.",
  shortDescription:
    "A comprehensive Human Resources, strategy and training organization helping organizations develop people, strengthen teams and build organizational capability.",
  fullDescription:
    "5e Serpraise is an established corporate HR, training, organizational development and consulting organization founded in 2003. We partner with progressive enterprises across India and Australia to build human excellence and institutional capability.",
  establishedYear: 2003,
  contactEmail: "contact@5eserpraise.com",
  locations: ["India (Est. 2003)", "Australia"],
  navItems: [
    { label: "Training (E1)", href: "/training", isPrimary: true },
    { label: "Custom Program (E1)", href: "/custom-programs", isPrimary: true },
    { label: "OD Projects (E2)", href: "/od-projects", isPrimary: true },
    { label: "5E Architecture", href: "/5e-architecture" },
    { label: "Clients", href: "/clients" },
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "Mission & Vision", href: "/about#mission-vision" },
        { label: "Team", href: "/about#team" },
        { label: "FAQ", href: "/about#faq" },
        { label: "Heritage", href: "/about#heritage" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
  ],
  credibility: [
    {
      metric: "2003",
      label: "Established in India",
      description: "Over two decades of trusted organizational consulting.",
    },
    {
      metric: "100+",
      label: "Corporate Clients",
      description: "Delivering sustainable impact across diverse industries.",
    },
    {
      metric: "India → Australia",
      label: "Global Footprint",
      description: "Cross-border expertise in capability building.",
    },
    {
      metric: "Repeat Orders",
      label: "Long-Term Partnerships",
      description: "Enduring relationships built on measurable outcomes.",
    },
  ],
  fiveEPillars: [
    {
      code: "E1",
      number: "01",
      name: "EDUCATE",
      tagline: "Develop people.",
      description: "Flagship experiential training frameworks (LILLY, GOTEL, SALAM, COPPTER) targeting personal purpose, team alignment, leadership, and business results.",
      href: "/training",
      colorScheme: "navy",
      iconName: "BookOpen",
    },
    {
      code: "E2",
      number: "02",
      name: "ENRICH",
      tagline: "Strengthen organizations.",
      description: "Comprehensive OD interventions spanning culture building, assessment centers, appraisal architectures, and ongoing SME retainerships.",
      href: "/od-projects",
      colorScheme: "vermilion",
      iconName: "Layers",
    },
    {
      code: "E3",
      number: "03",
      name: "ENJOY",
      tagline: "Create meaningful experiences.",
      description: "Transformational annual business meets, semi-outbound challenges, and experiential leadership retreats fostering high team cohesion.",
      href: "/od-projects#interventions",
      colorScheme: "brass",
      iconName: "Compass",
    },
    {
      code: "E4",
      number: "04",
      name: "EMPATHISE",
      tagline: "Serve communities.",
      description: "Workplace empathy, counseling, conflict de-escalation, mentoring, and community-oriented social development initiatives.",
      href: "/custom-programs",
      colorScheme: "sand-navy",
      iconName: "Heart",
    },
    {
      code: "E5",
      number: "05",
      name: "ENERGISE",
      tagline: "Create purpose.",
      description: "Custom-made organizational training programs in communication, sales, performance enhancement, and the strategic CASE of a HR Manager.",
      href: "/custom-programs",
      colorScheme: "sand-outline",
      iconName: "Sparkles",
    },
  ],
  timeline: [
    {
      stage: "01",
      yearOrEra: "2003",
      title: "FOUNDATION",
      description: "Established in India as a purpose-driven corporate training, HR, and organizational development consulting firm.",
    },
    {
      stage: "02",
      yearOrEra: "EXPANSION",
      title: "INDIA ENTERPRISE",
      description: "Partnering with over 100 corporate clients across manufacturing, IT, retail, healthcare, and financial services with enduring repeat orders.",
    },
    {
      stage: "03",
      yearOrEra: "GLOBAL",
      title: "AUSTRALIA",
      description: "Extending cross-border capability building, leadership matrix behavior (LAMB), and OD advisory into Australian business ecosystems.",
    },
    {
      stage: "04",
      yearOrEra: "PRESENT",
      title: "TODAY",
      description: "Delivering holistic corporate transformation grounded in the five pillars of Educate, Enrich, Enjoy, Empathise, and Energise.",
    },
  ],
  organizationsServed: [
    {
      name: "Precision Manufacturing & Heavy Engineering",
      category: "Manufacturing",
      engagement: "Culture Transformation & Leadership Workshops",
      establishedCohort: "India & Australia",
    },
    {
      name: "Information Technology & Enterprise Cloud",
      category: "Technology",
      engagement: "GOTEL & Team Synergy Matrices",
      establishedCohort: "Global Delivery Hubs",
    },
    {
      name: "Banking & Financial Services (BFSI)",
      category: "Financial Services",
      engagement: "SALAM Stewardship & Strategic HR Interventions",
      establishedCohort: "Enterprise BFSI",
    },
    {
      name: "Healthcare, Hospitals & Pharmaceuticals",
      category: "Healthcare & Life Sciences",
      engagement: "Values Alignment, Empathy & Assessment Centers",
      establishedCohort: "Clinical & Pharma Hubs",
    },
    {
      name: "Automotive, Auto-Components & Mobility",
      category: "Automotive",
      engagement: "COPPTER Process Confluence & Frontline Leadership",
      establishedCohort: "Tier-1 Industrial Hubs",
    },
    {
      name: "Infrastructure, EPC & Energy Enterprises",
      category: "Infrastructure",
      engagement: "Performance Appraisal Architecture & Policy Formulation",
      establishedCohort: "Major Infrastructure Projects",
    },
    {
      name: "Retail, Consumer Brands & Supply Chain",
      category: "Retail & Consumer",
      engagement: "Sales Transformation & Employee Engagement Diagnostics",
      establishedCohort: "Omnichannel Networks",
    },
    {
      name: "Professional Services, Legal & Consulting",
      category: "Corporate Services",
      engagement: "Competency Mapping & 360-Degree Feedback",
      establishedCohort: "Advisory & Corporate Practices",
    },
  ],
  purpose: {
    vision: {
      title: "Service + Praise",
      meaning: "Serpraise = Service + Praise",
      description:
        "True organizational leadership stems from genuine service and celebrating human achievement with sincere praise.",
    },
    mission: {
      title: "Enriching Everyone",
      tagline: "A holistic commitment to four essential dimensions of growth",
      pillars: [
        {
          title: "Intellectually",
          headline: "INTELLECTUALLY.",
          statement: "Sharpening capability.",
          description:
            "Sharpening critical thinking, strategic depth, and practical problem-solving capabilities across all organizational tiers.",
        },
        {
          title: "Financially",
          headline: "FINANCIALLY.",
          statement: "Creating enterprise value.",
          description:
            "Driving operational productivity, cost-effective execution, and measurable bottom-line value.",
        },
        {
          title: "Emotionally",
          headline: "EMOTIONALLY.",
          statement: "Fostering trust and synergy.",
          description:
            "Nurturing empathy, self-awareness, team cohesion, and psychological resilience.",
        },
        {
          title: "Spiritually",
          headline: "SPIRITUALLY.",
          statement: "Uncovering higher life purpose.",
          description:
            "Fostering purpose-driven alignment, authentic stewardship values, and lasting human legacy.",
        },
      ],
    },
  },
};

