---
template: "Planning"
version: 1.1
status: "Ativo"
tags:
  - planejamento
  - sdd
  - tdd
  - spec-driven
cliente: "Interno / Portfólio"
nicho: "Automação / SaaS"
classificacao: "Full-stack do Zero"
data_inicio: "2026-04-01"
data_entrega: "2026-08-01"
---

# 📐 Plano de Execução Técnico: Sentinel Flow

> **Fonte:** Gerado a partir do `[[01-Escopo]]` via `/speckit.plan`. Nenhum código é gerado antes da aprovação deste documento.

---

## 1. Resumo Executivo

- **Objetivo:** Construir um motor de automação low-code (Automation Hub) com canvas visual, multi-tenancy real e Silence-Based Triggers como diferencial competitivo.
- **Resultado esperado:** API estável + dashboard Vue.js funcional com CRUD de flows, execução em tempo real via SignalR, gestão de tenants e RBAC completo.
- **Prazo total:** 2026-04-01 → 2026-08-01
- **KPIs de sucesso:** API p95 < 200ms | Throughput > 500 triggers/min | Cobertura testes > 80% | Zero bugs críticos de persistência

---

## 2. Estrutura Analítica do Projeto (EAP)

### Épico 1: Estabilização do Backend
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-1.1 | Fix SaveChangesAsync em Team handlers (RemoveTeamMember, ChangeRole) | — | 1h | pending |
| T-1.2 | Fix SaveChangesAsync em Webhook handlers (Create, Update, Delete) | — | 1h | pending |
| T-1.3 | Remover warnings (parâmetro `clock` não utilizado) | T-1.1 | 15min | pending |
| T-1.4 | Implementar paginação real em ListExecutionsQuery (CountByFlowAsync) | — | 2h | pending |
| T-1.5 | Remover arquivos Class1.cs placeholder | — | 5min | pending |

### Épico 2: Segurança & Resiliência
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-2.1 | Implementar HMAC verification no webhook inbound (IWebhookVerifier) | T-1.2 | 4h | pending |
| T-2.2 | Refatorar HangfireFlowScheduleSync.RemoveAll (indexar jobIds) | — | 6h | pending |
| T-2.3 | Investigar duplicidade FlowTriggerService.RecordTrigger vs Worker | T-1.1 | 3h | pending |

### Épico 3: Frontend — Dashboard Core
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-3.1 | Integrar listagem de flows com API (CRUD completo) | T-1.2 | 4h | pending |
| T-3.2 | Implementar canvas Vue Flow (TriggerNode, ConditionNode, ActionNode) | T-3.1 | 12h | pending |
| T-3.3 | Integrar execução em tempo real via SignalR | T-3.2 | 6h | pending |
| T-3.4 | Dashboard de estatísticas (Sucesso/Falha/Latência) | T-3.3 | 8h | pending |

### Épico 4: Gestão de Equipe & Webhooks
| ID | Tarefa | Dependências | Estimativa | Status |
|---|---|---|---|---|
| T-4.1 | Conectar frontend de membros do time à API corrigida | T-1.1 | 3h | pending |
| T-4.2 | Integrar CRUD de Webhooks no frontend | T-1.2, T-2.1 | 4h | pending |

---

## 3. Cronograma e Marcos

| Fase | Descrição | Prazo | Status |
|---|---|---|---|
| **1. Estabilização** | Fix de persistência, cleanup, paginação real | 2026-05-15 | in-progress |
| **2. Segurança** | HMAC, Hangfire sync, investigação de duplicidade | 2026-05-30 | pending |
| **3. Frontend Core** | Canvas Vue Flow, CRUD de flows, SignalR | 2026-06-30 | pending |
| **4. Dashboard & Gestão** | Estatísticas, equipe, webhooks | 2026-07-15 | pending |
| **5. QA & Go-Live** | Testes E2E, auditoria, deploy | 2026-08-01 | pending |

---

## 4. Mapeamento da Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Frontend | Vue.js 3 + Vue Flow + Tailwind CSS | Composition API, deploy unificado c/ .NET. Conforme [[Preferencias Dev]] |
| Backend | ASP.NET Core 8 (Minimal APIs, Clean Architecture) | Conforme [[Preferencias Dev]] — C# (.NET) |
| Banco de Dados | PostgreSQL (Schema-per-Tenant, JSONB) | Isolamento real + flexibilidade de FlowDefinition |
| ORM | Entity Framework Core | Conforme [[Preferencias Dev]] |
| Infra | Docker + Docker Compose | Container único (API + Vue) |
| Real-time | SignalR | Feedback de execuções no canvas |
| Jobs | Hangfire | Scheduled triggers + retry com backoff |
| Testes Backend | xUnit + Fluent Assertions | Conforme [[Preferencias Dev]] |
| Testes Frontend | Vitest + Playwright | TDD obrigatório. Conforme [[Preferencias Dev]] |

---

## 5. ⚠️ Erros Conhecidos (Memória Imunológica)

> Consultado em `[[4 - Error's Memory/INDEX]]` antes de finalizar este plano.

| ERR-ID | Título | Stack Afetada | Mitigação Aplicada |
|---|---|---|---|
| ERR-001 | SaveChangesAsync ausente em Application Handlers | C# / EF Core | Injetar IUnitOfWork em todos os handlers que modificam estado |
| ERR-002 | Paginação falsa (count calculado no client) | C# / EF Core | Implementar CountByFlowAsync no repositório |

---

## 6. Mitigação de Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Volume alto de webhooks sobrecarregar o DB sem broker | Média | Alto | Channel<T> com bounded capacity + migrar para RabbitMQ/MassTransit na Fase 3 |
| Migrations de tenant falharem parcialmente | Baixa | Alto | DatabaseInitializer idempotente + re-provisioning automático |
| Duplicidade de FlowExecution (RecordTrigger vs Worker) | Média | Médio | Investigar e resolver em T-2.3 antes de ir para produção |
| Vue Flow com performance ruim em flows grandes (100+ nós) | Baixa | Médio | Virtualização de nós + lazy loading de edges |

---

## 7. Estratégia de Comunicação e UAT

- **Revisões:** A cada épico concluído, registrar em `[[05-Dev-Log]]`
- **Link de homologação:** Deploy local via `docker-compose up`
- **Critérios de UAT:** Todas as User Stories do `[[01-Escopo]]` com testes passando
- **Feedback:** Documentado em `[[05-Dev-Log]]`

---

## 8. Definição de Pronto (DoD)

- [ ] Todas as User Stories implementadas com testes passando (TDD)
- [ ] Testes unitários (xUnit) cobrindo lógica de handlers e engine
- [ ] Testes E2E (Playwright) cobrindo fluxos críticos do dashboard
- [ ] Performance: API p95 < 200ms
- [ ] Zero bugs críticos de persistência (SaveChangesAsync)
- [ ] HMAC verification ativo nos webhooks inbound
- [ ] Documentação completa entregue

---

## Referências

- [[01-Escopo]] — Fonte dos requisitos
- [[02-Contrato]] — Contrato do projeto
- [[04-Tarefas]] — Lista granular de tarefas
- [[Preferencias Dev]] — Stack, metodologia e regras de qualidade
- [[4 - Error's Memory/INDEX]] — Memória imunológica consultada
