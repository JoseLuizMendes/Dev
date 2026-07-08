---
módulo: M1
título: "Cognitive Vault Architecture"
versão: 2.0
status: "Ativo"
tags:
  - planner-mode
  - vault-architecture
  - phase-one
---

# M1 — Cognitive Vault Architecture

Este módulo define **como o vault `Dev/` é organizado** e **como os agentes de IA navegam** pela estrutura de conhecimento. O vault é o cérebro persistente do sistema — um datalake de contexto que elimina a necessidade de repassar informações a cada sessão ou agente.

---

## Estrutura de Pastas Definitiva

```
Dev/                              ← conteúdo cognitivo (dentro do repo, que também tem tools/ e docs/ na RAIZ)
├── CLAUDE.md                     ← constituição (R1–R8) + boot obrigatório
├── INDEX.md                      ← mapa de navegação
├── TOON-PROMPT.md                ← prompt standalone (redundante por design)
├── redundancias-vault.md         ← auto-auditoria histórica
│
├── 0 - Planner Project/          ← Cérebro operacional (14 arquivos)
│   ├── Master Pipeline & Enforcement.md   ← FONTE DA VERDADE do fluxo (matriz canon)
│   ├── Preferencias Dev.md                ← stack + regras inegociáveis (v5)
│   ├── Session Protocol.md                ← boot/shutdown canônico
│   ├── Cognitive Vault Architecture.md    (este arquivo)
│   ├── Project Lifecycle Pipeline.md
│   ├── Pre-Sale Protocol.md
│   ├── Client Onboarding Protocol.md
│   ├── Protocol-Contract.md
│   ├── Protocol-Bootstrap.md
│   ├── Protocol-SpecKit.md
│   ├── Spec-Kit Reference.md
│   ├── Dynamic Contract Engine.md
│   ├── Immunological Error Memory.md
│   └── Mock Pipeline Test.md
│
├── 0.1 - Methodology/            ← Agentes norteadores (3 arquivos)
│   ├── ai-portfolio-product-strategist.md
│   ├── ai-web-designer-agent.md
│   └── ai-portfolio-copy-architect.md
│
├── 0.2 - Audit/                  ← Audit Template.md + Diretrizes.md
│
├── 0.3 - Claude Skills Export/   ← Skills exportadas para uso externo (satélite)
│   ├── cognitive-vault-manager/SKILL.md
│   ├── portfolio-copy-architect/SKILL.md          (stub → 0.1)
│   ├── portfolio-product-strategist/SKILL.md      (stub → 0.1)
│   ├── ui-web-designer-architect/SKILL.md         (stub → 0.1)
│   ├── ai-senior-web-designer-agent/*.skill       (empacotada)
│   └── backend-interview-agent/*.skill            (empacotada)
│
├── 0.4 - Knowledge Base/         ← Conhecimento por stack (leitura condicional, fora do boot R6)
│   ├── INDEX.md
│   ├── Next.js Foundations (Vercel Academy).md
│   ├── TanStack Reference.md
│   ├── Impeccable Reference.md
│   └── Higgsfield Skills Reference.md
│
├── 1 - Templates/                ← Templates canon (11 arquivos)
│   ├── Master Project Planning Template.md
│   ├── Requirements & Scope Project Template.md
│   ├── Contract Template.md
│   ├── Planning Template.md
│   ├── Tasks Template.md
│   ├── Setup Script Template.md
│   ├── Dev Log Template.md
│   ├── Errors Template.md
│   ├── Project INIT Template.md
│   ├── Niche CLAUDE Template.md
│   └── Session Log Template.md
│
├── 2 - Projects/                 ← Projetos isolados por nicho (Ecommerce, Portfolio, Casamento, ...)
│   └── [Nicho]/
│       └── [Cliente-Projeto]/
│           ├── 01-Escopo.md ... 06-Erros.md
│           └── setup.js
│
├── 3 - Session Logs/             ← Camada 1 de memória (buffer bruto)
│   └── MEMORY.md                 ← Camada 2 (índice episódico curado)
│
├── 4 - Error's Memory/           ← 🛡️ Memória imunológica GLOBAL
│   ├── INDEX.md
│   ├── GLOBAL-ERRORS.md
│   ├── by-category/              (6 categorias)
│   └── by-stack/                 (react, nestjs, tailwind-shadcn, gsap-lenis, next-auth, prisma, postgresql, zustand)
│
├── 5 - Publicações/              ← Artigos e conteúdo para publicar (LinkedIn etc.)
│
└── 9 - Archive/                  ← Documentos históricos arquivados
```

