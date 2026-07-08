---
template: "Requirements & Scope"
version: 1.0
status: "Concluído"
tags:
  - escopo
  - requisitos
  - portfolio
  - frontend
  - i18n
  - gsap
  - next-js
  - personal
projeto: "MendeShift"
tipo: "Portfólio Pessoal"
classificacao: "Frontend — Do Zero"
data_inicio: "2026-03-01"
data_entrega: "2026-04-26"
valor: "Projeto Pessoal"
package_manager: "pnpm"
deploy: "Vercel — https://mendeshift.vercel.app"
repositorio: "F:/1-ZECA/1-Repositorio/Documentos/MeusProjetos/MendeShift/mendeshift"
---

> [!note] Projeto pré-canon concluído
> Este projeto foi finalizado antes da matriz canon atual. O arquivo foi renomeado de `Requirements & Scope.md` para `01-Escopo.md` na reestruturação de 2026-07-08; os artefatos `02-Contrato` a `06-Erros` e `setup.js` foram dispensados retroativamente (registro em [[MEMORY]]).

# 📋 MendeShift — Portfólio Pessoal

> Portfólio profissional de José Luiz Mendes (Zeca) — Product Engineer. Site bilíngue (EN/PT), dark theme, animações com GSAP + Lenis, arquitetura Next.js 16 App Router com i18n customizado sem dependência de plugin webpack.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Projeto** | MendeShift |
| **Dono** | José Luiz Mendes (Zeca) |
| **Tipo** | Portfólio Pessoal |
| **Deploy** | https://mendeshift.vercel.app |
| **Status Final** | ✅ Concluído e em produção |
| **Data de Conclusão** | 2026-04-26 |

---

## 2. Visão e Objetivo

### 2.1 Propósito

Portfólio pessoal de alto nível para apresentação profissional como Product Engineer. O objetivo era construir algo que **não parecesse um template** — com identidade visual forte (dark, minimalista, tipografia Display), animações cinematográficas com GSAP, scroll suave com Lenis, e suporte bilíngue (EN/PT) de alta qualidade.

### 2.2 Público-Alvo

- Recrutadores técnicos e CTOs avaliando o perfil
- Empresas internacionais (versão EN) e nacionais (versão PT)
- Qualquer pessoa que receba o link direto

### 2.3 Métricas de Sucesso

| Tipo | Meta | Status |
|---|---|---|
| Deploy funcional | Vercel sem erros de build | ✅ |
| Bilinguismo | EN + PT com toggle | ✅ |
| Animações | GSAP ScrollTrigger em todas as seções | ✅ |
| Smooth scroll | Lenis integrado ao GSAP RAF | ✅ |
| Responsividade | Mobile-first, md/lg breakpoints | ✅ |
| SEO | OpenGraph + Twitter Card por locale | ✅ |
| Performance | Vercel Analytics instalado | ✅ |

---

## 3. Stack e Dependências

### 3.1 Stack Principal

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | Next.js | 16.1.6 |
| **UI Library** | React | 19.2.3 |
| **Linguagem** | TypeScript | ^5 |
| **Styling** | Tailwind CSS | ^4 |
| **Animações** | GSAP | 3.14.1 |
| **Smooth Scroll** | Lenis | 1.3.15 |
| **i18n Routing** | next-intl (middleware only) | ^3.26.5 |
| **Fontes** | IBM Plex Sans, IBM Plex Mono, Bebas Neue | Google Fonts |
| **Analytics** | @vercel/analytics | 1.3.1 |
| **Deploy** | Vercel | — |
| **Package Manager** | pnpm | — |

### 3.2 Dependências Notáveis

```
gsap lenis next-intl @vercel/analytics
framer-motion (instalado mas não usado no core — legacy)
react-hook-form @hookform/resolvers zod sonner
embla-carousel-react lucide-react
```

### 3.3 Design System (Tokens)

**Tipografia:**
```
--font-sans:    IBM Plex Sans    → corpo, UI, labels
--font-mono:    IBM Plex Mono    → código, eyebrows, metadata
--font-display: Bebas Neue       → headings de impacto, section titles
```

