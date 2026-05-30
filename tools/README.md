# Tools

Scripts utilitários do vault. Zero dependências externas (Node stdlib).

## validate-project.js

Valida que um projeto em `Dev/2 - Projects/[Nicho]/[Projeto]/` segue 100% a matriz canon definida em `[[Master Pipeline & Enforcement]]`.

**Uso:**

```bash
node tools/validate-project.js "Dev/2 - Projects/Automacao/Sentinel-Flow"
```

**O que valida:**

- Cada artefato obrigatório existe (`01-Escopo.md` até `06-Erros.md` + `setup.js`)
- Frontmatter YAML está completo (campos obrigatórios preenchidos, sem `{{}}` órfãos)
- Seções obrigatórias do template canon estão presentes
- `setup.js` lê `01-Escopo.md` via `__dirname` (não hardcoded)
- `04-Tarefas.md` tem padrão `T-X.Y` + tarefas `[TEST]`
- `02-Contrato.md` contém as 4 cláusulas imutáveis (IP, Escopo, NDA, Disputas)
- Nenhum placeholder `{{VARIAVEL}}` ficou sem substituir

**Exit codes:**

- `0` — projeto validado, dentro do canon
- `1` — erros encontrados, projeto fora do canon (script imprime cada violação)

**Quando rodar:**

- Após executar `[[Client Onboarding Protocol]]` completo
- Antes de fazer commit do onboarding
- Antes de declarar "pronto para `/speckit.implement`"
- Periodicamente em projetos ativos pra detectar drift
