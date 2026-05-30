---
data: 2026-05-30
título: "Pente fino no Vault — Master Pipeline & Enforcement"
status: "Aprovado"
escopo: "Auditoria + refatoração do vault Dev/ para servir como cérebro virtual"
fora_de_escopo:
  - "Melhorias na Preferencias Dev (próxima rodada)"
  - "Evolução de skills em 0.3 - Claude Skills Export"
  - "Projetos ativos em 2 - Projects"
---

# Design — Vault Pente Fino (2026-05-30)

## Contexto

O vault `Dev/` já tinha base sólida: estrutura numerada, 3 camadas de memória, pipeline de projeto, contract engine dinâmico e memória imunológica de erros. As lacunas estavam em **enforcement** (gatilhos → templates não eram declarativos) e em **clareza visual do fluxo** (existia ASCII curto no Project Lifecycle Pipeline, mas faltava diagrama mestre).

O objetivo desta rodada: transformar o vault em cérebro virtual à prova de inferência — todo artefato deve ser produzido por um template canon, todo gatilho declara textualmente qual template aciona, e existe um master flowchart hierárquico (macro + sub-fluxos por fase) servindo como source of truth.

## Lacunas identificadas

1. Fluxograma global ausente (só ASCII curto no Project Lifecycle Pipeline).
2. Trigger → Template não declarado explicitamente em todos os protocolos.
3. Templates faltando para `04-Tarefas.md`, `05-Dev-Log.md`, `06-Erros.md`, `INIT.md` por projeto e `CLAUDE.md` por nicho.
4. Frontmatter do `Requirements & Scope Template` não cobre os campos que `setup.js` lê em runtime (`projeto`, `package_manager`, `frontend_stack`, etc.).
5. `MEMORY.md` desatualizado (última destilação 2026-03-31).
6. Sobreposição entre `Master Project Planning Template` e `Requirements & Scope Project Template` sem fluxo explícito.
7. Boot diverge entre `Session Protocol` (6 passos) e `cognitive-vault-manager/SKILL.md` (4 passos).
8. `TOON-PROMPT.md` contém comandos CLI aspiracionais (`npx dev init/bootstrap/mcp`) e template inline de `claude.md`.

## Decisões do brainstorming

- **Foco da rodada:** fluxograma + enforcement de templates (item 1, 2, 7) + extras transversais (4, 5, 6, 8).
- **Templates faltantes:** criar os 5 novos (item 3).
- **Granularidade:** hierárquico — 1 master macro + sub-fluxos por fase nos protocols.
- **Formato:** Mermaid (renderiza nativo no Obsidian e GitHub).
- **Abordagem arquitetural:** A — Master canônico em arquivo dedicado + protocolos blindados, em vez de inflar o Project Lifecycle Pipeline existente.

## Seção 1 — Arquitetura

### Arquivos novos

| Caminho | Função |
|---|---|
| `Dev/0 - Planner Project/Master Pipeline & Enforcement.md` | Source of truth do macro-fluxo + matriz canon |
| `Dev/1 - Templates/Tasks Template.md` | Base do `04-Tarefas.md` |
| `Dev/1 - Templates/Dev Log Template.md` | Base do `05-Dev-Log.md` |
| `Dev/1 - Templates/Errors Template.md` | Base do `06-Erros.md` |
| `Dev/1 - Templates/Project INIT Template.md` | Base do `INIT.md` da raiz de cada projeto |
| `Dev/1 - Templates/Niche CLAUDE Template.md` | Base do `CLAUDE.md` por nicho/subpasta |

### Arquivos editados

`Dev/CLAUDE.md`, `Dev/INDEX.md`, `Dev/TOON-PROMPT.md`, `Dev/3 - Session Logs/MEMORY.md`, `Dev/redundancias-vault.md`, `Dev/1 - Templates/Requirements & Scope Project Template.md`, `Dev/0 - Planner Project/Session Protocol.md`, `Dev/0 - Planner Project/Client Onboarding Protocol.md`, `Dev/0 - Planner Project/Protocol-Contract.md`, `Dev/0 - Planner Project/Protocol-Bootstrap.md`, `Dev/0 - Planner Project/Protocol-SpecKit.md`, `Dev/0 - Planner Project/Immunological Error Memory.md`, `Dev/0.2 - Audit/Diretrizes.md`.

## Seção 2 — Master Flowchart + Matriz Canon

Macro Mermaid hierárquico com 4 estilos de nó: trigger / phase / artifact / session.

Matriz canon de 16 entradas cobrindo: briefing, master devolvido, escopo aprovado, planning aprovado, setup, dev-log, errors, INIT per-projeto, CLAUDE por nicho, boot, shutdown, erro, auditoria, change request, recorrência ≥ 2.

