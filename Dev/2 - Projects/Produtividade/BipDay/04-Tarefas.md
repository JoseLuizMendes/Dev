---
template: "Tasks"
version: 1.0
status: "Aguardando revisão do dev"
tags:
  - tarefas
  - backlog
  - tdd
  - sdd
  - bipday
projeto: "BipDay"
cliente: "Interno (produto próprio)"
fonte: "[[01-Escopo]] + [[03-Planejamento]]"
data_criacao: "2026-07-17"
---

# 📋 04-Tarefas — BipDay

> Gerado a partir de [[03-Planejamento]] (matriz canon linha 5). Cada tarefa rastreia uma User Story do [[01-Escopo]].
> ⚠️ **TDD inegociável:** toda `impl` é precedida pela `[TEST]` correspondente. Épico 0 (bootstrap/infra) não tem BDD — são tarefas de setup.
> **Banco:** PostgreSQL **Neon** (free tier) · **Auth:** Auth.js v5 (NextAuth) — confirmados pelo dev 2026-07-17.

## Status enum
`pending` · `in_progress` (1 por vez) · `blocked` · `done` (testes verdes + BDD validado)

---

## Épico 0: Bootstrap (setup — sem BDD)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-0.1 | setup | `create-next-app` (TS, Tailwind, App Router, `src/`, pnpm) em `Repos/rotina app` | — | raiz do repo | app roda em `pnpm dev` | pending | Dev | 1 |
| T-0.2 | setup | `setup.js` (lê 01-Escopo) + `pnpm add` deps do escopo §5.2 | — | `setup.js`, `package.json` | deps instaladas, versões no 05-Dev-Log | pending | Dev | 1 |
| T-0.3 | setup | Tooling: SpecKit init · Impeccable + `/impeccable init`→`DESIGN.md` (proto-tokens 00-DNA) · skills Next.js · Higgsfield pulado (`midia:nao`) | — | `.specify/`, `DESIGN.md` | tooling instalado; `DESIGN.md` com paleta | pending | Dev | 1 |
| T-0.4 | setup | DX: Prettier(+tailwind) · Husky · lint-staged · EditorConfig · `strict:true` | — | `.prettierrc`, `.husky/`, `.editorconfig`, `tsconfig.json` | pre-commit formata/lint | pending | Dev | 1 |
| T-0.5 | setup | Inicializar `05-Dev-Log.md` + `06-Erros.md` + `INIT.md` + `CLAUDE.md` raiz (R8) | — | vault + raiz do repo | validator `--code-path` não acusa falta de CLAUDE.md | pending | Dev | 1 |
| T-0.6 | setup | Neon: criar projeto + `DATABASE_URL`/`DIRECT_URL` em `.env` (zod-validated) · `prisma init` · `@prisma/adapter-pg` | — | `.env`, `prisma/`, `src/lib/shared/env.ts` | `prisma db push` conecta no Neon | pending | Dev | 1 |

---

