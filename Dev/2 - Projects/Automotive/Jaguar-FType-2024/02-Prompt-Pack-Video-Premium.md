---
template: "Prompt Pack (derivado do 00-DNA — §3.8/3.9, versão premium anti-alucinação)"
version: 1.1
status: "Pronto para uso em qualquer gerador de vídeo (Veo / Sora / Kling / Runway / Hailuo) — P8 (preloader drift silhueta) adicionado em 2026-07-13"
tags:
  - midia
  - prompts
  - geracao
  - video
projeto: "Jaguar F-Type 2024"
data: "2026-07-12"
---

# 🎬 Prompt Pack Premium — Vídeos de detalhe "nível showroom"

> Pedido do dev (2026-07-12, refs Pinterest de brand films automotivos): prompts longos, amarrados e auto-contidos — para colar em **qualquer IA de vídeo** sem contexto prévio e sem espaço para alucinação. Créditos Higgsfield esgotados (saldo 1,18); geração será externa.
>
> **Blindagem usada em todos:** (1) um único take contínuo, zero cortes; (2) câmera travada declarada 2×; (3) identidade do carro fixada em bloco próprio; (4) timeline segundo a segundo; (5) bloco NEGATIVE explícito; (6) paleta canon (preto fosco / prata fria / âmbar #E8A33D).
>
> **Como usar:** duração 8s (ou 6s se o gerador limitar), 16:9, 1080p+ SEMPRE (720p reprova no gate). Se o gerador aceitar imagem inicial (image-to-video), anexar o frame 2K correspondente da Parte 7 do [[00-DNA]] — os prompts funcionam com ou sem. Campo de negative prompt separado: mover o bloco NEGATIVE pra lá.
>
> ⚠️ **Regra de áudio (aprendizado da rodada P1 v1, 2026-07-12):** em gerador com áudio nativo (Veo 3 etc.), TODO prompt deve levar o bloco `AUDIO — LOCKED: NO narrator, NO voiceover, NO speech, NO music. Only quiet ambient room tone; optionally a faint low engine idle.` + `narrator, voiceover, voice, speech, music, soundtrack` no NEGATIVE. Sem isso o gerador inventa narração. Decisão do dev: nenhuma voz em nenhum take; no máximo som do carro.

Os 7 prompts completos estão registrados na conversa da sessão 2026-07-12 e espelhados abaixo (fonte canônica).

---

## Estrutura padrão (todos os prompts)

```
[HEADLINE] — uma frase que define o take
SUBJECT — LOCKED IDENTITY: carro/elemento fixado
SET & LIGHTING — LOCKED: estúdio, luz, paleta
CAMERA — LOCKED: lente, ângulo, "does not move"
TIMELINE: beats com segundos
STYLE: referência de acabamento
STRICT RULES: regras de contenção
NEGATIVE (exclude completely): lista de exclusão
```

## Takes cobertos

| # | Take | Duração | Observação |
|---|---|---|---|
| P1 **v3** | Faróis — "O Despertar" | 8s | **Revisado 2× (feedback do dev 2026-07-12):** QUATRO faróis (dois por lado, correção do dev sobre a v2 que dizia "both"), acendendo juntos; câmera em orbit único (¾ esquerdo → frontal simétrico), carro parado; bloco `AUDIO — LOCKED` (sem narrador/voz/música — só room tone + idle fraco opcional) + negative anti-voz e guarda de contagem (`only two headlights, six or more`). v1 (macro 1 farol, câmera travada) descartada: gerador cortou pra 2s, mostrou 1 farol e inventou narração |
| P2 | Roda — "Torque parado" | 8s | 1/8 de volta, corpo parado |
| P3 | Volante — macro | 8s | âmbar acorda atrás do volante |
| P4 | Interior — "Cockpit acorda" | 8s | luz viaja pelo painel |
| P5 | Traseira — "Assinatura" | 8s | taillight + heat shimmer |
| P6 | Marca — emblema | 8s | ⚠️ risco de badge alucinado; fallback = jaguar animal (DNA 3.3/3.4) |
| P7 | Motor — "O Coração" | 8s | único take que PODE ter som (pendência #8) |
| P8 | Preloader — "A Curva" (drift silhueta noturna) | 8s → 3,7s na pós | **Único take com carro em movimento permitido** (R-M1, Parte 8 do [[00-DNA]]): corpo em silhueta na névoa, só os 4 faróis âmbar + spray + reflexos visíveis — a IA não alucina o que não aparece. Texto integral abaixo |

> Texto integral dos prompts P1–P7: ver mensagem da sessão (chat) de 2026-07-12 — mantidos em inglês, prontos para colar. Em caso de regeneração, copiar SEMPRE o prompt inteiro, nunca resumir (a blindagem está na redundância).

---

## P8 — Preloader "A Curva" (texto integral, 2026-07-13)

> Par de frames inicial/final para image-to-video: §3.1 v2 do [[00-DNA]] (`FType-Preloader-Noite-Frame-Inicial/Final`, 2048×1152). Pós: máster ≥1080p → trim/retime da janela do drift para **3,7s** (0–100 km/h real do R 75) → ~60 frames AVIF 960×540.

```text
Ultra-photorealistic luxury automotive brand film, night scene, the quality of an official Jaguar launch commercial. One single continuous shot, 8 seconds, 16:9, cinema-grade.

SUBJECT — LOCKED IDENTITY (do not alter at any point): a 2024 Jaguar F-Type coupe seen ONLY as a dark SILHOUETTE in night fog. Its body details are never visible — no badges, no grille detail, no readable surfaces. What IS visible: exactly FOUR amber LED headlights (two slim blades on EACH side of the front — four lights total: outer left, inner left, inner right, outer right), their warm amber glow (#E8A33D) blooming in the fog, water spray from the tires, and the car's mirror reflection on the wet asphalt. Exactly ONE car in the entire shot. The paint is satin matte black — in silhouette it reads as pure darkness.

SET & LIGHTING — LOCKED: a narrow two-lane mountain road curving through a dense rainforest at NIGHT. Thick low fog, black tree silhouettes, wet asphalt mirroring every light. NO streetlights, NO moon disc, NO neon, NO city glow — the car's four amber headlights are the ONLY light source in the scene, plus a faint cold ambient sheen on the fog.

CAMERA — LOCKED: single locked tripod position at ~50cm height on the inside of the corner exit, 32mm wide lens, night exposure. NO pan, NO zoom, NO dolly, NO shake, NO focus change, NO cuts — the camera NEVER moves; all motion in the scene comes from the car.

TIMELINE:
0.0–2.0s — near-black frame, drifting fog. FOUR amber points of light appear around the distant bend and grow brighter — the predator's eyes in the dark.
2.0–5.0s — the car crosses the corner in a controlled DRIFT, fully in silhouette: the rear slides out smoothly, fine water spray arcs off the rear tires, the four amber beams sweep across the fog like blades, the wet asphalt mirrors the moving amber glow. The body stays a shadow — only lights, spray and reflections are readable.
5.0–7.4s — the car straightens out of the drift and ACCELERATES straight at the camera, growing fast in the frame, headlight flare intensifying, fog parting around the nose.
7.4–8.0s — the car BLASTS past the camera on the right edge and fully exits the field of view. The frame ends on empty fog closing back, a fading amber light trail, and the wet asphalt returning to black.

AUDIO — LOCKED: NO narrator, NO voiceover, NO speech, NO dialogue, NO music, NO soundtrack. Only ambient night forest tone and, optionally, the natural sound of the engine and tires on wet asphalt. Nothing else.

STYLE: high-end automotive launch-film cinematography, true blacks, controlled amber highlights, subtle filmic grain, volumetric fog. Mood: the predator attacks — you feel it pass.

STRICT RULES: single continuous take, NO cuts, NO transitions; the camera never moves — only the car moves; the car remains a silhouette from first frame to last (body details never resolve, even when close to camera); the headlight count is always exactly FOUR (two per side) whenever the front is visible — never two, never six; the car exits the frame completely before the end; exactly one car in the entire shot.

NEGATIVE (exclude completely): narrator, voiceover, voice, speech, singing, music, soundtrack, people, visible driver, text, letters, numbers, subtitles, captions, watermarks, logos or badges, visible body details or paint surfaces, daylight, dawn, dusk sky, streetlights, neon, city lights, buildings, second car, smoke, fire, crash, spinning out of control, camera movement, camera shake, pans, zooms, cuts, only two headlights, six or more headlights, cartoon or CGI look, morphing shapes.
```

## Critérios de aceite (Asset Sizing)

- Máster ≥ 1080p, 16:9, sem watermark, sem trilha de áudio embutida (exceto P7 se decisão #8 = com som)
- Um take contínuo sem cortes; câmera parada do primeiro ao último frame (exceções declaradas: P1 = um único orbit; P8 = câmera parada mas carro em movimento — único take autorizado pela R-M1)
- Carro sempre: preto fosco acetinado, DRL âmbar, rodas gloss black — variou = rejeitar e regenerar
- Sem texto/legenda/logo inventado em frame nenhum (exceção: emblema autêntico no P6)
