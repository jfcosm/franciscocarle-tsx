// Version 1.6
import { Project, NavItem, Translations } from './types';
import { 
  Code, 
  Music, 
  Users, 
  BookOpen, 
  Mic2
} from 'lucide-react';

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '#hero' },
  { key: 'philosophy', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'music', href: '#music' },
  { key: 'experience', href: '#resume' },
];

// Profile Data
export const PROFILE = {
  name: "Francisco Carle",
  role: "Senior Scrum Master (7+ Años Exp) | Agile Coach | Full Stack Dev | Músico", 
  tagline: "Tecnología + Música al mismo nivel",
  synthesis: "Construyo tecnología y música con la misma filosofía: claridad, emoción y propósito.",
  email: "francisco.carle@gmail.com",
  phone: "+56 9 3078 1181",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/franciscocarle/",
  appleMusic: "https://music.apple.com/cl/artist/francisco-carle/1662050530",
  image: "/perfil.jpg", 
};

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: "armonix",
    title: "Armonix.app",
    description: "Herramienta educativa musical interactiva con visualizador de acordes, Groovebox y secuenciador. Una de las apps musicales más completas desarrolladas localmente.",
    tags: ["React 18", "TailwindCSS", "Audio API", "Education"],
    link: "https://www.armonix.app",
    category: "hybrid",
    icon: <Music className="w-6 h-6 text-pink-400" />
  },
  {
    id: "palabra",
    title: "La Palabra Diaria",
    description: "Plataforma litúrgica con lecturas diarias y reflexiones generadas por IA. Arquitectura moderna y estable.",
    tags: ["React 18", "Firebase", "AI Integration", "PWA"],
    link: "https://www.lapalabradiaria.com",
    category: "tech",
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />
  },
  {
    id: "ensayemos",
    title: "Ensayemos",
    description: "Gestión para bandas: votación de ensayos, setlists interactivos y repositorio de acordes. Resuelve problemas reales de logística musical.",
    tags: ["Firebase", "Real-time DB", "React", "Management"],
    link: "#",
    category: "hybrid",
    icon: <Mic2 className="w-6 h-6 text-purple-400" />
  },
  {
    id: "emaus",
    title: "Emaús",
    description: "Sistema integral de gestión parroquial: sacramentos, finanzas, mensajería estilo WhatsApp y red social interna.",
    tags: ["Complex System", "SaaS", "Finance", "Social"],
    link: "#",
    category: "tech",
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    id: "melodialab",
    title: "MelodIA La♭",
    description: "Mi estudio de desarrollo y portafolio experimental. Diseño moderno y estética cuidada.",
    tags: ["Portfolio", "Design", "UX/UI"],
    link: "https://www.melodialab.net",
    category: "tech",
    icon: <Code className="w-6 h-6 text-green-400" />
  }
];

export const JOB_IDS = ['thomson', 'onikom', 'soho', 'cencosud'];

export const SKILLS = {
  agile: ["Scrum Master Cert.", "Kanban", "Agile Coaching", "Design Thinking", "Metrics & OKRs", "Team Leadership"],
  dev: ["React 18", "TypeScript", "TailwindCSS", "Python", "Django", "Firebase", "SQL Server"],
  creative: ["Logic Pro", "Music Production", "Composition", "UI/UX Design", "Midjourney", "Adobe Suite"]
};

