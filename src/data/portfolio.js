
// ─── HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  name: 'SUSHANT',
  title: 'FULL-STACK DEVELOPER',
  tagline:
    "Full-stack developer who ships real products — from a QR-based campus events platform to an ML phishing detector with 97.75% accuracy.",
  status: 'B.Tech CS & IT · REVA University',
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const about = {
  intro:
    "I'm a final-year CS & IT student at REVA University who builds full-stack products and ML models end to end.",
  body: [
    "My best work is Campus Event Finder, which replaced manual attendance sheets with QR check-in, and a phishing detector that beats standard baselines by 6+ accuracy points.",
    "I'm looking for a full-stack or software developer role where I can ship real features.",
  ],
  education: {
    degree: 'B.Tech in Computer Science and Information Technology',
    university: 'REVA University',
    period: '2023 – 2027',
    location: 'Bangalore, Karnataka',
    // TODO: add CGPA once confirmed
  },
}

// ─── VIRTUAL INTERNSHIP ──────────────────────────────────────────────────────
export const experience = [
  {
    id: 'istudio',
    role: 'iStudio — Virtual Internship (project-based, unpaid)',
    company: 'iStudio',
    period: 'Nov 2025 – Mar 2026',
    type: 'Virtual Internship',
    bullets: [
      'Built TaskFlow, a full-stack task management app using React, Node.js, Express.js and MongoDB Atlas.',
      'Developed a REST API (GET, POST, PUT, DELETE) with search, priority/status filters, sorting and due-date validation.',
      'Deployed the application on Vercel; completed the internship with a verified certificate.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Vercel'],
    projectLink: 'taskflow',
    live: 'https://taskflow-tawny-gamma.vercel.app/',
  },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  // ── 1. Campus Event Finder (featured) ──────────────────────────────────────
  {
    id: 'campus-event-finder',
    title: 'CAMPUS EVENT FINDER',
    tags: ['FULL-STACK', 'MERN', 'REAL-TIME'],
    category: ['FULL-STACK'],
    tier: 'featured',
    screenshot: '/projects/campus-event-finder.png',
    tagline: 'Replaced manual attendance sheets with QR check-in for campus events.',
    description:
      'A full-stack campus event platform with role-based access for 3 roles — students, working professionals, and organizers. Students discover and register for events; organizers create events, manage registrations, and scan QR attendance in real time.',
    metrics: [
      { label: '3 login methods', sub: 'Email OTP · Google · Microsoft' },
      { label: 'QR attendance', sub: 'Replaced manual sheets' },
      { label: 'Real-time', sub: 'Socket.IO notifications' },
    ],
    features: [
      '3 roles: students, working professionals, organizers',
      'Email + OTP, Google OAuth, Microsoft OAuth sign-in',
      '1-click organizer approval via email (SHA-256 token, 24h expiry)',
      'Event creation with banner, venue, capacity, deadlines',
      'QR-code ticket generated on registration, sent by email',
      'Live in-browser QR scanner for attendance',
      'Automated waitlists and real-time seat count (Socket.IO)',
      'PDF attendance certificates generated server-side',
      'Automated reminder emails; event feedback and Q&A comments',
      'Tested API flows: login, registration, QR and attendance',
    ],
    implementation: {
      frontend: 'React + TypeScript — separate student and organizer views.',
      backend: 'Node.js + Express.js — REST APIs for events, registrations, attendance.',
      database: 'MongoDB — events, users, registrations, attendance records.',
      realtime: 'Socket.IO — live seat count and event notifications.',
      auth: 'JWT + role middleware; Google and Microsoft OAuth credential flows.',
      qr: 'QR codes generated on registration; scanned at entry for attendance.',
    },
    // TODO: Case study — one hard problem I solved (e.g. QR race condition, waitlist logic)
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs'],
    color: '#6C63FF',
    github: 'https://github.com/SUSHANT-M-GIT/CAMPUS-EVENT-FINDER-',
    live: 'https://c-e-s.vercel.app',
    flow: ['Sign Up', 'Browse Events', 'Register', 'QR Ticket', 'Attend', 'Scan QR', 'Certificate'],
    adminFlow: ['Create Account', 'Fill Info', 'Select Organizer', 'Wait for Approval', 'Get Confirmation Email', 'Create Event', 'Manage Events'],
  },

  // ── 2. LinkShield — Phishing URL Detector (featured) ───────────────────────
  {
    id: 'linkshield',
    title: 'LINKSHIELD',
    tags: ['MACHINE LEARNING', 'PYTHON', 'DEEP LEARNING'],
    category: ['MACHINE LEARNING'],
    tier: 'featured',
    screenshot: '/projects/linkshield.png',
    tagline: 'CNN-BiLSTM phishing detector — 97.75% accuracy on 339,723 URLs.',
    description:
      'A deep learning phishing URL classifier that fuses a character-level CNN-BiLSTM with 12 structural URL features (length, subdomains, HTTPS, IP indicators). Trained on 339,723 cleaned URLs with a near-even phishing/legitimate split. Deployed as a Streamlit app that returns phishing/legitimate in real time for any URL.',
    metrics: [
      { label: '97.75%', sub: 'Test accuracy' },
      { label: '0.9980', sub: 'ROC-AUC score' },
      { label: '+6 pts', sub: 'vs XGBoost (91.59%)' },
    ],
    features: [
      'Character-level CNN + Bidirectional LSTM hybrid architecture',
      '12 structural URL features: length, subdomains, HTTPS, IP indicators',
      '339,723 cleaned URLs with ~50/50 phishing/legitimate split',
      '97.75% test accuracy; 0.9980 ROC-AUC',
      'Outperforms Random Forest (91.27%) and XGBoost (91.59%) by 6+ points',
      'Character-only ablation variant tested (97.64%) to validate fusion benefit',
      'Deployed as a Streamlit app — real-time phishing/legitimate verdict for any URL',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'Streamlit', 'Pandas', 'NumPy'],
    color: '#0d9488',
    github: 'https://github.com/SUSHANT-M-GIT/Link-Sheild',
    // TODO: Add Streamlit live demo link
    live: null,
    flow: ['Paste URL', 'Extract Features', 'CNN-BiLSTM', 'Feature Fusion', 'Verdict'],
  },

  // ── 3. TaskFlow (selected) ──────────────────────────────────────────────────
  {
    id: 'taskflow',
    title: 'TASKFLOW',
    tags: ['FULL-STACK', 'INTERNSHIP', 'MERN'],
    category: ['FULL-STACK'],
    tier: 'selected',
    screenshot: '/projects/taskflow.png',
    tagline: 'Full-stack task manager built during a virtual internship at iStudio.',
    description:
      'A full-stack task manager with a REST API (GET, POST, PUT, DELETE) persisting to MongoDB Atlas. Supports title search, filters by status and priority, sorting by date or priority, and rejects past due dates via validation. Responsive UI deployed on Vercel.',
    metrics: [
      { label: 'REST API', sub: 'GET POST PUT DELETE' },
      { label: 'MongoDB Atlas', sub: 'Cloud persistence' },
      { label: 'Vercel', sub: 'Live deployment' },
    ],
    features: [
      'REST API — GET, POST, PUT, DELETE task operations',
      'Search tasks by title',
      'Filter by status (Pending, In Progress, Completed) and priority',
      'Sort by due date or priority',
      'Past due-date validation on both frontend and server',
      'Responsive layout',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Vite'],
    color: '#00D9FF',
    github: 'https://github.com/SUSHANT-M-GIT/TASK-MANAGEMENT-APP-',
    live: 'https://taskflow-tawny-gamma.vercel.app/',
    internship: true,
    flow: ['Add Task', 'Set Priority', 'Track Status', 'Search & Filter', 'Complete'],
  },

  // ── 4. Cricket Score Predictor (other) ─────────────────────────────────────
  {
    id: 'cricket-score-predictor',
    title: 'CRICKET SCORE PREDICTION',
    tags: ['MACHINE LEARNING', 'PYTHON'],
    category: ['MACHINE LEARNING'],
    tier: 'other',
    tagline: 'ML model predicting T20 final scores from live match conditions.',
    description:
      'Predicts the final score of a batting team during an ongoing T20 match using live conditions: overs completed, wickets fallen and current run rate.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
    color: '#00D9FF',
    github: 'https://github.com/SUSHANT-M-GIT/cricket-score-predictor',
    live: null,
  },

  // ── 5. Credit Card Dashboard (other) ───────────────────────────────────────
  {
    id: 'credit-card-dashboard',
    title: 'CREDIT CARD FINANCIAL DASHBOARD',
    tags: ['DATA ANALYTICS', 'POWER BI', 'SQL'],
    category: ['DATA'],
    tier: 'other',
    tagline: 'Interactive Power BI dashboard for customer spending analysis.',
    description:
      'An interactive financial analytics dashboard for understanding customer spending behaviour and credit-card usage patterns across demographics, card types and spending categories.',
    tech: ['Power BI', 'PostgreSQL', 'DAX', 'Power Query'],
    color: '#FF6B6B',
    github: 'https://github.com/SUSHANT-M-GIT/Credit_Card_financial_dashboard',
    live: null,
  },
]

// ─── SKILLS ──────────────────────────────────────────────────────────────────
// Matches resume exactly. Java, CI/CD, Computer Networks, System Design, Design Patterns removed.
export const skills = {
  languages: [
    { name: 'Python',      color: '#3776AB' },
    { name: 'SQL',         color: '#336791' },
    { name: 'JavaScript',  color: '#F7DF1E' },
    { name: 'TypeScript',  color: '#3178C6' },
    { name: 'C++',         color: '#00599C' },
  ],
  frontend: [
    { name: 'React.js',    color: '#61DAFB' },
    { name: 'HTML5 & CSS3',color: '#E34F26' },
  ],
  backend: [
    { name: 'Node.js & Express.js', color: '#339933' },
    { name: 'REST API Design',      color: '#FF6B6B' },
    { name: 'JWT Authentication',   color: '#d63aff' },
    { name: 'Socket.IO',            color: '#6C63FF' },
  ],
  databases: [
    { name: 'MongoDB',    color: '#47A248' },
    { name: 'MySQL',      color: '#4479A1' },
    { name: 'PostgreSQL', color: '#336791' },
  ],
  dataML: [
    { name: 'Pandas & NumPy',    color: '#150458' },
    { name: 'Matplotlib',        color: '#11557c' },
    { name: 'Scikit-learn',      color: '#F7931E' },
    { name: 'TensorFlow/Keras',  color: '#FF6F00' },
    { name: 'XGBoost',           color: '#337AB7' },
    { name: 'Streamlit',         color: '#FF4B4B' },
    { name: 'Power BI',          color: '#F2C811' },
    { name: 'DAX',               color: '#F2C811' },
  ],
  cloudDeploy: [
    { name: 'Git & GitHub',    color: '#F05032' },
    { name: 'Vercel & Render', color: '#6C63FF' },
  ],
  core: [
    { name: 'DSA',              color: '#6C63FF' },
    { name: 'OOP',              color: '#00D9FF' },
    { name: 'Problem-Solving & Debugging', color: '#FF6B6B' },
  ],
}

// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const education = [
  {
    id: 'reva',
    institution: 'REVA University',
    degree: 'B.Tech — Computer Science & Information Technology',
    period: '2023 – 2027',
    location: 'Bangalore, Karnataka',
    // TODO: Add CGPA once confirmed
    primary: true,
  },
  {
    id: 'kv',
    institution: 'KV AFS Avadi, Chennai',
    degree: 'Class XII & X — CBSE',
    period: null,
    location: null,
    primary: false,
  },
]

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const certifications = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2026',
  },
  {
    title: 'Leadership Principles for Software Engineers',
    issuer: 'Advancing Women in Tech via Coursera',
    date: 'Sep 2026',
  },
  {
    title: 'Gemini Certified Student',
    issuer: 'Google for Education',
    date: '2025',
  },
  {
    title: 'AI & ML Masterclass',
    issuer: 'Eureka Association in collaboration with REVA University',
    date: '2025',
  },
]

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const contact = {
  heading: "LET'S BUILD SOMETHING",
  subheading: 'Open to full-stack and software developer roles.',
  email: 'mishrasushant029@gmail.com',
  location: 'Bangalore, India',
  github: 'https://github.com/SUSHANT-M-GIT',
  linkedin: 'https://www.linkedin.com/in/sushant-sm',
  portfolio: 'https://about-me-rho-one.vercel.app/',
}
