---
template: "Tasks"
version: 1.0
status: "Aprovado pelo dev (2026-09-18)"
tags:
  - tarefas
  - backlog
  - tdd
  - sdd
projeto: "Site e Hub da Clinica"
cliente: "Dr. Gabriel Cavalcanti"
fonte: "[[01-Escopo]] + [[03-Planejamento]]"
data_criacao: "2026-09-18"
---

# 📋 04-Tarefas — Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Nota de Uso:** Gerado a partir de `[[03-Planejamento]]` via `/speckit.tasks` (nível de projeto). Cada tarefa rastreia uma User Story do `[[01-Escopo]]`.
> Ao iniciar um épico, o ciclo SpecKit por feature no repositório (`specs/NNN-*/tasks.md`) detalha estas tarefas; o ID `T-X.Y` daqui é citado no commit.
>
> ⚠️ **Regra TDD inegociável:** toda tarefa `impl` é precedida pela tarefa `[TEST]` correspondente. Nenhuma exceção.
> Caminhos: `R/` = repositório `dr-gabriel-cavalcante-web`. `e2e/` = specs Playwright. `data-testid` indicado entre crases.

---

## Status enum

- `pending` — não iniciada
- `in_progress` — em desenvolvimento (apenas 1 task por vez)
- `blocked` — bloqueada por dependência ou decisão pendente
- `done` — testes passando + critério BDD validado

---

## Épico 0: Fundação SDD, DX e Testes

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-0.1 | `[TEST]` | Smoke: `pnpm test` roda Vitest e `pnpm test:e2e` abre a home e vê o `h1` | Constituição §Quality Gates | `e2e/smoke.spec.ts`, `src/test/smoke.test.ts` | GIVEN o projeto instalado WHEN rodo `pnpm test` e `pnpm test:e2e` THEN ambos executam e passam | done | Dev | 1 |
| T-0.2 | impl | DX obrigatória (prettier + plugin tailwind, husky, lint-staged, `.editorconfig`) + Playwright config + scripts | Constituição §Quality Gates | `package.json`, `.prettierrc`, `.editorconfig`, `.husky/pre-commit`, `playwright.config.ts` | T-0.1 verde | done | Dev | 2 |
| T-0.3 | `[TEST]` | Env: boot falha se `DATABASE_URL`/segredo de sessão ausente ou inválido | Constituição III | `src/lib/env.test.ts` | GIVEN uma env sem segredo de sessão WHEN o módulo de env é carregado THEN lança erro com a variável faltante | done | Dev | 1 |
| T-0.4 | impl | `src/lib/env.ts` com zod; substituir leituras diretas de `process.env` | Constituição III | `src/lib/env.ts`, `src/lib/session.ts`, `src/db/index.ts` | T-0.3 verde | done | Dev | 1 |
| T-0.5 | `[TEST]` | Infra E2E: fixture faz login com usuário semeado e acessa `/hub/agenda` | Constituição II | `e2e/fixtures/auth.ts`, `e2e/hub-smoke.spec.ts` | GIVEN o banco `test` semeado WHEN a fixture autentica THEN `/hub/agenda` carrega sem erro de console | done | Dev | 2 |
| T-0.6 | impl | Branch Neon `test` + script de reset/seed + `webServer` do Playwright | Constituição II | `scripts/test-db-reset.mjs`, `playwright.config.ts` | T-0.5 verde | done | Dev | 2 |

