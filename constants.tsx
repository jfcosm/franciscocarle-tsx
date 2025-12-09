// Version 1.9
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
  role: "Senior Scrum Master | Agile Coach | Technical Lead", 
  tagline: "Liderazgo Ágil + Visión Técnica",
  synthesis: "Facilito la entrega de valor en equipos tecnológicos complejos, uniendo gestión ágil y conocimientos Full Stack.",
  email: "francisco.carle@gmail.com",
  phone: "+56 9 3078 1181",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/franciscocarle/",
  github: "https://github.com/franciscocarle",
  appleMusic: "https://music.apple.com/cl/artist/francisco-carle/1662050530",
  image: "/perfil.jpg",
  googleAnalyticsId: "G-36VY3R5GTR", // Reemplaza con tu ID de medición (ej: G-1234567890)
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
    title: "Verso",
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
    link: "https://www.emaus.social",
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
  soft: ["English C2 (Bilingual)", "Español (Nativo)", "Stakeholder Mgmt", "Conflict Resolution", "Remote Leadership", "Mentoring"]
};

// Translations
export const TRANSLATIONS: Translations = {
  es: {
    nav: { home: 'Inicio', philosophy: 'Filosofía', projects: 'Proyectos', music: 'Música', experience: 'Experiencia', contact_btn: 'Contáctame' },
    hero: { 
      role: 'Senior Scrum Master (7+ Años) | Agile Coach | Full Stack', 
      tagline_1: 'Liderazgo Ágil', tagline_2: '+ Visión Técnica', tagline_3: 'para resultados reales.',
      synthesis: 'Facilito la entrega de valor en equipos tecnológicos complejos, uniendo gestión ágil, bilingüismo y conocimientos Full Stack.', 
      cta_portfolio: 'Ver Portafolio', cta_linkedin: 'LinkedIn', years_exp: 'Años Exp. Ágil', albums: 'Álbumes', teams: 'Equipos Liderados', available: 'Disponible para nuevos proyectos',
      github: 'GitHub'
    },
    about: {
      main_text: 'Mi perfil técnico como desarrollador me permite entender los desafíos del código, mientras que mis habilidades de liderazgo y Scrum Master aseguran la entrega de valor. La música me aporta la sensibilidad para la escucha activa y la armonía en los equipos.',
      agile_title: 'Liderazgo Ágil (7+ Años)', agile_desc: 'Facilitación experte, métricas, coaching de equipos y transformación digital. Certified Scrum Master.',
      dev_title: 'Expertise Técnico', dev_desc: 'Capacidad para dialogar con equipos de ingeniería y desarrollar soluciones en React 18, Tailwind y Python.',
      soft_title: 'Comunicación y Estrategia', soft_desc: 'Habilidad para gestionar stakeholders, resolver conflictos y liderar equipos multiculturales gracias al inglés C2.'
    },
    projects: { 
      subtitle: 'Proyectos de Desarrollo y Gestión', stack_label: 'Stack Principal:',
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
      profile_label: 'Faceta Creativa',
      main_desc: 'Además de mi carrera tecnológica, desarrollo una trayectoria como músico y productor, lo que potencia mi creatividad y atención al detalle.',
      discography_title: 'Discografía', discography_desc: '2 Álbumes completos y 4 Singles publicados en plataformas globales (Apple Music, Spotify). Producidos, grabados y mezclados íntegramente por mí.',
      production_title: 'Producción', production_desc: 'Trabajo con Logic Pro X, Arturia V Collection y sintetizadores analógicos virtuales. Música original para documentales, jingles y spots de TV.',
      listen_btn: 'Escuchar en Apple Music', studio_title: 'Estudio Virtual'
    },
    titles: { philosophy: 'Perfil Profesional', projects: 'Portafolio Técnico', music: 'Producción Musical', experience: 'Trayectoria Profesional', contact: 'Hablemos' },
    footer: { title: 'Hablemos', subtitle: 'Ya sea para liderar tu transformación ágil, potenciar tu equipo de desarrollo o gestionar proyectos complejos.', rights: 'Todos los derechos reservados.', made_by: 'Hecho con', tech_by: 'en React & Tailwind por', copy_email: 'Copiar Email', copied: '¡Copiado!', github: 'GitHub' }
  },
  en: {
    nav: { home: 'Home', philosophy: 'Philosophy', projects: 'Projects', music: 'Music', experience: 'Experience', contact_btn: 'Contact Me' },
    hero: { 
      role: 'Senior Scrum Master (7+ Years) | Agile Coach | Full Stack', 
      tagline_1: 'Agile Leadership', tagline_2: '+ Technical Vision', tagline_3: 'for real results.',
      synthesis: 'I facilitate value delivery in complex tech teams, combining agile management, bilingual skills, and full stack expertise.', 
      cta_portfolio: 'View Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Years Agile Exp', albums: 'Albums', teams: 'Teams Led', available: 'Available for new projects',
      github: 'GitHub'
    },
    about: {
      main_text: 'My technical profile allows me to understand code challenges, while my leadership and Scrum Master skills ensure value delivery. Music provides me with unique sensitivity for active listening and team harmony.',
      agile_title: 'Agile Leadership (7+ Years)', agile_desc: 'Expert facilitation, metrics, team coaching, and digital transformation. Certified Scrum Master.',
      dev_title: 'Technical Expertise', dev_desc: 'Ability to bridge gaps with engineering teams and develop solutions in React 18, Tailwind, and Python.',
      soft_title: 'Communication & Strategy', soft_desc: 'Ability to manage stakeholders, resolve conflicts, and lead multicultural teams thanks to C2 English proficiency.'
    },
    projects: { 
      subtitle: 'Development & Management Projects', stack_label: 'Main Stack:',
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
      profile_label: 'Creative Side',
      main_desc: 'Beyond my tech career, I cultivate a path as a musician and producer, enhancing my creativity and attention to detail.',
      discography_title: 'Discography', discography_desc: '2 Full Albums and 4 Singles published on global platforms (Apple Music, Spotify). Produced, recorded, and mixed entirely by me.',
      production_title: 'Production', production_desc: 'Work with Logic Pro X, Arturia V Collection, and virtual analog synthesizers. Original music for documentaries, jingles, and TV spots.',
      listen_btn: 'Listen on Apple Music', studio_title: 'Virtual Studio'
    },
    titles: { philosophy: 'Professional Profile', projects: 'Technical Portfolio', music: 'Music Production', experience: 'Professional Experience', contact: 'Let\'s Talk' },
    footer: { title: 'Let\'s Talk', subtitle: 'Whether to lead your agile transformation, boost your dev team, or manage complex projects.', rights: 'All rights reserved.', made_by: 'Made with', tech_by: 'in React & Tailwind by', copy_email: 'Copy Email', copied: 'Copied!', github: 'GitHub' }
  },
  fr: {
    nav: { home: 'Accueil', philosophy: 'Philosophie', projects: 'Projets', music: 'Musique', experience: 'Expérience', contact_btn: 'Contactez-moi' },
    hero: { 
      role: 'Senior Scrum Master (7+ Ans) | Agile Coach | Full Stack', 
      tagline_1: 'Leadership Agile', tagline_2: '+ Vision Technique', tagline_3: 'pour des résultats.',
      synthesis: 'Je facilite la création de valeur dans les équipes tech, en alliant gestion agile et expertise technique.', 
      cta_portfolio: 'Voir Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Ans Exp Agile', albums: 'Albums', teams: 'Équipes Dirigées', available: 'Disponible pour nouveaux projets',
      github: 'GitHub'
    },
    about: {
      main_text: 'Mon profil technique me permet de comprendre le code, tandis que mon leadership assure la livraison. La musique m\'apporte l\'écoute active.',
      agile_title: 'Leadership Agile (7+ Ans)', agile_desc: 'Facilitation experte, métriques, coaching d\'équipe. Certified Scrum Master.',
      dev_title: 'Expertise Technique', dev_desc: 'Capable de dialoguer avec les ingénieurs et de développer en React 18 et Python.',
      soft_title: 'Communication & Stratégie', soft_desc: 'Capacité à gérer les parties prenantes et à diriger des équipes multiculturelles (Anglais C2).'
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
        description: ["Gestion de projetos technologiques Risque/Finance.", "Augmentation de la complétion des sprints de 70% à 92%.", "Promotion de la culture agile."],
        skills: ["Finance Tech", "Agile Adoption", "Team Building"]
      }
    },
    music: {
      profile_label: 'Côté Créatif', main_desc: 'En plus de ma carrière technique, je suis musicien et producteur.',
      discography_title: 'Discographie', discography_desc: '2 Albums et 4 Singles publiés. Produits et mixés par moi-même.',
      production_title: 'Production', production_desc: 'Musique originale pour documentaires et TV.',
      listen_btn: 'Écouter sur Apple Music', studio_title: 'Studio Virtuel'
    },
    titles: { philosophy: 'Profil Pro', projects: 'Portfolio Tech', music: 'Production Musicale', experience: 'Expérience Professionnelle', contact: 'Parlons' },
    footer: { title: 'Parlons', subtitle: 'Pour mener votre transformation agile ou gérer vos projets.', rights: 'Tous droits réservés.', made_by: 'Fait avec', tech_by: 'en React & Tailwind par', copy_email: 'Copier Email', copied: 'Copié !', github: 'GitHub' }
  },
  pt: {
    nav: { home: 'Início', philosophy: 'Filosofia', projects: 'Projetos', music: 'Música', experience: 'Experiência', contact_btn: 'Contato' },
    hero: { 
      role: 'Senior Scrum Master (7+ Anos) | Agile Coach | Full Stack', 
      tagline_1: 'Liderança Ágil', tagline_2: '+ Visão Técnica', tagline_3: 'para resultados.',
      synthesis: 'Facilito a entrega de valor em equipes tech, unindo gestão ágil e conhecimento técnico.', 
      cta_portfolio: 'Ver Portfólio', cta_linkedin: 'LinkedIn', years_exp: 'Anos Exp Ágil', albums: 'Álbuns', teams: 'Equipes Lideradas', available: 'Disponível para projetos',
      github: 'GitHub'
    },
    about: {
      main_text: 'Meu perfil técnico me permite entender o código, enquanto minha liderança garante a entrega. A música traz escuta ativa.',
      agile_title: 'Liderança Ágil (7+ Anos)', agile_desc: 'Facilitação, métricas, coaching de equipes e transformação digital. Certified Scrum Master.',
      dev_title: 'Expertise Técnica', dev_desc: 'Capacidade de dialogar com engenheiros e desenvolver em React 18 e Python.',
      soft_title: 'Comunicação e Estratégia', soft_desc: 'Habilidade para gerenciar stakeholders e liderar equipes multiculturais (Inglês C2).'
    },
    projects: { 
      subtitle: 'Desenvolvimento de Aplicações Modernes', stack_label: 'Stack Principal:',
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
      profile_label: 'Lado Criativo', main_desc: 'Além da tecnologia, sou músico e produtor, o que amplia minha criatividade.',
      discography_title: 'Discografia', discography_desc: '2 Álbuns e 4 Singles publicados. Produzidos e mixados por mim.',
      production_title: 'Produção', production_desc: 'Música original para documentários e TV.',
      listen_btn: 'Ouvir na Apple Music', studio_title: 'Estúdio Virtual'
    },
    titles: { philosophy: 'Perfil Pro', projects: 'Portfólio Tech', music: 'Produção Musical', experience: 'Experiência', contact: 'Contato' },
    footer: { title: 'Vamos Conversar', subtitle: 'Para liderar sua transformação ágil ou gerenciar projetos.', rights: 'Todos os direitos reservados.', made_by: 'Feito com', tech_by: 'em React & Tailwind por', copy_email: 'Copiar Email', copied: 'Copiado!', github: 'GitHub' }
  },
  it: {
    nav: { home: 'Home', philosophy: 'Filosofia', projects: 'Progetti', music: 'Musica', experience: 'Esperienza', contact_btn: 'Contattami' },
    hero: { role: 'Senior Scrum Master (7+ Anni) | Agile Coach', tagline_1: 'Leadership Agile', tagline_2: '+ Visione Tecnica', tagline_3: 'per risultati.', synthesis: 'Facilito la creazione di valore unendo gestione agile ed esperienza tecnica.', cta_portfolio: 'Vedi Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Anni Exp Agile', albums: 'Album', teams: 'Team Guidati', available: 'Disponibile', github: 'GitHub' },
    about: { main_text: 'Il mio profilo tecnico aiuta a capire il codice, la leadership assicura la consegna.', agile_title: 'Leadership Agile', agile_desc: 'Facilitazione esperta, metriche e coaching.', dev_title: 'Expertise Tecnica', dev_desc: 'Capacità di dialogo con ingegneri.', soft_title: 'Comunicazione e Strategia', soft_desc: 'Gestione stakeholder e team multiculturali.' },
    projects: { subtitle: 'Sviluppo Applicazioni Moderne', stack_label: 'Stack:', descriptions: { armonix: "Strumento educativo musicale interattivo.", palabra: "Piattaforma liturgica con riflessioni IA.", ensayemos: "Gestione per band musicali.", emaus: "Sistema di gestione parrocchiale integrale.", melodialab: "Il mio studio di sviluppo." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Sviluppatore Python Full Stack", period: "Mar 2025 – Presente", location: "Cile / Remoto", description: ["Architettura modulare per automazione.", "Scraping robot Python.", "Lavoro agile CI/CD."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "Scrum Master Senior", period: "Apr 2024 – Dic 2024", location: "Messico / Remoto", description: ["Leadership di 6 team agili.", "Miglioramento consegna del 30%.", "Metriche agili."], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "Agile Coach", period: "Apr 2022 – Dic 2023", location: "Santiago, Cile", description: ["Trasformazione Agile.", "Workshop Design Thinking.", "Gestione visiva."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "Scrum Master", period: "Mar 2018 – Mar 2021", location: "Santiago, Cile", description: ["Progetti Tech Finanza.", "Miglioramento sprint al 92%.", "Cultura agile."], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: 'Lato Creativo', main_desc: 'Musicista e produttore.', discography_title: 'Discografia', discography_desc: '2 Album e 4 Singoli.', production_title: 'Produzione', production_desc: 'Musica originale per TV.', listen_btn: 'Ascolta su Apple Music', studio_title: 'Studio Virtuale' },
    titles: { philosophy: 'Profilo Pro', projects: 'Portfolio', music: 'Produzione', experience: 'Esperienza', contact: 'Parliamo' },
    footer: { title: 'Parliamo', subtitle: 'Per il tuo prossimo progetto.', rights: 'Diritti riservati.', made_by: 'Fatto con', tech_by: 'in React & Tailwind da', copy_email: 'Copia Email', copied: 'Copiato!', github: 'GitHub' }
  },
  de: {
    nav: { home: 'Start', philosophy: 'Philosophie', projects: 'Projekte', music: 'Musik', experience: 'Erfahrung', contact_btn: 'Kontakt' },
    hero: { role: 'Senior Scrum Master (7+ Jahre)', tagline_1: 'Agile Führung', tagline_2: '+ Technische Vision', tagline_3: 'für Ergebnisse.', synthesis: 'Ich verbinde agiles Management mit technischer Expertise.', cta_portfolio: 'Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Jahre Agile', albums: 'Alben', teams: 'Teams', available: 'Verfügbar', github: 'GitHub' },
    about: { main_text: 'Mein technisches Profil hilft, Code zu verstehen, Führung sichert die Lieferung.', agile_title: 'Agile Führung', agile_desc: 'Experten-Facilitation, Metriken.', dev_title: 'Technische Expertise', dev_desc: 'Dialog mit Ingenieuren.', soft_title: 'Kommunikation & Strategie', soft_desc: 'Stakeholder-Management und multikulturelle Führung.' },
    projects: { subtitle: 'Moderne App-Entwicklung', stack_label: 'Stack:', descriptions: { armonix: "Interaktives Musik-Lern-Tool.", palabra: "Liturgische Plattform mit KI.", ensayemos: "Management für Bands.", emaus: "Pfarrverwaltungssystem.", melodialab: "Mein Entwicklungsstudio." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python Full Stack Entwickler", period: "Mär 2025 – Heute", location: "Chile / Remote", description: ["Modulare Architektur.", "Python Scraping Bots.", "Agiles Arbeiten."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "Senior Scrum Master", period: "Apr 2024 – Dez 2024", location: "Mexiko / Remote", description: ["Führung von 6 Teams.", "30% bessere Lieferzeit.", "Agile Metriken."], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "Agile Coach", period: "Apr 2022 – Dez 2023", location: "Santiago, Chile", description: ["Agile Transformation.", "Design Thinking Workshops.", "Visuelles Management."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "Scrum Master", period: "Mär 2018 – Mär 2021", location: "Santiago, Chile", description: ["Finanz-Tech Projekte.", "Sprint-Abschluss 92%.", "Agile Kultur."], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: 'Kreativ', main_desc: 'Musiker und Produzent.', discography_title: 'Diskografie', discography_desc: '2 Alben, 4 Singles.', production_title: 'Produktion', production_desc: 'Originalmusik für TV.', listen_btn: 'Apple Music', studio_title: 'Virtuelles Studio' },
    titles: { philosophy: 'Profil', projects: 'Projekte', music: 'Musik', experience: 'Erfahrung', contact: 'Kontakt' },
    footer: { title: 'Kontakt', subtitle: 'Für Ihr nächstes Projekt.', rights: 'Rechte vorbehalten.', made_by: 'Gemacht mit', tech_by: 'in React & Tailwind von', copy_email: 'Email kopieren', copied: 'Kopiert!', github: 'GitHub' }
  },
  ja: {
    nav: { home: 'ホーム', philosophy: '哲学', projects: 'プロジェクト', music: '音楽', experience: '経験', contact_btn: 'お問い合わせ' },
    hero: { role: 'シニアスクラムマスター (7年以上)', tagline_1: 'アジャイルリーダーシップ', tagline_2: '+ 技術的ビジョン', tagline_3: '結果のために。', synthesis: 'アジャイル管理と技術的専門知識を組み合わせて価値を提供します。', cta_portfolio: 'ポートフォリオ', cta_linkedin: 'LinkedIn', years_exp: '経験年数', albums: 'アルバム', teams: 'チーム', available: '募集中', github: 'GitHub' },
    about: { main_text: '開発者としての視点とリーダーシップで、プロジェクトを成功に導きます。', agile_title: 'アジャイルリーダーシップ', agile_desc: 'ファシリテーション、コーチング。', dev_title: '技術的専門知識', dev_desc: 'エンジニアとの対話能力。', soft_title: 'コミュニケーションと戦略', soft_desc: 'ステークホルダー管理と多文化チームの指導。' },
    projects: { subtitle: 'アプリ開発', stack_label: 'スタック:', descriptions: { armonix: "インタラクティブな音楽教育ツール。", palabra: "AI生成による典礼プラットフォーム。", ensayemos: "バンド管理ツール。", emaus: "包括的な教区管理システム。", melodialab: "私の開発スタジオ。" } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Pythonフルスタック開発者", period: "2025年3月 – 現在", location: "チリ / リモート", description: ["自動化のためのモジュラーアーキテクチャ。", "Pythonスクレイピングボット。", "アジャイル開発。"], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "シニアスクラムマスター", period: "2024年4月 – 12月", location: "メキシコ / リモート", description: ["6つのアジャイルチームを指導。", "納期遵守率30%向上。", "メトリクスの標準化。"], skills: ["Agile Coaching", "Leadership"] },
      soho: { company: "SOHO (Gasco)", role: "アジャイルコーチ", period: "2022年4月 – 2023年12月", location: "サンティアゴ", description: ["アジャイル変革の指導。", "デザイン思考ワークショップ。", "可視化管理。"], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud Scotiabank", role: "スクラムマスター", period: "2018年3月 – 2021年3月", location: "サンティアゴ", description: ["金融テックプロジェクト。", "スプリント完了率92%。", "アジャイル文化の推進。"], skills: ["Finance Tech", "Agile"] }
    },
    music: { profile_label: 'クリエイティブ', main_desc: '音楽家兼プロデューサー。', discography_title: 'ディスコグラフィー', discography_desc: 'アルバム2枚、シングル4枚。', production_title: '制作', production_desc: 'TV向けオリジナル音楽。', listen_btn: 'Apple Music', studio_title: 'スタジオ' },
    titles: { philosophy: 'プロフィール', projects: 'プロジェクト', music: '音楽制作', experience: '経歴', contact: 'お問い合わせ' },
    footer: { title: 'お問い合わせ', subtitle: '新しいプロジェクトのために。', rights: '無断転載禁止。', made_by: '作成者', tech_by: 'React & Tailwind で', copy_email: 'メールをコピー', copied: 'コピーしました！', github: 'GitHub' }
  },
  ko: {
    nav: { home: '홈', philosophy: '철학', projects: '프로젝트', music: '음악', experience: '경력', contact_btn: '문의하기' },
    hero: { role: '시니어 스크럼 마스터', tagline_1: '애자일 리더십', tagline_2: '+ 기술적 비전', tagline_3: '성과를 위해.', synthesis: '애자일 관리와 기술 전문성을 결합합니다.', cta_portfolio: '포트폴리오', cta_linkedin: 'LinkedIn', years_exp: '경력', albums: '앨범', teams: '팀', available: '가능', github: 'GitHub' },
    about: { main_text: '기술적 배경과 리더십으로 가치를 전달합니다.', agile_title: '애자일 리더십', agile_desc: '코칭 및 퍼실리테이션.', dev_title: '기술 전문성', dev_desc: '엔지니어와의 소통.', soft_title: '커뮤니케이션 및 전략', soft_desc: '이해관계자 관리 및 다문화 팀 리더십.' },
    projects: { subtitle: '앱 개발', stack_label: '스택:', descriptions: { armonix: "음악 교육 도구.", palabra: "전례 플랫폼.", ensayemos: "밴드 관리.", emaus: "교구 관리 시스템.", melodialab: "개발 스튜디오." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python 풀스택 개발자", period: "2025.03 – 현재", location: "칠레", description: ["모듈식 아키텍처.", "스크래핑 봇."], skills: ["Python", "Scrum"] },
      onikom: { company: "Onikom Latam", role: "시니어 스크럼 마스터", period: "2024.04 – 12", location: "멕시코", description: ["6개 팀 리딩.", "납기 준수 향상."], skills: ["Agile", "Leadership"] },
      soho: { company: "SOHO", role: "애자일 코치", period: "2022.04 – 2023.12", location: "칠레", description: ["애자일 전환.", "디자인 씽킹."], skills: ["Kanban", "Design Thinking"] },
      cencosud: { company: "Cencosud", role: "스크럼 마스터", period: "2018.03 – 2021.03", location: "칠레", description: ["핀테크 프로젝트.", "문화 확산."], skills: ["Agile"] }
    },
    music: { profile_label: '창의성', main_desc: '음악가 및 프로듀서.', discography_title: '디스코그래피', discography_desc: '앨범 2장.', production_title: '제작', production_desc: 'TV 음악.', listen_btn: 'Apple Music', studio_title: '스튜디오' },
    titles: { philosophy: '프로필', projects: '프로젝트', music: '음악', experience: '경력', contact: '문의' },
    footer: { title: '문의', subtitle: '프로젝트 문의.', rights: '판권 소유.', made_by: '제작', tech_by: 'React & Tailwind 로', copy_email: '이메일 복사', copied: '복사됨!', github: 'GitHub' }
  },
  zh: {
    nav: { home: '首页', philosophy: '理念', projects: '项目', music: '音乐', experience: '经验', contact_btn: '联系我' },
    hero: { role: '高级 Scrum Master', tagline_1: '敏捷领导力', tagline_2: '+ 技术视野', tagline_3: '创造结果。', synthesis: '结合敏捷管理和全栈技术专长。', cta_portfolio: '作品集', cta_linkedin: 'LinkedIn', years_exp: '年经验', albums: '专辑', teams: '团队', available: '可用', github: 'GitHub' },
    about: { main_text: '利用技术背景和领导力交付价值。', agile_title: '敏捷领导力', agile_desc: '团队辅导。', dev_title: '技术专长', dev_desc: '与工程师沟通。', soft_title: '沟通与策略', soft_desc: '利益相关者管理和多文化团队领导。' },
    projects: { subtitle: '应用开发', stack_label: '技术栈:', descriptions: { armonix: "音乐教育工具。", palabra: "礼仪平台。", ensayemos: "乐队管理。", emaus: "教区管理系统。", melodialab: "开发工作室。" } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "Python 全栈开发", period: "2025.03 – 至今", location: "智利", description: ["模块化架构。", "爬虫机器人。"], skills: ["Python"] },
      onikom: { company: "Onikom Latam", role: "高级 Scrum Master", period: "2024.04 – 12", location: "墨西哥", description: ["领导6个团队。", "提升交付效率。"], skills: ["Agile"] },
      soho: { company: "SOHO", role: "敏捷教练", period: "2022.04 – 2023.12", location: "智利", description: ["敏捷转型。", "设计思维。"], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "Scrum Master", period: "2018.03 – 2021.03", location: "智利", description: ["金融科技项目。", "推广敏捷文化。"], skills: ["Agile"] }
    },
    music: { profile_label: '创意', main_desc: '音乐家和制作人。', discography_title: '唱片', discography_desc: '2张专辑。', production_title: '制作', production_desc: '原创音乐。', listen_btn: 'Apple Music', studio_title: '工作室' },
    titles: { philosophy: '简介', projects: '项目', music: '音乐', experience: '经验', contact: '联系' },
    footer: { title: '联系', subtitle: '合作项目。', rights: '版权所有。', made_by: '制作', tech_by: '使用 React & Tailwind 由', copy_email: '复制邮箱', copied: '已复制！', github: 'GitHub' }
  },
  ar: {
    nav: { home: 'الرئيسية', philosophy: 'الفلسفة', projects: 'المشاريع', music: 'الموسيقى', experience: 'الخبرة', contact_btn: 'تواصل معي' },
    hero: { role: 'سكروم ماستر', tagline_1: 'قيادة أجايل', tagline_2: '+ رؤية تقنية', tagline_3: 'لتحقيق النتائج.', synthesis: 'الجمع بين إدارة أجايل والخبرة التقنية.', cta_portfolio: 'المحفظة', cta_linkedin: 'لينكد إن', years_exp: 'خبرة', albums: 'ألبومات', teams: 'فرق', available: 'متاح', github: 'GitHub' },
    about: { main_text: 'استخدام الخلفية التقنية والقيادة لتقديم القيمة.', agile_title: 'قيادة أجايل', agile_desc: 'تدريب الفرق.', dev_title: 'خبرة تقنية', dev_desc: 'التواصل مع المهندسين.', soft_title: 'الاتصال والاستراتيجية', soft_desc: 'إدارة أصحاب المصلحة والقيادة متعددة الثقافات.' },
    projects: { subtitle: 'تطوير تطبيقات', stack_label: 'التقنيات:', descriptions: { armonix: "أداة تعليمية موسيقية.", palabra: "منصة دينية.", ensayemos: "إدارة الفرق الموسيقية.", emaus: "نظام إدارة.", melodialab: "استوديو التطوير." } },
    jobs: {
      thomson: { company: "Thomson Reuters", role: "مطور بايثون", period: "مارس 2025 - الآن", location: "تشيلي", description: ["هيكلية معيارية.", "روبوتات."], skills: ["Python"] },
      onikom: { company: "Onikom Latam", role: "سكروم ماستر", period: "أبريل 2024 - ديسمبر 2024", location: "المكسيك", description: ["قيادة 6 فرق.", "تحسين التسليم."], skills: ["Agile"] },
      soho: { company: "SOHO", role: "مدرب أجايل", period: "2022 - 2023", location: "تشيلي", description: ["تحول أجايل.", "تفكير تصميمي."], skills: ["Kanban"] },
      cencosud: { company: "Cencosud", role: "سكروم ماستر", period: "2018 - 2021", location: "تشيلي", description: ["مشاريع مالية.", "ثقافة أجايل."], skills: ["Agile"] }
    },
    music: { profile_label: 'إبداع', main_desc: 'موسيقي ومنتج.', discography_title: 'أعمال', discography_desc: 'ألبومان.', production_title: 'إنتاج', production_desc: 'موسيقى أصلية.', listen_btn: 'Apple Music', studio_title: 'استوديو' },
    titles: { philosophy: 'الملف', projects: 'مشاريع', music: 'موسيقى', experience: 'خبرة', contact: 'تواصل' },
    footer: { title: 'تواصل', subtitle: 'لبدء مشروعك.', rights: 'جميع الحقوق محفوظة.', made_by: 'صنع بـ', tech_by: 'بواسطة React & Tailwind', copy_email: 'نسخ الإيميل', copied: 'تم النسخ!', github: 'GitHub' }
  }
};