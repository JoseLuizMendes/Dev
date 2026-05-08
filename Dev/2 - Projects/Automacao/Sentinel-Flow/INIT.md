---
título: "INIT"
versão: 1.0
status: "Ativo"
tags:
  - init
  - sentinel
  - bootstrap
  - automacao
---

# INIT — Sentinel Flow

> **Leia este arquivo primeiro.** O agente DEVE ler este arquivo ao iniciar qualquer sessão neste projeto. Ele define o contexto, a stack e o estado atual.

---

## Sequência de Inicialização

```yaml
init_sequence:
  - ler: "INIT.md"           # Contexto do projeto (este arquivo)
  - ler: "CLAUDE.md"         # Diretrizes globais do projeto (raiz do Sentinel)
  - ler: "01-Escopo.md"      # Requisitos + User Stories + BDD
  - ler: "05-Dev-Log.md"     # Estado atual do desenvolvimento
  - resumir: "3 bullets: contexto, estado, próximos passos"
  - aguardar: "instrução do developer"
```

---

## Identificação do Projeto

```yaml
projeto:
  nome: "Sentinel Flow"
  cliente: "Interno / Portfólio"
  nicho: "Automação / DevOps / SaaS"
  tipo: "saas"
  fase_atual: "desenvolvimento"
  repositorio: "f:\1-ZECA\1-Repositorio\Documentos\MeusProjetos\Sentinel"
```

---

## Stack do Projeto

> A stack é definida aqui, por projeto. Consultar [[Preferencias Dev]] para regras inegociáveis de cada tecnologia.

```yaml
stack:
  linguagem: "csharp / typescript"
  backend: "dotnet-8 (ASP.NET Core, Clean Architecture, Minimal APIs)"
  frontend: "vue-3 (Composition API, Vue Flow, Pinia, Tailwind CSS)"
  banco: "postgresql (Schema-per-Tenant)"
  orm: "ef-core"
  testes_backend: "xunit"
  testes_frontend: "vitest + playwright"
  package_manager: "pnpm"
  infra: "docker + docker-compose"
  realtime: "signalr"
  jobs: "hangfire"
  mcps: ["obsidian", "context7"]
```

---

## Contexto do Projeto

### Objetivo
Motor de automação low-code (Automation Hub) orientado a eventos. Permite que usuários definam flows (Triggers → Conditions → Actions) via canvas visual. Deploy unificado: ASP.NET Core serve Vue estático.

### Restrições Conhecidas
- Multi-tenancy obrigatório (Schema-per-Tenant no PostgreSQL)
- Deploy unificado (backend + frontend no mesmo container)
- Silence-Based Triggers como diferencial de produto

### Dependências Externas
- Resend API (e-mail transacional)
- Polly (resiliência HTTP)
- Hangfire (jobs recorrentes e scheduled triggers)
- SignalR (notificação em tempo real)

---

## Estado Atual

> Atualizar a cada sessão. Ver `05-Dev-Log.md` para histórico detalhado.

- **Fase:** Desenvolvimento (Estabilização do Backend)
- **Última tarefa concluída:** Diagnóstico completo do backend (07/05/2026)
- **Próxima tarefa:** Corrigir SaveChangesAsync ausentes nos Team e Webhook handlers
- **Bloqueios:** Nenhum

---

## Referências do Projeto

- `01-Escopo.md` — Requisitos, User Stories, critérios BDD
- `02-Contrato.md` — Contrato dinâmico (projeto interno — placeholder)
- `03-Planejamento.md` — EAP, cronograma, riscos, DoD
- `04-Tarefas.md` — Backlog granular TDD
- `05-Dev-Log.md` — Registro de progresso
- `06-Erros.md` — Erros do projeto (propagados ao global)

## Referências do Vault

- [[Preferencias Dev]] — Stack aprovada e regras inegociáveis
- [[Project Lifecycle Pipeline]] — Fluxo completo do ciclo de vida
- [[Session Protocol]] — Boot e shutdown de sessão
- [[Immunological Error Memory]] — Sistema de erros
