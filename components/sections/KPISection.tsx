'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/layout/Container';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { label: 'Pymes Asesoradas', value: 600, suffix: '+' },
  { label: 'Satisfacción', value: 98, suffix: '%' },
  { label: 'Áreas de Servicio', value: 4, suffix: '' },
  { label: 'Años de Experiencia', value: 10, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: 2000,
  });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums" />;
}

export function KPISection() {
  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <Container className="relative z-10">
        <div className="relative rounded-2xl border border-neutral-200 bg-white/60 shadow-lg shadow-neutral-200/40 backdrop-blur-md overflow-hidden">
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#24bbd6] opacity-15 blur-[50px]"></div>
          <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#92e138] opacity-15 blur-[50px]"></div>
          <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8 relative z-10 gap-6 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center justify-center text-center w-full md:w-auto"
              >
                <dt className="text-3xl md:text-4xl font-bold leading-none mb-1">
                  <span className="bg-gradient-to-r from-[#24bbd6] to-[#92e138] bg-clip-text text-transparent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </dt>

                <dd className="text-[10px] md:text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </dd>
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gradient-to-b from-transparent via-[#24bbd6]/30 to-transparent"></div>
                )}
                {index !== stats.length - 1 && (
                  <div className="md:hidden w-12 h-[1px] bg-gradient-to-r from-transparent via-[#24bbd6]/30 to-transparent mt-3"></div>
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#24bbd6]/30 to-transparent opacity-40"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#92e138]/30 to-transparent opacity-40"></div>
        </div>
      </Container>
    </section>
  );
}
