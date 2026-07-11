---
template: "Kickoff Output (via Project Kickoff Input Template v1.2)"
version: 1.1
status: "Prompts aprovados + vídeos de detalhe (§3.8) e motor (§3.9) adicionados — geração bloqueada por créditos Higgsfield (caminhos A/B na Parte 4.2)"
tags:
  - dna
  - kickoff-output
  - frontend
  - midia
projeto: "Jaguar F-Type 2024"
cliente: "Projeto próprio (teste ponta a ponta do pipeline do vault)"
nicho: "Automotive"
tipo: "front-only"
data: "2026-07-10"
fonte_input: "[[00-Input]]"
---

# 🧬 00-DNA — Jaguar F-Type 2024

> Kickoff Output da matriz canon **linha 20** ([[Master Pipeline & Enforcement]]), gerado a partir do [[00-Input]]. Fase atual: **só mídias** — nenhum código, nenhuma geração antes da revisão do dev (aprovação de prompts não pré-autorizada).

---

## Parte 1 — DNA Consolidado

**Conceito-mestre: "Black Jaguar / Liquid Metal"** — o site vende um único F-Type 2024 traduzindo o animal-símbolo em experiência: o carro é o jaguar mecânico; o jaguar é o carro orgânico. Ambos pretos, ambos metálicos, ambos silenciosos até acelerarem.

**Narrativa em 3 atos (versatilidade da marca, decisão do dev):**

| Ato | Cenário | Onde no site | Papel emocional |
|---|---|---|---|
| **I — Habitat** | Floresta úmida de serra, névoa, asfalto molhado | **Preloader** (carro sai da curva; barra de load = velocidade) | Predador em casa; tensão e antecipação |
| **II — Domínio** | Estrada alpina com neve, luz fria lateral (1ª ref do dev) | **Hero loop** + section alpina | O predador domina qualquer território; vastidão |
| **III — Detalhe** | Estúdio dark, rim light prata | Sections de specs/detalhes (faróis, roda, interior, traseira) | Precisão, luxo tátil, desejo de posse |

**Fio condutor:** o jaguar animal (preto metálico, alpha) aparece como elemento de identidade — reveal no scroll, divider de sections, e a section de herança da marca (jaguar-motion).

**Preloader (assinatura do site):** vídeo IA de 3–5s → ~48 frames AVIF → GSAP toca a sequência em `<canvas>` amarrada ao progresso REAL de load (carro acelera conforme os assets carregam; easing segura o clímax para nunca parecer instantâneo nem lento). Duração percebida alvo: **2,5–4s**.

**Identidade visual:** paleta **dark luxury monocromática** (desvio consciente do default pastel, registrado aqui): preto fosco + grafite + prata metálica + branco gelo + **um único acento**. Mood: cinematográfico, predatório, silencioso e veloz.

**Inventário de assets:** nenhum asset de press kit recebido; **9 slots a gerar** (Parte 3 — §3.8 vídeos de detalhe e §3.9 motor adicionados na v1.1; mídias geradas pelo dev em 2026-07-11 avaliadas na Parte 6). Validado contra o [[Frontend Creative Protocol]] Fase 6 (geração via skills + Asset Sizing + galerias; AVIF+WebP; vídeo WebM VP9+MP4+poster; GIF proibido).

---

## Parte 2 — Proto-Design System (extraído das refs em 2026-07-10)

> Extração via fetch das refs acessíveis (as páginas não expõem CSS completo via fetch de conteúdo — valores hex abaixo marcados como **propostos** derivam da análise de mood + paleta declarada pelo dev; a extração fiel de CF acontece na Fase 2 do protocolo via `refs/`). Skill complementar: [[ai-web-designer-agent]].

**O que cada ref ensinou:**

| Ref | Extração | Lição para o projeto |
|---|---|---|
| landonorris.com | Fundo charcoal escuro + **UM acento vívido (lime)** + branco; fotografia full-width cinematográfica; scroll narrativo; motion (Rive) | Valida a estratégia "dark + 1 acento"; hero fotográfico full-bleed; storytelling por scroll |
| igloo.inc | `[PENDENTE — extrair na Fase 2 via refs/]` (página 100% WebGL, sem conteúdo extraível via fetch) | Referência de imersão 3D/transições — estudar CF na Fase 2 |
| nextsense.io | Hierarquia tipográfica limpa (H1 ~2.5–3rem, H2 ~1.8–2rem, body ~1rem); whitespace generoso; cantos quase retos; sombras mínimas | Escala tipográfica e respiro; radii mínimos combinam com o mood "lâmina" |
| terminal-industries.com | Dark navy/charcoal + acento único; fotografia escura; **counter animations**; logos em grayscale; alto contraste | Counters (0→100) são a linguagem perfeita para specs do carro (0–100 km/h, hp, Nm) e para a barra do preloader |

