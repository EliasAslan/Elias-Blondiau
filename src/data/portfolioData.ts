import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Elias Blondiau',
    preferredName: 'Elias',
    role: {
      en: 'Informatiker EFZ — Plattformentwicklung',
      de: 'Informatiker EFZ — Plattformentwicklung in Ausbildung',
    },
    workplace: 'EMVS BFO Visp',
    workplaceDetail: {
      en: 'Berufsfachschule Oberwallis (BFO) / EMVS in Visp, Switzerland',
      de: 'Berufsfachschule Oberwallis (BFO) / EMVS in Visp, Schweiz',
    },
    location: 'Visp, Switzerland',
    heroHeadline: {
      en: 'Curiosity first. Build something. Find out what breaks.',
      de: 'Neugierig werden. Etwas bauen. Herausfinden, was noch nicht funktioniert.',
    },
    heroSubheadline: {
      en: 'I'm an Informatiker EFZ learner exploring software development and AI-assisted engineering through real projects.',
      de: 'Ich bin Informatiker EFZ in Ausbildung und erkunde Softwareentwicklung und KI-gestütztes Engineering anhand echter Projekte.',
    },
    bioParagraphs: {
      en: [
        'Hi, I am Elias. I am currently completing my Informatiker EFZ apprenticeship at EMVS BFO in Visp, Switzerland. I’m interested in the space between an idea and a working product: shaping what it should do, guiding AI-assisted implementation, testing the result, and learning how the underlying systems work.',
        'I learn by building and iterating. Current work includes EMVS Study Hub, a personalized fitness app, and a fitness tracker for a real user, alongside smaller programming experiments.',
        'I am still learning, so I try to be honest about what works, what is unfinished, and what I need to understand better. I care about independent thinking, practical problem-solving, and making projects more reliable over time.',
      ],
      de: [
        'Hallo, ich bin Elias. Ich absolviere derzeit meine Berufslehre als Informatiker EFZ an der EMVS BFO in Visp, Schweiz. Mich interessiert der Weg von einer Idee zu einem funktionierenden Produkt: festlegen, was es können soll, die KI-gestützte Umsetzung steuern, das Ergebnis testen und die Systeme dahinter verstehen.',
        'Ich lerne am besten durch Bauen und Verbessern. Aktuelle Projekte sind der EMVS Study Hub, eine persönliche Trainings-App und ein Fitness-Tracker für einen echten Nutzer – neben kleineren Programmierexperimenten.',
        'Ich lerne noch und versuche deshalb ehrlich zu zeigen, was funktioniert, was unfertig ist und was ich besser verstehen muss. Mir sind selbstständiges Denken, praktische Problemlösung und zuverlässigere Projekte wichtig.',
      ],
    },
  },

  currently: [
    {
      id: 'apprenticeship',
      iconName: 'GraduationCap',
      label: {
        en: 'Apprenticeship',
        de: 'Ausbildung',
      },
      description: {
        en: 'Informatiker EFZ training & coursework at EMVS BFO Visp',
        de: 'Informatiker EFZ Ausbildung & Schulung an der EMVS BFO Visp',
      },
    },
    {
      id: 'coding_focus',
      iconName: 'Code2',
      label: {
        en: 'Coding Focus',
        de: 'Schwerpunkt',
      },
      description: {
        en: 'Building full-stack web apps, data flows, and deployment workflows',
        de: 'Full-Stack-Web-Apps, Datenflüsse und Deployment-Workflows entwickeln',
      },
    },
    {
      id: 'exploration',
      iconName: 'Compass',
      label: {
        en: 'Exploring',
        de: 'Erkundung',
      },
      description: {
        en: 'Shipping and improving personal web projects',
        de: 'Persönliche Webprojekte umsetzen und verbessern',
      },
    },
    {
      id: 'calisthenics',
      iconName: 'Activity',
      label: {
        en: 'Off-Screen',
        de: 'Abseits vom Code',
      },
      description: {
        en: 'Calisthenics skill progressions (muscle-ups, handstands)',
        de: 'Calisthenics Skills (Muscle-Ups, Handstand-Balance)',
      },
    },
  ],

  projects: [
    {
      id: 'scout-site',
      title: { en: 'Pfadi St. Christophorus Siders — Website Redesign', de: 'Pfadi St. Christophorus Siders — Website-Redesign' },
      description: {
        en: 'A redesign for my scout group that replaces an outdated web presence with a more coherent, modern experience and makes key information easier to find.',
        de: 'Ein Redesign für meine Pfadi-Abteilung, das den bisherigen Webauftritt durch eine modernere, stimmigere Erfahrung ersetzt und wichtige Informationen leichter auffindbar macht.',
      },
      longDescription: {
        en: 'I shaped the visual direction and used AI to help implement it. The redesign brings together a more consistent identity, clearer navigation and page organization, responsive layouts, and a more complete set of information for families and young people. Hosted on Vercel; no GitHub repository is connected.',
        de: 'Ich entwickelte die visuelle Richtung und nutzte KI zur Unterstützung bei der Umsetzung. Das Redesign verbindet einen einheitlicheren Auftritt mit klarerer Navigation und Seitenstruktur, responsiven Layouts und einem vollständigeren Informationsangebot für Familien und Jugendliche. Gehostet auf Vercel; kein GitHub-Repository verknüpft.',
      },
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vercel'],
      status: 'completed',
      statusLabel: { en: 'Live Website', de: 'Live-Website' },
      category: 'web',
      liveUrl: 'https://pfadi-siders-updated.vercel.app/',
      highlights: {
        en: ['Live multi-page scout-group website', 'Calendar, gallery, section and joining pages', 'Responsive navigation and accessible interaction details'],
        de: ['Veröffentlichte mehrseitige Pfadi-Website', 'Kalender, Galerie, Stufen- und Mitmachen-Seiten', 'Responsive Navigation und zugängliche Interaktionen'],
      },
    },
    {
      id: 'calisthenics-workout',
      title: { en: 'Personal Calisthenics Workout App', de: 'Persönliche Calisthenics-Trainings-App' },
      description: {
        en: 'A personal calisthenics app concept shaped around how I want to train: skill practice, flexible sessions, set tracking, timers, and progression.',
        de: 'Das Konzept einer persönlichen Calisthenics-App, ausgerichtet auf meine Trainingsweise: Skills, flexible Einheiten, Satzprotokolle, Timer und Progression.',
      },
      longDescription: {
        en: 'I came up with the idea and planned what the app should do, then used AI-assisted implementation to move the prototype toward those expectations. The project is an ongoing experiment in turning a personal workflow into a useful tool.',
        de: 'Ich hatte die Idee und plante, was die App können soll. Anschliessend nutzte ich KI-gestützte Umsetzung, um den Prototyp an diese Erwartungen anzunähern. Das Projekt ist ein laufendes Experiment, einen persönlichen Ablauf in ein nützliches Werkzeug zu verwandeln.',
      },
      technologies: ['Product Design', 'JavaScript', 'Web App', 'Progression Logic'],
      status: 'in_progress',
      statusLabel: { en: 'In Development', de: 'In Entwicklung' },
      category: 'web',
      liveUrl: 'https://refreshing-apex-form-flow.base44.app/',
      highlights: {
        en: ['Flexible workout formats', 'Skill and hypertrophy planning', 'Set history, rest timers, and progression logic'],
        de: ['Flexible Trainingsformate', 'Skill- und Hypertrophieplanung', 'Satzverlauf, Pausentimer und Progressionslogik'],
      },
    },
    {
      id: 'study-hub',
      title: { en: 'EMVS Study Hub', de: 'EMVS Study Hub' },
      description: {
        en: 'A study workspace concept planned around organizing learning objectives, resources, exams, and real study sessions instead of relying on a static checklist.',
        de: 'Das Konzept eines Lernbereichs zum Organisieren von Lernzielen, Ressourcen, Prüfungen und echten Lerneinheiten statt einer statischen Checkliste.',
      },
      longDescription: {
        en: 'I came up with the idea and planned the features. The implementation is an ongoing project, and the account-based cloud-sync flow is still being developed.',
        de: 'Ich hatte die Idee und plante die Funktionen. Die Umsetzung läuft weiter; die kontobasierte Cloud-Synchronisierung befindet sich noch in Entwicklung.',
      },
      technologies: ['JavaScript', 'HTML', 'CSS', 'Supabase', 'Vercel'],
      status: 'in_progress',
      statusLabel: { en: 'In Development', de: 'In Entwicklung' },
      category: 'web',
      githubUrl: 'https://github.com/EliasAslan/EMVs-studyHub',
      liveUrl: 'https://study-seven-tan.vercel.app/',
      highlights: {
        en: ['Log timed or manual study sessions', 'Track objective progress over time', 'Cloud sync and account flows under active development'],
        de: ['Zeitgesteuerte oder manuelle Lerneinheiten protokollieren', 'Lernziel-Fortschritt über Zeit verfolgen', 'Cloud-Sync und Kontoabläufe in aktiver Entwicklung'],
      },
    },
    {
      id: 'ben-sustain',
      title: { en: 'BEN.SUSTAIN — Personal Fitness App', de: 'BEN.SUSTAIN — Persönliche Fitness-App' },
      description: {
        en: 'An AI-assisted customization of an existing open-source fitness project, adapted around personal ideas and intended use.',
        de: 'Eine mit KI angepasste Version eines bestehenden Open-Source-Fitnessprojekts, zugeschnitten auf persönliche Ideen und den eigenen Gebrauch.',
      },
      longDescription: {
        en: 'I started from an existing open-source project rather than building the original app. I used AI to help make personal modifications, deciding what I wanted changed and guiding the result toward those expectations. The live demo is a test build.',
        de: 'Ausgangspunkt war ein bestehendes Open-Source-Projekt, nicht eine von mir entwickelte Original-App. Mit KI habe ich persönliche Anpassungen umgesetzt, selbst entschieden, was geändert werden soll, und das Ergebnis entsprechend gesteuert. Die Live-Demo ist ein Teststand.',
      },
      technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
      status: 'in_progress',
      statusLabel: { en: 'In Development', de: 'In Entwicklung' },
      category: 'web',
      githubUrl: 'https://github.com/EliasAslan/benOpenGym',
      liveUrl: 'https://eliasaslan.github.io/benOpenGym/?#/test',
      highlights: {
        en: ['Designed for one real user and their routine', 'Flexible workout lengths and daily check-ins', 'Iterative deployment and troubleshooting'],
        de: ['Für eine konkrete Person und ihren Alltag gestaltet', 'Flexible Trainingsdauer und tägliche Check-ins', 'Iterative Bereitstellung und Fehlerbehebung'],
      },
    },
    {
      id: 'portfolio',
      title: { en: 'Personal Portfolio', de: 'Persönliches Portfolio' },
      description: {
        en: 'A bilingual portfolio documenting my work, learning process, and experiments in software development.',
        de: 'Ein zweisprachiges Portfolio, das meine Projekte, meinen Lernprozess und Experimente in der Softwareentwicklung dokumentiert.',
      },
      longDescription: {
        en: 'Built with React, TypeScript, Vite, and Tailwind CSS. The portfolio itself is an ongoing project: its content should reflect real work and clearly distinguish prototypes from finished products.',
        de: 'Erstellt mit React, TypeScript, Vite und Tailwind CSS. Auch das Portfolio ist ein laufendes Projekt: Inhalte sollen echte Arbeit zeigen und Prototypen klar von fertigen Produkten unterscheiden.',
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'in_progress',
      statusLabel: { en: 'Active', de: 'Aktiv' },
      category: 'web',
      githubUrl: 'https://github.com/EliasAslan/Elias-Blondiau',
      liveUrl: 'https://eliasaslan.github.io/Elias-Blondiau/',
      highlights: {
        en: ['English and German content', 'Responsive layout', 'Centralized portfolio data'],
        de: ['Deutsche und englische Inhalte', 'Responsives Layout', 'Zentral verwaltete Portfolio-Daten'],
      },
    },
  ],

  skills: [
    {
      name: 'JavaScript',
      level: 'exploring',
      category: 'languages',
      note: { en: 'Learning to build simple interactions and understand how browser code works', de: 'Einfache Interaktionen entwickeln und verstehen, wie Code im Browser funktioniert' },
    },
    {
      name: 'HTML & CSS',
      level: 'learning',
      category: 'languages',
      note: { en: 'Semantic structure, responsive layouts, accessibility, and visual refinement', de: 'Semantische Struktur, responsive Layouts, Barrierefreiheit und visuelle Verfeinerung' },
    },
    {
      name: 'TypeScript',
      level: 'exploring',
      category: 'languages',
      note: { en: 'Exploring types, interfaces, and how TypeScript helps catch mistakes', de: 'Typen, Interfaces und wie TypeScript Fehler früh sichtbar machen kann, erkunden' },
    },
    {
      name: 'Java',
      level: 'learning',
      category: 'languages',
      note: { en: 'Object-oriented programming and JavaFX desktop application experiments', de: 'Objektorientierte Programmierung und Experimente mit JavaFX-Desktop-Apps' },
    },
    {
      name: 'SQL & Supabase',
      level: 'exploring',
      category: 'languages',
      note: { en: 'Exploring tables, queries, accounts, and how apps store and sync data', de: 'Tabellen, Abfragen, Konten und das Speichern und Synchronisieren von App-Daten erkunden' },
    },
    {
      name: 'React & Vite',
      level: 'exploring',
      category: 'frameworks_tools',
      note: { en: 'Exploring components, project structure, and how frontend apps are built', de: 'Komponenten, Projektstruktur und den Aufbau von Frontend-Apps erkunden' },
    },
    {
      name: 'Git & GitHub',
      level: 'learning',
      category: 'workflow',
      note: { en: 'Learning to work with repositories, commits, branches, and deployment workflows', de: 'Den Umgang mit Repositories, Commits, Branches und Deployment-Abläufen lernen' },
    },
    {
      name: 'AI-assisted development',
      level: 'familiar',
      category: 'frameworks_tools',
      note: { en: 'A strong part of my workflow: defining goals, guiding AI, testing results, reporting bugs, and reviewing changes', de: 'Ein starker Teil meines Workflows: Ziele definieren, KI steuern, Ergebnisse testen, Fehler melden und Änderungen prüfen' },
    },
    {
      name: 'Python',
      level: 'learning',
      category: 'languages',
      note: { en: 'Learning Python fundamentals through small exercises and experiments', de: 'Python-Grundlagen durch kleine Übungen und Experimente lernen' },
    },
  ],

  learning: [
    {
      id: 'full-stack-apps',
      title: { en: 'Full-Stack Application Development', de: 'Full-Stack-Anwendungsentwicklung' },
      description: {
        en: 'Learning how frontend interfaces, backend services, authentication, and persistent data fit together into a reliable application.',
        de: 'Verstehen, wie Frontend-Oberflächen, Backend-Dienste, Authentifizierung und persistente Daten zu einer zuverlässigen Anwendung zusammenspielen.',
      },
      currentFocus: {
        en: 'Building and debugging real app flows from UI through data access and deployment.',
        de: 'Echte App-Abläufe von der Oberfläche über den Datenzugriff bis zum Deployment entwickeln und debuggen.',
      },
      iconName: 'Layers',
      tag: 'Full Stack',
    },
    {
      id: 'data-and-auth',
      title: { en: 'Data, Accounts & Cloud Sync', de: 'Daten, Konten & Cloud-Synchronisierung' },
      description: {
        en: 'Exploring relational schemas, row-level security, account-based data ownership, and synchronization between local and cloud data.',
        de: 'Relationale Schemas, Row-Level Security, kontobasierte Datenzuordnung und Synchronisierung zwischen lokalen und Cloud-Daten untersuchen.',
      },
      currentFocus: {
        en: 'Making sure user data belongs to the right account and flows are testable.',
        de: 'Sicherstellen, dass Nutzerdaten dem richtigen Konto gehören und Abläufe testbar sind.',
      },
      iconName: 'Database',
      tag: 'Data',
    },
    {
      id: 'shipping',
      title: { en: 'Git, Testing & Deployment', de: 'Git, Tests & Deployment' },
      description: {
        en: 'Practicing small, reviewable changes, branch-based development, automated checks, and diagnosing deployment failures.',
        de: 'Kleine nachvollziehbare Änderungen, Branch-basierte Entwicklung, automatisierte Checks und die Diagnose von Deployment-Fehlern üben.',
      },
      currentFocus: {
        en: 'Improving release confidence by checking builds, workflows, and actual user-facing behavior.',
        de: 'Releases verlässlicher machen, indem Builds, Workflows und das tatsächliche Verhalten geprüft werden.',
      },
      iconName: 'GitBranch',
      tag: 'Workflow',
    },
    {
      id: 'ai-assisted-engineering',
      title: { en: 'AI-Assisted Engineering', de: 'KI-gestützte Softwareentwicklung' },
      description: {
        en: 'Using coding assistants to explore and implement ideas while still inspecting changes, testing assumptions, and understanding the code.',
        de: 'Coding-Assistenten zum Erkunden und Umsetzen von Ideen nutzen und dabei Änderungen prüfen, Annahmen testen und den Code verstehen.',
      },
      currentFocus: {
        en: 'Treating AI as a collaborator, not a substitute for technical judgment.',
        de: 'KI als Zusammenarbeit verstehen, nicht als Ersatz für eigenes technisches Urteilsvermögen.',
      },
      iconName: 'WandSparkles',
      tag: 'AI Tools',
    },
  ],

  calisthenics: [
    {
      name: 'Pull-ups & Weighted Pull-ups',
      currentProgression: {
        en: 'Around 20 clean bodyweight pull-ups and progressive weighted sets',
        de: 'Etwa 20 saubere Klimmzüge mit Körpergewicht und progressive Zusatzgewichts-Sätze',
      },
      target: {
        en: 'Build strength while maintaining clean range of motion',
        de: 'Kraft aufbauen und den sauberen Bewegungsumfang beibehalten',
      },
      status: 'mastering_form',
    },
    {
      name: 'Handstand & Handstand Push-ups',
      currentProgression: {
        en: 'Freestanding balance practice and wall-assisted handstand push-ups',
        de: 'Freies Balancieren und wandgestützte Handstand-Liegestütze',
      },
      target: {
        en: 'More consistent freestanding holds and deeper controlled reps',
        de: 'Konstantere freie Holds und tiefere, kontrollierte Wiederholungen',
      },
      status: 'actively_training',
    },
    {
      name: 'Front Lever',
      currentProgression: {
        en: 'Advanced tuck holds and half-lay progression work',
        de: 'Advanced-Tuck-Holds und Half-Lay-Progressionen',
      },
      target: {
        en: 'Progress toward a stronger, longer full-body lever hold',
        de: 'Auf einen stärkeren und längeren Lever-Hold hinarbeiten',
      },
      status: 'actively_training',
    },
    {
      name: 'Planche & Back Lever',
      currentProgression: {
        en: 'Building straight-arm strength, shoulder control, and stable progressions',
        de: 'Gestreckte Armkraft, Schulterkontrolle und stabile Progressionen aufbauen',
      },
      target: {
        en: 'Develop controlled tuck progressions before advancing leverage',
        de: 'Kontrollierte Tuck-Progressionen aufbauen, bevor die Hebelwirkung erhöht wird',
      },
      status: 'foundation',
    },
    {
      name: 'All-round Skills',
      currentProgression: {
        en: 'Exploring human flag and dragon squat progressions alongside physique training',
        de: 'Human-Flag- und Dragon-Squat-Progressionen parallel zum Krafttraining erkunden',
      },
      target: {
        en: 'Build strength and mobility that transfer to harder skills',
        de: 'Kraft und Beweglichkeit für schwierigere Skills aufbauen',
      },
      status: 'foundation',
    },
  ],

  contact: {
    email: 'e3953s@duck.com',
    github: 'https://github.com/EliasAslan',
    linkedin: 'https://www.linkedin.com/in/elias-blondiau-172b6a442/',
    locationNote: {
      en: 'Visp, Valais, Switzerland (UTC+1/UTC+2)',
      de: 'Visp, Wallis, Schweiz (UTC+1/UTC+2)',
    },
  },
};
