#!/usr/bin/env node
/**
 * Gera CLAUDE.md em todas as pastas faltantes de um repo, seguindo
 * o [[Niche CLAUDE Template]] e respeitando a regra R8 (CLAUDE.md universal).
 *
 * Detecta categoria por path e usa template apropriado.
 *
 * Uso:
 *   node tools/generate-claude-md.js <repo-root>
 *
 * Não sobrescreve CLAUDE.md já existentes — só cria nos que faltam.
 */

const fs = require("fs");
const path = require("path");

const root = process.argv[2];
if (!root) {
  console.error("Uso: node tools/generate-claude-md.js <repo-root>");
  process.exit(1);
}

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "coverage",
  "playwright-report",
  "test-results",
  "generated", // src/generated (Prisma client)
]);

// Pastas que são "biblioteca de terceiros" — CLAUDE.md mínimo, "não editar"
const VENDOR_HINT_PARTS = ["impeccable"]; // .agents/skills/impeccable é uma skill instalada

function walkDirs(start) {
  const dirs = [];
  function recurse(p) {
    const rel = path.relative(root, p);
    const name = path.basename(p);
    if (SKIP_DIRS.has(name)) return;
    if (rel) dirs.push(rel);
    let entries;
    try {
      entries = fs.readdirSync(p, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.isDirectory()) recurse(path.join(p, e.name));
    }
  }
  recurse(start);
  return dirs;
}

function detectCategory(rel) {
  const p = rel.replace(/\\/g, "/");
  if (p.includes("/impeccable") || VENDOR_HINT_PARTS.some((v) => p.includes(`/${v}`))) return "vendor";
  if (p.startsWith(".github")) return "github";
  if (p.startsWith(".vscode")) return "vscode";
  if (p.startsWith(".claude")) return "claude-cli";
  if (p.startsWith(".agents/inspiration")) return "agents-inspiration";
  if (p.startsWith(".agents/output")) return "agents-output";
  if (p.startsWith(".agents/skills")) return "agents-skills";
  if (p === ".agents") return "agents-root";
  if (p === "public" || p.startsWith("public/")) return "public-assets";
  if (p === "docs" || p.startsWith("docs/")) return "docs";
  if (p === "scripts") return "scripts";
  if (p === "prisma/sql") return "prisma-sql";
  if (p === "e2e/support") return "e2e-support";
  if (p === "src/types") return "src-types";
  if (p === "src/api/search") return "src-api-search";
  if (p === "src/components/auth") return "src-components-auth";
  if (p.startsWith("src/app/api/")) return "route-handler";
  if (p.startsWith("src/app/admin/")) return "app-admin-route";
  if (p.startsWith("src/app/")) return "app-public-route";
  return "generic";
}