## Épico 1: Acesso, Sessão e Equipe

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-1.1 | `[TEST]` | Login cria sessão no banco e cookie com id opaco (`login-email`, `login-password`, `login-submit`) | US-1.1 | `src/lib/equipe/session.test.ts`, `e2e/auth.spec.ts` | **GIVEN** um usuário ativo **WHEN** envia credenciais válidas em `/hub/login` **THEN** é criada uma sessão no banco, o cookie httpOnly recebe só o id opaco e ele é levado a `/hub/agenda` | pending | Dev | 2 |
| T-1.2 | impl | Tabela `sessions` (migração no `dev`), `createSession`/`getSession` por id opaco (hash no banco) | US-1.1 | `src/db/schema.ts`, `src/lib/equipe/session.ts`, `src/app/api/auth/login/route.ts` | T-1.1 verde | pending | Dev | 3 |
| T-1.3 | `[TEST]` | Logout revoga e cookie reutilizado recebe 401 (`logout-button`) | US-1.2 | `src/lib/equipe/session.test.ts`, `e2e/auth.spec.ts` | **GIVEN** uma sessão ativa **WHEN** clica em "Sair" **THEN** a sessão é revogada no banco, o cookie é removido, o cache de dados é limpo e o mesmo cookie reutilizado recebe 401 | pending | Dev | 1 |
| T-1.4 | impl | `revokeSession` + rota de logout + limpeza de cache | US-1.2 | `src/app/api/auth/logout/route.ts`, `src/lib/equipe/session.ts` | T-1.3 verde | pending | Dev | 2 |
| T-1.5 | `[TEST]` | Mensagem/status/tempo iguais para e-mail inexistente e senha errada; 429 após N tentativas | US-1.3 | `src/lib/equipe/login.test.ts`, `src/lib/rate-limit.test.ts` | **GIVEN** e-mail inexistente ou senha errada **WHEN** tenta entrar **THEN** recebe a mesma mensagem genérica, mesmo status e tempo semelhante; **AND GIVEN** mais de N tentativas por IP ou conta em 15 min **THEN** recebe 429 | pending | Dev | 2 |
| T-1.6 | impl | Comparação de hash dummy para usuário inexistente + rate limit por IP e conta (tabela ou store no Postgres) | US-1.3 | `src/lib/equipe/login.ts`, `src/lib/rate-limit.ts` | T-1.5 verde | pending | Dev | 3 |
| T-1.7 | `[TEST]` | OWNER cria/edita/desativa acesso; desativar revoga sessões | US-1.4 | `src/lib/equipe/users.test.ts`, `e2e/equipe.spec.ts` | **GIVEN** que sou OWNER **WHEN** crio um acesso com nome, e-mail, senha e papel **THEN** a pessoa consegue entrar; **AND WHEN** desativo o acesso **THEN** as sessões dela são revogadas | pending | Dev | 2 |
| T-1.8 | impl | `users.active`, rotas `PATCH/DELETE /api/users/:id`, tela Configurações → Equipe (RHF + Zod) | US-1.4 | `src/lib/equipe/users.ts`, `src/app/api/users/**`, `src/app/hub/(workspace)/configuracoes/equipe/` | T-1.7 verde | pending | Dev | 3 |
| T-1.9 | `[TEST]` | STAFF recebe 403 em relatórios/configurações/equipe e não vê os itens no menu | US-1.5 | `src/lib/equipe/permissions.test.ts`, `e2e/permissoes.spec.ts` | **GIVEN** um usuário STAFF **WHEN** chama uma rota restrita (relatórios, configurações, equipe) **THEN** a API responde 403 e o item não aparece no menu | pending | Dev | 2 |
| T-1.10 | impl | Matriz central `role_permissions` + helper `requirePermission` em todas as rotas + menu por permissão | US-1.5 | `src/lib/equipe/permissions.ts`, `src/app/api/**`, `src/components/tenant/app-shell.tsx` | T-1.9 verde | pending | Dev | 3 |
| T-1.11 | `[TEST]` | Troca de senha exige a atual e revoga outras sessões | US-1.6 | `src/lib/equipe/password.test.ts`, `e2e/conta.spec.ts` | **GIVEN** que estou logado **WHEN** informo a senha atual e uma nova válida **THEN** a senha muda e as minhas outras sessões são revogadas | pending | Dev | 1 |
| T-1.12 | impl | Rota `POST /api/me/password` + Configurações → Minha conta | US-1.6 | `src/lib/equipe/password.ts`, `src/app/api/me/password/route.ts` | T-1.11 verde | pending | Dev | 2 |
| T-1.13 | `[TEST]` | Recuperação: resposta genérica sempre; token de uso único que expira em 30 min | US-1.7 | `src/lib/equipe/reset.test.ts`, `e2e/reset.spec.ts` | **GIVEN** qualquer e-mail **WHEN** peço recuperação **THEN** vejo sempre "se o e-mail existir, enviamos as instruções"; **AND GIVEN** um e-mail existente **THEN** é enviado um link de uso único que expira em 30 min | blocked (provedor de e-mail PENDENTE) | Dev | 1 |
| T-1.14 | impl | Tabela `password_resets` (hash do token) + envio via porta `EmailSender` + telas forgot/reset | US-1.7 | `src/lib/equipe/reset.ts`, `src/app/api/auth/forgot-password/route.ts`, `src/app/hub/(auth)/**` | T-1.13 verde | blocked | Dev | 2 |
| T-1.15 | refactor | Consolidar auth/equipe em `src/lib/equipe` e remover `jose`/JWT legado | US-1.1 | `src/lib/equipe/**`, `src/lib/session.ts` | T-1.1…T-1.13 ainda verdes | pending | Dev | 2 |

