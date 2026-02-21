'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#socorro', label: 'Socorro' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#baterias-heliar', label: 'Baterias Heliar' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
] as const;

const WHATSAPP_URL = 'https://wa.me/553588108404?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20na%20Auto%20El%C3%A9trica%20Pedr%C3%A3o.%20Meu%20ve%C3%ADculo%20%C3%A9%20____%20e%20o%20problema%20%C3%A9%20____.%20Estou%20em%20Caxambu%2Fregi%C3%A3o.%20Pode%20me%20ajudar%3F';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-soft border-b border-gray-border' : 'bg-transparent'
        }`}
      >
        <div className="section-container flex h-16 sm:h-20 items-center justify-end">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2.5 rounded-lg text-white hover:bg-gray-dark focus-visible-ring border border-gray-border"
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer do menu (mobile e desktop) */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-black border-l border-gray-border shadow-soft transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray hover:text-white focus-visible-ring"
              aria-label="Fechar menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-1" aria-label="Menu principal">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg text-white font-medium hover:bg-gray-dark focus-visible-ring"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-border">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                aria-label="Chamar no WhatsApp"
                onClick={handleNavClick}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
