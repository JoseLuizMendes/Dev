---
template: "Requirements & Scope"
version: 1.0
status: "Template"
tags:
  - template
  - escopo
  - requisitos
  - bdd
  - spec-driven
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
classificacao: "{{SERVICE_TYPE}}"
data_inicio: "{{START_DATE}}"
data_entrega: "{{END_DATE}}"
valor: "{{PROJECT_VALUE}}"
---

# 📋 Formulário de Escopo e Requisitos: {{PROJECT_NAME}}

> **Nota de Uso:** Este é o documento primário de intake do projeto. A IA extrairá o frontmatter para gerar automaticamente o Contrato Dinâmico e o Planejamento. Preencha todos os campos entre `{{ }}` ou `[ ]`.

> **Para que serve no fluxo:** após o cliente responder o **Master Project Planning Template**, este template é usado para consolidar as respostas em formato técnico estruturado (fonte oficial para contrato, planejamento e `speckit.specify`).

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | {{CLIENT_NAME}} |
| **Ponto de Contato (PO)** | {{CLIENT_CONTACT}} |
| **Nicho de Mercado** | {{MARKET_NICHE}} |
| **Data de Início** | {{START_DATE}} |
| **Previsão de Entrega** | {{END_DATE}} |
| **Valor do Projeto** | {{PROJECT_VALUE}} |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central
[Descreva o problema que o cliente enfrenta hoje. Seja específico sobre limitações, gargalos e impactos no negócio.]

### 2.2 A Visão da Solução
[Descreva como este software resolverá o problema. Inclua objetivos mensuráveis e resultados esperados.]

### 2.3 Público-Alvo
[Quem vai usar a plataforma? Descreva personas, cargos, contexto de uso.]

### 2.4 Métricas de Sucesso (KPIs)
| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP (Largest Contentful Paint) | < 2.5s |
| **Performance** | FID (First Input Delay) | < 100ms |
| **Performance** | CLS (Cumulative Layout Shift) | < 0.1 |
| **Negócio** | [Ex: Conversão Landing Page] | [+40%] |
| **Qualidade** | Cobertura de Testes E2E | 100% |
| **Qualidade** | Conformidade WCAG | 2.1 AA |

---

## 3. Classificação do Serviço

> **Importante:** Esta classificação atua como gatilho para a **Dynamic Contract Engine** (M4). Selecione **uma** opção:

- [ ] **Frontend do Zero** — UI/UX completa, integrações com APIs de terceiros
- [ ] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend** — Modernização de UI existente
- [ ] **Refatoração Full-stack** — Modernização de sistema completo (backend + frontend)

**Justificativa da Classificação:**
[Explique por que esta classificação foi escolhida e quais as implicações de escopo.]

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Para IA:** Cada requisito será transformado em tarefa via `/speckit.tasks`. O formato BDD (GIVEN/WHEN/THEN) é obrigatório.

### Módulo 1: {{MODULE_1_NAME}}
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como [persona], quero [ação] para [valor] | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta |
| **US-1.2** | Como [persona], quero [ação] para [valor] | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🟡 Média |

### Módulo 2: {{MODULE_2_NAME}}
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como [persona], quero [ação] para [valor] | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta |

### Módulo 3: {{MODULE_3_NAME}}
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como [persona], quero [ação] para [valor] | **GIVEN** [contexto] **WHEN** [ação] **THEN** [resultado] | 🔥 Alta |

---

## 5. Requisitos Não Funcionais (QoS)

### 5.1 Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 500kb (gzipped)

### 5.2 Segurança
- [ ] Autenticação JWT
- [ ] HTTPS obrigatório
- [ ] Sanitização de inputs
- [ ] Proteção contra OWASP Top 10

### 5.3 Acessibilidade
- [ ] WCAG 2.1 AA
- [ ] `prefers-reduced-motion` respeitado
- [ ] Navegação por teclado
- [ ] Contraste de cores adequado

### 5.4 Escalabilidade
- [ ] Arquitetura stateless
- [ ] Cache estratégico (Redis/CDN)
- [ ] Rate limiting configurado

---

## 6. Modelagem de Entidades e Integrações

### 6.1 Entidades de Dados
| Entidade | Campos Principais | Relacionamentos |
|---|---|---|
| {{ENTITY_1}} | [campo1, campo2, ...] | [relacionamentos] |
| {{ENTITY_2}} | [campo1, campo2, ...] | [relacionamentos] |

### 6.2 Integrações com APIs
| Serviço | Tipo | Finalidade |
|---|---|---|
| {{PAYMENT_GATEWAY}} | Pagamentos | Processar transações |
| {{EMAIL_SERVICE}} | Comunicação | Enviar transacionais |
| {{STORAGE_SERVICE}} | Armazenamento | Guardar arquivos |

### 6.3 Sistemas de Terceiros
[Descreva integrações com ERPs, CRMs, ou outros sistemas legados.]

---

## 7. Limites de Escopo e Exclusões

> **Para IA:** Qualquer solicitação que viole estas exclusões deve acionar **Change Request**.

### 7.1 O Que NÃO Está Incluso
1. **{{EXCLUSION_1}}** — [Ex: Criação de conteúdo em texto/imagens]
2. **{{EXCLUSION_2}}** — [Ex: Integração com sistemas legados ou ERPs]
3. **{{EXCLUSION_3}}** — [Ex: Suporte perpétuo pós-entrega]

### 7.2 Controle de Escopo
Todas as funcionalidades devem respeitar exclusivamente as User Stories da Seção 4. Solicitações novas exigem:
- Ordem de mudança assinada
- Orçamento adicional
- Replanejamento via `/speckit.plan`

---

## 8. Aprovação e Assinaturas

**Cliente:** {{CLIENT_NAME}}
**Data:** {{SIGNATURE_DATE}}

**Desenvolvedor:** JOSÉ LUIZ MENDES
**Data:** {{SIGNATURE_DATE}}

---

> **Próximo Passo:** Este documento será processado pela IA para:
> 1. Gerar **Contrato Dinâmico** via `[[Dynamic Contract Engine]]`
> 2. Criar **Planejamento Técnico** via `[[Planning Template]]`
> 3. Inicializar **Spec-Kit** para desenvolvimento
