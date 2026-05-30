---
template: "Dev Log"
version: 1.0
status: "Template"
tags:
  - template
  - dev-log
  - progresso
  - decisoes
projeto: "{{PROJECT_NAME}}"
cliente: "{{CLIENT_NAME}}"
data_inicio: "{{START_DATE}}"
---

# 📓 05-Dev-Log — {{PROJECT_NAME}}

> **Nota de Uso:** Template canon para `05-Dev-Log.md`. Inicializado pelo `[[Protocol-Bootstrap]]` no setup do projeto. Atualizado a cada decisão técnica, dependência instalada e fim de sessão.
>
> ⚠️ **Append-only.** Nunca apagar entradas antigas — corrigir com nova entrada referenciando a anterior.

---

## Estado Atual

| Campo | Valor |
|---|---|
| **Timestamp** | YYYY-MM-DD HH:MM |
| **Fase atual** | [Planejamento / Setup / Desenvolvimento / Auditoria / Entrega] |
| **Tarefa em progresso** | T-X.Y (ref a `[[04-Tarefas]]`) |
| **Bloqueios** | [Nenhum / Lista] |

**Resumo em 3 bullets:**
- 
- 
- 

---

## Decisões Tomadas

| Data | Decisão | Justificativa | Impacto | Ref |
|---|---|---|---|---|
| YYYY-MM-DD | | | | T-X.Y / US-X.Y |

---

## Dependências Instaladas (com versão)

| Pacote | Versão | Tipo | Motivo | Data |
|---|---|---|---|---|
| | | prod / dev | | YYYY-MM-DD |

---

## Progresso por Épico

### Épico 1: {{EPIC_1_NAME}}
- [ ] T-1.1
- [ ] T-1.2

### Épico 2: {{EPIC_2_NAME}}
- [ ] T-2.1

---

## Histórico de Sessões

| Data | Hora | Resumo | Log completo |
|---|---|---|---|
| YYYY-MM-DD | HH:MM | [3-5 bullets] | `[[Dev/3 - Session Logs/YYYY-MM-DD_HH-MM]]` |

---

## Pendentes para Próxima Sessão

- [ ] 
- [ ] 

---

## Quality Gate

- [ ] Artefato foi gerado a partir de `[[Dev Log Template]]` como base
- [ ] Estado atual reflete o último timestamp registrado
- [ ] Toda decisão técnica tem justificativa e impacto declarados
- [ ] Dependências instaladas têm versão exata (não `^` ou `~`)
- [ ] Pendentes da sessão anterior foram tratados (resolvidos ou re-pendurados)

---

## Referências

- `[[01-Escopo]]` — escopo do projeto
- `[[04-Tarefas]]` — backlog granular
- `[[06-Erros]]` — registro local de erros
- `[[3 - Session Logs/MEMORY]]` — memória episódica global
- `[[Session Protocol]]` — boot/shutdown canônico
- `[[Protocol-Bootstrap]]` — protocolo que inicializa este arquivo
