---
template: "Project DNA"
version: 1.0
status: "Ativo"
tags:
  - dna
  - design-system
  - frontend
  - portfolio
  - mendeshift
  - cinematografico
projeto: "MendeShift"
tipo: "Portfólio Pessoal / Estúdio"
data_criacao: 2026-09-14
---

# MendeShift — DNA Visual

> DNA criado retroativamente (o projeto é pré-canon, ver [[01-Escopo]]) na reabertura do front para
> refazer a **Seção 07 — A Marca**. Fonte da verdade da direção visual do site a partir de 2026-09-14.

---

## 1. Direção

**Cinematográfica dark / near-black** — direção válida do [[Frontend Creative Protocol]] §Fase 4, ao
lado do pastel default. MendeShift **não** usa pastel. Base de prompts e efeitos:
[[Cinematic Sites Kit]], com a exclusão da §2 abaixo.

| Token | Valor | Papel |
|---|---|---|
| `--background` | `#0b0c0f` | Near-black. Fundo único do site e **fundo casado de toda mídia gerada**. |
| `--accent` | `#ff4d4f` | Acento único. Rim light de toda mídia. Nunca usar um segundo acento. |
| Display | Bebas Neue | Headlines. |
| Texto / mono | IBM Plex Sans / IBM Plex Mono | Corpo, eyebrows, labels. |

---

## 2. ⛔ Glassmorphism e blur — REMOVIDOS do DNA (decisão 2026-09-14)

O [[Cinematic Sites Kit]] lista `glassmorphism` no "DNA cinematográfico". **Para o MendeShift isso está
revogado.** Decisão do dev: *"tem que ser algo rico, minimalista, sem muita poluição visual e blurs na
tela que poluem a visão e a imagem/vídeo."*

**Regra inegociável:**

- ❌ `backdrop-blur` / `backdrop-filter` em qualquer superfície do site.
- ❌ `filter: blur()` decorativo, cards de vidro, camadas semitransparentes empilhadas sobre mídia.
- ❌ Véu/gradiente sobre foto ou vídeo só para "dar legibilidade ao texto".

**Substituição canônica — contraste por densidade, não por blur:**

1. A mídia já nasce escura nas bordas (near-black casado com `--background` declarado no prompt de geração).
2. O texto ocupa **espaço negativo** do próprio enquadramento — o frame é gerado com a área vazia
   reservada (ver [[02-Prompt-Pack-Secao-Marca]]).
3. Se ainda faltar separação: **um** gradiente linear opaco, nunca blur.

> Blur é muleta de quem colocou texto sobre imagem clara. No MendeShift a imagem é escura por projeto.

**Dívida de código aberta** (aplicar quando a Seção 07 for implementada):
`src/_components/profile-card.tsx` (2 ocorrências), `side-nav.tsx`, `mobile-nav.tsx`,
`language-toggle.tsx` — todos com `backdrop-blur-sm` sobre conteúdo. Substituir por fundo sólido
`bg-background`.

---

## 3. Refs ativas (subconjunto do [[Frontend Creative Protocol]] §Fase 1.3)

Filtradas pelo brief "rico + minimalista + sem poluição + sem blur". Só estas valem para o MendeShift:

| # na Fase 1.3 | Ref | O que se extrai |
|---|---|---|
| 17 | Shopify Winter '26 | Ref-mãe: cena scrubada no scroll, fundo quase preto, tipografia grande, zero card, zero blur. |
| 12 | Terminal Industries | Contenção industrial: espaço negativo, mono pequeno, um acento só. Modelo do bloco de links. |
| 3 | Species in Pieces | Princípio da transformação contínua — uma coisa virando outra sem corte. |
| 5 | NextSense | Tema neuro sem cair em stock de neurônio azul brilhante. |
| 22 | Marie Guillaume | Retrato + tipografia sem moldura e sem sujeira sobre a foto. |
| 15 | Trionn | Ritmo de scroll e timing de reveal. |

