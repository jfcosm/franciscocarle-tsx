// Version 1.3
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* 
        Enhanced Apple-style moving background 
        Vibrant blobs with increased opacity for dark mode visibility
      */}
      
      {/* Blob 1 - Primary (Cyan/Blue) */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 dark:opacity-30 animate-blob"></div>
      
      {/* Blob 2 - Secondary (Purple/Violet) */}
      <div className="absolute top-0 -right-20 w-[600px] h-[600px] bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 dark:opacity-30 animate-blob animation-delay-2000"></div>
      
      {/* Blob 3 - Accent (Pink/Rose) */}
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 dark:opacity-30 animate-blob animation-delay-4000"></div>
      
      {/* Blob 4 - Center Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-300 dark:bg-indigo-900/50 rounded-full mix-blend-overlay filter blur-[120px] opacity-30 animate-pulse"></div>

      {/* Noise Texture for organic feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;