**Proto-tokens propostos** (ponto de partida da Fase 4 do protocolo → `tailwind.config.ts` + `DESIGN.md` via `/impeccable init`; **não é a versão final**):

| Token | Hex | OKLCH (aprox.) | Papel | Contraste s/ `surface-0` |
|---|---|---|---|---|
| `surface-0` | `#0A0A0B` | `oklch(0.13 0.002 285)` | Fundo base (preto fosco) | — |
| `surface-1` | `#141416` | `oklch(0.18 0.003 285)` | Cards/sections elevadas | — |
| `surface-2` | `#1E1F22` | `oklch(0.23 0.005 275)` | Hover/bordas de área | — |
| `line` | `#2A2B2E` | `oklch(0.29 0.005 275)` | Hairlines, dividers | — |
| `silver` | `#C7CBD1` | `oklch(0.84 0.008 260)` | Prata metálica (detalhes, ícones) | ~12,5:1 ✅ |
| `text-primary` | `#F2F4F6` | `oklch(0.96 0.004 240)` | Branco gelo (títulos/corpo) | ~17:1 ✅ AAA |
| `text-muted` | `#8A8F98` | `oklch(0.64 0.012 260)` | Texto secundário | ~5,6:1 ✅ AA |
| `accent` (proposta A — **recomendada**) | `#E8A33D` | `oklch(0.75 0.14 75)` | **Âmbar-farol** — CTAs, barra do preloader, olhos do jaguar | ~8,4:1 ✅ AAA large / AA normal |
| `accent` (proposta B) | `#C8102E` | `oklch(0.51 0.20 25)` | Vermelho-caliper | ~3,9:1 ⚠️ só large text/elementos gráficos |

> **Recomendação (dev decide):** acento **âmbar-farol** — passa WCAG com folga em texto, é literalmente a luz do carro (coerência narrativa: a MESMA cor da luz nos vídeos vira a cor do CTA) e foge do vermelho-clichê automotivo. O vermelho-caliper pode viver como cor **apenas gráfica** (detalhe nas fotos de roda), sem virar token de UI.

**Tipografia (proposta — `[PENDENTE — validar com o dev]`):** display grotesk condensada de peso alto para números/títulos (velocímetro, counters de specs) + sans neutra para corpo. Candidatas gratuitas (Google Fonts): *Archivo Expanded/Black* ou *Space Grotesk* (display) + *Inter* (corpo). Escala: seguir hierarquia observada na nextsense (display ~clamp 3–6rem, H2 ~2rem, body 1rem). Radii: mínimos (0–4px). Sombras: quase nenhuma — profundidade via luz/borda, não via shadow.

---

## Parte 3 — Prompts Completos por Slot

> Método: [[Asset Sizing Standard]] (tamanho calculado ANTES; frames inicial+final onde vira vídeo; bleed onde anima; alpha declarado) + `craft.md` (JSON-config nº 57/58; canvas antes do sujeito; câmera explícita; 5–12 substantivos concretos; material/luz/paleta separados; avoid-lines curtas) + galeria **Cinematic Film References** upstream (anchors "in the lineage of..."). Paleta = proto-tokens da Parte 2.
>
> **Ferramenta:** Higgsfield primário (verificar `balance` no MCP antes) — fluxo image→video com first/last frame; fallback free tier: Google AI Studio (imagens) + Kling/Hailuo/Luma (vídeo, também aceitam first/last frame).
>
> ⚠️ Nota de marca: projeto de estudo/teste de pipeline. Prompts citam o F-Type real (produto anunciado), mas pedem `no extra badges or fake logos` para evitar emblemas alucinados.

### 3.1 · Preloader — "A Curva" (vídeo → sequência de frames)

**Specs (Asset Sizing):** slot próprio (fullscreen 16:9). Máster de vídeo **1920×1080 mín.** (4K se o gerador der), 3–5s, 24fps. Entrega: **~48 frames** extraídos → AVIF **960×540** (@1x 640 / @2x 1280 ficam cobertos por 960 com canvas scale) → alvo **≤ 2MB total** (~20–35KB/frame AVIF q≈45). Frames nomeados `preloader-curva-f001.avif`…; par gerador `preloader-curva-frame-inicial.png` / `preloader-curva-frame-final.png`. Bleed ~10% (o canvas pode sofrer scale sutil).

**Frame inicial (imagem, 16:9 `wide 2048×1152`):**

