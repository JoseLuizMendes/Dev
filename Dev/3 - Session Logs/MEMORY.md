# Memória Episódica — Índice Curado

> Este arquivo é a **Camada 2** do sistema de memória. O agente DEVE lê-lo no boot de toda sessão. Ele é atualizado ao final de cada sessão pela destilação dos logs brutos da Camada 1.
>
> Protocolo completo: [[Session Protocol]]

---

## Estado Atual

- **Projeto em andamento:** **Belessence (Mari Beauty)** — **Refatoração Full-stack COMPLETA + Verificação Final OK**
- **Fase:** Rodadas 1-4 fechadas. Épico 5 (Verificação Final): validator passa, Playwright E2E 33/33 ✅, Lighthouse e smoke manual pendentes localmente.
- **Último progresso:** Validator evoluído (`tools/validate-project.js`) com 3 flags novas no frontmatter: `bootstrap`, `tipo_contrato`, `architecture`. Belessence agora passa 7/7 OK + 0 erros. Playwright instalado (chromium) e suite full passou: 33 tests em 1.3min (Desktop Chrome + Mobile Pixel 7). Aprendizado: os "10 flakes" do baseline são test bugs reais — `order-status-form.test.tsx` usa `user.selectOptions` em Radix Select (shadcn), que não funciona; pra `<select>` nativo só. Registrado como T-extra-3.

---

## Decisões Recentes

- [2026-05-30] **Belessence — Épico 5 (Verificação Final):**
  - **Validator evoluído** com 3 flags opcionais no frontmatter (`bootstrap`, `tipo_contrato`, `architecture`) — documentado em `tools/README.md`. Belessence (auto-contrato + pre-existente + Next.js Standalone) agora passa 7/7 OK sem erros.
  - **Bug detectado no validator:** detecção de Next.js Standalone confundia "sem NestJS" no `backend_stack` com presença de NestJS (string match `.includes("nest")`). Fixado: heurística agora exclui `"sem nest"`, `"standalone"`, `"monolito"`, `"n/a"`; flag explícita `architecture` no frontmatter sobrescreve.
  - **Playwright E2E full passou:** instalado chromium binary (`pnpm exec playwright install chromium`), suite total 33/33 verde em 1.3min (Desktop Chrome + Mobile Pixel 7) — cobre Homepage, Cart, Catálogo, Coleções, Produto, Checkout, Admin CRUD, Admin auth, Static pages, Contact, Help, Search, Meus Pedidos.
  - **Diagnóstico dos "10 flakes":** investigação revelou que NÃO são flakes — são test bugs em `src/test/order-status-form.test.tsx`. Os testes usam `user.selectOptions` que só funciona em `<select>` HTML nativo, mas o componente usa Radix Select (shadcn) que renderiza `<button role="combobox">` com opções em portal. Fix correto: reescrever testes pra padrão Radix (`user.click(trigger)` + `user.click(option)`). Registrado como T-extra-3 em `05-Dev-Log.md`.
  - **Lighthouse e smoke manual:** pendentes pra execução local. `pnpm start` (Next 16 prod) não bindou porta no ambiente desta sessão.
- [2026-05-30] **Belessence — Rodada 4 (Hexagonal em src/lib/) — COMPLETA:**
  - 10 sub-rodadas executadas em sequência (4.1 → 4.10) com TDD light (tsc + Vitest a cada commit).
  - 11 bounded contexts criados em `src/lib/`: `shared/` (Prisma singleton + Zod schemas), `design/` (OKLCH tokens), `motion/` (GSAP helpers), `products/` (catálogo + status + image), `cart/` (privado por usuário), `wishlist/` (privado por usuário), `auth/` (Auth.js v5 + admin TOTP + Arctic OAuth), `coupons/`, `shipping/` (ViaCEP), `payment/` (Mercado Pago), `reviews/`.
  - **Hexagonal soft:** cada bounded context usa as camadas que fazem sentido (Domain + Infrastructure + Presentation), sem forçar application/use-cases/ports onde não há duplicação. Promoção tardia permitida quando virar dor.
  - **R8 satisfeita:** CLAUDE.md em cada nova pasta de bounded context + cada camada hex (~30 arquivos criados nesta rodada).
  - **Aprendizado importante:** mocks globais em `src/test/setup.ts` (vi.mock by path string) precisam ser atualizados ao mover arquivos referenciados. Registrado em 4.1; aplicado em todas as sub-rodadas subsequentes.
  - **`src/lib/` top-level vazio** ao final — todos os arquivos viraram bounded contexts. `ls src/lib/*.ts` retorna "No such file or directory".
- [2026-05-30] **Belessence — Rodada 3 (rename src/api/) — COMPLETA:**
  - `git mv src/api → src/shadcn-utils` + atualização de `components.json` (aliases utils + lib) + replace em ~200 imports `@/api/` → `@/shadcn-utils/`. Validação: testes verdes (baseline mantido), build verde.