function renderTemplate(category, rel) {
  const name = path.basename(rel) || rel;
  const nicho = name.replace(/[\[\]()]/g, "");

  const headers = {
    "vendor": ["Skill / biblioteca instalada", "Não editar manualmente. Usar conforme docs do publisher."],
    "github": ["Configuração GitHub", "CI workflows, issue/PR templates, dependabot. Mexer só com PR dedicado."],
    "vscode": ["Configuração VS Code (local)", "Configs do editor compartilhadas pelo time."],
    "claude-cli": ["Configuração local do Claude Code CLI", "Skills, settings, hooks do Claude Code. Não confundir com `.agents/skills/` que é orientação a agentes."],
    "agents-root": ["Hub de skills + outputs + inspirations para agentes IA", "Conteúdo curado para IAs que entrarem no repo. Sub-pastas: `skills/` (instaladas), `output/` (auditorias geradas), `inspiration/` (referências de design)."],
    "agents-inspiration": ["Referências de design e inspiração", "Documentos de pesquisa visual para orientar refactor de UI. Não são specs canon — são inputs criativos."],
    "agents-output": ["Outputs históricos de auditoria e análise por IA", "Cada arquivo é um snapshot de análise feita por agente. Não mexer — usar como referência."],
    "agents-skills": ["Skills instaladas para agentes (Next.js best practices, etc)", "Conteúdo de terceiros — orientação canônica de tecnologias. Não editar."],
    "public-assets": ["Arquivos estáticos servidos por Next.js", "Acessados via `/<path>`. Imagens devem ser otimizadas pelo `<Image>` quando possível. Cloudinary é o storage primário; aqui são fallbacks / arquivos locais."],
    "docs": ["Documentação técnica longa-forma", "ARQUITETURA.md, decisões de design, runbooks. Documentação curta vai em README do projeto."],
    "scripts": ["Scripts pontuais (admin setup, seed extras, manutenção)", "Rodar via `pnpm <script>` ou `node scripts/<file>` / `tsx scripts/<file>`. Cada arquivo deve ser autocontido."],
    "prisma-sql": ["Migrations SQL manuais", "Migrations geradas pela CLI do Prisma vivem em `prisma/migrations/`. Aqui vão SQL ad-hoc (índices custom, raw SQL, etc)."],
    "e2e-support": ["Helpers e fixtures para testes Playwright", "Imports usados pelos specs em `e2e/*.spec.ts`. Não rodar em prod."],
    "src-types": ["Type augmentations TypeScript", "`*.d.ts` para extender tipos de libs (ex: `next-auth.d.ts` adiciona `Session.user.id`). Sem código runtime."],
    "src-api-search": ["Reservado para utilities de busca", "Atualmente vazio. Quando popular: helpers para Client Components consumirem `/api/products?search=`. Não confundir com `src/app/api/products/` (Route Handler)."],
    "src-components-auth": ["Componentes de UI relacionados a autenticação", "Auth dialog, auth form, account menu, session sync. Server/Client mix conforme componente."],
    "route-handler": ["Route Handler HTTP", "Endpoint REST para Client Components / clientes externos. NÃO consumir daqui em RSC — RSC chama `src/lib/*-db` direto. Toda entrada passa por Zod."],
    "app-admin-route": ["Rota do painel administrativo", "Protegida pelo middleware via `admin_session` cookie. Server Component preferencial; `\"use client\"` só quando precisa interatividade. Re-validar tudo no servidor."],
    "app-public-route": ["Rota pública do ecommerce", "Server Component preferencial; dados buscados via `src/lib/*-db` ou Server Actions. Locale pt-BR. URLs públicas — não renomear."],
    "generic": ["Pasta auxiliar", "Documentar propósito específico quando o conteúdo crescer."],
  };

  const [titulo, desc] = headers[category] || headers["generic"];

  return `---
template: "Niche CLAUDE"
version: 1.0
status: "Ativo"
tags:
  - niche-claude
  - per-diretorio
nicho: "${nicho}"
escopo: "${titulo}"
---

# ${name}

> **Nota de Uso:** ${desc}
>
> Gerado por \`tools/generate-claude-md.js\` em 2026-05-30 conforme regra **R8** (\`[[CLAUDE]]\` raiz + \`[[Preferencias Dev#4. CLAUDE.md Universal]]\`).

---

## Escopo do Diretório

${desc}

---

## Diretrizes Específicas

${categoryDirectives(category)}

---

## Stack Local

${categoryStack(category)}

---

## Testes

${categoryTests(category)}

---

## Dependências Permitidas

${categoryDeps(category)}

---

## Referências

- \`CLAUDE.md\` global do projeto (raiz)
- \`[[Preferencias Dev]]\` — stack aprovada
- \`[[Niche CLAUDE Template]]\` — template canon
`;
}

