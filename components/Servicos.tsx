'use client';

import { useRef, useEffect } from 'react';
import { images } from '@/lib/assets';

const WHATSAPP_URL = 'https://wa.me/553588108404?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20na%20Auto%20El%C3%A9trica%20Pedr%C3%A3o.%20Meu%20ve%C3%ADculo%20%C3%A9%20____%20e%20o%20problema%20%C3%A9%20____.%20Estou%20em%20Caxambu%2Fregi%C3%A3o.%20Pode%20me%20ajudar%3F';

const SERVICOS = [
  { title: 'Linha Leve e Pesada', desc: 'Carros, vans e caminhões.', Icon: IconTruck },
  { title: 'Motor de Partida', desc: 'Reparo e troca.', Icon: IconStarter },
  { title: 'Alternador', desc: 'Manutenção e substituição.', Icon: IconAlternator },
  { title: 'Baterias', desc: 'Venda e instalação.', Icon: IconBattery },
  { title: 'Instalação Elétrica', desc: 'Sistema e completo.', Icon: IconCircuit },
] as const;

const SOCORRO_ITENS = ['Pane elétrica', 'Carro não pega', 'Bateria arriada'] as const;

export function Servicos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll('.animate-on-scroll').forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 0.05}s`;
            });
            el.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="section-fade-bottom section-padding bg-black relative overflow-hidden">
      <div className="section-bg-image pointer-events-none -z-10">
        <img
          src={images.sectionServicos}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden />

      <div className="section-container relative z-10">
        <p className="eyebrow animate-on-scroll">O QUE FAZEMOS</p>
        <h2 className="section-title max-w-3xl mb-2 animate-on-scroll flex flex-wrap items-center gap-x-2 gap-y-1">
          Serviços Essenciais da{' '}
          <span className="inline-flex items-center" aria-hidden>
            <CheckIcon className="w-8 h-8 sm:w-9 sm:h-9 text-red shrink-0" />
          </span>{' '}
          <span className="text-red">Auto Elétrica Pedrão</span>
        </h2>
        <div className="h-0.5 w-24 sm:w-32 bg-red/80 rounded-full mb-4 animate-on-scroll shadow-red-glow-sm" aria-hidden />
        <p className="text-gray text-sm sm:text-base max-w-2xl mb-12 animate-on-scroll">
          Soluções rápidas para carros e caminhões em Caxambu e região.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICOS.map((s, i) => (
            <div
              key={s.title}
              className="card-servico group rounded-xl border border-gray-border bg-gray-dark/70 backdrop-blur-sm p-5 sm:p-6 animate-on-scroll hover:border-red/60 hover:shadow-red-glow-sm transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <s.Icon className="w-10 h-10 sm:w-12 sm:h-12 text-red mb-3 shrink-0" />
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-gray text-sm">{s.desc}</p>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-2 flex flex-col animate-on-scroll">
            <div className="rounded-xl border-2 border-red/70 bg-gray-dark/80 backdrop-blur-sm overflow-hidden h-full flex flex-col shadow-red-glow-sm">
              <div className="p-5 sm:p-6 flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                  Socorro Automotivo <span className="text-red font-bold">24h</span>
                </h3>
                <ul className="space-y-2">
                  {SOCORRO_ITENS.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray text-sm sm:text-base">
                      <CheckGreen className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-36 sm:h-44 min-h-[140px] bg-gray-border">
                <img
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80"
                  alt="Socorro automotivo em Caxambu"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" aria-hidden />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-5 sm:p-6 rounded-xl bg-gray-dark/80 border border-gray-border animate-on-scroll">
          <div className="flex items-start sm:items-center gap-4">
            <div className="shrink-0 text-red" aria-hidden>
              <WarningTriangle className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div>
              <p className="text-white font-semibold text-lg sm:text-xl">Tá com urgência?</p>
              <p className="text-red font-bold text-base sm:text-lg mt-0.5">Chama no WhatsApp agora!</p>
              <p className="text-gray text-sm mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                Atendimento rápido em Caxambu e região
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
            aria-label="Chamar no WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chamar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function CheckGreen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function WarningTriangle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconTruck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function IconStarter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2 2" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconAlternator({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l3 3" />
      <path d="M3 12h2M19 12h2M12 3v2M12 19v2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M5.64 18.36l1.42-1.42M16.94 7.06l1.42-1.42" />
    </svg>
  );
}

function IconBattery({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M18 11v2M22 11v2" />
      <path d="M6 11v2M10 11v2M14 11v2" />
    </svg>
  );
}

function IconCircuit({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 4h8v4H8z" />
      <path d="M8 16h8v4H8z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}
