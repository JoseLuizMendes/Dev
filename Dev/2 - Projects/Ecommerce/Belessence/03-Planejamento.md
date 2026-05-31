---
template: "Planning"
version: 1.0
status: "Aprovado — em execução"
tags:
  - planejamento
  - sdd
  - tdd
  - spec-driven
  - hexagonal
  - refatoração
cliente: "Belessence (Mari Beauty)"
projeto: "Belessence"
classificacao: "Refatoração Full-stack"
data_inicio: "2026-05-30"
data_entrega: "A definir — fim da Rodada 4"
fonte_canon: "[[Planning Template]]"
---

# 📐 Plano de Execução Técnico: Belessence (Mari Beauty)

> **Fonte:** Gerado a partir de `[[01-Escopo]]` v3.0 + decisões de auditoria (2026-05-30). Cobre Rodadas 2-4 da plan em `C:\Users\ADM\.claude\plans\f-1-zeca-1-repositorio-documentos-meusp-foamy-barto.md`.

---

## 1. Resumo Executivo

- **Objetivo:** levar o repo Belessence de catch-all `src/lib/` para 12 bounded contexts com Hexagonal aplicado, eliminar confusão `src/api/` vs `src/app/api/`, garantir CLAUDE.md em toda pasta (R8), sem mexer em UI/rotas/schema.
- **Resultado esperado na entrega:** validator passa 100% (`node tools/validate-project.js --code-path`), suite Vitest + Playwright verde, build OK.
- **Prazo total:** 2026-05-30 → a definir (estimativa: 3-6 rodadas de trabalho, dependendo do tamanho de cada bounded context na Rodada 4).
- **KPIs de sucesso:** ver `[[01-Escopo]]` §2.4.

---

## 2. Estrutura Analítica do Projeto (EAP)

### Épico 1: Vault Refresh (Rodada 1 — esta rodada, em execução)

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-1.1 | Adicionar variante Next.js Standalone ao Preferencias Dev | — | 15min | ✅ done |
| T-1.2 | Adicionar Stack Estendida — Ecommerce ao Preferencias Dev | — | 20min | ✅ done |
| T-1.3 | Adicionar regra CLAUDE.md universal (§Filosofia §4) | — | 15min | ✅ done |
| T-1.4 | Adicionar R8 ao CLAUDE.md raiz | — | 10min | ✅ done |
| T-1.5 | Renomear `Requirements & Scope.md` → `01-Escopo.md` | — | 5min | ✅ done |
| T-1.6 | Reescrever 01-Escopo v3.0 (Full-stack + retroativo) | T-1.5 | 45min | ✅ done |
| T-1.7 | Gerar 02-Contrato.md (Refatoração Full-stack) | T-1.6 | 20min | ✅ done |
| T-1.8 | Gerar 03-Planejamento.md (este arquivo) | T-1.7 | 30min | ⏳ in_progress |
| T-1.9 | Gerar 04-Tarefas.md (backlog granular) | T-1.8 | 30min | ⏳ pending |
| T-1.10 | Gerar 05-Dev-Log.md (decisões retroativas) | — | 30min | ⏳ pending |
| T-1.11 | Gerar 06-Erros.md (propagar pra Error Memory) | — | 25min | ⏳ pending |
| T-1.12 | Gerar INIT.md no repo Belessence | T-1.6 | 15min | ⏳ pending |
| T-1.13 | Atualizar MEMORY.md do vault | T-1.11 | 10min | ⏳ pending |
| T-1.14 | Rodar validator (sanidade) | T-1.13 | 5min | ⏳ pending |