function categoryDirectives(c) {
  return ({
    "vendor": "- Não editar arquivos desta skill manualmente.\n- Atualizar via gerenciador da skill.\n- Conteúdo é orientação canônica do publisher.",
    "github": "- CI / CD workflows em `workflows/`.\n- Issue & PR templates respeitam o pipeline canon do vault.\n- Mudanças no CI exigem revisão.",
    "vscode": "- Configs do editor (settings, extensions recommendations).\n- Não commitar credentials nem caminhos absolutos pessoais.",
    "claude-cli": "- Configs locais da CLI Claude Code.\n- `skills/` aqui são skills DO CLI (não skills para o agente do projeto — essas vivem em `.agents/skills/`).",
    "agents-root": "- Sub-pastas: `skills/` (instaladas via skill manager), `output/` (auditorias históricas), `inspiration/` (referências criativas).\n- Cada arquivo é orientação para a IA — não código.",
    "agents-inspiration": "- Documentos de pesquisa visual (referências boutique, paleta, motion).\n- Não são specs — são inputs para refactor de UI.\n- Ler antes de mexer em `src/components/` durante refactor visual.",
    "agents-output": "- Outputs imutáveis de auditoria/análise por agente.\n- Numerados (01-*, 02-*, ...) por ordem de execução.\n- Não modificar — gerar novos arquivos se precisar evoluir análise.",
    "agents-skills": "- Skills instaladas via skill manager (ex: `next-best-practices`, `impeccable`).\n- Cada skill tem `SKILL.md` + arquivos auxiliares.\n- Atualizar via `claude skill update` — não editar manualmente.",
    "public-assets": "- Arquivos servidos como estáticos via `/path/file.ext`.\n- Imagens grandes preferencialmente no Cloudinary (`res.cloudinary.com`) — aqui só fallbacks / favicons / arquivos pequenos.\n- Sem código executável.",
    "docs": "- Documentação técnica longa-forma (arquitetura, runbooks, decisões).\n- Não duplicar com README do projeto — README é overview, docs/ é detalhe.\n- Markdown padrão; diagramas em Mermaid.",
    "scripts": "- Scripts utilitários standalone — admin setup, seed extras, manutenção.\n- Rodar via `tsx scripts/<file>` ou `node scripts/<file.mjs>`.\n- Não importar `src/lib/*` server-only se rodar fora do Next runtime.",
    "prisma-sql": "- Migrations SQL manuais (raw SQL, índices custom, triggers).\n- Migrations padrão geradas pela CLI vivem em `prisma/migrations/`.\n- Versionar com mesmo padrão de nomeação das migrations.",
    "e2e-support": "- Helpers, fixtures, page objects usados pelos specs Playwright.\n- Não imitar produção — fixtures podem ser sintéticas.\n- Imports dos specs em `e2e/*.spec.ts`.",
    "src-types": "- Apenas `*.d.ts` augmentations de tipos.\n- Ex: `next-auth.d.ts` adiciona campos custom a `Session.user`.\n- Sem runtime code aqui.",
    "src-api-search": "- Reservado para utilities de busca (autocomplete, fuzzy match) consumidas por Client Components.\n- Hoje vazio — usar `src/lib/products/` para queries de produto.\n- NÃO confundir com `src/app/api/` (Route Handlers HTTP).",
    "src-components-auth": "- Componentes UI de auth: `auth-dialog`, `auth-form`, `auth-panel`, `account-menu`, `auth-data-sync`.\n- Modal `auth-gate` guarda ação pendente e executa após login.\n- Stores Zustand de auth vivem em `src/lib/auth-gate-store.ts`.",
    "route-handler": "- Endpoint HTTP do App Router (Route Handler).\n- TODA entrada via Zod (`src/lib/validations.ts`).\n- Re-validar preço, estoque, cupom — NUNCA confiar no client.\n- Server Components NÃO consomem este endpoint — usam `src/lib/*-db` direto.\n- Retornar `NextResponse.json(...)` com status apropriado.",
    "app-admin-route": "- Rota protegida pelo middleware (`admin_session` cookie + `ADMIN_SECRET`).\n- Server Component preferencial; `\"use client\"` só quando estritamente necessário.\n- Re-validar tudo no servidor — admin auth não isenta validação de input.\n- URLs admin em pt-BR (cupons, produtos, pedidos, mensagens).",
    "app-public-route": "- Rota pública do ecommerce.\n- Server Component preferencial; data fetching via `src/lib/*-db` (não fetch da própria API).\n- URLs em pt-BR — NÃO renomear (são públicas, SEO-sensitive).\n- Bloqueio de ações que exigem login: usar `useRequireAuth` em Client Components.",
    "generic": "- Documentar propósito específico quando o conteúdo crescer.",
  })[c] || "- A definir.";
}

