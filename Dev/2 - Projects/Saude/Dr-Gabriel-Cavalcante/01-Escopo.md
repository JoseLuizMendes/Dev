---
template: "Requirements & Scope"
version: 2.2
status: "Aprovado pelo dev (2026-09-18) — pendente assinatura do cliente"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
cliente: "Dr. Gabriel Cavalcanti"
projeto: "Site e Hub da Clinica"
nicho: "Saude"
classificacao: "Full-stack do Zero"
data_inicio: "2026-09-16"
data_entrega: "[PENDENTE — perguntar ao dev: data de entrega acordada com o cliente]"
valor: "[PENDENTE — perguntar ao dev: valor do projeto]"
package_manager: "pnpm"
frontend_stack: "Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui"
backend_stack: "Next.js Route Handlers + Drizzle ORM + Neon Postgres"
cloud_stack: "Vercel + Neon"
dependencies: "drizzle-orm @neondatabase/serverless jose bcryptjs @tanstack/react-query @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction @fullcalendar/list recharts echarts date-fns next-themes react-day-picker @playwright/test"
email_service: "[PENDENTE — perguntar ao dev: provedor de e-mail transacional para recuperação de senha (sugestão: Resend)]"
storage_service: "Cloudinary"
payment_gateway: "N/A"
midia: "sim"
---

# 📋 Formulário de Escopo e Requisitos: Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Nota de Uso:** Documento primário de intake. A IA extrai o frontmatter para gerar automaticamente o Contrato Dinâmico e o Planejamento.
>
> **Papel no fluxo:** consolida o diagnóstico ([[00-Diagnostico-Inicial]]), a arquitetura da informação
> ([[Arquitetura-Informacao]]) e as decisões do dev registradas nesta sessão. Fonte oficial para contrato,
> planejamento e `/speckit-specify` por feature.
>
> **Padrões assumidos (decisão do dev, 2026-09-18):** as 7 perguntas pendentes ao doutor viram **padrões
> configuráveis** (princípio IV da constituição). Mudar = editar dado no hub, não código. Ver §4 Módulo 8 e §5.4.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Dr. Gabriel Cavalcanti — implantodontia (Vila Velha e Serra, ES) |
| **Ponto de Contato (PO)** | [PENDENTE — perguntar ao dev: contato do cliente (nome/e-mail/telefone do PO)] |
| **Nicho de Mercado** | Saúde / Odontologia (implantodontia e cirurgia bucomaxilofacial) |
| **Data de Início** | 2026-09-16 |
| **Previsão de Entrega** | [PENDENTE — perguntar ao dev: data de entrega acordada com o cliente] |
| **Valor do Projeto** | [PENDENTE — perguntar ao dev: valor do projeto] |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central

- **Quem sente a dor:** o Dr. Gabriel (implantodontista, atende em 2 unidades) e sua equipe de
  recepção; do lado de fora, pacientes com perda dentária que pesquisam tratamento pelo celular.
- **Sintoma observável:** o site atual (drgabrielcavalcanti.com.br, feito por terceiro) é uma landing
  estática com o mesmo CTA repetido 7 vezes, sem páginas por tratamento ou unidade, e o doutor não
  consegue alterar conteúdo sem depender de terceiros. A gestão de agenda/pacientes não está integrada ao site.
- **Causa raiz no negócio:** ferramenta pronta de terceiro + ausência de um sistema próprio de gestão
  com conteúdo editável pelo doutor.
- **Impacto quantificado:** [PENDENTE — perguntar ao dev: volume atual de leads/mês, taxa de agendamento
  vinda do site e horas/semana gastas pela equipe com agenda manual]

### 2.2 A Visão da Solução

- **Resultado-chave esperado:** site público que converte visitante em avaliação agendada (WhatsApp por
  unidade) + hub onde doutor e equipe operam agenda, pacientes, financeiro, relatórios e o próprio
  conteúdo do site, sem depender do dev para questões operacionais.
- **Métrica de sucesso:** [PENDENTE — perguntar ao dev: meta de conversão (ex.: cliques no WhatsApp/visita)
  e meta de adoção do hub (ex.: 100% das consultas registradas no hub em 30 dias)]
