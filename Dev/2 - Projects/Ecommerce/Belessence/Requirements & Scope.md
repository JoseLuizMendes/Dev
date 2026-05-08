---
template: "Requirements & Scope"
version: 2.0
status: "Em Andamento"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
  - refatoração
  - frontend
  - ecommerce
cliente: "Belessence (Namorada)"
nicho: "Ecommerce de Perfumaria"
classificacao: "Refatoração de Frontend"
data_inicio: "2026-04-05"
data_entrega: "{{END_DATE}}"
valor: "Projeto Pessoal"
package_manager: "pnpm"
---

# 📋 Formulário de Escopo e Requisitos: Belessence

> **Nota:** Documento gerado via análise automática do código-fonte em `frontend/belessence/`. Stack, componentes, desvios e user stories extraídos por auditoria do repositório atual (2026-04-05).

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Belessence |
| **Ponto de Contato (PO)** | Zeca (José Luiz Mendes) |
| **Nicho de Mercado** | Ecommerce — Perfumaria Boutique |
| **Data de Início** | 2026-04-05 |
| **Previsão de Entrega** | A definir |
| **Valor do Projeto** | Projeto Pessoal |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central

O site Belessence existe e é funcionalmente correto, mas visualmente genérico. O frontend atual usa Framer Motion em vez de GSAP/Lenis (desvio da stack aprovada), os produtos estão **hardcoded** no frontend (`src/api/products.ts`) enquanto o schema Prisma existe mas não é usado, o carrinho usa `useState` em vez de Zustand, e não há nenhum teste (Vitest/Playwright). O visual carece de sofisticação — animações básicas, sem microinterações, sem smooth scroll, sem motion design de alto impacto. Para uma marca de perfumaria boutique posicionada como luxo (paleta Dourado + Preto + Champagne), o visual não reflete o posicionamento.

### 2.2 A Visão da Solução

Refatorar o frontend para entregar uma interface **sofisticada, imersiva e profissional** que reflita o posicionamento premium da marca. Metas: (1) migrar animações para GSAP + Lenis conforme stack aprovada, (2) normalizar state management com Zustand, (3) conectar o frontend ao banco via Prisma (eliminar dados hardcoded), (4) implementar motion design de alto impacto — hero cinematográfico, carrossel com parallax, microinterações nos cards, (5) criar Design System consistente com tokens TypeScript.

### 2.3 Público-Alvo

**Persona primária:** Mulher 25–40 anos, classe B/A, aprecia perfumaria como experiência sensorial e ritual de luxo acessível. Consome conteúdo visual no Instagram/Pinterest. Espera que o site reflita a sofisticação do produto.

**Persona secundária:** Homem comprando presente para parceira. Precisa de navegação intuitiva, descrições claras e confiança visual para converter.

### 2.4 Métricas de Sucesso (KPIs)

| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP | < 2.5s |
| **Performance** | FID / INP | < 100ms |
| **Performance** | CLS | < 0.1 |
| **Performance** | Bundle size | < 500kb gzipped |
| **Negócio** | Taxa de conversão (produto → carrinho) | +30% vs. atual |
| **Qualidade** | Cobertura de testes E2E (Playwright) | 100% dos fluxos críticos |
| **Qualidade** | Conformidade WCAG | 2.1 AA |
| **Visual** | Lighthouse Performance Score | ≥ 90 |

---

## 3. Classificação do Serviço

- [ ] **Frontend do Zero** — UI/UX completa, integrações com APIs de terceiros
- [ ] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [x] **Refatoração de Frontend** — Modernização de UI existente
- [ ] **Refatoração Full-stack** — Modernização de sistema completo

**Justificativa:** O frontend existe e está funcional. O backend (NestJS) ainda não existe — os dados são mockados no frontend via `src/api/products.ts`. A fase atual é refatoração do frontend; o backend será levantado via `backend-interview-agent` na Fase 2.

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Stack de referência consultada via Context7:** Next.js 16 (App Router), GSAP 3.13 (`useGSAP`), Prisma 7.