```text
/* SCENE_RENDER_CONFIG: FType-Preloader-Frame-Inicial
   VERSION: 1.0  AESTHETIC: Cinematic Automotive Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic cinematic film still, in the lineage of Tarkovsky's slow cinema — dense silver mist, contemplative dread before speed",
    "camera": "low three-quarter front angle, 35mm anamorphic feel, camera height ~60cm, shallow depth of field on background",
    "render_flags": ["8K_master_detail", "sharp_subject", "subtle_filmic_grain", "no_CGI_tell"],
    "scene_extension": "extend scene beyond frame edges (safe bleed for UI animation)"
  },
  "ENVIRONMENT": {
    "location": "narrow two-lane mountain road curving through dense humid rainforest — jaguar habitat",
    "concrete_elements": ["wet asphalt with mirror-like reflections", "low rolling fog between dark tree trunks",
      "dark green ferns and moss on rock cuts", "dripping canopy leaves overhead", "faint god rays through mist",
      "worn double yellow center line", "low roadside stone barrier"],
    "lighting": "overcast diffused cold daylight; the car's LED headlights are the only warm source",
    "palette": "matte black #0A0A0B, graphite, silver metallic #C7CBD1, ice white; single amber accent #E8A33D from headlights"
  },
  "CORE_ASSETS": {
    "primary_subject": "2024 Jaguar F-Type R75 coupe, satin matte black finish",
    "vehicle_state": "entering the corner far side, three-quarter front visible, slight body roll, frozen action",
    "materials": ["satin black paint with soft speculars", "gloss black 20-inch five-spoke wheels", "slim LED headlight signature on", "fine water spray behind rear wheels"]
  },
  "OUTPUT": {
    "mood": "predatory, silent speed about to be unleashed, high-ticket luxury",
    "avoid": ["oversaturation", "toy-like proportions", "extra badges or fake logos", "people, other cars", "lens flare excess"]
  }
}
```

**Frame final (imagem, mesmo config — só muda o bloco `CORE_ASSETS`):**

```text
"CORE_ASSETS": {
  "primary_subject": "same 2024 Jaguar F-Type R75 coupe, satin matte black — absolutely consistent in appearance and coloring with the initial frame",
  "vehicle_state": "exiting the apex toward camera, near full-frontal, low and planted, full LED headlights flared through the mist, water spray arcing off both rear wheels",
  "materials": ["satin black paint catching a cold silver rim light", "amber headlight bloom cutting the fog", "motion energy held (frozen action)"]
}
```

**Prompt de motion (image-to-video, first/last frame — Higgsfield/Kling/Luma):**

```text
First frame: car entering the corner far side. Last frame: car exiting the apex toward camera, headlights flared.
Motion: the matte black Jaguar F-Type accelerates smoothly through the wet forest corner toward the camera,
progressive speed build (slow-in, strong-out), subtle body roll then settle, water spray increasing with speed,
fog parting around the body. Camera: locked tripod, no pan, no zoom, no cuts. Duration 4s, 24fps,
cinematic realism, consistent lighting and palette across all frames. No people, no other vehicles, no text.
```

**Pós:** `ffmpeg -i master.mp4 -vf "fps=12,scale=960:-2" preloader/f%03d.png` → `sharp` → AVIF q45 + WebP fallback. 12fps × 4s = 48 frames (GSAP interpola a percepção; menos peso que 24fps).

### 3.2 · Hero background loop — "Domínio Alpino" (vídeo)

**Specs:** slot **Hero background loop** da matriz de vídeo: 16:9, máster **4K** (mín. 1080p), **6–12s loop sem áudio**, entrega 1920×1080 **WebM VP9 (crf 30–34) + MP4 H.264 fallback ≤ 8MB**, poster AVIF/WebP obrigatório, `muted autoplay playsinline loop preload="metadata"` + `prefers-reduced-motion` → poster. Par: `hero-alpino-frame-inicial/final.png`.

**Frame inicial (16:9 `wide 2048×1152`, upscale p/ 4K na pós se preciso):**

```text
/* SCENE_RENDER_CONFIG: FType-Hero-Alpino-Frame-Inicial
   VERSION: 1.0  AESTHETIC: Cinematic Automotive Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic cinematic wide shot, in the lineage of Denis Villeneuve's monolithic minimalism — vast cold landscape, small precise subject",
    "camera": "wide establishing shot, 32mm, eye level, deep focus",
    "render_flags": ["8K_master_detail", "clean_horizon", "subtle_filmic_grain", "no_CGI_tell"],
    "scene_extension": "extend scene beyond frame edges (bleed for slow zoom loop)"
  },
  "ENVIRONMENT": {
    "location": "high alpine road plateau after snowfall, late golden-blue afternoon",
    "concrete_elements": ["snow-covered jagged peaks", "wet dark asphalt lane", "snow banks lining the road",
      "low sun flaring softly behind a ridge", "drifting powder snow caught by wind", "long cold shadows across the road"],
    "lighting": "low cold sun from camera-left as silver rim light; sky ice-blue gradient",
    "palette": "matte black #0A0A0B, graphite, silver metallic #C7CBD1, ice white #F2F4F6; single amber accent from headlights"
  },
  "CORE_ASSETS": {
    "primary_subject": "2024 Jaguar F-Type R75 coupe, satin matte black — same car as the preloader sequence, absolutely consistent in appearance",
    "vehicle_state": "parked low and wide on the lane, three-quarter front, LED signature on",
    "materials": ["satin black paint with cold speculars", "light snow dust on lower panels", "gloss black wheels"]
  },
  "OUTPUT": {
    "mood": "dominance, stillness before speed, vast silence, high-ticket luxury",
    "avoid": ["oversaturation", "people, other cars", "extra badges or fake logos", "busy composition"]
  }
}
```

