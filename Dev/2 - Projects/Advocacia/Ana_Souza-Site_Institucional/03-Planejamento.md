---
template: "Planning"
version: 1.1
status: "Ativo"
tags:
  - planejamento
  - sdd
  - tdd
  - spec-driven
  - advocacia
cliente: "Dra. Ana Souza"
nicho: "Advocacia"
classificacao: "Frontend do Zero"
data_inicio: "2026-04-07"
data_entrega: "2026-05-19"
---

# 📐 Plano de Execução Técnico: Ana Souza — Site Institucional

> **Fonte:** Gerado a partir do [[01-Escopo]] via `/speckit.plan`. Nenhum código é gerado antes da aprovação deste documento.
> **Metodologia:** Akita + SDD + TDD. Cada tarefa tem teste escrito antes do código.

---

## 1. Resumo Executivo

- **Objetivo:** Criar site institucional de alta qualidade para advogada autônoma, com hero section, áreas de atuação, depoimentos e formulário de contato integrado ao Resend, eliminando ausência de presença digital estruturada.
- **Resultado esperado:** Landing page publicada na Vercel, acessível, performática (Core Web Vitals aprovados), com envio de formulário funcional via Resend, responsiva e visualmente alinhada à identidade profissional da cliente.
- **Prazo total:** 2026-04-07 → 2026-05-19 (42 dias corridos)
- **KPIs de sucesso:** LCP < 2.5s | FID < 100ms | CLS < 0.1 | WCAG 2.1 AA | 100% US com E2E passando

---

## 2. Estrutura Analítica do Projeto (EAP)

### Épico 1: Setup e Infraestrutura

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-1.1 | Bootstrap Next.js 16 + Tailwind + TypeScript strict | — | 2h | pending |
| T-1.2 | Instalar e configurar GSAP + Lenis | T-1.1 | 1h | pending |
| T-1.3 | Instalar e configurar Vitest + Playwright | T-1.1 | 2h | pending |
| T-1.4 | Instalar dependências extras: resend @react-email/components | T-1.1 | 0.5h | pending |
| T-1.5 | Configurar variáveis de ambiente (.env.local + Vercel) | T-1.4 | 0.5h | pending |
| T-1.6 | Configurar next.config.ts (headers de segurança, redirects) | T-1.1 | 1h | pending |
| T-1.7 | Configurar tailwind.config.ts (tokens de design, cores, tipografia) | T-1.1 | 1h | pending |
| T-1.8 | Setup CI/CD: deploy automático na Vercel via Git | T-1.1 | 1h | pending |

### Épico 2: Design e Layout Base

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-2.1 | Definir sistema de design (paleta, tipografia, espaçamento) | T-1.7 | 2h | pending |
| T-2.2 | Criar componente `Layout` (Header + Footer + navegação) | T-2.1 | 3h | pending |
| T-2.3 | Criar componente `SectionWrapper` (consistência entre seções) | T-2.1 | 1h | pending |
| T-2.4 | Implementar scroll suave com Lenis | T-1.2 | 1h | pending |
| T-2.5 | Configurar `next/font` (zero layout shift) | T-2.1 | 0.5h | pending |
| T-2.6 | Configurar `next/image` com tamanhos responsivos | T-2.1 | 0.5h | pending |

### Épico 3: Módulo 1 — Hero e Identidade (US-1.1, US-1.2)

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-3.1 | [TEST] Escrever teste E2E Playwright para US-1.1 (hero above fold) | T-1.3 | 1h | pending |
| T-3.2 | Implementar componente `HeroSection` (headline + subheadline + CTA) | T-3.1, T-2.x | 4h | pending |
| T-3.3 | Animação GSAP na hero section (entrada dos elementos) | T-3.2, T-1.2 | 2h | pending |
| T-3.4 | [TEST] Escrever teste E2E Playwright para US-1.2 (cards de serviços) | T-1.3 | 1h | pending |
| T-3.5 | Criar tipo TypeScript `ServicoAdvocacia` + dados estáticos | T-1.1 | 0.5h | pending |
| T-3.6 | Implementar componente `ServicosSection` (grid de cards com ícone, título, descrição) | T-3.4, T-3.5 | 3h | pending |
| T-3.7 | Animação GSAP nos cards de serviços (scroll-triggered) | T-3.6, T-1.2 | 2h | pending |
| T-3.8 | Garantir responsividade mobile/desktop em Hero e Serviços | T-3.3, T-3.7 | 2h | pending |

