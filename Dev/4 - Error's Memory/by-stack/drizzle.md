# Erros: Drizzle

> Erros agrupados por tecnologia: Drizzle ORM e drizzle-kit (schema, índices, constraints,
> migrações, driver).
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0015 | Toda a autenticação indexada e nenhuma tabela da operação | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0017 | Entidade central do mundo real ausente do schema | crítica | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0018 | Id de outra tabela aceito sem verificação: FK sobe como 500 | média | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

O schema em TypeScript torna fácil declarar uma tabela e **invisível** o que não foi declarado.
Índice ausente e entidade ausente não produzem erro de tipo, não aparecem no diff e não quebram
teste nenhum.

Duas varreduras de 30 segundos, para fazer em todo projeto antes do primeiro deploy:

1. **Tabelas sem nenhum índice além da PK.** Para cada uma: ela aparece em algum `WHERE`,
   `JOIN` ou `ORDER BY`? Se sim, falta índice.
2. **Todo `.unique()` do schema.** Para cada um: único **dentro de quê**? Se a resposta é "dentro
   da única instância que existe hoje", é a suposição de instância única virando constraint.

Nota sobre driver: `neon-http` **não** faz transação interativa (ler, decidir, escrever). O que
ele tem é `db.batch`, que é transação implícita de statements já decididos. Regra que depende de
leitura anterior tem de virar **um statement só** (`INSERT ... SELECT ... WHERE NOT EXISTS`) ou
migrar para o driver WebSocket.
