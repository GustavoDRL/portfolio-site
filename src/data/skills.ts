export interface SkillItem {
  name: string;
  description?: string; // Optional description
  level?: number; // Optional proficiency level (e.g., 1-5 or 0-1)
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

// Data synchronized with LaTeX CV (main.tex) and expanded for full portfolio showcase
export const skillsData: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    skills: [
      { name: "GPT-4o" },
      { name: "Claude 3.5 Sonnet" },
      { name: "LLMOps" },
      { name: "Large Language Models" },
      { name: "Prompt Engineering" },
      { name: "Fine-tuning (PEFT/LoRA)" },
      { name: "LangChain" },
      { name: "CrewAI" },
      { name: "LangGraph" },
      { name: "Tool / Function Calling" },
      { name: "Guardrails & DeepEval" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Go" },
      { name: "Python (FastAPI, Django)" },
      { name: "Microservices Architecture" },
      { name: "REST APIs & WebSockets" },
      { name: "PostgreSQL & SQLAlchemy" },
      { name: "Pydantic" },
      { name: "Redis" },
      { name: "Async / Await" },
    ],
  },
  {
    title: "MLOps & Deployment",
    skills: [
      { name: "Azure ML" },
      { name: "Docker & Compose" },
      { name: "Kubernetes" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "Model Deployment" },
      { name: "Vector DBs (FAISS, pgvector)" },
      { name: "Pinecone" },
      { name: "FinOps & Cost Control" },
    ],
  },
  {
    title: "Multi-Agent Systems",
    skills: [
      { name: "CrewAI" },
      { name: "LangGraph" },
      { name: "AutoGen" },
      { name: "Agent Orchestration" },
      { name: "Conversational AI" },
      { name: "Enterprise RAG Systems" },
      { name: "Semantic Search" },
      { name: "Customer Acquisition Bots" },
      { name: "State Persistence" },
    ],
  },
  {
    title: "Data & Processing",
    skills: [
      { name: "Redis Caching" },
      { name: "RabbitMQ" },
      { name: "Celery" },
      { name: "Background Workers" },
      { name: "Message Queues" },
      { name: "Real-time Event Processing" },
      { name: "Data Pipelines" },
    ],
  },
  {
    title: "Frontend & DevOps",
    skills: [
      { name: "React 19" },
      { name: "Vue.js 3" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Structured Logging" },
      { name: "OpenTelemetry" },
      { name: "System Monitoring" },
    ],
  },
  {
    title: "Security & Compliance",
    skills: [
      { name: "JWT Authentication" },
      { name: "Role-Based Access (RBAC)" },
      { name: "Rate Limiting" },
      { name: "Security Headers" },
      { name: "LGPD & Data Privacy" },
      { name: "AI Governance" },
      { name: "Enterprise Compliance" },
    ],
  },
  {
    title: "Robotics & Autonomous Systems",
    skills: [
      { name: "ROS / ROS2 (Humble, Foxy)" },
      { name: "Nav2 Navigation Stack" },
      { name: "SLAM & Odometry" },
      { name: "C / C++" },
      { name: "FreeRTOS" },
      { name: "ESP32 & Microcontrollers" },
      { name: "NVIDIA Isaac Sim & Gazebo" },
      { name: "Sensor Fusion (LIDAR, IMU)" },
    ],
  },
];