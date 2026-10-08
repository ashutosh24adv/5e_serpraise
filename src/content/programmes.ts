export interface CoreProgram {
  id: string;
  number: string;
  category: string;
  name: string;
  fullName: string;
  positioning: string;
  description: string;
  duration: string;
  targetAudience: string;
  keyTopics: string[];
  keyOutcome: string;
  recommendationReason: string;
}

export interface TrainingMethodology {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  experientialDetails?: string[];
}

export interface TransformationStage {
  stage: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ProgrammeRecommendationOption {
  id: string;
  label: string;
  sublabel: string;
  targetProgramId: string;
  reason: string;
}

export const corePrograms: CoreProgram[] = [
  {
    id: "lilly",
    number: "01",
    category: "INDIVIDUAL DEVELOPMENT",
    name: "LILLY",
    fullName: "Live in Liberation and Love Yourself",
    positioning: "A purpose-driven personal development experience.",
    description: "Ideal for anyone seeking a purpose-driven life and self-mastery.",
    duration: "2-Day Workshop",
    targetAudience: "Professionals & individuals across all organizational levels",
    keyTopics: [
      "Clarifying values & beliefs",
      "Setting personal & professional goals",
      "Planning for collaborative winning",
      "Strengthening the desire to leave a legacy behind",
    ],
    keyOutcome: "Clarity of personal purpose, deep self-worth, and proactive ownership of life goals.",
    recommendationReason: "Recommended when you want individuals to clarify core values, take personal ownership, and align individual purpose with corporate vision.",
  },
  {
    id: "gotel",
    number: "02",
    category: "TEAM DEVELOPMENT",
    name: "GOTEL",
    fullName: "Goal Oriented Team and Energized Members / Empowering Leaders",
    positioning: "Designed for team cohesiveness and team alignment.",
    description: "Ideal for team cohesiveness, conflict resolution, and collaborative synergy.",
    duration: "2-Day Semi-Outbound Program",
    targetAudience: "Intact functional teams, cross-departmental groups, and team leads",
    keyTopics: [
      "Principle of Synergy — People, Process & Profit",
      "Conflict — causes, analysis and remedy",
      "Respect for policies, procedures and practices",
      "Effective planning to ensure results",
      "Art of receiving feedback for personal growth",
      "Experiential games and role plays",
      "Self-awareness through structured questionnaires",
    ],
    keyOutcome: "Unified team spirit, healthy conflict resolution, and synchronized execution toward shared milestones.",
    recommendationReason: "Recommended when cross-functional silos or interpersonal friction are impeding organizational velocity, or when a newly formed team needs deep alignment.",
  },
  {
    id: "salam",
    number: "03",
    category: "LEADERSHIP DEVELOPMENT",
    name: "SALAM",
    fullName: "Stewardship and Leadership Aligning Matrix",
    positioning: "For senior leaders who are influencing managers.",
    description: "Designed for senior leaders managing people managers to master situational leadership.",
    duration: "1 or 2-Day Program",
    targetAudience: "Senior managers, division heads, and leaders managing people managers",
    keyTopics: [
      "Difference between managers and leaders",
      "Understanding one's preferred management and leadership style",
      "Understanding subordinate readiness",
      "Adjusting leadership style through LAMB (Leadership Aligning Matrix Behavior)",
      "Servant Leadership / Stewardship",
    ],
    keyOutcome: "Adaptive leadership maturity, situational delegation agility, and authentic stewardship ethos.",
    recommendationReason: "Recommended when senior leaders need to elevate from operational managing to strategic stewardship, situational delegation, and mentoring managers.",
  },
  {
    id: "coppter",
    number: "04",
    category: "BUSINESS GROWTH",
    name: "COPPTER",
    fullName: "Confluence of People and Process towards Entrepreneurial Result",
    positioning: "For business leaders — CEOs, SBU heads and their direct reports.",
    description: "Designed for CEOs, executive teams, and SBU heads driving strategic business growth.",
    duration: "2 to 3-Day Program",
    targetAudience: "CEOs, CXOs, SBU Heads, Directors, and Executive leadership teams",
    keyTopics: [
      "4C Model",
      "SWOT Analysis",
      "Vision & Mission formulation",
      "Core Values alignment",
      "Strategy based on unique offering",
      "Business planning and execution roadmaps",
      "Organizational design and structural agility",
      "Measurement metrics & KPIs",
      "Reward and reinforcing mechanisms",
    ],
    keyOutcome: "Clear strategic roadmap, cohesive executive alignment, and operationalized growth governance.",
    recommendationReason: "Recommended when executive leadership needs complete strategic alignment on vision, 4C model, business planning roadmaps, and metric reinforcement.",
  },
];

export const trainingMethodologies: TrainingMethodology[] = [
  {
    id: "respecting-adult-learning-principles",
    number: "01",
    title: "ADULT LEARNING PRINCIPLES",
    summary: "Based on andragogy and participant experience.",
    description:
      "Grounded in adult learning principles—respecting participants' prior knowledge, fostering intrinsic motivation, and centering on practical, immediate application to real-world workplace scenarios.",
    experientialDetails: ["Self-directed learning", "Practical relevance", "Experience integration"],
  },
  {
    id: "pre-post-capability-analysis",
    number: "02",
    title: "PRE & POST ANALYSIS",
    summary: "Pre & post analysis to ensure measurable impact.",
    description:
      "Structured diagnostic assessments before delivery to contextualize needs, paired with comprehensive post-program evaluation to measure behavior shift, retention, and tangible ROI.",
    experientialDetails: ["Pre-workshop diagnostic questionnaires", "Baseline skill mapping", "Post-program impact audits"],
  },
  {
    id: "high-interaction-pgl-role-play",
    number: "03",
    title: "EXPERIENTIAL LEARNING",
    summary: "Highly interactive experiential learning.",
    description:
      "Immersive simulations, case studies, games, role plays, Personal Growth Labs (PGL), and semi-outbound activities that move participants from intellectual understanding to embodied behavioral mastery.",
    experientialDetails: ["Games & simulations", "Role plays & behavioral labs (PGL)", "Interactive debriefings"],
  },
];

export const transformationJourneyStages: TransformationStage[] = [
  {
    stage: "01",
    title: "BEFORE",
    tagline: "Understand the current state.",
    description: "Diagnostic stakeholder discovery and participant questionnaires to identify exact performance gaps and baseline organizational readiness.",
  },
  {
    stage: "02",
    title: "EXPERIENCE",
    tagline: "Learn through interaction.",
    description: "Immersive workshop delivery featuring games, role plays, Personal Growth Labs (PGL), and experiential simulations.",
  },
  {
    stage: "03",
    title: "REFLECT",
    tagline: "Understand what changed.",
    description: "Structured debriefing, self-awareness questionnaires, and collective reflection to crystallize key behavioral insights.",
  },
  {
    stage: "04",
    title: "APPLY",
    tagline: "Take learning back into the organization.",
    description: "Personal action roadmaps, managerial reinforcement tools, and post-analysis follow-ups to guarantee lasting workplace impact.",
  },
];

export const recommendationOptions: ProgrammeRecommendationOption[] = [
  {
    id: "individual",
    label: "Individual Growth & Purpose",
    sublabel: "Personal values, self-worth & proactive goal setting",
    targetProgramId: "lilly",
    reason: "LILLY provides a transformative 2-day personal development experience helping individuals clarify values, take ownership, and achieve collaborative winning.",
  },
  {
    id: "team",
    label: "Team Collaboration & Alignment",
    sublabel: "Conflict resolution, synergy & cohesive execution",
    targetProgramId: "gotel",
    reason: "GOTEL is designed specifically for team cohesiveness, resolving conflict, aligning members with policies and goals, and realizing the Principle of Synergy (People, Process & Profit).",
  },
  {
    id: "leadership",
    label: "Leadership Capability & Stewardship",
    sublabel: "Managing managers, situational delegation & LAMB",
    targetProgramId: "salam",
    reason: "SALAM enables senior leaders to master the Leadership Aligning Matrix Behavior (LAMB), shift from manager to leader, and practice authentic servant leadership.",
  },
  {
    id: "business",
    label: "Business Execution & Strategy",
    sublabel: "Vision, 4C model, business planning & metrics",
    targetProgramId: "coppter",
    reason: "COPPTER brings executive leadership (CEOs, SBU heads) together to align on the 4C model, unique offering strategy, organizational design, and reinforcing metric mechanisms.",
  },
];