**Fora do MendeShift** (são a poluição que o brief rejeita): Lando Norris (1) — é justamente a direção
abandonada; Igloo Inc (2) — WebGL denso demais; More Nutrition (8), Bucks Sauce (6), Nymphai (7) —
direção CPG colorida, outro nicho.

---

## 4. Seção 07 — A Marca (redesenho)

**Estado anterior (revogado):** moldura vermelha estilo Lando Norris + retrato recortado + card com
`backdrop-blur`.

**Estado novo — três elementos na tela, nada mais:**

1. **Vídeo scrubado no scroll** (frames pré-renderizados + GSAP ScrollTrigger — o caminho recomendado
   pelo [[Frontend Creative Protocol]] §6.1 "3D sem WebGL"), fundo casado `#0b0c0f`, sem máscara e sem
   gradiente por cima.
2. **A frase** em display grande, ancorada no espaço negativo do frame final.
3. **Links** (Páginas / Seguir) em mono pequeno, coluna à direita, sem borda e sem pill.

**Narrativa (7s / ~120 frames) — "Da sinapse à constelação"** *(revisão 2 de 2026-09-14: o final
mudou de "produto na tela" para transformação da própria rede; **clarão proibido** — ver §4.2)*:

| Trecho | O que acontece | Origem do asset |
|---|---|---|
| **A** Origem | Dev em 3/4, orbit lento até o perfil. | **Fotos reais do dev** (P&B estúdio) |
| **B** Entrada | A câmera continua entrando; a pele perde opacidade gradualmente e os filamentos aparecem por baixo. Não existe ponto de virada. | morph K1→K2 |
| **C** Pulso | O pulso vermelho percorre o filamento até a junção, que ganha brilho **contido**. | K2 — **aprovado** |
| **D** Desmanche | Os filamentos se afinam e se rompem em pontos, seguindo os mesmos caminhos. | K3 — editar a partir do K2 |
| **E** Constelação | Os pontos assentam numa malha estável. Um único ponto segue vermelho. Quadro para. | K4 — editar a partir do K3 |