## Épico 1: Spec A — Fundação (dados + auth + tenant)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-1.0 | setup | `schema.prisma`: User(username, isPremium, timezone), Commitment, Task, Completion, PushSubscription + tabelas Auth.js **snake_case** (ERR-0004) — **dados primeiro** | US-1.x..6.x | `prisma/schema.prisma` | `prisma migrate dev` cria as tabelas | pending | Dev | 3 |
| T-1.1a | `[TEST]` | Teste: login Google cria sessão e redireciona | US-1.1 | `e2e/auth.spec.ts` | GIVEN visitante em `/entrar` WHEN autentica via Google THEN sessão criada e redirect para `/app/[username]` | pending | Dev | 1 |
| T-1.1b | impl | Auth.js v5 + Google + PrismaAdapter, `session.strategy='jwt'` (ERR-0003) | US-1.1 | `src/lib/auth/`, `src/app/api/auth/[...nextauth]/` | T-1.1a verde | pending | Dev | 3 |
| T-1.2a | `[TEST]` | Teste: escolha de username único | US-1.2 | `src/lib/auth/username.test.ts` | GIVEN primeiro login sem username WHEN escolho slug disponível THEN username salvo e URL ativa | pending | Dev | 1 |
| T-1.2b | impl | Onboarding de username (validação slug único) + seed do usuário `jose` | US-1.2 | `src/app/(app)/onboarding/`, `src/lib/auth/` | T-1.2a verde | pending | Dev | 2 |
| T-1.3a | `[TEST]` | Teste: guard de tenant bloqueia acesso cruzado | US-1.3 | `e2e/tenant-guard.spec.ts` | GIVEN usuário A logado WHEN acessa `/app/[username-de-B]` THEN redirect/403 | pending | Dev | 1 |
| T-1.3b | impl | `middleware.ts`: sessão válida + `tenant===session.username` | US-1.3 | `src/middleware.ts` | T-1.3a verde | pending | Dev | 2 |
| T-1.4a | `[TEST]` | Teste: visitante sem sessão é mandado ao login | US-1.4 | `e2e/tenant-guard.spec.ts` | GIVEN sem sessão WHEN acessa `/app` ou `/app/*` THEN redirect para `/entrar` | pending | Dev | 1 |
| T-1.4b | impl | Guard de não-autenticado no middleware + redirect `/app`→`/app/[username]` | US-1.4 | `src/middleware.ts`, `src/app/(app)/app/page.tsx` | T-1.4a verde | pending | Dev | 1 |
| T-1.5 | setup | Route groups `(marketing)` e `(app)/app/[tenant]/` + layouts/providers isolados | US-1.x | `src/app/(marketing)/`, `src/app/(app)/` | bundles separados; landing não carrega bundle do app | pending | Dev | 2 |

---

## Épico 2: Spec B — App core

### 2A. Compromissos recorrentes (`src/lib/routine/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.1a | `[TEST]` | Teste: expansão de RRULE por data (incl. DST/virada) | US-2.1 | `src/lib/routine/recurrence.test.ts` | dado um Commitment com rrule, expande nas datas corretas | pending | Dev | 2 |
| T-2.1b | impl | CRUD Commitment + `expandRecurrence(date)` com `rrule` + `date-fns-tz` | US-2.1 | `src/lib/routine/` | GIVEN formulário WHEN preencho título/categoria/início-fim/recorrência THEN compromisso aparece nos dias corretos | pending | Dev | 4 |
| T-2.1c | refactor | Extrair regras de recorrência puras (domain) do acesso Prisma (infra) | US-2.1 | `src/lib/routine/` | T-2.1a ainda verde | pending | Dev | 1 |
| T-2.2a | `[TEST]` | Teste: chips de recorrência → RRULE | US-2.2 | `src/lib/routine/rrule-builder.test.ts` | GIVEN criação WHEN toco chips "seg,qua,sex" THEN RRULE salva e visível como chips | pending | Dev | 1 |
| T-2.2b | impl | Builder chips (todo dia/dias-semana/dia-N) ↔ RRULE + UI dos chips (pill) | US-2.2 | `src/lib/routine/`, `src/components/routine/` | T-2.2a verde | pending | Dev | 3 |
| T-2.3a | `[TEST]` | Teste: editar/excluir compromisso em ≤2 toques | US-2.3 | `e2e/commitment-crud.spec.ts` | GIVEN compromisso na tela hoje WHEN toco→editar THEN form pré-preenchido; exclusão pede 1 confirmação | pending | Dev | 1 |
| T-2.3b | impl | Editar/excluir a partir da visão dia (Server Actions) | US-2.3 | `src/lib/routine/`, `src/components/routine/` | T-2.3a verde | pending | Dev | 2 |
| T-2.4a | `[TEST]` | Teste: pausar compromisso | US-2.4 | `src/lib/routine/pause.test.ts` | GIVEN compromisso ativo WHEN pauso THEN some das visões e do streak até reativar | pending | Dev | 1 |
| T-2.4b | impl | Campo `paused` + filtro nas visões e no streak | US-2.4 | `src/lib/routine/` | T-2.4a verde | pending | Dev | 1 |

