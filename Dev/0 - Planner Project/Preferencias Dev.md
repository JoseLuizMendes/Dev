---
título: "Preferências Dev & Constituição Arquitetônica"
versão: 1.1
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
  - constitution
---

# Preferências Dev & Constituição Arquitetônica

> Este documento atua como a constituição técnica (`constitution.md`) para os projetos. Ele define as regras inegociáveis, a stack tecnológica padrão e as práticas de engenharia que o agente de IA deve seguir rigorosamente durante o desenvolvimento de software.

---

## 1. Stack Tecnológica Padrão (Projetos Pequenos/Médios)

A arquitetura deve seguir a stack definida abaixo, orientada a alta performance, escalabilidade modular e tipagem estrita.

### Backend & Dados
- **Nestx.js (NestJS):** Framework backend primário, estruturado via Injeção de Dependências e arquitetura MVC/Modular.
- **Fastify:** Deve ser configurado como o adaptador HTTP principal do NestJS (substituindo o Express padrão) para maximizar o throughput e a performance das requisições.
- **Prisma ORM:** ORM padrão para projetos pequenos e médios. Toda a modelagem de banco de dados deve ser declarativa, feita unicamente no arquivo `schema.prisma`.

### Frontend & UI
- **React.js / Angular.js:** Frameworks primários. Para React, focar no uso restrito de componentes funcionais e hooks bem estruturados.
- **Tailwind CSS + Shadcn UI:** Sistema de design padrão. A geração de arquivos CSS tradicionais é desencorajada; o design deve ser construído via classes utilitárias e componentes semânticos acessíveis do Shadcn.
- **GSAP & Lenis:** Bibliotecas para animações complexas baseadas em cronogramas e manipulação suave de rolagem (smooth scroll). A IA deve encapsular todas as animações (usando o hook `useGSAP` no React, por exemplo) para evitar memory leaks.

### Qualidade & Testes
- **TypeScript:** Linguagem obrigatória em toda a stack (Frontend e Backend). A geração de código utilizando o tipo `any` sem justificativa arquitetônica é estritamente proibida.
- **Jest:** Utilizado para a criação de testes unitários e de integração no backend, bem como testes de lógicas isoladas no frontend.
- **Playwright:** Utilizado exclusivamente para automação de testes End-to-End (E2E) no frontend, garantindo a resiliência e o funcionamento correto dos fluxos críticos de interface.

### Infraestrutura & Deploy
- **pnpm:** Gerenciador de pacotes rápido e determinístico. O uso de `npm` e `yarn` é banido em todas as instruções de setup.
- **Docker:** Toda aplicação deve ser conteinerizada. A IA deve gerar arquivos `Dockerfile` otimizados utilizando builds de múltiplos estágios (multi-stage builds) para manter as imagens leves. Além disso, deve prover o arquivo `docker-compose.yml` para orquestrar dependências locais (como instâncias de banco de dados).

---

## 2. Orquestração e Integração de IA

As ações do agente de IA (Claude Code / OpenClaw) devem ser limitadas e orientadas pelas seguintes ferramentas de orquestração:

- **Spec-Kit (Spacify):** Todo o desenvolvimento obedece ao Spec-Driven Development (SDD). A IA utilizará os comandos do framework (como `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`) para modular as fases de planejamento e garantir a criação de tarefas isoladas antes de escrever o código final.
- **Context7 (Servidor MCP):** Sempre que for necessário utilizar, atualizar ou investigar as bibliotecas da stack (como implementações recentes do Next.js, Fastify ou Prisma), o agente **DEVE** utilizar a ferramenta `query-docs` do servidor Context7 MCP. Essa ferramenta puxa documentações frescas em tempo real direto da fonte, eliminando alucinações sobre sintaxes desatualizadas e garantindo sugestões de código 100% precisas.

---

## 3. Diretrizes de Código Inegociáveis

- **Isolamento de Negócios:** Toda regra de negócio do backend deve viver nas camadas de Services (Providers), nunca vazando para os Controllers.
- **Separação Frontend:** Componentes de UI não devem realizar chamadas diretas a APIs misturadas na renderização. Toda chamada de rede deve possuir uma camada de abstração de dados (ex: uso de DTOs tipados e gerenciadores de estado de requisição).
- **Pronto para Produção:** O código gerado nunca deve assumir o caráter de "protótipo rápido". Ele deve incluir tratamento de erros robusto, tipagem clara de retornos e logs consistentes desde o primeiro commit.

---

## Documentos Norteadores (Metodologia dos 3 Arquivos)

Estes são específicos de um projeto de portfólio, mas seus princípios e skills devem ser aproveitados:
- [[ai-portfolio-product-strategist]] — Estratégia de produto e posicionamento
- [[ai-web-designer-agent]] — Design, UX e implementação visual
- [[ai-portfolio-copy-architect]] — Copy, microtextos e comunicação