### Módulo 1: Design System & Tokens

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como dev, quero tokens TypeScript centralizados para que nenhum valor visual seja hardcoded | **GIVEN** o arquivo `design-tokens.ts` existe **WHEN** qualquer componente usa cor, fonte ou espaçamento **THEN** o valor vem do token, nunca de string literal | 🔥 Alta |
| **US-1.2** | Como dev, quero mapeamento Tailwind dos tokens para que as classes utilitárias reflitam o sistema | **GIVEN** `tailwind.config.ts` usa os tokens **WHEN** uso `text-brand-gold` **THEN** renderiza `oklch(0.7 0.15 85)` | 🔥 Alta |
| **US-1.3** | Como dev, quero variáveis CSS globais documentadas para que dark mode e temas futuros sejam viáveis | **GIVEN** `globals.css` tem variáveis semânticas **WHEN** a variável `--primary` muda **THEN** todos os componentes que a usam atualizam | 🟡 Média |

### Módulo 2: Animações e Motion Design (GSAP + Lenis)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como visitante, quero smooth scroll suave para que a navegação pareça premium | **GIVEN** Lenis está inicializado no layout **WHEN** rolo a página **THEN** o scroll é fluido sem jank, integrado ao GSAP ScrollTrigger via `requestAnimationFrame` | 🔥 Alta |
| **US-2.2** | Como visitante, quero que o Hero tenha animação cinematográfica de entrada para que minha primeira impressão seja de luxo | **GIVEN** acesso a home **WHEN** a página carrega **THEN** título faz stagger com `GSAP.from`, subtítulo aparece com delay, CTAs sobem com `power2.out` | 🔥 Alta |
| **US-2.3** | Como visitante, quero que cards de produto tenham microinterações (hover com scale + shadow) para que o site pareça responsivo e vivo | **GIVEN** estou na grid de produtos **WHEN** faço hover em um card **THEN** ele escala 1.03 com `ease: power2.out` e sombra aparece suavemente | 🔥 Alta |
| **US-2.4** | Como visitante com preferência `prefers-reduced-motion`, quero que todas as animações sejam desativadas para que a experiência seja acessível | **GIVEN** `prefers-reduced-motion: reduce` está ativo **WHEN** qualquer componente com GSAP renderiza **THEN** `duration: 0` e `opacity: 1` imediato | 🔥 Alta |
| **US-2.5** | Como visitante, quero scroll-triggered animations nas seções para que o conteúdo apareça progressivamente | **GIVEN** GSAP ScrollTrigger está registrado **WHEN** uma seção entra no viewport **THEN** ela anima com `fadeInUp` via ScrollTrigger | 🟡 Média |

### Módulo 3: Header & Navegação

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como visitante, quero um header com blur progressivo ao rolar para que a navegação pareça moderna | **GIVEN** estou na home **WHEN** rolo para baixo mais de 50px **THEN** o header aplica `backdrop-blur` e opacidade de fundo aumenta progressivamente | 🔥 Alta |
| **US-3.2** | Como visitante mobile, quero um menu lateral com animação suave para que a experiência mobile seja fluida | **GIVEN** estou em mobile **WHEN** toco no ícone Menu **THEN** o sheet desliza com `ease: expo.out` via GSAP | 🟡 Média |
| **US-3.3** | Como visitante, quero que o contador do carrinho animate ao adicionar itens para receber feedback visual imediato | **GIVEN** há itens no carrinho **WHEN** adiciono mais um item **THEN** o badge pulsa com `gsap.fromTo` scale 1→1.3→1 | 🟡 Média |

