/**
 * Caminho base das imagens. Arquivos em: public/assets/assets/
 * (logo.png, hero-accent.png, section-servicos.png, section-socorro.png, section-baterias.png)
 */
export const ASSETS = '/assets/assets';

export const images = {
  logo: `${ASSETS}/logo.png`,
  heroAccent: `${ASSETS}/hero-accent.png`,
  sectionServicos: `${ASSETS}/section-servicos.png`,
  sectionSocorro: `${ASSETS}/section-socorro.png`,
  sectionBaterias: `${ASSETS}/section-baterias.png`,
  /** Fundo da seção Baterias Heliar. Renomeie a imagem para section-baterias-heliar.png em public/assets/assets/ */
  sectionBateriasHeliar: `${ASSETS}/section-baterias-heliar.png`,
  /** Galeria: imagens em public/assets/galeria/ (filename com espaço/caracteres especiais é codificado na URL) */
  gallery: (filename: string) => `${GALERIA_PATH}/${encodeURIComponent(filename)}`,
} as const;

/** Caminho da pasta da galeria (public/assets/galeria) */
export const GALERIA_PATH = '/assets/galeria';

/** Nomes dos arquivos de imagem na pasta public/assets/galeria. Ordem = ordem no carrossel. */
export const GALERIA_IMAGES = [
  '11.png',
  '10.png',
  '2022-03-18.webp',
  '2022-05-10.webp',
  '2024-01-15 (1).webp',
  '2024-01-15.webp',
  'unnamed.webp',
] as const;
