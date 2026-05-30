---
template: "Dev Log"
version: 1.0
status: "Ativo — Em Rodada 1"
tags:
  - dev-log
  - progresso
  - decisoes
  - belessence
projeto: "Belessence"
cliente: "Belessence (Mari Beauty)"
data_inicio: "2026-04-05"
---

# 📓 05-Dev-Log — Belessence (Mari Beauty)

> **Append-only.** Nunca apagar entradas antigas — corrigir com nova entrada referenciando a anterior.
>
> **Histórico:** este arquivo está sendo criado em **2026-05-30** retroativamente para consolidar 2 meses de evolução do projeto que não estavam registradas no vault. Entradas anteriores a 2026-05-30 são reconstruídas a partir de commits, código atual e do log de sessão `[[2026-04-05-Belessence-Refatoracao-Fase1]]`.

---

## Estado Atual

| Campo | Valor |
|---|---|
| **Timestamp** | 2026-05-30 |
| **Fase atual** | Vault Refresh (Rodada 1) |
| **Tarefa em progresso** | T-1.10 (este arquivo) |
| **Bloqueios** | Nenhum |

**Resumo em 3 bullets:**
- Vault sendo sincronizado com estado real do código após 2 meses de drift.
- `Preferencias Dev` atualizada com variante Next.js Standalone Fullstack + Stack Estendida Ecommerce + regra CLAUDE.md universal.
- 01-Escopo reescrito v3.0 mudando classificação pra Refatoração Full-stack; 02-Contrato, 03-Planejamento, 04-Tarefas gerados.

---

## Decisões Tomadas

> Cronologia retroativa + decisões da rodada atual.

### 2026-04-05 — Fase 1 (Refatoração Frontend) — Retroativo

| Data | Decisão | Justificativa | Impacto | Ref |
|---|---|---|---|---|
| 2026-04-05 | Substituir Framer Motion por GSAP + Lenis | Stack aprovada em `[[Preferencias Dev]]`; framer é mais pesado e não integra com Lenis | Removeu `framer-motion`; adicionou `gsap @gsap/react lenis` | US-2.X |
| 2026-04-05 | Cart de useState/Context → Zustand | Sem devtools/persist/seletores antes; Zustand resolve | Wrapper Zustand em `src/lib/cart-store.ts` | Fase 1 |
| 2026-04-05 | `page.tsx` virou Server Component | SEO + performance + elimina data fetching client | `useEffect` removido, Prisma direto via RSC | Fase 1 |
| 2026-04-05 | Prisma singleton + `products-db.ts` | Banco como fonte da verdade; `src/api/products.ts` (mock) deprecado | Singleton em `src/lib/prisma.ts` | Fase 1 |
| 2026-04-05 | LenisProvider no layout root + `gsap.ticker` | Lenis precisa ser singleton; integra com ScrollTrigger | `src/components/providers/lenis-provider.tsx` | Fase 1 |
| 2026-04-05 | Vitest + Playwright setup | TDD obrigatório (`[[Preferencias Dev]]`) | `vitest.config.ts` + `playwright.config.ts` + 9 testes do cart-store | Fase 1 |

### Abril–Maio 2026 — Evolução não documentada no vault (Change Requests retroativos)

