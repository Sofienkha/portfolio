export interface Translation {
  downloadPdf: string;
  pdfTitle: string;
  roleAvailability: string;
  availableNow: string;
  roleTitle: string;
  summary: string;

  personalInfo: {
    title: string;
    locationLabel: string;
    locationVal: string;
    workPermitLabel: string;
    workPermitVal: string;
    workPermitSub: string;
    phoneLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };

  languages: {
    title: string;
    english: string;
    french: string;
    german: string;
    arabic: string;
    levelC1: string;
    levelA2: string;
    levelNative: string;
    activelyLearning: string;
  };

  hobbies: {
    title: string;
    list: string[];
  };

  skills: {
    title: string;
    tabs: {
      all: string;
      frontend: string;
      backend: string;
      devops: string;
      ai: string;
    };
  };

  experience: {
    title: string;
    jobs: {
      role: string;
      company: string;
      duration: string;
      bullets: string[];
    }[];
  };

  education: {
    title: string;
    items: {
      degree: string;
      duration: string;
      school: string;
    }[];
  };

  references: {
    title: string;
    name: string;
    company: string;
  };
}

export const translations: Record<'en' | 'de' | 'fr', Translation> = {
  en: {
    downloadPdf: "Download PDF CV",
    pdfTitle: "Sofien_Khalifa_CV",
    roleAvailability: "Available for Roles in Germany",
    availableNow: "Available immediately",
    roleTitle: "Senior Full-Stack Engineer | React, TypeScript, Java/Spring Boot",
    summary: "Full-stack engineer with 6+ years of professional experience specializing in the React ecosystem, TypeScript, and robust testing methodologies. Strong focus on enterprise integrations (Java EE/Azure) and AI/ML implementations. Proven track record of accelerating development pipelines, mentoring junior developers, and delivering cloud-native applications in Agile settings like Volkswagen AG.",

    personalInfo: {
      title: "Personal Info",
      locationLabel: "Location",
      locationVal: "Braunschweig, Germany (Open to relocation across Europe)",
      workPermitLabel: "Work Authorization",
      workPermitVal: "Valid Work Permit for Germany",
      workPermitSub: "(No sponsorship required)",
      phoneLabel: "Phone",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub"
    },

    languages: {
      title: "Languages",
      english: "English",
      french: "French",
      german: "German",
      arabic: "Arabic",
      levelC1: "Advanced (C1)",
      levelA2: "A2 — currently improving",
      levelNative: "Native",
      activelyLearning: "Actively learning"
    },

    hobbies: {
      title: "Hobbies",
      list: ["Football", "Photography", "Video Games", "Swimming", "Traveling", "Reading"]
    },

    skills: {
      title: "Technical Skills",
      tabs: {
        all: "All Skills",
        frontend: "Frontend",
        backend: "Backend",
        devops: "Cloud & DevOps",
        ai: "AI/ML"
      }
    },

    experience: {
      title: "Work Experience",
      jobs: [
        {
          role: "Senior Software Engineer",
          company: "Novobit Group GmbH, Braunschweig, Germany",
          duration: "2024-04 – 2026-01 (company went insolvent)",
          bullets: [
            "Led the full frontend development for a complex enterprise AI backend project, designing and delivering a high-performance React/TypeScript interface that surfaced real-time AI-driven insights and decision pipelines to end users.",
            "Mentored and coached a team of 4 junior/mid-level frontend engineers, introducing modular React workflows and strict TypeScript coding standards to improve velocity.",
            "Optimized runtime rendering performance of high-volume dashboards using React DevTools Profiler, resolving bottlenecks and reducing frame drops.",
            "Spearheaded transition from legacy scoped CSS to a modern Utility-first Tailwind UI design system, enhancing component reusability and UI consistency.",
            "Collaborated in an international Agile/Scrum team, coordinating system designs with UX and Product Managers."
          ]
        },
        {
          role: "Full-Stack Engineer",
          company: "Volkswagen AG, Wolfsburg, Germany",
          duration: "2022-12 – 2024-03",
          bullets: [
            "Developed and scaled complex internal vehicle supply-chain applications (\"System 42\") utilizing React and Java EE (Spring-based backend).",
            "Designed and constructed fully automated CI/CD pipelines using GitHub Actions, cutting staging environment build and deployment times by 40%.",
            "Orchestrated the migration of legacy monitoring systems to Microsoft Azure, setting up centralized metrics, alerts, and log-analytic dashboards.",
            "Wrote comprehensive unit and integration test suites using Jest and React Testing Library (RTL), establishing a 95% test coverage threshold to safeguard production.",
            "Integrated robust RESTful APIs and GraphQL endpoints for real-time telemetry rendering."
          ]
        },
        {
          role: "Backend Developer",
          company: "Neapolis Development, Nabeul, Tunisia",
          duration: "2021-01 – 2022-11",
          bullets: [
            "Spearheaded development of a scalable insurance platform using Python and Django, establishing object-relational database models and business logic layers.",
            "Owned development, optimization, and documentation of core REST APIs. Structured database index refactoring and Django query optimization, yielding a 40% performance gain.",
            "Wrote thorough test cases using Django's testing suite, validating key transactions and minimizing production bugs.",
            "Coordinated with a distributed development team in France, aligning engineering tasks to shared sprint goals in an international context."
          ]
        },
        {
          role: "Freelance Mobile Lead & Full-Stack Developer",
          company: "Fideness (Startup), Tunis, Tunisia",
          duration: "2021-09 – 2022-01",
          bullets: [
            "Led the mobile application development using React Native, guiding the software from architecture to deployments on Apple App Store & Google Play.",
            "Configured AWS hosting stack (ECS container nodes, RDS databases, S3 content delivery), achieving high system uptime.",
            "Guided a cross-functional team of 5 developers on sprint tasks, handling agile estimations, task distribution, and peer reviews."
          ]
        },
        {
          role: "Freelance Software Engineer",
          company: "Private Projects / Independent Contracts",
          duration: "2018 – 2021",
          bullets: [
            "Delivered 25+ responsive client websites using React.js and Next.js, integrating map utilities, custom booking logic, and pricing tables.",
            "Built an e-commerce platform using PHP/Symfony, containing order pipelines, secure payments, and a content administration dashboard.",
            "Engineered a custom hiring system using AngularJS, Java EE, and SQL, containerized with Docker for deployment stability.",
            "Migrated legacy applications from Java EE to C#/.NET Core, securing baseline business rules and UI parity."
          ]
        }
      ]
    },

    education: {
      title: "Education",
      items: [
        {
          degree: "Master of Science in Software Engineering",
          duration: "2018 – 2021",
          school: "Private Advanced School of Engineering and Technology (ESPRIT), Tunisia"
        },
        {
          degree: "Bachelor of Science in Electronic Systems",
          duration: "2014 – 2018",
          school: "Higher Institute of Applied Sciences and Technology of Sousse, Tunisia"
        }
      ]
    },

    references: {
      title: "References",
      name: "Available upon request",
      company: ""
    }
  },
  de: {
    downloadPdf: "PDF Lebenslauf herunterladen",
    pdfTitle: "Sofien_Khalifa_Lebenslauf",
    roleAvailability: "Verfügbar für Stellen in Deutschland",
    availableNow: "Ab sofort verfügbar",
    roleTitle: "Senior Full-Stack Engineer | React, TypeScript, Java/Spring Boot & AI",
    summary: "Full-Stack-Engineer mit mehr als 6 Jahren Berufserfahrung, spezialisiert auf das React-Ökosystem, TypeScript und robuste Testmethoden. Starker Fokus auf Enterprise-Integrationen (Java EE/Azure) und KI/ML-Implementierungen. Nachgewiesene Erfolgsbilanz bei der Beschleunigung von Entwicklungs-Pipelines, dem Mentoring von Junior-Entwicklern und der Bereitstellung von Cloud-nativen Anwendungen in agilen Umgebungen wie der Volkswagen AG.",

    personalInfo: {
      title: "Persönliche Daten",
      locationLabel: "Standort",
      locationVal: "Braunschweig, Deutschland (Umzug in ganz Europa möglich)",
      workPermitLabel: "Arbeitserlaubnis",
      workPermitVal: "Gültige Arbeitserlaubnis für Deutschland",
      workPermitSub: "(Kein Sponsoring erforderlich)",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub"
    },

    languages: {
      title: "Sprachen",
      english: "Englisch",
      french: "Französisch",
      german: "Deutsch",
      arabic: "Arabisch",
      levelC1: "Fortgeschritten (C1)",
      levelA2: "A2 — lerne aktiv weiter",
      levelNative: "Muttersprache",
      activelyLearning: "Aktiv am Lernen"
    },

    hobbies: {
      title: "Hobbys",
      list: ["Fußball", "Fotografie", "Videospiele", "Schwimmen", "Reisen", "Lesen"]
    },

    skills: {
      title: "Technische Fähigkeiten",
      tabs: {
        all: "Alle Fähigkeiten",
        frontend: "Frontend",
        backend: "Backend",
        devops: "Cloud & DevOps",
        ai: "KI / ML"
      }
    },

    experience: {
      title: "Berufserfahrung",
      jobs: [
        {
          role: "Senior Software Engineer",
          company: "Novobit Group GmbH, Braunschweig, Deutschland",
          duration: "2024-04 – 2026-01 (Insolvenz des Unternehmens)",
          bullets: [
            "Leitung der vollständigen Frontend-Entwicklung für ein komplexes Enterprise-KI-Backend-Projekt, Konzeption und Umsetzung einer leistungsstarken React/TypeScript-Oberfläche zur Darstellung KI-gesteuerter Echtzeit-Analysen und Entscheidungspipelines für Endnutzer.",
            "Mentoring und Coaching eines Teams von 4 Junior-/Mid-Level-Frontend-Engineers, Einführung modularer React-Workflows und strenger TypeScript-Codierungsstandards zur Steigerung der Entwicklungsgeschwindigkeit.",
            "Optimierung der Rendering-Performance von Dashboards mit hohem Datenvolumen unter Verwendung des React DevTools Profilers, Behebung von Engpässen und Reduzierung von Frame-Drops.",
            "Federführung beim Übergang von veraltetem, scoped CSS zu einem modernen Utility-First-Tailwind-UI-Designsystem, wodurch die Wiederverwendbarkeit von Komponenten und die UI-Konsistenz verbessert wurden.",
            "Zusammenarbeit in einem internationalen Agile/Scrum-Team, Koordination von Systementwürfen mit UX- und Produktmanagern."
          ]
        },
        {
          role: "Full-Stack-Engineer",
          company: "Volkswagen AG, Wolfsburg, Deutschland",
          duration: "2022-12 – 2024-03",
          bullets: [
            "Entwicklung und Skalierung komplexer interner Fahrzeug-Lieferkettenanwendungen („System 42“) unter Verwendung von React und Java EE (Spring-basiertes Backend).",
            "Konzeption und Aufbau vollautomatisierter CI/CD-Pipelines mittels GitHub Actions, wodurch die Build- und Deployment-Zeiten in der Staging-Umgebung um 40 % verkürzt wurden.",
            "Orchestrierung der Migration von Legacy-Monitoring-Systemen zu Microsoft Azure, Einrichtung zentraler Metriken, Alarme und Log-Analyse-Dashboards.",
            "Erstellung umfassender Unit- und Integrationstest-Suites mit Jest und der React Testing Library (RTL), Etablierung einer Testabdeckung von 95 % zur Absicherung der Produktion.",
            "Integration robuster RESTful-APIs und GraphQL-Endpunkte für das Echtzeit-Rendering von Telemetriedaten."
          ]
        },
        {
          role: "Backend-Entwickler",
          company: "Neapolis Development, Nabeul, Tunesien",
          duration: "2021-01 – 2022-11",
          bullets: [
            "Federführende Entwicklung einer skalierbaren Versicherungsplattform unter Verwendung von Python und Django, Erstellung objektrelationaler Datenbankmodelle und Business-Logic-Layer.",
            "Verantwortung für die Entwicklung, Optimierung und Dokumentation von Kern-REST-APIs. Strukturierung von Datenbankindex-Refactorings und Django-Query-Optimierungen, was zu einer Leistungssteigerung von 40 % führte.",
            "Erstellung gründlicher Testfälle unter Verwendung der Django-Testsuite, Validierung wichtiger Transaktionen und Minimierung von Produktionsfehlern.",
            "Koordination mit einem verteilten Entwicklungsteam in Frankreich, Ausrichtung der Engineering-Aufgaben an gemeinsamen Sprint-Zielen in einem internationalen Kontext."
          ]
        },
        {
          role: "Freiberuflicher Mobile Lead & Full-Stack-Entwickler",
          company: "Fideness (Startup), Tunis, Tunesien",
          duration: "2021-09 – 2022-01",
          bullets: [
            "Leitung der Entwicklung mobiler Anwendungen unter Verwendung von React Native, Begleitung der Software von der Architektur bis zum Deployment im Apple App Store und Google Play Store.",
            "Konfiguration des AWS-Hosting-Stacks (ECS-Container-Knoten, RDS-Datenbanken, S3-Content-Delivery), wodurch eine hohe Systemlaufzeit erreicht wurde.",
            "Führung eines funktionsübergreifenden Teams von 5 Entwicklern bei Sprint-Aufgaben, Abwicklung von agilen Schätzungen, Aufgabenverteilung und Peer-Reviews."
          ]
        },
        {
          role: "Freiberuflicher Softwareentwickler",
          company: "Private Projekte / Unabhängige Verträge",
          duration: "2018 – 2021",
          bullets: [
            "Bereitstellung von über 25 responsiven Kunden-Websites unter Verwendung von React.js and Next.js, Integration von Karten-Utilities, benutzerdefinierter Buchungslogik und Preistabellen.",
            "Aufbau einer E-Commerce-Plattform unter Verwendung von PHP/Symfony, inklusive Bestell-Pipelines, sicherer Zahlungsabwicklung und einem Administrations-Dashboard.",
            "Entwicklung eines maßgeschneiderten Einstellungssystems unter Verwendung von AngularJS, Java EE und SQL, containerisiert mit Docker für eine stabile Bereitstellung.",
            "Migration von Altanwendungen von Java EE auf C#/.NET Core zur Sicherung grundlegender Geschäftsregeln und UI-Parität."
          ]
        }
      ]
    },

    education: {
      title: "Ausbildung",
      items: [
        {
          degree: "Master of Science in Software Engineering",
          duration: "2018 – 2021",
          school: "Private Advanced School of Engineering and Technology (ESPRIT), Tunesien"
        },
        {
          degree: "Bachelor of Science in Elektronische Systeme",
          duration: "2014 – 2018",
          school: "Higher Institute of Applied Sciences and Technology of Sousse, Tunesien"
        }
      ]
    },

    references: {
      title: "Referenzen",
      name: "Auf Anfrage erhältlich",
      company: ""
    }
  },
  fr: {
    downloadPdf: "Télécharger le CV PDF",
    pdfTitle: "Sofien_Khalifa_CV_FR",
    roleAvailability: "Disponible pour des postes en Allemagne",
    availableNow: "Disponible immédiatement",
    roleTitle: "Senior Full-Stack Engineer | React, TypeScript, Java/Spring Boot & AI",
    summary: "Ingénieur Full-stack avec plus de 6 ans d'expérience professionnelle, spécialisé dans l'écosystème React, TypeScript et les méthodologies de test robustes. Forte orientation vers les intégrations d'entreprise (Java EE/Azure) et les implémentations IA/ML. Expérience confirmée dans l'accélération des pipelines de développement, le mentorat de développeurs juniors et la livraison d'applications cloud-native dans des environnements agiles tels que Volkswagen AG.",

    personalInfo: {
      title: "Infos personnelles",
      locationLabel: "Localisation",
      locationVal: "Braunschweig, Allemagne (Mobilité dans toute l'Europe)",
      workPermitLabel: "Autorisation de travail",
      workPermitVal: "Permis de travail valide pour l'Allemagne",
      workPermitSub: "(Aucun parrainage requis)",
      phoneLabel: "Téléphone",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub"
    },

    languages: {
      title: "Langues",
      english: "Anglais",
      french: "Français",
      german: "Allemand",
      arabic: "Arabe",
      levelC1: "Avancé (C1)",
      levelA2: "A2 — en cours d'amélioration",
      levelNative: "Maternelle",
      activelyLearning: "Apprentissage actif"
    },

    hobbies: {
      title: "Loisirs",
      list: ["Football", "Photographie", "Jeux vidéo", "Natation", "Voyage", "Lecture"]
    },

    skills: {
      title: "Compétences techniques",
      tabs: {
        all: "Toutes",
        frontend: "Frontend",
        backend: "Backend",
        devops: "Cloud & DevOps",
        ai: "IA / ML"
      }
    },

    experience: {
      title: "Expérience professionnelle",
      jobs: [
        {
          role: "Senior Software Engineer",
          company: "Novobit Group GmbH, Braunschweig, Allemagne",
          duration: "2024-04 – 2026-01 (insolvabilité de l'entreprise)",
          bullets: [
            "Dirigé le développement frontend complet d'un projet IA backend d'entreprise complexe, en concevant et livrant une interface React/TypeScript haute performance permettant aux utilisateurs finaux d'accéder en temps réel aux insights pilotés par l'IA et aux pipelines de décision automatisés.",
            "Encadré et coaché une équipe de 4 ingénieurs frontend juniors/intermédiaires, introduisant des workflows React modulaires et des normes de codage TypeScript strictes pour améliorer la vélocité.",
            "Optimisé les performances de rendu d'exécution des tableaux de bord à fort volume à l'aide de React DevTools Profiler, résolvant les goulots d'étranglement et réduisant les chutes de FPS.",
            "Mené la transition du CSS classique vers un système de conception moderne Tailwind UI, améliorant la réutilisation des composants et la cohérence de l'interface utilisateur.",
            "Collaboré dans une équipe internationale Agile/Scrum, coordonnant la conception des systèmes avec les designers UX et les chefs de produit."
          ]
        },
        {
          role: "Full-Stack Engineer",
          company: "Volkswagen AG, Wolfsburg, Allemagne",
          duration: "2022-12 – 2024-03",
          bullets: [
            "Développé et fait évoluer des applications internes complexes de chaîne d'approvisionnement automobile (« System 42 ») en utilisant React et Java EE (backend basé sur Spring).",
            "Conçu et construit des pipelines CI/CD entièrement automatisés à l'aide de GitHub Actions, réduisant de 40% les temps de build et de déploiement en environnement de staging.",
            "Orchestré la migration des systèmes de surveillance existants vers Microsoft Azure, en configurant des métriques centralisées, des alertes et des tableaux de bord d'analyse de journaux.",
            "Rédigé des suites de tests unitaires et d'intégration complètes à l'aide de Jest et de la React Testing Library (RTL), établissant un seuil de couverture de test de 95% pour sécuriser la production.",
            "Intégré des API RESTful robustes et des points de terminaison GraphQL pour le rendu de télémétrie en temps réel."
          ]
        },
        {
          role: "Backend Developer",
          company: "Neapolis Development, Nabeul, Tunisie",
          duration: "2021-01 – 2022-11",
          bullets: [
            "Dirigé le développement d'une plateforme d'assurance évolutive utilisant Python et Django, établissant des modèles de base de données relationnels et des couches de logique métier.",
            "Pris en charge le développement, l'optimisation et la documentation des API REST principales. Structuré le refactoring des index de base de données et l'optimisation des requêtes Django, permettant un gain de performance de 40%.",
            "Rédigé des cas de test approfondis à l'aide de la suite de tests de Django, validant les transactions clés et minimisant les bugs en production.",
            "Coordonné le travail avec une équipe de développement distribuée en France, alignant les tâches d'ingénierie sur les objectifs de sprint partagés dans un contexte international."
          ]
        },
        {
          role: "Freelance Mobile Lead & Full-Stack Developer",
          company: "Fideness (Startup), Tunis, Tunisie",
          duration: "2021-09 – 2022-01",
          bullets: [
            "Dirigé le développement d'applications mobiles sous React Native, guidant le logiciel depuis l'architecture jusqu'aux déploiements sur l'App Store d'Apple et Google Play.",
            "Configuré la pile d'hébergement AWS (nœuds de conteneurs ECS, bases de données RDS, distribution de contenu S3), garantissant une haute disponibilité du système.",
            "Guidé une équipe pluridisciplinaire de 5 développeurs sur les tâches des sprints, gérant les estimations agiles, la distribution des tâches et les revues de code par les pairs."
          ]
        },
        {
          role: "Freelance Software Engineer",
          company: "Projets Privés / Contrats Indépendants",
          duration: "2018 – 2021",
          bullets: [
            "Livré plus de 25 sites web clients réponsifs utilisant React.js et Next.js, intégrant des services cartographiques, des logiques de réservation personnalisées et des grilles de tarifs.",
            "Construit une plateforme de commerce électronique utilisant PHP/Symfony, comprenant des flux de commandes, des paiements sécurisés et un tableau de bord d'administration du contenu.",
            "Conçu un système de recrutement personnalisé à l'aide d'AngularJS, de Java EE et de SQL, conteneurisé avec Docker pour assurer la stabilité du déploiement.",
            "Migré des applications existantes de Java EE vers C#/.NET Core, garantissant les règles métier de base et la parité de l'interface utilisateur."
          ]
        }
      ]
    },

    education: {
      title: "Formation",
      items: [
        {
          degree: "Master of Science en Génie Logiciel",
          duration: "2018 – 2021",
          school: "École Supérieure Privée d'Ingénierie et de Technologie (ESPRIT), Tunisie"
        },
        {
          degree: "Bachelor of Science en Systèmes Électroniques",
          duration: "2014 – 2018",
          school: "Institut Supérieur des Sciences Appliquées et de Technologie de Sousse, Tunisie"
        }
      ]
    },

    references: {
      title: "Références",
      name: "Disponibles sur demande",
      company: ""
    }
  }
};
