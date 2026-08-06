---
template: "Media Asset Plan (hero) — pegada Arkkhe 'Velocity Beyond Limits'"
version: 1.0
status: "Projeto de assets do hero (studio reveal) — pronto pra geração pelo dev (Google Veo/Flow + AXIS/Nano Banana). Consistência via model sheet (método Human Academy)."
tags: [midia, prompts, hero, geracao, video, consistencia]
projeto: "Jaguar F-Type 2024"
data: "2026-08-06"
fonte_ref: "Daily Hero 26 — Arkkhe (hero-01.png)"
---

# 🎬 03 — Plano de Assets do Hero (pegada "studio reveal")

> Referência de mood: **Arkkhe "Velocity Beyond Limits"** (carro velado sob capa, spotlight vertical, chão molhado, headline gigante à esquerda, play de vídeo, card de specs com **thumbnail girando 360°**, chips de concorrentes). Adaptado à paleta canon do projeto (dark + **âmbar `#E8A33D`**, nunca o pink da ref). Casa com o template [[GRIGOLETTO Templates Pack|GRIGOLETTO]] "Ferrari 296 GTB" e o conceito "Black Jaguar / Liquid Metal" do [[00-DNA]].
>
> **Método de consistência (PDF Human Academy → [[Media Workflows (Human Academy)]] §3 Character Sheet):** gera-se **UM identity anchor** + um **model sheet de ângulos** que trava a identidade do carro; **todo** o resto (360°, frames de vídeo, produto) deriva daí → consistência garantida. Disciplina de prompt do KB ([[media-generation-decisions]]): identidade travada + lista fechada + negative + **um eixo por rodada** + gerar N e escolher. Ângulos = catálogo **A1–A7** da Parte 8 do [[00-DNA]].

---

## 1. Por que "studio reveal" (decisão de mídia)
- **Anti-alucinação máxima:** o carro entra **sob uma capa acetinada** — a IA renderiza **tecido**, não a lataria. Zero badge/farol/roda pra errar. É o caso **mais seguro** do projeto (mais ainda que a névoa do "A Curva"). Reforça R-M1 (carro parado) da Parte 8.
- **Drama premium:** a tensão do reveal + spotlight vertical = a linguagem de lançamento de marca cara.
- **Decisão a confirmar:** o hero vira **studio reveal** (esta pegada); o conteúdo **alpino** (§3.2 do DNA) desce pro **Ato II "Domínio"**. O preloader "A Curva" (estrada) segue como assinatura separada.

## 2. Mapa de assets do hero (o que gerar)

| ID | Asset | Papel no hero | Vira vídeo? | Base de consistência |
|---|---|---|---|---|
| **A** | **"O Vulto"** — carro sob a capa, spotlight | Poster/LCP + **frame inicial** do vídeo reveal | — (still) | independente (só tecido) |
| **B** | **Vídeo reveal** — a capa desliza, glimpse do carro | O **play** do hero | ✅ (A → B) | glimpse mínimo |
| **C** | **Identity Anchor** — F-Type A1 ¾ frontal, estúdio | Trava a identidade do carro (satin black, rodas, DRL) | — (still) | **é a fonte** |
| **D** | **Model Sheet** — turnaround A1→A4 do MESMO carro | Consistência p/ 360° e vídeos de detalhe | — (stills) | deriva de **C** |
| **E** | **Sequência 360°** — órbita do carro (24–36 frames) | Thumbnail girando do card de specs + showcase 3D | ✅ (frames) | deriva de **C/D** |

> **C → D → E** é a espinha da consistência: gere **C** primeiro, aprove, e **todo** o resto referencia C ("match the reference car strictly"). Nunca gerar ângulo novo do zero.

---

## 3. Prompts prontos (copiar inteiros — a blindagem está na redundância)

