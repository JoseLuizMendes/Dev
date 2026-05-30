# Memória Episódica — Índice Curado

> Este arquivo é a **Camada 2** do sistema de memória. O agente DEVE lê-lo no boot de toda sessão. Ele é atualizado ao final de cada sessão pela destilação dos logs brutos da Camada 1.
>
> Protocolo completo: [[Session Protocol]]

---

## Estado Atual

- **Projeto em andamento:** Sentinel-Flow (Automação) — em desenvolvimento
- **Fase:** Manutenção do vault cognitivo + pente fino de enforcement
- **Último progresso:** Pente fino completo do vault — Master Pipeline & Enforcement criado, 5 templates novos, protocolos blindados (2026-05-30)

---

## Decisões Recentes

- [2026-05-30] **Pente fino completo do vault** executado conforme `[[docs/superpowers/specs/2026-05-30-vault-pente-fino-design]]`
- [2026-05-30] Criado `[[Master Pipeline & Enforcement]]` como fonte da verdade da matriz Gatilho → Template → Output
- [2026-05-30] 5 novos templates criados: `[[Tasks Template]]`, `[[Dev Log Template]]`, `[[Errors Template]]`, `[[Project INIT Template]]`, `[[Niche CLAUDE Template]]`
- [2026-05-30] Todos os protocolos (`[[Client Onboarding Protocol]]`, `[[Protocol-Contract]]`, `[[Protocol-Bootstrap]]`, `[[Protocol-SpecKit]]`, `[[Session Protocol]]`, `[[Immunological Error Memory]]`, `[[0.2 - Audit/Diretrizes]]`) blindados com banner ⚠️ + sub-fluxograma Mermaid + checkbox de template no Quality Gate
- [2026-05-30] Frontmatter do `[[Requirements & Scope Project Template]]` sincronizado com campos lidos por `setup.js` (projeto, package_manager, frontend_stack, backend_stack, cloud_stack, dependencies, email_service, storage_service, payment_gateway)
- [2026-05-30] `[[Session Protocol]]` marcado como canon único de boot/shutdown
- [2026-05-30] `[[TOON-PROMPT]]` limpo: removidos comandos CLI aspiracionais (`npx dev init/bootstrap/mcp`), template inline de claude.md substituído por link ao `[[Niche CLAUDE Template]]`, lista hardcoded de skills delegada à pasta `0.3`
- [2026-05-30] Criado `[[Pre-Sale Protocol]]` cobrindo a fase antes do onboarding: dev faz call → entrega notas para IA → IA produz Master Project Planning preenchido + pendências
- [2026-05-30] Criado `[[Spec-Kit Reference]]` com documentação de `/speckit.specify`, `.plan`, `.tasks`, `.implement`, `.analyze` + fallback manual para cada um
- [2026-05-30] `cognitive-vault-manager/SKILL.md` alinhado: boot section agora REFERENCIA `[[Session Protocol]]` ao invés de redefinir 4 passos divergentes
- [2026-05-30] `[[Master Project Planning Template]]` — nota de uso esclarece que o DEV preenche (via Pre-Sale Protocol) a partir das notas da call; cliente recebe para revisão/aprovação
- [2026-05-30] **Camada 3 de blindagem aplicada — anti-alucinação mecânica:**
  - 6 regras constitucionais (R1-R6) adicionadas ao topo do `[[CLAUDE]]` raiz
  - `[[Mock Pipeline Test]]` criado em `0 - Planner Project/` — fixture com cliente fake (TestCorp Advocacia) + outputs esperados por estágio para dry-run de aceitação
  - `tools/validate-project.js` criado — script Node sem deps que valida frontmatter, seções obrigatórias, placeholders órfãos e cláusulas imutáveis de qualquer projeto em `2 - Projects/`
  - Prosa reduzida em Master Project Planning + Requirements & Scope: campos `[Descreva X]` viraram subdimensões estruturadas (quem sente / sintoma / causa / impacto), diminuindo superfície de alucinação
- [2026-03-31] Vault auditado e inconsistências corrigidas via MCP do Obsidian
- [2026-03-31] `Preferencias Dev.md` confirmado preenchido (v3.0)
- [2026-03-31] `INDEX.md` sincronizado com entradas do `GLOBAL-ERRORS.md`
- [2026-03-21] Estrutura do vault decomposta em 6 módulos independentes conforme [[Cognitive Vault Architecture]]
- [2026-03-21] Sistema de Memória Imunológica implementado com indexação dupla (by-category + by-stack) conforme [[Immunological Error Memory]]

---

## Problemas em Aberto

- [ ] Validar o pipeline SDD + enforcement de templates com Sentinel-Flow como projeto-piloto
- [ ] Próxima rodada: melhorias em `[[Preferencias Dev]]` (já agendada com o usuário)

---

## Problemas Resolvidos nesta rodada (2026-05-30)

- [x] Boot sequence divergia entre `[[Session Protocol]]` (6 passos) e `cognitive-vault-manager/SKILL` (4 passos) — `Session Protocol` agora é canon explícito; `cognitive-vault-manager/SKILL.md` atualizado para apenas REFERENCIAR (não redefinir)
- [x] Templates faltantes para `04-Tarefas.md`, `05-Dev-Log.md`, `06-Erros.md`, `INIT.md` per-projeto e `CLAUDE.md` por nicho — todos criados em `1 - Templates/`
- [x] Frontmatter do Requirements & Scope incompleto para o `setup.js` — sincronizado
- [x] Trigger → Template não declarativo nos protocolos — todos os protocols ganharam banner ⚠️
- [x] Fluxograma global ausente — `[[Master Pipeline & Enforcement]]` criado com Mermaid macro + matriz canon
- [x] Pré-onboarding (gap antes do briefing existir) — `[[Pre-Sale Protocol]]` criado cobrindo: dev compartilha notas da call → IA produz Master Project Planning preenchido + pendências
- [x] Comandos `/speckit.*` não documentados — `[[Spec-Kit Reference]]` criado com cada comando + fallback manual
- [x] Ambiguidade "quem preenche o Master Project Planning Template" — nota de uso esclarecida (dev preenche via Pre-Sale Protocol, cliente recebe para aprovação)
- [x] Enforcement só em markdown (honor-system) — adicionada camada de regras constitucionais (R1-R6) no CLAUDE.md raiz + validator script Node em `tools/` + fixture de aceitação `[[Mock Pipeline Test]]`
- [x] Campos de prosa livre nos templates críticos viram superfície de alucinação — Master + Requirements & Scope tiveram prosa substituída por subdimensões estruturadas

---

## Lições Aprendidas

- O banner `⚠️ GATILHO + TEMPLATE OBRIGATÓRIO + OUTPUT + PRÓXIMO PASSO` no topo de cada protocolo é o mecanismo mais eficaz de enforcement — a IA lê antes de qualquer ação
- Mermaid renderiza nativo no Obsidian e GitHub, então é o formato ideal pra sub-fluxogramas
- Quality Gate com primeiro checkbox sendo "artefato gerado a partir do template canon" cria amarra textual que é difícil ignorar
- MCP do Obsidian configurado com sucesso via `uvx mcp-obsidian` + Local REST API (porta 27124)
- Config do Claude Desktop deve usar `uvx` e não `npx` para o servidor `mcp-obsidian`
