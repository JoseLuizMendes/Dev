# 04 — Tarefas: Ana Souza — Site Institucional

> **Metodologia:** Akita + TDD. Cada tarefa com `[TEST]` tem o teste escrito **antes** do código de implementação.
> **Rastreabilidade:** cada tarefa referencia a User Story de origem do [[01-Escopo]].
> **Status inicial:** todas as tarefas em `pending`.

---

## Épico 1 — Setup e Infraestrutura

---

### T-1.1 — Bootstrap do Projeto Next.js

- **US de Origem:** N/A (infraestrutura base)
- **Status:** `pending`
- **Estimativa:** 2h
- **Arquivos Afetados:**
  - `package.json`
  - `tsconfig.json`
  - `next.config.ts`
  - `tailwind.config.ts`
  - `.env.local` (gitignored)
- **Critério de Aceite (BDD):**
  - **GIVEN** que executo `pnpm create next-app@latest` com flags `--typescript --tailwind --eslint --app --src-dir`
  - **WHEN** o projeto é criado e `pnpm dev` é executado
  - **THEN** o servidor dev sobe sem erros, TypeScript `strict: true` está ativo no `tsconfig.json`, e Tailwind está configurado

---

### T-1.2 — Instalar e Configurar GSAP + Lenis

- **US de Origem:** N/A (infraestrutura de animação)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `src/providers/SmoothScrollProvider.tsx`
  - `src/app/layout.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que GSAP e Lenis estão instalados via `pnpm add gsap @gsap/react lenis`
  - **WHEN** o `SmoothScrollProvider` é montado no layout raiz
  - **THEN** o scroll suave está ativo e `useGSAP` está disponível nos componentes filhos sem memory leaks

---

### T-1.3 — Instalar e Configurar Vitest + Playwright

- **US de Origem:** N/A (infraestrutura de testes)
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `vitest.config.ts`
  - `playwright.config.ts`
  - `src/tests/` (diretório)
  - `e2e/` (diretório)
- **Critério de Aceite (BDD):**
  - **GIVEN** que Vitest e Playwright estão instalados e configurados
  - **WHEN** executo `pnpm test` e `pnpm test:e2e`
  - **THEN** os runners iniciam sem erros e estão prontos para receber testes

---

### T-1.4 — Instalar Dependências Extras (Resend + React Email)

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 0.5h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `package.json`
- **Critério de Aceite (BDD):**
  - **GIVEN** que executo `pnpm add resend @react-email/components`
  - **WHEN** verifico `package.json`
  - **THEN** ambas as dependências estão listadas sem conflitos com a stack existente

---

### T-1.5 — Configurar Variáveis de Ambiente

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 0.5h
- **Dependências:** T-1.4
- **Arquivos Afetados:**
  - `.env.local`
  - `.env.example`
  - Painel Vercel (variáveis de produção)
- **Critério de Aceite (BDD):**
  - **GIVEN** que `RESEND_API_KEY` está definida no `.env.local`
  - **WHEN** o Route Handler `/api/contact` é chamado
  - **THEN** a chave é acessível via `process.env.RESEND_API_KEY` no server-side e **nunca exposta** no bundle do cliente

---

### T-1.6 — Configurar next.config.ts (Headers de Segurança)

- **US de Origem:** N/A (segurança)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `next.config.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o servidor Next.js está rodando
  - **WHEN** faço uma requisição HTTP e inspeciono os headers de resposta
  - **THEN** os headers `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy` e `Content-Security-Policy` estão presentes

---

### T-1.7 — Configurar Tokens de Design no Tailwind

- **US de Origem:** N/A (design system)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `tailwind.config.ts`
  - `src/styles/globals.css`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o `tailwind.config.ts` está configurado com tokens de cor, tipografia e espaçamento
  - **WHEN** uso classes utilitárias como `bg-brand-primary` ou `text-heading`
  - **THEN** os valores corretos são aplicados e nenhum hex hardcoded existe fora do config

---

### T-1.8 — Setup CI/CD Vercel

