import React, { useState } from 'react';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import { Layers, Cpu, Sparkles, Database, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Database: Database,
};

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Engineering Capabilities"
        title="Full-Stack & MERN Services"
        subtitle="End-to-end technical solutions designed for speed, security, responsiveness, and scalable user experiences."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Service Selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            const isActive = activeService === index;

            return (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                  isActive
                    ? 'bg-blue-50/80 dark:bg-blue-600/10 border-blue-400 dark:border-blue-500/40 text-blue-950 dark:text-white shadow-lg shadow-blue-500/10'
                    : 'bg-white/60 dark:bg-white/[0.02] border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-400 hover:bg-white dark:hover:bg-white/[0.05]'
                }`}
              >
                <div
                  className={`p-3 rounded-xl transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-black/[0.04] text-gray-600 dark:bg-white/5 dark:text-gray-400'
                  }`}
                >
                  <Icon size={22} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">{service.id}</span>
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-500">MERN Ready</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-950 dark:text-white mt-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Service Detailed Card */}
        <div className="lg:col-span-7">
          {services[activeService] && (
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-gray-200 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-heading font-bold text-blue-600 dark:text-blue-400">
                    {services[activeService].id}
                  </span>
                  <div className="h-6 w-px bg-gray-200 dark:bg-white/10"></div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Service Scope
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Production Ready
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-950 dark:text-white mb-3">
                {services[activeService].title}
              </h3>

              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-300 font-medium font-sans-tight mb-4">
                {services[activeService].tagline}
              </p>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-sans-tight leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                  Key Deliverables & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/5"
                    >
                      <div className="p-1 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 font-sans-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  Customized for modern startups & enterprise applications.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-md w-full sm:w-auto justify-center"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
