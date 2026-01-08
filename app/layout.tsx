import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/global.css';
import SmoothScroller from '@/components/ui/smooth-scroller';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'mipymehoy',
  description: 'Asesoramiento y consultoría en transformación digital para pymes.',
  icons: {
    icon: '/assets/mipymecut.svg',
    shortcut: '/assets/mipymecut.svg',
    apple: '/assets/mipymecut.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <SmoothScroller>
          <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -z-30 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24bbd6] opacity-[0.12] blur-[120px] pointer-events-none" />

            {children}
          </div>
        </SmoothScroller>
      </body>
    </html>
  );
}
