import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Check, 
  X, 
  Languages, 
  Quote, 
  UserCheck
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { Testimonial, LanguageCode } from '../../types';
import { ConfirmModal } from './ConfirmModal';

export const TestimonialsEditor: React.FC = () => {
  const { data, updateTestimonials, addTestimonial, deleteTestimonial, updateTranslations } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);
  const [deletingTestimonial, setDeletingTestimonial] = useState<{ index: number; name: string } | null>(null);

  const sectionTitle = data.translations[selectedLang]?.titles?.testimonials || 'Lo que dicen de mí';
  const [titleInput, setTitleInput] = useState(sectionTitle);

  const [formData, setFormData] = useState<Testimonial>({
    name: '',
    role: '',
    company: '',
    text: '',
  });

  const currentTestimonials = data.translations[selectedLang]?.testimonials || [];

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    setTitleInput(data.translations[lang]?.titles?.testimonials || 'Lo que dicen de mí');
    setEditingIndex(null);
    setIsAddingNew(false);
  };

  const handleTitleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'titles', {
      ...data.translations[selectedLang]?.titles,
      testimonials: titleInput,
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setIsAddingNew(false);
    setFormData(currentTestimonials[index] || { name: '', role: '', company: '', text: '' });
  };

  const startAddNew = () => {
    setIsAddingNew(true);
    setEditingIndex(null);
    setFormData({
      name: '',
      role: '',
      company: '',
      text: '',
    });
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setIsAddingNew(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAddingNew) {
      addTestimonial(selectedLang, formData);
    } else if (editingIndex !== null) {
      const updated = [...currentTestimonials];
      updated[editingIndex] = formData;
      updateTestimonials(selectedLang, updated);
    }

    setEditingIndex(null);
    setIsAddingNew(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Title & Language Bar */}
      <form onSubmit={handleTitleSave} className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MessageSquareQuote className="w-5 h-5 text-secondary-500" />
            Testimonios y Recomendaciones de Colegas
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Gestiona los testimonios mostrados en el carrusel infinito de la landing page.
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

      {/* Add New Testimonial Button */}
      {!editingIndex && !isAddingNew && (
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Testimonios en {selectedLang.toUpperCase()} ({currentTestimonials.length})
          </h3>
          <button
            onClick={startAddNew}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white text-sm font-semibold shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02]"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Testimonio</span>
          </button>
        </div>
      )}

      {/* Testimonial Form */}
      {(editingIndex !== null || isAddingNew) && (
        <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border-2 border-secondary-500/50 shadow-xl space-y-6 animate-scale-in">
          <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-secondary-500" />
              {isAddingNew ? 'Nuevo Testimonio' : `Editando: ${formData.name}`}
            </h3>
            <button
              type="button"
              onClick={cancelEdit}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Nombre Completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold outline-none text-slate-900 dark:text-white"
                placeholder="Ej: Marcelo Morales"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Rol / Cargo</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none text-slate-900 dark:text-white"
                placeholder="Ej: Chief Operating Officer"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Empresa (Opcional)</label>
              <input
                type="text"
                value={formData.company || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none text-slate-900 dark:text-white"
                placeholder="Ej: Onikom Latam"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Cita / Recomendación Textual
            </label>
            <textarea
              rows={4}
              value={formData.text}
              onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm outline-none text-slate-900 dark:text-white"
              placeholder="Escribe aquí el testimonio recibido..."
              required
            />
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-500 hover:to-primary-500 text-white font-semibold text-xs shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>{isAddingNew ? 'Guardar Testimonio' : 'Actualizar Testimonio'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Testimonials List Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTestimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <Quote className="w-7 h-7 text-secondary-500/40" />
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => startEdit(index)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary-500"
                    title="Editar"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeletingTestimonial({ index, name: item.name });
                    }}
                    className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-400 hover:text-red-500 transition-colors"
                    title="Eliminar testimonio"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 italic mb-4 line-clamp-4 leading-relaxed">
                "{item.text}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {item.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-xs text-slate-900 dark:text-white truncate">
                  {item.name}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {item.role} {item.company ? `• ${item.company}` : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!deletingTestimonial}
        title="¿Eliminar Testimonio?"
        message={`¿Estás seguro de que deseas eliminar permanentemente el testimonio de "${deletingTestimonial?.name}"? Esta acción no se puede deshacer.`}
        confirmText="Eliminar Testimonio"
        cancelText="Cancelar"
        isDestructive={true}
        onConfirm={() => {
          if (deletingTestimonial !== null) {
            deleteTestimonial(selectedLang, deletingTestimonial.index);
            setDeletingTestimonial(null);
          }
        }}
        onCancel={() => setDeletingTestimonial(null)}
      />
    </div>
  );
};