## Épico 2: Design System e Acessibilidade

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-2.1 | `[TEST]` | Contraste AA em claro/escuro nas telas principais (axe no Playwright) + teste de tokens sem hex fora do `globals.css` | US-9.1 | `e2e/a11y-contraste.spec.ts`, `src/test/no-hex.test.ts` | **GIVEN** qualquer página em tema claro ou escuro **WHEN** um auditor mede o contraste **THEN** todo texto normal tem ≥ 4.5:1 e todas as cores vêm de tokens | pending | Dev | 2 |
| T-2.2 | impl | Tokens da marca (off-white quente, tinta, turquesa como único acento), escala 8pt, raios, 3 sombras, easing; nova tipografia; `DESIGN.md` via `/impeccable init`; marca "Agendamento" → clínica | US-9.1 | `src/app/globals.css`, `src/app/layout.tsx`, `DESIGN.md`, `src/components/brand/**` | T-2.1 verde | pending | Dev | 6 |
| T-2.3 | `[TEST]` | Lint falha com controle HTML puro fora de `components/ui` (fixture de regra) | US-9.2 | `eslint-rules/no-raw-controls.test.ts` | **GIVEN** um `input`/`select`/`label`/`button`/`textarea` em JSX fora de `components/ui` **WHEN** o lint roda **THEN** falha com erro | pending | Dev | 2 |
| T-2.4 | impl | Regra `no-restricted-syntax` escopada + migrar ocorrências (`odontograma-picker`, `service-editor-card`) + primitivos faltantes (Form/Field, Switch, RadioGroup, ToggleGroup, Tooltip, Dialog, Combobox, FileUpload, EmptyState) | US-9.2 | `eslint.config.mjs`, `src/components/ui/**` | T-2.3 verde | pending | Dev | 8 |
| T-2.5 | `[TEST]` | Teclado: Tab percorre site e hub com foco visível e alvos ≥ 44px | US-9.3 | `e2e/a11y-teclado.spec.ts` | **GIVEN** a navegação por Tab **WHEN** percorro site e hub **THEN** todo controle tem foco visível, ordem lógica e alvo ≥ 44px | pending | Dev | 2 |
| T-2.6 | impl | `focus-visible` nos primitivos, tamanhos mínimos, skip-link | US-9.3 | `src/components/ui/**`, `src/app/layout.tsx` | T-2.5 verde | pending | Dev | 3 |

