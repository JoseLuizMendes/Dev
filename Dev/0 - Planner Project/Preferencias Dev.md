---
título: "Preferências Dev"
versão: 4.2
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

## Stack Tecnológica

> **Regra fundamental:** A stack varia por projeto. A stack específica de cada projeto é sempre definida no `INIT.md` do projeto. Este arquivo documenta todas as stacks aprovadas e suas regras.

### Stack Principal (Mais Usada)

| Camada | Tecnologia | Regra Principal |
|---|---|---|
| **Linguagem** | TypeScript 5.x | `any` proibido. `strict: true` obrigatório |
| **Backend** | NestJS 10.x + Fastify | Modular + DI. Lógica nos Services, nunca nos Controllers |
| **Banco de Dados** | PostgreSQL + Prisma ORM | Schema declarativo no `schema.prisma` |
| **Frontend** | React 19+ / Next.js 16+ | Functional components + hooks. Server Components quando aplicável |
| **State & UI** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Type-safe, zero boilerplate |
| **Styling** | Tailwind 3.4+ + Shadcn/ui / Origin UI | Zero CSS global. Tokens do config. WCAG obrigatório |
| **Animações** | GSAP 3.12+ + Lenis | `useGSAP` obrigatório. `prefers-reduced-motion` respeitado |
| **Testes** | Vitest + Playwright (E2E) | TDD obrigatório. Cobertura total |
| **Fetching** | React Query / SWR | `useEffect` para data fetching proibido |
| **Infra** | Docker multi-stage + Compose | Containers isolados. Ambiente local via Compose |
| **Package Manager** | pnpm | npm, yarn e bun banidos |
| **Pipeline** | Spec-Kit (Spacify) | SDD+TDD obrigatório |
| **MCPs** | Context7 + Skill Obsidian + MarketingCopywrite | Docs em tempo real, gestão de cofre, copywriting |

### Stacks Adicionais (Variáveis por Projeto)

| Linguagem/Framework | Quando Usar | Observação |
|---|---|---|
| **C# (.NET)** | Projetos enterprise, APIs robustas, microservices | Stack definida no `INIT.md` do projeto |
| **Java (Spring Boot)** | Projetos enterprise, Android, sistemas legados | Stack definida no `INIT.md` do projeto |
| **Vue.js 3+** | Projetos lightweight, prototipagem rápida | Composition API obrigatório. Options API proibida |
| **Angular** | Projetos enterprise em larga escala | Em adoção futura. Stack definida no `INIT.md` |

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

## Filosofia de Construção

> Diretriz canônica de princípios que regem todo código deste vault. Aplica-se a **todos os projetos**, independente da stack. Sob R7 (`[[CLAUDE]]`), qualquer sugestão que viole esta seção exige aviso explícito + confirmação do dev antes de ser oferecida.

### 1. SOLID (5 princípios)

| Sigla | Princípio | Regra prática | Exemplo na stack principal |
|---|---|---|---|
| **S** | Single Responsibility | Uma classe ou módulo tem UMA razão para mudar | `UserService` cuida só de User. Email vai em `EmailService` separado |
| **O** | Open/Closed | Aberto para extensão, fechado para modificação | Novos métodos de pagamento via Strategy pattern; nunca `if/else` em `PaymentService` |
| **L** | Liskov Substitution | Subtipo substitui o tipo base sem quebrar contrato | `IRepository<User>` — qualquer implementação (Prisma, in-memory, mock) funciona idêntico |
| **I** | Interface Segregation | Muitas interfaces específicas > uma "deusa" | `IReader<T>` + `IWriter<T>` separados, nunca `IRepository<T>` gigante |
| **D** | Dependency Inversion | Depender de abstrações, não de concretudes | Service injeta `IUserRepository`, nunca `PrismaUserRepository` direto |

**Como aplicar por stack:**

- **TS + NestJS:** DI nativo facilita DIP. Defina interfaces em `application/ports/` e implemente em `infrastructure/`.
- **C# (.NET):** registre no DI container — `services.AddScoped<IUserRepository, EfUserRepository>()`.
- **Java (Spring):** use `@Autowired` em interfaces, anote a implementação com `@Repository` ou `@Service`.

### 2. Clean Code

- **Nomes revelam intenção** — `getUserById` ≠ `getU`. Métodos verbam, classes e variáveis são substantivos.
- **Funções pequenas** — alvo < 20 linhas, ideal < 10. Se passa disso, extrair.
- **Comentários só pra "por quê"** — código bem escrito não precisa explicar "o quê". Comentário óbvio é ruído.
- **Sem magic numbers/strings** — extrair constantes nomeadas (`const MAX_RETRIES = 3`).
- **DRY com rule of three** — duplicar 2x é tolerável; na 3ª vez, extrair.
- **Imutabilidade é regra**, mutabilidade é exceção justificada.
- **Um nível de abstração por função** — função não mistura "buscar do DB" com "validar regra de negócio" com "formatar resposta".