### P-A · "O Vulto" (still: poster + frame inicial do vídeo)
```text
/* SCENE_RENDER_CONFIG: FType-Hero-Reveal-Covered
   VERSION: 1.0  AESTHETIC: Cinematic Studio Reveal Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152 (compose for a safe 21:9 crop)",
    "style": "hyper-realistic cinematic studio still — a covered sports coupe under a single dramatic overhead spotlight; near-black void; official launch-teaser quality",
    "camera": "head-on, slightly low, 50mm; the covered car centered-to-right; generous empty negative space on the LEFT for a large headline",
    "render_flags": ["8K_master_detail", "sharp_subject", "subtle_filmic_grain", "no_CGI_tell"],
    "scene_extension": "extend scene beyond frame edges (bleed for a slow push-in loop)"
  },
  "ENVIRONMENT": {
    "location": "empty dark photography studio void with a wet, mirror-like black floor",
    "concrete_elements": ["one hard volumetric spotlight cone from directly above the car", "soft pool of light on the wet floor", "faint atmospheric haze catching the beam", "the covered silhouette mirrored on the wet floor"],
    "lighting": "a SINGLE overhead spotlight only; deep falloff to near-black; cool silver key, plus a faint warm amber practical low on the left",
    "palette": "matte black #080A0A, graphite, cold silver #C7CBD1; the ONLY warm color is a thin amber #E8A33D edge/underglow"
  },
  "CORE_ASSETS": {
    "primary_subject": "a low two-door sports coupe (long hood, low cabin, muscular rear haunches — F-Type proportions) FULLY DRAPED under a smooth satin-matte dark car cover; the cover clings to the body showing the SILHOUETTE only",
    "vehicle_state": "static, fully covered, waiting under the light",
    "materials": ["satin cover fabric with soft sheen and gentle folds", "wet black floor reflection", "volumetric light haze"]
  },
  "OUTPUT": {
    "mood": "anticipation before the reveal; expensive, restrained, predatory calm",
    "avoid": ["any visible car paint, badge, wheels, grille or logo", "bright or high-key exposure", "people", "colored/pink studio", "multiple light sources", "text or numbers", "oversaturation", "CGI or cartoon look"]
  }
}
```

### P-B · Vídeo reveal (image-to-video — frame inicial = P-A)
> Frame final: mesmo config, `vehicle_state` → "the satin cover is sliding off in one smooth motion: the front corner has lifted and cleared the nose, revealing a glimpse of the satin matte black hood and ONE pair of amber LED headlights igniting; the rest of the body still under cloth". A capa se move; **o carro não**.
```text
Ultra-photorealistic luxury automotive brand film, dark studio, the quality of an official launch teaser. One single continuous shot, 6 seconds, 16:9, cinema-grade. Keep the car within the central 9:16 safe zone.

SUBJECT — LOCKED: exactly ONE low sports coupe (F-Type proportions) under a smooth satin-matte dark car cover. The CAR NEVER MOVES. What moves is only the COVER and the light haze. When the cover clears the nose, exactly ONE pair of amber LED headlights (#E8A33D) ignites; no badges, no readable logos, paint stays satin matte black.

SET & LIGHTING — LOCKED: empty dark studio void, wet mirror-like black floor, a SINGLE hard volumetric spotlight from directly above. Deep falloff to near-black. Cool silver key + faint amber practical low-left. The only warm color is the car's amber lights.

CAMERA — LOCKED: single locked tripod, head-on slightly low, 50mm. NO pan, NO zoom, NO dolly, NO shake, NO cuts — the camera NEVER moves.

TIMELINE:
0.0–1.5s — the fully covered car under the spotlight, haze drifting, wet-floor reflection still.
1.5–4.0s — the satin cover slips and slides away in one smooth motion, sliding off the nose first.
4.0–5.2s — as the cover clears the front, one pair of amber headlights ignites; a glimpse of the satin black hood catches the silver light.
5.2–6.0s — the cover finishes falling to the floor; the car sits revealed-but-restrained under the beam; haze settles.

AUDIO — LOCKED: NO narrator, NO voiceover, NO speech, NO music, NO soundtrack. Only quiet studio room tone and the soft sound of fabric sliding.

STYLE: high-end launch-film cinematography, true blacks, controlled amber highlights, subtle filmic grain, volumetric spotlight. Mood: the predator unveiled — restrained, expensive.

STRICT RULES: single continuous take, NO cuts; the camera never moves; the CAR never moves — only the cover and haze move; the paint is always satin matte black; exactly one car; exactly one pair of amber headlights when the front shows — never a full grille of lights.

NEGATIVE (exclude completely): narrator, voiceover, voice, speech, music, soundtrack, people, driver, text, letters, numbers, subtitles, watermarks, logos or badges, the car driving or rolling or moving, wheels spinning, bright daylight, colored studio, pink, second car, smoke, fire, camera movement, camera shake, pans, zooms, cuts, glossy paint, color shift, cartoon or CGI look, morphing shapes.
```

