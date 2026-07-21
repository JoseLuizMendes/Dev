---
título: "Vault Index"
versão: 2.3
status: "Ativo"
tags:
  - index
  - navegação
  - vault
---

# Dev Vault — Índice de Navegação

> **Leia este arquivo primeiro.** Funciona com ou sem MCP do Obsidian — é navegável via sistema de arquivos puro.
> Qualquer agente deve começar aqui antes de executar qualquer tarefa.

---

## Estrutura do Vault

```
Dev/
├── INDEX.md                        ← você está aqui
├── 0 - Planner Project/            ← cérebro operacional
├── 0.1 - Methodology/              ← agentes de auditoria
├── 0.2 - Audit/                    ← templates e diretrizes de auditoria
├── 0.3 - Claude Skills Export/     ← skills especializadas
├── 0.4 - Knowledge Base/           ← conhecimento por stack (Next.js, TanStack, Impeccable, Higgsfield)
├── 1 - Templates/                  ← moldes reutilizáveis
├── 2 - Projects/                   ← projetos ativos por nicho
├── 3 - Session Logs/               ← registro de sessões
├── 4 - Error's Memory/             ← memória imunológica
├── 5 - Publicações/                ← artigos e conteúdo para publicar
└── 9 - Archive/                    ← projetos encerrados
```

---

## 0 - Planner Project (leitura obrigatória no boot)

| Arquivo | Propósito | Ler quando |
|---|---|---|
| [[Master Pipeline & Enforcement]] | **Matriz canon Gatilho → Template → Output** | **Sempre — boot de sessão (canon)** |
| [[Preferencias Dev]] | Stack aprovada, metodologia, regras inegociáveis | Sempre — boot de sessão |
| [[Session Protocol]] | Boot e shutdown canônicos de sessão | Início e fim de cada sessão |
| [[Pre-Sale Protocol]] | Notas da call → Master Project Planning preenchido | Dev compartilha notas de briefing |
| [[Spec-Kit Reference]] | Comandos `/speckit.*` + fallback manual | Sempre que rodar SDD pipeline (Fase 4) |
| [[Mock Pipeline Test]] | Fixture de aceitação — dry-run do pipeline | Ao mexer em template/protocolo |
| [[Client Onboarding Protocol]] | Orquestrador do fluxo de onboarding | Cliente devolve Master aprovado |
| [[Frontend Creative Protocol]] | Fluxo criativo do front: refs/ + paleta + ingestão de assets + mídia AVIF/WebP + SEO + segurança | Projeto com UI, antes de qualquer código de front |
| [[Backend Onboarding Protocol]] | Onboarding do back: entrevista → Tech Brief → dados PRIMEIRO → API + auth + segurança | Projeto com back, antes de qualquer código de servidor (matriz linha 22) |
| [[Deploy Protocol]] | Publicação em produção: Vercel ou VPS Hostinger (por porte) + DNS + smoke test + rollback | Front/back concluídos + UAT aprovado (matriz linha 21) |
| [[Protocol-Contract]] | Geração do contrato dinâmico | Via Client Onboarding Protocol |
| [[Protocol-Bootstrap]] | Geração do setup.js e estrutura de pastas | Via Client Onboarding Protocol |
| [[Protocol-SpecKit]] | Inicialização do Spec-Kit SDD+TDD | Via Client Onboarding Protocol |
| [[Dynamic Contract Engine]] | Lógica de cláusulas dinâmicas por classificação | Via Protocol-Contract |
| [[Project Lifecycle Pipeline]] | Fluxo completo do ciclo de vida (fases) | Referência durante desenvolvimento |
| [[Immunological Error Memory]] | Como registrar e propagar erros | Ao encontrar bugs recorrentes |
| [[Cognitive Vault Architecture]] | Arquitetura geral do vault | Ao modificar estrutura do vault |

---

## 1 - Templates (usar como base, nunca editar diretamente)

> ⚠️ **TODA ação na coluna "Usado para" exige uso do template canon.** Ver `[[Master Pipeline & Enforcement]]` para a matriz completa.

