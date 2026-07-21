---
título: "Kickoff Output — DNA do Projeto BipDay"
versão: 1.1
status: "Ativo"
projeto: "BipDay"                 # nome definido 2026-07-17 (registro.br disponível)
nicho: "Produtividade"
tipo: "front+back"
origem: "[[00-Input]] (Project Kickoff Input Template v1.2, matriz canon linha 20)"
data: "2026-07-17"
tags:
  - kickoff-output
  - dna
  - bipday
---

# 🧬 00-DNA — BipDay

> **v1.1 (2026-07-17):** nome definido — **BipDay** (domínio disponível no registro.br; "bip" = o alerta de transição, coração do produto). Username/tenant do dev: **`jose`**. Pendências 1 e 2 resolvidas.

> **Kickoff Output** gerado a partir do [[00-Input]] conforme o contrato de resposta do [[Project Kickoff Input Template]] (5 partes). Fontes: respostas diretas do dev (2026-07-17), pesquisa de mercado da mesma data, extração real de CSS das refs (browser + CSS computado; cipher reaproveitado de [[Dev/2 - Projects/Automotive/Jaguar-FType-2024/00-DNA|Jaguar Parte 10]]).

---

## Parte 1 — DNA Consolidado

### Produto
- **O quê:** PWA de rotina e organização pessoal. Dor: esquecimento + má autogestão do tempo + baixa produtividade.
- **Público:** pessoas com TDAH / dificuldade de função executiva no Brasil (time blindness, paralisia de iniciar). Dev = usuário nº 1 (dogfooding antes de mercado).
- **Tese de diferenciação:** (1) função executiva bem feita em PT-BR; (2) anti-feature-bloat — poucas coisas muito bem feitas; (3) sem culpa (streak sem punição); (4) nativamente brasileiro (WhatsApp no roadmap).

### Recorte MVP (aprovado)
Compromissos fixos recorrentes (chips: todo dia / seg–dom / dia N do mês) + tarefas esporádicas · visão **dia** (default) + semana + mês-radar colapsado · **alertas de transição** + **timer visível** · **foguinho + streak sem punição** · captura por texto · Auth.js multi-user · mocks para WhatsApp/IA · UX ≤2 toques nas ações comuns.

**Fast-follow:** voz · quebra de tarefa com IA · review guiado · modo "só o próximo passo" · Google Calendar.
**Roadmap:** bot WhatsApp · IA que ajusta rotina real · body doubling · offline-first · **wrapper nativo via Capacitor** (iOS/Android, reusa o código web; escolhido 2026-07-17 sobre React Native/KMP — cobre a lacuna de push confiável no iOS junto com o WhatsApp).

### Arquitetura
- **Rotas:** `/` landing (SSG/SEO, grupo `(marketing)`) · `/app/[tenant]` app instalável (tenant = username, guard no middleware, grupo `(app)`) · PWA manifest `scope:/app`, `start_url:/app` → redirect por sessão.
- **Stack:** Next.js 16 standalone fullstack · TS strict · Tailwind 4 + shadcn/ui · Prisma + Postgres (free tier) · Auth.js v5 + Google · Zustand/Nuqs/RHF+Zod/Sonner/Lucide · Serwist + Web Push VAPID · GSAP + Lenis (Lenis só landing) · Vitest + Playwright · pnpm · Vercel free. Layered com bounded contexts em `src/lib/` (`routine/`, `tasks/`, `streaks/`, `notifications/`, `shared/`).
- **Dados (fundação):** User (`username` slug, `isPremium`, `timezone`) · Commitment (recorrência estilo RRULE) · Task · Completion (base do streak e da IA futura) · Streak derivado.

