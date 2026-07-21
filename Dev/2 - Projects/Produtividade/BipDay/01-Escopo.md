---
template: "Requirements & Scope"
version: 2.2
status: "Aprovado (2026-07-17)"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
  - bipday
cliente: "Interno (produto próprio — José Luiz Mendes)"
projeto: "BipDay"
nicho: "Produtividade"
classificacao: "Full-stack do Zero"
data_inicio: "2026-07-17"
data_entrega: "[PENDENTE — definir no 03-Planejamento]"
valor: "N/A — produto próprio (sem contrato)"
package_manager: "pnpm"
frontend_stack: "Next.js 16 (App Router, standalone fullstack) + TypeScript strict + Tailwind 4 + shadcn/ui + GSAP + Lenis (só landing)"
backend_stack: "Next.js standalone (Route Handlers + Server Actions, sem NestJS) + Prisma + PostgreSQL (Neon free tier)"
cloud_stack: "Vercel (free tier) + Neon Postgres (free tier)"
dependencies: "next-auth@beta @auth/prisma-adapter @serwist/next serwist web-push rrule date-fns date-fns-tz"
email_service: "N/A — MVP sem email transacional"
storage_service: "N/A — MVP sem upload de arquivos"
payment_gateway: "N/A — premium arquitetado, cobrança só no roadmap"
midia: "nao" # opt-out Higgsfield — assets do MVP: ícone vetor + screenshots reais (00-DNA Parte 3)
---

# 📋 Formulário de Escopo e Requisitos: BipDay

> **Nota de Uso:** Documento primário de intake. Gerado a partir de [[Requirements & Scope Project Template]] v2.2 (matriz canon linha 2), alimentado pelo [[00-DNA]] v1.1 e decisões diretas do dev (2026-07-17).
>
> **Papel no fluxo:** projeto próprio — não há Master de cliente; a fonte é o Kickoff. Este documento alimenta o Planejamento (linha 4) e o `/speckit.specify`.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Interno — produto próprio |
| **Ponto de Contato (PO)** | José Luiz Mendes (dev = PO = usuário nº 1) |
| **Nicho de Mercado** | Produtividade / organização pessoal (público TDAH-BR) |
| **Data de Início** | 2026-07-17 |
| **Previsão de Entrega** | [PENDENTE — definir no 03-Planejamento] |
| **Valor do Projeto** | N/A (produto próprio) |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central

- **Quem sente a dor:** o próprio dev (validação) e, como persona de mercado, adultos brasileiros com TDAH/dificuldade de função executiva — estudantes, devs, autônomos que vivem no celular.
- **Sintoma observável:** esquecer compromissos e tarefas; perder a noção da passagem do tempo (time blindness); não conseguir transicionar entre atividades; abandonar apps de produtividade por sobrecarga ou culpa.
- **Causa raiz:** apps existentes são feature-bloated, em inglês/traduzidos, punitivos com falhas e sem suporte real à função executiva (alerta só no início do bloco, sem transição).
- **Impacto quantificado:** [PENDENTE — medir no dogfooding: nº de compromissos esquecidos/semana antes vs. depois]

### 2.2 A Visão da Solução

- **Resultado-chave esperado:** PWA instalado no celular do dev, usado diariamente, com rotina recorrente + tarefas do dia visíveis numa tela, bipando nas transições, streak ativo.
- **Métrica de sucesso:** dev usa ≥7 dias consecutivos sem abandonar (métrica-chave da validação); zero compromissos fixos esquecidos na semana de teste.
- **Horizonte de impacto:** imediato no go-live pessoal; mercado só após validação.
- **Diferencial competitivo:** função executiva bem feita em PT-BR (alertas de transição + timer visível), sem culpa (streak com recuperação gentil), anti-bloat (≤2 toques), nativamente BR (WhatsApp no roadmap).

### 2.3 Público-Alvo

- **Persona primária:** dev (25–35, técnico, mobile-first, usa o dia todo em micro-interações).
- **Persona secundária:** (mercado, pós-validação) adultos TDAH BR não-técnicos — exige UX sem jargão.
- **Contexto de uso:** **mobile-first** (PWA instalado); desktop funcional mas secundário. Uso em casa/trabalho/rua.
- **Volume estimado:** MVP = 1 usuário; arquitetura multi-user pronta para centenas (free tiers aguentam).

