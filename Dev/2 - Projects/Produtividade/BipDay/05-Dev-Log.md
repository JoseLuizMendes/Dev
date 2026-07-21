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
| **Timestamp** | 2026-07-21 12:00 |
| **Fase atual** | **Épico 1 (Fundação/Auth) ✅ COMPLETO** (US1+US2+US3, DoD batido) → próximo: Épico 2 (app-core, `specs/002`) |
| **Tarefa em progresso** | Nenhuma. Milestone fechado. (Sugestão: commit + criar remote GitHub antes do Épico 2) |
| **Bloqueios** | Nenhum |

**Resumo em 3 bullets:**
- **Épico 1 fechado:** login Google (US1) + onboarding username (US2) + guard de tenant (US3). DoD 4/4 ✅.
- **Testes:** 7 unit (Vitest) + 7 E2E (Playwright) verdes; typecheck limpo. Isolamento A≠B (SC-002) testado via **cookie de sessão forjado** (`e2e/auth.setup.ts`, `encode` do `next-auth/jwt`) — zero superfície de auth em prod. Middleware sem query ao banco (SC-004).
- Guard: `middleware.ts` (edge) + `/app/[tenant]` (revalida no RSC) + `/app`→`/app/[username]`.

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

---

## Histórico de Sessões

| Data | Hora | Resumo | Log completo |
|---|---|---|---|
| 2026-07-17 | 15:00 | Kickoff→Escopo→Plano→Tarefas + Bootstrap (scaffold, deps, Prisma/Neon, DX) | `[[2026-07-17_15-02]]` |

---

## Pendentes para Próxima Sessão

- [ ] **Dev:** criar credenciais Google OAuth (`AUTH_GOOGLE_ID`/`SECRET`) no console.cloud.google.com (redirect `http://localhost:3000/api/auth/callback/google`) — único bloqueio do login real. `AUTH_SECRET`/VAPID/`DIRECT_URL` = comandos no `SETUP.md` §3.
- [ ] **Dev (portabilidade):** criar repo privado no GitHub → configurar remote + push (ver `SETUP.md` §1)
- [ ] Épico 1: implementar auth (T-1.1) com TDD — pode começar o código do Auth.js antes das creds (só o E2E do login real espera elas)
- [ ] Contínuo: `CLAUDE.md` em novas pastas de `src/lib/` conforme os bounded contexts nascerem (R8)
- [ ] Front (Épico 3): aplicar tokens do `DESIGN.md` no `globals.css` (`@theme`)

---

## Quality Gate

- [x] Gerado a partir de [[Dev Log Template]]
- [x] Estado atual reflete o último timestamp
- [x] Decisões com justificativa e impacto
- [x] Dependências com versão exata
- [x] Pendentes listados

## Referências
- [[01-Escopo]] · [[04-Tarefas]] · [[06-Erros]] · [[3 - Session Logs/MEMORY]] · [[Session Protocol]] · [[Protocol-Bootstrap]]