## Épico 3: Unidades e Horários

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-3.1 | `[TEST]` | CRUD de unidade aparece na agenda, no site e nos filtros (`unit-form`, `unit-filter`) | US-2.1 | `src/lib/unidades/units.test.ts`, `e2e/unidades.spec.ts` | **GIVEN** que sou OWNER **WHEN** cadastro uma unidade (nome, endereço, telefone/WhatsApp, link do mapa, ativa) **THEN** ela aparece na agenda, no site (`/unidades/<slug>`) e nos filtros | pending | Dev | 2 |
| T-3.2 | impl | Tabela `units` + seed das 2 unidades + rotas + Configurações → Unidades | US-2.1 | `src/db/schema.ts`, `src/lib/unidades/**`, `src/app/api/units/**` | T-3.1 verde | pending | Dev | 4 |
| T-3.3 | `[TEST]` | Grade por unidade limita horários da agenda | US-2.2 | `src/lib/unidades/hours.test.ts`, `e2e/horarios.spec.ts` | **GIVEN** uma unidade **WHEN** defino abertura, fechamento, dias de folga e intervalos **THEN** a agenda daquela unidade só permite horários dentro dessa grade | pending | Dev | 2 |
| T-3.4 | impl | `unit_id` em `business_hours`/`business_breaks` (migração com default unidade 1) + UI por unidade | US-2.2 | `src/db/schema.ts`, `src/lib/unidades/hours.ts`, `src/components/tenant/horarios/**` | T-3.3 verde | pending | Dev | 4 |
| T-3.5 | `[TEST]` | Exceção por unidade respeitada | US-2.3 | `src/lib/unidades/overrides.test.ts` | **GIVEN** uma data com exceção na unidade **WHEN** a equipe tenta agendar nela **THEN** a agenda respeita a exceção | pending | Dev | 1 |
| T-3.6 | impl | `unit_id` em `business_date_overrides` + UI | US-2.3 | `src/db/schema.ts`, `src/components/tenant/horarios/overrides-card.tsx` | T-3.5 verde | pending | Dev | 2 |

## Épico 4: Agenda

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-4.1 | `[TEST]` | Criar agendamento com paciente, tratamento e unidade | US-3.1 | `src/lib/agenda/create.test.ts`, `e2e/agenda-criar.spec.ts` | **GIVEN** um horário livre na grade da unidade **WHEN** crio o agendamento com paciente, tratamento e unidade **THEN** ele aparece na agenda com a duração do tratamento | pending | Dev | 2 |
| T-4.2 | impl | `unit_id` em `appointments` + drawer de criação com unidade | US-3.1 | `src/db/schema.ts`, `src/lib/agenda/**`, `src/components/tenant/agenda/appointment-create-drawer.tsx` | T-4.1 verde | pending | Dev | 3 |
| T-4.3 | `[TEST]` | Filtro por unidade, salvo por usuário (`agenda-unit-filter`) | US-3.2 | `e2e/agenda-filtro.spec.ts` | **GIVEN** agendamentos nas 2 unidades **WHEN** escolho uma unidade no filtro **THEN** só vejo os agendamentos dela, e o filtro fica salvo por usuário | pending | Dev | 1 |
| T-4.4 | impl | Query por unidade + preferência com chave por usuário (ERR-2026-0006) | US-3.2 | `src/components/tenant/agenda/agenda-calendar.tsx`, `src/app/api/appointments/route.ts` | T-4.3 verde | pending | Dev | 2 |
| T-4.5 | `[TEST]` | Recusa passado, fora da grade e conflito na mesma unidade (409/422) | US-3.3 | `src/lib/agenda/availability.test.ts`, `e2e/agenda-bloqueios.spec.ts` | **GIVEN** um horário no passado, fora da grade ou em conflito na mesma unidade **WHEN** tento agendar ou mover **THEN** a operação é recusada (409/422) com mensagem clara e o card volta ao lugar | pending | Dev | 2 |
| T-4.6 | impl | Validação no servidor (não só no calendário) por unidade | US-3.3 | `src/lib/agenda/availability.ts`, `src/app/api/appointments/**` | T-4.5 verde | pending | Dev | 3 |
| T-4.7 | `[TEST]` | Status e fase visual (relógio fixo) | US-3.4 | `src/components/tenant/agenda/phase.test.ts`, `e2e/agenda-status.spec.ts` | **GIVEN** uma consulta **WHEN** marco confirmado, concluído, faltou ou cancelado **THEN** o status é salvo e a fase visual (aguardando/atrasado/resolvido) se atualiza | pending | Dev | 1 |
| T-4.8 | impl | Ajustes de status/fase para o modelo com unidade; refactor da agenda para `src/lib/agenda` | US-3.4 | `src/lib/agenda/**`, `src/components/tenant/agenda/**` | T-4.7 verde | pending | Dev | 2 |

