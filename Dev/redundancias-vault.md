# Mapa de Redundâncias — Vault Dev

> Gerado em: 2026-05-08 | **Atualizado em: 2026-05-08** | Análise de sobreposição de conteúdo entre todos os arquivos do vault.
> **Status:** Redundâncias críticas corrigidas — ver Resumo de Ações.

---

## Grau de Risco

| Símbolo | Significado |
|---|---|
| 🔴 | Redundância crítica — conteúdo duplicado literal |
| 🟡 | Sobreposição parcial — mesmo tema com ângulos diferentes |
| 🟢 | Redundância saudável — referência/resumo intencional |

---

## 1. 🔴 Estrutura de Pastas do Vault — 4 Arquivos Dizem a Mesma Coisa

O diagrama de pastas do vault (`Dev/`) aparece **completo ou parcialmente** em:

| Arquivo | Trecho redundante |
|---|---|
| `Cognitive Vault Architecture.md` | Árvore completa (fonte da verdade) |
| `INDEX.md` | Árvore quase idêntica |
| `CLAUDE.md` *(criado hoje)* | Árvore resumida |
| `TOON-PROMPT.md` | Estrutura de arquivos de contexto por projeto |
| `Client Onboarding Protocol.md` | Estrutura `2 - Projects/[Nicho]/[Projeto]/` |
| `Protocol-Bootstrap.md` | Mesma estrutura `2 - Projects/` |

**Recomendação:** Manter a árvore **apenas** em `Cognitive Vault Architecture.md`. Os demais referenciam via `[[Cognitive Vault Architecture]]` ou descrevem apenas o que é relevante ao seu escopo.

---

## 2. 🔴 Boot Sequence — 3 Definições Conflitantes

A sequência de inicialização do agente está definida em **3 lugares diferentes com conteúdo diferente**:

### Session Protocol.md (6 passos)
```
1. Ler MEMORY.md
2. Ler Preferencias Dev
3. Ler Error Memory Index
4. Ler Dev-Log do projeto atual
5. Resumir estado atual
6. Aguardar instrução
```

### INIT.md *(criado hoje)* (5 passos)
```
1. Ler INIT.md
2. Ler CLAUDE.md
3. Ler 01-Escopo.md
4. Ler 05-Dev-Log.md
5. Resumir + aguardar instrução
```

### TOON-PROMPT.md (sequência YAML)
```
- ler: INIT.md
- ler: claude.md
- ler: SPEC.md
- ler: 05-Dev-Log.md
- resumir: 3 bullets
- aguardar instrução
```

> [!WARNING]
> São 3 sequências de boot diferentes. O agente pode se comportar de forma inconsistente dependendo de qual arquivo leu primeiro. O `MEMORY.md` já documenta este conflito como problema em aberto.

**Resolução aplicada (2026-05-08):**
- `INIT.md` **removido** da raiz do vault — ele só existe dentro de cada projeto
- `TOON-PROMPT.md` agora referencia `[[Session Protocol]]` como fonte canônica do boot
- `CLAUDE.md` atualizado para indicar que `INIT.md` é gerado por projeto

**Fonte canônica:** [[Session Protocol]] — é o único lugar onde a sequência de boot é definida.

---

## 3. 🔴 Agentes de Auditoria — Listados em 4 Lugares

Os 3 agentes de auditoria (`product-strategist`, `web-designer`, `copy-architect`) são listados em:

| Arquivo | Contexto |
|---|---|
| `Preferencias Dev.md` → "Documentos Norteadores" | Tabela com 3 agentes |
| `Project Lifecycle Pipeline.md` → Fase 5 | Tabela com 3 agentes |
| `0.2 - Audit/Diretrizes.md` | Lista com 3 agentes (fonte da verdade) |
| `TOON-PROMPT.md` → Seção Auditoria | Tabela com 3 agentes |

**Recomendação:** A fonte da verdade é `0.2 - Audit/Diretrizes.md`. Os outros podem manter uma referência curta + `[[Diretrizes]]`.

---

## 4. 🔴 Pipeline SDD / Spec-Kit — Descrito em 3 Lugares

