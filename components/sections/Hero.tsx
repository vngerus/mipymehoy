'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 dark:bg-neutral-950">
      <div className="absolute inset-0 -z-20 h-full w-full select-none opacity-40 dark:opacity-20">
        <Image
          src="/assets/bg.svg"
          alt="Fondo decorativo"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-linear-to-l from-blue-50/50 to-transparent dark:from-blue-900/10" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-purple-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left">
            <h1 className="relative mb-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <div className="relative block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 text-[#24bbd6]"
                  style={{ clipPath: 'inset(0 50% 0 0)' }}
                >
                  Impulsa tu Pyme en
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="block text-[#92e138]"
                  style={{ clipPath: 'inset(0 0 0 50%)' }}
                >
                  Impulsa tu Pyme en
                </motion.span>
              </div>
              <div className="relative block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                  className="absolute inset-0 text-[#24bbd6]"
                  style={{ clipPath: 'inset(0 50% 0 0)' }}
                >
                  horas, no en días.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                  className="block text-[#92e138]"
                  style={{ clipPath: 'inset(0 0 0 50%)' }}
                >
                  horas, no en días.
                </motion.span>
              </div>
            </h1>
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
              <Image
                src="/assets/bg.svg"
                alt="Imagen principal de MiPymeHoy"
                fill
                className="object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8 max-w-lg text-lg text-slate-600 dark:text-slate-400"
            >
              Gestiona inventarios, ventas y clientes en una sola plataforma. Utiliza nuestras
              herramientas de IA de vanguardia para despegar hoy mismo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative flex w-full max-w-md items-center rounded-full bg-white p-2 shadow-lg ring-1 ring-gray-200 dark:bg-neutral-900 dark:ring-neutral-800"
            >
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full flex-1 border-none bg-transparent px-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0 dark:text-white"
              />
              <button className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-medium text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black">
                Empezar
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex gap-4 text-sm text-slate-500 font-semibold"
            >
              <span className="flex items-center gap-1  text-black">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Sin tarjeta de crédito
              </span>
              <span className="flex items-center gap-1 text-black">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Plan gratuito disponible
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
