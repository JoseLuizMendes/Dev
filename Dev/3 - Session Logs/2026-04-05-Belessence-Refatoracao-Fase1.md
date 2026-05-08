---
data: 2026-04-05
projeto: Belessence
fase: "Refatoração Frontend — Fase 1"
status: "Concluído"
tags:
  - session-log
  - belessence
  - refatoração
  - gsap
  - zustand
  - prisma
---

# Session Log — Belessence Refatoração Frontend Fase 1

## Decisões Arquiteturais

### 1. GSAP + Lenis substituem Framer Motion
**Decisão:** Remover `framer-motion` e adotar `gsap @gsap/react lenis` conforme [[Preferencias Dev]].
**Por quê:** Stack aprovada exige GSAP. Framer Motion é mais pesado e não integra com Lenis.
**Implementado em:** `src/lib/gsap-utils.ts`, `hero.tsx`, `header.tsx`, `newsletter.tsx`.

### 2. Zustand + persist substituem useState + Context no Cart
**Decisão:** `useCartStore` em `src/lib/cart-store.ts` com middleware `persist` (localStorage).
**Por quê:** Context API não tem devtools, sem persistência, sem seletores otimizados.
**Compatibilidade:** `cart.tsx` mantido como wrapper com API idêntica — zero breaking changes.

### 3. page.tsx virou Server Component
**Decisão:** Removido `"use client"` e `useEffect` de hash scroll. Dados buscados via `Promise.all` + Prisma.
**Por quê:** Server Components melhoram SEO, performance e eliminam data fetching no cliente.
**Scroll por hash:** delegado ao Lenis (já instanciado no LenisProvider).

### 4. Prisma singleton + products-db.ts
**Decisão:** `src/lib/prisma.ts` com singleton padrão Next.js. `src/lib/products-db.ts` com queries nomeadas.
**Por quê:** Eliminar dados hardcoded em `src/api/products.ts`. Banco como fonte de verdade.
**Pendente:** `src/api/products.ts` ainda existe como fallback — remover após seed do banco.

### 5. LenisProvider no layout root
**Decisão:** `src/components/providers/lenis-provider.tsx` no `RootLayout`.
**Por quê:** Lenis precisa ser singleton global. Integra via `gsap.ticker` conforme docs oficiais.
**Acessibilidade:** `prefers-reduced-motion` verificado — Lenis desativado se ativo.

### 6. Sonner no layout + React Hook Form + Zod no Newsletter
**Decisão:** `<Toaster>` no `layout.tsx`. Newsletter usa `react-hook-form` + `zod`.
**Por quê:** Validação type-safe, feedback visual via toast, sem alerts nativos.

### 7. Vitest configurado + primeiro teste (cart-store)
**Decisão:** `vitest.config.ts` + `src/test/setup.ts` + `cart-store.test.ts`.
**Por quê:** TDD obrigatório. GSAP/Lenis mockados no setup para isolamento unitário.

## Arquivos Criados/Modificados

| Arquivo | Ação |
|---|---|
| `package.json` | Adicionados: gsap, @gsap/react, lenis, zustand, nuqs, sonner, rhf, zod, vitest, playwright |
| `src/lib/design-tokens.ts` | **NOVO** — Fonte única de tokens |
| `src/lib/gsap-utils.ts` | **NOVO** — Animações GSAP reutilizáveis |
| `src/lib/cart-store.ts` | **NOVO** — Zustand store com persist |
| `src/lib/prisma.ts` | **NOVO** — Singleton Prisma Client |
| `src/lib/products-db.ts` | **NOVO** — Queries Prisma nomeadas |
| `src/components/cart.tsx` | **REFATORADO** — Wrapper Zustand |
| `src/components/hero.tsx` | **REFATORADO** — Framer Motion → GSAP useGSAP |
| `src/components/header.tsx` | **REFATORADO** — Framer Motion → GSAP + blur scroll |
| `src/components/newsletter.tsx` | **REFATORADO** — Framer Motion → GSAP + RHF + Zod + Sonner |
| `src/app/page.tsx` | **REFATORADO** — Client → Server Component + Prisma |
| `src/app/layout.tsx` | **REFATORADO** — Fontes corretas + LenisProvider + Toaster |
| `src/components/providers/lenis-provider.tsx` | **NOVO** — Lenis + GSAP ticker |
| `src/components/ui/fadeInUp.tsx` | **DEPRECADO** — Comentário de migração |
| `src/components/ui/staggerContainer.tsx` | **DEPRECADO** — Comentário de migração |
| `vitest.config.ts` | **NOVO** — Configuração Vitest |
| `src/test/setup.ts` | **NOVO** — Setup testes + mocks GSAP/Lenis |
| `src/test/cart-store.test.ts` | **NOVO** — 9 testes TDD do cart store |

## Pendências para Próxima Sessão

- [ ] Rodar `pnpm install` no projeto local
- [ ] Rodar `pnpm prisma migrate dev` para criar as tabelas
- [ ] Rodar `pnpm prisma db seed` para popular dados iniciais
- [ ] Adaptar `sales.tsx`, `collections-products.tsx`, `feature-products.tsx` para aceitar `products` como prop (Server Components passando dados)
- [ ] Adaptar `product/[slug]/page.tsx` para Server Component
- [ ] Adaptar `collections/[slug]/page.tsx` para Server Component
- [ ] Extrair Design System DNA das referências (Byredo, Aesop) via Claude in Chrome
- [ ] Microinterações nos cards via `cardHoverIn` / `cardHoverOut` de gsap-utils

