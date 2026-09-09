export interface SkillItem {
  name: string;
  description?: string; // Optional description
  level?: number; // Optional proficiency level (e.g., 1-5 or 0-1)
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

// Data extracted/interpreted from LaTeX main.tex (lines ~140-160)
export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python" },
      { name: "Go" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C/C++" },
      { name: "HTML & CSS" },
      { name: "PostgreSQL" },
      { name: "Bash" },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "FastAPI" },
      { name: "Django" },
      { name: "React" },
      { name: "Vue.js" },
      { name: "Next.js" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "ROS / ROS2" },
      { name: "FreeRTOS" },
      { name: "LangChain" },
      { name: "CrewAI" },
      { name: "PyTorch" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Generative AI" },
      { name: "LLMOps" },
      { name: "LangGraph" },
      { name: "RAG Systems" },
      { name: "Multi-Agent Systems" },
      { name: "Machine Learning" },
      { name: "Deep Learning" }, 
      { name: "Reinforcement Learning" },
      { name: "Computer Vision" },
      { name: "Data Structures" },
    ],
  },
  {
    title: "Core Skills",
    skills: [
      { name: "System Design" },
      { name: "Test-Driven Development" },
      { name: "Problem Solving" },
      { name: "Robotics Integration" },
      { name: "Embedded Systems" },
      { name: "Agile Methodologies" }, // Assuming based on dev experience
    ],
  },
]; 