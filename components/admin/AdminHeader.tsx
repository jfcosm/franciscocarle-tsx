import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Upload, 
  RotateCcw, 
  Sun, 
  Moon,
  ExternalLink,
  LogOut
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { ConfirmModal } from './ConfirmModal';

interface AdminHeaderProps {
  activeTabTitle: string;
  isDark: boolean;
  toggleTheme: () => void;
  onNavigateHome: () => void;
  onLogout?: () => void;
  onShowToast: (msg: string) => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  activeTabTitle,
  isDark,
  toggleTheme,
  onNavigateHome,
  onLogout,
  onShowToast
}) => {
  const { exportDataJSON, importDataJSON, resetToDefaults, lastSaved } = useSiteData();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExport = () => {
    const jsonString = exportDataJSON();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `franciscocarle-site-config-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    onShowToast('Configuración descargada exitosamente en JSON');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importDataJSON(content);
      if (success) {
        onShowToast('¡Configuración importada y aplicada exitosamente!');
      } else {
        alert('Error al importar el archivo JSON. Formato inválido.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const executeReset = () => {
    resetToDefaults();
    setShowResetConfirm(false);
    onShowToast('Datos restablecidos a los valores por defecto');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Info */}
        <div className="flex items-center gap-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition-colors shadow-sm group"
            title="Volver a la landing page pública"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Ver Landing Page</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </button>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Panel de Administración <span className="text-xs px-2 py-0.5 rounded-md bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800">v2.5 Live</span>
              </h1>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sección activa: <span className="font-semibold text-slate-700 dark:text-slate-300">{activeTabTitle}</span>
              {lastSaved && (
                <span className="ml-2 text-[11px] text-emerald-600 dark:text-emerald-400">
                  • Guardado automático activo
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Export JSON */}
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors"
            title="Descargar copia de seguridad en JSON"
          >
            <Download className="w-3.5 h-3.5 text-blue-500" />
            <span className="hidden sm:inline">Exportar JSON</span>
          </button>

          {/* Import JSON */}
          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer transition-colors">
            <Upload className="w-3.5 h-3.5 text-purple-500" />
            <span className="hidden sm:inline">Importar JSON</span>
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>

          {/* Reset */}
          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/40 text-xs font-medium text-red-600 dark:text-red-400 transition-colors"
            title="Restablecer contenido a valores originales de código"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Restablecer</span>
          </button>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Cambiar tema"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Logout Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 text-xs font-semibold transition-colors ml-1"
              title="Cerrar sesión del panel de administración"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </button>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={showResetConfirm}
        title="¿Restablecer Valores por Defecto?"
        message="¿Estás seguro de que deseas restablecer todos los datos del sitio a los valores iniciales por defecto? Se perderán las modificaciones no respaldadas en JSON."
        confirmText="Restablecer Todo"
        cancelText="Cancelar"
        isDestructive={true}
        onConfirm={executeReset}
        onCancel={() => setShowResetConfirm(false)}
      />
    </header>
  );
};
