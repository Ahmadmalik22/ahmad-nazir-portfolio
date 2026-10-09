import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#tech-stack' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-[#EEF0F6] dark:bg-[#07090E] text-gray-600 dark:text-gray-400 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-200 dark:border-white/10">
          {/* Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white dark:bg-white/10 p-0.5 border border-gray-200 dark:border-white/20 shadow-sm">
                <img
                  src="/assets/images/ahmad-profile.jpg"
                  alt="Ahmad Nazir"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-gray-900 dark:text-white text-base">Ahmad Nazir</span>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">Full-Stack & MERN Engineer</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-sans-tight max-w-sm">
              Engineering full-stack architectures, resilient APIs, and fluid motion design for impactful digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-4">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <div className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-4 md:text-right">
                Connect
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Ahmadmalik22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 hover:text-gray-950 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmad-nazir-312386311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 hover:text-gray-950 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="mailto:ahmadnazir.2620@gmail.com"
                  className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 hover:text-gray-950 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-gray-300 text-xs font-mono border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 dark:text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Ahmad Nazir. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with React 19, Tailwind CSS & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
