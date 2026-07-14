---
template: "Kickoff Output (via Project Kickoff Input Template v1.2)"
version: 1.6
status: "Preloader v4 = vídeo cinematográfico dia-nublado/carro velado, responsivo (máster central-seguro + cover) e placeholder swap-ready (§3.1, 2026-07-13); R3F-3D relocado p/ futura seção showcase (#16); prompt P9; Blueprint (Parte 9) base Zenith/paleta canon; Estratégia de Mídia v2 (Parte 8); pendências abertas #8–#17"
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
| **I — Habitat** | Estrada de montanha na margem da mata, névoa, tempo nublado (preloader: DIA encoberto) | **Preloader** (vídeo: carro velado surge na curva; barra = velocímetro 0→100 km/h) | Predador em casa; tensão e antecipação |
| **II — Domínio** | Estrada alpina com neve, luz fria lateral (1ª ref do dev) | **Hero loop** + section alpina | O predador domina qualquer território; vastidão |
| **III — Detalhe** | Estúdio dark, rim light prata | Sections de specs/detalhes (faróis, roda, interior, traseira) | Precisão, luxo tátil, desejo de posse |

**Fio condutor:** o jaguar animal (preto metálico, alpha) aparece como elemento de identidade — reveal no scroll, divider de sections, e a section de herança da marca (jaguar-motion).

**Preloader (assinatura do site — v4, 2026-07-13):** **vídeo cinematográfico** — dia nublado, estrada de montanha na margem da mata, o carro preto fosco **surge na curva velado pela névoa**, desacelera na curva e acelera pela câmera. Frames em `<canvas>` por **TEMPO fixo de 3,7s** (0–100 km/h real do R 75); barra = **velocímetro** (acompanha a velocidade real, com dip na curva); load só decide QUANDO começa (segura em 99%). **Responsivo** (máster central-seguro ≥1080p/4K + `object-fit: cover` → ótimo em desktop e celular) e **placeholder swap-ready** (o site sobe sem o vídeo, que é gerado por último por orçamento). Carro 3D interativo migrou p/ futura seção showcase. Spec completa: §3.1 v4.

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
| Pinterest "Zenith Hypercars" (pin 343681015339983742, 2026-07-13 — **favorita do dev**) | Hero full-bleed + **stats bar de 4 counters gigantes** logo abaixo; cards de versões com preço; section técnica dark (bateria); interior full-width; logos de imprensa; form final; grotesk moderna com 1 acento vívido | **LAYOUT-BASE do site** (decisão do dev): a estrutura de sections vem daqui — ver Parte 9. O acento verde-neon da ref é substituído pelo âmbar canon |
| Pinterest "Aurex Motors" (pin 709105903877076108, 2026-07-13) | **Mapa com rota numerada** (01→05) desenhada sobre a section escura; grid de lifestyle 5-up; clube/membership | O mapa vira **"O Território"** — rota do test-drive na serra, com a curva do preloader como ponto 01 (decisão do dev); linha desenhada no scroll |
| Pinterest "Sahara Velocity" (pin 709105903877076205, 2026-07-13) | Stats bar com **0–100 em destaque**; macros de materiais (couro, carbono, alcantara) como **grade de swatches**; dark quente monocromático | Valida a stats bar com o 3,7s como herói; a grade de swatches entra na section de detalhes (materiais do cockpit) |
| Pinterest "Monarch Riviera" (pin 709105903877076167, 2026-07-13) | Alternância de ritmo editorial (texto/imagem em blocos assimétricos); craftsmanship em macro (mão + emblema); depoimento em serif itálico | Ref secundária de RITMO — a paleta clara/creme dela foi **descartada pelo dev** (paleta canon dark+âmbar mantida, sem migração) |

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

### 3.1 · Preloader — "A Curva" v4 (vídeo cinematográfico — dia nublado, estrada de montanha, carro velado)

