// ============================================================================
// Seção 1 — HEADER
// Projeto: definido em runtime pelo frontmatter de 01-Escopo.md (cliente + projeto)
// Gerado em: 2026-09-18 via [[Protocol-Bootstrap]] a partir do [[Setup Script Template]] v3.1
// Referências: 01-Escopo.md · [[Preferencias Dev]] §Setup Automático · ERR-2026-0007 (CRLF)
// Uso:
//   cd C:\pasta\de\projetos
//   node "<vault>\Dev\2 - Projects\Saude\Dr-Gabriel-Cavalcante\setup.js" [--dir <pasta>] [--dry-run]
// Idempotente: se <pasta>/package.json já existe (repo existente), pula o scaffold (Seção 3)
// e só completa dependências, configs e tooling.
// ============================================================================

// ============================================================================
// Seção 2 — READ
// ============================================================================
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const dirArgIndex = args.indexOf("--dir");

const escopoPath = path.join(__dirname, "01-Escopo.md");
if (!fs.existsSync(escopoPath)) {
  console.error("❌ 01-Escopo.md não encontrado em:", escopoPath);
  process.exit(1);
}

// ERR-2026-0007: normalizar CRLF antes de qualquer regex.
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

const PROJECT = (get("cliente") + "-" + get("projeto"))
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");
const PKG_MGR = get("package_manager") || "npm"; // pnpm | npm | yarn | bun
const DEPENDENCIES = get("dependencies");
const MEDIA = get("midia") || "sim"; // "sim" (default) | "nao"
const FRONTEND_STACK = get("frontend_stack");

if (!/^[a-z0-9-]+$/.test(PROJECT)) {
  console.error("❌ Nome de projeto inválido (kebab-case esperado):", PROJECT);
  process.exit(1);
}

const projectDir = dirArgIndex >= 0 ? path.resolve(args[dirArgIndex + 1]) : path.resolve(process.cwd(), PROJECT);

// Fonte: https://pnpm.io/cli/add | https://nextjs.org/docs/app/getting-started/installation
const pm = {
  create: (name) => {
    const flags = "--typescript --tailwind --eslint --app --src-dir --no-git";
    switch (PKG_MGR) {
      case "pnpm": return `pnpm create next-app@latest ${name} ${flags}`;
      case "yarn": return `yarn create next-app ${name} ${flags}`;
      case "bun": return `bun create next-app ${name} ${flags}`;
      default: return `npx create-next-app@latest ${name} ${flags}`;
    }
  },
  add: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add ${pkgs}`;
      case "yarn": return `yarn add ${pkgs}`;
      case "bun": return `bun add ${pkgs}`;
      default: return `npm install ${pkgs}`;
    }
  },
  addDev: (pkgs) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm add -D ${pkgs}`;
      case "yarn": return `yarn add -D ${pkgs}`;
      case "bun": return `bun add -d ${pkgs}`;
      default: return `npm install --save-dev ${pkgs}`;
    }
  },
  exec: (cmd) => {
    switch (PKG_MGR) {
      case "pnpm": return `pnpm exec ${cmd}`;
      case "yarn": return `yarn ${cmd}`;
      case "bun": return `bunx ${cmd}`;
      default: return `npx ${cmd}`;
    }
  },
};

const run = (cmd, label, cwd = projectDir, env = {}) => {
  console.log(`\n🔧 ${label}\n   $ ${cmd}`);
  if (DRY_RUN) return true;
  try {
    execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, ...env } });
    return true;
  } catch {
    console.error(`⚠️ Falha em "${label}" — revalidar comando via Context7/site oficial e atualizar a KB.`);
    return false;
  }
};

const writeFile = (rel, content, { overwrite = false } = {}) => {
  const target = path.join(projectDir, rel);
  if (fs.existsSync(target) && !overwrite) {
    console.log(`   ↷ ${rel} já existe — mantido`);
    return;
  }
  console.log(`   ✎ ${rel}`);
  if (DRY_RUN) return;
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
};

console.log(`\n📦 Projeto: ${PROJECT}\n📁 Destino: ${projectDir}\n🧰 Package manager: ${PKG_MGR}${DRY_RUN ? "\n🧪 DRY RUN — nada será executado" : ""}`);

// ============================================================================
// Seção 3 — STACK INIT
// ============================================================================
const isExisting = fs.existsSync(path.join(projectDir, "package.json"));
if (isExisting) {
  console.log("\n⏭️ package.json encontrado — repositório existente, scaffold PULADO.");
} else {
  run(pm.create(path.basename(projectDir)), "Scaffold Next.js", path.dirname(projectDir));
}

// ============================================================================
// Seção 4 — DEPENDENCIES
// ============================================================================
const BASE_PROD = "gsap @gsap/react lenis sonner lucide-react react-hook-form @hookform/resolvers zod";
const BASE_DEV = "vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom";
const DEV_PATTERN = /^(@playwright\/|@types\/|drizzle-kit$|vitest|@testing-library\/)/;

