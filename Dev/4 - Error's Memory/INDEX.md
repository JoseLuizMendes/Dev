# Error Memory — Índice Global 🛡️

> Este arquivo é o catálogo geral de **todos os erros conhecidos** no ecossistema. O agente DEVE lê-lo no boot de toda sessão e consultá-lo antes de cada `/speckit.plan`.
>
> Protocolo completo: [[Immunological Error Memory]]

---

## Estatísticas

| Métrica | Valor |
|---|---|
| **Total de erros registrados** | 24 |
| **Erros com recorrências >= 2** | 0 |
| **Regras promovidas para M5** | 0 |
| **Última atualização** | 2026-10-15 |

---

## Índice de Categorias

| Categoria | Arquivo | Qtd. Erros |
|---|---|---|
| Conflitos de dependências | [[dependency-breaks\|Dependency Breaks]] | 0 |
| Integração de APIs | [[api-integration\|API Integration]] | 1 |
| Autenticação e segurança | [[auth-security\|Auth & Security]] | 5 |
| Performance | [[performance\|Performance]] | 4 |
| Gerenciamento de estado | [[state-management\|State Management]] | 1 |
| Deploy e infraestrutura | [[deployment\|Deployment]] | 6 |
| Layout e CSS | [[layout-css\|Layout & CSS]] | 2 |
| Modelagem de dados | [[data-modeling\|Data Modeling]] | 3 |

---

## Índice por Stack

| Tecnologia | Arquivo | Qtd. Erros |
|---|---|---|
| React.js | [[react\|React]] | 5 |
| NestJS | [[nestjs\|NestJS]] | 0 |
| Tailwind + Shadcn | [[tailwind-shadcn\|Tailwind & Shadcn]] | 2 |
| GSAP + Lenis | [[gsap-lenis\|GSAP & Lenis]] | 0 |
| Next-Auth (Auth.js v5) | [[next-auth\|Next-Auth]] | 2 |
| Prisma | [[prisma\|Prisma]] | 2 |
| PostgreSQL | [[postgresql\|PostgreSQL]] | 8 |
| Zustand | [[zustand\|Zustand]] | 1 |
| Next.js | [[nextjs\|Next.js]] | 10 |
| Drizzle | [[drizzle\|Drizzle]] | 3 |
| TanStack Query | [[tanstack-query\|TanStack Query]] | 1 |
| Sentry | [[sentry\|Sentry]] | 1 |
| FullCalendar | [[fullcalendar\|FullCalendar]] | 1 |

---

## Aprendizados Globais

- [[GLOBAL-ERRORS]]

---

## Registro de Erros

