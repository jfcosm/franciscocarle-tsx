import React, { useState } from 'react';
import { 
  Code, 
  Plus, 
  Trash2, 
  Edit3, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Save, 
  Check, 
  X, 
  Languages, 
  FolderPlus
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { Project, LanguageCode } from '../../types';
import { IconRenderer, AVAILABLE_ICONS } from '../IconRenderer';
import { ConfirmModal } from './ConfirmModal';

export const ProjectsEditor: React.FC = () => {
  const { data, updateProjects, addProject, updateProject, deleteProject, updateTranslations } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);
  const [deletingProject, setDeletingProject] = useState<{ id: string; title: string } | null>(null);

  const projectsTitle = data.translations[selectedLang]?.titles?.projects || 'Portafolio Técnico';
  const projectsSubtitle = data.translations[selectedLang]?.projects?.subtitle || 'Proyectos de Desarrollo y Gestión';
  const stackLabel = data.translations[selectedLang]?.projects?.stack_label || 'Stack Principal:';

  const [headerForm, setHeaderForm] = useState({
    title: projectsTitle,
    subtitle: projectsSubtitle,
    stackLabel: stackLabel,
  });

  // Project form state
  const [formData, setFormData] = useState<Project & { visible?: boolean; iconName?: string }>({
    id: '',
    title: '',
    description: '',
    tags: [],
    link: 'https://',
    category: 'tech',
    visible: true,
    iconName: 'Code',
  });
  const [tagsInput, setTagsInput] = useState('');

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    setHeaderForm({
      title: data.translations[lang]?.titles?.projects || 'Portafolio Técnico',
      subtitle: data.translations[lang]?.projects?.subtitle || 'Proyectos de Desarrollo y Gestión',
      stackLabel: data.translations[lang]?.projects?.stack_label || 'Stack Principal:',
    });
  };

  const handleHeaderSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'titles', {
      ...data.translations[selectedLang]?.titles,
      projects: headerForm.title,
    });
    updateTranslations(selectedLang, 'projects', {
      ...data.translations[selectedLang]?.projects,
      subtitle: headerForm.subtitle,
      stack_label: headerForm.stackLabel,
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const startEdit = (p: Project & { visible?: boolean; iconName?: string }) => {
    const desc = data.translations[selectedLang]?.projects?.descriptions?.[p.id] || p.description || '';
    setEditingId(p.id);
    setIsAddingNew(false);
    setFormData({
      ...p,
      description: desc,
      iconName: p.iconName || 'Code',
    });
    setTagsInput(p.tags.join(', '));
  };

  const startAddNew = () => {
    setIsAddingNew(true);
    setEditingId(null);
    const newId = `project-${Date.now().toString().slice(-4)}`;
    setFormData({
      id: newId,
      title: '',
      description: '',
      tags: ['React', 'TypeScript'],
      link: 'https://',
      category: 'tech',
      visible: true,
      iconName: 'Code',
    });
    setTagsInput('React, TypeScript');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAddingNew(false);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    const cleanId = (formData.id.trim() || `proj-${Date.now().toString().slice(-4)}`)
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, '-');

    const projectPayload = {
      ...formData,
      id: isAddingNew ? cleanId : formData.id,
      tags: cleanTags.length > 0 ? cleanTags : ['React', 'Tech'],
      link: formData.link?.trim() || '#',
      visible: formData.visible !== false,
      iconName: formData.iconName || 'Code',
    };

    if (isAddingNew) {
      addProject(projectPayload, selectedLang, formData.description);
    } else if (editingId) {
      updateProject(editingId, projectPayload, selectedLang, formData.description);
    }

    setEditingId(null);
    setIsAddingNew(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };



  const moveProject = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === data.projects.length - 1)
    ) {
      return;
    }
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const current = [...data.projects];
    const temp = current[index];
    current[index] = current[targetIndex];
    current[targetIndex] = temp;
    updateProjects(current);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Section Title editor */}
      <form onSubmit={handleHeaderSave} className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-primary-500" />
              Gestor de Proyectos y Portafolio
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Agrega, edita, oculta o reordena los proyectos de desarrollo y plataformas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <Languages className="w-4 h-4 text-slate-400 ml-2" />
              <button
                type="button"
                onClick={() => handleLangChange('es')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${selectedLang === 'es' ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500'}`}
              >
                Español (ES)
              </button>
              <button
                type="button"
                onClick={() => handleLangChange('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${selectedLang === 'en' ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500'}`}
              >
                Inglés (EN)
              </button>
            </div>

            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:bg-slate-800 dark:hover:bg-white transition-colors"
            >
              {savedMessage ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>Guardar Títulos</span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Título de Sección ({selectedLang.toUpperCase()})</label>
            <input
              type="text"
              value={headerForm.title}
              onChange={(e) => setHeaderForm(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subtítulo ({selectedLang.toUpperCase()})</label>
            <input
              type="text"
              value={headerForm.subtitle}
              onChange={(e) => setHeaderForm(prev => ({ ...prev, subtitle: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Etiqueta de Stack ({selectedLang.toUpperCase()})</label>
            <input
              type="text"
              value={headerForm.stackLabel}
              onChange={(e) => setHeaderForm(prev => ({ ...prev, stackLabel: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
            />
          </div>
        </div>
      </form>

      {/* Add New Project Button */}
      {!editingId && !isAddingNew && (
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Proyectos Registrados ({data.projects.length})
          </h3>
          <button
            onClick={startAddNew}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white text-sm font-semibold shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Nuevo Proyecto</span>
          </button>
        </div>
      )}

      {/* Project Form (Edit / Create) */}
      {(editingId || isAddingNew) && (
        <form onSubmit={handleProjectSubmit} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary-500/50 shadow-xl space-y-6 animate-scale-in">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <FolderPlus className="w-5 h-5 text-primary-500" />
              {isAddingNew ? 'Crear Nuevo Proyecto' : `Editando Proyecto: ${formData.title}`}
            </h3>
            <button
              type="button"
              onClick={cancelEdit}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">ID Único (slug)</label>
                <input
                  type="text"
                  value={formData.id}
                  disabled={!isAddingNew}
                  onChange={(e) => setFormData(prev => ({ ...prev, id: e.target.value.toLowerCase().replace(/\s+/g, '-') }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-mono disabled:opacity-60 outline-none"
                  placeholder="ej: cyberstage"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Título del Proyecto</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold outline-none"
                  placeholder="Ej: CyberStage"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
                >
                  <option value="tech">Tech / Desarrollo</option>
                  <option value="music">Música / Audio</option>
                  <option value="hybrid">Híbrido (Tech + Música)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Enlace / Demo URL</label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-mono outline-none"
                  placeholder="https://... o #"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Descripción ({selectedLang.toUpperCase()})
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
                  placeholder="Descripción detallada de la solución técnica..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Tecnologías y Tags (Separados por coma)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
                  placeholder="React 18, TailwindCSS, Firebase, DevSecOps"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
                  Icono Visual Destacado
                </label>
                <div className="grid grid-cols-6 gap-2 max-h-36 overflow-y-auto p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                  {AVAILABLE_ICONS.map((ic) => (
                    <button
                      type="button"
                      key={ic.name}
                      onClick={() => setFormData(prev => ({ ...prev, iconName: ic.name }))}
                      title={ic.label}
                      className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all ${formData.iconName === ic.name ? 'bg-primary-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                      <IconRenderer name={ic.name} className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300">
              <input
                type="checkbox"
                checked={formData.visible !== false}
                onChange={(e) => setFormData(prev => ({ ...prev, visible: e.target.checked }))}
                className="w-4 h-4 rounded text-primary-600 focus:ring-primary-500"
              />
              <span>Mostrar en la landing page</span>
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold text-xs shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>{isAddingNew ? 'Crear Proyecto' : 'Actualizar Proyecto'}</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Projects List Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, index) => {
          const isFirst = index === 0;
          const isLast = index === data.projects.length - 1;
          const desc = data.translations[selectedLang]?.projects?.descriptions?.[project.id] || project.description || '';
          const isVisible = project.visible !== false;

          return (
            <div
              key={project.id}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${isVisible ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm' : 'bg-slate-50 dark:bg-slate-950/40 border-dashed border-slate-300 dark:border-slate-800 opacity-60'}`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 rounded-xl border border-primary-200 dark:border-primary-800">
                    <IconRenderer name={project.iconName || 'Code'} className="w-5 h-5" fallbackIcon={project.icon} />
                  </div>

                  {/* Actions (Move, Edit, Delete) */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => moveProject(index, 'up')}
                      disabled={isFirst}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 disabled:opacity-20"
                      title="Mover arriba"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => moveProject(index, 'down')}
                      disabled={isLast}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 disabled:opacity-20"
                      title="Mover abajo"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => updateProject(project.id, { visible: !isVisible })}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-1"
                      title={isVisible ? 'Ocultar' : 'Mostrar'}
                    >
                      {isVisible ? <Eye className="w-4 h-4 text-emerald-500" /> : <EyeOff className="w-4 h-4 text-slate-400" />}
                    </button>
                    <button
                      onClick={() => startEdit(project)}
                      className="p-1 text-slate-400 hover:text-primary-500 ml-1"
                      title="Editar"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeletingProject({ id: project.id, title: project.title });
                      }}
                      className="p-1 text-slate-400 hover:text-red-500 ml-1 transition-colors"
                      title="Eliminar proyecto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {project.title}
                  </h4>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    <span>{project.link.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deletingProject}
        title="¿Eliminar Proyecto?"
        message={`¿Estás seguro de que deseas eliminar permanentemente el proyecto "${deletingProject?.title}" de tu portafolio? Esta acción no se puede deshacer.`}
        confirmText="Eliminar Proyecto"
        cancelText="Cancelar"
        isDestructive={true}
        onConfirm={() => {
          if (deletingProject) {
            deleteProject(deletingProject.id);
            setDeletingProject(null);
          }
        }}
        onCancel={() => setDeletingProject(null)}
      />
    </div>
  );
};
