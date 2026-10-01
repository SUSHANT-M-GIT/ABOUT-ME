
export const hero = {
  name: 'SUSHANT',
  title: 'FULL-STACK DEVELOPER',
  tagline: 'Final-year Computer Science & IT student building full-stack web applications, REST APIs and data-driven products.',
  status: 'B.Tech CSE & IT · REVA University',
}

export const about = {
  intro:
    "I'm a final-year Computer Science and Information Technology student at REVA University with hands-on experience in full-stack web development, REST APIs and databases.",
  body: [
    "I enjoy building practical web applications where the frontend, backend and data layer work together as one system. My experience includes React, TypeScript, Node.js, Express.js, MongoDB and REST API development.",
    "During my web development internship at iStudio, I built and deployed a full-stack task management application and worked with API development, validation, debugging and documentation.",
    "Outside coursework, I build projects to strengthen my understanding of real-world application development, deployment and software engineering practices.",
  ],
  whatIBuild: [
    {
      label: 'Full-Stack Applications',
      icon: '⚡',
      desc: 'React, TypeScript, Node.js, Express.js and MongoDB.',
    },
    {
      label: 'REST APIs',
      icon: '🔌',
      desc: 'Designing, testing and debugging backend APIs and application workflows.',
    },
    {
      label: 'Data & Databases',
      icon: '🗄️',
      desc: 'Working with SQL, MongoDB and data analysis tools.',
    },
    {
      label: 'Deployment',
      icon: '🚀',
      desc: 'Deploying applications through platforms such as Vercel and Render.',
    },
  ],
  education: {
    degree: 'B.Tech in Computer Science and Information Technology',
    university: 'REVA University',
    period: '2023 – 2027',
    status: 'Final Year',
  },
}

export const experience = [
  {
    id: 'istudio',
    role: 'Web Development Intern',
    company: 'iStudio',
    location: 'Pune, Maharashtra',
    period: 'Nov 2025 – Mar 2026',
    type: 'Internship',
    bullets: [
      'Selected through the iStudio aptitude test (iCAT) and completed the web development internship program.',
      'Built SmartTask Hub, a full-stack task management application using React, Node.js, Express.js and MongoDB Atlas.',
      'Developed REST API endpoints for creating, viewing, editing and deleting tasks.',
      'Implemented search, status/priority filters, sorting and due-date validation.',
      'Added validation on both frontend and server-side logic.',
      'Deployed the application on Vercel and completed the internship with a verified certificate.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Vercel'],
    projectLink: 'smarttask-hub',
    live: null,
  },
]

