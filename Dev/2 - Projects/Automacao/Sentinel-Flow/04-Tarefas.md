# 04 — Tarefas: Sentinel Flow

> **Fonte:** Derivado do `[[01-Escopo]]` e `[[03-Planejamento]]` via `/speckit.tasks`.
> Cada tarefa referencia uma User Story. Nenhuma tarefa é marcada `completed` sem testes passando.

---

## Épico 1: Estabilização do Backend

| ID | Tarefa | US | TDD | Status |
|---|---|---|---|---|
| T-1.1 | Injetar `ISystemUnitOfWork` em `RemoveTeamMemberHandler` e chamar `SaveChangesAsync(ct)` | US-4.1 | xUnit: verificar que User.IsActive == false persiste após handler | pending |
| T-1.2 | Injetar `ISystemUnitOfWork` em `ChangeTeamMemberRoleHandler` e chamar `SaveChangesAsync(ct)` | US-4.1 | xUnit: verificar que User.Role muda e persiste | pending |
| T-1.3 | Injetar `ITenantUnitOfWork` em `CreateWebhookHandler` e chamar `SaveChangesAsync(ct)` | US-3.1 | xUnit: verificar que webhook é persistido no schema do tenant | pending |
| T-1.4 | Injetar `ITenantUnitOfWork` em `DeleteWebhookHandler` e chamar `SaveChangesAsync(ct)` | US-3.1 | xUnit: verificar que webhook é removido do banco | pending |
| T-1.5 | Remover parâmetro `IDateTimeProvider clock` não utilizado em Team handlers | — | Build sem warnings | pending |
| T-1.6 | Implementar `CountByFlowAsync` em `IFlowExecutionRepository` | US-5.2 | xUnit: total retornado == count real do banco | pending |
| T-1.7 | Usar `CountByFlowAsync` em `ListExecutionsQuery` para paginação real | US-5.2 | xUnit: PagedResult.Total correto para N registros | pending |
| T-1.8 | Remover `Class1.cs` em Domain, Application e Infrastructure | — | Build limpo | pending |

---

## Épico 2: Segurança & Resiliência

| ID | Tarefa | US | TDD | Status |
|---|---|---|---|---|
| T-2.1 | Criar `IWebhookVerifier` interface no Domain | US-3.1 | — | pending |
| T-2.2 | Implementar `HmacWebhookVerifier` no Infrastructure | US-3.1 | xUnit: HMAC válido retorna true, inválido retorna false, timing-safe | pending |
| T-2.3 | Integrar `IWebhookVerifier` no `WebhookEndpoints.cs` | US-3.1 | Integração: POST sem assinatura retorna 401 | pending |
| T-2.4 | Refatorar `HangfireFlowScheduleSync.RemoveAll` para usar índice de jobIds | US-1.2 | xUnit: jobs com UUID são removidos corretamente | pending |
| T-2.5 | Investigar e resolver duplicidade `FlowTriggerService.RecordTrigger` vs Worker `FlowExecution.Start` | US-1.3 | xUnit: um trigger gera exatamente uma FlowExecution | pending |

---

## Épico 3: Frontend — Dashboard Core

| ID | Tarefa | US | TDD | Status |
|---|---|---|---|---|
| T-3.1 | Integrar listagem de flows com API (GET /api/v1/flows) | US-1.1 | Vitest: store carrega flows corretamente | pending |
| T-3.2 | Implementar CRUD de flows (Create, Update, Delete) | US-1.1 | Vitest: operações refletem no store + Playwright: fluxo completo | pending |
| T-3.3 | Criar nós customizados para Vue Flow (TriggerNode, ConditionNode, ActionNode) | US-1.1 | Vitest: nó renderiza com dados corretos | pending |
| T-3.4 | Implementar serialização canvas → API (useFlowSerializer) | US-1.1 | Vitest: output JSON segue FlowDefinitionDto | pending |
| T-3.5 | Integrar execução em tempo real via SignalR (useFlowExecution composable) | US-5.1 | Vitest: nodeStates atualiza ao receber evento | pending |
| T-3.6 | Implementar paginação real de execuções no frontend | US-5.2 | Playwright: navegação entre páginas mostra dados corretos | pending |

---

## Épico 4: Gestão de Equipe & Webhooks

| ID | Tarefa | US | TDD | Status |
|---|---|---|---|---|
| T-4.1 | Conectar frontend de membros do time à API corrigida | US-4.1 | Playwright: alterar role de membro reflete na tabela | pending |
| T-4.2 | Integrar CRUD de Webhooks no frontend | US-3.1 | Playwright: criar webhook mostra na listagem | pending |

---

## Referências

- [[01-Escopo]] — User Stories e critérios BDD
- [[03-Planejamento]] — EAP e cronograma
- [[06-Erros]] — Erros encontrados durante implementação
- [[Preferencias Dev]] — Regras TDD e stack
