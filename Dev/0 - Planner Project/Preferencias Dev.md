---
título: "Preferências Dev"
versão: 5.2
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
| **Frontend** | React 19+ / Next.js 16+ **ou** TanStack Start | Functional components + hooks. Server Components quando aplicável. Escolha registrada no `03-Planejamento` + `INIT.md` (ver §Frameworks Frontend de Primeira Classe) |
| **Routing** | Next App Router (Next.js) / TanStack Router (fora do Next) | Nunca misturar os dois no mesmo app |
| **State & UI** | Zustand, Nuqs, React Hook Form + Zod, Sonner, Lucide | Type-safe, zero boilerplate |
| **Styling** | Tailwind 3.4+ + Shadcn/ui / Origin UI | Zero CSS global. Tokens do config. WCAG obrigatório |
| **Design QA** | Impeccable | `/impeccable init` + `DESIGN.md` obrigatórios no bootstrap — ver [[Impeccable Reference]] |
| **Mídia IA** | Higgsfield skills (pago) → alternativas gratuitas como fallback | Geração SEMPRE via skills instaladas + [[Asset Sizing Standard]] + [[GPT-Image Prompt Galleries]]. Opt-out via campo `midia` do escopo — ver [[Frontend Creative Protocol]] §Fase 6 |
| **Formatos de mídia** | AVIF + WebP (imagem) · WebM VP9 + MP4 fallback (vídeo, ≥1080p) | WEBP puro = mínimo aceitável. GIF proibido. Ver §Imagens e Mídia Web + [[Asset Sizing Standard]] |
| **DX** | Prettier + prettier-plugin-tailwindcss + Husky + lint-staged + EditorConfig | Obrigatório em todo projeto, instalado no bootstrap — ver §Dependências Obrigatórias de DX |
| **Animações** | GSAP 3.12+ + Lenis (+ Three.js quando couber) | `useGSAP` obrigatório. `prefers-reduced-motion` respeitado. Three.js: ver §Three.js |
| **Testes** | Vitest + Playwright (E2E) | TDD obrigatório. Cobertura total |
| **Fetching** | TanStack Query (React/Vue) — padrão | `useEffect` para data fetching proibido. SWR só como legado permitido em projetos existentes |
| **Infra** | Docker multi-stage + Compose | Containers isolados. Ambiente local via Compose |
| **Package Manager** | pnpm | npm, yarn e bun banidos |
| **Pipeline** | Spec-Kit (SDD+TDD) + Impeccable (design) + Higgsfield (mídia, opt-out) | Ver §Ferramentas Obrigatórias de Bootstrap |
| **MCPs** | Context7 + Skill Obsidian + MarketingCopywrite | Docs em tempo real, gestão de cofre, copywriting |

### Frameworks Frontend de Primeira Classe

> Três frameworks aprovados em pé de igualdade. A escolha é **por projeto**, feita no `03-Planejamento.md` e registrada no `INIT.md`, usando esta matriz. Detalhamento técnico e comparação completa: [[TanStack Reference]] e [[Next.js Foundations (Vercel Academy)]].

| Critério do projeto | Next.js 16+ | TanStack Start | Vue.js 3+ |
|---|---|---|---|
| Conteúdo/SEO pesado (ecommerce, blog, marketing) | ✅ preferido | Razoável | Razoável |
| RSC + cache granular (`"use cache"`, PPR) necessários | ✅ único | ❌ | ❌ |
| Deploy/ecossistema Vercel | ✅ otimizado | Neutro | Neutro |
| App rica SPA-first, type-safety total de rotas | Razoável | ✅ preferido | Razoável |
| Server functions type-safe end-to-end (`createServerFn`) | ❌ (Server Actions) | ✅ | ❌ |
| Projeto lightweight / prototipagem / time Vue | — | — | ✅ preferido |
| Maturidade | Estável | Release Candidate | Estável |

**Regras por framework:**
- **Next.js 16+** — App Router; Server Components por padrão; regras em §Frontend (React / Next.js). Skills Next.js do Claude instaladas no bootstrap.
- **TanStack Start** — TanStack Router + Query nativos; server functions com validação Zod; scaffold `pnpx create-start-app`. Status RC: consultar Context7 para breaking changes antes de iniciar projeto.
- **Vue.js 3+** — primeira classe (promovido da lista de adicionais na v5.0); regras em §Vue.js 3+.