```yaml
- id: ERR-2026-0001
  título: "Excesso de artefatos no onboarding inicial"
  categoria: Deployment
  stack: []
  severidade: baixa
  projeto_origem: "Mock/Onboarding-Teste"
  data_descoberta: 2026-03-22
  sintoma: "Fluxo mockado gerou documentos além do necessário para o cliente"
  causa_raiz: "Falta de regra explícita de saída mínima por projeto"
  solução: "Limitar saída do projeto a 3 arquivos locais + erros globais"
  prevenção: "Seguir checklist de entrega mínima antes de finalizar onboarding"
  recorrências: 0
  links:
    - "[[GLOBAL-ERRORS]]"

- id: ERR-2026-0002
  título: "Interpretação incorreta de saída mínima como conteúdo resumido"
  categoria: Deployment
  stack: []
  severidade: baixa
  projeto_origem: "Mock/Onboarding-Teste"
  data_descoberta: 2026-03-22
  sintoma: "Escopo e contrato entregues com estrutura reduzida, sem aderência aos templates base"
  causa_raiz: "Ambiguidade entre 'mínimo de artefatos' e 'profundidade de preenchimento'"
  solução: "Manter 3 arquivos locais no onboarding, porém com estrutura completa dos templates oficiais"
  prevenção: "Validar 2 critérios antes de finalizar: (1) quantidade de arquivos, (2) aderência estrutural ao template"
  recorrências: 0
  links:
    - "[[GLOBAL-ERRORS]]"

- id: ERR-2026-0003
  título: "Auth.js v5 com Credentials Provider exige session.strategy='jwt'"
  categoria: Auth & Security
  stack:
    - Next-Auth
    - React
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-04
  sintoma: "Sessão de credentials não persiste; usuário deslogado logo após login"
  causa_raiz: "Auth.js v5 com Credentials NÃO suporta session.strategy='database' — só 'jwt'"
  solução: "Definir explicitamente session.strategy='jwt' no auth.ts; callback session adiciona token.sub como user.id"
  prevenção: "Consultar Context7 Auth.js v5 antes de usar Credentials. JWT obrigatório se misturar Credentials com OAuth."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Ecommerce/Belessence/06-Erros|Belessence/06-Erros]]"
    - "[[auth-security|Auth & Security]]"

- id: ERR-2026-0004
  título: "PrismaAdapter exige tabelas/campos em snake_case (Account, Session, VerificationToken)"
  categoria: Auth & Security
  stack:
    - Next-Auth
    - Prisma
  severidade: média
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-04
  sintoma: "Erros 'Unknown field' ou 'Cannot find table' ao tentar login OAuth/credentials"
  causa_raiz: "@auth/prisma-adapter espera schema específico com @map() snake_case (provider_account_id, expires_at, etc)"
  solução: "Copiar schema oficial do @auth/prisma-adapter — não renomear os campos snake_case"
  prevenção: "Não 'limpar' o snake_case dos campos OAuth. Usar schema de exemplo da doc oficial."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Ecommerce/Belessence/06-Erros|Belessence/06-Erros]]"
    - "[[auth-security|Auth & Security]]"

- id: ERR-2026-0005
  título: "Postgres SSL warning em produção sem driver adapter (Prisma 7)"
  categoria: Deployment
  stack:
    - Prisma
    - PostgreSQL
  severidade: média
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-05
  sintoma: "Warning de SSL em logs Vercel; incerteza se a conexão é encriptada"
  causa_raiz: "Prisma 7 sem driver adapter não respeita sslmode=require corretamente em runtimes serverless"
  solução: "Usar @prisma/adapter-pg com Pool configurado explicitamente (ssl + connectionString); previewFeatures=['driverAdapters'] no prisma.config.ts"
  prevenção: "Em Prisma 7+, sempre usar driver adapter em ambientes serverless/Edge. Verificar warnings SSL no primeiro deploy."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Ecommerce/Belessence/06-Erros|Belessence/06-Erros]]"
    - "[[deployment|Deployment]]"

- id: ERR-2026-0006
  título: "Carrinho/Wishlist em localStorage GLOBAL vazava entre usuários no mesmo browser"
  categoria: Auth & Security
  stack:
    - Zustand
    - React
  severidade: crítica
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-04
  sintoma: "Usuário A faz logout, B faz login no mesmo browser, B vê itens do carrinho/favoritos de A"
  causa_raiz: "Zustand com middleware persist({ name: 'cart' }) salvava em localStorage SEM vinculo com userId; logout não limpava o store; localStorage é por origin (não por usuário)"
  solução: "Modelar cart/wishlist em banco com userId FK + @@unique([userId, productId]); Zustand vira CACHE do servidor (sem persist); login hidrata stores, logout zera. Preço relido do banco no servidor."
  prevenção: "REGRA INEGOCIÁVEL — Dados privados por usuário NUNCA podem viver em localStorage global. Stores Zustand: ou usam persist com name por-usuário E limpam no logout, OU não usam persist e são puro cache do servidor."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Ecommerce/Belessence/06-Erros|Belessence/06-Erros]]"
    - "[[auth-security|Auth & Security]]"

- id: ERR-2026-0007
  título: "Regex de frontmatter sem tolerância a CRLF quebrava o validator no Windows"
  categoria: Deployment
  stack: []
  severidade: média
  projeto_origem: "Vault/tools"
  data_descoberta: 2026-07-08
  sintoma: "validate-project.js reportava 'sem frontmatter YAML' e 'setup.js nao existe' em projeto que antes passava 7/7 (Belessence); flags do frontmatter (bootstrap, tipo_contrato) deixavam de ser lidas"
  causa_raiz: "Regex /^---\\n/ só aceita LF; com core.autocrlf=true no Windows os .md do vault ficam em CRLF (---\\r\\n) e o match falha, cascateando falsos erros"
  solução: "Normalizar line-endings na leitura: content.replace(/\\r\\n/g, '\\n') nos 3 readFileSync de tools/validate-project.js antes de qualquer regex"
  prevenção: "Todo parser de arquivo texto em scripts Node do vault DEVE normalizar \\r\\n → \\n logo após readFileSync. Testar validators em arquivos CRLF antes de declarar verde."
  recorrências: 0
  links:
    - "[[deployment|Deployment]]"
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
  título: "min-height na cadeia de pais colapsa o height:100% do filho — a grade do calendário renderiza vazia"
  categoria: Layout & CSS
  stack:
    - Tailwind & Shadcn
    - React
    - FullCalendar
  severidade: crítica
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "A tela principal do hub (agenda) mostra só o cabeçalho dos dias e um retângulo branco. Nenhum erro de console. Os 92 slots e os 21 eventos estão no DOM: `.fc-view-harness` tem altura 0 e `.fc` tem 60px. Reproduz em 1920, 1440, 1280, 1024, 768 e 390. Um resize da janela não corrige."
  causa_raiz: "`height: 100%` só resolve contra um pai com altura DEFINIDA. A cadeia era `min-h-[calc(100dvh-4rem)]` na página → `h-full` no componente → `flex-1 min-h-0` → `<FullCalendar height=\"100%\" />`. Com apenas `min-height`, a altura computada do pai é `auto`, a porcentagem do filho não tem contra o que resolver e colapsa para 0. A biblioteca não reclama: ela recebe 0 e desenha 0."
  solução: "Trocar `min-h-` por `h-` em TODA a cadeia, do shell até a página (`min-h-dvh` → `h-dvh` no shell, `min-h-[calc(...)]` → `h-[calc(...)]` na página). Prova: forçando `height` no wrapper pelo console, `.fc` passou de 60px para 743px e os 21 eventos apareceram."
  prevenção: "Quando um componente recebe `height=\"100%\"` (ou tem `h-full` dentro), a cadeia inteira de ancestrais até o viewport precisa de altura DEFINIDA, não de `min-height`. `min-h-dvh` e `h-dvh` NÃO são intercambiáveis: o primeiro permite crescer, o segundo é o único que dá altura para porcentagem resolver. Teste de regressão barato: medir `getBoundingClientRect().height` do contêiner da biblioteca em pelo menos dois viewports — um elemento de altura 0 com filhos é o sintoma, e nenhum erro de console o acusa."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[layout-css|Layout & CSS]]"

