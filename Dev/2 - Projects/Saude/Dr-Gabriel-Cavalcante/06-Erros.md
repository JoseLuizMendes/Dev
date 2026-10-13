---
template: "Errors"
version: 1.0
status: "Ativo"
tags:
  - erros
  - memoria-imunologica
  - local
projeto: "Site e Hub da Clinica"
cliente: "Dr. Gabriel Cavalcanti"
sincronizacao: "espelhado em [[4 - Error's Memory/INDEX]]"
---

# 🐛 06-Erros — Site e Hub da Clínica Dr. Gabriel Cavalcanti

> **Nota de Uso:** Inicializado pelo `[[Protocol-Bootstrap]]`. Toda entrada é propagada para a memória imunológica global.
>
> ⚠️ **ESPELHADO EM MEMÓRIA IMUNOLÓGICA GLOBAL.** Toda entrada aqui deve ser propagada para `[[4 - Error's Memory/INDEX]]` seguindo o protocolo de deduplicação de `[[Immunological Error Memory]]`.
>
> ⚠️ **Schema obrigatório:** idêntico ao do `[[Immunological Error Memory]]`. Não simplificar campos.

---

## Erros do Projeto

```yaml
- id: ERR-2026-0008
  título: "Conexão Neon criada no import do módulo quebra o build sem DATABASE_URL"
  categoria: Deployment
  stack:
    - Next.js
    - Neon
    - Drizzle
  severidade: média
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-09-18
  sintoma: "next build falha em ambiente sem DATABASE_URL; neon('') lança 'No database connection string was provided'"
  causa_raiz: "src/db/index.ts chamava neon(process.env.DATABASE_URL || '') no topo do módulo, então qualquer import — inclusive o que o build faz para tracing de rotas — exigia a variável"
  solução: "Criar o cliente sob demanda em getDb() e exportar `db` como proxy fino que delega, preservando os ~20 imports existentes"
  prevenção: "Nenhum módulo de servidor deve abrir conexão, ler env ou criar cliente no corpo do módulo. Conexão nasce na primeira chamada. Coberto por teste: importar o módulo sem env não pode lançar."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[deployment|Deployment]]"
    - "[[postgresql|PostgreSQL]]"

- id: ERR-2026-0009
  título: "Variável de funcionalidade parcial exigida no boot derruba a aplicação inteira"
  categoria: Deployment
  stack:
    - Next.js
    - Vercel
    - Zod
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-09-21
  sintoma: "Deploy marcado READY pela Vercel, mas TODA rota responde 500 — site público incluído. Log: 'Failed to prepare server: An error occurred while loading instrumentation hook: Configuração inválida: APP_URL (ausente)'"
  causa_raiz: "APP_URL entrou no schema validado no boot (instrumentation.ts) junto com uma funcionalidade ainda não implementada (recuperação de senha). Como EMAIL_TRANSPORT tem default `resend`, o boot passou a exigir também RESEND_API_KEY e EMAIL_FROM. O build NÃO executa o instrumentation, então o deploy sobe verde e só quebra na primeira requisição."
  solução: "Escopo parcial: requireEmailConfig() valida no primeiro envio, não no boot — o mesmo padrão de requireDatabaseUrl() e requireSessionSecret(). No boot ficam só as variáveis sem as quais NENHUMA rota funciona (DATABASE_URL, JWT_SECRET)."
  prevenção: "Variável só entra na validação de boot se a ausência dela impedir TODA a aplicação de servir. Variável de uma funcionalidade específica — e principalmente de uma ainda não entregue — vira escopo parcial, validado no primeiro uso. Critério prático: 'se faltar, a home ainda precisa abrir?' Se sim, não é de boot. Corolário: deploy verde na Vercel não prova que o servidor sobe, porque o build não roda o instrumentation hook."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[deployment|Deployment]]"
    - "[[ERR-2026-0008]] — mesma família: rigidez em tempo de carga/boot quebrando o deploy"

- id: ERR-2026-0010
  título: "min-height na cadeia de pais colapsa o height:100% do filho — a grade da agenda renderiza vazia"
  categoria: Layout & CSS
  stack: [Tailwind & Shadcn, React, FullCalendar]
  severidade: crítica
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/app/hub/(workspace)/agenda/page.tsx:5 · src/components/tenant/agenda/agenda-calendar.tsx:313,331,367 · src/components/tenant/app-shell.tsx:199"
  sintoma: "A agenda mostra só o cabeçalho dos dias. `.fc-view-harness` com altura 0, `.fc` com 60px, 92 slots e 21 eventos no DOM. Reproduz em 1920, 1440, 1280, 1024, 768 e 390. Zero erro de console. Resize não corrige."
  causa_raiz: "`min-h-[calc(100dvh-4rem)]` na página → `h-full` no componente → `flex-1 min-h-0` → `<FullCalendar height=\"100%\" />`. O pai só tem min-height, a altura computada é `auto`, e a porcentagem do filho colapsa para 0."
  solução: "Trocar `min-h-` por `h-` na cadeia inteira (`min-h-dvh` → `h-dvh` no shell; `min-h-[calc(...)]` → `h-[calc(...)]` na página). Verificado: forçando height no wrapper, `.fc` vai de 60px para 743px e os 21 eventos aparecem."
  prevenção: "Componente com `height=\"100%\"` exige altura DEFINIDA em toda a cadeia de ancestrais. `min-h-dvh` e `h-dvh` não são intercambiáveis. Guarda E2E: medir a altura do contêiner do calendário em dois viewports."
  recorrências: 0
  links: ["[[layout-css|Layout & CSS]]", "[[docs/auditoria-hub|Auditoria do hub §5.1]]"]