**Frame final:** mesmo config; `vehicle_state` → "identical position; only atmosphere moved — powder snow drifted slightly, sun a touch lower" (loop quase-estático: seamless).

**Motion:** "Subtle cinematic loop: car perfectly still; wind moves powder snow across the asphalt, soft light shift, gentle drifting mist. Locked camera or 2% slow push-in. Seamless loop start-to-end, 8s, 24fps, no cuts, no people."

### 3.3 · Jaguar animal — Statement (imagem com alpha)

**Specs:** uso como divider/reveal de scroll → gerar `square 2048×2048` com **fundo transparente**; entrega recortes @2x conforme slot final, **WebP com alpha** (AVIF alpha quando o pipeline suportar). Bleed: gerar o animal completo com folga (a máscara de scroll corta).

```text
/* SUBJECT_RENDER_CONFIG: Jaguar-Statement-Alpha
   VERSION: 1.0  AESTHETIC: Premium Brand Sculpture Photography */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "1:1 square, 2048x2048",
    "style": "hyper-realistic sculptural render — a living black jaguar whose fur reads as liquid obsidian metal",
    "camera": "three-quarter side view, slightly low angle, 85mm, full body in frame with generous margins",
    "render_flags": ["isolated_subject", "full_alpha_channel", "micro_texture", "no_CGI_tell"]
  },
  "BACKGROUND": "transparent background, isolated subject, no backdrop, no floor shadow baked in",
  "CORE_ASSETS": {
    "primary_subject": "adult black jaguar (melanistic), stalking pose, head low, shoulders raised, tail curved",
    "materials": ["fur as liquid obsidian metal with chrome-like specular reflections", "faint rosette pattern visible only in the speculars (true jaguar, not panther-generic)", "muscles defined by cold silver rim light from upper left"],
    "accent": "amber eyes #E8A33D as the single color accent"
  },
  "OUTPUT": {
    "mood": "predatory elegance, silent power — the brand emblem come alive",
    "avoid": ["cartoon style", "dull plastic sheen", "visible brand logos", "background elements", "cropped limbs"]
  }
}
```

> Se o gerador não suportar alpha real: gerar sobre fundo chroma sólido uniforme (verde ou cinza 50%) + remove-background na pós (regra 3 do Asset Sizing §Imagens para animação).

### 3.4 · Jaguar animal — Motion (vídeo curto, section de herança)

**Specs:** 16:9, máster 1080p+, 4–6s, candidato a **WebM VP9 com alpha** (`-pix_fmt yuva420p`) + poster fallback; se alpha em vídeo for inviável no gerador → fundo preto uniforme `#0A0A0B` (integra no site por luma/blend, já que a page é preta). Par de frames inicial/final.

- **Frame inicial:** mesmo config do 3.3, `vehicle_state`→`pose`: "jaguar at far left of frame, mid-stride walk toward camera-right, head level, eyes locked on viewer" + `BACKGROUND`: "uniform pure black #0A0A0B studio void, subtle floor reflection only".
- **Frame final:** "jaguar at center-right, front paw planted, shoulder blades high, head slightly lowered, amber eyes to camera — same animal, absolutely consistent metal-fur appearance".
- **Motion:** "Slow predatory walk, weight shifting deliberately, liquid-metal fur speculars rolling across the muscles as it moves, tail slow sweep. Locked camera, 5s, 24fps, seamless-ready, no cuts, uniform black void background."

### 3.5 · Detalhes do carro — Estúdio Dark (4 imagens)

**Specs:** farol / interior / traseira em **3:2 `landscape 1536×1024`** (slot imagem de conteúdo, exibição ≤768px, @2x coberto); roda+caliper em **1:1 `square 2048×2048`** (slot product shot, zoom). Todas com **bleed ~12%** (parallax/zoom leve no site). Entrega AVIF+WebP. `--quality high` (asset final).

**Config base (varia só `CORE_ASSETS.detail_subject`):**

