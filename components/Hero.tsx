'use client';

import { images } from '@/lib/assets';

const WHATSAPP_URL = 'https://wa.me/553588108404?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20na%20Auto%20El%C3%A9trica%20Pedr%C3%A3o.%20Meu%20ve%C3%ADculo%20%C3%A9%20____%20e%20o%20problema%20%C3%A9%20____.%20Estou%20em%20Caxambu%2Fregi%C3%A3o.%20Pode%20me%20ajudar%3F';
const TEL_URL = 'tel:+553588108404';

export function Hero() {
  return (
    <section id="inicio" className="section-fade-bottom relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="section-bg-image -z-10">
        <img
          src={images.heroAccent}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" aria-hidden />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" aria-hidden />

      <div className="relative z-10 section-container text-center pt-24 pb-32 flex flex-col items-center">
        {/* Logo grande e bonito em cima da copy */}
        <div className="mb-8 sm:mb-10 animate-on-scroll">
          <img
            src={images.logo}
            alt="Auto Elétrica Pedrão"
            width={320}
            height={120}
            className="h-24 w-auto sm:h-28 md:h-32 lg:h-36 drop-shadow-lg"
          />
        </div>

        {/* Copy grande igual ao print */}
        <h1 className="section-title max-w-3xl mx-auto mb-4 animate-on-scroll drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Auto Elétrica Especializada
          <br />
          
        </h1>
        <p className="text-gray/90 text-sm sm:text-base max-w-xl mx-auto mb-10 animate-on-scroll drop-shadow">
          Auto elétrica completa · Socorro automotivo em Caxambu e região
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto shadow-lg shadow-red/20"
            aria-label="Chamar no WhatsApp"
          >
            Chamar no WhatsApp
          </a>
          <a
            href={TEL_URL}
            className="btn-outline w-full sm:w-auto border-white/30 text-white hover:border-red hover:text-red"
            aria-label="Ligar agora"
          >
            Ligar agora
          </a>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <div className="w-16 h-0.5 bg-red rounded-full shadow-lg shadow-red/50" aria-hidden />
      </div>
    </section>
  );
}
