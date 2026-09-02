// ─── All portfolio content ────────────────────────────────────────────────────

export const hero = {
  name: 'SUSHANT',
  title: 'FULL-STACK DEVELOPER',
  tagline: 'Building scalable web experiences & turning data into meaningful insights.',
  status: 'B.Tech CSE & IT · REVA University',
}

export const about = {
  intro: "I'm Sushant — a final-year Computer Science & Information Technology student at REVA University who enjoys building full-stack applications and working with data.",
  body: [
    "I build full-stack web applications using React.js, Node.js and MongoDB, while also working with Python, SQL and Power BI to turn raw data into useful insights.",
    "I enjoy solving problems, debugging systems, learning new technologies and building practical applications.",
  ],
  focus: [
    { label: 'Full-Stack Dev', icon: '⚡', desc: 'React, Node.js, MongoDB, REST APIs' },
    { label: 'Data Analytics', icon: '📊', desc: 'Python, SQL, Power BI, DAX' },
    { label: 'Problem Solving', icon: '🧩', desc: 'Algorithms, System Design, Debugging' },
    { label: 'Always Learning', icon: '🚀', desc: 'New frameworks, tools, and paradigms' },
  ],
  education: {
    degree: 'B.Tech in Computer Science and Information Technology',
    university: 'REVA University',
    period: '2023 – 2027',
    status: 'Final Year',
  },
}

