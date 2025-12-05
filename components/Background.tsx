import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* 
        Enhanced Apple-style moving background 
        Using stronger opacities and screen blends for dark mode visibility
      */}
      
      {/* Blob 1 - Primary (Blue/Cyan) */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-400 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-blob"></div>
      
      {/* Blob 2 - Secondary (Purple/Violet) */}
      <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary-400 dark:bg-secondary-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-2000"></div>
      
      {/* Blob 3 - Pink/Indigo Accent */}
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Blob 4 - Extra Center glow for depth */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-200 dark:bg-slate-800 rounded-full mix-blend-overlay filter blur-[100px] opacity-30 animate-pulse"></div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;