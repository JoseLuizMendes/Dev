---
template: "Code Audit Report"
version: 1.0
status: "Template"
tags:
  - template
  - auditoria
  - qualidade
  - 3-arquivos
  - speckit-analyze
projeto: "{{PROJECT_NAME}}"
data_auditoria: "{{AUDIT_DATE}}"
auditor: "{{AUDITOR_NAME}}"
---

# 🔍 Relatório de Auditoria de Código: {{PROJECT_NAME}}

> **Propósito:** Este template padroniza a auditoria de código contra os 3 agentes norteadores e a Memória Imunológica. Use `/speckit.analyze` para gerar este relatório automaticamente.

---

## 1. Metadados da Auditoria

| Campo | Valor |
|---|---|
| **Projeto** | {{PROJECT_NAME}} |
| **Data** | {{AUDIT_DATE}} |
| **Auditor** | {{AUDITOR_NAME}} |
| **Fase do Projeto** | {{PROJECT_PHASE}} |
| **Arquivos Auditados** | {{FILES_COUNT}} |

---

## 2. Checklist de Auditoria Estrita

> **Instrução:** Marque cada item. Itens não conformes devem gerar plano de refatoração imediato.

### 2.1 Segurança de Tipos (TypeScript)
- [ ] Zero uso de `any` não justificado
- [ ] Interfaces explícitas para todas as entidades
- [ ] DTOs exportados e tipados
- [ ] `strict: true` no `tsconfig.json`

### 2.2 Arquitetura Backend (NestJS)
- [ ] Controladores sem lógica de negócios
- [ ] Services com isolamento de regras
- [ ] Injeção de Dependências correta
- [ ] Fastify como adaptador HTTP

### 2.3 Arquitetura Frontend (React/Angular)
- [ ] Componentes funcionais (React 19+)
- [ ] Hooks bem estruturados
- [ ] Separação clara: UI vs. Data fetching
- [ ] React Query ou SWR para chamadas de API

### 2.4 Styling (Tailwind + Shadcn)
- [ ] Zero CSS global (exceto bootstrap)
- [ ] Classes utilitárias em linha
- [ ] Componentes Shadcn para acessibilidade
- [ ] Tokens do `tailwind.config.ts` usados

### 2.5 Animações (GSAP + Lenis)
- [ ] `useGSAP` hook obrigatório (React)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Animações não bloqueiam main thread
- [ ] Cleanup correto de instâncias

### 2.6 Acessibilidade (WCAG 2.1 AA)
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funcional
- [ ] ARIA labels onde necessário
- [ ] Focus indicators visíveis

### 2.7 Testes
- [ ] Testes unitários (Jest) cobrindo lógica crítica
- [ ] Testes E2E (Playwright) para fluxos principais
- [ ] Cobertura mínima: {{MIN_COVERAGE}}%

---

## 3. Auditoria dos 3 Agentes Norteadores

### 3.1 Product Strategist [[ai-portfolio-product-strategist]]
| Critério | Status | Observações |
|---|---|---|
| Posicionamento claro | [ ] OK / [ ] N/A | |
| Hierarquia de informação | [ ] OK / [ ] N/A | |
| Conversão otimizada | [ ] OK / [ ] N/A | |
| Authority signals | [ ] OK / [ ] N/A | |

### 3.2 Web Designer [[ai-web-designer-agent]]
| Critério | Status | Observações |
|---|---|---|
| Design System consistente | [ ] OK / [ ] N/A | |
| Tokens de tipografia | [ ] OK / [ ] N/A | |
| Tokens de spacing | [ ] OK / [ ] N/A | |
| Tokens de motion | [ ] OK / [ ] N/A | |
| Componentes normalizados | [ ] OK / [ ] N/A | |

### 3.3 Copy Architect [[ai-portfolio-copy-architect]]
| Critério | Status | Observações |
|---|---|---|
 | Clareza da copy | [ ] OK / [ ] N/A | |
| Especificidade | [ ] OK / [ ] N/A | |
| Autoridade | [ ] OK / [ ] N/A | |
| Escaneabilidade | [ ] OK / [ ] N/A | |
| CTAs eficazes | [ ] OK / [ ] N/A | |

---

## 4. Consulta à Memória Imunológica

> **Obrigatório:** Cruzar código atual com `[[INDEX]]` da `4 - Error's Memory/`.

### Erros Conhecidos Verificados
| ERR-ID | Título | Verificado? | Prevenção Aplicada? |
|---|---|---|---|
| | | [ ] Sim / [ ] Não | [ ] Sim / [ ] Não |

### Novos Erros Encontrados
| ID | Título | Severidade | Propagado para INDEX? |
|---|---|---|---|
| | | | [ ] Sim / [ ] Não |

---

## 5. Diagnóstico Metodológico

### 5.1 Conformidades
[Listar onde o código converge com as metodologias dos 3 arquivos.]

### 5.2 Divergências
[Listar onde o código diverge das regras dos 3 arquivos.]

### 5.3 Dívida Técnica Identificada
[Descrever acoplamentos, falta de modularidade, ou anti-padrões.]

---

## 6. Plano de Refatoração

> **Regra:** Corrigir TODAS as falhas antes de adicionar novos recursos.

| # | Falha | Ação Corretiva | Prioridade | Responsável |
|---|---|---|---|---|
| 1 | | | 🔥 Alta | |
| 2 | | | 🟡 Média | |
| 3 | | | 🟢 Baixa | |

---

## 7. Aprovação para Próxima Fase

### Status da Auditoria
- [ ] **Aprovado** — Código conforme todas as regras
- [ ] **Aprovado com Resalvas** — Correções menores pendentes
- [ ] **Reprovado** — Refatoração necessária antes de continuar

### Assinaturas
**Auditor:** _______________________ **Data:** _______________

**Tech Lead:** _____________________ **Data:** _______________

---

> **Próximo Passo:** Se aprovado, continuar implementação via `/speckit.implement`. Se reprovado, executar plano de refatoração antes de qualquer novo desenvolvimento.
