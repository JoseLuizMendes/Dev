---
template: "Dev Log"
version: 1.0
status: "Ativo"
tags:
  - dev-log
  - progresso
  - decisoes
  - bipday
projeto: "BipDay"
cliente: "Interno (produto próprio)"
data_inicio: "2026-07-17"
---

# 📓 05-Dev-Log — BipDay

> Inicializado no bootstrap (Épico 0). Append-only.

---

## Estado Atual

| Campo | Valor |
|---|---|
| **Timestamp** | 2026-07-21 15:30 |
| **Fase atual** | **Épico 2 (App Core) EM PROGRESSO** — US1 (Compromissos) ~80%: criar + ver prontos, falta editar/excluir. Épico 1 ✅ COMPLETO |
| **Tarefa em progresso** | **Próximo: editar/excluir compromisso** (fecha a US1) — Server Actions `updateCommitment`/`deleteCommitment` já existem, falta a UI (tocar no item → editar; excluir com 1 confirmação) |
| **Bloqueios** | Nenhum. Código todo pushado (`origin/chore/bootstrap` = HEAD). Dev de casa: clonar → `pnpm install` → recriar `.env` (SETUP.md §3) → `pnpm prisma generate` → `pnpm dev` |

**Resumo em 5 bullets (Épico 2 US1 — esta sessão):**
- **Recorrência (RRULE) com TDD:** `src/lib/routine/recurrence.ts` (`occursOn`/`expandDay`/`buildRRule`) opera em **dias civis** (sem hora) → desacopla tz/DST. `src/lib/shared/date.ts` (`civilDayInTz`) resolve o "hoje" no fuso. 16 testes.
- **Camada de dados:** `commitment-schema.ts` (Zod puro, client+server) + `commitments.ts` (`getCommitmentsForDay` p/ RSC, DTO) + `commitments.actions.ts` (create/update/delete/pause). Isolamento no domínio (`updateMany`/`deleteMany` com `userId` no where).
- **Adoção do shadcn/ui** integrado aos tokens do BipDay (semânticos `--primary`/`--border`/… → paleta sage no `globals.css`). Fontes **Bricolage Grotesque + Inter Tight** (next/font). Componentes em `src/components/ui/`.
- **UI da US1:** `CommitmentForm` (chips via `ToggleGroup`) + **visão do dia** (`/app/[tenant]`, lista + empty state) + rota `/compromissos/novo`.
- **Bottom sheets mobile** (`TimeSheet`/`DayOfMonthSheet`, shadcn Drawer/vaul) — hora/minuto e dia-do-mês num sheet de **altura fixa** que rola por dentro, resolvendo os selects gigantes no celular (aprovado pelo dev no iPhone). "Me avisar" ficou inline. **Estado: 23 unit + 7 E2E verdes.**

---

## Decisões Tomadas

