---
template: "Planning Template"
versão: 1.0
status: "Template"
tags:
  - template
  - planejamento
  - spec-driven
---

# Template de Planejamento de Projeto

> Este template é gerado pela IA a partir do [[Requirements & Scope Project Template|01-Escopo.md]] via `/speckit.plan`. Preencha as seções conforme as instruções.

---

## Metadados do Projeto

| Campo | Valor |
|---|---|
| **Projeto** | [Nome do Cliente - Projeto] |
| **Nicho** | [Nicho do serviço] |
| **Classificação** | [Frontend do Zero / Full-stack do Zero / Refatoração Frontend / Refatoração Full-stack] |
| **Escopo vinculado** | `[[01-Escopo]]` |
| **Contrato vinculado** | `[[02-Contrato]]` |
| **Data de início** | YYYY-MM-DD |
| **Data estimada de entrega** | YYYY-MM-DD |

---

## 1. Resumo Executivo

_Síntese gerada pelo LLM baseada no Formulário de Escopo._

- **Objetivo central:**
- **KPIs de sucesso:**
- **Resultados esperados:**
- **Prazos primários:**

---

## 2. ⚠️ Erros Conhecidos (Memória Imunológica)

_Seção gerada automaticamente. A IA cruza a stack do projeto com `[[IN> Detalhes em [[Immunological Error Memory]]/by-stack/` e lista erros relevantes._

| ERR-ID | Título | Stack | Prevenção |
|---|---|---|---|
| | | | |

> Se nenhum erro relevante for encontrado, esta seção pode ser marcada como "✅ Nenhum erro conhecido para esta stack."

---

## 3. Estrutura Analítica do Projeto (EAP)

_Dissecação dos Requisitos Funcionais em épicos, sprints e tarefas granulares._

### Épico 1: [Nome do Épico]

| ID Tarefa | Descrição | Dependências | Definição de Feito | Estimativa |
|---|---|---|---|---|
| T-001 | [Descrição] | Nenhuma | [Critério] | [horas] |
| T-002 | [Descrição] | T-001 | [Critério] | [horas] |

### Épico 2: [Nome do Épico]

| ID Tarefa | Descrição | Dependências | Definição de Feito | Estimativa |
|---|---|---|---|---|
| T-003 | [Descrição] | Nenhuma | [Critério] | [horas] |

---

## 4. Cronograma, Fases e Marcos

| Fase | Descrição | Início | Fim | Marco de Entrega |
|---|---|---|---|---|
| **1 — Design de Sistema** | Arquitetura, wireframes, modelagem | | | Aprovação do design |
| **2 — Implementação de UI** | Componentes, pages, layout (Shadcn/Tailwind) | | | UI funcional |
| **3 — Integração** | API NestJS, data fetching, auth | | | Integração completa |
| **4 — Animações e Polish** | GSAP/Lenis, micro-interações, responsividade | | | UX refinado |
| **5 — QA e Testes** | Testes unitários, auditoria dos 3 arquivos | | | Relatório de conformidade |
| **6 — UAT e Entrega** | Revisão do cliente, ajustes, handoff | | | Projeto entregue |

---

## 5. Mapeamento da Stack

_Confirmação da pilha do `[[Preferencias Dev]]` mapeada para tarefas do `[[M5 - Dev Preferences & Quality Standards|Develop Preferences]]`._

| Tecnologia | Uso Neste Projeto | Notas Específicas |
|---|---|---|
| TypeScript | [Sim/Não] | |
| NestJS | [Sim/Não — se Full-stack] | |
| React.js | [Sim/Não] | |
| Tailwind + Shadcn | [Sim/Não] | |
| GSAP + Lenis | [Sim/Não — se animações] | |
| pnpm | Sim (obrigatório) | |

---

## 6. Plano de Mitigação de Riscos

_Especialmente crítico em projetos de Refatoração._

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| [Dívida técnica do legado] | [Alta/Média/Baixa] | [Alto/Médio/Baixo] | [Estratégia] |
| [Atraso na API do cliente] | | | |
| [Scope creep] | | | Contrato: Ordem de Mudança |

---

## 7. Estratégia de Comunicação e Aceitação

| Fase | Protocolo | Responsável |
|---|---|---|
| **Revisão de código** | Deploy em staging → link compartilhado | Dev |
| **UAT** | Cliente testa contra critérios de aceite do 01-Escopo | Cliente |
| **Feedback** | Documentado em `[[05-Dev-Log]]` | Ambos |
| **Aprovação final** | Assinatura/confirmação por escrito | Cliente |

---

## Mapeamento Sináptico

- **Escopo:** `[[01-Escopo]]`
- **Contrato:** `[[02-Contrato]]`
- **Tarefas:** `[[04-Tarefas]]`
- **Dev Log:** `[[05-Dev-Log]]`
- **Erros:** `[[06-Erros]]`
- **Memória Imunológica:** `[[INDEX]]`
- **Preferencias Dev:** `[[Preferencias Dev]]`
