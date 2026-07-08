---
template: "Setup Script"
versão: 3.0
status: "Template"
tags:
  - template
  - bootstrap
  - setup
  - automação
---

# Setup Script Template

> **Propósito:** Define a estrutura obrigatória do `setup.js` gerado por projeto durante o [[Protocol-Bootstrap]]. O script é dinâmico — lê `01-Escopo.md` em runtime via `path.join(__dirname, ...)`. Nenhum dado específico do projeto é hardcoded no script.

---

## O que é o setup.js

Script Node.js autocontido que lê o escopo do projeto e cria o scaffold completo em qualquer diretório:

```bash
# Navegue até a pasta onde quer criar o projeto
cd C:\Users\ZecaDev\Freelas

# Execute apontando para o script no vault
node "F:\...\Dev\2 - Projects\[Nicho]\[Projeto]\setup.js"
```

**Por que Node.js:** funciona em Windows, Mac e Linux sem adaptação. Node disponível em qualquer máquina com npm.

**Regra fundamental:** o script lê `01-Escopo.md` via `path.join(__dirname, "01-Escopo.md")` em runtime. Nenhum nome de projeto, stack ou dependência é hardcoded.

---

## Quando gerar

Gerado pelo [[Protocol-Bootstrap]] **após** `01-Escopo.md` estar finalizado e aprovado.

Salvo em: `Dev/2 - Projects/[Nicho]/[Projeto]/setup.js`

---

## Estrutura obrigatória — 7 seções na ordem exata

```
// Seção 1 — HEADER         comentário: nome do projeto, data, referências, uso
// Seção 2 — READ           ler 01-Escopo.md via path.join(__dirname), parsear frontmatter
// Seção 3 — STACK INIT     scaffold do framework (ex: npx create-next-app)
// Seção 4 — DEPENDENCIES   npm install prod + dev — extraídas do frontmatter parseado
// Seção 5 — UTILITIES      config files: tsconfig, next.config, vitest.config, .env.example
// Seção 6 — TOOLING        ferramentas obrigatórias: SpecKit, Impeccable, Higgsfield (opt-out), skills Next.js
// Seção 7 — CONFIRMATION   mensagem final com próximos passos (incl. rodar /impeccable init no Claude Code)
```

---

## Seção 2 — Padrão obrigatório de leitura

```javascript
const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const escopoPath = path.join(__dirname, "01-Escopo.md");
if (!fs.existsSync(escopoPath)) {
  console.error("❌ 01-Escopo.md não encontrado em:", escopoPath);
  process.exit(1);
}

const escopo = fs.readFileSync(escopoPath, "utf8");
const fmMatch = escopo.match(/^---\n([\s\S]*?)\n---/);
if (!fmMatch) {
  console.error("❌ Frontmatter não encontrado em 01-Escopo.md");
  process.exit(1);
}
const fm = fmMatch[1];

const get = (key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
  return m ? m[1].trim() : "";
};

const PROJECT    = (get("cliente") + "-" + get("projeto"))
  .toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
const PKG_MGR    = get("package_manager") || "npm"; // pnpm | npm | yarn | bun
const DEPENDENCIES = get("dependencies");
const MEDIA      = get("midia") || "sim"; // "sim" (default) | "nao" — controla instalação do Higgsfield
```

## Package Manager Abstraction — padrão obrigatório

Sempre usar este objeto `pm` para gerar comandos. **Nunca hardcodar `npm install` ou `pnpm add` diretamente.**

```javascript
// Fonte: https://pnpm.io/cli/add | https://nextjs.org/docs/app/getting-started/installation
const pm = {
  create: (name) => {
    const flags = "--typescript --tailwind --eslint --app --src-dir --no-git";
    switch (PKG_MGR) {
      case "pnpm": return `pnpm create next-app@latest ${name} ${flags}`;
      case "yarn": return `yarn create next-app ${name} ${flags}`;
      case "bun":  return `bun create next-app ${name} ${flags}`;
      default:     return `npx create-next-app@latest ${name} ${flags}`;
    }
  },
  add: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add ${pkgs}`;
      case "yarn": return `yarn add ${pkgs}`;
      case "bun":  return `bun add ${pkgs}`;
      default:     return `npm install ${pkgs}`;
    }
  },
  addDev: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add -D ${pkgs}`;
      case "yarn": return `yarn add -D ${pkgs}`;
      case "bun":  return `bun add -d ${pkgs}`;
      default:     return `npm install --save-dev ${pkgs}`;
    }
  },
};
```

---

## Seção 5 — Config files obrigatórios

O script aplica exatamente estes arquivos de configuração — nada mais:

| Arquivo | Estratégia | Conteúdo |
|---|---|---|
| `tsconfig.json` | **MERGE** — não overwrite | Adicionar `strict`, `noImplicitOverride`, `types: ["vitest/jsdom"]` ao gerado pelo scaffold |
| `next.config.ts` | **Overwrite** intencional | Security headers (X-Frame-Options, nosniff, Referrer-Policy) |
| `vitest.config.ts` | Criar | Environment jsdom, globals, aliases `@/*`, `jsdom.url` |
| `src/test/setup.ts` | Criar | `import "@testing-library/jest-dom"` |
| `.env.example` | Criar | Variáveis do escopo, sem valores reais |

