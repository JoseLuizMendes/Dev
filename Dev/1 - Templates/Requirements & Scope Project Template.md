---
template: "Requirements & Scope"
version: 2.0
status: "Template"
tags:
  - template
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
classificacao: "{{SERVICE_TYPE}}"
data_inicio: "{{START_DATE}}"
data_entrega: "{{END_DATE}}"
valor: "{{PROJECT_VALUE}}"
---

# 📋 Formulário de Escopo e Requisitos: {{PROJECT_NAME}}

> **Nota de Uso:** Documento primário de intake. A IA extrai o frontmatter para gerar automaticamente o Contrato Dinâmico e o Planejamento. Preencha todos os campos entre `{{ }}` ou `[ ]`.
>
> **Papel no fluxo:** após o cliente responder o `Master Project Planning Template`, este template consolida as respostas em formato técnico estruturado — fonte oficial para contrato, planejamento e `speckit.specify`.

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
| **Performance** | LCP | < 2.5s |
| **Performance** | FID | < 100ms |
| **Performance** | CLS | < 0.1 |
| **Negócio** | [Ex: Conversão Landing Page] | [+40%] |
| **Qualidade** | Cobertura de Testes E2E | 100% |
| **Qualidade** | Conformidade WCAG | 2.1 AA |

---

## 3. Classificação do Serviço

> **Gatilho:** esta classificação aciona a **Dynamic Contract Engine** ([[Dynamic Contract Engine]]). Selecione **uma** opção:

- [ ] **Frontend do Zero** — UI/UX completa, integrações com APIs de terceiros
- [ ] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend** — Modernização de UI existente
- [ ] **Refatoração Full-stack** — Modernização de sistema completo

**Justificativa:** [Explique por que esta classificação foi escolhida.]

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Para IA:** cada requisito vira tarefa via `/speckit.tasks`. O TDD se aplica a cada critério — teste escrito antes da implementação.

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

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto
- **Tipo de Plataforma:** {{APP_TYPE}}
- **Front-End:** {{FRONTEND_STACK}}
- **Back-End & BD:** {{BACKEND_STACK}}
- **Infra/Cloud:** {{CLOUD_STACK}}

### 5.2 Dependências Extras
> **Para IA:** gatilho do bootstrap automático. Instalar via `pnpm add` após criar estrutura de pastas. Dependências base da stack (Next.js, Prisma, Zustand, GSAP, Vitest, Playwright, Docker) são instaladas automaticamente — não listar aqui.

```
{{DEPENDENCIES}}
```

*Ex: `stripe @stripe/stripe-js resend @aws-sdk/client-s3`*

### 5.3 Integrações com APIs
| Serviço | Tipo | Finalidade |
|---|---|---|
| {{PAYMENT_GATEWAY}} | Pagamentos | Processar transações |
| {{EMAIL_SERVICE}} | Comunicação | Enviar transacionais |
| {{STORAGE_SERVICE}} | Armazenamento | Guardar arquivos |

### 5.4 Entidades de Dados
| Entidade | Campos Principais | Relacionamentos |
|---|---|---|
| {{ENTITY_1}} | [campo1, campo2] | [relacionamentos] |
| {{ENTITY_2}} | [campo1, campo2] | [relacionamentos] |

### 5.5 Sistemas de Terceiros
[Integrações com ERPs, CRMs ou sistemas legados.]

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [ ] LCP < 2.5s | FID < 100ms | CLS < 0.1
- [ ] Bundle size < 500kb (gzipped)

### 6.2 Segurança
- [ ] Autenticação JWT | HTTPS obrigatório
- [ ] Sanitização de inputs | Proteção OWASP Top 10

### 6.3 Acessibilidade
- [ ] WCAG 2.1 AA | `prefers-reduced-motion` respeitado
- [ ] Navegação por teclado | Contraste adequado

### 6.4 Escalabilidade
- [ ] Arquitetura stateless | Cache estratégico (Redis/CDN)
- [ ] Rate limiting configurado

---

## 7. Limites de Escopo e Exclusões

> **Para IA:** solicitações que violem estas exclusões acionam **Change Request** obrigatório.

1. **{{EXCLUSION_1}}** — [Ex: Criação de conteúdo em texto/imagens]
2. **{{EXCLUSION_2}}** — [Ex: Integração com sistemas legados]
3. **{{EXCLUSION_3}}** — [Ex: Suporte perpétuo pós-entrega]

Solicitações novas exigem: ordem de mudança assinada + orçamento adicional + replanejamento via `/speckit.plan`.

---

## 8. Aprovação e Assinaturas

**Cliente:** {{CLIENT_NAME}} — **Data:** {{SIGNATURE_DATE}}

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** {{SIGNATURE_DATE}}

---

> **Próximo Passo:** este documento é processado pela IA para:
> 1. Gerar **Contrato Dinâmico** via [[Dynamic Contract Engine]]
> 2. Executar **Bootstrap de Dependências** via [[Preferencias Dev]]
> 3. Criar **Planejamento Técnico** via [[Planning Template]]
> 4. Inicializar **Spec-Kit SDD+TDD** para desenvolvimento
