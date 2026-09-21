---
template: "Planning"
version: 1.1
status: "Aprovado pelo dev (2026-09-18)"
tags:
  - planejamento
  - sdd
  - tdd
  - spec-driven
cliente: "Dr. Gabriel Cavalcanti"
nicho: "Saude"
classificacao: "Full-stack do Zero"
data_inicio: "2026-09-16"
data_entrega: "[PENDENTE — perguntar ao dev: data de entrega acordada com o cliente]"
---

# 📐 Plano de Execução Técnico: Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Fonte:** Gerado a partir do `[[01-Escopo]]` via `/speckit.plan` (nível de projeto). Nenhum código é gerado antes da aprovação deste documento.
> Cada épico, ao entrar em execução, passa pelo ciclo SpecKit **por feature** no repositório
> (`/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-analyze` → `/speckit-implement`), gerando `specs/NNN-*/`.
> Constituição do projeto: `.specify/memory/constitution.md` (v1.0.0). Contexto: [[00-Diagnostico-Inicial]] · [[Arquitetura-Informacao]] · [[Hero-Door-Reveal]].

---

## 1. Resumo Executivo

- **Objetivo:** substituir a landing de terceiro por um site próprio que converte visitantes em avaliações
  (WhatsApp por unidade) e entregar um hub onde doutor e equipe operam agenda, pacientes, financeiro,
  relatórios e o conteúdo do site sem depender do dev.
- **Resultado esperado:** site público (home com hero "A Porta", tratamentos, unidades, sobre, contato,
  privacidade) + hub em `/hub` com sessões revogáveis, permissões por papel, duas unidades com grade própria,
  CMS do site e relatórios responsivos — publicado na Vercel com Neon.
- **Prazo total:** 2026-09-16 → [PENDENTE — perguntar ao dev: data de entrega]
- **KPIs de sucesso:** LCP < 2.5s | INP < 200ms | CLS < 0.1 | WCAG 2.1 AA | 100% dos critérios BDD com E2E

**Decisão de arquitetura (obrigatória — [[Preferencias Dev]] §Filosofia §3):**

| Sinal | Avaliação no projeto | Aponta para |
|---|---|---|
| Domínio | Médio (agenda com fases/conflitos, permissões, financeiro simples) | Layered |
| Canais de I/O | Único (HTTP: site + hub) | Layered |
| Probabilidade de trocar infra | Baixa (Neon + Vercel) | Layered |
| Isolamento de testes | Importante (agenda/financeiro) | Hexagonal |
| Time-to-market | Curto/médio | Layered |
| Time | 1 dev | Layered |

**Resultado: Layered (5×1)** na variante "Next.js Standalone Fullstack" com contextos em `src/lib/<contexto>/`
(`equipe`, `unidades`, `agenda`, `pacientes`, `financeiro`, `relatorios`, `site`, `auditoria`). Regras de negócio
puras em funções sem I/O (testáveis sem mock); acesso a dados isolado em módulos `*.repo.ts` do contexto.
Promoção a Hexagonal permitida se o domínio crescer (registrar no [[05-Dev-Log]]).

**Estratégia de testes:** Vitest (regras puras + rotas com repositório substituído por fake em memória) ·
integração de repositórios contra branch Neon `test` (reset a partir do `dev` antes da suíte) · Playwright E2E
contra `next dev` com banco `test` semeado · relógio fixo para fases da agenda.

---

## 2. Estrutura Analítica do Projeto (EAP)

> Granularidade completa (TEST → impl → refactor por User Story) em [[04-Tarefas]]. Estimativas em horas.

### Épico 0: Fundação SDD, DX e Testes
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-0.1 – T-0.2 | Smoke de testes (Vitest + Playwright) e DX obrigatória (Prettier, Husky, lint-staged, EditorConfig) | — | 3 | pending |
| T-0.3 – T-0.4 | Env validada com zod no boot | T-0.2 | 2 | pending |
| T-0.5 – T-0.6 | Infra de teste: branch Neon `test`, seed e helpers E2E | T-0.2 | 4 | pending |

### Épico 1: Acesso, Sessão e Equipe (US-1.1 – US-1.7)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-1.1 – T-1.4 | Sessão no banco (login/logout revogável) | T-0.6 | 8 | pending |
| T-1.5 – T-1.6 | Anti-enumeração + rate limit de auth | T-1.2 | 5 | pending |
| T-1.7 – T-1.10 | Gestão da equipe + matriz de permissões por papel | T-1.2 | 8 | pending |
| T-1.11 – T-1.14 | Troca de senha + recuperação (e-mail) | T-1.2 | 6 | pending |
| T-1.15 | Refactor: auth/equipe para `src/lib/equipe` | T-1.14 | 2 | pending |

