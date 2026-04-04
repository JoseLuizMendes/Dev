---
título: "Protocol — Spec-Kit"
versão: 1.0
status: "Ativo"
tags:
  - protocolo
  - spec-kit
  - sdd
  - tdd
---

# Protocol — Spec-Kit & SDD+TDD Init

> Sub-protocolo do [[Client Onboarding Protocol]]. Responsabilidade única: transformar o `04-Tarefas.md` em backlog executável e anunciar que o projeto está pronto para desenvolvimento.

---

## Gatilho

`setup.js` gerado e estrutura de pastas do vault completa.

---

## Passos

**1. Validar `04-Tarefas.md`**
Cada tarefa deve ter:
- ID único (ex: `T-1.1`)
- User Story de origem (referência ao `01-Escopo.md`)
- Arquivos afetados
- Critério de aceite BDD (`GIVEN / WHEN / THEN`)
- Status inicial: `pending`
- Tarefas `[TEST]` presentes antes das de implementação

**2. Confirmar critérios BDD executáveis**
Cada User Story do `01-Escopo.md` §4 deve ter pelo menos um critério BDD no `04-Tarefas.md` que se traduz diretamente em teste Playwright ou Vitest.

**3. Cruzar arquitetura com [[Preferencias Dev]]**
Verificar que a stack declarada no `01-Escopo.md` é compatível com a stack aprovada. Sinalizar qualquer divergência antes de prosseguir.

**4. Anunciar conclusão do onboarding**

> "Setup concluído. Projeto `[nome]` inicializado em `Dev/2 - Projects/[Nicho]/[Projeto]/`. `setup.js` pronto para bootstrap. Spec-Kit inicializado. Pronto para `/speckit.implement`."

---

## Quality Gate Final (onboarding completo)

- [ ] `01-Escopo.md` — estrutura completa, sem campos `{{}}` não preenchidos
- [ ] `02-Contrato.md` — cláusulas dinâmicas aplicadas, sem seções resumidas
- [ ] `03-Planejamento.md` — EAP, cronograma, riscos e DoD presentes
- [ ] `04-Tarefas.md` — tarefas granulares com BDD e `data-testid` mapeados
- [ ] `05-Dev-Log.md` — estado inicial registrado
- [ ] `setup.js` — lê `01-Escopo.md` em runtime, smoke test passa
- [ ] Todos os arquivos usam wikilinks `[[]]` para referências internas

---

## Referências

- [[Client Onboarding Protocol]]
- [[Preferencias Dev]]
- [[Project Lifecycle Pipeline]]
