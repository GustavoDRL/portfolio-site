export interface ExperienceItem {
  company: string;
  role: string;
  period: {
    start: string; // YYYY-MM or YYYY
    end: string | null; // YYYY-MM, YYYY, or null for Present
  };
  description: string; // Main description or summary
  highlights?: string[]; // Optional bullet points
  technologies?: string[]; // Optional list of key tech used
  category: 'Professional' | 'Academic' | 'Freelance' | 'Leadership'; // Add others as needed
}

// Data extracted/interpreted from LaTeX main.tex (lines ~125-138, ~243-265)
export const experienceData: ExperienceItem[] = [
  {
    company: "Vanguarda Consórcio",
    role: "Chief Technology Officer (CTO)",
    period: { start: "2026", end: null },
    description: "Promoted to CTO after spearheading the company's enterprise AI turnaround as GenAI Engineering Lead. Steer corporate technology strategy and lead engineering operations for the official Shineray Brasil consortium network across 490 dealerships nationwide, directing a 5-engineer squad while aligning technical roadmaps with executive commercial expansion.",
    highlights: [
      "Steer corporate technology strategy and command 5-person engineering squad, establishing proprietary tech as the core commercial growth engine for the official Shineray Brasil network across 490 dealerships nationwide",
      "Direct digital product delivery and platform reliability across all quota lifecycles, unifying commercial operations from point-of-sale to contemplation while sustaining 99.9% production uptime",
      "Spearhead credit automation and data intelligence initiatives, transforming transactional data into executive decision-making pipelines that accelerated proposal clearance by ~60%",
      "Champion engineering governance, security compliance (LGPD), and FinOps optimization, driving ~50% operational cost reduction across enterprise cloud infrastructure and AI licensing"
    ],
    technologies: ["Technology Strategy", "Engineering Leadership", "FinOps", "LGPD Compliance", "Executive Analytics", "System Architecture", "High Availability (99.9%)", "Cloud Governance"],
    category: "Professional",
  },
  {
    company: "Vanguarda Consórcio",
    role: "GenAI Engineering Lead",
    period: { start: "2025", end: "2026" },
    description: "Spearheaded Vanguarda's enterprise AI turnaround and designed core distributed microservices, multi-agent conversational platforms, and full-lifecycle applications, laying the technical foundation that led to promotion to CTO.",
    highlights: [
      "Promoted to CTO after leading Vanguarda's enterprise AI turnaround, architecting distributed microservices (FastAPI with 103 endpoints, PostgreSQL, Redis, Docker)",
      "Orchestrated production multi-agent sales platform (CrewAI, LangGraph, GPT-4o via WhatsApp Business API), automating ~70% of customer acquisition and lead qualification",
      "Built production enterprise RAG engine with FAISS vector store and hybrid retrieval, delivering <100ms semantic search and sub-5s response latency with strict guardrails",
      "Engineered full-stack quota and seller platforms (Go, Python, React 19, Vue.js 3), streamlining asynchronous data pipelines and partner CRM ingestion"
    ],
    technologies: ["FastAPI", "Go", "Python", "React 19", "Vue.js 3", "CrewAI", "LangGraph", "FAISS", "RAG", "LLMOps", "PostgreSQL", "Redis", "Docker", "WhatsApp Business API"],
    category: "Professional",
  },
  {
    company: "EY (Ernst & Young)",
    role: "Research and Development Analyst",
    period: { start: "2024", end: "2025" },
    description: "Architected enterprise AI solutions, multi-agent frameworks, and MLOps infrastructure impacting over 1,400 professionals, presenting to executive leadership across Fortune 500 clients.",
    highlights: [
      "Architected enterprise AI infrastructure using Azure ML with MLOps pipelines, implementing CI/CD for GenAI solutions impacting 1,400+ professionals",
      "Developed LLMOps workflows with multi-agent frameworks (LangGraph, CrewAI, AutoGen) for POCs fundamental in multi-million dollar agribusiness and banking deals",
      "Represented EY before 1,000+ business leaders presenting LLMs and AI governance to CEOs of Brazil's largest companies"
    ],
    technologies: ["Azure ML", "MLOps", "Generative AI", "LangGraph", "CrewAI", "AutoGen", "Python", "Docker", "AI Governance"],
    category: "Professional",
  },
  {
    company: "Project Neon (Robotics Team)",
    role: "Team Leader & Developer", // Interpreted role
    period: { start: "2021", end: "2024" },
    description: "Led and managed robotics teams (up to 52 members), overseeing project delivery and technical development for competitions like Iron Cup, RoboChallenge.",
    highlights: [
      "Directed a 15-member team (2022) and 52-member team (2023-2024)",
      "Oversaw delivery of 12 projects across 4 distinct categories",
      "Achieved 9 competitive awards (5 as lead developer, 4 as team leader)",
      "Led development of four combat robots (Project Neon)"
    ],
    technologies: ["Combat Robotics", "C++", "FreeRTOS", "ESP32", "Control Systems", "Hardware Design", "Team Leadership", "Project Management"],
    category: "Leadership",
  },
   {
    company: "Humanoid Robot Project",
    role: "Lead Engineer", // Interpreted role
    period: { start: "2024", end: "2024" }, // Single year from LaTeX
    description: "Led a 3-person team in reviewing and optimizing an educational humanoid robot (Tedy), enhancing control systems and electronics for corporate presentations.",
    highlights: [
      "Implemented distributed control system (master-slave, radio comms)",
      "Redesigned power distribution with servo monitoring and thermal protection"
    ],
    technologies: ["Humanoid Robotics", "C++", "FreeRTOS", "Arduino", "Control Systems", "Electronics", "System Review"],
    category: "Freelance",
  },
   {
    company: "Weather Monitoring System",
    role: "Embedded Systems Engineer", // Interpreted role
    period: { start: "2023", end: "2023" }, // Single year from LaTeX
    description: "Engineered a weather monitoring and equipment protection system using ESP32, FreeRTOS, and various sensors for a surveillance installation.",
    highlights: [
      "Developed multi-core processing architecture on ESP32 with FreeRTOS",
      "Integrated and processed data from anemometers, humidity sensors, pluviometers, etc.",
      "Designed robust power and signal distribution network"
    ],
    technologies: ["IoT", "Embedded Systems", "C++", "FreeRTOS", "ESP32", "Sensor Integration", "Signal Processing", "MQTT"],
    category: "Freelance",
  },
  {
    company: "Globant",
    role: "Junior Full Stack Developer",
    period: { start: "2022", end: "2023" },
    description: "Engineered scalable web applications and medical information systems for Fortune 500 healthcare clients.",
    highlights: [
      "Developed global medical information system for Johnson & Johnson, delivering pharmaceutical data and resources to healthcare professionals across 72 countries",
      "Architected scalable web infrastructure supporting 300+ simultaneous users with robust pipelines eliminating critical failures during demand peaks"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Data Analysis", "REST APIs", "CI/CD"],
    category: "Professional",
  },
  // Add Academic projects like F1TENTH, Safety Switch, Wumpus, Home Automation if desired under 'Academic' category
]; 