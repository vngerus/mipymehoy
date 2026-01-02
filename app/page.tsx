import { Contact } from '@/components/sections/Contact';
import { FaqSection } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/Hero';
import { KPISection } from '@/components/sections/KPISection';
import { LocationSection } from '@/components/sections/LocationSection';
import { NavbarDemo } from '@/components/sections/Navbar';
import { SubHero } from '@/components/sections/SubHero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarDemo />
      <HeroSection />
      <KPISection />
      <SubHero />
      <LocationSection />
      <FaqSection />
      <Contact />
      <Footer />
    </main>
  );
}
