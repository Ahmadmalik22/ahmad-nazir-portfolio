import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase mb-4 glass-pill text-blue-600 dark:text-blue-400 border border-blue-500/20 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-950 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-sans-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
