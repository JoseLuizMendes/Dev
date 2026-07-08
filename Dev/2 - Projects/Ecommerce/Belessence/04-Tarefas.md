---
template: "Tasks"
version: 1.0
status: "Em execução — Rodada 1 (Vault)"
tags:
  - tarefas
  - backlog
  - tdd
  - sdd
  - refatoração
projeto: "Belessence"
cliente: "Belessence (Mari Beauty)"
fonte: "[[01-Escopo]] + [[03-Planejamento]]"
data_criacao: "2026-05-30"
---

# 📋 04-Tarefas — Belessence (Mari Beauty)

> **Nota de Uso:** Gerado a partir de `[[03-Planejamento]]` via `[[Tasks Template]]`. Cada tarefa rastreia uma User Story do `[[01-Escopo]]`.
>
> ⚠️ **Regra TDD inegociável:** toda tarefa `impl` é precedida pela tarefa `[TEST]` correspondente. Nenhuma exceção.

---

## Status enum

- `pending` — não iniciada
- `in_progress` — em desenvolvimento (apenas 1 task por vez)
- `blocked` — bloqueada por dependência ou decisão pendente
- `done` — testes passando + critério BDD validado

---

## Épico 1: Vault Refresh (Rodada 1)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-1.1 | impl | Adicionar variante Next.js Standalone ao Preferencias Dev | US-1.1 | `Dev/0 - Planner Project/Preferencias Dev.md` | Section "Next.js Standalone Fullstack — Layered" existe e mostra layout `src/app + src/lib + ...` | done | Dev | 0.25 |
| T-1.2 | impl | Adicionar Stack Estendida — Ecommerce | US-1.2 | `Preferencias Dev.md` | Tabela com 12+ libs aprovadas com justificativa | done | Dev | 0.33 |
| T-1.3 | impl | Adicionar §Filosofia §4 CLAUDE.md Universal | US-1.3 | `Preferencias Dev.md` | Seção descreve regra + quality gate via validator | done | Dev | 0.25 |
| T-1.4 | impl | Adicionar R8 ao CLAUDE.md raiz | US-1.3 | `Dev/CLAUDE.md` | R8 logo após R7 com refuse-rule | done | Dev | 0.17 |
| T-1.5 | impl | git mv Requirements & Scope → 01-Escopo | US-1.4 | `Dev/2 - Projects/Ecommerce/Belessence/01-Escopo.md` | Arquivo existe com nome canon | done | Dev | 0.1 |
| T-1.6 | impl | Reescrever 01-Escopo v3.0 (Full-stack retroativo) | US-1.4 | `01-Escopo.md` | classificacao = "Refatoração Full-stack", frontmatter completo, US 1-10 | done | Dev | 0.75 |
| T-1.7 | impl | Gerar 02-Contrato.md | US-1.4 | `02-Contrato.md` | Cláusulas dinâmicas Full-stack aplicadas | done | Dev | 0.33 |
| T-1.8 | impl | Gerar 03-Planejamento.md | US-1.4 | `03-Planejamento.md` | EAP + cronograma + riscos + DoD | done | Dev | 0.5 |
| T-1.9 | impl | Gerar 04-Tarefas.md (este arquivo) | US-1.4 | `04-Tarefas.md` | Backlog granular T-X.Y com TEST antes de impl | in_progress | Dev | 0.5 |
| T-1.10 | impl | Gerar 05-Dev-Log.md | US-1.4 | `05-Dev-Log.md` | Estado atual + decisões retroativas + dependências instaladas | pending | Dev | 0.5 |
| T-1.11 | impl | Gerar 06-Erros.md + propagar pra INDEX global | US-1.4 | `06-Erros.md` + `Dev/4 - Error's Memory/INDEX.md` | 4 erros novos registrados + INDEX atualizado | pending | Dev | 0.42 |
| T-1.12 | impl | Gerar INIT.md no repo Belessence | US-1.4 | `Belessence/frontend/belessence/INIT.md` | INIT.md per-projeto na raiz do código | pending | Dev | 0.25 |
| T-1.13 | impl | Atualizar MEMORY.md vault | — | `Dev/3 - Session Logs/MEMORY.md` | Estado reflete rodada Belessence | pending | Dev | 0.17 |
| T-1.14 | `[TEST]` | Rodar validator no projeto Belessence | — | — | `node tools/validate-project.js "Dev/2 - Projects/Ecommerce/Belessence"` retorna OK | pending | Dev | 0.08 |

