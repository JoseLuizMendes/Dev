# Dev Vault

## ⚠️ Regras Constitucionais (Anti-Alucinação) — Inegociáveis

> Estas regras precedem qualquer outra instrução deste arquivo. Lê-las e respeitá-las é pré-condição para operar no vault.

**R1 — Template Canon antes de qualquer artefato.**
Se você está prestes a produzir um artefato listado na matriz canon de `[[Master Pipeline & Enforcement]]` e ainda **NÃO LEU** o template correspondente nesta sessão (com `Read` em cima do arquivo real, não da memória), **PARE**, leia o template, e só então prossiga. Conhecimento prévio do template é insuficiente — a versão atual pode ter mudado.

**R2 — Quality Gate é verificação, não declaração.**
Antes de marcar `[x]` em qualquer checkbox de Quality Gate, você **DEVE** ter executado de fato a ação descrita. Se não executou, deixe `[ ]` e diga ao dev o que falta. Marcar `[x]` sem ter feito é mentir para o sistema.

**R3 — Sem fonte explícita, sem conteúdo inventado.**
Qualquer campo de artefato que não tenha fonte explícita (notas da call, conversa com dev, arquivo lido) **DEVE** ser preenchido como `[PENDENTE — perguntar ao dev: <pergunta específica>]`. Inventar é proibido, mesmo que "pareça óbvio".

**R4 — Master Pipeline & Enforcement é a fonte da verdade do fluxo.**
Em caso de conflito entre `[[Master Pipeline & Enforcement]]` e qualquer outro arquivo (incluindo este `CLAUDE.md`), vence o Master. Se você detectar conflito, pare e reporte ao dev — não tente conciliar sozinho.

**R5 — Gatilho desconhecido = parar e perguntar.**
Se você foi acionado por um gatilho que não está na matriz canon e não tem template canon associado, **PARE** e pergunte ao dev. Não improvise um fluxo novo para "encaixar" o pedido.

**R6 — Boot incompleto = recusar trabalho.**
Se a sessão começou sem você ter lido `INDEX.md` + `Master Pipeline & Enforcement` + `MEMORY.md` + `Preferencias Dev` + `Session Protocol`, **NENHUM** trabalho substantivo pode começar. Faça o boot primeiro, sem exceção.

**R7 — Conformidade com Preferencias Dev é mandatória.**
Antes de sugerir QUALQUER solução (biblioteca, padrão arquitetural, ferramenta, comando, estrutura de pastas, framework, dependência), você **DEVE** validar contra `[[Preferencias Dev]]` (Stack + Filosofia de Construção + Regras Inegociáveis + Estrutura de Pastas). Se a sugestão violar uma regra:
- **NÃO** sugira como se fosse aceitável.
- **PARE** e explicite qual regra está sendo violada (cite a seção exata, ex: "Preferencias Dev §Filosofia §SOLID-D").
- Pergunte ao dev: "Quer abrir exceção justificada para este caso (registrada em `[[05-Dev-Log]]`), ou prefere alternativa dentro do canon?"
- Aguarde decisão. Não improvise.

Aplica-se inclusive a sugestões em conversa casual — não só a artefatos. Vale para arquitetura (Hexagonal vs Layered), bibliotecas (Express é proibido, Fastify obrigatório), estrutura de pastas, e qualquer recomendação técnica.

**R8 — CLAUDE.md universal em toda pasta.**
Toda pasta e sub-pasta visível do repositório de código (não gitignored) DEVE ter um `CLAUDE.md` próprio gerado a partir do `[[Niche CLAUDE Template]]`. Você **NÃO** pode declarar um trabalho de scaffold/refactor "concluído" se alguma pasta ficou sem `CLAUDE.md`. Quando criar uma pasta nova durante refactor, o primeiro arquivo a criar dentro dela é o `CLAUDE.md`. Exceções automáticas (sem precisar de override): pastas geradas por ferramenta listadas no `.gitignore` (`node_modules`, `.next`, `dist`, `coverage`, `src/generated`, `playwright-report`, `test-results`). Detalhamento completo em `[[Preferencias Dev#4. CLAUDE.md Universal]]`.

---

## Escopo

Este vault é o **sistema cognitivo central** do developer. Contém metodologias, templates, memória episódica, memória imunológica de erros e skills especializadas. **Não contém código de produção** — esse fica nos repositórios dos projetos.

## Boot Obrigatório

Ao iniciar qualquer sessão, o agente DEVE:

1. Ler `INDEX.md` — mapa de navegação do vault
2. Ler `0 - Planner Project/Master Pipeline & Enforcement.md` — **matriz canon de Gatilho → Template → Output**
3. Ler `3 - Session Logs/MEMORY.md` — estado atual e decisões recentes
4. Ler `0 - Planner Project/Preferencias Dev.md` — stack e regras inegociáveis
5. Ler `0 - Planner Project/Session Protocol.md` — boot/shutdown canônico
6. Se houver projeto ativo: ler `INIT.md` da raiz do projeto (gerado via [[Project INIT Template]])

