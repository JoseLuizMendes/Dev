---
template: "Errors"
version: 1.0
status: "Ativo"
tags:
  - erros
  - memoria-imunologica
  - local
projeto: "Site e Hub da Clinica"
cliente: "Dr. Gabriel Cavalcanti"
sincronizacao: "espelhado em [[4 - Error's Memory/INDEX]]"
---

# 🐛 06-Erros — Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Nota de Uso:** Inicializado pelo `[[Protocol-Bootstrap]]`. Toda entrada é propagada para a memória imunológica global.
>
> ⚠️ **ESPELHADO EM MEMÓRIA IMUNOLÓGICA GLOBAL.** Toda entrada aqui deve ser propagada para `[[4 - Error's Memory/INDEX]]` seguindo o protocolo de deduplicação de `[[Immunological Error Memory]]`.
>
> ⚠️ **Schema obrigatório:** idêntico ao do `[[Immunological Error Memory]]`. Não simplificar campos.

---

## Erros do Projeto

```yaml
# Nenhum erro registrado ainda. Candidatos observados no onboarding, a registrar se reincidirem na implementação:
# - Sessões assinadas com segredo de fallback no código quando JWT_SECRET faltava (corrigido na F0, PR #1)
# - App local apontando para o branch Neon `production` (corrigido em 2026-09-17)
# - `skills add vercel/next.js` falha no Windows por limite de caminho (contornado com core.longpaths via env)
```

---

## Quality Gate (antes de propagar)

- [x] Artefato foi gerado a partir de `[[Errors Template]]` como base
- [ ] ID consultado no `[[4 - Error's Memory/INDEX]]` (não duplicar) — N/A até a primeira entrada
- [ ] Todos os campos obrigatórios preenchidos (`sintoma`, `causa_raiz`, `solução`, `prevenção`) — N/A até a primeira entrada
- [ ] `stack` lista pelo menos uma tecnologia — N/A até a primeira entrada
- [ ] `severidade` definida (não vazio) — N/A até a primeira entrada
- [ ] Entrada criada em `[[INDEX]]` global + `by-category/` + `by-stack/` — N/A até a primeira entrada
- [ ] `propagado_para_global: true` atualizado após sincronização — N/A até a primeira entrada

---

## Fluxo de Propagação

```mermaid
flowchart TD
    A([Erro encontrado durante implementacao]) --> B[Registrar AQUI primeiro]
    B --> C{Existe no INDEX global?}
    C -->|Sim| D[Incrementar recorrencias no global]
    C -->|Nao| E[Criar entrada nova com ID sequencial]
    D --> F[Adicionar wikilink deste projeto]
    E --> G[Indexar em by-category + by-stack]
    F --> G
    G --> H{recorrencias >= 2?}
    H -->|Sim| I[Promover a regra em Preferencias Dev]
    H -->|Nao| J([Erro registrado])
    I --> J
```

> Protocolo completo: `[[Immunological Error Memory]]`

---

## Referências

- `[[Immunological Error Memory]]` — protocolo global
- `[[4 - Error's Memory/INDEX]]` — catálogo global
- `[[Preferencias Dev]]` — destino das regras promovidas (recorrências >= 2)
- `[[Protocol-Bootstrap]]` — protocolo que inicializa este arquivo