---

## Épico 2: Limpeza + CLAUDE.md Universal (Rodada 2)

### Sub-épico 2A: Limpeza estrutural

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|---|
| T-2.1.1 | impl | Deletar `package-lock.json` + `pnpm-lock.yaml.110687101` | US-2.1 | repo Belessence | Ambos não existem mais; ls confirma | pending | 0.1 |
| T-2.1.2 | impl | Adicionar `package-lock.json` ao `.gitignore` | US-2.1 | `.gitignore` | grep retorna match | pending | 0.05 |
| T-2.1.3 | `[TEST]` | Verificar npm ban | US-2.1 | — | `find . -name "package-lock.json" -not -path "./node_modules/*"` retorna vazio | pending | 0.05 |
| T-2.1.4 | impl | Adicionar `src/generated/` ao `.gitignore` | US-2.4 | `.gitignore` | grep retorna match | pending | 0.05 |
| T-2.1.5 | impl | Adicionar `noImplicitOverride: true` ao tsconfig | US-2.3 | `tsconfig.json` | JSON tem a chave | pending | 0.08 |
| T-2.1.6 | impl | Renomear name `belessence-new` → `mari-beauty` | US-2.2 | `package.json` | grep `"name": "mari-beauty"` retorna match | pending | 0.05 |
| T-2.1.7 | `[TEST]` | `pnpm install` funciona após renomes | — | — | exit 0 | pending | 0.1 |