### Referências (o que cada uma doa)
| Ref | Doa |
|---|---|
| more-nutrition.webflow.io (**principal**) | Interface/mood do app: sage pastel, headings condensados, cards limpos, frescor |
| buckssauce.com | Calor: âmbar → foguinho; CTAs com hover swap; pills |
| cipherdigital.com | Engenharia de fluidez: Lenis, `clamp()`, spacing scale, page transitions, split de caracteres |
| Tiimo / Structured (complementares de UX) | Padrões anti-time-blindness e visão do dia mobile (estudo, não estética) |

---

## Parte 2 — Proto-Design System (extraído das refs, 2026-07-17)

> Ponto de partida da Fase 4 do [[Frontend Creative Protocol]] (→ `tailwind` tokens + `DESIGN.md` via `/impeccable init` no bootstrap). Não é a versão final.

### Proto-tokens de cor

| Token | Hex | Origem | Papel | WCAG |
|---|---|---|---|---|
| `surface` | `#E8EFE4` | more-nutrition (bg real) | Fundo base app + landing | — |
| `surface-alt` | `#B6CBA5` | more-nutrition (seção real) | Seções alternadas, destaques | — |
| `surface-card` | `#FFFFFF` | more-nutrition | Cards de conteúdo | — |
| `primary` | `#335C30` | more-nutrition (verde marca real) | Marca, CTAs, bloco "agora" | 8.8:1 sobre `surface` ✅ |
| `primary-soft` | `#90B96D` | more-nutrition | Progresso, ícones, estados secundários | decorativo |
| `accent-fire` | `#D97A1F` | buckssauce `#BE8D3F` avivado | **Foguinho/streak — única cor quente; só aparece como recompensa** | uso decorativo/badge, não texto pequeno |
| `ink` | `#1D211C` | derivado (quase-preto esverdeado) | Texto principal | ~13:1 sobre `surface` ✅ |
| `dark` | `#100B06` | buckssauce (bg real) | Dark mode futuro / seções dark da landing | — |

### Tipografia (100% Google Fonts — custo zero)
- **Display/headings:** Bricolage Grotesque w500–700 (substituta livre da Founders Grotesk Condensed, comercial) — tracking −2%, line-height 0.9–1.0.
- **Body/UI:** Inter Tight w400–500 (a mesma do buckssauce; excelente em tamanhos pequenos mobile).
- **Escala fluida `clamp()`** (padrão cipher): H1 `clamp(41px, calc(-5.7px + 5.83vw), 69px)`; demais níveis proporcionais; body 16px fixo.

### Formas, espaçamento e sombra
- Radius: `6px` inputs/cards · `10px` botões · **pill** para chips de recorrência ("todo dia", "seg", …) e badge do foguinho.
- Spacing scale (cipher): 8 / 16 / 24 / 32 / 48 / 72 / 96 / 128px.
- Sombras: nenhuma nos cards (padrão more-nutrition, flat) — profundidade por cor de superfície.

### Motion (a "fluidez" pedida pelo dev)
- **Landing:** Lenis `lerp 0.09` + easeOutCubic (config real do vault) integrado ao ScrollTrigger; SplitText no hero; pin+scrub no "como funciona"; CTAs com hover swap de texto (buckssauce); cortina de transição (cipher) *se* o peso permitir.
- **App:** scroll nativo (utilitário); transições curtas fade/slide entre visões dia/semana/mês; microinterações no check de conclusão (foguinho anima **só** ao completar — recompensa, nunca ruído).
- **Sempre:** `useGSAP`, `prefers-reduced-motion` → estático, zero animação antes do LCP.

---

## Parte 3 — Prompts de geração de assets

> Mídia do MVP é **mínima** — [[Asset Sizing Standard]] "compute before generate". **Higgsfield: opt-out proposto** (`midia: "nao"`) — os 2 assets necessários não exigem geração por IA paga. Mockups da landing = screenshots reais do app (Fase 6.0, ingestão própria); ícone = vetor.