### Épico 2: Design System e Acessibilidade (US-9.1 – US-9.3)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-2.1 – T-2.2 | Tokens da marca (claro/escuro), tipografia, `DESIGN.md` | T-0.2 | 8 | pending |
| T-2.3 – T-2.4 | Regra de lint anti-HTML-puro + primitivos faltantes (Form/Field, Switch, RadioGroup, Tooltip, Dialog, Combobox, FileUpload) | T-2.2 | 10 | pending |
| T-2.5 – T-2.6 | Foco visível, alvos 44px e navegação por teclado | T-2.4 | 5 | pending |

### Épico 3: Unidades e Horários (US-2.1 – US-2.3)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-3.1 – T-3.2 | Tabela `units` + CRUD (migração no branch `dev`) | T-1.10 | 6 | pending |
| T-3.3 – T-3.4 | Horários/intervalos por unidade | T-3.2 | 6 | pending |
| T-3.5 – T-3.6 | Exceções por unidade | T-3.4 | 3 | pending |

### Épico 4: Agenda (US-3.1 – US-3.4)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-4.1 – T-4.8 | Agendar com unidade, filtro por unidade, bloqueios (passado/grade/conflito), status e fases | T-3.6 | 14 | pending |

### Épico 5: Pacientes (US-4.1 – US-4.3)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-5.1 – T-5.6 | Lista pesquisável, cadastro/edição, ficha com histórico e odontograma (STAFF leitura) | T-4.8 | 12 | pending |

### Épico 6: Conteúdo do Site — CMS (US-8.1 – US-8.5)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-6.1 – T-6.10 | Tratamentos (site + agenda), textos, depoimentos, FAQ, flag de garantia, revalidação ao publicar | T-3.2 | 16 | pending |

### Épico 7: Site Público (US-7.1 – US-7.7)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-7.1 – T-7.14 | Home-funil, páginas de tratamento/unidade, WhatsApp, hero "A Porta" (GSAP+Lenis), privacidade, SEO | T-6.10, T-2.6 | 30 | pending |

### Épico 8: Relatórios (US-6.1 – US-6.2)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-8.1 – T-8.4 | KPIs por período/unidade + `ChartCard` responsivo com tabela alternativa (decisão ECharts × Recharts) | T-4.8 | 10 | pending |

### Épico 9: Financeiro (US-5.1 – US-5.2)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-9.1 – T-9.4 | Recebimentos (tabela `payments`) + visão recebido/pendente | T-5.6 | 10 | pending |

### Épico 10: Operação, Segurança e Entrega (US-10.1 – US-10.3)
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-10.1 – T-10.6 | Auditoria, headers (CSP), backup/PITR verificado | T-9.4 | 8 | pending |
| T-10.7 | Checklists SEO/segurança do [[Frontend Creative Protocol]] + auditoria (3 agentes) + [[Deploy Protocol]] | T-10.6 | 6 | pending |

**Total estimado:** ~176 h de implementação (sem contar UAT e produção de mídia).

---

## 3. Cronograma e Marcos