- id: ERR-2026-0011
  título: "Texto branco sobre cor categórica reprova em contraste — e o token é um só, para todas as cores"
  categoria: Layout & CSS
  stack:
    - Tailwind & Shadcn
    - React
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "Os 8 tokens de cor de serviço da agenda medem 2,40 a 3,54:1 contra o texto branco dos cards — oito reprovações de oito, no texto mais lido do sistema (o nome do paciente). WCAG 2.1 AA exige 4,5:1."
  causa_raiz: "A paleta categórica foi escolhida cor a cor, por aparência, e o texto por cima ficou num único token `--color-on-event: #ffffff` definido uma vez. Cor categórica vive em L (clareza) 0,63–0,73 para ser distinguível entre si; nessa faixa, branco NUNCA passa — mas a decisão sobre o texto foi tomada separada da decisão sobre os fundos, então ninguém mediu o par."
  solução: "Trocar o token do texto de branco para a tinta escura do sistema. As mesmas 8 cores passam a medir 4,83 a 7,13:1. Um token resolve as oito reprovações."
  prevenção: "Fundo categórico e texto por cima são UMA decisão, nunca duas. Regra prática: cor categórica distinguível vive em L 0,6–0,75 e nessa faixa o texto é escuro, não branco — branco só passa abaixo de L≈0,55, onde as cores começam a se confundir. Medir o par (não a cor sozinha) na hora de criar o token, e guardar a medição ao lado da definição."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[layout-css|Layout & CSS]]"

