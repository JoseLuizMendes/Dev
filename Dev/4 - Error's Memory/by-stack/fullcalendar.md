# Erros: FullCalendar

> Erros agrupados por tecnologia: FullCalendar 6 (altura, views, plugins, licença).
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0010 | min-height na cadeia de pais colapsa o height:100% do filho | crítica | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Notas de biblioteca

**`height="100%"` falha em silêncio.** O FullCalendar não valida a altura que recebe: se o pai
resolve 0, ele desenha 0 e não emite nada. O DOM fica populado (slots e eventos presentes) dentro
de um contêiner de altura zero com `overflow: hidden` — o que faz o defeito parecer "os dados não
carregaram" quando na verdade é layout.

**Colunas por recurso são Premium.** `@fullcalendar/resource-timegrid` (views
`resourceTimeGridDay`/`Week`, para mostrar profissionais ou unidades lado a lado) exige
`schedulerLicenseKey` pago. A chave `AGPL-My-Frontend-And-Backend-Are-Open-Source` só vale se o
projeto inteiro — frontend e backend — for aberto sob AGPLv3.

Alternativa sem custo, que atende quase todo caso: manter o `timeGrid` gratuito e resolver a
separação por **filtro** (selecionar o profissional ou a unidade) mais cor por categoria. A regra
de negócio — conflito por profissional, relatório por unidade — vive no banco, não na view.