| Fase | Descrição | Prazo | Status |
|---|---|---|---|
| **1. Discovery & Design** | Diagnóstico, IA, escopo, constituição (✅) + Épico 2 (Design System) + mídia do hero | Sprint 1–2 · [PENDENTE — datas] | in_progress |
| **2. Fundação Técnica** | Épicos 0, 1 e 3 (DX, sessões, equipe, unidades) | Sprint 2–3 · [PENDENTE — datas] | pending |
| **3. Integrações & Lógica Core** | Épicos 4, 5, 6 e 9 (agenda, pacientes, CMS, financeiro) | Sprint 4–6 · [PENDENTE — datas] | pending |
| **4. Polish & UX** | Épicos 7 e 8 (site público com GSAP/Lenis, relatórios responsivos) | Sprint 6–8 · [PENDENTE — datas] | pending |
| **5. QA & Go-Live** | Épico 10 + UAT + deploy (domínio, HTTPS, smoke test) | Sprint 9 · [PENDENTE — datas] | pending |

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend | Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui + React Query + RHF + Zod | Conforme [[Preferencias Dev]] |
| Backend | Next.js Route Handlers finos → `src/lib/<contexto>` (Layered) | Candidato aprovado ("route handlers do Next standalone") — [[Preferencias Dev]] §Escolha de Backend |
| Banco de Dados | Neon Postgres + **Drizzle ORM** | **Exceção aprovada** (2026-09-18) ao Prisma — back já em Drizzle, driver nativo Neon |
| Auth | **Sessão própria no banco** (bcrypt + cookie httpOnly id opaco) | **Exceção aprovada** ao Auth.js v5 — Credentials exige JWT não revogável (ERR-2026-0003) |
| Infra | Vercel + Neon (`production`, `dev`, `test`) | Porte pequeno/médio — [[Deploy Protocol]] |
| Mídia | Cloudinary (upload assinado) + AVIF/WebP | Já integrado; formatos canon |
| Gráficos | ECharts (financeiro, exceção C6) + Recharts | Revisão no Épico 8 |
| Animações | GSAP + Lenis | `useGSAP` obrigatório; só no site público |
| Testes | Vitest + Playwright | TDD obrigatório. Cobertura total dos critérios BDD |

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado em `[[4 - Error's Memory/INDEX]]` antes de finalizar este plano (2026-09-18).

| ERR-ID | Título | Stack Afetada | Mitigação Aplicada |
|---|---|---|---|
| ERR-2026-0003 | Auth.js v5 com Credentials exige `session.strategy='jwt'` | Next-Auth | Fundamenta a exceção: sessão própria no banco (revogável) em vez de Auth.js |
| ERR-2026-0006 | Dados privados em `localStorage` global vazavam entre usuários | React/Zustand | Constituição III: nada privado em `localStorage` global; `queryClient.clear()` no logout (✅ F0); preferências da agenda com chave por usuário |
| ERR-2026-0007 | Regex de frontmatter sem tolerância a CRLF | Scripts Node (Windows) | `setup.js` normaliza `\r\n → \n` logo após `readFileSync` |
| ERR-2026-0001/0002 | Artefatos resumidos/fora do template | Processo | Todos os artefatos gerados a partir dos templates canon, seções N/A explícitas |

---

## 6. Mitigação de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Mídia do hero "A Porta" inconsistente (Veo errou 3×) | Alta | Médio | Plano C em código (camadas + CSS 3D) documentado em [[Hero-Door-Reveal]]; hero não bloqueia o resto do site |
| Respostas do doutor mudarem os padrões assumidos | Alta | Baixo | Princípio IV: padrões são dados configuráveis |
| Publicidade fora das regras do CFO (garantia, resultados) | Média | Alto | Bloco de garantia desligado por padrão; copy validada pelo doutor antes do go-live |
| Migração de dados (unidade em horários/agendamentos) | Média | Médio | Migração com default da unidade 1, aplicada no branch `dev` e validada antes de `production` |
| Vazamento de dados de pacientes | Baixa | Crítico | Constituição III + auditoria + checklist de segurança antes do deploy |
| Acesso ao domínio (registro.br) indisponível no go-live | Média | Alto | Levantar acesso na Fase 1; deploy em subdomínio da Vercel para UAT |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** check do dev a cada épico concluído (PR + resumo); com o cliente a cada marco do cronograma — [PENDENTE — perguntar ao dev: frequência e canal com o cliente]
- **Link de homologação:** deploy de preview da Vercel por PR (branch Neon por preview quando aplicável)
- **Critérios de UAT:** Todas as User Stories do `[[01-Escopo]]` validadas pelo cliente
- **Feedback:** Documentado em `[[05-Dev-Log]]`

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as User Stories implementadas com testes passando (TDD)
- [ ] Cobertura E2E (Playwright) completa
- [ ] Testes unitários (Vitest) cobrindo lógica crítica
- [ ] Performance: LCP < 2.5s | INP < 200ms | CLS < 0.1
- [ ] Acessibilidade: WCAG 2.1 AA validado
- [ ] Código auditado pelos 3 agentes sem violações
- [ ] Documentação completa entregue

---

## Referências

- [[01-Escopo]] — Fonte dos requisitos
- [[02-Contrato]] — Contrato do projeto
- [[04-Tarefas]] — Lista granular de tarefas
- [[Preferencias Dev]] — Stack, metodologia e regras de qualidade
- [[4 - Error's Memory/INDEX]] — Memória imunológica consultada