### 2B. Tarefas esporádicas (`src/lib/tasks/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.5a | `[TEST]` | Teste: captura de tarefa em ≤2 toques | US-3.1 | `e2e/task-capture.spec.ts` | GIVEN tela hoje WHEN toco "+", digito título e confirmo THEN tarefa criada para hoje | pending | Dev | 1 |
| T-2.5b | impl | CRUD Task + captura rápida (botão + flutuante) | US-3.1 | `src/lib/tasks/`, `src/components/tasks/` | T-2.5a verde | pending | Dev | 2 |
| T-2.6a | `[TEST]` | Teste: prioridade e prazo ordenam a lista | US-3.2 | `src/lib/tasks/ordering.test.ts` | GIVEN criação/edição WHEN defino prioridade e hora THEN ordenação reflete prioridade e hora | pending | Dev | 1 |
| T-2.6b | impl | Prioridade + dueTime + ordenação | US-3.2 | `src/lib/tasks/` | T-2.6a verde | pending | Dev | 1 |
| T-2.7a | `[TEST]` | Teste: marcar feita conta pro dia | US-3.3 | `src/lib/tasks/complete.test.ts` | GIVEN tarefa pendente WHEN toco no círculo THEN status done + conta pro dia do streak | pending | Dev | 1 |
| T-2.7b | impl | Toggle done + registro Completion + microanimação do check | US-3.3 | `src/lib/tasks/`, `src/components/tasks/` | T-2.7a verde | pending | Dev | 2 |
| T-2.8a | `[TEST]` | Teste: rollover condicional ao prazo | US-3.4/3.5 | `src/lib/tasks/rollover.test.ts` | sem prazo (`isDeadline=false`) → rola p/ hoje; com prazo (`isDeadline=true`) → NÃO rola, fica vencida no dia; ambos tom neutro | pending | Dev | 1 |
| T-2.8b | impl | Rollover só de tarefa flexível; tarefa com prazo permanece vencida no dia (sem alarme) | US-3.4/3.5 | `src/lib/tasks/`, `src/components/tasks/` | T-2.8a verde | pending | Dev | 2 |

### 2C. Visões (`src/components/views/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.9a | `[TEST]` | Teste: visão dia com tudo em ordem + bloco atual | US-4.1/4.4 | `e2e/day-view.spec.ts` | GIVEN login WHEN abro `/app/jose` THEN visão dia com compromissos+tarefas, bloco atual destacado com countdown | pending | Dev | 2 |
| T-2.9b | impl | Visão dia (default) + card "agora" com countdown + barra progresso | US-4.1/4.4 | `src/app/(app)/app/[tenant]/page.tsx`, `src/components/views/day/` | T-2.9a verde | pending | Dev | 4 |
| T-2.10a | `[TEST]` | Teste: visão semana | US-4.2 | `e2e/week-view.spec.ts` | GIVEN visão dia WHEN troco para semana THEN 7 dias com itens, dia atual destacado | pending | Dev | 1 |
| T-2.10b | impl | Visão semana | US-4.2 | `src/components/views/week/` | T-2.10a verde | pending | Dev | 3 |
| T-2.11a | `[TEST]` | Teste: mês-radar sem lista | US-4.3 | `e2e/month-view.spec.ts` | GIVEN visão mês WHEN carrega THEN grid só com marcadores de recorrência, sem lista; toque no dia→visão dia | pending | Dev | 1 |
| T-2.11b | impl | Mês-radar colapsado (marcadores/pontinhos) | US-4.3 | `src/components/views/month/` | T-2.11a verde | pending | Dev | 2 |

