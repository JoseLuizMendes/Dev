---
template: "Prompt Pack"
version: 3.0
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
low-key controlled lighting, matte dry surfaces, sharp focus across the entire frame,
deep depth of field, fine film grain, monochrome except a single red #ff4d4f accent.
NEGATIVE: no bloom, no glare, no light halo, no glowing aura, no volumetric light,
no lens diffusion, no blown-out white core, no wet glossy specular highlights,
no depth of field blur, no bokeh, no particles, no dust, no atmospheric haze, no fog,
no lens flare, no colored ambient wash on the background, no blue or teal tint,
no text, no letters, no logos, no watermark, no frame, no border, no vignette ring.
```

> ⚠️ As três negativas que destravaram a geração depois de três rodadas ruins: **`no bloom`**,
> **`no blown-out white core`**, **`no volumetric light`**. Sem elas o gerador enche o quadro de
> halo e de um sol branco no meio — a poluição que o [[00-DNA]] §2 proíbe.

---

## Keyframes — estado atual

| Keyframe | Papel | Estado |
|---|---|---|
| **K0** Origem | Frame inicial do plano 01 | ✅ **Foto real do dev** (P&B estúdio, 3/4 sentado, crop ombros-pra-cima). Não gerar. |
| **K1** Borda | Frame final do 01 / inicial do 02 | ✅ **Foto real do dev** (P&B estúdio, perfil). Não gerar. |
| **K2** Sinapse | Pulso chegando na junção | ✅ **Aprovado** na v3 — prompt abaixo, registrado para regeneração idêntica. |
| **K3** Desmanche | Filamentos se rompendo em pontos | ⬜ A gerar **editando o K2**. |
| **K4** Constelação | Malha de pontos assentada = **poster do site** | ⬜ A gerar **editando o K3**. |

> ⛔ **Clarão branco descartado** (revisão 2 de 2026-09-14). O antigo K3 "materialização" e o K4
> "monitor/produto" também. Ver [[00-DNA]] §4.2.

> As duas fotos são da mesma sessão (mesmo suéter preto, mesmo fundo, mesma direção de luz), o que
> dá continuidade ao orbit sem corte. Gate pendente: validar resolução ≥1080p ([[Asset Sizing Standard]]).

### K2 — Sinapse (APROVADO, v3)

```
Macro photograph of a single neuron structure against a pure black background:
thin translucent grey-white filaments radiating from one central junction slightly right of
center, calm and sparse. One single filament carries a red #ff4d4f pulse traveling toward
the junction. The junction is lit from within, small and contained.
LIGHT: low-key, controlled, technical. The only bright areas are the pulse and the junction.
Everything else falls into black.
+ STYLE + NEGATIVE
```

**O que falhou antes (não repetir):** v1 pedia "organic, cinematic" sem negativas anti-bloom → render
3D de banco de imagem com halo e lavagem vermelha no fundo. v2 trocou o neurônio por "linhas
gráficas abstratas" → saiu ruído sem leitura. **Assunto concreto + negativas anti-bloom** é a fórmula.

### K3 — Desmanche (a gerar por **edição do K2**)

```
Edit this image. Keep the exact same composition, same camera angle, same lighting,
same position of every filament. The filaments are now thinning and beginning to break
apart into small discrete points along their length, still clearly following the same paths.
The central junction stays lit exactly as it is, small and contained. One point on the
same filament as before remains red #ff4d4f.
Do not add anything. Do not change the background: pure black #0b0c0f, even, no wash.
+ NEGATIVE
```

### K4 — Constelação (a gerar por **edição do K3**)

```
Edit this image. Same camera angle, same framing. The filaments are gone: only the points
remain, holding the same constellation shape the filaments described, evenly spaced and
calm. Points are small, hard-edged and dim. One single point is red #ff4d4f. Everything
else falls into pure black #0b0c0f.
+ NEGATIVE, and additionally: no connecting lines, no glowing web, no star field, no nebula.
```

> **Nunca do zero.** K3 parte do K2 aprovado, K4 parte do K3. Foi a geração text-to-image que falhou
> três vezes; a edição preserva estrutura, luz e enquadramento — que é o que torna o morph
> imperceptível.
>
> **Sem rótulo, número ou texto** em nenhum ponto da constelação. O significado ("cada ponto é um
> projeto") vive na copy da seção, não dentro da imagem.

## Segmentos de vídeo (Flow / Veo — image-to-video first+last frame)

Quatro segmentos, ~7s no total.

| Seg | First frame | Last frame | Duração | Prompt de movimento |
|---|---|---|---|---|
| S1 | K0 (foto 3/4) | K1 (foto perfil) | ~2s | `slow continuous drone-like orbit from three-quarter view to profile, subject stays perfectly still, no cuts, constant lighting` |
| S2 | K1 (foto perfil) | K2 (sinapse) | ~2s | `continuous camera push through the temple into the neural structure, skin turning translucent then dissolving into filaments, single red pulse traveling to the junction, ending in a white flash, no cuts` |
| S3 | K2 (sinapse) | K3 (desmanche) | ~1,5s | `the filaments gradually thin and break apart into small points along the same paths, camera keeps drifting slowly, no cuts` |
| S4 | K3 (desmanche) | K4 (constelação) | ~1,5s | `the remaining points settle into a stable constellation, motion decelerating to a complete stop, no cuts` |

Em **todos**: acrescentar `gradual continuous transformation, continuous single shot, no cut,
no flash, no dissolve to white, no scene change, constant camera speed, matching lighting and
color between first and last frame, no camera shake, no text overlay`.

> **`no flash` é obrigatório agora.** O clarão foi descartado: as transições têm de ser
> imperceptíveis e intrínsecas ao material. Saída com flash ou corte = descartar, não remendar.

> O Veo adora cortar sozinho e inserir um plano novo no meio. Se qualquer saída tiver corte, descartar
> — não tem conserto na pós para um scrub.

---

## Pós-produção

```bash
# 1. Concatenar os 4 segmentos (mesma resolução/fps)
ffmpeg -f concat -safe 0 -i lista.txt -c copy marca-master.mp4   # 4 segmentos

# 2. Extrair ~120 frames a 1600x900
ffmpeg -i marca-master.mp4 -vf "fps=17,scale=1600:900" frames/marca-%03d.png

# 3. PNG -> AVIF + WebP em lote (sharp) e poster
#    poster = último frame (K4), AVIF+WebP
```

Registrar os tamanhos finais no `05-Dev-Log` para regeneração idêntica ([[Asset Sizing Standard]] passo 5).

## Checklist antes de gerar

- [ ] Fotos do dev (K0/K1) validadas no gate de resolução ≥1080p
- [ ] K3 gerado a partir do K2 e K4 a partir do K3 (edição, nunca do zero)
- [ ] Nenhuma saída de vídeo com flash, corte ou mudança de cena
- [ ] Máster 2048×1152, sem upscale
- [ ] 3–4 saídas de cada edição, melhor escolhida
- [ ] Continuidade conferida entre K1↔K2, K2↔K3 e K3↔K4 antes de mandar pro Veo
- [ ] Nenhuma saída com bloom, núcleo branco estourado, texto legível, névoa ou moldura

## Referências

- [[00-DNA]] §2 (sem blur) e §4 (narrativa + sizing)
- [[Asset Sizing Standard]] — image-to-video, matriz de vídeo, ffmpeg
- [[Frontend Creative Protocol]] §6.1 — disciplina de prompt
- [[GPT-Image Prompt Galleries]] · [[Cinematic Sites Kit]] — base de estilo