### Módulo 4: Catálogo de Produtos (conectado ao Prisma)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-4.1** | Como visitante, quero ver cards de produto com imagem, nome, preço e badge para descobrir o catálogo | **GIVEN** estou na home ou `/allProducts` **WHEN** a página carrega **THEN** produtos são buscados do banco via Prisma (não hardcoded) e exibidos em grid responsivo | 🔥 Alta |
| **US-4.2** | Como visitante, quero filtrar produtos por coleção (day/night/limited) para encontrar o que quero | **GIVEN** estou em `/allProducts` **WHEN** seleciono um filtro **THEN** a URL atualiza (via Nuqs) e os produtos filtram sem reload completo | 🟡 Média |
| **US-4.3** | Como visitante, quero ver a página de produto com galeria de imagens, descrição e notas olfativas para decidir a compra | **GIVEN** acesso `/product/[slug]` **WHEN** a página renderiza **THEN** dados vêm do banco, galeria funciona, botão "Adicionar ao carrinho" funciona | 🔥 Alta |
| **US-4.4** | Como visitante, quero ver coleções agrupadas para explorar por linha de produto | **GIVEN** acesso `/collections/[slug]` **WHEN** a coleção existe no banco **THEN** produtos da coleção são renderizados com header da coleção | 🟡 Média |

### Módulo 5: Carrinho (Zustand)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-5.1** | Como visitante, quero adicionar produtos ao carrinho para comprar | **GIVEN** estou na página de produto **WHEN** clico "Adicionar ao carrinho" **THEN** o item é adicionado ao store Zustand e o CartSheet abre | 🔥 Alta |
| **US-5.2** | Como visitante, quero persistência do carrinho entre reloads para não perder itens | **GIVEN** tenho itens no carrinho **WHEN** recarrego a página **THEN** os itens continuam via Zustand persist middleware | 🟡 Média |
| **US-5.3** | Como visitante, quero ver total, quantidade e remover itens do CartSheet para revisar antes de comprar | **GIVEN** o CartSheet está aberto **WHEN** altero quantidade ou removo item **THEN** o total atualiza imediatamente | 🔥 Alta |

### Módulo 6: Newsletter e Comunicação

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-6.1** | Como visitante, quero me inscrever na newsletter para receber ofertas | **GIVEN** estou na seção Newsletter **WHEN** preencho email e clico Inscrever **THEN** email é validado com Zod, feedback visual com Sonner toast | 🟡 Média |

---

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto (Estado Atual)

| Camada | Tecnologia | Versão Atual | Status |
|---|---|---|---|
| **Framework** | Next.js | 16.0.10 | ✅ Aprovado |
| **UI Library** | React | 19.2.0 | ✅ Aprovado |
| **Linguagem** | TypeScript | ^5 | ✅ Aprovado |
| **Styling** | Tailwind CSS | ^4 | ✅ Aprovado |
| **Components** | Shadcn/ui + Radix UI | Latest | ✅ Aprovado |
| **Animações** | Framer Motion | ^12.23.24 | ❌ DESVIO — substituir por GSAP |
| **ORM** | Prisma | ^7.2.0 | ✅ Aprovado |
| **Database** | PostgreSQL | — | ✅ Aprovado |
| **Carousel** | Embla Carousel | ^8.6.0 | ✅ Manter |
| **Icons** | Lucide React | ^0.554.0 | ✅ Aprovado |
| **Package Manager** | pnpm | — | ✅ Aprovado |

### 5.2 Desvios Críticos da [[Preferencias Dev]]

| # | Desvio | Impacto | Ação |
|---|---|---|---|
| 1 | **Framer Motion** em vez de GSAP + Lenis | Alto — viola stack de animações | Migrar para `gsap @gsap/react lenis` |
| 2 | **useState + Context** no carrinho em vez de **Zustand** | Médio — sem persistência, sem devtools | Migrar para `zustand` com persist middleware |
| 3 | **Dados hardcoded** em `src/api/products.ts` — Prisma não usado no frontend | Alto — sem CMS, sem escalabilidade | Conectar Prisma ao Next.js Server Components |
| 4 | **Zero testes** — sem Vitest, sem Playwright | Alto — viola TDD obrigatório | Instalar e escrever testes |
| 5 | **`use client`** na página principal — deveria ser Server Component | Médio — performance e SEO | Refatorar: page.tsx server, extrair interatividade |
| 6 | **Sem Nuqs** — filtros de URL não implementados | Baixo | Instalar `nuqs` |
| 7 | **Sem Sonner** — sem sistema de toast | Baixo | Instalar `sonner` |
| 8 | **Sem React Hook Form + Zod** — newsletter sem validação | Médio | Instalar `react-hook-form @hookform/resolvers zod` |

