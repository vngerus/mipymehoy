'use client';

import { useRef } from 'react';
import { Building2, TrendingUp, Calculator, Users, Briefcase, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { CometCard } from '@/components/ui/comet-card';
import Container from '@/components/layout/Container';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SubHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const centerImageRef = useRef<HTMLDivElement>(null);
  const cardTLRef = useRef<HTMLDivElement>(null);
  const cardTRRef = useRef<HTMLDivElement>(null);
  const cardBLRef = useRef<HTMLDivElement>(null);
  const cardBRRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);

  // Refs Mobile
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopContainerRef.current,
            start: 'top 70%',
          },
        });
        tl.from(centerImageRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }).from(centerCardRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.4');
        tl.from(
          svgRef.current?.children || [],
          {
            strokeDashoffset: 1000,
            strokeDasharray: 1000,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.inOut',
          },
          '-=0.5'
        );
        tl.from(
          [cardTLRef.current, cardTRRef.current, cardBLRef.current, cardBRRef.current],
          {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.05,
          },
          '-=0.8'
        );

        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: desktopContainerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
        parallaxTl.to(cardTLRef.current, { y: -60 }, 0);
        parallaxTl.to(cardTRRef.current, { y: -40 }, 0);
        parallaxTl.to(cardBLRef.current, { y: 40 }, 0);
        parallaxTl.to(cardBRRef.current, { y: 60 }, 0);
        parallaxTl.to(centerImageRef.current, { scale: 1.05 }, 0);
      });
      mm.add('(max-width: 1023px)', () => {
        const cards = mobileContainerRef.current?.children;
        if (cards) {
          gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: mobileContainerRef.current,
              start: 'top 80%',
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white dark:bg-neutral-950"
    >
      <Container className="pt-4 sm:pt-6 pb-16 md:pb-24 lg:pt-8 lg:pb-32">
        {/* Título Header */}
        <div ref={titleRef} className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
            Todo lo que tu Pyme necesita <br className="hidden md:block" /> en un solo lugar
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Un ecosistema de servicios integrados para que tú solo te preocupes de vender.
          </p>
        </div>

        <div
          ref={desktopContainerRef}
          className="relative hidden lg:block h-175 w-full max-w-6xl mx-auto"
        >
          {/* SVG Connector Lines */}
          <svg
            ref={svgRef}
            className="absolute inset-0 h-full w-full z-0 pointer-events-none opacity-40"
          >
            <path
              d="M 50% 50% L 20% 15%"
              stroke="currentColor"
              className="text-neutral-300 dark:text-neutral-700"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
            <path
              d="M 50% 50% L 80% 15%"
              stroke="currentColor"
              className="text-neutral-300 dark:text-neutral-700"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
            <path
              d="M 50% 50% L 20% 85%"
              stroke="currentColor"
              className="text-neutral-300 dark:text-neutral-700"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
            <path
              d="M 50% 50% L 80% 85%"
              stroke="currentColor"
              className="text-neutral-300 dark:text-neutral-700"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>

          {/* Central Hub Image */}
          <div
            ref={centerImageRef}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="relative w-175 h-175 opacity-90 transition-opacity duration-500 hover:opacity-100">
              <Image
                src="/assets/mipymeall.svg"
                alt="Ecosistema MiPymeHoy"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Center Stats Card */}
          <div
            ref={centerCardRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none will-change-transform"
          >
            <CometCard className="w-64" rotateDepth={15}>
              <div className="rounded-2xl bg-linear-to-br from-[#24bbd6] to-[#92e138] p-1 shadow-2xl">
                <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 text-center border border-white/40">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                    <Users className="h-7 w-7 text-[#1a8f5c]" />
                  </div>
                  <h3 className="text-4xl font-black text-white drop-shadow-md">600+</h3>
                  <p className="text-xs font-bold text-white uppercase tracking-wider drop-shadow-sm">
                    Pymes Felices
                  </p>
                </div>
              </div>
            </CometCard>
          </div>
          <div
            ref={cardTLRef}
            className="absolute left-0 top-10 z-20 will-change-transform hover:z-30"
          >
            <CometCard className="w-72">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-5 shadow-xl border border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800 transition-colors hover:border-[#24bbd6]/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                    <Building2 className="h-6 w-6 text-[#24bbd6]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white">
                  Oficina Virtual
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Dirección comercial y tributaria para formalizar.
                </p>
              </div>
            </CometCard>
          </div>
          <div
            ref={cardTRRef}
            className="absolute right-0 top-10 z-20 will-change-transform hover:z-30"
          >
            <CometCard className="w-72">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-5 shadow-xl border border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800 transition-colors hover:border-[#92e138]/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#92e138]/10">
                    <TrendingUp className="h-6 w-6 text-[#1a8f5c]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white">
                  Marketing
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Estrategias SEO y RRSS para atraer clientes.
                </p>
              </div>
            </CometCard>
          </div>
          <div
            ref={cardBLRef}
            className="absolute left-0 bottom-10 z-20 will-change-transform hover:z-30"
          >
            <CometCard className="w-72">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-5 shadow-xl border border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800 transition-colors hover:border-[#24bbd6]/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                    <Calculator className="h-6 w-6 text-[#24bbd6]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white">
                  Contabilidad
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Declaraciones mensuales y anuales sin estrés.
                </p>
              </div>
            </CometCard>
          </div>
          <div
            ref={cardBRRef}
            className="absolute right-0 bottom-10 z-20 will-change-transform hover:z-30"
          >
            <CometCard className="w-72">
              <div className="rounded-xl bg-white/95 backdrop-blur-sm p-5 shadow-xl border border-neutral-100 dark:bg-neutral-900/95 dark:border-neutral-800 transition-colors hover:border-[#92e138]/50">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#92e138]/10">
                    <Briefcase className="h-6 w-6 text-[#1a8f5c]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-neutral-900 dark:text-white">
                  Coworking
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Espacios modernos y equipados para tu equipo.
                </p>
              </div>
            </CometCard>
          </div>
        </div>
        <div
          ref={mobileContainerRef}
          className="lg:hidden mt-8 flex flex-col items-center gap-6 relative z-20"
        >
          {/* Mobile Highlight Card */}
          <CometCard className="w-full max-w-md">
            <div className="rounded-2xl bg-linear-to-br from-[#24bbd6] to-[#92e138] p-0.5 shadow-lg">
              <div className="rounded-[14px] bg-white dark:bg-neutral-900 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#24bbd6]/10">
                    <Users className="h-7 w-7 text-[#1a8f5c]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-neutral-900 dark:text-white">600+</h3>
                    <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Pymes Felices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CometCard>
          <div className="w-full max-w-md space-y-4">
            <CometCard className="w-full">
              <div className="rounded-xl bg-white border border-neutral-200 p-5 shadow-sm dark:bg-neutral-900 dark:border-neutral-800 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                  <Building2 className="h-6 w-6 text-[#24bbd6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Oficina Virtual
                  </h3>
                  <p className="text-sm text-neutral-500">Dirección tributaria inmediata.</p>
                </div>
              </div>
            </CometCard>

            <CometCard className="w-full">
              <div className="rounded-xl bg-white border border-neutral-200 p-5 shadow-sm dark:bg-neutral-900 dark:border-neutral-800 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#92e138]/10">
                  <TrendingUp className="h-6 w-6 text-[#1a8f5c]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Marketing</h3>
                  <p className="text-sm text-neutral-500">Atrae más clientes reales.</p>
                </div>
              </div>
            </CometCard>

            <CometCard className="w-full">
              <div className="rounded-xl bg-white border border-neutral-200 p-5 shadow-sm dark:bg-neutral-900 dark:border-neutral-800 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                  <Calculator className="h-6 w-6 text-[#24bbd6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Contabilidad
                  </h3>
                  <p className="text-sm text-neutral-500">Tus impuestos al día.</p>
                </div>
              </div>
            </CometCard>

            <CometCard className="w-full">
              <div className="rounded-xl bg-white border border-neutral-200 p-5 shadow-sm dark:bg-neutral-900 dark:border-neutral-800 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#92e138]/10">
                  <Briefcase className="h-6 w-6 text-[#1a8f5c]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Coworking</h3>
                  <p className="text-sm text-neutral-500">Oficinas equipadas.</p>
                </div>
              </div>
            </CometCard>
          </div>
        </div>
      </Container>
    </div>
  );
}
