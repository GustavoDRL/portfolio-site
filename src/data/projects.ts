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
  category: 'Autonomous Systems' | 'Artificial Intelligence' | 'Robotics' | 'Web Development' | 'Hardware' | 'Automation' | 'Academic Publications';
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
    order: 4,
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
    order: 5,
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
    featuredImage: "/images/projects/financial_analysis.webp",
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
    order: 6,
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
    featuredImage: "/images/projects/meeting_intelligence.webp",
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
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
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
    order: 11,
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
    order: 12,
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
    order: 13,
  },
  {
    id: "stroke-subtype-classification",
    title: "Classification of Ischemic Stroke Subtypes Using Machine Learning",
    slug: "ml-stroke-subtype-classification",
    category: "Academic Publications",
    tags: ["Machine Learning", "Ischemic Stroke", "Random Forest", "XGBoost", "Healthcare AI", "OCSP Classification", "Neuroscience"],
    description: "Published research applying ML models to classify ischemic stroke subtypes using the International Stroke Trial dataset, achieving perfect classification with Random Forest and XGBoost.",
    content: `## Abstract

Ischemic stroke subtype classification supports prognosis and treatment but can be challenging in acute care. This study develops and evaluates Machine Learning models for automated OCSP-based ischemic stroke subtype classification using clinical data.

Using 13,056 cases from the International Stroke Trial, we trained Random Forest, XGBoost, Logistic Regression, Support Vector Machine, and k-Nearest Neighbors models. Performance was assessed using 10-fold stratified cross-validation.

## Key Results

*   **Random Forest & XGBoost**: Perfect performance (all metrics = 1.000 ± 0.000)
*   **Logistic Regression & SVM**: Near-perfect (accuracy ≈ 0.998, AUC-ROC = 1.000)
*   **KNN**: Lower sensitivity for POCS subtype (macro average = 0.898)

Clinical variables strongly associated with stroke subtypes (p < 0.001) included level of consciousness, visible infarct on CT, atrial fibrillation, and neurological deficits (face, arm/hand, leg/foot, dysphasia, hemianopia, visuospatial disorder, brainstem/cerebellar signs).

## Conclusion

ML models, particularly Random Forest and XGBoost, enable highly accurate ischemic stroke subtype classification using routine clinical data. These findings support the development of decision support tools that can assist clinicians in low-resource or time-sensitive contexts.

## Publication Details

*   **Journal**: Brazilian Journal of Neurosurgery (JBNC)
*   **Citation**: J Bras Neurocirur 36(3):328-337, 2025
*   **DOI**: 10.22290/jbnc.2025.360312
*   **Received**: May 13, 2025
*   **Accepted**: June 4, 2025

## Authors

Samuel Pedro Pereira Silveira¹, **Gustavo del Rio Lima²**, Gustavo Branquinho Alberto³, Luiza Carolina Moreira Marcolino³, Larissa Batista Xavier³, Carlos Umberto Pereira⁴, Murillo Martins Correia⁵, Roberto Alexandre Dezena³˒⁵

*¹Faculty of Medicine, UFTM | ²Center for Mathematics, Computing and Cognition, UFABC | ³Hospital das Clínicas, UFTM | ⁴Neurosurgery Division, UFS | ⁵Neurosurgery Division, UFTM*`,
    featuredImage: "/images/articles/stroke-classification-cover.png",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "scikit-learn", category: "Library" },
      { name: "Random Forest", category: "AI Model" },
      { name: "XGBoost", category: "AI Model" },
      { name: "Logistic Regression", category: "AI Model" },
      { name: "SVM", category: "AI Model" },
      { name: "Data Analysis", category: "Tool" },
    ],
    links: [
      { type: "paper", url: "https://jbnc.org.br/artigo/classification-of-ischemic-stroke-subtypes-using-machine-learning-insights-from-the-international-stroke-trial-dataset/1735", label: "Read Paper (JBNC)" },
      { type: "paper", url: "https://doi.org/10.22290/jbnc.2025.360312", label: "DOI" },
    ],
    featured: true,
    order: 3,
  },
  {
    id: "vanguarda-seller-center",
    title: "Vanguarda Seller Service Center",
    slug: "vanguarda-seller-service-center",
    category: "Web Development",
    tags: ["Full Stack", "Node.js", "React", "TypeScript", "Fastify", "Prisma", "Docker", "PostgreSQL", "Redis", "Vanguarda Consórcio"],
    description: "Full-stack seller service center developed for Vanguarda Consórcio, enabling complete consortium sales management through a modern React interface and a robust Node.js backend.",
    content: `## Project Overview

Developed for **Vanguarda Consórcio**, this Seller Service Center is a comprehensive consortium administration system designed to streamline sales operations and partner management. The platform combines a modern React frontend with a high-performance Node.js backend, all containerized with Docker for reliable deployment.

## Backend

Built with Fastify and TypeScript, the backend provides a fast and scalable API layer. It uses Prisma ORM for database operations with PostgreSQL, ensuring type-safe data access. Redis powers the background job queue through BullMQ, handling automated data imports and synchronization tasks. The system implements a robust two-layer authentication combining API tokens with JWT-based user authentication. OpenTelemetry integration enables comprehensive observability and performance monitoring.

## Frontend

The user interface is built with React 19 and TypeScript, using Vite for fast development and optimized builds. Tailwind CSS provides a clean, responsive design system. React Query manages server state and caching, while Recharts powers the interactive dashboards and analytics visualizations. The application implements role-based routing, showing different interfaces for authenticated and non-authenticated users.

## Key Features

*   **Consortium Management**: Complete lifecycle management for consortium operations
*   **Partner Administration**: Management of partners and partner categories with detailed tracking
*   **Sales Pipeline**: End-to-end sales process with external webhook integrations
*   **Dashboard & Analytics**: Real-time metrics and performance visualization
*   **Document Signing**: Integration with ClickSign for digital contract signatures
*   **Data Synchronization**: Automated imports from external systems

## Infrastructure

The entire application runs in Docker containers, orchestrating PostgreSQL, Redis, backend, and frontend services. Multi-stage Docker builds ensure optimized production images, while built-in health checks monitor database connectivity and service availability.`,
    featuredImage: "/images/projects/vanguarda-seller-center.png",
    technologies: [
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "Framework" },
      { name: "Fastify", category: "Framework" },
      { name: "React", category: "Framework" },
      { name: "Vite", category: "Tool" },
      { name: "Prisma", category: "Library" },
      { name: "PostgreSQL", category: "Tool" },
      { name: "Redis", category: "Tool" },
      { name: "BullMQ", category: "Library" },
      { name: "Docker", category: "Tool" },
      { name: "Tailwind CSS", category: "Framework" },
    ],
    featured: true,
    order: 2,
  },
  {
    id: "vanguarda-multiagents",
    title: "Vanguarda Multi-Agents",
    slug: "vanguarda-multi-agents",
    category: "Artificial Intelligence",
    tags: ["Multi-Agent", "RAG", "LLM", "CrewAI", "FastAPI", "Vue.js", "WhatsApp API", "FAISS", "Python", "Vanguarda Consórcio"],
    description: "Enterprise multi-agent RAG system developed for Vanguarda Consórcio with WhatsApp Business API integration, featuring specialized AI agents for sales, support, and lead qualification.",
    content: `## Project Overview

Developed for **Vanguarda Consórcio**, this is an enterprise-grade multi-agent RAG (Retrieval Augmented Generation) system with WhatsApp Business API integration. Built on FastAPI (backend) and Vue.js 3 (frontend), it provides intelligent customer interaction through specialized AI agents.

## Multi-Agent Architecture

The system employs a **CrewAI-based multi-agent system** with specialized agents for different tasks:

*   **TriagemAgent**: Initial classification and intelligent routing of incoming messages
*   **VendasAgent**: Sales qualification, lead conversion, and opportunity management
*   **DuvidasAgent**: Question answering and customer education using RAG
*   **EncerramentoAgent**: Conversation finalization and CRM integration

## Core Technical Features

*   **LLM Router**: Intelligent routing between Groq (primary) and OpenAI (fallback) with circuit breaker pattern
*   **Document Processing**: PDF handling with Docling, smart chunking (1200 tokens), and thumbnail generation
*   **Vector Store**: FAISS-based similarity search with OpenAI embeddings (text-embedding-3-small, 768D)
*   **Session Management**: Redis-based with in-memory fallback for reliability

## Document Management System

*   **Unified Service**: Complete document lifecycle management (upload, processing, chunking, embeddings, retrieval)
*   **Smart Chunking**: Automatic text extraction with boundary detection (1200 chars, 150 overlap)
*   **Hybrid Architecture**: FAISS + PostgreSQL for optimal performance
*   **TTL-based Caching**: 300-second cache for query optimization

## WhatsApp Integration

*   **Webhook Configuration**: ngrok tunnel for development, Meta Developer Console integration
*   **Security**: Signature verification for all incoming webhooks
*   **Smart Routing**: Content-based routing with session continuity
*   **CRM Integration**: Automatic lead tracking and conversation history

## Enterprise Features

*   **Proactive Monitoring**: Real-time worker health tracking with automatic recovery
*   **Alert System**: Notifications for stopped workers, stalled processing, and error spikes
*   **RAG Synchronization**: Automatic FAISS-PostgreSQL sync checking and repair
*   **Cost Tracking**: LLM usage monitoring for budget management`,
    featuredImage: "/images/projects/vanguarda-multiagents.png",
    technologies: [
      { name: "Python", category: "Language" },
      { name: "FastAPI", category: "Framework" },
      { name: "Vue.js 3", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "CrewAI", category: "Framework" },
      { name: "FAISS", category: "Library" },
      { name: "OpenAI API", category: "AI Model" },
      { name: "Groq API", category: "AI Model" },
      { name: "Redis", category: "Tool" },
      { name: "PostgreSQL", category: "Tool" },
      { name: "WhatsApp Business API", category: "Platform" },
    ],
    featured: true,
    order: 1,
  },
]; 