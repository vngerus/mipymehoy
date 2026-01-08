'use client';

import { useRef } from 'react';

import { KPISection } from './KPISection';
import { SubHero } from './SubHero';
import { HeroSection } from './Hero';

export function HeroWrapper() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className="relative w-full bg-white dark:bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-linear(ellipse_at_top,_var(--t200gradient-stops))] from-neutral-100 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950 opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-200 h-200 bg-[#24bbd6]/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[20%] left-[-10%] w-200 h-200 bg-[#92e138]/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[50%] right-[10%] w-150 h-150 bg-[#24bbd6]/5 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <KPISection />
        <SubHero />
      </div>
    </div>
  );
}
