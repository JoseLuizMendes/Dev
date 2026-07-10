# Memória Episódica — Índice Curado

> Este arquivo é a **Camada 2** do sistema de memória. O agente DEVE lê-lo no boot de toda sessão. Ele é atualizado ao final de cada sessão pela destilação dos logs brutos da Camada 1.
>
> Protocolo completo: [[Session Protocol]]

---

## Estado Atual

- **Último trabalho:** **Back-end canonizado (2026-07-10)** — `[[Backend Onboarding Protocol]]` v1.0 (matriz linha 22): entrevista via skill `backend-interview-agent` → Tech Brief, **dados PRIMEIRO** (`schema.prisma` antes de tudo), contrato de API, Auth.js v5 default, segurança/observabilidade/testes; `[[Deploy Protocol]]` v1.1 com deploy por porte (Vercel pequeno/médio · **VPS Hostinger** médio/grande). Pendência do Back Onboarding **RESOLVIDA**. Ver decisões [2026-07-10] abaixo.
- **Mesma data (rodada anterior):** **Fluxo front "sem atrito"** — Kickoff Input (`00-Input.md` → `00-DNA.md`, matriz linha 20) com proto-design system extraído das refs, vídeo cinematográfico + mídia animada no `[[Asset Sizing Standard]]` v2.0, **AVIF+WebP vence WEBP**, ingestão de assets (Fase 6.0), SEO (Fase 9) e segurança de front (Fase 10) no `[[Frontend Creative Protocol]]` v2.1, DX obrigatória (Prettier+Husky+lint-staged).
- **Trabalho anterior:** **Frontend Creative Protocol canonizado (2026-07-09)** — fluxo criativo de front do dev virou protocolo canon (`[[Frontend Creative Protocol]]` v1.0) + matriz canon linha 19 + Preferencias Dev v5.1 (Three.js aprovado, alternativas gratuitas de mídia, sites-inspiração). Ver decisão [2026-07-09] abaixo.
- **Trabalho anterior:** **Reestruturação do vault como repositório-mestre (2026-07-08)** — saneamento completo + `0.4 - Knowledge Base` + Preferencias Dev v5 (TanStack/Vue 1ª classe) + ferramentas obrigatórias de bootstrap na matriz canon (linhas 17-18) + artigo LinkedIn em `5 - Publicações/`. Log completo: `[[2026-07-08-Reestruturacao-Vault-KB-TanStack]]`.
- **Fluxo novo disponível:** modo briefing→automático (matriz canon linha 18 de `[[Master Pipeline & Enforcement]]`) — dev entrega briefing/requisitos e autoriza; a cadeia 0→17 roda sem parada (exceto aprovações não pré-aprovadas e campos `[PENDENTE]`), terminando com SpecKit + Impeccable + Higgsfield (opt-out) + skills Next.js instalados.
- **Projeto de código mais recente:** Belessence (Mari Beauty) — Refatoração Full-stack completa, validator 7/7 OK, Playwright E2E 33/33 ✅ (Lighthouse e smoke manual pendentes localmente; test bugs de Radix Select registrados como T-extra-3).

---

## Decisões Recentes

