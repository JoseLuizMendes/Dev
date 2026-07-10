---
name: motion-design-engineering
description: >-
  SKILL PRIMÁRIA de motion + design engineering — use ANTES de qualquer outra skill de design
  quando o trabalho envolver animação, transição, easing, spring, gesto (drag/swipe/sheet), feedback
  de interação, polish de UI, materiais translúcidos/profundidade, tipografia (optical sizing, tracking,
  leading) ou "fazer a interface sentir certa". Também para REVISAR código de animação/motion contra
  um bar de craft alto, e para NOMEAR um efeito de motion ("como se chama quando..."). Fonte: filosofia
  de design engineering do Emil Kowalski (animations.dev) + talks de design da Apple (Designing Fluid
  Interfaces). Gatilhos: animação, transição, easing, cubic-bezier, spring, framer motion / motion,
  keyframes, @starting-style, hover, drawer, toast, popover, tooltip, modal, micro-interação, gesto,
  swipe, drag, momentum, rubber-band, prefers-reduced-motion, backdrop-filter, glassmorphism, "está
  travado/sluggish", "parece amador", review de animação.
---

# Motion & Design Engineering

> **Autoridade:** esta skill tem **prioridade** sobre skills de design mais antigas do vault
> (ex.: [[ai-web-designer-agent]]). Quando houver divergência sobre motion, easing, timing, springs,
> gestos ou polish de interação, **vence esta skill.** A [[ai-web-designer-agent]] continua válida e
> complementar para design system / tokens / refactor estrutural de layout.

Conhecimento destilado de **Emil Kowalski** (design engineering, `animations.dev`) e das **talks de
design da Apple** (sobretudo *Designing Fluid Interfaces*, WWDC 2018), traduzido para a plataforma web
(CSS, Pointer Events, `requestAnimationFrame`, Motion/Framer Motion).

A linha-mestra: **uma interface parece viva quando o movimento parte do valor atual na tela, herda a
velocidade do usuário, projeta momentum pra frente e pode ser agarrado e revertido a qualquer instante.**

## Como usar (roteamento)

Carregue **o menor slice útil** — não leia todas as referências por padrão.

| Situação | Abra |
|---|---|
| Construir/decidir uma animação ou micro-interação | [`references/design-engineering.md`](references/design-engineering.md) |
| Precisar de um valor exato (curva, duração, spring, gesto) | [`references/animation-standards.md`](references/animation-standards.md) |
| **Revisar** código de motion contra o bar de craft | [`references/review-animations.md`](references/review-animations.md) |
| Nomear um efeito ("como se chama quando…") | [`references/animation-vocabulary.md`](references/animation-vocabulary.md) |
| UI estilo Apple: gesto, spring, sheet, translucidez, tipografia | [`references/apple-design.md`](references/apple-design.md) |

## Os não-negociáveis (resumo — detalhe nas referências)

1. **Movimento justificado.** Toda animação responde "por que isso anima?" (consistência espacial,
   estado, feedback, explicação, evitar mudança abrupta). "Fica legal" em elemento visto o tempo todo = cortar.
2. **Frequência manda.** Ação por teclado / 100+×dia → **sem animação**. Ocasional → padrão. Raro → pode encantar.
3. **Easing responsivo.** Entrar/sair usa `ease-out` ou curva custom forte. **`ease-in` em UI é bloqueio.**
   Curvas nativas são fracas — use `cubic-bezier(0.23, 1, 0.32, 1)` e afins.
4. **Sub-300ms.** Animação de UI fica abaixo de 300ms salvo justificativa.
5. **Origem e física.** Popover/dropdown/tooltip escalam a partir do gatilho (`transform-origin`), não do centro
   (modais são exceção — ficam centrados). **Nunca anime de `scale(0)`** → comece em `scale(0.95)` + opacity.
6. **Interruptibilidade.** Motion rápido/gestual (toast, toggle, drag) precisa ser interrompível —
   transitions CSS ou springs que re-miram do valor atual, não keyframes que reiniciam do zero.
7. **Só GPU.** Anime apenas `transform` e `opacity`. `width/height/margin/padding/top/left` = achado de performance.
8. **Acessibilidade.** Honrar `prefers-reduced-motion` (mais suave, não zero). Hover atrás de
   `@media (hover: hover) and (pointer: fine)`.
9. **Timing assimétrico.** Ação deliberada anima devagar; resposta do sistema é instantânea.
10. **Coesão.** Motion combina com a personalidade do componente e do produto. Na dúvida, o movimento mais forte é deletar.

## Fontes / crédito

- Emil Kowalski — *Design Engineering* & *Animations on the Web* — https://animations.dev
- Apple — *Designing Fluid Interfaces* (WWDC 2018), *The Details of UI Typography* (WWDC 2020),
  *Principles of Great Design*.
- Repositório de origem: `github.com/emilkowalski/skills` (MIT).

> Ferramentas de motion aprovadas no vault: ver [[Preferencias Dev]] (GSAP + Lenis, Motion/Framer Motion).
