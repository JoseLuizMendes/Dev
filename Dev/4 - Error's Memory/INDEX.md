# Error Memory — Índice Global 🛡️

> Este arquivo é o catálogo geral de **todos os erros conhecidos** no ecossistema. O agente DEVE lê-lo no boot de toda sessão e consultá-lo antes de cada `/speckit.plan`.
>
> Protocolo completo: [[Immunological Error Memory]]

---

## Estatísticas

| Métrica | Valor |
|---|---|
| **Total de erros registrados** | 7 |
| **Erros com recorrências >= 2** | 0 |
| **Regras promovidas para M5** | 0 |
| **Última atualização** | 2026-05-30 |

---

## Índice de Categorias

| Categoria | Arquivo | Qtd. Erros |
|---|---|---|
| Conflitos de dependências | [[Dependency Breaks]] | 0 |
| Integração de APIs | [[API Integration]] | 0 |
| Autenticação e segurança | [[Auth & Security]] | 4 |
| Performance | [[Performance]] | 0 |
| Gerenciamento de estado | [[State Management]] | 0 |
| Deploy e infraestrutura | [[Deployment]] | 3 |

---

## Índice por Stack

| Tecnologia | Arquivo | Qtd. Erros |
|---|---|---|
| React.js | [[React]] | 1 |
| NestJS | [[NestJS]] | 0 |
| Tailwind + Shadcn | [[Tailwind & Shadcn]] | 0 |
| GSAP + Lenis | [[GSAP & Lenis]] | 0 |
| Next-Auth (Auth.js v5) | [[Next-Auth]] | 3 |
| Next.js | [[Next.js]] | 1 |
| Prisma | [[Prisma]] | 1 |
| PostgreSQL | [[PostgreSQL]] | 1 |
| Zustand | [[Zustand]] | 1 |

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
    - "[[Ecommerce/Belessence/06-Erros]]"
    - "[[Auth & Security]]"

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
    - "[[Ecommerce/Belessence/06-Erros]]"
    - "[[Auth & Security]]"

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
    - "[[Ecommerce/Belessence/06-Erros]]"
    - "[[Deployment]]"

- id: ERR-2026-0007
  título: "Auth.js v5 UntrustedHost ao rodar pnpm start (prod mode) em localhost"
  categoria: Auth & Security
  stack:
    - Next-Auth
    - Next.js
  severidade: alta
  projeto_origem: "Ecommerce/Belessence"
  data_descoberta: 2026-05-30
  sintoma: "Erro [auth][error] UntrustedHost a cada chamada de /api/auth/*; auth/session retorna 500 em pnpm start (NODE_ENV=production); Lighthouse/smoke quebrados"
  causa_raiz: "Auth.js v5 ativa proteção baseada em host trust em production; localhost não é trusted fora do Vercel (que injeta AUTH_TRUST_HOST=true automaticamente)"
  solução: "Setar AUTH_TRUST_HOST=true no .env antes de pnpm start; ou AUTH_URL=http://localhost:3000; ou trustHost: true no NextAuth config. Em prod Vercel: AUTH_URL=https://dominio.com; em outros deploys (Render/Fly/EC2): AUTH_TRUST_HOST=true no env do servidor."
  prevenção: "Documentar no INIT.md de qualquer projeto Auth.js v5 que AUTH_TRUST_HOST=true é necessário pra pnpm start local. Em CI/CD, injetar no env do job de E2E."
  recorrências: 0
  links:
    - "[[Ecommerce/Belessence/06-Erros]]"
    - "[[Auth & Security]]"

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
    - "[[Ecommerce/Belessence/06-Erros]]"
    - "[[Auth & Security]]"
```
