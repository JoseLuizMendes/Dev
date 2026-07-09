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
| **Última atualização** | 2026-07-08 |

---

## Índice de Categorias

| Categoria | Arquivo | Qtd. Erros |
|---|---|---|
| Conflitos de dependências | [[dependency-breaks\|Dependency Breaks]] | 0 |
| Integração de APIs | [[api-integration\|API Integration]] | 0 |
| Autenticação e segurança | [[auth-security\|Auth & Security]] | 3 |
| Performance | [[performance\|Performance]] | 0 |
| Gerenciamento de estado | [[state-management\|State Management]] | 0 |
| Deploy e infraestrutura | [[deployment\|Deployment]] | 4 |

---

## Índice por Stack

| Tecnologia | Arquivo | Qtd. Erros |
|---|---|---|
| React.js | [[react\|React]] | 2 |
| NestJS | [[nestjs\|NestJS]] | 0 |
| Tailwind + Shadcn | [[tailwind-shadcn\|Tailwind & Shadcn]] | 0 |
| GSAP + Lenis | [[gsap-lenis\|GSAP & Lenis]] | 0 |
| Next-Auth (Auth.js v5) | [[next-auth\|Next-Auth]] | 2 |
| Prisma | [[prisma\|Prisma]] | 2 |
| PostgreSQL | [[postgresql\|PostgreSQL]] | 1 |
| Zustand | [[zustand\|Zustand]] | 1 |

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
```
