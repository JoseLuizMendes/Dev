---
módulo: M1
título: "Cognitive Vault Architecture"
versão: 1.0
status: "Ativo"
tags:
  - planner-mode
  - vault-architecture
  - phase-one
---

# M1 — Cognitive Vault Architecture

Este módulo define **como o vault `Dev/` é organizado** e **como os agentes de IA navegam** pela estrutura de conhecimento. O vault funciona como o córtex central do agente — uma infraestrutura de memória persistente otimizada para ingestão por máquina.

---

## Estrutura de Pastas Definitiva

```
Dev/
├── 0 - Planner Project/          ← Meta-documentação e visão do sistema
│   ├── Cognitive Vault Architecture.md
│   ├── Session Protocol.md
│   ├── Project Lifecycle Pipeline.md
│   ├── Dynamic Contract Engine.md
│   ├── Immunological Error Memory.md
│   └── Preferencias Dev.md
│
├── 0.1 - Methodology/            ← Agentes norteadores (3 arquivos)
│   ├── ai-portfolio-product-strategist.md
│   ├── ai-web-designer-agent.md
│   └── ai-portfolio-copy-architect.md
│
├── 0.2 - Audit/                  ← Templates e logs de auditoria
│
├── 1 - Templates/                ← Templates reutilizáveis
│   ├── Contract Template.md
│   ├── Requirements & Scope Project Template.md
│   ├── Planning Template.md
│   └── Session Log Template.md
│
├── 2 - Projects/                 ← Projetos isolados por nicho
│   └── [Nicho]/
│       └── [Cliente-Projeto]/
│           ├── 01-Escopo.md
│           ├── 02-Contrato.md
│           ├── 03-Planejamento.md
│           ├── 04-Tarefas.md
│           ├── 05-Dev-Log.md
│           └── 06-Erros.md
│
├── 3 - Session Logs/             ← Camada 1 de memória (buffer)
│   └── MEMORY.md                 ← Camada 2 (índice episódico curado)
│
└── 4 - Error's Memory/          ← 🛡️ Memória imunológica GLOBAL
    ├── INDEX.md
    ├── by-category/
    └── by-stack/
```

---

## Taxonomia Hierárquica de Projetos

Todo novo cliente ou iniciativa deve ser alocado dentro da estrutura em árvore:

```
2 - Projects / [Nicho] / [Cliente-Projeto] /
```

**Regras:**
- O `[Nicho]` agrupa projetos por segmento de mercado (ex: `Advocacia`, `E-commerce`, `Saúde`)
- O `[Cliente-Projeto]` identifica unicamente o cliente e o escopo (ex: `Carlos_Silva-Landing_Page`)
- O diretório do cliente é **autocontido** — todos os artefatos vivem dentro dele
- Nenhum artefato de um projeto deve referenciar ou depender de artefatos de outro projeto

### Artefatos Obrigatórios por Projeto

| # | Arquivo | Função | Template Base |
|---|---|---|---|
| 1 | `01-Escopo.md` | Formulário de escopo e requisitos do cliente | `[[Requirements & Scope Project Template]]` |
| 2 | `02-Contrato.md` | Contrato customizado gerado pela IA | `[[Contract Template]]` |
| 3 | `03-Planejamento.md` | Plano de execução técnico (EAP, cronograma, stack) | `[[Planning Template]]` |
| 4 | `04-Tarefas.md` | Lista granular de tarefas de desenvolvimento | Gerado via `/speckit.tasks` |
| 5 | `05-Dev-Log.md` | Diário de decisões, progresso e estado atual | Livre |
| 6 | `06-Erros.md` | Registro de erros locais (espelhados para `4 - Error's Memory/`) | Schema do [[Immunological Error Memory]] |

---

## Isolamento de Contexto

O agente de IA **DEVE** operar exclusivamente dentro da pasta do projeto em questão durante a fase de desenvolvimento. Esta restrição garante:

- **Zero vazamento de contexto:** especificações de projetos diferentes não interferem
- **Otimização de tokens:** apenas os arquivos relevantes são ingeridos
- **Rastreabilidade:** cada decisão é atribuível a um projeto específico

**Exceções permitidas:**
- Consulta às pastas `0 - Planner Project/`, `0.1 - Methodology/` e `1 - Templates/` para regras globais
- Consulta à pasta `4 - Error's Memory/` para memória imunológica
- Consulta à pasta `3 - Session Logs/MEMORY.md` para contexto episódico

---

## Mapeamento Sináptico (Wikilinks)

### Regra Inegociável

Sempre que o agente criar ou editar um documento que dependa ou referencie outro conceito do vault, é **obrigatório** o uso de colchetes duplos (`[[Nome do Arquivo]]`) para criar a referência no formato wikilink do Obsidian.

### Benefícios

| Benefício | Descrição |
|---|---|
| **RAG Inteligente por Grafo** | A IA navega pelo melhor caminho semântico usando o grafo, ao invés de busca bruta |
| **Otimização de Tokens** | O agente recupera apenas os trechos necessários seguindo os `[[links]]` |
| **Painel Visual** | O Graph View funciona como dashboard de saúde do projeto — nós órfãos indicam documentação incompleta |

### Padrões de Linkagem

```markdown
# Exemplo: dentro de 03-Planejamento.md
Stack aprovada conforme [[Preferencias Dev]]
Contrato gerado em [[02-Contrato]]
Erros documentados em [[06-Erros]] e espelhados em [[INDEX]]
Metodologia aplicada: [[ai-web-designer-agent]]
```

---

## Camadas de Memória (Visão Geral)

| Camada | Persistência | Localização | Função |
|---|---|---|---|
| **1 — Trabalho** | Buffer temporário | `3 - Session Logs/*.md` | Logs brutos de sessão |
| **2 — Episódica** | Permanente, curada | `3 - Session Logs/MEMORY.md` | Índice destilado de decisões |
| **3 — Semântica** | Permanente, imutável | Templates, Preferences, Methodology | Base de conhecimento consultada via MCP/RAG |

> Detalhamento completo em [[Session Protocol]]

---

## Referências Internas

- [[Session Protocol]] — Protocolos de início/fim de sessão e gestão de memória
- [[Project Lifecycle Pipeline]] — Fluxo completo de um projeto
- [[Dynamic Contract Engine]] — Geração de contratos dinâmicos
- [[Preferencias Dev]] — Stack e regras de qualidade
- [[Immunological Error Memory]] — Sistema global de erros
