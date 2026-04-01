---
template: "Master Project Planning & Scope"
version: 5.1
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
  - tdd
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
classificacao: "{{SERVICE_TYPE}}"
data_inicio: "{{START_DATE}}"
data_entrega: "{{END_DATE}}"
tier: "{{BUDGET_TIER}}"
stack_confirmada: "{{FRONTEND_STACK}} | {{BACKEND_STACK}} | {{CLOUD_STACK}}"
---

# 🚀 Master Project Plan: {{PROJECT_NAME}}

> **Nota de Uso:** Documento para apresentação ao cliente (PDF) e processamento por Agentes de IA. Preencha os campos entre `{{ }}` ou `[ ]`.
>
> **Fluxo de Ativação:** Ao receber este documento, a IA executa automaticamente o [[Client Onboarding Protocol]]: extração de metadados → Contrato Dinâmico → diretório do projeto → bootstrap de dependências → Spec-Kit SDD+TDD.

---

## 🏢 1. Contexto de Negócios e Metadados

- **Empresa / Cliente:** {{CLIENT_NAME}}
- **Ponto de Contato (PO):** {{CLIENT_CONTACT}}
- **Nicho de Mercado:** {{MARKET_NICHE}}
- **Data de Início:** {{START_DATE}} | **Entrega Final:** {{END_DATE}}
- **Tier de Investimento:** {{BUDGET_TIER}}

### 🎯 1.1 O Problema e a Visão
- **A Dor Central:** [Problema que o cliente enfrenta hoje]
- **A Visão da Solução:** [Como este software resolverá o problema]
- **Público-Alvo:** [Quem vai usar a plataforma]
- **KPIs:** LCP < 2.5s | FID < 100ms | CLS < 0.1 | WCAG 2.1 AA | 100% E2E | [KPIs de negócio]

---

## 🎨 2. Experiência do Usuário e Requisitos Funcionais (Scope)

> **Para IA:** seção transformada em `.spec/backlog.md`. Cada critério BDD vira um teste TDD antes da implementação.

### 📦 Módulo 1: {{MODULE_1_NAME}}
| ID | User Story | Critério BDD | Prioridade | Agente Auditor |
| :--- | :--- | :--- | :---: | :---: |
| **US-1.1** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [ctx] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta | Product Strategist |
| **US-1.2** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [ctx] **WHEN** [ação] **THEN** [resultado] | 🟡 Média | Web Designer |

### 📦 Módulo 2: {{MODULE_2_NAME}}
| ID | User Story | Critério BDD | Prioridade | Agente Auditor |
| :--- | :--- | :--- | :---: | :---: |
| **US-2.1** | *Como [persona], quero [ação] para [valor]* | **GIVEN** [ctx] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta | Copy Architect |

---

## ⚙️ 3. Arquitetura, Stack e Dependências

> **Para IA:** cruzar com [[Preferencias Dev]]. O campo `{{DEPENDENCIES}}` é o gatilho do bootstrap automático.

- **Tipo de Plataforma:** {{APP_TYPE}}
- **Front-End:** {{FRONTEND_STACK}} | **Back-End & BD:** {{BACKEND_STACK}} | **Infra:** {{CLOUD_STACK}}

### 🔌 3.1 Integrações (APIs)
- **Pagamentos:** {{PAYMENT_GATEWAY}} | **E-mail:** {{EMAIL_SERVICE}} | **Storage:** {{STORAGE_SERVICE}}

### 📦 3.2 Dependências Extras do Projeto
> **Para IA:** instalar via `pnpm add` no bootstrap. Dependências base da stack são instaladas automaticamente — não listar aqui.

```
{{DEPENDENCIES}}
```

*Ex: `stripe @stripe/stripe-js resend @aws-sdk/client-s3 date-fns`*

---

## 🛡️ 4. Gestão de Escopo e Exclusões

> **Para IA:** solicitações fora deste escopo acionam **Change Request** e atualização do `01-Escopo.md` antes de alterar código.

1. **🚫 {{EXCLUSION_1}}**
2. **🚫 {{EXCLUSION_2}}**

---

## ⚠️ 5. Consulta à Memória Imunológica

> **Para IA:** consultar [[4 - Error's Memory/INDEX]] antes de finalizar o planejamento. Cruzar stack com erros conhecidos.

| Stack | Consultar |
| :--- | :--- |
| {{FRONTEND_STACK}} | `4 - Error's Memory/by-stack/` |
| {{BACKEND_STACK}} | `4 - Error's Memory/by-stack/` |
| {{CLOUD_STACK}} | `4 - Error's Memory/by-category/deployment.md` |

---

## 🗓️ 6. Cronograma de Entregas e Marcos

| Fase | Entregável | Prazo |
| :--- | :--- | :--- |
| **1. Discovery & Design** | Wireframes + Layout Figma | {{PHASE_1_WEEKS}} sem |
| **2. Fundação Técnica** | DB, roteamento, telas base | {{PHASE_2_WEEKS}} sem |
| **3. Integrações & Core** | APIs, checkouts, fluxos reais | {{PHASE_3_WEEKS}} sem |
| **4. Polish & UX** | GSAP, responsividade, polimento | {{PHASE_4_WEEKS}} sem |
| **5. QA & Go-Live** | Testes, auditoria, deploy | {{PHASE_5_WEEKS}} sem |

---

## ✅ 7. Definição de Pronto (DoD)

- [ ] Todas as User Stories implementadas com testes passando (TDD)
- [ ] 100% E2E (Playwright) + unitários críticos (Vitest)
- [ ] Performance: LCP < 2.5s | FID < 100ms | CLS < 0.1
- [ ] WCAG 2.1 AA validado
- [ ] Auditado pelos 3 agentes norteadores sem violações
- [ ] Bootstrap de dependências registrado no `05-Dev-Log.md`
- [ ] Documentação completa entregue

> Pipeline completo de execução: [[Project Lifecycle Pipeline]] | Metodologia: [[Preferencias Dev]]
