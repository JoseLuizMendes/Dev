---
template: "Dev Log"
version: 1.0
status: "Ativo"
tags:
  - dev-log
  - progresso
  - decisoes
projeto: "Site e Hub da Clinica"
cliente: "Dr. Gabriel Cavalcanti"
data_inicio: "2026-09-16"
---

# 📓 05-Dev-Log — Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Nota de Uso:** Inicializado pelo `[[Protocol-Bootstrap]]`. Atualizado a cada decisão técnica, dependência instalada e fim de sessão.
>
> ⚠️ **Append-only.** Nunca apagar entradas antigas — corrigir com nova entrada referenciando a anterior.

---

## Estado Atual

| Campo | Valor |
|---|---|
| **Timestamp** | 2026-09-21 13:00 |
| **Fase atual** | Desenvolvimento — Épico 0 concluído, Épico 1 em especificação |
| **Tarefa em progresso** | Nenhuma — Épico 0 (T-0.1…T-0.6) concluído; próxima: T-1.1 |
| **Bloqueios** | T-7.9/T-7.10 (mídia do hero) · `DESIGN.md` nasce na T-2.2 — *provedor de e-mail resolvido em 21/09 (Resend), T-1.13/T-1.14 desbloqueadas* |

**Resumo em 3 bullets:**
- F0 (limpeza e correções críticas) mergeável no PR #1: cadastro público removido, hub em `/hub`, `JWT_SECRET` obrigatório.
- Pipeline canon aplicado: 01-Escopo, 02-Contrato, 03-Planejamento, 04-Tarefas, constituição SpecKit v1.0.0.
- Tooling instalado no repo (SpecKit, Impeccable, Higgsfield, skills Next.js, DX, Playwright) no branch `chore/sdd-bootstrap`.

---

## Decisões Tomadas

