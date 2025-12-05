// Version 1.1
import { Job, Project, NavItem, Translations } from './types';
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
  image: "https://picsum.photos/400/400", 
};

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Armonix.app",
    description: "Herramienta educativa musical interactiva con visualizador de acordes, Groovebox y secuenciador. Una de las apps musicales más completas desarrolladas localmente.",
    tags: ["React 18", "TailwindCSS", "Audio API", "Education"],
    link: "https://www.armonix.app",
    category: "hybrid",
    icon: <Music className="w-6 h-6 text-pink-400" />
  },
  {
    title: "La Palabra Diaria",
    description: "Plataforma litúrgica con lecturas diarias y reflexiones generadas por IA. Arquitectura moderna y estable.",
    tags: ["React 18", "Firebase", "AI Integration", "PWA"],
    link: "https://www.lapalabradiaria.com",
    category: "tech",
    icon: <BookOpen className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Ensayemos",
    description: "Gestión para bandas: votación de ensayos, setlists interactivos y repositorio de acordes. Resuelve problemas reales de logística musical.",
    tags: ["Firebase", "Real-time DB", "React", "Management"],
    link: "#",
    category: "hybrid",
    icon: <Mic2 className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Emaús",
    description: "Sistema integral de gestión parroquial: sacramentos, finanzas, mensajería estilo WhatsApp y red social interna.",
    tags: ["Complex System", "SaaS", "Finance", "Social"],
    link: "#",
    category: "tech",
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    title: "MelodIA La♭",
    description: "Mi estudio de desarrollo y portafolio experimental. Diseño moderno y estética cuidada.",
    tags: ["Portfolio", "Design", "UX/UI"],
    link: "https://www.melodialab.net",
    category: "tech",
    icon: <Code className="w-6 h-6 text-green-400" />
  }
];