| Data | Decisão | Justificativa | Impacto | Ref |
|---|---|---|---|---|
| 2026-07-17 | Repo criado em subdir `bipday` e movido p/ raiz | Nome "rotina app" (espaço) viola npm naming; basename `bipday` vira `name` válido | `package.json name=bipday` | T-0.1 |
| 2026-07-17 | `db push` em vez de `migrate dev` no 1º sync | Neon pooled + prototipagem; migrations formais quando o schema estabilizar | Tabelas criadas sem histórico de migration ainda | T-0.6 |
| 2026-07-17 | Prisma 7 `prisma-client` generator + `prisma.config.ts` + adapter-pg | Prisma 7 rust-free/ESM; url no config, não no schema (consultado Context7) | Client em `src/generated/prisma` (gitignored) | T-0.6 |
| 2026-07-17 | 3 divergências do canon (R7): TanStack Query pontual, Three.js fora, Docker fora | Ver [[03-Planejamento]] §4.1 — confirmadas pelo dev | Stack enxuta p/ Vercel+Neon | — |
| 2026-07-17 | iOS futuro = Capacitor (sobre RN/KMP) | Reusa o web; KMP errado p/ dev TS solo | Lógica em `src/lib/` mantida portável | — |
| 2026-07-17 | SEM tiers free/premium no MVP | Decisão do dev; monetização no go-to-market | `isPremium` no schema mas sem gating | — |
| 2026-07-21 | Recorrência opera em **dias civis** (Date UTC-meia-noite), tz só na borda | Elimina armadilha de DST na regra; lógica pura 100% testável sem mock de tempo | `recurrence.ts` sem tz; `shared/date.ts` faz a conversão | Épico 2 US1 |
| 2026-07-21 | **Chips estruturados** (`{kind,weekdays}`) → server gera o RRULE (`buildRRule`) | Mais seguro que aceitar RFC 5545 cru do client; validado por Zod | UI manda estrutura, não string | Épico 2 US1 |
| 2026-07-21 | Adotar **shadcn/ui** (já na stack) integrado aos tokens BipDay | Componentes viram código nosso, editáveis; consistência + a11y | `src/components/ui/*`; `globals.css` mapeia semânticos→paleta | Épico 2 US1 |
| 2026-07-21 | **Bottom sheet (Drawer/vaul)** para hora/minuto/dia no mobile | Selects nativos/Radix ficam "gigantes e soltos" no celular; sheet de altura fixa rola por dentro (aprovado no iPhone) | `TimeSheet`/`DayOfMonthSheet`; sets pequenos ficam inline | Épico 2 US1 |

---

## Dependências Instaladas (com versão exata)

| Pacote | Versão | Tipo | Motivo | Data |
|---|---|---|---|---|
| next | 16.2.10 | prod | framework | 2026-07-17 |
| react / react-dom | 19.2.4 | prod | UI | 2026-07-17 |
| next-auth | 5.0.0-beta.31 | prod | Auth.js v5 | 2026-07-17 |
| @auth/prisma-adapter | 2.11.2 | prod | adapter Auth.js↔Prisma | 2026-07-17 |
| @prisma/client | 7.8.0 | prod | ORM client | 2026-07-17 |
| @prisma/adapter-pg | 7.8.0 | prod | driver adapter (mitiga ERR-0005) | 2026-07-17 |
| pg | 8.22.0 | prod | driver Postgres | 2026-07-17 |
| @serwist/next / serwist | 9.5.11 | prod | PWA service worker | 2026-07-17 |
| web-push | 3.6.7 | prod | VAPID (alertas de transição) | 2026-07-17 |
| rrule | 2.8.1 | prod | recorrência RFC 5545 | 2026-07-17 |
| date-fns / date-fns-tz | 4.4.0 / 3.2.0 | prod | datas + timezone | 2026-07-17 |
| zustand | 5.0.14 | prod | estado UI | 2026-07-17 |
| nuqs | 2.9.1 | prod | estado na URL | 2026-07-17 |
| react-hook-form | 7.82.0 | prod | forms | 2026-07-17 |
| @hookform/resolvers | 5.4.0 | prod | RHF↔Zod | 2026-07-17 |
| zod | 4.4.3 | prod | validação | 2026-07-17 |
| sonner | 2.0.7 | prod | toasts | 2026-07-17 |
| lucide-react | 1.25.0 | prod | ícones | 2026-07-17 |
| @tanstack/react-query | 5.101.2 | prod | fetching pontual (§4.1) | 2026-07-17 |
| gsap / @gsap/react | 3.15.0 / 2.1.2 | prod | animações | 2026-07-17 |
| lenis | 1.3.25 | prod | smooth scroll (landing) | 2026-07-17 |
| prisma | 7.8.0 | dev | CLI/migrations | 2026-07-17 |
| vitest / @vitest/ui | 4.1.10 | dev | testes unit | 2026-07-17 |
| @playwright/test | 1.61.1 | dev | E2E | 2026-07-17 |
| prettier (+tailwind plugin) | 3.9.5 / 0.8.1 | dev | formatação | 2026-07-17 |
| husky / lint-staged | 9.1.7 / 17.1.0 | dev | pre-commit | 2026-07-17 |
| tsx / dotenv | 4.23.1 / 17.4.2 | dev | seed + config env | 2026-07-17 |
| tailwindcss | 4.x | dev | styling | 2026-07-17 |
| radix-ui | 1.6.4 | prod | primitivos dos componentes shadcn (pacote unificado) | 2026-07-21 |
| vaul | (add drawer) | prod | bottom sheet (Drawer) — pickers mobile | 2026-07-21 |
| class-variance-authority | 0.7.1 | prod | variantes dos componentes shadcn | 2026-07-21 |
| clsx / tailwind-merge | 2.1.1 / 3.6.0 | prod | `cn()` (merge de classes) | 2026-07-21 |
| tw-animate-css | 1.4.0 | dev | animações dos componentes shadcn | 2026-07-21 |

