export function Localizacao() {
  const address = 'Av. Ápio Cardoso, 812 – Centro, Caxambu – MG, 37440-000';
  const mapsLink = 'https://www.google.com/maps/search/?api=1&query=Av.+%C3%81pio+Cardoso,+812+-+Centro,+Caxambu+-+MG,+37440-000';
  // Embed por endereço: pino fica no lugar certo. O botão "Ver mapa ampliado" é do Google e não pode ser removido no iframe.
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="localizacao" className="section-fade-bottom section-padding bg-black relative border-t border-gray-border">
      <div className="section-container">
        <p className="eyebrow animate-on-scroll">ONDE ESTAMOS</p>
        <h2 className="section-title mb-2 animate-on-scroll">
          Como chegar
        </h2>
        <p className="text-gray mb-6 animate-on-scroll">
          {address}
        </p>
        <div className="rounded-xl overflow-hidden border border-gray-border animate-on-scroll">
          <iframe
            src={embedSrc}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Auto Elétrica Pedrão no Google Maps"
          />
        </div>
        <div className="mt-6 flex justify-center animate-on-scroll">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Abrir localização no Google Maps"
          >
            <MapPinIcon className="w-5 h-5" />
            Abrir no Google Maps
            <ArrowExternalIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowExternalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
