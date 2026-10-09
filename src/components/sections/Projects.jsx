import React, { useState, useRef, useEffect } from 'react';
import { featuredProjects, otherProjects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import gsap from 'gsap';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const previewRef = useRef(null);

  const categories = ['All', 'Full Stack / MERN', 'Frontend & UI', 'Interactive Apps'];

  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeCategory);

  // GSAP Mouse Follower for Floating Project Preview
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (previewRef.current && hoveredProject) {
        gsap.to(previewRef.current, {
          x: e.clientX + 24,
          y: e.clientY - 100,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredProject]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        badge="Curated Portfolio"
        title="Featured Engineering Projects"
        subtitle="Full-stack web applications, reactive user interfaces, and algorithmic interactive systems engineered with high performance in mind."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                : 'bg-black/[0.04] text-gray-700 hover:text-gray-950 hover:bg-black/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 border border-gray-200 dark:border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl glass-card overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Project Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100 dark:bg-[#12151E]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0E1118] via-transparent to-transparent opacity-80"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0B0D13]/85 backdrop-blur-md text-blue-400 border border-blue-500/20">
                    {project.badge}
                  </span>
                </div>

                {project.stats && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#0B0D13]/90 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                    {project.stats.metric} • {project.stats.label}
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-6">
                <div className="text-xs font-mono text-gray-500 dark:text-gray-400 mb-1">{project.category}</div>
                <h3 className="text-xl font-heading font-bold text-gray-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-sans-tight leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-gray-700 dark:text-gray-300 bg-black/[0.04] dark:bg-white/5 border border-gray-200/80 dark:border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
              {project.isLive ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed select-none opacity-60"
                  title="Live preview inactive"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/5 text-gray-400 dark:text-gray-500 border border-gray-200/80 dark:border-white/5">
                    Inactive
                  </span>
                </span>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/5 hover:bg-black/10 text-gray-700 hover:text-black dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400 dark:hover:text-white transition-colors"
                  title="View Source on GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              ) : (
                <span
                  className="p-2 rounded-lg bg-black/5 text-gray-400 dark:bg-white/5 dark:text-gray-600 cursor-not-allowed opacity-50"
                  title="Source code private"
                >
                  <GithubIcon size={16} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SIGNATURE SECTION: Interactive Hover Preview List ("Other Projects") */}
      <div className="rounded-3xl glass-card p-6 sm:p-10 border border-gray-200 dark:border-white/10 relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 dark:border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              <Sparkles size={14} />
              Interactive Archive
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-950 dark:text-white">
              Explorations & Practice Work
            </h3>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-black/5 text-gray-700 border border-gray-200 dark:bg-white/10 dark:text-gray-300 dark:border-white/10">
            {otherProjects.length} Projects
          </span>
        </div>

        {/* Project Interactive Rows */}
        <div className="divide-y divide-gray-200/80 dark:divide-white/5">
          {otherProjects.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredProject(item)}
              onMouseLeave={() => setHoveredProject(null)}
              className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors duration-200 hover:px-2 rounded-xl"
            >
              <div className="flex items-start md:items-center gap-4">
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.category}
                </span>
                <div>
                  <h4 className={`text-lg sm:text-xl font-heading font-semibold text-gray-950 dark:text-white transition-all duration-200 flex items-center gap-2 ${
                    item.isLive ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1' : ''
                  }`}>
                    {item.title}
                    {item.isLive && (
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-sans-tight mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-between md:justify-end">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-black/[0.03] dark:bg-white/[0.03] border border-gray-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.isLive ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/5 group-hover:bg-blue-600 text-gray-700 group-hover:text-white dark:bg-white/5 dark:text-gray-300 dark:group-hover:text-white transition-all shadow-sm"
                    aria-label={`Open ${item.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span
                    className="p-2 rounded-full bg-black/5 text-gray-400 dark:bg-white/5 dark:text-gray-600 cursor-not-allowed opacity-40 select-none"
                    title="Live preview inactive"
                    aria-label={`Preview inactive for ${item.title}`}
                  >
                    <ExternalLink size={16} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview on Hover (GSAP Animated) */}
      {hoveredProject && (
        <div
          ref={previewRef}
          className="fixed pointer-events-none z-50 hidden md:block w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/20 bg-[#0E1118]"
          style={{ top: 0, left: 0 }}
        >
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
            <span className="text-xs font-mono font-medium text-white">
              {hoveredProject.title}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
