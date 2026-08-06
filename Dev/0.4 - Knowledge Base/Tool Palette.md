---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Curadoria do dev (posts/iscas) + verificação via GitHub API e web em 2026-08-05"
data_incorporacao: 2026-08-05
tags:
  - knowledge-base
  - ferramentas
  - alternativas
  - referencias
  - midia
  - design
  - claude-code
ler_quando: "Ao escolher ferramenta para um projeto — referência visual, recurso de design, geração de mídia, skill/repo do Claude Code ou infra open-source. Catálogo vivo: consultar por categoria e priorizar as ⭐ favoritas."
---

# Tool Palette — Ferramentas & Alternativas

> **Catálogo vivo de ferramentas do dev.** A escolha depende do projeto (porte, tipo, orçamento) — este doc reúne as opções por categoria pra decidir na hora. Não substitui o canon: referências visuais entram pelo fluxo do [[Frontend Creative Protocol]] §Fase 1; geração de mídia obedece a Fase 6.1 + [[Asset Sizing Standard]]; skills/repos instalados na máquina vivem em [[Agent Tooling & Plugins]].

## Legenda e sistema de estrelas ⭐

- **⭐ = favorita do dev.** Marcada quando o dev confirma, no uso real, que a ferramenta é **versátil, rende bem em vários projetos e ele tem bom desempenho com ela**. Favorita = **primeira escolha** da categoria (prioridade sobre as demais).
- Coluna `⭐` vazia = ainda não testada/consagrada. O dev avisa quais promover; elas ganham ⭐ e sobem pro topo da categoria.
- `Grátis?` — ✅ grátis · 🆓 free tier/créditos · 💲 paga · 🔓 open-source self-host.
- Stars de repo e descrições são ponto-no-tempo (**verificado 2026-08-05**); revalidar quando algo falhar.

### ★ Favoritas do dev (preencher com o uso)

_Nenhuma consagrada ainda. Conforme você usar e me disser as que mais rendem, eu movo pra cá e marco ⭐ na tabela da categoria._

---

## 1. Referências visuais & inspiração

Complementam/substituem as fontes canônicas da Fase 1.2 ([[Frontend Creative Protocol]]: Awwwards, Dribbble, Pinterest, Squarespace, v0). O dev usa Pinterest, mas gosta de ter alternativas quando não acha uma boa referência.

| Ferramenta | ⭐ | Pra que serve | Grátis? |
|---|---|---|---|
| **Muzli** (muz.li) | | Feed/extensão de inspiração de design agregado (dribbble, behance, tendências) — descoberta rápida | 🆓 |
| **Abduzeedo** (abduzeedo.com) | | Blog de inspiração de design/branding, "design awards", direção de arte | ✅ |
| **Visuelle** (visuelle.co.uk) | | Feed diário de design gráfico/branding/identidade visual | ✅ |
| **KREA** (krea.ai) | | Também serve de exploração visual: geração real-time enquanto desenha (ver §4) | 🆓 |
| **Framer Community** (framer.com/community) | | Templates, componentes e plugins de **inspiração** — presos à plataforma Framer (não é código React direto; usar como referência, não como fonte de código) | 🆓 |

## 2. Busca de imagens / bancos (achar, não gerar)

Quando você precisa do **asset certo que já existe** em vez de gerar. Alimenta a ingestão da Fase 6.0.

| Ferramenta | ⭐ | Pra que serve | Grátis? |
|---|---|---|---|
| **STILLS** (stills.com) | | Busca de imagens por **linguagem natural** ("descreve o que quer") — acha foto certa rápido | 🆓 |
| **Every Pixel** (everypixel.com) | | Buscador de banco de imagens com IA agregando **50+ fontes** (grátis+pagas), reverse search, "aesthetic test", API | 🆓 |

## 3. Recursos de design (cor, ícone, pattern)

Utilidades pontuais de produção. Todas grátis, sem login pesado.

| Ferramenta | ⭐ | Pra que serve | Grátis? |
|---|---|---|---|
| **Coolors** (coolors.co) | | Gerador rápido de paleta de cores, explora e exporta (casa com o default pastel da Fase 4) | ✅ |
| **SVGRepo** (svgrepo.com) | | 500k+ ícones/vetores SVG grátis pra qualquer projeto | ✅ |
| **Happy Hues** (happyhues.co) | | Paletas mostradas **em contexto de UI real** (vê a cor aplicada, não só o hex) | ✅ |
| **Pattern Monster** (pattern.monster) | | Gerador de **pattern SVG** repetível (backgrounds) | ✅ |

## 4. Geração de mídia (imagem · vídeo · voz · avatar)