### 2D. Streak & foguinho (`src/lib/streaks/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.12a | `[TEST]` | Teste: cálculo de streak (dias cheios, vazio neutro, falha não pune) | US-6.1/6.3/6.4 | `src/lib/streaks/streak.test.ts` | ganha dia ao completar; dia vazio preserva; falha não quebra com punição | pending | Dev | 2 |
| T-2.12b | impl | `computeStreak(completions)` (current/longest); dia vazio = neutro | US-6.1/6.4 | `src/lib/streaks/` | T-2.12a verde | pending | Dev | 2 |
| T-2.12c | refactor | Isolar regra de streak pura (domain) da leitura de Completion | US-6.x | `src/lib/streaks/` | T-2.12a ainda verde | pending | Dev | 1 |
| T-2.13a | `[TEST]` | Teste: foguinho anima ao fechar o dia | US-6.1 | `e2e/streak.spec.ts` | GIVEN todos os itens marcados WHEN último check THEN streak +1 e badge 🔥 anima uma vez | pending | Dev | 1 |
| T-2.13b | impl | Badge foguinho (`accent-fire`) + animação no fechamento (GSAP) | US-6.1/6.2 | `src/components/streaks/` | T-2.13a verde | pending | Dev | 2 |
| T-2.14a | `[TEST]` | Teste: mensagem acolhedora após falha | US-6.3 | `e2e/streak.spec.ts` | GIVEN dia sem completar WHEN abro no dia seguinte THEN mensagem neutra, zero vermelho, sem contador de "dias perdidos" | pending | Dev | 1 |
| T-2.14b | impl | Estado pós-falha sem punição (copy + ausência de alarme visual) | US-6.3 | `src/components/streaks/` | T-2.14a verde | pending | Dev | 1 |

### 2E. Alertas de transição & PWA (`src/lib/notifications/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.15a | `[TEST]` | Teste: agendamento do alerta de transição | US-5.1 | `src/lib/notifications/schedule.test.ts` | dado bloco 12:00 e lead 10min, alerta agendado p/ 11:50 com texto do próximo | pending | Dev | 2 |
| T-2.15b | impl | Agendador de alertas (antes + início) + Web Push VAPID + fallback in-app | US-5.1/5.2 | `src/lib/notifications/`, `src/app/api/push/` | T-2.15a verde; push chega com app fechado (Android), in-app aberto | pending | Dev | 5 |
| T-2.16a | `[TEST]` | Teste: antecedência configurável | US-5.3 | `src/lib/notifications/schedule.test.ts` | GIVEN edição WHEN escolho 5/10/15 min THEN alertas respeitam o valor | pending | Dev | 1 |
| T-2.16b | impl | Campo `alertLeadMinutes` por compromisso | US-5.3 | `src/lib/routine/`, `src/lib/notifications/` | T-2.16a verde | pending | Dev | 1 |
| T-2.17a | `[TEST]` | Teste: permissão pedida com contexto + fallback se negar | US-5.4 | `e2e/notifications.spec.ts` | GIVEN primeiro uso WHEN onboarding pede permissão THEN prompt precedido de explicação; fallback in-app se negar | pending | Dev | 1 |
| T-2.17b | impl | Fluxo de permissão explicado + gravação de PushSubscription | US-5.4 | `src/components/onboarding/`, `src/lib/notifications/` | T-2.17a verde | pending | Dev | 2 |
| T-2.18a | `[TEST]` | Teste: instalação PWA + scope | US-7.1/7.3 | `e2e/pwa.spec.ts` | GIVEN mobile em `/app/*` WHEN instalo THEN abre standalone em `/app`→`/app/jose`; landing fica no navegador | pending | Dev | 1 |
| T-2.18b | impl | Manifest (`scope:/app`, `start_url:/app`) + Serwist SW + cache shell | US-7.1/7.2/7.3 | `src/app/manifest.ts`, `src/sw.ts`, `next.config` | T-2.18a verde | pending | Dev | 3 |

### 2F. Mocks (WhatsApp & IA)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.19a | `[TEST]` | Teste: UI mock não faz chamada real | US-9.1/9.2 | `e2e/mocks.spec.ts` | GIVEN configurações/criação WHEN abro WhatsApp/IA THEN UI "em breve" com dados mockados, zero request | pending | Dev | 1 |
| T-2.19b | impl | Telas mock (WhatsApp reminders + IA quebra-tarefa) com badge "em breve" | US-9.1/9.2 | `src/components/mocks/` | T-2.19a verde | pending | Dev | 2 |

---

