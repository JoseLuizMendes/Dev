---
template: "Requirements & Scope"
version: 3.0
status: "Em Refatoração — Rodadas 2-4 pendentes"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
  - refatoração
  - fullstack
  - ecommerce
cliente: "Belessence (Mari Beauty)"
projeto: "Belessence"
nicho: "Ecommerce de Perfumaria"
classificacao: "Refatoração Full-stack"
data_inicio: "2026-04-05"
data_entrega: "A definir — fim da Rodada 4"
valor: "Projeto Pessoal"
package_manager: "pnpm"
frontend_stack: "Next.js 16 (App Router) + React 19 + Tailwind 4 + Shadcn/ui"
backend_stack: "Next.js Route Handlers + Prisma 7 + PostgreSQL — monolito Next.js Standalone Fullstack (sem NestJS, conforme [[Preferencias Dev#Next.js Standalone Fullstack — Layered]])"
cloud_stack: "Vercel"
dependencies: "next-auth @auth/prisma-adapter arctic bcryptjs jose otplib mercadopago cloudinary next-cloudinary resend @react-email/components @react-email/render recharts @prisma/adapter-pg pg embla-carousel-react embla-carousel-autoplay react-day-picker react-resizable-panels input-otp cmdk vaul tailwind-merge class-variance-authority"
email_service: "Resend"
storage_service: "Cloudinary"
payment_gateway: "Mercado Pago"
bootstrap: "pre-existente"
tipo_contrato: "auto"
---

# 📋 Formulário de Escopo e Requisitos: Belessence (Mari Beauty)

