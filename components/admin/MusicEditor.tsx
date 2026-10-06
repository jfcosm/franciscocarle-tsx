import React, { useState } from 'react';
import { 
  Music, 
  Save, 
  Check, 
  Languages, 
  Disc, 
  Headphones, 
  Speaker, 
  X
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { LanguageCode } from '../../types';
import { IconRenderer } from '../IconRenderer';

export const MusicEditor: React.FC = () => {
  const { data, updateTranslations, updateMusicGear, updateProfile } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [savedMessage, setSavedMessage] = useState(false);

  const [newSoftware, setNewSoftware] = useState('');
  const [newHardwareName, setNewHardwareName] = useState('');
  const [newHardwareIcon, setNewHardwareIcon] = useState('Guitar');

  const musicContent = data.translations[selectedLang]?.music || data.translations['es']?.music || {
    profile_label: '',
    main_desc: '',
    discography_title: '',
    discography_desc: '',
    production_title: '',
    production_desc: '',
    listen_btn: '',
    studio_title: '',
  };

  const musicTitle = data.translations[selectedLang]?.titles?.music || 'Producción Musical';

  const [formState, setFormState] = useState(musicContent);
  const [sectionTitle, setSectionTitle] = useState(musicTitle);
  const [appleMusicUrl, setAppleMusicUrl] = useState(data.profile.appleMusic || '');

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    setFormState(data.translations[lang]?.music || data.translations['es']?.music || musicContent);
    setSectionTitle(data.translations[lang]?.titles?.music || 'Producción Musical');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'music', formState);
    updateTranslations(selectedLang, 'titles', {
      ...data.translations[selectedLang]?.titles,
      music: sectionTitle,
    });
    updateProfile({ appleMusic: appleMusicUrl });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const handleAddSoftware = () => {
    if (!newSoftware.trim()) return;
    const current = data.musicGear?.software || [];
    if (!current.includes(newSoftware.trim())) {
      updateMusicGear({ software: [...current, newSoftware.trim()] });
    }
    setNewSoftware('');
  };

  const handleRemoveSoftware = (item: string) => {
    const current = data.musicGear?.software || [];
    updateMusicGear({ software: current.filter(s => s !== item) });
  };

  const handleAddHardware = () => {
    if (!newHardwareName.trim()) return;
    const current = data.musicGear?.hardware || [];
    updateMusicGear({
      hardware: [...current, { name: newHardwareName.trim(), icon: newHardwareIcon }]
    });
    setNewHardwareName('');
  };

  const handleRemoveHardware = (name: string) => {
    const current = data.musicGear?.hardware || [];
    updateMusicGear({ hardware: current.filter(h => h.name !== name) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Music className="w-5 h-5 text-secondary-500" />
            Música, Discografía y Estudio de Sonido
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Gestiona la faceta creativa musical, discografía publicada, enlace a streaming y equipamiento de estudio.
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
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold text-sm shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            {savedMessage ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{savedMessage ? '¡Guardado!' : 'Guardar Cambios'}</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Discografía y Producción */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Disc className="w-4 h-4 text-secondary-500" />
            Textos Principales ({selectedLang.toUpperCase()})
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                Etiqueta Superior
              </label>
              <input
                type="text"
                name="profile_label"
                value={formState.profile_label || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
                placeholder="Faceta Creativa"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                Título de la Sección
              </label>
              <input
                type="text"
                value={sectionTitle}
                onChange={(e) => setSectionTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold outline-none"
                placeholder="Producción Musical"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Descripción Introductoria
            </label>
            <textarea
              name="main_desc"
              rows={3}
              value={formState.main_desc || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
              placeholder="Además de mi carrera tecnológica, desarrollo una trayectoria como músico..."
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase flex items-center gap-1.5">
              <Disc className="w-3.5 h-3.5 text-secondary-500" />
              Tarjeta 1: Discografía
            </h4>
            <input
              type="text"
              name="discography_title"
              value={formState.discography_title || ''}
              onChange={handleChange}
              className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold"
              placeholder="Discografía"
            />
            <textarea
              name="discography_desc"
              rows={2}
              value={formState.discography_desc || ''}
              onChange={handleChange}
              className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
              placeholder="2 Álbumes completos y 4 Singles..."
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-secondary-500" />
              Tarjeta 2: Producción & Composición
            </h4>
            <input
              type="text"
              name="production_title"
              value={formState.production_title || ''}
              onChange={handleChange}
              className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold"
              placeholder="Producción"
            />
            <textarea
              name="production_desc"
              rows={2}
              value={formState.production_desc || ''}
              onChange={handleChange}
              className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs"
              placeholder="Trabajo con Logic Pro X, sintetizadores analógicos..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Texto del Botón de Escuchar
            </label>
            <input
              type="text"
              name="listen_btn"
              value={formState.listen_btn || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none"
              placeholder="Escuchar en Apple Music"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              URL del Enlace de Música
            </label>
            <input
              type="url"
              value={appleMusicUrl}
              onChange={(e) => setAppleMusicUrl(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-mono outline-none"
              placeholder="https://music.apple.com/..."
            />
          </div>
        </div>

        {/* Estudio Virtual / Gear Software & Hardware */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Speaker className="w-4 h-4 text-secondary-500" />
            Estudio Virtual & Equipamiento
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Título del Estudio ({selectedLang.toUpperCase()})
            </label>
            <input
              type="text"
              name="studio_title"
              value={formState.studio_title || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold outline-none"
              placeholder="Estudio Virtual"
            />
          </div>

          {/* Software & DAW */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
              Software & DAW
            </label>
            <div className="flex flex-wrap gap-2">
              {(data.musicGear?.software || []).map((soft) => (
                <span
                  key={soft}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700"
                >
                  {soft}
                  <button type="button" onClick={() => handleRemoveSoftware(soft)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newSoftware}
                onChange={(e) => setNewSoftware(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSoftware(); } }}
                placeholder="Ej: Ableton Live 12"
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={handleAddSoftware}
                className="px-3 py-1.5 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg text-xs font-bold"
              >
                + Agregar
              </button>
            </div>
          </div>

          {/* Hardware & Instruments */}
          <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
              Hardware & Instrumentos
            </label>
            <div className="flex flex-wrap gap-2">
              {(data.musicGear?.hardware || []).map((hard) => (
                <span
                  key={hard.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700"
                >
                  <IconRenderer name={hard.icon} className="w-3.5 h-3.5 text-secondary-500" />
                  {hard.name}
                  <button type="button" onClick={() => handleRemoveHardware(hard.name)} className="hover:text-red-500 ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={newHardwareName}
                onChange={(e) => setNewHardwareName(e.target.value)}
                placeholder="Nombre del instrumento..."
                className="sm:col-span-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
              />
              <select
                value={newHardwareIcon}
                onChange={(e) => setNewHardwareIcon(e.target.value)}
                className="px-2 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
              >
                <option value="Guitar">Guitarra</option>
                <option value="Piano">Teclado</option>
                <option value="Mic2">Micrófono</option>
                <option value="Speaker">Monitores</option>
                <option value="Headphones">Audífonos</option>
                <option value="Disc">Sintetizador</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleAddHardware}
              className="w-full py-1.5 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg text-xs font-bold"
            >
              + Agregar Instrumento
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
