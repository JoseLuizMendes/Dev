---
título: "INIT"
versão: 1.0
status: "Template"
tags:
  - init
  - bootstrap
  - contexto
---

# INIT — Bootstrap de Projeto

> **Leia este arquivo primeiro.** O agente DEVE ler este arquivo ao iniciar qualquer sessão em um projeto. Ele define o contexto, a stack e o estado atual do projeto.

---

## Sequência de Inicialização

```yaml
init_sequence:
  - ler: "INIT.md"           # Contexto do projeto (este arquivo)
  - ler: "CLAUDE.md"         # Diretrizes globais do projeto
  - ler: "01-Escopo.md"      # Requisitos + User Stories + BDD
  - ler: "05-Dev-Log.md"     # Estado atual do desenvolvimento
  - resumir: "3 bullets: contexto, estado, próximos passos"
  - aguardar: "instrução do developer"
```

---

## Identificação do Projeto

```yaml
projeto:
  nome: ""                  # Nome do projeto
  cliente: ""               # Nome do cliente
  nicho: ""                 # Ex: Advocacia, E-commerce, SaaS...
  tipo: ""                  # site-institucional | saas | api | mobile | outro
  fase_atual: ""            # escopo | planejamento | desenvolvimento | auditoria | entrega
```

---

## Stack do Projeto

> A stack é definida aqui, por projeto. Consultar [[Preferencias Dev]] para regras inegociáveis de cada tecnologia.

```yaml
stack:
  linguagem: ""             # typescript | csharp | java | javascript
  backend: ""               # nestjs | dotnet | spring-boot | none
  frontend: ""              # nextjs | react | vue | angular | none
  banco: ""                 # postgresql | mysql | sqlserver | mongodb | none
  orm: ""                   # prisma | ef-core | hibernate | none
  testes: ""                # vitest+playwright | xunit | junit | none
  package_manager: ""       # pnpm | npm | maven | gradle
  infra: ""                 # docker | vercel | azure | aws | none
  mcps: []                  # [context7, obsidian, ...]
```

---

## Contexto do Projeto

### Objetivo
<!-- Descreva em 2-3 frases o que este projeto faz e para quem -->

### Restrições Conhecidas
<!-- Limitações técnicas, de prazo, de orçamento ou de stack -->

### Dependências Externas
<!-- APIs de terceiros, serviços externos, integrações -->

---

## Estado Atual

> Atualizar a cada sessão. Ver `05-Dev-Log.md` para histórico detalhado.

- **Fase:** _preencher_
- **Última tarefa concluída:** _preencher_
- **Próxima tarefa:** _preencher_
- **Bloqueios:** _preencher ou "Nenhum"_

---

## Referências do Projeto

- `01-Escopo.md` — Requisitos, User Stories, critérios BDD
- `02-Contrato.md` — Contrato dinâmico assinado
- `03-Planejamento.md` — EAP, cronograma, riscos
- `04-Tarefas.md` — Backlog granular TDD
- `05-Dev-Log.md` — Registro de progresso
- `06-Erros.md` — Erros do projeto (propagados ao global)

## Referências do Vault

- [[Preferencias Dev]] — Stack aprovada e regras inegociáveis
- [[Project Lifecycle Pipeline]] — Fluxo completo do ciclo de vida
- [[Session Protocol]] — Boot e shutdown de sessão
- [[Immunological Error Memory]] — Sistema de erros