| Decisão | Justificativa | Impacto |
|---|---|---|
| **Auth.js v5 (NextAuth) com PrismaAdapter + estratégia JWT** | Necessário pra implementar conta de usuário e privacidade de cart/wishlist. `strategy: "jwt"` é mandatório com credentials provider. | Adicionou `next-auth@5.0-beta.31`, `@auth/prisma-adapter`, `bcryptjs`, `jose`. Tabelas `User/Account/Session/VerificationToken` no schema Prisma. Modal AuthDialog que guarda ação pendente. |
| **Cart/Wishlist privados por usuário no banco** | Cart em localStorage GLOBAL vazava entre usuários do mesmo browser (próximo logado via dados do anterior). | Tabelas `CartItem` + `WishlistItem` com `userId` FK + `@@unique([userId, productId])`. Zustand stores viram CACHE do servidor (sem persist). `auth-data-sync.tsx` hidrata no login e zera no logout. |
| **Admin com bcrypt + TOTP + lockout** | Painel `/admin/*` precisa proteção forte; senha simples não basta. | Adicionou `otplib` (TOTP) + `bcryptjs` (hash) + lockout temporário após N falhas. Cookie `admin_session` assinado com `jose` validado no middleware. |
| **Admin login alternativo: Google OAuth com allowlist** | Conveniência de login pra dona da banca sem precisar lembrar TOTP toda hora. | `arctic` para OAuth Google. Allowlist de emails autorizados. |
| **Mercado Pago como gateway** | Padrão BR; suporta PIX/cartão/boleto; lib oficial Node estável. | `mercadopago@2.4` + webhook `/api/checkout/webhook` que dá baixa atômica no estoque. |
| **Cloudinary para mídia** | Storage + delivery + transformações on-the-fly. Vercel Blob seria alternativa, mas Cloudinary tem free tier melhor pra catalogo de imagens. | `cloudinary` + `next-cloudinary`; `res.cloudinary.com` no `next.config.ts` remotePatterns. |
| **Resend pra email transacional** | API simples; templates React via `react-email`. | `resend@4` + `@react-email/components` + `@react-email/render`. |
| **Recharts pra dashboards admin** | Lib React-native, leve, suficiente pra gráficos simples de pedidos/produtos. | `recharts@3.8`. |
| **Schema Prisma evoluiu**: adicionou `User`, `Account`, `Session`, `VerificationToken`, `CartItem`, `WishlistItem`, `AdminUser`, `Coupon`, `Order`, `OrderItem`, `Review`, `Message` | Cada feature acima exige tabelas próprias. | Migrations executadas. |
| **`src/api/` mantido como pasta de helpers shadcn** | Alias do shadcn (`utils → @/api/utils`, `lib → @/api`) — renomear seria custo alto | Confusão visual com `src/app/api/` documentada em `src/api/CLAUDE.md`. **Decidido em 2026-05-30:** vai ser renomeado pra `src/shadcn-utils/` na Rodada 3. |
| **Checkout parcial** | Usuária pode ter 5 itens mas só finalizar 3 | UI permite seleção; preço relido do banco no servidor (não confia no client) |

### 2026-05-30 — Rodada 1 (Vault Refresh — esta rodada)

| Data | Decisão | Justificativa | Impacto | Ref |
|---|---|---|---|---|
| 2026-05-30 | Adicionar variante "Next.js Standalone Fullstack — Layered" ao `Preferencias Dev` | Belessence escolheu monolito Next.js sem NestJS; canon precisava cobrir | Novo padrão arquitetural aprovado para projetos onde back+front vivem no mesmo Next | US-1.1 |
| 2026-05-30 | Adicionar variante "Next.js Standalone Fullstack — Hexagonal" | Pra quando 4+ sinais favoráveis (caso Belessence) | Estrutura `src/lib/<bc>/{domain,application,infrastructure,presentation}` | US-1.1 |
| 2026-05-30 | Adicionar §Stack Estendida — Ecommerce em `Preferencias Dev` | Libs adicionadas em abril/maio (Auth.js, MP, Cloudinary, Resend, recharts) precisavam estar registradas | R7 não vai mais acusar Belessence; novas decisões similares ganham padrão | US-1.2 |
| 2026-05-30 | Adicionar regra CLAUDE.md universal (§Filosofia §4) + R8 no CLAUDE.md raiz | Boundary explícito é a melhor doc; IA fria entra em qualquer pasta e sabe o nicho | Validator vai falhar se faltar; toda pasta nova precisa CLAUDE.md primeiro | US-1.3 |
| 2026-05-30 | Mudar classificação do projeto: Refatoração de Frontend → **Refatoração Full-stack** | Backend (Route Handlers + Auth + MP) já existe; classificação antiga estava incorreta | `[[Dynamic Contract Engine]]` injeta agora cláusulas de Auditoria Prévia + Isenção Downtime no `02-Contrato.md` | Classificação |
| 2026-05-30 | Plano executivo em 4 rodadas (Vault → Limpeza → Rename src/api/ → Hexagonal por bounded context) | Sequência mais segura: doc antes de código, quick wins antes de refactor pesado | Plan salvo em `C:\Users\ADM\.claude\plans\f-1-zeca-1-repositorio-documentos-meusp-foamy-barto.md` | Plan |
| 2026-05-30 | Decisão Hexagonal pra `src/lib/`: matriz 5/6 favoráveis → aplicar | Domínio rico + múltiplos I/O + troca infra alta + testes críticos + médio prazo | Rodada 4 vai quebrar `src/lib/` em 12 bounded contexts hexagonais | US-4.1 |

---

## Dependências Instaladas (com versão)

> Snapshot do `package.json` atual (2026-05-30).

### Produção