### P-C · Identity Anchor (A1 ¾ frontal, estúdio — a fonte da consistência)
```text
/* SCENE_RENDER_CONFIG: FType-Identity-Anchor-A1
   VERSION: 1.0  AESTHETIC: Premium Automotive Studio Photography */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "3:2 landscape, 2048x1365",
    "style": "hyper-realistic automotive studio photography, editorial catalogue finish",
    "camera": "A1 — three-quarter front, low ~60cm, 35mm; the whole car in frame with margins",
    "render_flags": ["8K_UHD", "micro_texture", "sharp_foreground", "editorial_finish"]
  },
  "ENVIRONMENT": {
    "background": "graphite studio void #141416, soft gradient falloff to pure black, wet black floor reflection",
    "lighting": "single cold silver rim light sweeping the body line + faint amber practical glow #E8A33D",
    "atmosphere": ["faint dust in the light beam", "soft floor reflection"]
  },
  "CORE_ASSETS": {
    "primary_subject": "2024 Jaguar F-Type R75 coupe, SATIN MATTE BLACK — long hood, low cabin, muscular rear haunches, slim LED headlight signature (four amber blades, two per side), gloss black five-spoke wheels",
    "vehicle_state": "parked, three-quarter front, LED signature on",
    "materials": ["satin black paint with cold speculars", "gloss black wheels", "dark chrome accents"]
  },
  "OUTPUT": {
    "mood": "presence, aggression, precision — the hero angle",
    "avoid": ["fake badges or invented logos", "oversaturation", "people", "busy reflections", "glossy paint", "grey paint"]
  }
}
```

### P-D · Model Sheet / turnaround (consistência — método Human Academy)
> **Anexar P-C como imagem de referência.** Gera o set de ângulos travado na mesma identidade.
```text
Create a professional automotive TURNAROUND reference sheet based STRICTLY on the uploaded reference car. Clean neutral dark studio void background (#141416), soft floor reflection. Present as a technical turnaround in ONE row, left to right: (1) pure front, (2) three-quarter front, (3) side profile, (4) three-quarter rear, (5) pure rear. 

Maintain PERFECT identity consistency across every panel: identical satin matte black paint, identical gloss black five-spoke wheels, identical slim amber LED signature, identical proportions and trim — it is the SAME single car rotated. Consistent studio lighting across all panels (one cold silver rim + faint amber practical), even spacing, uniform framing, consistent car height and scale. Crisp, print-ready catalogue quality.

STRICT: same car in every panel; satin matte black always; no invented badges; no text, no numbers, no people; no color shift; no second car.
```

### P-E · Sequência 360° (produto girando + showcase)
> Duas rotas (decisão do dev):
> - **Rota vídeo (recomendada, Veo):** image-to-video a partir de P-C, "the car rotates slowly 360° on a turntable under constant studio light, camera locked, car identity unchanged, no cuts, 8s" → extrair **24–36 frames AVIF** (a thumbnail e o showcase scrubam os frames — técnica "3D sem WebGL"). **A capa/carro não mudam de identidade.**
> - **Rota stills (fallback):** gerar N ângulos discretos (a cada ~15°) image-to-image de P-C ("match the reference car strictly, rotate ~15°, identical everything").
> Nota: o **showcase 3D** decidido é **R3F/GLB real** ([[fa-a-todo-o-planejamento-validated-lagoon|plano]]) — a sequência 360° serve à **thumbnail do card** e como fallback estático do showcase.

---

## 4. Asset Sizing (tamanhos/formatos — [[Asset Sizing Standard]])
| Asset | Máster | Entrega | Formato |
|---|---|---|---|
| A — "O Vulto" still | 2048×1152 (4K ideal) | 1920×1080 @2x | **AVIF + WebP** (poster/LCP) |
| B — vídeo reveal | 16:9 **≥1080p (4K)** | 1920×1080 | **WebM VP9 (crf 30–34) + MP4 H.264 ≤8MB + poster** (=A) |
| C — identity anchor | 2048×1365 | @2x do slot | AVIF + WebP |
| D — model sheet | painéis 2K cada | recorta por ângulo | AVIF + WebP |
| E — 360° | vídeo 4K → 24–36 frames | 960–1280px/quadro | **AVIF q≈45** (sequência), preload |