| Arquivo | Conteúdo |
|---|---|
| `Project Lifecycle Pipeline.md` → Fase 4 | Pipeline SDD completo com tabela de 4 fases |
| `Protocol-SpecKit.md` | Passos do Spec-Kit (mesma lógica) |
| `TOON-PROMPT.md` → Spec-Kit + Fluxo Macro | Mesmo pipeline, terceira vez |

**Resolução aplicada (2026-05-08):**
- `TOON-PROMPT.md` — "Fluxo Macro" simplificado para delegar a `[[Project Lifecycle Pipeline]]`
- Spec-Kit e Auditoria removidos do TOON-PROMPT (só existem nos arquivos canônicos)

**Fonte canônica:** [[Project Lifecycle Pipeline]] + [[Protocol-SpecKit]] + [[0.2 - Audit/Diretrizes]]

---

## 5. 🟡 Regras Inegociáveis / Stack — Sobreposição Parcial

| Arquivo | O que diz sobre stack/regras |
|---|---|
| `Preferencias Dev.md` | Fonte canônica completa |
| `TOON-PROMPT.md` → Meta Stack | Tabela resumida da stack principal |
| `CLAUDE.md` *(criado hoje)* | Menção rápida às stacks aprovadas |
| `0.2 - Audit/Diretrizes.md` | Menciona TypeScript, pnpm como checklist |
| `Protocol-SpecKit.md` | "Cruzar com [[Preferencias Dev]]" |

**Avaliação:** A maioria delega a `[[Preferencias Dev]]` — é aceitável. A sobreposição em `Diretrizes.md` é leve (checklist, não redefinição).

---

## 6. 🟡 Memória em 3 Camadas — Descrita em 2 Lugares

| Arquivo | Conteúdo |
|---|---|
| `Session Protocol.md` → "As 3 Camadas" | Descrição completa e detalhada (fonte da verdade) |
| `Cognitive Vault Architecture.md` → "Camadas de Memória" | Tabela resumida + `ver [[Session Protocol]]` |
| `TOON-PROMPT.md` → "Arquitetura de Memória" | Descrição narrativa duplicada |

**Resolução aplicada (2026-05-08):**
- `TOON-PROMPT.md` — "Arquitetura de Memória" substituída por tabela resumida + `[[Session Protocol]]`

**Fonte canônica:** [[Session Protocol]] + [[Cognitive Vault Architecture]] (resumo)

---

## 7. 🟢 Referências Saudáveis (Não são Redundâncias)

Estes casos são repetições **intencionais e corretas** — não precisam ser removidas:

- Seções de `## Referências Internas` no final de cada arquivo (navegação por wikilinks)
- `[[Preferencias Dev]]` citado em múltiplos arquivos (delegação correta)
- `[[Immunological Error Memory]]` citado em múltiplos arquivos (delegação correta)
- Quality Gates em `Protocol-SpecKit.md` e `Protocol-Bootstrap.md` (escopos diferentes)

---

## Resumo das Ações Recomendadas

| Prioridade | Ação | Arquivos Afetados | Status |
|---|---|---|---|
| 🔴 Alta | Unificar boot sequence em `Session Protocol.md` | `INIT.md` (removido), `TOON-PROMPT.md` | ✅ Concluído |
| 🔴 Alta | Remover `INIT.md` da raiz do vault | `Dev/INIT.md` | ✅ Concluído |
| 🔴 Alta | Simplificar Fluxo Macro e Auditoria | `TOON-PROMPT.md` | ✅ Concluído |
| 🔴 Alta | Simplificar Arquitetura de Memória | `TOON-PROMPT.md` | ✅ Concluído |
| 🔴 Alta | Remover árvore de pastas duplicada | `CLAUDE.md` | ✅ Concluído |
| 🟡 Média | Reduzir duplicação da lista de agentes de auditoria | `Preferencias Dev.md`, `TOON-PROMPT.md` | ⏳ Pendente |
| 🟢 Baixa | Árvore de pastas em `INDEX.md` | `INDEX.md` | ⏳ Pendente (aceitável — é de navegação) |

---

> [!NOTE]
> `TOON-PROMPT.md` é o arquivo com mais redundâncias porque foi criado como prompt standalone que precisa ser auto-suficiente. Se ele for lido como **prompt de sistema** (contexto do agente externo), a redundância é aceitável. Se o vault funcionar via MCP/Obsidian, ele pode ser simplificado para apenas referenciar os arquivos canônicos.