| Pacote | Versão | Tipo | Motivo | Data aprox. |
|---|---|---|---|---|
| `next` | 16.0.10 | prod | Framework | 2026-04-05 |
| `react` + `react-dom` | 19.2.0 | prod | UI | 2026-04-05 |
| `@prisma/client` | ^7.2.0 | prod | ORM | 2026-04-05 |
| `@prisma/adapter-pg` | ^7.6.0 | prod | Driver adapter Postgres pra Prisma 7 | 2026-05 (refactor pg) |
| `pg` | ^8.20.0 | prod | Driver Postgres puro (usado pelo adapter) | 2026-05 |
| `@auth/prisma-adapter` | ^2.11.2 | prod | Auth.js + Prisma | 2026-04 |
| `next-auth` | 5.0.0-beta.31 | prod | Auth | 2026-04 |
| `arctic` | ^3.7.0 | prod | OAuth helpers (admin Google) | 2026-04 |
| `bcryptjs` | ^3.0.3 | prod | Hash de senha | 2026-04 |
| `jose` | ^6.2.3 | prod | JWT sign/verify Edge-safe (cookie admin_session) | 2026-04 |
| `otplib` | ^13.4.0 | prod | TOTP admin | 2026-04 |
| `mercadopago` | ^2.4.0 | prod | Gateway de pagamento | 2026-05 |
| `cloudinary` | ^2.10.0 | prod | Storage de mídia | 2026-04 |
| `next-cloudinary` | ^6.17.5 | prod | Helpers Next.js | 2026-04 |
| `resend` | ^4.0.0 | prod | Email transacional | 2026-05 |
| `@react-email/components` | ^0.0.31 | prod | Templates email | 2026-05 |
| `@react-email/render` | ^1.0.5 | prod | Renderização email | 2026-05 |
| `recharts` | 3.8.0 | prod | Charts admin | 2026-05 |
| `gsap` | ^3.13.0 | prod | Animações | 2026-04 |
| `@gsap/react` | ^2.1.2 | prod | useGSAP hook | 2026-04 |
| `lenis` | ^1.3.4 | prod | Smooth scroll | 2026-04 |
| `zustand` | ^5.0.5 | prod | State client | 2026-04 |
| `nuqs` | ^2.4.3 | prod | URL state | 2026-04 |
| `sonner` | ^2.0.3 | prod | Toast | 2026-04 |
| `lucide-react` | ^0.554.0 | prod | Icons | 2026-04 |
| `react-hook-form` | ^7.57.0 | prod | Forms | 2026-04 |
| `@hookform/resolvers` | ^5.0.1 | prod | RHF + Zod | 2026-04 |
| `zod` | ^3.25.56 | prod | Validação | 2026-04 |
| `@radix-ui/react-*` + `radix-ui` | latest + ^1.4.3 | prod | Primitivos shadcn | 2026-04+ |
| `embla-carousel-react` + `embla-carousel-autoplay` | ^8.6.0 | prod | Carrosséis | 2026-04 |
| `react-day-picker` | ^10.0.1 | prod | Date picker (admin) | 2026-05 |
| `react-resizable-panels` | ^4.11.1 | prod | Painéis admin | 2026-05 |
| `input-otp` | ^1.4.2 | prod | OTP input (TOTP admin) | 2026-04 |
| `cmdk` | ^1.1.1 | prod | Command palette | 2026-04 |
| `vaul` | ^1.1.2 | prod | Drawer (mobile) | 2026-04 |
| `class-variance-authority` | ^0.7.1 | prod | Variants shadcn | 2026-04 |
| `clsx` + `tailwind-merge` | ^2.1.1 + ^3.4.0 | prod | `cn()` helper | 2026-04 |
| `date-fns` | ^4.2.1 | prod | Date utils | 2026-04 |
| `next-themes` | ^0.4.6 | prod | Theme switcher | 2026-04 |
| `tsx` | ^4.21.0 | prod | Run TS scripts (seed) | 2026-04 |

### Dev

| Pacote | Versão | Tipo | Motivo |
|---|---|---|---|
| `typescript` | ^5 | dev | Linguagem |
| `@types/node` + `@types/react` + `@types/react-dom` + `@types/bcryptjs` + `@types/pg` | latest | dev | Types |
| `prisma` | ^7.2.0 | dev | CLI Prisma |
| `vitest` + `@vitest/ui` + `@vitest/coverage-v8` | ^3.1.1 / latest / 3.2.4 | dev | Testes unit |
| `@vitejs/plugin-react` | ^4.4.1 | dev | Vite plugin |
| `@testing-library/react` + `@testing-library/jest-dom` + `@testing-library/user-event` | ^16.3.0 / ^6.6.3 / ^14.6.1 | dev | Testing utils |
| `jsdom` | ^26.1.0 | dev | DOM em testes |
| `@playwright/test` | ^1.52.0 | dev | E2E |
| `eslint` + `eslint-config-next` | ^9 / 16.0.3 | dev | Lint |
| `tailwindcss` + `@tailwindcss/postcss` | ^4 | dev | Styling |
| `tw-animate-css` | ^1.4.0 | dev | Animation utilities Tailwind |
| `ts-node` | ^10.9.2 | dev | Compat |
| `qrcode` + `qrcode-terminal` | ^1.5.4 / ^0.12.0 | dev | Setup admin TOTP via CLI |

