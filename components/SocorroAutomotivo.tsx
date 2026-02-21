'use client';

import { useRef, useEffect } from 'react';
import { images } from '@/lib/assets';

const WHATSAPP_URL = 'https://wa.me/553588108404?text=Ol%C3%A1!%20Preciso%20de%20socorro%20automotivo%20agora.%20Estou%20em%20Caxambu%2Fregi%C3%A3o.%20Pode%20me%20ajudar%3F';
const TEL_URL = 'tel:+553588108404';

export function SocorroAutomotivo() {
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
    <section id="socorro" ref={sectionRef} className="section-fade-bottom relative section-padding overflow-hidden">
      <div className="section-bg-image -z-10">
        <img
          src={images.sectionSocorro}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="section-container relative z-10">
        <div className="card-glass border-red/40 p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto animate-on-scroll bg-black/60 backdrop-blur-sm">
          <p className="eyebrow">Auto elétrica Pedrão.</p>
          <h2 className="section-title mb-4">
            Sediada em Caxambu com atendimento regional.
          </h2>
          <p className="text-gray text-lg mb-6">
          Prestamos serviços de elétrica automotiva e socorro em Caxambu e região, com atendimento direto e foco em resolver o problema sem enrolação.
          </p>
          <p className="text-white font-medium mb-8">
          Cidades atendidas: Baependi, Aiuruoca, São Lourenço, Pouso Alto, Cruzília, Itanhandu, Soledade de Minas, Conceição do Rio Verde, Serranos, Carvalhos e Seritinga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
              aria-label="Chamar no WhatsApp para socorro"
            >
              WhatsApp
            </a>
            <a
              href={TEL_URL}
              className="btn-outline justify-center"
              aria-label="Ligar agora para socorro"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
