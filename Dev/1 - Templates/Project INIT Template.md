---
template: "Project INIT"
version: 1.0
status: "Template"
tags:
  - template
  - init
  - boot
  - per-projeto
projeto: "{{PROJECT_NAME}}"
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
stack_principal: "{{FRONTEND_STACK}}"
data_inicio: "{{START_DATE}}"
package_manager: "{{PACKAGE_MANAGER}}"
---

# 🚀 INIT — {{PROJECT_NAME}}

> **Nota de Uso:** Template canon para `INIT.md` da raiz do projeto (não do vault). Gerado pelo `[[Protocol-Bootstrap]]` no momento do scaffold.
>
> ⚠️ **Função:** boot per-projeto. Carregado quando o agente entra no diretório de trabalho do código (`Freelas/[Projeto]/`). Complementa (não substitui) o `[[Session Protocol]]` do vault.

---

## Boot Sequence (per-projeto)

```yaml
init_sequence:
  - passo: 1
    ação: "Ler este INIT.md"
    propósito: "Contexto do projeto + atalhos para o vault"

  - passo: 2
    ação: "Ler CLAUDE.md local"
    arquivo: "./CLAUDE.md"
    propósito: "Diretrizes do diretório de código"

  - passo: 3
    ação: "Ler escopo no vault"
    arquivo: "Dev/2 - Projects/{{MARKET_NICHE}}/{{PROJECT_NAME}}/01-Escopo.md"
    propósito: "User Stories + critérios BDD"

  - passo: 4
    ação: "Ler dev-log no vault"
    arquivo: "Dev/2 - Projects/{{MARKET_NICHE}}/{{PROJECT_NAME}}/05-Dev-Log.md"
    propósito: "Estado atual e decisões recentes"

  - passo: 5
    ação: "Resumir + aguardar instrução"
    formato: "3 bullets: contexto, estado, próximos passos"
```

> O canon de boot completo do vault está em `[[Session Protocol]]`. Este INIT é o boot **per-projeto** (complementar, não substituto).

---

## Atalhos para o Vault

| Preciso de... | Arquivo no vault |
|---|---|
| Escopo + User Stories | `[[01-Escopo]]` |
| Contrato | `[[02-Contrato]]` |
| Planejamento (EAP) | `[[03-Planejamento]]` |
| Backlog granular | `[[04-Tarefas]]` |
| Diário de decisões | `[[05-Dev-Log]]` |
| Erros do projeto | `[[06-Erros]]` |
| Stack aprovada | `[[Preferencias Dev]]` |
| Memória global de erros | `[[4 - Error's Memory/INDEX]]` |

---

## Comandos rápidos

```bash
# Instalar dependências
{{PACKAGE_MANAGER}} install

# Rodar testes
{{PACKAGE_MANAGER}} test

# Dev server
{{PACKAGE_MANAGER}} run dev
```

---

## Quality Gate

- [ ] Artefato foi gerado a partir de `[[Project INIT Template]]` como base
- [ ] Todas as variáveis `{{}}` substituídas
- [ ] Paths para o vault apontam corretamente para o projeto
- [ ] `{{PACKAGE_MANAGER}}` substituído por valor concreto (`pnpm` / `npm` / `yarn` / `bun`)

---

## Referências

- `[[Session Protocol]]` — boot canônico do vault
- `[[Project Lifecycle Pipeline]]` — fluxo completo do projeto
- `[[Preferencias Dev]]` — stack e regras inegociáveis
- `[[Protocol-Bootstrap]]` — protocolo que gera este arquivo