- id: ERR-2026-0012
  título: "Prefetch dos Link de navegação baixa o aplicativo inteiro na primeira tela"
  categoria: Performance
  stack:
    - Next.js
    - React
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "Agenda, dashboard e clientes baixam EXATAMENTE o mesmo conjunto de 34 arquivos, 938 KB comprimidos — contra 365 KB do site público. O HTML inicial de cada tela pede 22 arquivos; os outros 13 chegam a partir de 657ms."
  causa_raiz: "Os `<Link>` da barra lateral estão sempre visíveis, e o App Router faz prefetch automático de todo Link no viewport. O prefetch traz os módulos da rota de destino, então abrir a agenda baixa junto o echarts (200 KB) e o recharts (2×100 KB) das outras duas telas — ~470 KB que aquela tela nunca usa."
  solução: "`prefetch={false}` nos Link de navegação persistente, com prefetch em `onMouseEnter` para não perder a navegação instantânea; `next/dynamic` nas bibliotecas pesadas; e consolidar bibliotecas duplicadas (echarts e recharts coexistiam)."
  prevenção: "Navegação persistente (sidebar, bottom-nav, menu fixo) é o caso em que o prefetch automático trabalha CONTRA: ele é desenhado para links que o usuário talvez clique, não para um menu que está sempre na tela inteira. Em app com shell fixo, desligar o prefetch por padrão nos itens de menu. Medir sempre com `Network.loadingFinished` do CDP (bytes de rede), não com a tabela de tamanhos do build — ela não mostra o que o prefetch acrescenta."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[performance|Performance]]"
    - "[[nextjs|Next.js]]"

- id: ERR-2026-0013
  título: "Gate de autenticação no cliente serializa toda a carga da aplicação atrás de um /me"
  categoria: Performance
  stack:
    - Next.js
    - TanStack Query
    - React
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "Entrar no hub leva 2,0s até a tela servir (API a 150ms, CPU 4×), com 1,4s de tela vazia escrita 'Carregando clínica…'. Medido: /auth/me volta em 217ms, as outras cinco consultas só COMEÇAM em 426ms."
  causa_raiz: "O provider pede /auth/me e marca as demais queries com `enabled: isAuthed`. Isso cria uma cascata de dois níveis: um ida-e-volta inteiro gasto para descobrir algo que o servidor já sabia quando montou o HTML — o cookie estava na requisição. Agravante: enquanto o /me não volta, o provider renderiza uma tela de carregamento no lugar de TODA a aplicação."
  solução: "Mover a sessão e os dados de arranque para o Server Component do layout, com `prefetchQuery` + `dehydrate` + `<HydrationBoundary>` do TanStack Query. O cliente hidrata com os dados já na mão, as queries não precisam de `enabled`, e a tela de carregamento deixa de existir."
  prevenção: "Em App Router, autenticação é dado de servidor: ela já está na requisição que montou o HTML. Buscar a sessão no cliente para então liberar o resto é cascata auto-infligida, e sempre custa pelo menos um ida-e-volta completo. Sinal de alarme: qualquer `enabled:` que dependa do resultado de outra query no caminho crítico de abertura da tela."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[performance|Performance]]"
    - "[[nextjs|Next.js]]"

- id: ERR-2026-0014
  título: "Middleware (proxy.ts) sem config.matcher roda em toda requisição, assets incluídos"
  categoria: Deployment
  stack:
    - Next.js
    - Vercel
  severidade: média
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "O manifesto da build traz `\"/_middleware\": { \"runtime\": \"nodejs\", \"matchers\": [{ \"regexp\": \"^.*$\" }] }`. Numa visita ao hub isso são ~40 invocações de função Node em vez de 1 — os 34 arquivos de JS, o CSS, as fontes e as imagens passam todos pelo middleware."
  causa_raiz: "Sem `export const config = { matcher: ... }`, o padrão do Next é `/:path*`, ou seja TUDO. O código parecia inofensivo porque a primeira linha do middleware já devolve `NextResponse.next()` para caminho fora do escopo — mas a função é INVOCADA do mesmo jeito, somando latência a cada asset e, na Vercel, sendo faturada."
  solução: "Declarar o matcher pelo caminho positivo que o middleware realmente protege (ex.: `/hub/:path*`), não pela negativa com lookahead."
  prevenção: "Todo middleware nasce com `config.matcher`; sem ele, o padrão é o pior caso. Preferir a lista POSITIVA do que ele protege à negativa `(?!api|_next/static|...)`: com a positiva, uma rota nova nasce fora do middleware (e o gate real continua na API); com a negativa, um caminho novo nasce dentro dele por acidente. Conferir no `functions-config-manifest.json` da build, não no código."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[deployment|Deployment]]"
    - "[[nextjs|Next.js]]"

