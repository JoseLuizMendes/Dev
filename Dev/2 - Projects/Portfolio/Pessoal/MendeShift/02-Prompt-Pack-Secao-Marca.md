---
template: "Prompt Pack"
version: 1.0
status: "Ativo"
tags:
  - prompts
  - midia
  - image-to-video
  - mendeshift
  - cinematografico
projeto: "MendeShift"
slot: "Seção 07 — A Marca"
ferramentas: "Google AI Studio / Gemini (Nano Banana 2) → stills · Google Labs / Flow (Veo) → image-to-video"
---

# Prompt Pack — Seção 07 "A Marca"

> Ordem obrigatória: **stills primeiro, vídeo depois** (R-M2 do canon: nenhum vídeo antes da imagem
> aprovada). Direção e sizing: [[00-DNA]] §4.

## Regras de execução ([[Frontend Creative Protocol]] §6.1)

- **Lista fechada** + negativas explícitas em todo prompt.
- **Um eixo por rodada** — variar só luz OU ângulo OU paleta, nunca tudo junto.
- **Gerar 3–4 saídas por keyframe**, escolher a melhor, iterar. Nunca aceitar a primeira cega.
- **Trancar na referência** nos keyframes com o rosto do dev.
- Máster de geração: **2048×1152 (16:9)**. Sem upscale. Downscale para 1600×900 na entrega.

---

## Bloco de estilo (colar em TODOS os prompts)

```
STYLE: cinematic still, 16:9, pure near-black background #0b0c0f filling the frame edges,
one single hard rim light in red #ff4d4f from camera-left, deep controlled shadows,
fine film grain, subject tack sharp.
NEGATIVE: no text, no letters, no logos, no watermark, no UI labels, no extra people,
no props, no atmospheric haze, no fog, no volumetric god rays, no bokeh light orbs,
no lens flare, no blue or teal tint, no soft-focus veil over the subject, no frame,
no border, no vignette ring.
```

> As negativas de névoa/haze/flare existem porque o brief do dev proíbe qualquer sujeira sobre a
> imagem ([[00-DNA]] §2). Sem elas, o gerador enfia neblina em toda cena "cinematográfica".

---

## Keyframes (5 stills → 4 segmentos)

### K0 — Origem (frame inicial do plano 01)

> **Referência de identidade obrigatória:** anexar `public/card_profile.webp` do repo do site.

```
Head-and-shoulders portrait of the man in the reference image, facing the camera directly,
neutral expression, eyes on lens, dark plain t-shirt, centered in frame.
Match the reference face strictly: do not alter identity, facial structure, hairstyle or facial hair.
+ STYLE + NEGATIVE
```

### K1 — Borda (frame final do 01 / inicial do 02)

```
Same man, same wardrobe, same lighting as the previous image. Camera has orbited to his left
into a near-profile three-quarter view and moved closer; the frame is now tight on the side of
his head, temple filling the right half of the image, shoulder line at the bottom edge.
Match the reference face strictly; keep identical lighting direction and intensity.
+ STYLE + NEGATIVE
```

### K2 — Sinapse (frame final do 02 / inicial do 03)

```
Macro view inside an abstract dark neural structure: thin translucent filaments crossing a
black void, one single red #ff4d4f pulse traveling along one filament toward a synaptic
junction at the center of frame, the junction beginning to glow hot white.
Organic and restrained, not a medical illustration.
+ STYLE + NEGATIVE, and additionally: no blue neon, no glowing particle swarms,
no brain anatomy diagram, no floating dust.
```

### K3 — Materialização (frame final do 03 / inicial do 04)

```
Emerging from a hot white flash that resolves into the light of a computer display:
flat abstract interface geometry assembling itself in dark space, thin rectangles and
grid lines snapping into alignment, a single red #ff4d4f accent line among them.
Abstract shapes only.
+ STYLE + NEGATIVE, and additionally: no readable text, no code, no letterforms,
no icons, no cursor, no browser chrome.
```

> A negativa de texto/código é crítica: gerador escreve garrancho ilegível e destrói a percepção
> de qualidade.

### K4 — Entrega (frame final do 04 = **poster do site**)

```
Wide shot: the finished abstract interface running on a single dark screen at the right third
of the frame, seen slightly from the side, calm and static. The entire left third of the frame
is empty near-black negative space with nothing in it.
+ STYLE + NEGATIVE, and additionally: no readable text, no desk clutter, no keyboard,
no hands, no chair, no room furniture.
```

> O terço esquerdo vazio é onde entra a headline `QUEM DESENHA É QUEM CONSTRÓI.` — por isso é
> exigido no prompt, e não resolvido depois com blur.

---

## Segmentos de vídeo (Flow / Veo — image-to-video first+last frame)

Rodar **só depois** dos 5 stills aprovados. Cada segmento recebe o par de frames abaixo.

| Seg | First frame | Last frame | Duração | Prompt de movimento |
|---|---|---|---|---|
| S1 | K0 | K1 | ~2s | `slow continuous drone-like orbit from frontal to profile, subject stays perfectly still, no cuts, constant lighting` |
| S2 | K1 | K2 | ~2s | `continuous camera push through the temple into the neural structure, skin turning translucent then dissolving into filaments, single red pulse traveling to the synapse, ending in a white flash, no cuts` |
| S3 | K2 | K3 | ~1.5s | `emerging forward out of the white flash into screen light, interface geometry assembling, accelerating motion, no cuts` |
| S4 | K3 | K4 | ~1.5s | `slow camera pull back, motion decelerating to a complete stop on the final framing, no cuts` |

Em **todos**: acrescentar `continuous single shot, no cuts, no scene change, matching lighting and
color between first and last frame, no camera shake, no text overlay`.

> O Veo adora cortar sozinho e inserir um plano novo no meio. Se qualquer saída tiver corte, descartar
> — não tem conserto na pós para um scrub.

---

## Pós-produção

```bash
# 1. Concatenar os 4 segmentos (mesma resolução/fps)
ffmpeg -f concat -safe 0 -i lista.txt -c copy marca-master.mp4

# 2. Extrair ~120 frames a 1600x900
ffmpeg -i marca-master.mp4 -vf "fps=17,scale=1600:900" frames/marca-%03d.png

# 3. PNG -> AVIF + WebP em lote (sharp) e poster
#    poster = último frame (K4), AVIF+WebP
```

Registrar os tamanhos finais no `05-Dev-Log` para regeneração idêntica ([[Asset Sizing Standard]] passo 5).

## Checklist antes de gerar

- [ ] `card_profile.webp` anexado como referência de identidade em K0 e K1
- [ ] Bloco STYLE + NEGATIVE colado em todos os 5 prompts
- [ ] Máster 2048×1152, sem upscale
- [ ] 3–4 saídas por keyframe, melhor escolhida
- [ ] Continuidade conferida entre K1↔K2 e K3↔K4 antes de mandar pro Veo
- [ ] Nenhuma saída com texto legível, névoa ou moldura

## Referências

- [[00-DNA]] §2 (sem blur) e §4 (narrativa + sizing)
- [[Asset Sizing Standard]] — image-to-video, matriz de vídeo, ffmpeg
- [[Frontend Creative Protocol]] §6.1 — disciplina de prompt
- [[GPT-Image Prompt Galleries]] · [[Cinematic Sites Kit]] — base de estilo