## Épico 5: Pacientes

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-5.1 | `[TEST]` | Busca paginada por nome/telefone na tabela `patients` (`patients-search`) | US-4.1 | `src/lib/pacientes/search.test.ts`, `e2e/pacientes-lista.spec.ts` | **GIVEN** pacientes cadastrados **WHEN** busco por nome ou telefone **THEN** vejo os resultados paginados vindos da tabela de pacientes | pending | Dev | 1 |
| T-5.2 | impl | Rota `/hub/pacientes` (renomeia "Clientes") + busca no servidor | US-4.1 | `src/app/hub/(workspace)/pacientes/**`, `src/lib/pacientes/**`, `src/app/api/patients/route.ts` | T-5.1 verde | pending | Dev | 3 |
| T-5.3 | `[TEST]` | Cadastro/edição valida obrigatórios e fica disponível ao agendar | US-4.2 | `src/lib/pacientes/patient.test.ts`, `e2e/pacientes-form.spec.ts` | **GIVEN** os dados obrigatórios (nome, telefone) **WHEN** salvo **THEN** o paciente é criado/atualizado e pode ser escolhido ao agendar | pending | Dev | 1 |
| T-5.4 | impl | Form RHF + Zod + Combobox de paciente no agendamento | US-4.2 | `src/components/tenant/pacientes/**`, `src/components/tenant/agenda/appointment-create-drawer.tsx` | T-5.3 verde | pending | Dev | 3 |
| T-5.5 | `[TEST]` | Ficha com histórico e odontograma; STAFF em modo leitura | US-4.3 | `e2e/pacientes-ficha.spec.ts` | **GIVEN** um paciente **WHEN** abro a ficha **THEN** vejo dados, consultas anteriores/futuras e o odontograma; STAFF vê em modo leitura (padrão configurável) | pending | Dev | 1 |
| T-5.6 | impl | Página da ficha + permissão `prontuario.editar` na matriz | US-4.3 | `src/app/hub/(workspace)/pacientes/[id]/**`, `src/components/tenant/dental/**` | T-5.5 verde | pending | Dev | 3 |

## Épico 6: Conteúdo do Site (CMS do Doutor)

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-6.1 | `[TEST]` | Tratamento alimenta agenda e (se marcado) o site | US-8.5 | `src/lib/site/services.test.ts`, `e2e/tratamentos-cms.spec.ts` | **GIVEN** um tratamento com nome, slug, duração, preço interno, resumo, texto e "mostrar no site" **WHEN** salvo **THEN** ele fica disponível na agenda e (se marcado) no site | pending | Dev | 1 |
| T-6.2 | impl | Campos `slug/summary/body/show_on_site/sort_order` em `services` + seed dos 6 tratamentos + Configurações → Tratamentos | US-8.5 | `src/db/schema.ts`, `src/lib/site/services.ts`, `src/components/tenant/servicos/**` | T-6.1 verde | pending | Dev | 3 |
| T-6.3 | `[TEST]` | Editar texto e publicar muda o site sem deploy | US-8.1 | `src/lib/site/content.test.ts`, `e2e/site-cms.spec.ts` | **GIVEN** que sou OWNER **WHEN** altero headline, subtítulo, bio ou contatos em Configurações → Site e publico **THEN** o site mostra o novo texto sem deploy | pending | Dev | 1 |
| T-6.4 | impl | Tabela `site_content` tipada + `revalidateTag` ao publicar + tela Configurações → Site | US-8.1 | `src/lib/site/content.ts`, `src/app/api/site/**`, `src/app/hub/(workspace)/configuracoes/site/**` | T-6.3 verde | pending | Dev | 4 |
| T-6.5 | `[TEST]` | Depoimentos: seção some sem conteúdo autorizado | US-8.2 | `e2e/site-depoimentos.spec.ts` | **GIVEN** depoimentos cadastrados e marcados como autorizados **WHEN** abro a home **THEN** a seção aparece; **AND GIVEN** nenhum depoimento **THEN** a seção não é renderizada | pending | Dev | 1 |
| T-6.6 | impl | Tabela `testimonials` + CRUD | US-8.2 | `src/lib/site/testimonials.ts`, `src/app/api/site/testimonials/**` | T-6.5 verde | pending | Dev | 2 |
| T-6.7 | `[TEST]` | FAQ na ordem + JSON-LD `FAQPage` | US-8.3 | `e2e/site-faq.spec.ts` | **GIVEN** perguntas cadastradas com ordem **WHEN** abro a home/tratamento **THEN** o FAQ aparece na ordem e com JSON-LD `FAQPage` | pending | Dev | 1 |
| T-6.8 | impl | Tabela `faqs` (+ `service_id` opcional) + CRUD + JSON-LD | US-8.3 | `src/lib/site/faqs.ts`, `src/app/api/site/faqs/**` | T-6.7 verde | pending | Dev | 2 |
| T-6.9 | `[TEST]` | Flag de garantia desligada por padrão | US-8.4 | `e2e/site-garantia.spec.ts` | **GIVEN** a flag de garantia desligada (padrão) **WHEN** abro o site **THEN** o bloco não aparece; **AND WHEN** ligo e escrevo os termos **THEN** ele aparece | pending | Dev | 1 |
| T-6.10 | impl | `show_guarantee`/`guarantee_text` em `clinic_settings` + Switch na tela Site | US-8.4 | `src/db/schema.ts`, `src/app/hub/(workspace)/configuracoes/site/**` | T-6.9 verde | pending | Dev | 1 |

