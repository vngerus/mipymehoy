'use client';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState, useEffect } from 'react';

export function NavbarDemo() {
  const navItems = [
    {
      name: 'Inicio',
      link: '#inicio',
    },
    {
      name: 'Servicios',
      link: '#servicios',
    },
  ];

  const extraItems = [
    { name: 'Blog', link: '/blog' },
    { name: 'Contacto', link: '/contacto' },
  ];

  const mobileNavItems = [...navItems, ...extraItems];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200`}>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Blog</NavbarButton>
            <NavbarButton variant="primary">Contacto</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {mobileNavItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative w-full rounded-lg px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 active:scale-95 transition-all"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
