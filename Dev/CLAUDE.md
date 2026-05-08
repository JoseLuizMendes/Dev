# Dev Vault

## Escopo

Este vault é o **sistema cognitivo central** do developer. Contém metodologias, templates, memória episódica, memória imunológica de erros e skills especializadas. **Não contém código de produção** — esse fica nos repositórios dos projetos.

## Boot Obrigatório

Ao iniciar qualquer sessão, o agente DEVE:

1. Ler `INDEX.md` — mapa de navegação do vault
2. Ler `3 - Session Logs/MEMORY.md` — estado atual e decisões recentes
3. Ler `0 - Planner Project/Preferencias Dev.md` — stack e regras inegociáveis
4. Se houver projeto ativo: ler `INIT.md` da raiz do projeto (ver [[TOON-PROMPT]] para o template)

## Diretrizes Globais

- **Wikilinks `[[]]`** obrigatórios em todas as referências internas entre arquivos do vault
- **Frontmatter YAML** obrigatório em todos os arquivos de configuração e template
- **Nenhum código de produção** dentro do vault — apenas documentação cognitiva
- **Stack é definida por projeto** no `INIT.md` de cada projeto — ver [[Preferencias Dev]] para as opções aprovadas
- **Erros recorrentes** devem ser propagados de `06-Erros.md` do projeto → `4 - Error's Memory/`
- **Context7 MCP** deve ser consultado antes de usar qualquer biblioteca ou framework

## Stack (Variável por Projeto)

A stack é definida no `INIT.md` de cada projeto. Stacks aprovadas:

- **Principal:** TypeScript + NestJS + React/Next.js
- **Adicionais:** C# (.NET) | Java (Spring Boot) | Vue.js 3+ | Angular

> Consultar [[Preferencias Dev]] para regras inegociáveis de cada tecnologia.

## Estrutura do Vault

```
Dev/
├── CLAUDE.md                     ← você está aqui (diretrizes globais)
├── INDEX.md                      ← mapa de navegação
├── 0 - Planner Project/          ← cérebro operacional (leitura obrigatória)
├── 0.1 - Metodology/             ← agentes de auditoria
├── 0.2 - Audit/                  ← templates e diretrizes de auditoria
├── 0.3 - Claude Skills Export/   ← skills especializadas
├── 1 - Templates/                ← moldes reutilizáveis
├── 2 - Projects/                 ← projetos ativos por nicho
├── 3 - Session Logs/             ← MEMORY.md + logs de sessão
├── 4 - Error's Memory/           ← memória imunológica
└── 9 - Archive/                  ← projetos encerrados
```

> A estrutura canônica detalhada está em [[Cognitive Vault Architecture]].

## Entrypoints Rápidos

| Preciso de... | Ir para |
|---|---|
| Iniciar sessão | [[Session Protocol]] |
| Onboarding de novo cliente | [[Client Onboarding Protocol]] |
| Regras da stack do projeto | [[Preferencias Dev]] + `INIT.md` do projeto |
| Registrar erro encontrado | `06-Erros.md` do projeto → [[4 - Error's Memory/INDEX]] |
| Pipeline de desenvolvimento | [[Project Lifecycle Pipeline]] |
| Skills especializadas | `0.3 - Claude Skills Export/` |

## Testes

- TDD obrigatório em todos os projetos
- Ferramenta varia por stack (ver [[Preferencias Dev]])
- Nenhuma tarefa marcada `completed` sem testes passando

## Dependências Externas (MCPs)

- **Context7** — documentação de bibliotecas em tempo real (obrigatório)
- **Obsidian MCP** — gestão do vault via `uvx mcp-obsidian` (porta 27124)
- **MarketingCopywrite** — copywriting especializado
