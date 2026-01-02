import Contact from '@/components/sections/Contact';
import { FaqSection } from '@/components/sections/FAQ';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/Hero';

import { NavbarDemo } from '@/components/sections/Navbar';
import { SubHero } from '@/components/sections/SubHero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarDemo />
      <HeroSection />
      <SubHero />
      <FaqSection />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