> **v4 (2026-07-13, decisão do dev via AskUserQuestion):** o preloader **volta a ser VÍDEO** (não R3F). Ao detalhar a cena que o dev quer — estrada aberta de montanha, névoa, tempo nublado, "estilo anúncio de carro" (imagem-referência enviada) — ficou claro que fazer isso em **3D-tempo-real com modelo grátis fica com cara de game, não de cinema**. Então: preloader = vídeo; o **carro 3D interativo (R3F) migra para uma futura seção showcase** (girar/explorar o carro, onde interatividade justifica o 3D — pendência #16). Histórico: v1 = dia sem drift (frames por load); v2 = noite/silhueta (frames por tempo); v3 = R3F tempo real (relocado p/ showcase); **v4 = vídeo dia-nublado, carro velado**.

**Conceito:** a cena abre **VAZIA** — só a estrada de montanha e o vale na névoa, tempo encoberto. Nos primeiros segundos o carro **surge na curva** (não estava no quadro inicial), **desacelera na curva** (como todo carro faz), **acelera na saída** e **passa rápido e velado pela câmera**, saindo do campo de visão. A barra de load é um **velocímetro** que acompanha a velocidade real do carro (sobe → cai na curva → dispara na saída); ao cravar 100 aparece o stat **"0–100 km/h · 3,7s"** e a cena dissolve no hero. O visitante *sente* a aceleração antes de ler qualquer texto. O traçado da curva é a semente do mapa **"O Território"** (Parte 9 §7) — a curva do preloader é o ponto 01.

**Regra da cena (anti-alucinação):** de dia com o carro visível é o cenário de MAIOR risco de alucinação da genAI (foi por isso que a v2 escondia o carro em silhueta noturna). A blindagem aqui é a **névoa densa**: o carro **emerge e permanece parcialmente velado pela névoa** mesmo de dia — reduz a superfície que a IA pode errar e entrega exatamente o mood da referência. Prompt completo: **P9** do [[02-Prompt-Pack-Video-Premium]].

**Cena & paleta:** dia encoberto, estrada de mão dupla na **margem da mata**/vale (não dentro da floresta), colinas ao fundo, névoa densa, asfalto molhado. Paleta adaptada — ambiente **dessaturado/frio** (grafite/oliva), carro **preto fosco**, **âmbar `#E8A33D` como ÚNICO acento quente** (faróis/DRL + UI do velocímetro). Mood ainda **dark luxury**: levemente subexposto vs. a referência (não high-key).

**Timeline dos 3,7s (cena × velocímetro):**

| Tempo | Cena (carro velado na estrada) | Velocímetro |
|---|---|---|
| 0,0–0,6s | Só a estrada/vale na névoa; o carro ainda **não apareceu** | 0 (parado, aguardando) |
| 0,6–1,4s | O carro **surge na curva** ao fundo, velado pela névoa, faróis âmbar acendendo, aproximando | 0 → 55 (acelerando) |
| 1,4–2,3s | **Desacelera na curva** (freia p/ fazer a curva), traça a curva | 55 → 35 (o **dip**) |
| 2,3–3,3s | **Acelera na saída** da curva em direção à câmera, crescendo, velado | 35 → 95 |
| 3,3–3,7s | Passa **rápido e velado** pela câmera e **sai do quadro**; névoa fecha | 100 + stat "3,7s" |

> ⚠️ O velocímetro **cai na curva** (decisão do dev): a barra reflete a velocidade real. Se a barra-que-desce confundir na prática, **fallback**: barra de **load 0→100% monotônica** (nunca desce) + um **velocímetro km/h** separado que faz o dip — dois elementos, cada um coerente.

**Mecânica (frames em canvas + GSAP + Lenis) — reuso da v2:**

- **Fonte:** máster de vídeo (gerado externamente) → extração de **~60 frames AVIF** → GSAP toca a sequência em `<canvas>` por **TEMPO fixo de 3,7s** (não pelo progresso de load). Câmera fixa no vídeo.
- **Load gating:** a sequência só dispara quando os frames estão decodificados; se o resto dos assets ainda carrega ao fim dos 3,7s, o velocímetro **segura em 99%** sobre o último frame — nunca anda aos trancos.
- **UI (barra/velocímetro):** **DOM/SVG** por cima do canvas (independente de resolução — sempre nítida em qualquer tela); acoplada ao progresso da sequência.
- `gsap.ticker` ↔ `lenis.raf`; `useGSAP` (auto-cleanup); nenhuma anim bloqueia main thread.

**Responsivo (desktop 16:9 + celular retrato) — requisito do dev:**

- **Um único máster central-seguro** 16:9, **≥1080p (preferir 4K)** — resolução alta pra que o **crop retrato** do celular continue nítido. A ação-chave (carro cruzando/passando) fica na **zona central 9:16** do quadro, então tanto o 16:9 (desktop) quanto o retrato (mobile) recortam do mesmo máster sem perder a cena.
- Entrega via canvas/`<video>` com **`object-fit: cover`**: desktop corta pouco (topo/base); mobile corta as laterais mantendo o centro.
- **Poster** exportado em **dois recortes focais** (wide + retrato) do mesmo still.
- Em mobile/cellular: `preload="metadata"` + poster imediato para não estourar dados.
- **Upgrade futuro opcional** (pendência #17): máster **retrato dedicado** via `<source media>` se o crop central não bastar.

**Ordem de build (orçamento) — decisão do dev:**

- O vídeo do preloader é **o último asset a gerar** (geração no Higgsfield custa caro; o dev gera quando tiver verba). O site é **construído e publicável ANTES** disso.
- **Placeholder swap-ready:** enquanto não há o vídeo, um placeholder roda a experiência COMPLETA (timing 3,7s + barra-velocidade + dissolve no hero) usando o **poster/still** (ou um frame dos assets da Parte 7) no lugar da sequência.
- O componente lê uma **fonte de frames configurável**: hoje aponta pro placeholder; quando o máster chegar, troca a fonte — **sem tocar no resto do site** (zero retrabalho).

**Specs (Asset Sizing):** slot fullscreen 16:9. Máster de vídeo **≥1080p** (preferir 4K; nunca 720p — vídeo não se upscala, regenera), gerado ~8s → **trim/retime da janela para 3,7s na pós**. Entrega: ~60 frames AVIF do máster q≈45; nomes `preloader-curva-f001.avif`…; par gerador `preloader-curva-dia-frame-inicial.png` / `-final.png` (16:9 `wide 2048×1152`, ação na zona central 9:16). Bleed ~10%.

**Frame inicial = poster (imagem, 16:9 `wide 2048×1152` — cena vazia; serve de reduced-motion & placeholder):**

```text
/* SCENE_RENDER_CONFIG: FType-Preloader-Dia-Frame-Inicial
   VERSION: 4.0  AESTHETIC: Cinematic Automotive Overcast Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic cinematic OVERCAST-DAY film still — moody, desaturated, dense drifting fog; empty road before the car arrives; slightly underexposed dark-luxury grade (not bright/high-key)",
    "camera": "locked low tripod at ~60cm height on the inside of the corner exit, 32mm wide lens; keep key action within a centered 9:16 safe zone (for portrait crop)",
    "render_flags": ["8K_master_detail", "sharp_subject", "subtle_filmic_grain", "no_CGI_tell"],
    "scene_extension": "extend scene beyond frame edges (safe bleed for cover-crop on all screens)"
  },
  "ENVIRONMENT": {
    "location": "open two-lane mountain road along the MARGIN of a highland forest/valley — misty green hills receding, jaguar habitat by day",
    "concrete_elements": ["wet asphalt with soft reflections", "dense low fog swallowing the far hills",
      "desaturated green-grey slopes and low vegetation at the roadside", "a bend in the road curving out of frame", "overcast flat sky, no visible sun disc"],
    "lighting": "flat overcast daylight, cool and diffuse; heavy atmospheric haze; no harsh shadows, no sun flare",
    "palette": "matte black #0A0A0B, graphite, cold silver mist #C7CBD1, desaturated olive; single warm amber accent #E8A33D reserved for the car's lights"
  },
  "CORE_ASSETS": {
    "primary_subject": "NONE — the road/valley is empty in this frame (the car has not entered yet); this still is the poster and the placeholder background",
    "vehicle_state": "no vehicle present",
    "materials": ["wet asphalt sheen", "volumetric fog", "matte desaturated landscape"]
  },
  "OUTPUT": {
    "mood": "quiet anticipation before speed; the predator's territory in the mist; high-ticket luxury",
    "avoid": ["any car in this frame", "night", "sunny blue sky", "high-key/bright exposure", "people, other cars", "streetlights or neon", "oversaturation", "text or logos"]
  }
}
```

**Frame final (imagem, mesmo config — só muda `CORE_ASSETS`):**

```text
"CORE_ASSETS": {
  "primary_subject": "2024 Jaguar F-Type R75 coupe in satin matte black, PARTIALLY VEILED by dense fog — body softly obscured, exactly FOUR amber LED headlights (two per side) glowing through the mist, no fake badges",
  "vehicle_state": "close to camera, passing at speed and about to exit the right edge of frame, half-swallowed by fog and motion, kept within the centered safe zone; frozen action",
  "materials": ["satin black barely resolved through haze", "amber headlight bloom", "wet-asphalt reflection", "fog veiling the silhouette edges"]
}
```

> O **frame inicial (cena vazia)** é o poster de fallback (reduced-motion / no-WebGL) e o fundo do placeholder swap-ready. A ação-chave nos dois frames fica na **zona central 9:16** para o crop retrato do celular não perder o carro.

**Registro histórico:** v2 (noite/silhueta, prompt **P8**) fica como fallback/clipe OG-social; v3 (carro 3D ao vivo / R3F) foi **relocada para a futura seção showcase interativa** (pendência #16) — lá o 3D real brilha (girar/inspecionar), sem o problema de "gerar carro em movimento".

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
5. **Ordem de build (orçamento — decisão do dev 2026-07-13):** o **vídeo do preloader é o ÚLTIMO asset a gerar** (geração no Higgsfield custa caro; o dev gera quando tiver verba). O site é construído e publicável ANTES, com o **placeholder swap-ready** da §3.1 v4 (poster + barra + timing + dissolve rodando sem o vídeo). Quando o máster chegar, troca-se só a fonte de frames — zero retrabalho no resto do site.

---

## Parte 5 — Lista de `[PENDENTE]`

| # | Pendência | Pergunta específica ao dev |
|---|---|---|
| 1 | Nome/logotipo do site | Qual o nome do site/domínio? (afeta OG 3.7, futura identidade e SEO) |
| 2 | Acento final da paleta | Âmbar-farol (recomendado, WCAG ✅) ou vermelho-caliper (só gráfico)? |
| 3 | Tipografia | Valida a proposta display grotesk (Archivo/Space Grotesk) + Inter, ou prefere outra direção? |
| 4 | ~~Refs adicionais~~ | ✅ **RESOLVIDA (2026-07-13):** dev enviou 4 refs Pinterest (Zenith favorita, Aurex, Sahara, Monarch) — registradas na Parte 2 e no [[00-Input]] §2.1 refs 7–10 |
| 5 | igloo.inc | Proto-tokens inacessíveis via fetch (WebGL) — `[PENDENTE — extrair na Fase 2 via refs/]` |
| 6 | Back-end | Haverá captura de lead / agendamento de test-drive? (definiria `front+back` → linha 22) |
| 7 | Texto no OG | Gerar OG com texto no prompt ou compor texto via código (recomendado)? |
| 8 | Áudio no vídeo do motor (§3.9) | O showcase do motor é o único slot que pode ter som (start-up do V8, off por default no player). Gerar com trilha (Kling/Veo com áudio) ou entregar mudo? |
| 9 | Másters 720p da Parte 7 | Upscale via Higgsfield (`upscale_video` 2K, recarga), regenerar em Kling `pro`/`4k` (recarga), ou re-rodar os pares de frames no Kling web free em 1080p? |
| 10 | Copy das headlines (Parte 9) | Hero em 3 linhas estilo Zenith + títulos de section — dev escreve ou agente propõe (com [[MarketingCopywrite]]) para revisão? |
| 11 | Specs oficiais do trim | Confirmar os 4 números da stats bar para o trim anunciado (R 75: 0–100 3,7s / 575 PS / 700 Nm / vel. máx) — fonte oficial antes de publicar |
| 12 | Logos de imprensa (Parte 9 §9) | Projeto de estudo: usar logos reais de imprensa (Top Gear etc., como nas refs) ou marcas fictícias? |
| 13 | Modelo 3D da **seção showcase** (§0b) | Qual GLB do Sketchfab (licença CC — CC-BY exige crédito no site)? F-Type exato se existir, ou esportivo genérico? Alt.: gerar via Higgsfield `generate_3d` da imagem-referência |
| 14 | HDRI de ambiente (**showcase 3D**, §0b) | Qual HDRI CC0 (Poly Haven) para a iluminação da seção 3D — estúdio dark? |
| 15 | Clipe OG do preloader | Gravar também um `.mp4` para OG/social (a partir do máster do preloader), ou usar o P8/silhueta como clipe? (adiado) |
| 16 | **Seção showcase 3D** (nova — §0b) | Onde entra no site e o que faz? (girar/inspecionar o carro; near-Detalhes/Cockpit? bloco dedicado?) A spec R3F da antiga §3.1 v3 é reaproveitada aqui |
| 17 | Máster retrato do preloader (§3.1 v4) | Se o crop central 9:16 não bastar em celular, gerar um máster **retrato dedicado** (`<source media>`) — upgrade quando houver verba |

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

## Parte 7 — Geração via Higgsfield MCP (2026-07-11, plano basic)

> Dev autorizou a geração ("preciso que você gere...") com saldo inicial de **51,18 créditos**. Modelos: `cinematic_studio_2_5` (frames 2K, 2 cr) + `kling3_0` std/sound-off (vídeo 6s start+end frame, 9 cr). Referência de consistência: imagem 2 do dev (importada como `media_id f0153307`) usada em todos os frames iniciais; frames finais gerados a partir do job do frame inicial. Gasto total: **50 créditos** (saldo final 1,18).

| Take | Frames (2752×1536) | Vídeo (job) | Specs do máster |
|---|---|---|---|
| Farol — "O Despertar" | `c7a66b4e` (OFF) → `49b1c17f` (ON) | `93ef1346` | MP4 1280×720, 6s, sem áudio |
| Roda — "Torque parado" | `9191c108` → `59d83386` (girada ~30°) | `1224d8b6` | MP4 1280×720, 6s, sem áudio |
| Volante — macro (take extra pedido pelo dev) | `0deca295` (só inicial) | `e18fc097` | MP4 1280×720, 6s, sem áudio |
| Interior — "Cockpit acorda" | `4a591dba` (OFF) → `0cbbbd51` (âmbar ON) | `0a79d91f` | MP4 1280×720, 6s, sem áudio |

**⚠️ Gate de resolução:** o modo `std` do Kling 3.0 entrega **720p** — abaixo do mínimo 1080p do [[Asset Sizing Standard]]. Os frames 2K passam no gate; os vídeos NÃO entram no site como estão. Caminhos (decisão do dev, pendência #9): **(a)** `upscale_video` do Higgsfield para 2K por vídeo (recarga necessária); **(b)** regenerar em modo `pro`/`4k` (custo maior, recarga); **(c)** re-rodar os mesmos pares de frames no Kling web (créditos diários grátis) em 1080p. Os pares de frames estão prontos e reutilizáveis em qualquer caminho.

**Falhas registradas:** 1 job de imagem falhou (interior, `8f10a478`) sem cobrança — regenerado com prompt reformulado. O guard de preset do Higgsfield ("IN THE DARK") foi recusado 2× (`declined_preset_id`) para manter os prompts canon.

**Restam a gerar (recarga):** marca/emblema (§3.8b, ~13 cr), traseira (§3.8e, ~13 cr), motor showcase (§3.9, ~15 cr em 8s), preloader (3.1), hero alpino (3.2), jaguar statement/motion (3.3/3.4), imagens de estúdio (3.5), showcase alpino (3.6), OG (3.7).

---

## Parte 8 — Estratégia de Mídia v2 (2026-07-13)

> Gatilho: frustração do dev com a qualidade das gerações ("as mídias não estão num nível bom pra um site high-ticket... precisam ficar muito boas não só em qualidade de pixels mas em marketing"). Diagnóstico + regras operacionais decididas nesta sessão. Estas regras valem para **todo prompt novo do projeto** e prevalecem sobre instruções mais antigas da Parte 3 em caso de conflito.

### Diagnóstico — por que estava quebrando

1. **GenAI de vídeo é estruturalmente fraca em identidade de produto.** Cada geração reinventa o carro (1 farol, 6 faróis, narração inventada, cortes) — prompt melhor *reduz* o problema, não elimina (prova: saga P1 v1→v3). Sites high-ticket reais não usam genAI no hero; usam fotografia ou render do CAD.
2. **Onde ela funciona:** carro **parado** + luz/câmera se movendo (P2–P5 entregaram bem). **Onde quebra:** qualquer coreografia com o carro em movimento — drift é o pior caso possível.
3. **Qualidade "de marketing" não é resolução** — é ângulo, lente e luz deliberados. Prompts anteriores geravam cenas bonitas sem declarar o ângulo de catálogo que valoriza o produto.

### Regras operacionais

- **R-M1 — Carro parado.** Nenhum prompt de vídeo pede movimento do carro. **Única exceção:** o preloader (§3.1 **v4**), um **vídeo genAI** com o carro **velado pela névoa** (dia nublado) — a névoa densa esconde a superfície que a IA erra, controlando a alucinação no cenário de maior risco (carro visível em movimento). O **carro 3D em movimento determinístico** foi para a **seção showcase interativa** (R3F — girar/inspecionar, não "gerar em movimento"). A silhueta noturna (§3.1 v2 / prompt P8) fica como fallback / clipe OG-social.
- **R-M2 — Stills-first.** Todo take vira primeiro uma IMAGEM 2K (barata, fácil de rejeitar e refazer). Vídeo só é gerado DEPOIS do still aprovado pelo dev, via image-to-video com o still como frame — nunca text-to-video direto. (Os frames 2K da Parte 7 já cumprem esta regra para farol/roda/volante/interior.)
- **R-M3 — Catálogo de ângulos.** Todo still declara qual ângulo do catálogo abaixo executa (campo `camera` do SCENE_RENDER_CONFIG referencia o código A1–A7). Ângulo fora do catálogo = justificar antes de gerar.

### Catálogo de ângulos de marketing (o que valoriza o F-Type)

| # | Ângulo | Lente | Altura de câmera | O que valoriza |
|---|---|---|---|---|
| A1 | ¾ frontal baixo (hero) | 35mm | ~60cm | Presença e agressividade — nariz + haunch traseiro no mesmo quadro |
| A2 | Head-on simétrico | 85mm | ~65cm (altura do farol) | O "olhar do predador" — os 4 faróis em simetria |
| A3 | Perfil puro | 50mm | ~90cm (cintura do carro) | Silhueta e proporção do coupé: capô longo, cabine recuada |
| A4 | ¾ traseiro baixo | 85mm | ~50cm | Haunch traseiro (assinatura do F-Type) + quad exhaust |
| A5 | Top-down ¾ elevado | 35mm | ~2,5m | Formato felino do capô/teto; linhas orgânicas |
| A6 | Macro de detalhe | 100mm macro | altura do elemento | Textura como joia: farol, roda, costura, emblema |
| A7 | Cockpit driver-side | 100mm | ombro do motorista | Materiais e posse — "o lugar é seu" |

**Pipeline resultante:** still 2K no ângulo A(n) → QA do dev → image-to-video restrito (luz/câmera se movem, carro não) → pós (Fase 6). Os slots pendentes da Parte 7 seguem este fluxo.

---

## Parte 9 — Blueprint de Seções & Motion (base Zenith, paleta canon — 2026-07-13)

> Decisões do dev (2026-07-13, refs Pinterest da Parte 2): **layout-base = "Zenith Hypercars"** (favorita), **paleta permanece a canon** dark + âmbar (zero retrabalho nas mídias geradas), **mapa estilo Aurex = rota do test-drive**. Motion: **GSAP + Lenis** (canon [[Preferencias Dev#GSAP + Lenis]] — `useGSAP`, ScrollTrigger integrado ao Lenis via `requestAnimationFrame`, `prefers-reduced-motion` → estados estáticos) + preloader §3.1 v2. Nenhum slot de mídia novo: todas as sections consomem a Parte 3 (regras R-M1/2/3 da Parte 8 valem).

| # | Section | Conteúdo (ref) | Mídia (slot da Parte 3) | Motion (GSAP/Lenis) |
|---|---|---|---|---|
| 0 | **Preloader "A Curva"** | Assinatura do site | §3.1 **v4** — vídeo (frames em canvas), dia nublado, carro velado | Tempo fixo 3,7s; barra = velocímetro (dip na curva); responsivo (cover) + placeholder swap-ready; traçado da curva = semente do §7; dissolve no hero |
| 0b | **Showcase 3D interativo** (novo — a posicionar) | Carro 3D pra girar/inspecionar | R3F + GLB Sketchfab CC (spec da antiga §3.1 v3) | Onde entra e o que faz = **pendência #16**. Three.js/R3F canon (R7 ok) |
| 1 | **Hero** | Full-bleed estilo Zenith; headline curta em 3 linhas `[PENDENTE #10 — copy]`; CTA duplo (reservar / ver filme) | Loop alpino §3.2 (A1) + poster | Reveal pós-preloader (o stat 3,7s "vira" o primeiro counter); parallax sutil no vídeo (bleed 10%); nav aparece após o reveal |
| 2 | **Stats bar** | 4 counters gigantes (Zenith/Sahara): **0–100 em 3,7s** (herói) + potência + torque + vel. máx `[PENDENTE #11 — confirmar specs oficiais do trim]` | — (tipografia display) | Counters GSAP disparados por ScrollTrigger; contagem com o mesmo ease do velocímetro do preloader |
| 3 | **Os 3 Atos** | 3 cards escuros estilo "Built to Perform": Habitat (floresta) / Domínio (alpino) / Detalhe (estúdio) | Stills §3.5 + §3.6 (A1/A3) | Stagger de entrada; hover: zoom leve na mídia (bleed); cada card ancora para sua section |
| 4 | **Motor "O Coração"** | Section técnica dark (análoga à battery da Zenith): V8 5.0 supercharged + 3 mini-specs | Vídeo §3.9 (showcase, som opt-in — pendência #8) | Pin curto da section; vídeo entra com clip-path reveal; mini-specs em stagger |
| 5 | **Detalhes de estúdio** | Faróis / roda / traseira em blocos alternados; grade de swatches de materiais (Sahara) | Micro-loops §3.8 + macros (A6) | ScrollTrigger: cada take entra quando 60% visível; loops só tocam em viewport (economia); swatches em stagger |
| 6 | **Cockpit** | Interior full-width estilo "Pure Connection" | Still/vídeo interior §3.8d (A7) | Parallax lento; legenda em fade sequencial |
| 7 | **"O Território"** | Mapa da rota do test-drive (Aurex): pontos numerados 01→0n nos cenários dos atos — **01 = a curva do preloader**; termina no CTA de test-drive | Fundo: still floresta/alpino escurecido; mapa = SVG (código, sem mídia) | Linha SVG desenhada no scroll (`stroke-dashoffset` via ScrollTrigger scrub); pontos acendem em âmbar ao passar |
| 8 | **Jaguar statement** | Divider com o animal (fio condutor da marca) | §3.3 (alpha) / §3.4 | Reveal no scroll (máscara); olhos âmbar acendem por último |
| 9 | **Prova social** | Logos de imprensa em grayscale (Zenith) + 1 depoimento serif itálico (Monarch) | — `[PENDENTE #12 — logos reais ou fictícios? projeto de estudo]` | Fade em stagger; grayscale → cor no hover |
| 10 | **Inquiry / test-drive** | Form estilo "Own the Future" | Fundo `surface-1` + still discreto | Campos em stagger; submit com micro-feedback. ⚠️ Captura real de lead → `front+back` (linha 22, pendência #6) |
| 11 | **Footer** | Colunas padrão + assinatura | — | — |

**Regras transversais de motion:** Lenis na raiz; `gsap.ticker` ↔ `lenis.raf`; `useGSAP` obrigatório (auto-cleanup); NENHUMA animação bloqueia main thread; `prefers-reduced-motion` desativa preloader (poster+fade), counters (valor final direto), parallax e scrub. Vídeos: `muted autoplay playsinline loop preload="metadata"` + poster (canon [[Asset Sizing Standard]]).

---

## Quality Gate (do Kickoff — R2: só marcado o que foi feito)

- [x] `00-DNA.md` gerado com as 5 partes do contrato de resposta
- [x] Proto-tokens registrados por ref acessível (landonorris, nextsense, terminal — mood/tipografia/lições; hex propostos e marcados como proposta) — igloo.inc marcada `[PENDENTE]`
- [x] Prompts completos para TODOS os slots da §2.4 do Input, com tamanho/ratio calculados antes ([[Asset Sizing Standard]]), frames inicial+final onde `vira vídeo = sim`, alpha declarado onde marcado, bleed onde anima
- [x] `[PENDENTE]` usados onde falta fonte — nada inventado (R3)
- [x] Prompts aprovados pelo dev ("bora", 2026-07-10 — recomendações aceitas: acento âmbar, OG sem texto/texto via código)
- [ ] Prompts v1.1 (§3.8 vídeos de detalhe + §3.9 motor) aprovados pelo dev — aguardando revisão
- [x] Mídias geradas pelo dev (2 imagens + 1 vídeo Veo) ingeridas e avaliadas contra o Asset Sizing (Parte 6, 2026-07-11)
- [ ] Estratégia de Mídia v2 (Parte 8) + §3.1 v2 + prompt P8 revisados pelo dev (abordagem aprovada em plano na sessão 2026-07-13; texto final aguardando leitura)
- [ ] Blueprint de seções & motion (Parte 9) revisado pelo dev (decisões base Zenith/paleta canon/mapa test-drive tomadas via AskUserQuestion 2026-07-13; tabela final aguardando leitura)
- [ ] Preloader v4 (§3.1 — vídeo dia-nublado/carro velado, responsivo + placeholder swap-ready; R3F-3D relocado p/ showcase) revisado pelo dev (decisões via AskUserQuestion 2026-07-13; spec aguardando leitura; implementação no bootstrap do front)
- [ ] Mídias geradas + normalizadas (bloqueado: Higgsfield free/1,42 créditos → caminho A: assinar basic e o agente gera via MCP; caminho B: dev gera no free tier com o [[01-Prompt-Pack]] e o agente normaliza — Fase 6 do [[Frontend Creative Protocol]])
