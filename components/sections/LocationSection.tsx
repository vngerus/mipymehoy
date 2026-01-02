'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export function LocationSection() {
  return (
    <section className="bg-[#fefefe] dark:bg-neutral-950 py-20 px-4 md:px-8 w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -left-[10%] top-[20%] w-[300px] h-[300px] bg-[#24bbd6]/10 rounded-full blur-[100px]" />
        <div className="absolute right-[0%] bottom-[0%] w-[300px] h-[300px] bg-[#92e138]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            Encuéntranos
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Ven a tomar un café y hablemos del futuro de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 h-full"
          >
            <div className="h-full relative group rounded-3xl p-[2px] bg-gradient-to-br from-[#24bbd6] via-[#5ddc88] to-[#92e138]">
              <div className="h-full rounded-[22px] bg-white dark:bg-neutral-900 p-6 md:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-[#24bbd6]/10 to-[#92e138]/10 mb-6">
                    <MapPin className="w-8 h-8 text-[#1a8f5c]" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Serena Oriente
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                    Estamos ubicados en un sector de fácil acceso y tranquilo. Ideal para conversar
                    sin interrupciones.
                  </p>

                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#24bbd6] uppercase tracking-wider">
                      Dirección Comercial
                    </p>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                      Av. Guillermo Ulriksen 2821
                    </p>
                    <p className="text-gray-500">La Serena, Chile</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Av.%20Guillermo%20Ulriksen%202821%2C%20La%20Serena%2C%20Chile"
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#24bbd6] to-[#92e138] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#24bbd6]/20 transition-all hover:shadow-[#24bbd6]/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Navigation className="w-4 h-4 fill-current" />
                    <span>Cómo llegar</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.%20Guillermo%20Ulriksen%202821%2C%20La%20Serena%2C%20Chile"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver en Mapa
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 min-h-[300px] h-full w-full"
          >
            <div className="w-full h-full overflow-hidden rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-2xl relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.949747942548!2d-71.22916892443834!3d-29.91428397498912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca636605063f%3A0x8673323058091a0!2sAv.%20Guillermo%20Ulriksen%202821%2C%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1717462839213!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-black/5 dark:ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
