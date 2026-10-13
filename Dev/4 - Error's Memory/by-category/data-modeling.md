# Erros: Data Modeling

> Categoria de erros relacionados a schema, entidades ausentes, constraints mal escopadas e
> agregação de dados. Categoria criada em 2026-10-12.
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0016 | Relatório agrega no fuso do processo, não no fuso do negócio | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0017 | Entidade central do mundo real ausente do schema | crítica | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0019 | generate_series com o fim inclusivo conta um período a mais | média | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Os dois são **o modelo contradizendo o mundo que o cliente descreveu**, e os dois passam
despercebidos em desenvolvimento.

No 0017, "duas unidades" era substantivo na primeira conversa com o cliente e virou só texto do
site. No 0016, o fuso da clínica está guardado na configuração e o código de relatório não o lê.

**Regra de leitura para o próximo:** antes do schema, listar os **substantivos** que o cliente usa
ao descrever a operação, e conferir um por um se viraram tabela. Um substantivo do cliente que só
existe como conteúdo é um modelo faltando.

**Corolário sobre UNIQUE:** nunca declarar UNIQUE numa coluna sem responder "único **dentro de
quê**?". `UNIQUE(day_of_week)` escreveu em pedra a suposição de clínica única — e constraint é a
forma mais cara de errar, porque não é um campo faltando, é uma regra que **proíbe** o modelo
certo.

**Corolário sobre fuso:** o ambiente local esconde o 0016. A máquina do dev está no fuso do
negócio e tudo bate; o servidor roda em UTC e o relatório muda sozinho. Teste que pega: fixar
`TZ=UTC` na suíte.
