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
      home: 'Elias Blondiau — Portfolio',
      projects: 'Projects — Elias Blondiau',
      about: 'Beyond Code — Elias Blondiau',
      notFound: 'Page not found — Elias Blondiau',
      projectSuffix:
        'a project by Elias Blondiau, Informatiker EFZ apprentice',
      descriptions: {
        home: 'Elias Blondiau, Informatiker EFZ apprentice in platform development. Personal projects, skills and contact.',
        projects:
          'All projects by Elias Blondiau: Pfadi Siders website, calisthenics training app, EMVS Study Hub and BEN.SUSTAIN.',
        about:
          'Beyond Code: calisthenics, scouts and tinkering — the person behind the projects of Elias Blondiau.',
        notFound: 'Page not found on the portfolio of Elias Blondiau.',
      },
    },
    media: {
      expected: 'Expected file:',
    },
    skip: 'Skip to content',
    hero: {
      line1: 'I have ideas.',
      line2: 'I build them until they work.',
      copy1:
        'I’m Elias. I study IT and build things in my spare time, usually because I have an idea and want to see if I can make it work.',
      copy2:
        'Some are useful. Some are experiments.',
      ctaProjects: 'See the projects',
      ctaContact: 'Get in touch',
      sticker: 'Still learning, building in public',
      stickerSmall: 'Informatiker EFZ learner · Visp, CH',
    },
    education: {
      title: 'My path right now',
      before:
        'I’m doing an apprenticeship as an Informatiker EFZ in platform development, and alongside it a Berufsmaturität in engineering, architecture and life sciences. The programmes are the ',
      efzName: 'Informatiker/in EFZ – EMVS',
      middle: ' and the ',
      bmName: 'Berufsmaturität TALS (Technik, Architektur, Life Sciences)',
      after:
        '. Both are in progress — I haven’t completed either of them yet.',
      status: 'Apprentice · in progress, not completed',
    },
    home: {
      featuredTitle: 'Featured projects',
      featuredSubtitle: 'Two projects that show how I work — idea, build, test, improve.',
      allProjects: 'Explore all projects',
      allProjectsNote: 'Four projects, each with notes on what I contributed.',
      beyondTitle: 'Beyond Code',
      beyondBody:
        'Calisthenics, scouts, and the habit of turning spare-time ideas into small working things. More about the person behind the projects.',
      beyondCta: 'More about me',
      beyondPhotoLabel: 'Photo placeholder',
      beyondPhotoBody: 'A personal photo will go here (4:3) once I add one.',
      beyondPhotoAlt: 'Personal photo (to be added)',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Three projects I built or am building, plus one open-source project I adapted.',
      openNewTab: '(opens in a new tab)',
      details: 'Project details',
      demoLabel: 'Live demo',
      repoLabel: 'Source code',
      upstreamLabel: 'Upstream project',
      noSource: 'No public source repository.',
      pfadi: {
        status: 'Live website',
        title: 'Pfadi Siders website',
        body: 'A replacement website for my scout group, with clearer navigation, age-group pages, a calendar and layouts that work on phones.',
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
        body: 'A study app I'm building around my own school workflow. It is still in progress.',
        note: 'Local-first today: study data lives in the browser. Account sign-in exists but is not cloud sync yet.',
      },
      ben: {
        status: 'Customized, not original',
        title: 'BEN.SUSTAIN',
        body: "I started from an existing open-source app and adapted it for my own use. The original project isn't mine; the ideas for how it should differ are.",
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
        'No public source to verify against — setup notes still need confirmation.',
      copy: 'Copy',
      copied: 'Copied!',
      commandsT: 'Commands',
      shots: 'Screenshots',
      shotPlaceholder: 'Screenshot placeholder',
      notFoundTitle: 'Project not found',
      notFoundBody: 'This project doesn’t exist. Here are the ones that do.',
      notFoundCta: 'See all projects',
      whyT: 'Why it exists',
      decisionsT: 'My ideas and decisions',
      featuresT: 'What it does',
      inheritedT: 'Inherited from upstream',
      mineT: 'My modifications and ideas',
      challengesT: 'Challenges and lessons',
      limitsT: 'Known limitations',
      sections: {
        pfadi: {
          tagline: 'A scout group’s front door, rebuilt from scratch.',
          why: [
            'Pfadi St. Christophorus Siders needed a website that shows what the group actually is: outdoor activities, clear age-group sections, a calendar people can find, and a way for newcomers to join. The old site no longer did that job, so I built a replacement.',
            'The site is live and in use: four sections for Wölfe und Bienli, Pfadis, Pios and Rover, plus Abteilung, Kalender, Bilder, Mitmachen and Kontakt — all reachable from one clear navigation.',
          ],
          decisions: [
            'Designed the visual direction myself: one expressive hero (“Gipfelpause”), one voice, one structure across every page.',
            'Gave every age group its own section so parents and kids land directly where they belong.',
            'Put the practical facts front and center: meeting place (Pfadilokal, Rue Saint-Georges 19, Sierre), Saturday hours, calendar, and contact.',
            'Implemented it with AI support, reviewing and correcting the output until the result matched the design.',
          ],
          features: [
            'Hero with headline, calls to action and links to the sections and Instagram.',
            'Stufen pages for all four age groups with an overview of what to expect.',
            'Calendar view for meetups, camps and events.',
            'Meeting-place block with public-transport and map links.',
            'Contact, error-reporting and legal pages (Impressum, Datenschutz), with a webmaster credit.',
          ],
          challenges: [
            'Scope discipline: a group website can grow forever — I kept it to the pages the group actually needs.',
            'Writing for two audiences at once: kids who want adventure, parents who want facts.',
            'Comparing each layout against the real content caught mismatches before they became bigger structure problems.',
          ],
          limits: [
            'No public source repository — only the live site can be reviewed.',
            'I have not measured usage or collected feedback; there are no metrics or testimonials to show.',
          ],
          stateBody:
            'Live and in use by the group. Content updates happen as the group needs them.',
          shots: [
            'Homepage hero “Gipfelpause” — desktop, 1600×900',
            'Stufen overview — mobile, 390×844',
          ],
        },
        cal: {
          tagline: 'A training app shaped by actual training.',
          why: [
            'I train calisthenics regularly, and I wanted an app that fits exactly how I train — my exercises, my structure, my feel. Since nothing off the shelf matched, I specified and built my own.',
            'The published demo is live under the name FORM — Calisthenics Training.',
          ],
          decisions: [
            'Started from my own workouts, not from a feature list: the app had to survive a real session.',
            'Defined the behavior and feel myself, then guided the implementation with AI assistance.',
            'Tested every version against my own training and fixed what fell short — the training log was the acceptance test.',
          ],
          features: [
            'Live demo verified: the app loads as FORM — Calisthenics Training.',
            'Beyond that I describe only what I know from building it: workout routines structured around my training, refined version by version.',
            'A detailed feature tour with screenshots will be added once I document the current interface.',
          ],
          challenges: [
            'The hardest part was deciding what not to build: a personal tool has to stay fast and simple.',
            'Testing the app during my own workouts revealed usability problems a checklist would have missed.',
          ],
          limits: [
            'The demo is a client-rendered app, so its interface could not be verified from the outside — details above come from my own build notes.',
            'No public source repository — only the live demo can be reviewed.',
          ],
          stateBody:
            'Live as a personal project. I keep using it in training and improving what annoys me.',
          shots: [
            'Workout session view — desktop, 1600×900',
            'Workout session view — mobile, 390×844',
          ],
        },
        emvs: {
          tagline: 'A local-first dashboard for surviving vocational school.',
          why: [
            'Vocational school plus Berufsmaturität means modules, objectives, resources, exams and deadlines everywhere. I wanted one dashboard that holds all of it — so I designed and built the EMVS Study Hub.',
            'It is local-first on purpose: your study data lives in the browser via localStorage, so the app works without an account or a server.',
          ],
          decisions: [
            'Chose local-first storage so the app is useful from the first second, with no signup friction.',
            'Structured it around real study workflows: today view, weak-spot tracking, capture, exams, weekly review, tools.',
            'Added a command palette (⌘K) and undo, because a tool you use daily must be fast and forgiving.',
            'Started a Supabase email/password foundation strictly for sign-in — deliberately not wired to study data yet.',
          ],
          features: [
            'Module tracking with learning objectives, resources, sessions and exams.',
            'Views for Heute, Schwachstellen, Erfassen, Prüfungen, Review, Werkzeuge and Einstellungen.',
            'Command palette (⌘K) and undo support.',
            'Weekly reviews to look back and plan ahead.',
            'Settings with Supabase email/password sign-in, session restore and sign-out.',
          ],
          challenges: [
            'Hardest lesson: authentication is not synchronization. Signing in changes nothing about the data — and saying so clearly in the README mattered more than the feature itself.',
            'Splitting the work into phases (local app first, auth foundation, sync later) kept an ambitious project shippable.',
            'Lesson: writing down what a phase explicitly does not do prevents the most dangerous misunderstandings.',
          ],
          limits: [
            'No cloud sync: signing in does not upload, download, overwrite or delete study data — the README states this explicitly.',
            'Data lives in one browser’s localStorage; switching devices or clearing site data loses it.',
            'Supabase setup requires the user’s own publishable key; never a service_role key in browser code.',
          ],
          stateBody:
            'In progress and usable locally. Auth foundation is done; cloud sync is a separate later phase.',
          shots: [
            'Dashboard “Heute” view — desktop, 1600×900',
            'Schwachstellen view — mobile, 390×844',
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
            'I wanted a fitness tracker shaped around one person training at their own pace — my pace. Instead of building a tracker from zero, I forked openGym, a self-hosted gym and body-weight tracker, and started reshaping it into BEN.SUSTAIN.',
            'The brand idea is mine: “BEN.SUSTAIN — One person. One pace. Keep going.” The engine underneath is open-source work by others, and I present it as exactly that.',
          ],
          decisions: [
            'Chose openGym as the base because it already solves the hard parts: routines, guided workouts, progression logic, offline use.',
            'Kept the fork public on GitHub so the derivation from upstream stays visible.',
            'Set the direction toward a calmer, personal single-user experience under the BEN.SUSTAIN name.',
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
            'Adaptation choices for my own use — the exact list of modifications is still being documented here.',
          ],
          challenges: [
            'Lesson: forking a large, mature codebase is humbling — reading and understanding comes before changing.',
            'Lesson: keeping the fork honest means naming what is inherited on every page that shows it.',
          ],
          limits: [
            'My specific code modifications are not yet documented on this page — that section is a placeholder until verified.',
            'There is no public live demo of my fork.',
          ],
          stateBody:
            'Forked and public. Direction set; modification details to be documented.',
          shots: [
            'BEN.SUSTAIN home view — desktop, 1600×900',
            'Guided workout view — mobile, 390×844',
          ],
          techStack: ['Upstream: React 19 + Vite frontend', 'Upstream: plain Node.js API', 'Docker Compose self-hosting', 'License: GNU AGPLv3'],
          techSetup: [
            'You need Docker with Compose.',
            'Clone the fork, copy .env.example to .env and adjust the hostname settings.',
            'Run “docker compose up -d” and open http://localhost:8080.',
            'First start downloads the exercise media (about 140 MB) once.',
            'Note: these are the upstream quick-start steps; fork-specific setup notes still need verification.',
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
      title: 'Skills, by stage',
      subtitle:
        'I train calisthenics, where you move up a progression only when you’ve earned it. Here is where each skill honestly sits for me today.',
      learning: 'Learning',
      learningMeaning: 'Getting the basics down.',
      exploring: 'Exploring',
      exploringMeaning: 'Trying it out and finding my way.',
      stronger: 'Workflow',
      strongerMeaning: 'How I plan, build and check things.',
      tapHint: 'Tap to reveal',
      caption:
        'No scores, no bars — just where each skill stands, and the workflow I rely on to build.',
      strengths: [
        'Describing the result I want and turning it into clear requirements.',
        'Testing features and reporting bugs.',
        'Reviewing proposed changes and judging whether they make sense.',
        'Breaking larger projects into manageable phases.',
        'Making small code changes.',
        'Setting up deployments and troubleshooting build failures.',
      ],
    },
    about: {
      title: 'Beyond Code',
      intro1:
        'I’m Elias. By day I’m an Informatiker EFZ apprentice in platform development, heading toward the Berufsmaturität TALS. The rest of the time I’m the person who’d rather build the thing than talk about building the thing.',
      intro2:
        'This page is the non-CV version: what I do when I’m not at the keyboard, and the ideas I carry back to it.',
      eduBody:
        'I’m doing an Informatiker EFZ apprenticeship in platform development alongside the Berufsmaturität TALS. Both are in progress. The official programmes are:',
      trainingTitle: 'Calisthenics: my other progression system',      trainingBody:
        'I train calisthenics regularly. It taught me to move up a progression only when I can do the current step properly. I use the same idea when building training features: I try them in a real workout and fix what gets in the way.',
      trainingGoals: 'Current focus: steady basics, honest form, showing up. Specific skills and goals get listed here once I write them down properly.',
      scoutsTitle: 'Scouts',
      scoutsBody:
        'I’m part of Pfadi St. Christophorus Siders — and when the group needed a new website, I built it. Scouting taught me the practical side of responsibility early: plan the afternoon, cook over the fire, bring everyone home in one piece.',
      tinkeringTitle: 'Spare-time tinkering',
      tinkeringBody:
        'Study hub, training apps, small experiments: my free time has a habit of turning into working software. I like tools that solve my own problems first — if they help someone else too, that’s a bonus.',
      valuesTitle: 'What I’m aiming at',
      values: [
        'Curiosity over comfort — trying the unfamiliar thing on purpose.',
        'Independent thinking — understanding before copying.',
        'Practical problem-solving — done and working beats perfect and planned.',
        'Honesty about my level — still learning, and saying so.',
      ],
      readingTitle: 'Reading and ideas',
      readingBody: 'A short list of books and ideas that influence me will go here.',
      photoLabel: 'Photo placeholder',
      photoBody: 'A personal photo goes here (4:3) once I provide one.',
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
        'Elias Blondiau — Portfolio. Curious? Good, that’s the whole point.',
        'Psst: type “sustain” anywhere on this site for a rest day.',
        'No trackers were used to detect your curiosity.',
      ],
      paletteLabel: 'Quick route finder',
      palettePlaceholder: 'Type a page name…',
      paletteHint: 'Lost? Start typing — I’ll point you somewhere real.',
      paletteNone: 'No match. Home is always a safe rep.',
      fourthTitle: 'Curiosity',
      fourthBody:
        'Already maxed. Unofficial fourth step — no certificate, just momentum.',
      fourthHint: 'It knows a secret: type “sustain” anywhere.',
      footerButton: 'Extra notes',
      footerNotes: [
        'Built in the open, still learning.',
        'No cookies, no trackers — just markup with ambitions.',
        'Built with React, Vite and stubbornness.',
      ],
      footerRestBefore: 'Psst: this portfolio takes',
      footerRestLink: 'rest days',
      footerRestAfter: '.',
      restEyebrow: 'Hidden page — you typed the magic word',
      restTitle: 'Rest day.',
      restIntro:
        'Even portfolios need recovery. No sets, no PRs, no cloud sync — just a light session:',
      restPlan: [
        '3 × 10 relaxed scrolls',
        '1 × slow read of the About page',
        '60-second plank while the build runs (optional)',
        '0 skipped leg days — there are no legs here',
      ],
      restBack: 'Back to training',
      restSession: 'Today’s session — check off as you go',
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
      home: 'Elias Blondiau — Portfolio',
      projects: 'Projekte — Elias Blondiau',
      about: 'Abseits vom Code — Elias Blondiau',
      notFound: 'Seite nicht gefunden — Elias Blondiau',
      projectSuffix:
        'ein Projekt von Elias Blondiau, Informatiker-EFZ-Lernendem',
      descriptions: {
        home: 'Elias Blondiau, Informatiker-EFZ-Lernender in Plattformentwicklung. Eigene Projekte, Skills und Kontakt.',
        projects:
          'Alle Projekte von Elias Blondiau: Pfadi-Siders-Website, Calisthenics-Trainings-App, EMVS Study Hub und BEN.SUSTAIN.',
        about:
          'Abseits vom Code: Calisthenics, Pfadi und Tüftelei — die Person hinter den Projekten von Elias Blondiau.',
        notFound: 'Seite nicht gefunden im Portfolio von Elias Blondiau.',
      },
    },
    media: {
      expected: 'Erwartete Datei:',
    },
    skip: 'Zum Inhalt springen',
    hero: {
      line1: 'Ich habe Ideen.',
      line2: 'Ich baue sie, bis sie laufen.',
      copy1:
        'Ich bin Elias. Ich lerne Informatik und baue in meiner Freizeit Dinge, meistens weil ich eine Idee habe und sehen will, ob ich sie zum Laufen bringe.',
      copy2:
        'Manches ist nützlich. Manches ist ein Experiment.',
      ctaProjects: 'Projekte ansehen',
      ctaContact: 'Kontakt aufnehmen',
      sticker: 'Noch am Lernen, baut öffentlich',
      stickerSmall: 'Informatiker EFZ in Ausbildung · Visp, CH',
    },
    education: {
      title: 'Mein Weg gerade',
      before:
        'Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und begleitend dazu eine Berufsmaturität in Technik, Architektur und Life Sciences. Die Programme sind der ',
      efzName: 'Informatiker/in EFZ – EMVS',
      middle: ' und die ',
      bmName: 'Berufsmaturität TALS (Technik, Architektur, Life Sciences)',
      after:
        '. Beides läuft noch — abgeschlossen habe ich noch keinen der beiden Abschlüsse.',
      status: 'In Ausbildung · laufend, nicht abgeschlossen',
    },
    home: {
      featuredTitle: 'Ausgewählte Projekte',
      featuredSubtitle:
        'Zwei Projekte, die zeigen, wie ich arbeite — Idee, Bau, Test, Verbesserung.',
      allProjects: 'Alle Projekte entdecken',
      allProjectsNote: 'Vier Projekte, jeweils mit Notizen zu meinem Beitrag.',
      beyondTitle: 'Abseits vom Code',
      beyondBody:
        'Calisthenics, Pfadi und die Gewohnheit, Ideen aus der Freizeit in kleine funktionierende Dinge zu verwandeln. Mehr über die Person hinter den Projekten.',
      beyondCta: 'Mehr über mich',
      beyondPhotoLabel: 'Foto-Platzhalter',
      beyondPhotoBody: 'Hier kommt ein persönliches Foto hin (4:3), sobald ich eines habe.',
      beyondPhotoAlt: 'Persönliches Foto (folgt)',
    },
    projects: {
      title: 'Projekte',
      subtitle:
        'Drei Projekte, die ich gebaut habe oder noch baue, plus ein angepasstes Open-Source-Projekt.',
      openNewTab: '(öffnet in einem neuen Tab)',
      details: 'Projektdetails',
      demoLabel: 'Live-Demo',
      repoLabel: 'Quellcode',
      upstreamLabel: 'Ursprungsprojekt',
      noSource: 'Kein öffentliches Quell-Repository.',
      pfadi: {
        status: 'Live-Website',
        title: 'Pfadi Siders Website',
        body: 'Eine neue Website als Ersatz für die bisherige Seite meiner Pfadi-Abteilung. Sie hat eine klarere Navigation, eigene Seiten für die Stufen, einen Kalender und Layouts fürs Handy.',
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
        body: 'Eine Lern-App, die ich rund um meinen eigenen Schulalltag entwickle. Sie ist noch in Arbeit.',
        note: 'Heute local-first: Die Lerndaten leben im Browser. Konto-Login existiert, ist aber noch keine Cloud-Synchronisierung.',
      },
      ben: {
        status: 'Angepasst, nicht original',
        title: 'BEN.SUSTAIN',
        body: 'Ausgangspunkt war eine bestehende Open-Source-App, die ich für meinen Gebrauch angepasst habe. Das Grundprojekt ist nicht meins; die Ideen, wie es anders sein soll, schon.',
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
        'Keine öffentliche Quelle zum Prüfen — Setup-Angaben noch unbestätigt.',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      commandsT: 'Befehle',
      shots: 'Screenshots',
      shotPlaceholder: 'Screenshot-Platzhalter',
      notFoundTitle: 'Projekt nicht gefunden',
      notFoundBody: 'Dieses Projekt gibt es nicht. Hier sind die, die es gibt.',
      notFoundCta: 'Alle Projekte ansehen',
      whyT: 'Warum es existiert',
      decisionsT: 'Meine Ideen und Entscheidungen',
      featuresT: 'Was es kann',
      inheritedT: 'Vom Ursprungsprojekt übernommen',
      mineT: 'Meine Anpassungen und Ideen',
      challengesT: 'Herausforderungen und Lektionen',
      limitsT: 'Bekannte Einschränkungen',
      sections: {
        pfadi: {
          tagline: 'Die Haustür einer Pfadi-Abteilung, neu gebaut.',
          why: [
            'Die Pfadi St. Christophorus Siders brauchte eine Website, die zeigt, was die Abteilung wirklich ist: Aktivitäten draussen, klare Stufen, ein auffindbarer Kalender und ein Weg für Neue zum Mitmachen. Die alte Seite hat das nicht mehr geleistet, also habe ich einen Ersatz gebaut.',
            'Die Seite ist live und im Einsatz: vier Stufen für Wölfe und Bienli, Pfadis, Pios und Rover, dazu Abteilung, Kalender, Bilder, Mitmachen und Kontakt — alles über eine klare Navigation erreichbar.',
          ],
          decisions: [
            'Visuelle Richtung selbst entworfen: ein ausdrucksstarker Hero („Gipfelpause“), eine Sprache, eine Struktur auf jeder Seite.',
            'Jede Stufe hat einen eigenen Bereich, damit Kinder und Eltern direkt dort landen, wo sie hingehören.',
            'Das Praktische steht vorne: Treffpunkt (Pfadilokal, Rue Saint-Georges 19, Sierre), Samstag-Zeiten, Kalender und Kontakt.',
            'Mit KI-Unterstützung umgesetzt und das Ergebnis geprüft und korrigiert, bis es zum Entwurf passte.',
          ],
          features: [
            'Hero mit Titel, Handlungsaufrufen und Links zu Stufen und Instagram.',
            'Stufen-Seiten für alle vier Altersgruppen mit Überblick zum Erwartbaren.',
            'Kalenderansicht für Anlässe, Lager und Termine.',
            'Treffpunkt-Block mit ÖV- und Karten-Links.',
            'Kontakt-, Fehler-melden- und Rechtsseiten (Impressum, Datenschutz) mit Webmaster-Angabe.',
          ],
          challenges: [
            'Umfangsdisziplin: Eine Gruppen-Website kann ewig wachsen — ich habe mich auf die Seiten beschränkt, die die Abteilung wirklich braucht.',
            'Für zwei Publika gleichzeitig schreiben: Kinder wollen Abenteuer, Eltern wollen Fakten.',
            'Layouts am echten Inhalt zu prüfen hat Unstimmigkeiten aufgedeckt, bevor daraus grössere Strukturprobleme wurden.',
          ],
          limits: [
            'Kein öffentliches Quell-Repository — nur die Live-Seite ist einsehbar.',
            'Keine Nutzungsmessung, kein gesammeltes Feedback; es gibt keine Kennzahlen oder Testimonials.',
          ],
          stateBody:
            'Live und bei der Abteilung im Einsatz. Inhalte werden aktualisiert, wie die Abteilung sie braucht.',
          shots: [
            'Homepage-Hero „Gipfelpause“ — Desktop, 1600×900',
            'Stufen-Übersicht — Mobil, 390×844',
          ],
        },
        cal: {
          tagline: 'Eine Trainings-App, geformt vom echten Training.',
          why: [
            'Ich trainiere regelmässig Calisthenics und wollte eine App, die genau zu meinem Training passt — meine Übungen, meine Struktur, meine Anmutung. Da nichts von der Stange passte, habe ich meine eigene spezifiziert und gebaut.',
            'Die veröffentlichte Demo ist live unter dem Namen FORM — Calisthenics Training.',
          ],
          decisions: [
            'Ausgangspunkt waren meine eigenen Workouts, keine Feature-Liste: Die App musste eine echte Einheit überstehen.',
            'Verhalten und Anmutung selbst festgelegt, dann die Umsetzung mit KI-Unterstützung gesteuert.',
            'Jede Version am eigenen Training getestet und Schwachstellen behoben — das Trainingslog war der Abnahmetest.',
          ],
          features: [
            'Live-Demo verifiziert: Die App lädt als FORM — Calisthenics Training.',
            'Darüber hinaus beschreibe ich nur, was ich vom Bauen weiss: Workout-Routinen rund um mein Training, Version für Version verfeinert.',
            'Eine ausführliche Feature-Tour mit Screenshots folgt, sobald ich die aktuelle Oberfläche dokumentiert habe.',
          ],
          challenges: [
            'Das Schwerste war zu entscheiden, was nicht gebaut wird: Ein persönliches Werkzeug muss schnell und einfach bleiben.',
            'Tests während meines eigenen Trainings haben Bedienprobleme gezeigt, die eine Checkliste übersehen hätte.',
          ],
          limits: [
            'Die Demo ist eine clientseitig gerenderte App, ihre Oberfläche war von aussen nicht prüfbar — Details oben stammen aus meinen Bau-Notizen.',
            'Kein öffentliches Quell-Repository — nur die Live-Demo ist einsehbar.',
          ],
          stateBody:
            'Live als eigenes Projekt. Ich nutze sie weiter im Training und verbessere, was mich stört.',
          shots: [
            'Workout-Ansicht — Desktop, 1600×900',
            'Workout-Ansicht — Mobil, 390×844',
          ],
        },
        emvs: {
          tagline: 'Ein local-first Dashboard fürs Überleben in der Berufsschule.',
          why: [
            'Berufslehre plus Berufsmaturität heisst Module, Ziele, Ressourcen, Prüfungen und Fristen überall. Ich wollte ein Dashboard, das alles hält — also habe ich den EMVS Study Hub entworfen und gebaut.',
            'Local-first mit Absicht: Die Lerndaten leben über localStorage im Browser, die App funktioniert also ohne Konto und ohne Server.',
          ],
          decisions: [
            'Local-first Speicher gewählt, damit die App ab der ersten Sekunde nützt, ohne Anmelde-Hürde.',
            'An echten Lernabläufen strukturiert: Heute-Ansicht, Schwachstellen, Erfassen, Prüfungen, Wochen-Review, Werkzeuge.',
            'Befehlspalette (⌘K) und Rückgängig eingebaut, weil ein täglich genutztes Werkzeug schnell und verzeihend sein muss.',
            'Eine Supabase-E-Mail/Passwort-Basis strikt nur fürs Anmelden begonnen — bewusst noch nicht mit den Lerndaten verdrahtet.',
          ],
          features: [
            'Modul-Tracking mit Lernzielen, Ressourcen, Sessions und Prüfungen.',
            'Ansichten für Heute, Schwachstellen, Erfassen, Prüfungen, Review, Werkzeuge und Einstellungen.',
            'Befehlspalette (⌘K) und Rückgängig-Unterstützung.',
            'Wochen-Reviews zum Zurückschauen und Planen.',
            'Einstellungen mit Supabase-E-Mail/Passwort-Login, Session-Wiederherstellung und Abmelden.',
          ],
          challenges: [
            'Härteste Lektion: Anmeldung ist nicht Synchronisierung. Ein Login ändert nichts an den Daten — und das klar ins README zu schreiben war wichtiger als das Feature selbst.',
            'Die Arbeit in Phasen zu teilen (erst lokale App, dann Auth-Basis, später Sync) hat ein ehrgeiziges Projekt auslieferbar gehalten.',
            'Lektion: Festzuhalten, was eine Phase ausdrücklich nicht tut, verhindert die gefährlichsten Missverständnisse.',
          ],
          limits: [
            'Keine Cloud-Synchronisierung: Anmelden lädt, speichert, überschreibt oder löscht keine Lerndaten — das README sagt das ausdrücklich.',
            'Daten leben im localStorage eines Browsers; Gerätewechsel oder Löschen der Website-Daten verliert sie.',
            'Das Supabase-Setup braucht den eigenen Publishable Key; niemals einen Service-Role-Key im Browser-Code.',
          ],
          stateBody:
            'In Arbeit und lokal nutzbar. Auth-Basis fertig; Cloud-Sync ist eine separate spätere Phase.',
          shots: [
            'Dashboard-Ansicht „Heute“ — Desktop, 1600×900',
            'Schwachstellen-Ansicht — Mobil, 390×844',
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
            'Ich wollte einen Fitness-Tracker, der um eine einzelne Person in ihrem eigenen Tempo geformt ist — meinem Tempo. Statt einen Tracker bei null zu bauen, habe ich openGym geforkt, einen selbst-hostbaren Gym- und Bodyweight-Tracker, und forme ihn zu BEN.SUSTAIN um.',
            'Die Markenidee ist meine: „BEN.SUSTAIN — One person. One pace. Keep going.“ Die Engine darunter ist Open-Source-Arbeit anderer, und genau so stelle ich sie dar.',
          ],
          decisions: [
            'openGym als Basis gewählt, weil es die schwierigen Teile schon löst: Routinen, geführte Workouts, Progressionslogik, Offline-Nutzung.',
            'Den Fork öffentlich auf GitHub gehalten, damit die Ableitung vom Upstream sichtbar bleibt.',
            'Richtung gesetzt: ein ruhigeres, persönliches Einzelpersonen-Erlebnis unter dem Namen BEN.SUSTAIN.',
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
            'Anpassungsentscheidungen für den eigenen Gebrauch — die genaue Änderungsliste wird hier noch dokumentiert.',
          ],
          challenges: [
            'Lektion: Einen grossen, reifen Codebase zu forken demütigt — Lesen und Verstehen kommt vor dem Ändern.',
            'Lektion: Den Fork ehrlich zu halten heisst, auf jeder Seite zu benennen, was übernommen ist.',
          ],
          limits: [
            'Meine konkreten Code-Änderungen sind auf dieser Seite noch nicht dokumentiert — der Abschnitt ist ein Platzhalter bis zur Prüfung.',
            'Es gibt keine öffentliche Live-Demo meines Forks.',
          ],
          stateBody:
            'Geforkt und öffentlich. Richtung gesetzt; Änderungsdetails werden noch dokumentiert.',
          shots: [
            'BEN.SUSTAIN-Startansicht — Desktop, 1600×900',
            'Geführte Workout-Ansicht — Mobil, 390×844',
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
      title: 'Skills, nach Stand',
      subtitle:
        'Ich trainiere Calisthenics: Man steigt erst auf, wenn man es sich verdient hat. Hier steht ehrlich, wo jeder Skill heute steht.',
      learning: 'Lernend',
      learningMeaning: 'Grundlagen aufbauen.',
      exploring: 'Erkundend',
      exploringMeaning: 'Ausprobieren und sich zurechtfinden.',
      stronger: 'Arbeitsweise',
      strongerMeaning: 'Wie ich plane, baue und prüfe.',
      tapHint: 'Antippen zum Entdecken',
      caption:
        'Keine Scores, keine Balken — nur der aktuelle Stand und der Arbeitsablauf, auf den ich mich verlasse.',
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
        'Ich bin Elias. Tagsüber bin ich Informatiker-EFZ-Lernender in Plattformentwicklung auf dem Weg zur Berufsmaturität TALS. In der restlichen Zeit bin ich lieber die Person, die das Ding baut, statt über das Bauen zu reden.',
      intro2:
        'Diese Seite ist die Nicht-CV-Version: was ich abseits der Tastatur tue und welche Ideen ich von dort mitbringe.',
      eduBody:
        'Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und parallel die Berufsmaturität TALS. Beides läuft noch. Die offiziellen Programme sind:',
      trainingTitle: 'Calisthenics: mein anderes Progressionssystem',
      trainingBody:
        'Ich trainiere regelmässig Calisthenics. Dabei habe ich gelernt, erst dann zum nächsten Schritt zu wechseln, wenn der aktuelle sitzt. Beim Bauen von Trainingsfunktionen mache ich es ähnlich: Ich probiere sie im echten Training aus und verbessere, was stört.',
      trainingGoals: 'Aktueller Fokus: solide Basics, ehrliche Form, Dranbleiben. Konkrete Skills und Ziele liste ich hier, sobald ich sie sauber aufgeschrieben habe.',
      scoutsTitle: 'Pfadi',
      scoutsBody:
        'Ich bin bei der Pfadi St. Christophorus Siders dabei — und als die Abteilung eine neue Website brauchte, habe ich sie gebaut. Die Pfadi hat mir die praktische Seite von Verantwortung früh beigebracht: Nachmittag planen, über dem Feuer kochen, alle heil nach Hause bringen.',
      tinkeringTitle: 'Tüftelei in der Freizeit',
      tinkeringBody:
        'Study Hub, Trainings-Apps, kleine Experimente: Meine Freizeit verwandelt sich gerne in funktionierende Software. Ich mag Werkzeuge, die erst einmal meine eigenen Probleme lösen — helfen sie anderen auch, umso besser.',
      valuesTitle: 'Worauf ich ziele',
      values: [
        'Neugier vor Komfort — das Unbekannte absichtlich ausprobieren.',
        'Eigenständiges Denken — verstehen, bevor man kopiert.',
        'Praktisches Problemlösen — fertig und funktionierend schlägt perfekt und geplant.',
        'Ehrlichkeit zum eigenen Stand — noch am Lernen, und das auch sagen.',
      ],
      readingTitle: 'Lesen und Ideen',
      readingBody: 'Hier kommt eine kurze Liste von Büchern und Ideen, die mich beeinflussen.',
      photoLabel: 'Foto-Platzhalter',
      photoBody: 'Hier kommt ein persönliches Foto hin (4:3), sobald ich eines liefere.',
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
        'Elias Blondiau — Portfolio. Neugierig? Gut, darum geht es hier.',
        'Psst: Tippe irgendwo auf dieser Seite „sustain“ für einen Ruhetag.',
        'Zur Erkennung deiner Neugier wurden keine Tracker verwendet.',
      ],
      paletteLabel: 'Schnelle Seitensuche',
      palettePlaceholder: 'Seitenname tippen…',
      paletteHint: 'Verloren? Einfach tippen — ich zeige dir etwas Echtes.',
      paletteNone: 'Nichts gefunden. Start ist immer eine sichere Wiederholung.',
      fourthTitle: 'Neugier',
      fourthBody:
        'Bereits maximiert. Inoffizielle vierte Stufe — kein Zertifikat, nur Schwung.',
      fourthHint: 'Sie kennt ein Geheimnis: Tippe irgendwo „sustain“.',
      footerButton: 'Extra-Notizen',
      footerNotes: [
        'Offen gebaut, noch am Lernen.',
        'Keine Cookies, keine Tracker — nur Markup mit Ambitionen.',
        'Mit React, Vite und Sturheit gebaut.',
      ],
      footerRestBefore: 'Psst: Dieses Portfolio macht',
      footerRestLink: 'Ruhetage',
      footerRestAfter: '.',
      restEyebrow: 'Versteckte Seite — du hast das Zauberwort getippt',
      restTitle: 'Ruhetag.',
      restIntro:
        'Auch Portfolios brauchen Erholung. Keine Sätze, keine PRs, kein Cloud-Sync — nur eine lockere Einheit:',
      restPlan: [
        '3 × 10 entspannte Scrolls',
        '1 × langsames Lesen der Über-mich-Seite',
        '60 Sekunden Plank, während der Build läuft (optional)',
        '0 ausgelassene Leg Days — hier gibt es keine Beine',
      ],
      restBack: 'Zurück zum Training',
      restSession: 'Heutige Einheit — abhaken nicht vergessen',
      restDone: 'Einheit geschafft. Erholung: 100 %.',
      notFoundAt: 'Keine Seite unter dieser Adresse:',
    },
  },
};
