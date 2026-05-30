---
template: "Niche CLAUDE"
version: 1.0
status: "Template"
tags:
  - template
  - niche-claude
  - per-diretorio
nicho: "{{NOME_DO_DIRETORIO}}"
escopo: "[descrição curta do que este diretório contém]"
---

# {{NOME_DO_DIRETORIO}}

> **Nota de Uso:** Template canon para `CLAUDE.md` de subpasta/nicho dentro de um projeto. Substitui o template inline anteriormente em `[[TOON-PROMPT]]`.
>
> ⚠️ **Função:** diretrizes específicas do nicho local. Complementa (não substitui) o `CLAUDE.md` global do projeto.

---

## Escopo do Diretório

[Descrição clara do que este diretório contém e qual sua responsabilidade no projeto.]

---

## Diretrizes Específicas

- [Regras particulares deste nicho que não estão no CLAUDE global]
- [Padrões esperados]
- [Anti-padrões a evitar]

---

## Stack Local

| Camada | Tecnologia | Restrição |
|---|---|---|
| [linguagem/framework] | [versão] | [regra principal] |

> Para a stack completa do projeto, ver `[[Preferencias Dev]]`.

---

## Testes

- **Tipo:** [unitário / integração / E2E]
- **Ferramenta:** [Vitest / Playwright / xUnit / JUnit]
- **Cobertura mínima:** [% ou critério]

---

## Dependências Permitidas

- [Lista de bibliotecas autorizadas neste nicho]
- [Restrições explícitas — ex: "sem state management lib aqui"]

---

## Quality Gate

- [ ] Artefato foi gerado a partir de `[[Niche CLAUDE Template]]` como base
- [ ] Escopo do diretório claro e específico
- [ ] Stack local consistente com `[[Preferencias Dev]]`
- [ ] Diretrizes não contradizem o `CLAUDE.md` global do projeto

---

## Referências

- `CLAUDE.md` global do projeto (raiz)
- `[[Preferencias Dev]]` — stack aprovada e regras inegociáveis
- `[[Niche CLAUDE Template]]` — template canon (este arquivo serve de base)