- [2026-07-10] **Back-end canonizado — Backend Onboarding Protocol (espelho do front):**
  - **Bumps de versão (enforcement regra 6):** `[[Master Pipeline & Enforcement]]` 2.2→**2.3**, `[[Deploy Protocol]]` 1.0→**1.1**, `[[Project Kickoff Input Template]]` 1.1→**1.2**, `[[Preferencias Dev]]` 5.2→**5.3**, `[[INDEX]]` raiz 2.2→**2.3**. Novo: `[[Backend Onboarding Protocol]]` **v1.0** em `0 - Planner Project/`.
  - **Preferências do dev entrevistadas (fonte: respostas diretas, 2026-07-10):** (1) **dados primeiro** — modelagem no `schema.prisma` antes de DTOs/endpoints/casos de uso; (2) entrevista canônica de requisitos via skill **`backend-interview-agent`** (instalada) → Tech Brief; (3) **Auth.js v5 default** (API NestJS separada → JWT/Passport como exceção documentada); (4) **deploy por porte: pequeno/médio → Vercel + Next.js; médio/grande → VPS Hostinger** (Docker; framework reavaliado por projeto — TanStack candidato forte, "depende muito de projeto pra projeto").
  - **Linha 22 nova:** projeto com back (`tipo: front+back` ou back-only) → Backend Onboarding Protocol ANTES de código de servidor. Fases: 1 Tech Brief (entrevista); 2 modelagem de dados (schema draft + migrations `migrate deploy` + seed); 3 contrato de API (DTOs explícitos, zod em toda entrada, erro padrão `{error:{code,message}}`, paginação); 4 arquitetura (hexagonal soft via matriz de sinais); 5 auth; 6 integrações (webhooks com assinatura obrigatória); 7 segurança de back (rate limit, CORS restrito, secrets em env+zod, sem stack trace em prod, logs sem PII); 8 observabilidade (pino + `/health`; Sentry opcional por porte); 9 testes TDD (unit + integração com Postgres real via Compose + E2E).
  - **Deploy Protocol v1.1:** tabela de alvo por porte + Fase 4 VPS (Docker Compose prod, Caddy preferido/Nginx+certbot, `prisma migrate deploy`, **backup diário do Postgres inegociável antes de dados reais**, firewall 80/443+SSH, rollback por tag de imagem). Linha 18 agora: ...→19 (se UI)/22 (se back)→21.
  - **Kickoff v1.2:** seção 3 do `00-Input.md` deixou de ser `[PENDENTE]` — virou insumo bruto da entrevista (requisitos, entidades, integrações, auth, **porte**).
  - **Complemento (mesmo dia — Preferencias 5.3→5.4, Backend Onboarding Protocol 1.0→1.1):** (1) **SDD forte com SpecKit explicitado** — front E back: `/speckit.specify → plan → tasks → implement`, TDD dentro do ciclo SDD (§Fluxo SDD no Preferencias); (2) matriz de backend por porte (ver correção abaixo); (3) **private folders Next.js inegociável** — toda pasta não-rota dentro de `app/` leva prefixo `_` (`_components`, `_lib`, `_hooks`…); pasta sem `_` em `app/` declara rota; `node_modules` = exceção técnica (raiz, pnpm, gitignored). Alcance confirmado pelo dev: só dentro de `app/`.
  - **CORREÇÃO do dev (mesmo dia — Preferencias 5.4→5.5, Backend Onboarding Protocol 1.1→1.2):** a escolha de linguagem/framework do back **NÃO é régua de tamanho — é multi-fator ("depende")**. Tamanho/escopo é apenas UM parâmetro; pesam junto: complexidade do domínio, ecossistema/time do cliente, integrações enterprise, performance/concorrência, prazo/orçamento, infra alvo, manutenção futura. Seção renomeada §Backend por Porte/Escopo → **§Escolha de Backend (multi-fator — "depende")** com checklist de parâmetros; Fase 4.0 do protocolo idem; **sinais ambíguos = perguntar ao dev (R3/R5), agente propõe com justificativa e nunca auto-decide**; decisão registrada no `03-Planejamento` + `INIT.md` **com os fatores que a justificaram**. (O deploy por porte — Vercel vs VPS Hostinger — permanece como o dev definiu.)
