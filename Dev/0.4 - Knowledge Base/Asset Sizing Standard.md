---
template: "Knowledge Base Doc"
version: 2.0
fonte: "Padrão interno — alinhado a Tailwind v4 / Next.js Image, gpt-image-2, Higgsfield e ffmpeg"
data_incorporacao: 2026-07-09
data_atualizacao: 2026-07-10
tags:
  - knowledge-base
  - assets
  - imagens
  - video
  - midia-animada
  - design
  - midia
  - custo
ler_quando: "SEMPRE antes de pedir a geração de qualquer imagem/vídeo/asset — para definir tamanho, formato e prompt uma única vez e evitar retrabalho/custo"
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

## Vídeo — padrão cinematográfico (high-ticket)

> **Regra de qualidade:** vídeo em projeto do dev é entregável high-ticket. Fonte/máster **mínimo
> 1080p (1920×1080)**; para hero full-bleed, preferir máster **4K (3840×2160)** e fazer downscale na
> entrega. **Nunca upscale** — vídeo recebido/gerado abaixo de 1080p é rejeitado (pedir original melhor
> ao cliente ou regenerar). Mesmo princípio "compute before generate": slot primeiro, geração depois.

**Matriz de slots de vídeo (canônica):**

| Slot | Ratio | Máster (gerar/receber) | Entregar | Duração | Bitrate alvo (VP9) | Peso alvo |
|---|---|---|---|---|---|---|
| **Hero background loop** | 16:9 | 4K (ou 1080p mín.) | 1920×1080 | 6–12s loop, sem áudio | ~2–4 Mbps | ≤ 8 MB |
| **Section inline / feature** | 16:9 | 1080p+ | 1280×720 | ≤ 30s | ~1.5–2.5 Mbps | ≤ 6 MB |
| **Showcase / modal (foco)** | 16:9 | 4K preferido | 1920×1080 | livre | ~3–5 Mbps | ≤ 15 MB |
| **Vertical mobile / story** | 9:16 | 1080×1920+ | 1080×1920 | 6–15s | ~2–3 Mbps | ≤ 8 MB |

**Entrega web (inegociável):**

- Formato: **WebM (VP9 — ou AV1 quando o pipeline suportar) + MP4 (H.264) como fallback** via `<video><source>` duplo.
- **Poster frame obrigatório** (AVIF/WebP, mesmo ratio do vídeo) — é o que aparece antes do load e no `prefers-reduced-motion`.
- Background/loop: `muted autoplay playsinline loop preload="metadata"` + lazy (só carrega perto do viewport).
- **`prefers-reduced-motion: reduce` → pausar/não iniciar o vídeo e exibir o poster estático.** Sem exceção.
- Áudio: vídeo de background **sempre sem trilha de áudio no arquivo** (faixa removida no transcode, não só `muted`).

**Pipeline ffmpeg (comandos canônicos):**

```bash
# WebM VP9 2-pass (background loop 1080p, sem áudio)
ffmpeg -i master.mp4 -vf scale=1920:-2 -c:v libvpx-vp9 -b:v 0 -crf 32 -pass 1 -an -f null NUL
ffmpeg -i master.mp4 -vf scale=1920:-2 -c:v libvpx-vp9 -b:v 0 -crf 32 -pass 2 -an hero.webm

# MP4 H.264 fallback (compatibilidade)
ffmpeg -i master.mp4 -vf scale=1920:-2 -c:v libx264 -crf 23 -preset slow -movflags +faststart -an hero.mp4

# Poster frame (frame representativo → AVIF/WebP)
ffmpeg -i master.mp4 -ss 00:00:02 -frames:v 1 poster.png   # depois: sharp/Squoosh → AVIF+WebP
```

> CRF de referência: VP9 `crf 30–34` (background), `crf 26–30` (showcase). H.264 `crf 22–24`.
> Ajustar até bater o **peso alvo** da matriz — peso estoura = comprimir mais ou encurtar o loop.

