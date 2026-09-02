import { ContactInfo, Experience, Project, Education, Certification, SkillCategory } from '../types';

export const contactData: ContactInfo = {
  name: "Atef Zoiaidi",
  title: "Développeur Full Stack Senior",
  subtitle: "Java • Angular • Python • Systèmes d'IA & E-commerce",
  location: "Tunis, Tunisie",
  phone: "+216 55 791 882",
  email: "atef.zoliaidi@gmail.com",
  linkedin: "https://linkedin.com/in/atef-zoliaidi-010318aa",
  pdfUrl: "/Atef_Zoiaidi_CV.pdf"
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Langages de programmation",
    iconName: "Code2",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP"]
  },
  {
    category: "Frameworks & Technologies",
    iconName: "Layers",
    skills: ["Spring Boot", "Django", "Angular", "JavaFX", "Laravel", "FastAPI", "WebPack"]
  },
  {
    category: "Intelligence Artificielle & Données",
    iconName: "BrainCircuit",
    skills: ["NLP (SpaCy)", "Machine Learning", "CLIP", "APIs LLM (OpenAI, Claude)", "Recherche Vectorielle (Milvus, Qdrant)", "NLP Gensim", "Scikit-learn", "Labelstud", "Doccano", "LangChain4j"]
  },
  {
    category: "E-commerce & CMS",
    iconName: "ShoppingCart",
    skills: ["PrestaShop", "Shopify", "Wix", "WooCommerce", "Magento"]
  },
  {
    category: "APIs & Intégrations",
    iconName: "Webhook",
    skills: ["Google Cloud Console", "Facebook Meta Marketing API", "WIX APS", "Shopify APS", "Magento APIs", "Google Ads API"]
  },
  {
    category: "Cloud & DevOps",
    iconName: "Cloud",
    skills: ["Google Cloud Platform (GCP)", "AWS", "Docker", "Git", "Selenium"]
  },
  {
    category: "Bases de données",
    iconName: "Database",
    skills: ["PostgreSQL", "MySQL", "Elasticsearch", "Milvus", "Qdrant"]
  },
  {
    category: "Scraping & Automatisation",
    iconName: "Bot",
    skills: ["Beautiful Soup", "Playwright", "Selenium", "Scrapy", "Pytest", "Locust"]
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Développeur Full Stack Senior (Python / Angular)",
    company: "PulpTeck (certishopping.com)",
    companyUrl: "https://certishopping.com",
    location: "Tunis, Tunisie",
    period: "Mars 2020 – Mars 2026",
    startYear: 2020,
    isCurrent: true,
    highlights: [
      "Migration d'une application marketing monolithique développée en Django vers une architecture moderne basée sur Django (API REST) et Angular, afin d'améliorer la maintenabilité, les performances et l'évolutivité.",
      "Intégration des APIs Google Ads et Meta (Facebook Marketing API) pour automatiser les campagnes publicitaires et la synchronisation des données.",
      "Développement de widgets JavaScript avec Webpack, conçus pour être légers, réutilisables et facilement intégrables sur différentes plateformes CMS.",
      "Conception, développement et maintenance de plugins PHP pour WordPress, PrestaShop et Magento avec implémentation de nouvelles fonctionnalités et améliorations.",
      "Conception et développement d'applications Shopify et Wix permettant la synchronisation des boutiques et des données produits avec la plateforme.",
      "Développement de solutions de web scraping et d'automatisation pour synchroniser les produits et les données des boutiques en ligne avec la plateforme.",
      "Conception et développement d'une solution basée sur des agents IA et des LLM pour optimiser les catalogues produits et les campagnes publicitaires, en automatisant l'enrichissement des données, la génération de contenus, la détection d'anomalies et les recommandations d'optimisation.",
      "Intégration d'APIs de modèles de langage (LLM) pour enrichir les contenus campagnes & produits et automatiser les traitements basés sur l'IA.",
      "Conception et développement de nouvelles fonctionnalités marketing et analytiques pour une plateforme e-commerce."
    ],
    technologies: [
      "Python", "Django", "Angular", "REST API", "Google Ads API", "Meta API",
      "Webpack", "PHP", "Shopify", "PrestaShop", "Magento", "Wix",
      "Agents IA", "LLM APIs", "Web Scraping", "PostgreSQL"
    ]
  },
  {
    id: "exp-2",
    role: "Développeur Full Stack (Java / Angular / Python)",
    company: "CSA International",
    location: "Tunis, Tunisie",
    period: "Mai 2017 – Février 2020",
    startYear: 2017,
    highlights: [
      "Conception et développement d'une plateforme collaborative destinée à digitaliser la relation entre les entreprises et les experts-comptables, permettant l'échange, la consultation et l'exploitation en temps réel des documents et données comptables (factures, pièces justificatives, documents administratifs) avec PHP, jQuery et Bootstrap (https://rosyscom.com).",
      "Conception, développement et maintenance d'applications desktop, web et mobile pour des solutions Fintech (encyclopédie numérique) avec Java Android, Angular et JavaFX, incluant l'évolution des fonctionnalités, la correction des anomalies et l'optimisation des performances (cabinet – Tunis - https://www.cabinetamamou.net)."
    ],
    technologies: [
      "Java", "Android", "Angular", "JavaFX", "PHP", "jQuery", "Bootstrap", "MySQL"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Moteur de recherche d'images par IA",
    period: "Février 2024",
    clientOrContext: "Projet Freelance IA",
    category: "IA & NLP",
    description: [
      "Création d'un moteur de recherche d'images par IA utilisant CLIP et Milvus (base de données vectorielle).",
      "Implémentation d'outils de web scraping et d'automatisation pour l'extraction de données massives."
    ],
    technologies: ["Python", "CLIP", "Milvus", "Vector Search", "Web Scraping", "Playwright"]
  },
  {
    id: "proj-2",
    title: "Recherche Sémantique Droit & Juridique",
    period: "Projet Client",
    clientOrContext: "Cabinet Amamou - Encyclopédie Numérique du Droit (cabinetamamou.net)",
    url: "https://www.cabinetamamou.net",
    category: "IA & NLP",
    description: [
      "Conception et développement d'une solution de recherche sémantique basée sur LangChain4j et les embeddings.",
      "Amélioration de la pertinence des résultats grâce à l'analyse contextuelle et textuelle pour une encyclopédie numérique du droit."
    ],
    technologies: ["Java", "LangChain4j", "Embeddings", "Vector Search", "Angular", "Spring Boot"]
  },
  {
    id: "proj-3",
    title: "Application Web de Traitement Automatique du Langage Naturel (NLP)",
    period: "Janvier 2018 – Février 2020",
    clientOrContext: "Ubiai - ubiai.tools",
    url: "https://ubiai.tools",
    category: "IA & NLP",
    description: [
      "Conception et développement d'une application dédiée au traitement automatique du langage naturel.",
      "Intégration d'outils d'annotation de données textuelles et de pipelines NLP avancés."
    ],
    technologies: ["Angular", "Django", "Elasticsearch", "SpaCy", "AWS", "Machine Learning", "NLP"]
  },
  {
    id: "proj-4",
    title: "Dashboard d'Administration Juridique & Éditeur en Ligne",
    period: "Projet Client",
    clientOrContext: "Cabinet Amamou (cabinetamamou.net)",
    url: "https://www.cabinetamamou.net",
    category: "Web & Cloud",
    description: [
      "Conception et développement d'un dashboard d'administration avec Angular et Laravel pour la gestion des clients.",
      "Module complet de gestion des factures et éditeur en ligne permettant la mise à jour en temps réel d'une encyclopédie juridique."
    ],
    technologies: ["Angular", "Laravel", "PHP", "REST API", "MySQL", "Bootstrap"]
  },
  {
    id: "proj-5",
    title: "Plateforme Collaborative de Digitalisation Comptable",
    period: "Mai 2017 – Février 2020",
    clientOrContext: "Rosyscom (rosyscom.com)",
    url: "https://rosyscom.com",
    category: "Web & Cloud",
    description: [
      "Plateforme collaborative pour digitaliser la relation entre entreprises et experts-comptables.",
      "Échange, consultation et exploitation en temps réel des documents comptables et justificatifs."
    ],
    technologies: ["PHP", "jQuery", "Bootstrap", "MySQL", "Fintech"]
  }
];

