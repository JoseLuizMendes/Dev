---
título: "Preferências Dev — Quick Reference"
versão: 2.0
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
  - quick-reference
---

# Preferências Dev — Quick Reference

> **Propósito:** Este arquivo é a **referência rápida** da stack e preferências de desenvolvimento. Para detalhamento exaustivo com regras completas, consulte [[Dev Preferences & Quality Standards]] (M5).

---

## Stack Aprovada (Resumo)

| Camada | Tecnologia | Regra Principal |
|---|---|---|
| **Linguagem** | TypeScript 5.x | `any` proibido. `strict: true` obrigatório |
| **Backend** | NestJS 10.x + Fastify | Modular + DI. Lógica nos Services |
| **Banco de Dados** | PostgreSQL + Prisma ORM | Schema declarativo no `schema.prisma` |
| **Frontend** | React 19+ / Angular 17+ | Functional components + hooks |
| **Framework** | Next.js 16+ | App Router padrão |
| **State & UI** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Type-safe, zero boilerplate |
| **Styling** | Tailwind 3.4+ + Shadcn/ui | Zero CSS global. Tokens do config |
| **Animações** | GSAP 3.12+ + Lenis | `useGSAP` obrigatório |
| **Testes** | Jest + Playwright (E2E) | Cobertura total obrigatória |
| **Infra** | Docker | Containers isolados |
| **Pipeline** | Spec-Kit (Spacify) | SDD obrigatório |
| **MCPs** | Context7 + Skill Obsidian + MarketingCopywrite | Injeção de dependências reais, gestão de cofre e copywriting |

---

## Regras Inegociáveis (Quick List)

| ❌ Proibido | ✅ Obrigatório |
|---|---|
| Tipo `any` | `strict: true` no tsconfig |
| CSS global (exceto bootstrap) | `useGSAP` para animações React |
| Hex hardcoded — usar tokens | Fastify como adaptador HTTP |
| `useEffect` para data fetching | Prisma ORM para banco de dados |
| npm/yarn/bun (usar pnpm) | Docker multi-stage builds |
| Redux (usar Zustand) | React Query/SWR para fetching |

---

## Regras Avançadas de Qualidade

- Respeitar `prefers-reduced-motion`
- WCAG 2.1 AA compliance
- LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Documentos Norteadores (3 Arquivos)

Para auditoria de código, consultar obrigatoriamente:

| Agente | Arquivo | Função |
|---|---|---|
| Product Strategist | [[ai-portfolio-product-strategist]] | Estratégia de produto e narrativa |
| Web Designer | [[ai-web-designer-agent]] | Design, UX, animações, responsividade |
| Copy Architect | [[ai-portfolio-copy-architect]] | Copy, microtextos, comunicação |

---

## Referência Completa

Para regras detalhadas, justificativas arquiteturoais e fluxo SDD completo:
→ [[Dev Preferences & Quality Standards]] (M5)