### Stacks Adicionais (Variáveis por Projeto)

| Linguagem/Framework | Quando Usar | Observação |
|---|---|---|
| **C# (.NET)** | Projetos enterprise, APIs robustas, microservices | Stack definida no `INIT.md` do projeto |
| **Java (Spring Boot)** | Projetos enterprise, Android, sistemas legados | Stack definida no `INIT.md` do projeto |
| **Angular** | Projetos enterprise em larga escala | Em adoção futura. Stack definida no `INIT.md` |

### Stack Estendida — Ecommerce

> Aprovada como extensão da Stack Principal para projetos de ecommerce que demandem auth completo, pagamento, mídia e email transacional. Quando uma destas libs é usada, o `01-Escopo.md` do projeto deve listar no `dependencies` do frontmatter.

| Lib | Categoria | Quando usar | Justificativa |
|---|---|---|---|
| `next-auth` 5 (Auth.js v5) | Autenticação | Auth de usuário no Next.js | Adapter Prisma nativo, suporte OAuth + credenciais + JWT |
| `@auth/prisma-adapter` | Autenticação | Sempre com Auth.js + Prisma | Cria tabelas Account/Session/VerificationToken/User esperadas |
| `arctic` | OAuth | OAuth providers customizados (Google Admin allowlist) | Lib leve, opcional ao Auth.js providers built-in |
| `bcryptjs` | Crypto | Hash de senha (credentials provider) | Padrão de mercado, Node-only |
| `jose` | Crypto | JWT signing/verify Edge-safe (middleware) | Funciona em Edge runtime; bcrypt e jsonwebtoken não |
| `otplib` | Crypto | TOTP (2FA admin) | Geração + validação de OTP |
| `mercadopago` | Pagamento | Gateway de pagamento BR | Padrão BR, suporta PIX + cartão + boleto |
| `cloudinary` + `next-cloudinary` | Mídia | Storage + delivery de imagens otimizadas | Transformações on-the-fly, CDN |
| `resend` + `@react-email/components` + `@react-email/render` | Email | Email transacional + templates React | API simples, templates em React |
| `recharts` | Visualização | Charts em painel admin | Lib React-native, mais leve que Chart.js em Next |
| `@prisma/adapter-pg` + `pg` | DB | Postgres via Prisma 7+ driver adapter | Required pra Prisma 7 com Postgres em Edge |
| `@radix-ui/react-*` ou `radix-ui` bundled | UI | Primitivos acessíveis (usado pelo shadcn) | Base do shadcn/ui — já implícito na stack principal |

**Regra de adoção:**
- Antes de adicionar lib fora desta lista E fora da Stack Principal: R7 dispara — registrar exceção justificada em `[[05-Dev-Log]]`.
- Updates de versão MAJOR: consultar Context7 + adicionar entrada em `[[06-Erros]]` se houver breaking change relevante.

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

### 4. CLAUDE.md Universal (regra global de organização)

> ⚠️ **Inegociável.** Toda pasta e sub-pasta do repositório de código DEVE conter um `CLAUDE.md` próprio.

**Propósito:** cada `CLAUDE.md` documenta localmente o que aquela pasta faz, qual sua responsabilidade, quais regras específicas valem ali, e o que NÃO fazer. Garante que qualquer IA (ou humano) entrando numa pasta sabe imediatamente o contexto sem precisar reconstruir do código.

**Como aplicar:**

- Usar `[[Niche CLAUDE Template]]` como base canon — nunca escrever do zero.
- Frontmatter obrigatório: `nicho` (nome da pasta) + `escopo` (descrição curta).
- Sections obrigatórias: Escopo, Diretrizes Específicas, Stack Local, Testes, Dependências Permitidas.
- Em pastas geradas por ferramenta (`node_modules`, `.next`, `dist`, `coverage`, `src/generated`, etc): **dispensadas** — listar no `.gitignore` e referenciar como exceção no CLAUDE.md do pai.

**Granularidade:**

- 1 `CLAUDE.md` por bounded context (`src/lib/cart/CLAUDE.md`)
- 1 `CLAUDE.md` por camada hexagonal (`src/lib/cart/domain/CLAUDE.md`, `application/`, `infrastructure/`, `presentation/`)
- 1 `CLAUDE.md` por sub-pasta de UI (`src/components/admin/CLAUDE.md`, `src/components/auth/CLAUDE.md`)