function categoryStack(c) {
  return ({
    "vendor": "N/A — biblioteca externa.",
    "github": "YAML (GitHub Actions). Sem código TS.",
    "vscode": "JSON (config VS Code). Sem código.",
    "claude-cli": "JSON / Markdown (config CLI). Sem código.",
    "public-assets": "Arquivos estáticos (PNG/SVG/WebP/AVIF). Sem código.",
    "prisma-sql": "SQL Postgres. Sem TS.",
    "src-types": "TypeScript declarations (`*.d.ts`).",
    "route-handler": "Next.js Route Handler + Zod + Prisma (via `src/lib/*-db`) + `auth()` (Auth.js v5).",
    "app-admin-route": "Next.js App Router (RSC + Client) + Tailwind + Shadcn + Zustand (cache) + Recharts (dashboards).",
    "app-public-route": "Next.js App Router (RSC + Client) + Tailwind + Shadcn + GSAP/Lenis + Zustand (cache cart/wishlist).",
  })[c] || "Conforme `[[Preferencias Dev]]`.";
}

function categoryTests(c) {
  return ({
    "vendor": "N/A.",
    "github": "Validação CI roda no próprio workflow.",
    "vscode": "N/A.",
    "claude-cli": "N/A.",
    "public-assets": "N/A.",
    "prisma-sql": "Testar em DB de staging antes de aplicar em prod.",
    "scripts": "Smoke-test manual após mudanças.",
    "src-types": "Type-check via `tsc --noEmit` (parte do `pnpm build`).",
    "e2e-support": "Os fixtures suportam os specs `e2e/*.spec.ts`.",
    "route-handler": "Vitest para lógica isolada; Playwright para fluxos completos que tocam o endpoint.",
    "app-admin-route": "Playwright (`e2e/admin*.spec.ts`).",
    "app-public-route": "Playwright (`e2e/*.spec.ts`) + Vitest para componentes Client.",
  })[c] || "Vitest + Playwright conforme `[[Preferencias Dev]]`.";
}

function categoryDeps(c) {
  return ({
    "vendor": "N/A — conteúdo externo.",
    "github": "Actions oficiais GitHub + actions de terceiros versionadas.",
    "vscode": "N/A.",
    "claude-cli": "N/A.",
    "public-assets": "N/A.",
    "prisma-sql": "N/A (SQL).",
    "scripts": "Apenas libs da Stack Principal / Estendida; sem novas deps sem registrar em `[[05-Dev-Log]]`.",
    "src-types": "N/A.",
    "route-handler": "Conforme `[[Preferencias Dev]]` — Zod + Prisma + Auth.js.",
    "app-admin-route": "Conforme `[[Preferencias Dev]]` + Recharts (admin).",
    "app-public-route": "Conforme `[[Preferencias Dev]]`.",
    "agents-output": "N/A.",
    "agents-skills": "Skills do skill manager.",
    "agents-inspiration": "N/A.",
    "agents-root": "N/A.",
    "src-api-search": "Helpers internos apenas; sem libs novas.",
    "src-components-auth": "Auth.js + react-hook-form + Zod + Zustand. Sem novas deps.",
  })[c] || "Apenas Stack Principal / Estendida aprovada em `[[Preferencias Dev]]`.";
}

// EXECUTAR
const allDirs = walkDirs(root);
let created = 0;
let skipped = 0;
const missing = [];

for (const rel of allDirs) {
  const dir = path.join(root, rel);
  const claudePath = path.join(dir, "CLAUDE.md");
  if (fs.existsSync(claudePath)) {
    skipped++;
    continue;
  }
  const cat = detectCategory(rel);
  const content = renderTemplate(cat, rel);
  fs.writeFileSync(claudePath, content, "utf8");
  created++;
  missing.push(rel);
}

console.log(`Total de diretórios: ${allDirs.length}`);
console.log(`CLAUDE.md já existentes (skipped): ${skipped}`);
console.log(`CLAUDE.md criados agora: ${created}`);
if (created > 0) {
  console.log(`\nPastas que receberam CLAUDE.md:`);
  missing.slice(0, 50).forEach((m) => console.log(`  - ${m}`));
  if (missing.length > 50) console.log(`  ... (${missing.length - 50} mais)`);
}
