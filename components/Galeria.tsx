'use client';

import { useRef, useState, useEffect } from 'react';
import { images, GALERIA_IMAGES } from '@/lib/assets';

const ALT_BY_INDEX = [
  'Fachada Auto Elétrica Pedrão – oficina e rua em Caxambu',
  'Auto Elétrica Pedrão – atendimento e região',
  'Oficina Auto Elétrica Pedrão',
  'Atendimento na oficina',
  'Serviços de auto elétrica',
  'Linha leve e pesada',
  'Auto Elétrica Pedrão Caxambu',
] as const;

const GALLERY_IMAGES = GALERIA_IMAGES.map((filename, i) => ({
  src: images.gallery(filename),
  alt: ALT_BY_INDEX[i] ?? `Foto ${i + 1} - Auto Elétrica Pedrão`,
}));

export function Galeria() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const container = el.parentElement?.closest('section');
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const width = el.offsetWidth;
      const scrollLeft = el.scrollLeft;
      const newIndex = Math.round(scrollLeft / width);
      setIndex(Math.min(newIndex, GALLERY_IMAGES.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [sectionVisible]);

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.offsetWidth * i, behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="section-fade-bottom section-padding relative">
      <div className="section-container">
        <p className="eyebrow animate-on-scroll">FOTOS</p>
        <h2 className="section-title mb-2 animate-on-scroll">
          Nosso dia a dia na oficina
        </h2>
        <p className="text-gray mb-10 animate-on-scroll">
          Atendimento real, serviço limpo e foco em resolver.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            aria-label="Galeria de imagens"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[400px] snap-center"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-dark border border-gray-border">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="p-2 rounded-lg text-white hover:bg-gray-dark disabled:opacity-40 disabled:pointer-events-none focus-visible-ring"
              aria-label="Imagem anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors focus-visible-ring ${
                  i === index ? 'bg-red scale-125' : 'bg-gray-border hover:bg-gray-500'
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
                aria-current={i === index}
              />
            ))}
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === GALLERY_IMAGES.length - 1}
              className="p-2 rounded-lg text-white hover:bg-gray-dark disabled:opacity-40 disabled:pointer-events-none focus-visible-ring"
              aria-label="Próxima imagem"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
