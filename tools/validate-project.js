#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectPath = process.argv[2];

if (!projectPath) {
  console.error("Uso: node tools/validate-project.js \"Dev/2 - Projects/[Nicho]/[Projeto]\"");
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

function parseFrontmatter(content) {
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
  const filepath = path.join(projectPath, filename);
  if (!fs.existsSync(filepath)) {
    errors.push(`[FALTA] ${filename} nao existe no projeto`);
    return;
  }

  const content = fs.readFileSync(filepath, "utf8");

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

  if (spec.requiredSections) {
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

  if (spec.immutableClauses) {
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
    passed.push(filename);
  }
}

console.log(`\nValidando projeto: ${projectPath}\n`);

Object.entries(REQUIRED_ARTIFACTS).forEach(([filename, spec]) => {
  checkArtifact(filename, spec);
});

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
