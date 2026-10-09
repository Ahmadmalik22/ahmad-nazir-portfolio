import React from 'react';

export default function Marquee({ text = "AHMAD NAZIR • FULL STACK MERN DEVELOPER •", reverse = false, className = "" }) {
  const repeatedText = `${text} `.repeat(4);

  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 border-y border-gray-200 dark:border-white/5 bg-gray-100/70 dark:bg-white/[0.02] select-none ${className}`}>
      <div className={`inline-block ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} flex gap-8 items-center`}>
        <span className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-300 hover:text-gray-500 dark:text-white/20 dark:hover:text-white/40 transition-colors tracking-wider uppercase">
          {repeatedText}
        </span>
        <span className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-300 hover:text-gray-500 dark:text-white/20 dark:hover:text-white/40 transition-colors tracking-wider uppercase">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
