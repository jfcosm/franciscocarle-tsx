import React, { useState } from 'react';
import { 
  Briefcase, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Check, 
  X, 
  Languages, 
  Calendar, 
  MapPin, 
  Building,
  ListPlus
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { Job, LanguageCode } from '../../types';
import { ConfirmModal } from './ConfirmModal';

export const ResumeEditor: React.FC = () => {
  const { data, updateJob, addJob, deleteJob, updateTranslations } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);
  const [deletingJob, setDeletingJob] = useState<{ id: string; company: string } | null>(null);

  const sectionTitle = data.translations[selectedLang]?.titles?.experience || 'Trayectoria Profesional';
  const [titleInput, setTitleInput] = useState(sectionTitle);

  // Job form state
  const [newJobKey, setNewJobKey] = useState('');
  const [formData, setFormData] = useState<Job>({
    company: '',
    role: '',
    period: '',
    location: '',
    description: [''],
    skills: [],
  });
  const [skillsInput, setSkillsInput] = useState('');

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    setTitleInput(data.translations[lang]?.titles?.experience || 'Trayectoria Profesional');
    if (editingJobId) {
      const job = data.translations[lang]?.jobs?.[editingJobId] || {
        company: '',
        role: '',
        period: '',
        location: '',
        description: [''],
        skills: [],
      };
      setFormData(job);
      setSkillsInput(job.skills.join(', '));
    }
  };

  const handleTitleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'titles', {
      ...data.translations[selectedLang]?.titles,
      experience: titleInput,
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const startEdit = (id: string) => {
    const job = data.translations[selectedLang]?.jobs?.[id] || {
      company: '',
      role: '',
      period: '',
      location: '',
      description: [''],
      skills: [],
    };
    setEditingJobId(id);
    setIsAddingNew(false);
    setNewJobKey(id);
    setFormData(job);
    setSkillsInput((job.skills || []).join(', '));
  };

  const startAddNew = () => {
    const id = `job_${Date.now().toString().slice(-4)}`;
    setIsAddingNew(true);
    setEditingJobId(id);
    setNewJobKey(id);
    setFormData({
      company: '',
      role: '',
      period: '2025 – Presente',
      location: 'Santiago, Chile / Remoto',
      description: ['Logro o responsabilidad principal del rol.'],
      skills: ['Agile', 'Scrum', 'React'],
    });
    setSkillsInput('Agile, Scrum, React');
  };

  const cancelEdit = () => {
    setEditingJobId(null);
    setIsAddingNew(false);
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSkills = skillsInput.split(',').map(s => s.trim()).filter(Boolean);
    const cleanDesc = formData.description.map(d => d.trim()).filter(Boolean);

    const jobPayload: Job = {
      ...formData,
      skills: cleanSkills,
      description: cleanDesc.length > 0 ? cleanDesc : ['Responsabilidad del rol'],
    };

    if (isAddingNew) {
      addJob(newJobKey, { [selectedLang]: jobPayload });
    } else if (editingJobId) {
      updateJob(selectedLang, editingJobId, jobPayload);
    }

    setEditingJobId(null);
    setIsAddingNew(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const handleDescChange = (index: number, val: string) => {
    const updated = [...formData.description];
    updated[index] = val;
    setFormData(prev => ({ ...prev, description: updated }));
  };

  const addDescItem = () => {
    setFormData(prev => ({ ...prev, description: [...prev.description, ''] }));
  };

  const removeDescItem = (index: number) => {
    if (formData.description.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      description: prev.description.filter((_, i) => i !== index),
    }));
  };

  const jobsForLang = data.translations[selectedLang]?.jobs || {};

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title & Language Bar */}
      <form onSubmit={handleTitleSave} className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary-500" />
            Experiencia Laboral y Trayectoria (CV)
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Gestiona los cargos, empresas, hitos alcanzados y competencias del historial profesional.
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
            <span>Guardar Título</span>
          </button>
        </div>
      </form>

      {/* Add New Job button */}
      {!editingJobId && (
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Posiciones Registradas ({data.jobIds.length})
          </h3>
          <button
            onClick={startAddNew}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white text-sm font-semibold shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Puesto Laboral</span>
          </button>
        </div>
      )}

      {/* Job Edit Form */}
      {editingJobId && (
        <form onSubmit={handleJobSubmit} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-primary-500/50 shadow-xl space-y-6 animate-scale-in">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <Building className="w-5 h-5 text-primary-500" />
              {isAddingNew ? 'Nuevo Puesto Laboral' : `Editando: ${formData.role} en ${formData.company}`}
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
              {isAddingNew && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">ID Clave (slug)</label>
                  <input
                    type="text"
                    value={newJobKey}
                    onChange={(e) => setNewJobKey(e.target.value.toLowerCase().replace(/\s+/g, '_'))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
                    placeholder="ej: thomson_reuters"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Empresa / Organización</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold outline-none text-slate-900 dark:text-white"
                  placeholder="Ej: Thomson Reuters"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Cargo / Rol</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none text-slate-900 dark:text-white"
                  placeholder="Ej: Desarrollador Python Full Stack"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Período</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData(prev => ({ ...prev, period: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
                    placeholder="Marzo 2025 – Presente"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Ubicación</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
                    placeholder="Santiago / Remoto"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Skills y Tecnologías (Separados por coma)
                </label>
                <input
                  type="text"
                  value={skillsInput}
                  onChange={(e) => setSkillsInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
                  placeholder="Python, SQLAlchemy, Git, Scrum"
                />
              </div>
            </div>

            {/* Description bullet points */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                  Logros y Responsabilidades ({selectedLang.toUpperCase()})
                </label>
                <button
                  type="button"
                  onClick={addDescItem}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <ListPlus className="w-3.5 h-3.5" />
                  <span>+ Agregar Viñeta</span>
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {formData.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-xs text-slate-400 mt-2 font-mono">•</span>
                    <textarea
                      rows={2}
                      value={desc}
                      onChange={(e) => handleDescChange(idx, e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
                      placeholder={`Punto clave ${idx + 1}...`}
                      required
                    />
                    {formData.description.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDescItem(idx)}
                        className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
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
              <span>{isAddingNew ? 'Crear Posición' : 'Actualizar Posición'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Timeline List */}
      <div className="space-y-4">
        {data.jobIds.map((jobId: string) => {
          const job = jobsForLang[jobId] || {
            company: 'Sin Datos',
            role: jobId,
            period: '-',
            location: '-',
            description: [],
            skills: [],
          };

          return (
            <div
              key={jobId}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {job.role}
                  </h4>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm flex items-center gap-1">
                    @ {job.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  {(job.description || []).slice(0, 2).map((d: string, i: number) => (
                    <li key={i} className="line-clamp-1 opacity-90">• {d}</li>
                  ))}
                  {(job.description || []).length > 2 && (
                    <li className="text-[11px] text-slate-400 italic">
                      + {(job.description || []).length - 2} logros adicionales...
                    </li>
                  )}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(job.skills || []).map((sk: string) => (
                    <span key={sk} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-start">
                <button
                  onClick={() => startEdit(jobId)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5 text-primary-500" />
                  <span>Editar</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeletingJob({ id: jobId, company: job.company });
                  }}
                  className="p-1.5 rounded-lg border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-500 transition-colors"
                  title="Eliminar puesto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deletingJob}
        title="¿Eliminar Puesto Laboral?"
        message={`¿Estás seguro de que deseas eliminar permanentemente el puesto en "${deletingJob?.company}"? Esta acción no se puede deshacer.`}
        confirmText="Eliminar Puesto"
        cancelText="Cancelar"
        isDestructive={true}
        onConfirm={() => {
          if (deletingJob) {
            deleteJob(deletingJob.id);
            setDeletingJob(null);
          }
        }}
        onCancel={() => setDeletingJob(null)}
      />
    </div>
  );
};
