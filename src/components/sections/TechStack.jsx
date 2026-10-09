import React, { useState } from 'react';
import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import { Terminal, Code2, Server, CheckCircle2, Copy, Check } from 'lucide-react';

const codeSnippets = {
  backend: `// Express.js + Mongoose Production Route
import express from 'express';
import { verifyJWT } from '../middleware/auth.js';
import { Project } from '../models/Project.js';

export const router = express.Router();

router.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort({ createdAt: -1 })
      .lean();
    return res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});`,
  frontend: `// React 19 + GSAP Custom Hook
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGsapReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        ...options
      });
    });

    return () => ctx.revert();
  }, []);

  return elementRef;
}`
};

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeCodeTab, setActiveCodeTab] = useState('backend');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Technical Arsenal"
        title="MERN Stack & Engineering Skills"
        subtitle="A production-focused software engineering toolkit designed for scalability, maintainability, and seamless user experiences across full-stack applications."
      />

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skillCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(index)}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === index
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 font-semibold'
                : 'bg-black/[0.04] text-gray-700 hover:text-gray-950 hover:bg-black/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 border border-gray-200 dark:border-white/5'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left: Skills Grid */}
        <div className="lg:col-span-7">
          <div className="p-1 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-sans-tight">
              {skillCategories[selectedCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories[selectedCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-2xl glass-card border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/5 flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <i className={skill.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-950 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">{skill.exp}</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/[0.04] text-gray-700 border-gray-200 dark:bg-white/5 dark:text-gray-300 dark:border-white/10">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive Code Terminal Showcase */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-[#090B10] border border-white/15 overflow-hidden shadow-2xl">
            {/* Terminal Top Bar */}
            <div className="px-4 py-3 bg-[#11141D] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-mono text-gray-400">code_sample.js</span>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg">
                <button
                  onClick={() => setActiveCodeTab('backend')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    activeCodeTab === 'backend' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Backend API
                </button>
                <button
                  onClick={() => setActiveCodeTab('frontend')}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    activeCodeTab === 'frontend' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  React GSAP
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-4 relative font-mono text-xs text-gray-300 overflow-x-auto max-h-[360px]">
              <button
                onClick={handleCopyCode}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
              <pre className="text-gray-300 font-mono text-[11px] leading-relaxed">
                <code>{codeSnippets[activeCodeTab]}</code>
              </pre>
            </div>

            <div className="px-4 py-2 bg-[#0C0F15] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span>MERN Stack Architecture</span>
              <span className="text-emerald-400">● 100% Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
