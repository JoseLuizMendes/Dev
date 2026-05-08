---
template: "Requirements & Scope"
version: 2.0
status: "Ativo"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
cliente: "Interno / Portfólio"
nicho: "Automação / SaaS"
classificacao: "Full-stack do Zero"
data_inicio: "2026-04-01"
data_entrega: "2026-08-01"
valor: "Projeto Interno"
---

# 📋 Formulário de Escopo e Requisitos: Sentinel Flow

> **Nota de Uso:** Documento primário de intake. A IA extrai o frontmatter para gerar automaticamente o Contrato Dinâmico e o Planejamento. Preencha todos os campos entre `{{ }}` ou `[ ]`.
>
> **Papel no fluxo:** após o cliente responder o `Master Project Planning Template`, este template consolida as respostas em formato técnico estruturado — fonte oficial para contrato, planejamento e `speckit.specify`.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Interno / Portfólio |
| **Ponto de Contato (PO)** | José Luiz Mendes |
| **Nicho de Mercado** | Automação / SaaS B2B |
| **Data de Início** | 2026-04-01 |
| **Previsão de Entrega** | 2026-08-01 |
| **Valor do Projeto** | Projeto Interno |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central
Empresas de pequeno e médio porte possuem processos repetitivos que dependem de pessoas para funcionar — alertas manuais, notificações atrasadas, integrações quebradas silenciosamente. Ferramentas como Zapier e Make são reativas: só disparam quando algo acontece. Quando **nada acontece** (pedido parado, integração silenciosa, cliente sumido), essas ferramentas são cegas.

### 2.2 A Visão da Solução
Sentinel Flow é um motor de automação low-code onde o usuário desenha fluxos (Triggers → Conditions → Actions) em um canvas visual. O diferencial: **Silence-Based Triggers** — o sistema também dispara quando algo NÃO acontece. Deploy unificado (API + Frontend no mesmo container), multi-tenancy real (Schema-per-Tenant) e white-label por design.

### 2.3 Público-Alvo
- **Primário:** PMEs com processos repetitivos (e-commerce, clínicas, imobiliárias, SaaS em crescimento)
- **Secundário:** Empresas enterprise que esbarram nos limites do Zapier/Make (sem controle de dados, sem SLA, sem isolamento)
- **Terciário:** Agências e consultorias que querem empacotar a ferramenta white-label

### 2.4 Métricas de Sucesso (KPIs)
| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | Tempo de resposta API (p95) | < 200ms |
| **Performance** | Throughput de triggers/min | > 500 |
| **Negócio** | Flows criados por tenant (média) | > 5 |
| **Qualidade** | Cobertura de Testes (xUnit + Vitest) | > 80% |
| **Qualidade** | Zero bugs críticos de persistência | 0 |

---

## 3. Classificação do Serviço

> **Gatilho:** esta classificação aciona a **Dynamic Contract Engine** ([[Dynamic Contract Engine]]). Selecione **uma** opção:

- [ ] **Frontend do Zero** — UI/UX completa, integrações com APIs de terceiros
- [x] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend** — Modernização de UI existente
- [ ] **Refatoração Full-stack** — Modernização de sistema completo

**Justificativa:** O projeto é construído do zero com backend C# (.NET 8) e frontend Vue.js 3, incluindo infraestrutura Docker.

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Para IA:** cada requisito vira tarefa via `/speckit.tasks`. O TDD se aplica a cada critério — teste escrito antes da implementação.

### Módulo 1: Motor de Automação (Engine)
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como gestor, quero criar um flow visual para automatizar processos | **GIVEN** canvas aberto **WHEN** adiciono nós e arestas e salvo **THEN** flow persiste no banco com status Draft | 🔥 Alta |
| **US-1.2** | Como gestor, quero ativar um flow para que ele comece a processar eventos | **GIVEN** flow com status Draft **WHEN** clico em Ativar **THEN** status muda para Active e triggers ficam escutando | 🔥 Alta |
| **US-1.3** | Como sistema, quero avaliar nós em BFS para que condições e ações sejam executadas na ordem correta | **GIVEN** flow ativo com trigger disparado **WHEN** engine processa **THEN** cada nó é avaliado respeitando arestas true/false | 🔥 Alta |

### Módulo 2: Multi-tenancy
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como admin, quero que cada tenant tenha dados isolados para garantir segurança | **GIVEN** dois tenants A e B **WHEN** tenant A consulta flows **THEN** apenas flows do schema A são retornados | 🔥 Alta |
| **US-2.2** | Como admin, quero provisionar um novo tenant automaticamente | **GIVEN** request de criação de tenant **WHEN** processado **THEN** schema criado + migrations aplicadas | 🔥 Alta |