- **Horizonte de impacto:** [PENDENTE — perguntar ao dev: prazo esperado de impacto após go-live]
- **Diferencial competitivo:** sistema próprio (sem mensalidade de SaaS genérico), com site e agenda no
  mesmo produto, conteúdo gerenciável pelo doutor e experiência premium (hero "A Porta").

### 2.3 Público-Alvo

- **Persona primária (site):** adulto 40+ com perda dentária, vergonha de sorrir ou dificuldade de
  mastigar; acessa majoritariamente pelo celular; decide por confiança (autoridade + prova social).
- **Persona primária (hub):** equipe de recepção (STAFF) — uso diário, vários acessos por dia, desktop
  na recepção e celular.
- **Persona secundária:** o doutor (OWNER) — visão gerencial, configurações e conteúdo; celular e desktop.
- **Contexto de uso:** site mobile-first; hub em desktop (recepção) e mobile (doutor em trânsito).
- **Volume estimado:** [PENDENTE — perguntar ao dev: visitas/mês esperadas e nº de pessoas na equipe]

### 2.4 Métricas de Sucesso (KPIs)
| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP | < 2.5s |
| **Performance** | INP (substitui FID) | < 200ms |
| **Performance** | CLS | < 0.1 |
| **Negócio** | Cliques em "Agendar avaliação"/WhatsApp por visita | [PENDENTE — perguntar ao dev: meta] |
| **Qualidade** | Cobertura de Testes E2E | 100% dos critérios BDD |
| **Qualidade** | Conformidade WCAG | 2.1 AA |

---

## 3. Classificação do Serviço

- [ ] **Frontend do Zero**
- [x] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend**
- [ ] **Refatoração Full-stack**

**Justificativa:** para o cliente, o produto é novo (site próprio + sistema de gestão + banco + deploy).
A base de código existente pertence ao dev e é ponto de partida técnico, não sistema legado do cliente —
por isso não se enquadra em "Refatoração".

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Para IA:** cada requisito vira tarefa via `/speckit-tasks`. O TDD se aplica a cada critério — teste
> escrito antes da implementação. Personas: **Paciente**, **Equipe** (STAFF), **Doutor** (OWNER).

### Módulo 1: Acesso, Sessão e Equipe
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como Equipe, quero entrar com e-mail e senha para acessar o hub | **GIVEN** um usuário ativo **WHEN** envia credenciais válidas em `/hub/login` **THEN** é criada uma sessão no banco, o cookie httpOnly recebe só o id opaco e ele é levado a `/hub/agenda` | 🔥 Alta |
| **US-1.2** | Como Equipe, quero sair do hub com segurança | **GIVEN** uma sessão ativa **WHEN** clica em "Sair" **THEN** a sessão é revogada no banco, o cookie é removido, o cache de dados é limpo e o mesmo cookie reutilizado recebe 401 | 🔥 Alta |
| **US-1.3** | Como Doutor, quero proteção contra tentativas de invasão no login | **GIVEN** e-mail inexistente ou senha errada **WHEN** tenta entrar **THEN** recebe a mesma mensagem genérica, mesmo status e tempo semelhante; **AND GIVEN** mais de N tentativas por IP ou conta em 15 min **THEN** recebe 429 | 🔥 Alta |
| **US-1.4** | Como Doutor, quero cadastrar, editar e desativar pessoas da equipe | **GIVEN** que sou OWNER **WHEN** crio um acesso com nome, e-mail, senha e papel **THEN** a pessoa consegue entrar; **AND WHEN** desativo o acesso **THEN** as sessões dela são revogadas | 🔥 Alta |
| **US-1.5** | Como Doutor, quero que a equipe só acesse o que o papel permite | **GIVEN** um usuário STAFF **WHEN** chama uma rota restrita (relatórios, configurações, equipe) **THEN** a API responde 403 e o item não aparece no menu | 🔥 Alta |
| **US-1.6** | Como Equipe, quero trocar minha própria senha | **GIVEN** que estou logado **WHEN** informo a senha atual e uma nova válida **THEN** a senha muda e as minhas outras sessões são revogadas | 🟡 Média |
| **US-1.7** | Como Equipe, quero recuperar a senha esquecida | **GIVEN** qualquer e-mail **WHEN** peço recuperação **THEN** vejo sempre "se o e-mail existir, enviamos as instruções"; **AND GIVEN** um e-mail existente **THEN** é enviado um link de uso único que expira em 30 min | 🟡 Média |

