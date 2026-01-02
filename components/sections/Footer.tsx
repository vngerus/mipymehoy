'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone, Clock } from 'lucide-react';
import corfoLogo from '@/public/assets/corfo.webp';
import sercotecLogo from '@/public/assets/sercotec.webp';
import siiLogo from '@/public/assets/sii2.webp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-neutral-200/50 bg-white py-12 overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24bbd6] opacity-[0.15] blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              MiPyme<span className="text-[#24bbd6]">Hoy</span>
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Acompañamos a los emprendedores con soluciones reales en contabilidad, marketing y
              espacios de trabajo. Hacemos fácil lo difícil.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/mipymehoy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#24bbd6]/10 hover:text-[#24bbd6]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mipyme/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#24bbd6]/10 hover:text-[#24bbd6]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573721821334"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors hover:bg-[#24bbd6]/10 hover:text-[#24bbd6]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-neutral-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#24bbd6]" />
                <span>Av. Guillermo Ulriksen 2821, La Serena</span>
              </li>
              <li>
                <a
                  href="mailto:contacto@mipymehoy.cl"
                  className="flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-[#24bbd6]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#24bbd6]" />
                  <span>contacto@mipymehoy.cl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+56966515212"
                  className="flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-[#24bbd6]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#24bbd6]" />
                  <span>+56 9 6651 5212</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-neutral-600">
                <Clock className="h-4 w-4 shrink-0 text-[#92e138]" />
                <span>Lunes a Sábado</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
              Alianzas & Respaldo
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://www.corfo.gob.cl/sites/cpp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-neutral-200/50 bg-neutral-50/50 p-4 transition-all duration-300 hover:border-[#24bbd6]/40 hover:bg-[#24bbd6]/10 hover:shadow-[0_0_15px_rgba(36,187,214,0.15)]"
              >
                <Image
                  src={corfoLogo}
                  alt="Respaldo CORFO"
                  className="h-auto w-auto max-h-full max-w-full object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </a>
              <a
                href="https://www.sercotec.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-neutral-200/50 bg-neutral-50/50 p-4 transition-all duration-300 hover:border-[#24bbd6]/40 hover:bg-[#24bbd6]/10 hover:shadow-[0_0_15px_rgba(36,187,214,0.15)]"
              >
                <Image
                  src={sercotecLogo}
                  alt="Respaldo Sercotec"
                  className="h-auto w-auto max-h-full max-w-full object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </a>
              <a
                href="https://homer.sii.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-neutral-200/50 bg-neutral-50/50 p-4 transition-all duration-300 hover:border-[#24bbd6]/40 hover:bg-[#24bbd6]/10 hover:shadow-[0_0_15px_rgba(36,187,214,0.15)]"
              >
                <Image
                  src={siiLogo}
                  alt="Respaldo SII"
                  className="h-auto w-auto max-h-full max-w-full object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </a>
            </div>
            <p className="text-xs text-neutral-500">
              Trabajamos alineados con las principales instituciones de fomento productivo.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200/50 pt-8 text-sm text-neutral-500 sm:flex-row">
          <p>&copy; {currentYear} MiPymeHoy. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/terminos" className="hover:text-neutral-900 transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-neutral-900 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
