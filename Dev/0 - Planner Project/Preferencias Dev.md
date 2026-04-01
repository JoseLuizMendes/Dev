---
título: "Preferências Dev"
versão: 4.1
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
  - qualidade
  - sdd
  - tdd
  - akita
---

# Preferências Dev

> **Propósito:** Arquivo canônico de preferências de desenvolvimento. Consolida stack, metodologia, regras inegociáveis e bootstrap de projetos. Consultado obrigatoriamente no boot de sessão e antes de qualquer implementação.

---

## Stack Tecnológica Aprovada

| Camada | Tecnologia | Regra Principal |
|---|---|---|
| **Linguagem** | TypeScript 5.x | `any` proibido. `strict: true` obrigatório |
| **Backend** | NestJS 10.x + Fastify | Modular + DI. Lógica nos Services, nunca nos Controllers |
| **Banco de Dados** | PostgreSQL + Prisma ORM | Schema declarativo no `schema.prisma` |
| **Frontend** | React 19+ / Angular 17+ | Functional components + hooks. Server Components quando aplicável |
| **Framework** | Next.js 16+ | App Router padrão |
| **State & UI** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Type-safe, zero boilerplate |
| **Styling** | Tailwind 3.4+ + Shadcn/ui / Origin UI | Zero CSS global. Tokens do config. WCAG obrigatório |
| **Animações** | GSAP 3.12+ + Lenis | `useGSAP` obrigatório. `prefers-reduced-motion` respeitado |
| **Testes** | Vitest + Playwright (E2E) | TDD obrigatório. Cobertura total |
| **Fetching** | React Query / SWR | `useEffect` para data fetching proibido |
| **Infra** | Docker multi-stage + Compose | Containers isolados. Ambiente local via Compose |
| **Package Manager** | pnpm | npm, yarn e bun banidos |
| **Pipeline** | Spec-Kit (Spacify) | SDD+TDD obrigatório |
| **MCPs** | Context7 + Skill Obsidian + MarketingCopywrite | Docs em tempo real, gestão de cofre, copywriting |

---

## Metodologia de Desenvolvimento: Akita + SDD + TDD

> Filosofia central inegociável. Aplica-se a todos os projetos sem exceção.

### Princípios Akita

1. **Spec-first:** nenhuma linha de código sem especificação aprovada.
2. **Test-first (TDD):** teste escrito antes da implementação. O código existe para fazer o teste passar.
3. **Incrementalismo rigoroso:** uma tarefa por vez, completamente finalizada antes de avançar.
4. **Zero débito técnico intencional:** código de produção desde o dia 1.
5. **Rastreabilidade total:** cada commit referencia uma tarefa do `04-Tarefas.md`, que referencia uma User Story do `01-Escopo.md`.

### Fluxo TDD por Tarefa

```
1. Ler spec da tarefa (User Story + critério BDD do 01-Escopo.md)
2. Escrever TESTE que valida o critério de aceite → RED
3. Implementar mínimo de código para o teste passar → GREEN
4. Refatorar mantendo o teste verde → REFACTOR
5. Atualizar status em 04-Tarefas.md
6. Registrar erros em 06-Erros.md se aplicável
```

### Cobertura Obrigatória

| Tipo | Ferramenta | Escopo |
|---|---|---|
| **Unitário** | Vitest | Funções, services, utils críticos |
| **Integração** | Vitest | Módulos, endpoints |
| **E2E** | Playwright | Todos os critérios BDD |

---

## Setup Automático de Projeto (Bootstrap)

> Gatilho: campo `{{DEPENDENCIES}}` do `Master Project Planning Template` ou `Requirements & Scope Project Template`. Executado uma única vez após criar a estrutura de pastas do projeto.

### Sequência de Bootstrap

```bash
# 1. Inicializar projeto
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir

# 2. Dependências base da stack
pnpm add @prisma/client prisma
pnpm add zustand nuqs react-hook-form @hookform/resolvers zod
pnpm add sonner lucide-react
pnpm add gsap @gsap/react lenis

# 3. UI
pnpm dlx shadcn@latest init

# 4. Testes
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom
pnpm add -D playwright @playwright/test

# 5. Dependências extras declaradas em {{DEPENDENCIES}}
pnpm add [dependências do briefing]

# 6. Infra
# Gerar Dockerfile multi-stage + docker-compose.yml

# 7. Config
# tsconfig.json com strict: true
```

### Regras do Bootstrap

- Nunca instalar dependências fora da stack aprovada sem aprovação explícita.
- Conflitos com a stack: sinalizar e aguardar decisão antes de instalar.
- Após bootstrap: registrar dependências instaladas com versões em `05-Dev-Log.md`.

---

## Regras Inegociáveis por Tecnologia

### TypeScript
- `any` proibido sem exceção arquitetural aprovada.
- Interfaces e DTOs explícitos obrigatórios. `strict: true` no `tsconfig.json`.

### NestJS + Fastify
- Fastify é o adaptador HTTP padrão (Express bloqueado).
- Controllers não carregam regra de negócio — regra fica nos Services.
- Acesso a dados via modelagem declarativa no `schema.prisma`.

### Frontend (React/Angular)
- Componentes funcionais e hooks. Server Components quando aplicável (React).
- UI não mistura renderização com chamadas de rede sem camada de dados.

### Tailwind + Shadcn
- CSS global proibido, salvo exceções controladas. Design via classes utilitárias.
- Hex hardcoded proibido — usar tokens do `tailwind.config.ts`.

### GSAP + Lenis
- `useGSAP` obrigatório no React para auto-cleanup. Respeitar `prefers-reduced-motion`.
- Animações não bloqueiam main thread. ScrollTrigger integrado ao Lenis via `requestAnimationFrame`.

### Vitest + Playwright
- Testes escritos antes ou junto com a implementação.
- Nenhuma tarefa marcada como `completed` sem todos os testes passando.
- Mocks apenas para dependências externas — nunca para lógica interna.

### Context7 (MCP)
- Consultar documentação atual via Context7 ao usar ou atualizar bibliotecas da stack. Nunca adivinhar APIs.

---

## Regras Promovidas da Memória Imunológica

> Seção populada automaticamente quando um erro atinge `recorrencias >= 2` no [[4 - Error's Memory/INDEX]].

_Nenhuma regra promovida ainda._

---

## Documentos Norteadores (Auditoria de Código)

| Agente | Arquivo | Função |
|---|---|---|
| Product Strategist | [[ai-portfolio-product-strategist]] | Estratégia de produto e narrativa |
| Web Designer | [[ai-web-designer-agent]] | Design, UX, animações, responsividade |
| Copy Architect | [[ai-portfolio-copy-architect]] | Copy, microtextos, comunicação |

---

## Referências Internas

- [[Project Lifecycle Pipeline]] — Fluxo completo de desenvolvimento
- [[Session Protocol]] — Boot/shutdown de sessão
- [[Immunological Error Memory]] — Sistema global de erros
- [[Client Onboarding Protocol]] — Bootstrap e inicialização de projetos