| Data | Decisão | Justificativa | Impacto | Ref |
|---|---|---|---|---|
| 2026-09-17 | Site na raiz + hub em `/hub` (login `/hub/login`), um app só | Cookie first-party, um deploy; subdomínio só se o hub crescer | Proxy protege só `/hub/*`; `robots` bloqueia `/hub/` | PR #1 |
| 2026-09-17 | Papéis `OWNER`/`STAFF`, sem cadastro público; 1º acesso via `scripts/seed-owner.mjs` | Sistema mono-tenant com dados de saúde | `POST /api/users` só OWNER | US-1.4 |
| 2026-09-17 | Grafia oficial **Cavalcanti** | Confirmado pelo dev (domínio e site atual) | Código/documentos atualizados; pasta do vault e repo mantêm o nome antigo | — |
| 2026-09-17 | `.env` local aponta para o branch Neon `dev` | Branch `production` era usado localmente | App e migrações no mesmo branch; backup `.env.bak-20260917-152003` | US-10.3 |
| 2026-09-18 | Validação de env em dois tempos: preguiçosa em `src/lib/env.ts` + `getServerEnv()` no boot via `instrumentation.ts` | Validação só no import quebrava o `next build` da Vercel; validação só preguiçosa deixava o servidor subir com segredo inválido (fere o princípio III) | Build sem env conclui; boot sem env recusa nomeando a variável | T-0.3/T-0.4 |
| 2026-09-18 | Banco de testes protegido por tabela marcadora `_e2e_test_marker`, não por nome de host | Uma `DATABASE_URL` copiada errado passaria por qualquer checagem de nome; a marcadora é o próprio banco dizendo o que é | Reset e seed recusam qualquer banco sem a marcadora; 0 escrita em `dev`/`production` | T-0.5/T-0.6 |
| 2026-09-18 | `output: standalone` vira opt-in (`BUILD_STANDALONE=1`) no `next.config.ts` | Era o padrão fora da Vercel e impedia `next start`, de que a suíte E2E depende para servir na porta 3101 | Caminho de contêiner segue disponível sob demanda; alvo aprovado continua a Vercel | T-0.1 |
| 2026-09-18 | Exceção R8 estendida a `e2e/`, `scripts/` e `src/test/` | Não são conteúdo gerado por ferramenta, então a exceção de `skills/*` não se aplica — cada uma ganhou `CLAUDE.md` próprio | Três `CLAUDE.md` novos | R8 |
| 2026-09-21 | Provedor de e-mail: **Resend** | Primeira opção do dev para a recuperação de senha (US-1.7); integração atrás da porta `EmailSender`, então trocar depois não muda requisito | Desbloqueia T-1.13/T-1.14; justificativa de dependência nova exigida pelo princípio VI | US-1.7 |
| 2026-09-21 | Rotação da senha do Neon e separação do `JWT_SECRET` entre dev e produção adiadas para antes do go-live | Credenciais atuais trafegaram por chat durante o setup das duas máquinas; valem só enquanto o projeto não está no ar | Dívida registrada; obrigatória antes do deploy público | US-10.3 |
| 2026-09-18 | **Exceção R7:** Drizzle ORM no lugar de Prisma | Back já em Drizzle; driver nativo Neon | Constituição §Restrições | Constituição v1.0.0 |
| 2026-09-18 | **Exceção R7:** sessão própria no banco no lugar de Auth.js v5 | Credentials do Auth.js v5 exige JWT não revogável (ERR-2026-0003); baseline exige revogação | Épico 1 (T-1.1–T-1.4) | US-1.1, US-1.2 |
| 2026-09-18 | **Exceção R7:** ECharts mantido no gráfico financeiro (exceção C6) | Zoom por pinça/roda nativo | Reavaliar em T-8.4 | US-6.2 |
| 2026-09-18 | Arquitetura **Layered** (5×1 nos sinais) com contextos em `src/lib/<contexto>` | Canal único, 1 dev, domínio médio | Rotas finas; refactor progressivo por épico | [[03-Planejamento]] §1 |
| 2026-09-18 | Deploy **Vercel** + Neon | Porte pequeno/médio | [[Deploy Protocol]] Vercel | T-10.7 |
| 2026-09-18 | 7 perguntas ao doutor viram **padrões configuráveis** | Decisão do dev; princípio IV | Tabela em [[01-Escopo]] §5.4 | Módulo 8 |
| 2026-09-18 | `zustand` e `nuqs` **não instalados** no bootstrap | Nenhuma User Story exige (princípio VI, YAGNI); estado de servidor via React Query | Instalar só com US que precise | — |
| 2026-09-18 | `tsconfig`: não adicionados `noImplicitOverride`/`types: ["vitest/jsdom"]` do Setup Script Template | Projeto existente já `strict`; `types` restrito quebraria tipos globais atuais | Reavaliar em T-0.2 | — |
| 2026-09-18 | Docs não-canon movidos para `referencias/` (diagnóstico, hero, IA) | Numeração 03–05 reservada aos artefatos canon | Links atualizados | — |
| 2026-09-18 | **Exceção R8 proposta (aguardando ratificação):** subpastas de `.claude/skills/*`, `.agents/skills/*` e internals de `.specify/` sem `CLAUDE.md` próprio; `CLAUDE.md` nas raízes (`.claude`, `.agents`, `.specify`, `.husky`, `public`) declara o conteúdo como gerenciado pela ferramenta | Conteúdo de terceiros regenerado por `npx skills`/`specify init` (edição manual se perde) | Alternativa: gitignorar skills e restaurar via `skills-lock.json` | R8 |
| 2026-09-18 | Prettier **não** aplicado em massa | Diff gigante sem valor; lint-staged formata o que for tocado | Formatação progressiva | — |

---

## Dependências Instaladas (com versão)