- id: ERR-2026-0015
  título: "Toda a autenticação indexada e nenhuma tabela da operação — o custo só aparece quando não dá mais para voltar"
  categoria: Performance
  stack:
    - PostgreSQL
    - Drizzle
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "`sessions`, `password_reset_requests`, `login_attempts` e `audit_log` têm índice. `appointments`, `patients`, `teeth_procedures` e `services` não têm nenhum — e são exatamente as tabelas que a agenda filtra por intervalo de data a cada troca de semana."
  causa_raiz: "A feature de autenticação foi especificada com critério de desempenho explícito, então os índices entraram junto com o schema. As tabelas de operação nasceram num épico anterior, sem esse critério, e ninguém voltou: com algumas centenas de linhas nenhuma consulta demora, e o problema não se manifesta até o volume existir."
  solução: "Migração acrescentando índice em toda coluna usada em WHERE, JOIN e ORDER BY das consultas quentes: `appointments(start_time)`, `appointments(patient_id)`, `appointments(service_id)`, `teeth_procedures(appointment_id)`, `teeth_procedures(patient_id)`, `patients(phone)`."
  prevenção: "Índice é parte do schema, não otimização posterior. Ao declarar uma tabela, a pergunta é: por qual coluna esta tabela vai ser FILTRADA ou ORDENADA? Toda resposta vira índice na mesma migração. Varredura de 30 segundos que pega quase tudo: listar as tabelas sem nenhum índice além da PK e conferir se alguma aparece num WHERE."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[performance|Performance]]"
    - "[[postgresql|PostgreSQL]]"

- id: ERR-2026-0016
  título: "Relatório agrega no fuso do processo, não no fuso do negócio — e em produção o processo roda em UTC"
  categoria: Data Modeling
  stack:
    - Next.js
    - Vercel
    - PostgreSQL
  severidade: alta
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "Os gráficos 'por dia da semana' e 'por hora' do dashboard saem deslocados em 3 horas. Uma consulta das 21h de terça em Vitória é contada como quarta-feira, 0h."
  causa_raiz: "O agregado usa `d.toISOString().split('T')[0]` (dia em UTC), `d.getDay()` e `d.getHours()` (fuso do PROCESSO). A configuração guarda `timezone: 'America/Sao_Paulo'` e nenhuma das três linhas a lê. Em desenvolvimento, a máquina está no fuso certo e tudo bate; na Vercel o processo roda em UTC e o relatório muda sozinho."
  solução: "Agregar no banco com `AT TIME ZONE` usando o fuso guardado na configuração (`date_trunc('day', start_time AT TIME ZONE 'America/Sao_Paulo')`), em vez de montar buckets em JavaScript."
  prevenção: "Timestamp com fuso guardado no banco é o certo; o erro mora no AGREGADO. Todo bucket de relatório (dia, semana, hora) precisa dizer EM QUE FUSO ele agrupa, e esse fuso é o do negócio, nunca o do processo. Regra: `getDay`, `getHours` e `toISOString().split('T')[0]` não aparecem em código de relatório. Teste que pega: fixar TZ=UTC na suíte e conferir um agendamento noturno."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[data-modeling|Data Modeling]]"

