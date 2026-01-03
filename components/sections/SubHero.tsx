'use client';

import { Building2, TrendingUp, Calculator, Users, Briefcase, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CometCard } from '@/components/ui/comet-card';
import Container from '@/components/layout/Container';

export function SubHero() {
  return (
    <div className="relative w-full overflow-hidden">
      <Container className="pb-16 md:pb-24 lg:pb-32">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Todo lo que tu Pyme necesita en un solo lugar
          </h2>
        </div>

        <div className="relative h-[600px] w-full lg:h-[700px]">
          <svg className="absolute inset-0 h-full w-full z-0 hidden md:block pointer-events-none opacity-20">
            <path
              d="M 50% 50% L 20% 15%"
              stroke="gray"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M 50% 50% L 80% 15%"
              stroke="gray"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M 50% 50% L 20% 85%"
              stroke="gray"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M 50% 50% L 80% 85%"
              stroke="gray"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>

          <div className="relative h-full w-full z-10 flex items-center justify-center">
            <div className="relative w-[60%] h-[60%] opacity-80 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
              <Image
                src="/assets/mipymeall.svg"
                alt="Ecosistema MiPymeHoy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-4 top-4 md:left-[5%] md:top-[5%] z-20 cursor-pointer group"
          >
            <CometCard className="w-64">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 shadow-lg border border-gray-100 dark:bg-neutral-900/90 dark:border-neutral-800 transition-colors group-hover:border-[#24bbd6]/50">
                <div className="flex justify-between items-start">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                    <Building2 className="h-6 w-6 text-[#24bbd6]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Oficina Virtual
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dirección comercial y tributaria para formalizar tu negocio hoy.
                </p>
              </div>
            </CometCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute right-4 top-4 md:right-[5%] md:top-[5%] z-20 cursor-pointer group"
          >
            <CometCard className="w-64">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 shadow-lg border border-gray-100 dark:bg-neutral-900/90 dark:border-neutral-800 transition-colors group-hover:border-[#92e138]/50">
                <div className="flex justify-between items-start">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#92e138]/10">
                    <TrendingUp className="h-6 w-6 text-[#1a8f5c]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">Marketing</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Estrategias SEO y RRSS para atraer clientes locales reales.
                </p>
              </div>
            </CometCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <CometCard className="w-72" rotateDepth={10}>
              <div className="rounded-2xl bg-gradient-to-br from-[#24bbd6] to-[#92e138] p-1 shadow-2xl">
                <div className="rounded-xl bg-black/10 backdrop-blur-md p-6 text-center border border-white/20">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                    <Users className="h-7 w-7 text-[#1a8f5c]" />
                  </div>
                  <h3 className="text-3xl font-black text-white">600+</h3>
                  <p className="text-sm font-medium text-white/90 uppercase tracking-wide">
                    Pymes Felices
                  </p>
                  <div className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                    7 años de experiencia
                  </div>
                </div>
              </div>
            </CometCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-4 left-4 md:bottom-[5%] md:left-[5%] z-20 cursor-pointer group"
          >
            <CometCard className="w-64">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 shadow-lg border border-gray-100 dark:bg-neutral-900/90 dark:border-neutral-800 transition-colors group-hover:border-[#24bbd6]/50">
                <div className="flex justify-between items-start">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#24bbd6]/10">
                    <Calculator className="h-6 w-6 text-[#24bbd6]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  Contabilidad
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Olvídate del SII. Nosotros nos encargamos de tus declaraciones.
                </p>
              </div>
            </CometCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-4 right-4 md:bottom-[5%] md:right-[5%] z-20 cursor-pointer group"
          >
            <CometCard className="w-64">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 shadow-lg border border-gray-100 dark:bg-neutral-900/90 dark:border-neutral-800 transition-colors group-hover:border-[#92e138]/50">
                <div className="flex justify-between items-start">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#92e138]/10">
                    <Briefcase className="h-6 w-6 text-[#1a8f5c]" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">Coworking</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Espacios de trabajo modernos y equipados para tu equipo.
                </p>
              </div>
            </CometCard>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