**Quality gate:** o validator `tools/validate-project.js --code-path` checa que toda pasta visível (não gitignored) tem `CLAUDE.md`. Falha hard se faltar.

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

### Next.js Standalone Fullstack — Layered (default)

> Variante para projetos onde back e front vivem no MESMO Next.js (Route Handlers + Server Components + Prisma direto, sem NestJS). Aprovada quando o dev escolhe trabalhar back+front juntos em um único deploy.

```
projeto/                         # raiz do repo de código
├── src/
│   ├── app/                     # App Router (rotas + Server Components + Route Handlers em api/)
│   │   ├── api/                 # Route Handlers (HTTP endpoints — NÃO confundir com src/api/)
│   │   ├── (rotas pt-BR)/       # páginas públicas + admin
│   │   ├── layout.tsx
│   │   └── globals.css          # Tailwind v4 lê tokens daqui
│   ├── lib/                     # data layer + server actions + stores + design tokens
│   │   └── <bounded-context>/   # ver Hexagonal abaixo
│   ├── components/              # UI (Server + Client Components)
│   │   ├── ui/                  # shadcn/ui primitivos
│   │   └── <feature>/
│   ├── shadcn-utils/            # helpers exclusivos do shadcn (cn, formatPrice) — alias @/shadcn-utils
│   ├── types/                   # *.d.ts (augmentations de Next-Auth, etc)
│   ├── test/                    # setup de testes (jsdom, mocks GSAP/Lenis)
│   └── middleware.ts            # proteção de rotas
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   ├── sql/                     # migrações manuais (se aplicável)
│   └── CLAUDE.md
├── e2e/                         # Playwright specs
├── public/
├── scripts/                     # scripts pontuais (admin setup, seeds extras)
├── docs/                        # ARQUITETURA.md + decisões longas
├── INIT.md                      # boot per-projeto (gerado via [[Project INIT Template]])
├── CLAUDE.md                    # raiz do projeto (regra global universal)
├── next.config.ts
├── tsconfig.json
├── components.json              # shadcn config
├── eslint.config.mjs
├── playwright.config.ts
├── vitest.config.ts
├── package.json
└── pnpm-lock.yaml
```

**Regra de dependência (mesmo monolito Next.js):**
- Server Components chamam `src/lib/*` diretamente (NÃO fetcham própria API).
- Route Handlers em `src/app/api/*` são para clientes externos / Client Components.
- `src/lib/` é a camada de domínio + dados; `src/components/` é só UI.

### Next.js Standalone Fullstack — Hexagonal (recomendado quando 4+ sinais favoráveis)

```
src/lib/<bounded-context>/
├── domain/                       # entities + value objects + regras puras (ZERO Prisma/Auth/MP/framework)
├── application/
│   ├── use-cases/                # AddItemToCart, ConfirmPayment, etc
│   └── ports/                    # ICartRepository, IPaymentGateway, IEmailSender
├── infrastructure/
│   ├── persistence/              # PrismaCartRepository (implementa ICartRepository)
│   └── external/                 # MercadoPagoGateway, ResendEmailSender, CloudinaryStorage
├── presentation/                 # Server Actions (consumidas por src/components/ ou src/app/)
└── CLAUDE.md
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
| **DX obrigatória** | `pnpm add -D prettier prettier-plugin-tailwindcss husky lint-staged` — ver §Dependências Obrigatórias de DX |
| **Tooling obrigatório** | SpecKit + Impeccable + Higgsfield (opt-out) + skills Next.js — ver §Ferramentas Obrigatórias de Bootstrap |

> Fonte dos comandos: [pnpm docs](https://pnpm.io/cli/add) | [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)

### Ferramentas Obrigatórias de Bootstrap

> **Inegociável (sob R7 + matriz canon linha 17 de [[Master Pipeline & Enforcement]]).** Todo projeto novo bootstrapped via [[Protocol-Bootstrap]] instala este tooling. Comandos verificados em 2026-07-08 — se algum falhar, revalidar via Context7/site oficial e atualizar a KB.

| Ferramenta | Comando | Condição | Referência |
|---|---|---|---|
| **SpecKit** | `uvx --from git+https://github.com/github/spec-kit.git specify init .` | Sempre | [[Spec-Kit Reference]] |
| **Impeccable** | `npx skills add pbakaus/impeccable` → depois `/impeccable init` no Claude Code (gera `DESIGN.md`) | Sempre que o projeto tem UI | [[Impeccable Reference]] |
| **Higgsfield skills** | `npx skills add higgsfield-ai/skills` | Padrão; **pular se** `midia: "nao"` no frontmatter do `01-Escopo.md` (registrar opt-out no `05-Dev-Log`) | [[Higgsfield Skills Reference]] |
| **Context7 MCP** | Verificar disponibilidade + consultar antes de qualquer decisão de lib | Sempre | §Context7 (MCP) |
| **Skills Next.js** | `npx skills add vercel/next.js` (oficiais; `next dev` 16.3+ também gera AGENTS.md/CLAUDE.md com docs bundled) | Se `frontend_stack` contém Next.js | [[Next.js Foundations (Vercel Academy)]] |

