export interface ProjectLink {
  type: 'github' | 'video' | 'live' | 'paper';
  url: string;
  label: string;
}

export interface Technology {
  name: string;
  icon?: string; // Optional: for displaying logos
  category: 'Language' | 'Framework' | 'Library' | 'Tool' | 'Platform' | 'AI Model';
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Autonomous Systems' | 'Artificial Intelligence' | 'Robotics' | 'Web Development' | 'Hardware' | 'Automation'; // Add more as needed
  tags: string[];
  description: string; // Short description for card/grid
  content: string; // Full content in Markdown for detail page
  featuredImage: string; // Path to image
  gallery?: string[]; // Optional array of image paths
  technologies: Technology[];
  links?: ProjectLink[];
  featured: boolean;
  order: number;
}

export const projectsData: Project[] = [
  {
    id: "f1tenth-autonomous",
    title: "F1TENTH Autonomous Racing",
    slug: "f1tenth-autonomous-racing",
    category: "Autonomous Systems",
    tags: ["ROS2", "Computer Vision", "Control Systems", "SLAM", "Python", "C++"],
    description: "Led the development of a 1/10 scale autonomous racing vehicle, implementing advanced robotics systems.",
    content: `## Project Overview
Led the development of a 1/10 scale autonomous racing vehicle for F1TENTH competition, implementing advanced robotics systems on both hardware and software levels. The project showcased expertise in autonomous navigation, real-time control systems, and advanced simulation environments.

## Technical Implementation

*   **Hardware Integration:** Developed a complete autonomous platform using Raspberry Pi 4B as the main computer, integrated with VESC motor controller and LIDAR sensor. The system architecture focused on low-latency performance and reliable sensor fusion for racing conditions.
*   **Software Architecture:** Created an advanced ROS2-based navigation stack featuring custom nodes for LIDAR processing, PID-based wall following, and gap detection algorithms. Implemented Nav2 framework integration for mapping and autonomous navigation, with emphasis on real-time performance optimization.
*   **Development Environment:** Established a robust development pipeline using Docker containers, the default F1TENTH simulator and NVIDIA Isaac Sim for testing.

## Key Achievements

*   Achieved high-performance autonomous navigation with sub-30ms latency.
*   Successfully implemented advanced control algorithms for racing scenarios.
*   Developed comprehensive simulation and testing framework.`,
    featuredImage: "/images/projects/f1tenth_car.jpeg",
    gallery: ["/images/projects/f1tenth_simulatio.jpeg"],
    technologies: [
      { name: "ROS2 Humble", category: "Framework" },
      { name: "Nav2 Stack", category: "Framework" },
      { name: "VESC SDK", category: "Library" },
      { name: "Python", category: "Language" },
      { name: "C++", category: "Language" },
      { name: "Docker", category: "Tool" },
      { name: "CMake", category: "Tool" },
      { name: "NVIDIA Isaac Sim", category: "Tool" },
      { name: "Gazebo", category: "Tool" },
      { name: "RViz", category: "Tool" },
      { name: "Git", category: "Tool" },
    ],
    links: [
      { type: "github", url: "https://github.com/GustavoDRL/f1tenth_code.git", label: "f1tenth-code" }
    ],
    featured: true,
    order: 1,
  },
  {
    id: "vr-assistant",
    title: "VR Intelligent Assistant",
    slug: "vr-intelligent-assistant",
    category: "Artificial Intelligence",
    tags: ["Generative AI", "GPT-4", "Unity", "VR", "RAG", "Python", "LangChain"],
    description: "Developed a proof-of-concept VR-based intelligent assistant integrating real-time speech processing and LLMs.",
    content: `## Project Overview
Developed a proof-of-concept VR-based intelligent assistant system integrating real-time speech processing, advanced language models, and avatar animation. The system provides immediate access to corporate policies and information through an immersive metaverse interface, achieving sub-second response times for enhanced user experience.

## Technical Implementation

*   **Virtual Reality Environment:** Engineered using Unity Engine with custom shaders and optimized avatar animations. Implemented lip-sync system for natural speech animation.
*   **AI and Natural Language Processing:** Leveraged GPT-4 Turbo for advanced language understanding and response generation, integrated with a custom RAG system using ChromaDB and Azure Blob Storage for efficient information retrieval from corporate documentation.
*   **Audio Processing Pipeline:** Developed a streamlined audio processing system incorporating speech-to-text conversion, context-aware response generation, and text-to-speech synthesis with lip synchronization, all optimized for sub-second latency.

## System Architecture

*   Real-time audio capture and streaming using Unity's audio system.
*   Parallel processing of speech-to-text and context retrieval.
*   Optimized RAG system with pre-indexed corporate documentation.

## Performance Metrics

*   End-to-end response time: < 1 second
*   Speech recognition accuracy: 95%+

## Impact and Future Implementation

*   Presented at Corporate Innovation Conference 2024, receiving positive feedback from industry leaders.
*   Under evaluation by HR department for integration into new employee onboarding process.`,
    featuredImage: "/images/projects/virtual_mentor.png",
    technologies: [
      { name: "Unity Engine", category: "Platform" },
      { name: "GPT-4 Turbo", category: "AI Model" },
      { name: "ChromaDB", category: "Tool" },
      { name: "Azure Blob Storage", category: "Tool" },
      { name: "LangChain", category: "Framework" },
      { name: "Python", category: "Language" },
      // Add others like Speech Recognition, TTS if desired
    ],
    featured: true,
    order: 2,
  },
  {
    id: "financial-analysis",
    title: "Intelligent Financial Analysis System",
    slug: "intelligent-financial-analysis",
    category: "Artificial Intelligence",
    tags: ["CrewAI", "GPT-4", "LangChain", "Streamlit", "Python", "Multi-Agent", "Financial Analysis"],
    description: "Developed an advanced multi-agent system utilizing CrewAI and GPT-4 Turbo to provide comprehensive fundamental analysis for investment decisions.",
    content: `## Project Overview
Developed an advanced multi-agent system utilizing CrewAI and GPT-4 Turbo to provide comprehensive fundamental analysis for investment decisions. The system employs three specialized agent crews that work in sequence to gather, validate, and synthesize financial information, delivering professional-grade investment analysis through a Streamlit interface.

## Technical Implementation

*   **Multi-Agent System:** Implemented three specialized crews using CrewAI: a research team for data gathering and initial analysis, a validation team for data verification and enrichment, and an analysis team for generating professional financial insights and recommendations.
*   **Data Processing:** Engineered custom web scraping tools and financial data processing pipelines using LangChain, incorporating intelligent parsing algorithms and automated validation mechanisms for maintaining data integrity throughout the analysis process.
*   **User Experience:** Created an intuitive Streamlit interface featuring real-time progress tracking and interactive report visualization, enabling users to easily access and understand complex financial analyses.

## Key Features

*   Real-time analysis progress tracking
*   Comprehensive fundamental analysis coverage
*   Automated data validation and cross-referencing
*   Professional-grade report generation
*   Interactive result visualization

## Research Impact

The project contributed to the company's research in multi-agent applications, particularly in the areas of agent coordination and specialized task distribution. The findings helped shape the development of subsequent multi-agent products and established best practices for implementing complex agent interactions in production environments.`,
    featuredImage: "/images/projects/financial_analysis.png",
    technologies: [
      { name: "CrewAI", category: "Framework" },
      { name: "LangChain", category: "Framework" },
      { name: "GPT-4 Turbo", category: "AI Model" },
      { name: "Python", category: "Language" },
      { name: "Custom Scraping Tools", category: "Tool" },
      { name: "Async Processing", category: "Tool" },
      { name: "Financial Analysis Algorithms", category: "Tool" },
      { name: "Data Validation Framework", category: "Tool" },
      { name: "Streamlit", category: "Framework" },
    ],
    featured: true,
    order: 3,
  },
  {
    id: "meeting-intelligence",
    title: "Meeting Intelligence System",
    slug: "meeting-intelligence-system",
    category: "Artificial Intelligence",
    tags: ["Computer Vision", "Emotion Detection", "Speech-to-Text", "Jetson Nano", "Python", "Deep Learning", "Privacy"],
    description: "Engineered a comprehensive meeting analysis system deployed on Jetson Nano hardware that processes real-time video and audio streams to extract actionable insights.",
    content: `## Project Overview
Engineered a comprehensive meeting analysis system deployed on Jetson Nano hardware that processes real-time video and audio streams to extract actionable insights while maintaining strict privacy compliance. The system performs facial detection, emotion analysis, and speech-to-text processing, storing only anonymized metadata for dashboard visualization while ensuring complete deletion of sensitive data post-analysis.

## Technical Implementation

*   **Embedded Vision Processing:** Developed an optimized computer vision pipeline on Jetson Nano that performs real-time facial detection and cropping. The system implements efficient memory management for processing multiple faces simultaneously while maintaining processing speed. A custom face tracking algorithm generates unique identifiers for each detected individual, enabling emotion tracking across video frames without storing identifying information.
*   **Emotion Analysis System:** Implemented a two-stage emotion detection pipeline where cropped facial images are processed through a deep learning model to extract emotion probabilities across seven basic emotions. The system maintains temporal consistency in emotion detection while operating within the hardware constraints of the Jetson Nano, achieving real-time performance through optimized model quantization and parallel processing.
*   **Audio Processing Pipeline:** Developed a parallel audio processing system that performs real-time speech-to-text conversion, synchronizing timestamps with emotion data for comprehensive meeting analysis. The system includes noise reduction and speaker separation capabilities to improve transcription accuracy.

## Project Achievements

*   **Internal Analytics:** Deployed system successfully analyzes audience emotional responses during team presentations and internal events, providing real-time engagement insights.
*   **Performance Metrics:** Generated analytics helped optimize presentation content and delivery methods, leading to improved audience engagement and comprehension rates.

## Technical Stack

*   Jetson Nano, CUDA, TensorRT, Docker
*   Computer Vision Models, Emotion Detection Networks
*   Privacy-Preserving Data Handling
*   Azure Blob Storage, Real-time Data Streaming`,
    featuredImage: "/images/projects/meeting_intelligence.png",
    technologies: [
      { name: "Jetson Nano", category: "Platform" },
      { name: "CUDA", category: "Framework" },
      { name: "TensorRT", category: "Framework" },
      { name: "Docker", category: "Tool" },
      { name: "Computer Vision", category: "AI Model" },
      { name: "Emotion Detection", category: "AI Model" },
      { name: "Privacy-Preserving Data Handling", category: "Tool" },
      { name: "Azure Blob Storage", category: "Tool" },
      { name: "Real-time Data Streaming", category: "Tool" },
      { name: "Python", category: "Language" },
    ],
    featured: true,
    order: 4,
  },
  {
    id: "humanoid-robot",
    title: "Humanoid Robot Optimization",
    slug: "humanoid-robot-optimization",
    category: "Robotics",
    tags: ["Control Systems", "Humanoid", "C++", "FreeRTOS", "Arduino", "Electronics", "Freelance"],
    description: "Led a team in reviewing and optimizing an educational humanoid robot, enhancing its control systems and electronics for corporate presentations.",
    content: `## Project Overview
Led a specialized three-person engineering team in conducting a comprehensive system review and optimization of an educational humanoid robot. The project involved thorough analysis and enhancement of a wheeled humanoid platform featuring articulated joints and an interactive display interface, transforming it into a reliable corporate presentation tool.

## Technical Implementation

*   **Control System Architecture:** Implemented a distributed control system based on a master-slave architecture, utilizing real-time radio communication with redundant error checking.
*   **Interface and Electronics:** Redesigned the power distribution network with individual servo current monitoring and thermal protection circuits, ensuring reliable operation during extended presentations.

## Key Achievements

*   Successfully coordinated complete system review and enhancement.
*   Implemented robust error handling and safety systems.`,
    featuredImage: "/images/projects/tedy_robo.jpeg",
    gallery: ["/images/projects/tedy_controle.jpeg"],
    technologies: [
      { name: "Arduino", category: "Platform" },
      { name: "C++", category: "Language" },
      { name: "FreeRTOS", category: "Framework" },
      { name: "Servo Control", category: "Tool" },
      { name: "Radio Communication", category: "Tool" },
      { name: "Power Management", category: "Tool" },
      { name: "Human-Robot Interaction", category: "Tool" },
    ],
    featured: false,
    order: 3,
  },
  {
    id: "combat-robotics",
    title: "Combat Robotics (Project Neon)",
    slug: "combat-robotics-neon",
    category: "Robotics",
    tags: ["Combat Robots", "ESP32", "FreeRTOS", "C++", "Control Systems", "Hardware", "Titanium"],
    description: "Led the development of four combat robots, implementing comprehensive solutions across electronics, mechanics, and control systems.",
    content: `## Project Overview
Led the development of four combat robots, implementing comprehensive solutions across electronics, mechanics, and control systems. The project demonstrated expertise in advanced materials, power electronics, and real-time control systems.

## Technical Implementation

*   **Control System Architecture:** Leveraged sophisticated ESP32-based control software featuring wireless PS4 controller integration, responsive control algorithms (sub-10ms latency), and comprehensive fail-safe protocols.
*   **Mechanical Engineering:** Incorporated Grade 5 Titanium for critical components, utilizing CAD-simulated load-bearing structures and custom 3D-printed parts optimized for weight distribution and impact resistance.
*   **Power Electronics:** Centered around custom-designed BLDC motor controllers, engineered power distribution network, thermal management solutions, and comprehensive protection circuits.

## Key Achievements

*   Successfully developed and deployed four combat-ready robots.
*   Implemented robust wireless communication with fallback modes.
*   Created reusable hardware and software frameworks.`,
    featuredImage: "/images/projects/bitu_robo.jpeg",
    gallery: [
      "/images/projects/cirrose.jpeg",
      "/images/projects/doente_tangenciado.jpeg",
      "/images/projects/bitu_simulacao_arma.jpeg",
    ],
    technologies: [
      { name: "ESP32", category: "Platform" },
      { name: "C++", category: "Language" },
      { name: "FreeRTOS", category: "Framework" },
      { name: "BLDC Motor Control", category: "Tool" },
      { name: "PS4 Controller Interface", category: "Tool" },
      { name: "Bluetooth", category: "Tool" },
      { name: "CAD", category: "Tool" },
      { name: "3D Printing", category: "Tool" },
      { name: "Power Electronics", category: "Tool" },
    ],
    links: [
      { type: "github", url: "https://github.com/project-neon/combate.git", label: "project-neon-combate" }
    ],
    featured: true,
    order: 6,
  },
  {
    id: "weather-monitoring",
    title: "Intelligent Weather Monitoring System",
    slug: "intelligent-weather-monitoring",
    category: "Automation",
    tags: ["IoT", "ESP32", "FreeRTOS", "Sensors", "C++", "Embedded Systems", "MQTT"],
    description: "Engineered an advanced weather monitoring and equipment protection system for surveillance cameras using environmental sensing.",
    content: `## Project Overview
Engineered an advanced weather monitoring and equipment protection system for a surveillance camera installation. The system utilized sophisticated environmental sensing and real-time data processing to preemptively protect sensitive equipment from adverse weather conditions. Focused on embedded systems development, sensor integration, and electrical system design.

## Technical Implementation

*   **Embedded Processing Architecture:** Developed a sophisticated multi-core processing system on ESP32 utilizing FreeRTOS for parallel sensor data acquisition and processing. Implemented dedicated tasks, task prioritization, and interrupt handling for real-time constraints.
*   **Sensor Integration and Signal Processing:** Engineered comprehensive sensor integration (anemometers, humidity, temperature, pluviometers). Implemented real-time filtering and calibration using custom DSP algorithms.
*   **Power and Signal Distribution:** Designed and implemented a robust power distribution network with signal conditioning, voltage regulation, protection mechanisms, and smart power management (sleep modes, dynamic voltage scaling).

## System Architecture Highlights

*   Multi-core task distribution for parallel sensor processing.
*   Real-time weather prediction algorithm using sensor fusion.
*   Redundant communication channels with server verification.
*   Adaptive power management system.
*   Fault-tolerant protection mechanisms.`,
    featuredImage: "/images/projects/weather_system.png",
    technologies: [
      { name: "ESP32", category: "Platform" },
      { name: "C++", category: "Language" },
      { name: "FreeRTOS", category: "Framework" },
      { name: "Sensor Integration", category: "Tool" },
      { name: "DSP Algorithms", category: "Tool" },
      { name: "MQTT", category: "Tool" },
      { name: "REST API", category: "Tool" },
      { name: "Power Management", category: "Tool" },
    ],
    featured: false,
    order: 7,
  },
  {
    id: "safety-switch",
    title: "High-Current Safety Switch",
    slug: "high-current-safety-switch",
    category: "Hardware",
    tags: ["Combat Robots", "Power Electronics", "Hardware Design", "Manufacturing", "Copper"],
    description: "Engineered and established manufacturing for a high-current safety switch for combat robotics, now widely adopted.",
    content: `## Project Overview
Engineered and established a manufacturing process for a revolutionary high-current safety switch specifically designed for combat robotics applications. The innovation addresses a critical need for reliable, accessible power control systems handling extreme current loads while maintaining structural integrity under combat conditions. This design has become a standard solution adopted by numerous robotics teams.

## Technical Implementation

*   **Electrical Design:** Developed a robust electrical contact system using precision-machined copper plates and a specialized copper bolt mechanism, achieving continuous load handling of 160A.
*   **Thermal Management:** Implemented an innovative thermal solution using high-temperature modeling clay for superior heat dissipation and electrical isolation.
*   **Manufacturing Process:** Created a streamlined production methodology incorporating precise copper fabrication, specialized threading, and optimized 3D printing (TPU) for the enclosure.

## Technical Specifications

*   Continuous Current Rating: 160A
*   Sustained Operation Time: 3+ minutes at max load
*   Protection Rating: Impact-resistant TPU enclosure

## Impact and Recognition

*   Widely adopted by multiple combat robotics teams across competitions.
*   Created reproducible manufacturing process enabling widespread adoption.`,
    featuredImage: "/images/projects/chave_de_seguranca.jpeg",
    technologies: [
      { name: "Hardware Design", category: "Tool" },
      { name: "Power Electronics", category: "Tool" },
      { name: "Copper Fabrication", category: "Tool" },
      { name: "3D Printing (TPU)", category: "Tool" },
      { name: "Thermal Management", category: "Tool" },
      { name: "Manufacturing Process Design", category: "Tool" },
    ],
    featured: false,
    order: 8,
  },
  {
    id: "wumpus-dql",
    title: "Deep RL for Wumpus World",
    slug: "deep-reinforcement-learning-wumpus",
    category: "Artificial Intelligence",
    tags: ["Deep Q-Learning", "Reinforcement Learning", "PyTorch", "Python", "AI Agent"],
    description: "Developed an AI system applying Deep Q-Learning (DQL) to solve the Wumpus World problem using PyTorch.",
    content: `## Project Overview
Developed an advanced artificial intelligence system applying Deep Q-Learning (DQL) to solve the classic Wumpus World problem. The project demonstrated the practical application of modern reinforcement learning techniques in complex decision-making environments, implementing a sophisticated neural network architecture that learned to navigate dangerous terrain while pursuing objectives.

## Technical Implementation

*   **Environment Architecture:** Engineered a 10x10 grid world environment featuring dynamic elements (gold, Wumpus) and environmental signals (breeze, flash, stench). Incorporated state management with directional sensing.
*   **Neural Network Design:** Implemented a deep neural network (200 -> 18 -> 200 -> 4 neurons) optimized for the action space (forward, left, right, reverse).
*   **Learning Algorithm (DQL):** Developed a comprehensive implementation featuring:
    *   Experience replay buffer (50,000 capacity)
    *   Epsilon-greedy exploration with dynamic decay
    *   Target network architecture
    *   Custom reward function balancing risk and exploration

## Key Achievements

*   Successfully implemented complex DQL architecture.
*   Achieved consistent goal-reaching behavior.
*   Demonstrated effective risk-reward balancing.
*   Developed comprehensive performance visualization system.`,
    featuredImage: "/images/projects/wumpus1.png",
    gallery: ["/images/projects/wumpus4.png"],
    technologies: [
      { name: "PyTorch", category: "Library" },
      { name: "Python", category: "Language" },
      { name: "Deep Q-Learning", category: "AI Model" },
      { name: "Reinforcement Learning", category: "AI Model" },
      { name: "NumPy", category: "Library" },
      { name: "Matplotlib", category: "Library" },
    ],
    links: [
        { type: "github", url: "https://github.com/GustavoDRL/Wumpus-World-DQL.git", label: "Wumpus-DQN" }
    ],
    featured: false,
    order: 9,
  },
  {
    id: "home-automation",
    title: "Intelligent Home Automation System",
    slug: "intelligent-home-automation",
    category: "Automation",
    tags: ["IoT", "Node.js", "MongoDB", "MQTT", "Machine Learning", "JavaScript", "Arduino"],
    description: "Research project developing a smart home platform with adaptive lighting, behavioral pattern recognition, and web interface.",
    content: `## Project Overview
Research project that developed and implemented in a scale model of a comprehensive smart home automation platform combining IoT devices, machine learning, and web technologies. The experimental system featured adaptive lighting control, behavioral pattern recognition, and a user-friendly web interface, demonstrating the practical implementation of modern home automation concepts through a functional prototype.

## Technical Implementation

*   **Web Application Architecture:** Engineered a responsive web interface using Node.js and Express for device control and monitoring. Frontend utilized vanilla JavaScript with Material-UI components, providing real-time updates via MQTT.
*   **Database and Analytics:** Implemented MongoDB for storing user preferences, history, and patterns. Utilized data analytics for predictive automation and personalized adjustments.
*   **Intelligent Control Systems:** Developed adaptive lighting control (color temp, intensity) based on time, ambient light, and learned preferences. Incorporated ML models trained on user behavior for routine automation.

## Key Features

*   Predictive Automation: ML system analyzing user patterns.
*   Adaptive Lighting: Dynamic light control.
*   Real-time Monitoring: Dashboard for system status/analytics.
*   Mobile Integration: Responsive design.

## Research Outcomes and Achievements

*   Successfully implemented and validated predictive automation concepts via scale model.
*   Created a modular system architecture for future expansion.
*   Demonstrated practical application of IoT, ML, and web tech in home automation.`,
    featuredImage: "/images/projects/home-placeholder.png",
    technologies: [
      { name: "Node.js", category: "Framework" },
      { name: "JavaScript", category: "Language" },
      { name: "Express", category: "Library" },
      { name: "MongoDB", category: "Tool" },
      { name: "MQTT", category: "Tool" },
      { name: "TensorFlow.js", category: "Library" },
      { name: "Machine Learning", category: "AI Model" },
      { name: "Arduino", category: "Platform" },
      { name: "Material-UI", category: "Library" },
    ],
    featured: false,
    order: 10,
  },
]; 