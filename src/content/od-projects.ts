export interface ODService {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ODGroup {
  number: string;
  title: string;
  tagline: string;
  services: ODService[];
}

export interface RetainershipInfo {
  title: string;
  eyebrow: string;
  subtitle: string;
  targetAudience: string;
  focusAreas: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const odGroups: ODGroup[] = [
  {
    number: "01",
    title: "CULTURE & ENGAGEMENT",
    tagline: "Building cultural alignment, organizational harmony, and deep employee commitment.",
    services: [
      {
        title: "Culture Building",
        tagline: "Aligning organizational values with daily workplace behaviors.",
        description:
          "Transform corporate ethos from aspirational slogans into lived behavioral norms across all organizational levels, fostering trust, accountability, and psychological safety.",
        deliverables: [
          "Core Values articulation & behavioral indicators",
          "Culture diagnostic & gap analysis",
          "Leadership alignment workshops",
          "Culture cascade & internal communication framework",
        ],
      },
      {
        title: "Employee Engagement Survey",
        tagline: "Measuring workplace sentiment with actionable diagnostic precision.",
        description:
          "Scientifically designed engagement assessments that capture the voice of the workforce, benchmark organizational morale, and highlight root drivers of retention and motivation.",
        deliverables: [
          "Customized multi-dimensional survey design",
          "Anonymous, secure digital administration",
          "Departmental heatmaps & executive insight reports",
          "Action planning workshops with departmental leads",
        ],
      },
      {
        title: "Internal Client Satisfaction Survey",
        tagline: "Fostering cross-departmental collaboration and seamless service delivery.",
        description:
          "Evaluates internal service levels between interdependent teams (e.g., HR, Finance, IT, Operations, Sales) to dissolve organizational silos and enhance operational speed.",
        deliverables: [
          "Inter-departmental service level agreements (SLAs)",
          "Internal NPS & satisfaction indices",
          "Friction point identification & process remediation",
          "Collaborative alignment cadence setup",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "PERFORMANCE & ASSESSMENT",
    tagline: "Structuring rigorous evaluation, objective talent discovery, and meritocratic growth.",
    services: [
      {
        title: "Assessment Center",
        tagline: "Objective, simulation-based talent evaluation for high-stakes decisions.",
        description:
          "A multi-rater, multi-exercise assessment architecture that evaluates managerial and leadership capabilities through standardized simulations, in-basket exercises, and case analyses.",
        deliverables: [
          "Customized assessment exercise design",
          "Trained assessor calibration & behavioral observation",
          "Individual developmental feedback dossiers",
          "Succession planning & high-potential talent matrix",
        ],
      },
      {
        title: "Performance Appraisal System",
        tagline: "Designing equitable, objective, and development-oriented evaluation systems.",
        description:
          "End-to-end appraisal system architecture—from goal cascading (OKRs / KPIs) and continuous review frameworks to fair rating scales and merit-based linkages.",
        deliverables: [
          "Balanced Scorecard / KPI cascade frameworks",
          "Appraisal policy documentation & appraisal forms",
          "Appraiser training for bias-free evaluation & feedback",
          "Performance improvement plan (PIP) protocols",
        ],
      },
      {
        title: "360 Degree Feedback",
        tagline: "Holistic multi-rater feedback for leadership self-awareness and growth.",
        description:
          "Confidential feedback collected from peers, subordinates, managers, and internal clients to give leaders a comprehensive view of their impact and blind spots.",
        deliverables: [
          "Role-specific competency survey configuration",
          "Confidential 360-degree survey administration",
          "Executive feedback debrief by certified coaches",
          "Individual Development Plan (IDP) formulation",
        ],
      },
      {
        title: "Job Evaluation",
        tagline: "Systematic sizing and grading of organizational roles for internal equity.",
        description:
          "Point-factor and analytical job evaluation methodologies that establish internal job relativity, grade structures, and defensible compensation bands.",
        deliverables: [
          "Job evaluation committee charter & methodology",
          "Factor weighting & scoring matrices",
          "Organization-wide job grading structure",
          "Market benchmark integration recommendations",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "HR SYSTEMS",
    tagline: "Institutionalizing robust policies, competency frameworks, and operational governance.",
    services: [
      {
        title: "Policy Manual & Employee Handbook",
        tagline: "Clear, legally compliant, and culture-affirming HR governance.",
        description:
          "Crafting comprehensive HR policies, ethical standards, code of conduct, and employee handbooks that protect the organization while creating a supportive workplace experience.",
        deliverables: [
          "Exhaustive HR policy manual customized to company scale",
          "Modern, welcoming Employee Handbook (print & digital)",
          "Legal and statutory compliance alignment",
          "HR policy rollout and orientation toolkit",
        ],
      },
      {
        title: "Competency Dictionary & Mapping",
        tagline: "Standardizing organizational capability definitions across all job roles.",
        description:
          "Defining core, functional, and behavioral competencies with leveled proficiency indicators to power recruitment, performance management, training, and promotion decisions.",
        deliverables: [
          "Comprehensive organization-wide Competency Dictionary",
          "Role-wise competency mapping & proficiency levels",
          "Competency assessment matrices & rubrics",
          "Integration guides for Talent Acquisition & L&D",
        ],
      },
      {
        title: "Job Description Manual",
        tagline: "Role clarity, key result areas, and accountability boundaries.",
        description:
          "Drafting crisp, standardized Job Descriptions (JDs) defining purpose, Key Result Areas (KRAs), reporting hierarchies, competencies, and KPIs for every role in the enterprise.",
        deliverables: [
          "Standardized Job Description templates",
          "Role clarity workshops with department leaders",
          "Organization-wide master JD catalog",
          "JD review and maintenance governance",
        ],
      },
      {
        title: "HR Systems Formulation",
        tagline: "Building scalable HR infrastructure from onboarding to offboarding.",
        description:
          "Designing the entire HR workflow infrastructure—induction, attendance, leaves, travel, employee relations, grievance redressal, and exit management systems.",
        deliverables: [
          "End-to-end HR process workflow maps (SOPs)",
          "Standard forms, templates, checklists, and letters",
          "HR technology/HRIS functional requirements roadmap",
          "HR audit & system compliance scorecards",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "ORGANIZATIONAL PROGRAMS",
    tagline: "Transformational offsites, strategic alignment summits, and outbound team builds.",
    services: [
      {
        title: "Annual Business Meet & Out Bound Training",
        tagline: "Energizing annual conferences and immersive experiential leadership retreats.",
        description:
          "Combining strategic business planning, leadership retrospectives, and high-impact experiential outdoor challenges to foster unbreakable team cohesion and strategic momentum.",
        deliverables: [
          "Strategic theme design & agenda orchestration",
          "Experiential outdoor challenge & team-building design",
          "Executive facilitation for strategy alignment sessions",
          "Action commitment capture and post-meet follow-up",
        ],
      },
    ],
  },
];

export const retainershipInfo: RetainershipInfo = {
  title: "E2 RETAINERSHIP",
  eyebrow: "STRATEGIC PARTNERSHIP",
  subtitle: "Dedicated organizational development advisory for emerging and growing enterprises.",
  targetAudience: "Suited for small and medium-scale companies looking to professionalize leadership and embed strong corporate culture without building heavy internal consulting departments.",
  focusAreas: [
    {
      title: "Culture Building",
      description: "Ongoing advisory and facilitation to institutionalize values, enhance employee engagement, and build a high-trust work culture.",
    },
    {
      title: "Business Leadership",
      description: "Executive mentoring, leadership cadence alignment, and strategic advisory to build capable second-line management.",
    },
  ],
  benefits: [
    "Direct access to seasoned OD practitioners with 20+ years of institutional expertise",
    "Continuous advisory rhythm ensuring consistent implementation and accountability",
    "Tailored specifically for growing SMEs seeking structured growth and stability",
    "Flexible engagement model aligned with organizational priorities and pace",
  ],
};

export function getODSlug(title: string): string {
  const slugMap: Record<string, string> = {
    "Culture Building": "culture-building",
    "Employee Engagement Survey": "employee-engagement-survey",
    "Internal Client Satisfaction Survey": "internal-client-satisfaction-survey",
    "Assessment Center": "assessment-center",
    "Performance Appraisal System": "performance-appraisal-system",
    "360 Degree Feedback": "360-degree-feedback",
    "Job Evaluation": "job-evaluation",
    "Policy Manual & Employee Handbook": "policy-manual-employee-handbook",
    "Competency Dictionary & Mapping": "competency-dictionary-mapping",
    "Job Description Manual": "job-description-manual",
    "HR Systems Formulation": "hr-systems-formulation",
    "Annual Business Meet & Out Bound Training": "annual-business-meet-outbound-training",
  };

  if (slugMap[title]) return slugMap[title];

  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