## Épico 3: Spec C — Landing (`/`)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-3.1a | `[TEST]` | Teste: hero comunica valor + CTA + LCP | US-8.1 | `e2e/landing.spec.ts` | GIVEN acesso a `/` WHEN hero renderiza THEN headline+CTA acima da dobra, LCP <2.5s | pending | Dev | 1 |
| T-3.1b | impl | Seções (hero→problema→pilares→como-funciona→diferença→preço→FAQ→CTA→footer) + copy PT-BR "BipDay" | US-8.1 | `src/app/(marketing)/page.tsx`, `src/components/marketing/` | T-3.1a verde | pending | Dev | 6 |
| T-3.2a | `[TEST]` | Teste: fluidez respeita reduced-motion | US-8.2 | `e2e/landing.spec.ts` | GIVEN scroll WHEN navego THEN Lenis+reveals; com `prefers-reduced-motion` tudo estático | pending | Dev | 1 |
| T-3.2b | impl | GSAP+Lenis: SplitText hero, reveals, pin+scrub, CTA hover swap | US-8.2 | `src/components/marketing/`, `src/lib/motion/` | T-3.2a verde | pending | Dev | 4 |
| T-3.3a | `[TEST]` | Teste: CTA leva ao cadastro | US-8.3 | `e2e/landing.spec.ts` | GIVEN qualquer seção WHEN toco CTA THEN `/criar-conta`→Google→onboarding→`/app/[username]` | pending | Dev | 1 |
| T-3.3b | impl | CTAs + fluxo de conversão + mockups reais (device frame, AVIF+WebP) | US-8.3 | `src/components/marketing/`, `public/` | T-3.3a verde | pending | Dev | 2 |
| T-3.4 | impl | SEO Fase 9 (metadata/OG/JSON-LD/sitemap/robots) + ícone tipográfico "bip" | US-8.4 | `src/app/(marketing)/`, `src/app/sitemap.ts`, `src/app/robots.ts` | crawler vê metadata/OG/JSON-LD; sitemap/robots ok | pending | Dev | 2 |

---

## Épico 4: QA & Go-Live

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-4.1 | test | Suíte E2E completa (todos os critérios BDD verdes, desktop+mobile) | todas | `e2e/` | 100% dos BDD passando | pending | Dev | 3 |
| T-4.2 | impl | Segurança Fase 10: headers CSP/HSTS/nosniff/Permissions-Policy · env+zod · rate limit nos handlers públicos | RNF §6.2 | `next.config`, `src/middleware.ts`, `src/lib/shared/env.ts` | headers presentes; `pnpm audit` sem high/critical | pending | Dev | 3 |
| T-4.3 | setup | Deploy Vercel + Neon prod (`@prisma/adapter-pg`, ERR-0005) + `migrate deploy` + smoke + Lighthouse | RNF §6.1 | Vercel, `.env` prod | app no ar; Lighthouse landing ≥90/95 | pending | Dev | 2 |
| T-4.4 | test | **Dogfooding ≥7 dias** — dev usa como usuário nº 1; fricções no 05-Dev-Log | KPI | — | 7 dias registrados → decisão go/no-go de mercado | pending | Dev | — |

---

## Quality Gate (antes de iniciar implementação)

- [x] Gerado a partir de [[Tasks Template]] como base (não do zero, não resumido)
- [x] Cada User Story do [[01-Escopo]] (US-1.1 … US-9.2) tem ≥1 tarefa correspondente
- [x] Toda tarefa `impl` é precedida por `[TEST]` (exceto Épico 0/infra sem BDD e T-3.4/T-4.2 cobertas por E2E do épico)
- [x] IDs sequenciais por épico
- [x] Critérios BDD copiados do [[01-Escopo]]
- [x] Arquivos afetados alinhados à estrutura Next.js Standalone de [[Preferencias Dev]]

## Regras de Execução
1. Uma tarefa `in_progress` por vez.
2. `done` só com testes verdes.
3. Erros → [[06-Erros]] + [[Immunological Error Memory]].
4. Decisões técnicas → [[05-Dev-Log]].

## Referências
- [[01-Escopo]] · [[03-Planejamento]] · [[00-DNA]] · [[05-Dev-Log]] · [[06-Erros]] · [[Preferencias Dev]] · [[Protocol-SpecKit]]