### Módulo 2: Unidades e Horários
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como Doutor, quero cadastrar as unidades da clínica | **GIVEN** que sou OWNER **WHEN** cadastro uma unidade (nome, endereço, telefone/WhatsApp, link do mapa, ativa) **THEN** ela aparece na agenda, no site (`/unidades/<slug>`) e nos filtros | 🔥 Alta |
| **US-2.2** | Como Doutor, quero definir o horário de atendimento de cada unidade | **GIVEN** uma unidade **WHEN** defino abertura, fechamento, dias de folga e intervalos **THEN** a agenda daquela unidade só permite horários dentro dessa grade | 🔥 Alta |
| **US-2.3** | Como Doutor, quero registrar exceções (feriado, horário especial) por unidade | **GIVEN** uma data com exceção na unidade **WHEN** a equipe tenta agendar nela **THEN** a agenda respeita a exceção | 🟡 Média |

### Módulo 3: Agenda
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-3.1** | Como Equipe, quero agendar um paciente numa unidade e tratamento | **GIVEN** um horário livre na grade da unidade **WHEN** crio o agendamento com paciente, tratamento e unidade **THEN** ele aparece na agenda com a duração do tratamento | 🔥 Alta |
| **US-3.2** | Como Equipe, quero ver a agenda filtrada por unidade | **GIVEN** agendamentos nas 2 unidades **WHEN** escolho uma unidade no filtro **THEN** só vejo os agendamentos dela, e o filtro fica salvo por usuário | 🔥 Alta |
| **US-3.3** | Como Equipe, quero ser impedida de marcar horários inválidos | **GIVEN** um horário no passado, fora da grade ou em conflito na mesma unidade **WHEN** tento agendar ou mover **THEN** a operação é recusada (409/422) com mensagem clara e o card volta ao lugar | 🔥 Alta |
| **US-3.4** | Como Equipe, quero atualizar o status da consulta | **GIVEN** uma consulta **WHEN** marco confirmado, concluído, faltou ou cancelado **THEN** o status é salvo e a fase visual (aguardando/atrasado/resolvido) se atualiza | 🔥 Alta |

### Módulo 4: Pacientes
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-4.1** | Como Equipe, quero uma lista de pacientes pesquisável | **GIVEN** pacientes cadastrados **WHEN** busco por nome ou telefone **THEN** vejo os resultados paginados vindos da tabela de pacientes | 🔥 Alta |
| **US-4.2** | Como Equipe, quero cadastrar e editar pacientes | **GIVEN** os dados obrigatórios (nome, telefone) **WHEN** salvo **THEN** o paciente é criado/atualizado e pode ser escolhido ao agendar | 🔥 Alta |
| **US-4.3** | Como Doutor, quero a ficha do paciente com histórico e odontograma | **GIVEN** um paciente **WHEN** abro a ficha **THEN** vejo dados, consultas anteriores/futuras e o odontograma; STAFF vê em modo leitura (padrão configurável) | 🟡 Média |

### Módulo 5: Financeiro
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-5.1** | Como Equipe, quero registrar um recebimento | **GIVEN** uma consulta ou paciente **WHEN** lanço valor, forma de pagamento e parcelas **THEN** o recebimento fica registrado e auditado | 🟡 Média |
| **US-5.2** | Como Doutor, quero ver valores pendentes e recebidos | **GIVEN** recebimentos lançados **WHEN** abro o Financeiro **THEN** vejo recebido e pendente por período e por unidade | 🟡 Média |

### Módulo 6: Relatórios
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-6.1** | Como Doutor, quero indicadores do período | **GIVEN** um período e uma unidade (ou todas) **WHEN** abro Relatórios **THEN** vejo KPIs (consultas, comparecimento, faturamento, novos pacientes) com comparação ao período anterior | 🟡 Média |
| **US-6.2** | Como Doutor, quero gráficos legíveis no celular | **GIVEN** uma tela de 375px **WHEN** vejo um gráfico **THEN** os KPIs vêm antes, a legenda fica abaixo, não há scroll horizontal e existe alternativa em tabela acessível | 🟡 Média |