| Pacote | Versão | Tipo | Motivo | Data |
|---|---|---|---|---|
| gsap | 3.15.0 | prod | Stack base (animações) | 2026-09-18 |
| @gsap/react | 2.1.2 | prod | `useGSAP` obrigatório | 2026-09-18 |
| lenis | 1.3.26 | prod | Smooth scroll do site público | 2026-09-18 |
| react-hook-form | 7.88.0 | prod | Forms (stack base) | 2026-09-18 |
| @hookform/resolvers | 5.9.1 | prod | RHF + Zod | 2026-09-18 |
| zod | 4.6.5 | prod | Validação client/server + env | 2026-09-18 |
| prettier | 3.9.7 | dev | DX obrigatória | 2026-09-18 |
| prettier-plugin-tailwindcss | 0.8.1 | dev | DX obrigatória (ordem de classes) | 2026-09-18 |
| husky | 9.1.7 | dev | DX obrigatória (hook pre-commit) | 2026-09-18 |
| lint-staged | 17.5.1 | dev | DX obrigatória | 2026-09-18 |
| @playwright/test | 1.63.0 | dev | E2E de todos os critérios BDD | 2026-09-18 |
| @testing-library/react | 16.3.3 | dev | Testes de componente | 2026-09-18 |
| @testing-library/jest-dom | 7.0.1 | dev | Matchers de DOM | 2026-09-18 |
| jsdom | 30.1.0 | dev | Ambiente Vitest | 2026-09-18 |
| @vitejs/plugin-react | 6.1.1 | dev | Vitest com React | 2026-09-18 |
| SpecKit (specify CLI) | 1.0.9.dev0 | tooling | `specify init --here --integration claude --script ps` | 2026-09-18 |
| Impeccable (skill) | lock: `skills-lock.json` | tooling | Design QA | 2026-09-18 |
| Higgsfield skills (8) | lock: `skills-lock.json` | tooling | Mídia (midia: sim) | 2026-09-18 |
| Skills Next.js (5) | lock: `skills-lock.json` | tooling | Next 16 — instalado com `core.longpaths` por env (limite de caminho do Windows) | 2026-09-18 |

---

## Progresso por Épico

### Épico 0: Fundação SDD, DX e Testes
- [ ] T-0.1 · [ ] T-0.2 · [ ] T-0.3 · [ ] T-0.4 · [ ] T-0.5 · [ ] T-0.6

### Épico 1: Acesso, Sessão e Equipe
- [ ] T-1.1 … T-1.15

### Épico 2: Design System e Acessibilidade
- [ ] T-2.1 … T-2.6

### Épicos 3–10
- [ ] Ver [[04-Tarefas]]

---

## Histórico de Sessões

| Data | Hora | Resumo | Log completo |
|---|---|---|---|
| 2026-09-16 | — | Diagnóstico inicial, plano em fases, character do doutor, conceito do hero "A Porta" | [[00-Diagnostico-Inicial]] |
| 2026-09-17 | — | F0 executada e testada; hub em `/hub`; grafia Cavalcanti; branch Neon `dev` | PR #1 |
| 2026-09-18 | — | F1 (IA), constituição, 01–06, setup.js, INIT.md, tooling | Este log |

---

## Pendentes para Próxima Sessão

- [x] `impeccable init` → `PRODUCT.md` (marca: Dr. Gabriel Cavalcanti; build path: code-first; logo, fotos reais e depoimentos autorizados existem e aguardam envio)
- [ ] Merge do PR #1 (F0) e do PR #2 (bootstrap SDD)
- [ ] Dev: `JWT_SECRET` de produção na Vercel
- [ ] Dev: responder pendências de contrato/escopo (valor, datas, PO, provedor de e-mail, acesso ao registro.br)
- [ ] Iniciar T-0.1 via `/speckit-specify` (feature `001-fundacao-testes`)

---

## Quality Gate

- [x] Artefato foi gerado a partir de `[[Dev Log Template]]` como base
- [x] Estado atual reflete o último timestamp registrado
- [x] Toda decisão técnica tem justificativa e impacto declarados
- [x] Dependências instaladas têm versão exata (não `^` ou `~`)
- [x] Pendentes da sessão anterior foram tratados (resolvidos ou re-pendurados)

---

## Referências

- `[[01-Escopo]]` — escopo do projeto
- `[[04-Tarefas]]` — backlog granular
- `[[06-Erros]]` — registro local de erros
- `[[3 - Session Logs/MEMORY]]` — memória episódica global
- `[[Session Protocol]]` — boot/shutdown canônico
- `[[Protocol-Bootstrap]]` — protocolo que inicializa este arquivo
