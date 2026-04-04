---
título: "Client Onboarding Protocol"
versão: 2.0
status: "Ativo"
tags:
  - protocol
  - onboarding
  - orchestrator
---

# Client Onboarding Protocol

> **Propósito:** Orquestrador do fluxo de onboarding. Define gatilho, visão geral e sequência de delegação para sub-protocolos. Toda lógica de execução está nos sub-protocolos referenciados.

## Gatilho de Ativação

Sempre que o usuário enviar um documento preenchido com a estrutura do `Master Project Planning Template` (PDF, Word, Markdown), a IA executa este protocolo automaticamente.

---

## Fluxo de Execução

```
Documento do cliente recebido
        ↓
[Protocol-Contract] — extrair metadados → gerar 01-Escopo.md + 02-Contrato.md
        ↓
[Protocol-Bootstrap] — gerar 05-Dev-Log.md + 06-Erros.md + setup.js dinâmico
        ↓
[Protocol-SpecKit] — gerar 03-Planejamento.md + 04-Tarefas.md + quality gate
        ↓
Anunciar conclusão: "Pronto para /speckit.implement"
```

---

## Sub-Protocolos

| Sub-Protocolo | Responsabilidade | Artefatos Gerados |
|---|---|---|
| [[Protocol-Contract]] | Extração de metadados, contrato dinâmico, escopo técnico | `01-Escopo.md`, `02-Contrato.md` |
| [[Protocol-Bootstrap]] | Dev-Log, Erros, setup.js dinâmico (lê 01-Escopo.md) | `05-Dev-Log.md`, `06-Erros.md`, `setup.js` |
| [[Protocol-SpecKit]] | Planejamento EAP, tarefas BDD, quality gate final | `03-Planejamento.md`, `04-Tarefas.md` |

---

## Estrutura de Pastas Criada

```
Dev/2 - Projects/[Nicho]/[Cliente-Projeto]/
├── 01-Escopo.md
├── 02-Contrato.md
├── 03-Planejamento.md
├── 04-Tarefas.md
├── 05-Dev-Log.md
├── 06-Erros.md
└── setup.js
```

---

## Regras Gerais

- Documentos de onboarding ficam em `Dev/2 - Projects/[Nicho]/[Projeto]` — nunca em `Freelas/`.
- `Freelas/` contém código. `Dev/` contém documentação.
- `Master Project Planning Template` é a fonte primária. `01-Escopo.md` é a consolidação técnica estruturada.
- `setup.js` é gerado a partir do `01-Escopo.md` finalizado — nunca antes.
- Todos os documentos usam wikilinks `[[]]` para referências internas.
- Stack e metodologia conforme [[Preferencias Dev]].

---

## Referências

- [[Protocol-Contract]] — Passo 1: contrato e escopo
- [[Protocol-Bootstrap]] — Passo 2: bootstrap e setup.js
- [[Protocol-SpecKit]] — Passo 3: planejamento e tarefas
- [[Dynamic Contract Engine]] — cláusulas dinâmicas por classificação
- [[Preferencias Dev]] — stack aprovada e regras inegociáveis
- [[Setup Script Template]] — estrutura do setup.js