### Módulo 7: Site Público
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-7.1** | Como Paciente, quero entender em segundos se a clínica resolve meu caso | **GIVEN** que abro a home no celular **WHEN** a página carrega **THEN** vejo headline de resultado, CTA "Agendar minha avaliação" e as seções do funil na ordem definida na [[Arquitetura-Informacao]] | 🔥 Alta |
| **US-7.2** | Como Paciente, quero uma página para cada tratamento | **GIVEN** um tratamento marcado "mostrar no site" **WHEN** acesso `/tratamentos/<slug>` **THEN** vejo o conteúdo dele, FAQ relacionado e CTA; tratamento oculto dá 404 | 🔥 Alta |
| **US-7.3** | Como Paciente, quero saber onde fica cada unidade | **GIVEN** uma unidade ativa **WHEN** acesso `/unidades/<slug>` **THEN** vejo endereço, mapa, dias de atendimento e o JSON-LD `Dentist` da unidade | 🔥 Alta |
| **US-7.4** | Como Paciente, quero agendar pelo WhatsApp com a mensagem pronta | **GIVEN** que clico em "Agendar" numa página de unidade/tratamento **WHEN** o WhatsApp abre **THEN** o número é o da unidade (ou o geral, se vazio) e a mensagem já cita unidade e tratamento | 🔥 Alta |
| **US-7.5** | Como Paciente, quero uma abertura marcante que não me atrapalhe | **GIVEN** a home **WHEN** rolo a página **THEN** a sequência "A Porta" avança conforme o scroll; **AND GIVEN** `prefers-reduced-motion` ou "Pular introdução" **THEN** vou direto ao conteúdo sem animação | 🟡 Média |
| **US-7.6** | Como Paciente, quero saber como meus dados são tratados | **GIVEN** qualquer página **WHEN** acesso "Privacidade" no rodapé **THEN** vejo a política de privacidade (LGPD) editável pelo doutor | 🔥 Alta |
| **US-7.7** | Como Doutor, quero que o site seja encontrado no Google | **GIVEN** o site publicado **WHEN** um buscador acessa **THEN** há metadata por página, `sitemap.xml`, `robots.txt` (hub bloqueado), canonical, OG 1200×630 e JSON-LD por unidade | 🔥 Alta |

### Módulo 8: Conteúdo do Site (CMS do Doutor)
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-8.1** | Como Doutor, quero editar os textos do site | **GIVEN** que sou OWNER **WHEN** altero headline, subtítulo, bio ou contatos em Configurações → Site e publico **THEN** o site mostra o novo texto sem deploy | 🔥 Alta |
| **US-8.2** | Como Doutor, quero gerenciar depoimentos | **GIVEN** depoimentos cadastrados e marcados como autorizados **WHEN** abro a home **THEN** a seção aparece; **AND GIVEN** nenhum depoimento **THEN** a seção não é renderizada | 🟡 Média |
| **US-8.3** | Como Doutor, quero gerenciar o FAQ | **GIVEN** perguntas cadastradas com ordem **WHEN** abro a home/tratamento **THEN** o FAQ aparece na ordem e com JSON-LD `FAQPage` | 🟡 Média |
| **US-8.4** | Como Doutor, quero ligar ou desligar o bloco de garantia | **GIVEN** a flag de garantia desligada (padrão) **WHEN** abro o site **THEN** o bloco não aparece; **AND WHEN** ligo e escrevo os termos **THEN** ele aparece | 🟢 Baixa |
| **US-8.5** | Como Doutor, quero cadastrar tratamentos que alimentam site e agenda | **GIVEN** um tratamento com nome, slug, duração, preço interno, resumo, texto e "mostrar no site" **WHEN** salvo **THEN** ele fica disponível na agenda e (se marcado) no site | 🔥 Alta |

