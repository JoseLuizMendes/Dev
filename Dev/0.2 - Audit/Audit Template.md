---
template: "Code Audit Report"
version: 1.2
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
- [ ] TanStack Query para chamadas de API (SWR só como legado permitido)

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

> ⚠️ **O artefato não é um site de portfólio de desenvolvedor?** Leia
> `[[Aplicação dos Agentes por Tipo de Artefato]]` **antes** de preencher as
> tabelas abaixo. Os três agentes são escritos para portfólio; aquele documento
> traz o critério de transferência (o que avaliar, o que é `N/A` e por quê) e as
> linhas específicas por tipo de artefato — e-commerce já mapeado em §4.
>
> Sem ele, o auditor cai numa das duas saídas ruins: marcar tudo `N/A`, que é
> fuga, ou fingir que casa, que é pior.

### 3.1 Product Strategist [[ai-portfolio-product-strategist]]
| Critério | Status | Observações |
|---|---|---|
| Posicionamento claro | [ ] OK / [ ] N/A | |
| Hierarquia de informação | [ ] OK / [ ] N/A | |
| Conversão otimizada | [ ] OK / [ ] N/A | |
| Authority signals | [ ] OK / [ ] N/A | |

### 3.2 UI/UX e Motion — skills **primárias**

> **Precedência (resolvida em 2026-10-16).** O `[[CLAUDE]]` raiz define
> `[[ui-ux-pro-max]]` e `[[motion-design-engineering]]` como **primárias** em
> trabalho de UI/UX, vencendo o `[[ai-web-designer-agent]]` em divergência.
> Até aqui este §3.2 auditava só contra o agente rebaixado — auditava contra
> um padrão que o resto do cofre já considerava superado. Agora audita contra
> as primárias, e o `ai-web-designer-agent` fica no §3.2.c, no escopo em que
> continua sendo a melhor fonte: **extrair design system a partir de código**.

#### 3.2.a UI/UX — [[ui-ux-pro-max]]

Ordem de prioridade é a da própria skill: 1 é o mais crítico.

| # | Critério | Status | Observações |
|---|---|---|---|
| 1 | Acessibilidade — contraste 4.5:1, foco visível, `alt`, aria, teclado | [ ] OK / [ ] N/A | |
| 2 | Touch e interação — alvo ≥44×44, feedback, nada só-hover | [ ] OK / [ ] N/A | |
| 3 | Performance — WebP/AVIF, lazy, espaço reservado, CLS < 0,1 | [ ] OK / [ ] N/A | |
| 4 | Seleção de estilo — casa com o produto; SVG, não emoji | [ ] OK / [ ] N/A | |
| 5 | Layout e responsivo — mobile-first, sem scroll horizontal | [ ] OK / [ ] N/A | |
| 6 | Tipografia e cor — base 16px, line-height 1.5, tokens semânticos | [ ] OK / [ ] N/A | |
| 8 | Forms e feedback — label visível, erro perto do campo | [ ] OK / [ ] N/A | |
| 9 | Navegação — voltar previsível, bottom-nav ≤5, deep link | [ ] OK / [ ] N/A | |
| 10 | Charts e dados — legenda, tooltip, cor acessível | [ ] OK / [ ] N/A | |

> O item 7 da skill (animação) não se repete aqui — é o §3.2.b inteiro.

**Checklist anti-AI-slop** (a skill trata como pré-entrega; na auditoria é
verificação): sem emoji como ícone · `cursor: pointer` no clicável, com
hover/pressed/disabled distintos · contraste testado em claro **e** escuro
separadamente · alvos ≥44×44 com ≥8px entre eles · imagens com
`width/height` ou `aspect-ratio` · **tokens semânticos, sem hex cru em
componente** · testado em 375px e em landscape · body ≥16px no mobile.

#### 3.2.b Motion — [[motion-design-engineering]]

Os não-negociáveis da skill que se verificam lendo código:

| Critério | Status | Observações |
|---|---|---|
| Movimento justificado (responde "por que isso anima?") | [ ] OK / [ ] N/A | |
| Frequência manda — ação 100+×/dia não anima | [ ] OK / [ ] N/A | |
| Easing: `ease-out` ou curva custom forte; **`ease-in` em UI é bloqueio** | [ ] OK / [ ] N/A | |
| Sub-300ms salvo justificativa | [ ] OK / [ ] N/A | |
| Origem no gatilho (`transform-origin`); nunca `scale(0)` | [ ] OK / [ ] N/A | |
| Interruptível (transition/spring, não keyframe que reinicia) | [ ] OK / [ ] N/A | |
| **Só `transform` e `opacity`** — `width/height/top/left` é achado | [ ] OK / [ ] N/A | |
| `prefers-reduced-motion` honrado; hover atrás de `(hover: hover)` | [ ] OK / [ ] N/A | |

#### 3.2.c Design system extraído do código — [[ai-web-designer-agent]]

Escopo em que ele continua sendo a fonte: as quatro famílias de token e a
normalização de componente.

| Critério | Status | Observações |
|---|---|---|
| Design System consistente (fonte única) | [ ] OK / [ ] N/A | |
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

### 3.4 Específicos do tipo de artefato

> Preencher com a tabela do tipo correspondente em
> `[[Aplicação dos Agentes por Tipo de Artefato]]` §4 (e-commerce) ou §5 (demais
> tipos). Se o artefato for portfólio de desenvolvedor, marcar
> `N/A — caso base dos três agentes, já coberto em 3.1–3.3`.
>
> Se o tipo ainda não estiver mapeado naquele documento, **mapeie lá** em vez de
> improvisar aqui: improvisar foi o que custou o documento.

| Critério | Status | Observações |
|---|---|---|
| | [ ] OK / [ ] N/A | |

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