> ⚠️ Comandos `npx`/`uvx` são de terminal (entram no `setup.js`, seção TOOLING). `/impeccable init` é comando de **agente** — roda no Claude Code após o setup, nunca dentro do `setup.js`.

### Dependências Obrigatórias de DX

> **Inegociável (sob R7).** Todo projeto novo instala e configura estas ferramentas no bootstrap (via `setup.js`, seção TOOLING). Objetivo: experiência de desenvolvimento lisa — formatação, ordenação de classes e qualidade garantidas automaticamente, sem depender de disciplina manual.

| Pacote | Papel | Configuração canônica mínima |
|---|---|---|
| **`prettier`** | Formatação automática de todo o código | `.prettierrc` na raiz: `{ "semi": true, "singleQuote": false, "printWidth": 100, "plugins": ["prettier-plugin-tailwindcss"] }` |
| **`prettier-plugin-tailwindcss`** | **Ordena as classes Tailwind automaticamente** (ordem recomendada oficial) | Declarado em `plugins` do `.prettierrc` — deve ser o **último** plugin da lista |
| **`husky`** | Git hooks versionados | `pnpm exec husky init` → hook `pre-commit` chama `lint-staged` |
| **`lint-staged`** | Roda lint + format **só nos arquivos staged** (commit rápido) | `package.json`: `"lint-staged": { "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"], "*.{md,json,css}": ["prettier --write"] }` |
| **ESLint** (flat config) | Lint — já vem do `create-next-app` / scaffold do framework | `eslint.config.mjs` do scaffold; nunca desativar regras sem justificativa no `05-Dev-Log` |
| **`.editorconfig`** | Consistência de indentação/EOL entre editores | `indent_style = space`, `indent_size = 2`, `end_of_line = lf`, `insert_final_newline = true` |
| **TypeScript `strict`** | Já regra da stack (§TypeScript) | `"strict": true` no `tsconfig.json` — verificado no bootstrap |

**Opcional documentado (não obrigatório):** `commitlint` + `@commitlint/config-conventional` quando o projeto exigir histórico de commits padronizado (conventional commits).

> Comandos: `pnpm add -D prettier prettier-plugin-tailwindcss husky lint-staged` + `pnpm exec husky init`. O `setup.js` gera `.prettierrc`, `.editorconfig` e o hook `pre-commit` — [[Setup Script Template]].

### Regras do Bootstrap

- Nunca instalar dependências fora da stack aprovada sem aprovação explícita.
- Conflitos com a stack: sinalizar e aguardar decisão antes de instalar.
- Após bootstrap: registrar dependências instaladas com versões em `05-Dev-Log.md`.
- `setup.js` lê `01-Escopo.md` em runtime via `path.join(__dirname, ...)` — sem dados hardcoded.
- `setup.js` usa o campo `package_manager` do frontmatter para gerar os comandos corretos — nunca hardcoda `npm` ou `pnpm` diretamente.
- `setup.js` lê o campo `midia` do frontmatter (default `"sim"`): se `"nao"`, pula a instalação do Higgsfield e o registra como opt-out.
- Bootstrap não termina sem o Quality Gate de tooling do [[Protocol-Bootstrap]] (SpecKit init, Impeccable + `DESIGN.md`, Higgsfield ou opt-out, skills Next.js se aplicável, Context7 consultado).

