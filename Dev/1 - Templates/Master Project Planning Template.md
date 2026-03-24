---
template: "Master Project Planning & Scope"
version: 4.0
status: "Template"
tags:
  - template
  - planejamento
  - escopo
  - spec-driven
  - high-ticket
  - client-presentation
  - lifecycle-pipeline
  - sdd-ready
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
classificacao: "{{SERVICE_TYPE}}"
data_inicio: "{{START_DATE}}"
data_entrega: "{{END_DATE}}"
tier: "{{BUDGET_TIER}}"
stack_confirmada: "{{FRONTEND_STACK}} | {{BACKEND_STACK}} | {{CLOUD_STACK}}"
---

# 🚀 Master Project Plan: {{PROJECT_NAME}}

> **Nota de Uso:** Este documento foi desenhado para ser apresentado ao cliente (via PDF) e simultaneamente processado por Agentes de IA (Claude/Spec-Kit). Preencha os campos entre chaves `{{ }}` ou colchetes `[ ]`. A IA usará essas tags estruturadas para gerar o código e os contratos de forma autônoma.
>
> **Fluxo de Ativação:** Ao receber este documento preenchido, a IA deve executar automaticamente o **Client Onboarding Protocol**: (1) extrair metadados, (2) gerar Contrato Dinâmico, (3) inicializar diretório do projeto, (4) iniciar Spec-Kit.

---

## 🏢 1. Contexto de Negócios e Metadados
_A fundação estratégica do projeto._

- **Empresa / Cliente:** {{CLIENT_NAME}}
- **Ponto de Contato (PO):** {{CLIENT_CONTACT}}
- **Nicho de Mercado:** {{MARKET_NICHE}}
- **Data de Início:** {{START_DATE}}
- **Previsão de Entrega Final:** {{END_DATE}}
- **Tier de Investimento:** {{BUDGET_TIER}} *(Ex: High-Ticket Tier 1)*

### 🎯 1.1 O Problema e a Visão
- **A Dor Central:** [Descreva o problema que o cliente enfrenta hoje]
- **A Visão da Solução:** [Descreva como este software premium resolverá o problema]
- **Público-Alvo:** [Quem vai usar a plataforma]
- **Métricas de Sucesso (KPIs):**
  - **Performance:** LCP < 2.5s, FID < 100ms, CLS < 0.1
  - **Negócio:** [Ex: +40% de conversão na Landing Page]
  - **Qualidade:** WCAG 2.1 AA, 100% cobertura de testes E2E

---

## 🎨 2. Experiência do Usuário e Requisitos Funcionais (Scope)

> **Para IA:** Esta seção será transformada em `.spec/backlog.md` para Spec-Driven Development. Cada User Story deve ter critério BDD executável.

### 📦 Módulo 1: {{MODULE_1_NAME}}
| ID | Funcionalidade (User Story) | Critério de Sucesso (BDD) | Prioridade | Agente Auditor |
| :--- | :--- | :--- | :---: | :---: |
| **US-1.1** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta | Product Strategist |
| **US-1.2** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🟡 Média | Web Designer |

### 📦 Módulo 2: {{MODULE_2_NAME}}
| ID | Funcionalidade (User Story) | Critério de Sucesso (BDD) | Prioridade | Agente Auditor |
| :--- | :--- | :--- | :---: | :---: |
| **US-2.1** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta | Copy Architect |

> **Regra:** Cada US será implementada via `/speckit.implement` uma tarefa por vez, com atualização de status em `04-Tarefas.md`.

---

## ⚙️ 3. Arquitetura Premium e Tech Stack

> **Para IA:** Esta seção deve ser cruzada obrigatoriamente com [[Preferencias Dev]]. Nenhuma dependência externa pode ser adicionada sem aprovação.

- **Tipo de Plataforma:** {{APP_TYPE}} *(Ex: SaaS Full-Stack, Landing Page Imersiva)*
- **Front-End & UI/UX:** {{FRONTEND_STACK}} *(Ex: Next.js 14, React, Tailwind, GSAP)*
- **Back-End & Banco de Dados:** {{BACKEND_STACK}} *(Ex: NestJS, PostgreSQL, Prisma)*
- **Infraestrutura Cloud:** {{CLOUD_STACK}} *(Ex: Vercel, AWS)*
- **QoS (Qualidade de Serviço):**
  - Animações fluidas a 60fps com `useGSAP`
  - SEO Dinâmico (Next.js App Router)
  - Acessibilidade WCAG 2.1 AA
  - Segurança JWT avançada
  - `strict: true` no TypeScript (any proibido)
  - CSS zero global (exceto edge cases)
  - Hex hardcoded proibido — usar tokens Tailwind

### 🔌 3.1 Integrações Essenciais (APIs)
- **Pagamentos:** {{PAYMENT_GATEWAY}} *(Ex: Stripe)*
- **Comunicação/E-mail:** {{EMAIL_SERVICE}} *(Ex: Resend)*
- **Armazenamento / Outros:** {{STORAGE_SERVICE}} *(Ex: AWS S3)*

### 🔌 3.2 MCPs e Ferramentas de IA
- **Context7:** Injeção de dependências e documentação em tempo real
- **Skill Obsidian:** Gestão de memória e skills no Cofre Cognitivo
- **MarketingCopywrite:** Support para copy e conteúdo estratégico

---

## 🛡️ 4. Gestão de Escopo e Exclusões (Anti-Scope Creep)

> **Para IA:** Qualquer solicitação fora deste escopo deve acionar **Change Request** e atualizar `01-Escopo.md` antes de alterar código.