```text
/* PRODUCT_RENDER_CONFIG: FType-Studio-Detail-{farol|roda|interior|traseira}
   VERSION: 1.0  AESTHETIC: Premium Automotive Studio Photography */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "{3:2 landscape 1536x1024 | 1:1 square 2048x2048}",
    "style": "hyper-realistic automotive studio photography, editorial finish",
    "camera": "macro-to-medium detail shot, 100mm, extremely shallow depth of field",
    "render_flags": ["8K_UHD", "micro_texture", "sharp_foreground", "editorial_finish"],
    "scene_extension": "extend composition beyond frame edges (bleed for parallax)"
  },
  "ENVIRONMENT": {
    "background": "graphite studio void #141416, soft gradient falloff to pure black",
    "lighting": "single cold silver rim light sweeping the body line + faint amber practical glow",
    "atmosphere": ["faint floating dust in the light beam", "soft floor reflection"]
  },
  "CORE_ASSETS": {
    "primary_subject": "2024 Jaguar F-Type R75, satin matte black — same car, consistent appearance",
    "detail_subject": "{ver lista abaixo}"
  },
  "OUTPUT": {
    "mood": "precision, tactile luxury, desire",
    "avoid": ["oversaturation", "fake badges or logos", "busy reflections", "people"]
  }
}
```

`detail_subject` por imagem: **farol** — "slim LED headlight signature lit, amber bloom on the satin hood edge"; **roda** (1:1) — "gloss black five-spoke wheel, {red caliper OR black caliper — segue decisão do acento}, carbon-ceramic disc detail"; **interior** — "driver cockpit, black leather with silver stitching, amber ambient light strip, steering wheel quarter view"; **traseira** — "rear three-quarter, ducktail spoiler line, slim LED taillight lit, quad exhaust tips in dark chrome".

### 3.6 · Section Alpina — imagem hero + vídeo showcase

- **Imagem:** reaproveita o **frame inicial do 3.2** (mesma geração, custo zero extra) exibida como imagem full-bleed com parallax → por isso o bleed já está no prompt.
- **Vídeo showcase (slot "Showcase / modal"):** 16:9, máster 4K preferido, entrega 1920×1080 WebM+MP4 **≤ 15MB**, com áudio opcional (único slot que pode ter som, off por default). Par de frames: **inicial** = frame final do 3.2 (carro parado); **final** = mesmo cenário, "car mid-frame in motion, powder snow bursting off the roofline, headlights cutting the cold light" — motion: "the car launches from standstill, controlled slide through the first bend, snow spray, camera static wide". 6–8s.

### 3.7 · OG / Social share

**Specs:** **1200×630 fixo** (único tamanho fixo do ecossistema), gerar `landscape 1536×1024` → crop 1.91:1, entrega **PNG/JPEG q~80** (plataformas nem sempre aceitam AVIF/WebP em OG). `--quality high`.

```text
Landscape 1.91:1 social share image, cropped from 1536x1024. Composition: the satin matte black 2024
Jaguar F-Type three-quarter front on wet alpine asphalt, snowy peaks soft in the background, amber LED
headlights on — subject weighted to the left, generous negative space on the right for overlay text.
Exact readable text, top-right, ice-white #F2F4F6 condensed grotesk, crisp and legible:
"[PENDENTE — nome do site]" / subline "F-TYPE 2024". Palette: matte black, graphite, silver, ice white,
single amber accent. Avoid: unreadable microtext, fake sponsor logos, cluttered background.
```

> Alternativa sem risco tipográfico: gerar SEM texto e compor o texto via código (recomendado — tipografia real do site, zero garbled text). Decisão do dev.

### 3.8 · Detalhes do carro — Vídeos de Estúdio (5 micro-loops) `[adicionado v1.1 — pedido do dev 2026-07-11]`

> Companheiros em vídeo das imagens do 3.5 — cada "parte importante" (farol, marca, roda, interior, traseira) ganha um micro-loop de estúdio para as sections de detalhe. **As imagens 3.5 continuam existindo** (poster/fallback `prefers-reduced-motion` de cada vídeo — custo já pago vira poster).

**Specs (Asset Sizing §Vídeo):** slot **Section inline / feature**: 16:9, máster **1080p+ (pedir o máximo do gerador)**, entrega **1280×720 WebM VP9 (crf 30–34) + MP4 H.264 fallback ≤ 6MB**, **4–6s micro-loop sem áudio**, poster AVIF/WebP obrigatório, `muted autoplay playsinline loop preload="metadata"` + lazy. ⚠️ Frames inicial/final em **16:9 `wide 2048×1152`** (mesmo ratio do vídeo — regra do Asset Sizing; NÃO reaproveitar as gerações 3:2/1:1 do 3.5 como frames). Par nomeado `detail-{nome}-video-frame-inicial/final.png`.

**Config base dos frames (varia só `CORE_ASSETS.detail_state` — herda ambiente/paleta do 3.5):**

