export interface CustomProgramItem {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
}

export interface CustomCategory {
  number: string;
  title: string;
  summary: string;
  programs: CustomProgramItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const customCategories: CustomCategory[] = [
  {
    number: "01",
    title: "COMMUNICATION",
    summary: "Clear, authoritative, and persuasive business communication across all stakeholder tiers.",
    programs: [
      {
        title: "Assertive Communication",
        subtitle: "Confidence, Clarity & Professional Boundaries",
        description: "Equips professionals to express views with confidence, listen actively, and manage tough conversations with tact and conviction.",
        tags: ["Executive Presence", "Constructive Dialogue", "Interpersonal Skills"],
      },
      {
        title: "Powerful Presentations",
        subtitle: "Storytelling, Structure & High-Impact Delivery",
        description: "Mastering narrative structure, slide simplicity, body language, and voice modulation to influence audiences and drive decisions.",
        tags: ["Public Speaking", "Pitching", "Visual Storytelling"],
      },
    ],
  },
  {
    number: "02",
    title: "PERFORMANCE",
    summary: "Systematic problem-solving, decisive action, and productivity enhancement.",
    programs: [
      {
        title: "Performance Enhancement",
        subtitle: "Optimizing Focus, Habits & Operational Output",
        description: "Strategies and frameworks to eliminate bottlenecks, boost individual productivity, and establish personal accountability metrics.",
        tags: ["Productivity", "Execution", "Goal Alignment"],
      },
      {
        title: "Problem Solving & Decision Making",
        subtitle: "Root Cause Analysis & Rational Decision Models",
        description: "Structured toolkits (Fishbone, 5-Whys, Decision Matrix) to dissect complex workplace challenges and choose high-leverage solutions.",
        tags: ["Critical Thinking", "Risk Assessment", "Analytical Agility"],
      },
    ],
  },
  {
    number: "03",
    title: "CUSTOMER & SALES",
    summary: "Client-centric mindset, strategic account expansion, and consultative enterprise sales.",
    programs: [
      {
        title: "Customer Centricity",
        subtitle: "Customer Experience & Service Culture",
        description: "Instilling an internal and external customer-first mindset to elevate retention, brand loyalty, and delightful service touchpoints.",
        tags: ["CX Excellence", "Client Empathy", "Service Standards"],
      },
      {
        title: "Key Account Management",
        subtitle: "Strategic Account Growth & Relationship Mapping",
        description: "Nurturing enterprise relationships, identifying cross-sell avenues, and safeguarding critical organizational revenue streams.",
        tags: ["Account Planning", "Stakeholder Mapping", "Retention"],
      },
      {
        title: "B2B Sales",
        subtitle: "Consultative Selling & High-Value Deal Closure",
        description: "End-to-end B2B sales lifecycle: value proposition articulation, handling complex objections, negotiating terms, and closing contracts.",
        tags: ["Pipeline Velocity", "Value Selling", "Negotiation"],
      },
    ],
  },
  {
    number: "04",
    title: "LEADERSHIP & PEOPLE",
    summary: "Developing emotional intelligence, conflict agility, coaching capability, and mentoring.",
    programs: [
      {
        title: "From Conflict to Collaboration",
        subtitle: "De-escalation & Synergistic Problem-Solving",
        description: "Transforming workplace friction into creative breakthroughs through empathy, psychological safety, and collaborative problem solving.",
        tags: ["Conflict Management", "Team Synergy", "Mediation"],
      },
      {
        title: "Coaching",
        subtitle: "Empowering Others through Reflective Inquiries",
        description: "Practical coaching models (GROW, active listening, incisive questioning) to unlock individual potential without micromanaging.",
        tags: ["GROW Framework", "Talent Growth", "Active Listening"],
      },
      {
        title: "Mentoring",
        subtitle: "Guiding Professional Growth & Wisdom Transfer",
        description: "Establishing structured mentor-mentee relationships to cultivate next-generation leaders and preserve institutional wisdom.",
        tags: ["Knowledge Transfer", "Career Guidance", "Leadership Pipeline"],
      },
      {
        title: "Counseling",
        subtitle: "Workplace Empathy, Wellbeing & Supportive Guidance",
        description: "Equipping managers with the emotional intelligence and boundary awareness needed to support team members through personal and professional distress.",
        tags: ["Emotional Support", "Workplace Wellbeing", "Compassionate Leadership"],
      },
    ],
  },
  {
    number: "05",
    title: "HR",
    summary: "Institutionalizing strategic HR practices, interviewing rigour, and facilitator excellence.",
    programs: [
      {
        title: "Competency Based Interviewing",
        subtitle: "Behavioral Event Interviewing (BEI) & STAR Method",
        description: "Structured evaluation frameworks to identify top talent accurately, minimize hiring bias, and ensure high cultural alignment.",
        tags: ["STAR Framework", "Talent Acquisition", "Behavioral Analysis"],
      },
      {
        title: "Train the Trainer",
        subtitle: "Instructional Design, Facilitation & Adult Learning",
        description: "Empowering internal subject matter experts to design engaging curricula, facilitate dynamic workshops, and evaluate learning ROI.",
        tags: ["Facilitation Skills", "Instructional Design", "Workshop Delivery"],
      },
      {
        title: "CASE of a HR Manager",
        subtitle: "Change Agent, Administrative Expert, Strategic Thinker & Employee Champion",
        description: "A comprehensive capability-building masterclass for HR professionals to transcend routine administration and become indispensable strategic business partners.",
        tags: ["Change Agent", "Strategic HR", "Employee Champion", "Administrative Expert"],
      },
    ],
  },
];

export const customEngagementProcess: ProcessStep[] = [
  {
    number: "01",
    title: "UNDERSTAND",
    tagline: "Understand the organizational need.",
    description: "Deep stakeholder discovery and diagnostic assessment to identify exact performance gaps and strategic business objectives.",
  },
  {
    number: "02",
    title: "DESIGN",
    tagline: "Design a relevant intervention.",
    description: "Tailoring curriculum, case studies, role-plays, and toolkits specifically contextualized to your industry and organizational culture.",
  },
  {
    number: "03",
    title: "DELIVER",
    tagline: "Deliver an engaging learning experience.",
    description: "Facilitated by seasoned corporate practitioners using interactive, high-impact experiential adult learning methodologies.",
  },
  {
    number: "04",
    title: "MEASURE",
    tagline: "Evaluate learning impact.",
    description: "Post-training evaluation, behavioral application tracking, and actionable feedback loops to ensure sustainable ROI.",
  },
];
