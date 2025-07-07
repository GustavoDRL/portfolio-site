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
      { name: "C/C++" },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
      { name: "PostgreSQL" },
      { name: "Bash" },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "ROS / ROS2" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "FreeRTOS" },
      { name: "STM32CubeIDE" },
      { name: "LangChain" },
      { name: "CrewAI" },
      { name: "PyTorch" },
      { name: "Next.js" }, // Added based on current project
      { name: "Tailwind CSS" }, // Added based on current project
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Generative AI" },
      { name: "Machine Learning" },
      { name: "Deep Learning" }, 
      { name: "Reinforcement Learning" },
      { name: "Computer Vision" },
      { name: "Data Structures" },
      { name: "RAG Systems" },
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