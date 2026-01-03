'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import Container from '@/components/layout/Container';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#92e138]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-[#24bbd6]/5 blur-3xl" />
      <Container className="relative z-10 pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 lg:pt-28 lg:pb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800 sm:mb-6 sm:gap-2 sm:px-4 sm:py-2 md:mb-8"
        >
          <div className="flex shrink-0 -space-x-2">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="h-5 w-5 rounded-full bg-gradient-to-br from-[#24bbd6] to-[#92e138] ring-2 ring-white dark:ring-neutral-900 sm:h-6 sm:w-6"
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
            Amado por miles de pymes con 4.8 de calificación
          </span>
        </motion.div>
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl xl:max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-2xl font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:mb-5 sm:leading-tight md:text-4xl md:mb-6 lg:text-5xl xl:text-5xl"
          >
            Impulsa tu negocio desde el{' '}
            <PointerHighlight
              rectangleClassName="bottom-1 left-0 right-0 border-0 bg-yellow-300/60 dark:bg-yellow-400/40 sm:bottom-1.5 md:bottom-2 h-2 sm:h-2.5 md:h-3"
              pointerClassName="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5"
              containerClassName="inline-block"
            >
              <span className="relative z-10">inicio</span>
            </PointerHighlight>{' '}
            hasta el crecimiento con{' '}
            <PointerHighlight
              rectangleClassName="bottom-1 left-0 right-0 border-0 bg-yellow-300/60 dark:bg-yellow-400/40 sm:bottom-1.5 md:bottom-2 h-2 sm:h-2.5 md:h-3"
              pointerClassName="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5"
              containerClassName="inline-block"
            >
              <span className="relative z-10">servicios integrales</span>
            </PointerHighlight>{' '}
            en un solo lugar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-5 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base sm:mb-6 md:text-lg md:mb-8 lg:max-w-2xl"
          >
            Te acompañamos en cada etapa: formalización, contabilidad, marketing estratégico y
            oficina virtual. Todo lo que necesitas para hacer crecer tu Pyme en un solo lugar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <button className="flex items-center justify-center gap-2 rounded-lg bg-[#1a8f5c] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#157a4f] hover:shadow-lg active:scale-95 sm:px-6 sm:py-3 md:text-base">
              Empezar ahora
              <ArrowRight className="h-4 w-4 shrink-0" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md active:scale-95 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800 sm:px-6 sm:py-3 md:text-base">
              Descubrir más
            </button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