### 5.3 Dependências a Instalar (Bootstrap Fase 2)

```
gsap @gsap/react lenis zustand nuqs sonner
react-hook-form @hookform/resolvers zod
```

**Dev:**
```
vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom playwright
```

### 5.4 Integrações com APIs

| Serviço | Tipo | Finalidade | Status |
|---|---|---|---|
| PostgreSQL (Prisma) | Banco de Dados | Produtos, coleções | Schema existe, não conectado ao frontend |
| Gateway de Pagamento | Pagamentos | Checkout (Fase 2) | Não implementado |
| Email Service | Comunicação | Newsletter, transacionais | Não implementado |

### 5.5 Entidades de Dados (schema.prisma atual)

| Entidade | Campos Principais | Status |
|---|---|---|
| `Product` | id, slug, name, shortDescription, description, price, originalPrice, badge, badgeVariant, rating, reviews, images[], features[], collection, category, totalSold, seasonalSold | Definido no schema, dados mockados no frontend |

### 5.6 Rotas Existentes

| Rota | Arquivo | Tipo Atual | Tipo Alvo |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Client Component ❌ | Server Component ✅ |
| `/allProducts` | `src/app/allProducts/page.tsx` | A auditar | Server Component |
| `/collections/[slug]` | `src/app/collections/[slug]/page.tsx` | A auditar | Server Component |
| `/product/[slug]` | `src/app/product/[slug]/page.tsx` | Client Component ❌ | Server Component + Client interativo |

### 5.7 Componentes Existentes

```
src/components/
├── header.tsx          — Nav, search, cart badge, mobile sheet
├── hero.tsx            — Headline + CTAs (Framer Motion → GSAP)
├── sales.tsx           — Carousel de ofertas (Embla)
├── features.tsx        — Diferenciais da marca
├── collections-products.tsx — Grid de coleções
├── feature-products.tsx    — Produtos em destaque
├── newsletter.tsx      — Formulário de email
├── footer.tsx          — Links, social, branding
├── cart.tsx            — CartProvider (Context → Zustand)
├── cart-sheet.tsx      — Drawer do carrinho
├── product-details-dialog.tsx — Modal de produto
└── ui/                 — Shadcn/ui + utilitários
    ├── fadeInUp.tsx    — Variante Framer Motion (remover)
    └── staggerContainer.tsx — Variante Framer Motion (remover)
```

### 5.8 Design System Atual (Auditoria)

**Paleta de Cores (oklch):**
```
--primary:   oklch(0.1  0    0)    → Preto profundo
--secondary: oklch(0.7  0.15 85)   → Dourado suave  
--accent:    oklch(0.95 0.05 85)   → Champagne
--muted:     oklch(0.95 0.05 85)   → Champagne claro
--background:oklch(1    0    0)    → Branco puro
```

**Tipografia:**
```
font-serif:  Playfair Display — Display, headings premium
font-sans:   Inter           — Body, UI, labels
```

**Problemas visuais identificados:**
1. `glass-effect` definido como classe CSS mas não como token do sistema
2. Animações de entrada genéricas (só fade/slide) sem curvas de easing sofisticadas
3. Sem smooth scroll (Lenis não instalado)
4. Hero com overlay `bg-black/30` estático — sem paralaxe ou profundidade
5. Cards sem hover state animado com GSAP
6. Header sem transição de blur progressivo ao scroll
7. `gradient-hero` definido em CSS global (não rastreável no sistema de tokens)
8. `text-shadow-gold` custom sem documentação

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [x] LCP < 2.5s | FID < 100ms | CLS < 0.1
- [x] Bundle size < 500kb (gzipped)
- [ ] Imagens via `next/image` com lazy loading — **verificar uso atual**