> **Histórico:** v1.0 (2026-04-05) cobria apenas "Refatoração de Frontend Fase 1" — GSAP/Lenis, Zustand, Prisma connection, Vitest. v3.0 (2026-05-30) consolida **escopo retroativo** após 2 meses de evolução não documentada no vault: auth completo, admin com TOTP, pagamento Mercado Pago, cart/wishlist privados por usuário no banco, Cloudinary, Resend transacional. Mudança de `Refatoração de Frontend` → **`Refatoração Full-stack`** (aciona cláusulas dinâmicas diferentes no [[Dynamic Contract Engine]]).
>
> **Stack standalone:** Belessence usa Next.js fullstack (Route Handlers + Prisma direto), não NestJS. Aprovado conforme `[[Preferencias Dev#Next.js Standalone Fullstack — Layered]]`.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Belessence (operada como marca "Mari Beauty") |
| **Ponto de Contato (PO)** | Zeca (José Luiz Mendes) |
| **Nicho de Mercado** | Ecommerce — Perfumaria Boutique |
| **Data de Início** | 2026-04-05 |
| **Previsão de Entrega** | A definir (Rodadas 2-4 desta plan) |
| **Valor do Projeto** | Projeto Pessoal |
| **Repo de código** | `F:\1-ZECA\1-Repositorio\Documentos\MeusProjetos\Belessence\frontend\belessence\` |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central

- **Quem sente a dor:** o próprio dev (única pessoa mantendo o repo). E uma IA fria entrando no projeto pra dar manutenção.
- **Sintoma observável:** `src/lib/` virou catch-all com 21+ arquivos misturando data layer, server actions, stores client, design tokens, GSAP helpers e validações Zod em uma pasta plana — impossível saber rapidamente onde mexer pra alterar carrinho, auth, ou pagamento sem ler tudo. `src/api/` confunde com `src/app/api/`. Vault canônico (`Dev/2 - Projects/Ecommerce/Belessence/`) ficou congelado em escopo de 2026-04-05 enquanto o código evoluiu sem registro de Change Request.
- **Causa raiz no negócio:** ausência de bounded contexts, ausência de regra arquitetural (SOLID + Hexagonal não aplicados), falta de `CLAUDE.md` por sub-pasta, escopo do vault desatualizado, libs adicionadas sem passar por R7.
- **Impacto quantificado:** tempo de onboarding de IA fria estimado em horas (deveria ser minutos) por falta de fonte de verdade canônica e por código sem boundary. Risco de regressão alto em mudanças no `src/lib/` por acoplamento implícito.

### 2.2 A Visão da Solução

- **Resultado-chave na entrega:** `src/lib/` quebrado em 12 bounded contexts (auth, cart, wishlist, products, orders, payment, shipping, coupons, reviews, design, motion, shared) com Hexagonal aplicado (Domain/Application/Infrastructure/Presentation isolados). Toda pasta com `CLAUDE.md`. Vault sincronizado: artefatos 01-06 + INIT.md per-projeto.
- **Métrica de sucesso (número concreto):** `node tools/validate-project.js --code-path` passa sem erros; `grep -r "@/api/" src/` retorna 0 matches; suite Vitest + Playwright verde após cada bounded context migrado.
- **Horizonte de impacto:** após Rodada 4 — qualquer IA cooperativa consegue navegar o repo via CLAUDE.md por pasta + R7 + Filosofia, e propor mudanças dentro do canon sem improvisar.

### 2.3 Público-Alvo (do produto Mari Beauty)

- **Persona primária:** mulher 25–40 anos, classe B/A, aprecia perfumaria como experiência sensorial e ritual de luxo acessível. Consome conteúdo visual no Instagram/Pinterest. Espera que o site reflita a sofisticação do produto.
- **Persona secundária:** homem comprando presente para parceira. Precisa de navegação intuitiva, descrições claras e confiança visual para converter. Também: admin (dona da banca) editando produtos, cupons, pedidos no painel `/admin`.
- **Contexto de uso:** mobile (Instagram → site) e desktop (compra reflexiva). Browser-only — sem app mobile.
- **Volume estimado:** dezenas a centenas de usuários/dia (boutique, não massa). Admin: 1 usuária ativa.

### 2.4 Métricas de Sucesso (KPIs)

| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP | < 2.5s |
| **Performance** | FID / INP | < 100ms |
| **Performance** | CLS | < 0.1 |
| **Performance** | Bundle size | < 500kb gzipped |
| **Negócio** | Taxa de conversão (produto → checkout) | +30% vs. atual |
| **Qualidade** | Cobertura de testes E2E (Playwright) | 100% dos fluxos críticos |
| **Qualidade** | Conformidade WCAG | 2.1 AA |
| **Visual** | Lighthouse Performance Score | ≥ 90 |
| **Arquitetura** | Bounded contexts isolados (domain sem framework imports) | 12/12 |
| **Doc** | Pastas com CLAUDE.md (regra R8) | 100% |

---

## 3. Classificação do Serviço

- [ ] **Frontend do Zero**
- [ ] **Full-stack do Zero**
- [ ] **Refatoração de Frontend** (era a classificação v1.0 — desatualizada)
- [x] **Refatoração Full-stack** (v3.0)

**Justificativa da mudança:** o que começou como refactor frontend evoluiu pra fullstack — backend (Route Handlers + Prisma + Auth.js + Mercado Pago webhook), admin com TOTP, módulo de pagamento, módulo de email transacional. Cláusulas dinâmicas que se aplicam agora (ver `[[Dynamic Contract Engine]]`):

- Pré-requisito de Auditoria Técnica
- Isenção de Tempo de Inatividade (Downtime)

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Stack consultada via Context7:** Next.js 16 App Router, Prisma 7, Auth.js v5, GSAP 3.13.

### Módulo 1: Vault Sync + Arquitetura (Rodada 1 — esta rodada)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como dev, quero `Preferencias Dev` cobrindo Next.js Standalone Fullstack para que R7 não acuse Belessence | **GIVEN** `[[Preferencias Dev#Estrutura de Pastas por Stack]]` **WHEN** procuro variante para Next.js sem NestJS **THEN** existe subsection "Next.js Standalone Fullstack — Layered" com layout canon | 🔥 Alta |
| **US-1.2** | Como dev, quero as libs Auth.js/Mercado Pago/Cloudinary/Resend listadas como aprovadas para que adicioná-las não dispare R7 | **GIVEN** §Stack Estendida — Ecommerce em `[[Preferencias Dev]]` **WHEN** o validator checa libs **THEN** todas estão registradas com justificativa | 🔥 Alta |
| **US-1.3** | Como dev, quero regra "CLAUDE.md universal" no canon para que qualquer pasta sem CLAUDE.md falhe o validator | **GIVEN** R8 do `[[CLAUDE]]` raiz **WHEN** crio pasta nova durante refactor **THEN** sou obrigado a criar CLAUDE.md antes de continuar | 🔥 Alta |
| **US-1.4** | Como dev, quero o projeto Belessence no vault com os 6 artefatos canon + INIT.md | **GIVEN** `Dev/2 - Projects/Ecommerce/Belessence/` **WHEN** listo os arquivos **THEN** existem `01-Escopo`, `02-Contrato`, `03-Planejamento`, `04-Tarefas`, `05-Dev-Log`, `06-Erros`; e `INIT.md` está na raiz do repo de código | 🔥 Alta |

### Módulo 2: Limpeza e CLAUDE.md universal (Rodada 2)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como dev, quero só pnpm no repo para evitar mixed package managers | **GIVEN** repo Belessence **WHEN** rodo `ls` **THEN** existe `pnpm-lock.yaml` e NÃO existe `package-lock.json` nem `pnpm-lock.yaml.110687101` | 🔥 Alta |
| **US-2.2** | Como dev, quero `package.json` com name `mari-beauty` (não `belessence-new`) | **GIVEN** `package.json` **WHEN** leio `name` **THEN** é `mari-beauty` | 🟡 Média |
| **US-2.3** | Como dev, quero `noImplicitOverride` no tsconfig | **GIVEN** `tsconfig.json` **WHEN** leio `compilerOptions` **THEN** contém `noImplicitOverride: true` | 🟡 Média |
| **US-2.4** | Como dev, quero `src/generated/` no .gitignore | **GIVEN** `.gitignore` **WHEN** procuro `src/generated` **THEN** está listado | 🟡 Média |
| **US-2.5** | Como dev, quero arquivos órfãos do parent dir movidos pra `trash/` (não deletados) | **GIVEN** `F:\...\Belessence\` **WHEN** listo conteúdo **THEN** os arquivos soltos (`m.png`, `code.html`, `stitch_mari_beauty_home_desktop*`, etc) estão em `trash/`, não no root | 🟢 Baixa |
| **US-2.6** | Como dev, quero `.agents` e `_agents` consolidados | **GIVEN** parent dir do Belessence **WHEN** listo **THEN** existe apenas um (mesclado se ambos tinham conteúdo único) | 🟢 Baixa |
| **US-2.7** | Como IA cooperativa entrando no repo, quero CLAUDE.md em toda pasta para entender o nicho local | **GIVEN** R8 do `[[CLAUDE]]` **WHEN** rodo `find . -type d -not -path '*/node_modules/*' -not -path '*/.next/*'` **THEN** TODAS retornam um CLAUDE.md presente | 🔥 Alta |

### Módulo 3: Rename src/api/ → src/shadcn-utils/ (Rodada 3)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como dev, quero o nome `src/api/` removido pra acabar com a confusão vs `src/app/api/` | **GIVEN** repo após rename **WHEN** rodo `ls src/` **THEN** não existe `api/` mas existe `shadcn-utils/` | 🔥 Alta |
| **US-3.2** | Como dev, quero `components.json` apontando pros novos aliases | **GIVEN** components.json **WHEN** leio aliases **THEN** `utils: "@/shadcn-utils/utils"` e `lib: "@/shadcn-utils"` | 🔥 Alta |
| **US-3.3** | Como dev, quero zero imports `@/api/` no código | **GIVEN** rename completo **WHEN** rodo `grep -r "@/api/" src/` **THEN** zero matches | 🔥 Alta |
| **US-3.4** | Como dev, quero testes verdes após rename | **GIVEN** rename feito **WHEN** rodo `pnpm test && pnpm test:e2e` **THEN** ambos passam | 🔥 Alta |

### Módulo 4: SOLID + Clean Code + Hexagonal em src/lib/ (Rodada 4)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-4.1** | Como dev, quero `src/lib/` quebrado em 12 bounded contexts para que cada um tenha responsabilidade única (SOLID-S) | **GIVEN** `src/lib/` após refactor **WHEN** listo subpastas **THEN** existem: `auth/`, `cart/`, `wishlist/`, `products/`, `orders/`, `payment/`, `shipping/`, `coupons/`, `reviews/`, `design/`, `motion/`, `shared/` | 🔥 Alta |
| **US-4.2** | Como dev, quero `domain/` de cada bounded context puro (sem framework) para que regras de negócio sejam testáveis sem mock pesado | **GIVEN** `src/lib/<bc>/domain/**` **WHEN** grep `from '@prisma/client'\|from 'next-auth'\|from 'mercadopago'\|from 'cloudinary'\|from 'resend'` **THEN** zero matches | 🔥 Alta |
| **US-4.3** | Como dev, quero ports (interfaces) em `application/ports/` pra que use cases dependam de abstrações (SOLID-D) | **GIVEN** cada bounded context **WHEN** procuro `application/ports/` **THEN** existem interfaces como `ICartRepository`, `IPaymentGateway`, `IEmailSender` | 🔥 Alta |
| **US-4.4** | Como dev, quero adapters em `infrastructure/` implementando ports | **GIVEN** cada bounded context **WHEN** procuro `infrastructure/persistence/` ou `infrastructure/external/` **THEN** existem `PrismaCartRepository`, `MercadoPagoGateway`, `ResendEmailSender`, `CloudinaryStorage` | 🔥 Alta |
| **US-4.5** | Como dev, quero Server Actions em `presentation/` (não soltas no `lib/`) | **GIVEN** cada bounded context **WHEN** procuro `presentation/` **THEN** os antigos `*-actions.ts` estão lá renomeados | 🟡 Média |
| **US-4.6** | Como IA cooperativa, quero `CLAUDE.md` em cada camada (domain, application, infra, presentation) explicando regras locais | **GIVEN** R8 + Hexagonal **WHEN** entro em `src/lib/cart/domain/` **THEN** tem CLAUDE.md explicando "regras puras de carrinho, sem framework" | 🔥 Alta |
| **US-4.7** | Como dev, quero testes Vitest passando após cada bounded context migrado | **GIVEN** sub-rodada de bounded context **WHEN** rodo `pnpm test` **THEN** verde antes de prosseguir pro próximo | 🔥 Alta |

### Módulos 5+: Features de negócio já implementadas (escopo retroativo)

> Features abaixo já existem no código e estão funcionando. Listadas aqui como Change Requests retroativos para fechar o gap do vault.

#### Módulo 5: Autenticação (Auth.js v5)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-5.1** | Como visitante, quero criar conta com email + senha para comprar | **GIVEN** `/cadastro` **WHEN** preencho email + senha válidos **THEN** conta é criada com `passwordHash` via bcrypt e sessão JWT iniciada | ✅ Implementado |
| **US-5.2** | Como visitante, quero fazer login com Google (quando habilitado) | **GIVEN** `AUTH_GOOGLE_ID` setado **WHEN** clico "Entrar com Google" **THEN** OAuth Google flow completa e sessão é criada | ✅ Implementado (cabeado, desligado por padrão) |
| **US-5.3** | Como visitante deslogado, quero o modal de auth ao tentar curtir/comprar | **GIVEN** estou deslogado **WHEN** clico curtir/adicionar carrinho/comprar **THEN** modal `AuthDialog` abre guardando ação pendente; após login a ação executa | ✅ Implementado |
| **US-5.4** | Como admin, quero login protegido por bcrypt + TOTP + lockout | **GIVEN** `/admin/login` **WHEN** preencho email/senha errado 5x **THEN** account fica bloqueada por X minutos (lockout) | ✅ Implementado |
| **US-5.5** | Como admin, quero login por Google com allowlist de email | **GIVEN** `ADMIN_GOOGLE_ALLOWLIST` **WHEN** tento entrar com email fora da lista **THEN** acesso negado | ✅ Implementado |

#### Módulo 6: Carrinho e Wishlist (privados por usuário, no banco)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-6.1** | Como usuário logado, quero meu carrinho persistir entre dispositivos | **GIVEN** estou logado **WHEN** adiciono ao carrinho no PC e abro mobile **THEN** itens aparecem (via banco, não localStorage) | ✅ Implementado |
| **US-6.2** | Como usuário, quero meu carrinho não vazar pro próximo usuário no mesmo browser | **GIVEN** faço logout **WHEN** outro usuário loga no mesmo browser **THEN** stores Zustand são resetadas e carrinho do anterior NÃO aparece | ✅ Implementado |
| **US-6.3** | Como usuário, quero preço relido do banco no carrinho (não confiar no client) | **GIVEN** abro carrinho **WHEN** servidor monta a página **THEN** `CartItem.price` vem de `Product.price` atual via Prisma, não do localStorage | ✅ Implementado |
| **US-6.4** | Como usuário, quero checkout parcial — escolher quais itens finalizar | **GIVEN** tenho 5 itens no carrinho **WHEN** seleciono 3 para checkout **THEN** o pedido é criado com 3, e os outros 2 ficam no carrinho | ✅ Implementado |

#### Módulo 7: Pagamento (Mercado Pago)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-7.1** | Como usuário, quero pagar via Mercado Pago (PIX/cartão/boleto) | **GIVEN** estou no checkout **WHEN** confirmo pedido **THEN** sou redirecionado pro Mercado Pago e webhook confirma pagamento | ✅ Implementado |
| **US-7.2** | Como sistema, quero dar baixa no estoque no webhook de confirmação | **GIVEN** Mercado Pago confirma pagamento **WHEN** webhook chega **THEN** `Product.stock` decrementa atomicamente | ✅ Implementado |

#### Módulo 8: Admin Panel (`/admin/*`)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-8.1** | Como admin, quero CRUD de produtos | **GIVEN** `/admin/products` **WHEN** crio/edito/deleto **THEN** mudança reflete no catálogo público | ✅ Implementado |
| **US-8.2** | Como admin, quero gerenciar pedidos, cupons, mensagens | **GIVEN** `/admin/orders|coupons|messages` **WHEN** acesso **THEN** vejo dashboards com Recharts | ✅ Implementado |

#### Módulo 9: Email transacional (Resend)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-9.1** | Como usuário, quero receber email de confirmação após cadastro | **GIVEN** crio conta **WHEN** registro completa **THEN** Resend envia email com template React | ✅ Implementado (parcial) |
| **US-9.2** | Como usuário, quero receber email do pedido confirmado | **GIVEN** webhook MP confirma pagamento **WHEN** baixa de estoque completa **THEN** Resend envia email transacional do pedido | ✅ Implementado |

#### Módulo 10: Mídia (Cloudinary)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-10.1** | Como admin, quero subir imagens de produto otimizadas | **GIVEN** form de produto **WHEN** subo imagem **THEN** vai pro Cloudinary com transformações on-the-fly | ✅ Implementado |

---

## 5. Arquitetura e Dependências

### 5.1 Stack Atual (Estado 2026-05-30)

| Camada | Tecnologia | Versão | Status |
|---|---|---|---|
| **Framework** | Next.js | 16.0.10 | ✅ Aprovado (Stack Principal) |
| **UI Library** | React | 19.2.0 | ✅ Aprovado |
| **Linguagem** | TypeScript | ^5 | ✅ Aprovado (`strict: true`) |
| **Styling** | Tailwind CSS | ^4 | ✅ Aprovado |
| **Components** | Shadcn/ui (style: new-york) + Radix UI | Latest | ✅ Aprovado |
| **Animação** | GSAP + @gsap/react + Lenis | 3.13 + 2.1 + 1.3 | ✅ Aprovado |
| **State (client)** | Zustand | 5.x | ✅ Aprovado |
| **URL State** | Nuqs | 2.4 | ✅ Aprovado |
| **Forms** | React Hook Form + Zod | 7.57 + 3.25 | ✅ Aprovado |
| **Toast** | Sonner | 2.0 | ✅ Aprovado |
| **Icons** | Lucide React | 0.554 | ✅ Aprovado |
| **ORM** | Prisma | ^7.2 | ✅ Aprovado |
| **Database** | PostgreSQL + @prisma/adapter-pg + pg | — / ^7.6 / ^8.20 | ✅ Stack Estendida |
| **Auth** | next-auth (Auth.js v5) + @auth/prisma-adapter | 5.0-beta.31 + 2.11 | ✅ Stack Estendida |
| **OAuth helpers** | arctic | 3.7 | ✅ Stack Estendida |
| **Crypto** | bcryptjs + jose + otplib | 3.0 + 6.2 + 13.4 | ✅ Stack Estendida |
| **Pagamento** | mercadopago | 2.4 | ✅ Stack Estendida |
| **Mídia** | cloudinary + next-cloudinary | 2.10 + 6.17 | ✅ Stack Estendida |
| **Email** | resend + @react-email/components + @react-email/render | 4.0 + 0.0.31 + 1.0 | ✅ Stack Estendida |
| **Charts (admin)** | recharts | 3.8 | ✅ Stack Estendida |
| **Testes Unit** | Vitest + @testing-library/react + jsdom | ^3.1 + ^16.3 + ^26.1 | ✅ Aprovado |
| **Testes E2E** | Playwright | ^1.52 | ✅ Aprovado |
| **Package Manager** | pnpm | — | ✅ Aprovado (npm/yarn/bun banidos) |
| **Deploy** | Vercel | — | ✅ Aprovado |

### 5.2 Estrutura de Pastas Adotada

Conforme `[[Preferencias Dev#Next.js Standalone Fullstack — Layered]]` (variante aprovada). Migração para variante **Hexagonal** acontece na Rodada 4 (decisão registrada — 5/6 sinais favoráveis).

### 5.3 Decisão Hexagonal (matriz de 6 sinais)

| Sinal | Belessence | Veredicto |
|---|---|---|
| Domínio rico | ecommerce com auth + cart + checkout + admin + cupom + frete + pagamento + email | ✓ Hexagonal |
| Múltiplos canais I/O | REST + Mercado Pago webhook + Resend + Cloudinary | ✓ Hexagonal |
| Probabilidade trocar infra | Alta (gateways de pagamento, providers de email, storage podem mudar) | ✓ Hexagonal |
| Isolamento de testes crítico | Vitest + Playwright já em produção | ✓ Hexagonal |
| Time-to-market | Médio/longo — já passou MVP | ✓ Hexagonal |
| Time/dev | 1 pessoa | ✗ Layered |

**5/6 sinais favoráveis → Hexagonal recomendado.** Aplicar na Rodada 4.

### 5.4 Entidades de Dados (`prisma/schema.prisma`)

Schema atual cobre: `Product`, `ProductStatus`, `Gender`, `Review`, `Order`, `OrderItem`, `Coupon`, `User`, `Account`, `Session`, `VerificationToken`, `WishlistItem`, `CartItem`, `Message`, `AdminUser`. Não será modificado nesta plan — refactor é em `src/lib/`, não no schema.

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [x] LCP < 2.5s | FID/INP < 100ms | CLS < 0.1
- [x] Bundle size < 500kb (gzipped) — auditar após Rodada 4
- [x] Imagens via `next/image` + Cloudinary remotePattern

### 6.2 Segurança
- [x] HTTPS via Vercel (nativo)
- [x] Sanitização Zod em todos os endpoints
- [x] Middleware protege `/admin/*` e `/api/admin/*` com `admin_session` cookie
- [x] Re-validação server-side de preço/estoque/cupom (não confiar no client)
- [x] bcrypt hash + TOTP no admin + lockout
- [ ] OWASP Top 10 — auditar formalmente

### 6.3 Acessibilidade
- [x] `prefers-reduced-motion` respeitado em todas as animações GSAP
- [ ] WCAG 2.1 AA — auditar contraste Dourado sobre branco
- [ ] Navegação por teclado no CartSheet, dropdowns, dialogs

### 6.4 Manutenibilidade (NOVO em v3.0)
- [ ] `src/lib/` em bounded contexts (Rodada 4)
- [ ] Hexagonal: domain puro (sem framework)
- [ ] CLAUDE.md em toda pasta (R8)
- [ ] Validator passa: `node tools/validate-project.js --code-path`

---

## 7. Limites de Escopo e Exclusões

Excluído desta plan (refatoração estrutural):
1. **Mudanças em `src/components/`** — apenas relinkar imports após Rodada 4
2. **Mudanças em `src/app/` (rotas)** — apenas relinkar imports
3. **Mudanças em `prisma/schema.prisma`** — schema fica
4. **Mudanças em `src/generated/`** — gerado pelo Prisma
5. **Refactor visual / design system** — separado
6. **Mobile app nativo** — não há

Solicitações novas exigem: ordem de mudança + replanejamento (R7 + `[[Project Lifecycle Pipeline]]`).

---

## 8. Aprovação

**Cliente/Dev:** José Luiz Mendes — **Data v3.0:** 2026-05-30

---

> **Próximo Passo:** executar Rodadas 2 (limpeza + CLAUDE.md universal), 3 (rename src/api/), 4 (Hexagonal por bounded context) conforme plan em `C:\Users\ADM\.claude\plans\f-1-zeca-1-repositorio-documentos-meusp-foamy-barto.md`.
>
> **Referências:** `[[Preferencias Dev]]` | `[[Project Lifecycle Pipeline]]` | `[[Master Pipeline & Enforcement]]` | `[[Protocol-SpecKit]]` | `[[Protocol-Bootstrap]]` | `[[Dynamic Contract Engine]]` | `[[Mock Pipeline Test]]`