---

## Fluxo Criativo de Front-end

> **Canon completo: [[Frontend Creative Protocol]].** Todo projeto com front/UI passa por ele ANTES de qualquer código de front. Resumo das regras que também valem como preferência permanente:

### Referências Visuais

- **Fontes de busca canônicas:** Awwwards, Dribbble, Pinterest, Squarespace (templates) — sites inteiros, sections, componentes, efeitos e insights.
- **Sites-inspiração do dev** (paleta e nível de qualidade a perseguir): landonorris.com · igloo.inc · species-in-pieces.com · loiseau.framer.website · nextsense.io · buckssauce.com · nymphaicosmetics.com · more-nutrition.webflow.io · cipherdigital.com · day1-run.webflow.io · nudot.com.tw · terminal-industries.com · oryzo.ai — lista completa com URLs em [[Frontend Creative Protocol]] §Fase 1.3.
- **Código-fonte extraído das refs** vive em `refs/` na raiz do repo do projeto, em `.md` — **gitignored sempre** (nunca commitado), deletada após conclusão do front. CF é estudo/fidelidade; implementação final é re-escrita na stack canon.

### Identidade Visual

- **Default: tons pastéis** — equilíbrio visual, contraste WCAG e tom. Paleta registrada no `DESIGN.md` (Impeccable) e nos tokens do Tailwind.

### Mídia para Web

- **Formato de imagem: AVIF (1ª escolha) + WebP (fallback)** — conversão em lote via `sharp`; avulsa via Squoosh. WEBP puro é o **mínimo aceitável** quando AVIF não for viável. Matriz completa em [[Asset Sizing Standard]].
- **Vídeo: padrão cinematográfico** — máster ≥ 1080p (4K para hero), entrega WebM VP9 + MP4 fallback via ffmpeg, poster frame obrigatório. [[Asset Sizing Standard]] §Vídeo. **GIF proibido**; vetor animado via Lottie.
- **Ingestão de assets do cliente:** o cliente apenas envia; **o dev inputa** (inventário no Kickoff/`00-DNA.md`). Normalização obrigatória: enhance → resize pela matriz → AVIF+WebP / transcode ffmpeg. Asset abaixo do padrão = pedir original melhor ou regenerar — [[Frontend Creative Protocol]] §Fase 6.0.
- **Enhance:** Upscayl (open source, local, gratuito).
- **Geração:** SEMPRE via skills instaladas — Higgsfield skills (bootstrap linha 17) ou MCP de geração conectado + [[GPT-Image Prompt Galleries]] + [[Asset Sizing Standard]]; prompts complexos e completos derivados da paleta/identidade (`DESIGN.md`). Sem orçamento → alternativas gratuitas ([[Frontend Creative Protocol]] §Fase 6): Google AI Studio, Recraft, Leonardo.ai/Ideogram, ComfyUI/Fooocus local; vídeo via Kling/Hailuo/Luma ou substituição por GSAP/Three.js.
- **Image-to-video:** slot que pode virar vídeo → gerar **frame inicial + frame final** (mesmo ratio/estilo/seed); imagem que será animada no site → bleed extra ~10–15%; fundo transparente → declarado no prompt com saída alpha. [[Asset Sizing Standard]] §Imagens para animação.
- **Porta de entrada de projeto:** `00-Input.md` gerado a partir do [[Project Kickoff Input Template]] (matriz canon linha 20) — DNA do projeto (refs + identidade + paleta + assets) pronto ANTES do front.

### Princípios de Web Design (inegociáveis em todo front)

Arquitetura da informação · hierarquia visual · multi-dispositivo · acessível e inclusivo · cores com equilíbrio/contraste/tom · layout que conduz os olhos · espaço negativo destacando conteúdo · informação importante primeiro · navegação fácil · design que se destaca. Checklist completo em [[Frontend Creative Protocol]] §Fase 7.

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
- Fetching client-side via TanStack Query (`@tanstack/react-query`) — `useEffect` para data fetching proibido.
- Projeto Next.js: ler [[Next.js Foundations (Vercel Academy)]] antes de `/speckit.plan`.