- id: ERR-2026-0011
  título: "Texto branco sobre as 8 cores categóricas de serviço reprova em contraste"
  categoria: Layout & CSS
  stack: [Tailwind & Shadcn, React]
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/app/globals.css:201 (`--color-on-event`) · src/components/tenant/agenda/colors.ts:21,36"
  sintoma: "Os 8 tokens `--color-service-*` medem 2,40 a 3,54:1 contra `#ffffff`. Oito reprovações de oito, no nome do paciente dentro do bloco da agenda. O PRODUCT.md assume WCAG 2.1 AA."
  causa_raiz: "Fundos categóricos escolhidos cor a cor (L 0,63–0,73) e a cor do texto definida uma vez, num token único, em outro lugar. Nessa faixa de clareza branco nunca passa — mas as duas decisões nunca foram medidas juntas."
  solução: "`--color-on-event: var(--site-ink)` (#0b1f1c). As mesmas 8 cores passam a medir 4,83 a 7,13:1. Um token resolve as oito."
  prevenção: "Fundo categórico e texto por cima são uma decisão só. Cor categórica distinguível vive em L 0,6–0,75, e aí o texto é escuro. Medir o par ao criar o token e deixar a medição escrita ao lado — como `globals.css` já faz na paleta do site."
  recorrências: 0
  links: ["[[layout-css|Layout & CSS]]", "[[docs/auditoria-hub|Auditoria do hub §5.2]]"]

- id: ERR-2026-0012
  título: "Prefetch dos Link da barra lateral baixa echarts e recharts na tela da agenda"
  categoria: Performance
  stack: [Next.js, React]
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/components/tenant/app-shell.tsx:96 (NAV) · src/components/tenant/dashboard/{charts,finance-chart}.tsx"
  sintoma: "Agenda, dashboard e clientes baixam os mesmos 34 arquivos, 938 KB comprimidos (o site público são 365 KB). 22 vêm do HTML; 13 chegam a partir de 657ms — echarts 200 KB, recharts 2×100 KB."
  causa_raiz: "Os `<Link>` da NAV estão sempre no viewport e o App Router faz prefetch automático. A agenda baixa as bibliotecas de gráfico das outras duas telas, que ela nunca usa."
  solução: "`prefetch={false}` na NAV com prefetch em `onMouseEnter`; `next/dynamic` nos gráficos e no FullCalendar; consolidar echarts × recharts (dívida já registrada em components/tenant/CLAUDE.md)."
  prevenção: "Navegação persistente é o caso em que o prefetch automático trabalha contra. Medir com `Network.loadingFinished` do CDP, não com a tabela do `next build` — ela não mostra o que o prefetch acrescenta."
  recorrências: 0
  links: ["[[performance|Performance]]", "[[docs/auditoria-hub|Auditoria do hub §2.3]]"]