| Template | Usado para |
|---|---|
| [[Master Project Planning Template]] | Briefing apresentado ao cliente (PDF/Word) |
| [[Requirements & Scope Project Template]] | Gerar `01-Escopo.md` de cada projeto |
| [[Contract Template]] | Gerar `02-Contrato.md` via Protocol-Contract |
| [[Planning Template]] | Gerar `03-Planejamento.md` |
| [[Tasks Template]] | Gerar `04-Tarefas.md` via Protocol-SpecKit |
| [[Dev Log Template]] | Gerar `05-Dev-Log.md` via Protocol-Bootstrap |
| [[Errors Template]] | Gerar `06-Erros.md` via Protocol-Bootstrap |
| [[Setup Script Template]] | Gerar `setup.js` via Protocol-Bootstrap |
| [[Project INIT Template]] | Gerar `INIT.md` per-projeto (raiz do projeto de código) |
| [[Project Kickoff Input Template]] | Gerar `00-Input.md` — porta de entrada que starta o projeto (matriz linha 20) |
| [[Niche CLAUDE Template]] | Gerar `CLAUDE.md` em subpastas/nichos do projeto |
| [[Session Log Template]] | Gerar entradas em `3 - Session Logs/` |

---

## Quick Map — Gatilho → Template

> Atalho. Matriz completa em `[[Master Pipeline & Enforcement]]`.

| Vejo / sou acionado por... | Uso obrigatoriamente o template... |
|---|---|
| Dev compartilha notas/transcrição da call | `[[Master Project Planning Template]]` (via `[[Pre-Sale Protocol]]`) |
| Cliente devolveu o Master aprovado | `[[Requirements & Scope Project Template]]` (via `[[Client Onboarding Protocol]]`) |
| 01-Escopo aprovado → contrato | `[[Contract Template]]` + `[[Dynamic Contract Engine]]` |
| 01-Escopo aprovado → planejamento | `[[Planning Template]]` |
| Planejamento aprovado → tarefas | `[[Tasks Template]]` |
| Bootstrap do projeto (setup.js) | `[[Setup Script Template]]` |
| Bootstrap → inicializar Dev Log | `[[Dev Log Template]]` |
| Bootstrap → inicializar Erros | `[[Errors Template]]` |
| Bootstrap → gerar INIT.md per-projeto | `[[Project INIT Template]]` |
| Criando CLAUDE.md em subpasta | `[[Niche CLAUDE Template]]` |
| Fim de sessão → log | `[[Session Log Template]]` |
| Registrando erro local | `[[Errors Template]]` |
| Auditoria de código | `[[Audit Template]]` (em `Dev/0.2 - Audit/`) |
| Bootstrap concluído → instalar tooling obrigatório | `[[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]` (via `[[Protocol-Bootstrap]]` Passo 7) |
| Projeto com UI → começar o front | `[[Frontend Creative Protocol]]` (matriz canon linha 19) |
| "Vou iniciar um projeto" / `00-Input.md` entregue | `[[Project Kickoff Input Template]]` (matriz canon linha 20) → Kickoff Output (`00-DNA.md`) |
| Projeto com back → começar o servidor | `[[Backend Onboarding Protocol]]` (matriz canon linha 22) |
| Briefing completo entregue + execução autorizada | Cadeia mecânica — matriz canon linha 18 de `[[Master Pipeline & Enforcement]]` |
| Front/back concluídos + UAT → publicar | `[[Deploy Protocol]]` (matriz canon linha 21) |

---

## 0.4 - Knowledge Base (leitura condicional por stack)

> Não entra no boot obrigatório (R6). Índice completo com regra de consumo: [[Dev/0.4 - Knowledge Base/INDEX|KB INDEX]].

| Documento | Ler quando |
|---|---|
| [[Next.js Foundations (Vercel Academy)]] | Projeto com Next.js na stack (antes do `/speckit.plan`) |
| [[TanStack Reference]] | TanStack Start/Query/Router na stack, ou decisão de framework |
| [[Impeccable Reference]] | Todo projeto com UI (bootstrap + auditoria de design) |
| [[Higgsfield Skills Reference]] | Projetos que geram mídia com IA |

---

## 2 - Projects (projetos ativos)

```
2 - Projects/
└── [Nicho]/
    └── [Cliente-Projeto]/
        ├── 00-Input.md        ← kickoff input (cópia preenchida do template — linha 20)
        ├── 00-DNA.md          ← Kickoff Output: DNA + prompts + passos (gerado pelo agente)
        ├── 01-Escopo.md       ← requisitos + US + BDD
        ├── 02-Contrato.md     ← contrato dinâmico assinado
        ├── 03-Planejamento.md ← EAP, cronograma, riscos, DoD
        ├── 04-Tarefas.md      ← backlog granular TDD
        ├── 05-Dev-Log.md      ← registro de progresso
        ├── 06-Erros.md        ← erros do projeto (propagados ao global)
        └── setup.js           ← bootstrap portátil do projeto
```