**Regra de transição — INEGOCIÁVEL:** nenhum corte, **nenhum clarão**, nenhum dissolve para branco.
Toda passagem é **transformação do mesmo material** em estados diferentes. É o princípio do
Species in Pieces (ref #3 do mapa). Saída de gerador com flash ou corte é descartada: sem o clarão
não existe remendo na pós para um scrub.

**Leitura:** rosto → pensamento → ideia → rede de trabalho. Cada ponto da constelação lê como um
projeto, mas **sem rótulo, número ou texto dentro da imagem** — o significado fica na copy da seção.

**Regra de cor:** sequência monocromática; `#ff4d4f` só no pulso e no ponto final.

**Sizing (calculado conforme [[Asset Sizing Standard]] — compute before generate):**

| Item | Valor | Justificativa |
|---|---|---|
| Slot | Showcase / foco, 16:9 | É o momento principal da seção, não um inline decorativo. |
| Largura de exibição (lg) | ~1152 px (container) | Container do site. |
| DPR aplicado | **1.4×** | Regra "1.5× aceitável para heros/decorativos grandes" — 2× num scrub de 120 frames estoura o budget. |
| Frames de entrega | **1600×900 AVIF** (+ WebP fallback), ~120 frames | ~25–35 KB/frame → **3–4 MB** total, dentro do budget de showcase (≤15 MB). |
| Máster de geração (stills) | **2048×1152** | ≥ alvo, sem upscale. |
| Máster de vídeo | ≥1080p (Veo/Flow) | Gate do Asset Sizing; abaixo disso é rejeitado. |
| Fallback | `poster` = frame final, AVIF/WebP | `prefers-reduced-motion` e mobile (<768px) recebem só o poster; sem scrub. |

### 4.1 Revisão de 2026-09-14 — o que sobrou de geração

Três rodadas de geração falharam nos keyframes **abstratos** (K2 v1 "neurônio 3D de banco de imagem",
K2 v2 "linhas gráficas", K3 "geometria de interface"). Diagnóstico: prompt abstrato sem assunto
concreto = o gerador preenche o vazio com bloom, núcleo branco estourado e sci-fi genérico. O que
destravou o K2 foram as negativas **`no bloom`**, **`no blown-out white core`** e
**`no volumetric light`** — agora obrigatórias em toda geração deste projeto.

Decisões:

1. **K0 e K1 não são mais gerados** — o dev já tem duas fotos de estúdio P&B próprias (3/4 sentado e
   perfil), mesmo figurino e mesma luz, que servem como frame inicial e final do plano 01. Asset real
   vence asset gerado. *Pendência: arquivos originais para validar resolução (gate ≥1080p).*
2. **K2 aprovado** na terceira versão (neurônio contido, fundo preto limpo, pulso vermelho único).
3. **K3 CORTADO.** O clarão do K2 já esconde a transição; um plano intermediário de "interface se
   montando" só adiciona ponto de falha. Vai do clarão direto para a entrega.
4. **K4 "monitor/produto" DESCARTADO** — ver §4.2.

### 4.2 Revisão 2 de 2026-09-14 — o final abandonou "mostrar o produto"

Tentativas de fechar a sequência com o produto na tela falharam em sequência: monitor gerado (datado,
interface falsa, "não transmite autoridade nem a minha entrega"), e depois setup fotografado +
captura real do projeto do casamento composta na tela — abandonado pelo dev antes da produção.

**Direção final escolhida (conceito "a rede vira constelação"):** o desfecho é a própria estrutura
neural se transformando — filamentos se rompem em pontos que assentam numa constelação. Vantagens:
deriva do K2 já aprovado (continuidade garantida), não exige cenário, hardware, captura de projeto
nem composição, e o morph é intrínseco ao material.

**Descartado junto:** o clarão branco. Ele existia para esconder emendas; o dev exige transições
imperceptíveis, então toda passagem passa a ser morph do mesmo material.

**K3 e K4 são gerados por EDIÇÃO do K2** (image-edit, não text-to-image): foi a geração do zero que
falhou três vezes.

**Keyframes (3 stills → 3 segmentos image-to-video):** ver [[02-Prompt-Pack-Secao-Marca]].
Regra do Asset Sizing: cada segmento tem **frame inicial + frame final** no mesmo ratio/estilo/seed —
aqui o frame final de um segmento **é** o inicial do seguinte, o que garante continuidade sem corte.

**Sem bleed extra:** o vídeo preenche o slot 16:9 exato e não sofre pan/Ken Burns no CSS — a regra de
bleed de 10–15% não se aplica.

---

## 5. Quality Gate desta seção

- [ ] Zero `backdrop-blur` no componente novo (§2)
- [ ] Frames gerados no máster 2048×1152, entregues 1600×900 AVIF+WebP, sem upscale
- [ ] Negativas anti-bloom (`no bloom`, `no blown-out white core`, `no volumetric light`) em todo prompt
- [ ] Fotos do dev validadas no gate de resolução (≥1080p) antes de entrarem no pipeline
- [ ] Poster estático servido em `prefers-reduced-motion` e em <768px
- [ ] Máximo de 3 elementos visuais na seção (§4)
- [ ] Prompts obedecendo §6.1 (lista fechada, negativas explícitas, um eixo por rodada, 3–4 saídas)
- [ ] Tamanhos registrados no `05-Dev-Log` para regeneração idêntica

---

## Referências

- [[Frontend Creative Protocol]] — §Fase 1.3 (refs), §Fase 4 (paleta), §6.1 (geração e scrub sem WebGL)
- [[Asset Sizing Standard]] — sizing, image-to-video, matriz de vídeo, ffmpeg
- [[Cinematic Sites Kit]] — banco de prompts (⚠️ glassmorphism revogado aqui, §2)
- [[02-Prompt-Pack-Secao-Marca]] — prompts de geração desta seção
- [[01-Escopo]] — escopo original do projeto (pré-canon)