> ⚠️ Toda geração passa pela **Fase 6.1** do [[Frontend Creative Protocol]] + [[Asset Sizing Standard]] (tamanho ANTES de gerar) + prompts das [[GPT-Image Prompt Galleries]]. Estas são as **fontes**; a disciplina é canon. Situação atual: **Google Pro** (créditos altos em AI Studio/Gemini/Labs/Flow) → crédito **não** é o gargalo; a **prioridade é a disciplina de prompt** (Fase 6.1) — anti-alucinação/desvirtuação.

| Tipo | Ferramenta | ⭐ | Nota | Grátis? |
|---|---|---|---|---|
| Imagem | **Google AI Studio — Nano Banana 2** (Gemini 3.1 Flash Image) | | Texto legível na arte, troca de fundo, consistência em lote. Opção canon da Fase 6.1 (Google Pro = créditos altos) — ver [[ref-nano-banana-2]] | 🆓/Pro |
| Imagem (estilo do dev) | **goaxis.app** (Human Academy) | | IA de imagem que **casa com o gosto do dev** — forte candidata a ⭐. Specs a confirmar (dashboard com login) | 🆓/💲 |
| Imagem | **KREA** (krea.ai) | | Geração real-time + **upscaler/enhance até 22K**, in/outpaint, style transfer | 🆓 |
| Imagem (busca vs geração) | Recraft / Leonardo / Ideogram | | Já listadas na Fase 6.1 como alternativas grátis | 🆓 |
| Imagem (local, ilimitado) | **Fooocus** | | SDXL simplificado local (ver §6) | 🔓 |
| Vídeo | **Google Flow** (labs.google/flow) | | Ferramenta de "filmmaking" do Google (motor Veo) — cenas por prompt | 🆓 |
| Vídeo | **ArtFlow** (artflow.ai) | | Avatares/personagens + Story/Video Studio; free tier ~100 créditos/mês | 🆓 |
| Vídeo | Kling / Hailuo / Luma | | Já na Fase 6.1 | 🆓 |
| Voz (clonagem/TTS) | **FishAudio** (fish.audio) | | Clonagem de voz / TTS — alternativa grátis ao ElevenLabs | 🆓 |
| Avatar falante | **HeyGen** (heygen.com) | | Vídeo com avatar/porta-voz de IA — alternativa ao Synthesia | 🆓 |
| Brainstorm | **Gemini** | | Alternativa grátis pra ideação (o dev já usa Claude como principal) | 🆓 |
| — (pago, quando houver orçamento) | Higgsfield · GPT Image · ElevenLabs · Synthesia | | Pagas equivalentes; Higgsfield é o padrão de bootstrap com opt-out — [[Higgsfield Skills Reference]] | 💲 |

**Trade-off honesto:** vários "grátis" têm limite de crédito/tier cortado ou geram marca d'água; ferramentas "unrestricted/no content filters" (ex.: repo Open-Generative-AI, §5) são **desaconselhadas em trabalho de cliente**. Para hero de alto valor, GSAP/Three.js bem feito muitas vezes vale mais que vídeo gerado (Fase 6.1).

## 5. Skills & repos do Claude Code

> Instalar skill/plugin só entra em vigor na **próxima sessão**. Instalados na máquina + caveats: [[Agent Tooling & Plugins]] (inclui os 9 repos já avaliados: Strix, no-ai-slop, book-to-skill, OmniRoute…). Verificados via GitHub API 2026-08-05.

| Repo | ⭐ | Pra que serve | Fit / nota |
|---|---|---|---|
| **anthropics/skills** | | Skills oficiais Anthropic (frontend-design, pptx, xlsx, skill-creator) | ~166k⭐ — **começar por aqui**; `frontend-design` casa com o anti-AI-slop do vault |
| **coreyhaines31/marketingskills** | | CRO, copywriting, SEO, analytics, growth | ~43k⭐ — autor reputado (Corey Haines); útil p/ Publicações e landing |
| **blader/humanizer** | | Remove cara de IA da copy | ~34k⭐ — ⚠️ **redundante com `no-ai-slop`** (Agent Tooling); escolher **um** |
| **AgriciDaniel/claude-seo** | | 25 sub-skills + 18 sub-agents de SEO técnico/GEO/AEO/schema | ~13k⭐ — reforça a Fase 9 (SEO) do Protocol |
| **remotion-dev/skills** | | Claude gera **vídeo por código** (Remotion/React) | ~4k⭐ — oficial Remotion; alternativa "por código" à geração de vídeo da §4 |
| **lingzhi227/agent-research-skills** | | Deep research / revisão de literatura com fontes citadas | ~0,3k⭐ — pequeno, último push fev/2026; avaliar antes |
| **hyperfx-ai/marketing-skills** | | Camada de anúncios pagos / tráfego | ~68⭐ — **muito pequeno/novo**; preferir coreyhaines31 |

