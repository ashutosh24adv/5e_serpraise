export interface AboutSubnavItem {
  id: string;
  label: string;
}

export interface MissionDimension {
  title: string;
  headline: string;
  statement: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  qualifications: string[];
  corporateExperience: string[];
  expertise: string[];
  associations: string[];
  quote?: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface HeritageMilestone {
  stage: string;
  yearOrEra: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export interface HeritagePillar {
  label: string;
  value: string;
  description: string;
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  subnav: AboutSubnavItem[];
  missionVision: {
    eyebrow: string;
    sectionTitle: string;
    mission: {
      title: string;
      tagline: string;
      description: string;
      dimensions: MissionDimension[];
    };
    vision: {
      title: string;
      tagline: string;
      description: string;
      principles: {
        title: string;
        description: string;
      }[];
    };
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  heritage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    pillars: HeritagePillar[];
    milestones: HeritageMilestone[];
    commitments: string[];
  };
}

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "ABOUT 5E SERPRAISE",
    title: "About 5e Serpraise.",
    subtitle: "Two decades of verified practice in human excellence and organizational capability.",
    description:
      "Founded in 2003 in India and active in Australia, 5e Serpraise is a comprehensive Human Resources, corporate training, and organizational development consulting firm. We partner with progressive enterprises to develop people, strengthen teams, and build enduring institutional capability.",
  },
  subnav: [
    { id: "mission-vision", label: "Mission & Vision" },
    { id: "team", label: "Team" },
    { id: "faq", label: "FAQ" },
    { id: "heritage", label: "Heritage" },
  ],
  missionVision: {
    eyebrow: "PHILOSOPHICAL FOUNDATION",
    sectionTitle: "Mission & Vision",
    mission: {
      title: "Enriching Everyone",
      tagline: "A holistic commitment across four essential dimensions of growth",
      description:
        "Our mission is to enrich every individual and organization we partner with across intellectual, financial, emotional, and spiritual dimensions—driving sustainable capability and holistic well-being.",
      dimensions: [
        {
          title: "Intellectually",
          headline: "INTELLECTUALLY",
          statement: "Sharpening capability & strategic depth.",
          description:
            "Sharpening critical thinking, strategic depth, and practical problem-solving capabilities across all organizational tiers.",
        },
        {
          title: "Financially",
          headline: "FINANCIALLY",
          statement: "Creating enterprise & personal value.",
          description:
            "Driving operational productivity, cost-effective execution, and measurable bottom-line value for both enterprises and professionals.",
        },
        {
          title: "Emotionally",
          headline: "EMOTIONALLY",
          statement: "Fostering trust, synergy & resilience.",
          description:
            "Nurturing empathy, self-awareness, team cohesion, psychological safety, and emotional resilience across teams.",
        },
        {
          title: "Spiritually",
          headline: "SPIRITUALLY",
          statement: "Uncovering higher purpose & stewardship.",
          description:
            "Fostering purpose-driven alignment, authentic stewardship values, and a legacy of meaningful contribution to community and society.",
        },
      ],
    },
    vision: {
      title: "Service + Praise",
      tagline: "Serpraise = Service + Praise",
      description:
        "True organizational leadership stems from genuine service and celebrating human achievement with sincere praise.",
      principles: [
        {
          title: "Praise Worthy Client Services",
          description:
            "Delivering high-integrity, impactful corporate consulting and training interventions that earn enduring client trust and sincere commendation.",
        },
        {
          title: "Service to Community as Praise to the Almighty",
          description:
            "Viewing our service to organizations and community development as a heartfelt expression of praise and stewardship to the Almighty.",
        },
      ],
    },
  },
  team: {
    eyebrow: "LEADERSHIP & PRACTICE",
    title: "Our Leadership.",
    subtitle:
      "Guided by experienced practitioners dedicated to purposeful corporate capability and human transformation.",
    members: [
      {
        id: "l-selvam-george",
        name: "L. Selvam George",
        role: "Chairman & Prime Servant",
        title: "Chairman & Prime Servant, 5e Serpraise",
        bio: "L. Selvam George has pioneered 5e Serpraise since its founding in 2003. Combining an engineering precision with deep human resource strategy, he has guided corporate transformations, leadership matrix behaviors, and organizational culture building across India and Australia.",
        qualifications: [
          "Post Graduate in Aeronautical Engineering (MIT, Chennai)",
          "Human Resource Management (XLRI, Jamshedpur)",
          "ICF Certified Coach (International Coaching Federation)",
        ],
        corporateExperience: [
          "Titan Watches",
          "TVS Suzuki",
          "3M India",
        ],
        expertise: [
          "Human Resource Strategy & Governance",
          "Business Development & Enterprise Growth",
          "Experiential Learning & Adult Andragogy",
          "Leadership Matrix Alignment (LAMB Framework)",
          "Organizational Culture & Assessment Centers",
        ],
        associations: [
          "Active across leading professional HR, management, and coaching associations",
          "Dedicated volunteer for social stewardship and community empowerment initiatives",
        ],
        quote:
          "Helping people to identify their ultimate purpose in life and enable them to assertively follow the same towards success and happiness.",
      },
    ],
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Common Questions & Inquiries.",
    subtitle:
      "Essential details regarding 5e Serpraise's consulting methodology, program offerings, and engagement model.",
    items: [
      {
        id: "faq-1",
        question: "What does the name '5e Serpraise' represent?",
        answer:
          "The name unites two foundational ideas. 'Serpraise' combines Service and Praise—the principle that true organizational leadership stems from genuine service and celebrating human contribution with sincere praise. The '5E' represents our holistic capability framework: Educate (E1), Enrich (E2), Enjoy (E3), Empathise (E4), and Energise (E5).",
        category: "Philosophy",
      },
      {
        id: "faq-2",
        question: "Where are 5e Serpraise's operations and clients located?",
        answer:
          "5e Serpraise was established in 2003 in India and has expanded its footprint into Australia. Over two decades, we have partnered with 100+ corporate clients across manufacturing, technology, BFSI, healthcare, infrastructure, automotive, and professional services.",
        category: "Operations",
      },
      {
        id: "faq-3",
        question: "What is the core distinction between Training (E1) and OD Projects (E2)?",
        answer:
          "Training (E1 &bull; Educate) focuses on individual, team, and executive learning through flagship experiential programs like LILLY (Personal Purpose), GOTEL (Team Alignment), SALAM (Leadership Stewardship), and COPPTER (Executive Business Growth). OD Projects (E2 &bull; Enrich) are systemic interventions addressing organizational culture, assessment centers, performance appraisal systems, HR policy manuals, and retainership advisory.",
        category: "Programs",
      },
      {
        id: "faq-4",
        question: "How are custom-made programs (E1) developed for client organizations?",
        answer:
          "Custom programs are structured around our 4-stage diagnostic methodology: 01 Understand (stakeholder discovery & gap analysis), 02 Design (contextualized curriculum and practical toolkits), 03 Deliver (experiential adult learning), and 04 Measure (post-training evaluation and behavior shift tracking).",
        category: "Methodology",
      },
      {
        id: "faq-5",
        question: "What is the E2 Retainership model for Small and Medium Enterprises (SMEs)?",
        answer:
          "E2 Retainership is an ongoing strategic advisory engagement tailored for growing SMEs. It provides direct, continuous access to seasoned OD practitioners to build robust HR systems, institutionalize company culture, and mentor second-line leaders without the overhead of building large internal consulting teams.",
        category: "Consulting",
      },
      {
        id: "faq-6",
        question: "How does 5e Serpraise ensure measurable outcomes from training interventions?",
        answer:
          "We utilize structured pre- and post-program assessments, behavioral questionnaires, Personal Growth Labs (PGL), and post-workshop implementation roadmaps that track skill application and measurable workplace performance over time.",
        category: "Impact",
      },
    ],
  },
  heritage: {
    eyebrow: "ORGANIZATIONAL LEGACY",
    title: "Two Decades of Purposeful Growth.",
    subtitle:
      "A steadfast journey of capability building, client partnerships, and community enrichment since 2003.",
    intro:
      "From its inception in India in 2003 to cross-border engagements in Australia, 5e Serpraise has stood for principled HR consulting, experiential learning, and long-term organizational transformation.",
    pillars: [
      {
        label: "Established",
        value: "2003",
        description: "Founded in India as a dedicated HR & OD consulting firm.",
      },
      {
        label: "Corporate Clients",
        value: "100+",
        description: "Enduring partnerships across diverse industrial sectors.",
      },
      {
        label: "Global Footprint",
        value: "India → Australia",
        description: "Cross-border capability building and leadership advisory.",
      },
      {
        label: "Client Loyalty",
        value: "Repeat Orders",
        description: "Long-term relationships built on measurable value and trust.",
      },
    ],
    milestones: [
      {
        stage: "01",
        yearOrEra: "2003",
        title: "FOUNDATION IN INDIA",
        subtitle: "A Purpose-Driven Beginning",
        description:
          "Founded with the vision of uniting Service and Praise. Established core frameworks for experiential training and systemic HR diagnostics.",
        keyPoints: [
          "Formulation of the 5E holistic framework (Educate, Enrich, Enjoy, Empathise, Energise)",
          "Development of flagship training programs (LILLY, GOTEL, SALAM, COPPTER)",
          "Establishment of baseline HR consulting and policy formulation practices",
        ],
      },
      {
        stage: "02",
        yearOrEra: "2008 – 2015",
        title: "ENTERPRISE EXPANSION",
        subtitle: "Scaling Cross-Sector Interventions",
        description:
          "Partnering with over 100 corporate clients across heavy engineering, IT, BFSI, automotive, and healthcare sectors with enduring repeat engagements.",
        keyPoints: [
          "Implementation of large-scale Assessment Centers and 360-Degree Feedback systems",
          "Institutionalization of E2 Retainership models for rapidly growing SMEs",
          "Proven client retention through customized, cost-effective solutions",
        ],
      },
      {
        stage: "03",
        yearOrEra: "2016 – 2022",
        title: "GLOBAL OPERATIONS",
        subtitle: "Extending into Australia",
        description:
          "Expanding corporate training and OD advisory into Australian business ecosystems, bridging cross-cultural leadership practices.",
        keyPoints: [
          "Introduction of the Leadership Aligning Matrix Behavior (LAMB) framework internationally",
          "Cross-border executive coaching and strategic HR alignment",
          "Deepened community engagement and purposeful mentoring initiatives",
        ],
      },
      {
        stage: "04",
        yearOrEra: "PRESENT & BEYOND",
        title: "HOLISTIC TRANSFORMATION",
        subtitle: "Enduring Capability & Legacy",
        description:
          "Continuing to enrich individuals and organizations intellectually, financially, emotionally, and spiritually with modern and agile methodologies.",
        keyPoints: [
          "Integrated 5E Architecture combining digital tools with experiential learning",
          "Dedicated focus on organizational culture, psychological safety, and stewardship",
          "Unwavering commitment to community development and human well-being",
        ],
      },
    ],
    commitments: [
      "Customized, cost-effective organizational solutions tailored to exact client scale",
      "Stewardship-driven consulting that puts people and genuine service first",
      "Enduring client partnerships verified by multi-year repeat engagements",
      "Active dedication to community development and social enrichment",
    ],
  },
};
