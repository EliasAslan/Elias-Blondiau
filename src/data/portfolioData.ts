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
      en: 'Learning how systems work, writing code, and building projects one step at a time.',
      de: 'Verstehen wie Systeme funktionieren, Code schreiben und Schritt für Schritt Neues erschaffen.',
    },
    heroSubheadline: {
      en: 'I am an Informatiker EFZ apprentice in Switzerland, focused on building useful software, learning by shipping real projects, and understanding how the systems behind an app fit together.',
      de: 'Ich bin Informatiker-EFZ-Lernender in der Schweiz. Ich entwickle nützliche Software, lerne durch echte Projekte und möchte verstehen, wie die Systeme hinter einer App zusammenspielen.',
    },
    bioParagraphs: {
      en: [
        'Hi, I am Elias. I am currently completing my Informatiker EFZ apprenticeship at EMVS BFO in Visp, Switzerland. I am interested in what happens behind the interface: application logic, data, deployment, and the decisions that make software useful.',
        'I learn by building and iterating. Current work includes EMVS Study Hub, a personalized fitness app, and a fitness tracker for a real user, alongside smaller programming experiments.',
        'I am still learning, so I try to be honest about what works, what is unfinished, and what I need to understand better. I care about independent thinking, practical problem-solving, and making projects more reliable over time.',
      ],
      de: [
        'Hallo, ich bin Elias. Ich absolviere derzeit meine Berufslehre als Informatiker EFZ an der EMVS BFO in Visp, Schweiz. Mich interessiert, was hinter der Oberfläche passiert: Anwendungslogik, Daten, Deployment und die Entscheidungen, die Software nützlich machen.',
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
      id: 'study-hub',
      title: { en: 'EMVS Study Hub', de: 'EMVS Study Hub' },
      description: {
        en: 'A local-first study workspace for organizing learning objectives, resources, exams, and actual study sessions, with session history and review workflows.',
        de: 'Ein Local-first-Lernbereich zum Organisieren von Lernzielen, Ressourcen, Prüfungen und echten Lerneinheiten – inklusive Verlauf und Wiederholungs-Workflows.',
      },
      longDescription: {
        en: 'Built around the real learning process rather than a static checklist. The project includes session logging, objective history, resource usage derived from sessions, and ongoing work on account-based cloud sync.',
        de: 'Entwickelt rund um den tatsächlichen Lernprozess statt einer statischen Checkliste. Enthält Sitzungsprotokolle, Lernziel-Verlauf und aus Sitzungen abgeleitete Ressourcennutzung; Cloud-Synchronisierung ist in Arbeit.',
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
        en: 'A personalized home-training and habit-tracking web app designed around sustainable progress, adjustable workouts, and simple daily check-ins.',
        de: 'Eine personalisierte Web-App für Heimtraining und Gewohnheiten – mit anpassbaren Workouts, einfachen Tages-Check-ins und nachhaltigem Fortschritt.',
      },
      longDescription: {
        en: 'A practical project for turning a real person’s constraints into a usable product: workout options, activity and recovery check-ins, and progress tracking. The live demo is a test build, not a claim of a finished production service.',
        de: 'Ein praxisnahes Projekt, bei dem reale Rahmenbedingungen in ein nutzbares Produkt übersetzt werden: Trainingsoptionen, Aktivitäts- und Erholungs-Check-ins sowie Fortschrittsverfolgung. Die Live-Demo ist ein Teststand und kein fertiger Produktionsdienst.',
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
      id: 'calisthenics-workout',
      title: { en: 'Personal Calisthenics Workout App', de: 'Persönliche Calisthenics-Trainings-App' },
      description: {
        en: 'A personal training tool shaped around skill practice, hypertrophy blocks, flexible workout lengths, set tracking, timers, and progression.',
        de: 'Ein persönliches Trainingswerkzeug für Skills, Hypertrophiephasen, flexible Trainingslängen, Satzprotokolle, Timer und Progression.',
      },
      longDescription: {
        en: 'The project explores how a training app can support real decisions instead of adding friction: full, short, and quick-hit sessions, progression across an eight-week phase, and useful history. The source repository is private, so this entry links to the working prototype.',
        de: 'Das Projekt untersucht, wie eine Trainings-App echte Entscheidungen unterstützt statt zusätzliche Reibung zu erzeugen: volle, kurze und sehr kurze Einheiten, Progression über acht Wochen und ein sinnvoller Verlauf. Das Quell-Repository ist privat; verlinkt ist der Prototyp.',
      },
      technologies: ['Product Design', 'JavaScript', 'Web App', 'Progression Logic'],
      status: 'in_progress',
      statusLabel: { en: 'In Development', de: 'In Entwicklung' },
      category: 'web',
      liveUrl: 'https://refresh-apex-form-flow.base44.app/',
      highlights: {
        en: ['Flexible workout formats', 'Skill and hypertrophy planning', 'Set history, rest timers, and progression logic'],
        de: ['Flexible Trainingsformate', 'Skill- und Hypertrophieplanung', 'Satzverlauf, Pausentimer und Progressionslogik'],
      },
    },
    {
      id: 'scout-site',
      title: { en: 'Pfadi St. Christophorus Siders — Website Redesign', de: 'Pfadi St. Christophorus Siders — Website-Redesign' },
      description: {
        en: 'A multi-page website for Pfadi St. Christophorus Siders, helping families and young people find information about the scout group, age sections, activities, calendar, photos, and joining.',
        de: 'Eine mehrseitige Website für die Pfadi St. Christophorus Siders. Familien und Jugendliche finden Informationen zur Abteilung, den Stufen, Aktivitäten, zum Kalender, zu Bildern und zum Mitmachen.',
      },
      longDescription: {
        en: 'The deployed site includes dedicated pages for the group, sections, calendar, photo gallery, joining, and contact information, with responsive navigation and the group’s red, yellow, black, and cream visual identity. The site is hosted on Vercel and is not connected to a GitHub repository.',
        de: 'Die veröffentlichte Website umfasst eigene Seiten für die Abteilung, Stufen, Kalender, Bildergalerie, Mitmachen und Kontakt. Sie nutzt eine responsive Navigation und die rote, gelbe, schwarze und cremefarbene Identität der Pfadi. Die Website wird über Vercel bereitgestellt und ist nicht mit einem GitHub-Repository verbunden.',
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
      level: 'learning',
      category: 'languages',
      note: { en: 'Building interactive web applications, stateful interfaces, and browser features', de: 'Interaktive Web-Apps, zustandsbasierte Oberflächen und Browser-Funktionen entwickeln' },
    },
    {
      name: 'HTML & CSS',
      level: 'learning',
      category: 'languages',
      note: { en: 'Semantic structure, responsive layouts, accessibility, and visual refinement', de: 'Semantische Struktur, responsive Layouts, Barrierefreiheit und visuelle Verfeinerung' },
    },
    {
      name: 'TypeScript',
      level: 'learning',
      category: 'languages',
      note: { en: 'Typed application code and React component architecture', de: 'Typisierter Anwendungscode und React-Komponentenarchitektur' },
    },
    {
      name: 'Java',
      level: 'learning',
      category: 'languages',
      note: { en: 'Object-oriented programming and JavaFX desktop application experiments', de: 'Objektorientierte Programmierung und Experimente mit JavaFX-Desktop-Apps' },
    },
    {
      name: 'SQL & Supabase',
      level: 'learning',
      category: 'languages',
      note: { en: 'Relational data, authentication, row-level security, and cloud-sync workflows', de: 'Relationale Daten, Authentifizierung, Row-Level Security und Cloud-Sync-Workflows' },
    },
    {
      name: 'React & Vite',
      level: 'learning',
      category: 'frameworks_tools',
      note: { en: 'Component-driven frontend development and production builds', de: 'Komponentenbasierte Frontend-Entwicklung und Produktions-Builds' },
    },
    {
      name: 'Git & GitHub',
      level: 'familiar',
      category: 'workflow',
      note: { en: 'Branches, commits, pull requests, GitHub Actions, and deployment troubleshooting', de: 'Branches, Commits, Pull Requests, GitHub Actions und Deployment-Fehlersuche' },
    },
    {
      name: 'AI-assisted development',
      level: 'exploring',
      category: 'frameworks_tools',
      note: { en: 'Using AI to accelerate implementation while reviewing, testing, and understanding the resulting code', de: 'KI zur schnelleren Umsetzung nutzen und den erzeugten Code prüfen, testen und verstehen' },
    },
    {
      name: 'Python',
      level: 'exploring',
      category: 'languages',
      note: { en: 'Fundamentals, scripting, and small experiments', de: 'Grundlagen, Skripting und kleine Experimente' },
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
