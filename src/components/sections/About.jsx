import React from 'react';
import Marquee from '../ui/Marquee';
import SectionHeading from '../ui/SectionHeading';
import { MapPin, Globe, Sparkles, HeartHandshake, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Zap,
      title: "Performance First",
      text: "Optimizing bundle sizes, API query latencies, and rendering pipelines to deliver instant page loads."
    },
    {
      icon: ShieldCheck,
      title: "Resilient Architecture",
      text: "Writing modular, strongly-structured codebases across MongoDB, Node, Express, and React."
    },
    {
      icon: Sparkles,
      title: "Design & Motion Craft",
      text: "Infusing high-end GSAP micro-animations and responsive Tailwind layouts into every viewport."
    },
    {
      icon: HeartHandshake,
      title: "Client Partnership",
      text: "Clear communication, transparent milestones, and proactive problem solving for high ROI."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Kinetic Marquee Banner */}
      <div className="mb-20">
        <Marquee text="ABOUT AHMAD NAZIR • FULL STACK MERN ENGINEER • BUILDING MODERN WEB SOLUTIONS • " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Profile Card with User Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-6 glass-card border border-gray-200 dark:border-white/10 shadow-2xl">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-blue-600/20 to-purple-600/20 mb-6 border border-gray-200 dark:border-white/10">
                <img
                  src="/assets/images/ahmad-profile.jpg"
                  alt="Ahmad Nazir"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0B0D13] via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-[#0E1118]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-xs font-heading font-semibold text-gray-900 dark:text-white">Ahmad Nazir</div>
                    <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Full-Stack Engineer</div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
              </div>

              {/* Status details */}
              <div className="space-y-2 text-xs font-mono text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Globe size={14} className="text-blue-500 dark:text-blue-400" /> Availability:
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">Remote Worldwide</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-purple-500 dark:text-purple-400" /> Focus:
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">MERN & UI Engineering</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.03]">
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <MapPin size={14} className="text-emerald-500 dark:text-emerald-400" /> Expertise:
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Full Stack MERN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Engineering Story */}
          <div className="lg:col-span-7">
            <SectionHeading
              badge="Behind the Code"
              title="Driven by Craft, Architecture & Impact"
              subtitle="The journey of a dedicated software engineer focused on technical precision, clean abstractions, and exceptional digital experiences."
            />

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base font-sans-tight leading-relaxed">
              <p>
                My passion for web development began with a curiosity about how clean code transforms into engaging user interfaces. What started with experimental frontend layouts quickly grew into a rigorous commitment to mastering full-stack system architecture.
              </p>
              <p>
                Today, I operate as a versatile <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack & MERN Developer</span>. I architect resilient backend APIs with Node.js and Express, design scalable NoSQL schemas with MongoDB, build responsive, state-driven user interfaces in React, and bring web designs alive with silky GSAP motion.
              </p>
              <p>
                Whether building full-scale e-commerce platforms, custom API integrations, or high-performance interactive web products, my goal is always the same: deliver clean, maintainable code, exceptional speed, and experiences that users love.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-blue-400 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2 mb-1.5 text-gray-900 dark:text-white font-heading font-semibold text-sm">
                      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-sans-tight">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
