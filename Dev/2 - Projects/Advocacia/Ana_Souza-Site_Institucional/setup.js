/**
 * setup.js — Ana Souza: Site Institucional
 * Gerado pelo Protocol-Bootstrap em 2026-04-04.
 *
 * USO:
 *   cd C:\Users\ZecaDev\Freelas
 *   node "F:\...\Dev\Dev\2 - Projects\Advocacia\Ana_Souza-Site_Institucional\setup.js"
 *
 * Lê 01-Escopo.md (no mesmo diretório deste script) e cria o scaffold
 * do projeto no diretório atual. Nenhum dado do projeto está hardcoded
 * aqui — tudo vem do frontmatter do escopo, incluindo o package manager.
 *
 * Documentação de referência (via Context7):
 *   Next.js:  https://nextjs.org/docs/app/getting-started/installation
 *   pnpm:     https://pnpm.io/cli/add
 *   Vitest:   https://vitest.dev/config/environment
 *
 * REFERÊNCIAS DO VAULT:
 *   Escopo:   Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/01-Escopo.md
 *   Template: Dev/1 - Templates/Setup Script Template.md
 */

// ─── Seção 1 — HEADER ─────────────────────────────────────────────────────
// (ver comentário acima)

// ─── Seção 2 — READ (01-Escopo.md via __dirname) ─────────────────────────
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
  console.error("❌ Frontmatter YAML não encontrado em 01-Escopo.md");
  process.exit(1);
}
const fm = fmMatch[1];

/** Extrai um campo escalar do frontmatter YAML */
const get = (key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, "m"));
  return m ? m[1].trim() : "";
};

const clienteRaw    = get("cliente");
const projetoRaw    = get("projeto");
const FRONTEND_STACK = get("frontend_stack");
const DEPENDENCIES  = get("dependencies");
const EMAIL_SERVICE = get("email_service");
const CLOUD         = get("cloud_stack");
const PKG_MGR       = get("package_manager") || "npm"; // pnpm | npm | yarn | bun

// PROJECT em kebab-case — obrigatório para create-next-app
const PROJECT = (clienteRaw + "-" + projetoRaw)
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "");

if (!PROJECT) {
  console.error("❌ Não foi possível derivar PROJECT. Verifique 'cliente' e 'projeto' em 01-Escopo.md.");
  process.exit(1);
}

// ─── Package Manager Abstraction ──────────────────────────────────────────
// Fonte: https://pnpm.io/cli/add | https://docs.npmjs.com/cli/v10/commands/npm-install

const pm = {
  /** Scaffold do framework (create-next-app) */
  create: (name) => {
    const flags = "--typescript --tailwind --eslint --app --src-dir --no-git";
    switch (PKG_MGR) {
      case "pnpm": return `pnpm create next-app@latest ${name} ${flags}`;
      case "yarn": return `yarn create next-app ${name} ${flags}`;
      case "bun":  return `bun create next-app ${name} ${flags}`;
      default:     return `npx create-next-app@latest ${name} ${flags}`;
    }
  },
  /** Instalar dependências de produção */
  add: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add ${pkgs}`;
      case "yarn": return `yarn add ${pkgs}`;
      case "bun":  return `bun add ${pkgs}`;
      default:     return `npm install ${pkgs}`;
    }
  },
  /** Instalar dependências de desenvolvimento */
  addDev: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add -D ${pkgs}`;
      case "yarn": return `yarn add -D ${pkgs}`;
      case "bun":  return `bun add -d ${pkgs}`;
      default:     return `npm install --save-dev ${pkgs}`;
    }
  },
};

// ─── Seção 3 — STACK INIT ─────────────────────────────────────────────────

