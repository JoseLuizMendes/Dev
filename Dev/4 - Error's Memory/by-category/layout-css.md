# Erros: Layout & CSS

> Categoria de erros relacionados a cadeia de alturas, resolução de porcentagem, contraste e
> tokens de cor. Categoria criada em 2026-10-12.
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0010 | min-height na cadeia de pais colapsa o height:100% do filho | crítica | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0011 | Texto branco sobre cor categórica reprova em contraste | alta | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Os dois são **decisões tomadas em separado que só existem em par**.

No 0010, a altura foi decidida em quatro arquivos diferentes — página, componente, contêiner,
biblioteca — e cada um estava certo isoladamente. `min-height` no pai é razoável; `height: 100%`
no filho é razoável. Juntos dão zero.

No 0011, a cor de fundo foi escolhida por aparência e a cor do texto foi definida uma vez, noutro
lugar, como um token só. Cada decisão defensável; o par reprova em contraste.

**Regra de leitura para o próximo:** em CSS, o que quebra raramente é a propriedade — é a relação
entre duas propriedades que ninguém olhou juntas. Quando uma propriedade só faz sentido em função
de outra (`height: 100%` depende da altura do pai; a cor do texto depende do fundo), as duas são
UMA decisão e precisam ser medidas no mesmo momento.

**Os dois são silenciosos.** Nenhum dos dois emite erro de console, e nenhum linter pega. O que
pega é medição no navegador: `getBoundingClientRect()` para altura, razão de contraste para cor.
