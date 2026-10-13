# Erros: Integração de APIs

> Categoria de erros relacionados a contratos de API quebrados, CORS, timeout e serialização.
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0018 | Id de outra tabela aceito sem verificação: a FK sobe como 500 | média | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

**A constraint do banco é a última linha de defesa contra corrida, não a primeira contra entrada
errada.** No nível do SQL, integridade referencial é uma *exceção* — e exceção vira 500, não 400.
Quem recebe o 500 não descobre qual campo estava errado.

Toda chave estrangeira que vem do corpo da requisição é verificada na aplicação antes do INSERT, e
a verificação pergunta duas coisas: **existe?** e **pode ser usado?** (ativo, não desativado, da
unidade certa). Existir não é o mesmo que poder.

**Só aparece contra banco de verdade.** Com a API simulada, a chave estrangeira nunca é avaliada —
este erro passou por toda uma rodada de testes com mock antes de aparecer no primeiro `curl` contra
um Postgres local.
