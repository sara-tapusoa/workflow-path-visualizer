
// Node details to display when a node is clicked
export interface NodeDetailType {
  title: string;
  description: string;
  tasks?: string[];
  importance?: number;
  owner?: string;
  frequency?: string;
  impact?: string[];
}

export const nodeDetails: Record<string, NodeDetailType> = {
  "strategy": {
    title: "Mission, Vision & Strategy",
    description: "Defines the core purpose of our organization, where we're headed, and how we'll get there.",
    tasks: [
      "Define company mission",
      "Craft vision statement",
      "Align strategic objectives",
      "Communicate vision across teams"
    ],
    importance: 5,
    owner: "Leadership Team"
  },
  "cycles": {
    title: "Planning Cycles",
    description: "Our planning and review cadences that ensure we're on track and adapting to change.",
    tasks: [
      "Establish annual planning process",
      "Define quarterly milestones",
      "Schedule monthly and weekly reviews",
      "Ensure feedback loops are closed"
    ],
    importance: 4,
    frequency: "Ongoing",
    impact: ["Alignment", "Predictability", "Focus"]
  },
  "pillars": {
    title: "Strategic Pillars",
    description: "The key focus areas that support our vision and guide decision-making.",
    tasks: [
      "Identify 3-5 pillars",
      "Map goals to each pillar",
      "Communicate priorities"
    ],
    importance: 5
  },
  "annual": {
    title: "Annual Planning",
    description: "Yearly high-level planning that sets major objectives for the coming year.",
    tasks: [
      "Review previous year",
      "Set annual OKRs",
      "Allocate resources"
    ],
    frequency: "Yearly (Q4)",
    owner: "Executive Team"
  },
  "half-year": {
    title: "Half Year Roadmap",
    description: "Mid-term planning to ensure we're on track and adjust course if needed.",
    tasks: [
      "Assess progress on annual goals",
      "Adjust priorities if needed",
      "Reallocate resources"
    ],
    frequency: "Bi-annually"
  },
  "quarterly": {
    title: "Quarterly Reviews",
    description: "Regular check-ins on progress and adjustments to the roadmap.",
    tasks: [
      "Review OKR progress",
      "Share learnings across teams",
      "Make tactical adjustments"
    ],
    frequency: "Every 3 months"
  },
  "monthly": {
    title: "Monthly Reviews",
    description: "Tactical reviews to ensure execution is on track.",
    tasks: [
      "Track metrics",
      "Address blockers",
      "Share progress updates"
    ],
    frequency: "Monthly"
  },
  "initiatives": {
    title: "Initiatives",
    description: "Major bodies of work that support our strategic pillars.",
    tasks: [
      "Define initiative scope",
      "Assign initiative owners",
      "Set success metrics"
    ]
  },
  "projects": {
    title: "Projects",
    description: "Discrete pieces of work that contribute to initiatives.",
    tasks: [
      "Break down into tasks",
      "Assign resources",
      "Set timelines"
    ]
  },
  "tasks": {
    title: "Action Items",
    description: "Specific tasks that need to be completed to move projects forward.",
    tasks: [
      "Assign ownership",
      "Set due dates",
      "Track completion"
    ]
  },
  "releases": {
    title: "Releases",
    description: "Product updates that deliver value to customers.",
    tasks: [
      "Plan release schedule",
      "Coordinate cross-functional teams",
      "Communicate changes"
    ]
  },
  "product-roadmap": {
    title: "Product Roadmap Dashboard",
    description: "Central visualization of our product plans, timelines, and progress.",
    tasks: [
      "Maintain up-to-date roadmap",
      "Share with stakeholders",
      "Use to guide prioritization decisions",
      "Connect strategic goals to tactical execution"
    ],
    importance: 5,
    owner: "Product Management",
    impact: ["Transparency", "Alignment", "Strategic Focus"]
  },
  "online-product": {
    title: "Online Product RC/RD",
    description: "Our customer-facing digital products and experiences.",
    tasks: [
      "Develop features",
      "Test with users",
      "Iterate based on feedback"
    ]
  },
  "offline-product": {
    title: "Offline Product",
    description: "Physical products and non-digital experiences.",
    tasks: [
      "Design physical products",
      "Coordinate manufacturing",
      "Manage distribution"
    ]
  },
  "system-outputs": {
    title: "System Outputs",
    description: "The key results and deliverables of our entire product system.",
    tasks: [
      "Measure product impact",
      "Gather customer feedback",
      "Iterate on our approach"
    ]
  },
  "marketing": {
    title: "Marketing Impact",
    description: "How we communicate our product value and reach customers.",
    tasks: [
      "Create go-to-market plans",
      "Develop messaging",
      "Coordinate launch activities"
    ]
  },
  "platform-tools": {
    title: "Platform Tools",
    description: "Internal tools and infrastructure that support our product development.",
    tasks: [
      "Build developer tools",
      "Maintain infrastructure",
      "Improve developer experience"
    ]
  },
  "goals": {
    title: "Yearly Goals/KPIs",
    description: "Specific, measurable objectives that we aim to achieve.",
    tasks: [
      "Set SMART goals",
      "Link to strategic pillars",
      "Track progress regularly"
    ]
  },
  "external-inputs": {
    title: "External Inputs",
    description: "Information and requirements from outside sources that influence our plans.",
    tasks: [
      "Gather market research",
      "Collect customer feedback",
      "Monitor competitive landscape"
    ]
  },
  "external-tasks": {
    title: "External To-Do Tasks",
    description: "Work items that come from external stakeholders or dependencies.",
    tasks: [
      "Prioritize incoming requests",
      "Evaluate impact on roadmap",
      "Schedule based on capacity"
    ]
  }
};
