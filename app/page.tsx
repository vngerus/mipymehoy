import Contact from '@/components/sections/Contact';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