- **US de Origem:** N/A (infraestrutura de deploy)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - Configuração no painel Vercel
  - `vercel.json` (opcional)
- **Critério de Aceite (BDD):**
  - **GIVEN** que o repositório está conectado à Vercel
  - **WHEN** faço push para a branch `main`
  - **THEN** o deploy automático é disparado e uma URL de preview é gerada sem erros de build

---

## Épico 2 — Design e Layout Base

---

### T-2.1 — Sistema de Design (Paleta, Tipografia, Espaçamento)

- **US de Origem:** N/A (design system)
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-1.7
- **Arquivos Afetados:**
  - `tailwind.config.ts`
  - `src/lib/design-tokens.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o sistema de design está definido
  - **WHEN** aplico classes nos componentes
  - **THEN** paleta de cores (profissional/jurídica), tipografia (serif para headings, sans para corpo) e escala de espaçamento são consistentes em todas as seções

---

### T-2.2 — Componente `Layout` (Header + Footer)

- **US de Origem:** US-1.1 (navegação visível above fold)
- **Status:** `pending`
- **Estimativa:** 3h
- **Dependências:** T-2.1
- **Arquivos Afetados:**
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/app/layout.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso qualquer rota do site
  - **WHEN** a página carrega
  - **THEN** o Header (logo + navegação âncora) e o Footer (contato + copyright) são exibidos corretamente em mobile (375px) e desktop (1440px)

---

### T-2.3 — Componente `SectionWrapper`

- **US de Origem:** N/A (consistência visual)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-2.1
- **Arquivos Afetados:**
  - `src/components/ui/SectionWrapper.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que uso `<SectionWrapper>` em todas as seções da página
  - **WHEN** a página renderiza
  - **THEN** padding vertical, max-width e centralização são consistentes entre todas as seções

---

### T-2.4 — Scroll Suave com Lenis

- **US de Origem:** N/A (UX)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.2
- **Arquivos Afetados:**
  - `src/providers/SmoothScrollProvider.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o usuário rola a página
  - **WHEN** o scroll é ativado
  - **THEN** o scroll é suave (Lenis ativo) e as animações GSAP ScrollTrigger são sincronizadas via `requestAnimationFrame`

---

## Épico 3 — Módulo 1: Hero e Identidade

---

### T-3.1 — [TEST] E2E: Hero Section Above Fold (US-1.1)

- **US de Origem:** US-1.1
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `e2e/hero.spec.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso a URL raiz do site em viewport 375px e 1440px
  - **WHEN** a página carrega completamente
  - **THEN** os seletores `[data-testid="hero-headline"]`, `[data-testid="hero-subheadline"]` e `[data-testid="hero-cta"]` estão visíveis acima da dobra (sem scroll) em ambos os viewports
  - **THEN** o teste Playwright falha se qualquer um dos elementos estiver ausente ou abaixo da dobra

---

### T-3.2 — Implementar `HeroSection`

- **US de Origem:** US-1.1
- **Status:** `pending`
- **Estimativa:** 4h
- **Dependências:** T-3.1, T-2.2, T-2.3
- **Arquivos Afetados:**
  - `src/components/sections/HeroSection.tsx`
  - `src/app/page.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso a página inicial
  - **WHEN** ela renderiza
  - **THEN** headline principal, subheadline e botão CTA "Entrar em contato" estão visíveis above the fold, com `data-testid` corretos, e o botão ancora para a seção `#contato`
  - **THEN** o teste T-3.1 passa (RED → GREEN)

---

### T-3.3 — Animação GSAP na Hero Section

- **US de Origem:** US-1.1 (experiência visual)
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-3.2, T-1.2
- **Arquivos Afetados:**
  - `src/components/sections/HeroSection.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso a página inicial
  - **WHEN** ela carrega
  - **THEN** headline e CTA entram com animação suave (fade + slide) usando `useGSAP`
  - **THEN** se `prefers-reduced-motion: reduce`, as animações são desabilitadas e os elementos aparecem imediatamente
  - **THEN** nenhum memory leak ao desmontar o componente

---

### T-3.4 — [TEST] E2E: Seção de Serviços (US-1.2)

- **US de Origem:** US-1.2
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `e2e/servicos.spec.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso a página inicial
  - **WHEN** rolo até a seção de serviços
  - **THEN** o seletor `[data-testid="servicos-section"]` está presente
  - **THEN** existem N cards com `[data-testid="servico-card"]`, cada um contendo um ícone, título e descrição não vazios
  - **THEN** o layout não quebra em viewport 375px

