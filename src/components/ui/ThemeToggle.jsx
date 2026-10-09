import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
        isDark
          ? 'bg-white/10 hover:bg-white/20 text-amber-300 border border-white/10'
          : 'bg-black/5 hover:bg-black/10 text-indigo-600 border border-black/10 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        {isDark ? (
          <Sun className="w-4 h-4 transform rotate-0 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 transform -rotate-12 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