// Experience Data
export const JOBS: Job[] = [
  {
    company: "Thomson Reuters",
    role: "Desarrollador Python Full Stack",
    period: "Marzo 2025 – Presente",
    location: "Santiago, Chile / Remoto",
    description: [
      "Arquitectura modular para automatización y rastreo de documentos regulatorios.",
      "Desarrollo de robots de scraping en Python integrados con SQL Server.",
      "Trabajo ágil con CI/CD y revisiones iterativas."
    ],
    skills: ["Python", "SQLAlchemy", "BeautifulSoup", "Git", "Scrum"]
  },
  {
    company: "Onikom Latam",
    role: "Scrum Master Senior",
    period: "Abril 2024 – Diciembre 2024",
    location: "Mexico / Remoto",
    description: [
      "Liderazgo de 6 equipos ágiles distribuidos desarrollando agentes IA y SaaS.",
      "Reducción de spill-overs en un 25% y mejora de entrega a tiempo en 30%.",
      "Estandarización de métricas ágiles y mentoría a Product Owners."
    ],
    skills: ["Agile Coaching", "Metrics", "Team Leadership", "AI Agents"]
  },
  {
    company: "SOHO (Gasco)",
    role: "Agile Coach",
    period: "Abril 2022 – Diciembre 2023",
    location: "Santiago, Chile",
    description: [
      "Transformación Ágil capacitando líderes en Scrum y Kanban.",
      "Facilitación de talleres de Design Thinking incrementando la innovación en 25%.",
      "Gestión visual y reducción de cuellos de botella."
    ],
    skills: ["Kanban", "Design Thinking", "Training", "Change Management"]
  },
  {
    company: "Cencosud Scotiabank",
    role: "Scrum Master / Business Partner",
    period: "Marzo 2018 – Marzo 2021",
    location: "Santiago, Chile",
    description: [
      "Gestión de proyectos tecnológicos en Riesgo y Finanzas.",
      "Incremento de finalización de sprints del 70% al 92%.",
      "Promoción de cultura ágil en áreas tradicionales."
    ],
    skills: ["Finance Tech", "Agile Adoption", "Team Building"]
  }
];

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
    projects: { subtitle: 'Desarrollo de Aplicaciones Modernas', stack_label: 'Stack Principal:' },
    music: {
      profile_label: 'Perfil Musical',
      main_desc: 'Mi música se mueve entre lo atmosférico, electrónico, rock melódico y cinematográfico. Inspirado por Pink Floyd, Steven Wilson, Muse y Radiohead.',
      discography_title: 'Discografía', discography_desc: '2 Álbumes completos y 4 Singles publicados en plataformas globales (Apple Music, Spotify). Producidos, grabados y mezclados íntegramente por mí.',
      production_title: 'Producción', production_desc: 'Trabajo con Logic Pro X, Arturia V Collection y sintetizadores analógicos virtuales. Música original para documentales, jingles y spots de TV.',
      listen_btn: 'Escuchar en Apple Music', studio_title: 'Estudio Virtual'
    },
    titles: { philosophy: 'Filosofía Híbrida', projects: 'Vibe Coding', music: 'Sonido & Atmósfera', experience: 'Experiencia Profesional', contact: 'Hablemos' },
    footer: { title: 'Hablemos', subtitle: 'Ya sea para potenciar tu equipo ágil, desarrollar una plataforma compleja o crear la música de tu próximo proyecto.', rights: 'Todos los derechos reservados.', made_by: 'Hecho con' }
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
    projects: { subtitle: 'Modern Application Development', stack_label: 'Main Stack:' },
    music: {
      profile_label: 'Musical Profile',
      main_desc: 'My music moves between atmospheric, electronic, melodic rock, and cinematic. Inspired by Pink Floyd, Steven Wilson, Muse, and Radiohead.',
      discography_title: 'Discography', discography_desc: '2 Full Albums and 4 Singles published on global platforms (Apple Music, Spotify). Produced, recorded, and mixed entirely by me.',
      production_title: 'Production', production_desc: 'Work with Logic Pro X, Arturia V Collection, and virtual analog synthesizers. Original music for documentaries, jingles, and TV spots.',
      listen_btn: 'Listen on Apple Music', studio_title: 'Virtual Studio'
    },
    titles: { philosophy: 'Hybrid Philosophy', projects: 'Vibe Coding', music: 'Sound & Atmosphere', experience: 'Professional Experience', contact: 'Let\'s Talk' },
    footer: { title: 'Let\'s Talk', subtitle: 'Whether to boost your agile team, develop a complex platform, or create music for your next project.', rights: 'All rights reserved.', made_by: 'Made with' }
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
    projects: { subtitle: 'Développement d\'Applications Modernes', stack_label: 'Stack Principal :' },
    music: {
      profile_label: 'Profil Musical', main_desc: 'Ma musique oscille entre l\'atmosphérique, l\'électronique et le rock mélodique.',
      discography_title: 'Discographie', discography_desc: '2 Albums et 4 Singles publiés. Produits et mixés par moi-même.',
      production_title: 'Production', production_desc: 'Musique originale pour documentaires et TV.',
      listen_btn: 'Écouter sur Apple Music', studio_title: 'Studio Virtuel'
    },
    titles: { philosophy: 'Philosophie Hybride', projects: 'Vibe Coding', music: 'Son & Atmosphère', experience: 'Expérience Professionnelle', contact: 'Parlons' },
    footer: { title: 'Parlons', subtitle: 'Pour booster votre équipe agile ou développer votre plateforme.', rights: 'Tous droits réservés.', made_by: 'Fait avec' }
  },
  it: {
    nav: { home: 'Home', philosophy: 'Filosofia', projects: 'Progetti', music: 'Musica', experience: 'Esperienza', contact_btn: 'Contattami' },
    hero: { 
      role: 'Senior Scrum Master (7+ Anni) | Agile Coach | Full Stack', 
      tagline_1: 'Tecnologia', tagline_2: '+ Musica', tagline_3: 'allo stesso livello.',
      synthesis: 'Costruisco tecnologia e musica con la stessa filosofia: chiarezza, emozione e scopo.', 
      cta_portfolio: 'Vedi Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Anni Exp Agile', albums: 'Album', teams: 'Team Guidati', available: 'Disponibile per nuovi progetti' 
    },
    about: {
      main_text: 'Non vivo queste aree separatamente. Penso come sviluppatore, guido come agilista, creo come musicista.',
      agile_title: 'Leadership Agile (7+ Anni)', agile_desc: 'Facilitazione esperta, metriche e coaching. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'App moderne con React 18, Tailwind e Python.',
      creative_title: 'Creatività & Musica', creative_desc: 'Composizione sonora e design digitale.'
    },
    projects: { subtitle: 'Sviluppo Applicazioni Moderne', stack_label: 'Stack Principale:' },
    music: {
      profile_label: 'Profilo Musicale', main_desc: 'Musica atmosferica, elettronica e rock melodico.',
      discography_title: 'Discografia', discography_desc: '2 Album e 4 Singoli pubblicati globalmente.',
      production_title: 'Produzione', production_desc: 'Musica originale per documentari e TV.',
      listen_btn: 'Ascolta su Apple Music', studio_title: 'Studio Virtuale'
    },
    titles: { philosophy: 'Filosofia Ibrida', projects: 'Vibe Coding', music: 'Suono & Atmosfera', experience: 'Esperienza Professionale', contact: 'Parliamo' },
    footer: { title: 'Parliamo', subtitle: 'Per potenziare il tuo team agile o creare la tua piattaforma.', rights: 'Tutti i diritti riservati.', made_by: 'Fatto con' }
  },
  de: {
    nav: { home: 'Start', philosophy: 'Philosophie', projects: 'Projekte', music: 'Musik', experience: 'Erfahrung', contact_btn: 'Kontaktieren' },
    hero: { 
      role: 'Senior Scrum Master (7+ Jahre) | Agile Coach | Full Stack', 
      tagline_1: 'Technologie', tagline_2: '+ Musik', tagline_3: 'auf gleichem Niveau.',
      synthesis: 'Ich baue Technologie und Musik mit der gleichen Philosophie: Klarheit, Emotion und Zweck.', 
      cta_portfolio: 'Portfolio', cta_linkedin: 'LinkedIn', years_exp: 'Jahre Agile Exp', albums: 'Alben', teams: 'Teams', available: 'Verfügbar für Projekte' 
    },
    about: {
      main_text: 'Ich denke wie ein Entwickler, leite wie ein Agilist und kreiere wie ein Musiker.',
      agile_title: 'Agile Führung (7+ Jahre)', agile_desc: 'Experten-Facilitation, Metriken, Coaching. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'Moderne Apps mit React 18, Tailwind und Python.',
      creative_title: 'Kreativität & Musik', creative_desc: 'Sound-Atmosphären und digitales Design.'
    },
    projects: { subtitle: 'Moderne App-Entwicklung', stack_label: 'Haupt-Stack:' },
    music: {
      profile_label: 'Musikprofil', main_desc: 'Atmosphärischer, elektronischer und melodischer Rock.',
      discography_title: 'Diskografie', discography_desc: '2 Alben und 4 Singles weltweit veröffentlicht.',
      production_title: 'Produktion', production_desc: 'Originalmusik für Dokumentationen und TV.',
      listen_btn: 'Auf Apple Music hören', studio_title: 'Virtuelles Studio'
    },
    titles: { philosophy: 'Hybride Philosophie', projects: 'Vibe Coding', music: 'Klang & Atmosphäre', experience: 'Berufserfahrung', contact: 'Kontakt' },
    footer: { title: 'Kontakt', subtitle: 'Um Ihr agiles Team zu stärken oder Ihre Plattform zu entwickeln.', rights: 'Alle Rechte vorbehalten.', made_by: 'Gemacht mit' }
  },
  ja: {
    nav: { home: 'ホーム', philosophy: '哲学', projects: 'プロジェクト', music: '音楽', experience: '経験', contact_btn: 'お問い合わせ' },
    hero: { 
      role: 'シニアスクラムマスター (7年以上の経験) | アジャイルコーチ', 
      tagline_1: 'テクノロジー', tagline_2: '+ 音楽', tagline_3: '同じレベルで。',
      synthesis: '明快さ、感情、目的という同じ哲学でテクノロジーと音楽を構築します。', 
      cta_portfolio: 'ポートフォリオ', cta_linkedin: 'LinkedIn', years_exp: '経験年数', albums: 'アルバム', teams: 'チーム', available: '新規案件募集中' 
    },
    about: {
      main_text: '開発者のように考え、アジャイル実践者のように導き、ミュージシャンのように創造します。',
      agile_title: 'アジャイルリーダーシップ (7年以上)', agile_desc: 'ファシリテーション、指標管理、チームコーチング。認定スクラムマスター。',
      dev_title: 'フルスタック開発', dev_desc: 'React 18、Tailwind、Pythonを使用した最新アプリ開発。',
      creative_title: '創造性と音楽', creative_desc: 'サウンドの雰囲気作りとデジタル体験デザイン。'
    },
    projects: { subtitle: '最新アプリケーション開発', stack_label: '主な技術スタック:' },
    music: {
      profile_label: '音楽プロフィール', main_desc: 'アトモスフェリック、エレクトロニック、メロディックロック。',
      discography_title: 'ディスコグラフィー', discography_desc: '2枚のアルバムと4枚のシングルを世界配信中。',
      production_title: '制作', production_desc: 'ドキュメンタリーやTVスポット向けのオリジナル音楽。',
      listen_btn: 'Apple Musicで聴く', studio_title: 'バーチャルスタジオ'
    },
    titles: { philosophy: 'ハイブリッド哲学', projects: 'Vibe Coding', music: 'サウンド＆雰囲気', experience: '職務経歴', contact: 'お問い合わせ' },
    footer: { title: 'お問い合わせ', subtitle: 'アジャイルチームの強化やプラットフォーム開発についてご相談ください。', rights: '無断転載を禁じます。', made_by: '作成者' }
  },
  ko: {
    nav: { home: '홈', philosophy: '철학', projects: '프로젝트', music: '음악', experience: '경력', contact_btn: '문의하기' },
    hero: { 
      role: '시니어 스크럼 마스터 (7년+) | 애자일 코치', 
      tagline_1: '기술', tagline_2: '+ 음악', tagline_3: '동일한 수준으로.',
      synthesis: '명확성, 감정, 목적이라는 동일한 철학으로 기술과 음악을 만듭니다.', 
      cta_portfolio: '포트폴리오', cta_linkedin: 'LinkedIn', years_exp: '경력', albums: '앨범', teams: '팀', available: '새 프로젝트 가능' 
    },
    about: {
      main_text: '개발자처럼 생각하고, 애자일 전문가처럼 이끌며, 음악가처럼 창조합니다.',
      agile_title: '애자일 리더십 (7년+)', agile_desc: '퍼실리테이션, 지표, 팀 코칭. 공인 스크럼 마스터.',
      dev_title: '풀스택 개발', dev_desc: 'React 18, Tailwind, Python을 활용한 최신 앱 개발.',
      creative_title: '창의성 & 음악', creative_desc: '사운드 분위기 조성 및 디지털 경험 디자인.'
    },
    projects: { subtitle: '최신 애플리케이션 개발', stack_label: '메인 스택:' },
    music: {
      profile_label: '음악 프로필', main_desc: '애트머스페릭, 일렉트로닉, 멜로딕 록 스타일.',
      discography_title: '디스코그래피', discography_desc: '2개의 정규 앨범과 4개의 싱글 발매.',
      production_title: '프로덕션', production_desc: '다큐멘터리 및 TV 광고를 위한 오리지널 음악.',
      listen_btn: 'Apple Music에서 듣기', studio_title: '가상 스튜디오'
    },
    titles: { philosophy: '하이브리드 철학', projects: 'Vibe Coding', music: '사운드 & 분위기', experience: '전문 경력', contact: '연락하기' },
    footer: { title: '연락하기', subtitle: '애자일 팀 강화 또는 플랫폼 개발 문의.', rights: 'All rights reserved.', made_by: 'Made with' }
  },
  zh: {
    nav: { home: '首页', philosophy: '理念', projects: '项目', music: '音乐', experience: '经验', contact_btn: '联系我' },
    hero: { 
      role: '高级 Scrum Master (7年+) | 敏捷教练', 
      tagline_1: '技术', tagline_2: '+ 音乐', tagline_3: '同等水平。',
      synthesis: '我用同样的理念构建技术和音乐：清晰、情感和目的。', 
      cta_portfolio: '查看作品', cta_linkedin: 'LinkedIn', years_exp: '年经验', albums: '专辑', teams: '团队', available: '接受新项目' 
    },
    about: {
      main_text: '我像开发者一样思考，像敏捷专家一样领导，像音乐家一样创造。',
      agile_title: '敏捷领导力 (7年+)', agile_desc: '专家引导，指标，团队辅导。认证 Scrum Master。',
      dev_title: '全栈开发', dev_desc: '专注于使用 React 18, Tailwind 和 Python 开发现代应用。',
      creative_title: '创意与音乐', creative_desc: '声音氛围构成与数字体验设计。'
    },
    projects: { subtitle: '现代应用开发', stack_label: '主要技术栈：' },
    music: {
      profile_label: '音乐档案', main_desc: '我的音乐风格介于氛围、电子和旋律摇滚之间。',
      discography_title: '唱片', discography_desc: '已发布2张专辑和4首单曲。',
      production_title: '制作', production_desc: '纪录片和电视广告原创音乐。',
      listen_btn: '在 Apple Music 收听', studio_title: '虚拟工作室'
    },
    titles: { philosophy: '混合理念', projects: 'Vibe Coding', music: '声音与氛围', experience: '职业经验', contact: '联系我' },
    footer: { title: '联系我', subtitle: '提升您的敏捷团队或开发复杂平台。', rights: '保留所有权利。', made_by: '制作：' }
  },
  ar: {
    nav: { home: 'الرئيسية', philosophy: 'الفلسفة', projects: 'المشاريع', music: 'الموسيقى', experience: 'الخبرة', contact_btn: 'تواصل معي' },
    hero: { 
      role: 'سكروم ماستر (7+ سنوات) | مدرب أجايل', 
      tagline_1: 'التكنولوجيا', tagline_2: '+ الموسيقى', tagline_3: 'على نفس المستوى.',
      synthesis: 'أبني التكنولوجيا والموسيقى بنفس الفلسفة: الوضوح والعاطفة والهدف.', 
      cta_portfolio: 'المحفظة', cta_linkedin: 'لينكد إن', years_exp: 'سنوات خبرة', albums: 'ألبومات', teams: 'فرق', available: 'متاح للعمل' 
    },
    about: {
      main_text: 'أفكر كمطور، وأقود كخبير أجايل، وأبدع كموسيقي.',
      agile_title: 'قيادة أجايل (7+ سنوات)', agile_desc: 'تيسير خبير، مقاييس، تدريب الفرق. سكروم ماستر معتمد.',
      dev_title: 'مطور شامل', dev_desc: 'تطبيقات حديثة بـ React 18 و Python.',
      creative_title: 'الإبداع والموسيقى', creative_desc: 'تأليف أجواء صوتية وتصميم تجارب رقمية.'
    },
    projects: { subtitle: 'تطوير تطبيقات حديثة', stack_label: 'التقنيات الأساسية:' },
    music: {
      profile_label: 'الملف الموسيقي', main_desc: 'موسيقاي بين الجو العام والإلكتروني والروك.',
      discography_title: 'الأعمال', discography_desc: 'ألبومان و 4 أغاني فردية منشورة عالمياً.',
      production_title: 'الإنتاج', production_desc: 'موسيقى أصلية للأفلام الوثائقية والإعلانات.',
      listen_btn: 'استمع على Apple Music', studio_title: 'استوديو افتراضي'
    },
    titles: { philosophy: 'فلسفة هجينة', projects: 'البرمجة', music: 'الصوت', experience: 'الخبرة', contact: 'لنتحدث' },
    footer: { title: 'تواصل معي', subtitle: 'لتعزيز فريقك أو تطوير منصتك.', rights: 'جميع الحقوق محفوظة.', made_by: 'صنع بـ' }
  },
  uk: {
    nav: { home: 'Головна', philosophy: 'Філософія', projects: 'Проєкти', music: 'Музика', experience: 'Досвід', contact_btn: 'Зв\'язатися' },
    hero: { 
      role: 'Senior Scrum Master (7+ років) | Agile Coach', 
      tagline_1: 'Технології', tagline_2: '+ Музика', tagline_3: 'на одному рівні.',
      synthesis: 'Створюю технології та музику з філософією ясності та емоцій.', 
      cta_portfolio: 'Портфоліо', cta_linkedin: 'LinkedIn', years_exp: 'Років досвіду', albums: 'Альбоми', teams: 'Команди', available: 'Доступний' 
    },
    about: {
      main_text: 'Думаю як розробник, керую як Agile-коуч, створюю як музикант.',
      agile_title: 'Agile лідерство (7+ років)', agile_desc: 'Фасилітація, метрики, коучинг команд. Certified Scrum Master.',
      dev_title: 'Full Stack Dev', dev_desc: 'Сучасні додатки на React 18, Tailwind та Python.',
      creative_title: 'Креативність та Музика', creative_desc: 'Створення звукових атмосфер та цифрового дизайну.'
    },
    projects: { subtitle: 'Сучасна розробка додатків', stack_label: 'Основний стек:' },
    music: {
      profile_label: 'Музичний профіль', main_desc: 'Моя музика - це суміш атмосферного, електронного та року.',
      discography_title: 'Дискографія', discography_desc: '2 альбоми та 4 сингли на глобальних платформах.',
      production_title: 'Продакшн', production_desc: 'Оригінальна музика для документалістики та ТБ.',
      listen_btn: 'Слухати на Apple Music', studio_title: 'Віртуальна студія'
    },
    titles: { philosophy: 'Гібридна філософія', projects: 'Кодинг', music: 'Звук', experience: 'Досвід', contact: 'Контакти' },
    footer: { title: 'Контакти', subtitle: 'Для розвитку вашої команди чи платформи.', rights: 'Всі права захищено.', made_by: 'Зроблено з' }
  },
  hi: {
    nav: { home: 'होम', philosophy: 'दर्शन', projects: 'प्रोजेक्ट्स', music: 'संगीत', experience: 'अनुभव', contact_btn: 'संपर्क करें' },
    hero: { 
      role: 'सीनियर स्क्रम मास्टर (7+ वर्ष) | एतजाइल कोच', 
      tagline_1: 'तकनीक', tagline_2: '+ संगीत', tagline_3: 'एक ही स्तर पर।',
      synthesis: 'मैं स्पष्टता और उद्देश्य के साथ तकनीक और संगीत बनाता हूं।', 
      cta_portfolio: 'पोर्टफोलियो', cta_linkedin: 'लिंक्डइन', years_exp: 'अनुभव', albums: 'एल्बम', teams: 'टीमें', available: 'उपलब्ध' 
    },
    about: {
      main_text: 'मैं एक डेवलपर की तरह सोचता हूं, एक एजिलिस्ट की तरह नेतृत्व करता हूं और एक संगीतकार की तरह बनाता हूं।',
      agile_title: 'एजाइल नेतृत्व (7+ वर्ष)', agile_desc: 'विशेषज्ञ सुविधा, मेट्रिक्स, टीम कोचिंग। प्रमाणित स्क्रम मास्टर।',
      dev_title: 'फुल स्टैक देव', dev_desc: 'React 18 और Python के साथ आधुनिक ऐप्स।',
      creative_title: 'रचनात्मकता और संगीत', creative_desc: 'ध्वनि वायुमंडल और डिजिटल डिजाइन की रचना।'
    },
    projects: { subtitle: 'आधुनिक ऐप विकास', stack_label: 'मुख्य स्टैक:' },
    music: {
      profile_label: 'संगीत प्रोफ़ाइल', main_desc: 'मेरा संगीत वायुमंडलीय, इलेक्ट्रॉनिक और रॉक के बीच चलता है।',
      discography_title: 'डिस्कोग्राफी', discography_desc: '2 एल्बम और 4 सिंगल्स।',
      production_title: 'उत्पादन', production_desc: 'वृत्तचित्रों और टीवी के लिए मूल संगीत।',
      listen_btn: 'Apple Music पर सुनें', studio_title: 'वर्चुअल स्टूडियो'
    },
    titles: { philosophy: 'हाइब्रिड दर्शन', projects: 'Vibe Coding', music: 'ध्वनि', experience: 'अनुभव', contact: 'संपर्क' },
    footer: { title: 'बातचीत करें', subtitle: 'अपनी टीम को बढ़ावा देने के लिए।', rights: 'सर्वाधिकार सुरक्षित।', made_by: 'के साथ बनाया' }
  },
  ta: {
    nav: { home: 'முகப்பு', philosophy: 'தத்துவம்', projects: 'திட்டங்கள்', music: 'இசை', experience: 'அனுபவம்', contact_btn: 'தொடர்பு' },
    hero: { 
      role: 'சீனியர் ஸ்க்ரம் மாஸ்டர் (7+ ஆண்டுகள்)', 
      tagline_1: 'தொழில்நுட்பம்', tagline_2: '+ இசை', tagline_3: 'ஒரே அளவில்.',
      synthesis: 'தொழில்நுட்பம் மற்றும் இசையை ஒரே தத்துவத்துடன் உருவாக்குகிறேன்.', 
      cta_portfolio: 'போர்ட்ஃபோலியோ', cta_linkedin: 'LinkedIn', years_exp: 'அனுபவம்', albums: 'ஆல்பங்கள்', teams: 'அணிகள்', available: 'கிடைக்கும்' 
    },
    about: {
      main_text: 'நான் ஒரு டெவலப்பரைப் போல சிந்திக்கிறேன், இசைக்கலைஞனைப் போல உருவாக்குகிறேன்.',
      agile_title: 'Agile தலைமை (7+ ஆண்டுகள்)', agile_desc: 'அணி பயிற்சி, ஸ்க்ரம் மாஸ்டர்.',
      dev_title: 'முழு அடுக்கு', dev_desc: 'நவீன பயன்பாடுகள் உருவாக்கம்.',
      creative_title: 'படைப்பாற்றல் & இசை', creative_desc: 'ஒலி சூழல் மற்றும் வடிவமைப்பு.'
    },
    projects: { subtitle: 'நவீன பயன்பாட்டு மேம்பாடு', stack_label: 'முக்கிய தொழில்நுட்பம்:' },
    music: {
      profile_label: 'இசை சுயவிவரம்', main_desc: 'எனது இசை சூழல் மற்றும் ராக் இடையே உள்ளது.',
      discography_title: 'இசைத்தொகுப்பு', discography_desc: '2 ஆல்பங்கள் மற்றும் 4 பாடல்கள்.',
      production_title: 'தயாரிப்பு', production_desc: 'ஆவணப்படங்களுக்கான அசல் இசை.',
      listen_btn: 'Apple Music இல் கேட்க', studio_title: 'மெய்நிகர் ஸ்டுடியோ'
    },
    titles: { philosophy: 'தத்துவம்', projects: 'திட்டங்கள்', music: 'இசை', experience: 'அனுபவம்', contact: 'தொடர்புக்கு' },
    footer: { title: 'பேசுவோம்', subtitle: 'உங்கள் திட்டத்தை மேம்படுத்த.', rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.', made_by: 'உருவாக்கியவர்' }
  },
  gu: {
    nav: { home: 'હોમ', philosophy: 'ફિલોસોફી', projects: 'પ્રોજેક્ટ્સ', music: 'સંગીત', experience: 'અનુભવ', contact_btn: 'સંપર્ક' },
    hero: { 
      role: 'સિનિયર સ્ક્રમ માસ્ટર (7+ વર્ષ)', 
      tagline_1: 'ટેકનોલોજી', tagline_2: '+ સંગીત', tagline_3: 'એક જ સ્તર પર.',
      synthesis: 'હું સ્પષ્ટતા અને હેતુ સાથે ટેકનોલોજી અને સંગીત બનાવું છું.', 
      cta_portfolio: 'પોર્ટફોલિયો', cta_linkedin: 'LinkedIn', years_exp: 'અનુભવ', albums: 'આલ્બમ્સ', teams: 'ટીમ્સ', available: 'ઉપલબ્ધ' 
    },
    about: {
      main_text: 'હું ડેવલપરની જેમ વિચારું છું અને સંગીતકારની જેમ સર્જન કરું છું.',
      agile_title: 'Agile નેતૃત્વ (7+ વર્ષ)', agile_desc: 'ટીમ કોચિંગ, સ્ક્રમ માસ્ટર.',
      dev_title: 'ફુલ સ્ટેક', dev_desc: 'આધુનિક એપ્સ ડેવલપમેન્ટ.',
      creative_title: 'સર્જનાત્મકતા અને સંગીત', creative_desc: 'સાઉન્ડ અને ડિઝાઇન.'
    },
    projects: { subtitle: 'આધુનિક એપ્લિકેશન વિકાસ', stack_label: 'મુખ્ય સ્ટેક:' },
    music: {
      profile_label: 'સંગીત પ્રોફાઇલ', main_desc: 'મારું સંગીત વાતાવરણીય અને રોક છે.',
      discography_title: 'ડિસ્કોગ્રાફી', discography_desc: '2 આલ્બમ્સ પ્રકાશિત.',
      production_title: 'ઉત્પાદન', production_desc: 'ઓરિજિનલ મ્યુઝિક.',
      listen_btn: 'Apple Music પર સાંભળો', studio_title: 'વર્ચ્યુઅલ સ્ટુડિયો'
    },
    titles: { philosophy: 'ફિલોસોફી', projects: 'પ્રોજેક્ટ્સ', music: 'સંગીત', experience: 'અનુભવ', contact: 'સંપર્ક' },
    footer: { title: 'વાત કરીએ', subtitle: 'તમારા પ્રોજેક્ટ માટે.', rights: 'સર્વાધિકાર સુરક્ષિત.', made_by: 'દ્વારા બનાવેલ' }
  },
  arn: {
    nav: { home: 'Tuwün', philosophy: 'Rakiduam', projects: 'Kudaw', music: 'Ülkantun', experience: 'Kimün', contact_btn: 'Nütramkayaiñ' },
    hero: { 
      role: 'Fütra Scrum Master (7+ Tripantu) | Agile Coach', 
      tagline_1: 'Kimün', tagline_2: '+ Ülkantun', tagline_3: 'kiñe mülwen mu.',
      synthesis: 'Dewman kimün ka ülkantun kiñe rakiduam mu: ad, piwke ka zugu.', 
      cta_portfolio: 'Pepen Kudaw', cta_linkedin: 'LinkedIn', years_exp: 'Tripantu Kimün', albums: 'Ülkantun', teams: 'Trowün', available: 'Mülelay ñi kudaw' 
    },
    about: {
      main_text: 'Rakiduamkan kiñe dewmafe reke, gvnenian kiñe agile reke, ka dewman kiñe ülkantufe reke.',
      agile_title: 'Agile Longko (7+ Tripantu)', agile_desc: 'Kimün, metrics, team coaching.',
      dev_title: 'Full Stack', dev_desc: 'We kudaw React 18, Tailwind ka Python engu.',
      creative_title: 'Rakiduam ka Ülkantun', creative_desc: 'Zugu ka adkan.'
    },
    projects: { subtitle: 'We Kudaw Dewman', stack_label: 'Fütra Kudaw:' },
    music: {
      profile_label: 'Ülkantun Kimün', main_desc: 'Tañi ülkantun müley wenu ka mapu.',
      discography_title: 'Ülkantun', discography_desc: '2 Fütra Ülkantun.',
      production_title: 'Dewman', production_desc: 'We ülkantun.',
      listen_btn: 'Allkütun Apple Music', studio_title: 'Wenu Kudaw'
    },
    titles: { philosophy: 'Epu Rakiduam', projects: 'Vibe Coding', music: 'Zugu ka Mawida', experience: 'Kudaw Kimün', contact: 'Nütramkayaiñ' },
    footer: { title: 'Nütramkayaiñ', subtitle: 'Kudawal tami trowün.', rights: 'Kom zugu nniey.', made_by: 'Dewmay' }
  }
};