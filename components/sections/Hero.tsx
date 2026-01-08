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
        y: -100,
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
          const xFactor = (clientX / window.innerWidth - 0.5) * 30;
          const yFactor = (clientY / window.innerHeight - 0.5) * 30;

          gsap.to(blob1Ref.current, { x: xFactor, y: yFactor, duration: 2, ease: 'power2.out' });
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
      className="relative w-full overflow-hidden min-h-dvh flex flex-col justify-start bg-white dark:bg-neutral-950"
    >
      <div
        ref={blob1Ref}
        className="absolute bottom-[-15%] left-[-10%] w-150 h-150 lg:w-200 lg:h-200 rounded-full bg-[#92e138]/20 blur-[120px] pointer-events-none opacity-60"
      />
      <div
        ref={blob2Ref}
        className="absolute top-[-10%] right-[-10%] w-150 h-150 lg:w-200 lg:h-200 rounded-full bg-[#24bbd6]/20 blur-[120px] pointer-events-none opacity-60"
      />

      <Container className="relative z-10 pt-32 pb-48 sm:pt-40 sm:pb-64 md:pt-48 lg:pb-80">
        <div
          ref={contentRef}
          className="will-change-transform flex flex-col items-center text-center lg:items-start lg:text-left max-w-5xl mx-auto lg:mx-0"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 px-4 py-1.5 shadow-sm transition-transform hover:scale-105">
            <div className="flex shrink-0 -space-x-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="h-5 w-5 rounded-full bg-linear-to-br from-[#24bbd6] to-[#92e138] ring-2 ring-white"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-neutral-600 tracking-wide">
              Confiado por +600 pymes
            </span>
          </div>
          <h1 className="mb-8 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.1]">
            Impulsa tu negocio desde el{' '}
            <span className="inline-block whitespace-nowrap relative">
              <PointerHighlight
                rectangleClassName="bottom-2 left-0 right-0 bg-yellow-300/50 h-3 lg:h-4"
                pointerClassName="h-5 w-5 text-yellow-500"
                containerClassName="inline-block relative z-10"
              >
                <span className="relative z-10">inicio</span>
              </PointerHighlight>
            </span>{' '}
            hasta el crecimiento con{' '}
            <span className="inline-block whitespace-nowrap relative">
              <PointerHighlight
                rectangleClassName="bottom-2 left-0 right-0 bg-yellow-300/50 h-3 lg:h-4"
                pointerClassName="h-5 w-5 text-yellow-500"
                containerClassName="inline-block relative z-10"
              >
                <span className="relative z-10">soluciones</span>
              </PointerHighlight>
            </span>{' '}
            reales.
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mx-auto lg:mx-0">
            Te acompañamos en cada etapa: formalización, contabilidad, marketing estratégico y
            oficina virtual. Todo en un solo lugar.
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <button className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#1a8f5c] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#1a8f5c]/20 transition-all hover:bg-[#157a4f] hover:-translate-y-1 active:scale-95 sm:w-auto">
              Empezar ahora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-8 py-4 text-base font-bold text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:-translate-y-1 active:scale-95 sm:w-auto">
              Descubrir más
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