**Paleta (dark theme — variáveis CSS):**
```
--background:      preto profundo
--foreground:      branco
--accent:          verde/teal vibrante (identidade visual)
--muted-foreground: cinza claro
--card:            superfície levemente elevada
--border:          borda sutil
```

---

## 4. Arquitetura

### 4.1 Estrutura de Rotas

```
src/app/
├── [locale]/                   → Layout com TranslationsProvider
│   ├── layout.tsx              → Fonts, metadata, i18n provider
│   ├── page.tsx                → Home (todas as seções)
│   ├── experience/page.tsx     → Página de experiência
│   └── projetos/
│       ├── page.tsx            → Grid de projetos
│       └── [slug]/page.tsx     → Detalhe do projeto
└── globals.css                 → Variáveis CSS, tokens, base styles
```

**Locales:** EN em `/` (padrão), PT em `/pt/`

### 4.2 Estrutura de Componentes

```
src/_components/
├── hero-section.tsx           → Hero com SplitFlapText + animações GSAP
├── about-section.tsx          → Seção sobre o autor
├── work-section.tsx           → Grid de projetos (cards com previewImage)
├── principles-section.tsx     → Princípios com alternância L/R GSAP
├── signals-section.tsx        → Sinais / valores
├── experience-section.tsx     → Experiência, stack e educação
├── cta-section.tsx            → Call to action
├── contact-chat.tsx           → Interface estilo chat para contato
├── colophon-section.tsx       → Rodapé / colofão
├── language-toggle.tsx        → Botão bilíngue EN/PT (fixed, bottom-right)
├── smooth-scroll.tsx          → Wrapper Lenis + GSAP RAF
├── scramble-text.tsx          → Efeito scramble de texto no hover
├── split-flap-text.tsx        → Efeito split-flap (estilo aeroporto)
├── highlight-text.tsx         → Texto com destaque de cor accent
├── draw-text.tsx              → Texto desenhado animado
├── animated-noise.tsx         → Textura de ruído animado
├── bitmap-chevron.tsx         → Chevron pixelado decorativo
├── side-nav.tsx               → Navegação lateral em seções
└── ui/                        → Componentes base (Card, Container, Section, etc.)
```

### 4.3 i18n — Arquitetura Customizada

> ⚠️ **Decisão crítica documentada:** `next-intl` foi mantido APENAS para o middleware de roteamento de URL. Toda a API de cliente e servidor foi substituída por implementação própria devido a incompatibilidade do plugin webpack com Next.js 16 + Turbopack.

**Arquivos:**
```
src/i18n/
├── context.tsx    → TranslationsProvider + useTranslations() + useLocale()
├── server.ts      → loadMessages() + getServerTranslations() (sem next-intl)
└── routing.ts     → Configuração de locales para o middleware next-intl

src/proxy.ts       → Middleware next-intl (renomeado de middleware.ts — Next.js 16)
messages/
├── en.json        → Todas as strings em inglês
└── pt.json        → Todas as strings em português
```

**Fluxo:**
1. `proxy.ts` (next-intl middleware) — roteia `/` → EN, `/pt/*` → PT
2. `[locale]/layout.tsx` — carrega `messages/[locale].json` via `loadMessages()`
3. `TranslationsProvider` — injeta mensagens via React Context
4. Componentes cliente usam `useTranslations(namespace)` do context customizado
5. Componentes servidor usam `getServerTranslations(locale, namespace)`

### 4.4 Dados

```
src/lib/
├── projects.ts    → Array de projetos com overrides PT (getProjectsByLocale, getProjectBySlug)
├── experience.ts  → Dados de experiência, stack e educação por locale
└── utils.ts       → cn(), helpers
```

---

## 5. Features Implementadas

### 5.1 Seções da Home

| Seção | Descrição | Animações |
|---|---|---|
| **Hero** | Nome, cargo, tagline com SplitFlapText | GSAP stagger, ScrollTrigger |
| **About** | Bio, foto, valores | GSAP x/y slide in |
| **Work** | Grid de projetos com previewImage | GSAP stagger cards |
| **Principles** | 4 princípios alternando L/R | GSAP alternado por índice ímpar/par |
| **Signals** | Valores/sinais | GSAP ScrollTrigger |
| **Experience** | Cargo atual, achievements, stack, educação | GSAP scroll |
| **CTA** | Chamada para ação | — |
| **Contact Chat** | Interface tipo WhatsApp para contato | — |
| **Colophon** | Créditos, tecnologias usadas | — |