> **Design system:** shadcn/ui adicionado via CLI (`components.json`, `src/lib/utils.ts`, `src/components/ui/*`). Componentes: button, input, label, select, toggle, toggle-group, drawer. Tokens semânticos reconciliados com a paleta BipDay no `globals.css` (`@theme inline` → `:root`).

---

## Progresso por Épico

### Épico 0: Bootstrap — ✅ COMPLETO
- [x] T-0.1 create-next-app
- [x] T-0.2 deps do escopo
- [x] T-0.3 tooling: SpecKit (`.specify/` — uv instalado pelo dev), Impeccable skill, **DESIGN.md** gerado dos proto-tokens
- [x] T-0.4 DX (Prettier, EditorConfig, Husky→lint-staged)
- [x] T-0.5 vault artifacts (00–06 + setup.js + INIT) + CLAUDE.md raiz reconciliado + `src/lib` e `src/lib/shared` (R8 nas pastas existentes)
- [x] T-0.6 Prisma + Neon (tabelas criadas)

### Épico 1: Fundação — ✅ COMPLETO (US1 ✅ · US2 ✅ · US3 ✅)
- [x] T-1.0 schema.prisma (tabelas no Neon) — `username` corrigido p/ nullable (ERR-BIPDAY-001)
- [x] **SpecKit alimentado:** `.specify/memory/constitution.md` (7 princípios) + `specs/001` (spec+plan+tasks) + `specs/002/003` + `specs/README.md`
- [x] **US1 — Login Google:** `auth.config.ts`(edge)+`auth.ts`(adapter+jwt)+route handler + `env.ts`(zod) + `next-auth.d.ts`(+`id`) + telas `/entrar` e `/app` + tokens. **Login real confirmado pelo dev.**
- [x] **US2 — Onboarding username (TDD):** `username.ts` (schema Zod puro + `isValidUsername` + `suggestUsername`) · `username.test.ts` (7 testes Vitest verdes) · `username.actions.ts` (`setUsername`/`isUsernameAvailable`) · `components/auth/UsernameForm.tsx` (RHF+Zod+`session.update`) · `/onboarding/username` · `/app` redireciona se username null. Base de teste (`vitest.config.ts`) criada.
- [x] **US3 — Guard/tenant:** `middleware.ts` (edge, sem query ao banco) · `/app/[tenant]` (revalida no RSC) · redirect `/app`→`/app/[username]` · E2E completo: 3 sem-sessão + 3 autenticados (isolamento A≠B via cookie forjado, `e2e/auth.setup.ts`). `playwright.config.ts` com projeto `setup`. Seed (T020) adiado (guard é DB-free).

