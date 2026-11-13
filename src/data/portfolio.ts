export interface Profile {
  name: string;
  logo: string;
  badge: string;
  headline: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resume: string;
  photo: string;
}

export interface DetailItem {
  label: string;
  value: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  decimals: number;
}

export interface About {
  summary: string;
  details: DetailItem[];
  interests: string[];
  stats: StatItem[];
}

export interface EducationItem {
  school: string;
  detail: string;
  period: string;
}

export interface SkillsMap {
  [category: string]: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tech: string[];
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  fullTitle?: string;
  year: string;
  tech: string[];
  description: string;
  features: string[];
  github: string;
  demo: string;
}

export interface AchievementItem {
  icon: 'users' | 'trophy' | 'medal' | 'award';
  title: string;
  text: string;
}

export const profile: Profile = {
  name: "Sharda Thakur",
  logo: "<ST/>",
  badge: "AI/ML Enthusiast | Open to Opportunities",
  headline: "An AI/ML Engineer & Developer",
  tagline:
    "Exploring the intersection of intelligent algorithms, data, and technology to build meaningful real-world solutions.",
  email: "thakursharda2007@gmail.com",
  phone: "+91-8278857967",
  location: "Bilaspur, Himachal Pradesh",
  github: "https://github.com/thakursharda2007",
  linkedin: "https://www.linkedin.com/in/sharda-thakur-14907a374/",
  resume: "/Sharda_Thakur_Resume.pdf",
  photo: "/images/sharda.jpg",
};

export const about: About = {
  summary:
    "An Electronics and Communication Engineering student with a strong interest in Artificial Intelligence and Machine Learning. Experienced in Python, Deep Learning, Graph Neural Networks, and full-stack AI applications through internships and academic projects. Passionate about exploring emerging technologies and developing intelligent solutions.",
  details: [
    { label: "Location", value: "Bilaspur, Himachal Pradesh" },
    { label: "College", value: "Rajiv Gandhi Government Engineering College, Nagrota Bagwan" },
    { label: "Degree", value: "B.Tech in Electronics & Communication (2022 - 2026)" },
    { label: "Specialization", value: "AI & Machine Learning" },
  ],
  interests: [
    "Artificial Intelligence", "Machine Learning", "Deep Learning",
    "Graph Neural Networks", "Computer Vision", "Data Science",
    "Neural Networks", "Full-Stack Development",
  ],
  stats: [
    { label: "B.Tech CGPA", value: 7.81, suffix: "", decimals: 2 },
    { label: "Class XII (PCM)", value: 88.9, suffix: "%", decimals: 1 },
    { label: "Class X", value: 93.2, suffix: "%", decimals: 1 },
  ],
};

export const education: EducationItem[] = [
  { school: "Rajiv Gandhi Govt. Engineering College, Nagrota Bagwan", detail: "B.Tech in Electronics and Communication, CGPA 7.81", period: "2022 - 2026" },
  { school: "S.A.K.S. Govt. Senior Secondary School, Jhandutta, Bilaspur (H.P.)", detail: "Class XII (PCM), HPBOSE, 88.9%", period: "2022" },
  { school: "Rahan Shiksha Niketan School, Jhandutta, Bilaspur (H.P.)", detail: "Class X, HPBOSE, 93.2%", period: "2020" },
];

export const skills: SkillsMap = {
  "Programming Languages": ["Python", "C++", "MATLAB"],
  "Libraries & Frameworks": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch"],
  "Tools": ["Google Colab", "PyCharm", "Kaggle", "MS Excel", "MS PowerPoint"],
  "Core Concepts": ["Object-Oriented Programming", "Digital Electronics", "Machine Learning", "Deep Learning", "Neural Networks"],
};

export const experience: ExperienceItem[] = [
  {
    company: "NIT Hamirpur",
    role: "AI and ML Intern (AI and ML using Python)",
    period: "Jan 2026 - May 2026",
    tech: ["Python", "Machine Learning", "Graph Neural Networks"],
    points: [
      "Studied and implemented Graph Neural Network (GNN) models.",
      "Compared GNN performance with traditional machine learning algorithms using accuracy as the evaluation metric.",
      "Analyzed model performance to identify differences in predictive accuracy across the evaluated algorithms.",
    ],
  },
  {
    company: "Ocean Technology",
    role: "AI and ML Intern (AI and ML using Python)",
    period: "Jun 2025 - Jul 2025",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy"],
    points: [
      "Developed an ML-based model to predict weather conditions using historical weather data.",
      "Preprocessed the dataset and analyzed relevant weather features for model development.",
      "Trained and evaluated the model to assess its prediction accuracy.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "weatheriq",
    title: "WeatherIQ",
    category: "AI-Powered Weather Prediction System",
    year: "2025",
    tech: ["React", "TypeScript", "FastAPI", "Scikit-learn", "Open-Meteo API"],
    description:
      "A full-stack weather forecasting application integrating real-time weather data, hourly forecasts, 7-day predictions, and interactive analytics dashboards.",
    features: [
      "Real-time weather data and hourly forecasts",
      "7-day weather predictions",
      "Scikit-learn ML pipeline predicting temperature from historical weather data",
      "Interactive charts for temperature trends, precipitation and humidity",
      "Model performance visualization",
    ],
    github: "https://github.com/thakursharda2007/weatherai",
    demo: "",
  },
  {
    id: "gnn-vs-ml",
    title: "GNNs vs Traditional ML",
    category: "Machine Learning Research Project",
    fullTitle: "Comparative Analysis of Graph Neural Networks and Traditional Machine Learning Algorithms",
    year: "2026",
    tech: ["Python", "PyTorch Geometric", "Scikit-learn", "GCN", "GraphSAGE", "GAT"],
    description:
      "A comparative research framework evaluating Graph Neural Networks against traditional machine learning algorithms.",
    features: [
      "Implemented GCN, GraphSAGE and GAT with PyTorch Geometric",
      "Compared Logistic Regression, Random Forest and SVM using Scikit-learn",
      "Evaluated accuracy, precision, recall, F1-score, training time and inference latency",
      "Interactive dashboard for dataset exploration, graph visualization, model comparison and experiment analysis",
    ],
    github: "https://github.com/thakursharda2007/graphneural",
    demo: "",
  },
  {
    id: "nids",
    title: "Network Intrusion Detection System",
    category: "Cybersecurity & Machine Learning",
    year: "2025",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    description:
      "An AI-powered Network Intrusion Detection System (NIDS) that identifies malicious network traffic and potential cyberattacks.",
    features: [
      "Data preprocessing and feature engineering",
      "Supervised ML classification of network traffic",
      "Evaluation using precision, recall, F1-score and confusion matrices",
      "Security analytics dashboard for traffic classifications and attack patterns",
    ],
    github: "https://github.com/thakursharda2007/NID-syatem",
    demo: "",
  },
];

export const achievements: AchievementItem[] = [
  { icon: "users", title: "Head of Cultural Club, Nemesis Society", text: "Led cultural activities and supported the organisation of college events and extra-curricular programs." },
  { icon: "trophy", title: "First Prize, College-Level Quiz Competition", text: "" },
  { icon: "medal", title: "Top 10 Students in Class", text: "Secured a position among the top 10 students in the class." },
  { icon: "award", title: "Participation Certificates", text: "College-level cultural and extra-curricular activities." },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
