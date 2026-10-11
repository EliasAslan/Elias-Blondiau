export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'Beyond Code',
      changeLanguage: 'Switch language',
      main: 'Main navigation',
    },
    meta: {
      home: 'Elias Blondiau | Portfolio',
      projects: 'Projects | Elias Blondiau',
      about: 'Beyond Code | Elias Blondiau',
      notFound: 'Page not found | Elias Blondiau',
      projectSuffix:
        'a project by Elias Blondiau, an Informatiker EFZ apprentice in platform development',
      descriptions: {
        home: 'Elias Blondiau, Informatiker EFZ apprentice in platform development. Personal projects, skills and contact.',
        projects:
          'Projects by Elias Blondiau: the Pfadi Siders website, a calisthenics app, EMVS Study Hub and BEN.SUSTAIN.',
        about:
          'Calisthenics, scouting and small projects outside school.',
        notFound: 'Page not found on the portfolio of Elias Blondiau.',
      },
    },
    media: {
      expected: 'Expected file:',
    },
    skip: 'Skip to content',
    hero: {
      line1: 'I like figuring things out.',
      line2: 'Usually by building something.',
      copy1:
        'I’m Elias. I study IT and build things in my spare time, usually because I have an idea and want to see if I can make it work.',
      copy2:
        'Some are useful. Some are experiments.',
      ctaProjects: 'See the projects',
      ctaContact: 'Get in touch',
      sticker: 'Learning as I go',
      stickerSmall: 'Informatiker EFZ apprentice · Visp',
    },
    education: {
      title: 'My path right now',
      before:
        'I’m doing an Informatiker EFZ apprenticeship in platform development alongside a Berufsmaturität in engineering, architecture and life sciences. The programmes are ',
      efzName: 'Informatiker/in EFZ – EMVS',
      middle: ' and the ',
      bmName: 'Berufsmaturität TALS (Technik, Architektur, Life Sciences)',
      after:
        '. Both are still in progress.',
      status: 'Both programmes in progress',
    },
    home: {
      featuredTitle: 'Featured projects',
      featuredSubtitle: 'A closer look at two projects.',
      allProjects: 'Explore all projects',
      allProjectsNote: 'Four projects, with a clear note on my part in each.',
      beyondTitle: 'Beyond Code',
      beyondBody:
        'Calisthenics, scouting and small projects outside school.',
      beyondCta: 'More about me',
      beyondPhotoLabel: 'Photo placeholder',
      beyondPhotoBody: 'A personal photo will go here (4:3) once I add one.',
      beyondPhotoAlt: 'Personal photo (to be added)',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Three projects of my own and one open-source project I adapted.',
      openNewTab: '(opens in a new tab)',
      details: 'Project details',
      demoLabel: 'Live demo',
      repoLabel: 'Source code',
      upstreamLabel: 'Original project',
      noSource: 'No public source repository.',
      pfadi: {
        status: 'Live website',
        title: 'Pfadi Siders website',
        body: 'A new website for my scout group, with clearer navigation, pages for each age group and a calendar that works on phones.',
        cta: 'Open the live site',
        url: 'https://pfadi-siders-updated.vercel.app/',
      },
      cal: {
        status: 'Live app, personal project',
        title: 'Calisthenics workout app',
        body: 'A workout app for my own training. I decide what it should do and refine it by using it during real workouts.',
        cta: 'Open the app',
        url: 'https://refreshing-apex-form-flow.base44.app/',
      },
      emvs: {
        status: 'In progress',
        title: 'EMVS Study Hub',
        body: "A study app I’m building to keep my schoolwork in one place. It is still in progress.",
        note: 'Study data stays in this browser. Sign-in is available, but it does not sync data to the cloud.',
      },
      ben: {
        status: 'Open-source adaptation',
        title: 'BEN.SUSTAIN',
        body: "I’m adapting an open-source fitness app for one person. The original project isn’t mine, but I’m shaping this version for my own use.",
      },
    },
    detail: {
      back: 'All projects',
      overview: 'What it is',
      contribution: 'What I contributed',
      state: 'Where it stands',
      links: 'Links',
      tech: 'Technical details',
      techVerified: 'Verified against the public repository and README.',
      techUnverified:
        'There is no public source to check. Setup notes still need to be confirmed.',
      copy: 'Copy',
      copied: 'Copied!',
      commandsT: 'Commands',
      shots: 'Screenshots',
      shotPlaceholder: 'Screenshot placeholder',
      notFoundTitle: 'Project not found',
      notFoundBody: 'This project doesn’t exist. Here are the ones that do.',
      notFoundCta: 'See all projects',
      whyT: 'Why I made it',
      decisionsT: 'What I chose',
      featuresT: 'What it does',
      inheritedT: 'From the original project',
      mineT: 'My modifications and ideas',
      challengesT: 'What was difficult',
      limitsT: 'Known limitations',
      sections: {
        pfadi: {
          tagline: 'A new website for my scout group.',
          why: [
            'Pfadi St. Christophorus Siders needed a website that shows what the group actually is: outdoor activities, clear age-group sections, a calendar people can find, and a way for newcomers to join. The old site no longer did that job, so I built a replacement.',
            'The site is live and in use. It has sections for Wölfe und Bienli, Pfadis, Pios and Rover, plus Abteilung, Kalender, Bilder, Mitmachen and Kontakt.',
          ],
          decisions: [
            'I chose the look and layout, including the “Gipfelpause” homepage and the page structure.',
            'I gave each age group its own section so parents and kids can find the right information.',
            'Made the key details easy to find: meeting place (Pfadilokal, Rue Saint-Georges 19, Sierre), Saturday hours, calendar and contact.',
            'I used AI tools while coding, then checked and corrected the result against the design.',
          ],
          features: [
            'Homepage with links to the age groups, Instagram and key pages.',
            'Pages for all four age groups, with an overview of their activities.',
            'Calendar view for meetups, camps and events.',
            'Meeting-place block with public-transport and map links.',
            'Contact, error-reporting and legal pages (Impressum, Datenschutz), with a webmaster credit.',
          ],
          challenges: [
            'I had to keep the project focused on the pages the group actually needs.',
            'Writing for kids and parents meant balancing the sense of adventure with practical details.',
            'Checking each layout against real content caught problems before they spread.',
          ],
          limits: [
            'There is no public source repository, so the live site is the only version available to review.',
            'I have not measured site usage or collected feedback, so I have no figures or testimonials to share.',
          ],
          stateBody:
            'The group uses the site. I update it when needed.',
          shots: [
            'Homepage hero “Gipfelpause”, desktop, 1600×900',
            'Age-group overview, mobile, 390×844',
          ],
        },
        cal: {
          tagline: 'A workout app for my own training.',
          why: [
            'I train calisthenics regularly and wanted an app that fits how I train. I couldn’t find one that matched, so I built my own version.',
            'The live demo is called FORM: Calisthenics Training.',
          ],
          decisions: [
            'I started with my own workouts and built around what I needed during a session.',
            'I decided how it should look and work, then used AI tools to help with the code.',
            'I tested each version during my own training and fixed what got in the way.',
          ],
          features: [
            'The demo opens as FORM: Calisthenics Training.',
            'The app follows my workout routines. I make changes as I use it.',
            'I have not documented every screen yet, so I have kept the feature list short.',
          ],
          challenges: [
            'It was easy to keep adding ideas. I had to focus on what I would actually use.',
            'Using the app during workouts helped me spot problems I would not have noticed otherwise.',
          ],
          limits: [
            'I haven’t documented every screen yet, so this page sticks to details I can confirm from my own notes.',
            'There is no public source repository, so the live demo is the only version available to review.',
          ],
          stateBody:
            'I use it for my own training and keep changing things that get in the way.',
          shots: [
            'Workout session view, desktop, 1600×900',
            'Workout session view, mobile, 390×844',
          ],
        },
        emvs: {
          tagline: 'A dashboard for keeping my schoolwork together.',
          why: [
            'Between vocational school and the Berufsmaturität, I was tracking modules, objectives, resources, exams and deadlines in different places. I built the EMVS Study Hub to keep them together.',
            'Your study data stays in the browser using localStorage, so you can use the app without an account or a server.',
          ],
          decisions: [
            'I kept the data in the browser so the app works without sign-up.',
            'I added views for today’s work, weak spots, quick capture, exams, weekly reviews and tools.',
            'I added a command palette (⌘K) and undo to make common actions quicker and mistakes easier to fix.',
            'Added Supabase email and password sign-in. It does not connect to study data yet.',
          ],
          features: [
            'Module tracking with learning objectives, resources, sessions and exams.',
            'Views for Heute, Schwachstellen, Erfassen, Prüfungen, Review, Werkzeuge and Einstellungen.',
            'Command palette (⌘K) and undo support.',
            'Weekly reviews to look back and plan ahead.',
            'Settings with Supabase email/password sign-in, session restore and sign-out.',
          ],
          challenges: [
            'I had to make it clear that signing in does not sync study data, so I explained this in the README.',
            'Building it in stages helped me finish a usable local version before working on sign-in and sync.',
            'Writing down what a phase does not do helps prevent misunderstandings.',
          ],
          limits: [
            'There is no cloud sync. Signing in does not upload, download, overwrite or delete study data. The README explains this.',
            'Data lives in one browser’s localStorage; switching devices or clearing site data loses it.',
            'Supabase setup requires the user’s own publishable key; never a service_role key in browser code.',
          ],
          stateBody:
            'Still in progress. The local app works, but study data does not sync to the cloud.',
          shots: [
            'Dashboard “Heute” view, desktop, 1600×900',
            'Schwachstellen view, mobile, 390×844',
          ],
          techStack: ['HTML', 'CSS', 'JavaScript (no build step)', 'localStorage', 'Supabase Auth (email/password)', 'Supabase JS client via esm.sh'],
          techSetup: [
            'Clone the repository and open the project folder.',
            'Run “npm start”.',
            'Open http://localhost:8080 in the browser.',
            'For sign-in: paste your own Supabase publishable key into js/services/supabaseClient.js, serve over HTTP(S), then open Einstellungen → Konto / Supabase.',
          ],
          techCommands: ['npm start', 'http://localhost:8080'],
        },
        ben: {
          tagline: 'One person. One pace. Keep going.',
          why: [
            'I wanted a fitness tracker for one person. I started with openGym, an open-source gym and bodyweight tracker, and began adapting it for BEN.SUSTAIN.',
            'I came up with the BEN.SUSTAIN name and its direction: “One person. One pace. Keep going.” The app is based on someone else’s open-source project.',
          ],
          decisions: [
            'I chose openGym because it already has routines, guided workouts, progression features and offline support.',
            'I kept the fork public on GitHub so it is clear where the project came from.',
            'I want BEN.SUSTAIN to feel simpler and more personal.',
          ],
          inherited: [
            'Routine planning over a large exercise library with animated demos, searchable by muscle.',
            'Guided workouts with pre-filled weights, rest timer and automatic PR detection.',
            'Progression rules, estimated 1RM, activity heatmap and muscle maps.',
            'Import from FitNotes, Strong and Hevy; full JSON export.',
            'Passkey login, offline support, self-hosting with Docker.',
          ],
          mine: [
            'The BEN.SUSTAIN brand concept and single-person direction.',
            'I have started adapting it for my own use. I still need to list the exact changes here.',
          ],
          challenges: [
            'I need to understand the existing code before changing it.',
            'I need to keep the original features separate from the changes I make.',
          ],
          limits: [
            'I have not documented my code changes here yet.',
            'There is no public live demo of my fork.',
          ],
          stateBody:
            'The fork is public. I still need to document my changes.',
          shots: [
            'BEN.SUSTAIN home view, desktop, 1600×900',
            'Guided workout view, mobile, 390×844',
          ],
          techStack: ['Upstream: React 19 + Vite frontend', 'Upstream: plain Node.js API', 'Docker Compose self-hosting', 'License: GNU AGPLv3'],
          techSetup: [
            'You need Docker with Compose.',
            'Clone the fork, copy .env.example to .env and adjust the hostname settings.',
            'Run “docker compose up -d” and open http://localhost:8080.',
            'First start downloads the exercise media (about 140 MB) once.',
            'These are the original project’s setup steps. I still need to check whether my fork needs anything different.',
          ],
          techCommands: [
            'git clone https://github.com/EliasAslan/benOpenGym',
            'cp .env.example .env',
            'docker compose up -d',
            'http://localhost:8080',
          ],
        },
      },
    },
    skills: {
      title: 'What I know so far',
      subtitle:
        'I train calisthenics and move to harder skills when I can do the current step well. These cards show where I am with each skill.',
      learning: 'Learning',
      learningMeaning: 'Getting the basics down.',
      exploring: 'Exploring',
      exploringMeaning: 'Trying it out and finding my way.',
      stronger: 'How I work',
      strongerMeaning: 'From idea to a working result.',
      iterativeDevelopment: 'Build, test, improve',
      caption:
        'My current level in each skill, plus a few notes on how I work.',
      strengths: [
        'Explaining what I want a project to do.',
        'Testing features and finding bugs.',
        'Checking suggested changes before using them.',
        'Splitting big projects into smaller steps.',
        'Making small code changes.',
        'Deploying projects and fixing build errors.',
      ],
    },
    about: {
      title: 'Beyond Code',
      intro1:
        'I’m Elias. I’m doing an Informatiker EFZ apprenticeship in platform development and a Berufsmaturität TALS. Outside school, I usually prefer making something over talking about it.',
      intro2:
        'Here is what I get up to outside school and coding.',
      eduBody:
        'I’m doing an Informatiker EFZ apprenticeship in platform development alongside the Berufsmaturität TALS. Both are in progress. The official programmes are:',
      trainingTitle: 'Calisthenics',
      trainingBody:
        'I train calisthenics regularly. It taught me to move up a progression only when I can do the current step properly. I use the same idea when building training features: I try them in a real workout and fix what gets in the way.',
      trainingGoals: 'Right now I’m working on the basics and trying to train consistently. I’ll add specific goals when I’ve settled on them.',
      scoutsTitle: 'Scouts',
      scoutsBody:
        'I’m part of Pfadi St. Christophorus Siders, and I built a new website when the group needed one. Scouting also means planning activities, cooking over a fire and making sure everyone gets home safely.',
      tinkeringTitle: 'Spare-time tinkering',
      tinkeringBody:
        'I spend my free time on study tools, training apps and other small projects. I usually start by solving a problem of my own. If it helps someone else too, even better.',
      valuesTitle: 'Things I try to stick to',
      values: [
        'Try things I do not know yet.',
        'Think for myself. Understand before copying.',
        'Solve practical problems. A working result matters more than a perfect plan.',
        'Be honest about what I know and what I’m still learning.',
      ],
      readingTitle: 'Reading and ideas',
      readingBody: 'I’ll add a few books and ideas here later.',
      photoLabel: 'Photo placeholder',
      photoBody: 'I’ll add a photo here later (4:3).',
      photoAlt: 'Portrait photo of Elias (to be added)',
      contactCta: 'Get in touch',
    },
    contact: {
      title: 'Have an idea or a question?',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinLabel: 'Elias Blondiau on LinkedIn',
    },
    footer: {
      line: 'Designed and built by Elias in Visp.',
    },
    eggs: {
      console: [
        'Elias Blondiau’s portfolio. Have a look around.',
        'Type “sustain” anywhere on the site to find a small extra page.',
        'No trackers here. This page is just for fun.',
      ],
      paletteLabel: 'Quick route finder',
      palettePlaceholder: 'Type a page name…',
      paletteHint: 'Type a page name to find it.',
      paletteNone: 'No match. Try the home page.',
      fourthTitle: 'Curiosity',
      fourthBody:
        'Already maxed out. No certificate needed.',
      footerButton: 'Show another footer note',
      notFoundTitle: 'Well, this is awkward.',
      notFoundBody: 'This page has either moved, vanished, or decided to take a rest day.',
      notFoundAside: 'We checked behind the sofa. No luck. Try one of the links below.',
      footerNotes: [
        'Still learning as I build.',
        'No cookies or trackers. Just a website.',
        'Built with React, Vite and a lot of trial and error.',
      ],
      footerRestBefore: 'This portfolio takes',
      footerRestLink: 'rest days',
      footerRestAfter: '.',
      restEyebrow: 'Hidden page. You found the word.',
      restTitle: 'Rest day.',
      restIntro:
        'Even a portfolio needs a rest day. No sets or PRs, just a short session:',
      restPlan: [
        '3 × 10 relaxed scrolls',
        '1 × slow read of the About page',
        '60-second plank while the build runs (optional)',
        '0 skipped leg days. There are no legs here.',
      ],
      restBack: 'Back to training',
      restSession: 'Today’s session. Check things off as you go.',
      restDone: 'Session complete. Recovery: 100%.',
      notFoundAt: 'No page at this address:',
    },
  },

  de: {
    nav: {
      home: 'Start',
      projects: 'Projekte',
      about: 'Abseits vom Code',
      changeLanguage: 'Sprache wechseln',
      main: 'Hauptnavigation',
    },
    meta: {
      home: 'Elias Blondiau | Portfolio',
      projects: 'Projekte | Elias Blondiau',
      about: 'Abseits vom Code | Elias Blondiau',
      notFound: 'Seite nicht gefunden | Elias Blondiau',
      projectSuffix:
        'ein Projekt von Elias Blondiau, Informatiker EFZ in Ausbildung',
      descriptions: {
        home: 'Elias Blondiau macht eine Lehre als Informatiker EFZ in Plattformentwicklung. Projekte und Kontakt.',
        projects:
          'Alle Projekte von Elias Blondiau: Pfadi-Siders-Website, Calisthenics-Trainings-App, EMVS Study Hub und BEN.SUSTAIN.',
        about:
          'Calisthenics, Pfadi und kleine Projekte neben der Schule.',
        notFound: 'Seite nicht gefunden im Portfolio von Elias Blondiau.',
      },
    },
    media: {
      expected: 'Erwartete Datei:',
    },
    skip: 'Zum Inhalt springen',
    hero: {
      line1: 'Ich tüftle gern.',
      line2: 'Meistens, indem ich etwas baue.',
      copy1:
        'Ich bin Elias. Ich lerne Informatik und baue in meiner Freizeit Dinge, meistens weil ich eine Idee habe und sehen will, ob ich sie zum Laufen bringe.',
      copy2:
        'Manches ist nützlich. Manches ist ein Experiment.',
      ctaProjects: 'Projekte ansehen',
      ctaContact: 'Kontakt aufnehmen',
      sticker: 'Ich lerne dazu',
      stickerSmall: 'Lehre als Informatiker EFZ · Visp',
    },
    education: {
      title: 'Mein Weg gerade',
      before:
        'Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und dazu eine Berufsmaturität in Technik, Architektur und Life Sciences. Die offiziellen Bezeichnungen sind: ',
      efzName: 'Informatiker/in EFZ – EMVS',
      middle: ' und ',
      bmName: 'Berufsmaturität TALS (Technik, Architektur, Life Sciences)',
      after:
        '. Beide Abschlüsse sind noch in Arbeit.',
      status: 'Beides in Arbeit',
    },
    home: {
      featuredTitle: 'Ausgewählte Projekte',
      featuredSubtitle:
        'Zwei Projekte, die ich gebaut, getestet und verbessert habe.',
      allProjects: 'Alle Projekte entdecken',
      allProjectsNote: 'Vier Projekte. Bei jedem steht dabei, was ich gemacht habe.',
      beyondTitle: 'Abseits vom Code',
      beyondBody:
        'Calisthenics, Pfadi und kleine Projekte neben der Schule.',
      beyondCta: 'Mehr über mich',
      beyondPhotoLabel: 'Foto-Platzhalter',
      beyondPhotoBody: 'Hier kommt ein persönliches Foto hin (4:3), sobald ich eines habe.',
      beyondPhotoAlt: 'Persönliches Foto (folgt)',
    },
    projects: {
      title: 'Projekte',
      subtitle:
        'Drei eigene Projekte und ein angepasstes Open-Source-Projekt.',
      openNewTab: '(öffnet in einem neuen Tab)',
      details: 'Projektdetails',
      demoLabel: 'Live-Demo',
      repoLabel: 'Quellcode',
      upstreamLabel: 'Ursprungsprojekt',
      noSource: 'Kein öffentliches Quell-Repository.',
      pfadi: {
        status: 'Live-Website',
        title: 'Pfadi Siders Website',
        body: 'Eine neue Website für meine Pfadi-Abteilung, mit klarer Navigation, Seiten für die Stufen und einem Kalender, der auch auf dem Handy funktioniert.',
        cta: 'Live-Website öffnen',
        url: 'https://pfadi-siders-updated.vercel.app/',
      },
      cal: {
        status: 'Live-App, eigenes Projekt',
        title: 'Calisthenics-Trainings-App',
        body: 'Eine Trainings-App für mein eigenes Training. Ich lege fest, was sie können soll, und verbessere sie, indem ich sie beim Training tatsächlich nutze.',
        cta: 'App öffnen',
        url: 'https://refreshing-apex-form-flow.base44.app/',
      },
      emvs: {
        status: 'In Arbeit',
        title: 'EMVS Study Hub',
        body: 'Eine Lern-App, die mir hilft, meinen Schulstoff an einem Ort zu organisieren. Sie ist noch in Arbeit.',
        note: 'Die Lerndaten bleiben in diesem Browser. Eine Anmeldung ist möglich, synchronisiert die Daten aber nicht mit der Cloud.',
      },
      ben: {
        status: 'Open-Source-Anpassung',
        title: 'BEN.SUSTAIN',
        body: 'Ich passe eine Open-Source-Fitness-App für eine einzelne Person an. Das Original stammt nicht von mir, aber ich richte diese Version für meinen eigenen Gebrauch aus.',
      },
    },
    detail: {
      back: 'Alle Projekte',
      overview: 'Worum es geht',
      contribution: 'Mein Beitrag',
      state: 'Aktueller Stand',
      links: 'Links',
      tech: 'Technische Details',
      techVerified: 'Gegen das öffentliche Repository und README geprüft.',
      techUnverified:
        'Es gibt keine öffentliche Quelle zum Prüfen. Die Setup-Angaben muss ich noch bestätigen.',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      commandsT: 'Befehle',
      shots: 'Screenshots',
      shotPlaceholder: 'Screenshot-Platzhalter',
      notFoundTitle: 'Projekt nicht gefunden',
      notFoundBody: 'Dieses Projekt gibt es nicht. Hier sind die, die es gibt.',
      notFoundCta: 'Alle Projekte ansehen',
      whyT: 'Warum ich es gebaut habe',
      decisionsT: 'Was ich gemacht habe',
      featuresT: 'Was es kann',
      inheritedT: 'Vom Ursprungsprojekt übernommen',
      mineT: 'Meine Änderungen',
      challengesT: 'Was schwierig war',
      limitsT: 'Bekannte Einschränkungen',
      sections: {
        pfadi: {
          tagline: 'Eine neue Website für meine Pfadi-Abteilung.',
          why: [
            'Die Pfadi St. Christophorus Siders brauchte eine Website, die zeigt, was die Abteilung wirklich ist: Aktivitäten draussen, klare Stufen, ein auffindbarer Kalender und ein Weg für Neue zum Mitmachen. Die alte Seite hat das nicht mehr geleistet, also habe ich einen Ersatz gebaut.',
            'Die Seite ist live und wird genutzt. Sie enthält Bereiche für Wölfe und Bienli, Pfadis, Pios und Rover sowie Abteilung, Kalender, Bilder, Mitmachen und Kontakt.',
          ],
          decisions: [
            'Look und Aufbau selbst festgelegt, inklusive der Startseite „Gipfelpause“.',
            'Jede Stufe hat einen eigenen Bereich, damit Kinder und Eltern die passenden Informationen finden.',
            'Die wichtigsten Angaben sind leicht zu finden: Treffpunkt (Pfadilokal, Rue Saint-Georges 19, Sierre), Zeiten am Samstag, Kalender und Kontakt.',
            'Beim Programmieren habe ich KI-Werkzeuge genutzt und den Code danach geprüft und korrigiert.',
          ],
          features: [
            'Startseite mit Links zu den Stufen, Instagram und den wichtigsten Seiten.',
            'Seiten für alle vier Altersgruppen mit einem Überblick über ihre Aktivitäten.',
            'Kalenderansicht für Anlässe, Lager und Termine.',
            'Treffpunkt-Block mit ÖV- und Karten-Links.',
            'Kontakt-, Fehler-melden- und Rechtsseiten (Impressum, Datenschutz) mit Webmaster-Angabe.',
          ],
          challenges: [
            'Ich musste mich auf die Seiten konzentrieren, die die Abteilung wirklich braucht.',
            'Für Kinder und Eltern zu schreiben bedeutete, Abenteuer und praktische Informationen auszubalancieren.',
            'Beim Prüfen mit echten Inhalten habe ich Layout-Probleme entdeckt.',
          ],
          limits: [
            'Es gibt kein öffentliches Quell-Repository. Deshalb lässt sich nur die Live-Seite ansehen.',
            'Ich habe die Nutzung nicht gemessen und kein Feedback gesammelt. Deshalb gibt es keine Kennzahlen oder Rückmeldungen.',
          ],
          stateBody:
            'Live und bei der Abteilung im Einsatz. Inhalte werden aktualisiert, wie die Abteilung sie braucht.',
          shots: [
            'Startseiten-Hero „Gipfelpause“, Desktop, 1600×900',
            'Stufenübersicht, Mobil, 390×844',
          ],
        },
        cal: {
          tagline: 'Eine App für mein eigenes Training.',
          why: [
            'Ich trainiere regelmässig Calisthenics und wollte eine App, die zu meinem Training passt. Ich fand keine passende, also habe ich meine eigene Version gebaut.',
            'Die Live-Demo heisst FORM: Calisthenics Training.',
          ],
          decisions: [
            'Ich bin von meinen eigenen Workouts ausgegangen und habe die App an meine Bedürfnisse angepasst.',
            'Aussehen und Verhalten selbst festgelegt. Bei der Umsetzung habe ich KI-Werkzeuge genutzt.',
            'Jede Version im eigenen Training getestet und verbessert, was dabei störte.',
          ],
          features: [
            'Die Demo öffnet als FORM: Calisthenics Training.',
            'Die App richtet sich nach meinen Trainingsroutinen. Beim Nutzen passe ich sie weiter an.',
            'Ich muss die aktuelle Oberfläche noch dokumentieren, bevor ich eine genauere Feature-Liste ergänzen kann.',
          ],
          challenges: [
            'Ich musste entscheiden, welche Ideen ich weglasse, damit die App einfach bleibt.',
            'Beim Training habe ich Bedienprobleme entdeckt, die mir beim blossen Durchsehen nicht aufgefallen wären.',
          ],
          limits: [
            'Ich habe noch nicht jeden Bildschirm dokumentiert und beschränke mich deshalb auf Details, die ich aus meinen Notizen bestätigen kann.',
            'Kein öffentliches Quell-Repository. Nur die Live-Demo ist einsehbar.',
          ],
          stateBody:
            'Live als eigenes Projekt. Ich nutze sie weiter im Training und verbessere, was mich stört.',
          shots: [
            'Workout-Ansicht, Desktop, 1600×900',
            'Workout-Ansicht, Mobil, 390×844',
          ],
        },
        emvs: {
          tagline: 'Ein Dashboard für meinen Schulstoff.',
          why: [
            'Mit Berufslehre und Berufsmaturität hatte ich Module, Lernziele, Materialien, Prüfungen und Fristen an verschiedenen Orten. Ich habe den EMVS Study Hub gebaut, um alles zusammenzuhalten.',
            'Die Lerndaten bleiben über localStorage im Browser. Die App funktioniert deshalb ohne Konto und Server.',
          ],
          decisions: [
            'Die Daten bleiben im Browser, damit die App ohne Anmeldung funktioniert.',
            'Ansichten für Heute, Schwachstellen, Erfassen, Prüfungen, Wochenrückblick und Werkzeuge hinzugefügt.',
            'Befehlspalette (⌘K) und Rückgängig eingebaut, damit sich die App schneller bedienen lässt und Fehler nicht gleich zum Problem werden.',
            'Supabase-Anmeldung mit E-Mail und Passwort hinzugefügt. Die Lerndaten sind noch nicht damit verbunden.',
          ],
          features: [
            'Modul-Tracking mit Lernzielen, Ressourcen, Sessions und Prüfungen.',
            'Ansichten für Heute, Schwachstellen, Erfassen, Prüfungen, Review, Werkzeuge und Einstellungen.',
            'Befehlspalette (⌘K) und Rückgängig-Unterstützung.',
            'Wochenrückblicke zum Prüfen und Planen.',
            'Einstellungen mit Supabase-E-Mail/Passwort-Login, Session-Wiederherstellung und Abmelden.',
          ],
          challenges: [
            'Ich musste klar erklären, dass die Anmeldung keine Lerndaten synchronisiert. Das steht auch im README.',
            'Die Arbeit in Phasen zu teilen (erst lokale App, dann Auth-Basis, später Sync) hat ein ehrgeiziges Projekt auslieferbar gehalten.',
            'Festzuhalten, was eine Phase nicht tut, hilft Missverständnisse zu vermeiden.',
          ],
          limits: [
            'Es gibt keine Cloud-Synchronisierung. Die Anmeldung lädt, speichert, überschreibt oder löscht keine Lerndaten. Das steht auch im README.',
            'Daten leben im localStorage eines Browsers; Gerätewechsel oder Löschen der Website-Daten verliert sie.',
            'Das Supabase-Setup braucht den eigenen Publishable Key; niemals einen Service-Role-Key im Browser-Code.',
          ],
          stateBody:
            'Noch in Arbeit. Die lokale App funktioniert, aber die Lerndaten werden nicht in die Cloud synchronisiert.',
          shots: [
            'Dashboard-Ansicht „Heute“, Desktop, 1600×900',
            'Schwachstellen-Ansicht, Mobil, 390×844',
          ],
          techStack: ['HTML', 'CSS', 'JavaScript (ohne Build-Schritt)', 'localStorage', 'Supabase Auth (E-Mail/Passwort)', 'Supabase-JS-Client via esm.sh'],
          techSetup: [
            'Repository klonen und Projektordner öffnen.',
            '„npm start“ ausführen.',
            'http://localhost:8080 im Browser öffnen.',
            'Fürs Anmelden: eigenen Supabase-Publishable-Key in js/services/supabaseClient.js eintragen, über HTTP(S) ausliefern, dann Einstellungen → Konto / Supabase öffnen.',
          ],
          techCommands: ['npm start', 'http://localhost:8080'],
        },
        ben: {
          tagline: 'One person. One pace. Keep going.',
          why: [
            'Ich wollte einen Fitness-Tracker, den eine Person im eigenen Tempo nutzen kann. Statt bei null anzufangen, habe ich openGym geforkt, einen selbst-hostbaren Open-Source-Tracker für Kraft- und Körpergewichtstraining, und passe ihn zu BEN.SUSTAIN an.',
            'Der Name BEN.SUSTAIN und die Richtung stammen von mir: „One person. One pace. Keep going.“ Die App basiert auf dem Open-Source-Projekt einer anderen Person.',
          ],
          decisions: [
            'openGym als Basis gewählt, weil es die schwierigen Teile schon löst: Routinen, geführte Workouts, Progressionslogik, Offline-Nutzung.',
            'Ich habe den Fork öffentlich gelassen, damit klar ist, woher das Projekt stammt.',
            'BEN.SUSTAIN soll einfacher und persönlicher sein.',
          ],
          inherited: [
            'Routinenplanung über eine grosse Übungsbibliothek mit animierten Demos, durchsuchbar nach Muskel.',
            'Geführte Workouts mit vorausgefüllten Gewichten, Pausen-Timer und automatischer PR-Erkennung.',
            'Progressionsregeln, geschätztes 1RM, Aktivitäts-Heatmap und Muskelkarten.',
            'Import aus FitNotes, Strong und Hevy; vollständiger JSON-Export.',
            'Passkey-Login, Offline-Unterstützung, Self-Hosting mit Docker.',
          ],
          mine: [
            'Das BEN.SUSTAIN-Markenkonzept und die Einzelpersonen-Ausrichtung.',
            'Ich passe das Projekt für meinen eigenen Gebrauch an. Die genauen Änderungen muss ich hier noch auflisten.',
          ],
          challenges: [
            'Bei einer ausgereiften Codebasis kommt erst das Verstehen, dann das Ändern.',
            'Ich trenne die übernommenen Funktionen klar von meinen eigenen Änderungen.',
          ],
          limits: [
            'Meine konkreten Code-Änderungen sind hier noch nicht dokumentiert.',
            'Es gibt keine öffentliche Live-Demo meines Forks.',
          ],
          stateBody:
            'Der Fork ist öffentlich. Meine Änderungen muss ich noch dokumentieren.',
          shots: [
            'BEN.SUSTAIN-Startansicht, Desktop, 1600×900',
            'Geführte Workout-Ansicht, Mobil, 390×844',
          ],
          techStack: ['Upstream: React 19 + Vite Frontend', 'Upstream: schlichte Node.js API', 'Docker-Compose-Self-Hosting', 'Lizenz: GNU AGPLv3'],
          techSetup: [
            'Docker mit Compose wird benötigt.',
            'Fork klonen, .env.example nach .env kopieren und Hostnamen-Einstellungen anpassen.',
            '„docker compose up -d“ ausführen und http://localhost:8080 öffnen.',
            'Beim ersten Start werden die Übungsmedien einmalig heruntergeladen (ca. 140 MB).',
            'Hinweis: Das sind die Upstream-Kurzstart-Schritte; Fork-spezifische Setup-Angaben müssen noch geprüft werden.',
          ],
          techCommands: [
            'git clone https://github.com/EliasAslan/benOpenGym',
            'cp .env.example .env',
            'docker compose up -d',
            'http://localhost:8080',
          ],
        },
      },
    },
    skills: {
      title: 'Was ich bisher kann',
      subtitle:
        'Ich trainiere Calisthenics und gehe erst weiter, wenn die aktuelle Übung gut klappt. Die Karten zeigen meinen Stand.',
      learning: 'Lernen',
      learningMeaning: 'Grundlagen aufbauen.',
      exploring: 'Ausprobieren',
      exploringMeaning: 'Erste Projekte damit umsetzen.',
      stronger: 'So arbeite ich',
      strongerMeaning: 'Von der Idee zum Ergebnis.',
      iterativeDevelopment: 'Bauen, testen, verbessern',
      caption:
        'Mein aktueller Stand und ein paar Dinge, die ich bei der Arbeit selbst mache.',
      strengths: [
        'Das gewünschte Ergebnis beschreiben und klare Anforderungen daraus machen.',
        'Features testen und Fehler melden.',
        'Vorgeschlagene Änderungen prüfen und beurteilen, ob sie sinnvoll sind.',
        'Grössere Projekte in machbare Phasen aufteilen.',
        'Kleine Code-Änderungen selbst machen.',
        'Deployments einrichten und Build-Fehler beheben.',
      ],
    },
    about: {
      title: 'Abseits vom Code',
      intro1:
        'Ich bin Elias. Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und die Berufsmaturität TALS. In meiner Freizeit baue ich lieber etwas, als lange darüber zu reden.',
      intro2:
        'Hier geht es darum, was ich neben Schule und Programmieren mache.',
      eduBody:
        'Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und parallel die Berufsmaturität TALS. Beides ist noch in Arbeit. Die offiziellen Programme sind:',
      trainingTitle: 'Calisthenics',
      trainingBody:
        'Ich trainiere regelmässig Calisthenics. Bei neuen Übungen gehe ich erst weiter, wenn die aktuelle gut klappt. Neue Funktionen teste ich ebenfalls im Training und passe an, was mich stört.',
      trainingGoals: 'Im Moment arbeite ich an den Grundlagen und versuche, regelmässig zu trainieren. Konkrete Ziele ergänze ich, wenn ich sie festgelegt habe.',
      scoutsTitle: 'Pfadi',
      scoutsBody:
        'Ich bin bei der Pfadi St. Christophorus Siders und habe eine neue Website gebaut, als die Abteilung eine brauchte. Zur Pfadi gehört auch, Aktivitäten zu planen, über dem Feuer zu kochen und dafür zu sorgen, dass alle sicher nach Hause kommen.',
      tinkeringTitle: 'Tüftelei in der Freizeit',
      tinkeringBody:
        'In meiner Freizeit arbeite ich an Lernwerkzeugen, Trainings-Apps und kleinen Projekten. Meistens löse ich damit zuerst ein eigenes Problem. Wenn es auch anderen hilft, umso besser.',
      valuesTitle: 'Dinge, an die ich mich halten will',
      values: [
        'Neugierig bleiben. Auch mal etwas Neues ausprobieren.',
        'Selbst denken. Erst verstehen, dann kopieren.',
        'Praktische Probleme lösen. Funktionierend ist besser als perfekt geplant.',
        'Ehrlich sagen, was ich kann und was ich noch lerne.',
      ],
      readingTitle: 'Lesen und Ideen',
      readingBody: 'Hier ergänze ich später ein paar Bücher und Ideen.',
      photoLabel: 'Foto-Platzhalter',
      photoBody: 'Hier ergänze ich später ein Foto (4:3).',
      photoAlt: 'Porträtfoto von Elias (folgt)',
      contactCta: 'Kontakt aufnehmen',
    },
    contact: {
      title: 'Idee oder Frage?',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinLabel: 'Elias Blondiau auf LinkedIn',
    },
    footer: {
      line: 'Von Elias in Visp entworfen und gebaut.',
    },
    eggs: {
      console: [
        'Portfolio von Elias Blondiau. Schau dich um.',
        'Psst: Tippe irgendwo auf dieser Seite „sustain“ für einen Ruhetag.',
        'Keine Tracker. Diese Seite ist einfach ein kleines Extra.',
      ],
      paletteLabel: 'Schnelle Seitensuche',
      palettePlaceholder: 'Seitenname tippen…',
      paletteHint: 'Gib einen Seitennamen ein, um ihn zu finden.',
      paletteNone: 'Nichts gefunden. Über die Startseite kommst du immer zurück.',
      fourthTitle: 'Neugier',
      fourthBody:
        'Schon auf Maximum. Kein Zertifikat, nur Übung.',
      fourthHint: 'Sie kennt ein Geheimnis: Tippe irgendwo „sustain“.',
      footerButton: 'Nächste Fussnote anzeigen',
      notFoundTitle: 'Tja. Das ist jetzt etwas unangenehm.',
      notFoundBody: 'Diese Seite ist umgezogen, verschwunden oder macht gerade Ruhetag.',
      notFoundAside: 'Wir haben hinter dem Sofa nachgesehen. Nichts. Probier einen der Links unten.',
      footerNotes: [
        'Offen gebaut, noch am Lernen.',
        'Keine Cookies und keine Tracker. Einfach eine Website.',
        'Mit React, Vite und viel Ausprobieren gebaut.',
      ],
      footerRestBefore: 'Dieses Portfolio macht',
      footerRestLink: 'Ruhetage',
      footerRestAfter: '.',
      restEyebrow: 'Versteckte Seite. Du hast das Wort gefunden.',
      restTitle: 'Ruhetag.',
      restIntro:
        'Auch ein Portfolio braucht mal Pause. Keine Sätze und keine PRs, nur eine kurze Einheit:',
      restPlan: [
        '3 × 10 entspannte Scrolls',
        '1 × langsames Lesen der Über-mich-Seite',
        '60 Sekunden Plank, während der Build läuft (optional)',
        '0 ausgelassene Leg Days. Hier gibt es keine Beine.',
      ],
      restBack: 'Zurück zum Training',
      restSession: 'Heutige Einheit. Einfach abhaken.',
      restDone: 'Einheit geschafft. Erholung: 100 %.',
      notFoundAt: 'Keine Seite unter dieser Adresse:',
    },
  },
};