> ⚠️ `noUncheckedIndexedAccess` **excluído intencionalmente** do tsconfig — incompatível com tipos gerados pelo Next.js (fonte: Context7 / Next.js docs).

> Componentes, tipos, schemas e dados são responsabilidade do [[Protocol-SpecKit]], **não** do setup.js.

---

## Seção 6 — TOOLING (ferramentas obrigatórias)

> Canon: `[[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]`. Executada dentro da pasta do projeto recém-criado.

```javascript
// Seção 6 — TOOLING
const run = (cmd, label) => {
  try {
    console.log(`\n🔧 ${label}...`);
    execSync(cmd, { cwd: projectDir, stdio: "inherit" });
  } catch (e) {
    console.error(`⚠️ Falha em "${label}" — revalidar comando via Context7/site oficial e atualizar a KB.`);
  }
};

run("uvx --from git+https://github.com/github/spec-kit.git specify init .", "SpecKit (specify init)");
run("npx skills add pbakaus/impeccable", "Impeccable (skills)");

if (MEDIA !== "nao") {
  run("npx skills add higgsfield-ai/skills", "Higgsfield skills");
} else {
  console.log("\n⏭️ Higgsfield PULADO — opt-out midia: \"nao\" no 01-Escopo.md (registrar no 05-Dev-Log).");
}

if (/next/i.test(get("frontend_stack"))) {
  run("npx skills add vercel/next.js", "Skills Next.js (oficiais, do repo vercel/next.js)");
}
```

Regras da seção TOOLING:
- Falha de um comando de tooling **não aborta** o setup (o try/catch registra o aviso) — mas o Quality Gate do [[Protocol-Bootstrap]] só fecha com tudo instalado ou opt-out registrado.
- `/impeccable init` **não entra aqui** — é comando de agente, roda no Claude Code após o setup (a Seção 7 instrui isso).
- Comandos verificados em 2026-07-08; se algum mudar, atualizar este template + [[Impeccable Reference]]/[[Higgsfield Skills Reference]].

---

## Variáveis extraídas do frontmatter de 01-Escopo.md

| Variável | Campo no frontmatter | Valores aceitos |
|---|---|---|
| `PROJECT` | `cliente` + `projeto` → kebab-case | string kebab-case |
| `PACKAGE_MANAGER` | `package_manager` | `pnpm` \| `npm` \| `yarn` \| `bun` |
| `FRONTEND_STACK` | `frontend_stack` | ex: `Next.js 16 + React 19 + Tailwind` |
| `DEPENDENCIES` | `dependencies` | pacotes separados por espaço, ou `N/A` |
| `EMAIL_SERVICE` | `email_service` | ex: `Resend`, ou `N/A` |
| `CLOUD_STACK` | `cloud_stack` | ex: `Vercel`, ou `N/A` |
| `MEDIA` | `midia` | `sim` (default) \| `nao` — se `nao`, pula Higgsfield na Seção 6 |

> `package_manager` é obrigatório — define todos os comandos `add`, `addDev` e `create`. Padrão: `npm` se ausente.

---

## Regras obrigatórias

1. `PROJECT` em kebab-case sem maiúsculas — validar antes de criar pasta
2. `strict: true` no `tsconfig.json` — sem exceção
3. Stack conforme [[Preferencias Dev]] — nunca inventar dependências
4. Dependências extras instaladas **somente** se presentes no frontmatter de `01-Escopo.md`
5. Script encerra com mensagem clara de próximos passos (Seção 7) — incluindo instrução de rodar `/impeccable init` no Claude Code
6. Sem componentes, tipos, schemas ou dados hardcoded no script
7. Seção TOOLING sempre presente — Higgsfield condicionado a `MEDIA !== "nao"`, skills Next.js condicionadas a `frontend_stack`

---

## Checklist de Validação (Quality Gate)

Antes de salvar o `setup.js` no vault:

- [ ] `PROJECT` em kebab-case sem maiúsculas
- [ ] Seções 1–7 presentes na ordem correta
- [ ] `01-Escopo.md` lido via `path.join(__dirname, "01-Escopo.md")`
- [ ] Validação de existência do arquivo antes de `readFileSync`
- [ ] `tsconfig.json` com `strict: true`
- [ ] `.env.example` gerado sem valores reais
- [ ] Nenhum componente, tipo ou schema hardcoded
- [ ] Seção 6 (TOOLING) presente: SpecKit + Impeccable sempre; Higgsfield condicionado a `MEDIA`; skills Next.js condicionadas à stack
- [ ] Seção 7 com mensagem de confirmação e próximos passos (incl. `/impeccable init` no Claude Code)

---

## Referências

- [[Protocol-Bootstrap]] — quando e como gerar o setup.js
- [[Client Onboarding Protocol]] — fluxo geral de onboarding
- [[Preferencias Dev]] — stack aprovada e regras de bootstrap
- [[Protocol-SpecKit]] — responsável pelo código de produto (componentes, tipos, schemas)
