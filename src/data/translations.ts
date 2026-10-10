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
      home: 'Elias Blondiau. Portfolio',
      projects: 'Projects. Elias Blondiau',
      about: 'Beyond Code. Elias Blondiau',
      notFound: 'Page not found. Elias Blondiau',
      projectSuffix:
        'a project by Elias Blondiau, Informatiker EFZ apprentice',
      descriptions: {
        home: 'Elias Blondiau, Informatiker EFZ apprentice in platform development. Personal projects, skills and contact.',
        projects:
          'All projects by Elias Blondiau: Pfadi Siders website, calisthenics training app, EMVS Study Hub and BEN.SUSTAIN.',
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
        'I’m doing an Informatiker EFZ apprenticeship in platform development alongside a Berufsmaturität in engineering, architecture and life sciences. The programmes are ',
      efzName: 'Informatiker/in EFZ – EMVS',
      middle: ' and the ',
      bmName: 'Berufsmaturität TALS (Technik, Architektur, Life Sciences)',
      after:
        '. Both are still in progress.',
      status: 'Apprenticeship in progress',
    },
    home: {
      featuredTitle: 'Featured projects',
      featuredSubtitle: 'Two projects I built, tested and improved.',
      allProjects: 'Explore all projects',
      allProjectsNote: 'Four projects, each with notes on what I contributed.',
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
        body: "A study app I’m building to keep my schoolwork in one place. It is still in progress.",
        note: 'Local-first today: study data lives in the browser. Account sign-in exists but is not cloud sync yet.',
      },
      ben: {
        status: 'Open-source adaptation',
        title: 'BEN.SUSTAIN',
        body: "I adapted an existing open-source fitness app toward a more personal, single-user setup. The original project isn't mine; the direction for this version is.",
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
      whyT: 'Why it exists',
      decisionsT: 'My ideas and decisions',
      featuresT: 'What it does',
      inheritedT: 'Inherited from upstream',
      mineT: 'My modifications and ideas',
      challengesT: 'Challenges and what I learned',
      limitsT: 'Known limitations',
      sections: {
        pfadi: {
          tagline: 'A scout group’s front door, rebuilt from scratch.',
          why: [
            'Pfadi St. Christophorus Siders needed a website that shows what the group actually is: outdoor activities, clear age-group sections, a calendar people can find, and a way for newcomers to join. The old site no longer did that job, so I built a replacement.',
            'The site is live and in use. It has sections for Wölfe und Bienli, Pfadis, Pios and Rover, plus Abteilung, Kalender, Bilder, Mitmachen and Kontakt.',
          ],
          decisions: [
            'Designed the visual direction myself: one expressive hero (“Gipfelpause”), one voice, one structure across every page.',
            'Gave every age group its own section so parents and kids land directly where they belong.',
            'Made the key details easy to find: meeting place (Pfadilokal, Rue Saint-Georges 19, Sierre), Saturday hours, calendar and contact.',
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
            'Keeping the scope small was harder than it sounds. I focused on the pages the group needs.',
            'Writing for kids and parents meant balancing the sense of adventure with practical details.',
            'Checking each layout against real content caught problems before they spread.',
          ],
          limits: [
            'There is no public source repository, so the live site is the only version available to review.',
            'I have not measured usage or collected feedback; there are no metrics or testimonials to show.',
          ],
          stateBody:
            'Live and in use by the group. Content updates happen as the group needs them.',
          shots: [
            'Homepage hero “Gipfelpause”. desktop, 1600×900',
            'Stufen overview. mobile, 390×844',
          ],
        },
        cal: {
          tagline: 'A training app shaped by actual training.',
          why: [
            'I train calisthenics regularly and wanted an app that fits how I train. I couldn’t find one that matched, so I built my own version.',
            'The live demo is called FORM: Calisthenics Training.',
          ],
          decisions: [
            'Started from my own workouts, not from a feature list: the app had to survive a real session.',
            'I chose how it should behave and look, then used AI assistance to help implement it.',
            'I tested each version during my own training and fixed what got in the way.',
          ],
          features: [
            'The demo opens as FORM: Calisthenics Training.',
            'The app is organized around my workout routines and gets refined as I use it.',
            'I have not documented every screen yet, so I have kept the feature list short.',
          ],
          challenges: [
            'The hardest part was deciding what not to build: a personal tool has to stay fast and simple.',
            'Testing the app during my own workouts revealed usability problems a checklist would have missed.',
          ],
          limits: [
            'I haven’t documented every screen yet, so this page sticks to details I can confirm from my own notes.',
            'There is no public source repository, so the live demo is the only version available to review.',
          ],
          stateBody:
            'Live as a personal project. I keep using it in training and improving what annoys me.',
          shots: [
            'Workout session view. desktop, 1600×900',
            'Workout session view. mobile, 390×844',
          ],
        },
        emvs: {
          tagline: 'A local-first dashboard for surviving vocational school.',
          why: [
            'Between vocational school and the Berufsmaturität, I was tracking modules, objectives, resources, exams and deadlines in different places. I built the EMVS Study Hub to keep them together.',
            'It is local-first on purpose: your study data lives in the browser via localStorage, so the app works without an account or a server.',
          ],
          decisions: [
            'Chose local-first storage so the app is useful from the first second, with no signup friction.',
            'Structured it around real study workflows: today view, weak-spot tracking, capture, exams, weekly review, tools.',
            'Added a command palette (⌘K) and undo, because a tool you use daily must be fast and forgiving.',
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
            'The tricky part was making clear that signing in does not sync study data. I made that limitation explicit in the README.',
            'Splitting the work into phases (local app first, auth foundation, sync later) kept an ambitious project shippable.',
            'Writing down what a phase does not do helps prevent misunderstandings.',
          ],
          limits: [
            'There is no cloud sync. Signing in does not upload, download, overwrite or delete study data. The README explains this.',
            'Data lives in one browser’s localStorage; switching devices or clearing site data loses it.',
            'Supabase setup requires the user’s own publishable key; never a service_role key in browser code.',
          ],
          stateBody:
            'Still in progress, but usable locally. Sign-in is set up; cloud sync is not.',
          shots: [
            'Dashboard “Heute” view. desktop, 1600×900',
            'Schwachstellen view. mobile, 390×844',
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
            'I wanted a fitness tracker for one person to use at their own pace. Rather than start from zero, I forked openGym, an open-source gym and bodyweight tracker, and began adapting it into BEN.SUSTAIN.',
            'I came up with the BEN.SUSTAIN name and its direction: “One person. One pace. Keep going.” The app is based on someone else’s open-source project.',
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
            'I have started adapting it for my own use. I still need to list the exact changes here.',
          ],
          challenges: [
            'Forking a mature codebase means understanding it before changing it.',
            'I need to keep the original features separate from the changes I make.',
          ],
          limits: [
            'I have not documented my code changes here yet.',
            'There is no public live demo of my fork.',
          ],
          stateBody:
            'Forked and public. Direction set; modification details to be documented.',
          shots: [
            'BEN.SUSTAIN home view. desktop, 1600×900',
            'Guided workout view. mobile, 390×844',
          ],
          techStack: ['Upstream: React 19 + Vite frontend', 'Upstream: plain Node.js API', 'Docker Compose self-hosting', 'License: GNU AGPLv3'],
          techSetup: [
            'You need Docker with Compose.',
            'Clone the fork, copy .env.example to .env and adjust the hostname settings.',
            'Run “docker compose up -d” and open http://localhost:8080.',
            'First start downloads the exercise media (about 140 MB) once.',
            'These are the original project's setup steps. I still need to check whether my fork needs anything different.',
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
        'I train calisthenics and move to harder skills when I can do the current step well. These cards show where I am with each skill.',
      learning: 'Learning',
      learningMeaning: 'Getting the basics down.',
      exploring: 'Exploring',
      exploringMeaning: 'Trying it out and finding my way.',
      stronger: 'Workflow',
      strongerMeaning: 'How I plan, build and check things.',
      tapHint: 'Tap to reveal',
      caption:
        'No scores or progress bars. Just my current level and how I work.',
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
        'I’m Elias. I’m doing an Informatiker EFZ apprenticeship in platform development and a Berufsmaturität TALS. Outside school, I usually prefer making something over talking about it.',
      intro2:
        'This page is the non-CV version: what I do when I’m not at the keyboard, and the ideas I carry back to it.',
      eduBody:
        'I’m doing an Informatiker EFZ apprenticeship in platform development alongside the Berufsmaturität TALS. Both are in progress. The official programmes are:',
      trainingTitle: 'Calisthenics: my other progression system',
      trainingBody:
        'I train calisthenics regularly. It taught me to move up a progression only when I can do the current step properly. I use the same idea when building training features: I try them in a real workout and fix what gets in the way.',
      trainingGoals: 'Right now I’m working on the basics and trying to train consistently. I’ll add specific goals when I’ve settled on them.',
      scoutsTitle: 'Scouts',
      scoutsBody:
        'I’m part of Pfadi St. Christophorus Siders, and I built a new website when the group needed one. Scouting also means planning activities, cooking over a fire and making sure everyone gets home safely.',
      tinkeringTitle: 'Spare-time tinkering',
      tinkeringBody:
        'I spend my free time on study tools, training apps and other small projects. I usually start by solving a problem of my own. If it helps someone else too, even better.',
      valuesTitle: 'What I’m aiming at',
      values: [
        'Curiosity over comfort. Try things I don’t know yet.',
        'Think for myself. Understand before copying.',
        'Solve practical problems. Working beats perfect plans.',
        'Be honest about what I know and what I’m still learning.',
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
        'Elias Blondiau’s portfolio. Have a look around.',
        'Type “sustain” anywhere on the site to find a small extra page.',
        'No trackers here. This page is just for fun.',
      ],
      paletteLabel: 'Quick route finder',
      palettePlaceholder: 'Type a page name…',
      paletteHint: 'Type a page name to find it.',
      paletteNone: 'No match. Home is always a safe rep.',
      fourthTitle: 'Curiosity',
      fourthBody:
        'Already maxed out. No certificate, just practice.',
      fourthHint: 'It knows a secret: type “sustain” anywhere.',
      footerButton: 'Extra notes',
      footerNotes: [
        'Built in the open, still learning.',
        'No cookies or trackers. Just a website.',
        'Built with React, Vite and stubbornness.',
      ],
      footerRestBefore: 'Psst: this portfolio takes',
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
        '0 skipped leg days. there are no legs here',
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
      home: 'Elias Blondiau. Portfolio',
      projects: 'Projekte. Elias Blondiau',
      about: 'Abseits vom Code. Elias Blondiau',
      notFound: 'Seite nicht gefunden. Elias Blondiau',
      projectSuffix:
        'ein Projekt von Elias Blondiau, Informatiker-EFZ-Lernendem',
      descriptions: {
        home: 'Elias Blondiau, Informatiker-EFZ-Lernender in Plattformentwicklung. Eigene Projekte, Skills und Kontakt.',
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
        '. Beide Abschlüsse sind noch in Arbeit.',
      status: 'In Ausbildung · laufend, nicht abgeschlossen',
    },
    home: {
      featuredTitle: 'Ausgewählte Projekte',
      featuredSubtitle:
        'Zwei Projekte, die ich gebaut, getestet und verbessert habe.',
      allProjects: 'Alle Projekte entdecken',
      allProjectsNote: 'Vier Projekte, jeweils mit Notizen zu meinem Beitrag.',
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
        status: 'Open-Source-Anpassung',
        title: 'BEN.SUSTAIN',
        body: 'Ich habe eine bestehende Open-Source-Fitness-App auf eine persönlichere Nutzung für eine einzelne Person ausgerichtet. Das Original stammt nicht von mir; die Richtung dieser Version schon.',
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
      whyT: 'Warum es existiert',
      decisionsT: 'Meine Ideen und Entscheidungen',
      featuresT: 'Was es kann',
      inheritedT: 'Vom Ursprungsprojekt übernommen',
      mineT: 'Meine Anpassungen und Ideen',
      challengesT: 'Herausforderungen und was ich gelernt habe',
      limitsT: 'Bekannte Einschränkungen',
      sections: {
        pfadi: {
          tagline: 'Die Haustür einer Pfadi-Abteilung, neu gebaut.',
          why: [
            'Die Pfadi St. Christophorus Siders brauchte eine Website, die zeigt, was die Abteilung wirklich ist: Aktivitäten draussen, klare Stufen, ein auffindbarer Kalender und ein Weg für Neue zum Mitmachen. Die alte Seite hat das nicht mehr geleistet, also habe ich einen Ersatz gebaut.',
            'Die Seite ist live und wird genutzt. Sie enthält Bereiche für Wölfe und Bienli, Pfadis, Pios und Rover sowie Abteilung, Kalender, Bilder, Mitmachen und Kontakt.',
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
            'Den Umfang klein zu halten war schwieriger, als es klingt. Ich habe mich auf die Seiten konzentriert, die die Abteilung braucht.',
            'Für Kinder und Eltern zu schreiben bedeutete, Abenteuer und praktische Informationen auszubalancieren.',
            'Layouts am echten Inhalt zu prüfen hat Probleme aufgedeckt, bevor sie sich weiterziehen konnten.',
          ],
          limits: [
            'Es gibt kein öffentliches Quell-Repository. Deshalb lässt sich nur die Live-Seite ansehen.',
            'Keine Nutzungsmessung, kein gesammeltes Feedback; es gibt keine Kennzahlen oder Testimonials.',
          ],
          stateBody:
            'Live und bei der Abteilung im Einsatz. Inhalte werden aktualisiert, wie die Abteilung sie braucht.',
          shots: [
            'Homepage-Hero „Gipfelpause“. Desktop, 1600×900',
            'Stufen-Übersicht. Mobil, 390×844',
          ],
        },
        cal: {
          tagline: 'Eine Trainings-App, geformt vom echten Training.',
          why: [
            'Ich trainiere regelmässig Calisthenics und wollte eine App, die zu meinem Training passt. Ich fand keine passende, also habe ich meine eigene Version gebaut.',
            'Die Live-Demo heisst FORM: Calisthenics Training.',
          ],
          decisions: [
            'Ausgangspunkt waren meine eigenen Workouts, keine Feature-Liste: Die App musste eine echte Einheit überstehen.',
            'Verhalten und Aussehen selbst festgelegt und KI bei der Umsetzung als Werkzeug genutzt.',
            'Jede Version im eigenen Training getestet und verbessert, was dabei störte.',
          ],
          features: [
            'Die Demo öffnet als FORM: Calisthenics Training.',
            'Die App ist um meine Trainingsroutinen aufgebaut und wird beim Nutzen weiter verbessert.',
            'Ich muss die aktuelle Oberfläche noch dokumentieren, bevor ich eine genauere Feature-Liste ergänzen kann.',
          ],
          challenges: [
            'Das Schwerste war zu entscheiden, was nicht gebaut wird: Ein persönliches Werkzeug muss schnell und einfach bleiben.',
            'Tests während meines eigenen Trainings haben Bedienprobleme gezeigt, die eine Checkliste übersehen hätte.',
          ],
          limits: [
            'Ich habe noch nicht jeden Bildschirm dokumentiert und beschränke mich deshalb auf Details, die ich aus meinen Notizen bestätigen kann.',
            'Kein öffentliches Quell-Repository. nur die Live-Demo ist einsehbar.',
          ],
          stateBody:
            'Live als eigenes Projekt. Ich nutze sie weiter im Training und verbessere, was mich stört.',
          shots: [
            'Workout-Ansicht. Desktop, 1600×900',
            'Workout-Ansicht. Mobil, 390×844',
          ],
        },
        emvs: {
          tagline: 'Ein local-first Dashboard fürs Überleben in der Berufsschule.',
          why: [
            'Mit Berufslehre und Berufsmaturität hatte ich Module, Lernziele, Materialien, Prüfungen und Fristen an verschiedenen Orten. Ich habe den EMVS Study Hub gebaut, um alles zusammenzuhalten.',
            'Local-first mit Absicht: Die Lerndaten leben über localStorage im Browser, die App funktioniert also ohne Konto und ohne Server.',
          ],
          decisions: [
            'Local-first Speicher gewählt, damit die App ab der ersten Sekunde nützt, ohne Anmelde-Hürde.',
            'An echten Lernabläufen strukturiert: Heute-Ansicht, Schwachstellen, Erfassen, Prüfungen, Wochen-Review, Werkzeuge.',
            'Befehlspalette (⌘K) und Rückgängig eingebaut, weil ein täglich genutztes Werkzeug schnell und verzeihend sein muss.',
            'Supabase-Anmeldung mit E-Mail und Passwort hinzugefügt. Die Lerndaten sind noch nicht damit verbunden.',
          ],
          features: [
            'Modul-Tracking mit Lernzielen, Ressourcen, Sessions und Prüfungen.',
            'Ansichten für Heute, Schwachstellen, Erfassen, Prüfungen, Review, Werkzeuge und Einstellungen.',
            'Befehlspalette (⌘K) und Rückgängig-Unterstützung.',
            'Wochen-Reviews zum Zurückschauen und Planen.',
            'Einstellungen mit Supabase-E-Mail/Passwort-Login, Session-Wiederherstellung und Abmelden.',
          ],
          challenges: [
            'Wichtig war klarzustellen, dass ein Login die Lerndaten nicht synchronisiert. Diese Einschränkung steht ausdrücklich im README.',
            'Die Arbeit in Phasen zu teilen (erst lokale App, dann Auth-Basis, später Sync) hat ein ehrgeiziges Projekt auslieferbar gehalten.',
            'Festzuhalten, was eine Phase nicht tut, hilft Missverständnisse zu vermeiden.',
          ],
          limits: [
            'Es gibt keine Cloud-Synchronisierung. Die Anmeldung lädt, speichert, überschreibt oder löscht keine Lerndaten. Das steht auch im README.',
            'Daten leben im localStorage eines Browsers; Gerätewechsel oder Löschen der Website-Daten verliert sie.',
            'Das Supabase-Setup braucht den eigenen Publishable Key; niemals einen Service-Role-Key im Browser-Code.',
          ],
          stateBody:
            'In Arbeit und lokal nutzbar. Auth-Basis fertig; Cloud-Sync ist eine separate spätere Phase.',
          shots: [
            'Dashboard-Ansicht „Heute“. Desktop, 1600×900',
            'Schwachstellen-Ansicht. Mobil, 390×844',
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
            'Ich passe das Projekt für meinen eigenen Gebrauch an. Die genauen Änderungen muss ich hier noch auflisten.',
          ],
          challenges: [
            'Bei einer ausgereiften Codebasis kommt erst das Verstehen, dann das Ändern.',
            'Damit der Fork transparent bleibt, trenne ich übernommene Funktionen klar von meinen Änderungen.',
          ],
          limits: [
            'Meine konkreten Code-Änderungen sind hier noch nicht dokumentiert.',
            'Es gibt keine öffentliche Live-Demo meines Forks.',
          ],
          stateBody:
            'Geforkt und öffentlich. Richtung gesetzt; Änderungsdetails werden noch dokumentiert.',
          shots: [
            'BEN.SUSTAIN-Startansicht. Desktop, 1600×900',
            'Geführte Workout-Ansicht. Mobil, 390×844',
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
        'Ich trainiere Calisthenics und gehe erst zur nächsten Übung über, wenn die aktuelle gut klappt. Die Karten zeigen meinen aktuellen Stand.',
      learning: 'Lernend',
      learningMeaning: 'Grundlagen aufbauen.',
      exploring: 'Erkundend',
      exploringMeaning: 'Ausprobieren und sich zurechtfinden.',
      stronger: 'Arbeitsweise',
      strongerMeaning: 'Wie ich plane, baue und prüfe.',
      tapHint: 'Antippen zum Entdecken',
      caption:
        'Keine Scores und keine Balken. Nur mein aktueller Stand und wie ich arbeite.',
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
        'Ich mache eine Lehre als Informatiker EFZ in Plattformentwicklung und parallel die Berufsmaturität TALS. Beides ist noch in Arbeit. Die offiziellen Programme sind:',
      trainingTitle: 'Calisthenics: mein anderes Progressionssystem',
      trainingBody:
        'Ich trainiere regelmässig Calisthenics. Dabei habe ich gelernt, erst dann zum nächsten Schritt zu wechseln, wenn der aktuelle sitzt. Beim Bauen von Trainingsfunktionen mache ich es ähnlich: Ich probiere sie im echten Training aus und verbessere, was stört.',
      trainingGoals: 'Im Moment arbeite ich an den Grundlagen und versuche, regelmässig zu trainieren. Konkrete Ziele ergänze ich, wenn ich sie festgelegt habe.',
      scoutsTitle: 'Pfadi',
      scoutsBody:
        'Ich bin bei der Pfadi St. Christophorus Siders und habe eine neue Website gebaut, als die Abteilung eine brauchte. Zur Pfadi gehört auch, Aktivitäten zu planen, über dem Feuer zu kochen und dafür zu sorgen, dass alle sicher nach Hause kommen.',
      tinkeringTitle: 'Tüftelei in der Freizeit',
      tinkeringBody:
        'In meiner Freizeit arbeite ich an Lernwerkzeugen, Trainings-Apps und kleinen Projekten. Meistens löse ich damit zuerst ein eigenes Problem. Wenn es auch anderen hilft, umso besser.',
      valuesTitle: 'Worauf ich ziele',
      values: [
        'Neugierig bleiben. Auch mal etwas Neues ausprobieren.',
        'Selbst denken. Erst verstehen, dann kopieren.',
        'Praktische Probleme lösen. Funktionierend ist besser als perfekt geplant.',
        'Ehrlich sagen, was ich kann und was ich noch lerne.',
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
        'Portfolio von Elias Blondiau. Schau dich um.',
        'Psst: Tippe irgendwo auf dieser Seite „sustain“ für einen Ruhetag.',
        'Keine Tracker. Diese Seite ist einfach ein kleines Extra.',
      ],
      paletteLabel: 'Schnelle Seitensuche',
      palettePlaceholder: 'Seitenname tippen…',
      paletteHint: 'Gib einen Seitennamen ein, um ihn zu finden.',
      paletteNone: 'Nichts gefunden. Start ist immer eine sichere Wiederholung.',
      fourthTitle: 'Neugier',
      fourthBody:
        'Schon auf Maximum. Kein Zertifikat, nur Übung.',
      fourthHint: 'Sie kennt ein Geheimnis: Tippe irgendwo „sustain“.',
      footerButton: 'Extra-Notizen',
      footerNotes: [
        'Offen gebaut, noch am Lernen.',
        'Keine Cookies und keine Tracker. Einfach eine Website.',
        'Mit React, Vite und Sturheit gebaut.',
      ],
      footerRestBefore: 'Psst: Dieses Portfolio macht',
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
        '0 ausgelassene Leg Days. hier gibt es keine Beine',
      ],
      restBack: 'Zurück zum Training',
      restSession: 'Heutige Einheit. Einfach abhaken.',
      restDone: 'Einheit geschafft. Erholung: 100 %.',
      notFoundAt: 'Keine Seite unter dieser Adresse:',
    },
  },
};
