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
    role: "AI specialist & Tech Lead",
    period: { start: "2025", end: null },
    description: "Responsible for the development of all technical solutions at the company. Building enterprise AI systems and full-stack applications for consortium sales operations.",
    highlights: [
      "Leading all technical development initiatives across the organization",
      "Architected enterprise multi-agent RAG system with WhatsApp Business API integration",
      "Developed full-stack Seller Service Center with React, Fastify, and PostgreSQL",
      "Implemented CrewAI-based agents for sales, support, and lead qualification"
    ],
    technologies: ["Python", "TypeScript", "FastAPI", "React", "Vue.js", "CrewAI", "FAISS", "PostgreSQL", "Redis", "Docker", "WhatsApp Business API"],
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