---

### T-3.5 — Tipo TypeScript `ServicoAdvocacia` + Dados Estáticos

- **US de Origem:** US-1.2
- **Status:** `pending`
- **Estimativa:** 0.5h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `src/types/servico.ts`
  - `src/data/servicos.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o tipo `ServicoAdvocacia` está definido com `id`, `icone`, `titulo`, `descricao`
  - **WHEN** o array `servicos` é importado
  - **THEN** o TypeScript valida o shape sem erros e os dados dos serviços da advogada estão preenchidos (placeholder aceito, substituído por conteúdo real da cliente)

---

### T-3.6 — Implementar `ServicosSection`

- **US de Origem:** US-1.2
- **Status:** `pending`
- **Estimativa:** 3h
- **Dependências:** T-3.4, T-3.5, T-2.3
- **Arquivos Afetados:**
  - `src/components/sections/ServicosSection.tsx`
  - `src/components/ui/ServicoCard.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o array `servicos` tem dados preenchidos
  - **WHEN** a seção renderiza
  - **THEN** cada card exibe ícone (Lucide), título e descrição, responsivo em grid (1 col mobile, 2-3 cols desktop)
  - **THEN** o teste T-3.4 passa (RED → GREEN)

---

### T-3.7 — Animação GSAP nos Cards de Serviços

- **US de Origem:** US-1.2 (experiência visual)
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-3.6, T-1.2
- **Arquivos Afetados:**
  - `src/components/sections/ServicosSection.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o usuário rola até a seção de serviços
  - **WHEN** os cards entram no viewport
  - **THEN** cada card anima com stagger (fade-in sequencial) via GSAP ScrollTrigger
  - **THEN** `prefers-reduced-motion: reduce` desabilita a animação

---

### T-3.8 — Responsividade Mobile/Desktop (Hero + Serviços)

- **US de Origem:** US-1.1, US-1.2
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-3.3, T-3.7
- **Arquivos Afetados:**
  - `src/components/sections/HeroSection.tsx`
  - `src/components/sections/ServicosSection.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso o site em viewport 375px (mobile), 768px (tablet) e 1440px (desktop)
  - **WHEN** visualizo Hero e Serviços
  - **THEN** não há overflow horizontal, elementos não se sobrepõem e a hierarquia visual é mantida em todos os breakpoints

---

## Épico 4 — Módulo 2: Credibilidade e Contato

---

### T-4.1 — [TEST] E2E: Seção de Depoimentos (US-2.1)

- **US de Origem:** US-2.1
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `e2e/depoimentos.spec.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que acesso a página inicial
  - **WHEN** rolo até a seção de depoimentos
  - **THEN** o seletor `[data-testid="depoimentos-section"]` está presente
  - **THEN** existem pelo menos 3 elementos `[data-testid="depoimento-card"]`, cada um com nome e texto não vazios
  - **THEN** não há erros de layout em viewport 375px

---

### T-4.2 — Tipo TypeScript `Depoimento` + Dados Estáticos

- **US de Origem:** US-2.1
- **Status:** `pending`
- **Estimativa:** 0.5h
- **Dependências:** T-1.1
- **Arquivos Afetados:**
  - `src/types/depoimento.ts`
  - `src/data/depoimentos.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o tipo `Depoimento` está definido com `id`, `nome`, `texto`, `cargo?`
  - **WHEN** o array `depoimentos` é importado
  - **THEN** TypeScript valida sem erros e o array contém mínimo 3 depoimentos com dados de placeholder

---

### T-4.3 — Implementar `DepoimentosSection`

