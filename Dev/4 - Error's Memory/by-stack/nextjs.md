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

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Os dois erros acima são a mesma família: **rigidez em tempo de carga ou de boot quebrando o
deploy**. Um lia env no corpo do módulo; o outro exigia no boot uma variável de funcionalidade
parcial. Em ambos, o build passou verde e a falha só apareceu depois.

O que os une, e vale como regra de leitura para o próximo: **no Next.js, `build` e `boot` são
momentos diferentes**. O build não executa o `instrumentation.ts`, então um deploy marcado como
pronto não prova que o servidor sobe.
