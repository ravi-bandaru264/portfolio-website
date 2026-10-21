import React from 'react';

export const DataParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#168BFF]/15 via-[#36D9FF]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] bg-[#168BFF]/10 rounded-full blur-[120px]" />
      <div className="absolute top-[65%] -left-40 w-[500px] h-[500px] bg-[#36D9FF]/8 rounded-full blur-[120px]" />

      <div className="absolute inset-0 bg-grid-pattern opacity-40 mask-radial-gradient" />

      <div className="absolute top-24 left-[10%] w-2 h-2 rounded-full bg-[#36D9FF]/60 animate-float" />
      <div className="absolute top-48 right-[15%] w-2.5 h-2.5 rounded-full bg-[#168BFF]/70 animate-float-reverse" />
      <div className="absolute top-[55%] left-[8%] w-2 h-2 rounded-full bg-[#36D9FF]/50 animate-float" />
      <div className="absolute top-[75%] right-[12%] w-3 h-3 rounded-full bg-[#168BFF]/40 animate-float-reverse" />

      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#168BFF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#36D9FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#168BFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M -100 250 Q 400 350 900 220 T 1800 300"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          className="animate-flow-stream"
        />
        <path
          d="M -100 550 Q 500 420 1100 600 T 2000 480"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="animate-flow-stream"
          style={{ animationDuration: '3.5s' }}
        />
      </svg>
    </div>
  );
};
