---
template: "Project Kickoff Input"
version: 1.2
status: "Preenchido"
projeto: "BipDay"                 # nome definido 2026-07-17; domínio disponível no registro.br
cliente: "Interno (produto próprio)"
nicho: "Produtividade"
tipo: "front+back"                # persiste dados + auth + IA futura
execucao_automatica: "nao"        # aprovações ponto a ponto (validação pessoal antes de mercado)
data: "2026-07-17"
---

# 🚀 Kickoff Input — BipDay

> Template canon da porta de entrada de projeto (matriz canon linha 20 de [[Master Pipeline & Enforcement]]).
> Projeto **próprio** do dev: linhas 0–1 (Pre-Sale) e 3 (Contrato) = `N/A — sem cliente`.

---

## 1. Briefing

App de **rotina e organização pessoal** para combater esquecimento, dificuldade de autogestão do tempo e baixa produtividade no dia a dia. Público-alvo definido por pesquisa de mercado (2026-07-17): **pessoas com TDAH / dificuldade de função executiva no Brasil** (time blindness, esquecimento, paralisia de iniciar tarefa). Vácuo de produto nacional pessoal + dor de mercado nº 1 = feature bloat → tese: **fazer poucas coisas muito bem, sem culpa, em PT-BR**.

**Objetivo do projeto (1–3 frases):**
Entregar um PWA que o próprio dev use diariamente (dogfooding) para provar a tese de função executiva, arquitetado para virar produto multi-usuário/freemium depois. Diferencial central: alertas de transição + timer visível + foguinho sem punição, com compromissos recorrentes e tarefas esporádicas separados.

**Tipo de entrega:** PWA mobile-first (landing page em `/` + app instalável em `/app/[tenant]`).

**Concorrência (pesquisa):** globais traduzidos (Google Calendar, Todoist, TickTick, Fabulous, Tiimo, Routinery). AgendaAí e família "Agenda(a)í" = agendamento B2B, **não** concorrentes — e nome saturado, evitar. Nacional pessoal quase inexistente (Clarify é exceção TDAH).

---

## 2. DNA do Projeto (front)

### 2.1 Referências visuais

> Escolhidas pelo dev em 2026-07-17 (do catálogo do [[Frontend Creative Protocol]] §1.3). O que ele mais gostou: **fluidez**; more-nutrition = "a interface mais próxima do que penso pro app".

| # | Referência (URL) | O que interessa dela |
|---|---|---|
| 1 | https://more-nutrition.webflow.io/ | **REF PRINCIPAL** — interface/mood do app: paleta sage pastel, headings condensados, cards limpos, tom fresco/acolhedor |
| 2 | https://buckssauce.com/ | Acento quente (âmbar → foguinho/streak), CTAs uppercase com hover swap de texto, pills |
| 3 | https://cipherdigital.com/ | **Engenharia de fluidez** (não a cor): Lenis, escala fluida `clamp()`, spacing scale, page transitions, botões com split de caracteres |

> Complementares de UX (estudo de padrões, não de estética): Tiimo (timeline anti-time-blindness), Structured (visão do dia mobile). Proto-design system extraído: ver `00-DNA.md` Parte 2.

### 2.2 Identidade visual

| Campo | Valor |
|---|---|
| **Paleta** | Proposta extraída das refs (2026-07-17): sage pastel `#E8EFE4` / `#B6CBA5` + verde profundo `#335C30` + âmbar `#D97A1F` (exclusivo do foguinho) + ink `#1D211C` — detalhada no `00-DNA.md` Parte 2. Status: **apresentada ao dev via preview visual, aprovada no plano** |
| **Tipografia** | Bricolage Grotesque (display) + Inter Tight (body/UI) — 100% Google Fonts, custo zero |
| **Tom / mood** | Calmo, acolhedor, sem culpa, foco. Anti-ansiedade. |
| **Logo / brand assets existentes?** | [PENDENTE — nome do produto ainda não definido] |

### 2.3 Assets recebidos do cliente

Nenhum (produto próprio). N/A na fase de Kickoff.

### 2.4 Assets a gerar

| Slot | Tipo | Precisa animar? | Fundo transparente? | Vira vídeo? |
|---|---|---|---|---|
| Mockups do app para a landing (hero + "como funciona") | img | sim (GSAP scrub/parallax) | não | não |
| Ícone/logo do PWA | img | não | sim (alpha) | não |
| [PENDENTE — definir após identidade visual] | | | | |