### Módulo 9: Design System e Acessibilidade
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-9.1** | Como Paciente, quero um site legível em claro e escuro | **GIVEN** qualquer página em tema claro ou escuro **WHEN** um auditor mede o contraste **THEN** todo texto normal tem ≥ 4.5:1 e todas as cores vêm de tokens | 🔥 Alta |
| **US-9.2** | Como Dev, quero impedir controles fora do kit | **GIVEN** um `input`/`select`/`label`/`button`/`textarea` em JSX fora de `components/ui` **WHEN** o lint roda **THEN** falha com erro | 🔥 Alta |
| **US-9.3** | Como Paciente, quero usar o site só com teclado | **GIVEN** a navegação por Tab **WHEN** percorro site e hub **THEN** todo controle tem foco visível, ordem lógica e alvo ≥ 44px | 🔥 Alta |

### Módulo 10: Operação, Segurança e Entrega
| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-10.1** | Como Doutor, quero rastrear quem mexeu em dados sensíveis | **GIVEN** criação/edição/exclusão em paciente, prontuário, financeiro ou equipe **WHEN** a ação conclui **THEN** um registro de auditoria guarda quem, o quê, quando e o id afetado (sem PII no log de aplicação) | 🟡 Média |
| **US-10.2** | Como Doutor, quero o site protegido por cabeçalhos de segurança | **GIVEN** qualquer resposta **WHEN** inspeciono os headers **THEN** existem CSP, HSTS, nosniff, Referrer-Policy, Permissions-Policy e frame-ancestors | 🔥 Alta |
| **US-10.3** | Como Doutor, quero backup dos dados | **GIVEN** o banco de produção **WHEN** verifico a configuração **THEN** o PITR/backup do Neon está ativo e uma restauração de teste num branch funcionou | 🔥 Alta |

---

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto
- **Tipo de Plataforma:** Web (site público + hub) — app único Next.js, Layered com contextos em `src/lib/<contexto>`
- **Front-End:** Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui + React Query + React Hook Form + Zod + GSAP + Lenis
- **Back-End & BD:** Next.js Route Handlers + Drizzle ORM + Neon Postgres (exceção aprovada ao Prisma — ver constituição)
- **Infra/Cloud:** Vercel + Neon (branches `production` e `dev`)

### 5.2 Dependências Extras
> Base da stack (Next.js, GSAP, Lenis, RHF, Zod, Vitest, DX) é instalada pelo bootstrap.

```
drizzle-orm @neondatabase/serverless jose bcryptjs @tanstack/react-query @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction @fullcalendar/list recharts echarts date-fns next-themes react-day-picker @playwright/test
```

### 5.3 Integrações com APIs
| Serviço | Tipo | Finalidade |
|---|---|---|
| N/A — sem pagamento online (fora de escopo) | Pagamentos | — |
| [PENDENTE — perguntar ao dev: provedor de e-mail (sugestão: Resend)] | Comunicação | Recuperação de senha |
| Cloudinary | Armazenamento | Imagens de tratamentos e do site (upload assinado pelo servidor) |
| WhatsApp (link `wa.me`) | Comunicação | Agendamento de avaliação (sem API, só deep link) |

### 5.4 Entidades de Dados
| Entidade | Campos Principais | Relacionamentos |
|---|---|---|
| `users` | name, email, password_hash, role (OWNER/STAFF), active | 1:N sessions, audit_log |
| `sessions` (nova) | id opaco (hash), user_id, expires_at, revoked_at, ip, user_agent | N:1 users |
| `units` (nova) | name, slug, address, phone, whatsapp, maps_url, active, sort_order | 1:N business_hours, overrides, appointments |
| `business_hours` / `business_breaks` / `business_date_overrides` | + `unit_id` | N:1 units |
| `services` (tratamentos) | name, slug, duration, price_in_cents, summary, body, image_url, show_on_site, sort_order | 1:N appointments |
| `patients` | name, phone, email, birth_date, notes | 1:N appointments, teeth_procedures, payments |
| `appointments` | + `unit_id`, patient_id, service_id, start/end, status | N:1 units, patients, services |
| `teeth_procedures` | tooth_fdi, procedure, note | N:1 appointments, patients |
| `payments` (nova) | patient_id, appointment_id?, amount_cents, method, installments, status, paid_at, unit_id | N:1 patients |
| `site_content` (nova) | key, value (tipado), updated_by | — |
| `testimonials` / `faqs` (novas) | texto, autor, autorizado, ativo, ordem / pergunta, resposta, service_id?, ordem | faqs N:1 services (opcional) |
| `role_permissions` (nova, matriz central) | role, permission, allowed | — |
| `audit_log` (nova) | user_id, action, entity, entity_id, at | N:1 users |
| `clinic_settings` | clinic_name, allow_customer_booking, timezone, slot, whatsapp_default, show_guarantee, guarantee_text | — |

