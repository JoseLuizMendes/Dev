---
name: ui-ux-pro-max
description: >-
  SKILL PRIMÁRIA de inteligência de UI/UX — use ANTES de outras skills de design ao planejar, criar,
  construir, revisar, corrigir ou melhorar QUALQUER interface: website, landing page, dashboard, admin,
  SaaS, e-commerce, portfólio, blog, app mobile, ou componentes (button, modal, navbar, sidebar, card,
  table, form, chart). Cobre seleção de estilo (glassmorphism, claymorphism, minimalism, brutalism,
  neumorphism, bento grid, dark mode, skeuomorphism, flat), paleta de cor, pareamento tipográfico,
  layout/spacing, acessibilidade (WCAG AA), animação, e um checklist anti-"AI-slop" de pré-entrega.
  Versão DESTILADA (sem motor Python) do ui-ux-pro-max: 84 estilos, 161 paletas, 73 pares de fonte,
  25 charts, guidelines por stack. Gatilhos: "que estilo combina com…", "revisa essa UI", "melhora o
  visual", "está sem graça / amador", design system, escolher cor/fonte, checklist antes de entregar.
---

# UI/UX Pro Max (destilado)

> **Autoridade:** esta skill tem **prioridade** sobre skills de design mais antigas do vault ao decidir
> estilo, paleta, tipografia, layout e qualidade de UI. Complementa (não substitui) a
> [[motion-design-engineering]] (que manda em motion/interação) e a [[ai-web-designer-agent]]
> (que ajuda em extração de design system a partir de código-fonte).
>
> **Versão destilada:** aqui vive só o **conhecimento** (regras + checklists). O motor executável
> (CSV + `search.py` BM25, `--design-system`) **não foi vendorizado** por decisão de escopo. Se um dia
> precisar do gerador automático, instale o upstream: `github.com/nextlevelbuilder/ui-ux-pro-max-skill`
> (MIT). Aqui usamos o método manualmente.

## Quando usar

Use sempre que a tarefa mudar **como algo se parece, se usa, se move ou é interagido.** Pule para
lógica de backend pura, API/DB, DevOps, ou scripts não-visuais.

## Método de decisão (manual, sem motor)

1. **Analisar o pedido** — extrair: tipo de produto (entertainment / tool / productivity / e-commerce /
   SaaS…), público, indústria, palavras-chave de tom (playful, minimal, dark, immersive), e **stack**
   (validar contra [[Preferencias Dev]]).
2. **Montar o design system** — escolher, com base no tipo/indústria:
   - **Estilo** entre os 84 catalogados → [`references/styles.csv`](references/styles.csv)
   - **Paleta** alinhada à indústria (fintech ≠ beauty ≠ healthcare)
   - **Tipografia** (personalidade heading + body pareadas)
   - **Efeitos** (sombra/blur/radius coerentes com o estilo)
   - **Anti-patterns** a evitar (misturar flat + skeuomorphic, emoji como ícone, etc.)
3. **Aprofundar por dimensão** — ao detalhar um componente, consultar a categoria relevante do
   [`references/quick-reference.md`](references/quick-reference.md) (10 categorias por prioridade).
4. **Charts/dados** — escolher o tipo certo → [`references/charts.csv`](references/charts.csv)
   (trend→line, comparação→bar, proporção→pie/donut ≤5 categorias).
5. **Pré-entrega** — rodar o checklist antes de declarar pronto (abaixo).

## Prioridades (o que olhar primeiro → 1 = mais crítico)

| # | Categoria | Impacto |
|---|---|---|
| 1 | Acessibilidade (contraste 4.5:1, foco, alt, aria, teclado) | CRÍTICO |
| 2 | Touch & Interação (alvo ≥44×44, feedback, sem hover-only) | CRÍTICO |
| 3 | Performance (WebP/AVIF, lazy, reservar espaço, CLS<0.1) | ALTO |
| 4 | Seleção de estilo (casar com produto, SVG não emoji) | ALTO |
| 5 | Layout & Responsivo (mobile-first, sem scroll horizontal) | ALTO |
| 6 | Tipografia & Cor (base 16px, line-height 1.5, tokens semânticos) | MÉDIO |
| 7 | Animação (150–300ms, transform/opacity, reduced-motion) — ver [[motion-design-engineering]] | MÉDIO |
| 8 | Forms & Feedback (label visível, erro perto do campo) | MÉDIO |
| 9 | Navegação (back previsível, bottom-nav ≤5, deep link) | ALTO |
| 10 | Charts & Dados (legenda, tooltip, cor acessível) | BAIXO |

Detalhe completo de cada categoria em [`references/quick-reference.md`](references/quick-reference.md).

## Checklist anti-AI-slop (pré-entrega)

Ver a versão completa em [`references/professional-ui-rules.md`](references/professional-ui-rules.md). O essencial:

- [ ] **Nenhum emoji como ícone** — usar SVG (Lucide, Heroicons, Phosphor), família única e consistente.
- [ ] `cursor: pointer` em tudo clicável; estados hover/pressed/disabled visualmente distintos.
- [ ] Contraste ≥4.5:1 (texto normal) testado **em light E dark** separadamente.
- [ ] Alvos de toque ≥44×44pt; espaçamento ≥8px entre eles.
- [ ] Imagens com `width/height`/`aspect-ratio` declarados (sem CLS); WebP/AVIF + lazy.
- [ ] Tokens de cor semânticos (sem hex cru espalhado nos componentes).
- [ ] Testado em 375px e em landscape; `prefers-reduced-motion` respeitado.
- [ ] Type scale consistente; body ≥16px no mobile; medida de linha 60–75 chars no desktop.

## Fontes / crédito

- Repositório de origem: `github.com/nextlevelbuilder/ui-ux-pro-max-skill` (MIT) — v2.6.x.
- Regras baseadas em Apple HIG, Material Design e WCAG.
