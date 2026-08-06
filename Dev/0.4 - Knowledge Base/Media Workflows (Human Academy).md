---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Deck '5 Workflows Human' — @human___academy (Figma, material do dev), destilado 2026-08-06"
data_incorporacao: 2026-08-06
tags:
  - knowledge-base
  - midia
  - workflows
  - nano-banana
  - prompts
  - character-sheet
ler_quando: "Gerar mídia com pipeline multi-ferramenta — personagem animado, chroma key, character sheet, texto em arte, upscale. Complementa a Fase 6 do Frontend Creative Protocol."
---

# Media Workflows — Human Academy (5 workflows)

> 5 workflows práticos de criação com IA usando **Midjourney + Nano Banana + Kling/Seedance**, com prompts prontos. Fonte: deck `5 Worflows Human` (@human___academy).

> ⚠️ **Encaixe no canon:** toda geração passa pela **Fase 6.1** do [[Frontend Creative Protocol]] + [[Asset Sizing Standard]] (tamanho ANTES) + [[GPT-Image Prompt Galleries]]. **Nano Banana** aqui = o modelo grátis/barato que já é canon ([[ref-nano-banana-2]] / [[Tool Palette]] §4). **Midjourney é pago** — na situação "sem orçamento", substituir a geração base por alternativa grátis (Nano Banana 2, KREA, Google AI Studio). Kling tem free tier.

---

## 1. Personagem de Animação (4 passos)
Ideia → personagem animado. **Ferramentas:** Midjourney → Nano Banana → Kling/Seedance.
1. **Base** — gerar o personagem no Midjourney (modelo NJII-7) — prompt de estilo indie/2D detalhado.
2. **Retexturização** — refinar texturas/detalhes no Nano Banana (prompt de "premium cinematic 3D" abaixo).
3. **Upscale** — aumentar resolução no Nano Banana (prompt 8K abaixo).
4. **Animação** — dar vida no Kling ou Seedance.

## 2. Chroma Key (3 passos)
Substituir fundo verde com IA.
1. **Novo fundo** — trocar o verde no **primeiro frame** do vídeo com Nano Banana.
2. **Regeneração** — combinar vídeo original + primeiro frame editado no Kling.
3. **Edição final** — juntar os dois vídeos num software de edição.

## 3. Character Sheet (2 passos)
Folha de referência (turnaround) do personagem.
1. **Upload + prompt** — subir várias fotos de referência no Nano Banana com o prompt de model sheet (abaixo).
2. **Pronto** — character sheet pronto pra produção (identidade consistente entre painéis).

## 4. Design no Nano Banana — texto em arte (2 passos)
Arte com texto integrado.
1. **Input** — subir imagem de referência + a frase desejada (prompt de pôster tipográfico abaixo).
2. **Pronto** — arte finalizada com o texto aplicado. *(Nano Banana 2 escreve texto legível na arte — ver [[ref-nano-banana-2]].)*

## 5. Upscale (2 passos)
Aumentar qualidade de qualquer imagem.
1. **Input** — imagem + prompt descritivo de 8K no Nano Banana.
2. **Pronto** — upscale. *(No vault, enhance/upscale local grátis = **Upscayl** — Fase 6.2; usar este quando quiser via Nano Banana.)*

---

## Prompts reutilizáveis (o ouro do deck)

**Retexturização cinematográfica (Nano Banana):**
> [Visual Style] Premium cinematic 3D rendering. Balance between cartoon shapes and advanced photorealistic texturing. [Character and Action] Consistent character performing: [AÇÃO/POSE]. [Cinematography] Award-winning photography direction. Rule of thirds/golden ratio. Fast cine lens (f/1.8), accentuated bokeh, optical chromatic aberration. [Lighting] Realistic atmospheric dawn light, short lighting (angle of the shadow) for volume/drama. [Micro-Details] Skin porosity, micro-imperfections, worn fabrics, metallic corrosion, realistic glints.

**Upscale 8K (Nano Banana, PT-BR):**
> Recriação em 8K de ultra-alta resolução da imagem de referência. Manter estritamente composição, cenário, ação e identidade visual originais, sem alterar pose ou fundo. Foco total em texturas para fotorrealismo extremo: pele em nível macro (poros, imperfeições), trama de tecido e desgaste realistas, materiais tangíveis. Iluminação documental, short lighting (ângulo da sombra) para drama/volume. Estética de lente f/1.8: profundidade de campo rasa (bokeh) e aberração cromática nas bordas.

**Character sheet / turnaround (Nano Banana):**
> Create a professional character reference sheet based strictly on the uploaded reference image. Clean neutral plain background, technical model turnaround, matching the exact visual style (realism, rendering, texture, color). Two horizontal rows — TOP: four full-body views side-by-side (front, left profile, right profile, back); BOTTOM: three close-up portraits (front, left profile, right profile). Perfect identity consistency across panels, relaxed A-pose, consistent scale/alignment, accurate anatomy, clear silhouette, even spacing, uniform framing, consistent head height and facial scale. Consistent lighting across all panels. Crisp, print-ready.

**Pôster tipográfico com texto integrado (Nano Banana):**
> Editorial typographic poster. The exact word "[PALAVRA]" in massive ultra-bold condensed sans-serif capitals filling the frame; letters are cut-out masks revealing a photo of the subject behind them (photo visible ONLY through the letter shapes, natural colors). Background solid dark charcoal OR clean off-white — whichever gives strongest contrast. Studio lighting, cinematic editorial. Small "2026" top-left, tiny logo top-right, elegant tagline bottom-center. Matte, high-def. Typography reads exactly and only: [PALAVRA]. Do not add other words.

## Referências
- [[Frontend Creative Protocol]] §Fase 6 (pipeline de mídia) — onde estes workflows se encaixam
- [[ref-nano-banana-2]] — o modelo central destes workflows (grátis/barato; texto na arte; lote)
- [[Asset Sizing Standard]] + [[GPT-Image Prompt Galleries]] — tamanho antes + prompts curados
- [[Cinematic Sites Kit]] — prompts de imagem cinematográfica; [[Tool Palette]] §4 (gerar mídia grátis)
