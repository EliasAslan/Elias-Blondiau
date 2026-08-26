import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Elias Blondiau',
    preferredName: 'Elias',
    role: {
      en: 'Informatiker EFZ Apprentice',
      de: 'Informatiker EFZ in Ausbildung',
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
      en: 'I am an Informatiker EFZ apprentice based in Visp, Switzerland. I enjoy hands-on experimentation, exploring software development, and steadily developing my programming skills.',
      de: 'Ich bin Informatiker EFZ Lernender in Visp, Schweiz. Ich lerne gerne durch Ausprobieren, entdecke Softwareentwicklung und baue mein Wissen kontinuierlich auf.',
    },
    bioParagraphs: {
      en: [
        'Hi, I am Elias. I am currently completing my Informatiker EFZ apprenticeship at EMVS BFO in Visp, Switzerland. I have always been fascinated by computers and what happens behind the screen.',
        'Rather than just reading theory, I learn best when I am actually building things — whether that is writing small Python automation scripts, creating experimental 2D game prototypes in Godot and Pygame, or building web interfaces.',
        'I do not pretend to know everything — I am still in the early stages of my journey as a developer. What drives me every day is genuine curiosity, self-directed learning, and the satisfaction of solving a tricky problem with clean code.',
      ],
      de: [
        'Hallo, ich bin Elias. Ich absolviere derzeit meine Berufslehre als Informatiker EFZ an der EMVS BFO in Visp, Schweiz. Mich hat schon immer fasziniert, wie Computer funktionieren und was hinter dem Bildschirm abläuft.',
        'Statt nur reine Theorie zu büffeln, lerne ich am liebsten direkt beim Machen: sei es durch kleine Python-Automatisierungsskripte, experimentelle 2D-Spieleprototypen in Godot und Pygame oder moderne Webseiten.',
        'Ich behaupte nicht, alles zu wissen – ich stehe noch am Anfang meiner Laufbahn. Was mich antreibt, ist ehrliche Neugier, selbstständiges Lernen und die Freude daran, knifflige Probleme mit sauberem Code zu lösen.',
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
        en: 'Deepening JavaScript, Python fundamentals & modern web dev',
        de: 'Vertiefung in JavaScript, Python-Grundlagen & modernes Web',
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
        en: 'Game development concepts with Godot & Pygame',
        de: 'Spieleentwicklung-Konzepte mit Godot & Pygame',
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
      id: 'project-1',
      title: {
        en: 'Personal Portfolio & Knowledge Hub',
        de: 'Persönliches Portfolio & Wissens-Hub',
      },
      description: {
        en: 'A warm, minimal personal website built with React, TypeScript, and Tailwind CSS. Designed to document my apprenticeship journey, learning log, and projects.',
        de: 'Eine warme, minimalistische persönliche Website mit React, TypeScript und Tailwind CSS. Entwickelt, um meinen Lernweg, Projekte und Fortschritte zu dokumentieren.',
      },
      longDescription: {
        en: 'Created to have a genuine online presence without corporate fluff. Focuses on clear typography, bilingual support (EN/DE), responsive design, and an easily maintainable data architecture.',
        de: 'Erstellt als authentische Visitenkarte ohne übertriebene Floskeln. Schwerpunkt auf klarer Typografie, Zweisprachigkeit (DE/EN), mobilem Design und einer einfach pflegbaren Datenstruktur.',
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'completed',
      statusLabel: {
        en: 'Active',
        de: 'Aktiv',
      },
      category: 'web',
      githubUrl: 'https://github.com/eliasblondiau',
      liveUrl: '#',
      highlights: {
        en: [
          'Clean bilingual architecture (English & German)',
          'Warm cream & minimalist workspace aesthetic',
          'Fully responsive and accessible layout',
        ],
        de: [
          'Saubere zweisprachige Architektur (Deutsch & Englisch)',
          'Warme Creme- und Workspace-Ästhetik',
          'Vollständig responsiv und barrierearm gestaltet',
        ],
      },
    },
    {
      id: 'project-2',
      title: {
        en: 'Python Automation & File Toolkit',
        de: 'Python Automatisierungs- & Datei-Toolkit',
      },
      description: {
        en: 'A modular Python CLI utility created to automate repetitive file organization tasks, batch renaming, and basic system health checks.',
        de: 'Ein modulares Python-CLI-Tool zur Automatisierung wiederkehrender Dateiverwaltungsaufgaben, Massen-Umbenennung und einfacher Systemchecks.',
      },
      longDescription: {
        en: 'Built while learning Python scripting and OS modules. Helps organize downloaded files by extension, inspect directory sizes, and perform quick text search across local folders.',
        de: 'Entstanden beim Lernen von Python-Skripting und OS-Bibliotheken. Hilft beim Sortieren von Downloads nach Dateiendung, Prüfen von Ordnergrößen und schneller lokaler Volltextsuche.',
      },
      technologies: ['Python', 'CLI', 'File I/O', 'OS & Pathlib'],
      status: 'in_progress',
      statusLabel: {
        en: 'In Development',
        de: 'In Entwicklung',
      },
      category: 'python',
      githubUrl: 'https://github.com/eliasblondiau',
      highlights: {
        en: [
          'Interactive command-line interface with clear help menus',
          'Safe file moving and directory cleanup routines',
          'Modular structure with separate script modules',
        ],
        de: [
          'Interaktive Terminal-Oberfläche mit Hilfemenüs',
          'Sichere Dateiverschiebung und Bereinigungsroutinen',
          'Modularer Aufbau mit separaten Funktionsmodulen',
        ],
      },
    },
    {
      id: 'project-3',
      title: {
        en: '2D Game Mechanics Prototype',
        de: '2D Game-Mechaniken Prototyp',
      },
      description: {
        en: 'An interactive 2D mechanics sandbox built with Godot and GDScript / Pygame to experiment with character physics, collision detection, and tilemaps.',
        de: 'Eine interaktive 2D-Sandbox mit Godot und GDScript / Pygame zum Experimentieren mit Spielfigur-Physik, Kollisionsabfrage und Tilemaps.',
      },
      longDescription: {
        en: 'A playground project to understand game loops, delta time, state machines for player animations, and gravity physics. Created out of curiosity about game engine architecture.',
        de: 'Ein Experimentierprojekt zum Verständnis von Game-Loops, Delta-Time, State-Machines für Spieleranimationen und Gravitationsphysik aus Neugier an Spiele-Engines.',
      },
      technologies: ['Godot Engine', 'GDScript', 'Pygame', 'Game Physics'],
      status: 'prototype',
      statusLabel: {
        en: 'Learning Prototype',
        de: 'Lern-Prototyp',
      },
      category: 'game',
      githubUrl: 'https://github.com/eliasblondiau',
      highlights: {
        en: [
          'Custom platformer controller with acceleration and jump buffering',
          'State machine for idle, run, jump, and wall-slide states',
          'Tilemap level layout with basic collectible pickups',
        ],
        de: [
          'Eigene Platformer-Steuerung mit Beschleunigung und Jump-Buffering',
          'State Machine für Idle-, Run-, Sprung- und Wandrutsch-Zustände',
          'Tilemap-Levelaufbau mit einfachen Sammelobjekten',
        ],
      },
    },
    {
      id: 'project-4',
      title: {
        en: 'Interactive Learning & Habit Tracker',
        de: 'Interaktiver Lern- & Gewohnheiten-Tracker',
      },
      description: {
        en: 'A lightweight client-side application to log daily programming practice, calisthenics skill training, and technical notes with local persistence.',
        de: 'Eine schlanke Web-App zum Protokollieren täglicher Programmierübungen, Calisthenics-Trainings und technischer Notizen mit lokaler Speicherung.',
      },
      longDescription: {
        en: 'Built to practice state management, LocalStorage persistence, date manipulation, and responsive UI components in modern TypeScript.',
        de: 'Entwickelt zur Übung von State Management, lokaler Browser-Speicherung, Datumsverarbeitung und responsiven UI-Komponenten in modernem TypeScript.',
      },
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
      status: 'in_progress',
      statusLabel: {
        en: 'In Progress',
        de: 'In Arbeit',
      },
      category: 'web',
      githubUrl: 'https://github.com/eliasblondiau',
      highlights: {
        en: [
          'Simple daily log with custom tagging',
          'Offline-first with zero external dependencies',
          'Clean, distraction-free minimalist interface',
        ],
        de: [
          'Einfaches Tagesprotokoll mit benutzerdefinierten Tags',
          'Offline-fähig ohne externe Abhängigkeiten',
          'Klare, ablenkungsfreie Benutzeroberfläche',
        ],
      },
    },
  ],

  skills: [
    // Learning
    {
      name: 'Python',
      level: 'learning',
      category: 'languages',
      note: {
        en: 'Writing scripts, automation, data structures, and Pygame experiments',
        de: 'Skripte, Automatisierung, Datenstrukturen und Pygame-Experimente',
      },
    },
    {
      name: 'JavaScript / TypeScript',
      level: 'learning',
      category: 'languages',
      note: {
        en: 'DOM manipulation, modern ES6+ features, React components, and types',
        de: 'DOM-Manipulation, moderne ES6+-Syntax, React-Komponenten und Typen',
      },
    },
    {
      name: 'HTML5 & CSS3',
      level: 'learning',
      category: 'languages',
      note: {
        en: 'Semantic markup, Flexbox, Grid, responsive layouts, and Tailwind',
        de: 'Semantisches Markup, Flexbox, Grid, responsive Layouts und Tailwind',
      },
    },
    {
      name: 'Git & GitHub',
      level: 'learning',
      category: 'workflow',
      note: {
        en: 'Version control basics, branching, commits, and repository management',
        de: 'Versionskontrolle, Branching, Commits und Repository-Pflege',
      },
    },

    // Familiar
    {
      name: 'Linux / CLI Basics',
      level: 'familiar',
      category: 'workflow',
      note: {
        en: 'Command-line navigation, file permissions, shell commands, and bash scripts',
        de: 'Terminal-Navigation, Dateirechte, Shell-Befehle und grundlegende Skripte',
      },
    },
    {
      name: 'VS Code & Dev Tools',
      level: 'familiar',
      category: 'workflow',
      note: {
        en: 'Editor workflows, debugging, extensions, and browser dev inspector',
        de: 'Editor-Workflows, Debugging, Erweiterungen und Browser DevTools',
      },
    },
    {
      name: 'Computer Hardware & OS',
      level: 'familiar',
      category: 'workflow',
      note: {
        en: 'Hardware fundamentals, operating system setup, and basic networking',
        de: 'Hardware-Grundlagen, Betriebssystem-Konfiguration und Netzwerk-Basics',
      },
    },

    // Exploring
    {
      name: 'Godot Engine (GDScript)',
      level: 'exploring',
      category: 'engines_gamedev',
      note: {
        en: 'Exploring 2D nodes, scene hierarchy, physics, and input handling',
        de: 'Erkundung von 2D-Nodes, Szenenbaum, Physik und Eingabesteuerung',
      },
    },
    {
      name: 'Pygame',
      level: 'exploring',
      category: 'engines_gamedev',
      note: {
        en: 'Understanding the game loop, sprite rendering, and event queues',
        de: 'Verständnis von Game Loops, Sprite-Rendering und Event-Queues',
      },
    },
    {
      name: 'AI-Assisted Development',
      level: 'exploring',
      category: 'frameworks_tools',
      note: {
        en: 'Using modern AI tools to learn faster, debug code, and explore solutions',
        de: 'Einsatz moderner KI-Tools zum schnelleren Lernen und Debuggen',
      },
    },
    {
      name: 'SQL & Relational Databases',
      level: 'exploring',
      category: 'languages',
      note: {
        en: 'Basic SELECT queries, table relationships, and database schema concepts',
        de: 'Einfache SELECT-Abfragen, Tabellenbeziehungen und Schema-Konzepte',
      },
    },
  ],

  learning: [
    {
      id: 'software-principles',
      title: {
        en: 'Software Fundamentals & Clean Code',
        de: 'Software-Grundlagen & sauberer Code',
      },
      description: {
        en: 'Focusing on writing readable, structured code, understanding algorithms, and breaking down complex problems into small, manageable functions.',
        de: 'Fokus auf lesbaren, strukturierten Code, grundlegende Algorithmen und das Zerlegen komplexer Probleme in überschaubare Einheiten.',
      },
      currentFocus: {
        en: 'Object-oriented programming concepts and modular code organization.',
        de: 'Objektorientierte Programmierung und modulare Code-Strukturierung.',
      },
      iconName: 'Cpu',
      tag: 'Core Coding',
    },
    {
      id: 'web-development',
      title: {
        en: 'Modern Web Development',
        de: 'Moderne Webentwicklung',
      },
      description: {
        en: 'Moving beyond static HTML to understand component-based UI, reactive state, asynchronous data fetching, and accessibility standards.',
        de: 'Vom statischen HTML zu komponentenbasierter UI, reaktivem State, asynchronen API-Aufrufen und Barrierefreiheit.',
      },
      currentFocus: {
        en: 'Building interactive interfaces with React and TypeScript.',
        de: 'Erstellung interaktiver Benutzeroberflächen mit React und TypeScript.',
      },
      iconName: 'Globe',
      tag: 'Web',
    },
    {
      id: 'gamedev-logic',
      title: {
        en: 'Game Logic & Simulation',
        de: 'Spiellogik & Simulation',
      },
      description: {
        en: 'Exploring game engines as a fun, visual way to understand math, vectors, frame-rate independent physics, and state machines.',
        de: 'Game Engines als visuelle Methode, um Vektoren, Physik und Zustandsautomaten spielerisch zu verstehen.',
      },
      currentFocus: {
        en: 'Creating smooth 2D platforming physics in Godot and Pygame.',
        de: 'Flüssige 2D-Platformer-Physik in Godot und Pygame umsetzen.',
      },
      iconName: 'Gamepad2',
      tag: 'Game Dev',
    },
    {
      id: 'ai-workflows',
      title: {
        en: 'AI-Assisted Workflows',
        de: 'KI-gestützte Workflows',
      },
      description: {
        en: 'Learning how to use LLMs and AI tooling as effective learning co-pilots — using them to explain concepts, review code, and speed up troubleshooting without relying blindly on them.',
        de: 'Einsatz von LLMs und KI-Tools als effektive Lernbegleiter – zum Erklären von Konzepten und Code-Reviews, ohne blind darauf zu vertrauen.',
      },
      currentFocus: {
        en: 'Prompt engineering for code refactoring and technical problem-solving.',
        de: 'Gezielte Prompts für Refactoring und technische Lösungsfindung.',
      },
      iconName: 'Sparkles',
      tag: 'AI Tools',
    },
  ],

  calisthenics: [
    {
      name: 'Pull-ups',
      currentProgression: {
        en: 'Strict bodyweight reps with clean lock-out & chest-to-bar focus',
        de: 'Saubere Wiederholungen mit vollem Bewegungsumfang & Brust zur Stange',
      },
      target: {
        en: 'Weighted pull-up progression (+15kg)',
        de: 'Zusatzgewicht-Progression (+15kg)',
      },
      status: 'mastering_form',
    },
    {
      name: 'Muscle-up',
      currentProgression: {
        en: 'Explosive high pull-ups and straight-bar dip transitions',
        de: 'Explosive hohe Klimmzüge und Barren-Transitions',
      },
      target: {
        en: 'Strict clean bar muscle-up without kipping',
        de: 'Sauberer Bar Muscle-Up ohne Schwung',
      },
      status: 'actively_training',
    },
    {
      name: 'Handstand',
      currentProgression: {
        en: 'Wall-assisted holds & practicing kick-ups with wrist balance',
        de: 'Wandgestützte Halteübungen & Freistehendes Ausbalancieren',
      },
      target: {
        en: 'Consistent 30s freestanding hold with straight alignment',
        de: 'Konstantes 30-Sekunden freies Stehen mit gerader Linie',
      },
      status: 'actively_training',
    },
    {
      name: 'Front Lever',
      currentProgression: {
        en: 'Tuck front lever holds & advanced tuck lever raises',
        de: 'Tuck Front Lever Halten & Advanced Tuck Lever Raises',
      },
      target: {
        en: 'Straddle front lever hold for 5-8 seconds',
        de: 'Straddle Front Lever für 5-8 Sekunden stabil halten',
      },
      status: 'actively_training',
    },
    {
      name: 'Planche Progressions',
      currentProgression: {
        en: 'Planche leans, scapular protraction work & frog stands',
        de: 'Planche Leans, Schulterblatt-Stabilität & Frog Stand',
      },
      target: {
        en: 'Tuck planche with straight arms',
        de: 'Tuck Planche mit gestreckten Armen',
      },
      status: 'foundation',
    },
  ],

  contact: {
    email: 'elias.blondiau@example.ch', // Placeholder ready for Elias to update
    github: 'https://github.com/eliasblondiau',
    linkedin: 'https://www.linkedin.com/in/elias-blondiau',
    locationNote: {
      en: 'Visp, Valais, Switzerland (UTC+1/UTC+2)',
      de: 'Visp, Wallis, Schweiz (UTC+1/UTC+2)',
    },
  },
};