- **US de Origem:** US-2.1
- **Status:** `pending`
- **Estimativa:** 3h
- **Dependências:** T-4.1, T-4.2, T-2.3
- **Arquivos Afetados:**
  - `src/components/sections/DepoimentosSection.tsx`
  - `src/components/ui/DepoimentoCard.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o array `depoimentos` tem 3+ itens
  - **WHEN** a seção renderiza
  - **THEN** cada card exibe nome do cliente e texto do depoimento, layout responsivo
  - **THEN** o teste T-4.1 passa (RED → GREEN)

---

### T-4.4 — Animação GSAP nos Depoimentos

- **US de Origem:** US-2.1 (experiência visual)
- **Status:** `pending`
- **Estimativa:** 1.5h
- **Dependências:** T-4.3, T-1.2
- **Arquivos Afetados:**
  - `src/components/sections/DepoimentosSection.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o usuário rola até a seção de depoimentos
  - **WHEN** os cards entram no viewport
  - **THEN** fade-in animado via GSAP ScrollTrigger com `prefers-reduced-motion` respeitado

---

### T-4.5 — [TEST] E2E: Formulário de Contato Completo (US-2.2)

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `e2e/contato.spec.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que preencho `[data-testid="contato-nome"]`, `[data-testid="contato-email"]` e `[data-testid="contato-mensagem"]` com dados válidos
  - **WHEN** clico em `[data-testid="contato-submit"]`
  - **THEN** uma mensagem de confirmação `[data-testid="contato-sucesso"]` é exibida na tela
  - **THEN** em ambiente de teste, o envio para Resend é mockado (interceptado pelo Playwright)
  - **GIVEN** que submeto o formulário com email inválido
  - **WHEN** clico em enviar
  - **THEN** a mensagem de erro de validação é exibida e o formulário não é submetido

---

### T-4.6 — [TEST] Unitário: Validação Zod `ContatoFormData`

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `src/tests/contato-schema.test.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que tenho o schema Zod `ContatoFormData`
  - **WHEN** valido dados inválidos (nome vazio, email malformado, mensagem < 10 chars)
  - **THEN** o Zod retorna erros específicos por campo
  - **WHEN** valido dados válidos
  - **THEN** o parse é bem-sucedido sem erros

---

### T-4.7 — Schema Zod `ContatoFormData`

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-4.6
- **Arquivos Afetados:**
  - `src/lib/schemas/contato.schema.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o schema está definido
  - **WHEN** executo `pnpm test`
  - **THEN** o teste T-4.6 passa (RED → GREEN)
  - **THEN** campos obrigatórios: `nome` (min 2 chars), `email` (formato válido), `mensagem` (min 10 chars)

---

### T-4.8 — Implementar `ContatoForm`

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 4h
- **Dependências:** T-4.7, T-4.5
- **Arquivos Afetados:**
  - `src/components/sections/ContatoSection.tsx`
  - `src/components/ui/ContatoForm.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o formulário está renderizado com React Hook Form + Zod
  - **WHEN** submeto com dados válidos
  - **THEN** loading state é exibido, chamada POST para `/api/contact` é realizada, feedback de sucesso/erro é exibido via Sonner
  - **THEN** o teste T-4.5 passa (RED → GREEN)

---

### T-4.9 — [TEST] Unitário: Route Handler `/api/contact`

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 1.5h
- **Dependências:** T-1.3
- **Arquivos Afetados:**
  - `src/tests/api-contact.test.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o Route Handler recebe um POST com payload válido (mock Resend)
  - **WHEN** o handler é executado
  - **THEN** retorna `{ status: 200, message: "Email enviado com sucesso" }`
  - **GIVEN** que o payload é inválido
  - **THEN** retorna `{ status: 400, error: "..." }` com detalhes de validação
  - **GIVEN** que o Resend falha (mock de erro)
  - **THEN** retorna `{ status: 500, error: "Erro ao enviar email" }`

---

### T-4.10 — Route Handler `app/api/contact/route.ts`

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 3h
- **Dependências:** T-4.9, T-1.4, T-1.5
- **Arquivos Afetados:**
  - `src/app/api/contact/route.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o handler está implementado
  - **WHEN** executo `pnpm test`
  - **THEN** o teste T-4.9 passa (RED → GREEN)
  - **THEN** `RESEND_API_KEY` é lida exclusivamente de `process.env` (server-only)
  - **THEN** o email é enviado para `ana@anaadvocacia.com.br` com os dados do formulário