### 5.2 Projetos Documentados no Portfólio

| Projeto | Categoria | Status |
|---|---|---|
| Wedding Platform | Full Stack | Shipped — 07/09 |
| Barber Pro | Product | Em desenvolvimento |
| Scheduling API | Backend | Documentada + Deploy |
| Belessence | E-commerce | Em desenvolvimento |

### 5.3 Componentes de Animação Customizados

- **SplitFlapText** — efeito de placar de aeroporto para rotação de textos no Hero
- **ScrambleTextOnHover** — embaralha e reescreve texto ao hover (usado no LanguageToggle)
- **HighlightText** — última palavra do título com cor accent
- **DrawText** — texto animado como se estivesse sendo desenhado
- **AnimatedNoise** — textura de grão/ruído animada como overlay decorativo
- **SmoothScroll** — wrapper que inicializa Lenis + integra com GSAP ticker

### 5.4 Language Toggle

- Botão fixo no canto inferior direito
- Exibe `EN / PT` com efeito ScrambleText no hover
- Muda locale com `window.location.href` (navegação completa) após setar cookie `NEXT_LOCALE`
- EN → PT: navega para `/pt${pathname}`
- PT → EN: remove prefixo `/pt` do pathname

---

## 6. Correções e Bugs Resolvidos

### 6.1 Erros Críticos de Infraestrutura

| # | Erro | Causa Raiz | Solução |
|---|---|---|---|
| 1 | `TypeError: hasLocale is not a function` | `use-intl/dist/core.js` não exporta `hasLocale` no Next.js 16 | Substituído por `["en","pt"].includes(locale)` |
| 2 | `Couldn't find next-intl config file` (Turbopack) | `createNextIntlPlugin` injeta alias webpack que Turbopack não honra | Removido plugin do `next.config.ts`; criado `src/i18n/server.ts` com imports diretos de JSON |
| 3 | `Module not found: Can't resolve 'use-intl'` | `use-intl` é dep transitiva do pnpm, não importável diretamente | Criado `src/i18n/context.tsx` — React Context customizado substituindo toda API cliente |
| 4 | `Couldn't find next-intl config file` (runtime, browser) | `[locale]/layout.tsx` importava `routing.ts` que referenciava `next-intl/routing` | Removido import de `routing` do layout; locale validado com array literal |
| 5 | Build fail: `Property 'align' does not exist on type 'PrincipleItem'` | Campo `align` usado no JSX mas ausente no type | Adicionado `align?: string` ao tipo `PrincipleItem` |

### 6.2 Bugs de UX/Navegação

| # | Bug | Causa Raiz | Solução |
|---|---|---|---|
| 6 | Language toggle PT→EN não funcionava | Middleware `next-intl` lia cookie `NEXT_LOCALE=pt` e redirecionava de volta para `/pt` | `handleSwitch` agora seta `document.cookie = NEXT_LOCALE=${targetLocale}` antes de navegar; usa `window.location.href` em vez de `router.push()` |
| 7 | Mobile overflow horizontal | Algum elemento ultrapassando a viewport | `overflow-x: hidden` no body |
| 8 | Side nav padding errado no md | Classe incorreta no breakpoint `md:` | Corrigido padding left no `md:` |

### 6.3 Mudanças de Infraestrutura Next.js 16

| Mudança | Detalhe |
|---|---|
| `middleware.ts` → `proxy.ts` | Next.js 16 deprecou `middleware.ts`, renomeado para `proxy.ts` |
| `next.config.ts` sem plugin | Removido `createNextIntlPlugin` — causa falhas com Turbopack |
| Dynamic import → static if/else | `loadMessages` usa `if locale === "pt"` com imports estáticos para compatibilidade Turbopack |

---

## 7. Decisões Técnicas (ADRs)

### ADR-001: Substituição da API next-intl por React Context customizado

