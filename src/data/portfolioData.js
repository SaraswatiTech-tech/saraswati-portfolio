export const resumeFile = {
  /** Place this PDF in the project `public/` folder */
  path: '/Saraswati_Shinde_Automation_QA_Resume1.pdf',
  downloadName: 'Saraswati_Shinde_Automation_QA_Resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const heroData = {
  badge: 'QA Professional',
  title: 'Software Test Engineer',
  yearsExperience: 1,
  skills: ['Manual Testing', 'Automation Testing', 'API Testing', 'Performance Testing'],
  summary:
    'Results-driven QA engineer with a track record of shipping reliable, user-centric products. I combine analytical test design, automation expertise, and cross-functional collaboration to reduce defects and accelerate release confidence.',
  bio: 'Passionate about ensuring software quality by finding defects early, improving performance, and delivering exceptional user experiences across web and API platforms.',
}

export const highlights = [
  { value: 4, suffix: '+', label: 'Projects Tested', desc: 'End-to-end across web & API', color: '#3b82f6', icon: 'clipboard' },
  { value: 1500, suffix: '+', label: 'Test Cases Created', desc: 'Functional & regression coverage', color: '#22c55e', icon: 'document' },
  { value: 800, suffix: '+', label: 'Bugs Reported', desc: 'Critical defects caught early', color: '#ef4444', icon: 'bug' },
  { value: 300, suffix: '+', label: 'Automation Scripts', desc: 'Selenium & TestNG frameworks', color: '#8b5cf6', icon: 'code' },
]

export const bugLifecycle = [
  { label: 'Bug Found', desc: 'Identified during testing', color: '#8b5cf6', icon: 'search' },
  { label: 'Reported', desc: 'Documented with evidence', color: '#ef4444', icon: 'report' },
  { label: 'Assigned', desc: 'Routed to developer', color: '#f97316', icon: 'assign' },
  { label: 'Fixed', desc: 'Resolution implemented', color: '#22c55e', icon: 'fix' },
  { label: 'Retested', desc: 'Fix verified in QA', color: '#3b82f6', icon: 'retest' },
  { label: 'Closed', desc: 'Signed off & archived', color: '#14b8a6', icon: 'closed' },
]

export const dashboardMetrics = {
  total: 1250,
  passed: 1048,
  failed: 32,
  blocked: 12,
  inProgress: 15,
  successRate: 96.2,
}

export const dashboardStats = [
  { key: 'total', label: 'Total Cases', color: '#8b5cf6', icon: 'clipboard' },
  { key: 'passed', label: 'Passed', color: '#22c55e', icon: 'check' },
  { key: 'failed', label: 'Failed', color: '#ef4444', icon: 'x' },
  { key: 'blocked', label: 'Blocked', color: '#eab308', icon: 'minus' },
  { key: 'inProgress', label: 'In Progress', color: '#3b82f6', icon: 'clock' },
]