---

### T-4.11 — Template de Email React Email

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-4.10
- **Arquivos Afetados:**
  - `src/emails/ContatoEmail.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o template `ContatoEmail` está implementado com `@react-email/components`
  - **WHEN** o Route Handler chama `Resend.emails.send()`
  - **THEN** o email recebido pela advogada contém nome, email e mensagem do visitante em layout legível e profissional

---

### T-4.12 — Feedback Visual do Formulário

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 1.5h
- **Dependências:** T-4.8, T-4.10
- **Arquivos Afetados:**
  - `src/components/ui/ContatoForm.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o formulário está sendo submetido
  - **WHEN** a requisição está em andamento
  - **THEN** o botão exibe spinner e é desabilitado (evita double-submit)
  - **WHEN** o envio é bem-sucedido
  - **THEN** toast de sucesso via Sonner + mensagem inline `[data-testid="contato-sucesso"]`
  - **WHEN** ocorre erro
  - **THEN** toast de erro via Sonner + mensagem inline de erro

---

## Épico 5 — Polish, Performance e Acessibilidade

---

### T-5.1 — Auditoria de Acessibilidade WCAG 2.1 AA

- **US de Origem:** Requisito não funcional [[01-Escopo]] §6.3
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-3.x, T-4.x
- **Arquivos Afetados:** Todos os componentes
- **Critério de Aceite (BDD):**
  - **GIVEN** que audito o site com axe DevTools e revisão manual
  - **WHEN** verifico todas as seções
  - **THEN** contraste mínimo 4.5:1 em texto normal, todos os elementos interativos navegáveis por teclado, `aria-label` e roles adequados presentes

---

### T-5.2 — `prefers-reduced-motion` em Todas as Animações

