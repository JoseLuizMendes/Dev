---
template: "Knowledge Base Index"
version: 1.0
data_criacao: 2026-07-08
tags:
  - knowledge-base
  - index
---

# 0.4 - Knowledge Base — Índice

> Repositório de conhecimento técnico consumido **sob demanda** durante o desenvolvimento. **NÃO faz parte do boot obrigatório (R6)** — a leitura é condicional à stack do projeto, acionada pelo `INIT.md` do projeto e pelos protocolos.

---

## Regra de Consumo

| Se o projeto/tarefa envolve... | Ler antes de trabalhar |
|---|---|
| Next.js na stack | [[Next.js Foundations (Vercel Academy)]] |
| TanStack Start, Query ou Router (React ou Vue) | [[TanStack Reference]] |
| UI / design (todo projeto com frontend) | [[Impeccable Reference]] |
| Geração de mídia (imagens, vídeos, product shots) | [[Higgsfield Skills Reference]] |
| Escolher framework frontend (Next vs TanStack vs Vue) | [[TanStack Reference]] §Matriz de decisão + [[Preferencias Dev#Frameworks Frontend de Primeira Classe]] |

> Complemento: para qualquer biblioteca **não coberta** aqui, a regra do vault permanece — consultar **Context7 MCP** antes de decidir ([[Preferencias Dev]] §Context7).

## Documentos

| Documento | Fonte | Conteúdo |
|---|---|---|
| [[Next.js Foundations (Vercel Academy)]] | Vercel Academy (nextjs.org/learn) | Next 16 completo: App Router, Server/Client Components, dynamic routing, DAL/DTO, proxy.ts, cache components (`"use cache"`, cacheLife, cacheTag), Suspense/streaming, imagens, fontes, Web Vitals, segurança em 5 camadas, N+1 |
| [[TanStack Reference]] | Context7 (verificado 2026-07-08) | TanStack Start (RC), server functions, Query como fetching canônico, Router, `@tanstack/vue-query`, matriz de decisão vs Next.js |
| [[Impeccable Reference]] | impeccable.style | 23 comandos de design, AI-slop detector, `DESIGN.md`, instalação e uso no pipeline |
| [[Higgsfield Skills Reference]] | higgsfield-skills-guide.vercel.app | soul-id, generate, product-photoshoot, regra de opt-out (`midia: "nao"`) |

## Manutenção

- Todo doc tem frontmatter com `fonte` e data de verificação — comandos/claims de terceiros expiram; revalidar via Context7 quando algo falhar.
- Novos docs entram aqui com o mesmo padrão de frontmatter (`ler_quando` obrigatório) e ganham linha nas duas tabelas acima + entrada no [[INDEX]] raiz do vault.