### 3. Arquitetura Hexagonal (Ports & Adapters)

**Princípio central:** o domínio é o coração e não conhece nada externo. Infraestrutura (DB, HTTP, queue) implementa interfaces (*ports*) que o domínio define.

**Regra de dependência inegociável quando hexagonal:**

```
Presentation → Application → Domain ← Infrastructure
```

- **Domain:** entities, value objects, regras de negócio puras. **ZERO** imports de frameworks ou bibliotecas externas.
- **Application:** use cases + ports (interfaces). Orquestra o domínio. Conhece apenas o Domain.
- **Infrastructure:** adapters concretos das ports. EF Core, Prisma, HTTP clients, queue producers. Implementa interfaces de Application.
- **Presentation:** controllers HTTP, GraphQL resolvers, CLI commands. Chama Application.

**Decisão de quando usar (obrigatória, registrada em `[[03-Planejamento]]`):**

| Sinal | Hexagonal | Layered tradicional |
|---|---|---|
| Domínio | Rico (regras de negócio complexas) | CRUD simples |
| Canais de I/O | Múltiplos (REST + queue + cron) | Único (REST) |
| Probabilidade de trocar infra | Alta (DB / vendor / provider) | Baixa |
| Isolamento de testes | Crítico (domain testável sem mock de infra) | Aceitável com mocks |
| Time-to-market | Médio/longo | Curto / MVP |
| Time/dev | 2+ pessoas / sênior | 1 pessoa / pleno |

**Critério de decisão:** se 4+ sinais apontam pra Hexagonal → use Hexagonal. Se 4+ apontam pra Layered → use Layered. Empate → **vence Hexagonal** (ganha em manutenibilidade no médio prazo).

**Promoção tardia permitida:** projeto que começou Layered e atingiu complexidade que justifica Hexagonal → refatorar agora é mais barato do que depois. Registrar decisão em `[[05-Dev-Log]]`.

---

## Estrutura de Pastas por Stack

> Estruturas canônicas. **Inegociável quando a stack se aplica.** Variantes Hexagonal são acionadas conforme decisão da Filosofia de Construção §3.

### TypeScript + Next.js + NestJS — Default (Layered)

```
projeto/
├── back/                          # NestJS API
│   ├── src/
│   │   ├── modules/
│   │   │   └── <bounded-context>/
│   │   │       ├── controllers/
│   │   │       ├── services/
│   │   │       ├── repositories/
│   │   │       ├── dtos/
│   │   │       └── *.module.ts
│   │   ├── common/                # filters, pipes, guards transversais
│   │   ├── config/
│   │   └── main.ts
│   ├── prisma/
│   └── package.json
├── front/                         # Next.js 16 App Router
│   ├── src/{app,components,lib,stores}/
│   └── package.json
├── shared/                        # zod schemas + tipos compartilhados
│   └── src/
├── infra/                         # docker, scripts, .env.example
├── pnpm-workspace.yaml
└── package.json
```

### TypeScript + Next.js + NestJS — Hexagonal

```
back/src/modules/<bounded-context>/
├── domain/                        # entities, value objects, domain services (ZERO NestJS / Prisma)
├── application/
│   ├── use-cases/
│   └── ports/                     # IUserRepository, IEmailSender, ...
├── infrastructure/
│   ├── persistence/               # implementações Prisma das ports
│   └── http/                      # clientes de APIs externas
├── presentation/                  # NestJS controllers + DTOs (Zod)
└── <bounded-context>.module.ts
```

### C# (.NET) — Clean Architecture (Hexagonal-friendly)

```
ProjectName.sln
├── src/
│   ├── ProjectName.Web/              # ASP.NET Core controllers, middleware (Presentation)
│   ├── ProjectName.Application/      # use cases + ports + DTOs
│   ├── ProjectName.Domain/           # entities + value objects + regras puras (ZERO deps externas)
│   └── ProjectName.Infrastructure/   # EF Core, integrações externas
├── tests/
│   ├── ProjectName.UnitTests/        # xUnit + FluentAssertions
│   └── ProjectName.IntegrationTests/
└── docker-compose.yml
```

**Regra de dependência (`.csproj`):**
- `Web` referencia `Application` e `Infrastructure`
- `Application` referencia `Domain`
- `Infrastructure` referencia `Application` (implementa interfaces de port)
- `Domain` não referencia NADA

### Java (Spring Boot) — Hexagonal

```
src/main/java/com/cliente/projeto/
├── domain/                 # entities + value objects + domain services
├── application/            # use cases + ports
├── infrastructure/         # JPA repositories, REST clients, adapters
├── presentation/           # Spring REST controllers + DTOs
└── config/
```