## Épico 7: Site Público

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-7.1 | `[TEST]` | Home mobile: headline, CTA e ordem das seções (`home-cta-primary`) | US-7.1 | `e2e/site-home.spec.ts` | **GIVEN** que abro a home no celular **WHEN** a página carrega **THEN** vejo headline de resultado, CTA "Agendar minha avaliação" e as seções do funil na ordem definida na [[Arquitetura-Informacao]] | pending | Dev | 1 |
| T-7.2 | impl | Layout do site (header, menu, rodapé, CTA fixo mobile) + seções da home lendo `src/lib/site` | US-7.1 | `src/app/(site)/**`, `src/components/site/**` | T-7.1 verde | pending | Dev | 6 |
| T-7.3 | `[TEST]` | `/tratamentos/<slug>` visível; oculto dá 404 | US-7.2 | `e2e/site-tratamento.spec.ts` | **GIVEN** um tratamento marcado "mostrar no site" **WHEN** acesso `/tratamentos/<slug>` **THEN** vejo o conteúdo dele, FAQ relacionado e CTA; tratamento oculto dá 404 | pending | Dev | 1 |
| T-7.4 | impl | Página de tratamento (SSG + revalidação) + lista `/tratamentos` | US-7.2 | `src/app/(site)/tratamentos/**` | T-7.3 verde | pending | Dev | 3 |
| T-7.5 | `[TEST]` | `/unidades/<slug>` com endereço, mapa e JSON-LD `Dentist` | US-7.3 | `e2e/site-unidade.spec.ts` | **GIVEN** uma unidade ativa **WHEN** acesso `/unidades/<slug>` **THEN** vejo endereço, mapa, dias de atendimento e o JSON-LD `Dentist` da unidade | pending | Dev | 1 |
| T-7.6 | impl | Página de unidade + JSON-LD | US-7.3 | `src/app/(site)/unidades/**`, `src/lib/site/jsonld.ts` | T-7.5 verde | pending | Dev | 3 |
| T-7.7 | `[TEST]` | Link do WhatsApp: número da unidade (fallback geral) e mensagem com unidade/tratamento | US-7.4 | `src/lib/site/whatsapp.test.ts` | **GIVEN** que clico em "Agendar" numa página de unidade/tratamento **WHEN** o WhatsApp abre **THEN** o número é o da unidade (ou o geral, se vazio) e a mensagem já cita unidade e tratamento | pending | Dev | 1 |
| T-7.8 | impl | `buildWhatsAppLink()` + componente de CTA | US-7.4 | `src/lib/site/whatsapp.ts`, `src/components/site/whatsapp-cta.tsx` | T-7.7 verde | pending | Dev | 1 |
| T-7.9 | `[TEST]` | Hero: scrub avança com scroll; reduced-motion/"Pular introdução" vão direto ao conteúdo (`hero-skip`) | US-7.5 | `e2e/site-hero.spec.ts` | **GIVEN** a home **WHEN** rolo a página **THEN** a sequência "A Porta" avança conforme o scroll; **AND GIVEN** `prefers-reduced-motion` ou "Pular introdução" **THEN** vou direto ao conteúdo sem animação | blocked (mídia do hero — [[Hero-Door-Reveal]]) | Dev | 2 |
| T-7.10 | impl | Lenis + GSAP (ScrollTrigger) + canvas de frames (ou plano C em camadas) | US-7.5 | `src/components/site/door-hero.tsx`, `src/components/site/smooth-scroll.tsx` | T-7.9 verde | blocked | Dev | 8 |
| T-7.11 | `[TEST]` | Privacidade acessível pelo rodapé | US-7.6 | `e2e/site-privacidade.spec.ts` | **GIVEN** qualquer página **WHEN** acesso "Privacidade" no rodapé **THEN** vejo a política de privacidade (LGPD) editável pelo doutor | pending | Dev | 1 |
| T-7.12 | impl | `/privacidade` lendo `site_content` | US-7.6 | `src/app/(site)/privacidade/page.tsx` | T-7.11 verde | pending | Dev | 1 |
| T-7.13 | `[TEST]` | SEO: metadata, sitemap, robots, canonical, OG, JSON-LD | US-7.7 | `e2e/site-seo.spec.ts` | **GIVEN** o site publicado **WHEN** um buscador acessa **THEN** há metadata por página, `sitemap.xml`, `robots.txt` (hub bloqueado), canonical, OG 1200×630 e JSON-LD por unidade | pending | Dev | 1 |
| T-7.14 | impl | `sitemap.ts`, `metadataBase`, `generateMetadata`, OG image | US-7.7 | `src/app/sitemap.ts`, `src/app/layout.tsx`, `src/app/opengraph-image.tsx` | T-7.13 verde | pending | Dev | 2 |