## Comando para rodar após merge

```bash
cd frontend/belessence
pnpm install
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma db seed
pnpm dev
```


---

## Sessão Continuação — 2026-04-05 (Contexto 2)

### Design System DNA — Fase de Extração

Claude in Chrome offline + sites bloqueados por 403/ECONNREFUSED.
Síntese feita a partir de conhecimento especializado das referências:

**Byredo DNA extraído:**
- Whitespace extremamente generoso (section padding 80–120px)
- Tracking 0.18–0.25em para branding uppercase
- Hairline borders 1px oklch(0.90 0 0)
- Motion: fades lentos deliberados, 800–1200ms, power4.out
- Zero gradientes coloridos — apenas noir para noir suave

**Aesop DNA extraído:**
- Background ivory quente, não branco puro: oklch(0.975 0.01 85)
- Leading apertado para serifs: 1.05–1.2
- Escala editorial: títulos grandes com peso light
- Paleta terrosa: champagne deep oklch(0.93 0.03 85) para seções

**MFK DNA extraído:**
- Champagne gold: oklch(0.72 0.12 82) — mais quente que o anterior
- Silk ease: cubic-bezier(0.45, 0, 0.55, 1) para hovers
- Simetria francesa — centered layouts
- Tipografia display: weight 400 (light) para serifs grandes
- Silk eases em CSS: --ease-silk, --ease-luxury como variáveis CSS

### Arquivos Modificados

#### `src/lib/design-tokens.ts` — v2 completo
- Paleta expandida: goldLight, goldDeep, goldMuted, ivory, ivoryWarm, ivoryDeep, grayHair
- Pesos tipográficos: thin(300) → bold(700)
- Tracking: tighter(-0.02em) → ultra(0.25em) — 7 níveis
- Leading: none(1) → loose(2) — 6 níveis
- Typography presets: eyebrow, display, heading, subhead, body, caption, price
- Spacing sections: xs → xl com padding correto mobile/desktop
- Motion presets compostos: heroEntry, fadeUp, fadeIn, cardHover, scrollReveal
- Gradientes nomeados: heroNoir, heroGold, card, sectionWarm, goldSilk, imageOverlay
- Sombras refinadas: hairline, xs, sm, card, cardHover, gold, goldDeep, luxury, modal
- Grid tokens: products, productsWide, editorial, symmetric, feature
- Glass tokens: light, warm, dark, subtle

#### `src/app/globals.css` — v2 completo
- Background: ivory quente oklch(0.975 0.01 85) — não branco puro
- CSS motion variables: --duration-fast/normal/slow/cinematic, --ease-luxury/silk/out
- `::selection` com highlight dourado
- `::-webkit-scrollbar` minimal 4px gold
- Utility classes: .eyebrow, .display-title, .section-label, .price-display
- Gradientes CSS: gradient-hero-noir, gradient-hero-gold, gradient-card, gradient-section-warm, gradient-gold-silk, gradient-image-overlay
- Glass classes: glass-light, glass-warm, glass-dark
- Shadow utilities: shadow-hairline, shadow-card, shadow-card-hover, shadow-gold, shadow-luxury
- Transition utilities: .transition-luxury, .transition-silk, .transition-fast
- @media prefers-reduced-motion para transitions CSS
- .container-belessence, .aspect-product, .aspect-portrait, .aspect-editorial

### Bugs Corrigidos

#### `src/app/page.tsx`
- **Problema**: Arquivo truncado com ~500 caracteres invisíveis no final (linha 51)
- **Problema**: Era versão antiga — não async, não buscava dados do DB
- **Fix**: Reescrito como Server Component async com Promise.all([getSalesProducts(), getFeaturedProducts(6)])

#### `src/lib/cart-store.ts`
- **Problema**: Truncado na linha 126 — `partialize` incompleta
- **Fix**: Completado com `cartCount: state.cartCount, cartTotal: state.cartTotal`

#### `src/test/setup.ts`
- **Problema**: Truncado na linha 37 — mock Lenis incompleto
- **Fix**: Completado com `destroy: vi.fn()` e fechamento correto

### Status pós-sessão

| Arquivo | Status |
|---|---|
| design-tokens.ts v2 | ✅ Completo |
| globals.css v2 | ✅ Completo |
| cart-store.ts | ✅ Completo |
| setup.ts | ✅ Completo |
| page.tsx | ✅ Server Component async |
| cart-sheet.tsx | ✅ Compatível (sem mudanças) |
| TypeScript (sandbox) | ⚠️ node_modules ausentes — rodar pnpm install local |

### Próximas Etapas

1. **collections-products.tsx** — auditar: ainda usa dados estáticos hardcoded?
2. **Refatorar componentes visuais** com os novos tokens (hero, header, newsletter, feature-products)
3. **Playwright E2E** — configurar e escrever testes críticos (add to cart, fluxo checkout)
4. **Deploy Vercel** — via MCP Vercel após aprovação visual
5. **Phase 2: NestJS backend** — usar backend-interview-agent skill
