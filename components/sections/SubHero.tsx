'use client';

import { Compass, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function SubHero() {
  return (
    <div className="relative w-full overflow-hidden bg-[#fefefe] dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 md:pb-24 lg:pb-32">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl sm:h-[500px] md:h-[600px] lg:h-[700px]">
          <div className="relative h-full w-full">
            <Image
              src="/assets/mipymeall.svg"
              alt="MiPymeHoy - Gestión de Pymes"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-2 top-4 w-[calc(100%-1rem)] max-w-[280px] rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800 sm:left-4 sm:top-8 sm:w-64 sm:p-5 md:left-8 md:top-12"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#24bbd6]/10 sm:h-12 sm:w-12">
              <Compass className="h-5 w-5 text-[#24bbd6] sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white sm:text-lg">
              Ruta clara
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              Te acompañamos desde la idea hasta la consolidación con un camino definido y
              estructurado.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-2 top-4 w-[calc(100%-1rem)] max-w-[280px] rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800 sm:right-4 sm:top-8 sm:w-64 sm:p-5 md:right-8 md:top-12"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#92e138]/10 sm:h-12 sm:w-12">
              <TrendingUp className="h-5 w-5 text-[#1a8f5c] sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white sm:text-lg">
              Crecimiento medible
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              Resultados reales y tangibles que puedes medir. Más de 600 pymes han crecido con
              nosotros.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-24 left-2 w-[calc(100%-1rem)] max-w-[280px] rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800 sm:bottom-32 sm:left-4 sm:w-64 sm:p-5 md:bottom-24 md:left-8"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#24bbd6]/10 sm:h-12 sm:w-12">
              <Users className="h-5 w-5 text-[#24bbd6] sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white sm:text-lg">
              Acompañamiento cercano
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
              Con más de 7 años de experiencia, te guiamos en cada paso del proceso de forma
              personalizada.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-8 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800 sm:bottom-12 sm:p-5 md:bottom-16"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-base">
                <span className="font-semibold">¿Listo para crecer?</span> Descubre cómo podemos
                impulsar tu negocio.
              </p>
              <ArrowRight className="h-5 w-5 shrink-0 text-[#1a8f5c] sm:h-6 sm:w-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
