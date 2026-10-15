# Erros: Next.js

> Erros agrupados por tecnologia: Next.js (App Router, instrumentation, build vs. runtime, deploy).
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0008 | Conexão Neon criada no import do módulo quebra o build sem DATABASE_URL | média | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0009 | Variável de funcionalidade parcial exigida no boot derruba a aplicação inteira | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0012 | Prefetch dos Link de navegação baixa o aplicativo inteiro na primeira tela | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0013 | Gate de autenticação no cliente serializa toda a carga atrás de um /me | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0014 | Middleware (proxy.ts) sem config.matcher roda em toda requisição | média | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0016 | Relatório agrega no fuso do processo, não no fuso do negócio | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0018 | Id de outra tabela aceito sem verificação: FK sobe como 500 | média | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0020 | O otimizador de imagem pendura o evento load e o teste morre sem dizer por quê | alta | Ecommerce/Belessence |
| ERR-2026-0021 | Rota pré-renderizada assa a variável de ambiente do build e serve localhost em produção | alta | Ecommerce/Belessence |
| ERR-2026-0023 | Mudar o contador de rate limit de lugar não resolve a corrida; só a operação atômica resolve | alta | Ecommerce/Belessence |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

A família dominante aqui é **rigidez em tempo de carga, de build ou de boot quebrando o que
rodava**. Um lia env no corpo do módulo; outro exigia no boot uma variável de funcionalidade
parcial; o 0021 congelou no artefato a env lida durante o build. Em todos, o build passou verde e
a falha só apareceu depois.

O que os une, e vale como regra de leitura para o próximo: **no Next.js, `build`, `boot` e
`request` são três momentos diferentes, e o código não avisa em qual ele está.** O build não
executa o `instrumentation.ts`, então um deploy marcado como pronto não prova que o servidor sobe
— e uma rota pré-renderizada não prova que o valor que ela serve veio do ambiente de execução. A
verificação que pega os três é a mesma: subir o build de produção e **pedir a rota**, em vez de
ler o código.

O 0020 é de outra natureza e entra como contraponto útil: ali o problema não era o ambiente, era
**o custo de CPU do otimizador de imagem** aparecer só onde a CPU é escassa. Mesmo princípio de
leitura, variável diferente — o que o desenvolvimento esconde não é só a env, é também a máquina.
