import { ContactInfo, Experience, Project, Education, Certification, SkillCategory } from '../types';

export type Language = 'fr' | 'en';

export const contactDataByLang: Record<Language, ContactInfo> = {
  fr: {
    name: "Atef Zoiaidi",
    title: "Développeur Full Stack Senior",
    subtitle: "Java • Angular • Python • Systèmes d'IA & E-commerce",
    location: "Tunis, Tunisie",
    phone: "+216 55 791 882",
    email: "atef.zoiaidi@gmail.com",
    linkedin: "https://linkedin.com/in/atef-zoiaidi-010318aa",
    pdfUrl: "/Atef_Zoiaidi_CV.pdf"
  },
  en: {
    name: "Atef Zoiaidi",
    title: "Senior Full Stack Developer",
    subtitle: "Java • Angular • Python • AI Systems & E-commerce",
    location: "Tunis, Tunisia",
    phone: "+216 55 791 882",
    email: "atef.zoiaidi@gmail.com",
    linkedin: "https://linkedin.com/in/atef-zoiaidi-010318aa",
    pdfUrl: "/Atef_Zoiaidi_CV.pdf"
  }
};

export const contactData = contactDataByLang.fr;

export const skillCategoriesByLang: Record<Language, SkillCategory[]> = {
  fr: [
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
  ],
  en: [
    {
      category: "Programming Languages",
      iconName: "Code2",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "PHP"]
    },
    {
      category: "Frameworks & Technologies",
      iconName: "Layers",
      skills: ["Spring Boot", "Django", "Angular", "JavaFX", "Laravel", "FastAPI", "WebPack"]
    },
    {
      category: "Artificial Intelligence & Data",
      iconName: "BrainCircuit",
      skills: ["NLP (SpaCy)", "Machine Learning", "CLIP", "LLM APIs (OpenAI, Claude)", "Vector Search (Milvus, Qdrant)", "NLP Gensim", "Scikit-learn", "Labelstud", "Doccano", "LangChain4j"]
    },
    {
      category: "E-commerce & CMS",
      iconName: "ShoppingCart",
      skills: ["PrestaShop", "Shopify", "Wix", "WooCommerce", "Magento"]
    },
    {
      category: "APIs & Integrations",
      iconName: "Webhook",
      skills: ["Google Cloud Console", "Facebook Meta Marketing API", "WIX APS", "Shopify APS", "Magento APIs", "Google Ads API"]
    },
    {
      category: "Cloud & DevOps",
      iconName: "Cloud",
      skills: ["Google Cloud Platform (GCP)", "AWS", "Docker", "Git", "Selenium"]
    },
    {
      category: "Databases",
      iconName: "Database",
      skills: ["PostgreSQL", "MySQL", "Elasticsearch", "Milvus", "Qdrant"]
    },
    {
      category: "Scraping & Automation",
      iconName: "Bot",
      skills: ["Beautiful Soup", "Playwright", "Selenium", "Scrapy", "Pytest", "Locust"]
    }
  ]
};

export const experiencesByLang: Record<Language, Experience[]> = {
  fr: [
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
  ],
  en: [
    {
      id: "exp-1",
      role: "Senior Full Stack Developer (Python / Angular)",
      company: "PulpTeck (certishopping.com)",
      companyUrl: "https://certishopping.com",
      location: "Tunis, Tunisia",
      period: "March 2020 – March 2026",
      startYear: 2020,
      isCurrent: true,
      highlights: [
        "Migrated a monolithic marketing application built in Django to a modern architecture based on Django REST API and Angular, significantly improving maintainability, performance, and scalability.",
        "Integrated Google Ads API and Meta Facebook Marketing API to automate ad campaign management and real-time data synchronization.",
        "Developed custom lightweight JavaScript widgets with Webpack engineered for seamless integration across multiple CMS platforms.",
        "Designed, built, and maintained custom PHP plugins for WordPress, PrestaShop, and Magento with ongoing feature additions and performance tuning.",
        "Developed Shopify and Wix apps enabling automated store catalog and product data synchronization with the core platform.",
        "Engineered web scraping and automation tools to continuously sync e-commerce product catalogs and operational data.",
        "Built an AI-agent and LLM-driven solution to optimize product catalogs and ad campaigns through automated data enrichment, content generation, anomaly detection, and smart recommendations.",
        "Integrated Large Language Model (LLM) APIs to generate campaign copy and automate AI-driven data processing workflows.",
        "Designed and implemented new marketing and analytics features for an enterprise e-commerce platform."
      ],
      technologies: [
        "Python", "Django", "Angular", "REST API", "Google Ads API", "Meta API",
        "Webpack", "PHP", "Shopify", "PrestaShop", "Magento", "Wix",
        "AI Agents", "LLM APIs", "Web Scraping", "PostgreSQL"
      ]
    },
    {
      id: "exp-2",
      role: "Full Stack Developer (Java / Angular / Python)",
      company: "CSA International",
      location: "Tunis, Tunisia",
      period: "May 2017 – February 2020",
      startYear: 2017,
      highlights: [
        "Designed and built a collaborative platform digitalizing relationships between companies and certified accountants for real-time document exchange and processing using PHP, jQuery, and Bootstrap (rosyscom.com).",
        "Engineered and maintained desktop, web, and mobile Fintech solutions (digital legal encyclopedia) using Java Android, Angular, and JavaFX, optimizing application performance and feature sets (cabinetamamou.net)."
      ],
      technologies: [
        "Java", "Android", "Angular", "JavaFX", "PHP", "jQuery", "Bootstrap", "MySQL"
      ]
    }
  ]
};