## 6. Infra & utilitários open-source (self-host / CLI)

Ferramentas 🔓 conhecidas e amplas — rodam local/servidor, substituem SaaS pago. (Bem estabelecidas; não revalidei stars uma a uma.)

| Ferramenta | ⭐ | Pra que serve |
|---|---|---|
| **yt-dlp** | | CLI de download/processamento de vídeo/mídia |
| **OpenAI Whisper** | | Transcrição/reconhecimento de voz (STT) |
| **Fooocus** | | Geração de imagem local simplificada (SDXL) |
| **Stirling PDF** | | Suíte de manipulação de PDF em container |
| **Crawl4AI** | | Web crawler otimizado pra extrair conteúdo pra LLM |
| **Maxun** | | Extração/automação web no-code |
| **Browser Use** | | Automação de navegador por agentes de IA |
| **Langflow** | | Interface visual pra montar RAG/agentes |
| **Open WebUI** | | UI pra LLMs locais/remotos |
| **OpenHands** | | Agente autônomo de desenvolvimento de código |
| **Penpot** | | Design/prototipagem UI open-source (alt. Figma) |
| **Plausible** | | Analytics web privado, sem cookie (alt. GA) |
| **Coolify** | | Deploy/hospedagem self-host (alt. Heroku/Vercel) — cruza com [[Deploy Protocol]] (VPS Hostinger) |

## 7. UI, componentes & animação (bibliotecas de código)

Libs que entram **no código** (Next/React + Tailwind). ⚠️ **Regra herdada das `refs/`:** componente de terceiro é **material de estudo/base** — adaptar aos tokens do `tailwind.config.ts` (hex hardcoded proibido, [[Preferencias Dev]] §Tailwind) e revalidar **acessibilidade/WCAG**; nunca colar cru. Verificado 2026-08-06.

| Ferramenta | ⭐ | Pra que serve | Nota |
|---|---|---|---|
| **GSAP** (gsap.com/docs) | | Animação profissional (Tween/Timeline/ScrollTrigger) — **canon "sempre"** ([[Preferencias Dev]] §GSAP+Lenis, Fase 8) | ✅ **100% grátis desde abr/2025** (Webflow), incl. TODOS os plugins (SplitText, MorphSVG, DrawSVG, ScrollSmoother, Inertia) |
| **Anime.js** (animejs.com) | | Engine de animação leve (v4, ~24KB, modular): SVG morph/draw, motion path, scroll, stagger, timeline, draggable | 🔓 MIT. **Aprovado na stack** (2026-08-06) como alternativa leve; GSAP+Lenis primários — [[Preferencias Dev#Anime.js]] |
| **React Bits** (reactbits.dev) | | Componentes React **animados** (text effects, backgrounds, interativos) em CSS+Tailwind, com o código visível | 🆓 Licença **MIT + Commons Clause** (usar em cliente OK; não revender a lib). Tem versão Pro paga |
| **Uiverse** (uiverse.io) | | ~5.800+ elementos de UI open-source (botões, cards, loaders, toggles) em CSS/Tailwind, export React/Figma | ✅ Grátis pessoal+comercial. Qualidade varia (comunidade) — adaptar tokens + checar a11y |
| **img2threejs** (github.com/img2threejs) | | Reconstrói o objeto de uma imagem-ref como **Three.js procedural em código** (TS), diffável e animation-ready | 🔓 Apache 2.0, ~10k⭐. Casa com Fase 8 (Three.js "quando couber") — gera 3D como código, não mesh binário |

> **Decisão de stack (2026-08-06):** Anime.js **aprovado** como alternativa leve ao GSAP para casos simples/pontuais. **GSAP+Lenis seguem primários/canon** (scroll complexo, timelines). Regra completa: [[Preferencias Dev#Anime.js]].

## Como manter

- Nova ferramenta entra na categoria certa com `⭐` vazia + "pra que serve" + "grátis?" honesto.
- Quando o dev consagrar uma no uso: marcar **⭐** e mover pro topo da categoria + registrar na lista "★ Favoritas do dev".
- Repos: revalidar link/stars via GitHub API quando for instalar; caveats de instalação em [[Agent Tooling & Plugins]].
- Cruza com: [[Frontend Creative Protocol]] (Fase 1 refs, Fase 6 mídia, Fase 9 SEO), [[Asset Sizing Standard]], [[ref-ai-tool-repos-2026]] (memória), [[ref-nano-banana-2]].