### Módulo 3: Webhooks & Triggers
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como integrador, quero disparar flows via webhook HTTP para integrar sistemas externos | **GIVEN** flow ativo com trigger webhook **WHEN** POST para `/webhooks/{tenant}/{flow}` **THEN** flow é enfileirado e retorna 202 | 🔥 Alta |
| **US-3.2** | Como gestor, quero agendar triggers recorrentes para automações periódicas | **GIVEN** flow com ScheduleTrigger configurado **WHEN** cron atinge horário **THEN** Hangfire dispara o flow | 🟡 Média |

### Módulo 4: Gestão de Equipe & Segurança
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-4.1** | Como admin, quero gerenciar membros do meu tenant com papéis RBAC | **GIVEN** admin autenticado **WHEN** altera role de membro **THEN** mudança persiste no banco imediatamente | 🔥 Alta |
| **US-4.2** | Como admin, quero que segredos do tenant sejam criptografados | **GIVEN** secret armazenado **WHEN** consultado via API **THEN** é decifrado com AES-256-GCM apenas em runtime | 🔥 Alta |

### Módulo 5: Dashboard & Real-time
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-5.1** | Como gestor, quero acompanhar execuções em tempo real no dashboard | **GIVEN** flow em execução **WHEN** nó é processado **THEN** evento SignalR atualiza status do nó no canvas | 🟡 Média |
| **US-5.2** | Como gestor, quero listar execuções com paginação real | **GIVEN** flow com 100 execuções **WHEN** consulto página 2 **THEN** retorna itens corretos + total real do banco | 🟡 Média |

---

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto
- **Tipo de Plataforma:** SaaS (Automation Hub)
- **Front-End:** Vue.js 3 + Vue Flow + Pinia + Tailwind CSS + Vite
- **Back-End & BD:** ASP.NET Core 8 (Clean Architecture) + PostgreSQL + EF Core
- **Infra/Cloud:** Docker + Docker Compose

### 5.2 Dependências Extras
> **Para IA:** dependências além da stack base.

```
MediatR FluentValidation Polly Hangfire SignalR @microsoft/signalr @vue-flow/core pinia @tanstack/vue-query
```

### 5.3 Integrações com APIs
| Serviço | Tipo | Finalidade |
|---|---|---|
| Resend | Comunicação | Enviar e-mails transacionais via EmailActionHandler |
| Hangfire | Jobs | Scheduled triggers e retry com backoff |
| SignalR | Real-time | Feedback de execuções no canvas |

### 5.4 Entidades de Dados
| Entidade | Campos Principais | Relacionamentos |
|---|---|---|
| Flow | Id, TenantId, Name, Status, Definition (JSONB) | 1:N FlowExecution |
| FlowExecution | Id, FlowId, Status, Context (JSONB), Trace (JSONB) | N:1 Flow |
| Tenant | Id, Name, Slug, Plan | 1:N User |
| User | Id, TenantId, Email, PasswordHash, Role | N:1 Tenant |
| Webhook | Id, TenantId, FlowId, Url, Secret | N:1 Flow |
| TenantSecret | Id, TenantId, Key, EncryptedValue | N:1 Tenant |

### 5.5 Sistemas de Terceiros
Nenhum sistema legado. Integrações via webhook outbound genérico.

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [x] API p95 < 200ms
- [x] Throughput > 500 triggers/min

### 6.2 Segurança
- [x] JWT (access 15min + refresh 14d) + PBKDF2 (210k iter)
- [x] AES-256-GCM para segredos de tenant
- [x] SSRF Guard em HttpRequestActionHandler
- [x] CORS, Rate Limiter, Security Headers
- [ ] HMAC verification no webhook inbound (pendente)

### 6.3 Acessibilidade
- [ ] WCAG 2.1 AA no dashboard (a implementar no frontend)
- [ ] Navegação por teclado no canvas Vue Flow

### 6.4 Escalabilidade
- [x] Arquitetura stateless (API layer)
- [x] SignalR Backplane via Redis (preparado)
- [x] Hangfire com PostgreSQL storage compartilhado
- [ ] PgBouncer para connection pooling (produção)

---

## 7. Limites de Escopo e Exclusões

> **Para IA:** solicitações que violem estas exclusões acionam **Change Request** obrigatório.

1. **Mobile App** — Não há app mobile nesta fase. Apenas dashboard web responsivo.
2. **Template Marketplace** — Exportação de flows como templates é Fase 3+.
3. **Anomaly Detection / ML** — Não há detecção de anomalias com ML nesta fase.

Solicitações novas exigem: ordem de mudança assinada + orçamento adicional + replanejamento via `/speckit.plan`.

---

## 8. Aprovação e Assinaturas

**Cliente:** Projeto Interno — **Data:** 2026-05-08

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** 2026-05-08

---

> **Próximo Passo:** este documento é processado pela IA para:
> 1. Gerar **Contrato Dinâmico** via [[Dynamic Contract Engine]]
> 2. Executar **Bootstrap de Dependências** via [[Preferencias Dev]]
> 3. Criar **Planejamento Técnico** via [[Planning Template]]
> 4. Inicializar **Spec-Kit SDD+TDD** para desenvolvimento
