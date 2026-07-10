---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Padrão interno — alinhado a Tailwind v4 / Next.js Image, gpt-image-2 e Higgsfield"
data_incorporacao: 2026-07-09
tags:
  - knowledge-base
  - assets
  - imagens
  - design
  - midia
  - custo
ler_quando: "SEMPRE antes de pedir a geração de qualquer imagem/asset — para definir o tamanho-alvo uma única vez e evitar retrabalho/custo"
---

# Asset Sizing Standard — calcular ANTES de gerar

> **Regra de ouro (anti-retrabalho):** nenhuma imagem é gerada antes de o tamanho-alvo estar definido
> por este documento. Gera-se **uma vez**, no aspect ratio e na resolução certos; nunca se gera "no
> olho" para depois redimensionar. Redimensionar/regenerar = custo e tempo desperdiçados.
>
> Pareia com [[Higgsfield Skills Reference]] (geração de mídia) e [[GPT-Image Prompt Galleries]] (prompts).

---

## Protocolo "Compute Before Generate" (5 passos)

1. **Onde renderiza?** Identifique o container/slot e a **largura CSS de exibição no MAIOR breakpoint**
   em que o asset aparece (não o menor). Ex.: card num grid de 3 colunas em `lg` dentro de `max-w-6xl`.
2. **Qual o aspect ratio?** Fixe o ratio pelo slot (a UI dita, não o gerador). Use os ratios canônicos
   da tabela abaixo (1:1, 4:3, 3:2, 16:9, 3:4, 9:16, 1.91:1).
3. **Aplique o DPR alvo.** Multiplique a largura de exibição por **2×** (retina) para assets
   fotográficos/nítidos. Para heros/decorativos muito grandes, 1.5× é aceitável para conter custo.
4. **Escolha a resolução de geração.** Pegue o **ratio nativo** mais próximo do gerador e gere com a
   **maior aresta ≥ alvo @2x**. Depois **exporte/downscale** para as entregas (nunca faça upscale).
5. **Registre.** Grave o tamanho escolhido no projeto (`05-Dev-Log.md` ou no README de `/public`), para
   que qualquer regeneração use exatamente o mesmo tamanho.

> Fórmula rápida: `gen_longest_edge = ceil(display_css_px × DPR)` → arredonde para cima até o
> tamanho nativo do gerador. Entregue com `srcset`/`next/image` nos tamanhos @1x e @2x.

---

## Breakpoints & containers (base do cálculo)

Tailwind (default): `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536` (px).
Containers de conteúdo usados no vault: `max-w-3xl 768` · `max-w-5xl 1024` · `max-w-6xl 1152` · `max-w-7xl 1280`.

Largura útil de um card em grid (dentro de `max-w-6xl`, gap 24px):

| Colunas | Breakpoint típico | Largura de exibição ~ | @2x (gerar ≥) |
|---|---|---|---|
| 1 col | mobile | 344–360 px | 720 |
| 2 col | `sm`/`md` | 360–372 px | 744 |
| 3 col | `lg`+ | 360 px | 720 |
| 4 col | `xl`+ | 288 px | 576 |

---

## Matriz de Assets (canônica)

DPR alvo = 2× salvo indicação. "Gerar em" = resolução nativa do gerador a pedir; "Entregar" = o que vai
para `/public` (com `srcset`).

| Asset | Ratio | Exibição (CSS) | Entregar (@1x / @2x) | **Gerar em** | Formato |
|---|---|---|---|---|---|
| **Card / thumbnail (grid)** | 4:3 | ~360 px | 360×270 / 720×540 | `768×576` (nativo 4:3) ou 1024²→crop | AVIF + WebP |
| **Card wide / feature** | 16:9 | ~560 px | 560×315 / 1120×630 | `landscape 1536×1024`→crop 16:9 | AVIF + WebP |
| **Imagem de conteúdo (artigo)** | 3:2 | até 768 px | 768×512 / 1536×1024 | `landscape 1536×1024` | AVIF + WebP |
| **Hero / full-bleed** | 16:9 | até 100vw (~1920) | 1280×720 / 1920×1080 | `wide 2048×1152` (ou `4k` p/ hero grande) | AVIF (q~55) |
| **Hero vertical / mobile story** | 9:16 | ~430 px | 720×1280 / 1080×1920 | `tall 1080×1920` | AVIF/WebP |
| **Banner / cover topo** | 3:1 | até 1152 px | 1152×384 / 2304×768 | `wide 2048×1152`→crop 3:1 | AVIF/WebP |
| **Avatar / profile** | 1:1 | 40/48/64/96 px | 96×96 / 192×192 | `square 1024²`→downscale | WebP (PNG se transp.) |
| **Product shot (e-commerce)** | 1:1 | ~600 px | 600×600 / 1200×1200 | `square 2048²` (zoom precisa) | WebP; PNG se fundo transp. |
| **OG / social share** | 1.91:1 | fixo | **1200×630** (único) | `landscape 1536×1024`→crop 1200×630 | PNG ou JPEG (q~80) |
| **Blog cover** | 16:9 | até 1200 px | 800×450 / 1600×900 | `wide 2048×1152` | AVIF/WebP |
| **Ícone / logo** | — | qualquer | **SVG** (vetor) | não gerar raster; PNG @512 só fallback | SVG |
| **Background / textura** | livre | 100vw | 1600 wide max | `wide 2048×1152` | AVIF (q~45, compressão alta) |