## Épico 8: Relatórios

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-8.1 | `[TEST]` | KPIs por período/unidade com comparação | US-6.1 | `src/lib/relatorios/metrics.test.ts`, `e2e/relatorios.spec.ts` | **GIVEN** um período e uma unidade (ou todas) **WHEN** abro Relatórios **THEN** vejo KPIs (consultas, comparecimento, faturamento, novos pacientes) com comparação ao período anterior | pending | Dev | 2 |
| T-8.2 | impl | Rota `/hub/relatorios` (renomeia Dashboard) + filtro de unidade no `reports/summary` | US-6.1 | `src/app/hub/(workspace)/relatorios/**`, `src/app/api/reports/summary/route.ts` | T-8.1 verde | pending | Dev | 3 |
| T-8.3 | `[TEST]` | 375px: KPI antes, legenda abaixo, sem scroll-x, tabela alternativa (`chart-table-toggle`) | US-6.2 | `e2e/relatorios-mobile.spec.ts` | **GIVEN** uma tela de 375px **WHEN** vejo um gráfico **THEN** os KPIs vêm antes, a legenda fica abaixo, não há scroll horizontal e existe alternativa em tabela acessível | pending | Dev | 2 |
| T-8.4 | impl | `ChartCard` único + decisão ECharts × Recharts registrada no 05-Dev-Log | US-6.2 | `src/components/ui/chart-card.tsx`, `src/components/tenant/dashboard/**` | T-8.3 verde | pending | Dev | 3 |

## Épico 9: Financeiro

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-9.1 | `[TEST]` | Lançar recebimento (valor, forma, parcelas) gera auditoria | US-5.1 | `src/lib/financeiro/payments.test.ts`, `e2e/financeiro-lancar.spec.ts` | **GIVEN** uma consulta ou paciente **WHEN** lanço valor, forma de pagamento e parcelas **THEN** o recebimento fica registrado e auditado | pending | Dev | 2 |
| T-9.2 | impl | Tabela `payments` + rotas + tela `/hub/financeiro` | US-5.1 | `src/db/schema.ts`, `src/lib/financeiro/**`, `src/app/hub/(workspace)/financeiro/**` | T-9.1 verde | pending | Dev | 4 |
| T-9.3 | `[TEST]` | Visão recebido × pendente por período e unidade | US-5.2 | `src/lib/financeiro/summary.test.ts`, `e2e/financeiro-visao.spec.ts` | **GIVEN** recebimentos lançados **WHEN** abro o Financeiro **THEN** vejo recebido e pendente por período e por unidade | pending | Dev | 1 |
| T-9.4 | impl | Agregações + cards (OWNER) | US-5.2 | `src/lib/financeiro/summary.ts`, `src/components/tenant/financeiro/**` | T-9.3 verde | pending | Dev | 3 |

