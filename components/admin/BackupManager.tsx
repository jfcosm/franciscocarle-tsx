import React, { useState } from 'react';
import { 
  Database, 
  Download, 
  Upload, 
  Copy, 
  Check, 
  RotateCcw, 
  AlertTriangle
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { ConfirmModal } from './ConfirmModal';

export const BackupManager: React.FC = () => {
  const { exportDataJSON, importDataJSON, resetToDefaults } = useSiteData();
  const [copied, setCopied] = useState(false);
  const [importText, setImportText] = useState('');
  const [importSuccess, setImportSuccess] = useState<boolean | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const jsonString = exportDataJSON();

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `franciscocarle-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importDataJSON(content);
      setImportSuccess(success);
      setTimeout(() => setImportSuccess(null), 3000);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handlePasteImport = () => {
    if (!importText.trim()) return;
    const success = importDataJSON(importText);
    setImportSuccess(success);
    if (success) {
      setImportText('');
    }
    setTimeout(() => setImportSuccess(null), 3000);
  };

  const executeReset = () => {
    resetToDefaults();
    setShowResetConfirm(false);
    setImportSuccess(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-primary-500" />
          Copia de Seguridad, Exportación y Restauración JSON
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Exporta todos tus cambios para respaldarlos o importarlos en cualquier entorno sin tocar código.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Exportar & Descargar */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Download className="w-4 h-4 text-blue-500" />
            Exportar Configuración Actual
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Descarga un archivo JSON con todos los proyectos, textos, roles y configuraciones que tienes configuradas actualmente.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Archivo .json</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '¡Copiado!' : 'Copiar al Portapapeles'}</span>
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono font-bold text-slate-400">Vista previa JSON:</span>
              <span className="text-[11px] text-slate-400 font-mono">
                {Math.round(jsonString.length / 1024)} KB
              </span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs max-h-56 overflow-y-auto border border-slate-800">
              {jsonString}
            </pre>
          </div>
        </div>

        {/* Importar & Restaurar */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Upload className="w-4 h-4 text-purple-500" />
            Importar o Restaurar Configuración
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
              Opción A: Subir archivo .json
            </label>
            <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-purple-500 rounded-2xl cursor-pointer bg-slate-50 dark:bg-slate-800/40 transition-colors">
              <Upload className="w-8 h-8 text-purple-500 mb-2" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Haz clic para seleccionar archivo JSON
              </span>
              <span className="text-[11px] text-slate-400 mt-1">.json exportado previamente</span>
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">
              Opción B: Pegar texto JSON directo
            </label>
            <textarea
              rows={3}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Pega el código JSON aquí..."
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none text-slate-900 dark:text-white mb-2"
            />
            <button
              type="button"
              onClick={handlePasteImport}
              disabled={!importText.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition-colors"
            >
              Aplicar JSON Pegado
            </button>
          </div>

          {importSuccess === true && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>¡Configuración importada y aplicada exitosamente!</span>
            </div>
          )}

          {importSuccess === false && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Error al importar el JSON. Verifica que sea un JSON válido.</span>
            </div>
          )}

          {/* Reset button */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              Zona de Peligro
            </h4>
            <button
              type="button"
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer todo a valores por defecto</span>
            </button>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showResetConfirm}
        title="¿Restablecer Todo a Valores de Fábrica?"
        message="¿Estás completamente seguro de restaurar todos los datos por defecto? Esta acción sobrescribirá todos los cambios no guardados externamente."
        confirmText="Restablecer Todo"
        cancelText="Cancelar"
        isDestructive={true}
        onConfirm={executeReset}
        onCancel={() => setShowResetConfirm(false)}
      />
    </div>
  );
};