- id: ERR-2026-0017
  título: "Entidade central do mundo real ausente do schema — o sistema não consegue responder a pergunta mais básica do cliente"
  categoria: Data Modeling
  stack:
    - PostgreSQL
    - Drizzle
  severidade: crítica
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-12
  sintoma: "A clínica atende em DUAS unidades (Vila Velha e Serra), o site público fala das duas, e o schema não tem tabela de unidade nem coluna de unidade em `appointments`. Pior: `business_hours.day_of_week` é UNIQUE, então existe uma única grade de horários para a clínica inteira — duas unidades com expedientes diferentes não é representável. O hub não responde 'em que unidade é essa consulta?' nem 'quanto cada unidade faturou?'."
  causa_raiz: "O schema foi desenhado a partir das telas do MVP (agenda, pacientes, serviços), não a partir do mundo que o cliente descreveu. A unidade aparecia só como conteúdo do site — texto e endereço —, então nunca virou entidade. O UNIQUE em `day_of_week` cristalizou a suposição de clínica única em CONSTRAINT, que é a forma mais cara de errar: não é só um campo faltando, é uma regra que PROÍBE o modelo certo."
  solução: "Migração: tabela `units`, `unit_id` em `appointments` e em `business_hours`, e troca do UNIQUE em `day_of_week` por UNIQUE composto `(unit_id, day_of_week)`. Quanto mais consultas gravadas sem unidade, mais caro o backfill."
  prevenção: "Antes de escrever o schema, listar os SUBSTANTIVOS que o cliente usa ao descrever a operação — e conferir um por um se viraram tabela. 'Duas unidades' é substantivo. Um substantivo do cliente que só existe como texto do site é um modelo faltando, não uma decisão de conteúdo. E nunca declarar UNIQUE numa coluna sem perguntar 'único DENTRO de quê?': UNIQUE sem escopo é a suposição de instância única escrita em pedra."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[data-modeling|Data Modeling]]"

- id: ERR-2026-0018
  título: "Id de outra tabela aceito sem verificação: a violação de chave estrangeira sobe como 500"
  categoria: API Integration
  stack:
    - PostgreSQL
    - Drizzle
    - Next.js
  severidade: média
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-13
  sintoma: "POST /api/appointments com `professionalId` inexistente devolvia 500 e 'Erro ao criar agendamento'. A chave estrangeira estourava no banco e o erro subia pelo catch genérico, sem dizer qual campo estava errado."
  causa_raiz: "A rota lia o id de um recurso relacionado como `Number(body.professionalId)` e mandava direto para o INSERT. A integridade existia — no banco —, mas chegava tarde demais para virar uma resposta útil: no nível do SQL ela é uma exceção, não uma validação."
  solução: "Verificar o recurso relacionado antes de gravar e devolver **400** (o que não foi encontrado é um campo do corpo, não a rota). Verificar também se ele está **ativo**: existir não é o mesmo que poder ser usado."
  prevenção: "Toda chave estrangeira que vem do corpo da requisição é validada na aplicação antes do INSERT. A constraint do banco é a última linha de defesa contra corrida, não a primeira contra entrada errada. Teste que pega: exercitar a rota com um id que não existe — e isso **só aparece contra um banco de verdade**, porque com a API simulada a chave estrangeira nunca é avaliada."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[api-integration|API Integration]]"

- id: ERR-2026-0019
  título: "generate_series com o fim inclusivo conta um período a mais e dilui a métrica"
  categoria: Data Modeling
  stack:
    - PostgreSQL
  severidade: média
  projeto_origem: "Saude/Dr-Gabriel-Cavalcante"
  data_descoberta: 2026-10-13
  sintoma: "A taxa de ocupação saía 0,0784 onde o cálculo à mão dava 0,0941. O numerador estava certo; o denominador contava 6 dias úteis onde havia 5."
  causa_raiz: "`generate_series(date_trunc('day', inicio), date_trunc('day', fim), '1 day')` é inclusivo nos dois extremos. Um período que vai da meia-noite do dia 2 à meia-noite do dia 9 cobre os dias 2 a 8 — mas a série devolvia também o dia 9, e o expediente dele entrou no denominador."
  solução: "Recuar um microssegundo antes de truncar o fim: `date_trunc('day', (fim - interval '1 microsecond'))`. O período continua `>= inicio AND < fim` nas consultas de dados, e a série de dias passa a concordar com ele."
  prevenção: "Intervalo de tempo em relatório é **semiaberto** — `[inicio, fim)` — e tudo que o percorre precisa concordar com isso, inclusive a geração de dias. O erro é invisível em períodos longos (1 dia a mais em 90 muda pouco) e gritante em períodos curtos, então o teste tem que usar um período de poucos dias com o resultado calculado à mão. Verificar métrica derivada contra conta de papel, nunca contra 'parece razoável'."
  recorrências: 0
  links:
    - "[[Dev/2 - Projects/Saude/Dr-Gabriel-Cavalcante/06-Erros|Dr-Gabriel-Cavalcante/06-Erros]]"
    - "[[data-modeling|Data Modeling]]"