**Projetos:**
- [[Dev/2 - Projects/Produtividade/BipDay/00-DNA|Produtividade / BipDay]] 🧬 Kickoff concluído (planejamento)
- [[Dev/2 - Projects/Ecommerce/Belessence/01-Escopo|Ecommerce / Belessence]] 🔧 Em Desenvolvimento
- [[Dev/2 - Projects/Portfolio/Pessoal/MendeShift/01-Escopo|Portfólio / MendeShift]] ✅ Concluído
- [[Dev/2 - Projects/Casamento/Wedding-New/01-Escopo|Casamento / Wedding-New]] ✅ Concluído

---

## 4 - Error's Memory (memória imunológica)

| Arquivo | Propósito |
|---|---|
| [[4 - Error's Memory/INDEX]] | Índice global + estatísticas |
| [[GLOBAL-ERRORS]] | Aprendizados transversais |
| `by-category/` | Erros por categoria |
| `by-stack/` | Erros por tecnologia |

---

## Entrypoints por tarefa comum

| Tarefa | Por onde começar |
|---|---|
| **Conferir matriz canon de templates** | **[[Master Pipeline & Enforcement]]** |
| **Conferir filosofia + estrutura de pastas** | **[[Preferencias Dev]]** §Filosofia de Construção + §Estrutura de Pastas |
| Cheguei da call com cliente, tenho notas | [[Pre-Sale Protocol]] |
| Comandos `/speckit.*` (referência ou fallback) | [[Spec-Kit Reference]] |
| Validar projeto (vault) | `node tools/validate-project.js "Dev/2 - Projects/[Nicho]/[Projeto]"` |
| Validar projeto + estrutura de código | `node tools/validate-project.js "Dev/2 - Projects/[Nicho]/[Projeto]" --code-path "<repo>"` |
| Testar pipeline ponta-a-ponta (dry-run) | [[Mock Pipeline Test]] |
| Novo cliente / onboarding (cliente devolveu Master) | [[Client Onboarding Protocol]] |
| Implementar tarefa do backlog | `04-Tarefas.md` do projeto → [[Preferencias Dev]] |
| Registrar erro encontrado | [[4 - Error's Memory/INDEX]] → [[Immunological Error Memory]] |
| Desenvolver com Next.js | [[Next.js Foundations (Vercel Academy)]] |
| Escolher framework (Next vs TanStack vs Vue) | [[Preferencias Dev#Frameworks Frontend de Primeira Classe]] + [[TanStack Reference]] |
| Design system / eliminar AI slop | [[Impeccable Reference]] |
| Buscar referências visuais / iniciar front | [[Frontend Creative Protocol]] (fontes de busca + sites-inspiração + refs/) |
| Iniciar um projeto novo (input → DNA) | [[Project Kickoff Input Template]] → `00-Input.md` → `00-DNA.md` |
| Desenhar o back (dados, API, auth) | [[Backend Onboarding Protocol]] (entrevista `backend-interview-agent` → Tech Brief) |
| Gerar mídia com IA | Skills SEMPRE: Higgsfield skills + [[Asset Sizing Standard]] + [[GPT-Image Prompt Galleries]] — [[Frontend Creative Protocol]] §Fase 6 (inclui alternativas gratuitas) |
| Gerar/entregar vídeo ou mídia animada | [[Asset Sizing Standard]] §Vídeo (cinematográfico, WebM+MP4, ffmpeg, Lottie; GIF proibido) |
| Publicar em produção | [[Deploy Protocol]] |
| Publicar artigo (LinkedIn) | `5 - Publicações/` |
| Gerar contrato | [[Protocol-Contract]] + [[Dynamic Contract Engine]] |
| Criar setup do projeto | [[Protocol-Bootstrap]] + [[Setup Script Template]] |
| Revisar stack aprovada | [[Preferencias Dev]] |
| Iniciar sessão | [[Session Protocol]] |

---

## Convenções do Vault

- Wikilinks `[[]]` obrigatórios em todas as referências internas
- Frontmatter YAML obrigatório em todos os arquivos de configuração e template
- Erros do projeto sempre propagados de `06-Erros.md` → `[[4 - Error's Memory/INDEX]]`
- `setup.js` de cada projeto lê `01-Escopo.md` em runtime — nunca tem conteúdo hardcoded
- Nenhum código de produção fora de `Freelas/` (o vault é cognitivo, não de código)
