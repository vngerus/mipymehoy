import { Contact } from '@/components/sections/Contact';
import { FaqSection } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { HeroWrapper } from '@/components/sections/HeroWrapper';
import { LocationSection } from '@/components/sections/LocationSection';
import { NavbarDemo } from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarDemo />
      <HeroWrapper />
      <LocationSection />
      <FaqSection />
      <Contact />
      <Footer />
    </main>
  );
}
