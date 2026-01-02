'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const faqData = [
  {
    question: '¿Qué hace diferente a MiPymeHoy y por qué puedo confiar en ustedes?',
    answer:
      'Porque no hablamos enredado ni te llenamos de tecnicismos. En MiPymeHoy acompañamos a los emprendedores como si fuéramos parte de su equipo. Nos importa que entiendas tus números, que tengas claridad en tu negocio y que sientas confianza en cada paso que das.',
  },
  {
    question: '¿Cómo pueden ayudarme a hacer crecer mi pyme?',
    answer:
      'Nosotros nos encargamos de lo que muchas veces te quita tiempo y energía: lo contable, lo tributario y lo administrativo. Así tú puedes enfocarte en vender, crecer y hacer lo que más te apasiona de tu negocio.',
  },
  {
    question: '¿Pueden ayudar a mi pyme, aunque sea pequeña o recién empiece?',
    answer:
      '¡Claro que sí! Todos los grandes negocios partieron pequeños. Nos encanta apoyar a quienes recién están comenzando, porque sabemos lo importante que es tener una buena base desde el inicio.',
  },
  {
    question: '¿Es necesario estar formalizado para recibir asesoría?',
    answer:
      'No. Si aún no formalizas tu pyme, podemos ayudarte en ese proceso paso a paso. Desde crear tu empresa, sacar el RUT, hasta guiarte en la patente municipal.',
  },
  {
    question: '¿Qué tipo de empresas suelen trabajar con ustedes?',
    answer:
      'Trabajamos con todo tipo de pymes: desde quienes venden por internet, profesionales independientes, hasta negocios familiares y empresas con más trayectoria. Lo importante no es el tamaño, sino las ganas de crecer.',
  },
  {
    question: '¿Cómo hago para recibir una propuesta para mi empresa?',
    answer:
      'Muy simple: cuéntanos qué necesitas y cómo funciona tu negocio, y nosotros preparamos una propuesta personalizada, sin compromiso. Estamos disponibles de lunes a viernes, y siempre buscamos responder rápido. Si tienes una duda, no vas a sentir que estás solo, porque nuestro equipo estará ahí para apoyarte.',
  },
  {
    question: '¿Dónde puedo visitarlos o contactarlos?',
    answer:
      'Puedes venir a nuestra oficina, agendar una reunión online o simplemente escribirnos por WhatsApp, correo o redes sociales. Nos adaptamos a la forma en que te sea más cómodo comunicarte.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium tracking-tight text-neutral-800 dark:text-neutral-50 md:text-5xl mb-4">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto max-w-lg text-base text-neutral-600 dark:text-neutral-400">
            Resolvemos tus dudas más comunes. Si no encuentras lo que buscas, contáctanos
            directamente en{' '}
            <a
              href="mailto:contacto@mipymehoy.cl"
              className="text-[#24bbd6] hover:underline font-medium"
            >
              contacto@mipymehoy.cl
            </a>
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          {faqData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className="group mb-4 w-full cursor-pointer rounded-xl border border-neutral-200 bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition-all duration-200 hover:border-[#24bbd6]/50 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200 pr-8">
                  {faq.question}
                </h3>

                <div className="relative mt-1 h-5 w-5 flex-shrink-0 text-neutral-500 group-hover:text-[#24bbd6] dark:text-neutral-400 transition-colors">
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openIndex === index ? 90 : 0,
                      opacity: openIndex === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openIndex === index ? 0 : -90,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Minus className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false} mode="wait">
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4">
                      <TextGenerateEffect
                        words={faq.answer}
                        className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400 font-normal"
                        duration={0.1}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
