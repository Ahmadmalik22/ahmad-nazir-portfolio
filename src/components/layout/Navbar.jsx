import React, { useState, useEffect } from 'react';
import { Menu, FileDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import ThemeToggle from '../ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#tech-stack' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-white/90 dark:bg-[#0E1118]/85 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl shadow-gray-200/50 dark:shadow-black/40'
              : 'bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/70 dark:border-white/5'
          }`}
        >
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0D13]">
                <img
                  src="/assets/images/ahmad-profile.jpg"
                  alt="Ahmad Nazir"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0B0D13] rounded-full"></span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-gray-900 dark:text-white text-sm sm:text-base tracking-tight">
                  Ahmad Nazir
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Full Stack
                </span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 font-sans-tight">MERN Stack Engineer</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-gray-200/60 dark:border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-950 hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Socials quick icons */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href="https://github.com/Ahmadmalik22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-nazir-312386311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            {/* Resume button */}
            <a
              href="/assets/images/cv_1.pdf"
              download="Ahmad-Nazir-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/5 hover:bg-black/10 text-gray-700 hover:text-gray-950 border border-gray-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-200 dark:hover:text-white dark:border-white/10 transition-all duration-200"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-200 shadow-md shadow-black/5 dark:shadow-white/10"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-black/5 hover:bg-black/10 text-gray-700 hover:text-gray-950 border border-gray-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-300 dark:hover:text-white dark:border-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
