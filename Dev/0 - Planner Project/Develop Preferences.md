---
título: "Develop Preferences"
versão: 1.0
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
---

# Develop Preferences

> Este arquivo é a referência rápida da stack e preferências de desenvolvimento. Para detalhamento completo, consulte [[Dev Preferences & Quality Standards]].

---

## Stack Aprovada

| Camada                      | Tecnologia                                     | Regra Principal                            |
| --------------------------- | ---------------------------------------------- | ------------------------------------------ |
| **Linguagem**               | TypeScript 5.x                                 | `any` proibido. `strict: true` obrigatório |
| **Backend / API**           | NestJS 10.x + Fastify                          | Modular + DI. Lógica nos Services          |
| **Banco de Dados**          | PostgreSQL + Prisma ORM                        | Schema declarativo puramente               |
| **Frontend** | [React 19+](https://github.com/facebook/react), [Angular 17+](https://github.com/angular/angular) | Functional components + hooks |
| **Framework** | [Next.js 14+](https://github.com/vercel/next.js) | App Router padrão. SEO e Performance |
| **State & UI Libs** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Padrões modernos, type-safe e zero boilerplate |
| **Styling**                 | Tailwind 3.4+ + Shadcn/ui                      | Zero CSS global. Tokens do config          |
| **Animações**               | GSAP 3.12+ + Lenis                             | `useGSAP` obrigatório                      |
| **Testes**                  | Jest (Unit/Int) + Playwright (E2E)             | Cobertura total obrigatória                |
| **Infra/Deploy**            | Docker                                         | Containers isolados                        |
| **Pipeline (Orquestração)** | Spec-Kit (Spacify)                             | SDD obrigatório                            |
| **Integração IA (MCP)** | [Context7](https://github.com/upstash/context7) + [Skill Obsidian](https://github.com/kepano/obsidian-skills) + [MarketingCopywrite](https://github.com/deeppath-ai/mcp-marketing-site) | Injeção de dependências reais, gestão de cofre e copywriting |

---

## Regras Rápidas

- ❌ Tipo `any` proibido
- ❌ CSS global proibido (exceto edge cases)
- ❌ Hex hardcoded proibido — usar tokens
- ❌ `useEffect` para data fetching proibido — usar React Query/SWR
- ❌ npm/yarn/bun proibidos (usar pnpm)
- ✅ `strict: true` no tsconfig
- ✅ `useGSAP` para toda animação GSAP
- ✅ Fastify como adaptador HTTP
- ✅ Banco de dados PostgreSQL via Prisma ORM
- ✅ Arquitetura Dockerizada
- ✅ Utilizar [Context7](https://github.com/upstash/context7), [Skill Obsidian](https://github.com/kepano/obsidian-skills) e Marketing MCP para IA
- ✅ Usar *Zustand* para estado global (Redux banido) e *Nuqs* para search params
- ✅ Validação sempre via *Zod* + *React Hook Form*
- ✅ Testes E2E com Playwright e unitários com Jest
- ✅ Respeitar `prefers-reduced-motion`
- ✅ WCAG 2.1 AA compliance
- ✅ LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Documentos Norteadores (Metodologia dos 3 Arquivos)

- [[ai-portfolio-product-strategist]] — Estratégia de produto e posicionamento
- [[ai-web-designer-agent]] — Design, UX e implementação visual
- [[ai-portfolio-copy-architect]] — Copy, microtextos e comunicação

---

## Referência Completa

Para detalhamento exaustivo de cada tecnologia, regras e padrões de qualidade, consulte:
→ [[Dev Preferences & Quality Standards]]
