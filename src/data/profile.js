// All portfolio content lives here so it can be updated without touching components.

export const profile = {
  name: "Sankara Subramanian",
  role: "Software Developer · Full-Stack (MERN)",
  company: "Amshuhu iTech",
  location: "Chennai, Tamil Nadu, India",
  email: "sankarz2002@gmail.com",
  phone: "+91-9363207767",
  github: "https://github.com/sankarzhub",
  linkedin: "https://www.linkedin.com/in/sankarz0206",
  tagline:
    "I build analytics dashboards, REST APIs and SQL that stays fast at scale, turning large volumes of sales data into reports teams can act on.",
};

export const about = [
  "I'm a full-stack developer at Amshuhu iTech Solution, working on iSteer, an enterprise distribution management platform used by a global energy client across multiple countries. I build the analytics dashboards and the APIs and queries behind them.",
  "My main stack is JavaScript, React.js and Node.js with Express, alongside AngularJS on the platform. On the data side I work with MySQL, ClickHouse and MongoDB, with a focus on writing queries that stay fast as data grows.",
  "Outside work, I build MERN and React projects, like an online movie ticket booking system with user authentication and seat selection.",
];

export const highlights = [
  { value: "1+ yr", label: "Professional experience" },
  { value: "Multi-country", label: "Enterprise platform in production" },
  { value: "MCA", label: "PET Engineering College, 2024" },
];

export const experience = {
  company: "Amshuhu iTech Solution Pvt Ltd",
  location: "Chennai, Tamil Nadu",
  roles: [
    {
      title: "Junior Software Developer",
      period: "Nov 2025 – Present",
      summary:
        "Working on iSteer, an enterprise distribution management platform used by a global energy client across multiple countries.",
      points: [
        "Build analytics dashboards (call plan, sales and customer churn) with AngularJS, Node.js and FusionCharts.",
        "Write and optimise ClickHouse and MySQL queries for large-scale sales reporting, including migrating MySQL queries to ClickHouse and resolving duplicate-row and memory-limit issues.",
        "Add Excel exports (ExcelJS), smart filters, sorting and expandable hierarchy views (region → country → distributor → sales rep) to dashboards.",
        "Develop and maintain REST APIs with Node.js and Express.",
        "Use Git-based workflows for version control, code reviews and bug fixing.",
      ],
      tech: ["AngularJS", "Node.js", "Express", "ClickHouse", "MySQL", "FusionCharts", "ExcelJS"],
    },
    {
      title: "Software Developer Intern",
      period: "Jul 2025 – Oct 2025",
      points: [
        "Assisted with web application development and debugging using JavaScript.",
        "Worked with the team to understand application requirements and resolve software issues.",
        "Gained hands-on experience with professional development workflows and version control.",
      ],
      tech: ["JavaScript", "Git"],
    },
  ],
};

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "AngularJS", "JavaScript (ES6+)", "HTML5", "CSS3", "React Router"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PHP"],
  },
  {
    group: "Data",
    items: ["MySQL", "ClickHouse", "MongoDB", "SQL query optimisation"],
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "FusionCharts", "ExcelJS", "Vite", "Netlify"],
  },
];

export const projects = [
  {
    title: "Online Movie Ticket Booking System",
    description:
      "Full-stack booking app with user authentication, interactive seat selection and a simulated payment flow.",
    github: "https://github.com/sankarzhub/moviebuzz",
    tech: ["React", "Node.js", "Express", "MySQL"],
    featured: true,
  },
  {
    title: "Personal Portfolio",
    description:
      "This site. A single-page React app with light and dark themes, a contact form and an admin inbox for messages.",
    liveLink: "https://sankarportfolio.netlify.app/",
    github: "https://github.com/sankarzhub/My-Portfolio",
    tech: ["React", "Vite", "Node.js"],
  },
  {
    title: "YouTube Clone (React)",
    description:
      "A responsive YouTube homepage clone built from reusable React components: navbar, sidebar and video grid.",
    liveLink: "https://sankarzreactyoutubeclone.netlify.app",
    github: "https://github.com/sankarzhub/YouTube_Clone_React",
    tech: ["React"],
  },
  {
    title: "YouTube Clone (HTML/CSS)",
    description:
      "The same layout built with plain HTML and CSS, focused on responsive layout fundamentals.",
    liveLink: "https://sankarzyoutubeclone.netlify.app",
    github: "https://github.com/sankarzhub/YouTube_Clone",
    tech: ["HTML", "CSS"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "PET Engineering College",
    period: "2022 – 2024",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "TDMNS College, Manonmaniam Sundaranar University",
    period: "2019 – 2022",
  },
];

export const certifications = [
  {
    name: "MERN Full Stack (Grade A)",
    issuer: "SLA Institute · IBM Authorised Certification Partner",
    year: "2025",
    credentialId: "SLA202526701",
    file: "/certificates/mern-full-stack-certificate.pdf",
  },
  { name: "SQL (Advanced)" },
];