- [2026-07-10] **Fluxo front "sem atrito" — Kickoff, vídeo/mídia, AVIF+WebP, SEO, segurança, deploy e DX:**
  - **Bumps de versão (enforcement regra 6):** `[[Asset Sizing Standard]]` 1.0→**2.0**, `[[Frontend Creative Protocol]]` 1.0→**2.0**, `[[Master Pipeline & Enforcement]]` 2.1→**2.2**, `[[Preferencias Dev]]` 5.1→**5.2**, `[[Setup Script Template]]` 3.0→**3.1**, `[[INDEX]]` raiz 2.1→**2.2**. Novos: `[[Project Kickoff Input Template]]` **v1.0** (em `1 - Templates/`) e `[[Deploy Protocol]]` **v1.0** (em `0 - Planner Project/`).
  - **Decisão do dev — conflito de formatos resolvido: AVIF (1ª escolha) + WebP (fallback) vence.** "Toda PNG/JPEG → WEBP" rebaixada a mínimo aceitável. Frontend Creative Protocol §6.3 e Preferencias Dev §Imagens e Mídia Web alinhados ao Asset Sizing Standard.
  - **Linha 20 nova (Kickoff):** dev copia `[[Project Kickoff Input Template]]` → `00-Input.md` na pasta do projeto (briefing + refs + identidade + inventário de assets + aprovações pré-autorizadas) → agente retorna **Kickoff Output** salvo como `00-DNA.md` (DNA consolidado + prompts completos de geração + direções/passos + `[PENDENTE]`s) → linha 18 se `execucao_automatica: sim`. Front sempre inicia com DNA pronto.
  - **Linha 21 nova (Deploy):** front concluído + UAT → `[[Deploy Protocol]]` (Vercel padrão; memória de erros de deployment lida ANTES; checklist pré-deploy com Lighthouse ≥90/95/95; DNS/HTTPS; smoke test; rollback; deleção da `refs/`). Cadeia da linha 18 agora termina →19→21.
  - **Asset Sizing Standard v2.0:** vídeo cinematográfico (máster ≥1080p, 4K p/ hero; matriz de slots com bitrate/peso; WebM VP9 + MP4 fallback; poster obrigatório; `prefers-reduced-motion`→poster; comandos ffmpeg canônicos); árvore de mídia animada (GSAP/CSS → Lottie → WebM; **GIF proibido**); image-to-video (**frame inicial + frame final** mesmo ratio/estilo/seed); imagem animável (bleed ~10–15%); fundo transparente declarado no prompt (alpha).
  - **Frontend Creative Protocol v2.0:** Fase 6.0 ingestão de assets (cliente ENVIA, dev INPUTA; inventário + validação de qualidade + normalização; asset ruim rejeitado); §6.1 regra inegociável — **geração SEMPRE via skills instaladas** (Higgsfield skills + Asset Sizing + GPT-Image galleries + DESIGN.md; prompts complexos obrigatórios; violar = R7); Fase 9 SEO técnico (sitemap/robots/JSON-LD/metadata/OG/canonical); Fase 10 segurança de front; entrada via `00-DNA.md` quando Kickoff.
  - **Preferencias Dev v5.2:** §Dependências Obrigatórias de DX (Prettier + `.prettierrc`, **prettier-plugin-tailwindcss** ordenando classes, Husky + lint-staged pre-commit, EditorConfig, `strict`; commitlint opcional — instalados no bootstrap via Setup Script v3.1); §Segurança de Front-end (headers CSP/HSTS/nosniff/Permissions-Policy/frame-ancestors, zero segredos no client + env com zod, XSS/DOMPurify, forms públicos com rate limit + honeypot/Turnstile, cookies httpOnly/secure/sameSite, `pnpm audit` no CI, embeds sandboxed, uploads validados no server).
  - **Pendência futura:** Back Onboarding Protocol não existe — Kickoff marca back como `[PENDENTE — criar Back Onboarding Protocol]`; dev criará após concluir o front.
  - **Adição pós-aprovação (mesmo dia):** `[[Project Kickoff Input Template]]` 1.0→**1.1** + `[[Frontend Creative Protocol]]` 2.0→**2.1** — o Kickoff Output agora inclui **Proto-Design System extraído das refs** (item 2 do contrato de resposta): para cada ref com URL, extrair do CSS/CF a paleta (hex/OKLCH → proto-tokens nomeados, WCAG pré-checado), tipografia e espaçamentos/radii, via skill complementar `[[ai-web-designer-agent]]`. Fase 4 do protocolo consome esses proto-tokens como ponto de partida (versão final continua sendo `DESIGN.md` via `/impeccable init`). Ref inacessível = `[PENDENTE — extrair na Fase 2 via refs/]`.
- [2026-07-09] **Frontend Creative Protocol — fluxo criativo do dev canonizado:**
  - **Bumps de versão (enforcement regra 6):** `[[Master Pipeline & Enforcement]]` 2.0→**2.1**, `[[Preferencias Dev]]` 5.0→**5.1**, `[[INDEX]]` raiz 2.0→**2.1**. Novo: `[[Frontend Creative Protocol]]` **v1.0** em `0 - Planner Project/`.
  - **Protocolo novo (matriz canon linha 19):** todo projeto com front/UI passa pelo fluxo criativo ANTES de código: (1) referências com cliente ou solo em Awwwards/Dribbble/Pinterest/Squarespace; (2) extração de código-fonte (HTML/CSS/JS) das refs em `.md` dentro de `refs/` na raiz do repo — **gitignored sempre, nunca commitada, deletada após conclusão do front**; CF é estudo/fidelidade, implementação re-escrita (copyright); (3) `refs/00-MAPA.md` — dev declara componente X da ref Y no lugar Z, agente só implementa o que está no mapa; (4) paleta default **tons pastéis**; (5) skills Context7/Impeccable/UX-UI; (6) pipeline de mídia; (7) checklist de 10 princípios de web design; (8) GSAP+Lenis sempre, Three.js quando couber.
  - **13 sites-inspiração do dev registrados** no protocolo §Fase 1.3 (landonorris.com, igloo.inc, species-in-pieces.com, loiseau.framer.website, nextsense.io, buckssauce.com, nymphaicosmetics.com, more-nutrition.webflow.io, cipherdigital.com, day1-run.webflow.io, nudot.com.tw, terminal-industries.com, oryzo.ai) — lista viva.
  - **Preferencias Dev v5.1:** seção nova "Fluxo Criativo de Front-end"; **Three.js aprovado** na stack (quando couber, lazy load + fallback WEBP); regra nova "Imagens e Mídia Web" — **WEBP obrigatório** pra todo raster no navegador (`sharp` em lote / Squoosh avulso), enhance via **Upscayl**; Higgsfield rebaixado a "quando houver orçamento" com **alternativas gratuitas aprovadas** (Google AI Studio, Recraft, Leonardo/Ideogram, ComfyUI/Fooocus local; vídeo Kling/Hailuo/Luma ou GSAP/Three.js no lugar).
  - **Linha 18 (modo automático) atualizada:** cadeia agora termina em →19 quando o projeto tem UI; refs não fornecidas no briefing viram `[PENDENTE]`.
