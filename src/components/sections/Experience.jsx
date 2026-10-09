import React from 'react';
import { experienceJourney, educationHistory } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Career Progression"
        title="Experience & Education"
        subtitle="A proven track record of delivering production web applications, backed by a strong foundation in computer science."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Full-Stack Experience */}
        <div>
          <div className="flex items-center gap-2.5 mb-8 text-blue-600 dark:text-blue-400 font-mono text-sm tracking-wide uppercase font-semibold">
            <Briefcase size={18} />
            <span>Professional Experience</span>
          </div>

          <div className="relative border-l border-gray-200 dark:border-white/10 ml-4 space-y-10 pl-6">
            {experienceJourney.map((item, index) => (
              <div key={index} className="relative group">
                {/* Node marker */}
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-[#F8F9FC] dark:border-[#0B0D13] group-hover:scale-125 transition-transform"></div>

                <div className="p-6 rounded-2xl glass-card border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                      {item.period}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{item.organization}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-950 dark:text-white mb-2">
                    {item.role}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 font-sans-tight leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-gray-700 dark:text-gray-300 bg-black/[0.04] dark:bg-white/5 border border-gray-200/80 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Foundation */}
        <div>
          <div className="flex items-center gap-2.5 mb-8 text-purple-600 dark:text-purple-400 font-mono text-sm tracking-wide uppercase font-semibold">
            <GraduationCap size={18} />
            <span>Academic Background</span>
          </div>

          <div className="space-y-4">
            {educationHistory.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-gray-200 dark:border-white/10 hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">{edu.institution}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-semibold text-gray-950 dark:text-white mb-2">
                  {edu.degree}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-sans-tight leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
