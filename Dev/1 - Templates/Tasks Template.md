---
template: "Tasks"
version: 1.0
status: "Template"
tags:
  - template
  - tarefas
  - backlog
  - tdd
  - sdd
projeto: "{{PROJECT_NAME}}"
cliente: "{{CLIENT_NAME}}"
fonte: "[[01-Escopo]] + [[03-Planejamento]]"
data_criacao: "{{DATA_CRIACAO}}"
---

# 📋 04-Tarefas — {{PROJECT_NAME}}

> **Nota de Uso:** Template canon para `04-Tarefas.md`. Gerado a partir de `[[03-Planejamento]]` via `/speckit.tasks`. Cada tarefa rastreia uma User Story do `[[01-Escopo]]`.
>
> **Papel no fluxo:** `[[Protocol-SpecKit]]` aciona este template após `03-Planejamento.md` aprovado. Output: `04-Tarefas.md` na raiz do projeto.
>
> ⚠️ **Regra TDD inegociável:** toda tarefa `impl` é precedida pela tarefa `[TEST]` correspondente. Nenhuma exceção.

---

## Status enum

- `pending` — não iniciada
- `in_progress` — em desenvolvimento (apenas 1 task por vez)
- `blocked` — bloqueada por dependência ou decisão pendente
- `done` — testes passando + critério BDD validado

---

## Épico 1: {{EPIC_1_NAME}}

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-1.1 | `[TEST]` | [Escrever teste do critério BDD da US-1.1] | US-1.1 | `*.test.ts` | GIVEN [ctx] WHEN [ação] THEN [resultado] | pending | Dev | 1 |
| T-1.2 | impl | [Implementar mínimo para passar T-1.1] | US-1.1 | `[arquivos fonte]` | T-1.1 verde | pending | Dev | 2 |
| T-1.3 | refactor | [Limpar código mantendo testes verdes] | US-1.1 | `[arquivos fonte]` | T-1.1 ainda verde | pending | Dev | 1 |

## Épico 2: {{EPIC_2_NAME}}

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.1 | `[TEST]` | | US-2.1 | | | pending | | |
| T-2.2 | impl | | US-2.1 | | | pending | | |

---

## Quality Gate (antes de iniciar implementação)

- [ ] Artefato foi gerado a partir de `[[Tasks Template]]` como base (não escrito do zero, não versão resumida)
- [ ] Cada User Story do `[[01-Escopo]]` tem pelo menos uma tarefa correspondente
- [ ] Toda tarefa `impl` é precedida por uma tarefa `[TEST]`
- [ ] IDs sequenciais por épico (`T-X.Y`)
- [ ] Critérios BDD copiados literalmente do `[[01-Escopo]]`
- [ ] Stack de cada arquivo afetado alinhada com `[[Preferencias Dev]]`

---

## Regras de Execução

1. **Uma tarefa por vez.** Nenhuma `in_progress` em paralelo.
2. **Status `done` exige testes passando.** Não marcar `done` se há teste vermelho.
3. **Erros encontrados** → registrar em `[[06-Erros]]` e propagar conforme `[[Immunological Error Memory]]`.
4. **Decisões técnicas tomadas durante a tarefa** → registrar em `[[05-Dev-Log]]`.

---

## Referências

- `[[01-Escopo]]` — fonte das User Stories
- `[[03-Planejamento]]` — EAP e cronograma
- `[[05-Dev-Log]]` — diário de decisões
- `[[06-Erros]]` — registro local de erros
- `[[Preferencias Dev]]` — stack e regras inegociáveis
- `[[Protocol-SpecKit]]` — protocolo que aciona este template