- [2026-07-08] **Reestruturação do vault — repositório-mestre para bootstrap automático:**
  - **Bumps de versão (enforcement regra 6):** `[[Preferencias Dev]]` 4.2→**5.0**, `[[Master Pipeline & Enforcement]]` 1.0→**2.0**, `[[Protocol-Bootstrap]]` 1.0→**2.0**, `[[Setup Script Template]]` 2.0→**3.0**, `[[Project INIT Template]]` 1.0→**2.0**, `[[Requirements & Scope Project Template]]` 2.1→**2.2**, `[[Cognitive Vault Architecture]]` 1.2→**2.0**, `[[INDEX]]` raiz 1.0→**2.0**.
  - **TanStack formalizado:** Start = framework de 1ª classe ao lado do Next.js 16 (status RC verificado via Context7); TanStack Query = fetching canônico React E Vue (substitui a marca "React Query / SWR"; SWR rebaixado a legado); `@tanstack/vue-query` nas regras Vue. **Vue.js 3+ promovido** de stack adicional a 1ª classe.
  - **Ferramentas obrigatórias de bootstrap** (seção nova em Preferencias + matriz canon linha 17): SpecKit (`uvx ... specify init`), Impeccable (`npx skills add pbakaus/impeccable` + `/impeccable init` → `DESIGN.md`), Higgsfield (`npx skills add higgsfield-ai/skills`, **opt-out** `midia: "nao"` no escopo), Context7 sempre, skills Next.js (`npx skills add vercel/next.js`) se stack Next. Setup Script ganhou Seção 6 TOOLING + variável `MEDIA`.
  - **Modo briefing→automático** (matriz canon linha 18): cadeia mecânica 0→17 sem parada quando o dev entrega briefing e autoriza.
  - **`0.4 - Knowledge Base/` criada** (leitura condicional, fora do boot R6): Next.js Foundations (Vercel Academy — curso Next 16 completo), TanStack Reference, Impeccable Reference, Higgsfield Skills Reference. `5 - Publicações/` criada com artigo LinkedIn TanStack Start vs Next.js (rascunho).
  - **Saneamento:** worktree espelho removido; `tools/`+`docs/` deduplicados (canônico na **raiz do repo**); typos corrigidos (`0.1 - Methodology`, `Portfolio`, `Planner Mode`); MendeShift e Wedding-New migrados para `01-Escopo.md` (nota pré-canon; artefatos 02-06 dispensados — sem fabricação retroativa, R3); **Sentinel-Flow excluído** (descontinuado, por ordem do dev); placeholder `[Nicho]` e projeto fantasma Advocacia removidos do INDEX; Memória Imunológica consistente (4 by-stack novos: next-auth, prisma, postgresql, zustand; stubs populados; wikilinks com alias; contagens corretas).
  - **ERR-2026-0007 registrado:** validator quebrava com CRLF no Windows (regex `^---\n`); fix = normalizar `\r\n→\n` nos `readFileSync`. Belessence revalidado 7/7 OK.
  - **Decisão:** sem R9 — obrigatoriedade do tooling ancorada na matriz canon via R4.
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
  - Projeto Belessence em `[[Dev/2 - Projects/Ecommerce/Belessence/01-Escopo|Belessence]]` refatorado: `Requirements & Scope.md` renomeado pra `01-Escopo.md` v3.0 com classificação mudada de "Refatoração de Frontend" → **"Refatoração Full-stack"**. Frontmatter expandido com `projeto`, `package_manager`, `frontend_stack`, `backend_stack`, `cloud_stack`, `dependencies`, `email_service`, `storage_service`, `payment_gateway`. 5+ novos módulos retroativos (auth, cart/wishlist privados, MP, admin, email, mídia).
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

- [ ] Revisar e publicar o artigo `[[2026-07 - TanStack Start vs Next.js (LinkedIn)]]` (rascunho; falta imagem de capa)
- [ ] Testar o modo briefing→automático (matriz linha 18) ponta a ponta com projeto real
- [ ] Considerar `.gitattributes` com `*.md text` para eliminar ruído CRLF/LF (decisão adiada)

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
