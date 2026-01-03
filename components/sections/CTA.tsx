'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Sparkles, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';

export function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="w-full py-20">
      <Container>
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-[#24bbd6] via-[#5ddc88] to-[#92e138]">
          <div className="relative overflow-hidden rounded-[22px] bg-white dark:bg-neutral-900 shadow-2xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#24bbd6]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#92e138]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 md:p-16">
              <div className="mx-auto max-w-4xl">
                <AnimatePresence mode="wait">
                  {!isFormOpen ? (
                    <motion.div
                      key="cta-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#24bbd6]/20 to-[#92e138]/20 text-[#1a8f5c]">
                        <Sparkles className="h-8 w-8" />
                      </div>

                      <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 md:text-5xl">
                        Tu negocio es único, <br /> tu solución también debería serlo.
                      </h2>

                      <p className="mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Si sientes que ninguna opción encaja con lo que necesitas, no te preocupes.
                        Hablemos y creemos un plan a la medida exacta de tus desafíos.
                        <span className="block mt-2 font-semibold text-neutral-800 dark:text-neutral-200">
                          La primera asesoría corre por nuestra cuenta.
                        </span>
                      </p>

                      <button
                        onClick={() => setIsFormOpen(true)}
                        className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#24bbd6] to-[#92e138] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#24bbd6]/25 transition-all hover:scale-105 hover:shadow-[#24bbd6]/40 active:scale-95"
                      >
                        <span className="relative z-10">Quiero mi propuesta personalizada</span>
                        <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact-form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="mx-auto w-full max-w-xl"
                    >
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                          Diseñemos tu solución
                        </h3>
                        <button
                          onClick={() => setIsFormOpen(false)}
                          className="rounded-full p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <X className="h-6 w-6" />
                        </button>
                      </div>

                      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                            >
                              Nombre
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="Tu nombre"
                              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#24bbd6] focus:outline-none focus:ring-2 focus:ring-[#24bbd6]/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                            >
                              Correo
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="tucorreo@empresa.cl"
                              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#24bbd6] focus:outline-none focus:ring-2 focus:ring-[#24bbd6]/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                          >
                            ¿Qué desafío tienes hoy?
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            placeholder="Cuéntanos brevemente qué necesitas resolver..."
                            className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-800 placeholder:text-neutral-400 focus:border-[#24bbd6] focus:outline-none focus:ring-2 focus:ring-[#24bbd6]/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white transition-all"
                          />
                        </div>

                        <div className="pt-2 flex gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#24bbd6] to-[#92e138] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#24bbd6]/20 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <Send className="h-4 w-4" />
                            Enviar y coordinar
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsFormOpen(false)}
                            className="px-6 py-3 text-sm font-semibold text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                          >
                            Volver
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