```text
/* PRODUCT_RENDER_CONFIG: FType-Studio-Motion-{farol|marca|roda|interior|traseira}
   VERSION: 1.1  AESTHETIC: Premium Automotive Studio Film */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic automotive studio cinematography, editorial finish, frozen film frame",
    "camera": "macro-to-medium detail shot, 100mm, extremely shallow depth of field, locked tripod",
    "render_flags": ["8K_master_detail", "micro_texture", "sharp_foreground", "no_CGI_tell"],
    "scene_extension": "extend composition beyond frame edges (safe bleed)"
  },
  "ENVIRONMENT": {
    "background": "graphite studio void #141416, soft gradient falloff to pure black",
    "lighting": "single cold silver rim light sweeping the body line + faint amber practical glow #E8A33D",
    "atmosphere": ["faint floating dust in the light beam", "soft floor reflection"]
  },
  "CORE_ASSETS": {
    "primary_subject": "2024 Jaguar F-Type R75, satin matte black — same car across the whole set, consistent appearance",
    "detail_state": "{ver tabela abaixo}"
  },
  "OUTPUT": {
    "mood": "precision, tactile luxury, desire",
    "avoid": ["oversaturation", "fake badges or invented logos", "busy reflections", "people", "text"]
  }
}
```

**`detail_state` + motion por vídeo (motion = prompt image-to-video, first/last frame, locked camera, no cuts, no people, no text, 24fps):**

| # | Vídeo | Frame inicial (`detail_state`) | Frame final (`detail_state`) | Motion (4–6s) |
|---|---|---|---|---|
| a | **Farol — "O Despertar"** | "slim LED headlight OFF, satin hood edge traced only by the cold silver rim light, headlight glass dark and dormant" | "same framing — full LED signature LIT, amber bloom #E8A33D swelling through the studio haze onto the satin hood, dust motes glowing in the beam" | "The slim LED signature ignites from the inner edge outward, amber bloom swelling softly through the haze, dust motes drifting through the light beam, silver rim light constant. 4s." |
| b | **Marca — emblema** ⚠️ | "front grille quarter view in near-darkness, gloss black mesh barely readable, the growler badge in shadow" | "same framing — the cold silver rim light has swept across, grazing the authentic Jaguar growler grille badge, metal relief catching crisp speculars" | "A single slow sweep of cold silver light crosses the grille from left to right, revealing the badge relief in passing, speculars rolling over the gloss mesh, then settling. 5s." |
| c | **Roda — "Torque parado"** | "gloss black five-spoke wheel static, black caliper, carbon-ceramic disc, rim light grazing the spoke edges" | "same framing — wheel rotated ~30°, identical lighting, speculars shifted across the spokes" | "The wheel rotates slowly in place (one-eighth turn), chrome-like speculars rolling spoke to spoke, carbon-ceramic disc glinting behind, floor reflection alive. Seamless-ready. 5s." |
| d | **Interior — "Cockpit acorda"** | "driver cockpit dim: black leather with silver stitching in low key, ambient light strip OFF, steering wheel quarter view" | "same framing — amber ambient light strip LIT tracing the dashboard line, stitching catching warm speculars, instruments faintly aglow" | "The amber ambient strip fades on, warm light traveling along the dashboard line, silver stitching catching light one seam after another, gentle glow on the wheel rim. 6s." |
| e | **Traseira — "Assinatura"** | "rear three-quarter, ducktail spoiler line, slim LED taillight OFF, quad exhaust tips in dark chrome, cold rim light only" | "same framing — taillight LIT in deep red signature, faint heat shimmer rising from the quad exhausts, amber-warm reflections on the floor" | "The slim taillight signature ignites in one fluid sweep, heat shimmer starting to rise from the quad exhaust tips, reflections blooming on the studio floor. 4s." |

> ⚠️ **Nota (b — marca):** emblema em macro é o take de maior risco de alucinação (relevo/tipografia do growler). Mitigação no prompt: "authentic Jaguar growler grille badge, no invented text". Se o gerador corromper o emblema em 2 tentativas, **abandonar o take** — a section de marca do site já é servida canonicamente pelo jaguar animal (3.3 statement + 3.4 motion), que é marca sem risco de fake badge.
>
> Cor do caliper: **preto** (decisão do acento âmbar aprovada — vermelho-caliper descartado até de uso gráfico, coerência com 3.5).

### 3.9 · Motor — "O Coração" (vídeo showcase) `[adicionado v1.1 — pedido do dev 2026-07-11]`

**Specs:** slot **Showcase / modal**: 16:9, máster **4K preferido (mín. 1080p)**, entrega 1920×1080 WebM VP9 (crf 26–30) + MP4 **≤ 15MB**, **6–8s**, poster obrigatório. Único slot que pode ter **áudio** (start-up do V8; off por default no player) — decisão do dev em `[PENDENTE #8]`. Par: `motor-video-frame-inicial/final.png` (16:9 `wide 2048×1152`).

**Frame inicial:**