- **US de Origem:** Requisito não funcional [[01-Escopo]] §6.3
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-3.3, T-3.7, T-4.4
- **Arquivos Afetados:** `HeroSection.tsx`, `ServicosSection.tsx`, `DepoimentosSection.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que `prefers-reduced-motion: reduce` está ativo no sistema do usuário
  - **WHEN** a página carrega ou o usuário rola
  - **THEN** nenhuma animação GSAP é executada e os elementos aparecem em estado final imediatamente

---

### T-5.3 — Auditoria Lighthouse (Core Web Vitals)

- **US de Origem:** Requisito não funcional [[01-Escopo]] §6.1
- **Status:** `pending`
- **Estimativa:** 1.5h
- **Dependências:** T-3.x, T-4.x
- **Arquivos Afetados:** N/A (auditoria)
- **Critério de Aceite (BDD):**
  - **GIVEN** que executo Lighthouse na URL de preview Vercel
  - **WHEN** o relatório é gerado
  - **THEN** LCP < 2.5s | FID < 100ms | CLS < 0.1 | Performance score >= 90

---

### T-5.4 — Otimização de Imagens e Fontes

- **US de Origem:** Requisito não funcional [[01-Escopo]] §6.1
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-5.3
- **Arquivos Afetados:** Componentes com imagens, `src/app/layout.tsx`
- **Critério de Aceite (BDD):**
  - **GIVEN** que audito imagens e fontes
  - **WHEN** verifico o bundle e o carregamento
  - **THEN** todas as imagens usam `next/image` com `sizes` responsivos e formato WebP
  - **THEN** fontes carregadas via `next/font` sem FOUT (Flash of Unstyled Text)

---

### T-5.5 — SEO Técnico

- **US de Origem:** Requisito não funcional [[01-Escopo]] §6.4
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-2.x
- **Arquivos Afetados:**
  - `src/app/layout.tsx` (metadata)
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que o site está publicado
  - **WHEN** verifico via Google Search Console e inspeção manual
  - **THEN** title, description, Open Graph (og:title, og:image, og:url) e Twitter Card estão configurados
  - **THEN** `sitemap.xml` e `robots.txt` são acessíveis e corretos

---

### T-5.6 — Rate Limiting no Route Handler

- **US de Origem:** US-2.2 (segurança)
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-4.10
- **Arquivos Afetados:**
  - `src/app/api/contact/route.ts`
- **Critério de Aceite (BDD):**
  - **GIVEN** que um IP faz mais de 5 requisições POST em 1 minuto para `/api/contact`
  - **WHEN** a 6ª requisição chega
  - **THEN** o handler retorna `{ status: 429, error: "Too Many Requests" }`

---

## Épico 6 — QA Final e Go-Live

---

### T-6.1 — Executar Suíte Playwright (Todos os Critérios BDD)

- **US de Origem:** US-1.1, US-1.2, US-2.1, US-2.2
- **Status:** `pending`
- **Estimativa:** 2h
- **Dependências:** T-5.x
- **Arquivos Afetados:** `e2e/`
- **Critério de Aceite (BDD):**
  - **GIVEN** que executo `pnpm test:e2e` no ambiente de staging
  - **WHEN** a suíte completa roda
  - **THEN** 100% dos testes passam — zero failures ou skips

---

### T-6.2 — Executar Suíte Vitest

- **US de Origem:** US-2.2
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-5.x
- **Arquivos Afetados:** `src/tests/`
- **Critério de Aceite (BDD):**
  - **GIVEN** que executo `pnpm test`
  - **WHEN** a suíte roda
  - **THEN** 100% dos testes unitários e de integração passam

---

### T-6.3 — Homologação com a Cliente (UAT)

- **US de Origem:** Todas
- **Status:** `pending`
- **Estimativa:** — (aguarda feedback da cliente)
- **Dependências:** T-6.1, T-6.2
- **Arquivos Afetados:** N/A
- **Critério de Aceite (BDD):**
  - **GIVEN** que o link de preview Vercel é enviado para ana@anaadvocacia.com.br
  - **WHEN** a cliente revisa e aprova
  - **THEN** aprovação formal documentada em [[05-Dev-Log]] com data e confirmação por escrito

---

### T-6.4 — Ajustes Pós-UAT

- **US de Origem:** Todas
- **Status:** `pending`
- **Estimativa:** 4h
- **Dependências:** T-6.3
- **Arquivos Afetados:** A definir após feedback da cliente
- **Critério de Aceite (BDD):**
  - **GIVEN** que a cliente forneceu feedback de revisão
  - **WHEN** os ajustes são implementados
  - **THEN** todos os pontos levantados estão resolvidos e dentro do escopo original do [[01-Escopo]]

---

### T-6.5 — Deploy Final (Produção)

- **US de Origem:** Todas
- **Status:** `pending`
- **Estimativa:** 0.5h
- **Dependências:** T-6.4
- **Arquivos Afetados:** Branch `main` → Vercel produção
- **Critério de Aceite (BDD):**
  - **GIVEN** que o push para `main` é realizado após aprovação da cliente
  - **WHEN** o deploy da Vercel completa
  - **THEN** o site está acessível na URL de produção sem erros de build ou runtime

---

### T-6.6 — Smoke Tests em Produção

- **US de Origem:** Todas
- **Status:** `pending`
- **Estimativa:** 1h
- **Dependências:** T-6.5
- **Arquivos Afetados:** N/A
- **Critério de Aceite (BDD):**
  - **GIVEN** que o site está em produção
  - **WHEN** acesso a URL e executo verificações manuais
  - **THEN** hero, serviços, depoimentos e formulário funcionam corretamente em produção
  - **THEN** formulário de contato envia email real via Resend com sucesso
  - **THEN** Lighthouse na URL de produção confirma Core Web Vitals aprovados

---

> **Referências:** [[01-Escopo]] | [[03-Planejamento]] | [[Preferencias Dev]] | [[05-Dev-Log]]
