'use client';

import { useRef, useEffect } from 'react';

const WHATSAPP_BATERIA = 'https://wa.me/553588108404?text=Ol%C3%A1!%20Quero%20comprar%20uma%20bateria%20Heliar.%20Meu%20carro%20%C3%A9%20____.%20Pode%20me%20orientar%20o%20modelo%20ideal%3F';

export function BateriasHeliar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="baterias-heliar" ref={sectionRef} className="section-fade-bottom section-padding relative overflow-hidden">
      {/* Fundo: mesma estrutura que Hero/Servicos/Socorro; z-0 evita ficar atrás do bg do layout */}
      <div className="section-bg-image z-0" aria-hidden>
        <img
          src="/assets/assets/section-baterias-heliar.png"
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-black/35 pointer-events-none" aria-hidden />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <p className="eyebrow">PARCEIRO</p>
          <h2 className="section-title mb-4">
            Baterias Heliar | Caxambu e região
          </h2>
          <p className="text-gray mb-6">
            Trabalhamos com <strong className="text-white">baterias Heliar</strong> para quem quer potência e durabilidade.
          </p>
          <p className="text-white font-medium mb-2">Precisa trocar a bateria?</p>
          <p className="text-gray text-sm mb-8">Diga o modelo do seu carro e a gente orienta a bateria ideal.</p>
          <a
            href={WHATSAPP_BATERIA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            aria-label="Comprar bateria Heliar pelo WhatsApp"
          >
            Comprar bateria agora
          </a>
        </div>
      </div>
    </section>
  );
}