---

## Progresso por Épico

### Épico 1: Vault Refresh (Rodada 1)
- [x] T-1.1 Variante Next.js Standalone no Preferencias Dev
- [x] T-1.2 Stack Estendida Ecommerce
- [x] T-1.3 §Filosofia §4 CLAUDE.md Universal
- [x] T-1.4 R8 no CLAUDE.md raiz
- [x] T-1.5 git mv 01-Escopo
- [x] T-1.6 Reescrever 01-Escopo v3.0
- [x] T-1.7 02-Contrato
- [x] T-1.8 03-Planejamento
- [x] T-1.9 04-Tarefas
- [x] T-1.10 05-Dev-Log (este arquivo)
- [ ] T-1.11 06-Erros + propagação
- [ ] T-1.12 INIT.md no repo Belessence
- [ ] T-1.13 MEMORY.md vault
- [ ] T-1.14 Validator sanity

### Épico 2-5: pending (ver `[[04-Tarefas]]`)

---

## Histórico de Sessões

| Data | Hora | Resumo | Log completo |
|---|---|---|---|
| 2026-04-05 | — | Fase 1 da Refatoração Frontend (GSAP, Lenis, Zustand, Prisma, Vitest setup) | `[[Dev/3 - Session Logs/2026-04-05-Belessence-Refatoracao-Fase1]]` |
| 2026-05-30 | — | Rodada 1 Vault Refresh (esta sessão) | Em andamento |

---

## Exceções conscientes ao validator (registradas em T-1.14)

- **`setup.js` inexistente em Belessence:** o validator (`tools/validate-project.js`) espera `setup.js` por padrão (output do `[[Protocol-Bootstrap]]`). Belessence é projeto **pré-existente** (não foi bootstrapped via Protocol-Bootstrap — já tinha código de antes do vault canon existir). Não criar `setup.js` mock só pra satisfazer validator — pseudo-código fake polui o vault. **Plano:** evoluir o validator pra ler do frontmatter de `01-Escopo.md` uma flag `bootstrap: "pre-existente" | "via-protocol"` e pular check de `setup.js` quando `pre-existente`. Issue criada como T-extra-1 (pós-rodada-4).
- **`02-Contrato.md` sem seções jurídicas:** o validator espera seções do template original (Objeto, Forma de Execução, Obrigações, Vigência). Belessence é auto-contrato (cliente = dev) e o contrato tem estrutura simplificada apropriada. **Plano:** adicionar campo `tipo_contrato: "auto" | "comercial"` ao frontmatter; validator só checa as seções jurídicas se `comercial`. Issue T-extra-2.

## Pendentes para Próxima Sessão

- [ ] Iniciar Rodada 2 (Limpeza + CLAUDE.md universal)
- [ ] Considerar criar branch dedicada por rodada pra facilitar rollback
- [ ] T-extra-1: melhorar validator pra suportar projetos pre-existentes (sem setup.js obrigatório)
- [ ] T-extra-2: melhorar validator pra suportar auto-contrato (sem cláusulas jurídicas obrigatórias)

---

## Quality Gate

- [x] Artefato foi gerado a partir de `[[Dev Log Template]]` como base
- [x] Estado atual reflete o último timestamp registrado
- [x] Toda decisão técnica tem justificativa e impacto declarados
- [x] Dependências instaladas têm versão (snapshot do package.json atual)
- [x] Pendentes da sessão atual foram listados

---

## Referências

- `[[01-Escopo]]` — escopo do projeto
- `[[04-Tarefas]]` — backlog granular
- `[[06-Erros]]` — registro local de erros
- `[[Dev/3 - Session Logs/MEMORY]]` — memória episódica global
- `[[Session Protocol]]` — boot/shutdown canônico
- `[[Protocol-Bootstrap]]` — protocolo que inicializou estes arquivos
- `[[Dev/3 - Session Logs/2026-04-05-Belessence-Refatoracao-Fase1]]` — log da Fase 1
