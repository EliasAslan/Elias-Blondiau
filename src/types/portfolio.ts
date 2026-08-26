export type Language = 'en' | 'de';

export type SkillLevel = 'learning' | 'familiar' | 'exploring';

export type ProjectStatus = 'in_progress' | 'completed' | 'prototype' | 'experiment';

export interface Project {
  id: string;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  longDescription?: {
    en: string;
    de: string;
  };
  technologies: string[];
  status: ProjectStatus;
  statusLabel?: {
    en: string;
    de: string;
  };
  category: 'web' | 'game' | 'tools' | 'python';
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  date?: string;
  highlights?: {
    en: string[];
    de: string[];
  };
  isPlaceholder?: boolean;
}

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: 'languages' | 'frameworks_tools' | 'engines_gamedev' | 'workflow';
  note?: {
    en: string;
    de: string;
  };
}

export interface LearningTopic {
  id: string;
  title: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  currentFocus: {
    en: string;
    de: string;
  };
  iconName: string;
  tag: string;
}

export interface CalisthenicsSkill {
  name: string;
  currentProgression: {
    en: string;
    de: string;
  };
  target: {
    en: string;
    de: string;
  };
  status: 'actively_training' | 'mastering_form' | 'foundation';
}

export interface CurrentlyItem {
  id: string;
  iconName: string;
  label: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
}

export interface PortfolioData {
  personal: {
    name: string;
    preferredName: string;
    role: {
      en: string;
      de: string;
    };
    workplace: string;
    workplaceDetail: {
      en: string;
      de: string;
    };
    location: string;
    heroHeadline: {
      en: string;
      de: string;
    };
    heroSubheadline: {
      en: string;
      de: string;
    };
    bioParagraphs: {
      en: string[];
      de: string[];
    };
  };
  currently: CurrentlyItem[];
  projects: Project[];
  skills: SkillItem[];
  learning: LearningTopic[];
  calisthenics: CalisthenicsSkill[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    locationNote: {
      en: string;
      de: string;
    };
  };
}