### 2.4 Métricas de Sucesso (KPIs)

| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP | < 2.5s |
| **Performance** | FID | < 100ms |
| **Performance** | CLS | < 0.1 |
| **Negócio** | Retenção pessoal (dogfooding) | ≥ 7 dias consecutivos de uso |
| **Negócio** | Compromissos esquecidos/semana | 0 |
| **Qualidade** | Cobertura de Testes E2E (critérios BDD) | 100% |
| **Qualidade** | Conformidade WCAG | 2.1 AA |
| **Qualidade** | Lighthouse mobile (landing) | ≥90 perf / ≥95 a11y |

---

## 3. Classificação do Serviço

- [ ] **Frontend do Zero**
- [x] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend**
- [ ] **Refatoração Full-stack**

**Justificativa:** projeto novo com persistência (Postgres), auth multi-user, API própria (Route Handlers/Server Actions) e front completo (landing + app PWA) no mesmo Next.js standalone.

---

## 4. Requisitos Funcionais (User Stories BDD)

> Persona "usuário" = dev no MVP. Cada requisito vira tarefa via `/speckit.tasks`; TDD por critério.

### Módulo 1: Auth & Tenant

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como usuário, quero entrar com Google para acessar meu espaço sem criar senha | **GIVEN** visitante em `/entrar` **WHEN** autentica via Google **THEN** sessão criada e redirect para `/app/[username]` | 🔥 Alta |
| **US-1.2** | Como usuário, quero um username único que vira minha URL (`/app/jose`) | **GIVEN** primeiro login sem username **WHEN** escolho slug disponível **THEN** username salvo e URL do meu espaço ativa | 🔥 Alta |
| **US-1.3** | Como usuário, quero que ninguém acesse meu espaço | **GIVEN** usuário A logado **WHEN** acessa `/app/[username-de-B]` **THEN** redirect/403 (guard no middleware) | 🔥 Alta |
| **US-1.4** | Como visitante não logado, quero ser levado ao login ao tentar abrir o app | **GIVEN** sem sessão **WHEN** acessa `/app` ou `/app/*` **THEN** redirect para `/entrar` | 🔥 Alta |

### Módulo 2: Compromissos Recorrentes

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como usuário, quero cadastrar obrigações fixas (trabalho, igreja, faculdade) com horário de início e fim | **GIVEN** formulário de compromisso **WHEN** preencho título, categoria, início/fim e recorrência **THEN** compromisso aparece nos dias corretos | 🔥 Alta |
| **US-2.2** | Como usuário, quero botões prontos de recorrência (todo dia · dias da semana · dia N do mês) sem digitar regra | **GIVEN** criação de compromisso **WHEN** toco chips "seg, qua, sex" **THEN** recorrência salva (RRULE) e visível como chips | 🔥 Alta |
| **US-2.3** | Como usuário, quero editar/excluir um compromisso em ≤2 toques a partir da visão do dia | **GIVEN** compromisso na tela "hoje" **WHEN** toco nele → editar **THEN** formulário aberto pré-preenchido; exclusão pede 1 confirmação | 🔥 Alta |
| **US-2.4** | Como usuário, quero pausar um compromisso sem excluí-lo (férias, recesso) | **GIVEN** compromisso ativo **WHEN** pauso **THEN** some das visões e do streak até reativar | 🟡 Média |

### Módulo 3: Tarefas Esporádicas

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como usuário, quero capturar uma tarefa avulsa em ≤2 toques (botão + na tela principal) | **GIVEN** tela "hoje" **WHEN** toco "+", digito título e confirmo **THEN** tarefa criada para hoje (data/hora opcionais) | 🔥 Alta |
| **US-3.2** | Como usuário, quero dar prioridade e prazo a uma tarefa | **GIVEN** criação/edição **WHEN** defino prioridade (alta/média/baixa) e hora opcional **THEN** ordenação da lista reflete prioridade e hora | 🟡 Média |
| **US-3.3** | Como usuário, quero marcar tarefa como feita com 1 toque e ver o check animar | **GIVEN** tarefa pendente **WHEN** toco no círculo **THEN** status `done` + microanimação + conta pro dia do streak | 🔥 Alta |
| **US-3.4** | Como usuário, quero que tarefa **sem prazo** não feita role para o dia seguinte, sem me culpar | **GIVEN** tarefa sem prazo (`isDeadline=false`) não concluída **WHEN** abro "hoje" **THEN** ela rola para hoje, com tom neutro (sem vermelho/alarme) | 🟡 Média |
| **US-3.5** | Como usuário, quero que tarefa **com prazo** naquele dia NÃO role — fica marcada como vencida no dia do prazo | **GIVEN** tarefa com prazo (`isDeadline=true`) do dia anterior não concluída **WHEN** abro "hoje" **THEN** ela permanece no dia do prazo marcada como vencida (não rola), tom neutro sem alarme; continua acessível para concluir/reagendar | 🟡 Média |