- id: ERR-2026-0020
  título: "O otimizador de imagem pendura o evento load e o teste morre sem dizer por quê"
  categoria: Performance
  stack:
    - Next.js
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-10-15
  sintoma: "Dois specs de Playwright falhavam só no CI, nas três tentativas, sempre na primeira navegação: `page.goto: Test timeout of 60000ms exceeded. - navigating to \"...\", waiting until \"load\"`. A mesma suíte passava na máquina de desenvolvimento duas execuções seguidas, com build de produção e banco sujo de propósito."
  causa_raiz: "`waitUntil: \"load\"` espera **todos** os subrecursos. As imagens da página passam pelo otimizador same-origin `/_next/image`, que lê o arquivo e re-encoda — aqui, um PNG de 1,5 MB. Num runner de dois núcleos com cache de imagem frio o trabalho não cabe no teste. O mesmo pedido, com o cache igualmente frio, responde em 0,13s na máquina de desenvolvimento: a diferença é CPU do runner, não cache."
  solução: "Abortar requisição de imagem por `resourceType` nos specs que navegam com `load`. O repositório já fazia isso num spec e tinha a explicação escrita lá; a convenção simplesmente não tinha sido aplicada aos dois specs religados."
  prevenção: "A mensagem nativa do Playwright nomeia a navegação e nada mais — ela diz onde o teste parou e nada sobre o que o prendeu. Envolver `page.goto` num helper que acompanhe as requisições em voo e, no timeout, falhe listando o que ficou pendente e há quanto tempo; foi isso que achou a linha, em uma rodada de CI. Em CI cujo artefato de teste está fora de alcance, esse erro ainda chega pelas anotações do Actions. Regra de leitura: `waitUntil: \"load\"` acopla o teste a cada imagem da página — ou bloqueie imagem, ou não espere `load`."
  recorrências: 0
  links:
    - "[[nextjs|Next.js]]"
    - "[[performance|Performance]]"

- id: ERR-2026-0021
  título: "Rota pré-renderizada assa a variável de ambiente do build e serve localhost em produção"
  categoria: Deployment
  stack:
    - Next.js
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-10-15
  sintoma: "`sitemap.xml` e `robots.txt` anunciavam `http://localhost:3000` em produção. Build verde, nenhum erro, nenhum aviso."
  causa_raiz: "`sitemap.ts` e `robots.ts` são pré-renderizados por padrão. A origem canônica é resolvida a partir de variável de ambiente, e o valor lido no momento do build ficou congelado no artefato — o ambiente de execução nunca chega a ser consultado."
  solução: "`export const dynamic = \"force-dynamic\"` nas duas rotas."
  prevenção: "Rota cujo conteúdo depende de env de runtime precisa ser dinâmica, e isso inclui as rotas de metadado, que não parecem ter dados e por isso passam despercebidas. Memoizar o resolvedor de origem piora o caso, porque congela também em runtime. Verificar pelo artefato servido e não pelo código: subir um build de produção local, pedir a rota e conferir o host da resposta."
  recorrências: 0
  links:
    - "[[nextjs|Next.js]]"
    - "[[deployment|Deployment]]"