### Épico 4: Módulo 2 — Credibilidade e Contato (US-2.1, US-2.2)

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-4.1 | [TEST] Escrever teste E2E Playwright para US-2.1 (depoimentos) | T-1.3 | 1h | pending |
| T-4.2 | Criar tipo TypeScript `Depoimento` + dados estáticos (mínimo 3) | T-1.1 | 0.5h | pending |
| T-4.3 | Implementar componente `DepoimentosSection` (cards com nome e texto) | T-4.1, T-4.2 | 3h | pending |
| T-4.4 | Animação GSAP nos depoimentos (fade-in scroll-triggered) | T-4.3, T-1.2 | 1.5h | pending |
| T-4.5 | [TEST] Escrever teste E2E Playwright para US-2.2 (formulário → confirmação) | T-1.3 | 2h | pending |
| T-4.6 | [TEST] Escrever teste unitário Vitest para validação Zod do formulário | T-1.3 | 1h | pending |
| T-4.7 | Implementar schema Zod `ContatoFormData` (nome, email, mensagem) | T-4.6 | 1h | pending |
| T-4.8 | Implementar componente `ContatoForm` com React Hook Form + Zod | T-4.7, T-4.5 | 4h | pending |
| T-4.9 | [TEST] Escrever teste do Route Handler `/api/contact` (mock Resend) | T-1.3 | 1.5h | pending |
| T-4.10 | Implementar Route Handler `app/api/contact/route.ts` (Resend integration) | T-4.9, T-1.4, T-1.5 | 3h | pending |
| T-4.11 | Template de email com `@react-email/components` | T-4.10 | 2h | pending |
| T-4.12 | Feedback visual no formulário (loading state, sucesso, erro com Sonner) | T-4.8, T-4.10 | 1.5h | pending |

### Épico 5: Polish, Performance e Acessibilidade

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-5.1 | Auditoria de acessibilidade WCAG 2.1 AA (todas as seções) | T-3.x, T-4.x | 2h | pending |
| T-5.2 | Implementar `prefers-reduced-motion` em todas as animações GSAP | T-3.3, T-3.7, T-4.4 | 1h | pending |
| T-5.3 | Auditoria de performance Lighthouse (LCP, FID, CLS) | T-3.x, T-4.x | 1.5h | pending |
| T-5.4 | Otimização de imagens e fontes (WebP, lazy loading, next/font) | T-5.3 | 2h | pending |
| T-5.5 | Configurar SEO: metadata, Open Graph, sitemap.xml, robots.txt | T-2.x | 2h | pending |
| T-5.6 | Rate limiting no Route Handler `/api/contact` | T-4.10 | 1h | pending |

### Épico 6: QA Final e Go-Live

| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-6.1 | Executar suíte completa Playwright (todos os critérios BDD) | T-5.x | 2h | pending |
| T-6.2 | Executar suíte completa Vitest (unitários + integração) | T-5.x | 1h | pending |
| T-6.3 | Homologação com a cliente (link temporário Vercel preview) | T-6.1, T-6.2 | — | pending |
| T-6.4 | Ajustes pós-UAT (feedbacks da cliente) | T-6.3 | 4h | pending |
| T-6.5 | Deploy final na Vercel (branch main → produção) | T-6.4 | 0.5h | pending |
| T-6.6 | Validação pós-deploy (smoke tests em produção) | T-6.5 | 1h | pending |

---

## 3. Cronograma e Marcos

| Fase | Descrição | Início | Fim | Status |
|---|---|---|---|---|
| **1. Discovery & Design** | Sistema de design, tokens, wireframe de alta fidelidade, setup completo | 2026-04-07 | 2026-04-13 | pending |
| **2. Fundação Técnica** | Bootstrap, infraestrutura, layout base, componentes compartilhados | 2026-04-14 | 2026-04-22 | pending |
| **3. Integrações & Lógica Core** | Módulo 1 completo (Hero + Serviços), Módulo 2 (Depoimentos + Formulário + Resend) | 2026-04-23 | 2026-05-01 | pending |
| **4. Polish & UX** | Animações GSAP refinadas, responsividade, acessibilidade, SEO, performance | 2026-05-02 | 2026-05-11 | pending |
| **5. QA & Go-Live** | Testes completos, UAT com cliente, ajustes, deploy final | 2026-05-12 | 2026-05-19 | pending |