export const projects = [
  {
    id: 'campus-event-finder',
    title: 'CAMPUS EVENT FINDER',
    tags: ['FULL-STACK', 'MERN', 'REAL-TIME'],
    category: ['FULL-STACK'],
    tier: 'featured',
    tagline: 'A full-stack campus event platform for students and organizers.',
    description:
      'A full-stack campus event platform where students can discover and register for events while organizers manage event creation, registration and attendance.',
    problem:
      'Campus events were managed through spreadsheets, WhatsApp groups and manual attendance — making registration and tracking error-prone and difficult to coordinate across multiple student organizations.',
    solution:
      'A web application with separate student and organizer flows. Students can browse events, register individually or as a team, receive QR-based confirmation and mark attendance via QR scan. Organizers get a dashboard to create events, track registrations, verify attendance and manage participant data.',
    features: [
      'Student and organizer role-based flows',
      'Event creation and management',
      'Individual and team sign-up',
      'Registration deadlines',
      'QR-based registration confirmation',
      'QR-based attendance verification',
      'Live event updates using Socket.IO',
      'Multi-role JWT authentication',
      'REST API development and documentation',
    ],
    implementation: {
      frontend: 'React with TypeScript — component-based UI for both student and organizer views.',
      backend: 'Node.js and Express.js — REST APIs for event, registration and attendance management.',
      database: 'MongoDB — stores events, users, registrations and attendance records.',
      realtime: 'Socket.IO — live updates for event changes and attendee counts.',
      auth: 'JWT-based authentication with role separation (student / organizer / admin).',
      qr: 'QR codes generated on registration and scanned at entry for attendance verification.',
    },
    challenges: [
      'Designing the role-based access so student and organizer routes stay cleanly separated.',
      'Keeping attendance state consistent in real time when multiple organizers scan simultaneously.',
      'Handling team registrations where one member registers on behalf of a group, requiring linked records.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'REST APIs'],
    color: '#6C63FF',
    github: 'https://github.com/SUSHANT-M-GIT/CAMPUS-EVENT-FINDER-',
    live: 'https://campus-event-finder-one.vercel.app/',
  },
  {
    id: 'smarttask-hub',
    title: 'SMARTTASK HUB',
    tags: ['FULL-STACK', 'INTERNSHIP', 'MERN'],
    category: ['FULL-STACK'],
    tier: 'selected',
    tagline: 'Full-stack task management application built during my internship at iStudio.',
    description:
      'A full-stack task management application built during my web development internship at iStudio. Covers complete CRUD operations via REST APIs with search, filtering, sorting and validation.',
    problem:
      'Built as the primary deliverable for the iStudio web development internship. The goal was to design and ship a full-stack application demonstrating REST API development, frontend-backend integration and deployment.',
    solution:
      'A task management web app where users can create, view, update and delete tasks. Includes search, status and priority filtering, sorting, due-date validation and consistent validation on both frontend and server.',
    features: [
      'REST API — GET, POST, PUT, DELETE task operations',
      'Search tasks by title',
      'Filter by status and priority',
      'Sort by due date or priority',
      'Due date validation',
      'Frontend and server-side validation',
      'Deployment on Vercel',
    ],
    implementation: {
      frontend: 'React — task list UI with search, filter and sort controls.',
      backend: 'Node.js and Express.js — REST API endpoints for all task operations.',
      database: 'MongoDB Atlas — cloud-hosted task storage.',
      validation: 'Validation applied on both the React form layer and the Express route handlers.',
    },
    challenges: [
      'Keeping filter, sort and search state in sync across the React UI without over-fetching.',
      'Structuring the Express routes cleanly so validation middleware could be reused across create and update.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST APIs', 'Vercel'],
    color: '#00D9FF',
    github: null,
    live: null,
    internship: true,
  },
  {
    id: 'personal-portfolio',
    title: 'PERSONAL PORTFOLIO',
    tags: ['FRONTEND', 'REACT', 'THREE.JS'],
    category: ['FULL-STACK'],
    tier: 'selected',
    tagline: 'This portfolio — built with React, Three.js, Framer Motion and GSAP.',
    description:
      'Personal portfolio website built to showcase projects, experience and skills. Features a 3D particle scene, smooth scroll animations and responsive layout.',
    features: [
      'Interactive 3D scene with Three.js and React Three Fiber',
      'Smooth animations with Framer Motion and GSAP',
      'Responsive layout — works on mobile and desktop',
      'Custom cursor with touch fallback',
      'Lazy-loaded sections for performance',
      'Deployed on Vercel with GitHub CI/CD',
    ],
    tech: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'Vite', 'Vercel'],
    color: '#FF6B6B',
    github: 'https://github.com/SUSHANT-M-GIT/ABOUT-ME',
    live: 'https://about-me-rho-one.vercel.app/',
  },
  {
    id: 'cricket-score-predictor',
    title: 'CRICKET SCORE PREDICTION',
    tags: ['MACHINE LEARNING', 'PYTHON', 'DATA'],
    category: ['MACHINE LEARNING', 'DATA'],
    tier: 'other',
    tagline: 'ML model predicting T20 final scores from live match conditions.',
    description:
      'A machine-learning model that predicts the final score of a batting team during an ongoing T20 cricket match using current match conditions such as overs completed, wickets fallen and current run rate.',
    features: [
      'Match-condition based prediction',
      'Data preprocessing and feature engineering',
      'Model training and evaluation pipeline',
      'Predicted vs actual analysis',
      'Feature importance visualization',
      'Flask API for serving predictions',
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
    tier: 'other',
    tagline: 'Interactive Power BI dashboard for customer spending analysis.',
    description:
      'An interactive financial analytics dashboard designed to understand customer spending behaviour and credit-card usage patterns across different demographics, card types and spending categories.',
    features: [
      'Revenue and card type breakdown',
      'Spending category analysis',
      'Quarterly trend visualization',
      'Customer demographics and spending groups',
      'Credit utilization analysis',
      'DAX measures and Power Query transforms',
      'Data cleaning and transformation pipeline',
    ],
    tech: ['Power BI', 'PostgreSQL', 'DAX', 'Power Query'],
    color: '#FF6B6B',
    github: 'https://github.com/SUSHANT-M-GIT/Credit_Card_financial_dashboard',
    live: null,
  },
]

export const skills = {
  core: [
    { name: 'React.js',    icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript',  icon: 'TS', color: '#3178C6' },
    { name: 'Node.js',     icon: '🟢', color: '#339933' },
    { name: 'Express.js',  icon: '🚂', color: '#888888' },
    { name: 'MongoDB',     icon: '🍃', color: '#47A248' },
    { name: 'REST APIs',   icon: '🔌', color: '#FF6B6B' },
  ],
  languages: [
    { name: 'Python',      icon: '🐍', color: '#3776AB' },
    { name: 'JavaScript',  icon: 'JS', color: '#F7DF1E' },
    { name: 'TypeScript',  icon: 'TS', color: '#3178C6' },
    { name: 'Java',        icon: '☕', color: '#ED8B00' },
    { name: 'C++',         icon: '⚙️', color: '#00599C' },
    { name: 'SQL',         icon: '🗃️', color: '#336791' },
  ],
  frontend: [
    { name: 'React.js',        icon: '⚛️', color: '#61DAFB' },
    { name: 'HTML5',           icon: '🌐', color: '#E34F26' },
    { name: 'CSS3',            icon: '🎨', color: '#1572B6' },
    { name: 'Responsive Design', icon: '📱', color: '#6C63FF' },
  ],
  backend: [
    { name: 'Node.js',         icon: '🟢', color: '#339933' },
    { name: 'Express.js',      icon: '🚂', color: '#888888' },
    { name: 'REST APIs',       icon: '🔌', color: '#FF6B6B' },
    { name: 'Socket.IO',       icon: '⚡', color: '#010101' },
    { name: 'JWT Auth',        icon: '🔐', color: '#6C63FF' },
  ],
  databases: [
    { name: 'MongoDB',         icon: '🍃', color: '#47A248' },
    { name: 'MySQL',           icon: '🐬', color: '#4479A1' },
    { name: 'PostgreSQL',      icon: '🐘', color: '#336791' },
  ],
  data: [
    { name: 'Pandas',          icon: '🐼', color: '#150458' },
    { name: 'NumPy',           icon: '🔢', color: '#013243' },
    { name: 'Matplotlib',      icon: '📈', color: '#11557c' },
    { name: 'Power BI',        icon: '📊', color: '#F2C811' },
  ],
  tools: [
    { name: 'Git',             icon: '🌿', color: '#F05032' },
    { name: 'GitHub',          icon: '🐙', color: '#ffffff' },
    { name: 'Vercel',          icon: '▲',  color: '#ffffff' },
    { name: 'Render',          icon: '🟣', color: '#6C63FF' },
    { name: 'CI/CD',           icon: '🔄', color: '#6C63FF' },
  ],
  cs: [
    { name: 'DSA',                    icon: '🌲', color: '#6C63FF' },
    { name: 'OOP',                    icon: '🧱', color: '#00D9FF' },
    { name: 'Design Patterns',        icon: '🗂️', color: '#FF6B6B' },
    { name: 'Computer Networks',      icon: '🌐', color: '#6C63FF' },
    { name: 'System Design Basics',   icon: '🏗️', color: '#00D9FF' },
  ],
}

export const education = [
  {
    id: 'reva',
    institution: 'REVA University',
    degree: 'B.Tech — Computer Science & Information Technology',
    period: '2023 – 2027',
    location: 'Bangalore, Karnataka',
    primary: true,
  },
  {
    id: 'kv',
    institution: 'KV AFS Avadi',
    degree: 'Class XII & X — CBSE',
    period: null,
    location: null,
    primary: false,
  },
]

export const certifications = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Sep 2026',
  },
  {
    title: 'Leadership Principles for Software Engineers',
    issuer: 'Coursera',
    date: 'Sep 2026',
  },
  {
    title: 'Gemini Certified Student',
    issuer: 'Google for Education',
    date: '2025',
  },
  {
    title: 'AI & ML Masterclass',
    issuer: 'Eureka Association × REVA University',
    date: '2025',
  },
]

export const contact = {
  heading: "LET'S BUILD SOMETHING",
  subheading:
    "I'm currently looking for software development opportunities where I can contribute to real products, strengthen my engineering skills and continue learning through practical work.",
  email: 'mishrasushant029@gmail.com',
  location: 'Bangalore, India',
  github: 'https://github.com/SUSHANT-M-GIT',
  linkedin: 'https://www.linkedin.com/in/sushant-sm',
  portfolio: 'https://about-me-rho-one.vercel.app/',
}
