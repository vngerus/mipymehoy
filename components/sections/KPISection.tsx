'use client';

import { useRef } from 'react';
import Container from '@/components/layout/Container';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Pymes Asesoradas', value: 600, suffix: '+' },
  { label: 'Satisfacción', value: 98, suffix: '%' },
  { label: 'Áreas de Servicio', value: 4, suffix: '' },
  { label: 'Años de Experiencia', value: 10, suffix: '+' },
];

export function KPISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from(cardRef.current, { y: 60, opacity: 0, duration: 1, ease: 'power3.out' });
      tl.from('.kpi-border', { scaleX: 0, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.8');
      tl.from(
        '.stat-content',
        { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' },
        '-=0.6'
      );

      const numbers = gsap.utils.toArray<HTMLElement>('.stat-number');
      numbers.forEach((element, i) => {
        const targetValue = stats[i].value;
        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: targetValue,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
          onUpdate: () => {
            element.textContent = Math.floor(proxy.val).toLocaleString();
          },
        });
      });
      gsap.to(cardRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full z-20 -mt-24 sm:-mt-32 lg:-mt-40 mb-16 pointer-events-none"
    >
      <Container>
        <div
          ref={cardRef}
          className="relative pointer-events-auto rounded-[2rem] border border-white/60 bg-white/60 shadow-2xl shadow-neutral-200/20 backdrop-blur-xl overflow-hidden dark:bg-neutral-900/60 dark:border-neutral-800 dark:shadow-none"
        >
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#a3a3a3_1px,transparent_1px)] bg-size:16px_16px opacity-20 pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/90" />
          <div className="kpi-border absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-transparent via-[#24bbd6] to-transparent opacity-80 origin-center" />
          <div className="kpi-border absolute inset-x-0 bottom-0 h-0.75 bg-linear-to-r from-transparent via-[#92e138] to-transparent opacity-80 origin-center" />

          {/* Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`
                  stat-content relative flex flex-col items-center justify-center text-center 
                  py-10 px-4
                  /* Bordes internos sutiles */
                  ${index % 2 === 0 ? 'border-r border-neutral-200/30 lg:border-none' : ''} 
                  ${index < 2 ? 'border-b border-neutral-200/30 lg:border-none' : ''}
                `}
              >
                <dt className="flex items-baseline gap-0.5 text-4xl lg:text-5xl font-black leading-none mb-3 tracking-tighter">
                  <span className="bg-linear-to-br from-[#24bbd6] to-[#92e138] bg-clip-text text-transparent drop-shadow-sm filter">
                    <span className="stat-number">0</span>
                    {stat.suffix}
                  </span>
                </dt>

                <dd className="text-[10px] lg:text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  {stat.label}
                </dd>
                {index !== stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-neutral-400/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
