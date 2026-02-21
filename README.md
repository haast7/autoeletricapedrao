# Auto Elétrica Pedrão – Site Single Page

Site one-page para a Auto Elétrica Pedrão (Caxambu – MG). Next.js 14 (App Router), TypeScript e Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Conecte o repositório à Vercel.
2. (Opcional) Defina a variável de ambiente:
   - `NEXT_PUBLIC_SITE_URL`: URL final do site (ex: `https://seudominio.com`) para metadata e sitemap.
3. Build e deploy são automáticos.

Não é necessário configurar `output: 'standalone'`; o build padrão do Next.js já funciona na Vercel.

## Onde colocar as imagens

Coloque os arquivos na pasta **`public/assets`**:

| Arquivo        | Uso                          |
|----------------|-------------------------------|
| `logo.png`     | Logo no header                |
| `hero-accent.jpg` | Fundo do hero (gerada no projeto) |
| `banner.png`   | Banner alternativo (opcional) |
| `section-servicos.jpg` | Fundo da seção Serviços (gerada) |
| `section-socorro.jpg` | Fundo da seção Socorro (gerada) |
| `section-baterias.jpg` | Fundo da seção Baterias Heliar (gerada) |
| `gallery-1.jpg` … `gallery-6.jpg` | Galeria (opcional) |

As imagens geradas (hero-accent, section-servicos, section-socorro, section-baterias) ficam na pasta **`assets`** na raiz do projeto. **Copie-as para `public/assets`** para o site exibir corretamente.

## Estrutura

- `app/layout.tsx` – Layout, metadata, JSON-LD (LocalBusiness)
- `app/page.tsx` – Página única com todas as seções
- `app/robots.ts` – Regras para robôs
- `app/sitemap.ts` – Sitemap XML
- `components/` – Header, Hero, Serviços, Socorro, Baterias Heliar, Galeria, Localização, Contato, Footer

## SEO

- Um único H1: “Auto Elétrica em Caxambu – Auto Elétrica Pedrão”
- Schema.org `AutoRepair`: nome, endereço, telefone, horário, redes sociais
- Meta title/description e Open Graph
- Sitemap e `robots.txt` gerados em `/sitemap.xml` e `/robots.txt`
