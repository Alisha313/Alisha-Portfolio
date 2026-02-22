/* =========================================
   ALISHA'S PORTFOLIO — AI CHATBOT
   Smart knowledge-based assistant
   ========================================= */

(function initChatbot() {
  'use strict';

  const BOT_NAME = 'Alisha AI';
  const TYPING_DELAY_MIN = 400;
  const TYPING_DELAY_MAX = 1200;

  const knowledgeBase = {
    greeting: {
      patterns: [/^(hi|hello|hey|howdy|sup|what'?s up|yo|greetings|hola)/i, /^(good\s*(morning|afternoon|evening))/i],
      responses: [
        "Hey there! I'm Alisha's portfolio assistant. Ask me anything about her skills, experience, or projects!",
        "Hi! Welcome to Alisha's portfolio. I can tell you about her work experience, tech stack, projects, and more. What are you curious about?",
        "Hello! I'm here to help you learn about Alisha. Try asking about her skills, experience, or projects!"
      ]
    },

    about: {
      patterns: [/\b(who|about|tell me about|introduce|background|bio)\b.*\b(alisha|her|she|yourself)\b/i, /\bwho is (alisha|she)\b/i, /\babout\b/i],
      responses: [
        "Alisha is a Software Engineer finishing her B.S. in Computer Science at Kean University (Dec 2026). She's worked on production systems at JPMorgan Chase and built full-stack applications at Revature. She's passionate about clean architecture, performant APIs, and cloud-native solutions.",
        "Alisha is a software engineer who builds things that scale. She has experience at JPMorgan Chase building microservices for financial transactions, and at Revature doing full-stack Java development. She's pursuing her CS degree at Kean University, graduating Dec 2026."
      ]
    },

    skills: {
      patterns: [/\b(skills?|tech stack|technologies|tools?|what (does|can) (she|alisha) (use|know|work with)|toolbox|proficien|expertise)\b/i],
      responses: [
        "Alisha's core toolkit:\n\n**Languages:** Java, Python, JavaScript, C#, SQL, PHP\n**Frameworks:** Spring Boot, Django, Flask, React, Redux, Next.js, Node.js\n**Cloud (AWS):** EC2, S3, Lambda, RDS, CloudFormation, DynamoDB\n**DevOps:** Docker, Jenkins, Git, GitLab CI/CD\n**Databases:** PostgreSQL, MySQL, MongoDB, Redis\n**ML & Data:** Scikit-learn, Pandas, SHAP\n**Testing:** JUnit, PyTest, Selenium, Mockito, Postman"
      ]
    },

    languages: {
      patterns: [/\blanguages?\b/i, /\bprogramming languages?\b/i, /\bwhat languages?\b/i],
      responses: [
        "Alisha works with several languages. Here's a quick overview with projects and experience:\n\n• **Java** (~2 yrs) — JPMorgan microservices, Revature REST APIs, Banking System, Expense Reimbursement, Forage Kafka\n• **Python** (~2 yrs) — JPMorgan Flask, ML Heart Disease, Twitter Clone, Submarine Pizzeria, Foot Commerce\n• **JavaScript** (~1.5 yrs) — React apps, Banking System (Next.js), Expense Reimbursement, Own It Calculator, Bare Beauty\n• **SQL** (~2 yrs) — PostgreSQL at JPMorgan & Revature, MySQL, H2\n• **C#** — Foundational cert (freeCodeCamp)\n• **PHP** — Own It Property Calculator\n• **HTML/CSS** — Bare Beauty, Own It Calculator, portfolio\n\nAsk about any specific language for more detail!"
      ]
    },

    java: {
      patterns: [/\bjava\b(?!\s*script)/i, /\bspring\s*boot\b/i, /\bjpa\b/i],
      responses: [
        "**Java** — Alisha has ~2 years of professional experience. **Projects:** JPMorgan Chase microservices (high-volume transactions), Revature REST APIs (40% query improvement), Banking System (Spring Boot backend), Expense Reimbursement System, Forage Kafka simulation. She uses Spring Boot, JPA, Kafka, and Maven."
      ]
    },

    python: {
      patterns: [/\bpython\b/i, /\bdjango\b/i, /\bflask\b/i],
      responses: [
        "**Python** — Alisha has ~2 years of experience. **Projects:** JPMorgan Chase Flask microservices, ML Cleveland Heart Disease (Scikit-learn, SHAP), Twitter Clone (Django), Submarine Pizzeria (Django REST API), Foot Commerce (Django). She uses Flask, Django, Pandas, and Scikit-learn."
      ]
    },

    javascript: {
      patterns: [/\bjavascript\b/i, /\breact\b/i, /\bnext\.?js\b/i, /\bnode\.?js\b/i, /\bredux\b/i, /\bfrontend\b/i, /\bfront.?end\b/i],
      responses: [
        "**JavaScript** — Alisha has ~1.5 years of experience. **Projects:** Revature React interfaces, Banking System (Next.js/TypeScript), Expense Reimbursement (React/Tailwind), Submarine Pizzeria & Foot Commerce (React/Redux), Own It Property Calculator, Bare Beauty. She uses React, Redux, Next.js, and Node.js."
      ]
    },

    csharp: {
      patterns: [/\bc#\b/i, /\bcsharp\b/i],
      responses: [
        "**C#** — Alisha has foundational experience through the Microsoft freeCodeCamp certification. She's completed the Foundational C# certification and is ready to apply it in real projects."
      ]
    },

    sql: {
      patterns: [/\bsql\b/i, /\bpostgres\b/i, /\bmysql\b/i, /\bpostgresql\b/i],
      responses: [
        "**SQL** — Alisha has ~2 years of experience. **Projects:** PostgreSQL at JPMorgan Chase and Revature (REST APIs, Banking System, Expense Reimbursement), MySQL in general projects, H2 for embedded testing. She's optimized queries and achieved 40% performance improvements."
      ]
    },

    php: {
      patterns: [/\bphp\b/i],
      responses: [
        "**PHP** — Alisha has used PHP in the Own It Property Calculator project for property investment analysis. She's comfortable with backend PHP for web applications."
      ]
    },

    html_css: {
      patterns: [/\bhtml\b/i, /\bcss\b/i, /\bhtml\s*css\b/i],
      responses: [
        "**HTML/CSS** — Alisha has extensive experience across projects. **Projects:** Bare Beauty (e-commerce UI), Own It Property Calculator, Revature React apps (with Tailwind CSS), and this portfolio! She builds responsive, accessible interfaces."
      ]
    },

    aws: {
      patterns: [/\baws\b/i, /\bcloud\b/i, /\bamazon\b/i, /\bec2\b/i, /\blambda\b/i, /\bs3\b/i, /\bcloud\s*formation\b/i],
      responses: [
        "Alisha is AWS Certified (Cloud Practitioner)! She has experience with EC2, S3, Lambda, RDS, CloudFormation, DynamoDB, SQS, and SNS. Cloud-native solutions are one of her passions — she loves exploring new AWS services."
      ]
    },

    devops: {
      patterns: [/\bdevops\b/i, /\bci\/?cd\b/i, /\bdocker\b/i, /\bjenkins\b/i, /\bgit\b/i, /\bpipeline/i, /\bdeployment/i],
      responses: [
        "Alisha has strong DevOps skills! At JPMorgan Chase, she built CI/CD pipelines with Jenkins and Docker to streamline deployments and improve release reliability. She's also experienced with Git, GitLab CI/CD, and Bitbucket for version control."
      ]
    },

    ml: {
      patterns: [/\b(machine learning|ml|data science|ai|artificial intelligence|classification|regression|clustering)\b/i, /\bscikit/i, /\bshap\b/i],
      responses: [
        "Alisha has hands-on ML experience! Her standout project is the ML Cleveland Heart Disease classifier — she built a classification pipeline comparing Logistic Regression, Random Forest, KNN, and SVM on the UCI dataset (297 patients, 13 features). She used SHAP values for model interpretability and identified the strongest heart disease predictors. Skills include supervised learning, classification, regression, clustering, data preprocessing, feature engineering, and model evaluation."
      ]
    },

    experience: {
      patterns: [/\b(experience|work history|career|jobs?|positions?|roles?|where (has|did) (she|alisha) work|employment|worked)\b/i],
      responses: [
        "Alisha has held 3 engineering roles:\n\n**1. JPMorgan Chase (Forage) — Jan 2026**\nSoftware Engineering Job Simulation. Built a Spring Boot microservice consuming Kafka transaction events with JPA and H2.\n\n**2. JPMorgan Chase — Sept 2023 to Jun 2024**\nSoftware Engineer (Contract). Designed scalable Java Spring Boot & Python Flask microservices, built CI/CD pipelines, improved API response times by 30% with Redis caching.\n\n**3. Revature — May to Sept 2023**\nFull Stack Java Developer. Built REST APIs with Spring Boot/PostgreSQL (40% query improvement), React frontends, and Node.js/MongoDB backends.\n\nShe also works at Ulta Beauty as a Task Associate (Sept 2025 – Present)."
      ]
    },

    jpmorgan: {
      patterns: [/\bjp\s*morgan\b/i, /\bchase\b/i, /\bforage\b/i],
      responses: [
        "Alisha has two JPMorgan Chase experiences:\n\n**Contract Role (Sept 2023 – Jun 2024):** She designed and deployed scalable Java Spring Boot and Python Flask microservices supporting high-volume financial transactions. She built CI/CD pipelines with Jenkins/Docker, implemented Redis caching (30% API speed improvement), and ensured PCI-DSS compliance.\n\n**Forage Simulation (Jan 2026):** Built a Spring Boot microservice that consumes high-volume Kafka transaction events, integrated an external REST Incentive API, and tested with embedded Kafka."
      ]
    },

    revature: {
      patterns: [/\brevature\b/i],
      responses: [
        "At Revature (May – Sept 2023), Alisha was a Full Stack Java Developer. She developed REST APIs with Java Spring Boot and PostgreSQL (40% query performance improvement), built responsive React.js interfaces with optimized state management, designed Node.js backends with MongoDB, and collaborated in Agile teams using Git and Bitbucket."
      ]
    },

    projects: {
      patterns: [/\b(projects?|portfolio work|what (has|did) (she|alisha) (build|create|make|develop)|show me|featured work)\b/i],
      responses: [
        "Alisha has built some great projects across college, boot camp, and training:\n\n**College:**\n• ML Cleveland Heart Disease — Classification pipeline with 4 ML models and SHAP interpretation\n• Own It Property Calculator — Investment property analysis with NPV, cap rate & cash flow tools\n• Bare Beauty — E-commerce beauty platform with product browsing\n\n**Boot Camp:**\n• Twitter Clone — Social media app with Django, Bootstrap & Cloudinary\n• Submarine Pizzeria — Restaurant ordering with React/Redux + Django REST API\n• Foot Commerce — E-commerce shoe store with React/Redux + Django\n\n**Revature Training:**\n• Banking System — Full-stack banking app (Next.js/TypeScript + Spring Boot/PostgreSQL)\n• Expense Reimbursement System — Role-based expense management (React/Tailwind + Spring Boot)\n\nWant details on any specific project?"
      ]
    },

    heart_disease: {
      patterns: [/\bheart\s*disease\b/i, /\bcleveland\b/i, /\bml.*project\b/i, /\bclassification.*project\b/i],
      responses: [
        "The ML Cleveland Heart Disease project is a classification pipeline built on the UCI Cleveland dataset (297 patients, 13 features). Alisha compared Logistic Regression, Random Forest, KNN, and SVM, then used SHAP values to interpret predictions. She identified thalassemia, chest pain type, and major vessels as the strongest predictors. Built with Python, Scikit-learn, Pandas, SHAP, and Matplotlib. You can check out the live notebook on Google Colab!"
      ]
    },

    banking: {
      patterns: [/\bbanking\b/i, /\bbank.*system\b/i],
      responses: [
        "The Banking System was a team project at Revature — a full-stack banking app with account management and transaction processing. The frontend was built with Next.js and TypeScript (using Vite), backed by a Java Spring Boot REST API with PostgreSQL."
      ]
    },

    expense: {
      patterns: [/\bexpense\b/i, /\breimbursement\b/i],
      responses: [
        "The Expense Reimbursement System lets employees submit expense requests while finance managers approve or deny them. It features role-based access with separate dashboards, built with Java Spring Boot and React with Tailwind CSS, backed by PostgreSQL."
      ]
    },

    education: {
      patterns: [/\b(education|degree|university|college|school|study|studying|student|graduate|graduation|kean)\b/i],
      responses: [
        "Alisha is finishing her **B.S. in Computer Science at Kean University** (expected Dec 2026). She also completed a **Full Stack Web Development** program at TECH I.S. (verified credential on Credly)."
      ]
    },

    certifications: {
      patterns: [/\b(certifications?|certified|credentials?|badges?|credly)\b/i],
      responses: [
        "Alisha holds these certifications:\n\n• **AWS Certified Cloud Practitioner** — Amazon Web Services\n• **Software Engineering Job Simulation** — JPMorgan Chase & Co. (Forage)\n• **Foundational C# with Microsoft** — freeCodeCamp\n• **Full Stack Web Development** — TECH I.S.\n\nAll credentials are verifiable on Credly and the respective platforms."
      ]
    },

    contact: {
      patterns: [/\b(contact|reach|email|hire|hiring|get in touch|connect|talk to|message)\b/i],
      responses: [
        "You can reach Alisha through:\n\n**Email:** alishap1924@gmail.com\n**LinkedIn:** linkedin.com/in/alisha-patel98\n**GitHub:** github.com/Alisha313\n\nOr scroll down to the contact form to send her a message directly! She's always open to new opportunities and collaborations."
      ]
    },

    resume: {
      patterns: [/\b(resume|cv|curriculum)\b/i],
      responses: [
        "You can download Alisha's resume by clicking the 'Resume' button in the hero section at the top of the page, or I can tell you about her experience, skills, and education right here!"
      ]
    },

    location: {
      patterns: [/\b(location|where|based|live|from|city|state|new jersey|nj)\b/i],
      responses: [
        "Based on her work history, Alisha has worked in the New Jersey area — JPMorgan Chase in Newport, NJ, Revature in Edison, NJ, and Ulta Beauty in Woodbridge, NJ. She attends Kean University which is also in New Jersey."
      ]
    },

    available: {
      patterns: [/\b(available|open to|looking for|seeking|opportunities?|status|hire)\b/i],
      responses: [
        "Yes! Alisha is currently open to opportunities — you can see the green badge on her hero section. She's looking for software engineering roles where she can work on scalable systems, cloud infrastructure, and full-stack applications. Don't hesitate to reach out!"
      ]
    },

    database: {
      patterns: [/\b(database|sql|postgres|mysql|mongo|redis|nosql)\b/i],
      responses: [
        "Alisha has experience with both SQL and NoSQL databases:\n\n• **PostgreSQL** — Used extensively at Revature and JPMorgan Chase\n• **MySQL** — General experience\n• **MongoDB** — Built Node.js backends with MongoDB at Revature\n• **Redis** — Implemented Redis caching at JPMorgan Chase (30% API speed improvement)\n• **H2** — Used for embedded testing in Spring Boot projects"
      ]
    },

    testing: {
      patterns: [/\b(testing|test|junit|pytest|selenium|mockito|postman|qa|quality)\b/i],
      responses: [
        "Alisha has solid testing experience:\n\n• **JUnit** — Java unit testing\n• **PyTest** — Python testing\n• **Selenium** — Browser automation testing\n• **Mockito** — Mocking for Java tests\n• **Postman** — API testing and documentation\n\nAt JPMorgan Chase, she tested system reliability using Maven test suites and embedded Kafka to verify message processing, database updates, and API interactions."
      ]
    },

    thanks: {
      patterns: [/\b(thanks?|thank you|thx|appreciate|helpful|awesome|great|cool)\b/i],
      responses: [
        "You're welcome! Feel free to ask me anything else about Alisha's work. You can also scroll through the portfolio or reach out via the contact form!",
        "Glad I could help! Let me know if you have any other questions.",
        "No problem! I'm here if you need anything else."
      ]
    },

    goodbye: {
      patterns: [/\b(bye|goodbye|see ya|later|gotta go|cya|peace)\b/i],
      responses: [
        "Thanks for visiting! Don't forget to check out Alisha's projects and feel free to connect. Have a great day!",
        "Bye! Hope you found what you were looking for. Feel free to come back anytime!"
      ]
    },

    capabilities: {
      patterns: [/\b(what can you|help|what do you know|how do you work|what.*you.*do)\b/i],
      responses: [
        "I'm Alisha's portfolio assistant! I can help you learn about:\n\n• **Skills & Tech Stack** — Languages, frameworks, tools\n• **Work Experience** — JPMorgan Chase, Revature, and more\n• **Projects** — College, boot camp, and professional work\n• **Education & Certifications** — Degree, AWS cert, and more\n• **Contact Info** — How to reach Alisha\n\nJust ask me anything!"
      ]
    }
  };

  const fallbacks = [
    "I'm not sure about that, but I can tell you about Alisha's skills, experience, projects, or education. What would you like to know?",
    "Hmm, I don't have info on that. Try asking about Alisha's tech stack, work experience, or projects!",
    "That's outside my knowledge. I'm best at answering questions about Alisha's portfolio — skills, experience, projects, education, and contact info."
  ];

  const quickReplies = [
    { label: 'Skills', text: 'What are her skills?' },
    { label: 'Experience', text: 'Tell me about her experience' },
    { label: 'Projects', text: 'Show me her projects' },
    { label: 'Contact', text: 'How can I contact her?' }
  ];

  let isOpen = false;
  let isFirstOpen = true;

  function getResponse(input) {
    const cleaned = input.trim().toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, topic] of Object.entries(knowledgeBase)) {
      for (const pattern of topic.patterns) {
        if (pattern.test(cleaned)) {
          const matchLen = cleaned.match(pattern)?.[0]?.length || 0;
          const score = matchLen + (key.length > 3 ? 10 : 0);
          if (score > bestScore) {
            bestScore = score;
            bestMatch = topic;
          }
        }
      }
    }

    if (bestMatch) {
      return bestMatch.responses[Math.floor(Math.random() * bestMatch.responses.length)];
    }
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>')
      .replace(/• /g, '<span class="chatbot-bullet">•</span> ');
  }

  function createChatbotDOM() {
    const wrapper = document.createElement('div');
    wrapper.id = 'chatbotWrapper';
    wrapper.innerHTML = `
      <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat assistant">
        <span class="chatbot-toggle-icon" id="chatbotToggleIcon">
          <i class="ph ph-chat-teardrop-dots"></i>
        </span>
        <span class="chatbot-toggle-close">
          <i class="ph ph-x"></i>
        </span>
        <span class="chatbot-pulse"></span>
      </button>

      <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">
              <img src="assets/alisha-photo.png" alt="Alisha" class="chatbot-avatar-img">
            </div>
            <div>
              <span class="chatbot-header-name">${BOT_NAME}</span>
              <span class="chatbot-header-status">
                <span class="chatbot-status-dot"></span> Online
              </span>
            </div>
          </div>
          <button class="chatbot-close-btn" id="chatbotClose" aria-label="Close chat">
            <i class="ph ph-x"></i>
          </button>
        </div>

        <div class="chatbot-messages" id="chatbotMessages"></div>

        <div class="chatbot-input-wrap">
          <div class="chatbot-quick-replies" id="chatbotQuickReplies"></div>
          <form class="chatbot-input-form" id="chatbotForm">
            <input
              type="text"
              class="chatbot-input"
              id="chatbotInput"
              placeholder="Ask me about Alisha..."
              autocomplete="off"
            />
            <button type="submit" class="chatbot-send" id="chatbotSend" aria-label="Send message">
              <i class="ph-fill ph-paper-plane-tilt"></i>
            </button>
          </form>
        </div>
      </div>
    `;
    document.body.appendChild(wrapper);
  }

  function addMessage(text, sender) {
    const messages = document.getElementById('chatbotMessages');
    const bubble = document.createElement('div');
    bubble.className = `chatbot-msg chatbot-msg-${sender}`;

    if (sender === 'bot') {
      bubble.innerHTML = `
        <div class="chatbot-msg-avatar"><i class="ph-fill ph-robot"></i></div>
        <div class="chatbot-msg-content">${formatMessage(text)}</div>
      `;
    } else {
      bubble.innerHTML = `<div class="chatbot-msg-content">${formatMessage(text)}</div>`;
    }

    messages.appendChild(bubble);
    requestAnimationFrame(() => {
      bubble.classList.add('chatbot-msg-visible');
      messages.scrollTop = messages.scrollHeight;
    });
  }

  function showTyping() {
    const messages = document.getElementById('chatbotMessages');
    const typing = document.createElement('div');
    typing.className = 'chatbot-msg chatbot-msg-bot chatbot-typing';
    typing.id = 'chatbotTyping';
    typing.innerHTML = `
      <div class="chatbot-msg-avatar"><i class="ph-fill ph-robot"></i></div>
      <div class="chatbot-msg-content">
        <div class="chatbot-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    messages.appendChild(typing);
    requestAnimationFrame(() => {
      typing.classList.add('chatbot-msg-visible');
      messages.scrollTop = messages.scrollHeight;
    });
  }

  function hideTyping() {
    const el = document.getElementById('chatbotTyping');
    if (el) el.remove();
  }

  function renderQuickReplies() {
    const container = document.getElementById('chatbotQuickReplies');
    container.innerHTML = '';
    quickReplies.forEach((qr) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chatbot-chip';
      chip.textContent = qr.label;
      chip.addEventListener('click', () => handleUserInput(qr.text));
      container.appendChild(chip);
    });
  }

  function handleUserInput(text) {
    if (!text.trim()) return;

    addMessage(text, 'user');

    const input = document.getElementById('chatbotInput');
    input.value = '';
    input.focus();

    showTyping();

    const delay = TYPING_DELAY_MIN + Math.random() * (TYPING_DELAY_MAX - TYPING_DELAY_MIN);
    setTimeout(() => {
      hideTyping();
      const response = getResponse(text);
      addMessage(response, 'bot');
    }, delay);
  }

  function toggleChat() {
    const window_ = document.getElementById('chatbotWindow');
    const toggle = document.getElementById('chatbotToggle');

    isOpen = !isOpen;
    window_.classList.toggle('chatbot-window-open', isOpen);
    toggle.classList.toggle('chatbot-toggle-active', isOpen);

    if (isOpen && isFirstOpen) {
      isFirstOpen = false;
      setTimeout(() => {
        addMessage(
          "Hi! I'm Alisha's AI assistant. Ask me anything about her skills, experience, or projects — or try a quick reply below!",
          'bot'
        );
        renderQuickReplies();
      }, 300);
    }

    if (isOpen) {
      setTimeout(() => document.getElementById('chatbotInput').focus(), 400);
    }
  }

  function init() {
    createChatbotDOM();

    document.getElementById('chatbotToggle').addEventListener('click', toggleChat);
    document.getElementById('chatbotClose').addEventListener('click', toggleChat);

    document.getElementById('chatbotForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('chatbotInput');
      handleUserInput(input.value);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) toggleChat();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