### 6.2 Segurança
- [ ] HTTPS obrigatório (Vercel — nativo)
- [ ] Sanitização de inputs (Zod no newsletter)
- [ ] Proteção OWASP Top 10 — relevante quando backend NestJS for implementado

### 6.3 Acessibilidade
- [x] `prefers-reduced-motion` respeitado — **obrigatório ao implementar GSAP**
- [ ] WCAG 2.1 AA — contraste Dourado (#B8962E) sobre branco precisa verificação
- [ ] Navegação por teclado no CarouselEmbla e CartSheet

### 6.4 Escalabilidade
- [ ] Produto hardcoded → banco de dados (prerequisito antes de escalar catálogo)
- [ ] Imagens em CDN (Cloudinary ou Vercel Blob) — fase futura

---

## 7. Limites de Escopo e Exclusões

1. **Backend NestJS** — fora do escopo desta fase. Será levantado via `backend-interview-agent` na Fase 2.
2. **Gateway de pagamento (Stripe)** — fora do escopo desta fase.
3. **Sistema de autenticação** — fora do escopo desta fase.
4. **CMS / painel administrativo** — fora do escopo desta fase.
5. **App mobile nativo** — fora do escopo.

Solicitações novas exigem: ordem de mudança + replanejamento via `/speckit.plan`.

---

## 8. Pipeline de Refatoração Frontend (Fase Atual)

> Seguir o Global Pipeline do [[ai-senior-web-designer-agent]] skill + workflow do [[Project Lifecycle Pipeline]].

### Ordem de Execução

| # | Tarefa | Dependência | Status |
|---|---|---|---|
| 1 | Gerar Design Tokens TS + Tailwind mapping | — | ⏳ Pendente |
| 2 | Instalar GSAP + Lenis, remover Framer Motion | Tokens prontos | ⏳ Pendente |
| 3 | Migrar `page.tsx` para Server Component | — | ⏳ Pendente |
| 4 | Migrar Cart para Zustand + persist | — | ⏳ Pendente |
| 5 | Conectar produtos ao Prisma (Server Components) | Prisma configurado | ⏳ Pendente |
| 6 | Refatorar Hero com GSAP (stagger cinematográfico) | GSAP instalado | ⏳ Pendente |
| 7 | Implementar Lenis smooth scroll | Lenis instalado | ⏳ Pendente |
| 8 | Adicionar ScrollTrigger nas seções | Lenis + GSAP | ⏳ Pendente |
| 9 | Microinterações nos cards (hover GSAP) | GSAP instalado | ⏳ Pendente |
| 10 | Header com blur progressivo ao scroll | GSAP instalado | ⏳ Pendente |
| 11 | Newsletter com React Hook Form + Zod + Sonner | — | ⏳ Pendente |
| 12 | Instalar Vitest + Playwright + escrever testes | Tudo implementado | ⏳ Pendente |

### Referências de Design (a extrair via Claude in Chrome)

Sites boutique de perfumaria e luxury e-commerce para extração do Design System DNA:
- Byredo.com (tipografia + branding premium)
- Maison-francis-kurkdjian.com (luxury layout + motion)
- Aesop.com (editorial grid + white space)
- Juliique.com.au (clean luxury + product showcase)

> **Método:** `navigate(url)` + `get_page_text()` via Claude in Chrome — nunca screenshot.

---

## 9. Aprovação e Assinaturas

**Cliente:** Belessence — **Data:** 2026-04-05

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** 2026-04-05

---

> **Próximo Passo:**
> 1. Extrair Design System das referências via Claude in Chrome
> 2. Gerar `design-tokens.ts` + `tailwind.config.ts` atualizado
> 3. Executar `/speckit.tasks` para gerar `04-Tarefas.md`
> 4. Implementar na ordem da tabela acima, uma tarefa por vez

> **Referências Internas:** [[Preferencias Dev]] | [[Project Lifecycle Pipeline]] | [[Protocol-SpecKit]] | [[Protocol-Bootstrap]]