### Sub-épico 2B: Trash + agents consolidation

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|---|
| T-2.2.1 | impl | Criar `F:\...\Belessence\trash\` | US-2.5 | parent dir | mkdir OK | pending | 0.02 |
| T-2.2.2 | impl | Mover órfãos pra `trash/` (m.png, code.html, trace_m*.py, stitch_mari_*, m_*.svg, m_*.txt, screen.png) | US-2.5 | parent dir | `ls Belessence/` só mostra `frontend/`, `trash/`, `_agents/`, `.agents/`, `CLAUDE.md` | pending | 0.17 |
| T-2.2.3 | impl | Analisar conteúdo `.agents/` vs `_agents/` | US-2.6 | parent dir | Documentar diff em `[[05-Dev-Log]]` | pending | 0.25 |
| T-2.2.4 | impl | Consolidar agentes em `.agents/` (mesclar conteúdo único) | US-2.6 | parent dir | `_agents/` deletada após merge; `.agents/` contém tudo relevante | pending | 0.33 |

### Sub-épico 2C: CLAUDE.md universal (R8)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|---|
| T-2.3.1 | impl | Mapear todas pastas SEM CLAUDE.md (excluir gitignored) | US-2.7 | — | Lista gerada em `[[05-Dev-Log]]` | pending | 0.25 |
| T-2.3.2 | impl | Criar CLAUDE.md em cada pasta mapeada via Niche CLAUDE Template | US-2.7 | múltiplas pastas | Cada pasta tem CLAUDE.md com frontmatter `nicho`/`escopo` + seções padrão | pending | 1.5 |
| T-2.3.3 | impl | Refatorar CLAUDE.md existentes pra seguir Niche CLAUDE Template (src/app, src/api, src/lib, src/components, prisma, e2e) | US-2.7 | 6 arquivos | Frontmatter padronizado, seções consistentes; conteúdo bom preservado | pending | 1 |
| T-2.3.4 | `[TEST]` | Verificar R8 — `find` sem CLAUDE.md retorna zero | US-2.7 | — | Comando retorna vazio | pending | 0.05 |
| T-2.3.5 | `[TEST]` | `pnpm test && pnpm test:e2e && pnpm build` verdes | — | — | exit 0 nas três | pending | 0.25 |

---

## Épico 3: Rename src/api/ → src/shadcn-utils/ (Rodada 3)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|---|
| T-3.1 | `[TEST]` | Baseline: `pnpm test && pnpm test:e2e` verdes ANTES | US-3.4 | — | exit 0 | pending | 0.17 |
| T-3.2 | impl | Listar todos arquivos com `@/api/` | US-3.3 | — | Output salvo em `[[05-Dev-Log]]` | pending | 0.08 |
| T-3.3 | impl | `git mv src/api src/shadcn-utils` | US-3.1 | filesystem | Pasta renomeada | pending | 0.05 |
| T-3.4 | impl | Atualizar `components.json`: utils + lib aliases | US-3.2 | `components.json` | JSON aponta pra shadcn-utils | pending | 0.05 |
| T-3.5 | impl | Replace `@/api/` → `@/shadcn-utils/` em todos os imports | US-3.3 | múltiplos | grep `@/api/` retorna zero | pending | 0.25 |
| T-3.6 | impl | Atualizar CLAUDE.md renomeada (`src/shadcn-utils/CLAUDE.md`) | US-2.7 | 1 arquivo | Reflete novo nome + propósito | pending | 0.17 |
| T-3.7 | `[TEST]` | `grep -r "@/api/" src/` retorna zero | US-3.3 | — | exit 1 (zero matches) | pending | 0.02 |
| T-3.8 | `[TEST]` | `pnpm test` verde APÓS rename | US-3.4 | — | exit 0 | pending | 0.17 |
| T-3.9 | `[TEST]` | `pnpm test:e2e` verde APÓS rename | US-3.4 | — | exit 0 | pending | 0.5 |
| T-3.10 | `[TEST]` | `pnpm build` verde | — | — | exit 0 | pending | 0.17 |
| T-3.11 | impl | Decidir destino de `src/shadcn-utils/search/` (vazia? mover? deletar?) | US-3.1 | filesystem | Decisão registrada em `[[05-Dev-Log]]` | pending | 0.1 |

---

## Épico 4: SOLID + Clean Code + Hexagonal em src/lib/ (Rodada 4)

> Cada sub-épico é uma sub-rodada. **Ordem importa** (baixa → alta dependência). Não pular sequência.

### Sub-épico 4.1 — shared/

| ID | Tipo | Descrição | US Origem | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|
| T-4.1.1 | `[TEST]` | Baseline verde | — | exit 0 | pending | 0.17 |
| T-4.1.2 | impl | Criar estrutura `src/lib/shared/{domain,application,infrastructure,presentation}/` | US-4.1 | mkdir + CLAUDE.md em cada | pending | 0.17 |
| T-4.1.3 | impl | Mover `prisma.ts` → `src/lib/shared/infrastructure/prisma-client.ts` | US-4.4 | Singleton acessível | pending | 0.17 |
| T-4.1.4 | impl | Mover `validations.ts` → `src/lib/shared/domain/zod-schemas.ts` | US-4.2 | Schemas Zod sem framework import | pending | 0.25 |
| T-4.1.5 | impl | Atualizar imports nos consumidores (~50 arquivos) | US-4.1 | grep `@/lib/prisma\|@/lib/validations` retorna zero | pending | 0.5 |
| T-4.1.6 | `[TEST]` | `pnpm test && pnpm test:e2e` verdes | US-4.7 | exit 0 | pending | 0.5 |

### Sub-épico 4.2 — design/

| ID | Tipo | Descrição | US Origem | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|
| T-4.2.1 | impl | `src/lib/design/domain/tokens.ts` (mover `design-tokens.ts`) | US-4.1 | Tokens OKLCH puros, sem imports | pending | 0.25 |
| T-4.2.2 | impl | CLAUDE.md em `src/lib/design/` + `domain/` | US-4.6 | R8 satisfeito | pending | 0.17 |
| T-4.2.3 | `[TEST]` | Verde | — | exit 0 | pending | 0.17 |

### Sub-épico 4.3 — motion/

| ID | Tipo | Descrição | US Origem | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|
| T-4.3.1 | impl | `src/lib/motion/presentation/gsap-helpers.ts` (mover `gsap-utils.ts`) | US-4.5 | Client-only, useGSAP obrigatório | pending | 0.33 |
| T-4.3.2 | impl | CLAUDE.md | US-4.6 | R8 | pending | 0.17 |
| T-4.3.3 | `[TEST]` | Verde | — | exit 0 | pending | 0.17 |

### Sub-épico 4.4 — products/

| ID | Tipo | Descrição | US Origem | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|---|
| T-4.4.1 | `[TEST]` | Escrever testes de regressão dos queries de produto antes de mover | US-4.7 | Vitest passa | pending | 0.5 |
| T-4.4.2 | impl | `domain/product.ts` — entity pura | US-4.2 | grep imports retorna zero framework | pending | 0.5 |
| T-4.4.3 | impl | `domain/product-status.ts` — value object | US-4.2 | Lógica pura | pending | 0.25 |
| T-4.4.4 | impl | `application/ports/i-product-repository.ts` | US-4.3 | Interface só | pending | 0.17 |
| T-4.4.5 | impl | `application/use-cases/list-products.ts`, `find-by-slug.ts`, `find-featured.ts` | US-4.1 | Use case via port | pending | 0.5 |
| T-4.4.6 | impl | `infrastructure/persistence/prisma-product-repository.ts` | US-4.4 | Implementa port | pending | 0.5 |
| T-4.4.7 | impl | `infrastructure/external/cloudinary-product-image.ts` (mover `product-image.ts`) | US-4.4 | Cloudinary só aqui | pending | 0.33 |
| T-4.4.8 | impl | Atualizar imports em src/app, src/components | US-4.1 | grep antigo retorna zero | pending | 0.5 |
| T-4.4.9 | impl | CLAUDE.md em cada subpasta | US-4.6 | R8 | pending | 0.25 |
| T-4.4.10 | `[TEST]` | Verde | US-4.7 | exit 0 | pending | 0.5 |

### Sub-épicos 4.5 — 4.10

> Sub-épicos `cart/`, `wishlist/`, `auth/`, `coupons/+shipping/`, `payment/+orders/`, `reviews/` seguem o mesmo padrão de T-4.4.X. Detalhamento gerado dinamicamente ao chegar em cada sub-rodada.

**Para cada sub-épico 4.X (X ∈ {5..10}):**
- T-4.X.1 `[TEST]` baseline + escrever testes de regressão das funções existentes
- T-4.X.2 Criar estrutura `domain/`, `application/{use-cases,ports}/`, `infrastructure/{persistence,external}/`, `presentation/`
- T-4.X.3 Mover entities → `domain/`
- T-4.X.4 Definir ports
- T-4.X.5 Migrar use cases
- T-4.X.6 Adapters
- T-4.X.7 Server Actions → `presentation/`
- T-4.X.8 Atualizar imports
- T-4.X.9 CLAUDE.md em cada camada
- T-4.X.10 `[TEST]` Vitest + Playwright verde

---

## Épico 5: Verificação Final

| ID | Tipo | Descrição | Critério BDD | Status | Est (h) |
|---|---|---|---|---|---|
| T-5.1 | `[TEST]` | Suite completa Vitest verde | exit 0 | pending | 0.5 |
| T-5.2 | `[TEST]` | Suite completa Playwright verde | exit 0 | pending | 1 |
| T-5.3 | `[TEST]` | `pnpm build` verde | exit 0 | pending | 0.25 |
| T-5.4 | `[TEST]` | Validator vault+code passa | `node tools/validate-project.js ... --code-path ...` exit 0 | pending | 0.1 |
| T-5.5 | `[TEST]` | Lighthouse Performance >= 90 | Auditoria local | pending | 0.5 |
| T-5.6 | `[TEST]` | Smoke manual: home, cart, login, signup, checkout, admin | Cada fluxo OK | pending | 1 |
| T-5.7 | impl | Atualizar `[[05-Dev-Log]]` com DoD checked | DoD 100% | pending | 0.17 |

---

## Quality Gate

- [x] Artefato foi gerado a partir de `[[Tasks Template]]` como base
- [x] Cada User Story do `[[01-Escopo]]` Módulos 1-4 tem ao menos uma tarefa
- [x] Toda tarefa `impl` é precedida por `[TEST]` (regra TDD)
- [x] IDs sequenciais por épico (T-X.Y)
- [x] Estimativas em horas explícitas

---

## Regras de Execução

1. **Uma tarefa por vez.** Nenhuma `in_progress` em paralelo (exceto Rodada 1, dado o batch nature de criar artefatos canon).
2. **Status `done` exige testes passando.** Não marcar `done` se há teste vermelho.
3. **Erros encontrados** → registrar em `[[06-Erros]]` e propagar conforme `[[Immunological Error Memory]]`.
4. **Decisões técnicas tomadas durante a tarefa** → registrar em `[[05-Dev-Log]]`.
5. **Cada pasta nova criada** → primeiro arquivo deve ser `CLAUDE.md` (R8).

---

## Referências

- `[[01-Escopo]]` — fonte das User Stories
- `[[03-Planejamento]]` — EAP e cronograma
- `[[05-Dev-Log]]` — diário de decisões
- `[[06-Erros]]` — registro local de erros
- `[[Preferencias Dev]]` — stack + Filosofia + Estrutura
- `[[Master Pipeline & Enforcement]]` — matriz canon