---

## 3. Back-end (tipo: front+back)

| Campo | Valor |
|---|---|
| **Requisitos de back** | CRUD de compromissos recorrentes + tarefas; cálculo de streak/foguinho; agendamento de alertas de transição (Web Push VAPID); auth multi-user; multi-tenancy por path (`/app/[username]`). WhatsApp e IA = **mockados** no MVP. |
| **Dados / entidades principais** | User (+ tabelas Auth.js, `username`, `isPremium`, `timezone`) · Commitment (recorrente, recurrence tipo RRULE) · Task (esporádica) · Completion (histórico → base do streak e da futura IA) · Streak (derivado). |
| **Integrações** | MVP: nenhuma externa real. Fast-follow: Google Calendar (OAuth). Roadmap: WhatsApp (bot), IA (quebra de tarefa, ajuste de rotina). |
| **Auth** | Auth.js v5 + `@auth/prisma-adapter` + Google OAuth (gratuito). Dev = usuário nº 1. |
| **Porte** | Pequeno/médio → **Vercel + Next.js standalone** (Deploy Protocol). Custo alvo: **zero** (free tiers). |

---

## 4. Aprovações pré-autorizadas

`execucao_automatica: nao` → todos os pontos de parada valem. Nenhuma pré-autorização (o dev valida cada etapa por ser produto pessoal em validação).

- [ ] Paleta e identidade visual
- [ ] Estrutura de sections proposta
- [ ] Contrato — N/A (produto próprio)
- [ ] Prompts de geração de mídia
- [ ] Escolha de framework — **pré-decidida**: Next.js 16 (registrado no `03-Planejamento`)

---

## 5. Recorte do produto (fonte: decisões diretas do dev, 2026-07-17)

**MVP:** compromissos fixos recorrentes (botões todo dia / seg–dom / dia N do mês) + tarefas esporádicas · visão dia (default) + semana + mês-radar colapsado · alertas de transição + timer visível · foguinho + streak sem punição · captura por texto · login multi-user · dados mockados (WhatsApp/IA) · UX de baixo atrito (ações comuns ≤2 toques).

**Fast-follow:** captura por voz · quebra de tarefa com IA · review guiado · modo "só o próximo passo" · Google Calendar sync.

**Roadmap:** bot WhatsApp · IA que ajusta a rotina real · body doubling · offline-first completo.

**Stack:** Next.js 16 App Router (standalone fullstack) · TS strict · Tailwind 4 + shadcn/ui · Prisma + Postgres · Auth.js v5 + Google · Zustand/Nuqs/RHF+Zod/Sonner/Lucide · PWA Serwist + Web Push · GSAP + Lenis (Lenis só na landing) · Vitest + Playwright · pnpm · Vercel. Arquitetura Layered (promoção tardia p/ Hexagonal permitida).

**Rotas:** `/` landing (SSG/SEO) · `/app/[tenant]` app instalável (tenant = username; guard no middleware; PWA scope `/app`).

---

## Lista de `[PENDENTE]`

1. ~~Nome do produto~~ — **RESOLVIDO 2026-07-17: BipDay** (dev testou registro.br, domínio disponível; sem colisão — "Bip" crédito UK e "BiP" messenger turco são categorias/nomes distintos).
2. ~~Refs visuais~~ — **RESOLVIDO 2026-07-17** (§2.1).
3. ~~Paleta / identidade~~ — **RESOLVIDO 2026-07-17** (§2.2 + `00-DNA.md` Parte 2).
4. ~~Username/tenant do dev~~ — **RESOLVIDO 2026-07-17: `jose`** (`/app/jose`).

---

## Quality Gate (do Kickoff)

- [x] Gerado a partir de `[[Project Kickoff Input Template]]` (v1.2) como base
- [x] Salvo como `00-Input.md` na pasta correta (`2 - Projects/Produtividade/Rotina/`)
- [x] Assets do cliente: N/A (produto próprio) — declarado
- [x] `00-DNA.md` gerado com as 5 partes do contrato de resposta (2026-07-17)
- [x] Proto-tokens extraídos das refs (CSS computado real — `00-DNA.md` Parte 2)
- [x] `[PENDENTE]` usados onde falta fonte — nada inventado (R3)