> `muted autoplay playsinline loop preload="metadata"` + poster no vídeo; `prefers-reduced-motion` → poster (A). Nunca upscale de vídeo (regenerar). Normalização: `sharp` (imagens) + `ffmpeg` (WebM/MP4/poster/extração de frames).

## 5. Ordem de geração + ferramentas (dev gera, agente normaliza)
1. **C — Identity Anchor** (AXIS/Nano Banana, still 2K) → **dev aprova** (é o carro-mestre; rejeitar barato aqui).
2. **A — "O Vulto"** (still, só tecido — baixíssimo risco) → aprova.
3. **D — Model Sheet** (referenciando C) → confere consistência.
4. **B — Vídeo reveal** (Veo/Flow, image-to-video A→cover-off) → gate: ≥1080p, sem watermark/áudio.
5. **E — 360°** (Veo turntable de C → extrair frames) ou stills fallback.
6. Agente **normaliza + integra** nos componentes swap-ready (`media-placeholder.tsx`, hero, card de specs).

## 6. Decisões (2026-08-06)
- **Hero = vídeo em LOOP no estúdio** ✅ — carro **parado**, quem se move é luz/atmosfera/reflexo, voltando ao ponto inicial (seamless). Prompts na **§7**. O conteúdo alpino desce pro Ato II; a capa/reveal (P-A/P-B) fica como **teaser/preloader opcional**.
- **Rivais: CORTADOS** ✅ — só Jaguar, **sem chips de concorrentes**. O espaço do card vira só specs (ou selos de imprensa, pendência #12).
- **Specs do card** (#11): confirmar os 4 números oficiais do R75 antes de publicar.
- **Nome do site** (#1): afeta o headline e o OG.

---

## 7. HERO LOOP — vídeo de estúdio em loop (PRIMÁRIO)

> Impacto **sem** o carro se mexer. Primeiro frame = último frame → **loop seamless**. Frame inicial = poster/LCP + `prefers-reduced-motion`. Regras R-M1/2/3 + disciplina de prompt ([[media-generation-decisions]]).

> ✅ **v3 (2026-08-06 — ATUAL, decisão do dev):** o fundo chapado da v2 **não funcionou** — volta o **estúdio dramático** (chão molhado + reflexo), mas com iluminação limpa: **SEM fumaça/haze**, **luz só de trás da câmera** (frontal suave no carro), **nenhuma fonte de luz no quadro** (todas off-frame, "luz sentida, não vista"). Full-bleed → as bordas near-black fundem no `#080A0A` da seção (native sem precisar de fundo chapado). **Usar os prompts v3 abaixo.** v2 (fundo chapado) e v1 (luz que ronda) = superadas.
>
> **Relight/limpeza (Nano Banana, na imagem aprovada) → poster + 1º frame:**
> ```text
> Keep this exact car completely unchanged — same identity, satin matte black paint, wheels, amber LED headlights, angle and position. Change ONLY the environment and lighting:
> - Remove ALL smoke, fog, haze and mist — the air is perfectly clear.
> - Relight so the KEY LIGHT comes from BEHIND THE CAMERA, softly and evenly lighting the FRONT of the car. The light source is OUT OF FRAME and never visible.
> - NO light comes from the front toward the camera, no backlight, no light between the camera and the car.
> - Remove any visible spotlight, light cone, beam, lamp or lens flare — NO visible light sources anywhere; light is felt, not seen.
> - Keep the dark near-black studio and the wet, mirror-like black floor with the car's reflection.
> - Keep the amber headlights lit and constant, exactly as they are.
> No text, no logos, no badges added.
> ```
>
> **P-F2 v3 · Vídeo loop (Veo/Flow — image-to-video do frame acima):**
> ```text
> Ultra-photorealistic luxury automotive product film, 8 seconds, 16:9, cinema-grade, SEAMLESS LOOP (last frame identical to first). Image-to-video from the attached frame — keep THAT exact car, unchanged.
> SCENE — LOCKED: dark near-black photography studio with a wet, mirror-like black floor reflecting the car. NO smoke, NO fog, NO haze, NO mist — perfectly clear air.
> LIGHTING — LOCKED: key light from BEHIND THE CAMERA, softly/evenly lighting the front of the car; the source is OUT OF FRAME and NEVER visible. No light from the front toward the camera, no backlight. NO visible lamps, spotlights, cones, beams or lens flares anywhere — light is felt, not seen.
> SUBJECT — LOCKED IDENTITY: exactly ONE 2024 Jaguar F-Type coupe in satin matte black, PERFECTLY STILL; never moves/rolls, wheels never spin. Amber LED headlights CONSTANT (as attached): never flash/blink/pulse/change brightness/high-beam/hazard, never duplicated or multiplied. No new lights appear.
> MOTION — MINIMAL: car and lights fully static; the ONLY motion is a very subtle specular reflection rolling slowly along the top body edge and its floor mirror, then easing back to start.
> CAMERA — LOCKED: locked tripod, no pan/zoom/dolly/shake/cuts.
> TIMELINE (loop): 0.0–4.0s faint sheen travels along hood/roof edge + floor reflection; 4.0–8.0s eases back to exact start (seamless).
> AUDIO — LOCKED: no narrator/voice/speech/music/soundtrack; quiet room tone only.
> STRICT: keep attached car identical; single take, no cuts; seamless loop; car+lights static; only reflection moves; no smoke ever; no visible light source ever.
> NEGATIVE: smoke, fog, haze, mist, visible light source, lamp, spotlight, light cone, light beam, volumetric rays, lens flare, backlight, light in front of the car, duplicated headlights, extra headlights, multiplied lights, new lights, flashing, blinking, strobe, hazard lights, turn signals, high beam, pulsing brightness, car moving/rolling/driving, wheels spinning, camera movement/shake, pan, zoom, dolly, cut, people, text, watermark, logo, badge, second car, fire, glossy/grey paint, color shift, CGI/cartoon, morphing, warping panels.
> ```

> ⚠️ **APRENDIZADO v2 (2026-08-06 — pós-1ª geração do dev):** o vídeo v1 **duplicou os faróis, piscou alerta/farol-alto e criou feixes de luz exagerados**. Causas: (1) faróis mandados "respirar/pulsar" → IA leu como pisca/high-beam e multiplicou; (2) "rim light varrendo" + spotlight volumétrico → feixes dramáticos; (3) sem travar identidade via image-to-video. **Correção (usar sempre):** **(a)** image-to-video com o still como 1º frame; **(b)** faróis/luz **100% constantes** (zero pulse/breathe); **(c)** **sem** fonte de luz/feixe visível — movimento só de reflexo sutil; **(d)** fundo **chapado `#080A0A`** (mesma cor do hero) pra parecer nativo. **Prompts P-F1/P-F2 abaixo já são v2.** O carro-aprovado (imagem 1 do dev) é reusado via bg-swap (Nano Banana), não regerado.

**Bg-swap (Nano Banana) — pôr o carro aprovado no fundo chapado (vira poster + 1º frame):**
```text
Place this exact car, completely unchanged, on a FLAT SOLID matte near-black background of color #080A0A that fills the entire frame. Keep the car's identity, paint, wheels, headlights, angle and position identical. Remove any spotlight, floor line, walls or gradient — the background must be ONE flat solid near-black color. Keep only a subtle soft reflection under the car fading into the same near-black. No text, no logos added.
```

**P-F2 v2 · Vídeo loop (Veo/Flow — anexar o still bg-swapped como frame inicial):**
```text
Ultra-photorealistic luxury automotive product film, 8 seconds, 16:9, cinema-grade, SEAMLESS LOOP (last frame identical to first frame). Image-to-video from the attached frame — keep THAT exact car, unchanged.

BACKGROUND — LOCKED: a completely FLAT, SOLID, matte near-black background #080A0A filling the entire frame — no gradient, no spotlight, no light cone, no visible floor line, no walls. The car sits on a subtle dark reflection that fades into the same near-black. The background must read as one flat solid color.

SUBJECT — LOCKED IDENTITY: exactly ONE 2024 Jaguar F-Type coupe in satin matte black, PERFECTLY STILL. The car never moves, never rolls, wheels never spin. The headlights are CONSTANT — exactly the same amber LED signature already lit in the attached frame: they NEVER flash, NEVER blink, NEVER pulse, NEVER change brightness, NEVER switch to high beam, NEVER turn on hazard or turn signals, and are NEVER duplicated or multiplied. No new lights ever appear.

LIGHTING & MOTION: NO visible light source, NO light beams, NO spotlight cone, NO lens flare. The ONLY motion is extremely subtle: a soft specular reflection slowly rolls along the top body edge and returns, plus a faint drift of atmospheric haze low near the reflection. Calm, minimal, expensive — highlights stay gentle, never bright, never dramatic beams.

CAMERA — LOCKED: locked tripod, no pan, no zoom, no dolly, no shake, no cuts. The camera never moves.

TIMELINE (loop): 0.0–4.0s a faint specular sheen travels slowly across the hood/roof edge, haze drifts a little. 4.0–8.0s the sheen and haze ease back to the exact starting state so the clip loops with no visible cut.

AUDIO — LOCKED: no narrator, no voiceover, no speech, no music, no soundtrack. Quiet room tone only.

STRICT RULES: keep the attached car identical; single continuous take, no cuts; seamless loop (first and last frame identical); the car and its lights are COMPLETELY STATIC; only a subtle reflection and faint haze move; flat solid #080A0A background at all times.

NEGATIVE (exclude completely): duplicated headlights, extra headlights, multiplied lights, new lights appearing, flashing lights, blinking lights, strobe, hazard lights, turn signals, high beam, headlight flare, changing or pulsing brightness, light beams, spotlight cone, volumetric light rays, lens flare, moving light source, the car moving or rolling or driving, wheels spinning, camera movement, camera shake, pan, zoom, dolly, cut, jump cut, gradient background, spotlight background, floor line, walls, windows, people, driver, text, letters, numbers, watermark, logo, badge, second car, smoke, fire, glossy or grey paint, color shift, cartoon or CGI look, morphing, warping panels.
```

> As duas caixas abaixo (P-F1 still original / P-F2 v1 "luz que ronda") ficam como **histórico** — superadas pela v2 acima. Regra nova pra qualquer take: fundo chapado `#080A0A` (ou alpha) + luz/faróis constantes + image-to-video.

### P-F1 · Hero still "O Predador Parado" (frame inicial + poster)
```text
/* SCENE_RENDER_CONFIG: FType-Hero-Loop-Still
   VERSION: 1.0  AESTHETIC: Cinematic Studio Automotive Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152 (compose for a safe 21:9 crop)",
    "style": "hyper-realistic cinematic studio still — a single sports coupe under dramatic studio light in a near-black void; official launch-film quality",
    "camera": "A2 head-on, slightly low ~65cm, 85mm; the car centered-to-RIGHT with generous empty negative space on the LEFT for a large headline",
    "render_flags": ["8K_master_detail","sharp_subject","subtle_filmic_grain","no_CGI_tell"],
    "scene_extension": "extend scene beyond frame edges (bleed for a slow loop)"
  },
  "ENVIRONMENT": {
    "location":"empty dark photography studio void, wet mirror-like black floor",
    "concrete_elements":["one soft overhead spotlight pooling on the car","cold silver rim light grazing the body line","faint volumetric haze","the car mirrored on the wet floor"],
    "lighting":"overhead key + a single cold silver rim; deep falloff to near-black; a faint warm amber practical low-left",
    "palette":"matte black #080A0A, graphite, cold silver #C7CBD1; the ONLY warm color is the amber #E8A33D of the car lights"
  },
  "CORE_ASSETS": {
    "primary_subject":"2024 Jaguar F-Type R75 coupe, SATIN MATTE BLACK — long hood, low cabin, muscular rear haunches, slim amber LED signature (four blades, two per side), gloss black five-spoke wheels",
    "vehicle_state":"parked head-on, perfectly still, LED signature lit",
    "materials":["satin black paint with cold speculars","gloss black wheels","dark chrome accents","wet floor reflection"]
  },
  "OUTPUT": {
    "mood":"latent power at rest, predatory calm, high-ticket luxury",
    "avoid":["fake badges or invented logos","bright/high-key exposure","people","colored studio","glossy or grey paint","text","oversaturation","CGI look"]
  }
}
```

### P-F2 · Hero loop video — "Luz que Ronda" (recomendado; image-to-video de P-F1)
```text
Ultra-photorealistic luxury automotive brand film, dark studio, official launch-film quality. One single continuous shot, 8 seconds, 16:9, cinema-grade, designed as a SEAMLESS LOOP — the last frame matches the first frame exactly.

SUBJECT — LOCKED IDENTITY: exactly ONE 2024 Jaguar F-Type R75 coupe in SATIN MATTE BLACK, parked head-on, PERFECTLY STILL the entire time. The car NEVER moves, never rolls; wheels never spin. Slim amber LED headlights (#E8A33D, exactly four blades, two per side) stay lit. No badges, no readable logos. Paint is always satin matte black.

SET & LIGHTING: empty dark studio void, wet mirror-like black floor, deep near-black falloff. ALL motion is in the LIGHT and ATMOSPHERE only: a single cold silver rim light slowly SWEEPS around the car — travelling along the body line from camera-left, across the nose, to camera-right and back — completing one full cycle and returning EXACTLY to its start. Faint volumetric haze drifts. The amber headlights softly breathe (barely). Wet-floor reflections travel with the moving light.

CAMERA — LOCKED: single locked tripod, head-on slightly low, 85mm. NO pan, NO zoom, NO dolly, NO shake, NO cuts — the camera NEVER moves.

TIMELINE (loop):
0.0–2.6s — the silver rim light sweeps from camera-left across the hood toward camera-right; speculars roll along the body edge; haze drifts.
2.6–5.4s — the light reaches the far side and sweeps back across the roofline and nose; the amber lights give one slow soft pulse.
5.4–8.0s — light, haze and reflections settle back to the EXACT starting position and intensity, so the clip loops with no visible cut.

AUDIO — LOCKED: NO narrator, NO voiceover, NO speech, NO music, NO soundtrack. Only a very quiet studio room tone.

STYLE: high-end launch-film cinematography, true blacks, controlled amber highlights, subtle filmic grain, volumetric light. Mood: latent violence at rest — expensive, still, predatory.

STRICT RULES: single continuous take, NO cuts; SEAMLESS LOOP (first and last frame identical); the camera never moves; the CAR never moves — only light, reflections and haze move; paint always satin matte black; exactly one car; exactly four amber headlight blades (two per side) — never more, never fewer.

NEGATIVE (exclude completely): narrator, voiceover, voice, speech, music, soundtrack, people, driver, text, letters, numbers, subtitles, watermarks, logos or badges, the car moving or rolling or driving, wheels spinning, camera movement, camera shake, pans, zooms, dolly, cuts, jump cut, hard cut at the loop point, bright daylight, colored studio, pink, second car, smoke, fire, glossy paint, grey paint, color shift, cartoon or CGI look, morphing shapes, warping body panels.
```

### P-F3 · Alternativa — Turntable 360° (também serve de asset 360° E)
```text
[mesmo cabeçalho + SUBJECT LOCKED de P-F2] ... designed as a SEAMLESS LOOP.
MOTION: the car slowly rotates on an invisible turntable, completing EXACTLY one full 360° revolution over 8 seconds and returning to the identical starting angle. The car's identity NEVER changes through the rotation — same satin matte black paint, same wheels, same proportions, same amber LED signature in EVERY frame. Camera locked; a fixed cold rim light + overhead key; wet floor reflection; faint haze.
STRICT: one continuous 360° at constant speed; identity identical in every frame; no cuts; first and last frame identical.
NEGATIVE (add to P-F2's): shape morphing during rotation, body panels changing, wheels changing, badge appearing or disappearing, identity drift.
```
> ⚠️ **Recomendação:** usar **P-F2 (luz que ronda)** no hero — carro parado = risco mínimo. O **P-F3 (turntable)** tem risco de *drift* de identidade na rotação; use-o só se segurar a consistência, e aproveite-o **também** como o asset 360° do card/showcase (E).

### Pós (seamless garantido) — [[Asset Sizing Standard]] §Vídeo
- Se o gerador não fechar o loop perfeito: **crossfade curto no ffmpeg** (sobrepor ~0,3s do fim no início) ou, último caso, boomerang (ida-e-volta).
- Entrega: **WebM VP9 (crf 30–34) + MP4 H.264 ≤8MB + poster** (=P-F1); `muted autoplay playsinline loop preload="metadata"`; `prefers-reduced-motion` → poster.
- Máster **≥1080p (4K ideal)**; nunca upscale de vídeo (regenerar). Gate: watermark/áudio embutido/720p = rejeitar.

## Referências
- [[00-DNA]] Parte 3 (prompts) · Parte 8 (R-M1/2/3 + ângulos A1–A7) · [[02-Prompt-Pack-Video-Premium]] (P1–P9)
- [[Media Workflows (Human Academy)]] (character sheet/consistência) · [[media-generation-decisions]] (disciplina de prompt) · [[Cinematic Sites Kit]] · [[Asset Sizing Standard]] · [[Frontend Creative Protocol]] §Fase 6
