import React, { useState } from 'react';
import IntroSlider from './components/intro/IntroSlider';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] dark:bg-[#0B0D13] text-[#0F172A] dark:text-[#F3F4F6] relative overflow-x-hidden selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* GSAP Cinematic Intro Slider */}
      {!introFinished && (
        <IntroSlider onComplete={() => setIntroFinished(true)} />
      )}

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col gap-8 sm:gap-16">
        <Hero />
        <Projects />
        <TechStack />
        <Services />
        <Experience />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