### Módulo 4: Visões (Dia / Semana / Mês-radar)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-4.1** | Como usuário, quero abrir o app direto na visão "hoje" com tudo do dia em ordem cronológica | **GIVEN** login válido **WHEN** abro `/app/jose` **THEN** visão dia com compromissos expandidos da recorrência + tarefas, bloco atual destacado | 🔥 Alta |
| **US-4.2** | Como usuário, quero ver a semana para planejar | **GIVEN** visão dia **WHEN** troco para "semana" **THEN** 7 colunas/lista com compromissos e tarefas por dia, dia atual destacado | 🔥 Alta |
| **US-4.3** | Como usuário, quero um radar do mês SEM lista de tarefas (só marcadores) para não me sobrecarregar | **GIVEN** visão mês **WHEN** carrega **THEN** grid de dias apenas com pontinhos/marcadores de recorrências (ex: "dia 1 - conta"), sem lista detalhada; toque num dia → visão dia | 🟡 Média |
| **US-4.4** | Como usuário, quero ver o bloco ATUAL com destaque e contagem regressiva sempre visível | **GIVEN** compromisso em andamento **WHEN** estou na visão dia **THEN** card "agora" fixo no topo com countdown ("termina em 25 min") e barra de progresso | 🔥 Alta |

### Módulo 5: Alertas de Transição & Timer (o "bip")

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-5.1** | Como usuário, quero ser avisado ANTES de o bloco acabar para me preparar para a transição | **GIVEN** compromisso termina às 12:00 e antecedência = 10 min **WHEN** 11:50 **THEN** notificação "faltam 10 min — próximo: Almoço" (push se app fechado, in-app se aberto) | 🔥 Alta |
| **US-5.2** | Como usuário, quero ser avisado no INÍCIO de cada bloco | **GIVEN** compromisso inicia 14:00 **WHEN** 14:00 **THEN** notificação "agora: Trabalho focado" | 🔥 Alta |
| **US-5.3** | Como usuário, quero configurar a antecedência do aviso por compromisso (5/10/15 min) | **GIVEN** edição de compromisso **WHEN** escolho antecedência **THEN** alertas respeitam o valor | 🟡 Média |
| **US-5.4** | Como usuário, quero autorizar notificações uma única vez com explicação clara | **GIVEN** primeiro uso **WHEN** onboarding pede permissão **THEN** prompt nativo precedido de explicação do valor ("o bip é o coração do app") + fallback in-app se negar | 🔥 Alta |

### Módulo 6: Streak & Foguinho (sem punição)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-6.1** | Como usuário, quero ganhar o dia (foguinho) quando completo o planejado | **GIVEN** todos os compromissos/tarefas do dia marcados **WHEN** último check **THEN** streak +1, badge 🔥 anima uma vez (única aparição da cor `accent-fire`) | 🔥 Alta |
| **US-6.2** | Como usuário, quero ver minha sequência atual e recorde | **GIVEN** visão dia **WHEN** olho o topo **THEN** badge "🔥 N dias" visível; perfil mostra recorde | 🟡 Média |
| **US-6.3** | Como usuário, quero que falhar um dia NÃO me humilhe | **GIVEN** dia sem completar **WHEN** abro o app no dia seguinte **THEN** mensagem neutra/acolhedora ("recomeçando hoje"), zero vermelho, zero contador de "dias perdidos" | 🔥 Alta |
| **US-6.4** | Como usuário, quero que dia pausado/vazio não quebre o streak | **GIVEN** dia sem nenhum item planejado **WHEN** vira o dia **THEN** streak preservado (dia neutro, não conta nem quebra) | 🟡 Média |

