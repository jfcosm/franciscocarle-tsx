import React, { ReactNode } from 'react';
import {
  Terminal,
  Code,
  Music,
  BookOpen,
  Mic2,
  Users,
  Globe,
  Laptop,
  Database,
  Cpu,
  Sparkles,
  Rocket,
  Shield,
  Zap,
  Layers,
  Disc,
  Headphones,
  Guitar,
  Piano,
  Speaker,
} from 'lucide-react';

export const AVAILABLE_ICONS = [
  { name: 'Terminal', component: Terminal, label: 'Terminal / CLI' },
  { name: 'Code', component: Code, label: 'Código / Dev' },
  { name: 'Music', component: Music, label: 'Música / Audio' },
  { name: 'BookOpen', component: BookOpen, label: 'Libro / Documentación' },
  { name: 'Mic2', component: Mic2, label: 'Micrófono / Audio' },
  { name: 'Users', component: Users, label: 'Comunidad / Usuarios' },
  { name: 'Globe', component: Globe, label: 'Web / Global' },
  { name: 'Laptop', component: Laptop, label: 'Laptop / UI' },
  { name: 'Database', component: Database, label: 'Base de Datos' },
  { name: 'Cpu', component: Cpu, label: 'CPU / Infra' },
  { name: 'Sparkles', component: Sparkles, label: 'IA / Magia' },
  { name: 'Rocket', component: Rocket, label: 'Lanzamiento' },
  { name: 'Shield', component: Shield, label: 'Seguridad' },
  { name: 'Zap', component: Zap, label: 'Rápido / Performance' },
  { name: 'Layers', component: Layers, label: 'Arquitectura' },
  { name: 'Disc', component: Disc, label: 'Disco / Producción' },
  { name: 'Headphones', component: Headphones, label: 'Auriculares' },
  { name: 'Guitar', component: Guitar, label: 'Guitarra' },
  { name: 'Piano', component: Piano, label: 'Teclado' },
];

interface IconRendererProps {
  name?: string;
  className?: string;
  fallbackIcon?: ReactNode;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-6 h-6', fallbackIcon }) => {
  if (!name) return fallbackIcon ? <>{fallbackIcon}</> : <Code className={className} />;

  switch (name) {
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Code':
      return <Code className={className} />;
    case 'Music':
      return <Music className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Mic2':
      return <Mic2 className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Laptop':
      return <Laptop className={className} />;
    case 'Database':
      return <Database className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Rocket':
      return <Rocket className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Disc':
      return <Disc className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'Guitar':
      return <Guitar className={className} />;
    case 'Piano':
      return <Piano className={className} />;
    case 'Speaker':
      return <Speaker className={className} />;
    default:
      return fallbackIcon ? <>{fallbackIcon}</> : <Code className={className} />;
  }
};