| Slot | Tamanho (computado antes) | Como produzir |
|---|---|---|
| Ícone PWA / favicon | 512×512 master (alpha) → 192/180/32 | Vetor (SVG → PNG). Aguarda nome final. Prompt IA só se o dev quiser símbolo ilustrado — nesse caso via skills instaladas + [[GPT-Image Prompt Galleries]] |
| Mockups do app na landing (hero + como-funciona) | Frame de celular ~390×844 @2x → AVIF+WebP | Screenshots reais do app rodando (dogfooding) montados em device frame — zero geração |
| OG image da landing | 1200×630 | Composição com tokens + headline (Figma/código). AVIF não vale aqui: PNG/JPEG (compat OG) |

`[PENDENTE — prompts de IA só serão escritos se o dev optar por símbolo ilustrado no ícone; depende do nome]`

---

## Parte 4 — Direções e próximos passos (numerados)

1. ✅ Kickoff (linha 20) — `00-Input.md` + este `00-DNA.md`.
2. **`01-Escopo.md`** (linha 2, via [[Requirements & Scope Project Template]]) — User Stories + BDD do recorte MVP; frontmatter com stack/deps/`midia: "nao"`; regras free vs premium. **← PRÓXIMO PASSO (agente faz, dev aprova).**
3. `03-Planejamento.md` (linha 4) — EAP, decisão Layered registrada, cronograma das 3 specs SDD (fundação → app core → landing). Contrato (linha 3) = N/A.
4. `04-Tarefas.md` (linha 5) — backlog TDD granular. **Dev precisa ter definido o nome até aqui.**
5. Bootstrap (linhas 6–9, 17) — `setup.js`, `05-Dev-Log`, `06-Erros`, `INIT.md`, repo de código em `C:\Users\jose.ldsantos\Repos\rotina app` (fora do vault, R8), tooling (SpecKit, Impeccable + `/impeccable init` → `DESIGN.md` a partir da Parte 2, skills Next.js; Higgsfield pulado por opt-out).
6. Frontend Creative (linha 19) — Fase 4 consome os proto-tokens; `refs/` gitignored se precisar de CF detalhado.
7. Backend Onboarding (linha 22) — Tech Brief + `schema.prisma` (dados primeiro) + contrato de API.
8. Implementação SDD: 3 specs `/speckit.*`, TDD por tarefa → dogfooding ≥7 dias → Deploy (linha 21, Vercel).

**O dev precisa fazer:** (a) entregar o **nome** do produto; (b) definir seu **username/tenant**; (c) aprovar o `01-Escopo.md` quando eu gerar.

---

## Parte 5 — Lista de `[PENDENTE]`

| # | Item | Pergunta específica | Bloqueia |
|---|---|---|---|
| 1 | ~~Nome do produto~~ | **RESOLVIDO: BipDay** (registro.br disponível; sem colisão de categoria) | — |
| 2 | ~~Username/tenant~~ | **RESOLVIDO: `jose`** → `/app/jose` | — |
| 3 | ~~Ícone~~ | **RESOLVIDO: tipográfico com "bip" sonoro** (ondas/sinal), vetor puro, zero IA | — |
| 4 | Copy da landing | Headline/subhead finais — derivável de "BipDay" (escrever na spec da landing, Módulo 8) | Spec (c) da landing |

---

## Quality Gate (Kickoff Output)

- [x] Gerado conforme contrato de resposta do [[Project Kickoff Input Template]] (5 partes presentes)
- [x] Proto-tokens extraídos de cada ref acessível (CSS computado real: more-nutrition + buckssauce nesta sessão; cipher da extração Jaguar)
- [x] Paleta cruzada com preferência §2.2 (pastel ✅) e WCAG pré-checado (8.8:1 / ~13:1)
- [x] Prompts/assets computados ANTES de gerar ([[Asset Sizing Standard]]) — geração IA evitada no MVP (opt-out proposto)
- [x] `[PENDENTE]` onde falta fonte — nada inventado (R3)
