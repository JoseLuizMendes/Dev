# Erros: Autenticação e Segurança

> Categoria de erros relacionados a vulnerabilidades, tokens, sessões e LGPD.
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0003 | Auth.js v5 com Credentials Provider exige `session.strategy='jwt'` | alta | Ecommerce/Belessence |
| ERR-2026-0004 | PrismaAdapter exige tabelas/campos em snake_case (Account, Session, VerificationToken) | média | Ecommerce/Belessence |
| ERR-2026-0006 | Carrinho/Wishlist em localStorage GLOBAL vazava entre usuários no mesmo browser | crítica | Ecommerce/Belessence |
| ERR-2026-0022 | Apagar a opção de privacidade que sumiu do SDK deixa mais permissivo, não menos | alta | Ecommerce/Belessence |
| ERR-2026-0023 | Mudar o contador de rate limit de lugar não resolve a corrida; só a operação atômica resolve | alta | Ecommerce/Belessence |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Dois subgrupos, e vale distingui-los porque pedem verificações diferentes.

**Vazamento por padrão herdado** (0006, 0022). O código não fez nada de errado visível: um
guardou carrinho em `localStorage` global, o outro deixou o SDK de observabilidade com os padrões
do fornecedor. Em ambos, **não declarar escopo foi declarar o escopo mais amplo**. A verificação é
a mesma: perguntar de quem é o dado e quem mais alcança o lugar onde ele foi parar — e, em
atualização de dependência, abrir o tipo instalado em vez de confiar no nome da opção antiga.

**Controle que parece existir e não existe** (0023). Havia rate limit, havia contador, havia
teste verde. Faltava a propriedade que fazia o controle valer alguma coisa — atomicidade sob
concorrência. O teste sequencial não distingue o controle real do controle aparente.

> **Regra de leitura para o próximo:** controle de segurança se verifica pela propriedade que ele
> promete, não pela presença do código que diz implementá-lo. Limite se testa com concorrência;
> isolamento de dado se testa com um segundo usuário; privacidade de SDK se lê no tipo instalado.
