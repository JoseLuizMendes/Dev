---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Context7 /websites/tanstack_start_framework_react (verificado em 2026-07-08)"
data_incorporacao: 2026-07-08
tags:
  - knowledge-base
  - tanstack
  - tanstack-start
  - tanstack-query
  - tanstack-router
  - vue-query
ler_quando: "Projetos com TanStack Start na stack, ou qualquer projeto usando TanStack Query/Router (React ou Vue)"
---

# TanStack — Referência

> TanStack é a família de bibliotecas headless type-safe (Query, Router, Table, Form...) e o framework full-stack **TanStack Start**. No canon do vault ([[Preferencias Dev]] v5): **TanStack Query é o padrão de fetching** (React e Vue) e **TanStack Start é framework de primeira classe** ao lado do Next.js.

---

## TanStack Start (framework full-stack)

**Status (verificado 2026-07-08 via Context7):** Release Candidate — feature-complete, API estável, progressão rápida esperada até a v1.

- **Full-document SSR + streaming** — renderização no servidor com hidratação client-side.
- **Server Functions type-safe** — `createServerFn()` com validação (Zod) e middleware; chamável de client e server com tipagem ponta a ponta:

```tsx
export const getTodos = createServerFn({ method: 'GET' })
  .validator(zodValidator(z.object({ userId: z.string() })))
  .middleware([authMiddleware])
  .handler(async ({ data }) => db.todos.findMany({ where: { userId: data.userId } }))
```

- **Powered by TanStack Router** — roteamento 100% type-safe (paths, params, search params tipados).
- **Build:** Vite (ou Rsbuild) — deploy agnóstico de host/runtime (Vercel, Netlify, Node, Bun, Cloudflare...).
- **Scaffold:** `pnpx create-start-app <nome>` (com pnpm, respeitando o canon de package manager).

## TanStack Query (fetching canônico)

- **React:** `@tanstack/react-query` — substitui a marca antiga "React Query". `useEffect` para data fetching continua **proibido** ([[Preferencias Dev]]).
- **Vue:** `@tanstack/vue-query` — padrão de fetching em projetos Vue 3+.
- Cache, invalidação, mutations, prefetch, SSR hydration — usar sempre em vez de fetch manual em componente.

## TanStack Router (fora do Next.js)

- Roteamento type-safe para SPAs React e para o Start. Em projetos Next.js, o App Router do Next é o canônico — não misturar.

## Matriz de decisão — TanStack Start vs Next.js 16 vs Vue 3

| Critério | Next.js 16 | TanStack Start | Vue 3 (+ Vite) |
|---|---|---|---|
| RSC / cache granular (`"use cache"`, PPR) | ✅ nativo | ❌ (modelo client-first + server functions) | ❌ |
| Type-safety de rotas ponta a ponta | Parcial (typed routes) | ✅ total (Router) | Parcial |
| Ecossistema/deploy Vercel otimizado | ✅ | Neutro (deploy-agnóstico) | Neutro |
| SPA-first com controle total do client | Razoável | ✅ | ✅ |
| SEO/conteúdo pesado (blog, ecommerce, marketing) | ✅ | Razoável (SSR + streaming) | Razoável (Nuxt fora do canon) |
| Time/preferência Vue, protótipos leves | — | — | ✅ |
| Maturidade | Estável (v16) | Release Candidate | Estável (v3) |

**Regra prática:** conteúdo/SEO/ecommerce com Vercel → **Next.js**; app rica SPA-first com type-safety máxima de rotas → **TanStack Start**; projeto lightweight/time Vue → **Vue 3**. Decisão registrada no `03-Planejamento.md` e no `INIT.md` do projeto.

> Artigo completo comparando os dois: [[2026-07 - TanStack Start vs Next.js (LinkedIn)]]
