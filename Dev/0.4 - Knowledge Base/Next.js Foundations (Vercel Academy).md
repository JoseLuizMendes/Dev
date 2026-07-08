---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Vercel Academy — Next.js Foundations (https://nextjs.org/learn)"
data_incorporacao: 2026-07-08
stack: "Next.js 16 (App Router, Turborepo)"
tags:
  - knowledge-base
  - next-js
  - app-router
  - cache-components
  - vercel
ler_quando: "Qualquer projeto com Next.js na stack — leitura obrigatória antes de /speckit.plan"
---

# Next.js Foundations (Vercel Academy) — Resumo Técnico Completo

Anotações sintetizadas do curso (Next.js 16, App Router, Turborepo). 4 seções, 26 lições. O curso constrói 2 apps (`apps/web` marketing \+ `apps/blog`) em monorepo pnpm/Turborepo, com deploy contínuo na Vercel.

---

## Setup e contexto do projeto

- **Arquitetura dual-app**: `apps/web` (porta 3000\) \+ `apps/blog` (porta 3001), compartilhando `packages/api` (data fetching) e `packages/ui` (componentes shadcn) via `@repo/*`.  
- **Por quê**: separação de responsabilidades por time, deploy independente, código compartilhado via packages internos.  
- **Fluxo deploy-first**: deploy na Vercel desde a lição 1; cada push em branch gera Preview Deployment automático.  
- **Requisitos**: Node 24+, pnpm (via corepack), Vercel CLI (`pnpm add -g vercel`, `vercel login`, `vercel link` — que puxa env vars reais para `.env.local`).  
- Comandos úteis: `vercel list` (status de deploys), `vercel env pull` (sincronizar env vars), `pnpm build` local antes de debugar falha de build na Vercel.

---

# Seção 1 — Foundation & Setup

## 1.2 App Router Basics

**Modelo mental**: a estrutura de pastas *é* o roteamento. Pasta \= segmento de URL; `page.tsx` torna o segmento acessível.

| Arquivo | Função |
| :---- | :---- |
| `page.tsx` | Conteúdo da rota |
| `layout.tsx` | UI compartilhada que persiste entre navegações |
| `loading.tsx` | Suspense boundary automático do segmento |
| `error.tsx` | Error boundary do segmento (Client Component obrigatório) |
| `not-found.tsx` | UI de 404 |
| `route.ts` | Endpoint API (exporta handlers `GET`, `POST`...) |
| `(grupo)/` | Route group: organiza código sem afetar a URL |

- Build output: `○` \= estático (prerenderizado), `ƒ` \= dinâmico (por request). Páginas prerenderizam por padrão, exceto se usarem APIs dinâmicas. `route.ts` é sempre dinâmico.  
- **Metadata API**:  
  - Estática: `export const metadata: Metadata = { title, description }`.  
  - Dinâmica: `export async function generateMetadata({ params })` — roda em paralelo com a página.  
  - Herança: metadata mescla do root para a folha; use `title: { template: '%s | Site', default: 'Site' }` no root layout.  
  - Só funciona em Server Components.  
- API route: use `route.ts` para webhooks/integrações externas; para dados do próprio app, prefira fetch direto em Server Components.  
- Layouts se aninham automaticamente (root → grupo → página); você nunca compõe manualmente.

## 1.3 Server e Client Components

- **Tudo é Server Component por padrão.** `'use client'` opta pela interatividade.  
- Modelo de decisão:  
  - **Client**: `useState/useEffect/useContext`, handlers (`onClick` etc.), APIs de browser (`window`, `localStorage`), libs que precisam do browser.  
  - **Server**: acesso a DB/arquivos, secrets/env vars, dependências pesadas (fora do bundle), conteúdo SEO, e tudo o mais (default).  
- `'use client'` marca uma **fronteira (boundary)**: o arquivo e tudo que ele importa entram no bundle do cliente. Filhos de um Client Component já são client — não repita a diretiva.  
- **Env vars como fronteira de segurança**:  
  - `NEXT_PUBLIC_*`: inlinadas no bundle em build time — visíveis a qualquer um. Trocar exige rebuild. Lookup dinâmico (`process.env[nome]`) não é inlinado.  
  - Sem prefixo: existem só no Node; retornam `undefined` no client. Nunca coloque secrets em `NEXT_PUBLIC_`.  
- **Padrão de composição — server dentro de client**: passe Server Components como `children` de um wrapper client pequeno (ex.: `Collapsible`, `ExpandableWrapper`). O conteúdo server-rendered "atravessa" o wrapper sem virar JS de cliente.

## 1.4 Dynamic Routing

- `[slug]/page.tsx` casa qualquer segmento; base de blogs, docs, produtos, perfis.  
- **Breaking change do Next 16**: `params` e `searchParams` são **Promises** — a página deve ser `async` e fazer `await params` antes de usar.  
- `notFound()` (de `next/navigation`) dispara o `not-found.tsx` mais próximo e retorna HTTP 404\. Funciona lançando um erro — **não capture em try/catch**.  
- `generateStaticParams()`:  
  - Roda em build; retorna `[{ slug: '...' }, ...]`; cada item vira página estática (○).  
  - Slugs não listados renderizam on-demand (`dynamicParams = true`, default). `export const dynamicParams = false` → 404 para slugs desconhecidos.  
  - Em dev roda on-demand; use `pnpm build` para ver o efeito real.

## 1.5 Environment e Segurança (Data Access Layer)

- **Precedência de env files** (primeiro vence): `process.env` → `.env.$(NODE_ENV).local` → `.env.local` → `.env.$(NODE_ENV)` → `.env`. Arquivos `.env*` ficam na raiz do projeto (não em `/src`).  
- **Pacote `server-only`**: `import "server-only"` no topo de um módulo faz o build **falhar** se ele for importado por código client. Proteção em build time, não em runtime.  
- **Padrão DAL \+ DTO**:  
  1. Data Access Layer em `lib/server/` com `server-only` — centraliza queries e autorização.  
  2. Funções DTO retornam apenas campos seguros (nunca `passwordHash`, notas internas, etc.).  
  3. Server Component chama a DAL e passa somente o DTO para Client Components.  
- Mantenha um `.env.example` documentando variáveis sem valores reais.

## 1.6 Errors e Not Found

- `error.tsx` **precisa de `'use client'`** (error boundaries do React usam lifecycle de classe/estado, que só existem no client). O Next gera o wrapper de classe por você.  
- Props recebidas: `error: Error & { digest?: string }` e `reset: () => void`.  
  - `error.digest`: hash auto-gerado para correlacionar o erro do client com os logs do servidor.  
  - `reset()`: tenta re-renderizar o segmento (útil para erros transitórios).  
  - Use `useEffect` para logar em serviço externo (Sentry etc.).  
- `not-found.tsx` é Server Component por padrão. Renderiza em URL inexistente ou chamada a `notFound()`.  
- Distinção: `notFound()` \= ausência conhecida, tratada com graça; `error.tsx` \= falha inesperada, capturada com recuperação.  
- O boundary captura erros nos filhos do segmento, não no layout do mesmo nível.

## 1.7 Proxy Basics (ex-middleware)

- **Next 16**: `proxy.ts` substitui `middleware.ts`; a função exportada chama-se `proxy` (codemod: `npx @next/codemod@canary upgrade`).  
- Localização: `src/proxy.ts`, no mesmo nível de `app/` (não dentro dele). Runtime Node por padrão.  
- Ciclo do request: DNS/TLS → redirects/rewrites do `next.config` → **proxy.ts** → route matching → render → resposta.  
- Usos: checagem de auth **antes** do render, headers de segurança (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`), logging, injeção de headers para as rotas (ex.: correlation IDs), redirects.  
- `NextResponse.next()` continua para a rota permitindo modificar headers.  
- `export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }` para excluir assets estáticos.  
- Roda em todo request casado (inclusive prefetch): **mantenha rápido** — sem queries de banco ou computação pesada.

---

# Seção 2 — Core Features

## 2.1 Fronteiras Client-Server (decisão)

- Fronteira certa \= bundle menor, mais segurança, carga mais rápida.  
- **Anti-pattern**: boundary client grande força a árvore inteira para o client e incha o bundle.  
- **Pattern**: extraia wrappers client mínimos (só o botão/toggle interativo) e mantenha o resto server. Filhos server-rendered "streamam" pelo wrapper sem mudanças.  
- Comece server por padrão; adicione `'use client'` apenas quando necessário. Nunca acesse secrets em boundary client.  
- Verificações práticas: view-source deve conter o HTML server-rendered; cliques em widgets client não devem gerar requests de rede; `pnpm build` para comparar tamanhos de bundle.

## 2.2 Composition Patterns (Compound Components)

- Problema: "prop soup" (`showTitle`, `titleText`, `showFooter`...). Composição escala melhor que configuração via props.  
- Padrão compound: `Dialog.Root` / `Dialog.Trigger` / `Dialog.Content` / `Dialog.Title` / `Dialog.Description` (como `<table>/<thead>/<tbody>` no HTML).  
- Benefícios: rearranjar/adicionar/remover subcomponentes sem mudar API, props focadas por subcomponente, filhos podem ser Server Components (sem limite de serialização), customização sem fork.  
- Estado fica num wrapper client pequeno (`'use client'` só no Root/Trigger); conteúdo pode ser server-rendered.  
- Acessibilidade: focus trap, fechar com Escape/clique no overlay, `role="dialog"` \+ `aria-labelledby`. Padrões Radix (`@radix-ui/react-slot`) ajudam.

## 2.3 Not Found & Errors aninhados

- `notFound()` sobe até o `not-found.tsx` **mais próximo** — permita 404 contextual ("Post não encontrado") em vez do genérico.  
- `error.tsx` aninhado sobrescreve o root para aquela subárvore — UIs de erro contextuais por seção.  
- Inclua correlation IDs nos logs/UI de erro para debugging.

## 2.4 Nested Layouts

- `layout.tsx` em cada segmento compõe automaticamente; recebe `children`.  
- **Layouts persistem** entre navegações dos filhos: não re-renderizam, mantêm estado (sidebar sem flicker).  
- Se um layout precisar de `params` (raro), lembre: são Promise → layout async \+ await.  
- Mantenha layouts enxutos; minimize data fetching neles; evite duplicar providers.

## 2.5 Data Fetching sem Waterfalls

- Waterfall \= awaits sequenciais. 3 requests de 200ms em sequência \= 600ms; com `Promise.all()` \= 200ms.  
- `Promise.all()` preserva a ordem dos resultados no destructuring, independente da ordem de conclusão.  
- Inclua `params`/`searchParams` no paralelismo: `const [{ slug }, user, posts] = await Promise.all([params, fetchUser(), fetchPosts()])`.  
- `Promise.allSettled()` quando dados são opcionais e a página pode renderizar parcialmente (falhas parciais).  
- Estratégia combinada com cache: paralelo para fetches rápidos, cache para o caro, paralelo+cache quando há mix — tempo total \= max(fetches), não soma.

## 2.6 Navigation

- `next/link` \= **soft navigation**: transição client-side, URL atualiza via JS, só o conteúdo novo é buscado, layouts persistem, estado e scroll preservados, prefetch automático. `<a>` puro \= hard navigation (reload completo, perde estado).  
- Programático:  
  - Client: `useRouter()` de `next/navigation` — `router.push()`, `router.replace()` (back pula a entrada), `router.back()`.  
  - Server: `redirect()` de `next/navigation` — checks de auth, pós-submit em Server Actions.  
- Sempre `<Link>` para navegação interna; texto de link descritivo/acessível; foco significativo pós-navegação.

## 2.7 params vs searchParams

- **Separação de responsabilidades na URL**: `params` \= identidade do recurso (`/blog/[slug]`); `searchParams` \= estado opcional (filtros, sort, página, view).  
- Ambos são Promises no Next 16; use `Promise.all([params, searchParams])`.  
- **Impacto em cache** (insight-chave): `params` permitem cache (○, prerender via `generateStaticParams`); `searchParams` **forçam renderização dinâmica** (ƒ, não prerenderizável).  
- Padrão "cache por params": função cacheada (`"use cache"` \+ `cacheTag('post-'+slug)`) chaveada pelo slug; `searchParams` só para lógica leve de exibição (ex.: highlight).  
- Client: `useSearchParams` para ler, `useRouter` para atualizar; **envolva o componente que usa `useSearchParams` em `<Suspense>`** em rotas estáticas (senão o Next client-renderiza a página inteira).  
- Preserve filtros existentes ao atualizar (`URLSearchParams`); resetar `page=1` quando filtros mudam; URLs viram bookmarkable/compartilháveis.

## 2.8 Server Actions para Forms

- Mutations rodam no servidor (secrets nunca expostos) e formulários funcionam **sem JavaScript** (progressive enhancement via submit HTML nativo).  
- Estrutura:  
  - Arquivo/função com `"use server"`.  
  - Validação server-side com **Zod** (`schema.safeParse(dados)`), retornando payloads tipados `{ success }` ou `{ errors: { campo: [...] } }`.  
  - Erros inline, sem vazar stack traces.  
- Hooks client:  
  - `useActionState` (React 19; substitui `useFormState`) — gerencia estado da submissão e resposta do servidor.  
  - `useFormStatus` — estado `pending` para desabilitar/alterar o botão de submit.  
- Dispensa criar rotas `/api` para mutations; após mutar, revalide com `revalidatePath()`/`revalidateTag()`.

## 2.9 Multi-Zone com Rewrites

- **Rewrite** \= proxy transparente: URL do browser não muda, o Next encaminha internamente (≠ redirect, que muda a URL).  
- Em `apps/web/next.config.ts`:  
    
  async rewrites() {  
    
    return \[  
    
      { source: '/blog', destination: \`${blogUrl}/blog\` },  
    
      { source: '/blog/:path\*', destination: \`${blogUrl}/blog/:path\*\` },  
    
    \]  
    
  }  
    
  Duas regras: uma para o índice, outra (`:path*` catch-all) para rotas aninhadas. `blogUrl` vem de env var (`localhost:3001` em dev, domínio Vercel em prod).  
    
- Resultado: usuário vê um domínio único; cada app deploya independente.  
- Troubleshooting: 404 → reiniciar dev server / blog rodando?; rota sombreada → não tenha `/blog` também no `apps/web`; CSS quebrado → paths absolutos ou `assetPrefix`; CORS → headers no app de destino.

---

# Seção 3 — Advanced Patterns

## 3.1 Cache Components (`"use cache"`, cacheLife, cacheTag)

**Novo modelo mental** (substitui SSG/ISR/SSR/CSR por página): tudo prerenderiza um **shell estático** por padrão; você decide o que mais cachear.

- Habilitar: `cacheComponents: true` em `next.config.ts` (**top-level** no 16.1.x+, não mais em `experimental`).  
- APIs dinâmicas (`cookies()`, `headers()`, `searchParams`, `unstable_noStore()`) opt-out do prerender.  
- **Suspense cria "buracos dinâmicos"** no shell estático → isso é **PPR (Partial Prerendering)**: shell instantâneo \+ conteúdo dinâmico streamando. Coloque o `<Suspense>` o mais perto possível do conteúdo dinâmico para maximizar o shell.

**`"use cache"`** — cacheia o **valor de retorno** (não a execução) de funções/componentes/arquivos async:

- Nível de arquivo (todos os exports), função ou componente.  
- Funções devem ser **async**; args e retorno devem ser **serializáveis** (sem funções/símbolos); não funciona dentro de callbacks de `map()` (extraia para função nomeada); **não suportado no Edge Runtime** (use `fetch` com `next.revalidate` lá).  
- **Não pode usar APIs dinâmicas dentro do escopo cacheado** — extraia `cookies()`/`headers()` fora e passe como argumento.

**`cacheLife(perfil)`** — revalidação por tempo, com perfis no `next.config.ts`:

cacheLife: {

  blog:     { stale: 3600, revalidate: 86400, expire: 604800 },

  products: { stale: 300,  revalidate: 900,   expire: 3600 },

  social:   { stale: 60,   revalidate: 300,   expire: 600 },

}

- `stale`: fresco (serve do cache); `revalidate`: revalida em background (stale-while-revalidate); `expire`: regeneração síncrona forçada.  
- Cache aninhado: o `cacheLife` mais interno vale, a menos que o externo defina o seu.

**`cacheTag()` \+ `revalidateTag()`** — invalidação on-demand pós-mutação:

- `cacheTag('products', \`product-${id}\`)\` dentro da função cacheada (máx. 128 tags/entrada, 256 chars/tag; prefira tags hierárquicas).  
- Na Server Action pós-mutação: `revalidateTag(\`product-${id}\`, 'max')`— **no 16.1.x o 2º argumento é obrigatório**:`'max'`= stale-while-revalidate;`{ expire: 0 }\` \= expiração imediata.

**Variantes**: `"use cache"` (compartilhado), `"use cache: private"` (por usuário — bug conhecido com client navigation; workaround: `"use cache"` \+ tag por usuário), `"use cache: remote"` (cache distribuído Vercel).

**Árvore de decisão**: dado por usuário? → dinâmico. Staleness aceitável? não → dinâmico; sim → `"use cache"`. Revalidar por tempo → `cacheLife`; pós-mutação → `cacheTag`\+`revalidateTag`.

**`connection()`** (de `next/server`): opt-in da rota **inteira** em rendering dinâmico. Válido apenas para CSP nonces por request ou páginas 100% user-specific. Anti-pattern como "quick fix" para erros de `Date.now()` — prefira Suspense \+ `"use cache"`, ou mova para Client Component com `useEffect` se quiser tempo real.

**Gotchas**: `Date.now()`/`new Date()` em Server Component quebra o prerender (cacheie, use `connection()` ou mova para client); comportamento de cache difere em dev — teste com `pnpm build && pnpm start`; tags são case-sensitive.

## 3.2 Metadata Dinâmica

- **Erro crítico**: `fetch('/api/...')` relativo em `generateMetadata` falha — o servidor não conhece o domínio.  
  - ✅ Preferido: chamada direta de função (`getBlogPost(slug)`).  
  - ✅ Alternativa: URL absoluta via `process.env.API_URL`.  
- Defina `metadataBase` no root layout para resolução de URLs.  
- Conteúdo essencial por post: title/description/keywords/authors; OpenGraph com imagem **1200x630**, `type: 'article'`, `publishedTime`; Twitter card `summary_large_image`; canonical absoluto; fallback de metadata quando o recurso não existe.  
- Valide com os debuggers do Facebook/Twitter/LinkedIn; todas as URLs de imagem/canônicas devem ser absolutas (https://).

## 3.3 Suspense e Streaming

- Render tradicional espera TODOS os dados antes de enviar QUALQUER HTML. Streaming envia o shell imediatamente e componentes lentos chegam conforme resolvem — mesmo tempo total, UX muito melhor.  
- `loading.tsx` \= Suspense automático no nível da rota; `<Suspense>` manual \= granularidade por componente (cada um streama independente).  
- Divida páginas pesadas em componentes async separados (Header/Stats/Activity), cada um com seu boundary.  
- **Evite "spinner soup"**: 2–3 boundaries no máximo; fallbacks mínimos e com o **formato do conteúdo real** (skeletons, não spinners).  
- Teste com throttle "Slow 3G": TTFB rápido para o shell, LCP melhora quando o above-the-fold streama cedo, múltiplos chunks no waterfall (não uma resposta única bloqueante).

## 3.4 Imagens (`next/image`)

- Substitua `<img>` por `<Image>`: otimização automática de formato (WebP/AVIF por suporte do browser), lazy loading automático below-the-fold, redimensionamento via `/_next/image`.  
- `priority` no hero/imagem LCP → gera `<link rel="preload" fetchpriority="high">`.  
- **`sizes`** informa qual tamanho buscar: ex. `"(max-width: 768px) 100vw, 50vw"` para grid de 2 colunas. Errar \= over-fetching.  
- **CLS zero**: reserve espaço com `width`/`height`, ou `fill` \+ container com aspect-ratio.  
- `quality` 75–85 é o sweet spot (100 desperdiça banda).  
- Imagens externas exigem `remotePatterns` no `next.config.ts`.  
- Metas: LCP \< 2.5s, CLS \< 0.1.

## 3.5 Fontes (`next/font`)

- `next/font/google` **self-hosta** as fontes (zero requests a fonts.googleapis.com/gstatic; arquivos servidos de `/_next/static/media/`).  
- Estratégias `display`: `swap` (mostra fallback, troca ao carregar — recomendado), `optional` (pula a custom se rede lenta), `block` (espera breve), `fallback`, `auto`.  
- `adjustFontFallback: true` → fallback com métricas ajustadas (size-adjust) para prevenir CLS na troca.  
- **Variable fonts** (ex.: Inter): todos os pesos em um arquivo → menos requests.  
- `subsets: ['latin']` reduz tamanho (WOFF2 \< 100KB).  
- Aplique via CSS variables para integrar com Tailwind.

## 3.6 Core Web Vitals \+ Medição

- **Lab data (Lighthouse) ≠ field data (usuários reais)**. O Google ranqueia **apenas por field data**: percentil 75 dos usuários reais no Chrome, janela de 28 dias, mobile e desktop separados.  
- Métricas e metas: **LCP \< 2.5s** (loading), **INP \< 200ms** (interatividade), **CLS \< 0.1** (estabilidade visual).  
- Instrumentação: `@vercel/speed-insights` \+ `@vercel/analytics` (dados em tempo real no dashboard Vercel; Google leva 28 dias para refletir), ou reporting custom com a lib web-vitals (`instrumentation-client.ts`).  
- Diagnóstico:  
  - LCP ruim → identifique o elemento LCP (geralmente hero); use `next/image` \+ `priority`, cheque TTFB e recursos bloqueantes.  
  - INP ruim → bundles JS grandes, scripts third-party, long tasks (\>50ms), re-renders pesados.  
  - CLS ruim → imagens sem dimensões, fontes sem fallback ajustado, conteúdo injetado depois do load.

---

# Seção 4 — Polish & Presentation

## 4.1 Security Review (APIs e Config)

**As 5 camadas críticas** em toda API route / Server Action:

1. **Autenticação** — verifique identidade (401 se ausente).  
2. **Validação de input** — Zod schema em tudo que entra (`z.object({ userId: z.string().uuid(), amount: z.number().positive().max(...) })`).  
3. **Autorização** — usuário só acessa os próprios dados (`user.id === userId`, 403 caso contrário).  
4. **Rate limiting** — 429 para excesso de requisições.  
5. **Error handling seguro** — try/catch, log interno do erro real, resposta genérica ao cliente (nunca stack trace).

**Env vars**:

- Seguro expor com `NEXT_PUBLIC_`: URLs de API, feature flags, IDs de analytics, publishable keys (Stripe pk\_).  
- Nunca expor: secret keys, DATABASE\_URL/credenciais, JWT secrets (mínimo 32 chars aleatórios), tokens privados.

## 4.2 Query Performance (N+1)

Três níveis para a mesma página (ex.: 3 queries de 400ms):

1. **Sequencial** (❌ nunca): 1200ms.  
2. **Paralelo** com `Promise.all()` para queries independentes: \~400–800ms (dependências reais rodam antes, o resto em paralelo).  
3. **Join/include no ORM** (✅ melhor para dados relacionados): 1 query \~150ms — ex. Prisma `include: { author: { select: {...} }, comments: { take: 20, orderBy: {...} }, _count: {...} }`.  
- Sinais de N+1: awaits sequenciais sem dependência; `await` dentro de `map()`/loops; acesso a relações sem `include`/`with`.  
- Use `select` para trazer apenas os campos necessários; limite (`take`) e ordene no banco.

## 4.3 Third-Party Scripts (`next/script`)

Substitua `<script>` cru pelo componente `Script` com a `strategy` certa:

| Strategy | Quando carrega | Bloqueia? | Uso |
| :---- | :---- | :---- | :---- |
| `beforeInteractive` | Antes da hidratação | ✅ Sim | Só polyfills críticos |
| `afterInteractive` | Após interativo | ❌ | **Default para \~90%**: analytics (GA/Segment), chat (Intercom), pagamentos (Stripe), maps, auth |
| `lazyOnload` | Depois de tudo | ❌ | Embeds sociais, Disqus, share buttons, widgets opcionais |
| `worker` | Web Worker (experimental, requer `nextScriptWorkers`) | ❌ | Scripts pesados sem DOM |

- `onLoad` disponível para callbacks pós-carregamento.  
- Meça impacto com TBT/TTI no Performance tab e Lighthouse com/sem o script.

## 4.4 Advanced Image Optimization

- **Blur placeholders** (percepção de velocidade — placeholder borrado "parece" \~40% mais rápido que espaço em branco):  
  - Import estático: `placeholder="blur"` gera `blurDataURL` automaticamente em build (miniatura \~10px).  
  - Imagem remota: forneça `blurDataURL` manualmente (base64); para produção/CMS, gere com **plaiceholder** (ou placeholder de cor dominante em SVG 1x1 como fallback simples).  
- **Art direction** (imagens *diferentes* por viewport, não só tamanhos): `getImageProps()` extrai `srcSet` para usar com `<picture>` nativo — landscape no desktop, crop portrait no mobile, qualidades diferentes por device (economia de \~60% de banda mobile).  
- **`deviceSizes` / `imageSizes`** no `next.config.ts`: ajuste a geração de srcset aos breakpoints reais do seu design system para evitar variantes inúteis.

---

## Checklist mental (síntese do curso)

- Roteamento: pasta \= URL; conheça os 7 arquivos especiais; route groups para organização.  
- Server por padrão; `'use client'` mínimo e nas folhas; server children através de wrappers client.  
- `params`/`searchParams` são Promises; identidade em params (cacheável), estado em searchParams (dinâmico).  
- Secrets: nunca `NEXT_PUBLIC_`; DAL com `server-only`; DTOs para o client.  
- Erros: `error.tsx` ('use client', `reset`, `digest`) \+ `not-found.tsx` \+ `notFound()` sem try/catch.  
- `proxy.ts` (não mais middleware) para auth/headers/log pré-rota, com matcher excluindo estáticos.  
- Nunca awaits sequenciais independentes: `Promise.all` / `allSettled`; no banco, joins \> paralelo \> sequencial.  
- Forms: Server Actions \+ Zod \+ `useActionState`/`useFormStatus`; progressive enhancement.  
- Cache: shell estático por padrão; `"use cache"` \+ `cacheLife` (tempo) \+ `cacheTag`/`revalidateTag(tag,'max')` (mutação); Suspense perto do dinâmico (PPR).  
- Metadata: dados por chamada direta ou URL absoluta; `metadataBase`; OG 1200x630.  
- Performance: `next/image` (`priority`, `sizes`, CLS 0), `next/font` (swap \+ adjustFontFallback), `next/script` (afterInteractive default), Suspense sem spinner soup.  
- Meça field data (Speed Insights): LCP \< 2.5s, INP \< 200ms, CLS \< 0.1.  
- APIs: 5 camadas (auth, validação, autorização, rate limit, erros seguros).  
- Multi-zone: rewrites para unificar domínios com deploys independentes.

