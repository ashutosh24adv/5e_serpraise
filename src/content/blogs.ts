export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  topics: string[];
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface BlogContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  featuredArticle: BlogPost;
  posts: BlogPost[];
}

export const blogContent: BlogContent = {
  eyebrow: "PERSPECTIVES & THOUGHT LEADERSHIP",
  title: "Insights & Perspectives.",
  subtitle:
    "Reflections on organizational development, leadership stewardship, experiential learning, and enterprise capability.",
  description:
    "Essays and practitioner insights drawn from over two decades of consulting experience across India and Australia.",
  featuredArticle: {
    id: "blog-1",
    slug: "experiential-learning-vs-classroom-instruction",
    title: "Why Experiential Learning Transforms Organizational Behavior Where Lectures Fail",
    subtitle: "Moving beyond passive knowledge transfer to embodied behavioral competence.",
    excerpt:
      "Adult learners do not change habits because they were told to; they change when they experience the consequences of their actions in structured simulations. How the PGL (Personal Growth Lab) model bridges the knowing-doing gap.",
    category: "Learning & Andragogy",
    date: "October 2024",
    readingTime: "5 min read",
    author: {
      name: "L. Selvam George",
      role: "Chairman & Prime Servant",
    },
    featured: true,
    topics: ["Andragogy", "PGL", "Behavioral Shift", "Experiential Training"],
  },
  posts: [
    {
      id: "blog-2",
      slug: "principle-of-synergy-people-process-profit",
      title: "The Principle of Synergy: Aligning People, Process, and Profit",
      subtitle: "Why focusing on profit before people-process harmony creates enterprise fragility.",
      excerpt:
        "Sustainable business performance is an outcome, not an input. When organizations align interpersonal trust (People) with disciplined workflows (Process), financial results (Profit) follow naturally.",
      category: "Organizational Development",
      date: "September 2024",
      readingTime: "4 min read",
      author: {
        name: "5e Serpraise Consulting Practice",
        role: "OD Advisory Group",
      },
      topics: ["GOTEL", "Synergy", "Process Confluence", "Culture"],
    },
    {
      id: "blog-3",
      slug: "situational-leadership-lamb-framework",
      title: "From Manager to Steward: The LAMB Framework for Senior Leaders",
      subtitle: "Navigating subordinate readiness and adaptive leadership matrix behaviors.",
      excerpt:
        "One-size-fits-all leadership fails modern teams. The Leadership Aligning Matrix Behavior (LAMB) framework teaches senior leaders when to direct, coach, support, or delegate based on granular team readiness.",
      category: "Leadership & Stewardship",
      date: "August 2024",
      readingTime: "6 min read",
      author: {
        name: "L. Selvam George",
        role: "Chairman & Prime Servant",
      },
      topics: ["SALAM", "LAMB Framework", "Stewardship", "Situational Delegation"],
    },
    {
      id: "blog-4",
      slug: "sme-retainership-building-institutional-culture",
      title: "Why Growing SMEs Need OD Retainership Before Scaling Teams",
      subtitle: "Embedding policy rigor and cultural cohesion without heavyweight overhead.",
      excerpt:
        "Small and medium enterprises often experience rapid revenue growth while organizational governance lags behind. An E2 Retainership model introduces structured appraisal, job clarity, and high-trust culture early.",
      category: "Enterprise Growth",
      date: "July 2024",
      readingTime: "5 min read",
      author: {
        name: "5e Serpraise Consulting Practice",
        role: "OD Advisory Group",
      },
      topics: ["SME Retainership", "HR Systems", "Appraisal Architecture"],
    },
    {
      id: "blog-5",
      slug: "the-4c-model-executive-clarity",
      title: "The 4C Model: Establishing Strategic Clarity for Executive Boards",
      subtitle: "Synthesizing Core Values, Competency, Confluence, and Commercial Results.",
      excerpt:
        "In the COPPTER framework, executive alignment begins with unifying top leadership around a common strategic language. A breakdown of how the 4C Model structures executive decision-making.",
      category: "Executive Strategy",
      date: "June 2024",
      readingTime: "4 min read",
      author: {
        name: "5e Serpraise Consulting Practice",
        role: "Strategy & Advisory",
      },
      topics: ["COPPTER", "4C Model", "Strategic Planning", "Executive Alignment"],
    },
    {
      id: "blog-6",
      slug: "service-and-praise-the-philosophical-foundation",
      title: "Service and Praise: The Enduring Value of Human-Centric Leadership",
      subtitle: "Reflections on two decades of organizational practice across India and Australia.",
      excerpt:
        "True corporate capability is not achieved through coercion or sterile metrics. It blossoms when leaders adopt a servant mindset and cultivate a genuine habit of recognizing human excellence.",
      category: "Philosophy & Culture",
      date: "May 2024",
      readingTime: "5 min read",
      author: {
        name: "L. Selvam George",
        role: "Chairman & Prime Servant",
      },
      topics: ["Serpraise Ethos", "Servant Leadership", "Values Alignment"],
    },
  ],
};
