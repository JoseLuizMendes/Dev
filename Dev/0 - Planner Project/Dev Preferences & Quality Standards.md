---
módulo: M5
título: "Dev Preferences & Quality Standards"
versão: 1.0
status: "Ativo"
tags:
  - planner-mode
  - stack
  - qualidade
  - regras
  - phase-one
---

# M5 — Dev Preferences & Quality Standards

Este módulo funciona como a **constituição técnica** do agente de IA. Ele estabelece regras inegociáveis para seleção de dependências, arquitetura de sistemas e padrões de qualidade. O agente **DEVE** ler este documento no boot de toda sessão.

---

## ⚡ Regras Inegociáveis (Quick Reference)

| ❌ Proibido | ✅ Obrigatório |
|---|---|
| Tipo `any` em TypeScript | `strict: true` no `tsconfig.json` |
| CSS global (exceto Edge Cases) | `useGSAP` para animações no React |
| HEX Colors hardcoded no código | Fastify como adaptador HTTP no backend |
| `useEffect` para data fetching banal | Prisma ORM para manipulação de BD |
| Gerenciadores `npm`, `yarn` ou `bun` | Apenas `pnpm` permitido e Builds Docker |
| Lógica de negócios em Controladores | Uso de Services/Providers com injeção |

---

## Stack Tecnológica Aprovada

| Camada | Tecnologia | Versão Mínima |
|---|---|---|
| **Linguagem** | TypeScript | 5.x |
| **Backend** | Nestx.js (NestJS) + Fastify (Adaptador HTTP) | 10.x |
| **ORM** | Prisma | Última versão |
| **Frontend** | React.js ou Angular.js | React 19+ / Angular 17+ |
| **Styling** | Tailwind CSS + Shadcn/ui | Tailwind 3.4+ |
| **Animações** | GSAP + Lenis | GSAP 3.12+ |
| **Testes Unit/Int** | Jest | Última versão |
| **Testes E2E** | Playwright | Última versão |
| **Package Manager** | pnpm | 8.x+ |
| **Docker** | Multi-stage builds + docker-compose.yml | Última versão |
| **Pipeline SDD** | Spec-Kit (Spacify) | Última versão |
| **Orquestração MCP** | Context7 | Última versão |

---

## Regras Inegociáveis por Tecnologia

### Orquestração e Integração de IA
- **Spec-Kit (Spacify):** Todo o desenvolvimento obedece ao Spec-Driven Development (SDD). A IA utilizará os comandos do framework (como `/speckit.specify`, `/speckit.plan`, `/speckit.tasks`) para modular as fases de planejamento e garantir a criação de tarefas isoladas antes de escrever o código final.
- **Context7 (Servidor MCP):** Sempre que for necessário utilizar, atualizar ou investigar as bibliotecas da stack, o agente **DEVE** utilizar a ferramenta `query-docs` do servidor Context7 MCP para obter a sintaxe atual.

### TypeScript
- ❌ O tipo `any` é **proibido** em toda a base de código sem exceções arquitetônicas
- ✅ Interfaces explícitas obrigatórias para todas as entidades
- ✅ DTOs tipados e exportados
- ✅ `strict: true` obrigatório no `tsconfig.json`

### NestJS (Backend) & Fastify
- ✅ Fastify como adaptador HTTP principal para maximizar performance
- ✅ Arquitetura MVC/Modular com Injeção de Dependências
- ❌ **Isolamento de Negócios:** Controladores **nunca** contêm lógica de negócios, devem atuar apenas como roteadores chamando os Services (Providers).
- ✅ Repositórios isolados para acesso a dados, modelagem de banco declarativa exclusiva via `schema.prisma`.

### React.js (Frontend)
- ✅ Componentes funcionais exclusivamente (zero class components) e hooks bem estruturados
- ✅ Server Components quando aplicável
- ❌ **Separação Frontend:** Componentes de UI não devem realizar chamadas diretas a APIs misturadas na renderização. Toda chamada de rede deve possuir abstração de dados (DTOs e gerenciadores de estado).

### Tailwind CSS + Shadcn/ui
- ❌ Arquivos CSS tradicionais ou módulos CSS globais são **proibidos**.
- ✅ Design construído via classes utilitárias em linha e componentes acessíveis Shadcn.
- ✅ Conformidade WCAG obrigatória em todos os componentes.

### GSAP & Lenis (Animações)
- ✅ Hook `useGSAP` **obrigatório** no React para encapsular animações e evitar memory leaks.
- ✅ Respeitar `prefers-reduced-motion` do navegador.

### Infraestrutura, Deploy e Testes
- ❌ `npm`, `yarn` e `bun` são **banidos**. Apenas `pnpm`.
- ✅ **Docker:** Toda aplicação conteinerizada com builds multi-stage. `docker-compose.yml` providenciado para dependências locais.
- ✅ **Jest:** Testes unitários e integração no backend, testes lógicos no frontend.
- ✅ **Playwright:** Exclusivo para testes E2E resilientes no frontend.
- ✅ **Pronto para Produção:** Código nunca é "protótipo rápido". Tratamento de erros robusto e tipagem clara desde o dia 1.

---

## Regras Promovidas da Memória Imunológica

> Esta seção é atualizada automaticamente quando um erro atinge `recorrências >= 2` no `[[INDEX]]` da `4 - Error's Memory/`.

_Nenhuma regra promovida ainda. Esta seção será preenchida conforme erros recorrentes forem identificados._

---

## Referências Internas

- [[Cognitive Vault Architecture]] — Onde o Dev Preferences é referenciado
- [[Project Lifecycle Pipeline]] — Quando o agente consulta estas regras
- [[Preferencias Dev]] — Resumo executivo da stack
- [[Immunological Error Memory]] — Promoção de erros a regras permanentes