export const projects = [
  {
    id: 'campus-event-finder',
    title: 'CAMPUS EVENT FINDER',
    tags: ['FULL-STACK', 'MERN', 'REAL-TIME'],
    category: ['FULL-STACK'],
    featured: true,
    tagline: 'A full-stack campus event discovery & management platform.',
    description:
      'A full-stack campus event discovery and management platform where students can discover, register for and pay for college events while organizers manage events, registrations and attendance from a centralized dashboard.',
    features: [
      'Event discovery and search',
      'Student registration & payments',
      'QR-code tickets & camera-based attendance',
      'Automated digital certificates',
      'Real-time updates via Socket.IO',
      'Organizer / admin dashboard',
      'Event reminders & REST APIs',
      'Multi-role JWT authentication',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs'],
    color: '#6C63FF',
    github: 'https://github.com/SUSHANT-M-GIT/CAMPUS-EVENT-FINDER-',
    live: 'https://campus-event-finder-one.vercel.app/',
    flow: ['Student', 'Event', 'Register', 'Pay', 'QR Ticket', 'Attendance', 'Certificate'],
  },
  {
    id: 'cricket-score-predictor',
    title: 'CRICKET SCORE PREDICTION',
    tags: ['MACHINE LEARNING', 'PYTHON', 'DATA'],
    category: ['MACHINE LEARNING', 'DATA'],
    featured: false,
    tagline: 'ML system predicting T20 final scores from live match conditions.',
    description:
      'A machine-learning system that predicts the final score of a batting team during an ongoing T20 cricket match using current match conditions.',
    features: [
      'Match-condition based prediction',
      'Data preprocessing & feature engineering',
      'Model training & evaluation pipeline',
      'Predicted vs actual analysis',
      'Feature importance visualization',
      'Flask API support',
    ],
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Flask', 'Data Processing'],
    color: '#00D9FF',
    github: 'https://github.com/SUSHANT-M-GIT/cricket-score-predictor',
    live: null,
  },
  {
    id: 'credit-card-dashboard',
    title: 'CREDIT CARD FINANCIAL DASHBOARD',
    tags: ['DATA ANALYTICS', 'POWER BI', 'SQL'],
    category: ['DATA'],
    featured: false,
    tagline: 'Interactive financial analytics dashboard for customer spending insights.',
    description:
      'An interactive financial analytics dashboard designed to understand customer spending behaviour and credit-card usage patterns.',
    features: [
      'Revenue & card type analysis',
      'Spending category breakdown',
      'Quarterly trend visualization',
      'Customer demographics & spending groups',
      'Credit utilization analysis',
      'DAX measures & Power Query transforms',
      'Data cleaning and transformation pipeline',
    ],
    tech: ['Power BI', 'PostgreSQL', 'DAX', 'Power Query'],
    color: '#FF6B6B',
    github: 'https://github.com/SUSHANT-M-GIT/Credit_Card_financial_dashboard',
    live: null,
  },
]

export const skills = {
  languages: [
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
    { name: 'Java', icon: '☕', color: '#ED8B00' },
    { name: 'C++', icon: '⚙️', color: '#00599C' },
    { name: 'SQL', icon: '🗃️', color: '#336791' },
  ],
  frontend: [
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
    { name: 'HTML5', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', icon: '🎨', color: '#1572B6' },
    { name: 'Responsive UI', icon: '📱', color: '#6C63FF' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Express.js', icon: '🚂', color: '#ffffff' },
    { name: 'REST APIs', icon: '🔌', color: '#FF6B6B' },
    { name: 'Socket.IO', icon: '⚡', color: '#010101' },
    { name: 'JWT Auth', icon: '🔐', color: '#000000' },
  ],
  databases: [
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'MySQL', icon: '🐬', color: '#4479A1' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  ],
  data: [
    { name: 'Pandas', icon: '🐼', color: '#150458' },
    { name: 'NumPy', icon: '🔢', color: '#013243' },
    { name: 'Power BI', icon: '📊', color: '#F2C811' },
    { name: 'DAX', icon: '📐', color: '#F2C811' },
    { name: 'Matplotlib', icon: '📈', color: '#11557c' },
  ],
  tools: [
    { name: 'Git', icon: '🌿', color: '#F05032' },
    { name: 'GitHub', icon: '🐙', color: '#ffffff' },
    { name: 'Vercel', icon: '▲', color: '#ffffff' },
    { name: 'CI/CD', icon: '🔄', color: '#6C63FF' },
  ],
  cs: [
    { name: 'DSA', icon: '🌲', color: '#6C63FF' },
    { name: 'OOP', icon: '🧱', color: '#00D9FF' },
    { name: 'DBMS', icon: '🗄️', color: '#FF6B6B' },
    { name: 'Computer Networks', icon: '🌐', color: '#6C63FF' },
    { name: 'SDLC', icon: '🔁', color: '#00D9FF' },
    { name: 'API Integration', icon: '🔗', color: '#FF6B6B' },
  ],
}

export const journey = [
  {
    year: '2023',
    title: 'B.Tech CSE & IT',
    subtitle: 'REVA University',
    desc: 'Began my engineering journey in Computer Science & Information Technology.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Full-Stack Developer Industry Simulation',
    subtitle: 'Internship Studio',
    desc: 'Real-world industry simulation focused on full-stack development practices.',
    type: 'certification',
  },
  {
    year: '2025',
    title: 'AI & ML Masterclass',
    subtitle: 'Eureka Association × REVA University',
    desc: 'Deep-dive into AI and Machine Learning concepts and practical applications.',
    type: 'certification',
  },
  {
    year: '2025',
    title: 'Gemini Certified Student',
    subtitle: 'Google for Education',
    desc: 'Certified in Google Gemini AI tools and their practical applications.',
    type: 'certification',
  },
  {
    year: '2026',
    title: 'Final Year',
    subtitle: 'REVA University',
    desc: 'Working on real-world projects, deepening full-stack and data skills.',
    type: 'current',
  },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING.",
  subheading: 'Have an idea, opportunity, or interesting problem? Let\'s talk.',
  email: 'mishrasushant029@gmail.com',
  location: 'Bangalore, India',
  github: 'https://github.com/SUSHANT-M-GIT',
  linkedin: 'https://www.linkedin.com/in/sushant-sm',
  portfolio: 'https://sushantm-portfolio.vercel.app/',
}
