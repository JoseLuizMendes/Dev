---
título: "Vault Index"
versão: 1.0
status: "Ativo"
tags:
  - index
  - navegação
  - vault
---

# Dev Vault — Índice de Navegação

> **Leia este arquivo primeiro.** Funciona com ou sem MCP do Obsidian — é navegável via sistema de arquivos puro.
> Qualquer agente deve começar aqui antes de executar qualquer tarefa.

---

## Estrutura do Vault

```
Dev/
├── INDEX.md                        ← você está aqui
├── 0 - Planner Project/            ← cérebro operacional
├── 1 - Templates/                  ← moldes reutilizáveis
├── 2 - Projects/                   ← projetos ativos por nicho
├── 3 - Session Logs/               ← registro de sessões
├── 4 - Error's Memory/             ← memória imunológica
└── 9 - Archive/                    ← projetos encerrados
```

---

## 0 - Planner Project (leitura obrigatória no boot)

| Arquivo | Propósito | Ler quando |
|---|---|---|
| [[Preferencias Dev]] | Stack aprovada, metodologia, regras inegociáveis | Sempre — boot de sessão |
| [[Client Onboarding Protocol]] | Orquestrador do fluxo de onboarding | Ao receber briefing de cliente |
| [[Protocol-Contract]] | Geração do contrato dinâmico | Via Client Onboarding Protocol |
| [[Protocol-Bootstrap]] | Geração do setup.js e estrutura de pastas | Via Client Onboarding Protocol |
| [[Protocol-SpecKit]] | Inicialização do Spec-Kit SDD+TDD | Via Client Onboarding Protocol |
| [[Dynamic Contract Engine]] | Lógica de cláusulas dinâmicas por classificação | Via Protocol-Contract |
| [[Project Lifecycle Pipeline]] | Fluxo completo do ciclo de vida | Referência durante desenvolvimento |
| [[Session Protocol]] | Boot e shutdown de sessão | Início e fim de cada sessão |
| [[Immunological Error Memory]] | Como registrar e propagar erros | Ao encontrar bugs recorrentes |
| [[Cognitive Vault Architecture]] | Arquitetura geral do vault | Ao modificar estrutura do vault |

---

## 1 - Templates (usar como base, nunca editar diretamente)

| Template | Usado para |
|---|---|
| [[Requirements & Scope Project Template]] | Gerar `01-Escopo.md` de cada projeto |
| [[Contract Template]] | Gerar `02-Contrato.md` via Protocol-Contract |
| [[Planning Template]] | Gerar `03-Planejamento.md` |
| [[Setup Script Template]] | Gerar `setup.js` via Protocol-Bootstrap |
| [[Session Log Template]] | Gerar entradas em `3 - Session Logs/` |

---

## 2 - Projects (projetos ativos)

```
2 - Projects/
└── [Nicho]/
    └── [Cliente-Projeto]/
        ├── 01-Escopo.md       ← requisitos + US + BDD
        ├── 02-Contrato.md     ← contrato dinâmico assinado
        ├── 03-Planejamento.md ← EAP, cronograma, riscos, DoD
        ├── 04-Tarefas.md      ← backlog granular TDD
        ├── 05-Dev-Log.md      ← registro de progresso
        ├── 06-Erros.md        ← erros do projeto (propagados ao global)
        └── setup.js           ← bootstrap portátil do projeto
```

**Projetos ativos:**
- [[Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/01-Escopo|Advocacia / Ana Souza — Site Institucional]]

---

## 4 - Error's Memory (memória imunológica)

| Arquivo | Propósito |
|---|---|
| [[4 - Error's Memory/INDEX]] | Índice global + estatísticas |
| [[GLOBAL-ERRORS]] | Aprendizados transversais |
| `by-category/` | Erros por categoria |
| `by-stack/` | Erros por tecnologia |

---

## Entrypoints por tarefa comum

| Tarefa | Por onde começar |
|---|---|
| Novo cliente / onboarding | [[Client Onboarding Protocol]] |
| Implementar tarefa do backlog | `04-Tarefas.md` do projeto → [[Preferencias Dev]] |
| Registrar erro encontrado | [[4 - Error's Memory/INDEX]] → [[Immunological Error Memory]] |
| Gerar contrato | [[Protocol-Contract]] + [[Dynamic Contract Engine]] |
| Criar setup do projeto | [[Protocol-Bootstrap]] + [[Setup Script Template]] |
| Revisar stack aprovada | [[Preferencias Dev]] |
| Iniciar sessão | [[Session Protocol]] |

---

## Convenções do Vault

- Wikilinks `[[]]` obrigatórios em todas as referências internas
- Frontmatter YAML obrigatório em todos os arquivos de configuração e template
- Erros do projeto sempre propagados de `06-Erros.md` → `[[4 - Error's Memory/INDEX]]`
- `setup.js` de cada projeto lê `01-Escopo.md` em runtime — nunca tem conteúdo hardcoded
- Nenhum código de produção fora de `Freelas/` (o vault é cognitivo, não de código)
