---
título: "Preferências Dev"
versão: 3.0
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
  - qualidade
  - sdd
---

# Preferências Dev

> **Propósito:** Este e o arquivo canonico e unico de preferências de desenvolvimento. Ele consolida stack, regras inegociaveis, qualidade e operação SDD.

---

## Stack Tecnologica Aprovada

| Camada | Tecnologia                                           | Regra Principal |
|---|---|---|
| **Linguagem** | TypeScript 5.x                                       | `any` proibido. `strict: true` obrigatório |
| **Backend** | NestJS 10.x + Fastify                                | Modular + DI. Lógica nos Services |
| **Banco de Dados** | PostgreSQL + Prisma ORM                              | Schema declarativo no `schema.prisma` |
| **Frontend** | React 19+ / Angular 17+                              | Functional components + hooks |
| **Framework** | Next.js 16+                                          | App Router padrão |
| **State & UI** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Type-safe, zero boilerplate |
| **Styling** | Tailwind 3.4+ + Shadcn/ui / Origin UI                | Zero CSS global. Tokens do config |
| **Animações** | GSAP 3.12+ + Lenis                                   | `useGSAP` obrigatório |
| **Testes** | Jest + Playwright (E2E)                              | Cobertura total obrigatória |
| **Infra** | Docker                                               | Containers isolados |
| **Pipeline** | Spec-Kit (Spacify)                                   | SDD obrigatório |
| **MCPs** | Context7 + Skill Obsidian + MarketingCopywrite       | Injeção de dependências reais, gestão de cofre e copywriting |

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

## Regras Avancadas de Qualidade

- Respeitar `prefers-reduced-motion`
- WCAG 2.1 AA compliance
- LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Regras Inegociaveis por Tecnologia

### Orquestracao e Integracao de IA
- **Spec-Kit (Spacify):** todo desenvolvimento segue Spec-Driven Development (SDD) com `/speckit.specify`, `/speckit.plan`, `/speckit.tasks` e `/speckit.implement`.
- **Context7 (MCP):** ao usar ou atualizar bibliotecas da stack, consultar documentacao atual via ferramenta de docs.

### TypeScript
- `any` e proibido sem excecao arquitetural aprovada.
- Interfaces e DTOs explicitos sao obrigatorios.
- `strict: true` e obrigatorio no `tsconfig.json`.

### NestJS + Fastify
- Fastify e o adaptador HTTP padrao.
- Arquitetura modular com injecao de dependencias.
- Controllers nao carregam regra de negocio; regra fica em Services/Providers.
- Acesso a dados via repositorios e modelagem declarativa no `schema.prisma`.

### Frontend (React/Angular)
- Componentes funcionais e hooks bem estruturados.
- Em React, usar Server Components quando aplicavel.
- Componentes de UI nao devem misturar renderizacao com chamadas de rede sem camada de dados.

### Tailwind + Shadcn
- CSS global e proibido, salvo excecoes controladas.
- Design via classes utilitarias e componentes acessiveis.
- Conformidade WCAG obrigatoria.

### GSAP + Lenis
- `useGSAP` e obrigatorio para encapsular animacoes no React.
- Respeitar `prefers-reduced-motion`.

### Infra, Testes e Deploy
- Apenas `pnpm` permitido. `npm`, `yarn` e `bun` banidos.
- Docker com build multi-stage e `docker-compose.yml` para ambiente local.
- Jest para testes unitarios/integracao e Playwright para E2E.
- Codigo de producao desde o dia 1: sem prototipo fragil.

---

## Regras Promovidas da Memoria Imunologica

> Esta secao recebe regras quando um erro atinge `recorrencias >= 2` no `4 - Error's Memory/INDEX.md`.

_Nenhuma regra promovida ainda._

---

## Documentos Norteadores (3 Arquivos)

Para auditoria de código, consultar obrigatoriamente:

| Agente | Arquivo | Função |
|---|---|---|
| Product Strategist | [[ai-portfolio-product-strategist]] | Estratégia de produto e narrativa |
| Web Designer | [[ai-web-designer-agent]] | Design, UX, animações, responsividade |
| Copy Architect | [[ai-portfolio-copy-architect]] | Copy, microtextos, comunicação |

---

## Referencias Internas

- [[Project Lifecycle Pipeline]]
- [[Session Protocol]]
- [[Immunological Error Memory]]