> ⚠️ **Enforcement de templates é inegociável.** Toda ação no vault que produza um artefato declarado na matriz canon DEVE usar o template canon listado. Ver `[[Master Pipeline & Enforcement]]`.

## Diretrizes Globais

- **Wikilinks `[[]]`** obrigatórios em todas as referências internas entre arquivos do vault
- **Frontmatter YAML** obrigatório em todos os arquivos de configuração e template
- **Nenhum código de produção** dentro do vault — apenas documentação cognitiva
- **Stack é definida por projeto** no `INIT.md` de cada projeto — ver [[Preferencias Dev]] para as opções aprovadas
- **Erros recorrentes** devem ser propagados de `06-Erros.md` do projeto → `4 - Error's Memory/`
- **Context7 MCP** deve ser consultado antes de usar qualquer biblioteca ou framework
- **Bootstrap de projeto novo instala tooling obrigatório** — SpecKit + Impeccable + Higgsfield (opt-out por escopo) + skills Next.js quando aplicável. Canon: [[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]] + matriz canon linha 17 de [[Master Pipeline & Enforcement]]
- **Knowledge Base condicional** — `0.4 - Knowledge Base/` não entra no boot R6; é lida conforme a stack do projeto (ver [[Dev/0.4 - Knowledge Base/INDEX|KB INDEX]])

## Stack (Variável por Projeto)

A stack é definida no `INIT.md` de cada projeto. Stacks aprovadas:

- **Principal:** TypeScript + NestJS + React/Next.js **ou** TanStack Start
- **Frameworks frontend de primeira classe:** Next.js 16+ | TanStack Start | Vue.js 3+ (matriz de decisão em [[Preferencias Dev#Frameworks Frontend de Primeira Classe]])
- **Adicionais:** C# (.NET) | Java (Spring Boot) | Angular

> Consultar [[Preferencias Dev]] para regras inegociáveis de cada tecnologia.

## Estrutura do Vault

```
Dev/
├── CLAUDE.md                     ← você está aqui (diretrizes globais)
├── INDEX.md                      ← mapa de navegação
├── 0 - Planner Project/          ← cérebro operacional (leitura obrigatória)
├── 0.1 - Methodology/            ← agentes de auditoria
├── 0.2 - Audit/                  ← templates e diretrizes de auditoria
├── 0.3 - Claude Skills Export/   ← skills especializadas
├── 0.4 - Knowledge Base/         ← conhecimento por stack (Next.js, TanStack, Impeccable, Higgsfield)
├── 1 - Templates/                ← moldes reutilizáveis
├── 2 - Projects/                 ← projetos ativos por nicho
├── 3 - Session Logs/             ← MEMORY.md + logs de sessão
├── 4 - Error's Memory/           ← memória imunológica
├── 5 - Publicações/              ← artigos e conteúdo para publicar (LinkedIn etc.)
└── 9 - Archive/                  ← projetos encerrados
```

> A estrutura canônica detalhada está em [[Cognitive Vault Architecture]].

## Entrypoints Rápidos

| Preciso de... | Ir para |
|---|---|
| Matriz Gatilho → Template (canon) | [[Master Pipeline & Enforcement]] |
| Iniciar sessão | [[Session Protocol]] |
| Onboarding de novo cliente | [[Client Onboarding Protocol]] |
| Regras da stack do projeto | [[Preferencias Dev]] + `INIT.md` do projeto |
| Registrar erro encontrado | `06-Erros.md` do projeto → [[4 - Error's Memory/INDEX]] |
| Pipeline de desenvolvimento | [[Project Lifecycle Pipeline]] |
| Skills especializadas | `0.3 - Claude Skills Export/` |
| Desenvolver com Next.js | [[Next.js Foundations (Vercel Academy)]] |
| Escolher Next vs TanStack vs Vue | [[Preferencias Dev#Frameworks Frontend de Primeira Classe]] + [[TanStack Reference]] |
| Design system / anti-AI-slop | [[Impeccable Reference]] |
| Iniciar front / referências visuais / paleta / mídia WEBP | [[Frontend Creative Protocol]] (matriz canon linha 19) |
| Gerar mídia com IA | [[Higgsfield Skills Reference]] (pago) ou [[Frontend Creative Protocol]] §Fase 6 (gratuitas) |
| Briefing completo recebido → execução automática | Matriz canon linha 18 de [[Master Pipeline & Enforcement]] |

## Testes

- TDD obrigatório em todos os projetos
- Ferramenta varia por stack (ver [[Preferencias Dev]])
- Nenhuma tarefa marcada `completed` sem testes passando

## Dependências Externas (MCPs)

- **Context7** — documentação de bibliotecas em tempo real (obrigatório)
- **Obsidian MCP** — gestão do vault via `uvx mcp-obsidian` (porta 27124)
- **MarketingCopywrite** — copywriting especializado
- **Impeccable** — skills de design para o agente (`npx skills add pbakaus/impeccable`) — [[Impeccable Reference]]
- **Higgsfield skills** — geração de mídia (`npx skills add higgsfield-ai/skills`, opt-out por escopo) — [[Higgsfield Skills Reference]]