- [2026-05-30] **Belessence — Rodada 2 (Limpeza + CLAUDE.md universal):**
  - **Limpeza de package managers:** `package-lock.json` + `pnpm-lock.yaml.110687101` deletados. `.gitignore` ganhou `package-lock.json`, `yarn.lock`, `bun.lockb`, `pnpm-lock.yaml.*` (preventivo), e `/src/generated` (cobrindo todo o Prisma client). `pnpm install` validou: name = `mari-beauty`, Prisma generate OK.
  - **TypeScript hardening:** `noImplicitOverride: true` adicionado ao `tsconfig.json`; `tsc --noEmit` passou sem erros (nenhuma classe do projeto tinha override implícito).
  - **Trash dir:** órfãos do parent dir Belessence movidos pra `Belessence/trash/`: `m.png`, `m_figma.png`, `m_traced.svg`, `m_path.txt`, `code.html`, `screen.png`, `trace_m.py`, `trace_m2.py`, 6× `stitch_mari_beauty_home_desktop`.
  - **Consolidação `.agents`/`_agents`:** havia uma cópia no parent dir Belessence e outra dentro do repo Next.js. Em ambas: `_agents/output/*` (auditorias UI) movidos pra `.agents/output/`, `_agents/docs/inspiration/*` movidos pra `.agents/inspiration/` (apenas no repo Next.js), `_agents/TODO's/` e `_agents/docs/` (que duplicava Dev/0.1 - Methodology/, à época grafada "Metodology") movidos pra `trash/agents-legacy/` e `trash/agents-legacy-project/`. `_agents/` deletados em ambos os níveis.
  - **`tools/generate-claude-md.js` criado:** gerador Node sem deps que walks o repo (excluindo gitignored), detecta a categoria de cada pasta (route-handler, app-public-route, app-admin-route, vendor, github, etc) e cria um `CLAUDE.md` apropriado usando `[[Niche CLAUDE Template]]` como base. Não sobrescreve existentes. Resultado: 89 pastas no repo, 14 já tinham CLAUDE.md, 75 criados — R8 100% satisfeita.
- [2026-05-30] **Belessence — Rodada 1 (Vault Refresh):**
  - Auditoria do repo Belessence vs vault identificou 14 desvios. Plan em `C:\Users\ADM\.claude\plans\f-1-zeca-1-repositorio-documentos-meusp-foamy-barto.md` sequencia em 4 rodadas (vault → limpeza → rename src/api/ → Hexagonal).
  - `[[Preferencias Dev]]` ganhou: variante "Next.js Standalone Fullstack — Layered" + variante "— Hexagonal" + §Stack Estendida — Ecommerce (Auth.js v5, Arctic, adapter-pg, bcryptjs, jose, otplib, mercadopago, cloudinary, next-cloudinary, resend, react-email, recharts) + §Filosofia §4 "CLAUDE.md Universal".
  - `[[CLAUDE]]` raiz ganhou **R8** — toda pasta visível DEVE ter CLAUDE.md; primeiro arquivo numa pasta nova é o CLAUDE.md.
  - Projeto Belessence em `[[Dev/2 - Projects/Ecommerce/Belessence]]` refatorado: `Requirements & Scope.md` renomeado pra `01-Escopo.md` v3.0 com classificação mudada de "Refatoração de Frontend" → **"Refatoração Full-stack"**. Frontmatter expandido com `projeto`, `package_manager`, `frontend_stack`, `backend_stack`, `cloud_stack`, `dependencies`, `email_service`, `storage_service`, `payment_gateway`. 5+ novos módulos retroativos (auth, cart/wishlist privados, MP, admin, email, mídia).
  - Gerados: `02-Contrato.md` (cláusulas dinâmicas Full-stack — auditoria prévia + isenção downtime), `03-Planejamento.md` (EAP Rodadas 2-4 + matriz Hexagonal 5/6 favorável), `04-Tarefas.md` (backlog granular T-1.X até T-4.10.X com TDD), `05-Dev-Log.md` (decisões retroativas + dependências instaladas), `06-Erros.md` (4 erros novos propagados).
  - `[[Dev/4 - Error's Memory/INDEX]]` atualizado: 6 erros totais (ERR-2026-0003 a 0006 novos), 3 categorias afetadas (Auth & Security 3, Deployment 3), 4 novas stacks indexadas (Next-Auth, Prisma, PostgreSQL, Zustand).
  - `INIT.md` criado em `Belessence/frontend/belessence/INIT.md` apontando pros 6 artefatos canon do vault.
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
- [2026-05-30] **Rodada Preferencias Dev — Filosofia + Estrutura + R7:**
  - `[[Preferencias Dev]]` ganhou seção "Filosofia de Construção": SOLID (5 princípios com exemplos por stack) + Clean Code (7 regras) + Arquitetura Hexagonal (Ports & Adapters) com matriz de decisão de 6 sinais
  - `[[Preferencias Dev]]` ganhou seção "Estrutura de Pastas por Stack": TS+Next+NestJS (default + hexagonal), C# Clean Architecture, Java Spring (hexagonal + layered), Vue, Angular
  - R7 adicionado ao `[[CLAUDE]]` raiz: conformidade com `[[Preferencias Dev]]` é mandatória — IA deve avisar antes de qualquer sugestão que viole regras
  - `[[TOON-PROMPT]]` mantido standalone (não foi gutted) — SOLID inline ampliado + Clean Code + Hexagonal resumo + link a `[[Preferencias Dev]]` para detalhes
  - `tools/validate-project.js` ganhou flag `--code-path` para validar estrutura de pastas do repo de código contra stack do frontmatter (`back/`+`front/` p/ TS, `src/<Name>.Web/` p/ C#, etc)
  - `[[Mock Pipeline Test]]` atualizado: critério de aceitação inclui decisão Hexagonal vs Layered + estrutura de pastas conforme stack + R7 respeitado
  - `[[Master Pipeline & Enforcement]]` — Regras de Enforcement passaram a 10 itens (incluindo R7 e referência à Filosofia)
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