```text
/* PRODUCT_RENDER_CONFIG: FType-Motor-Frame-Inicial
   VERSION: 1.1  AESTHETIC: Premium Automotive Studio Film */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic automotive studio cinematography — the mechanical heart as sculpture",
    "camera": "medium-close over the open engine bay, slight high angle, 65mm, shallow depth of field on bay edges",
    "render_flags": ["8K_master_detail", "micro_texture", "sharp_foreground", "no_CGI_tell"],
    "scene_extension": "extend composition beyond frame edges (safe bleed)"
  },
  "ENVIRONMENT": {
    "background": "graphite studio void #141416, hood raised out of frame, gradient falloff to pure black",
    "lighting": "single cold silver rim light raking across the engine architecture + faint amber practical glow #E8A33D from deep in the bay",
    "atmosphere": ["faint floating dust in the light beam", "cold metal, still air"]
  },
  "CORE_ASSETS": {
    "primary_subject": "supercharged 5.0-litre V8 of the 2024 Jaguar F-Type R75, dormant",
    "materials": ["cast aluminium intake plenum with satin sheen", "black crackle-finish engine cover", "braided lines and dark chrome fittings", "carbon trim on the bay braces"]
  },
  "OUTPUT": {
    "mood": "latent violence at rest, engineering as luxury, the predator's heart",
    "avoid": ["invented engine text or fake logos", "people, tools, workshop clutter", "cartoonish glow", "oversaturation"]
  }
}
```

**Frame final (mesmo config — só muda o estado):** `"primary_subject": "same supercharged V8, absolutely consistent — now ALIVE at idle: micro vibration blur on the supercharger housing, heat shimmer rising through the silver light beam, amber glow deepened, dust in the beam trembling"`.

**Motion (image-to-video, first/last frame, 6–8s):**

```text
The dormant V8 wakes: one sharp ignition shudder rocks the engine, then it settles into a low idle —
constant micro-vibration on the supercharger housing, heat shimmer rising and bending the silver light beam,
dust motes trembling with the pulse, speculars quivering on the cast aluminium. Camera: locked, no cuts,
no zoom. Cinematic realism, consistent lighting and palette. No people, no text, no fake engine badges.
```

---

## Parte 4 — Direções e Próximos Passos

1. **Dev revisa este DNA** — em especial: acento (âmbar ✅ recomendado vs vermelho), tipografia proposta, prompts 3.1–3.7 (ajustes de cena/mood são baratos agora, caros depois). Este é o ponto de parada (aprovação não pré-autorizada).
2. **Verificar créditos Higgsfield** — ✅ VERIFICADO em 2026-07-10 via MCP (`balance`): **1,42 créditos, plano free** (re-verificado 2026-07-11: **1,18 créditos, free** — segue bloqueado). Modelos de terceiros (GPT Image 2, Kling O1, Seedream 4.5) retornam `403 minimum_basic_plan_required`; nativos (Cinema Studio 2.5) custam 2 créditos — **Higgsfield inviável no estado atual, nenhum crédito gasto**. Fallback canônico ativado: **[[01-Prompt-Pack]]** pronto para o free tier (Google AI Studio p/ imagens; Kling/Hailuo/Luma web p/ vídeo first/last frame). Se o dev assinar basic/recarregar: agente gera direto pelo MCP (`cinematic_studio_2_5` stills 2k–4k; `seedance_2_0`/`kling3_0` vídeo com start+end frame — modelos já mapeados). **Regra:** manter consistência de seed/estilo dentro de cada par de frames.
3. **Normalização (Fase 6 do protocolo):** Upscayl só se algum máster vier abaixo do alvo (nunca upscale de vídeo — regenerar); `sharp` → AVIF+WebP em lote; ffmpeg → WebM VP9 + MP4 + poster (comandos canônicos do [[Asset Sizing Standard]]); extração dos 48 frames do preloader (`fps=12,scale=960:-2`); registrar cada tamanho gerado no futuro `05-Dev-Log`.
4. **Depois das mídias aprovadas:** seguir a matriz — linhas 0–17 (escopo→contrato→planejamento→tarefas→bootstrap) quando o dev quiser formalizar o projeto, e **linha 19** ([[Frontend Creative Protocol]]: `refs/` + `00-MAPA.md` + `DESIGN.md` consumindo os proto-tokens daqui) quando o repo de código nascer. Se entrar captura de lead/test-drive → `tipo: front+back` → **linha 22**.

---

## Parte 5 — Lista de `[PENDENTE]`

