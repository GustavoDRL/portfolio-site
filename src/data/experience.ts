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
    description: "Promoted to CTO after spearheading the company's enterprise AI turnaround. Head of technology strategy and software engineering for the official Shineray Brasil consortium administrator (powering 490 dealerships nationwide), leading a 5-engineer team while remaining hands-on in architecture and code.",
    highlights: [
      "Define company technical strategy and lead 5-person engineering squad, establishing technology as core growth engine",
      "Architected end-to-end platform (Go, Python, React, Vue.js) providing full quota lifecycle visibility from sale to contemplation across 490 dealerships nationwide",
      "Implemented automated credit and data analytics pipelines, turning operational data into actionable business intelligence",
      "Lead multi-agent chatbot system (CrewAI + GPT-4 via WhatsApp Business) designed to automate ~70% of customer acquisition",
      "Drive operational automation via LLMOps (prompt engineering, model routing, caching), targeting ~50% operational cost reduction with 99% production uptime"
    ],
    technologies: ["Go", "Python", "FastAPI", "Django", "React", "Vue.js", "CrewAI", "LangGraph", "RAG/FAISS", "LLMOps", "PostgreSQL", "Redis", "Docker", "Stripe"],
    category: "Professional",
  },
  {
    company: "Vanguarda Consórcio",
    role: "GenAI Engineering Lead",
    period: { start: "2025", end: "2026" },
    description: "Led the company's AI initiatives and initial microservices architecture, laying the technical foundation that led to promotion to CTO.",
    highlights: [
      "Architected enterprise multi-agent RAG system with WhatsApp Business API integration",
      "Developed full-stack Seller Service Center with React, Fastify, and PostgreSQL",
      "Engineered FAISS vector search with <100ms semantic retrieval and dual-LLM routing"
    ],
    technologies: ["Python", "FastAPI", "React", "Vue.js", "CrewAI", "FAISS", "PostgreSQL", "Redis", "Docker", "WhatsApp Business API"],
    category: "Professional",
  },
  {
    company: "EY",
    role: "Research and Development Analyst",
    period: { start: "2024", end: "2025" },
    description: "Developed innovative solutions focusing on Generative AI and robotics. Led software development initiatives combining AI and automation.",
    highlights: [
      "Led development of VR intelligent assistant POC",
      "Implemented multi-agent financial analysis system",
      "Engineered meeting intelligence system on Jetson Nano"
    ],
    technologies: ["Generative AI", "Robotics", "Python", "CrewAI", "LangChain", "GPT-4", "Computer Vision", "Jetson Nano"],
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
    description: "Developed complete digital solutions using HTML, CSS, JavaScript, and Python. Conducted data analysis to optimize campaigns and support strategic decisions.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Data Analysis"],
    category: "Professional",
  },
  // Add Academic projects like F1TENTH, Safety Switch, Wumpus, Home Automation if desired under 'Academic' category
]; 