- id: ERR-2026-0013
  título: "TenantProvider serializa toda a carga do hub atrás de /auth/me"
  categoria: Performance
  stack: [Next.js, TanStack Query, React]
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/components/tenant/tenant-context.tsx:51-78,103"
  sintoma: "2,0s até a tela servir com API a 150ms e CPU 4×, com 1,4s de 'Carregando clínica…'. /auth/me volta em 217ms; services, hours, settings, overrides e appointments só começam em 426ms."
  causa_raiz: "`enabled: isAuthed` nas quatro queries de arranque cria cascata de dois níveis, e o provider renderiza a tela de carregamento no lugar de toda a aplicação enquanto o /me não volta. O cookie já estava na requisição que montou o HTML."
  solução: "Prefetch no Server Component do layout com `prefetchQuery` + `dehydrate` + `<HydrationBoundary>`; extrair a regra das rotas para `lib/` para poder chamá-la direto no servidor."
  prevenção: "Autenticação é dado de servidor no App Router. `enabled:` dependendo de outra query no caminho de abertura de tela é cascata auto-infligida."
  recorrências: 0
  links: ["[[performance|Performance]]", "[[tanstack-query|TanStack Query]]", "[[docs/auditoria-hub|Auditoria do hub §2.2]]"]

- id: ERR-2026-0014
  título: "proxy.ts sem config.matcher roda em todos os assets"
  categoria: Deployment
  stack: [Next.js, Vercel]
  severidade: média
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/proxy.ts (sem `export const config`) · .next/server/functions-config-manifest.json"
  sintoma: "O manifesto traz `\"matchers\": [{ \"regexp\": \"^.*$\" }]`. Uma visita ao hub são ~40 invocações de função Node em vez de 1."
  causa_raiz: "Sem matcher, o padrão do Next é `/:path*`. O early-return `NextResponse.next()` não evita a invocação — só a torna barata."
  solução: "`export const config = { matcher: ['/hub/:path*'] }` — lista positiva do que o gate protege."
  prevenção: "Middleware nasce com matcher. Preferir a lista positiva à negativa com lookahead: com a positiva, rota nova nasce fora do middleware; com a negativa, nasce dentro por acidente. Conferir no manifesto da build."
  recorrências: 0
  links: ["[[deployment|Deployment]]", "[[nextjs|Next.js]]", "[[docs/auditoria-hub|Auditoria do hub §2.5]]"]

- id: ERR-2026-0015
  título: "Nenhum índice nas tabelas de operação — toda a autenticação indexada, nada do negócio"
  categoria: Performance
  stack: [PostgreSQL, Drizzle]
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/db/schema.ts:157,198,210,229 (services, patients, appointments, teeth_procedures)"
  sintoma: "sessions, password_reset_requests, login_attempts e audit_log têm índice. appointments, patients, teeth_procedures e services não têm nenhum — e a agenda filtra appointments por intervalo a cada troca de semana."
  causa_raiz: "A feature de sessão nasceu com critério de desempenho explícito e trouxe os índices junto. As tabelas de operação vieram de um épico anterior sem esse critério, e com poucas centenas de linhas nada demora."
  solução: "Migração com índice em appointments(start_time), appointments(patient_id), appointments(service_id), teeth_procedures(appointment_id), teeth_procedures(patient_id), patients(phone)."
  prevenção: "Índice é parte do schema, não otimização posterior. Ao declarar a tabela: por qual coluna ela vai ser filtrada ou ordenada? Toda resposta vira índice na mesma migração."
  recorrências: 0
  links: ["[[performance|Performance]]", "[[drizzle|Drizzle]]", "[[docs/auditoria-hub|Auditoria do hub §3.2]]"]

- id: ERR-2026-0016
  título: "Relatório agrega no fuso do processo, e em produção o processo roda em UTC"
  categoria: Data Modeling
  stack: [Next.js, Vercel, PostgreSQL]
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/app/api/reports/summary/route.ts:112,120,121"
  sintoma: "Os gráficos 'por dia da semana' e 'por hora' saem deslocados em 3 horas. Uma consulta das 21h de terça em Vitória é contada como quarta, 0h."
  causa_raiz: "`toISOString().split('T')[0]` (dia em UTC), `d.getDay()` e `d.getHours()` (fuso do processo). `clinic_settings.timezone` guarda America/Sao_Paulo e nenhuma das três linhas o lê. Local passa, Vercel não."
  solução: "Agregar no banco com `date_trunc(... AT TIME ZONE <fuso da clínica>)` em vez de montar buckets em JavaScript."
  prevenção: "Todo bucket de relatório diz em que fuso agrupa, e é o do negócio. `getDay`, `getHours` e `toISOString().split('T')[0]` não aparecem em código de relatório. Teste: fixar TZ=UTC na suíte e conferir um agendamento noturno."
  recorrências: 0
  links: ["[[data-modeling|Data Modeling]]", "[[docs/auditoria-hub|Auditoria do hub §3.5]]"]

