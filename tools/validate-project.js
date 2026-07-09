#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectPath = process.argv[2];
const codePathFlagIdx = process.argv.indexOf("--code-path");
const codePath = codePathFlagIdx >= 0 ? process.argv[codePathFlagIdx + 1] : null;

if (!projectPath) {
  console.error("Uso: node tools/validate-project.js \"Dev/2 - Projects/[Nicho]/[Projeto]\" [--code-path <repo-do-codigo>]");
  console.error("Sem --code-path: valida apenas artefatos do vault.");
  console.error("Com --code-path: valida tambem estrutura de pastas do repo de codigo contra a stack do frontmatter.");
  process.exit(1);
}

if (!fs.existsSync(projectPath)) {
  console.error(`Pasta nao encontrada: ${projectPath}`);
  process.exit(1);
}

const REQUIRED_ARTIFACTS = {
  "01-Escopo.md": {
    template: "Requirements & Scope Project Template",
    requiredFrontmatter: [
      "cliente", "projeto", "nicho", "classificacao",
      "data_inicio", "data_entrega", "valor",
      "package_manager", "frontend_stack", "backend_stack",
      "cloud_stack", "dependencies",
    ],
    requiredSections: [
      "## 1. Metadados do Projeto",
      "## 2. Declaração do Problema e Visão",
      "## 3. Classificação do Serviço",
      "## 4. Requisitos Funcionais",
      "## 5. Arquitetura e Dependências",
      "## 6. Requisitos Não Funcionais",
      "## 7. Limites de Escopo e Exclusões",
    ],
  },
  "02-Contrato.md": {
    template: "Contract Template",
    requiredSections: [
      "## Objeto",
      "## Forma de Execução dos Serviços e Pagamento",
      "## Obrigações e Responsabilidades do(a) CONTRATADO(A)",
      "## Vigência",
    ],
    immutableClauses: [
      "Direitos de Propriedade Intelectual",
      "Controle de Escopo",
      "Confidencialidade",
      "Resolução de Disputas",
    ],
  },
  "03-Planejamento.md": {
    template: "Planning Template",
    requiredSections: [
      "## 1. Resumo Executivo",
      "## 2. Estrutura Analítica do Projeto",
      "## 3. Cronograma e Marcos",
      "## 4. Mapeamento da Stack",
      "## 5. ⚠️ Erros Conhecidos",
      "## 8. Definição de Pronto",
    ],
  },
  "04-Tarefas.md": {
    template: "Tasks Template",
    requiredFrontmatter: ["projeto", "cliente", "fonte"],
    requiredSections: ["## Status enum", "## Quality Gate", "## Regras de Execução"],
    requiredPatterns: [/T-\d+\.\d+/, /\[TEST\]/],
  },
  "05-Dev-Log.md": {
    template: "Dev Log Template",
    requiredFrontmatter: ["projeto", "cliente", "data_inicio"],
    requiredSections: ["## Estado Atual", "## Decisões Tomadas", "## Dependências Instaladas"],
  },
  "06-Erros.md": {
    template: "Errors Template",
    requiredFrontmatter: ["projeto", "sincronizacao"],
    requiredSections: ["## Erros do Projeto", "## Quality Gate", "## Fluxo de Propagação"],
  },
  "setup.js": {
    template: "Setup Script Template",
    requiredPatterns: [
      /path\.join\(__dirname, ["']01-Escopo\.md["']\)/,
      /const fm = /,
      /const pm = \{/,
    ],
  },
};

const errors = [];
const warnings = [];
const passed = [];

// Flags lidas do frontmatter de 01-Escopo.md (T-extra-1 e T-extra-2)
// - bootstrap: "pre-existente" | "via-protocol" (default) — pula check de setup.js
// - tipo_contrato: "auto" | "comercial" (default) — pula seções jurídicas + cláusulas imutáveis em 02-Contrato
const projectFlags = (() => {
  const escopoPath = path.join(projectPath, "01-Escopo.md");
  if (!fs.existsSync(escopoPath)) return { bootstrap: "via-protocol", tipo_contrato: "comercial" };
  const content = fs.readFileSync(escopoPath, "utf8").replace(/\r\n/g, "\n");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { bootstrap: "via-protocol", tipo_contrato: "comercial" };
  const fm = match[1];
  const bootstrapMatch = fm.match(/^bootstrap:\s*"?([^"\n]+)"?/m);
  const tipoMatch = fm.match(/^tipo_contrato:\s*"?([^"\n]+)"?/m);
  return {
    bootstrap: bootstrapMatch ? bootstrapMatch[1].trim() : "via-protocol",
    tipo_contrato: tipoMatch ? tipoMatch[1].trim() : "comercial",
  };
})();

function parseFrontmatter(content) {
  // CRLF-safe: normaliza line-endings antes de parsear (arquivos podem estar em \r\n no Windows)
  content = content.replace(/\r\n/g, "\n");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = {};
  match[1].split("\n").forEach((line) => {
    const kv = line.match(/^(\w+):\s*"?([^"]*)"?$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  });
  return fm;
}

function checkArtifact(filename, spec) {
  // T-extra-1: projetos pre-existentes (sem Protocol-Bootstrap) pulam setup.js
  if (filename === "setup.js" && projectFlags.bootstrap === "pre-existente") {
    passed.push(`${filename} (pulado — bootstrap: pre-existente)`);
    return;
  }

  // T-extra-2: auto-contratos pulam seções jurídicas + cláusulas imutáveis
  const isAutoContrato = filename === "02-Contrato.md" && projectFlags.tipo_contrato === "auto";

  const filepath = path.join(projectPath, filename);
  if (!fs.existsSync(filepath)) {
    errors.push(`[FALTA] ${filename} nao existe no projeto`);
    return;
  }

  const content = fs.readFileSync(filepath, "utf8").replace(/\r\n/g, "\n");

  if (spec.requiredFrontmatter) {
    const fm = parseFrontmatter(content);
    if (!fm) {
      errors.push(`[${filename}] sem frontmatter YAML`);
    } else {
      spec.requiredFrontmatter.forEach((field) => {
        if (!fm[field] || fm[field] === "" || fm[field].startsWith("{{")) {
          errors.push(`[${filename}] frontmatter.${field} ausente, vazio, ou ainda com placeholder {{}}`);
        }
      });
    }
  }

  if (spec.requiredSections && !isAutoContrato) {
    spec.requiredSections.forEach((section) => {
      if (!content.includes(section)) {
        errors.push(`[${filename}] seção obrigatória ausente: "${section}"`);
      }
    });
  }

  if (spec.requiredPatterns) {
    spec.requiredPatterns.forEach((pattern) => {
      if (!pattern.test(content)) {
        errors.push(`[${filename}] padrão obrigatório ausente: ${pattern}`);
      }
    });
  }

  if (spec.immutableClauses && !isAutoContrato) {
    spec.immutableClauses.forEach((clause) => {
      if (!content.toLowerCase().includes(clause.toLowerCase())) {
        warnings.push(`[${filename}] cláusula imutável "${clause}" parece ausente`);
      }
    });
  }

  const placeholders = content.match(/\{\{[A-Z_]+\}\}/g);
  if (placeholders) {
    errors.push(`[${filename}] ${placeholders.length} placeholder(s) {{}} nao substituido(s): ${placeholders.slice(0, 3).join(", ")}${placeholders.length > 3 ? "..." : ""}`);
  }

  if (errors.filter((e) => e.includes(`[${filename}]`)).length === 0) {
    if (isAutoContrato) {
      passed.push(`${filename} (auto-contrato — seções jurídicas dispensadas)`);
    } else {
      passed.push(filename);
    }
  }
}

function checkCodeStructure(codePath, fm) {
  if (!fs.existsSync(codePath)) {
    errors.push(`[CODE STRUCTURE] caminho do repo de codigo nao existe: ${codePath}`);
    return;
  }

  const fe = (fm.frontend_stack || "").toLowerCase();
  const be = (fm.backend_stack || "").toLowerCase();
  const arch = (fm.architecture || "").toLowerCase();
  const stack = `${fe} / ${be}`;

  // Detecção explícita primeiro (arquitetura no frontmatter); fallback heurístico.
  const isStandalone = arch.includes("standalone") || be.includes("standalone") || be.includes("monolito") || be.includes("sem nest") || be.includes("n/a");

  const isNext = fe.includes("next") || fe.includes("react");
  const isNest = !isStandalone && be.includes("nest");
  const isCSharp = be.includes(".net") || be.includes("asp.net") || be.includes("c#") || be.includes("dotnet");
  const isSpring = be.includes("spring") || be.includes("java");
  const isVue = fe.includes("vue");
  const isAngular = fe.includes("angular");

  const expected = [];

  if (isNext && isNest) {
    expected.push("back", "front", "shared", "infra", "pnpm-workspace.yaml");
  } else if (isNext && !isNest) {
    // Next.js Standalone Fullstack: src/app + src/lib + src/components + prisma (se Prisma)
    expected.push("src/app", "src/lib", "src/components", "package.json");
    if (be.includes("prisma")) expected.push("prisma");
  } else if (isCSharp) {
    expected.push("src", "tests");
    const srcEntries = fs.readdirSync(path.join(codePath, "src")).filter((e) =>
      fs.statSync(path.join(codePath, "src", e)).isDirectory()
    );
    const hasWeb = srcEntries.some((e) => e.endsWith(".Web"));
    const hasApp = srcEntries.some((e) => e.endsWith(".Application"));
    const hasDom = srcEntries.some((e) => e.endsWith(".Domain"));
    const hasInfra = srcEntries.some((e) => e.endsWith(".Infrastructure"));
    if (!hasWeb) errors.push(`[CODE STRUCTURE] C#: esperado projeto *.Web em src/ (Presentation)`);
    if (!hasApp) errors.push(`[CODE STRUCTURE] C#: esperado projeto *.Application em src/`);
    if (!hasDom) errors.push(`[CODE STRUCTURE] C#: esperado projeto *.Domain em src/`);
    if (!hasInfra) errors.push(`[CODE STRUCTURE] C#: esperado projeto *.Infrastructure em src/`);
    return;
  } else if (isSpring) {
    expected.push("src/main/java", "src/test/java");
  } else if (isVue) {
    expected.push("src/views", "src/components", "src/stores");
  } else if (isAngular) {
    expected.push("src/app/core", "src/app/shared", "src/app/features");
  } else {
    warnings.push(`[CODE STRUCTURE] nao foi possivel detectar a stack para validacao estrutural (frontend: ${fe || "vazio"}, backend: ${be || "vazio"})`);
    return;
  }

  expected.forEach((rel) => {
    const full = path.join(codePath, rel);
    if (!fs.existsSync(full)) {
      errors.push(`[CODE STRUCTURE] esperado "${rel}" em "${codePath}" (stack ${stack}) — nao encontrado`);
    }
  });
}

console.log(`\nValidando projeto: ${projectPath}${codePath ? `\nValidando codigo:   ${codePath}` : ""}\n`);

Object.entries(REQUIRED_ARTIFACTS).forEach(([filename, spec]) => {
  checkArtifact(filename, spec);
});

if (codePath) {
  const escopoPath = path.join(projectPath, "01-Escopo.md");
  if (fs.existsSync(escopoPath)) {
    const fm = parseFrontmatter(fs.readFileSync(escopoPath, "utf8"));
    if (fm) {
      checkCodeStructure(codePath, fm);
    } else {
      warnings.push(`[CODE STRUCTURE] nao foi possivel ler frontmatter de 01-Escopo.md para detectar stack`);
    }
  }
}

console.log("=".repeat(60));
console.log(`Resultados`);
console.log("=".repeat(60));

if (passed.length > 0) {
  console.log(`\nOK (${passed.length}):`);
  passed.forEach((f) => console.log(`  - ${f}`));
}

if (warnings.length > 0) {
  console.log(`\nAVISOS (${warnings.length}):`);
  warnings.forEach((w) => console.log(`  - ${w}`));
}

if (errors.length > 0) {
  console.log(`\nERROS (${errors.length}):`);
  errors.forEach((e) => console.log(`  - ${e}`));
  console.log(`\nProjeto FORA do canon. Veja [[Master Pipeline & Enforcement]] e re-execute os protocolos pertinentes.`);
  process.exit(1);
}

console.log(`\nProjeto VALIDADO. Conforme matriz canon do vault.`);
process.exit(0);