const extras = DEPENDENCIES && DEPENDENCIES !== "N/A" ? DEPENDENCIES.split(/\s+/).filter(Boolean) : [];
const extraProd = extras.filter((p) => !DEV_PATTERN.test(p));
const extraDev = extras.filter((p) => DEV_PATTERN.test(p));

run(pm.add(BASE_PROD), "Stack base (prod)");
run(pm.addDev(BASE_DEV), "Stack base (dev/testes)");
if (extraProd.length) run(pm.add(extraProd.join(" ")), "Dependências extras do escopo (prod)");
if (extraDev.length) run(pm.addDev(extraDev.join(" ")), "Dependências extras do escopo (dev)");

// ============================================================================
// Seção 5 — UTILITIES (config files)
// ============================================================================
console.log("\n🗂️ Arquivos de configuração");

// tsconfig.json — MERGE (strict obrigatório)
const tsconfigPath = path.join(projectDir, "tsconfig.json");
if (fs.existsSync(tsconfigPath) && !DRY_RUN) {
  const ts = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
  ts.compilerOptions = { ...ts.compilerOptions, strict: true };
  fs.writeFileSync(tsconfigPath, JSON.stringify(ts, null, 2) + "\n");
  console.log("   ✎ tsconfig.json (merge: strict)");
}

writeFile(
  "vitest.config.ts",
  `import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    environmentOptions: { jsdom: { url: "http://localhost" } },
    exclude: ["e2e/**", "node_modules/**"],
  },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
`,
);
writeFile("src/test/setup.ts", `import "@testing-library/jest-dom/vitest";\n`);
writeFile(
  ".env.example",
  `# Banco (Neon) — pooled para o app, direto para migrações\nDATABASE_URL=\nDATABASE_URL_UNPOOLED=\nNEON_BRANCH=dev\n\n# Sessão (mín. 32 caracteres)\nJWT_SECRET=\n\n# Mídia (servidor)\nCLOUDINARY_CLOUD_NAME=\nCLOUDINARY_API_KEY=\nCLOUDINARY_API_SECRET=\n`,
);
writeFile(
  ".prettierrc",
  `{\n  "semi": true,\n  "singleQuote": false,\n  "printWidth": 100,\n  "plugins": ["prettier-plugin-tailwindcss"]\n}\n`,
);
writeFile(
  ".editorconfig",
  `root = true\n\n[*]\nindent_style = space\nindent_size = 2\nend_of_line = lf\ninsert_final_newline = true\n`,
);

// package.json — MERGE (lint-staged)
const pkgPath = path.join(projectDir, "package.json");
if (fs.existsSync(pkgPath) && !DRY_RUN) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
  pkg["lint-staged"] = pkg["lint-staged"] || {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{md,json,css}": ["prettier --write"],
  };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
  console.log("   ✎ package.json (merge: lint-staged)");
}

// ============================================================================
// Seção 6 — TOOLING
// ============================================================================
run("uvx --from git+https://github.com/github/spec-kit.git specify init --here --force --non-interactive --integration claude --script ps --ignore-agent-tools", "SpecKit (specify init)");
run("npx -y skills add pbakaus/impeccable --agent claude-code -y", "Impeccable (skills)");

if (MEDIA !== "nao") {
  run("npx -y skills add higgsfield-ai/skills --agent claude-code -y", "Higgsfield skills");
} else {
  console.log('\n⏭️ Higgsfield PULADO — opt-out midia: "nao" no 01-Escopo.md (registrar no 05-Dev-Log).');
}

if (/next/i.test(FRONTEND_STACK)) {
  // Windows: o clone do repo vercel/next.js estoura MAX_PATH sem core.longpaths (só neste processo).
  run("npx -y skills add vercel/next.js --agent claude-code -y", "Skills Next.js (oficiais)", projectDir, {
    GIT_CONFIG_COUNT: "1",
    GIT_CONFIG_KEY_0: "core.longpaths",
    GIT_CONFIG_VALUE_0: "true",
  });
}

// DX obrigatória — canon: Preferencias Dev §Dependências Obrigatórias de DX
run(pm.addDev("prettier prettier-plugin-tailwindcss husky lint-staged"), "DX (prettier + tailwind sort + husky + lint-staged)");
run(pm.exec("husky init"), "Husky (git hooks)");
writeFile(".husky/pre-commit", `${pm.exec("lint-staged")}\n`, { overwrite: true });

// Smoke test
const smokeOk = run(`${PKG_MGR} test`, "Smoke test (vitest)");

// ============================================================================
// Seção 7 — CONFIRMATION
// ============================================================================
console.log(`
${smokeOk ? "✅" : "⚠️"} Setup ${DRY_RUN ? "(dry run) " : ""}concluído para ${PROJECT}.

Próximos passos:
  1. Copie o INIT.md para a raiz do projeto (se ainda não estiver lá).
  2. Abra o projeto no Claude Code e rode /impeccable init (gera PRODUCT.md; o DESIGN.md nasce na T-2.2).
  3. Preencha o .env a partir do .env.example (branch Neon "dev" para desenvolvimento).
  4. Siga o 04-Tarefas.md a partir da T-0.1 com /speckit-specify.
`);