**Padrões configuráveis assumidos (perguntas ao doutor, decisão do dev 2026-09-18):**

| # | Tema | Padrão inicial (dado editável) |
|---|---|---|
| 1 | Tratamentos | Implantes dentários · Dentes fixos em um dia · Prótese sobre implante · Enxerto ósseo · Cirurgia bucomaxilofacial · Avaliação |
| 2 | Dias por unidade | Cada unidade com grade própria; seed seg–sex 08:00–18:00 nas duas |
| 3 | Garantia | `show_guarantee = false` até o doutor definir os termos |
| 4 | Depoimentos | Seção só renderiza com ≥ 1 depoimento autorizado |
| 5 | WhatsApp | Número por unidade; fallback `whatsapp_default` = (27) 99760-8985 |
| 6 | Permissões STAFF | Prontuário: leitura · Financeiro: lançar, sem relatório · Relatórios/Configurações/Equipe: sem acesso |
| 7 | Convênio/parcelamento | Sem convênio; parcelamento informado só via FAQ editável |

### 5.5 Sistemas de Terceiros
Site atual (drgabrielcavalcanti.com.br, LoopfyDesign) será substituído no go-live; o domínio é mantido
(acesso ao registro.br: [PENDENTE — perguntar ao dev: quem detém o acesso ao registro.br e se há e-mail/MX no domínio]).

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance
- [ ] LCP < 2.5s | INP < 200ms | CLS < 0.1 (mobile, 4G)
- [ ] Bundle JS inicial do site público < 200kb gzip (hub pode carregar FullCalendar sob demanda)
- [ ] Imagens AVIF + WebP; frames do hero com carregamento progressivo

### 6.2 Segurança
- [ ] Sessão server-side revogável + cookie httpOnly/secure/sameSite | HTTPS obrigatório (HSTS)
- [ ] zod em toda entrada | OWASP Top 10 | anti-IDOR | rate limit de auth | CSP

### 6.3 Acessibilidade
- [ ] WCAG 2.1 AA | `prefers-reduced-motion` respeitado
- [ ] Navegação por teclado | Contraste adequado em claro e escuro | zoom liberado

### 6.4 Escalabilidade
- [ ] Arquitetura stateless (sessão no banco) | cache de conteúdo do site com revalidação ao publicar
- [ ] Rate limiting nos endpoints de auth e formulários públicos

---

## 7. Limites de Escopo e Exclusões

1. **Criação de conteúdo** — textos finais, fotos reais e depoimentos são fornecidos/aprovados pelo cliente
   (o dev entrega a estrutura de copy e a mídia gerada por IA conforme [[Hero-Door-Reveal]]).
2. **Pagamento online, convênios e emissão fiscal** — fora de escopo (financeiro é registro interno).
3. **Área do paciente com login, blog e agendas separadas por múltiplos profissionais** — fora de escopo.
4. **Suporte perpétuo pós-entrega** — [PENDENTE — perguntar ao dev: período de garantia/suporte pós-entrega].

Solicitações novas exigem: ordem de mudança assinada + orçamento adicional + replanejamento via `/speckit-plan`.

---

## 8. Aprovação e Assinaturas

**Cliente:** Dr. Gabriel Cavalcanti — **Data:** [PENDENTE — assinatura do cliente]

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** 2026-09-18 (aprovação técnica do escopo)

---

> **Próximo Passo:** este documento é processado pela IA para:
> 1. Gerar **Contrato Dinâmico** via [[Dynamic Contract Engine]] → [[02-Contrato]]
> 2. Executar **Bootstrap de Dependências** via [[Preferencias Dev]]
> 3. Criar **Planejamento Técnico** via [[Planning Template]] → [[03-Planejamento]]
> 4. Inicializar **Spec-Kit SDD+TDD** para desenvolvimento
