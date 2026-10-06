import React, { useState } from 'react';
import { 
  Database, 
  Cloud, 
  CloudOff, 
  RefreshCw, 
  Check, 
  AlertCircle, 
  Save, 
  Server,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { 
  getSavedFirebaseConfig, 
  saveFirebaseConfig, 
  FirebaseConfig, 
  initFirebase 
} from '../../services/firebase';

export interface DatabaseConfigProps {
  onShowToast?: (msg: string) => void;
}

export const DatabaseConfig: React.FC<DatabaseConfigProps> = ({ onShowToast }) => {
  const { isCloudConnected, lastCloudSync, syncToCloudDatabase } = useSiteData();
  const [config, setConfig] = useState<FirebaseConfig>(getSavedFirebaseConfig());
  const [syncing, setSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState<boolean | null>(null);
  const [saveMessage, setSaveMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value.trim() }));
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveFirebaseConfig(config);
    initFirebase(config);
    setSaveMessage(true);
    if (onShowToast) onShowToast('¡Credenciales de Firebase guardadas!');
    setTimeout(() => setSaveMessage(false), 2500);
  };

  const handleSyncNow = async () => {
    setSyncing(true);
    setSyncSuccess(null);
    try {
      const ok = await syncToCloudDatabase();
      setSyncSuccess(ok);
      if (ok && onShowToast) {
        onShowToast('¡Sincronización con Firestore exitosa!');
      }
    } catch (e) {
      setSyncSuccess(false);
    } finally {
      setSyncing(false);
      setTimeout(() => setSyncSuccess(null), 4000);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-500" />
            Base de Datos en la Nube (Cloud Firestore)
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Sincroniza y almacena todos los cambios de tu web en una base de datos global en tiempo real.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold ${
            isCloudConnected 
              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' 
              : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
          }`}>
            {isCloudConnected ? <Cloud className="w-4 h-4 text-emerald-500" /> : <CloudOff className="w-4 h-4 text-amber-500" />}
            <span>{isCloudConnected ? 'Firestore Conectado' : 'Modo Local / Configura Firebase'}</span>
          </div>

          <button
            type="button"
            onClick={handleSyncNow}
            disabled={syncing}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold text-xs shadow-md transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Sincronizando...' : 'Subir a la Base de Datos'}</span>
          </button>
        </div>
      </div>

      {syncSuccess === true && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fade-in">
          <Check className="w-4 h-4 text-emerald-500" />
          <span>¡Todos los datos han sido escritos y sincronizados exitosamente en la base de datos Firestore en la nube!</span>
        </div>
      )}

      {syncSuccess === false && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center gap-2 animate-fade-in">
          <AlertCircle className="w-4 h-4 text-red-500" />
          <span>No se pudo conectar con Firestore. Verifica que hayas configurado tu API Key y Project ID de Firebase a continuación.</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulario de Credenciales Firebase */}
        <form onSubmit={handleSaveConfig} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <Server className="w-4 h-4 text-amber-500" />
              Configuración de Firebase Web SDK
            </h3>
            {saveMessage && (
              <span className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Guardado
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              API Key (VITE_FIREBASE_API_KEY)
            </label>
            <input
              type="text"
              name="apiKey"
              value={config.apiKey}
              onChange={handleChange}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Project ID (VITE_FIREBASE_PROJECT_ID)
            </label>
            <input
              type="text"
              name="projectId"
              value={config.projectId}
              onChange={handleChange}
              placeholder="franciscocarle-portfolio"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Auth Domain
            </label>
            <input
              type="text"
              name="authDomain"
              value={config.authDomain}
              onChange={handleChange}
              placeholder="tu-proyecto.firebaseapp.com"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              Storage Bucket
            </label>
            <input
              type="text"
              name="storageBucket"
              value={config.storageBucket}
              onChange={handleChange}
              placeholder="tu-proyecto.appspot.com"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
              App ID
            </label>
            <input
              type="text"
              name="appId"
              value={config.appId}
              onChange={handleChange}
              placeholder="1:1234567890:web:abcdef"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 dark:hover:bg-white transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Configuración Firebase</span>
            </button>
          </div>
        </form>

        {/* Guía informativa de Producción */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            ¿Cómo funciona la Base de Datos en Producción?
          </h3>

          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              1. <strong>Escritura en la Nube:</strong> Cada vez que guardas un cambio en el panel admin (o pulsas *"Subir a la Base de Datos"*), el contenido completo se escribe en la colección <code className="text-amber-500 font-mono">site_content/landing_page</code> de Cloud Firestore.
            </p>
            <p>
              2. <strong>Lectura en Tiempo Real:</strong> Cuando cualquier usuario en el mundo visita tu sitio web, la landing page lee automáticamente la versión más reciente desde Firestore y la muestra al instante sin requerir reconstruir ni hacer deploy de código.
            </p>
            <p>
              3. <strong>Respaldo Local Automático:</strong> El sitio mantiene una copia local de seguridad en caché de manera que si no hay conexión a internet, la página sigue cargando a velocidad ultrarrápida.
            </p>
          </div>

          {lastCloudSync && (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              Última sincronización con Firestore: {lastCloudSync.toLocaleTimeString()}
            </div>
          )}

          <div className="pt-2">
            <a
              href="https://console.firebase.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              <span>Ir a la Consola de Firebase</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
