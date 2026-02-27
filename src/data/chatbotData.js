export const BOT_NAME = 'Alisha AI'

export const knowledgeBase = {
  greeting: {
    patterns: [/^(hi|hello|hey|howdy|sup|what'?s up|yo|greetings|hola)/i, /^(good\s*(morning|afternoon|evening))/i],
    responses: [
      "Hey there! I'm Alisha's portfolio assistant. Ask me anything about her skills, experience, or projects!",
      "Hi! Welcome to Alisha's portfolio. I can tell you about her work experience, tech stack, projects, and more. What are you curious about?",
      "Hello! I'm here to help you learn about Alisha. Try asking about her skills, experience, or projects!",
    ],
  },
  about: {
    patterns: [/\b(who|about|tell me about|introduce|background|bio)\b.*\b(alisha|her|she|yourself)\b/i, /\bwho is (alisha|she)\b/i, /\babout\b/i],
    responses: [
      "Alisha is a Software Engineer finishing her B.S. in Computer Science at Kean University (Dec 2026). She's worked on production systems at JPMorgan Chase and built full-stack applications at Revature. She's passionate about clean architecture, performant APIs, and cloud-native solutions.",
      "Alisha is a software engineer who builds things that scale. She has experience at JPMorgan Chase building microservices for financial transactions, and at Revature doing full-stack Java development. She's pursuing her CS degree at Kean University, graduating Dec 2026.",
    ],
  },
  skills: {
    patterns: [/\b(skills?|tech stack|technologies|tools?|what (does|can) (she|alisha) (use|know|work with)|toolbox|proficien|expertise)\b/i],
    responses: [
      "Alisha's core toolkit:\n\n**Languages:** Java, Python, JavaScript, C#, SQL, PHP\n**Frameworks:** Spring Boot, Django, Flask, React, Redux, Next.js, Node.js\n**Cloud (AWS):** EC2, S3, Lambda, RDS, CloudFormation, DynamoDB\n**DevOps:** Docker, Jenkins, Git, GitLab CI/CD\n**Databases:** PostgreSQL, MySQL, MongoDB, Redis\n**ML & Data:** Scikit-learn, Pandas, SHAP\n**Testing:** JUnit, PyTest, Selenium, Mockito, Postman",
    ],
  },
  languages: {
    patterns: [/\blanguages?\b/i, /\bprogramming languages?\b/i, /\bwhat languages?\b/i],
    responses: [
      "Alisha works with several languages:\n\n• **Java** (~2 yrs) — JPMorgan microservices, Revature REST APIs, Banking System\n• **Python** (~2 yrs) — JPMorgan Flask, ML Heart Disease, Twitter Clone\n• **JavaScript** (~1.5 yrs) — React apps, Banking System (Next.js)\n• **SQL** (~2 yrs) — PostgreSQL at JPMorgan & Revature, MySQL, H2\n• **C#** — Foundational cert (freeCodeCamp)\n• **PHP** — Own It Property Calculator\n• **HTML/CSS** — Bare Beauty, Own It Calculator, portfolio",
    ],
  },
  java: {
    patterns: [/\bjava\b(?!\s*script)/i, /\bspring\s*boot\b/i, /\bjpa\b/i],
    responses: [
      "**Java** — Alisha has ~2 years of professional experience. Projects: JPMorgan Chase microservices (high-volume transactions), Revature REST APIs (40% query improvement), Banking System (Spring Boot), Forage Kafka simulation.",
    ],
  },
  python: {
    patterns: [/\bpython\b/i, /\bdjango\b/i, /\bflask\b/i],
    responses: [
      "**Python** — Alisha has ~2 years of experience. Projects: JPMorgan Chase Flask microservices, ML Cleveland Heart Disease (Scikit-learn, SHAP), Twitter Clone (Django), Submarine Pizzeria (Django REST API).",
    ],
  },
  javascript: {
    patterns: [/\bjavascript\b/i, /\breact\b/i, /\bnext\.?js\b/i, /\bnode\.?js\b/i, /\bredux\b/i, /\bfrontend\b/i, /\bfront.?end\b/i],
    responses: [
      "**JavaScript** — Alisha has ~1.5 years of experience. Projects: Revature React interfaces, Banking System (Next.js/TypeScript), Expense Reimbursement (React/Tailwind), Submarine Pizzeria & Foot Commerce (React/Redux).",
    ],
  },
  aws: {
    patterns: [/\baws\b/i, /\bcloud\b/i, /\bamazon\b/i, /\bec2\b/i, /\blambda\b/i, /\bs3\b/i],
    responses: [
      "Alisha is AWS Certified (Cloud Practitioner)! She has experience with EC2, S3, Lambda, RDS, CloudFormation, DynamoDB, SQS, and SNS.",
    ],
  },
  devops: {
    patterns: [/\bdevops\b/i, /\bci\/?cd\b/i, /\bdocker\b/i, /\bjenkins\b/i, /\bgit\b/i, /\bpipeline/i],
    responses: [
      "Alisha has strong DevOps skills! At JPMorgan Chase, she built CI/CD pipelines with Jenkins and Docker. She's also experienced with Git, GitLab CI/CD, and Bitbucket.",
    ],
  },
  ml: {
    patterns: [/\b(machine learning|ml|data science|ai|artificial intelligence)\b/i, /\bscikit/i, /\bshap\b/i],
    responses: [
      "Alisha has hands-on ML experience! Her standout project is the ML Cleveland Heart Disease classifier — a classification pipeline comparing Logistic Regression, Random Forest, KNN, and SVM with SHAP values for model interpretability.",
    ],
  },
  experience: {
    patterns: [/\b(experience|work history|career|jobs?|positions?|roles?|where (has|did) (she|alisha) work|employment|worked)\b/i],
    responses: [
      "Alisha has held 3 engineering roles:\n\n**1. JPMorgan Chase (Forage) — Jan 2026**\nSpring Boot microservice consuming Kafka events with JPA and H2.\n\n**2. JPMorgan Chase — Sept 2023 to Jun 2024**\nSoftware Engineer. Scalable microservices, CI/CD, Redis caching (30% improvement).\n\n**3. Revature — May to Sept 2023**\nFull Stack Java Developer. REST APIs, React frontends, Node.js/MongoDB backends.",
    ],
  },
  jpmorgan: {
    patterns: [/\bjp\s*morgan\b/i, /\bchase\b/i, /\bforage\b/i],
    responses: [
      "Alisha has two JPMorgan Chase experiences:\n\n**Contract Role (Sept 2023 – Jun 2024):** Scalable Java Spring Boot and Python Flask microservices, CI/CD with Jenkins/Docker, Redis caching (30% improvement), PCI-DSS compliance.\n\n**Forage Simulation (Jan 2026):** Spring Boot microservice consuming Kafka events with REST Incentive API integration.",
    ],
  },
  revature: {
    patterns: [/\brevature\b/i],
    responses: [
      "At Revature (May – Sept 2023), Alisha was a Full Stack Java Developer. REST APIs with Spring Boot/PostgreSQL (40% query improvement), React frontends, Node.js/MongoDB backends, Agile with Git/Bitbucket.",
    ],
  },
  projects: {
    patterns: [/\b(projects?|portfolio work|what (has|did) (she|alisha) (build|create|make|develop)|show me|featured work)\b/i],
    responses: [
      "Alisha's projects:\n\n**College:** Mars Explorer (React + NASA API), Tic Tac Toe, ML Heart Disease classifier\n\n**Boot Camp:** E-Commerce Microservice (Spring Boot + Kafka), ML Sentiment Analyzer (TensorFlow), AWS Serverless API\n\n**Revature:** Team Management App (React + Node.js + MongoDB), Auth Microservice (Spring Security + JWT), Data Pipeline (Python + Spark)",
    ],
  },
  education: {
    patterns: [/\b(education|degree|university|college|school|study|student|kean)\b/i],
    responses: [
      "Alisha is finishing her **B.S. in Computer Science at Kean University** (expected Dec 2026). She also completed an **A.S. in Computer Science** from Middlesex College.",
    ],
  },
  certifications: {
    patterns: [/\b(certifications?|certified|credentials?|badges?)\b/i],
    responses: [
      "Alisha holds:\n\n• **AWS Certified Cloud Practitioner** — Amazon Web Services\n• **Java SE 11 Developer** — Oracle\n• **Spring Professional** — VMware",
    ],
  },
  contact: {
    patterns: [/\b(contact|reach|email|hire|get in touch|connect|message)\b/i],
    responses: [
      "Reach Alisha at:\n\n**Email:** alishap1924@gmail.com\n**LinkedIn:** linkedin.com/in/alisha-p-55a692192\n**GitHub:** github.com/Alisha313\n\nOr use the contact form below!",
    ],
  },
  resume: {
    patterns: [/\b(resume|cv|curriculum)\b/i],
    responses: [
      "You can download Alisha's resume by clicking the 'Resume' button in the hero section at the top of the page!",
    ],
  },
  thanks: {
    patterns: [/\b(thanks?|thank you|thx|appreciate|helpful|awesome|great|cool)\b/i],
    responses: [
      "You're welcome! Feel free to ask me anything else about Alisha's work.",
      "Glad I could help! Let me know if you have any other questions.",
    ],
  },
  goodbye: {
    patterns: [/\b(bye|goodbye|see ya|later|gotta go|cya|peace)\b/i],
    responses: [
      "Thanks for visiting! Feel free to come back anytime. Have a great day!",
      "Bye! Hope you found what you were looking for.",
    ],
  },
  capabilities: {
    patterns: [/\b(what can you|help|what do you know|how do you work|what.*you.*do)\b/i],
    responses: [
      "I can help you learn about:\n\n• **Skills & Tech Stack**\n• **Work Experience**\n• **Projects**\n• **Education & Certifications**\n• **Contact Info**\n\nJust ask me anything!",
    ],
  },
}

export const fallbacks = [
  "I'm not sure about that, but I can tell you about Alisha's skills, experience, projects, or education!",
  "Hmm, I don't have info on that. Try asking about her tech stack, work experience, or projects!",
  "That's outside my knowledge. I'm best at answering questions about Alisha's portfolio.",
]

export const quickReplies = [
  { label: 'Skills', text: 'What are her skills?' },
  { label: 'Experience', text: 'Tell me about her experience' },
  { label: 'Projects', text: 'Show me her projects' },
  { label: 'Contact', text: 'How can I contact her?' },
]