- id: ERR-2026-0017
  título: "Unidade (Vila Velha / Serra) não existe no schema, e UNIQUE(day_of_week) proíbe o modelo certo"
  categoria: Data Modeling
  stack: [PostgreSQL, Drizzle]
  severidade: crítica
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  localização: "src/db/schema.ts:169-176 (business_hours, day_of_week UNIQUE) · 210 (appointments, sem unit_id)"
  sintoma: "A clínica atende em duas unidades, o site fala das duas, e o hub não responde 'em que unidade é essa consulta?' nem 'quanto cada unidade faturou?'. UNIQUE em day_of_week permite uma única grade de horários para a clínica inteira."
  causa_raiz: "O schema saiu das telas do MVP, não do mundo que o cliente descreveu. 'Unidade' aparecia só como conteúdo do site — endereço e texto — e nunca virou entidade. O UNIQUE cristalizou a suposição de clínica única em constraint."
  solução: "Migração: tabela `units`, `unit_id` em appointments e em business_hours, UNIQUE composto `(unit_id, day_of_week)` no lugar do simples. Decisão do dev em 2026-10-12: separação completa (agenda, horários e relatórios por unidade)."
  prevenção: "Antes do schema, listar os substantivos que o cliente usa para descrever a operação e conferir um a um se viraram tabela. Substantivo do cliente que só existe como conteúdo é modelo faltando. E nunca declarar UNIQUE sem responder 'único dentro de quê?'."
  recorrências: 0
  links: ["[[data-modeling|Data Modeling]]", "[[drizzle|Drizzle]]", "[[docs/auditoria-hub|Auditoria do hub §4.1]]"]

# Candidatos observados no onboarding, a registrar se reincidirem:
# - Sessões assinadas com segredo de fallback no código quando JWT_SECRET faltava (corrigido na F0, PR #1)
# - App local apontando para o branch Neon `production` (corrigido em 2026-09-17)
# - `skills add vercel/next.js` falha no Windows por limite de caminho (contornado com core.longpaths via env)
```

---

## Quality Gate (antes de propagar)

- [x] Artefato foi gerado a partir de `[[Errors Template]]` como base
- [x] ID consultado no `[[4 - Error's Memory/INDEX]]` (não duplicar) — ERR-2026-0008 e ERR-2026-0009, sequenciais após 0007
- [x] Todos os campos obrigatórios preenchidos (`sintoma`, `causa_raiz`, `solução`, `prevenção`)
- [x] `stack` lista pelo menos uma tecnologia — Next.js, Neon, Drizzle (0008) · Next.js, Vercel, Zod (0009)
- [x] `severidade` definida (não vazio) — média (0008) · alta (0009)
- [x] Entrada criada em `[[INDEX]]` global + `by-category/deployment` + `by-stack/postgresql` (0008)
- [x] ERR-2026-0009 indexado em `[[INDEX]]` + `by-category/deployment` + `by-stack/nextjs` (arquivo novo)
- [x] Propagado para a memória imunológica global em 2026-09-21 (0008 e 0009)
- [x] ERR-2026-0010 a 0017 (auditoria do hub, 2026-10-12) registrados aqui e no `[[INDEX]]` global
- [x] Categorias novas criadas: `by-category/layout-css` e `by-category/data-modeling`
- [x] Stacks novas criadas: `by-stack/drizzle`, `by-stack/tanstack-query`, `by-stack/fullcalendar`
- [x] Levantamento completo, com método de medição: `dr-gabriel-cavalcante-web/docs/auditoria-hub.md`

---

## Fluxo de Propagação

```mermaid
flowchart TD
    A([Erro encontrado durante implementacao]) --> B[Registrar AQUI primeiro]
    B --> C{Existe no INDEX global?}
    C -->|Sim| D[Incrementar recorrencias no global]
    C -->|Nao| E[Criar entrada nova com ID sequencial]
    D --> F[Adicionar wikilink deste projeto]
    E --> G[Indexar em by-category + by-stack]
    F --> G
    G --> H{recorrencias >= 2?}
    H -->|Sim| I[Promover a regra em Preferencias Dev]
    H -->|Nao| J([Erro registrado])
    I --> J
```

> Protocolo completo: `[[Immunological Error Memory]]`

---

## Referências

- `[[Immunological Error Memory]]` — protocolo global
- `[[4 - Error's Memory/INDEX]]` — catálogo global
- `[[Preferencias Dev]]` — destino das regras promovidas (recorrências >= 2)
- `[[Protocol-Bootstrap]]` — protocolo que inicializa este arquivo