### Épico 2: Limpeza + CLAUDE.md Universal (Rodada 2)

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-2.1 | `[TEST]` validar npm ban: `grep package-lock.json` retorna vazio | T-2.2 | 5min | pending |
| T-2.2 | Deletar `package-lock.json` + `pnpm-lock.yaml.110687101` + atualizar `.gitignore` | — | 10min | pending |
| T-2.3 | Adicionar `src/generated/` ao `.gitignore` | — | 5min | pending |
| T-2.4 | Adicionar `noImplicitOverride: true` ao `tsconfig.json` | — | 5min | pending |
| T-2.5 | Renomear `package.json` name `belessence-new` → `mari-beauty` | — | 5min | pending |
| T-2.6 | Criar `F:\...\Belessence\trash\` e mover órfãos | — | 10min | pending |
| T-2.7 | Analisar `.agents/` vs `_agents/` e consolidar | — | 20min | pending |
| T-2.8 | Mapear pastas SEM CLAUDE.md no repo Belessence | T-2.7 | 15min | pending |
| T-2.9 | `[TEST]` validar R8: `find` sem CLAUDE.md retorna vazio | T-2.10 | 5min | pending |
| T-2.10 | Criar CLAUDE.md em todas as pastas mapeadas em T-2.8 | T-2.8 | 1-2h | pending |
| T-2.11 | Refatorar CLAUDE.md existentes pra seguir Niche CLAUDE Template | T-2.10 | 1h | pending |
| T-2.12 | Rodar `pnpm install && pnpm build && pnpm test` — esperado verde | T-2.10 | 15min | pending |

### Épico 3: Rename src/api/ → src/shadcn-utils/ (Rodada 3)

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-3.1 | `[TEST]` baseline: `pnpm test && pnpm test:e2e` verdes ANTES do rename | — | 10min | pending |
| T-3.2 | Listar TODOS arquivos com import `@/api/` | T-3.1 | 5min | pending |
| T-3.3 | `git mv src/api src/shadcn-utils` | T-3.2 | 5min | pending |
| T-3.4 | Atualizar `components.json` aliases | T-3.3 | 5min | pending |
| T-3.5 | Replace `@/api/` por `@/shadcn-utils/` em TODOS os imports (`sed`/Edit em massa) | T-3.4 | 15min | pending |
| T-3.6 | Atualizar CLAUDE.md da pasta renomeada | T-3.5 | 10min | pending |
| T-3.7 | `[TEST]` `grep -r "@/api/" src/` deve retornar zero | T-3.5 | 2min | pending |
| T-3.8 | `[TEST]` `pnpm test && pnpm test:e2e` verdes APÓS rename | T-3.7 | 10min | pending |
| T-3.9 | `pnpm build` esperado verde | T-3.8 | 10min | pending |
| T-3.10 | Avaliar `src/shadcn-utils/search/` — manter, mover ou deletar | T-3.9 | 5min | pending |

### Épico 4: SOLID + Clean Code + Hexagonal em src/lib/ (Rodada 4)

> Sub-rodadas em ordem de baixa→alta dependência.

| Sub-rodada | Bounded context | Arquivos atuais | Estimativa |
|---|---|---|---|
| 4.1 | `shared/` | `prisma.ts`, `validations.ts` | 30min |
| 4.2 | `design/` | `design-tokens.ts` | 20min |
| 4.3 | `motion/` | `gsap-utils.ts` | 30min |
| 4.4 | `products/` | `products-db.ts`, `product-status.ts`, `product-image.ts` | 1h |
| 4.5 | `cart/` | `cart-db.ts`, `cart-actions.ts`, `cart-store.ts` | 1.5h |
| 4.6 | `wishlist/` | `wishlist-db.ts`, `wishlist-actions.ts`, `wishlist-store.ts` | 1h |
| 4.7 | `auth/` | `auth.ts`, `auth-actions.ts`, `auth-gate-store.ts`, `admin-*` | 2h |
| 4.8 | `coupons/` + `shipping/` | `coupons.ts`, `shipping.ts` | 1h |
| 4.9 | `payment/` + `orders/` | `payment-provider.ts` + extrair `orders/` | 2h |
| 4.10 | `reviews/` | `reviews-db.ts` | 30min |

**Para cada sub-rodada:**
- T-4.X.1 `[TEST]` baseline verde
- T-4.X.2 Criar estrutura `domain/` `application/` `infrastructure/` `presentation/`
- T-4.X.3 Criar CLAUDE.md em cada camada (R8)
- T-4.X.4 `[TEST]` domain tests (Vitest, sem mocks)
- T-4.X.5 Mover entities → `domain/`
- T-4.X.6 Definir ports → `application/ports/`
- T-4.X.7 Implementar use cases → `application/use-cases/`
- T-4.X.8 Mover adapters → `infrastructure/`
- T-4.X.9 Mover server actions → `presentation/`
- T-4.X.10 Atualizar imports nos consumidores (src/app, src/components)
- T-4.X.11 `[TEST]` `pnpm test` verde
- T-4.X.12 `[TEST]` `pnpm test:e2e` nos fluxos afetados

---

## 3. Cronograma e Marcos

| Fase | Descrição | Prazo | Status |
|---|---|---|---|
| **1. Vault Refresh** | Sincronização total do vault com realidade do código | 2026-05-30 | ⏳ em execução |
| **2. Limpeza + CLAUDE.md universal** | Quick wins + R8 aplicada em toda pasta | A definir | ⏳ pending |
| **3. Rename src/api/** | PR dedicado de rename | A definir | ⏳ pending |
| **4. Hexagonal em src/lib/** | 10 sub-rodadas, uma por bounded context | A definir | ⏳ pending |
| **5. Verificação final** | Validator + suite completa + smoke manual | A definir | ⏳ pending |

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend + Backend | Next.js 16 Standalone Fullstack | Aprovado em `[[Preferencias Dev#Next.js Standalone Fullstack — Layered]]` |
| Linguagem | TypeScript 5 (strict) | Stack Principal |
| DB | PostgreSQL + Prisma 7 + adapter-pg | Stack Principal + Stack Estendida |
| Auth | Auth.js v5 + adapter + arctic + bcryptjs + jose + otplib | Stack Estendida — Ecommerce |
| Pagamento | Mercado Pago | Stack Estendida — Ecommerce |
| Mídia | Cloudinary + next-cloudinary | Stack Estendida — Ecommerce |
| Email | Resend + react-email | Stack Estendida — Ecommerce |
| Charts | Recharts | Stack Estendida — Ecommerce |
| UI | Tailwind 4 + Shadcn/ui + Radix | Stack Principal |
| Animações | GSAP + @gsap/react + Lenis | Stack Principal — `useGSAP` obrigatório |
| State | Zustand (cache do servidor) + Nuqs (URL) | Stack Principal |
| Forms | React Hook Form + Zod | Stack Principal |
| Testes | Vitest + Playwright + Testing Library + jsdom | Stack Principal — TDD obrigatório |
| Package Manager | pnpm | Stack Principal (npm/yarn/bun banidos) |
| Deploy | Vercel | Stack Principal |

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado em `[[4 - Error's Memory/INDEX]]` antes de finalizar este plano.

| ERR-ID | Título | Stack Afetada | Mitigação Aplicada |
|---|---|---|---|
| ERR-2026-0003 (novo) | Auth.js v5 com credentials exige `session.strategy = "jwt"` | next-auth | Configurar `strategy: "jwt"` no `auth.ts`; documentar em `[[06-Erros]]` |
| ERR-2026-0004 (novo) | PrismaAdapter exige tabelas Account/Session/VerificationToken em snake_case | @auth/prisma-adapter + Prisma | Não renomear colunas snake_case do adapter |
| ERR-2026-0005 (novo) | Postgres SSL warning sem driver adapter | pg + Prisma 7 | Usar `@prisma/adapter-pg` com Pool configurado |
| ERR-2026-0006 (novo) | Cart/wishlist em localStorage vazava entre usuários no mesmo browser | Zustand | Mover dados pra banco com `userId`, reset Zustand no logout |

> Detalhes em `[[06-Erros]]` (a gerar em T-1.11).

---

## 6. Mitigação de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Acoplamento implícito em `src/lib/` quebrar durante migração Hexagonal | Alta | Alto | Auditoria prévia obrigatória por bounded context (cláusula 4.1 do contrato); testes de regressão antes do refactor |
| Imports massivos do `@/api/` quebrarem após rename | Média | Médio | Replace automatizado + Playwright completo antes de declarar Rodada 3 done |
| Schema Prisma + Auth.js drift se mexer em algum modelo | Baixa | Alto | Schema é **fora de escopo** desta plan |
| Quebrar fluxo de checkout (MP webhook) durante refactor de `payment/` | Média | Crítico | Sub-rodada 4.9 (payment+orders) com testes E2E full em staging antes de merge |
| Build Vercel falhar | Baixa | Médio | `pnpm build` local antes de cada commit grande |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** após cada rodada (2, 3, 4) — apresentar diff resumido + resultado do validator
- **UAT:** smoke test manual em `/admin/*`, cart, checkout, login, signup — checklist em `[[06-Erros]]` se houver
- **Feedback:** documentado em `[[05-Dev-Log]]`

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as User Stories de `[[01-Escopo]]` §4 Módulos 1-4 com `status: ✅ done`
- [ ] Cobertura E2E (Playwright) verde nos fluxos críticos: login, signup, cart, checkout, admin CRUD, MP webhook
- [ ] Cobertura unitária (Vitest) verde — alvo: 100% no `domain/` de cada bounded context
- [ ] Performance: LCP < 2.5s | FID/INP < 100ms | CLS < 0.1
- [ ] Acessibilidade: WCAG 2.1 AA validado (Lighthouse + manual)
- [ ] R8 — `find . -type d` (excluindo gitignored) sem CLAUDE.md = 0
- [ ] R7 — Stack Estendida — Ecommerce em `[[Preferencias Dev]]` cobre 100% das libs do `package.json`
- [ ] `node tools/validate-project.js "Dev/2 - Projects/Ecommerce/Belessence" --code-path "<repo>"` passa
- [ ] `pnpm build` verde
- [ ] Smoke test manual: home, cart, login, signup, checkout, admin — todos funcionais

---

## Quality Gate

- [x] Artefato foi gerado a partir de `[[Planning Template]]` como base
- [x] EAP cobrindo todas as fases até DoD
- [x] Decisão Hexagonal registrada com matriz de 6 sinais (em `[[01-Escopo]]` §5.3)
- [x] Erros conhecidos consultados em `[[4 - Error's Memory/INDEX]]`
- [x] Riscos identificados com mitigação
- [x] Stack mapeada conforme `[[Preferencias Dev]]`

---

## Referências

- `[[01-Escopo]]` — fonte dos requisitos
- `[[02-Contrato]]` — cláusulas dinâmicas Refatoração Full-stack
- `[[04-Tarefas]]` — backlog granular (gerar em T-1.9)
- `[[05-Dev-Log]]` — diário de decisões
- `[[06-Erros]]` — registro local + propagação imunológica
- `[[Preferencias Dev]]` — stack canon + Filosofia
- `[[Master Pipeline & Enforcement]]` — matriz canon do vault
- `[[4 - Error's Memory/INDEX]]` — memória imunológica global
