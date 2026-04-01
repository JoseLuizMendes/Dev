---
template: "Planning"
version: 1.1
status: "Template"
tags:
  - template
  - planejamento
  - sdd
  - tdd
  - spec-driven
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
classificacao: "{{SERVICE_TYPE}}"
data_inicio: "{{START_DATE}}"
data_entrega: "{{END_DATE}}"
---

# 📐 Plano de Execução Técnico: {{PROJECT_NAME}}

> **Fonte:** Gerado a partir do `[[01-Escopo]]` via `/speckit.plan`. Nenhum código é gerado antes da aprovação deste documento.

---

## 1. Resumo Executivo

- **Objetivo:** [Síntese do problema e solução]
- **Resultado esperado:** [O que estará funcionando na entrega]
- **Prazo total:** {{START_DATE}} → {{END_DATE}}
- **KPIs de sucesso:** LCP < 2.5s | FID < 100ms | CLS < 0.1 | WCAG 2.1 AA

---

## 2. Estrutura Analítica do Projeto (EAP)

### Épico 1: {{EPIC_1_NAME}}
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-1.1 | [descrição] | — | [horas] | pending |
| T-1.2 | [descrição] | T-1.1 | [horas] | pending |

### Épico 2: {{EPIC_2_NAME}}
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-2.1 | [descrição] | T-1.x | [horas] | pending |

---

## 3. Cronograma e Marcos

| Fase | Descrição | Prazo | Status |
|---|---|---|---|
| **1. Discovery & Design** | Wireframes e layout em alta fidelidade | {{PHASE_1_END}} | pending |
| **2. Fundação Técnica** | Setup, DB, roteamento e telas base | {{PHASE_2_END}} | pending |
| **3. Integrações & Lógica Core** | APIs, checkouts, fluxos reais | {{PHASE_3_END}} | pending |
| **4. Polish & UX** | Animações GSAP, responsividade, polimento | {{PHASE_4_END}} | pending |
| **5. QA & Go-Live** | Testes, auditoria e deploy | {{PHASE_5_END}} | pending |

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend | {{FRONTEND_STACK}} | Conforme [[Preferencias Dev]] |
| Backend | {{BACKEND_STACK}} | Conforme [[Preferencias Dev]] |
| Banco de Dados | {{DB_STACK}} | Conforme [[Preferencias Dev]] |
| Infra | {{CLOUD_STACK}} | Conforme [[Preferencias Dev]] |
| Animações | GSAP + Lenis | `useGSAP` obrigatório |
| Testes | Vitest + Playwright | TDD obrigatório. Cobertura total |

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado em `[[4 - Error's Memory/INDEX]]` antes de finalizar este plano.

| ERR-ID | Título | Stack Afetada | Mitigação Aplicada |
|---|---|---|---|
| — | Nenhum erro relevante identificado para esta stack | — | — |

---

## 6. Mitigação de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| [Ex: APIs de terceiros indisponíveis] | Média | Alto | Mockar dados durante desenvolvimento |
| [Ex: Dívida técnica oculta] | Baixa | Médio | Fase de auditoria prévia obrigatória |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** [frequência e formato]
- **Link de homologação:** [URL temporária para o cliente]
- **Critérios de UAT:** Todas as User Stories do `[[01-Escopo]]` validadas pelo cliente
- **Feedback:** Documentado em `[[05-Dev-Log]]`

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as User Stories implementadas com testes passando (TDD)
- [ ] Cobertura E2E (Playwright) completa
- [ ] Testes unitários (Vitest) cobrindo lógica crítica
- [ ] Performance: LCP < 2.5s | FID < 100ms | CLS < 0.1
- [ ] Acessibilidade: WCAG 2.1 AA validado
- [ ] Código auditado pelos 3 agentes sem violações
- [ ] Documentação completa entregue

---

## Referências

- [[01-Escopo]] — Fonte dos requisitos
- [[02-Contrato]] — Contrato do projeto
- [[04-Tarefas]] — Lista granular de tarefas
- [[Preferencias Dev]] — Stack, metodologia e regras de qualidade
- [[4 - Error's Memory/INDEX]] — Memória imunológica consultada
