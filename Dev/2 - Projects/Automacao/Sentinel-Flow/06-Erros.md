# 06 — Erros: Sentinel Flow

> Erros do projeto. Quando `recorrencias >= 2`, propagar para `[[4 - Error's Memory/INDEX]]`.

---

## Erros Ativos

### ERR-001: SaveChangesAsync ausente em Team Handlers

| Campo | Valor |
|---|---|
| **Severidade** | 🔴 Crítico |
| **Recorrência** | 2 (RemoveTeamMember + ChangeTeamMemberRole) |
| **Stack** | C# / EF Core / Application Layer |
| **Arquivo(s)** | `RemoveTeamMember.cs`, `ChangeTeamMemberRole.cs` |
| **Causa** | Handlers chamam `repo.Update()` mas não chamam `uow.SaveChangesAsync(ct)` |
| **Impacto** | Mudanças de role e remoção de membros **nunca são persistidas** no banco |
| **Solução** | Injetar `ISystemUnitOfWork` e chamar `SaveChangesAsync` após Update |
| **Propagado?** | [ ] Propagar para [[4 - Error's Memory/INDEX]] quando corrigido |

---

### ERR-002: SaveChangesAsync ausente em Webhook Handlers

| Campo | Valor |
|---|---|
| **Severidade** | 🔴 Crítico |
| **Recorrência** | 3 (Create + Update + Delete) |
| **Stack** | C# / EF Core / Application Layer |
| **Arquivo(s)** | `ManageWebhooks.cs` (CreateWebhookHandler, DeleteWebhookHandler) |
| **Causa** | Mesmo padrão do ERR-001 — `repo.AddAsync`/`repo.Update` sem `uow.SaveChangesAsync` |
| **Impacto** | Webhooks **nunca são persistidos/removidos** do banco |
| **Solução** | Injetar `ITenantUnitOfWork` e salvar após cada operação |
| **Propagado?** | [ ] Propagar para [[4 - Error's Memory/INDEX]] quando corrigido |

---

### ERR-003: Paginação falsa em ListExecutionsQuery

| Campo | Valor |
|---|---|
| **Severidade** | 🟡 Médio |
| **Recorrência** | 1 |
| **Stack** | C# / EF Core / Application Layer |
| **Arquivo(s)** | `ListExecutions.cs` (linha 27-28) |
| **Causa** | `total` calculado como `items.Count + skip` em vez de count real do banco |
| **Impacto** | Frontend não consegue saber quantas páginas existem |
| **Solução** | Adicionar `CountByFlowAsync` ao `IFlowExecutionRepository` |
| **Propagado?** | Não — recorrência < 2 |

---

## Histórico de Erros Resolvidos

_(Vazio)_

---

## Referências

- [[4 - Error's Memory/INDEX]] — Índice global de erros
- [[Immunological Error Memory]] — Regras de propagação
- [[04-Tarefas]] — Tarefas de correção vinculadas
