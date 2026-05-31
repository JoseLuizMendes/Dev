# Tools

Scripts utilitários do vault. Zero dependências externas (Node stdlib).

## validate-project.js

Valida que um projeto em `Dev/2 - Projects/[Nicho]/[Projeto]/` segue 100% a matriz canon definida em `[[Master Pipeline & Enforcement]]`.

**Uso:**

```bash
# Validação só do vault (artefatos)
node tools/validate-project.js "Dev/2 - Projects/Automacao/Sentinel-Flow"

# Validação completa: vault + estrutura de pastas do repo de código
node tools/validate-project.js "Dev/2 - Projects/Automacao/Sentinel-Flow" --code-path "C:\Freelas\Sentinel-Flow"
```

### Flags no frontmatter de `01-Escopo.md`

O validator respeita 2 flags opcionais no frontmatter pra acomodar casos legítimos:

- **`bootstrap: "pre-existente"`** — pula check de `setup.js`. Use quando o projeto **NÃO** foi bootstrapped via `[[Protocol-Bootstrap]]` (já tinha código pré-existente). Default: `"via-protocol"`.
- **`tipo_contrato: "auto"`** — pula seções jurídicas obrigatórias (Objeto, Forma de Execução, Obrigações, Vigência) + cláusulas imutáveis (IP, Escopo, NDA, Disputas) em `02-Contrato.md`. Use quando cliente = dev (auto-contrato). Default: `"comercial"`.
- **`architecture: "next-standalone-fullstack"`** — força detecção de Next.js Standalone (sem NestJS). Default: heurística (string match no `backend_stack`).

Exemplo aplicado em Belessence:

```yaml
---
cliente: "Belessence (Mari Beauty)"
projeto: "Belessence"
frontend_stack: "Next.js 16 (App Router) + React 19 + Tailwind 4 + Shadcn/ui"
backend_stack: "Next.js Route Handlers + Prisma 7 + PostgreSQL — monolito"
bootstrap: "pre-existente"
tipo_contrato: "auto"
---
```

**O que valida (sem `--code-path`):**

- Cada artefato obrigatório existe (`01-Escopo.md` até `06-Erros.md` + `setup.js`)
- Frontmatter YAML está completo (campos obrigatórios preenchidos, sem `{{}}` órfãos)
- Seções obrigatórias do template canon estão presentes
- `setup.js` lê `01-Escopo.md` via `__dirname` (não hardcoded)
- `04-Tarefas.md` tem padrão `T-X.Y` + tarefas `[TEST]`
- `02-Contrato.md` contém as 4 cláusulas imutáveis (IP, Escopo, NDA, Disputas)
- Nenhum placeholder `{{VARIAVEL}}` ficou sem substituir

**O que valida adicionalmente com `--code-path`:**

Lê `frontend_stack` e `backend_stack` do frontmatter de `01-Escopo.md` e verifica que o repo de código tem a estrutura de pastas correspondente conforme `[[Preferencias Dev#Estrutura de Pastas por Stack]]`:

- **TS + Next + NestJS:** espera `back/`, `front/`, `shared/`, `infra/`, `pnpm-workspace.yaml`
- **C# (.NET):** espera `src/<Name>.Web/`, `src/<Name>.Application/`, `src/<Name>.Domain/`, `src/<Name>.Infrastructure/`, `tests/`
- **Java Spring:** espera `src/main/java/`, `src/test/java/`
- **Vue:** espera `src/views/`, `src/components/`, `src/stores/`
- **Angular:** espera `src/app/core/`, `src/app/shared/`, `src/app/features/`

**Exit codes:**

- `0` — projeto validado, dentro do canon
- `1` — erros encontrados, projeto fora do canon (script imprime cada violação)

**Quando rodar:**

- Após executar `[[Client Onboarding Protocol]]` completo
- Antes de fazer commit do onboarding
- Antes de declarar "pronto para `/speckit.implement`"
- Periodicamente em projetos ativos pra detectar drift
