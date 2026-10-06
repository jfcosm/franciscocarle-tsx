import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project, Job, Testimonial, LanguageCode, Translations } from '../types';
import { PROFILE, PROJECTS, JOB_IDS, SKILLS, TRANSLATIONS } from '../constants';
import { 
  fetchSiteDataFromFirestore, 
  saveSiteDataToFirestore, 
  subscribeToFirestoreSiteData, 
  initFirebase 
} from '../services/firebase';

export interface SectionConfig {
  id: string;
  name: string;
  visible: boolean;
  order: number;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  synthesis: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  appleMusic: string;
  spotify?: string;
  image: string;
  googleAnalyticsId: string;
}

export interface MusicGearData {
  software: string[];
  hardware: Array<{ name: string; icon: string }>;
}

export interface SiteDataState {
  profile: ProfileData;
  sections: SectionConfig[];
  projects: (Project & { visible?: boolean; iconName?: string })[];
  jobIds: string[];
  skills: {
    agile: string[];
    dev: string[];
    soft: string[];
  };
  musicGear: MusicGearData;
  translations: Translations;
}

const DEFAULT_SECTIONS: SectionConfig[] = [
  { id: 'hero', name: 'Hero / Portada', visible: true, order: 1 },
  { id: 'about', name: 'Filosofía / Perfil', visible: true, order: 2 },
  { id: 'projects', name: 'Proyectos / Portafolio', visible: true, order: 3 },
  { id: 'music', name: 'Música / Producción', visible: true, order: 4 },
  { id: 'resume', name: 'Experiencia / CV', visible: true, order: 5 },
  { id: 'testimonials', name: 'Testimonios / Recomendaciones', visible: true, order: 6 },
];

const DEFAULT_MUSIC_GEAR: MusicGearData = {
  software: ['Logic Pro X (Expert)', 'Arturia V Collection', 'Analog Lab', 'Ableton Live'],
  hardware: [
    { name: 'Electric Guitars', icon: 'Guitar' },
    { name: 'MIDI Controllers', icon: 'Piano' },
    { name: 'Shure / Rode Mics', icon: 'Mic2' },
  ],
};

const STORAGE_KEY = 'fc_portfolio_custom_data_v1';

export const getInitialData = (): SiteDataState => {
  const defaultProjects = PROJECTS.map((p) => ({
    ...p,
    visible: true,
    iconName: p.id === 'cyberstage' ? 'Terminal' : p.id === 'armonix' ? 'Music' : p.id === 'palabra' ? 'BookOpen' : p.id === 'ensayemos' ? 'Mic2' : p.id === 'emaus' ? 'Users' : 'Code',
  }));

  const baseState: SiteDataState = {
    profile: {
      ...PROFILE,
      spotify: 'https://open.spotify.com/artist/franciscocarle',
    },
    sections: DEFAULT_SECTIONS,
    projects: defaultProjects,
    jobIds: [...JOB_IDS],
    skills: {
      agile: [...SKILLS.agile],
      dev: [...SKILLS.dev],
      soft: [...SKILLS.soft],
    },
    musicGear: DEFAULT_MUSIC_GEAR,
    translations: JSON.parse(JSON.stringify(TRANSLATIONS)),
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...baseState,
        ...parsed,
        profile: { ...baseState.profile, ...(parsed.profile || {}) },
        sections: parsed.sections || baseState.sections,
        projects: parsed.projects || baseState.projects,
        jobIds: parsed.jobIds || baseState.jobIds,
        skills: parsed.skills || baseState.skills,
        musicGear: parsed.musicGear || baseState.musicGear,
        translations: { ...baseState.translations, ...(parsed.translations || {}) },
      };
    }
  } catch (err) {
    console.error('Error loading site data from localStorage:', err);
  }

  return baseState;
};