### TanStack Start
- TanStack Router como roteamento (type-safe, nativo do framework).
- Server functions via `createServerFn()` com validação Zod obrigatória em toda entrada.
- TanStack Query para fetching/cache; scaffold via `pnpx create-start-app` (pnpm).
- Status Release Candidate: consultar Context7 para breaking changes antes de iniciar o projeto.
- Detalhes: [[TanStack Reference]].

### Vue.js 3+
- Composition API obrigatório. Options API proibida.
- `<script setup>` como padrão. Props e emits tipados com `defineProps` / `defineEmits`.
- Pinia para state management (Vuex banido).
- Vite como bundler padrão.
- Fetching via `@tanstack/vue-query` (padrão de fetching do vault, ver [[TanStack Reference]]).

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

### Three.js
- **Aprovado na stack** — usar **quando couber**: peso do bundle vs. impacto visual avaliado e registrado no `03-Planejamento`.
- Cena 3D nunca bloqueia o first paint — lazy load do canvas + fallback estático (imagem WEBP) para dispositivos fracos e `prefers-reduced-motion`.
- Consultar Context7 antes de usar (API muda com frequência entre releases).

### Imagens e Mídia Web
- **AVIF (1ª escolha) + WebP (fallback) obrigatório** para todo asset raster servido ao navegador (conversão de PNG/JPEG via `sharp` em script do projeto, ou Squoosh). WEBP puro = mínimo aceitável quando AVIF não for viável no pipeline. Matriz de tamanhos/formatos: [[Asset Sizing Standard]].
- **Vídeo ≥ 1080p** (4K para hero full-bleed), entrega **WebM VP9 + MP4 H.264 fallback** via ffmpeg, poster frame AVIF/WebP obrigatório, `prefers-reduced-motion` → poster. [[Asset Sizing Standard]] §Vídeo.
- **GIF proibido** em entrega web — transcodificar para WebM/MP4. Vetor animado → **Lottie** (aprovado).
- Enhance/upscale via Upscayl antes da conversão, quando necessário. Nunca upscale de vídeo/imagem final.
- Geração de mídia **sempre via skills instaladas** (Higgsfield skills / MCP de geração + [[GPT-Image Prompt Galleries]] + [[Asset Sizing Standard]]): [[Frontend Creative Protocol]] §Fase 6.
- Slots animáveis: frames inicial/final para image-to-video, bleed ~10–15%, alpha declarado no prompt — [[Asset Sizing Standard]] §Imagens para animação.

### Segurança de Front-end (Cybersecurity)

> Inegociável em todo projeto com front — site institucional, landing page ou app. Checklist aplicado no [[Frontend Creative Protocol]] §Fase 10 antes do Quality Gate final.

- **Security headers obrigatórios** (via `next.config.ts` headers / middleware, ou equivalente da stack):
  `Content-Security-Policy` (CSP — bloquear inline script não autorizado), `Strict-Transport-Security` (HSTS), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (desativar câmera/mic/geo não usados), `frame-ancestors 'none'` na CSP (anti-clickjacking; substitui X-Frame-Options).
- **Zero segredos no client:** apenas variáveis explicitamente públicas recebem prefixo `NEXT_PUBLIC_` (ou equivalente); API keys, tokens e secrets vivem só no server. Env vars validadas com **zod** no boot da aplicação (falha rápida se faltar/vazar).
- **XSS:** `dangerouslySetInnerHTML` proibido sem sanitização via **DOMPurify**; toda entrada de usuário validada com **zod no client E no server**; nunca contornar o output encoding padrão do React/Vue.
- **Formulários públicos** (contato, newsletter, orçamento): validação server-side sempre + **rate limiting** + honeypot e/ou **Cloudflare Turnstile** (anti-spam/bot). E-mail de destino nunca exposto no HTML.
- **Cookies/sessão:** `httpOnly`, `secure`, `sameSite: 'lax'|'strict'` — token de sessão em `localStorage` proibido.
- **Dependências:** `pnpm audit` no CI (falha em vulnerabilidade `high`/`critical`); lockfile sempre commitado; dependência nova só dentro da stack aprovada (R7).
- **Embeds/terceiros:** iframes com `sandbox` + `referrerpolicy`; scripts de terceiros só com justificativa registrada no `03-Planejamento`.
- **Uploads/mídia** (quando o front aceita arquivos): validar tipo MIME real e tamanho **no server**; nunca confiar na extensão/`Content-Type` do client.

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

