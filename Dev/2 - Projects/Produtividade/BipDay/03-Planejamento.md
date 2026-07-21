---
template: "Planning"
version: 1.1
status: "Aguardando aprovação do dev"
tags:
  - planejamento
  - sdd
  - tdd
  - spec-driven
  - bipday
cliente: "Interno (produto próprio)"
projeto: "BipDay"
nicho: "Produtividade"
classificacao: "Full-stack do Zero"
data_inicio: "2026-07-17"
data_entrega: "Incremental — sem prazo rígido (produto pessoal); marcos por Épico"
---

# 📐 Plano de Execução Técnico: BipDay

> **Fonte:** gerado a partir do [[01-Escopo]] (aprovado 2026-07-17). Nenhum código antes da aprovação deste plano. Contrato (linha 3) = N/A (produto próprio). Memória imunológica ([[4 - Error's Memory/INDEX]]) consultada — ver §5.

---

## 1. Resumo Executivo

- **Objetivo:** PWA de rotina (BipDay) que combate esquecimento e time blindness via alertas de transição + timer visível + streak sem punição, para o dev (validação) e o público TDAH-BR.
- **Resultado esperado:** app instalável em `/app/jose` usado ≥7 dias consecutivos + landing em `/` que converte.
- **Prazo total:** incremental, sem data rígida (produto próprio). Marcos por Épico em §3.
- **KPIs de sucesso:** LCP <2.5s | FID <100ms | CLS <0.1 | WCAG 2.1 AA | Lighthouse landing ≥90/95 | retenção pessoal ≥7 dias.

---

## Decisão de Arquitetura (registrada — Filosofia de Construção §3)

**Layered (não Hexagonal)** no MVP. Avaliação dos 6 sinais:

| Sinal | Leitura no BipDay | Aponta p/ |
|---|---|---|
| Domínio | Moderado (recorrência + streak têm regra, resto é CRUD) | Empate |
| Canais de I/O | Único (HTTP/PWA) | Layered |
| Troca de infra provável | Baixa (Prisma/Postgres estáveis) | Layered |
| Isolamento de testes | Desejável, não crítico | Layered |
| Time-to-market | Curto (MVP pessoal) | Layered |
| Time | 1 dev | Layered |

**5/6 → Layered.** Bounded contexts em `src/lib/` com camadas só onde há regra (domain + infra), sem forçar `ports/use-cases`. **Promoção tardia a Hexagonal permitida** quando `routine/` (recorrência) ou `streaks/` virarem dor — registrar em [[05-Dev-Log]]. Contextos: `routine/` · `tasks/` · `streaks/` · `notifications/` · `shared/`.

---

## 2. Estrutura Analítica do Projeto (EAP)

> Alinhada às **3 specs SDD** do escopo (fundação → app core → landing). Cada tarefa vira `/speckit.tasks` com TDD. Tamanho relativo (S/M/L) — sem horas (produto pessoal, ritmo variável).

### Épico 0 — Bootstrap (matriz linhas 6–9, 17)
| ID | Tarefa | Deps | Tam | Status |
|---|---|---|---|---|
| T-0.1 | `create-next-app` (TS, Tailwind, App Router, src, pnpm) em `Repos/rotina app` | — | S | pending |
| T-0.2 | `setup.js` (lê 01-Escopo) + deps: next-auth@beta, @auth/prisma-adapter, @serwist/next, serwist, web-push, rrule, date-fns(-tz) | T-0.1 | S | pending |
| T-0.3 | Tooling: SpecKit init · Impeccable + `/impeccable init` → `DESIGN.md` (dos proto-tokens do 00-DNA) · skills Next.js · **Higgsfield pulado** (`midia:nao`) | T-0.1 | S | pending |
| T-0.4 | DX: Prettier(+tailwind plugin) · Husky · lint-staged · EditorConfig · `strict` | T-0.1 | S | pending |
| T-0.5 | `05-Dev-Log.md` + `06-Erros.md` + `INIT.md` + `CLAUDE.md` raiz (R8) | T-0.1 | S | pending |

### Épico 1 — Spec A: Fundação (dados + auth + tenant)
| ID | Tarefa | Deps | Tam | Status |
|---|---|---|---|---|
| T-1.1 | `schema.prisma` (User+username/isPremium/timezone, Commitment, Task, Completion, PushSubscription + tabelas Auth.js) — **dados primeiro** | T-0.x | M | pending |
| T-1.2 | Auth.js v5 + Google OAuth + PrismaAdapter; `session.strategy='jwt'` (ERR-0003); tabelas snake_case (ERR-0004) | T-1.1 | M | pending |
| T-1.3 | Onboarding de username (slug único) → seed do usuário `jose` | T-1.2 | S | pending |
| T-1.4 | `middleware.ts`: guard de sessão + `tenant===session.username` (US-1.3/1.4) | T-1.2 | M | pending |
| T-1.5 | Route groups `(marketing)` e `(app)/app/[tenant]` + layouts isolados | T-1.2 | S | pending |

### Épico 2 — Spec B: App core
| ID | Tarefa | Deps | Tam | Status |
|---|---|---|---|---|
| T-2.1 | `routine/`: CRUD Commitment + expansão RRULE por data (unit-tested) | T-1.x | L | pending |
| T-2.2 | Chips de recorrência (todo dia/dias-semana/dia-N) → RRULE (US-2.2) | T-2.1 | M | pending |
| T-2.3 | `tasks/`: CRUD Task + rollover sem culpa (US-3.x) | T-1.x | M | pending |
| T-2.4 | Visão **dia** + card "agora" com countdown (US-4.1/4.4) | T-2.1,T-2.3 | L | pending |
| T-2.5 | Visão **semana** + **mês-radar** colapsado (US-4.2/4.3) | T-2.4 | M | pending |
| T-2.6 | `streaks/`: cálculo de Completion → streak; dia vazio neutro (US-6.x) | T-2.3 | M | pending |
| T-2.7 | Foguinho: check animado + badge (US-3.3/6.1), sem punição (US-6.3) | T-2.6 | S | pending |
| T-2.8 | `notifications/`: agendamento de alertas de transição + Web Push VAPID + permissão com contexto (US-5.x) | T-2.1 | L | pending |
| T-2.9 | PWA: manifest scope `/app`, Serwist SW, install, cache shell (US-7.x) | T-1.5 | M | pending |
| T-2.10 | Mocks WhatsApp + IA (UI "em breve", zero call) (US-9.x) | T-2.4 | S | pending |

### Épico 3 — Spec C: Landing (`/`)
| ID | Tarefa | Deps | Tam | Status |
|---|---|---|---|---|
| T-3.1 | Seções (hero→problema→pilares→como funciona→diferença→preço→FAQ→CTA→footer) + copy PT-BR de "BipDay" | T-1.5 | L | pending |
| T-3.2 | GSAP+Lenis: SplitText hero, reveals, pin+scrub, CTA hover swap; `prefers-reduced-motion` (US-8.2) | T-3.1 | M | pending |
| T-3.3 | Mockups reais do app (screenshots do dogfooding) em device frame → AVIF+WebP | T-2.4 | S | pending |
| T-3.4 | SEO Fase 9 (metadata/OG/JSON-LD/sitemap/robots) + ícone tipográfico "bip" | T-3.1 | S | pending |

### Épico 4 — QA & Go-Live (linha 21)
| ID | Tarefa | Deps | Tam | Status |
|---|---|---|---|---|
| T-4.1 | Playwright E2E de todos os critérios BDD | Épicos 1–3 | L | pending |
| T-4.2 | Segurança Fase 10 (headers CSP/HSTS…, env+zod, rate limit) | Épicos 1–3 | M | pending |
| T-4.3 | Deploy Vercel + Postgres driver adapter (ERR-0005) + smoke + Lighthouse | T-4.1,T-4.2 | M | pending |
| T-4.4 | **Dogfooding ≥7 dias** → fricções no 05-Dev-Log → decisão go/no-go de mercado | T-4.3 | — | pending |

---

## 3. Cronograma e Marcos

> Produto pessoal, ritmo variável — **sem datas rígidas**. Marcos são de conclusão de Épico (gate de aprovação do dev entre specs). Ordem estrita: cada marco depende do anterior.

| Fase | Descrição | Marco (Definition of Done da fase) | Status |
|---|---|---|---|
| **1. Fundação Técnica** | Épico 0 + Épico 1 — bootstrap, schema, auth, tenant, rotas | Login Google → `/app/jose` protegido, schema migrado, testes de guard/tenant verdes | pending |
| **2. Lógica Core** | Épico 2 (T-2.1–2.3, 2.6) — recorrência, tarefas, streak | CRUD de compromisso recorrente + tarefa + streak calculado, unitários verdes | pending |
| **3. Visões & Alertas** | Épico 2 (T-2.4–2.5, 2.7–2.10) — dia/semana/mês, timer, foguinho, push, PWA, mocks | App instalável usável no celular; alerta de transição dispara; foguinho anima | pending |
| **4. Landing & Polish** | Épico 3 — seções, GSAP/Lenis, mockups, SEO, ícone | Landing publicável, Lighthouse ≥90/95, `prefers-reduced-motion` ok | pending |
| **5. QA & Go-Live** | Épico 4 — E2E, segurança, deploy, dogfooding | Deploy Vercel + smoke ok; 7 dias de uso real registrados | pending |

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend | Next.js 16 App Router + TS strict + Tailwind 4 + shadcn/ui | [[Preferencias Dev]] |
| Backend | Next standalone (Route Handlers + Server Actions) | Porte pequeno/médio; sem NestJS |
| Banco de Dados | PostgreSQL **Neon** + Prisma (free tier) | [[Preferencias Dev]]; dados primeiro; escolhido pelo dev 2026-07-17 |
| Infra | Vercel free tier | [[Deploy Protocol]] (porte pequeno/médio) |
| Auth | Auth.js v5 + Google + PrismaAdapter | Canon; JWT strategy (ERR-0003) |
| Estado global | **Zustand** | Estado de UI client-side (visão ativa, timer, filtros) — zero boilerplate |
| Estado na URL | **Nuqs** | Data/visão selecionada na query string (shareável, back/forward) |
| Formulários | **React Hook Form + Zod** | Form de compromisso/tarefa; Zod valida client **e** server |
| Feedback UI | **Sonner** (toasts) + **Lucide** (ícones) | Confirmações não-bloqueantes; iconografia consistente |
| Data fetching | **TanStack Query** (papel pontual) | Ver §4.1 — RSC + Server Actions são o primário; Query só em fetch client-side real; `useEffect`-fetch proibido |
| Animações | GSAP + Lenis (Lenis só landing) | `useGSAP`; `prefers-reduced-motion`. **Three.js avaliado e fora** (ver §4.1) |
| Recorrência | `rrule` + `date-fns-tz` | RFC 5545; timezone do usuário |
| Testes | Vitest + Playwright | TDD obrigatório. Cobertura total |
| Tooling/DX | **Context7** (MCP, docs em tempo real) · SpecKit · Impeccable · Prettier+Husky+lint-staged | Context7 consultado antes de cada lib; DX no bootstrap |

### 4.1 Decisões e divergências do canon (R7)

> Registradas aqui porque divergem ou nuançam [[Preferencias Dev]] — sob R7, explicitadas para decisão do dev.

| Item | Canon diz | Decisão no BipDay | Motivo |
|---|---|---|---|
| **TanStack Query** | Padrão de fetching; `useEffect`-fetch proibido | **Mantido, papel pontual.** Primário = RSC + Server Actions + `useOptimistic`. Query só em client components com fetch/polling real (ex: revalidação do "agora") | App Router moderno resolve a maioria server-side; forçar Query em tudo seria over-engineering |
| **Three.js** | "Aprovado, quando couber" | **Fora do MVP.** No máximo um elemento WebGL sutil na landing, se leve | App utilitário; peso/risco de AI-slop não se paga |
| **Docker + Compose** | Infra canon (multi-stage + Compose) | **Fora.** Sem Postgres local (Neon tem branch de dev na nuvem); deploy serverless na Vercel | Vercel + Neon tornam Docker desnecessário; menos superfície de manutenção p/ 1 dev |

> **Confirmado pelo dev (2026-07-17):** as 3 decisões aceitas como sugeridas — TanStack Query pontual · Three.js fora · Docker fora.

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado [[4 - Error's Memory/INDEX]] antes de finalizar (canon `/speckit.plan`).

| ERR-ID | Título | Stack | Mitigação aplicada |
|---|---|---|---|
| ERR-2026-0003 | Auth.js v5 exige `session.strategy='jwt'` | Next-Auth | T-1.2 já fixa `jwt` |
| ERR-2026-0004 | PrismaAdapter exige snake_case (Account/Session/VerificationToken) | Prisma/Next-Auth | T-1.1 modela tabelas Auth.js em snake_case via `@@map`/`@map` |
| ERR-2026-0005 | Postgres SSL warning sem driver adapter (Prisma 7) | Prisma/PostgreSQL | T-4.3 usa `@prisma/adapter-pg` no deploy |

---

## 6. Mitigação de Riscos

| Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|
| Web Push background no iOS não dispara confiável | Alta | Alto | Fallback in-app quando app aberto; **WhatsApp (roadmap) + wrapper Capacitor (fase 2)** cobrem de vez; comunicar limitação no onboarding. Lógica em `src/lib/` mantida portável p/ Capacitor sem retrabalho |
| Expansão de RRULE com timezone/DST errada | Média | Alto | `date-fns-tz` + `timezone` no User; testes unitários de virada de dia/DST (T-2.1) |
| Cálculo de streak inconsistente (fuso, dia vazio) | Média | Médio | Streak derivado de Completion, regras testadas (T-2.6); dia vazio = neutro |
| Free tier de Postgres dorme / limite | Baixa | Médio | Neon serverless; conexão via adapter; retry no boot |
| Escopo inflar (voz/IA/WhatsApp antecipados) | Média | Médio | Exclusões §7 do escopo = Change Request; mocks seguram a vontade |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** por Épico (o dev aprova cada spec antes da próxima).
- **Link de homologação:** Vercel preview por branch.
- **Critérios de UAT:** todas as User Stories do [[01-Escopo]] validadas pelo dev no uso real (dogfooding).
- **Feedback:** documentado em [[05-Dev-Log]].

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as User Stories implementadas com testes passando (TDD)
- [ ] Cobertura E2E (Playwright) de todos os critérios BDD
- [ ] Unitários (Vitest) cobrindo recorrência RRULE, streak, agendamento de alertas, guard de tenant
- [ ] Performance: LCP <2.5s | FID <100ms | CLS <0.1
- [ ] Acessibilidade: WCAG 2.1 AA + `prefers-reduced-motion` validado
- [ ] `CLAUDE.md` em toda pasta (R8) + validator `--code-path` verde
- [ ] Deploy Vercel + smoke test + Lighthouse landing ≥90/95
- [ ] Dogfooding ≥7 dias registrado no [[05-Dev-Log]]

---

## Referências
- [[01-Escopo]] · [[00-DNA]] · [[Preferencias Dev]] · [[Frontend Creative Protocol]] · [[Backend Onboarding Protocol]] · [[Deploy Protocol]] · [[4 - Error's Memory/INDEX]]
