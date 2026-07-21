#!/usr/bin/env node
// ============================================================
// Seção 1 — HEADER
// setup.js — Bootstrap portátil do projeto BipDay (Produtividade).
// Data: 2026-07-17 · Ref: [[01-Escopo]] [[03-Planejamento]] [[04-Tarefas]] [[05-Dev-Log]]
// Lê 01-Escopo.md em runtime via path.join(__dirname) — nada hardcoded (canon [[Setup Script Template]]).
// A instância de 2026-07-17 foi bootstrapped manualmente; este script reproduz em ambiente limpo.
// Uso:
//   node "…/BipDay/setup.js"            # dry-run (imprime)
//   node "…/BipDay/setup.js" --run      # executa
// ============================================================

// ============================================================
// Seção 2 — READ (frontmatter de 01-Escopo.md)
// ============================================================
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const RUN = process.argv.includes("--run");

const escopoPath = path.join(__dirname, "01-Escopo.md");
if (!fs.existsSync(escopoPath)) {
  console.error("❌ 01-Escopo.md não encontrado em:", escopoPath);
  process.exit(1);
}
const escopo = fs.readFileSync(escopoPath, "utf8").replace(/\r\n/g, "\n");
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

const PROJECT = "bipday"; // basename válido (npm) — "rotina app" tem espaço
const PACKAGE_MANAGER = get("package_manager") || "pnpm";
const DEPENDENCIES = get("dependencies");
const MEDIA = (get("midia") || "sim").toLowerCase();
const FRONTEND_STACK = get("frontend_stack");

// Package Manager Abstraction — nunca hardcodar npm/pnpm diretamente
const pm = {
  create: (name) => {
    const flags =
      "--ts --tailwind --eslint --app --src-dir --import-alias \"@/*\" --turbopack --no-git --skip-install";
    switch (PACKAGE_MANAGER) {
      case "pnpm": return `pnpm create next-app@latest ${name} ${flags} --use-pnpm`;
      case "yarn": return `yarn create next-app ${name} ${flags}`;
      case "bun": return `bun create next-app ${name} ${flags}`;
      default: return `npx create-next-app@latest ${name} ${flags}`;
    }
  },
  add: (pkgs) => {
    switch (PACKAGE_MANAGER) {
      case "pnpm": return `pnpm add ${pkgs}`;
      case "yarn": return `yarn add ${pkgs}`;
      case "bun": return `bun add ${pkgs}`;
      default: return `npm install ${pkgs}`;
    }
  },
  addDev: (pkgs) => {
    switch (PACKAGE_MANAGER) {
      case "pnpm": return `pnpm add -D ${pkgs}`;
      case "yarn": return `yarn add -D ${pkgs}`;
      case "bun": return `bun add -d ${pkgs}`;
      default: return `npm install --save-dev ${pkgs}`;
    }
  },
};

const steps = [];

// ============================================================
// Seção 3 — STACK INIT (scaffold Next.js)
// ============================================================
steps.push(pm.create(PROJECT));
steps.push(`# mover ${PROJECT}/* -> raiz do repo; ${PACKAGE_MANAGER} install`);

// ============================================================
// Seção 4 — DEPENDENCIES (prod + dev)
// ============================================================
const prodBase =
  "gsap @gsap/react lenis zustand nuqs sonner lucide-react react-hook-form @hookform/resolvers zod @tanstack/react-query";
const prodPrisma = "@prisma/client @prisma/adapter-pg pg";
steps.push(pm.add(prodBase));
steps.push(pm.add(prodPrisma));
if (DEPENDENCIES && DEPENDENCIES !== "N/A") steps.push(pm.add(DEPENDENCIES));
steps.push(
  pm.addDev(
    "prisma vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom @playwright/test tsx dotenv @types/web-push @types/pg",
  ),
);

// ============================================================
// Seção 5 — UTILITIES (config files: .prettierrc, .editorconfig, .env.example, prisma)
// ============================================================
steps.push("# criar .prettierrc, .editorconfig, .env.example (ver 05-Dev-Log)");
steps.push("# criar prisma/schema.prisma + prisma.config.ts + src/lib/shared/prisma.ts");
steps.push(`${PACKAGE_MANAGER} exec prisma generate`);
steps.push(`${PACKAGE_MANAGER} exec prisma db push  # requer DATABASE_URL do Neon no .env`);

// ============================================================
// Seção 6 — TOOLING (SpecKit, Impeccable, Higgsfield opt-out, DX)
// ============================================================
steps.push(pm.addDev("prettier prettier-plugin-tailwindcss husky lint-staged"));
steps.push(`${PACKAGE_MANAGER} exec husky init`);
steps.push("# .husky/pre-commit -> pnpm exec lint-staged");
steps.push(
  "# SpecKit: uvx --from git+https://github.com/github/spec-kit.git specify init .  (requer uv — AUSENTE nesta máquina)",
);
steps.push("npx skills add pbakaus/impeccable");
if (MEDIA !== "nao") {
  steps.push("npx skills add higgsfield-ai/skills");
} else {
  steps.push('# Higgsfield PULADO — opt-out midia: "nao" (registrado no 05-Dev-Log)');
}
if (/next/i.test(FRONTEND_STACK)) steps.push("npx skills add vercel/next.js");

// ============================================================
// Seção 7 — CONFIRMATION
// ============================================================
console.log(`\n🚀 BipDay setup — pm=${PACKAGE_MANAGER}, midia=${MEDIA}\n`);
for (const s of steps) {
  console.log("  " + s);
  if (RUN && !s.trim().startsWith("#")) {
    try {
      execSync(s, { stdio: "inherit" });
    } catch (e) {
      console.error(`⚠️ Falha em "${s}" — revalidar via Context7/site oficial.`);
    }
  }
}
console.log(
  RUN
    ? "\n✔ setup executado. Próximos passos: preencher .env (Neon/Auth/VAPID), rodar /impeccable init no Claude Code (gera DESIGN.md), iniciar Épico 1 (auth) com TDD."
    : "\n(dry-run — use --run para executar)\n",
);
