---
template: "Prompt Pack (derivado do 00-DNA — Parte 3)"
version: 1.0
status: "Pronto para uso (free tier)"
tags:
  - midia
  - prompts
  - geracao
projeto: "Jaguar F-Type 2024"
data: "2026-07-10"
---

# 🎬 Prompt Pack — Jaguar F-Type 2024

> Prompts prontos para colar, na **ordem de geração**, com ferramenta e settings por asset. Fonte: [[00-DNA]] Parte 3 (não editar aqui sem refletir lá).
>
> **Estado do Higgsfield (2026-07-10):** saldo 1,42 créditos, plano **free** — modelos de terceiros bloqueados (`403 minimum_basic_plan_required`), nativos custam ≥2. **Caminho A:** assinar basic/recarregar → o agente gera tudo direto pelo MCP (modelos já mapeados: `cinematic_studio_2_5` p/ stills 2k–4k; `seedance_2_0`/`kling3_0` p/ vídeo first+last frame). **Caminho B (este pack):** free tier canon — Google AI Studio (imagens) + Kling/Hailuo/Luma web (vídeo, créditos diários grátis).
>
> **Regras ao gerar (Asset Sizing):** nunca aceitar máster de vídeo <1080p; imagem abaixo do alvo = regenerar (não upscale); manter o MESMO chat/seed para pares frame-inicial/final; salvar originais fora do git em `_masters/` (mesma regra da `refs/`).

---

## Ordem de geração