interface SiteDataContextType {
  data: SiteDataState;
  updateProfile: (profile: Partial<ProfileData>) => void;
  updateSections: (sections: SectionConfig[]) => void;
  toggleSectionVisibility: (sectionId: string) => void;
  updateProjects: (projects: (Project & { visible?: boolean; iconName?: string })[]) => void;
  addProject: (project: Project & { visible?: boolean; iconName?: string }, lang?: LanguageCode, description?: string) => void;
  updateProject: (id: string, updated: Partial<Project & { visible?: boolean; iconName?: string }>, lang?: LanguageCode, description?: string) => void;
  deleteProject: (id: string) => void;
  updateSkills: (category: 'agile' | 'dev' | 'soft', list: string[]) => void;
  updateMusicGear: (gear: Partial<MusicGearData>) => void;
  updateTranslations: (lang: LanguageCode, section: keyof Translations[string], values: any) => void;
  updateJob: (lang: LanguageCode, jobId: string, jobData: Job) => void;
  addJob: (jobId: string, initialJobs: { [lang in LanguageCode]?: Job }) => void;
  deleteJob: (jobId: string) => void;
  updateTestimonials: (lang: LanguageCode, testimonials: Testimonial[]) => void;
  addTestimonial: (lang: LanguageCode, testimonial: Testimonial) => void;
  deleteTestimonial: (lang: LanguageCode, index: number) => void;
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;
  saveData: (customState?: SiteDataState) => void;
  syncToCloudDatabase: () => Promise<boolean>;
  isCloudConnected: boolean;
  lastCloudSync: Date | null;
  lastSaved: Date | null;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const SiteDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteDataState>(getInitialData);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isCloudConnected, setIsCloudConnected] = useState<boolean>(false);
  const [lastCloudSync, setLastCloudSync] = useState<Date | null>(null);

  // Sync with Firestore on mount and listen to changes
  useEffect(() => {
    const { db } = initFirebase();
    if (db) {
      setIsCloudConnected(true);
      // Fetch initial data from Firestore
      fetchSiteDataFromFirestore().then((cloudData) => {
        if (cloudData) {
          setData(cloudData);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData));
          setLastCloudSync(new Date());
        }
      });

      // Subscribe for real-time updates across multiple devices/sessions
      const unsubscribe = subscribeToFirestoreSiteData((updatedCloudData) => {
        if (updatedCloudData) {
          setData(updatedCloudData);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCloudData));
          setLastCloudSync(new Date());
        }
      });

      return () => unsubscribe();
    } else {
      setIsCloudConnected(false);
    }
  }, []);

  const persistState = (nextState: SiteDataState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
      setLastSaved(new Date());
      // Asynchronously sync to Cloud Firestore database if available
      saveSiteDataToFirestore(nextState).then((success) => {
        if (success) {
          setIsCloudConnected(true);
          setLastCloudSync(new Date());
        }
      });
    } catch (err) {
      console.error('Error saving site data:', err);
    }
  };

  const syncToCloudDatabase = async (): Promise<boolean> => {
    const success = await saveSiteDataToFirestore(data);
    if (success) {
      setIsCloudConnected(true);
      setLastCloudSync(new Date());
    }
    return success;
  };

  const updateProfile = (profileUpdate: Partial<ProfileData>) => {
    setData((prev) => {
      const next = {
        ...prev,
        profile: {
          ...prev.profile,
          ...profileUpdate,
        },
      };
      persistState(next);
      return next;
    });
  };

  const updateSections = (sections: SectionConfig[]) => {
    setData((prev) => {
      const next = { ...prev, sections };
      persistState(next);
      return next;
    });
  };

  const toggleSectionVisibility = (sectionId: string) => {
    setData((prev) => {
      const updated = prev.sections.map((s) => (s.id === sectionId ? { ...s, visible: !s.visible } : s));
      const next = { ...prev, sections: updated };
      persistState(next);
      return next;
    });
  };

  const updateProjects = (projects: (Project & { visible?: boolean; iconName?: string })[]) => {
    setData((prev) => {
      const next = { ...prev, projects };
      persistState(next);
      return next;
    });
  };

  const addProject = (project: Project & { visible?: boolean; iconName?: string }, lang?: LanguageCode, description?: string) => {
    setData((prev) => {
      const updatedProjects = [project, ...prev.projects];
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      const targetLang = lang || 'es';

      if (!newTranslations[targetLang]) {
        newTranslations[targetLang] = { projects: { descriptions: {} } };
      }
      if (!newTranslations[targetLang].projects) {
        newTranslations[targetLang].projects = { descriptions: {} };
      }
      if (!newTranslations[targetLang].projects.descriptions) {
        newTranslations[targetLang].projects.descriptions = {};
      }
      newTranslations[targetLang].projects.descriptions[project.id] = description || project.description || '';

      Object.keys(newTranslations).forEach((l) => {
        const code = l as LanguageCode;
        if (newTranslations[code]?.projects?.descriptions) {
          if (!newTranslations[code].projects.descriptions[project.id]) {
            newTranslations[code].projects.descriptions[project.id] = description || project.description || '';
          }
        }
      });

      const next = { ...prev, projects: updatedProjects, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const updateProject = (id: string, updatedFields: Partial<Project & { visible?: boolean; iconName?: string }>, lang?: LanguageCode, description?: string) => {
    setData((prev) => {
      const updatedProjects = prev.projects.map((p) => (p.id === id ? { ...p, ...updatedFields } : p));
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));

      if (lang && description !== undefined) {
        if (!newTranslations[lang]) newTranslations[lang] = { projects: { descriptions: {} } };
        if (!newTranslations[lang].projects) newTranslations[lang].projects = { descriptions: {} };
        if (!newTranslations[lang].projects.descriptions) newTranslations[lang].projects.descriptions = {};
        newTranslations[lang].projects.descriptions[id] = description;
      }

      const next = { ...prev, projects: updatedProjects, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const deleteProject = (id: string) => {
    setData((prev) => {
      const updatedProjects = prev.projects.filter((p) => p.id !== id);
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      Object.keys(newTranslations).forEach((l) => {
        const lang = l as LanguageCode;
        if (newTranslations[lang]?.projects?.descriptions) {
          delete newTranslations[lang].projects.descriptions[id];
        }
      });
      const next = { ...prev, projects: updatedProjects, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const updateSkills = (category: 'agile' | 'dev' | 'soft', list: string[]) => {
    setData((prev) => {
      const next = {
        ...prev,
        skills: {
          ...prev.skills,
          [category]: list,
        },
      };
      persistState(next);
      return next;
    });
  };

  const updateMusicGear = (gear: Partial<MusicGearData>) => {
    setData((prev) => {
      const next = {
        ...prev,
        musicGear: {
          ...prev.musicGear,
          ...gear,
        },
      };
      persistState(next);
      return next;
    });
  };

  const updateTranslations = (lang: LanguageCode, section: keyof Translations[string], values: any) => {
    setData((prev) => {
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      if (!newTranslations[lang]) {
        newTranslations[lang] = JSON.parse(JSON.stringify(newTranslations['es'] || {}));
      }
      newTranslations[lang] = {
        ...newTranslations[lang],
        [section]: {
          ...(newTranslations[lang][section] as object),
          ...values,
        },
      };
      const next = { ...prev, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const updateJob = (lang: LanguageCode, jobId: string, jobData: Job) => {
    setData((prev) => {
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      if (!newTranslations[lang]) {
        newTranslations[lang] = JSON.parse(JSON.stringify(newTranslations['es'] || {}));
      }
      if (!newTranslations[lang].jobs) {
        newTranslations[lang].jobs = {};
      }
      newTranslations[lang].jobs[jobId] = jobData;
      const next = { ...prev, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const addJob = (jobId: string, initialJobs: { [lang in LanguageCode]?: Job }) => {
    setData((prev) => {
      const newJobIds = prev.jobIds.includes(jobId) ? prev.jobIds : [jobId, ...prev.jobIds];
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));

      Object.keys(newTranslations).forEach((l) => {
        const lang = l as LanguageCode;
        const jobForLang = initialJobs[lang] || initialJobs['es'] || {
          company: 'Nueva Empresa',
          role: 'Nuevo Cargo',
          period: '2025 - Presente',
          location: 'Remoto',
          description: ['Descripción de logros y responsabilidades'],
          skills: ['Agile', 'Tech'],
        };
        if (!newTranslations[lang].jobs) newTranslations[lang].jobs = {};
        newTranslations[lang].jobs[jobId] = jobForLang;
      });

      const next = { ...prev, jobIds: newJobIds, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const deleteJob = (jobId: string) => {
    setData((prev) => {
      const newJobIds = prev.jobIds.filter((id) => id !== jobId);
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      Object.keys(newTranslations).forEach((l) => {
        const lang = l as LanguageCode;
        if (newTranslations[lang]?.jobs) {
          delete newTranslations[lang].jobs[jobId];
        }
      });
      const next = { ...prev, jobIds: newJobIds, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const updateTestimonials = (lang: LanguageCode, testimonials: Testimonial[]) => {
    setData((prev) => {
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      if (!newTranslations[lang]) {
        newTranslations[lang] = JSON.parse(JSON.stringify(newTranslations['es'] || {}));
      }
      newTranslations[lang].testimonials = testimonials;
      const next = { ...prev, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const addTestimonial = (lang: LanguageCode, testimonial: Testimonial) => {
    setData((prev) => {
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      if (!newTranslations[lang]) {
        newTranslations[lang] = JSON.parse(JSON.stringify(newTranslations['es'] || {}));
      }
      const current = newTranslations[lang].testimonials || [];
      newTranslations[lang].testimonials = [testimonial, ...current];
      const next = { ...prev, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const deleteTestimonial = (lang: LanguageCode, index: number) => {
    setData((prev) => {
      const newTranslations = JSON.parse(JSON.stringify(prev.translations));
      if (!newTranslations[lang]) {
        newTranslations[lang] = JSON.parse(JSON.stringify(newTranslations['es'] || {}));
      }
      const current = newTranslations[lang].testimonials || [];
      newTranslations[lang].testimonials = current.filter((_: any, i: number) => i !== index);
      const next = { ...prev, translations: newTranslations };
      persistState(next);
      return next;
    });
  };

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    const defaultState = getInitialData();
    setData(defaultState);
    persistState(defaultState);
    setLastSaved(new Date());
  };

  const exportDataJSON = (): string => {
    return JSON.stringify(data, null, 2);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        setData(parsed);
        persistState(parsed);
        return true;
      }
    } catch (err) {
      console.error('Failed to import JSON data:', err);
    }
    return false;
  };

  const saveData = (customState?: SiteDataState) => {
    if (customState) {
      setData(customState);
      persistState(customState);
    } else {
      persistState(data);
    }
  };

  return (
    <SiteDataContext.Provider
      value={{
        data,
        updateProfile,
        updateSections,
        toggleSectionVisibility,
        updateProjects,
        addProject,
        updateProject,
        deleteProject,
        updateSkills,
        updateMusicGear,
        updateTranslations,
        updateJob,
        addJob,
        deleteJob,
        updateTestimonials,
        addTestimonial,
        deleteTestimonial,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
        saveData,
        syncToCloudDatabase,
        isCloudConnected,
        lastCloudSync,
        lastSaved,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
