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
      "Alisha is a Senior Software Engineer in New Jersey with 5+ years in healthcare and health insurance. She leads Java 17 and Spring Boot services at Johnson & Johnson, and before that built member, claims, and provider systems at Oscar Health. She has a B.S. in Computer Science from Kean University and is an AWS Certified Cloud Practitioner.",
    ],
  },
  skills: {
    patterns: [/\b(skills?|tech stack|technologies|tools?|what (does|can) (she|alisha) (use|know|work with)|toolbox|proficien|expertise)\b/i],
    responses: [
      "Alisha's core toolkit:\n\n**Backend:** Java 11/17, Spring Boot, Spring Security, Hibernate/JPA, REST, microservices\n**Frontend:** React, JavaScript, TypeScript, Redux\n**Data:** PostgreSQL, Redis, Apache Kafka\n**AWS:** EC2, Lambda, S3, RDS, API Gateway, SQS, IAM, CloudWatch\n**DevOps:** Docker, Kubernetes, Terraform, Jenkins, GitHub Actions\n**Testing:** JUnit, Mockito, Jest, Cypress\n**AI tools:** Claude Code, Codex, OpenCode, GitHub Copilot",
    ],
  },
  languages: {
    patterns: [/\blanguages?\b/i, /\bprogramming languages?\b/i, /\bwhat languages?\b/i],
    responses: [
      "Alisha's day-to-day languages are Java 11 and 17, SQL, JavaScript, and TypeScript, with Python for side work. Java and Spring Boot are the core of her healthcare services at Johnson & Johnson and Oscar Health.",
    ],
  },
  java: {
    patterns: [/\bjava\b(?!\s*script)/i, /\bspring\s*boot\b/i, /\bjpa\b/i],
    responses: [
      "**Java** is Alisha's primary language. At Johnson & Johnson she leads Java 17 / Spring Boot microservices and secure REST APIs. At Oscar Health she built Java 11 services for member, claims, and provider workflows, with JUnit and Mockito. OwnIt Property Calculator uses Java for the calculation core.",
    ],
  },
  python: {
    patterns: [/\bpython\b/i, /\bdjango\b/i, /\bflask\b/i],
    responses: [
      "**Python** shows up in side projects: a heart-disease classifier, a Twitter clone in Django, and Submarine Pizzeria. Her production work is Java and Spring Boot.",
    ],
  },
  javascript: {
    patterns: [/\bjavascript\b/i, /\breact\b/i, /\bnext\.?js\b/i, /\bnode\.?js\b/i, /\bredux\b/i, /\bfrontend\b/i, /\bfront.?end\b/i],
    responses: [
      "**React and JavaScript** are how Alisha builds the screens on top of her APIs. At Johnson & Johnson, React interfaces cut time spent on data review by 20%. At Oscar Health, member and provider screens reduced page load time by 20%.",
    ],
  },
  aws: {
    patterns: [/\baws\b/i, /\bcloud\b/i, /\bamazon\b/i, /\bec2\b/i, /\blambda\b/i, /\bs3\b/i],
    responses: [
      "Alisha is an AWS Certified Cloud Practitioner. She runs Spring Boot services on EC2, RDS/PostgreSQL, S3, Lambda, and API Gateway, and also uses SQS, IAM, and CloudWatch.",
    ],
  },
  devops: {
    patterns: [/\bdevops\b/i, /\bci\/?cd\b/i, /\bdocker\b/i, /\bjenkins\b/i, /\bgit\b/i, /\bpipeline/i],
    responses: [
      "Alisha containerizes Java services with Docker and maintains Jenkins pipelines with Maven and Git. She also works with Kubernetes, Terraform, and GitHub Actions.",
    ],
  },
  ml: {
    patterns: [/\b(machine learning|ml|data science|ai|artificial intelligence)\b/i, /\bscikit/i, /\bshap\b/i],
    responses: [
      "Alisha uses AI in two ways. At work she uses Claude Code, Codex, OpenCode, and GitHub Copilot. On OwnIt Property Calculator she is wiring an assistant (Groq or OpenAI) to map, market-trend, and valuation tools. She also built a heart-disease classification project in Python.",
    ],
  },
  experience: {
    patterns: [/\b(experience|work history|career|jobs?|positions?|roles?|where (has|did) (she|alisha) work|employment|worked)\b/i],
    responses: [
      "Alisha's experience:\n\n**Johnson & Johnson — Senior Software Engineer, Oct 2024 to present (New Jersey)**\nJava 17 / Spring Boot microservices, Kafka, PostgreSQL, AWS, React, and Jenkins. She also mentors engineers and leads production investigations.\n\n**Oscar Health — Software Engineer, Jun 2021 to Aug 2024 (New Jersey)**\nJava 11 services for member, claims, and provider workflows, React screens, Spring Security, and HIPAA-aligned access.",
    ],
  },
  employers: {
    patterns: [/\b(johnson|& johnson|j&j|jnj|oscar)\b/i],
    responses: [
      "Alisha is a Senior Software Engineer at Johnson & Johnson (October 2024–present), leading Java 17 microservices for healthcare. From June 2021 to August 2024 she was a Software Engineer at Oscar Health, building member, claims, and provider systems.",
    ],
  },
  projects: {
    patterns: [/\b(projects?|portfolio work|what (has|did) (she|alisha) (build|create|make|develop)|show me|featured work)\b/i],
    responses: [
      "The featured project is **OwnIt Property Calculator**: Java calculations and JUnit, plus listings, an agent CRM, and an AI assistant that can use map, trend, and valuation tools.\n\nOther public builds: ML Heart Disease Prediction, Foot Commerce, a Twitter clone, and Submarine Pizzeria. GitHub: github.com/Alisha313",
    ],
  },
  education: {
    patterns: [/\b(education|degree|university|college|school|study|student|kean)\b/i],
    responses: [
      "Alisha has a **B.S. in Computer Science from Kean University** in Union, NJ.",
    ],
  },
  certifications: {
    patterns: [/\b(certifications?|certified|credentials?|badges?)\b/i],
    responses: [
      "Alisha is an **AWS Certified Cloud Practitioner**.",
    ],
  },
  contact: {
    patterns: [/\b(contact|reach|email|hire|get in touch|connect|message)\b/i],
    responses: [
      "Reach Alisha at:\n\n**Email:** paalisha11@gmail.com\n**Phone:** (848) 261-2492\n**LinkedIn:** linkedin.com/in/apatel1298\n**GitHub:** github.com/Alisha313",
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
