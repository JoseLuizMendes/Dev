---
módulo: M3
título: "Project Lifecycle Pipeline"
versão: 1.0
status: "Ativo"
tags:
  - planner-mode
  - lifecycle
  - sdd
  - spec-kit
  - phase-one
---

# M3 — Project Lifecycle Pipeline

Este módulo define o **fluxo completo** de um projeto, do primeiro contato com o cliente até a entrega final. Ele conecta o Formulário de Escopo, o Planejamento, o Contrato Dinâmico e o pipeline SDD em uma sequência coesa e rastreável.

---

## Visão Geral do Fluxo

```
📋 Escopo → 📐 Planejamento → 📝 Contrato → 🔧 Dev (SDD) → 🔍 Auditoria → ✅ Entrega
     ↑                                              ↓              ↑
     └──────────────────── iteração ─────────────────┘──────────────┘
```

| Fase | Input | Output | Responsável |
|---|---|---|---|
| **1. Escopo** | Briefing do cliente | `01-Escopo.md` | Dev + Cliente |
| **2. Planejamento** | Escopo + Preferences | `03-Planejamento.md` | IA + Dev (revisão) |
| **3. Contrato** | Escopo + Classificação | `02-Contrato.md` | IA + Dev (revisão) |
| **4. Desenvolvimento** | Plano + Tarefas | Código-fonte | IA + Dev |
| **5. Auditoria** | Código-fonte | Relatório de conformidade | IA (3 Arquivos) |
| **6. Entrega** | Software auditado | Handoff ao cliente | Dev + Cliente |

---

## Fase 1 — Intake (Escopo e Requisitos)

O projeto nasce no preenchimento do Formulário de Escopo e Requisitos, baseado no template `[[Requirements & Scope Project Template]]`.

### Requisitos do Documento

- **Frontmatter YAML obrigatório** com metadados extraíveis (cliente, datas, nicho, status)
- **Seções semânticas** com marcação clara para interpretação da IA
- **Critérios de aceite** no formato GIVEN/WHEN/THEN para cada requisito funcional
- **Classificação do Serviço** preenchida (gatilho para o contrato dinâmico)

### Extração de Variáveis pela IA

A IA deve extrair do frontmatter as seguintes variáveis para uso automático:
```yaml
cliente: "Carlos Silva"
nicho: "Advocacia"
classificação: "Frontend do Zero"    # gatilho para M4
data_inicio: 2026-04-01
data_entrega: 2026-05-15
```

---

## Fase 2 — Planejamento

A IA projeta o escopo e gera automaticamente o plano de execução usando o `[[Planning Template]]`.

### Estrutura do Documento de Planejamento

| Seção | Descrição |
|---|---|
| **Resumo Executivo** | Síntese gerada pelo LLM: KPIs de sucesso, resultados esperados, prazos |
| **Estrutura Analítica do Projeto (EAP)** | Requisitos → épicos → sprints → tarefas granulares + dependências |
| **Cronograma e Marcos** | Fases lógicas com estimativas de complexidade relativa |
| **Mapeamento da Stack** | Confirmação da pilha do `[[Preferencias Dev]]` mapeada para tarefas |
| **Mitigação de Riscos** | Especialmente crítico em projetos de Refatoração (tech debt, strangler fig) |
| **Estratégia de Comunicação** | Protocolos para revisão, UAT e ciclos de feedback |

### ⚠️ Consulta Obrigatória à Memória Imunológica

**Antes** de finalizar o planejamento, a IA **DEVE** consultar `[[INDEX]]` em `4 - Error's Memory/` e cruzar a stack do projeto com os erros conhecidos. Se houver erros relevantes, inserir uma seção "⚠️ Erros Conhecidos" no plano.

> Detalhes em [[Immunological Error Memory]]

---

## Fase 3 — Contrato Dinâmico

A IA lê a variável `classificação` do Escopo e injeta/remove cláusulas no `[[Contract Template]]`.

> Detalhamento completo em [[Dynamic Contract Engine]]

---

## Fase 4 — Desenvolvimento via SDD (Spec-Driven Development)

O desenvolvimento segue o pipeline rigoroso do Spec-Kit em 4 fases. **Nenhum código é gerado antes da aprovação do planejamento.**

### Pipeline SDD

| # | Fase | Comando | Input | Output |
|---|---|---|---|---|
| 1 | **Especificar** | `/speckit.specify` | Descrição alto nível do dev | Jornadas de usuário + critérios de sucesso |
| 2 | **Planejar** | `/speckit.plan` | Especificação + Dev Preferences | Arquitetura + endpoints + schemas + layout de pastas |
| 3 | **Gerar Tarefas** | `/speckit.tasks` | Plano técnico monolítico | Lista granular → `04-Tarefas.md` |
| 4 | **Implementar** | `/speckit.implement` | Tarefa individual | Código + testes unitários |

### Regras de Implementação

- O agente implementa **uma tarefa por vez**, seguindo o plano cegamente
- Cada tarefa concluída atualiza `04-Tarefas.md` com status
- Erros encontrados são registrados em `06-Erros.md` e propagados para `4 - Error's Memory/`
- O agente **nunca** introduz dependências que não estejam no `[[Preferencias Dev]]`

---

## Fase 5 — Auditoria (Metodologia dos 3 Arquivos)

Após a implementação (ou durante, iterativamente), o código é auditado contra os 3 documentos norteadores:

| Documento                           | Função na Auditoria                           |
| ----------------------------------- | --------------------------------------------- |
| [[ai-portfolio-product-strategist]] | Valida posicionamento estratégico e narrativa |
| [[ai-web-designer-agent]]           | Valida design, UX, animações e responsividade |
| [[ai-portfolio-copy-architect]]     | Valida copy, microtextos e comunicação        |

### Fluxo de Auditoria

1. **Input:** Código-fonte atual (nunca screenshots)
2. **Análise:** IA cruza o código contra as regras dos 3 arquivos via `/speckit.analyze`
3. **Output:** Relatório de conformidade com violações e correções propostas
4. **Iteração:** Correções são aplicadas e re-auditadas até conformidade total

---

## Fase 6 — Entrega (UAT + Handoff)

| Etapa | Ação |
|---|---|
| **Link temporário** | Deploy em ambiente de homologação para revisão do cliente |
| **UAT** | Cliente testa funcionalidades contra critérios de aceite |
| **Feedback loop** | Ajustes baseados no feedback documentados em `05-Dev-Log.md` |
| **Handoff** | Transferência de credenciais, código e documentação |
| **Encerramento** | Atualização final do MEMORY.md e fechamento do projeto |

---

## Mudanças de Escopo em Andamento

Se os requisitos mudam durante o desenvolvimento:

1. **Atualizar** `01-Escopo.md` com os novos requisitos
2. **Replanificar** via `/speckit.plan` no Obsidian **antes** de alterar código
3. **Emitir Ordem de Mudança** conforme contrato (cláusula de Controle de Escopo)
4. **Atualizar** `02-Contrato.md` se necessário
5. **Só então** alterar o código TypeScript

---

## Referências Internas

- [[Cognitive Vault Architecture]] — Onde cada artefato vive
- [[Dynamic Contract Engine]] — Geração dinâmica do contrato
- [[Preferencias Dev]] — Stack e regras completas
- [[Immunological Error Memory]] — Consulta pré-planejamento
- [[Requirements & Scope Project Template]] — Template do escopo
- [[Planning Template]] — Template do planejamento
- [[Contract Template]] — Template base do contrato
