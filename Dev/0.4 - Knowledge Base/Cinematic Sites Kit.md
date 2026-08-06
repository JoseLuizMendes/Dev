---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Kit Sites Cinematográficos com IA (PT-BR) — material do dev (Notion, 30 pág), destilado 2026-08-06"
data_incorporacao: 2026-08-06
tags:
  - knowledge-base
  - prompts
  - cinematografico
  - geracao-de-site
  - copy
  - midia
ler_quando: "Quando a direção do projeto for cinematográfica (dark/premium/Awwwards) — pra montar prompts de scaffold de site, prompts de imagem de hero, ou copy. Banco de 85+ prompts + a fórmula de 6 blocos pra criar os seus."
---

# Cinematic Sites Kit

> Banco de **85+ prompts prontos** (site · imagem · copy) + a **fórmula de 6 blocos** pra montar os seus, todos com o mesmo **DNA cinematográfico**. Fonte completa (banco inteiro): PDF `Kit Sites Cinematográficos com IA` (Downloads do dev).

> ⚠️ **Adaptações ao canon do vault (obrigatórias ao usar os prompts de site):**
> - Onde o prompt diz **"Framer Motion"**, **troque por GSAP + Lenis** ([[Preferencias Dev]] §GSAP+Lenis é canon "sempre"). Framer Motion não é a stack do dev.
> - Direção **cinematográfica (dark/near-black)** é uma direção válida ao lado do **pastel** default ([[Frontend Creative Protocol]] §Fase 4) — escolher por projeto, não misturar.
> - Prompt de **imagem** passa por [[Asset Sizing Standard]] (tamanho ANTES) + [[GPT-Image Prompt Galleries]]; gerar via ferramentas grátis do [[Tool Palette]] §4 (Nano Banana 2 / KREA). Peça "swappable placeholder assets" nos prompts de site.
> - Vale o Quality Gate normal: `prefers-reduced-motion`, responsivo, semântico, tokens (nunca hex cru — ver [[Design System Blueprint]]).

---

## DNA cinematográfico (escolha 3–5 e injete no bloco de Estilo)
`dark / near-black (#0a0a0b)` · `luz dramática (key light, rim light, spotlight)` · `profundidade + parallax` · `serif gigante (clamp 56–120px)` · `film grain` · `edge vignette` · `glassmorphism` · `staggered fade-in` · `gradient mesh sutil` · `nível Awwwards "Site of the Day"`.

## A fórmula de SITE — 6 blocos (nesta ordem)

| # | Bloco | Responde | Exemplo |
|---|---|---|---|
| 1 | **O quê** | que peça é? | "hero de SaaS", "seção de preço" |
| 2 | **Estrutura** | o que tem e onde | "título serif à esquerda, card de vidro à direita" |
| 3 | **Estilo/DNA** | a cara cinematográfica | "near-black, luz dramática, film grain, serif gigante" |
| 4 | **Movimento** | como anima | "fade-in escalonado, parallax no scroll" |
| 5 | **Stack** | com o quê | **Next.js + Tailwind + GSAP + Lenis** (adaptado do canon) |
| 6 | **Constraints** | regras finais | "reduced-motion, responsivo, semântico, swappable assets" |

**Como usar:** cola o prompt na ferramenta (v0 · Lovable · Bolt · Cursor · Claude Code · Base44) → gera 3–4 e escolhe o melhor → troca a paleta pra casar com a marca → refina. Nas ferramentas de código a stack já vai no prompt.

## Prompts de SITE — 8 categorias (banco no PDF fonte)
SaaS/Produto · Portfolio/Marca Pessoal · Lançamento/Drop · Agência/Estúdio · E-commerce/Loja · App/Mobile Showcase · Evento/Conferência · Luxo/Fashion/Joalheria. Cada uma tem 5 variações (hero + landing completa + variações temáticas).

**Efeitos-assinatura recorrentes** (o que dá "cara de estúdio top"): magnetic button · kinetic type reagindo ao cursor · sticky-scroll (título fixo + imagens rolando) · scroll-pinned com troca de tela · hover-preview seguindo o cursor · duotone→cor no hover · light sweep (varredura de luz) · bento grid · marquee · glint reativo no metal (luxo).

*Starter (hero SaaS, já adaptado ao stack):*
> Cinematic dark-mode SaaS hero, full viewport, near-black (#0a0a0b) with a slow-drifting gradient mesh behind everything. Oversized serif display headline (clamp 56–120px, tight leading) left, thin sans subheadline, single glowing CTA. Right: glassmorphic floating product card with soft inner glow + scroll parallax. Fine film grain, edge vignette, staggered fade-in on load. Fonts: Inter + Instrument Serif. **GSAP + Lenis** for entrance + parallax. `prefers-reduced-motion` fallback, responsive, semantic, swappable placeholder assets. Awwwards Site of the Day.

## Prompts de IMAGEM — 6 categorias
Fundos de hero (gradient mesh, névoa volumétrica, seda, cosmos, líquido escuro) · Produto em cena (palco escuro, respingo congelado, macro, lifestyle) · Abstrato/3D (vidro c/ chromatic dispersion, cromo, partículas, topográfico) · Texturas/overlays (film grain, light leak, bokeh, mármore) · Humano/editorial (retrato Rembrandt, silhueta, mãos, multidão) · Ambiente (blue hour, interior arquitetônico, rua noturna teal&orange).
> Padrão MJ/Flux: `--ar 16:9`/`21:9` (hero) ou `4:5` (card) + `--style raw`. **Cruza com [[GPT-Image Prompt Galleries]]** — usar as galerias curadas como base e este banco como reforço cinematográfico. Overlays (grain/light-leak) entram via CSS `mix-blend-mode: overlay/screen` com opacidade baixa (~8%).

## Prompts de COPY + fórmula
Headlines (resultado / provocativa-com-tensão / categoria-nova) · Subtítulos (explica em 1 linha / com prova-número) · CTAs (ação+benefício, 1ª pessoa, evitar "Enviar/Saiba mais") · Corpo (features→benefício, "como funciona" em 3 passos, sobre/história, prova social) · Preço/FAQ/fechamento · Extras (urgência honesta, meta title/description SEO, e-mail de boas-vindas).
**Regra de ouro:** fale do **resultado do cliente**, não da feature. Sempre PT-BR, peça 5–10 opções, sem clichê ("revolucione").

**Checklist de copy antes de publicar:** headline fala de resultado? · dá pra entender o que é em 5s? · todo botão diz ação+benefício? · tem prova (número/depoimento/garantia)? · FAQ quebra objeção? · leu em voz alta?

## Referências
- [[Frontend Creative Protocol]] §Fase 1 (refs) e §Fase 6 (mídia) — direção cinematográfica entra aqui
- [[Design System Blueprint]] — tokenizar a direção escolhida (paleta pequena, 1 acento)
- [[GPT-Image Prompt Galleries]] + [[Asset Sizing Standard]] — geração de imagem (tamanho antes)
- [[Tool Palette]] §4 (gerar mídia grátis) e §7 (GSAP/Lenis/Anime.js)
- [[Preferencias Dev]] §GSAP+Lenis — substituir "Framer Motion" dos prompts
