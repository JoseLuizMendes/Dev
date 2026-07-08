---
template: "Knowledge Base Doc"
version: 1.0
fonte: "https://impeccable.style (verificado em 2026-07-08)"
data_incorporacao: 2026-07-08
tags:
  - knowledge-base
  - impeccable
  - design
  - bootstrap-obrigatorio
ler_quando: "Todo projeto com UI — instalação obrigatória no bootstrap"
---

# Impeccable — Referência

> **Ferramenta obrigatória de bootstrap** (ver [[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]). Conjunto de skills de design para agentes de IA que dá ao Claude Code um "vocabulário de designer": comandos por disciplina, detector de AI slop e geração de variantes direto no código-fonte.

---

## O que é

- **23 comandos de design** mapeados por disciplina — ex.: `/typeset` (tipografia), `/colorize` (cor), `/animate` (animação).
- **Detector de "AI slop"** com 45 regras determinísticas que eliminam padrões visuais genéricos de IA.
- **Geração de variantes** em qualidade produtiva que escrevem diretamente no código-fonte.
- **Iteração em tempo real** (beta) no dev server local.
- **Suporte a `DESIGN.md`** no formato Google Stitch — sistema de design portável na raiz do projeto.

## Instalação (comandos verificados em 2026-07-08)

| Método | Comando |
|---|---|
| Skills CLI (padrão no bootstrap) | `npx skills add pbakaus/impeccable` |
| Plugin marketplace Claude Code | `/plugin marketplace add pbakaus/impeccable` |
| CLI geral (Node 24+) | `npx impeccable install` |

**Primeira execução (obrigatória):** rodar `/impeccable init` dentro do Claude Code no repo do projeto — gera o `DESIGN.md`.

> ⚠️ `npx skills add` é comando de terminal (pode ir no `setup.js`); `/impeccable init` é comando de agente — roda no Claude Code **depois** do setup, nunca dentro do `setup.js`.

## Quando usar no pipeline

| Fase | Uso |
|---|---|
| Bootstrap ([[Protocol-Bootstrap]]) | Instalar skill + rodar `/impeccable init` → `DESIGN.md` |
| Desenvolvimento (Spec-Kit) | Comandos por disciplina ao construir/refinar UI (`/typeset`, `/colorize`, `/animate`...) |
| Auditoria ([[0.2 - Audit/Diretrizes]]) | Rodar detector de AI slop antes da entrega |

## Regras

1. Todo projeto com UI DEVE ter `DESIGN.md` gerado via `/impeccable init` no bootstrap.
2. Mudanças de identidade visual passam pelo `DESIGN.md` primeiro (fonte da verdade de design).
3. Antes de declarar UI "pronta", rodar o detector de AI slop.
4. Comandos de terceiros mudam — se algo falhar, revalidar via Context7/site oficial e atualizar este doc.