| # | Asset | Ferramenta (free) | Output esperado |
|---|---|---|---|
| 1 | Preloader — frame inicial | Google AI Studio (Imagen/Gemini) · 16:9 | `preloader-curva-frame-inicial.png` |
| 2 | Preloader — frame final | mesmo chat do #1 | `preloader-curva-frame-final.png` |
| 3 | Preloader — vídeo 4s | Kling web (first+last frame) · 1080p | `preloader-curva-master.mp4` |
| 4 | Hero alpino — frame inicial | Google AI Studio · 16:9 | `hero-alpino-frame-inicial.png` |
| 5 | Hero alpino — frame final | mesmo chat do #4 | `hero-alpino-frame-final.png` |
| 6 | Hero alpino — loop 8s | Kling/Luma (first+last) · 1080p+ | `hero-alpino-master.mp4` |
| 7 | Jaguar statement (alpha) | Google AI Studio · 1:1 | `jaguar-statement.png` (+ remove-bg se preciso) |
| 8 | Jaguar motion — frames + vídeo 5s | AI Studio + Kling · 16:9 1080p | `jaguar-motion-master.mp4` |
| 9 | Estúdio dark ×4 (farol/roda/interior/traseira) | Google AI Studio · 3:2 e 1:1 | `detail-{farol,roda,interior,traseira}.png` |
| 10 | Showcase alpino 6–8s | Kling (first = frame final do #5) | `showcase-alpino-master.mp4` |
| 11 | OG 1200×630 (SEM texto — texto via código) | Google AI Studio · 3:2 → crop | `og-base.png` |

---

## 1–2 · Preloader — frames (16:9, pedir a MAIOR resolução disponível)

**Frame inicial — cole:**

```text
Hyper-realistic cinematic film still, 16:9 wide. In the lineage of Tarkovsky's slow cinema — dense silver mist, contemplative dread before speed. Camera: low three-quarter front angle, 35mm anamorphic feel, camera height ~60cm, shallow depth of field on background. Extend scene beyond frame edges (safe bleed for UI animation).

Location: narrow two-lane mountain road curving through dense humid rainforest — jaguar habitat. Concrete elements: wet asphalt with mirror-like reflections, low rolling fog between dark tree trunks, dark green ferns and moss on rock cuts, dripping canopy leaves overhead, faint god rays through mist, worn double yellow center line, low roadside stone barrier. Lighting: overcast diffused cold daylight; the car's LED headlights are the only warm source. Palette: matte black, graphite, silver metallic, ice white; single amber accent from headlights.

Subject: 2024 Jaguar F-Type R75 coupe, satin matte black finish, entering the corner far side, three-quarter front visible, slight body roll, frozen action. Materials: satin black paint with soft speculars, gloss black 20-inch five-spoke wheels, slim LED headlight signature on, fine water spray behind rear wheels.

Mood: predatory, silent speed about to be unleashed, high-ticket luxury. Avoid: oversaturation, toy-like proportions, extra badges or fake logos, people, other cars, excessive lens flare. Subtle filmic grain, no CGI tell.
```

**Frame final — cole NO MESMO chat (consistência):**

```text
Same scene, same road, same lighting, same palette, same 2024 Jaguar F-Type R75 satin matte black — absolutely consistent in appearance and coloring with the previous image. Change only the car's position and state: now exiting the apex toward camera, near full-frontal, low and planted, full LED headlights flared through the mist, water spray arcing off both rear wheels, motion energy held (frozen action), satin black paint catching a cold silver rim light, amber headlight bloom cutting the fog. Keep everything else the same.
```

## 3 · Preloader — vídeo (Kling: modo start+end frame, 1080p, 4s, sem áudio)

```text
The matte black Jaguar F-Type accelerates smoothly through the wet forest corner toward the camera, progressive speed build (slow-in, strong-out), subtle body roll then settle, water spray increasing with speed, fog parting around the body. Camera: locked tripod, no pan, no zoom, no cuts. Cinematic realism, consistent lighting and palette across all frames. No people, no other vehicles, no text.
```

## 4–5 · Hero alpino — frames (16:9, maior resolução)

**Frame inicial — cole:**

```text
Hyper-realistic cinematic wide shot, 16:9. In the lineage of Denis Villeneuve's monolithic minimalism — vast cold landscape, small precise subject. Camera: wide establishing shot, 32mm, eye level, deep focus. Extend scene beyond frame edges (bleed for slow zoom loop).

Location: high alpine road plateau after snowfall, late golden-blue afternoon. Concrete elements: snow-covered jagged peaks, wet dark asphalt lane, snow banks lining the road, low sun flaring softly behind a ridge, drifting powder snow caught by wind, long cold shadows across the road. Lighting: low cold sun from camera-left as silver rim light; ice-blue gradient sky. Palette: matte black, graphite, silver metallic, ice white; single amber accent from headlights.

Subject: 2024 Jaguar F-Type R75 coupe, satin matte black, parked low and wide on the lane, three-quarter front, LED signature on, light snow dust on lower panels, gloss black wheels.

Mood: dominance, stillness before speed, vast silence, high-ticket luxury. Avoid: oversaturation, people, other cars, extra badges or fake logos, busy composition. Subtle filmic grain, no CGI tell.
```

**Frame final — mesmo chat:** `Same image, identical car position and framing — only the atmosphere moved: powder snow drifted slightly across the asphalt, the sun a touch lower, soft light shift. Keep everything else exactly the same.`

## 6 · Hero — loop (Kling/Luma, first+last, 8s, sem áudio)

```text
Subtle cinematic loop: the car stays perfectly still; wind moves powder snow across the asphalt, soft light shift, gentle drifting mist. Locked camera (or 2% slow push-in). Seamless loop from start frame to end frame, no cuts, no people, no text.
```

## 7 · Jaguar statement (1:1, maior resolução)

```text
Hyper-realistic sculptural render, 1:1 square: a living adult black jaguar (melanistic) whose fur reads as liquid obsidian metal with chrome-like specular reflections. Stalking pose, head low, shoulders raised, tail curved. Faint rosette pattern visible only in the speculars (true jaguar). Muscles defined by a cold silver rim light from upper left. Amber eyes as the single color accent. Camera: three-quarter side view, slightly low angle, 85mm, full body in frame with generous margins, no cropped limbs.

Transparent background, isolated subject, no backdrop, no floor shadow. (Se a ferramenta não suportar alpha: "uniform 50% gray studio void background, subject fully isolated" → remover fundo na pós.)

Mood: predatory elegance, silent power — a brand emblem come alive. Avoid: cartoon style, dull plastic sheen, visible brand logos, background elements.
```

## 8 · Jaguar motion (frames 16:9 no AI Studio → vídeo 5s no Kling)

- **Frame inicial:** mesmo prompt do #7, mas 16:9, `pose: mid-stride walk at far left of frame, moving toward camera-right, head level, eyes locked on viewer` + `background: uniform pure black studio void (#0A0A0B), subtle floor reflection only`.
- **Frame final (mesmo chat):** `Same metal-fur jaguar, absolutely consistent — now at center-right, front paw planted, shoulder blades high, head slightly lowered, amber eyes to camera. Same black void background.`
- **Vídeo:** `Slow predatory walk, weight shifting deliberately, liquid-metal fur speculars rolling across the muscles as it moves, tail slow sweep. Locked camera, no cuts, uniform black void background, no text.` (1080p, sem áudio)

## 9 · Estúdio dark — 4 imagens (farol/interior/traseira em 3:2; roda em 1:1)

**Base — cole e troque só a linha `Detail:`:**

```text
Hyper-realistic automotive studio photography, editorial finish, {3:2 landscape | 1:1 square}. Camera: macro-to-medium detail shot, 100mm, extremely shallow depth of field. Extend composition beyond frame edges (bleed for parallax).

Environment: graphite studio void (#141416) with soft gradient falloff to pure black; single cold silver rim light sweeping the body line plus a faint amber practical glow; faint floating dust in the light beam; soft floor reflection.

Subject: 2024 Jaguar F-Type R75, satin matte black — same car across the whole set, consistent appearance.
Detail: {VER LISTA}

Mood: precision, tactile luxury, desire. Avoid: oversaturation, fake badges or logos, busy reflections, people. Micro-texture, sharp foreground, no CGI tell.
```

`Detail:` por imagem — **farol:** `slim LED headlight signature lit, amber bloom on the satin hood edge` · **roda (1:1):** `gloss black five-spoke wheel, black caliper, carbon-ceramic disc detail` · **interior:** `driver cockpit, black leather with silver stitching, amber ambient light strip, steering wheel quarter view` · **traseira:** `rear three-quarter, ducktail spoiler line, slim LED taillight lit, quad exhaust tips in dark chrome`

## 10 · Showcase alpino (Kling, first frame = frame final do #5, 6–8s)

```text
From standstill the car launches forward, controlled slide through the first bend, powder snow bursting off the roofline and spraying from the rear wheels, amber headlights cutting the cold light. Camera: static wide, no cuts. Cinematic realism, no people, no text.
```

## 11 · OG base (3:2 → crop 1200×630; SEM texto — o texto entra via código)

```text
Hyper-realistic cinematic composition, 3:2 landscape: satin matte black 2024 Jaguar F-Type, three-quarter front, on wet alpine asphalt, snowy peaks soft in the background, amber LED headlights on. Subject weighted to the LEFT third; generous clean negative space on the right (dark sky/mist) for overlay text. Palette: matte black, graphite, silver, ice white, single amber accent. Avoid: any text, logos, watermarks, busy background on the right side.
```

---

## Pós-processamento (depois de gerar — o agente executa)

```bash
# 0. Masters ficam em _masters/ (fora do git). Validar: vídeo ≥1080p, imagem ≥ alvo @2x — abaixo disso REGENERAR.

# 1. Preloader: extrair 48 frames (12fps × 4s) a 960px
ffmpeg -i _masters/preloader-curva-master.mp4 -vf "fps=12,scale=960:-2" _masters/preloader/f%03d.png
# → sharp: AVIF q45 + WebP fallback → public/preloader/

# 2. Hero loop: WebM VP9 2-pass + MP4 + poster (comandos canônicos do Asset Sizing Standard)
ffmpeg -i _masters/hero-alpino-master.mp4 -vf scale=1920:-2 -c:v libvpx-vp9 -b:v 0 -crf 32 -pass 1 -an -f null NUL
ffmpeg -i _masters/hero-alpino-master.mp4 -vf scale=1920:-2 -c:v libvpx-vp9 -b:v 0 -crf 32 -pass 2 -an hero.webm
ffmpeg -i _masters/hero-alpino-master.mp4 -vf scale=1920:-2 -c:v libx264 -crf 23 -preset slow -movflags +faststart -an hero.mp4
ffmpeg -i _masters/hero-alpino-master.mp4 -ss 00:00:02 -frames:v 1 poster.png   # → AVIF+WebP

# 3. Imagens: sharp em lote → AVIF (q≈50) + WebP; OG → crop 1200×630 PNG/JPEG q80
# 4. Jaguar statement: remove-bg se veio com fundo → WebP com alpha
# 5. Pesos-alvo: hero ≤8MB · showcase ≤15MB · preloader total ≤2MB — estourou = crf maior ou loop menor
```

**Checklist de aceitação por asset:** ratio certo · ≥ alvo de resolução · paleta respeitada (preto fosco/prata/âmbar) · sem logos alucinados · par frame-inicial/final consistente (mesmo carro/cena) · registrado o tamanho gerado (futuro `05-Dev-Log`).