export const educationList: Education[] = [
  {
    degree: "Master en Big Data",
    institution: "Université iTeams",
    location: "Tunis, Tunisie",
    period: "2022 – 2024"
  },
  {
    degree: "Licence en Informatique de Gestion",
    institution: "ISG Gabès (Institut Supérieur de Gestion)",
    location: "Gabès, Tunisie",
    period: "2013 – 2015"
  }
];

export const certifications: Certification[] = [
  {
    title: "Oracle Certified Expert, Java Platform, EE 6 Web Component Developer",
    issuer: "Oracle Corporation"
  },
  {
    title: "Oracle Certified Professional, Java SE 7 Programmer",
    issuer: "Oracle Corporation"
  },
  {
    title: "Oracle Certified Associate, Java SE 7 Programmer",
    issuer: "Oracle Corporation"
  }
];

export const aiQna = [
  {
    q: "Quelles sont les compétences principales d'Atef ?",
    a: "Atef est un Développeur Full Stack Senior maîtrisant Java (Spring Boot, JavaFX, Android), Python (Django, FastAPI, NLP, Agents IA), Angular et PHP (Laravel, plugins E-commerce PrestaShop/Shopify/Magento). Il possède une solide expertise en IA (LangChain4j, Milvus, Qdrant, CLIP, LLM APIs) et en bases de données vectorielles."
  },
  {
    q: "Quelle est son expérience en Intelligence Artificielle et LLM ?",
    a: "Atef a conçu et développé des moteurs de recherche d'images avec CLIP et Milvus, une solution de recherche sémantique avec LangChain4j pour une encyclopédie juridique, des pipelines NLP avec SpaCy et Elasticsearch chez Ubiai, ainsi que des agents IA et intégrations d'APIs LLM (OpenAI, Claude) pour l'optimisation de catalogues e-commerce chez PulpTeck."
  },
  {
    q: "Quelles sont ses certifications professionnelles ?",
    a: "Atef est certifié par Oracle à 3 niveaux : Oracle Certified Expert Java EE 6 Web Component Developer, Oracle Certified Professional Java SE 7 Programmer, et Oracle Certified Associate Java SE 7 Programmer."
  },
  {
    q: "Quel est son parcours de formation ?",
    a: "Il est titulaire d'un Master en Big Data de l'Université iTeams (2022 - 2024) et d'une Licence en Informatique de Gestion de l'ISG Gabès (2013 - 2015)."
  }
];
