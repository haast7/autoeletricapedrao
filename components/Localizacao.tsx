export function Localizacao() {
  const mapsLink = 'https://www.google.com/maps/search/?api=1&query=Av.+%C3%81pio+Cardoso,+812+-+Centro,+Caxambu+-+MG,+37440-000';
  // Para o mapa aparecer corretamente: no Google Maps, busque o endereço, clique em Compartilhar > Incorporar um mapa e cole o src do iframe aqui.
  const embedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.99!2d-44.934475!3d-21.9772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDU4JzMxLjkiUyA0NMKwNTUnNTQuOSJX!5e0!3m2!1spt-BR!2sbr';

  return (
    <section id="localizacao" className="section-fade-bottom section-padding bg-black relative border-t border-gray-border">
      <div className="section-container">
        <p className="eyebrow animate-on-scroll">ONDE ESTAMOS</p>
        <h2 className="section-title mb-2 animate-on-scroll">
          Como chegar
        </h2>
        <p className="text-gray mb-6 animate-on-scroll">
          Av. Ápio Cardoso, 812 – Centro, Caxambu – MG, 37440-000
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
        <p className="mt-4 text-sm text-gray animate-on-scroll">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red hover:underline focus-visible-ring rounded"
          >
            Abrir no Google Maps →
          </a>
        </p>
      </div>
    </section>
  );
}