export const projectsByLang: Record<Language, Project[]> = {
  fr: [
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
  ],
  en: [
    {
      id: "proj-1",
      title: "AI Image Search Engine",
      period: "February 2024",
      clientOrContext: "AI Freelance Project",
      category: "IA & NLP",
      description: [
        "Engineered an AI-powered image search engine leveraging CLIP and Milvus vector database.",
        "Implemented high-volume web scraping and automation tools for data extraction."
      ],
      technologies: ["Python", "CLIP", "Milvus", "Vector Search", "Web Scraping", "Playwright"]
    },
    {
      id: "proj-2",
      title: "Legal Semantic Search System",
      period: "Client Project",
      clientOrContext: "Cabinet Amamou - Digital Legal Encyclopedia (cabinetamamou.net)",
      url: "https://www.cabinetamamou.net",
      category: "IA & NLP",
      description: [
        "Designed and developed a semantic search solution powered by LangChain4j and text embeddings.",
        "Significantly enhanced search relevance via contextual analysis for a digital legal reference engine."
      ],
      technologies: ["Java", "LangChain4j", "Embeddings", "Vector Search", "Angular", "Spring Boot"]
    },
    {
      id: "proj-3",
      title: "Natural Language Processing (NLP) Web Application",
      period: "January 2018 – February 2020",
      clientOrContext: "Ubiai - ubiai.tools",
      url: "https://ubiai.tools",
      category: "IA & NLP",
      description: [
        "Designed and developed a web app dedicated to automated natural language processing (NLP).",
        "Integrated text data annotation tools and advanced NLP production pipelines."
      ],
      technologies: ["Angular", "Django", "Elasticsearch", "SpaCy", "AWS", "Machine Learning", "NLP"]
    },
    {
      id: "proj-4",
      title: "Legal Admin Dashboard & Online Editor",
      period: "Client Project",
      clientOrContext: "Cabinet Amamou (cabinetamamou.net)",
      url: "https://www.cabinetamamou.net",
      category: "Web & Cloud",
      description: [
        "Engineered an administration dashboard using Angular and Laravel for client relationship management.",
        "Complete invoicing module and online editor allowing real-time content updates for legal encyclopedias."
      ],
      technologies: ["Angular", "Laravel", "PHP", "REST API", "MySQL", "Bootstrap"]
    },
    {
      id: "proj-5",
      title: "Collaborative Accounting Digitalization Platform",
      period: "May 2017 – February 2020",
      clientOrContext: "Rosyscom (rosyscom.com)",
      url: "https://rosyscom.com",
      category: "Web & Cloud",
      description: [
        "Collaborative web platform designed to digitalize client-accountant accounting operations.",
        "Real-time exchange, inspection, and automated processing of invoices and financial documents."
      ],
      technologies: ["PHP", "jQuery", "Bootstrap", "MySQL", "Fintech"]
    }
  ]
};

export const educationListByLang: Record<Language, Education[]> = {
  fr: [
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
  ],
  en: [
    {
      degree: "Master's Degree in Big Data",
      institution: "iTeams University",
      location: "Tunis, Tunisia",
      period: "2022 – 2024"
    },
    {
      degree: "Bachelor's Degree in Management Information Systems",
      institution: "ISG Gabès (Higher Institute of Management)",
      location: "Gabès, Tunisia",
      period: "2013 – 2015"
    }
  ]
};

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

export const aiQnaByLang: Record<Language, { q: string; a: string }[]> = {
  fr: [
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
  ],
  en: [
    {
      q: "What are Atef's core technical skills?",
      a: "Atef is a Senior Full Stack Developer proficient in Java (Spring Boot, JavaFX, Android), Python (Django, FastAPI, NLP, AI Agents), Angular, and PHP (Laravel, PrestaShop/Shopify/Magento plugins). He possesses deep expertise in AI (LangChain4j, Milvus, Qdrant, CLIP, LLM APIs) and vector databases."
    },
    {
      q: "What is his background in AI & LLMs?",
      a: "Atef built AI image search engines with CLIP & Milvus, semantic legal search engines using LangChain4j, NLP pipelines with SpaCy & Elasticsearch at Ubiai, and AI agents with LLM API integrations (OpenAI, Claude) for automated e-commerce catalog optimization at PulpTeck."
    },
    {
      q: "What professional certifications does he hold?",
      a: "Atef holds 3 official Oracle certifications: Oracle Certified Expert Java EE 6 Web Component Developer, Oracle Certified Professional Java SE 7 Programmer, and Oracle Certified Associate Java SE 7 Programmer."
    },
    {
      q: "What is his educational background?",
      a: "He holds a Master's Degree in Big Data from iTeams University (2022 - 2024) and a Bachelor's Degree in Management Information Systems from ISG Gabès (2013 - 2015)."
    }
  ]
};