- id: ERR-2026-0022
  título: "Apagar a opção de privacidade que sumiu do SDK deixa mais permissivo, não menos"
  categoria: Auth & Security
  stack:
    - Sentry
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-10-15
  sintoma: "Ao configurar a versão nova do SDK de observabilidade, a opção `sendDefaultPii` não existia mais. A leitura natural — apagar a linha e deixar o padrão valer — passaria no type-check e no build."
  causa_raiz: "A opção não foi removida: foi **substituída** por um objeto `dataCollection` com vários campos independentes, cada um com padrão próprio. Apagar a linha antiga não desliga nada; entrega o controle aos padrões do fornecedor, que incluem variáveis de frame de stack, corpos de requisição e cabeçalhos."
  solução: "Abrir o tipo do pacote instalado, enumerar os campos e declarar cada um explicitamente como falso."
  prevenção: "Opção de privacidade que some numa atualização é mudança de contrato, não limpeza — e a direção do erro é perigosa, porque o código fica mais permissivo em silêncio. Nunca deduzir o novo padrão pelo nome da opção antiga nem pelo changelog: ler a definição de tipo do pacote que está instalado. Vale para qualquer SDK de observabilidade; o padrão do fornecedor otimiza diagnóstico, não sigilo."
  recorrências: 0
  links:
    - "[[sentry|Sentry]]"
    - "[[auth-security|Auth & Security]]"

- id: ERR-2026-0023
  título: "Mudar o contador de rate limit de lugar não resolve a corrida; só a operação atômica resolve"
  categoria: Auth & Security
  stack:
    - PostgreSQL
    - Next.js
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-10-15
  sintoma: "Rate limit das rotas públicas contava num `Map` do processo. Em serverless cada instância tem o seu, então bastava atacar com concorrência para cair em instâncias diferentes e passar por baixo do limite — numa rota onde isso permite enumerar códigos de cupom por força bruta."
  causa_raiz: "A correção óbvia — mover o contador para o banco — **não basta por si**. Ler a linha, decidir em TypeScript e gravar de volta reintroduz exatamente a mesma corrida num nível diferente: duas instâncias leem 9, as duas gravam 10, e passaram 11. O erro aqui é tratar 'store compartilhado' e 'contador correto' como a mesma coisa."
  solução: "Um único `INSERT ... ON CONFLICT DO UPDATE` que lê, decide e grava num statement — o banco trava a linha no conflito e serializa os concorrentes. Junto, a decisão de queda: banco indisponível **degrada** para o contador em memória, em vez de abrir a rota (reabre o ataque que motivou a mudança) ou fechá-la (derruba cliente legítimo por causa de um blip)."
  prevenção: "Teste sequencial não distingue contador atômico de contador com corrida — os dois passam. A prova tem que ser concorrente e **exata**: disparar `limite + N` pedidos simultâneos contra banco real e exigir que exatamente `limite` passem. Segundo efeito a antecipar: contador em banco sobrevive ao fim da suíte de testes, então execuções seguidas passam a interferir entre si — dar a cada execução uma identidade de cliente própria."
  recorrências: 0
  links:
    - "[[postgresql|PostgreSQL]]"
    - "[[auth-security|Auth & Security]]"

- id: ERR-2026-0024
  título: "Estado compartilhado no banco vaza entre testes e o sintoma acusa o inocente"
  categoria: State Management
  stack:
    - PostgreSQL
  severidade: média
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-10-15
  sintoma: "`expect(estoque).toBe(estoqueAntes - 1)` falhava com `Expected: 47 / Received: 43`. O número aponta para o checkout baixando estoque errado — que era exatamente o que o teste afirmava cobrir, e não tinha defeito nenhum."
  causa_raiz: "O carrinho é privado por usuário e mora no banco, e todos os specs logam como o mesmo usuário de teste. Um spec que morre depois de adicionar ao carrinho e antes de finalizar deixa o item lá; o checkout seguinte leva o órfão junto. Com `retries: 2` o efeito se acumula dentro da própria execução — cada tentativa que falha no meio soma um item para a próxima."
  solução: "Limpar o carrinho em `beforeEach`, não em `afterAll`: `afterAll` não roda entre as tentativas de retry, que é justamente onde o resíduo nasce."
  prevenção: "Uma execução em banco recém-semeado passa mesmo com o vazamento — foi assim que ele ficou escondido, e é por isso que rodar a suíte uma vez não prova isolamento. A verificação é **em par**: duas execuções seguidas sem limpar o banco entre elas. E, diante de um número errado numa asserção de banco, perguntar primeiro de quem é o estado antes de perguntar o que o código fez com ele."
  recorrências: 0
  links:
    - "[[postgresql|PostgreSQL]]"
    - "[[state-management|State Management]]"
```
