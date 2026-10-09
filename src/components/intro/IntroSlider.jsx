import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function IntroSlider({ onComplete }) {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);
  const progressRef = useRef(null);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Reset initial states
    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], { y: 60, opacity: 0 });
    gsap.set(subtitleRef.current, { y: 30, opacity: 0 });
    gsap.set(badgeRef.current, { scale: 0.8, opacity: 0 });
    gsap.set(progressRef.current, { width: '0%' });

    tl.to(badgeRef.current, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' })
      .to([text1Ref.current, text2Ref.current, text3Ref.current], {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out'
      })
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .to(progressRef.current, { width: '100%', duration: 1.2, ease: 'power1.inOut' })
      .to([text1Ref.current, text2Ref.current, text3Ref.current, subtitleRef.current, badgeRef.current], {
        y: -40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.in'
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut'
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: 'power3.inOut',
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080C] text-white px-4 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none -top-24 -left-24"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none -bottom-24 -right-24"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Experience badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-blue-500/10 text-blue-400 border border-blue-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Full-Stack & MERN Engineering
        </div>

        {/* Animated Headline */}
        <div className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-4 flex flex-wrap justify-center gap-x-4">
          <span ref={text1Ref} className="inline-block text-gray-400">Hi, I'm</span>
          <span ref={text2Ref} className="inline-block text-white">Ahmad</span>
          <span ref={text3Ref} className="inline-block bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Nazir</span>
        </div>

        {/* Role Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-xl text-gray-300 font-sans-tight font-normal max-w-md"
        >
          Building scalable web architectures, resilient APIs, and fluid digital experiences.
        </p>

        {/* Loading progress bar */}
        <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
          ></div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs font-mono tracking-wider text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-colors uppercase"
      >
        Skip [ESC]
      </button>
    </div>
  );
}