## Épico 10: Operação, Segurança e Entrega

| ID | Tipo | Descrição | US Origem | Arquivos Afetados | Critério BDD | Status | Owner | Est (h) |
|---|---|---|---|---|---|---|---|---|
| T-10.1 | `[TEST]` | Ações sensíveis geram registro de auditoria sem PII no log | US-10.1 | `src/lib/auditoria/audit.test.ts` | **GIVEN** criação/edição/exclusão em paciente, prontuário, financeiro ou equipe **WHEN** a ação conclui **THEN** um registro de auditoria guarda quem, o quê, quando e o id afetado (sem PII no log de aplicação) | pending | Dev | 1 |
| T-10.2 | impl | Tabela `audit_log` + `recordAudit()` nos contextos sensíveis | US-10.1 | `src/lib/auditoria/**`, `src/lib/{pacientes,financeiro,equipe}/**` | T-10.1 verde | pending | Dev | 2 |
| T-10.3 | `[TEST]` | Headers de segurança presentes (incl. CSP e frame-ancestors) | US-10.2 | `e2e/security-headers.spec.ts` | **GIVEN** qualquer resposta **WHEN** inspeciono os headers **THEN** existem CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy e frame-ancestors | pending | Dev | 1 |
| T-10.4 | impl | CSP com nonce (compatível com GSAP/Cloudinary/Sentry) no `proxy.ts`/`next.config.ts` | US-10.2 | `next.config.ts`, `src/proxy.ts` | T-10.3 verde | pending | Dev | 2 |
| T-10.5 | `[TEST]` | Restauração de teste num branch a partir do PITR | US-10.3 | Roteiro verificável no [[05-Dev-Log]] (checklist manual assinado) | **GIVEN** o banco de produção **WHEN** verifico a configuração **THEN** o PITR/backup do Neon está ativo e uma restauração de teste num branch funcionou | pending | Dev | 1 |
| T-10.6 | impl | Configurar retenção de histórico do Neon + proteger branch `production` + limpar usuários de teste | US-10.3 | Neon (console/MCP) | T-10.5 verificado | pending | Dev | 1 |
| T-10.7 | impl | Checklists SEO/segurança ([[Frontend Creative Protocol]] Fases 9–10), auditoria dos 3 agentes, UAT e [[Deploy Protocol]] (domínio, HTTPS, smoke) | Todas | Vercel, DNS | DoD do [[03-Planejamento]] | pending | Dev | 6 |

---

## Quality Gate (antes de iniciar implementação)

- [x] Artefato foi gerado a partir de `[[Tasks Template]]` como base (não escrito do zero, não versão resumida)
- [x] Cada User Story do `[[01-Escopo]]` tem pelo menos uma tarefa correspondente
- [x] Toda tarefa `impl` é precedida por uma tarefa `[TEST]`
- [x] IDs sequenciais por épico (`T-X.Y`)
- [x] Critérios BDD copiados literalmente do `[[01-Escopo]]`
- [x] Stack de cada arquivo afetado alinhada com `[[Preferencias Dev]]` (com as exceções aprovadas na constituição)

---

## Regras de Execução

1. **Uma tarefa por vez.** Nenhuma `in_progress` em paralelo.
2. **Status `done` exige testes passando.** Não marcar `done` se há teste vermelho.
3. **Erros encontrados** → registrar em `[[06-Erros]]` e propagar conforme `[[Immunological Error Memory]]`.
4. **Decisões técnicas tomadas durante a tarefa** → registrar em `[[05-Dev-Log]]`.

---

## Referências

- `[[01-Escopo]]` — fonte das User Stories
- `[[03-Planejamento]]` — EAP e cronograma
- `[[05-Dev-Log]]` — diário de decisões
- `[[06-Erros]]` — registro local de erros
- `[[Preferencias Dev]]` — stack e regras inegociáveis
- `[[Protocol-SpecKit]]` — protocolo que aciona este template
