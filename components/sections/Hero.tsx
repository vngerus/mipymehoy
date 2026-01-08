'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import Container from '@/components/layout/Container';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const contentElements = contentRef.current?.children;
      const mm = gsap.matchMedia();

      if (contentElements) {
        tl.from(contentElements, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }

      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      mm.add('(min-width: 1024px)', () => {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const xFactor = (clientX / window.innerWidth - 0.5) * 25;
          const yFactor = (clientY / window.innerHeight - 0.5) * 25;

          gsap.to(blob1Ref.current, {
            x: xFactor,
            y: yFactor,
            duration: 2,
            ease: 'power2.out',
          });

          gsap.to(blob2Ref.current, {
            x: -xFactor * 1.2,
            y: -yFactor * 1.2,
            duration: 2,
            ease: 'power2.out',
          });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden min-h-dvh flex flex-col justify-center bg-white dark:bg-neutral-950"
    >
      <div
        ref={blob1Ref}
        className="absolute -bottom-20 -left-20 w-75 h-75 lg:w-125 lg:h-125 rounded-full bg-[#92e138]/15 blur-[80px] lg:blur-[120px] pointer-events-none"
      />
      <div
        ref={blob2Ref}
        className="absolute -top-20 -right-20 w-75 h-75 lg:w-125 lg:h-125 rounded-full bg-[#24bbd6]/15 blur-[80px] lg:blur-[120px] pointer-events-none"
      />
      <Container className="relative z-10 pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 lg:pt-32 xl:pt-40 2xl:pt-48">
        <div
          ref={contentRef}
          className="will-change-transform flex flex-col items-center text-center lg:items-start lg:text-left max-w-6xl mx-auto lg:mx-0"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur-md border border-neutral-200/60 px-4 py-2 shadow-sm dark:bg-neutral-900/50 dark:border-neutral-800 transition-transform hover:scale-105">
            <div className="flex shrink-0 -space-x-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full bg-linear-to-br from-[#24bbd6] to-[#92e138] ring-2 ring-white dark:ring-neutral-900"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Confiado por +600 pymes
            </span>
          </div>
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.15]">
            Impulsa tu negocio desde el{' '}
            <span className="inline-block whitespace-nowrap">
              <PointerHighlight
                rectangleClassName="bottom-1 left-0 right-0 bg-yellow-300/60 dark:bg-yellow-400/40 h-3 lg:h-4 2xl:h-5"
                pointerClassName="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500"
                containerClassName="inline-block relative"
              >
                <span className="relative z-10">inicio</span>
              </PointerHighlight>
            </span>{' '}
            hasta el crecimiento con{' '}
            <span className="inline-block whitespace-nowrap">
              <PointerHighlight
                rectangleClassName="bottom-1 left-0 right-0 bg-yellow-300/60 dark:bg-yellow-400/40 h-3 lg:h-4 2xl:h-5"
                pointerClassName="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500"
                containerClassName="inline-block relative"
              >
                <span className="relative z-10">soluciones</span>
              </PointerHighlight>
            </span>{' '}
            reales.
          </h1>
          <p className="mb-8 max-w-xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl lg:max-w-2xl xl:text-2xl leading-relaxed">
            Te acompañamos en cada etapa: formalización, contabilidad, marketing estratégico y
            oficina virtual. Todo en un solo lugar.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <button className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#1a8f5c] px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#157a4f] hover:shadow-lg hover:shadow-[#1a8f5c]/25 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto xl:px-10 xl:py-4 xl:text-lg">
              Empezar ahora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-8 py-3.5 text-base font-bold text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:-translate-y-0.5 active:scale-[0.98] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 sm:w-auto xl:px-10 xl:py-4 xl:text-lg">
              Descubrir más
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