const run = (cmd, cwd) => {
  console.log(`▶ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: cwd || process.cwd() });
};

const projectDir = path.join(process.cwd(), PROJECT);

const write = (relPath, content) => {
  const abs = path.join(projectDir, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, "utf8");
  console.log(`   ✓ ${relPath}`);
};

console.log(`\n🚀 Setup: ${clienteRaw} — ${projetoRaw}`);
console.log(`   Project:    ./${PROJECT}`);
console.log(`   Stack:      ${FRONTEND_STACK}`);
console.log(`   PM:         ${PKG_MGR}`);
console.log(`   Deps extra: ${DEPENDENCIES || "nenhuma"}\n`);

console.log("📦 Criando projeto...");
run(pm.create(PROJECT));

// ─── Seção 4 — DEPENDENCIES ───────────────────────────────────────────────

console.log("\n📦 Instalando dependências base da stack...");
run(pm.add("gsap @gsap/react lenis zustand nuqs react-hook-form @hookform/resolvers zod sonner lucide-react"), projectDir);

if (DEPENDENCIES && DEPENDENCIES.toLowerCase() !== "n/a") {
  console.log(`\n📦 Instalando dependências do escopo: ${DEPENDENCIES}`);
  run(pm.add(DEPENDENCIES), projectDir);
}

console.log("\n📦 Instalando dependências de desenvolvimento...");
run(pm.addDev("vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom"), projectDir);

// ─── Seção 5 — UTILITIES (config files apenas) ───────────────────────────
// Fonte Next.js tsconfig: https://nextjs.org/docs/app/api-reference/config/typescript
// IMPORTANTE: create-next-app já gerou tsconfig.json e next.config.ts.
// Aqui fazemos MERGE dos settings mais estritos — sem sobrescrever a base do framework.

console.log("\n⚙️  Aplicando config files...");

// tsconfig.json — MERGE (não overwrite)
// noUncheckedIndexedAccess excluído intencionalmente: incompatível com tipos gerados pelo Next.js
const tsconfigPath = path.join(projectDir, "tsconfig.json");
const existingTs = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
const patchedTs = {
  ...existingTs,
  compilerOptions: {
    ...existingTs.compilerOptions,
    strict: true,
    noImplicitOverride: true,
    forceConsistentCasingInFileNames: true,
    // Adicionar tipo jsdom para Vitest — fonte: https://vitest.dev/config/environment
    types: [...(existingTs.compilerOptions?.types ?? []), "vitest/jsdom"],
  },
};
fs.writeFileSync(tsconfigPath, JSON.stringify(patchedTs, null, 2));
console.log("   ✓ tsconfig.json (merged)");

// next.config.ts — overwrite intencional: adicionar security headers à base padrão
// Fonte: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
write("next.config.ts", `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-Content-Type-Options",     value: "nosniff" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
`);

// vitest.config.ts — Fonte: https://vitest.dev/config/environment
write("vitest.config.ts", `import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    environmentOptions: {
      jsdom: {
        url: "http://localhost:3000",
      },
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
`);

// src/test/setup.ts
write("src/test/setup.ts", `import "@testing-library/jest-dom";
`);

// .env.example
const today = new Date().toISOString().split("T")[0];
const envLines = [
  `# ${clienteRaw} — ${projetoRaw}`,
  `# Gerado em ${today}`,
  `# Copie para .env.local e preencha os valores reais`,
  "",
];
if (EMAIL_SERVICE && EMAIL_SERVICE.toLowerCase() !== "n/a") {
  envLines.push(`# ${EMAIL_SERVICE}`);
  envLines.push(`${EMAIL_SERVICE.toUpperCase().replace(/[^A-Z0-9]/g, "_")}_API_KEY=`);
  envLines.push("");
}
if (CLOUD && CLOUD.toLowerCase() !== "n/a") {
  envLines.push(`# Deploy: ${CLOUD}`);
}
write(".env.example", envLines.join("\n") + "\n");

// ─── Seção 6 — CONFIRMATION ───────────────────────────────────────────────
console.log(`
╔══════════════════════════════════════════════════════╗
║  ✅  Setup concluído: ${PROJECT.padEnd(29)}║
╚══════════════════════════════════════════════════════╝

Criado em:  ${projectDir}
PM usado:   ${PKG_MGR}

Próximos passos:
  1. cd ${PROJECT}
  2. cp .env.example .env.local  (preencher as chaves reais)
  3. ${PKG_MGR === "npm" ? "npm run dev" : `${PKG_MGR} dev`}

Para iniciar o desenvolvimento:
  Abra o vault Dev → siga 04-Tarefas.md (metodologia Akita — TDD)
`);