## Seção 3 — Padrão de blindagem dos protocolos

Cada protocolo recebe em ordem fixa:

1. **Banner ⚠️** declarando GATILHO, TEMPLATE OBRIGATÓRIO, OUTPUT e PRÓXIMO PASSO.
2. **Sub-fluxograma Mermaid** específico da fase.
3. **Quality Gate** com primeiro checkbox sendo "Artefato foi gerado a partir de `[[Template X]]` como base".

Marcador `⚠️` escolhido deliberadamente — a IA é treinada a tratar como bloqueio, o que reforça enforcement.

## Seção 4 — Templates novos (resumo)

**`Tasks Template.md`** — frontmatter com `projeto`, `versão`, `data_criação`. Sections: Visão de épicos, tabela `T-X.Y` (ID, descrição, US-origem, arquivos, BDD, status, owner, est), regra `[TEST]` antes de implementação, status enum `pending|in_progress|blocked|done`.

**`Dev Log Template.md`** — frontmatter com `projeto`, `data_inicio`. Sections: Estado atual (timestamp + 3 bullets), Decisões (data/decisão/justificativa/impacto), Dependências instaladas com versão, Progresso por épico, Pendentes. Append-only.

**`Errors Template.md`** — frontmatter com `projeto`, sincronização global. Schema YAML idêntico ao do `Immunological Error Memory` (id, título, categoria, stack, severidade, sintoma, causa_raiz, solução, prevenção, recorrências, propagado_para_global). Banner "ESPELHADO EM MEMÓRIA IMUNOLÓGICA GLOBAL".

**`Project INIT Template.md`** — frontmatter completo do projeto. Sections: boot_sequence (5 leituras), referências canon ao vault, comandos rápidos. Pequeno, auto-suficiente, fica na raiz do projeto.

**`Niche CLAUDE Template.md`** — frontmatter com `nicho`, `escopo`. Sections: Escopo do diretório, Diretrizes específicas, Stack local, Testes, Dependências permitidas. Substitui o template inline atualmente no `TOON-PROMPT.md`.

## Seção 5 — Extras (correções transversais)

1. **Frontmatter sync no `Requirements & Scope Project Template`** — adicionar `projeto`, `package_manager`, `frontend_stack`, `backend_stack`, `cloud_stack`, `dependencies`, `email_service`, `storage_service`, `payment_gateway`. Sem isso `setup.js` quebra na leitura via `get()`.

2. **Boot unificado** — `Session Protocol` ganha header "ESTE É O CANON DE BOOT". `MEMORY.md` resolve o problema em aberto.

3. **`TOON-PROMPT.md` cleanup** — remover seção "Comandos CLI" (aspiracional), template inline de `claude.md` (vira link ao `Niche CLAUDE Template`), lista hardcoded de skills (delegar à pasta `0.3`), referenciar `Project INIT Template` no lugar da sequência YAML inline.

4. **`MEMORY.md` refresh** — estado atual reflete a rodada de pente fino. Problemas em aberto resolvidos.

5. **`redundancias-vault.md` update** — marcar como ✅ os 4 itens pendentes (resolvidos via Master Pipeline + INDEX refatorado).

## Critérios de sucesso

- Todo artefato listado na matriz canon é produzido a partir do template canon — não há mais "estrutura livre" sem template.
- A IA, ao processar qualquer gatilho da coluna 1 da matriz, sabe sem inferência qual template usar (declarado em banner ⚠️).
- O Master Pipeline & Enforcement renderiza corretamente em Obsidian e GitHub.
- `setup.js` consegue ler todos os campos esperados do frontmatter do `01-Escopo.md`.
- `MEMORY.md` reflete estado real.
- Não há mais comandos CLI aspiracionais no `TOON-PROMPT.md`.
- Boot de sessão tem um único canon (`Session Protocol`).

## Fora desta rodada

- **`Preferencias Dev`** — próxima rodada explícita do usuário.
- **`0.3 - Claude Skills Export/`** — sem alterações.
- **Projetos ativos em `2 - Projects/`** — sem alterações.
- **`Audit Template`** já existe; só ganha banner de gatilho na Diretrizes, sem reescrita.

## Referências

- `Dev/0 - Planner Project/Project Lifecycle Pipeline.md` — pipeline existente (mantido, ganha link ao Master)
- `Dev/0 - Planner Project/Session Protocol.md` — boot canônico
- `Dev/0 - Planner Project/Client Onboarding Protocol.md` — orquestrador
- `Dev/0 - Planner Project/Immunological Error Memory.md` — sistema de erros
- `Dev/redundancias-vault.md` — auditoria anterior de redundâncias