**Estimativa total:** ~58 horas de desenvolvimento

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---|---|
| Framework | Next.js | 16.x | App Router padrão conforme [[Preferencias Dev]] |
| UI Library | React | 19.x | Functional components + Server Components |
| Styling | Tailwind CSS | 3.4+ | Zero CSS global. Tokens no config. Conforme [[Preferencias Dev]] |
| Animações | GSAP + Lenis | 3.12+ | `useGSAP` obrigatório. `prefers-reduced-motion` respeitado |
| Forms | React Hook Form + Zod | latest | Type-safe, zero boilerplate |
| Email | Resend + @react-email/components | latest | Serviço declarado no escopo |
| Notificações | Sonner | latest | Toast feedback do formulário |
| Ícones | Lucide React | latest | Ícones das áreas de atuação |
| Testes E2E | Playwright | latest | TDD obrigatório. Todos os critérios BDD |
| Testes Unit. | Vitest | latest | Lógica Zod, Route Handler |
| Deploy | Vercel | — | CI/CD automático. Conforme [[Preferencias Dev]] |
| Package Manager | pnpm | latest | npm/yarn/bun banidos conforme [[Preferencias Dev]] |
| Backend | N/A | — | Frontend do Zero — sem backend próprio |
| Banco de Dados | N/A | — | Sem persistência de dados |

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado em [[4 - Error's Memory/INDEX]] antes de finalizar este plano. Data: 2026-04-01.

| ERR-ID | Título | Stack Afetada | Mitigação Aplicada |
|---|---|---|---|
| ERR-2026-0001 | Excesso de artefatos no onboarding | Onboarding | Seguindo checklist de entrega mínima |
| ERR-2026-0002 | Conteúdo resumido interpretado como saída mínima | Onboarding | Templates preenchidos com estrutura completa |
| — | GSAP: cleanup obrigatório com `useGSAP` no React | GSAP + React | `useGSAP` usado em todos os componentes com animação |
| — | Resend: chave de API nunca exposta no client-side | Resend + Next.js | `RESEND_API_KEY` usada apenas no Route Handler (server-only) |

---

## 6. Mitigação de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Atraso no fornecimento de conteúdo pela cliente | Alta | Alto | Cláusula contratual (§12a) + desenvolvimento com placeholders. Conteúdo bloqueante definido com antecedência |
| Indisponibilidade do serviço Resend | Baixa | Médio | Mockar integração durante desenvolvimento. Cláusula dinâmica de API no contrato (§9) |
| Mudança de escopo mid-project | Média | Alto | Cláusula de Controle de Escopo (§6) + Change Request obrigatório |
| Performance abaixo do esperado (LCP > 2.5s) | Baixa | Médio | Auditoria Lighthouse na Fase 4. `next/image`, `next/font`, bundle analysis |
| Animações GSAP com jank em dispositivos low-end | Baixa | Baixo | `prefers-reduced-motion` implementado. Testes em dispositivos reais na Fase 4 |
| Credenciais Vercel/Resend não fornecidas a tempo | Média | Alto | Solicitar credenciais no kick-off. Documentado em [[05-Dev-Log]] |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** Check-in assíncrono ao final de cada fase via email com screenshots/link de preview
- **Link de homologação:** URL de preview Vercel (gerada automaticamente a cada push)
- **Critérios de UAT:** Todas as 4 User Stories do [[01-Escopo]] validadas pela cliente no link de preview
- **Feedback:** Documentado em [[05-Dev-Log]], issues rastreadas em [[04-Tarefas]]
- **Canal de comunicação:** Email (ana@anaadvocacia.com.br) + mensagens com confirmação de leitura

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as 4 User Stories implementadas com testes Playwright passando (TDD)
- [ ] Cobertura E2E Playwright: 100% dos critérios BDD (US-1.1, US-1.2, US-2.1, US-2.2)
- [ ] Testes unitários Vitest: validação Zod + Route Handler `/api/contact` cobertos
- [ ] Performance: LCP < 2.5s | FID < 100ms | CLS < 0.1 (validado via Lighthouse)
- [ ] Bundle size < 500kb gzipped
- [ ] Acessibilidade: WCAG 2.1 AA validado
- [ ] `prefers-reduced-motion` implementado em todas as animações
- [ ] SEO: metadata, OG, sitemap.xml, robots.txt configurados
- [ ] Deploy na Vercel (produção) funcionando sem erros
- [ ] Formulário de contato testado end-to-end em produção (email entregue via Resend)
- [ ] Aprovação formal da cliente via UAT documentada em [[05-Dev-Log]]

---

## Referências

- [[01-Escopo]] — Fonte dos requisitos e User Stories
- [[02-Contrato]] — Contrato do projeto
- [[04-Tarefas]] — Lista granular de tarefas com critérios BDD
- [[05-Dev-Log]] — Registro de progresso e comunicações
- [[Preferencias Dev]] — Stack, metodologia e regras de qualidade
- [[4 - Error's Memory/INDEX]] — Memória imunológica consultada em 2026-04-01
- [[Dynamic Contract Engine]] — Motor de cláusulas dinâmicas
- [[Project Lifecycle Pipeline]] — Fluxo de desenvolvimento