| # | Pendência | Pergunta específica ao dev |
|---|---|---|
| 1 | Nome/logotipo do site | Qual o nome do site/domínio? (afeta OG 3.7, futura identidade e SEO) |
| 2 | Acento final da paleta | Âmbar-farol (recomendado, WCAG ✅) ou vermelho-caliper (só gráfico)? |
| 3 | Tipografia | Valida a proposta display grotesk (Archivo/Space Grotesk) + Inter, ou prefere outra direção? |
| 4 | Refs adicionais | Há sites automotivos específicos que admira para entrar na 2.1? |
| 5 | igloo.inc | Proto-tokens inacessíveis via fetch (WebGL) — `[PENDENTE — extrair na Fase 2 via refs/]` |
| 6 | Back-end | Haverá captura de lead / agendamento de test-drive? (definiria `front+back` → linha 22) |
| 7 | Texto no OG | Gerar OG com texto no prompt ou compor texto via código (recomendado)? |
| 8 | Áudio no vídeo do motor (§3.9) | O showcase do motor é o único slot que pode ter som (start-up do V8, off por default no player). Gerar com trilha (Kling/Veo com áudio) ou entregar mudo? |

---

## Parte 6 — Ingestão de mídias geradas pelo dev (Fase 6.0 — 2026-07-11)

> O dev gerou por conta própria 2 imagens + 1 vídeo (Veo) no mood do Ato I (floresta úmida) e enviou para avaliação. Validação contra [[Asset Sizing Standard]] + gates do [[Frontend Creative Protocol]] Fase 6.0:

| Mídia | Specs medidas | Slot candidato | Veredito |
|---|---|---|---|
| Imagem 1 — F-Type preto fosco, DRL âmbar, curva de floresta com névoa (frontal ¾, meio da curva) | JPEG **1376×768** | Preloader / floresta (3.1) | ⚠️ **Aprovada como referência de mood/estilo; rejeitada como asset final** — abaixo do alvo de geração 2048×1152 (entrega @2x 1920×1080). Recuperável via Upscayl 2× em último caso; recomendação: regenerar no tamanho certo usando-a como imagem-referência |
| Imagem 2 — mesmo carro/cenário, frontal ¾ mais próximo, curva com muro de pedra | JPEG **1376×768** | Preloader / floresta (3.1) | ⚠️ Idem imagem 1. O par 1+2 funciona como proto frame-inicial/final do 3.1 (consistência de carro/cena excelente) |
| Vídeo — "Jaguar commercial authentic sound" (Veo) | MP4 H.264 **1280×720**, 8s, 24fps, **com trilha de áudio**, watermark "Veo" no canto | Preloader (3.1) / brand film | ❌ **Rejeitado como asset final** (aprovado como prova de conceito de mood): (1) 720p < mínimo 1080p — vídeo nunca é upscaled, regenerar; (2) watermark visível; (3) áudio embutido (slots de background são sem áudio); (4) coreografia divergente do preloader — o carro passa pela câmera e **se afasta** (termina na traseira), enquanto o preloader exige carro saindo da curva **em direção à câmera** (barra de load = velocidade de aproximação) |

**Leitura de direção de arte:** as 3 mídias validam o DNA na prática — carro preto fosco + DRL âmbar como única fonte quente + floresta/névoa prata = exatamente o "Black Jaguar / Liquid Metal" do Ato I, com a paleta de proto-tokens confirmada em imagem real. A decisão do acento âmbar (#E8A33D) se prova correta. O que falta não é direção, é **spec técnica** (resolução/áudio/watermark/coreografia) e **cobertura**: os Atos II (alpino) e III (estúdio) e o jaguar animal seguem sem nenhum candidato — 9 slots a gerar.

---

## Quality Gate (do Kickoff — R2: só marcado o que foi feito)

- [x] `00-DNA.md` gerado com as 5 partes do contrato de resposta
- [x] Proto-tokens registrados por ref acessível (landonorris, nextsense, terminal — mood/tipografia/lições; hex propostos e marcados como proposta) — igloo.inc marcada `[PENDENTE]`
- [x] Prompts completos para TODOS os slots da §2.4 do Input, com tamanho/ratio calculados antes ([[Asset Sizing Standard]]), frames inicial+final onde `vira vídeo = sim`, alpha declarado onde marcado, bleed onde anima
- [x] `[PENDENTE]` usados onde falta fonte — nada inventado (R3)
- [x] Prompts aprovados pelo dev ("bora", 2026-07-10 — recomendações aceitas: acento âmbar, OG sem texto/texto via código)
- [ ] Prompts v1.1 (§3.8 vídeos de detalhe + §3.9 motor) aprovados pelo dev — aguardando revisão
- [x] Mídias geradas pelo dev (2 imagens + 1 vídeo Veo) ingeridas e avaliadas contra o Asset Sizing (Parte 6, 2026-07-11)
- [ ] Mídias geradas + normalizadas (bloqueado: Higgsfield free/1,42 créditos → caminho A: assinar basic e o agente gera via MCP; caminho B: dev gera no free tier com o [[01-Prompt-Pack]] e o agente normaliza — Fase 6 do [[Frontend Creative Protocol]])