### Módulo 7: PWA & Instalação

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-7.1** | Como usuário, quero instalar o BipDay no celular como app | **GIVEN** navegador mobile em `/app/*` **WHEN** aceito o prompt de instalação **THEN** ícone na home; abre standalone (sem barra do navegador) em `/app` → redirect para `/app/jose` | 🔥 Alta |
| **US-7.2** | Como usuário, quero que o app abra rápido mesmo com rede ruim | **GIVEN** PWA instalado **WHEN** abro com rede lenta/instável **THEN** shell carrega do cache (service worker Serwist); dados sincronizam quando possível | 🟡 Média |
| **US-7.3** | Como visitante da landing, NÃO quero que a landing faça parte do app instalado | **GIVEN** manifest `scope: /app` **WHEN** instalo **THEN** navegação da landing abre no navegador, não no app | 🟡 Média |

### Módulo 8: Landing Page (`/`)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-8.1** | Como visitante, quero entender em 5 segundos o que o BipDay faz e pra quem | **GIVEN** primeiro acesso a `/` **WHEN** hero renderiza **THEN** headline dor→promessa + CTA "Criar conta grátis" acima da dobra, LCP <2.5s | 🔥 Alta |
| **US-8.2** | Como visitante, quero navegar pelas seções com a fluidez das refs | **GIVEN** scroll na landing **WHEN** navego **THEN** Lenis suave + reveals GSAP; com `prefers-reduced-motion` tudo estático | 🟡 Média |
| **US-8.3** | Como visitante, quero criar conta a partir de qualquer CTA | **GIVEN** qualquer seção **WHEN** toco CTA **THEN** `/criar-conta` → Google → onboarding username → `/app/[username]` | 🔥 Alta |
| **US-8.4** | Como dono do produto, quero a landing indexável | **GIVEN** deploy **WHEN** crawler acessa **THEN** metadata/OG/JSON-LD/sitemap/robots presentes (Fase 9 do Frontend Creative Protocol) | 🟡 Média |

### Módulo 9: Mocks (WhatsApp & IA — interfaces do futuro)

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-9.1** | Como usuário, quero ver onde o WhatsApp vai se conectar (mock) | **GIVEN** configurações **WHEN** abro "Lembretes por WhatsApp" **THEN** UI completa com toggle e preview de mensagem, badge "em breve", dados mockados — nenhuma chamada real | 🟢 Baixa |
| **US-9.2** | Como usuário, quero ver o espaço da IA (quebra de tarefa) desativado com preview | **GIVEN** criação de tarefa **WHEN** vejo ação "quebrar em passos ✨" **THEN** exemplo mockado de decomposição + "em breve" — sem chamada de API | 🟢 Baixa |

---

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto
- **Tipo de Plataforma:** PWA mobile-first (landing SSG + app autenticado) — Next.js standalone fullstack
- **Front-End:** Next.js 16 App Router · TS strict · Tailwind 4 + shadcn/ui · Zustand · Nuqs · RHF+Zod · Sonner · Lucide · GSAP (+Lenis só na landing)
- **Back-End & BD:** Route Handlers + Server Actions · Prisma · PostgreSQL (Neon/Vercel Postgres free)
- **Infra/Cloud:** Vercel free tier · Serwist (service worker) · Web Push VAPID

### 5.2 Dependências Extras

```
next-auth@beta @auth/prisma-adapter @serwist/next serwist web-push rrule date-fns date-fns-tz
```

> `rrule` = expansão de recorrência (RFC 5545, compatível com futuro sync Google Calendar). `web-push` = VAPID server-side. `date-fns-tz` = timezone do usuário (campo `timezone` no User). R7: todas dentro da stack aprovada ou justificadas aqui.

### 5.3 Integrações com APIs

| Serviço | Tipo | Finalidade |
|---|---|---|
| N/A — Pagamentos | — | Roadmap (premium); `isPremium` já no schema |
| N/A — Email | — | MVP sem transacional (auth 100% Google OAuth) |
| N/A — Storage | — | MVP sem uploads |
| Google OAuth | Auth | Login (Auth.js v5 provider) |
| Web Push (VAPID) | Notificação | Alertas de transição — chaves próprias, gratuito |
| WhatsApp / IA | — | **MOCKADOS** no MVP (US-9.x) |

### 5.4 Entidades de Dados