---

## Mídia animada — árvore de decisão

Escolher o formato **antes** de produzir. A escolha muda o peso da página em ordem de grandeza.

| Preciso de... | Usar | Nunca |
|---|---|---|
| Micro-interação, hover, transição de UI | **GSAP / CSS** (código, zero asset) | vídeo/GIF |
| Ilustração vetorial animada (ícones, mascote, loader) | **Lottie** (`lottie-web` / `@lottiefiles/dotlottie-web`) | GIF |
| Cena "filmada" / render / footage | **WebM VP9 + MP4** (matriz acima) | GIF |
| Vídeo com transparência (sobre fundo do site) | **WebM VP9 com alpha** (`-pix_fmt yuva420p`) + fallback poster | GIF/APNG |
| 3D interativo | **Three.js** (quando couber — peso vs. impacto no `03-Planejamento`) | vídeo pesado fingindo 3D |

> **GIF é PROIBIDO** em entrega web deste vault: 5–20× o peso de um WebM equivalente, 256 cores,
> incompatível com padrão high-ticket. Se chegar GIF do cliente, transcodificar para WebM/MP4 na ingestão.

---

## Imagens para animação e image-to-video

Regras extras quando a imagem gerada **não é estática de fato**:

1. **Slot que pode virar vídeo (image-to-video):** gerar **frame inicial E frame final** — mesmo ratio
   do vídeo alvo (matriz de vídeo acima), mesmo estilo/paleta/seed (consistência de cena). Os dois
   frames alimentam geradores first/last-frame (Kling, Luma, Higgsfield etc.). Nomear
   `<slot>-frame-inicial.*` / `<slot>-frame-final.*` e registrar o par no Dev-Log.
2. **Imagem que sofrerá animação no site** (parallax, mask reveal, pan, zoom, Ken Burns): gerar com
   **bleed extra de ~10–15%** em cada dimensão além do slot — a animação desloca/corta a imagem e não
   pode expor borda nem quebrar a estética. Registrar no prompt: "extend scene beyond frame edges".
3. **Fundo transparente:** quando o slot exige asset sem fundo (logo animável, produto flutuante,
   recorte sobre section), isso **DEVE constar explicitamente no prompt** ("transparent background,
   isolated subject, no backdrop") e a saída DEVE ter canal alpha (PNG → WebP com alpha na entrega).
   Se o gerador não suportar alpha, gerar em fundo chroma sólido + `remove background` na pós.

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

**Imagem:**

- [ ] Slot e largura de exibição no maior breakpoint definidos
- [ ] Aspect ratio fixado pela UI (não pelo gerador)
- [ ] DPR aplicado (2× fotográfico / 1.5× hero grande)
- [ ] Tamanho nativo do gerador escolhido (≥ alvo @2x, sem upscale)
- [ ] `--quality` proporcional ao uso (draft vs final)
- [ ] Formato de entrega decidido (AVIF+WebP / PNG-OG / SVG)
- [ ] Slot pode virar vídeo? → frame inicial + frame final gerados (mesmo ratio/estilo/seed)
- [ ] Imagem vai ser animada no site? → bleed extra ~10–15% no prompt
- [ ] Precisa de fundo transparente? → declarado no prompt + saída com alpha
- [ ] Tamanho registrado no projeto para regeneração idêntica

**Vídeo:**

- [ ] Slot da matriz de vídeo identificado (hero loop / inline / showcase / vertical)
- [ ] Máster ≥ 1080p (4K para hero) — nada abaixo entra no projeto
- [ ] Transcode WebM VP9 + MP4 H.264 fallback (ffmpeg, comandos canônicos)
- [ ] Poster frame extraído (AVIF/WebP)
- [ ] Background: sem faixa de áudio + `muted autoplay playsinline loop` + `prefers-reduced-motion` → poster
- [ ] Peso dentro do budget do slot