> **`0.3 - Claude Skills Export/`:** pasta satélite com skills exportadas para contextos externos (Claude.ai, Claude Code). Não faz parte do pipeline interno e não deve ser referenciada em wikilinks de projetos.
>
> **`tools/` e `docs/` vivem na RAIZ do repositório (fora de `Dev/`):** código utilitário (`tools/validate-project.js`, `tools/generate-claude-md.js`) e specs de design não entram no vault cognitivo. Os comandos documentados (`node tools/validate-project.js ...`) rodam a partir da raiz do repo.

---

## Taxonomia Hierárquica de Projetos

```
2 - Projects / [Nicho] / [Cliente-Projeto] /
```

- `[Nicho]`: segmento de mercado (ex: `Advocacia`, `E-commerce`, `Saúde`)
- `[Cliente-Projeto]`: identifica cliente e escopo (ex: `Carlos_Silva-Landing_Page`)
- Diretório **autocontido** — todos os artefatos do projeto vivem dentro dele
- Nenhum artefato de um projeto referencia artefatos de outro projeto

### Artefatos Obrigatórios por Projeto

| # | Arquivo | Função | Template Base |
|---|---|---|---|
| 1 | `01-Escopo.md` | Escopo e requisitos do cliente | [[Requirements & Scope Project Template]] |
| 2 | `02-Contrato.md` | Contrato gerado com cláusulas dinâmicas | [[Contract Template]] |
| 3 | `03-Planejamento.md` | Plano técnico (EAP, cronograma, stack) | [[Planning Template]] |
| 4 | `04-Tarefas.md` | Tarefas granulares de desenvolvimento | [[Tasks Template]] (via `/speckit.tasks`) |
| 5 | `05-Dev-Log.md` | Diário de decisões, progresso, dependências instaladas | [[Dev Log Template]] |
| 6 | `06-Erros.md` | Erros locais (espelhados para `4 - Error's Memory/`) | [[Errors Template]] + schema do [[Immunological Error Memory]] |
| 7 | `setup.js` | Bootstrap portátil do projeto (scaffold + deps + tooling obrigatório) | [[Setup Script Template]] |

> O `INIT.md` (via [[Project INIT Template]]) **não fica no vault** — é gerado na raiz do repositório de código. O `CLAUDE.md` por subpasta usa o [[Niche CLAUDE Template]].

---

## Isolamento de Contexto

O agente opera **exclusivamente** dentro da pasta do projeto durante o desenvolvimento.

**Exceções permitidas:**
- `0 - Planner Project/`, `0.1 - Methodology/`, `1 - Templates/` — regras globais
- `4 - Error's Memory/` — memória imunológica
- `3 - Session Logs/MEMORY.md` — contexto episódico

---

## Mapeamento Sináptico (Wikilinks)

Toda referência entre documentos do vault usa `[[Nome do Arquivo]]`. Regra inegociável.

**Benefícios:**
- **RAG por grafo:** navegação semântica sem busca bruta
- **Otimização de tokens:** apenas trechos necessários são recuperados
- **Graph View:** nós órfãos indicam documentação incompleta

```markdown
# Exemplo em 03-Planejamento.md
Stack conforme [[Preferencias Dev]]
Contrato em [[02-Contrato]]
Erros em [[06-Erros]] → espelhados em [[INDEX]]
```

---

## Camadas de Memória

O vault opera em 3 camadas de persistência. Detalhamento completo em [[Session Protocol]].

| Camada | Localização | Função |
|---|---|---|
| **1 — Trabalho** | `3 - Session Logs/*.md` | Buffer bruto de sessão |
| **2 — Episódica** | `3 - Session Logs/MEMORY.md` | Índice curado — lido no boot |
| **3 — Semântica** | Templates, Preferences, Methodology | Base canônica imutável |

---

## Referências Internas

- [[Session Protocol]] — Boot/shutdown e gestão de memória
- [[Project Lifecycle Pipeline]] — Fluxo completo de um projeto
- [[Client Onboarding Protocol]] — Inicialização e bootstrap de projetos
- [[Dynamic Contract Engine]] — Geração de contratos dinâmicos
- [[Preferencias Dev]] — Stack, metodologia e regras de qualidade
- [[Immunological Error Memory]] — Sistema global de erros
