import React from 'react';

export default function XDivider() {
  return (
    <div className="relative w-full h-24 overflow-hidden pointer-events-none bg-transparent">
      {/* Background guideline */}
      <div className="absolute top-1/2 w-full h-[1px] bg-primary/10"></div>
      
      {/* SVG Canvas for Crossing Lines */}
      <svg
        className="w-full h-full absolute inset-0"
        viewBox="0 0 1200 96"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static guidelines in X shape */}
        <line x1="0" y1="0" x2="1200" y2="96" stroke="rgba(197, 160, 89, 0.15)" strokeWidth="1" />
        <line x1="1200" y1="0" x2="0" y2="96" stroke="rgba(197, 160, 89, 0.15)" strokeWidth="1" />

        {/* Glowing moving line path 1 */}
        <path
          d="M0 0 L1200 96"
          stroke="url(#gradient-gold)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-line-glow"
        />

        {/* Glowing moving line path 2 */}
        <path
          d="M1200 0 L0 96"
          stroke="url(#gradient-gold-reverse)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-line-glow-reverse"
        />

        {/* Defs for gradient glow */}
        <defs>
          <linearGradient id="gradient-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="50%" stopColor="#E0C082" stopOpacity="1" />
            <stop offset="100%" stopColor="#8E6F34" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient-gold-reverse" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="50%" stopColor="#E0C082" stopOpacity="1" />
            <stop offset="100%" stopColor="#8E6F34" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing center node (where lines cross) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <div className="w-5 h-5 bg-primary/20 rounded-full animate-ping absolute"></div>
        <div className="w-2.5 h-2.5 bg-primary rounded-full border border-[#FCFAF6] shadow-md relative"></div>
      </div>
    </div>
  );
}