export const techTools = [
  { name: 'Java', icon: 'java', category: 'Language' },
  { name: 'Selenium', icon: 'selenium', category: 'Automation' },
  { name: 'Playwright', icon: 'playwright', category: 'Automation' },
  { name: 'TestNG', icon: 'testng', category: 'Framework' },
  { name: 'Postman', icon: 'postman', category: 'API' },
  { name: 'MySQL', icon: 'mysql', category: 'Database' },
  { name: 'SQL', icon: 'sql', category: 'Database' },
  { name: 'Git', icon: 'git', category: 'DevOps' },
  { name: 'Jenkins', icon: 'jenkins', category: 'CI/CD' },
  { name: 'Jira', icon: 'jira', category: 'Management' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saraswati-shinge-309768343/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/SaraswatiTech-tech', icon: 'github' },
  { label: 'Email', href: 'mailto:shingesaraswati1@gmail.com', icon: 'email' },
]

export const aboutData = {
  title: 'About Me',
  subtitle: 'Passionate about quality, precision, and reliable software delivery',
  name: 'Saraswati',
  role: 'QA Test Engineer',
  yearsExperience: '1+',
  /** Add your photo to public/profile.jpg to replace the avatar placeholder */
  profileImage: '/profile.jpg',
  intro:
    "Hi, I'm Saraswati, a passionate QA Test Engineer with 1+ year of experience in software testing and quality assurance. I specialize in ensuring software quality through test planning, test execution, bug reporting, and validation of web applications.",
  skills: [
    { name: 'Manual Testing', icon: 'manual' },
    { name: 'Functional Testing', icon: 'functional' },
    { name: 'Regression Testing', icon: 'regression' },
    { name: 'Smoke Testing', icon: 'smoke' },
    { name: 'UI Testing', icon: 'ui' },
    { name: 'Test Case Design', icon: 'testcase' },
    { name: 'Bug Tracking & Reporting', icon: 'bug' },
    { name: 'Agile Methodology', icon: 'agile' },
  ],
  stats: [
    { value: 1, suffix: '+', label: 'Year Experience', icon: 'experience', color: '#3b82f6' },
    { value: 100, suffix: '+', label: 'Bugs Reported & Verified', icon: 'bugs', color: '#ef4444' },
    { value: 4, suffix: '+', label: 'Projects Tested', icon: 'projects', color: '#22c55e' },
    { value: 100, suffix: '%', label: 'Attention to Detail', icon: 'detail', color: '#8b5cf6' },
  ],
}

export const experience = [
  {
    id: 'qa-engineer-curatal',
    role: 'QA Engineer',
    company: 'Curatal Talent Enable (Progressive Video Pvt. Ltd.)',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    current: true,
    color: '#3b82f6',
    icon: 'qa',
    responsibilities: [
      'Worked on Manual and Automation Testing for web applications.',
      'Developed and maintained automation test scripts using Playwright, JavaScript, and Cucumber.',
      'Performed API Testing using Postman and validated backend services.',
      'Executed Functional, Regression, Smoke, and End-to-End Testing.',
      'Reported and tracked defects using bug tracking tools.',
      'Collaborated with developers and cross-functional teams in Agile methodology.',
      'Integrated automated test execution with CI/CD pipelines.',
      'Ensured software quality, stability, and faster release delivery.',
      'Improved testing efficiency by developing reusable automation scripts.',
    ],
    technologies: [
      'Playwright',
      'JavaScript',
      'Cucumber',
      'Postman',
      'API Testing',
      'CI/CD',
      'Agile',
      'QA Automation',
    ],
  },
  {
    id: 'automation-intern-curatal',
    role: 'Automation Test Engineer Intern',
    company: 'Curatal Talent Enable (Progressive Video Pvt. Ltd.)',
    period: 'Jun 2025 – Dec 2025',
    type: 'Internship',
    current: false,
    color: '#22c55e',
    icon: 'automation',
    responsibilities: [
      'Assisted in automation framework development.',
      'Performed Functional Testing and Regression Testing.',
      'Worked on real-time automation testing projects.',
      'Supported test execution and defect reporting activities.',
    ],
    technologies: [
      'Playwright',
      'Selenium',
      'Automation Testing',
      'Functional Testing',
      'Regression Testing',
    ],
  },
  {
    id: 'mern-intern-legend',
    role: 'MERN Full Stack Developer Intern',
    company: 'Software Legend Solutions',
    period: '3 Months Internship',
    type: 'Internship',
    current: false,
    color: '#8b5cf6',
    icon: 'fullstack',
    responsibilities: [
      'Developed responsive web applications using React.js and Node.js.',
      'Worked with MongoDB databases and REST APIs.',
      'Implemented frontend and backend functionalities.',
      'Collaborated on full-stack development projects.',
      'Gained hands-on experience in modern web application development.',
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
]

export const projects = [
  {
    id: 'bus-pass-app',
    title: 'MERN Full Stack Bus Pass Application',
    description:
      'Developed a full-stack Bus Pass Application using MongoDB, Express.js, React.js, and Node.js to streamline online bus pass registration and management.',
    features: [
      'Secure user authentication and authorization',
      'User registration and login functionality',
      'Online bus pass application and management',
      'REST API integration',
      'Responsive user interface',
      'Frontend and backend integration',
      'Optimized performance and user experience',
    ],
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST APIs',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    role: 'Full Stack Developer',
    icon: 'mern',
    color: '#3b82f6',
    liveDemoUrl: null,
    githubUrl: null,
  },
  {
    id: 'genai-chatbot',
    title: 'Generative AI Chatbot',
    description:
      'Developed an AI-powered chatbot using Python and Large Language Models (LLMs) to provide intelligent and context-aware responses.',
    features: [
      'AI-powered conversational assistant',
      'Context-aware response generation',
      'Prompt Engineering implementation',
      'Retrieval-Augmented Generation (RAG)',
      'Information retrieval optimization',
      'Vector Database integration concepts',
      'Enhanced chatbot efficiency and user experience',
    ],
    technologies: [
      'Python',
      'LLMs',
      'Prompt Engineering',
      'RAG',
      'Machine Learning',
      'Vector Databases',
    ],
    role: 'Generative AI Developer',
    icon: 'ai',
    color: '#8b5cf6',
    liveDemoUrl: null,
    githubUrl: null,
  },
]

/** Core skills highlighted for recruiters & ATS */
export const primarySkills = [
  'Playwright',
  'JavaScript',
  'Cucumber',
  'API Testing',
  'Postman',
  'Selenium',
  'Jenkins',
  'CI/CD Pipelines',
  'SQL',
  'Jira',
  'GitHub Actions',
  'Agile Methodology',
  'Python',
  'Prompt Engineering',
  'Retrieval-Augmented Generation (RAG)',
]

export const skillsCategories = [
  {
    id: 'qa-testing',
    category: 'QA Testing',
    icon: 'qa',
    skills: [
      'Manual Testing',
      'Automation Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'End-to-End Testing',
      'API Testing',
      'STLC',
      'SDLC',
      'Bug Reporting',
    ],
  },
  {
    id: 'automation-tools',
    category: 'Automation Tools',
    icon: 'automation',
    skills: [
      'Playwright',
      'Selenium',
      'Cucumber',
      'TestNG',
      'Postman',
      'Page Object Model (POM)',
    ],
  },
  {
    id: 'programming',
    category: 'Programming Languages',
    icon: 'code',
    skills: ['JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    id: 'devops',
    category: 'DevOps & Collaboration',
    icon: 'devops',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Jenkins',
      'CI/CD Pipelines',
      'Jira',
      'Agile Methodology',
    ],
  },
  {
    id: 'fullstack',
    category: 'Full Stack Development',
    icon: 'stack',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML', 'CSS'],
  },
  {
    id: 'genai',
    category: 'Generative AI',
    icon: 'ai',
    skills: [
      'Prompt Engineering',
      'Large Language Models (LLMs)',
      'Retrieval-Augmented Generation (RAG)',
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Vector Databases',
    ],
  },
]

/** @deprecated Use skillsCategories — kept for backward compatibility */
export const skillsMatrix = skillsCategories.map((g) => ({
  category: g.category,
  skills: g.skills.map((name) => ({ name, level: primarySkills.includes(name) ? 90 : 80 })),
}))

export const certifications = [
  {
    id: 'generative-ai',
    name: 'Generative AI',
    issuer: 'Professional Certification',
    year: '2026',
    color: '#8b5cf6',
    image: '/certificates/generative-ai.png',
    downloadUrl: '/certificates/generative-ai.png',
  },
  {
    id: 'mern-fullstack',
    name: 'MERN Full Stack Development',
    issuer: 'Professional Certification',
    year: '2024',
    color: '#3b82f6',
    image: '/certificates/mern-fullstack.png',
    downloadUrl: '/certificates/mern-fullstack.png',
  },
  {
    id: 'automation-test-intern',
    name: 'Automation Test Engineer Intern',
    issuer: 'Professional Certification',
    year: '2026',
    color: '#22c55e',
    image: '/certificates/automation-test-intern.png',
    downloadUrl: '/certificates/automation-test-intern.png',
  },
  // SDET certificate — add image path when ready
  // {
  //   id: 'sdet',
  //   name: 'Software Development Engineer in Testing',
  //   issuer: 'Professional Certification',
  //   year: '2025',
  //   color: '#f97316',
  //   image: '/certificates/sdet.png',
  //   downloadUrl: '/certificates/sdet.png',
  // },
]

export const contactInfo = {
  email: 'shingesaraswati1@gmail.com',
  phone: '+91 82962 50284',
  location: 'India',
  availability: 'Open to opportunities',
}