| Entidade | Campos Principais | Relacionamentos |
|---|---|---|
| **User** | id, name, email, `username` (slug único), `isPremium`, `timezone`, image | 1:N Commitment, Task, Completion; tabelas Auth.js (Account/Session) |
| **Commitment** | id, title, category, startTime, endTime, `rrule` (string RFC 5545), alertLeadMinutes, color, paused, userId | N:1 User; 1:N Completion |
| **Task** | id, title, notes, date, dueTime?, `isDeadline` (bool — prazo fixo no dia vs flexível que rola), priority, status, userId | N:1 User; 1:N Completion |
| **Completion** | id, entityType (commitment/task), entityId, date, completedAt, userId | N:1 User — **fonte do streak e da futura IA** |
| **PushSubscription** | id, endpoint, keys (p256dh/auth), userId, userAgent | N:1 User |

> Streak = derivado de Completion (`currentStreak`/`longestStreak` calculados; cache se necessário). **Dados primeiro:** `schema.prisma` é o primeiro artefato de código (Backend Onboarding, linha 22).

### 5.5 Sistemas de Terceiros

Nenhum no MVP. Roadmap: WhatsApp Business API, API Anthropic (IA), Google Calendar API.

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [ ] LCP < 2.5s | FID < 100ms | CLS < 0.1
- [ ] Bundle size < 500kb (gzipped); bundle da landing separado do app (route groups)
- [ ] Animação nunca bloqueia first paint (canon GSAP)

### 6.2 Segurança
- [ ] Auth.js v5, cookies `httpOnly/secure/sameSite` (JWT de sessão gerenciado pelo Auth.js)
- [ ] Guard de tenant no middleware (US-1.3) | HTTPS obrigatório
- [ ] Zod em toda entrada (client E server) | Proteção OWASP Top 10
- [ ] Security headers (CSP, HSTS, nosniff, Permissions-Policy, frame-ancestors) — Fase 10
- [ ] Env vars validadas com zod no boot; zero segredos no client

### 6.3 Acessibilidade
- [ ] WCAG 2.1 AA | `prefers-reduced-motion` respeitado (crítico p/ público neurodivergente)
- [ ] Navegação por teclado | Contraste: tokens pré-checados (8.8:1 primary/surface)
- [ ] Touch targets ≥44px (uso mobile em movimento)

### 6.4 Escalabilidade
- [ ] Arquitetura stateless (Vercel serverless) | Cache do shell via service worker
- [ ] Rate limiting nos Route Handlers públicos
- [ ] Free→Premium: flag `isPremium` no schema (arquitetada). **Decisão do dev (2026-07-17): SEM tiers no MVP — tudo liberado; monetização/limites definidos só no go-to-market.** Nenhum gating de feature no código do MVP.

---

## 7. Limites de Escopo e Exclusões

1. **App nativo iOS/Android** — fora do MVP (decisão de custo zero). Caminho de nativo escolhido para fase 2 = **Capacitor** (empacota o web atual, reusa ~100% do código; decidido 2026-07-17 sobre RN/KMP). Exige Apple Developer US$99/ano só quando for publicar no iOS.
2. **WhatsApp real, IA real, Google Calendar sync** — apenas mocks/roadmap (US-9.x); implementação real = Change Request/fase nova.
3. **Offline-first completo (edição offline + sync)** — MVP tem apenas cache de shell; CRDT/local-first é roadmap.
4. **Cobrança/checkout premium** — arquitetado (`isPremium`), não implementado.
5. **Compartilhamento social / multi-tenant público** — `/app/[tenant]` é privado do dono no MVP.

Solicitações fora disso: replanejamento via `/speckit.plan` (Change Request — linha 15 da matriz).

---

## 8. Aprovação e Assinaturas

**Cliente:** Interno (produto próprio) — **Data:** 2026-07-17

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** 2026-07-17 (aprovado nesta sessão)

---

> **Próximo Passo:** após aprovação do dev:
> 1. ~~Contrato Dinâmico~~ — **N/A (produto próprio, sem cliente)**
> 2. **Planejamento Técnico** via [[Planning Template]] (linha 4)
> 3. **Tarefas** via [[Tasks Template]] (linha 5) → **Bootstrap** ([[Protocol-Bootstrap]], linhas 6–9 + 17)
> 4. **Spec-Kit SDD+TDD** — 3 specs: fundação → app core → landing
