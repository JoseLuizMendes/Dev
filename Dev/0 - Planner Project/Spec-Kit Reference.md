---
título: "Spec-Kit Reference"
versão: 1.0
status: "Ativo"
tags:
  - reference
  - spec-kit
  - sdd
  - commands
  - fallback
---

# Spec-Kit Reference

> Referência canônica dos comandos `/speckit.*` usados na Fase 4 (Desenvolvimento) do `[[Project Lifecycle Pipeline]]`.
>
> ⚠️ **Se o plugin Spec-Kit não estiver disponível na sessão atual**, use o **fallback manual** descrito abaixo. O output é idêntico — só muda o método.

---

## Tabela rápida

| Comando | Fase | Input | Output (template canon) |
|---|---|---|---|
| `/speckit.specify` | Spec | Descrição alto nível | Seção §4 do `[[01-Escopo]]` (via `[[Requirements & Scope Project Template]]`) |
| `/speckit.plan` | Plan | `[[01-Escopo]]` + `[[Preferencias Dev]]` | `[[03-Planejamento]]` (via `[[Planning Template]]`) |
| `/speckit.tasks` | Tasks | `[[03-Planejamento]]` | `[[04-Tarefas]]` (via `[[Tasks Template]]`) |
| `/speckit.implement` | Implement | ID de tarefa | Código + teste passando |
| `/speckit.analyze` | Audit | Código-fonte | Relatório (via `[[Audit Template]]`) |

---

## `/speckit.specify`

**Função:** Fase 1 do SDD — escrever a especificação completa a partir de descrição alto nível.

- **Input:** Descrição alto nível do dev (problema + visão).
- **Output:** Jornadas de usuário + critérios de sucesso BDD (`GIVEN/WHEN/THEN`).
- **Destino:** seção §4 do `[[01-Escopo]]` (Requisitos Funcionais).

**Fallback manual:**

1. Abrir `[[Requirements & Scope Project Template]]` e copiar como base.
2. Preencher frontmatter + seções 1–4 a partir da conversa com dev/cliente.
3. Para cada User Story, escrever critério BDD literal: `GIVEN [contexto] WHEN [ação] THEN [resultado]`.
4. Salvar em `Dev/2 - Projects/[Nicho]/[Projeto]/01-Escopo.md`.

---

## `/speckit.plan`

**Função:** Fase 2 do SDD — gerar arquitetura técnica.

- **Input:** `[[01-Escopo]]` + `[[Preferencias Dev]]`.
- **Output:** Arquitetura + endpoints + schemas + layout de pastas.
- **Destino:** `[[03-Planejamento]]`.

**Fallback manual:**

1. Abrir `[[Planning Template]]` e copiar como base.
2. Derivar EAP da seção §4 do `[[01-Escopo]]` — cada User Story vira épico/tarefa.
3. Cruzar stack do `[[01-Escopo]]` com `[[Preferencias Dev]]` — sinalizar divergências.
4. **Obrigatório:** consultar `[[4 - Error's Memory/INDEX]]` e preencher seção "Erros Conhecidos" com erros relevantes à stack.
5. Salvar em `Dev/2 - Projects/[Nicho]/[Projeto]/03-Planejamento.md`.

---

## `/speckit.tasks`

**Função:** Fase 3 do SDD — quebrar o plano em tarefas granulares.

- **Input:** `[[03-Planejamento]]` monolítico.
- **Output:** Lista granular `T-X.Y` com BDD por tarefa, `[TEST]` antes de `impl`.
- **Destino:** `[[04-Tarefas]]`.

**Fallback manual:**

1. Abrir `[[Tasks Template]]` e copiar como base.
2. Mapear cada User Story do `[[01-Escopo]]` para 1 ou mais tarefas.
3. **Inegociável:** toda tarefa `impl` é precedida por uma `[TEST]` correspondente.
4. ID sequencial por épico (`T-1.1`, `T-1.2`, ...).
5. Critério BDD copiado literalmente do `[[01-Escopo]]`.
6. Salvar em `Dev/2 - Projects/[Nicho]/[Projeto]/04-Tarefas.md`.

---

## `/speckit.implement`

**Função:** Fase 4 do SDD — implementar uma tarefa específica.

- **Input:** ID de uma tarefa do `[[04-Tarefas]]`.
- **Output:** Código + teste passando.
- **Destino:** repositório de código (não vault).

**Fallback manual:**

Seguir o fluxo TDD do `[[Preferencias Dev]]` (metodologia Akita):

1. Ler spec da tarefa (User Story + critério BDD do `[[01-Escopo]]`).
2. Escrever TESTE que valida o critério → **RED**.
3. Implementar mínimo de código para o teste passar → **GREEN**.
4. Refatorar mantendo o teste verde → **REFACTOR**.
5. Atualizar status da tarefa em `[[04-Tarefas]]` para `done`.
6. Registrar decisões e dependências em `[[05-Dev-Log]]`.
7. Erros encontrados → registrar em `[[06-Erros]]` e propagar conforme `[[Immunological Error Memory]]`.

---

## `/speckit.analyze`

**Função:** Auditoria — cross-validar código contra os 3 agentes norteadores.

- **Input:** código-fonte atual.
- **Output:** Relatório de conformidade com violações + correções propostas.
- **Destino:** Relatório usando `[[Audit Template]]` como base.

**Fallback manual:**

Seguir `[[0.2 - Audit/Diretrizes]]`:

1. Consultar os 3 arquivos norteadores: `[[ai-portfolio-product-strategist]]`, `[[ai-web-designer-agent]]`, `[[ai-portfolio-copy-architect]]`.
2. Cruzar código atual com `[[4 - Error's Memory/INDEX]]` para identificar erros históricos.
3. Preencher `[[Audit Template]]` com diagnóstico + plano de refatoração.
4. Iterar até conformidade total.

---

## Quando usar o fallback

- Plugin Spec-Kit não está instalado na sessão atual
- Plugin está instalado mas falhou em retornar output válido
- Ambiente sem suporte ao plugin (ex: Claude.ai sem extensões)

O fallback produz **exatamente** o mesmo output canônico. Downstream (próximos protocolos) **não distingue** se o artefato veio do comando ou do fallback.

---

## Quality Gate (independente do método)

- [ ] Output gerado usa o template canon listado na coluna "Output (template canon)" da tabela rápida
- [ ] Quality Gate do template canon foi respeitado integralmente
- [ ] Artefato segue o schema esperado pelo próximo protocolo

---

## Referências

- `[[Project Lifecycle Pipeline]]` — Fase 4 (Desenvolvimento via SDD)
- `[[Protocol-SpecKit]]` — protocolo que orquestra Fase 4
- `[[Preferencias Dev]]` — metodologia Akita + stack
- `[[Master Pipeline & Enforcement]]` — matriz canon do vault
- `[[Audit Template]]` — template do relatório de auditoria
