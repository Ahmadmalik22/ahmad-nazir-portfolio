import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, FileDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      if (statsRef.current) {
        gsap.from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.5)',
          delay: 0.5
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Video with modern dual theme gradient overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 opacity-80 sm:opacity-90 dark:opacity-35 filter brightness-90 dark:brightness-75 contrast-140 dark:contrast-125 transition-all duration-500"
        >
          <source src="/assets/images/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Soft vignette gradients - gentle fade into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FC] via-[#F8F9FC]/15 to-transparent dark:from-[#0B0D13] dark:via-[#0B0D13]/70 dark:to-[#0B0D13]/50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FC]/25 via-transparent to-[#F8F9FC]/25 dark:from-[#0B0D13]/80 dark:via-transparent dark:to-[#0B0D13]/80 pointer-events-none"></div>
      </div>

      {/* Decorative ambient gradient spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto w-full my-auto text-center flex flex-col items-center">
        {/* Status & Focus Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wide text-blue-700 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6 hover:border-blue-400/40 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
          <span className="text-gray-400 dark:text-gray-500">•</span>
          <span className="text-gray-700 dark:text-gray-300">FULL-STACK & MERN SPECIALIST</span>
        </div>

        {/* Dynamic Main Headline */}
        <div ref={headlineRef}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.1] mb-6">
            Architecting Modern <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
              Full-Stack & MERN
            </span>{' '}
            Solutions
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-sans-tight leading-relaxed mb-8">
            I'm <span className="text-gray-900 dark:text-white font-semibold">Ahmad Nazir</span> — a full-stack engineer specializing in the MERN ecosystem. I build end-to-end web applications combining robust backend services, performant databases, and intuitive, fluid user interfaces.
          </p>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all shadow-xl shadow-black/10 dark:shadow-white/10 group"
            >
              <span>Explore Projects</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-black/5 hover:bg-black/10 text-gray-900 border border-gray-300/80 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/15 transition-all backdrop-blur-md"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/assets/images/cv_1.pdf"
              download="Ahmad-Nazir-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium bg-white text-gray-800 hover:bg-gray-50 border border-gray-200 shadow-sm dark:bg-transparent dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 dark:border-white/10 dark:shadow-none transition-all"
            >
              <FileDown size={16} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Technology Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-gray-700 dark:text-gray-400">
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400"></span> React 19
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span> Node.js
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white"></span> Express.js
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500"></span> MongoDB
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span> Tailwind CSS
            </span>
            <span className="px-3 py-1 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 flex items-center gap-1.5 shadow-sm dark:shadow-none">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 dark:bg-lime-400"></span> GSAP Motion
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Floating Stats & Quick Bar */}
      <div className="max-w-6xl mx-auto w-full pt-8">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 shadow-lg dark:shadow-none"
        >
          <div className="text-center p-3 border-r border-gray-200 dark:border-white/5 last:border-none">
            <div className="text-2xl sm:text-4xl font-heading font-bold text-gray-950 dark:text-white tracking-tight">MERN</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight mt-1">Full-Stack Architecture</div>
          </div>
          <div className="text-center p-3 border-r border-gray-200 dark:border-white/5 last:border-none">
            <div className="text-2xl sm:text-4xl font-heading font-bold text-gray-950 dark:text-white tracking-tight">15+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight mt-1">Web Applications Built</div>
          </div>
          <div className="text-center p-3 border-r border-gray-200 dark:border-white/5 last:border-none">
            <div className="text-2xl sm:text-4xl font-heading font-bold text-blue-600 dark:text-blue-400 tracking-tight">100%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight mt-1">Clean & Modular Code</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-4xl font-heading font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">99%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight mt-1">Client & UX Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
