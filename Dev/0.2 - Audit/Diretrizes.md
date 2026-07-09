# Diretriz de Auditoria de Código e Constituição do Projeto

> ⚠️ **GATILHO:** código-fonte submetido para auditoria (após implementação ou iterativamente durante o desenvolvimento).
> ⚠️ **TEMPLATE OBRIGATÓRIO:** `[[Audit Template]]` (em `Dev/0.2 - Audit/Audit Template.md`) — usar como base do relatório de auditoria.
> ⚠️ **OUTPUT:** Relatório de auditoria preenchido + plano de refatoração.
> ⚠️ **PRÓXIMO PASSO:** aplicação das correções até conformidade total, depois entrega.

Este documento estabelece as regras inegociáveis para orquestração, auditoria e geração de código. O agente de IA (Claude Code / OpenClaw) atuará como um auditor técnico estrito. Antes de implementar qualquer código novo, a IA deve validar a base do código-fonte contra os pilares metodológicos deste cofre.

## 1. Arquivos de Metodologia Norteadores (A Fonte da Verdade)

A IA **DEVE** obrigatoriamente ler e processar o conteúdo dos 3 documentos metodológicos abaixo através de links bidirecionais para compreender os padrões aprovados de engenharia antes de qualquer planejamento ou alteração de código:

1. **Estratégia de Produto e Negócios:** [[ai-portfolio-product-strategist]]
2. **Padrões de UI/UX, Componentes e Animação:** [[ai-web-designer-agent]]
3. **Arquitetura de Copy e Comunicação:** [[ai-portfolio-copy-architect]]

## 2. Checklist de Auditoria Estrita (Instruções para a IA)

Ao receber um código-fonte para continuação ou refatoração, a IA deve utilizar comandos de análise (como o `/speckit.analyze`) para realizar a verificação de consistência cross-artifact e aplicar os seguintes critérios baseados nas metodologias anexadas.

- [ ] **Segurança de Tipos:** O código utiliza estritamente TypeScript? A tipagem `any` está presente sem justificativa? (Em caso positivo, o código deve ser rejeitado e refatorado).
- [ ] **Gerenciamento de Pacotes:** Todas as dependências e comandos de shell propostos utilizam o gerenciador de pacotes definido (pnpm)?
- [ ] **Arquitetura Backend (se aplicável):** A lógica de negócios está isolada e obedece à Injeção de Dependências? Controladores estão livres de regras de negócio complexas?
- [ ] **Arquitetura Frontend e UI:** O design respeita as diretrizes de [[ai-web-designer-agent]]. As animações estão encapsuladas para evitar memory leaks? A estilização utiliza classes utilitárias estritas (Tailwind/Shadcn)?
- [ ] **Dívida Técnica:** O código analisado apresenta forte acoplamento ou falta de modularidade que dificultará a evolução arquitetônica?
- [ ] **Copy e Tom de Voz:** O conteúdo estático e a microcópia da interface estão alinhados às regras definidas em [[ai-portfolio-copy-architect]]?

## 3. Protocolo de Ação do Auditor

Ao realizar a auditoria do código-fonte submetido, a IA deverá compilar e entregar seu relatório usando obrigatoriamente o `[[Audit Template]]` como base, preenchendo as seguintes seções:

1. **Diagnóstico Metodológico:** Listar explicitamente onde o código fornecido converge ou diverge das regras contidas em [[ai-portfolio-product-strategist]], [[ai-web-designer-agent]] e [[ai-portfolio-copy-architect]].

2. **Identificação de Erros Históricos:** Cruzar as vulnerabilidades do código atual pesquisando via `[[4 - Error's Memory/INDEX]]` (Memória Imunológica Global) e no arquivo local para garantir que problemas, falhas de segurança ou _bugs_ documentados no passado não sejam repetidos.

3. **Plano de Refatoração:** Propor a correção imediata em código de todas as falhas de arquitetura, design e copy encontradas _antes_ de tentar adicionar ou gerar qualquer novo recurso solicitado no Planejamento.

---

## 4. Quality Gate

- [ ] **Relatório foi gerado a partir de `[[Audit Template]]` como base** (não escrito do zero)
- [ ] Os 3 agentes norteadores foram consultados (Product Strategist + Web Designer + Copy Architect)
- [ ] `[[4 - Error's Memory/INDEX]]` foi consultado para cruzar erros históricos
- [ ] Cada violação tem plano de refatoração concreto (arquivo + linha + ação proposta)
- [ ] Conformidade declarada explicitamente (✅ ou ❌ por critério)

---

## 5. Referências

- `[[Audit Template]]` — template canon do relatório (em `Dev/0.2 - Audit/`)
- `[[Master Pipeline & Enforcement]]` — matriz canon do vault
- `[[Project Lifecycle Pipeline]]` — Fase 5 (Auditoria)
- `[[4 - Error's Memory/INDEX]]` — memória imunológica global
