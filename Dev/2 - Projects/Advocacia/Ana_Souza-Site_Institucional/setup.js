/**
 * setup.js — Ana Souza: Site Institucional
 * Gerado pelo Protocol-Bootstrap em 2026-04-04.
 *
 * USO:
 *   cd C:\Users\ZecaDev\Freelas
 *   node "F:\...\Dev\Dev\2 - Projects\Advocacia\Ana_Souza-Site_Institucional\setup.js"
 *
 * Lê 01-Escopo.md (no mesmo diretório deste script) e cria o scaffold
 * do projeto Next.js no diretório atual. Nenhum dado do projeto está
 * hardcoded aqui — tudo vem do frontmatter do escopo.
 *
 * REFERÊNCIAS:
 *   Escopo:   Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/01-Escopo.md
 *   Contrato: Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/02-Contrato.md
 *   Template: Dev/1 - Templates/Setup Script Template.md
 */

// ─── Seção 1 — HEADER ─────────────────────────────────────────────────────
// (ver comentário acima)

// ─── Seção 2 — READ (01-Escopo.md via __dirname) ─────────────────────────
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const escopoPath = path.join(__dirname, "01-Escopo.md");
if (!fs.existsSync(escopoPath)) {
  console.error("❌ 01-Escopo.md não encontrado em:", escopoPath);
  console.error("   Certifique-se de que o setup.js está na mesma pasta que 01-Escopo.md.");
  process.exit(1);
}

const escopo = fs.readFileSync(escopoPath, "utf8");
const frontmatterMatch = escopo.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatterMatch) {
  console.error("❌ Frontmatter YAML não encontrado em 01-Escopo.md");
  process.exit(1);
}
const frontmatter = frontmatterMatch[1];

const get = (key) => {
  const match = frontmatter.match(new RegExp(`${key}:\\s*"?([^"\\n]+)"?`));
  return match ? match[1].trim() : "";
};

const clienteRaw     = get("cliente");
const projetoRaw     = get("projeto");
const FRONTEND_STACK = get("frontend_stack");
const DEPENDENCIES   = get("dependencies");
const EMAIL_SERVICE  = get("email_service");
const CLOUD          = get("cloud_stack");

// Kebab-case sem maiúsculas — obrigatório para create-next-app
const PROJECT = (clienteRaw + "-" + projetoRaw)
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9-]/g, "");

if (!PROJECT) {
  console.error("❌ Não foi possível derivar PROJECT do frontmatter. Verifique os campos 'cliente' e 'projeto' em 01-Escopo.md.");
  process.exit(1);
}

console.log(`\n🚀 Iniciando setup: ${clienteRaw} — ${projetoRaw}`);
console.log(`   Project dir: ./${PROJECT}`);
console.log(`   Stack:       ${FRONTEND_STACK}`);
console.log(`   Deps extras: ${DEPENDENCIES || "nenhuma"}\n`);

// ─── Seção 3 — STACK INIT ─────────────────────────────────────────────────
const run = (cmd, cwd) => {
  console.log(`▶ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: cwd || process.cwd() });
};

console.log("📦 Criando projeto Next.js...");
run(`npx create-next-app@latest ${PROJECT} --typescript --tailwind --eslint --app --src-dir --no-git`);

const projectDir = path.join(process.cwd(), PROJECT);

const write = (relPath, content) => {
  const abs = path.join(projectDir, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, "utf8");
  console.log(`   ✓ ${relPath}`);
};

// ─── Seção 4 — DEPENDENCIES ───────────────────────────────────────────────
console.log("\n📦 Instalando dependências base da stack...");
run(
  "npm install gsap @gsap/react lenis zustand nuqs react-hook-form @hookform/resolvers zod sonner lucide-react",
  projectDir
);

if (DEPENDENCIES && DEPENDENCIES.toLowerCase() !== "n/a") {
  console.log(`\n📦 Instalando dependências do escopo: ${DEPENDENCIES}`);
  run(`npm install ${DEPENDENCIES}`, projectDir);
}

console.log("\n📦 Instalando dependências de desenvolvimento...");
run(
  "npm install -D vitest @vitest/ui @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom",
  projectDir
);

// ─── Seção 5 — UTILITIES (config files apenas) ───────────────────────────
console.log("\n⚙️  Escrevendo config files...");

// tsconfig.json
write("tsconfig.json", JSON.stringify({
  compilerOptions: {
    target: "ES2022",
    lib: ["dom", "dom.iterable", "esnext"],
    allowJs: false,
    skipLibCheck: true,
    strict: true,
    noUncheckedIndexedAccess: true,
    noImplicitOverride: true,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    esModuleInterop: true,
    module: "esnext",
    moduleResolution: "bundler",
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: "preserve",
    incremental: true,
    plugins: [{ name: "next" }],
    paths: { "@/*": ["./src/*"] }
  },
  include: ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  exclude: ["node_modules"]
}, null, 2));

// next.config.ts
write("next.config.ts", `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
`);

// vitest.config.ts
write("vitest.config.ts", `import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
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

Projeto criado em: ${path.join(process.cwd(), PROJECT)}

Próximos passos:
  1. cd ${PROJECT}
  2. cp .env.example .env.local  (preencher as chaves reais)
  3. npm run dev

Para iniciar o desenvolvimento:
  Abra o vault Dev → siga 04-Tarefas.md com metodologia Akita (TDD)
  Referência: Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/04-Tarefas.md
`);
