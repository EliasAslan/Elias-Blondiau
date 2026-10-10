export const translations = {
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      changeLanguage: 'Switch language',
    },
    hero: {
      line1: 'I have the ideas.',
      line2: 'I learn by building them.',
      copy1:
        "I'm an Informatiker EFZ learner exploring software development through real projects. I come up with ideas, build them with modern tooling, test the result and fix what breaks.",
      copy2: 'Notes under each project say how it was built.',
      ctaProjects: 'See the projects',
      ctaContact: 'Get in touch',
      sticker: 'Still learning, building in public',
      stickerSmall: 'Informatiker EFZ learner',
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Three main projects and one modification, with a short note on how each was built.',
      myPart: 'My part',
      withAI: 'Support',
      openNewTab: '(opens in a new tab)',
      items: [
        {
          status: 'Live website',
          statusKind: 'live' as const,
          title: 'Pfadi Siders website',
          body: 'A new website for my scout group, replacing its previous one. It has a more consistent look, clearer organization and navigation, layouts that work on phones, and a more complete experience overall.',
          mine: 'Designed the visual direction.',
          ai: "AI helped implement the design. I didn't write every part myself.",
          cta: 'Open the live site',
          url: 'https://pfadi-siders-updated.vercel.app/',
        },
        {
          status: 'Live app, personal project',
          statusKind: 'live' as const,
          title: 'Calisthenics workout app',
          body: "A workout app for my own training. It's a product I wanted for myself, so I decided how it should work and feel.",
          mineList: [
            'Came up with the idea and planned the app.',
            'Defined the features, behavior and user experience.',
            'Evaluated what came back.',
          ],
          ai: 'I guided the AI-assisted implementation.',
          cta: 'Open the app',
          url: 'https://refreshing-apex-form-flow.base44.app/',
        },
        {
          status: 'In progress',
          statusKind: 'wip' as const,
          title: 'EMVS Study Hub',
          body: "A study app I came up with and keep working on. It's ongoing, so it isn't finished.",
          mine: 'The idea and the feature planning.',
          ai: 'I work on the app together with AI assistance.',
          note: "Account-based cloud sync is still under development. There's no public demo yet.",
        },
        {
          status: 'Customized, not original',
          statusKind: 'mod' as const,
          title: 'BEN.SUSTAIN',
          body: "I started from an existing open-source app and changed it to suit my own use. The underlying project isn't mine; the customizations are.",
          mine: 'My own ideas for how it should differ.',
          ai: 'AI assistance to make those changes.',
        },
      ],
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
      caption:
        'No scores, no bars — just where each skill stands right now.',
    },
    outside: {
      title: 'Outside the screen',
      body: 'Calisthenics (pull-ups, handstands, levers), piano, and the Valais outdoors around Visp — the balance that keeps me building.',
    },
    contact: {
      title: 'Have an idea or a question?',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      line: 'Designed and built by Elias in Visp.',
    },
  },

  de: {
    nav: {
      projects: 'Projekte',
      skills: 'Skills',
      contact: 'Kontakt',
      changeLanguage: 'Sprache wechseln',
    },
    hero: {
      line1: 'Ich habe die Ideen.',
      line2: 'Ich lerne, indem ich sie baue.',
      copy1:
        'Ich bin Informatiker EFZ in Ausbildung und erkunde Softwareentwicklung anhand echter Projekte. Ich habe Ideen, setze sie mit modernen Werkzeugen um, teste das Ergebnis und behebe, was nicht funktioniert.',
      copy2: 'Unter jedem Projekt steht kurz, wie es entstanden ist.',
      ctaProjects: 'Projekte ansehen',
      ctaContact: 'Kontakt aufnehmen',
      sticker: 'Noch am Lernen, baut öffentlich',
      stickerSmall: 'Informatiker EFZ in Ausbildung',
    },
    projects: {
      title: 'Projekte',
      subtitle:
        'Drei Hauptprojekte und eine Anpassung, mit einer kurzen Notiz zur Entstehung.',
      myPart: 'Mein Teil',
      withAI: 'Support',
      openNewTab: '(öffnet in einem neuen Tab)',
      items: [
        {
          status: 'Live-Website',
          statusKind: 'live' as const,
          title: 'Pfadi Siders Website',
          body: 'Eine neue Website für meine Pfadi-Abteilung als Ersatz für die bisherige. Einheitlicherer Auftritt, klarere Struktur und Navigation, Layouts fürs Handy und insgesamt ein vollständigeres Erlebnis.',
          mine: 'Die visuelle Richtung entworfen.',
          ai: 'Die KI half bei der Umsetzung des Designs. Ich habe nicht alles selbst geschrieben.',
          cta: 'Live-Website öffnen',
          url: 'https://pfadi-siders-updated.vercel.app/',
        },
        {
          status: 'Live-App, eigenes Projekt',
          statusKind: 'live' as const,
          title: 'Calisthenics-Trainings-App',
          body: 'Eine Trainings-App für mein eigenes Training. Ein Produkt, das ich selbst wollte — also habe ich entschieden, wie es funktionieren und sich anfühlen soll.',
          mineList: [
            'Idee gehabt und die App geplant.',
            'Features, Verhalten und Nutzererlebnis definiert.',
            'Zurückgekommenes geprüft und bewertet.',
          ],
          ai: 'Ich habe die KI-gestützte Umsetzung gesteuert.',
          cta: 'App öffnen',
          url: 'https://refreshing-apex-form-flow.base44.app/',
        },
        {
          status: 'In Arbeit',
          statusKind: 'wip' as const,
          title: 'EMVS Study Hub',
          body: 'Eine Lern-App, die ich mir ausgedacht habe und an der ich weiterarbeite. Sie läuft noch, also ist sie nicht fertig.',
          mine: 'Die Idee und die Feature-Planung.',
          ai: 'Ich arbeite mit KI-Unterstützung an der App.',
          note: 'Die kontobasierte Cloud-Synchronisierung ist noch in Entwicklung. Es gibt noch keine öffentliche Demo.',
        },
        {
          status: 'Angepasst, nicht original',
          statusKind: 'mod' as const,
          title: 'BEN.SUSTAIN',
          body: 'Ich bin von einer bestehenden Open-Source-App ausgegangen und habe sie für meinen eigenen Gebrauch angepasst. Das Grundprojekt ist nicht meins; die Anpassungen schon.',
          mine: 'Eigene Ideen, wie sie anders sein soll.',
          ai: 'KI-Unterstützung, um diese Änderungen umzusetzen.',
        },
      ],
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
      caption:
        'Keine Scores, keine Balken — nur der aktuelle Stand.',
    },
    outside: {
      title: 'Abseits vom Bildschirm',
      body: 'Calisthenics (Klimmzüge, Handstand, Levers), Klavier und die Walliser Bergwelt rund um Visp — der Ausgleich, der mich am Bauen hält.',
    },
    contact: {
      title: 'Idee oder Frage?',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      line: 'Von Elias in Visp entworfen und gebaut.',
    },
  },
};
