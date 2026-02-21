import { Hero } from '@/components/Hero';
import { Servicos } from '@/components/Servicos';
import { SocorroAutomotivo } from '@/components/SocorroAutomotivo';
import { BateriasHeliar } from '@/components/BateriasHeliar';
import { Galeria } from '@/components/Galeria';
import { Localizacao } from '@/components/Localizacao';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <SocorroAutomotivo />
      <Galeria />
      <BateriasHeliar />
      <Localizacao />
      <Contato />
      <Footer />
    </>
  );
}