export const uiTranslations = {
  fr: {
    nav: {
      about: "À propos",
      experiences: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      education: "Certifications",
      aiAssistant: "Assistant IA",
      downloadCv: "Télécharger CV",
      cvShort: "CV",
    },
    hero: {
      available: "Développeur Full Stack Senior • Disponible pour Opportunités",
      keyTechTitle: "Technologies Clés (Cliquer pour filtrer) :",
      overviewTitle: "Aperçu Professionnel",
      expMetric: "+8 Ans d'Expérience",
      expMetricSub: "Développement Full Stack & IA",
      degreeMetric: "Master Big Data",
      degreeMetricSub: "Université iTeams (2022-2024)",
      certMetric: "3x Certifié Oracle",
      certMetricSub: "Java EE Web & Java SE 7",
      downloadPdf: "Télécharger le CV PDF",
    },
    experiences: {
      badge: "Parcours Professionnel",
      title: "Expériences Professionnelles",
      filteredBy: "Filtré par :",
      clearFilter: "Effacer",
      recentPost: "Poste Actuel / Récent",
      keyAchievements: "Missions & Réalisations Clés :",
      techEnv: "Environnement Technique :",
    },
    projects: {
      badge: "Réalisations Clés",
      title: "Projets Majeurs & Innovations IA",
      contextLabel: "Contexte :",
      visitProject: "Visiter le projet",
      categories: {
        all: "Tous",
        ia: "IA & NLP",
        web: "Web & Cloud",
      }
    },
    skills: {
      badge: "Stack & Expertise",
      title: "Environnement Technologique",
      searchPlaceholder: "Rechercher un langage, framework...",
      skillCount: "compétences",
      levelLabel: "Expertise maîtrisée",
    },
    education: {
      certBadge: "Accréditations Officielles",
      certTitle: "Certifications Oracle",
      certIssuer: "Émetteur :",
      eduBadge: "Cursus Académique",
      eduTitle: "Formation Supérieure",
    },
    aiAssistant: {
      badge: "Assistant Virtuel Recrutement",
      title: "Posez vos questions sur le profil d'Atef",
      faqTitle: "Questions Fréquentes :",
      inputPlaceholder: "Ex: Quelle est son expérience avec Spring Boot ou Shopify ?",
      submitBtn: "Questionner",
      customAnswerTitle: "Réponse personnalisée :",
    },
    footer: {
      tagline: "Développeur Full Stack Senior • Java, Angular, Python & IA",
      top: "Haut de page",
      rights: "Tous droits réservés. Développé avec React, TypeScript & Tailwind CSS.",
    }
  },
  en: {
    nav: {
      about: "About",
      experiences: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Certifications",
      aiAssistant: "AI Assistant",
      downloadCv: "Download CV",
      cvShort: "CV",
    },
    hero: {
      available: "Senior Full Stack Developer • Available for Opportunities",
      keyTechTitle: "Key Technologies (Click to filter):",
      overviewTitle: "Professional Overview",
      expMetric: "+8 Years Experience",
      expMetricSub: "Full Stack & AI Development",
      degreeMetric: "Master's in Big Data",
      degreeMetricSub: "iTeams University (2022-2024)",
      certMetric: "3x Oracle Certified",
      certMetricSub: "Java EE Web & Java SE 7",
      downloadPdf: "Download PDF Resume",
    },
    experiences: {
      badge: "Career Path",
      title: "Professional Experience",
      filteredBy: "Filtered by:",
      clearFilter: "Clear",
      recentPost: "Current / Recent Role",
      keyAchievements: "Key Missions & Achievements:",
      techEnv: "Technical Environment:",
    },
    projects: {
      badge: "Key Achievements",
      title: "Major Projects & AI Innovations",
      contextLabel: "Context:",
      visitProject: "Visit project",
      categories: {
        all: "All",
        ia: "AI & NLP",
        web: "Web & Cloud",
      }
    },
    skills: {
      badge: "Stack & Expertise",
      title: "Technology Stack",
      searchPlaceholder: "Search language, framework...",
      skillCount: "skills",
      levelLabel: "Mastered expertise",
    },
    education: {
      certBadge: "Official Accreditations",
      certTitle: "Oracle Certifications",
      certIssuer: "Issuer:",
      eduBadge: "Academic Background",
      eduTitle: "Higher Education",
    },
    aiAssistant: {
      badge: "Virtual Recruitment Assistant",
      title: "Ask questions about Atef's profile",
      faqTitle: "Frequently Asked Questions:",
      inputPlaceholder: "E.g., What is his experience with Spring Boot or Shopify?",
      submitBtn: "Ask Question",
      customAnswerTitle: "Personalized answer:",
    },
    footer: {
      tagline: "Senior Full Stack Developer • Java, Angular, Python & AI",
      top: "Back to top",
      rights: "All rights reserved. Built with React, TypeScript & Tailwind CSS.",
    }
  }
};