**Contexto:** Next.js 16.1.6 com Turbopack (default em dev) quebra o mecanismo de alias webpack do `next-intl`. Tanto `getTranslations()` quanto `getMessages()` do servidor falham com "Couldn't find next-intl config file".

**Decisão:** Manter `next-intl` **apenas** para o middleware de roteamento de URL em `proxy.ts`. Toda a API de tradução foi substituída por:
- `src/i18n/context.tsx` — `TranslationsProvider`, `useTranslations()`, `useLocale()`
- `src/i18n/server.ts` — `loadMessages()`, `getServerTranslations()`

**Consequências:** Zero dependência de plugin webpack. Funciona com Turbopack e produção. O bundle do cliente não carrega código `next-intl` desnecessário.

### ADR-002: window.location.href no LanguageToggle

**Contexto:** `router.push()` do Next.js não processa o cookie `NEXT_LOCALE` antes de navegar — o middleware lê o cookie antigo e redireciona de volta para o locale errado.

**Decisão:** Usar `window.location.href` (navegação completa) após setar manualmente o cookie `NEXT_LOCALE` com `document.cookie`.

**Consequências:** Reload completo da página (sem transição cliente), mas garante que o middleware processe o locale correto. Comportamento aceitável para uma troca de idioma.

### ADR-003: Dados estáticos em TypeScript em vez de CMS

**Contexto:** Portfólio pessoal com conteúdo estável, sem necessidade de edição frequente por não-devs.

**Decisão:** `projects.ts` e `experience.ts` com arrays TypeScript e overrides PT inline via campo `pt?: Partial<...>`.

**Consequências:** Type-safety total, zero infra de CMS, build estático no Vercel. Atualizar conteúdo requer commit, mas aceitável para o contexto.

---

## 8. Estrutura de Arquivos Final

```
mendeshift/
├── messages/
│   ├── en.json              → Strings EN (hero, about, work, principles, etc.)
│   └── pt.json              → Strings PT
├── public/
│   ├── projects/            → Screenshots dos projetos (.webp)
│   └── Card_Profissional.png → OG image
├── src/
│   ├── _components/         → Todos os componentes de seção e UI
│   ├── app/
│   │   ├── [locale]/        → Layout + páginas
│   │   └── globals.css      → Design system base
│   ├── i18n/
│   │   ├── context.tsx      → Provider + hooks cliente
│   │   ├── server.ts        → Helpers servidor (sem next-intl)
│   │   └── routing.ts       → Config next-intl middleware
│   ├── lib/
│   │   ├── projects.ts      → Dados dos projetos + util por locale
│   │   ├── experience.ts    → Dados de experiência por locale
│   │   └── utils.ts         → cn()
│   └── proxy.ts             → Middleware next-intl (roteamento URL)
├── next.config.ts            → Sem plugin next-intl
└── package.json
```

---

## 9. Lições Aprendidas

1. **next-intl + Next.js 16 + Turbopack não são compatíveis** — o plugin webpack é o ponto de falha. Para qualquer projeto futuro com Next.js 16+, preferir implementação própria de i18n ou aguardar suporte oficial de Turbopack.

2. **Cookie NEXT_LOCALE precisa ser sobrescrito manualmente** para trocas de locale sem reload completo. O middleware lê o cookie, não apenas a URL — isso não é óbvio.

3. **Importações dinâmicas com template strings falham no Turbopack** — sempre usar `if/else` com imports estáticos para arquivos de mensagens.

4. **`use-intl` não é importável diretamente** em projetos pnpm — é dep transitiva. Nunca assumir que deps transitivas são acessíveis.

5. **TypeScript strict no build do Vercel** pega erros que o dev local com Turbopack pode deixar passar (como `Property 'align' does not exist`). Sempre tipar todos os campos usados no JSX.

---

## 10. Referências

- [[Preferencias Dev]]
- Deploy: https://mendeshift.vercel.app
- Repositório: `F:/1-ZECA/1-Repositorio/Documentos/MeusProjetos/MendeShift/mendeshift`
- next-intl docs: https://next-intl.dev
- GSAP docs: https://gsap.com/docs
- Lenis: https://lenis.darkroom.engineering

---

> **Autor:** José Luiz Mendes — **Concluído em:** 2026-04-26
