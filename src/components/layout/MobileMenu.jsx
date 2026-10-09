import React from 'react';
import { X, Mail, FileDown, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import ThemeToggle from '../ui/ThemeToggle';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'About Me', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 dark:bg-black/75 backdrop-blur-md transition-all duration-300">
      <div className="w-full max-w-sm h-full bg-white dark:bg-[#0F1117] border-l border-gray-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 dark:bg-white/10 p-0.5 border border-gray-200 dark:border-white/20">
                <img
                  src="/assets/images/ahmad-profile.jpg"
                  alt="Ahmad Nazir"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white text-base">Ahmad Nazir</h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">MERN Stack Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-lg font-heading text-gray-700 hover:text-black hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 px-4 py-3 rounded-xl transition-all flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-gray-200 dark:border-white/10 space-y-4">
          <a
            href="/assets/images/cv_1.pdf"
            download="Ahmad-Nazir-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors shadow-lg shadow-blue-600/20"
          >
            <FileDown size={16} />
            Download Curriculum Vitae
          </a>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/Ahmadmalik22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-nazir-312386311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:ahmadnazir.2620@gmail.com"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors"
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-center text-xs text-gray-400 font-mono">
            © {new Date().getFullYear()} Ahmad Nazir • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