1. **🚫 Exclusão 1:** {{EXCLUSION_1}} *(Ex: Criação de conteúdo em texto/imagens)*
2. **🚫 Exclusão 2:** {{EXCLUSION_2}} *(Ex: Integração com sistemas legados ou ERPs)*
3. **Contrato:** Todas as funcionalidades respeitam exclusivamente a Seção 2 deste documento.

---

## ⚠️ 5. Consulta à Memória Imunológica (Obrigatório)

> **Regra do Pipeline:** Antes de finalizar o planejamento, a IA **DEVE** consultar `[[INDEX]]` em `4 - Error's Memory/` e cruzar a stack do projeto com erros conhecidos.

### Erros Conhecidos da Stack
| Stack | Erro Conhecido | Mitigação |
| :--- | :--- | :--- |
| {{FRONTEND_STACK}} | [Consultar `4 - Error's Memory/by-stack/`] | [Prevent measure] |
| {{BACKEND_STACK}} | [Consultar `4 - Error's Memory/by-stack/`] | [Prevent measure] |
| {{CLOUD_STACK}} | [Consultar `4 - Error's Memory/by-category/deployment.md`] | [Prevent measure] |

> **Fonte:** [[Immunological Error Memory]] — Se houver erros relevantes, criar seção "⚠️ Erros Conhecidos" no plano de tarefas.

---

## 🗓️ 6. Cronograma de Entregas e Marcos (Milestones)

| Fase de Execução | Descrição do Entregável | Prazo Estimado |
| :--- | :--- | :--- |
| **1. Discovery & Design UI/UX** | Wireframes e Layout em Alta Fidelidade (Figma). | {{PHASE_1_WEEKS}} Semanas |
| **2. Fundação Técnica (Front/Back)** | Tabelas no BD, Roteamento e Telas Codificadas. | {{PHASE_2_WEEKS}} Semanas |
| **3. Integrações & Lógica Core** | Conexão de APIs, Checkouts e Fluxos Reais. | {{PHASE_3_WEEKS}} Semanas |
| **4. Polish & High-End UX** | Animações GSAP, responsividade fina e polimento visual. | {{PHASE_4_WEEKS}} Semanas |
| **5. QA, Testes e Go-Live** | Bateria de testes e entrega em ambiente de produção. | {{PHASE_5_WEEKS}} Semanas |

---

## 🔧 7. Spec-Driven Development Pipeline

> **Para IA:** Este projeto seguirá o pipeline SDD em 4 fases. **Nenhum código é gerado antes da aprovação do planejamento.**

### Pipeline SDD
| # | Fase | Comando | Input | Output |
|---|---|---|---|---|
| 1 | **Especificar** | `/speckit.specify` | Descrição alto nível | Jornadas de usuário + critérios de sucesso |
| 2 | **Planejar** | `/speckit.plan` | Especificação + Dev Preferences | Arquitetura + endpoints + schemas + file tree |
| 3 | **Gerar Tarefas** | `/speckit.tasks` | Plano técnico monolítico | Lista granular → `04-Tarefas.md` |
| 4 | **Implementar** | `/speckit.implement` | Tarefa individual | Código + testes unitários |

### Estrutura de Tarefas
- Cada tarefa terá: ID, título, descrição, arquivos afetados, critérios de aceite
- Status atualizado em `04-Tarefas.md`: `pending` → `in_progress` → `completed`
- Erros registrados em `06-Erros.md` e propagados para `4 - Error's Memory/`

---

## 🎯 8. Auditoria dos 3 Agentes Norteadores

> **Para IA:** Após implementação (ou iterativamente), o código deve ser auditado contra os 3 documentos norteadores via `/speckit.analyze`.

| Agente | Documento | Função na Auditoria |
|---|---|---|
| **Product Strategist** | [[ai-portfolio-product-strategist]] | Valida posicionamento estratégico e narrativa |
| **Web Designer** | [[ai-web-designer-agent]] | Valida design, UX, animações e responsividade |
| **Copy Architect** | [[ai-portfolio-copy-architect]] | Valida copy, microtextos e comunicação |

### Critérios de Auditoria por Agente
| Agente | Critérios de Validação |
|---|---|
| Product Strategist | Posicionamento claro, hierarquia de informação, conversão otimizada |
| Web Designer | `useGSAP` obrigatório, `prefers-reduced-motion`, WCAG AA, tokens de design |
| Copy Architect | Clareza, especificidade, autoridade, escaneabilidade, CTAs eficazes |

---

## ✅ 9. Entrega e Handoff (UAT + Go-Live)

| Etapa | Ação | Responsável |
|---|---|---|
| **Deploy de Homologação** | Link temporário para revisão | Dev |
| **UAT (User Acceptance Testing)** | Cliente testa contra critérios BDD | Cliente + Dev |
| **Feedback Loop** | Ajustes documentados em `05-Dev-Log.md` | Dev |
| **Handoff** | Transferência de credenciais, código e documentação | Dev |
| **Encerramento** | Atualização final do MEMORY.md | Dev + IA |

### Definição de Pronto (DoD)
- ✅ Todas as User Stories implementadas e testadas
- ✅ Cobertura de testes: 100% E2E (Playwright) + Unit (Jest)
- ✅ Performance: LCP < 2.5s, FID < 100ms, CLS < 0.1
- ✅ Acessibilidade: WCAG 2.1 AA validado
- ✅ Código auditado pelos 3 agentes sem violações
- ✅ Documentação completa entregue


