# Erros: Tailwind & Shadcn

> Erros agrupados por tecnologia: Tailwind CSS e shadcn/ui (tokens, cadeia de alturas, contraste,
> variantes).
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

**`min-h-*` e `h-*` não são intercambiáveis.** Parecem variações do mesmo utilitário e não são:
`min-h-dvh` deixa o elemento crescer mas mantém a altura computada em `auto`, e porcentagem de
filho não resolve contra `auto`. Quando um filho usa `h-full` ou uma biblioteca recebe
`height="100%"`, a cadeia inteira de ancestrais precisa de `h-*`.

**Token de cor de texto é sempre relativo ao token de fundo.** Um `--color-on-*` definido uma vez
para uma família inteira de fundos categóricos vai reprovar em contraste em pelo menos metade
deles. Medir o par na hora de criar o token e deixar a medição escrita ao lado da definição —
como `globals.css` já faz na paleta do site.