// Translations
export const TRANSLATIONS: Translations = {
  es: {
    nav: { home: 'Inicio', philosophy: 'Filosofía', projects: 'Proyectos', music: 'Música', experience: 'Experiencia', contact_btn: 'Contáctame' },
    hero: { 
      role: 'Senior Scrum Master (7+ Años) | Agile Coach | Full Stack', 
      tagline_1: 'Tecnología', tagline_2: '+ Música', tagline_3: 'al mismo nivel.',
      synthesis: 'Construyo tecnología y música con la misma filosofía: claridad, emoción y propósito.', 
      cta_portfolio: 'Ver Portafolio', cta_linkedin: 'LinkedIn', years_exp: 'Años Exp. Ágil', albums: 'Álbumes', teams: 'Equipos Liderados', available: 'Disponible para nuevos proyectos' 
    },
    about: {
      main_text: 'No vivo estas dos áreas como mundos separados: se potencian entre sí. Pienso como desarrollador, lidero como agilista y creo como músico.',
      agile_title: 'Liderazgo Ágil (7+ Años)', agile_desc: 'Facilitación experta, métricas, coaching de equipos y transformación digital. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'Especializado en apps modernas, responsivas y escalables con React 18, Tailwind y Python.',
      creative_title: 'Creatividad & Música', creative_desc: 'Composición de atmósferas sonoras y diseño de experiencias digitales.'
    },
    projects: { 
      subtitle: 'Desarrollo de Aplicaciones Modernas', stack_label: 'Stack Principal:',
      descriptions: {
        armonix: "Herramienta educativa musical interactiva con visualizador de acordes, Groovebox y secuenciador. Una de las apps musicales más completas desarrolladas localmente.",
        palabra: "Plataforma litúrgica con lecturas diarias y reflexiones generadas por IA. Arquitectura moderna y estable.",
        ensayemos: "Gestión para bandas: votación de ensayos, setlists interactivos y repositorio de acordes. Resuelve problemas reales de logística musical.",
        emaus: "Sistema integral de gestión parroquial: sacramentos, finanzas, mensajería estilo WhatsApp y red social interna.",
        melodialab: "Mi estudio de desarrollo y portafolio experimental. Diseño moderno y estética cuidada."
      }
    },
    jobs: {
      thomson: {
        company: "Thomson Reuters", role: "Desarrollador Python Full Stack", period: "Marzo 2025 – Presente", location: "Santiago, Chile / Remoto",
        description: ["Arquitectura modular para automatización y rastreo de documentos regulatorios.", "Desarrollo de robots de scraping en Python integrados con SQL Server.", "Trabajo ágil con CI/CD y revisiones iterativas."],
        skills: ["Python", "SQLAlchemy", "BeautifulSoup", "Git", "Scrum"]
      },
      onikom: {
        company: "Onikom Latam", role: "Scrum Master Senior", period: "Abril 2024 – Diciembre 2024", location: "Mexico / Remoto",
        description: ["Liderazgo de 6 equipos ágiles distribuidos desarrollando agentes IA y SaaS.", "Reducción de spill-overs en un 25% y mejora de entrega a tiempo en 30%.", "Estandarización de métricas ágiles y mentoría a Product Owners."],
        skills: ["Agile Coaching", "Metrics", "Team Leadership", "AI Agents"]
      },
      soho: {
        company: "SOHO (Gasco)", role: "Agile Coach", period: "Abril 2022 – Diciembre 2023", location: "Santiago, Chile",
        description: ["Transformación Ágil capacitando líderes en Scrum y Kanban.", "Facilitación de talleres de Design Thinking incrementando la innovación en 25%.", "Gestión visual y reducción de cuellos de botella."],
        skills: ["Kanban", "Design Thinking", "Training", "Change Management"]
      },
      cencosud: {
        company: "Cencosud Scotiabank", role: "Scrum Master / Business Partner", period: "Marzo 2018 – Marzo 2021", location: "Santiago, Chile",
        description: ["Gestión de proyectos tecnológicos en Riesgo y Finanzas.", "Incremento de finalización de sprints del 70% al 92%.", "Promoción de cultura ágil en áreas tradicionales."],
        skills: ["Finance Tech", "Agile Adoption", "Team Building"]
      }
    },
    music: {
      profile_label: 'Perfil Musical',
      main_desc: 'Mi música se mueve entre lo atmosférico, electrónico, rock melódico y cinematográfico. Inspirado por Pink Floyd, Steven Wilson, Muse y Radiohead.',
      discography_title: 'Discografía', discography_desc: '2 Álbumes completos y 4 Singles publicados en plataformas globales (Apple Music, Spotify). Producidos, grabados y mezclados íntegramente por mí.',
      production_title: 'Producción', production_desc: 'Trabajo con Logic Pro X, Arturia V Collection y sintetizadores analógicos virtuales. Música original para documentales, jingles y spots de TV.',
      listen_btn: 'Escuchar en Apple Music', studio_title: 'Estudio Virtual'
    },
    titles: { philosophy: 'Filosofía Híbrida', projects: 'Vibe Coding', music: 'Sonido & Atmósfera', experience: 'Experiencia Profesional', contact: 'Hablemos' },
    footer: { title: 'Hablemos', subtitle: 'Ya sea para potenciar tu equipo ágil, desarrollar una plataforma compleja o crear la música de tu próximo proyecto.', rights: 'Todos los derechos reservados.', made_by: 'Hecho con', tech_by: 'en React & Tailwind por', copy_email: 'Copiar Email', copied: '¡Copiado!' }
  },
  en: {
    nav: { home: 'Home', philosophy: 'Philosophy', projects: 'Projects', music: 'Music', experience: 'Experience', contact_btn: 'Contact Me' },
    hero: { 
      role: 'Senior Scrum Master (7+ Years) | Agile Coach | Full Stack', 
      tagline_1: 'Technology', tagline_2: '+ Music', tagline_3: 'at the same level.',
      synthesis: 'I build technology and music with the same philosophy: clarity, emotion, and purpose.', 
      cta_portfolio: 'View Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Years Agile Exp', albums: 'Albums', teams: 'Teams Led', available: 'Available for new projects' 
    },
    about: {
      main_text: 'I do not live these two areas as separate worlds: they empower each other. I think like a developer, lead like an agilist, and create like a musician.',
      agile_title: 'Agile Leadership (7+ Years)', agile_desc: 'Expert facilitation, metrics, team coaching, and digital transformation. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'Specialized in modern, responsive, and scalable apps with React 18, Tailwind, and Python.',
      creative_title: 'Creativity & Music', creative_desc: 'Composition of sound atmospheres and digital experience design.'
    },
    projects: { 
      subtitle: 'Modern Application Development', stack_label: 'Main Stack:',
      descriptions: {
        armonix: "Interactive musical educational tool with chord visualizer, Groovebox, and sequencer. One of the most complete locally developed music apps.",
        palabra: "Liturgical platform with daily readings and AI-generated reflections. Modern and stable architecture.",
        ensayemos: "Band management: rehearsal voting, interactive setlists, and chord repository. Solves real musical logistics problems.",
        emaus: "Comprehensive parish management system: sacraments, finances, WhatsApp-style messaging, and internal social network.",
        melodialab: "My development studio and experimental portfolio. Modern design and careful aesthetics."
      }
    },
    jobs: {
      thomson: {
        company: "Thomson Reuters", role: "Full Stack Python Developer", period: "March 2025 – Present", location: "Santiago, Chile / Remote",
        description: ["Modular architecture for automation and tracking of regulatory documents.", "Development of Python scraping robots integrated with SQL Server.", "Agile work with CI/CD and iterative reviews."],
        skills: ["Python", "SQLAlchemy", "BeautifulSoup", "Git", "Scrum"]
      },
      onikom: {
        company: "Onikom Latam", role: "Senior Scrum Master", period: "April 2024 – December 2024", location: "Mexico / Remote",
        description: ["Leadership of 6 distributed agile teams developing AI agents and SaaS.", "Reduced spill-overs by 25% and improved on-time delivery by 30%.", "Standardization of agile metrics and mentorship for Product Owners."],
        skills: ["Agile Coaching", "Metrics", "Team Leadership", "AI Agents"]
      },
      soho: {
        company: "SOHO (Gasco)", role: "Agile Coach", period: "April 2022 – December 2023", location: "Santiago, Chile",
        description: ["Agile transformation training leaders in Scrum and Kanban.", "Facilitated Design Thinking workshops increasing innovation by 25%.", "Visual management and bottleneck reduction."],
        skills: ["Kanban", "Design Thinking", "Training", "Change Management"]
      },
      cencosud: {
        company: "Cencosud Scotiabank", role: "Scrum Master / Business Partner", period: "March 2018 – March 2021", location: "Santiago, Chile",
        description: ["Management of tech projects in Risk and Finance.", "Increased sprint completion from 70% to 92%.", "Promoted agile culture in traditional areas."],
        skills: ["Finance Tech", "Agile Adoption", "Team Building"]
      }
    },
    music: {
      profile_label: 'Musical Profile',
      main_desc: 'My music moves between atmospheric, electronic, melodic rock, and cinematic. Inspired by Pink Floyd, Steven Wilson, Muse, and Radiohead.',
      discography_title: 'Discography', discography_desc: '2 Full Albums and 4 Singles published on global platforms (Apple Music, Spotify). Produced, recorded, and mixed entirely by me.',
      production_title: 'Production', production_desc: 'Work with Logic Pro X, Arturia V Collection, and virtual analog synthesizers. Original music for documentaries, jingles, and TV spots.',
      listen_btn: 'Listen on Apple Music', studio_title: 'Virtual Studio'
    },
    titles: { philosophy: 'Hybrid Philosophy', projects: 'Vibe Coding', music: 'Sound & Atmosphere', experience: 'Professional Experience', contact: 'Let\'s Talk' },
    footer: { title: 'Let\'s Talk', subtitle: 'Whether to boost your agile team, develop a complex platform, or create music for your next project.', rights: 'All rights reserved.', made_by: 'Made with', tech_by: 'in React & Tailwind by', copy_email: 'Copy Email', copied: 'Copied!' }
  },
  fr: {
    nav: { home: 'Accueil', philosophy: 'Philosophie', projects: 'Projets', music: 'Musique', experience: 'Expérience', contact_btn: 'Contactez-moi' },
    hero: { 
      role: 'Senior Scrum Master (7+ Ans) | Agile Coach | Full Stack', 
      tagline_1: 'Technologie', tagline_2: '+ Musique', tagline_3: 'au même niveau.',
      synthesis: 'Je construis la technologie et la musique avec la même philosophie : clarté, émotion et but.', 
      cta_portfolio: 'Voir Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Ans Exp Agile', albums: 'Albums', teams: 'Équipes Dirigées', available: 'Disponible pour nouveaux projets' 
    },
    about: {
      main_text: 'Je ne vis pas ces domaines séparément : ils se renforcent mutuellement. Je pense comme un développeur, je dirige comme un agiliste et je crée comme un musicien.',
      agile_title: 'Leadership Agile (7+ Ans)', agile_desc: 'Facilitation experte, métriques, coaching d\'équipe. Certified Scrum Master.',
      dev_title: 'Dév Full Stack', dev_desc: 'Spécialisé dans les apps modernes avec React 18, Tailwind et Python.',
      creative_title: 'Créativité & Musique', creative_desc: 'Composition d\'atmosphères sonores et design d\'expériences.'
    },
    projects: { 
      subtitle: 'Développement d\'Applications Modernes', stack_label: 'Stack Principal :',
      descriptions: {
        armonix: "Outil éducatif musical interactif avec visualiseur d'accords. Une des apps musicales locales les plus complètes.",
        palabra: "Plateforme liturgique avec lectures quotidiennes et réflexions générées par IA.",
        ensayemos: "Gestion de groupes : vote de répétitions, setlists interactives et répertoire d'accords.",
        emaus: "Système de gestion paroissiale intégral : sacrements, finances, messagerie et réseau social interne.",
        melodialab: "Mon studio de développement et portfolio expérimental. Design moderne et esthétique soignée."
      }
    },
    jobs: {
      thomson: {
        company: "Thomson Reuters", role: "Développeur Python Full Stack", period: "Mars 2025 – Présent", location: "Santiago, Chili / Télétravail",
        description: ["Architecture modulaire pour l'automatisation de documents réglementaires.", "Robots de scraping Python intégrés avec SQL Server.", "Travail agile CI/CD."],
        skills: ["Python", "SQLAlchemy", "Git", "Scrum"]
      },
      onikom: {
        company: "Onikom Latam", role: "Scrum Master Senior", period: "Avril 2024 – Décembre 2024", location: "Mexique / Télétravail",
        description: ["Leadership de 6 équipes agiles distribuées (IA/SaaS).", "Réduction des débordements de 25% et amélioration des délais.", "Standardisation des métriques."],
        skills: ["Agile Coaching", "Metrics", "Team Leadership"]
      },
      soho: {
        company: "SOHO (Gasco)", role: "Agile Coach", period: "Avril 2022 – Décembre 2023", location: "Santiago, Chili",
        description: ["Transformation Agile et formation Scrum/Kanban.", "Ateliers Design Thinking (+25% innovation).", "Gestion visuelle."],
        skills: ["Kanban", "Design Thinking", "Change Management"]
      },
      cencosud: {
        company: "Cencosud Scotiabank", role: "Scrum Master / Partenaire Affaires", period: "Mars 2018 – Mars 2021", location: "Santiago, Chili",
        description: ["Gestion de projets technologiques Risque/Finance.", "Augmentation de la complétion des sprints de 70% à 92%.", "Promotion de la culture agile."],
        skills: ["Finance Tech", "Agile Adoption", "Team Building"]
      }
    },
    music: {
      profile_label: 'Profil Musical', main_desc: 'Ma musique oscille entre l\'atmosphérique, l\'électronique et le rock mélodique.',
      discography_title: 'Discographie', discography_desc: '2 Albums et 4 Singles publiés. Produits et mixés par moi-même.',
      production_title: 'Production', production_desc: 'Musique originale pour documentaires et TV.',
      listen_btn: 'Écouter sur Apple Music', studio_title: 'Studio Virtuel'
    },
    titles: { philosophy: 'Philosophie Hybride', projects: 'Vibe Coding', music: 'Son & Atmosphère', experience: 'Expérience Professionnelle', contact: 'Parlons' },
    footer: { title: 'Parlons', subtitle: 'Pour booster votre équipe agile ou développer votre plateforme.', rights: 'Tous droits réservés.', made_by: 'Fait avec', tech_by: 'en React & Tailwind par', copy_email: 'Copier Email', copied: 'Copié !' }
  },
  pt: {
    nav: { home: 'Início', philosophy: 'Filosofia', projects: 'Projetos', music: 'Música', experience: 'Experiência', contact_btn: 'Contato' },
    hero: { 
      role: 'Senior Scrum Master (7+ Anos) | Agile Coach | Full Stack', 
      tagline_1: 'Tecnologia', tagline_2: '+ Música', tagline_3: 'no mesmo nível.',
      synthesis: 'Construo tecnologia e música com a mesma filosofia: clareza, emoção e propósito.', 
      cta_portfolio: 'Ver Portfólio', cta_linkedin: 'LinkedIn', years_exp: 'Anos Exp Ágil', albums: 'Álbuns', teams: 'Equipes Lideradas', available: 'Disponível para projetos' 
    },
    about: {
      main_text: 'Não vivo essas áreas como mundos separados: elas se potenciam. Penso como desenvolvedor, lidero como agilista e crio como músico.',
      agile_title: 'Liderança Ágil (7+ Anos)', agile_desc: 'Facilitação, métricas, coaching de equipes e transformação digital. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'Especializado em apps modernos com React 18, Tailwind e Python.',
      creative_title: 'Criatividade & Música', creative_desc: 'Composição de atmosferas sonoras e design de experiências digitais.'
    },
    projects: { 
      subtitle: 'Desenvolvimento de Aplicações Modernas', stack_label: 'Stack Principal:',
      descriptions: {
        armonix: "Ferramenta educativa musical interativa com visualizador de acordes. Uma das apps musicais locais mais completas.",
        palabra: "Plataforma litúrgica com leituras diárias e reflexões geradas por IA. Arquitetura moderna.",
        ensayemos: "Gestão para bandas: votação de ensaios, setlists e repositório de acordes.",
        emaus: "Sistema de gestão paroquial integral: sacramentos, finanças, mensagens e rede social interna.",
        melodialab: "Meu estúdio de desenvolvimento e portfólio experimental. Design moderno."
      }
    },
    jobs: {
      thomson: {
        company: "Thomson Reuters", role: "Desenvolvedor Python Full Stack", period: "Março 2025 – Presente", location: "Santiago, Chile / Remoto",
        description: ["Arquitetura modular para automação de documentos.", "Robôs de scraping em Python com SQL Server.", "Trabalho ágil com CI/CD."],
        skills: ["Python", "SQLAlchemy", "Git", "Scrum"]
      },
      onikom: {
        company: "Onikom Latam", role: "Scrum Master Sênior", period: "Abril 2024 – Dezembro 2024", location: "México / Remoto",
        description: ["Liderança de 6 equipes ágeis (IA/SaaS).", "Redução de spill-overs em 25% e melhoria na entrega.", "Padronização de métricas."],
        skills: ["Agile Coaching", "Metrics", "Team Leadership"]
      },
      soho: {
        company: "SOHO (Gasco)", role: "Agile Coach", period: "Abril 2022 – Dezembro 2023", location: "Santiago, Chile",
        description: ["Transformação Ágil e treinamento em Scrum e Kanban.", "Workshops de Design Thinking (+25% inovação).", "Gestão visual."],
        skills: ["Kanban", "Design Thinking", "Change Management"]
      },
      cencosud: {
        company: "Cencosud Scotiabank", role: "Scrum Master", period: "Março 2018 – Março 2021", location: "Santiago, Chile",
        description: ["Gestão de projetos tecnológicos em Risco e Finanças.", "Aumento da conclusão de sprints para 92%.", "Promoção da cultura ágil."],
        skills: ["Finance Tech", "Agile Adoption", "Team Building"]
      }
    },
    music: {
      profile_label: 'Perfil Musical', main_desc: 'Minha música oscila entre o atmosférico, eletrônico e rock melódico.',
      discography_title: 'Discografia', discography_desc: '2 Álbuns e 4 Singles publicados. Produzidos e mixados por mim.',
      production_title: 'Produção', production_desc: 'Música original para documentários e TV.',
      listen_btn: 'Ouvir na Apple Music', studio_title: 'Estúdio Virtual'
    },
    titles: { philosophy: 'Filosofia', projects: 'Vibe Coding', music: 'Som & Atmosfera', experience: 'Experiência', contact: 'Contato' },
    footer: { title: 'Vamos Conversar', subtitle: 'Para impulsionar sua equipe ágil ou desenvolver sua plataforma.', rights: 'Todos os direitos reservados.', made_by: 'Feito com', tech_by: 'em React & Tailwind por', copy_email: 'Copiar Email', copied: 'Copiado!' }
  },
  it: {
    nav: { home: 'Home', philosophy: 'Filosofia', projects: 'Progetti', music: 'Musica', experience: 'Esperienza', contact_btn: 'Contattami' },
    hero: { role: 'Senior Scrum Master (7+ Anni) | Agile Coach', tagline_1: 'Tecnologia', tagline_2: '+ Musica', tagline_3: 'allo stesso livello.', synthesis: 'Costruisco tecnologia e musica con la stessa filosofia.', cta_portfolio: 'Vedi Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Anni Exp Agile', albums: 'Album', teams: 'Team Guidati', available: 'Disponibile' },
    about: { main_text: 'Non vivo queste aree separatamente. Penso come sviluppatore, guido come agilista.', agile_title: 'Leadership Agile', agile_desc: 'Facilitazione esperta, metriche e coaching.', dev_title: 'Full Stack Dev', dev_desc: 'App moderne con React 18 e Python.', creative_title: 'Creatività & Musica', creative_desc: 'Design digitale.' },
    projects: { subtitle: 'Sviluppo Applicazioni Moderne', stack_label: 'Stack:', descriptions: { armonix: "Strumento educativo musicale interattivo.", palabra: "Piattaforma liturgica con riflessioni IA.", ensayemos: "Gestione per band musicali.", emaus: "Sistema di gestione parrocchiale integrale.", melodialab: "Il mio studio di sviluppo." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Sviluppatore Python Full Stack", period: "Mar 2025 – Presente", location: "Cile / Remoto", description: ["Architettura modulare per automazione.", "Scraping robot Python.", "Lavoro agile CI/CD."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "Scrum Master Senior", period: "Apr 2024 – Dic 2024", location: "Messico / Remoto", description: ["Leadership di 6 team agili.", "Miglioramento consegna del 30%.", "Metriche agili."], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "Agile Coach", period: "Apr 2022 – Dic 2023", location: "Santiago, Cile", description: ["Trasformazione Agile.", "Workshop Design Thinking.", "Gestione visiva."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "Scrum Master", period: "Mar 2018 – Mar 2021", location: "Santiago, Cile", description: ["Progetti Tech Finanza.", "Miglioramento sprint al 92%.", "Cultura agile."], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: 'Profilo Musicale', main_desc: 'Musica atmosferica e rock melodico.', discography_title: 'Discografia', discography_desc: '2 Album e 4 Singoli.', production_title: 'Produzione', production_desc: 'Musica originale per TV.', listen_btn: 'Ascolta su Apple Music', studio_title: 'Studio Virtuale' },
    titles: { philosophy: 'Filosofia Ibrida', projects: 'Vibe Coding', music: 'Suono', experience: 'Esperienza', contact: 'Parliamo' },
    footer: { title: 'Parliamo', subtitle: 'Per il tuo prossimo progetto.', rights: 'Diritti riservati.', made_by: 'Fatto con', tech_by: 'in React & Tailwind da', copy_email: 'Copia Email', copied: 'Copiato!' }
  },
  de: {
    nav: { home: 'Start', philosophy: 'Philosophie', projects: 'Projekte', music: 'Musik', experience: 'Erfahrung', contact_btn: 'Kontakt' },
    hero: { role: 'Senior Scrum Master (7+ Jahre)', tagline_1: 'Technologie', tagline_2: '+ Musik', tagline_3: 'auf gleichem Niveau.', synthesis: 'Ich baue Technologie und Musik mit der gleichen Philosophie.', cta_portfolio: 'Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Jahre Agile', albums: 'Alben', teams: 'Teams', available: 'Verfügbar' },
    about: { main_text: 'Ich denke wie ein Entwickler, leite wie ein Agilist.', agile_title: 'Agile Führung', agile_desc: 'Experten-Facilitation, Metriken.', dev_title: 'Full Stack Dev', dev_desc: 'Moderne Apps mit React 18.', creative_title: 'Kreativität', creative_desc: 'Sound-Design.' },
    projects: { subtitle: 'Moderne App-Entwicklung', stack_label: 'Stack:', descriptions: { armonix: "Interaktives Musik-Lern-Tool.", palabra: "Liturgische Plattform mit KI.", ensayemos: "Management für Bands.", emaus: "Pfarrverwaltungssystem.", melodialab: "Mein Entwicklungsstudio." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python Full Stack Entwickler", period: "Mär 2025 – Heute", location: "Chile / Remote", description: ["Modulare Architektur.", "Python Scraping Bots.", "Agiles Arbeiten."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "Senior Scrum Master", period: "Apr 2024 – Dez 2024", location: "Mexiko / Remote", description: ["Führung von 6 Teams.", "30% bessere Lieferzeit.", "Agile Metriken."], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "Agile Coach", period: "Apr 2022 – Dez 2023", location: "Santiago, Chile", description: ["Agile Transformation.", "Design Thinking Workshops.", "Visuelles Management."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "Scrum Master", period: "Mär 2018 – Mär 2021", location: "Santiago, Chile", description: ["Finanz-Tech Projekte.", "Sprint-Abschluss 92%.", "Agile Kultur."], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: 'Musikprofil', main_desc: 'Atmosphärischer Rock.', discography_title: 'Diskografie', discography_desc: '2 Alben, 4 Singles.', production_title: 'Produktion', production_desc: 'Originalmusik für TV.', listen_btn: 'Apple Music', studio_title: 'Virtuelles Studio' },
    titles: { philosophy: 'Philosophie', projects: 'Projekte', music: 'Musik', experience: 'Erfahrung', contact: 'Kontakt' },
    footer: { title: 'Kontakt', subtitle: 'Für Ihr nächstes Projekt.', rights: 'Rechte vorbehalten.', made_by: 'Gemacht mit', tech_by: 'in React & Tailwind von', copy_email: 'Email kopieren', copied: 'Kopiert!' }
  },
  ja: {
    nav: { home: 'ホーム', philosophy: '哲学', projects: 'プロジェクト', music: '音楽', experience: '経験', contact_btn: 'お問い合わせ' },
    hero: { role: 'シニアスクラムマスター (7年以上)', tagline_1: 'テクノロジー', tagline_2: '+ 音楽', tagline_3: '同じレベルで。', synthesis: 'テクノロジーと音楽を同じ哲学で構築します。', cta_portfolio: 'ポートフォリオ', cta_linkedin: 'LinkedIn', years_exp: '経験年数', albums: 'アルバム', teams: 'チーム', available: '募集中' },
    about: { main_text: '開発者のように考え、アジャイル実践者のように導きます。', agile_title: 'アジャイルリーダーシップ', agile_desc: 'ファシリテーション、コーチング。', dev_title: 'フルスタック', dev_desc: 'React 18、Pythonでの開発。', creative_title: '創造性', creative_desc: 'サウンドデザイン。' },
    projects: { subtitle: 'アプリ開発', stack_label: 'スタック:', descriptions: { armonix: "インタラクティブな音楽教育ツール。", palabra: "AI生成による典礼プラットフォーム。", ensayemos: "バンド管理ツール。", emaus: "包括的な教区管理システム。", melodialab: "私の開発スタジオ。" } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Pythonフルスタック開発者", period: "2025年3月 – 現在", location: "チリ / リモート", description: ["自動化のためのモジュラーアーキテクチャ。", "Pythonスクレイピングボット。", "アジャイル開発。"], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "シニアスクラムマスター", period: "2024年4月 – 12月", location: "メキシコ / リモート", description: ["6つのアジャイルチームを指導。", "納期遵守率30%向上。", "メトリクスの標準化。"], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "アジャイルコーチ", period: "2022年4月 – 2023年12月", location: "サンティアゴ", description: ["アジャイル変革の指導。", "デザイン思考ワークショップ。", "可視化管理。"], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "スクラムマスター", period: "2018年3月 – 2021年3月", location: "サンティアゴ", description: ["金融テックプロジェクト。", "スプリント完了率92%。", "アジャイル文化の推進。"], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: '音楽', main_desc: 'アトモスフェリック・ロック。', discography_title: 'ディスコグラフィー', discography_desc: 'アルバム2枚、シングル4枚。', production_title: '制作', production_desc: 'TV向けオリジナル音楽。', listen_btn: 'Apple Music', studio_title: 'スタジオ' },
    titles: { philosophy: '哲学', projects: 'プロジェクト', music: '音楽', experience: '経歴', contact: 'お問い合わせ' },
    footer: { title: 'お問い合わせ', subtitle: '新しいプロジェクトのために。', rights: '無断転載禁止。', made_by: '作成者', tech_by: 'React & Tailwind で', copy_email: 'メールをコピー', copied: 'コピーしました！' }
  },
  ko: {
    nav: { home: '홈', philosophy: '철학', projects: '프로젝트', music: '음악', experience: '경력', contact_btn: '문의하기' },
    hero: { role: '시니어 스크럼 마스터', tagline_1: '기술', tagline_2: '+ 음악', tagline_3: '동일한 수준.', synthesis: '기술과 음악의 조화.', cta_portfolio: '포트폴리오', cta_linkedin: 'LinkedIn', years_exp: '경력', albums: '앨범', teams: '팀', available: '가능' },
    about: { main_text: '개발자처럼 생각하고 리더처럼 행동합니다.', agile_title: '애자일 리더십', agile_desc: '코칭 및 퍼실리테이션.', dev_title: '풀스택', dev_desc: 'React 18 및 Python.', creative_title: '창의성', creative_desc: '사운드 디자인.' },
    projects: { subtitle: '앱 개발', stack_label: '스택:', descriptions: { armonix: "음악 교육 도구.", palabra: "전례 플랫폼.", ensayemos: "밴드 관리.", emaus: "교구 관리 시스템.", melodialab: "개발 스튜디오." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python 풀스택 개발자", period: "2025.03 – 현재", location: "칠레", description: ["모듈식 아키텍처.", "스크래핑 봇."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "시니어 스크럼 마스터", period: "2024.04 – 12", location: "멕시코", description: ["6개 팀 리딩.", "납기 준수 향상."], skills: ["Agile", "Leadership"] },
      soho: { company: "SOHO", role: "애자일 코치", period: "2022.04 – 2023.12", location: "칠레", description: ["애자일 전환.", "디자인 씽킹."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud", role: "스크럼 마스터", period: "2018.03 – 2021.03", location: "칠레", description: ["핀테크 프로젝트.", "문화 확산."], skills: ["Agile"] }
    },
    music: { profile_label: '음악', main_desc: '애트머스페릭 록.', discography_title: '디스코그래피', discography_desc: '앨범 2장.', production_title: '제작', production_desc: 'TV 음악.', listen_btn: 'Apple Music', studio_title: '스튜디오' },
    titles: { philosophy: '철학', projects: '프로젝트', music: '음악', experience: '경력', contact: '문의' },
    footer: { title: '문의', subtitle: '프로젝트 문의.', rights: '판권 소유.', made_by: '제작', tech_by: 'React & Tailwind 로', copy_email: '이메일 복사', copied: '복사됨!' }
  },
  zh: {
    nav: { home: '首页', philosophy: '理念', projects: '项目', music: '音乐', experience: '经验', contact_btn: '联系我' },
    hero: { role: '高级 Scrum Master', tagline_1: '技术', tagline_2: '+ 音乐', tagline_3: '同等水平。', synthesis: '技术与音乐的融合。', cta_portfolio: '作品集', cta_linkedin: 'LinkedIn', years_exp: '年经验', albums: '专辑', teams: '团队', available: '可用' },
    about: { main_text: '像开发者一样思考。', agile_title: '敏捷领导力', agile_desc: '团队辅导。', dev_title: '全栈开发', dev_desc: 'React 18 开发。', creative_title: '创意', creative_desc: '声音设计。' },
    projects: { subtitle: '应用开发', stack_label: '技术栈:', descriptions: { armonix: "音乐教育工具。", palabra: "礼仪平台。", ensayemos: "乐队管理。", emaus: "教区管理系统。", melodialab: "开发工作室。" } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python 全栈开发", period: "2025.03 – 至今", location: "智利", description: ["模块化架构。", "爬虫机器人。"], skills: ["Python"] },
      onikom: { company: "Onikom Latam", role: "高级 Scrum Master", period: "2024.04 – 12", location: "墨西哥", description: ["领导6个团队。", "提升交付效率。"], skills: ["Agile"] },
      soho: { company: "SOHO", role: "敏捷教练", period: "2022.04 – 2023.12", location: "智利", description: ["敏捷转型。", "设计思维。"], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018.03 – 2021.03", location: "智利", description: ["金融科技项目。", "推广敏捷文化。"], skills: ["Agile"] }
    },
    music: { profile_label: '音乐', main_desc: '氛围摇滚。', discography_title: '唱片', discography_desc: '2张专辑。', production_title: '制作', production_desc: '原创音乐。', listen_btn: 'Apple Music', studio_title: '工作室' },
    titles: { philosophy: '理念', projects: '项目', music: '音乐', experience: '经验', contact: '联系' },
    footer: { title: '联系', subtitle: '合作项目。', rights: '版权所有。', made_by: '制作', tech_by: '使用 React & Tailwind 由', copy_email: '复制邮箱', copied: '已复制！' }
  },
  ar: {
    nav: { home: 'الرئيسية', philosophy: 'الفلسفة', projects: 'المشاريع', music: 'الموسيقى', experience: 'الخبرة', contact_btn: 'تواصل معي' },
    hero: { role: 'سكروم ماستر', tagline_1: 'تكنولوجيا', tagline_2: '+ موسيقى', tagline_3: 'نفس المستوى.', synthesis: 'بناء التكنولوجيا والموسيقى.', cta_portfolio: 'المحفظة', cta_linkedin: 'لينكد إن', years_exp: 'خبرة', albums: 'ألبومات', teams: 'فرق', available: 'متاح' },
    about: { main_text: 'أفكر كمطور وأقود كقائد.', agile_title: 'قيادة أجايل', agile_desc: 'تدريب الفرق.', dev_title: 'مطور شامل', dev_desc: 'تطبيقات حديثة.', creative_title: 'إبداع', creative_desc: 'تصميم صوتي.' },
    projects: { subtitle: 'تطوير تطبيقات', stack_label: 'التقنيات:', descriptions: { armonix: "أداة تعليمية موسيقية.", palabra: "منصة دينية.", ensayemos: "إدارة الفرق الموسيقية.", emaus: "نظام إدارة.", melodialab: "استوديو التطوير." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "مطور بايثون", period: "مارس 2025 - الآن", location: "تشيلي", description: ["هيكلية معيارية.", "روبوتات."], skills: ["Python"] },
      onikom: { company: "Onikom Latam", role: "سكروم ماستر", period: "أبريل 2024 - ديسمبر 2024", location: "المكسيك", description: ["قيادة 6 فرق.", "تحسين التسليم."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "مدرب أجايل", period: "2022 - 2023", location: "تشيلي", description: ["تحول أجايل.", "تفكير تصميمي."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "سكروم ماستر", period: "2018 - 2021", location: "تشيلي", description: ["مشاريع مالية.", "ثقافة أجايل."], skills: ["Agile"] }
    },
    music: { profile_label: 'موسيقى', main_desc: 'روك جوي.', discography_title: 'أعمال', discography_desc: 'ألبومان.', production_title: 'إنتاج', production_desc: 'موسيقى أصلية.', listen_btn: 'Apple Music', studio_title: 'استوديو' },
    titles: { philosophy: 'فلسفة', projects: 'مشاريع', music: 'موسيقى', experience: 'خبرة', contact: 'تواصل' },
    footer: { title: 'تواصل', subtitle: 'لمشروعك القادم.', rights: 'حقوق محفوظة.', made_by: 'صنع بـ', tech_by: 'في React & Tailwind بواسطة', copy_email: 'نسخ البريد', copied: 'تم النسخ!' }
  },
  uk: {
    nav: { home: 'Головна', philosophy: 'Філософія', projects: 'Проєкти', music: 'Музика', experience: 'Досвід', contact_btn: 'Зв\'язатися' },
    hero: { role: 'Scrum Master', tagline_1: 'Технології', tagline_2: '+ Музика', tagline_3: 'один рівень.', synthesis: 'Технології та музика.', cta_portfolio: 'Портфоліо', cta_linkedin: 'LinkedIn', years_exp: 'Досвід', albums: 'Альбоми', teams: 'Команди', available: 'Доступний' },
    about: { main_text: 'Думаю як розробник.', agile_title: 'Agile лідерство', agile_desc: 'Коучинг команд.', dev_title: 'Full Stack', dev_desc: 'Сучасні додатки.', creative_title: 'Креативність', creative_desc: 'Дизайн.' },
    projects: { subtitle: 'Розробка додатків', stack_label: 'Стек:', descriptions: { armonix: "Музичний інструмент.", palabra: "Літургійна платформа.", ensayemos: "Менеджмент груп.", emaus: "Система управління.", melodialab: "Студія розробки." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python розробник", period: "Бер 2025 – Зараз", location: "Чилі", description: ["Модульна архітектура.", "Боти."], skills: ["Python"] },
      onikom: { company: "Onikom Latam", role: "Scrum Master", period: "Кві 2024 – Гру 2024", location: "Мексика", description: ["Лідерство команд.", "Покращення доставки."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "Agile Coach", period: "2022 – 2023", location: "Чилі", description: ["Agile трансформація.", "Design Thinking."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018 – 2021", location: "Чилі", description: ["Фінтех проєкти.", "Agile культура."], skills: ["Agile"] }
    },
    music: { profile_label: 'Музика', main_desc: 'Рок.', discography_title: 'Дискографія', discography_desc: '2 альбоми.', production_title: 'Продакшн', production_desc: 'Оригінальна музика.', listen_btn: 'Apple Music', studio_title: 'Студія' },
    titles: { philosophy: 'Філософія', projects: 'Проєкти', music: 'Музика', experience: 'Досвід', contact: 'Контакти' },
    footer: { title: 'Контакти', subtitle: 'Для проєкту.', rights: 'Всі права захищено.', made_by: 'Зроблено з', tech_by: 'на React & Tailwind від', copy_email: 'Копіювати Email', copied: 'Скопійовано!' }
  },
  hi: {
    nav: { home: 'होम', philosophy: 'दर्शन', projects: 'प्रोजेक्ट्स', music: 'संगीत', experience: 'अनुभव', contact_btn: 'संपर्क' },
    hero: { role: 'Scrum Master', tagline_1: 'तकनीक', tagline_2: '+ संगीत', tagline_3: 'एक स्तर।', synthesis: 'तकनीक और संगीत।', cta_portfolio: 'पोर्टफोलियो', cta_linkedin: 'LinkedIn', years_exp: 'अनुभव', albums: 'एल्बम', teams: 'टीमें', available: 'उपलब्ध' },
    about: { main_text: 'डेवलपर की तरह सोचें।', agile_title: 'एजाइल नेतृत्व', agile_desc: 'टीम कोचिंग।', dev_title: 'फुल स्टैक', dev_desc: 'आधुनिक ऐप्स।', creative_title: 'रचनात्मकता', creative_desc: 'डिजाइन।' },
    projects: { subtitle: 'ऐप विकास', stack_label: 'स्टैक:', descriptions: { armonix: "संगीत उपकरण।", palabra: "धार्मिक मंच।", ensayemos: "बैंड प्रबंधन।", emaus: "प्रबंधन प्रणाली।", melodialab: "विकास स्टूडियो।" } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python डेवलपर", period: "2025 – वर्तमान", location: "चिली", description: ["मॉड्यूलर आर्किटेक्चर।", "बॉट्स।"], skills: ["Python"] },
      onikom: { company: "Onikom", role: "Scrum Master", period: "2024", location: "मेक्सिको", description: ["टीम नेतृत्व।", "डिलीवरी में सुधार।"], skills: ["Agile"] },
      soho: { company: "SOHO", role: "Agile Coach", period: "2022 – 2023", location: "चिली", description: ["एजाइल परिवर्तन।"], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018 – 2021", location: "चिली", description: ["फिनटेक।"], skills: ["Agile"] }
    },
    music: { profile_label: 'संगीत', main_desc: 'रॉक।', discography_title: 'डिस्कोग्राफी', discography_desc: '2 एल्बम।', production_title: 'उत्पादन', production_desc: 'मूल संगीत।', listen_btn: 'Apple Music', studio_title: 'स्टूडियो' },
    titles: { philosophy: 'दर्शन', projects: 'प्रोजेक्ट्स', music: 'संगीत', experience: 'अनुभव', contact: 'संपर्क' },
    footer: { title: 'संपर्क', subtitle: 'प्रोजेक्ट के लिए।', rights: 'सुरक्षित।', made_by: 'बनाया', tech_by: 'React & Tailwind में', copy_email: 'ईमेल कॉपी करें', copied: 'कॉपी किया गया!' }
  },
  ta: {
    nav: { home: 'முகப்பு', philosophy: 'தத்துவம்', projects: 'திட்டங்கள்', music: 'இசை', experience: 'அனுபவம்', contact_btn: 'தொடர்பு' },
    hero: { role: 'Scrum Master', tagline_1: 'தொழில்நுட்பம்', tagline_2: 'இசை', tagline_3: 'சமம்.', synthesis: 'தொழில்நுட்பம் மற்றும் இசை.', cta_portfolio: 'போர்ட்ஃபோலியோ', cta_linkedin: 'LinkedIn', years_exp: 'அனுபவம்', albums: 'ஆல்பம்', teams: 'அணிகள்', available: 'கிடைக்கும்' },
    about: { main_text: 'சிந்தனை.', agile_title: 'தலைமை', agile_desc: 'பயிற்சி.', dev_title: 'டெவலப்பர்', dev_desc: 'செயலிகள்.', creative_title: 'படைப்பாற்றல்', creative_desc: 'வடிவமைப்பு.' },
    projects: { subtitle: 'செயலி மேம்பாடு', stack_label: 'தொழில்நுட்பம்:', descriptions: { armonix: "இசை கருவி.", palabra: "மேடை.", ensayemos: "இசைக்குழு நிர்வாகம்.", emaus: "நிர்வாக அமைப்பு.", melodialab: "ஸ்டுடியோ." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python Developer", period: "2025", location: "சிலி", description: ["கட்டமைப்பு."], skills: ["Python"] },
      onikom: { company: "Onikom", role: "Scrum Master", period: "2024", location: "மெக்சிகோ", description: ["தலைமை."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "Agile Coach", period: "2022-2023", location: "சிலி", description: ["மாற்றம்."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018-2021", location: "சிலி", description: ["நிதி."], skills: ["Agile"] }
    },
    music: { profile_label: 'இசை', main_desc: 'ராக்.', discography_title: 'இசைத்தொகுப்பு', discography_desc: '2 ஆல்பங்கள்.', production_title: 'தயாரிப்பு', production_desc: 'இசை.', listen_btn: 'Apple Music', studio_title: 'ஸ்டுடியோ' },
    titles: { philosophy: 'தத்துவம்', projects: 'திட்டங்கள்', music: 'இசை', experience: 'அனுபவம்', contact: 'தொடர்பு' },
    footer: { title: 'தொடர்பு', subtitle: 'திட்டத்திற்கு.', rights: 'உரிமைகள்.', made_by: 'உருவாக்கியவர்', tech_by: 'React & Tailwind மூலம்', copy_email: 'நகல்', copied: 'நகலெடுக்கப்பட்டது!' }
  },
  gu: {
    nav: { home: 'હોમ', philosophy: 'ફિલોસોફી', projects: 'પ્રોજેક્ટ્સ', music: 'સંગીત', experience: 'અનુભવ', contact_btn: 'સંપર્ક' },
    hero: { role: 'Scrum Master', tagline_1: 'ટેક', tagline_2: 'સંગીત', tagline_3: 'સમાન.', synthesis: 'ટેક અને સંગીત.', cta_portfolio: 'પોર્ટફોલિયો', cta_linkedin: 'LinkedIn', years_exp: 'અનુભવ', albums: 'આલ્બમ', teams: 'ટીમ', available: 'ઉપલબ્ધ' },
    about: { main_text: 'વિચાર.', agile_title: 'નેતૃત્વ', agile_desc: 'કોચિંગ.', dev_title: 'ડેવલપર', dev_desc: 'એપ્સ.', creative_title: 'સર્જનાત્મકતા', creative_desc: 'ડિઝાઇન.' },
    projects: { subtitle: 'વિકાસ', stack_label: 'સ્ટેક:', descriptions: { armonix: "સંગીત સાધન.", palabra: "પ્લેટફોર્મ.", ensayemos: "બેન્ડ.", emaus: "સિસ્ટમ.", melodialab: "સ્ટુડિયો." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python Developer", period: "2025", location: "ચિલી", description: ["સ્ટ્રક્ચર."], skills: ["Python"] },
      onikom: { company: "Onikom", role: "Scrum Master", period: "2024", location: "મેક્સિકો", description: ["લીડરશિપ."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "Agile Coach", period: "2022-2023", location: "ચિલી", description: ["ટ્રાન્સફોર્મેશન."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018-2021", location: "ચિલી", description: ["ફાઇનાન્સ."], skills: ["Agile"] }
    },
    music: { profile_label: 'સંગીત', main_desc: 'રોક.', discography_title: 'ડિસ્કોગ્રાફી', discography_desc: '2 આલ્બમ.', production_title: 'પ્રોડક્શન', production_desc: 'સંગીત.', listen_btn: 'Apple Music', studio_title: 'સ્ટુડિયો' },
    titles: { philosophy: 'ફિલોસોફી', projects: 'પ્રોજેક્ટ્સ', music: 'સંગીત', experience: 'અનુભવ', contact: 'સંપર્ક' },
    footer: { title: 'સંપર્ક', subtitle: 'પ્રોજેક્ટ.', rights: 'હકો.', made_by: 'દ્વારા', tech_by: 'React & Tailwind માં', copy_email: 'કોપી', copied: 'કોપી થયું!' }
  },
  arn: {
    nav: { home: 'Tuwün', philosophy: 'Rakiduam', projects: 'Kudaw', music: 'Ülkantun', experience: 'Kimün', contact_btn: 'Nütram' },
    hero: { role: 'Scrum Master', tagline_1: 'Kimün', tagline_2: 'Ülkantun', tagline_3: 'kiñe.', synthesis: 'Kimün ka ülkantun.', cta_portfolio: 'Kudaw', cta_linkedin: 'LinkedIn', years_exp: 'Tripantu', albums: 'Ülkantun', teams: 'Trowün', available: 'Mülelay' },
    about: { main_text: 'Rakiduam.', agile_title: 'Longko', agile_desc: 'Kimün.', dev_title: 'Dewmafe', dev_desc: 'We Kudaw.', creative_title: 'Rakiduam', creative_desc: 'Adkan.' },
    projects: { subtitle: 'Dewman', stack_label: 'Kudaw:', descriptions: { armonix: "Ülkantun.", palabra: "Ngillatun.", ensayemos: "Ülkantufe.", emaus: "Gvnenian.", melodialab: "Dewman." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Dewmafe Python", period: "2025", location: "Chile", description: ["Dewman."], skills: ["Python"] },
      onikom: { company: "Onikom", role: "Scrum Master", period: "2024", location: "Mexico", description: ["Gvnenian."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "Agile Coach", period: "2022-2023", location: "Chile", description: ["Kimeltu."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018-2021", location: "Chile", description: ["Kudaw."], skills: ["Agile"] }
    },
    music: { profile_label: 'Ülkantun', main_desc: 'Ülkantun.', discography_title: 'Ülkantun', discography_desc: '2 Epew.', production_title: 'Dewman', production_desc: 'We Ülkantun.', listen_btn: 'Apple Music', studio_title: 'Wenu Kudaw' },
    titles: { philosophy: 'Rakiduam', projects: 'Kudaw', music: 'Ülkantun', experience: 'Kimün', contact: 'Nütram' },
    footer: { title: 'Nütram', subtitle: 'Kudaw.', rights: 'Kom zugu.', made_by: 'Dewmay', tech_by: 'React & Tailwind mew', copy_email: 'Copy', copied: 'Copied!' }
  }
};