// ─────────────────────────────────────────────
//  portfolioData.js  —  All static content
// ─────────────────────────────────────────────
import profilePhoto from "../assets/profile.jpg";

export const ROLES = [
  "Software Developer",
  "Data Engineer",
  "Data Analyst",
  "Pipeline Architect",
  "ETL Specialist",
  "Cloud Data Expert",
  "Streaming Wizard",
];

export const TECH_PILLS = ["React", "Python", "SQL", "Spark", "Snowflake", "Docker"];

export const NAV_LINKS = ["Home", "Projects", "Skills", "Experience","Education", "Contact"];

export const PROJECTS = [
    {
    icon: "🎬",
    title: "Movie Search App",
    desc: "Built a React-based Movie Search App using OMDb API to fetch and display real-time movie data with a clean, responsive UI.",
    tags: ["React", "OMDB API", "Tailwind CSS", "Bootstrap"],
    metric: "Api Fetching",
  },
  {
    icon: "⚡",
    title: "Real-Time Stream Pipeline",
    desc: "Built a Kafka + Spark Streaming pipeline processing 2M events/sec with sub-100ms latency for financial fraud detection.",
    tags: ["Apache Kafka", "Spark", "Python", "AWS Kinesis"],
    metric: "2M events/sec",
  },
  {
  icon: "🛒",
  title: "ShopEasy Web Application",
  desc: "A responsive e-commerce web app for browsing and ordering shoes and clothing with a smooth user experience.",
  tags: ["Javascript", "React", "Tailwind Css", "Vite","HTML"],
  metric: "E-commerce Web",
  },
  {
    icon: "🔄",
    title: "Automated ETL Orchestration",
    desc: "Designed 120+ Airflow DAGs replacing manual scripts, cutting pipeline failure rate from 12% to 0.3%.",
    tags: ["Apache Airflow", "PostgreSQL", "Docker", "GCP"],
    metric: "0.3% failure rate",
  },
  {
    icon: "📡",
    title: "Data Quality Framework",
    desc: "Implemented Great Expectations + custom monitors across 40 pipelines with automated Slack alerting.",
    tags: ["Great Expectations", "Python", "Slack API", "Snowflake"],
    metric: "40 pipelines monitored",
  },
  {
    icon: "⛓️",
    title: "Supply chain data analytics",
    desc: "Analyzed OTIF service levels to identify and resolve customer problems before AtliQ Mart expanded its operations.",
    tags: ["FMCG domain", "PowerBI", "Excel"],
    metric: "2M events/sec",
  },
  {
    icon: "💰",
    title: "Fraud detection Engine Using SQL",
    desc: "Implements rule-based SQL detection for high-risk transactions, rapid succession, and impossible travel patterns",
    tags: ["mySQL", "Joins", "Sub-queries"],
    metric: "2M events/sec",
  },
  {
    icon: "👔",
    title: "FashionHub Web App",
    desc: "A modern e-commerce web application that allows users to browse, search, and purchase clothing products, online with a seamless shopping experience.",
    tags: ["Javascript", "React", "Tailwind Css", "Vite"],
    metric: "2M events/sec",
  },
];

export const SKILLS = [
  { name: "Apache Spark",      level: 93, cat: "Processing"    },
  { name: "Apache Kafka",      level: 88, cat: "Streaming"     },
  { name: "Python / PySpark",  level: 95, cat: "Languages"     },
  { name: "SQL / dbt",         level: 91, cat: "Transform"     },
  { name: "Airflow / Prefect", level: 85, cat: "Orchestration" },
  { name: "AWS / Azure / GCP", level: 82, cat: "Cloud"         },
  { name: "Snowflake / BigQuery", level: 87, cat: "Warehouse"  },
  { name: "Docker / Kubernetes",  level: 78, cat: "DevOps"     },
];

// ── Software Development Skills ──
export const SOFTWARE_SKILLS = [
  { name: "React / Next.js",    level: 85, cat: "Frontend"  },
  { name: "Node.js / Express",  level: 80, cat: "Backend"   },
  { name: "JavaScript",         level: 82, cat: "Languages" },
  { name: "REST / GraphQL",     level: 79, cat: "API"       },
  { name: "Git / CI/CD",        level: 88, cat: "DevOps"    },
  { name: "PostgreSQL / MySQL", level: 84, cat: "Database"  },
  { name: "Jest / Pytest",      level: 76, cat: "Testing"   },
  { name: "Vercel",       level: 83, cat: "Tools"   },
];
export const TIMELINE = [
  {
    year: "Feb 2026 - Present",
    role: "Jr Data Analyst",
    company: "Kay Bee Bio Oraganics Pvt Ltd",
    desc: "Analyzed datasets using Python (Pandas, NumPy) to identify trends and data anomalies. Performed data cleaning, validation, and transformation. Generated ad hoc reports and collaborated with stakeholders to deliver analytical solutions.",
  },
  {
    year: "Aug 2025 - Dec 2025",
    role: "Data Analyst Intern",
    company: "World Box Technologies Pvt Ltd",
    desc: "Assisted in analyzing datasets using SQL and Excel to generate actionable insights for business decisions Developed dashboards and reports to track key metrics and improve data-driven performance",
  },
  {
    year: "Jan 2025 - july 2025",
    role: "Software developer",
    company: "Midnight Solutions - Freelancing Org",
    desc: "Worked as a React Developer at Midnight Solutions, building responsive and user-friendly web applications using React.js and modern frontend technologies.",
  },
];

export const OWNER = {
  name: "Aniket Itkhede",
  email: "aniketitkhede23@gmail.com",
  tagline: "Data & Software Engineering · Pipeline Architecture",
  bio: "I build scalable data pipelines and robust software systems, combining data engineering and software development to deliver efficient, cloud-native solutions that drive business decisions.",
  linkedin: "https://linkedin.com/in/aniket-itkhede",
  github:   "https://github.com/AniketItkhede",
  resume:   "https://drive.google.com/file/d/1-gCtDpGm3MJdmDQlN9vZnv6TiePD0TJB/view?usp=sharing",

  // ── Swap this with your real photo path or base64 ──
  photo: profilePhoto,
};



export const EDUCATION = [
  {
    degree: "B.E in ECE",
    institution: "Amravati University",
    year: "2021–2025",
    grade: "7.57 CGPA",
    icon: "🎓",
    highlights: ["Data Structures & Algorithms", "Embedded Systems", "Core Electronics", "Matlab"],
  },
  {
    degree: "HSC",
    institution: "Maharashtra State Board",
    year: "2021",
    grade: "Score: 87%",
    icon: "🏛️",
    highlights: ["General Science", "PCM", "Mathematics", "Computer Science","Arithmatic Cal"],
  },
  {
    degree: "SSC",
    institution: "Maharashtra State Board",
    year: "2019",
    grade: "Score: 75%",
    icon: "🏛️",
    highlights: ["Academics", "General Studies", "General Science", "Sports","Communication"],
  },
  {
    degree: "Hacker Rank SQL (intermiddiate) Certificate",
    institution: "HackerRank",
    year: "2026",
    grade: "Certified",
    icon: "🎖️",
    highlights: ["SQL", "Sub-quries", "joins", "Complex SQL Problem","DML","DDL"],
  },
];