> **OG image é o único tamanho fixo do ecossistema:** sempre `1200×630`. Não invente variações.

---

## Mapa: ratio → tamanho nativo do gerador

Peça o **ratio nativo** e faça o crop/downscale depois. Evita distorção e re-geração.

| Ratio | gpt-image-2 (`--size`) | Nativo (px) | 2× / alta |
|---|---|---|---|
| 1:1 quadrado | `square` / `1k` | 1024×1024 | `2k` 2048² · `4k` 4096² |
| 3:2 paisagem | `landscape` | 1536×1024 | 3072×2048 |
| 2:3 retrato | `portrait` | 1024×1536 | 2048×3072 |
| 16:9 wide | `wide` | 2048×1152 | `4k` |
| 9:16 tall | `tall` | 1080×1920 | 2160×3840 |

**Política de `--quality` (gpt-image-2):** `low` p/ rascunhos/exploração; `medium` p/ probing de estilo;
`high` só para asset final, texto/tipografia, poster, UI, diagrama, labels densos. (Custo sobe com quality
e resolução — daí gerar no tamanho certo de primeira.)

Para **Higgsfield** (`product-photoshoot`, `generate`): mesmo princípio — definir ratio/tamanho pela
matriz antes de gerar o lote; manter consistência de `soul-id` no lote. Ver [[Higgsfield Skills Reference]].

---

## Formatos & compressão (entrega web)

| Uso | Formato | Nota |
|---|---|---|
| Fotográfico / geração | **AVIF** (1ª escolha) + **WebP** (fallback) | AVIF q≈50–60 já fica ótimo; ~30–50% menor que WebP |
| Precisa de transparência | **WebP** (ou PNG se WebP falhar) | evitar PNG grande para foto |
| OG/social | **PNG** ou **JPEG** q~80 | plataformas nem sempre aceitam AVIF/WebP em OG |
| Ícone/logo/ilustração vetorial | **SVG** | nunca rasterizar o que pode ser vetor |
| Screenshot de UI | PNG (nítido) ou WebP lossless | texto precisa de nitidez |

Sempre: `next/image` (ou `<img srcset sizes>`) com `width`/`height` declarados ou `aspect-ratio` no CSS
para **zero CLS** (Core Web Vitals). Nunca fazer **upscale** de um asset gerado pequeno.

---

## Exemplo de cálculo (fim-a-fim)

> Card de portfólio, grid 3 colunas em `lg`, container `max-w-6xl`, ratio 4:3.

1. Exibição no maior breakpoint: `(1152 − 2×24) / 3 ≈ 368 px`.
2. Ratio: 4:3.
3. DPR 2× → alvo `736 px` de largura → altura `552`.
4. Nativo mais próximo: pedir `768×576` (ou `square 1024²` e crop 4:3). `--quality medium`.
5. Entregar `368×276` (@1x) e `736×552` (@2x) em AVIF+WebP; registrar "card-portfolio 768×576 4:3" no Dev-Log.

Resultado: uma geração, zero redimensionamento manual, custo mínimo.

---

## Checklist antes de gerar (cole no pedido)

- [ ] Slot e largura de exibição no maior breakpoint definidos
- [ ] Aspect ratio fixado pela UI (não pelo gerador)
- [ ] DPR aplicado (2× fotográfico / 1.5× hero grande)
- [ ] Tamanho nativo do gerador escolhido (≥ alvo @2x, sem upscale)
- [ ] `--quality` proporcional ao uso (draft vs final)
- [ ] Formato de entrega decidido (AVIF+WebP / PNG-OG / SVG)
- [ ] Tamanho registrado no projeto para regeneração idêntica
