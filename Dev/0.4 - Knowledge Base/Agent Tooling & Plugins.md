---
template: "Knowledge Base Doc"
version: 1.0
fonte: "Instalação local em 2026-07-09 (Claude Code / uv / npm)"
data_incorporacao: 2026-07-09
tags:
  - knowledge-base
  - tooling
  - plugins
  - claude-code
  - agentes
ler_quando: "Para saber quais ferramentas/plugins de agente estão instalados na máquina, quando usá-los e como ativar/desativar"
---

# Agent Tooling & Plugins — instalados

> Três ferramentas instaladas a pedido do dev em 2026-07-09. **Importante:** skills/plugins/proxies do
> Claude Code carregam **no início da sessão** — nada entra em vigor na sessão em que foi instalado.
> Reinicie o `claude` para ativar. Nenhuma altera a sessão corrente.

---

## 1. ecc — `ecc@ecc` (plugin Claude Code) ✅ instalado + habilitado

- **O que é:** operador "harness-native" — **67 agents, 372 skills** (278 + shims), 7 hooks, rules, workflows.
  Repo: `github.com/affaan-m/ECC` (MIT). Site: ecc.tools.
- **Instalação feita:** `claude plugin marketplace add affaan-m/ECC` + `claude plugin install ecc@ecc` (scope user). Status: **enabled**.
- **Ativação:** reiniciar sessão do Claude Code.
- ⚠️ **CUSTO (ler antes de manter):** adiciona **~23.8k tokens always-on em TODA sessão** + hooks
  (`SessionStart`, `PreToolUse`, `PostToolUse`, `PreCompact`, `Stop`…) que rodam sempre. É pesado e pode
  interagir com as regras constitucionais do [[CLAUDE]] e com o Superpowers. Avalie manter vs. usar sob demanda.
- **Inspecionar / gerenciar:**
  ```bash
  claude plugin details ecc      # inventário + custo projetado por componente
  claude plugin disable ecc@ecc  # desliga sem desinstalar (recomendado se o custo pesar)
  claude plugin enable ecc@ecc
  claude plugin uninstall ecc@ecc
  ```
- **Quando usar:** workflows de engenharia multi-agente (TDD, code-review, security-scan, orquestração).
  Muitas skills do ecc **sobrepõem** o que o vault já tem — em divergência de método, **vence o canon do
  vault** ([[Master Pipeline & Enforcement]] + [[Preferencias Dev]]); o ecc é ferramenta, não fonte da verdade.

## 2. graphify — `graphifyy` (skill `/graphify` + CLI + MCP) ✅ instalado

- **O que é:** mapeia o projeto inteiro (código, docs, PDF, imagem, vídeo) num **knowledge graph** que se
  **consulta em vez de dar grep**. Código via tree-sitter AST (determinístico, local, sem LLM). Não é vetor.
  Repo: `github.com/Graphify-Labs/graphify` · PyPI `graphifyy`.
- **Instalação feita:** `uv tool install graphifyy` (CLI `graphify` 0.9.11 + `graphify-mcp`) + `graphify install --platform claude`.
  - Skill em `~/.claude/skills/graphify/SKILL.md`; criou `~/.claude/CLAUDE.md` (3 linhas, global, só o gatilho `/graphify`).
- **Ativação:** reiniciar sessão → comando **`/graphify .`** disponível. Gera `graphify-out/` (graph.html, GRAPH_REPORT.md, graph.json).
- **MCP opcional:** binário `graphify-mcp` disponível se quiser expor como MCP server.
- **Quando usar:** onboarding em codebase novo, entender dependências/relações, "onde isso é usado", em vez de varrer arquivos.

## 3. pxpipe — `pxpipe-proxy` (proxy de tokens) ✅ instalado (global) · ⚠️ opt-in

- **O que é:** proxy local que corta tokens de **input** do Claude Code renderizando contexto volumoso
  (system prompt, tool docs, histórico antigo) como PNGs densos. Repo: `github.com/teamchong/pxpipe` (MIT).
- **Instalação feita:** `npm install -g pxpipe-proxy` (binário `pxpipe` no PATH).
- **Ativação (NÃO automática — de propósito):**
  ```bash
  npx pxpipe-proxy                                   # proxy em 127.0.0.1:47821 (dashboard na raiz)
  ANTHROPIC_BASE_URL=http://127.0.0.1:47821 claude   # apontar o Claude Code pro proxy
  ```
- 🚫 **CAVEAT CRÍTICO (por isso não foi ligado por padrão):** pxpipe é **lossy** e **degrada em Opus 4.7/4.8**
  (~7% de renders lidos errado, com *confabulação silenciosa*). A **sua config usa `opus[1m]`**
  (`settings.json`). É calibrado para **Fable 5 / gpt-5.6** (`PXPIPE_MODELS=claude-fable-5,gpt-5.6`).
  → Use **só em sessões Fable 5**, e mantenha valores byte-exatos (IDs, hashes, secrets) fora dele.
  `PXPIPE_MODELS=off` desliga o imaging. **Não** aponte o `ANTHROPIC_BASE_URL` numa sessão Opus de trabalho sério.
- **Quando usar:** sessões longas de contexto denso em Fable 5, para reduzir custo. Não para trabalho byte-exato.

---

## Resumo de estado

| Ferramenta | Tipo | Status | Ativa quando | Cuidado |
|---|---|---|---|---|
| **ecc** | Plugin CC | enabled | reiniciar sessão | +23.8k tok/sessão + hooks — pesado |
| **graphify** | Skill `/graphify` + CLI/MCP | instalado | reiniciar sessão | — |
| **pxpipe** | Proxy npm global | instalado | manual (proxy + BASE_URL) | degrada em Opus; usar só Fable 5 |