### Java (Spring Boot) — Layered tradicional

```
src/main/java/com/cliente/projeto/
├── controller/      # endpoints REST
├── service/         # regras de negócio
├── repository/      # Spring Data JPA
├── model/           # entities + DTOs
└── config/
```

### Vue.js 3+ — front (mesmo monorepo do TS)

```
front/
├── src/
│   ├── views/              # rotas (Vue Router)
│   ├── components/
│   ├── composables/        # Composition API hooks
│   ├── stores/             # Pinia
│   └── main.ts
└── vite.config.ts
```

### Angular

```
src/app/
├── core/                   # singletons (auth, interceptors, guards)
├── shared/                 # componentes/utils reutilizáveis
└── features/               # 1 pasta por feature (standalone components)
    └── <feature>/
        ├── pages/
        ├── components/
        ├── services/
        └── <feature>.routes.ts
```

### Quality Gate da estrutura

- [ ] Estrutura escolhida documentada em `[[03-Planejamento]]` §4 (Mapeamento da Stack)
- [ ] Se Hexagonal escolhido: decisão dos 6 sinais registrada (≥ 4 favoráveis ou empate)
- [ ] `tools/validate-project.js` rodado com `--code-path <projeto>` validou estrutura contra a stack do frontmatter

---

## Setup Automático de Projeto (Bootstrap)

> Gatilho: campo `{{DEPENDENCIES}}` do `Master Project Planning Template` ou `Requirements & Scope Project Template`. Executado uma única vez após criar a estrutura de pastas do projeto.
>
> **Execução:** seguir [[Protocol-Bootstrap]] — responsável por criar `05-Dev-Log.md`, `06-Erros.md` e o `setup.js` dinâmico que lê o escopo em runtime.

### Stack base instalada no bootstrap

| Camada | Pacotes |
|---|---|
| **Framework** | `pnpm create next-app@latest --typescript --tailwind --eslint --app --src-dir --no-git` |
| **UI/UX** | `pnpm add gsap @gsap/react lenis zustand nuqs sonner lucide-react` |
| **Forms/Validação** | `pnpm add react-hook-form @hookform/resolvers zod` |
| **Testes** | `pnpm add -D vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom` |
| **Extras** | declarados em `{{DEPENDENCIES}}` — `pnpm add [deps]` |

> Fonte dos comandos: [pnpm docs](https://pnpm.io/cli/add) | [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)

### Regras do Bootstrap

- Nunca instalar dependências fora da stack aprovada sem aprovação explícita.
- Conflitos com a stack: sinalizar e aguardar decisão antes de instalar.
- Após bootstrap: registrar dependências instaladas com versões em `05-Dev-Log.md`.
- `setup.js` lê `01-Escopo.md` em runtime via `path.join(__dirname, ...)` — sem dados hardcoded.
- `setup.js` usa o campo `package_manager` do frontmatter para gerar os comandos corretos — nunca hardcoda `npm` ou `pnpm` diretamente.

---

## Regras Inegociáveis por Tecnologia

### TypeScript
- `any` proibido sem exceção arquitetural aprovada.
- Interfaces e DTOs explícitos obrigatórios. `strict: true` no `tsconfig.json`.

### NestJS + Fastify
- Fastify é o adaptador HTTP padrão (Express bloqueado).
- Controllers não carregam regra de negócio — regra fica nos Services.
- Acesso a dados via modelagem declarativa no `schema.prisma`.

### Frontend (React / Next.js)
- Componentes funcionais e hooks. Server Components quando aplicável.
- UI não mistura renderização com chamadas de rede sem camada de dados.

### Vue.js 3+
- Composition API obrigatório. Options API proibida.
- `<script setup>` como padrão. Props e emits tipados com `defineProps` / `defineEmits`.
- Pinia para state management (Vuex banido).
- Vite como bundler padrão.

### C# (.NET)
- Clean Architecture ou Vertical Slice Architecture — definida no `INIT.md` do projeto.
- Async/await obrigatório em toda camada de I/O.
- DTOs e Records para transferência de dados — nunca expor entidades diretamente.
- xUnit para testes unitários. Fluent Assertions para legibilidade.
- Entity Framework Core como ORM padrão.

### Java (Spring Boot)
- Arquitetura em camadas: Controller → Service → Repository.
- Lombok permitido para reduzir boilerplate.
- Testes com JUnit 5 + Mockito.
- Maven ou Gradle — definido no `INIT.md` do projeto.
- Records para DTOs quando Java 16+.

### Angular
- Standalone Components obrigatório (NgModules legado banido em projetos novos).
- Signals para state local. NgRx apenas quando estado global complexo justificar.
- Lazy loading de rotas obrigatório.
- `inject()` preferível a constructor injection.
- Regras a evoluir conforme adoção do projeto.

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