### Épico 2: App Core — EM PROGRESSO (US1 ~80%)
- [x] **Recorrência (RRULE):** `src/lib/routine/recurrence.ts` + `recurrence.test.ts` (12) + `src/lib/routine/CLAUDE.md` (R8). `src/lib/shared/date.ts` (`civilDayInTz`) + `date.test.ts` (4). Opera em dias civis.
- [x] **Camada de dados (US1):** `commitment-schema.ts` (Zod puro) · `commitments.ts` (`getCommitmentsForDay`, DTO) · `commitments.actions.ts` (create/update/delete/pause, escopadas por `userId`).
- [x] **Design system:** shadcn/ui (`src/components/ui/*`, `components.json`, `src/lib/utils.ts`) integrado aos tokens; fontes Bricolage+Inter Tight no `layout.tsx`.
- [x] **US1 UI — criar + ver:** `components/routine/CommitmentForm.tsx` (chips ToggleGroup) · `TimeSheet.tsx`/`DayOfMonthSheet.tsx` (bottom sheet mobile) · `/app/[tenant]` vira a **visão do dia** (lista + empty state) · rota `/compromissos/novo`.
- [ ] **US1 resto — editar/excluir** (Acceptance 2): tocar no item da visão do dia → editar (reusar `CommitmentForm` com valores iniciais + `updateCommitment`); excluir com 1 confirmação (`deleteCommitment`). **← próximo passo.**
- [ ] US2 Tarefas · US3 Visões (dia/semana/mês-radar + card "agora" com countdown/GSAP) · US4 Alertas ("o bip", Web Push) · US5 Streak · US6 PWA. Ver `specs/002-app-core`.

**Nota de contexto (handoff):** o código está todo no GitHub (`origin/chore/bootstrap`). A **memória do Claude Code é local da máquina** (não viaja) — este Dev-Log é o retrato canônico de onde paramos. `.env` não está no git (segredos): recriar via `SETUP.md` §3.

---

## Histórico de Sessões

| Data | Hora | Resumo | Log completo |
|---|---|---|---|
| 2026-07-17 | 15:00 | Kickoff→Escopo→Plano→Tarefas + Bootstrap (scaffold, deps, Prisma/Neon, DX) | `[[2026-07-17_15-02]]` |
| 2026-07-21 | 10:00–15:30 | Fix login (`error=Configuration`) → Épico 1 fechado (US2/US3 + E2E) → Épico 2 US1 (recorrência TDD, camada de dados, shadcn/ui, form + visão do dia + bottom sheets mobile). Commits pushados. | — |

---

## Pendentes para Próxima Sessão

- [ ] **PRÓXIMO — Épico 2 US1 (fechar):** editar/excluir compromisso na visão do dia. Reusar `CommitmentForm` com valores iniciais + `updateCommitment`; excluir com 1 confirmação + `deleteCommitment`. Depois: verificar o caminho de escrita real (dev cria compromisso logado como `jose` e confere na lista).
- [ ] Épico 2 US2+: Tarefas (rollover `isDeadline`), Visões (card "agora" + countdown GSAP), Alertas ("o bip" Web Push), Streak, PWA — ver `specs/002-app-core`.
- [x] ~~Credenciais Google~~ (feito) · ~~repo GitHub + push~~ (feito: `origin` nos dois repos, tudo sincronizado).
- [ ] Contínuo: `CLAUDE.md` em novas pastas de `src/lib/` (R8) · aplicar mais tokens do `DESIGN.md` conforme a UI cresce.
- [ ] Ao rodar do PC de casa: recriar `.env` (SETUP.md §3) e `pnpm prisma generate` (ambos gitignored).

---

## Quality Gate

- [x] Gerado a partir de [[Dev Log Template]]
- [x] Estado atual reflete o último timestamp
- [x] Decisões com justificativa e impacto
- [x] Dependências com versão exata
- [x] Pendentes listados

## Referências
- [[01-Escopo]] · [[04-Tarefas]] · [[06-Erros]] · [[3 - Session Logs/MEMORY]] · [[Session Protocol]] · [[Protocol-Bootstrap]]
