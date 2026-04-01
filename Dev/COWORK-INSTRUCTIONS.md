# Instruções para o Cowork — Teste de Onboarding

> **Propósito:** Este arquivo guia o Cowork no teste do pipeline completo de onboarding de um novo projeto. Siga os passos na ordem exata.

---

## Contexto do Sistema

Este vault é o cérebro cognitivo do desenvolvedor. Antes de qualquer ação, leia obrigatoriamente:

1. `Dev/0 - Planner Project/Preferencias Dev.md` — stack, metodologia Akita, TDD, bootstrap
2. `Dev/0 - Planner Project/Client Onboarding Protocol.md` — fluxo completo de onboarding
3. `Dev/0 - Planner Project/Dynamic Contract Engine.md` — lógica de contrato dinâmico
4. `Dev/1 - Templates/Contract Template.md` — template base do contrato
5. `Dev/1 - Templates/Requirements & Scope Project Template.md` — template base do escopo
6. `Dev/1 - Templates/Planning Template.md` — template base do planejamento

---

## O Que Você Vai Fazer

Executar o **Client Onboarding Protocol** completo para um projeto fictício, gerando os artefatos obrigatórios na estrutura correta do vault.

---

## Dados do Projeto de Teste

Use exatamente estes dados:

```yaml
cliente: "Dra. Ana Souza"
contato: "ana@anaadvocacia.com.br"
nicho: "Advocacia"
projeto: "Site Institucional"
classificacao: "Frontend do Zero"
data_inicio: "2026-04-07"
data_entrega: "2026-05-19"
valor: "R$ 4.800,00"
tier: "Mid-Ticket"
app_type: "Landing Page Institucional"
frontend_stack: "Next.js 16 + React 19 + Tailwind + GSAP"
backend_stack: "N/A (Frontend do Zero)"
cloud_stack: "Vercel"
payment_gateway: "N/A"
email_service: "Resend"
storage_service: "N/A"
dependencies: "resend @react-email/components"
exclusions:
  - "Criação de conteúdo (textos, fotos, vídeos)"
  - "Sistema de agendamento ou área logada"
  - "Suporte perpétuo pós-entrega"
```

### Módulos e User Stories

**Módulo 1: Hero e Identidade**
- US-1.1: Como visitante, quero ver uma hero section com headline impactante e CTA para contato, para entender imediatamente o serviço oferecido
  - GIVEN que acesso a página WHEN ela carrega THEN vejo headline, subheadline e botão de contato visíveis acima da dobra
- US-1.2: Como visitante, quero ver as áreas de atuação da advogada, para avaliar se ela atende meu caso
  - GIVEN que rolo a página WHEN chego à seção de serviços THEN vejo cards com ícone, título e descrição de cada área

**Módulo 2: Credibilidade e Contato**
- US-2.1: Como visitante, quero ver depoimentos de clientes, para aumentar minha confiança antes de entrar em contato
  - GIVEN que rolo até a seção de depoimentos WHEN ela carrega THEN vejo pelo menos 3 depoimentos com nome e texto
- US-2.2: Como visitante, quero preencher um formulário de contato, para solicitar uma consulta sem precisar ligar
  - GIVEN que preencho nome, email e mensagem WHEN clico em enviar THEN recebo confirmação na tela e email via Resend

---

## Passos a Executar

### Passo 1 — Criar estrutura de pastas no vault

Crie os seguintes arquivos (vazios por enquanto) no caminho correto:

```
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/01-Escopo.md
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/02-Contrato.md
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/03-Planejamento.md
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/04-Tarefas.md
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/05-Dev-Log.md
Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/06-Erros.md
```

### Passo 2 — Gerar 01-Escopo.md

- Use `Dev/1 - Templates/Requirements & Scope Project Template.md` como estrutura base
- Preencha **todos** os campos com os dados do projeto de teste acima
- Mantenha estrutura completa — sem resumir seções
- Inclua o campo `{{DEPENDENCIES}}` preenchido com `resend @react-email/components`
- Salve em `Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/01-Escopo.md`

### Passo 3 — Gerar 02-Contrato.md

- Leia `Dev/1 - Templates/Contract Template.md`
- Leia `Dev/0 - Planner Project/Dynamic Contract Engine.md`
- Classificação é **"Frontend do Zero"** → injetar cláusulas:
  - Limitação de Responsabilidade de Backend
  - Dependência de APIs de Terceiros
- Preencha todas as variáveis (nome, valor, datas, escopo)
- Salve em `Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/02-Contrato.md`

### Passo 4 — Gerar 03-Planejamento.md

- Use `Dev/1 - Templates/Planning Template.md` como estrutura base
- Consulte `Dev/4 - Error's Memory/INDEX.md` — seção de erros conhecidos
- Gere EAP completo com épicos, tarefas, dependências e estimativas
- Inclua cronograma com as 5 fases
- Mapeie stack conforme `Dev/0 - Planner Project/Preferencias Dev.md`
- Salve em `Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/03-Planejamento.md`

### Passo 5 — Gerar 04-Tarefas.md

- Quebre o planejamento em tarefas granulares
- Cada tarefa deve ter: ID, título, US de origem, arquivos afetados, critério de aceite BDD
- Status inicial: `pending`
- Salve em `Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/04-Tarefas.md`

### Passo 6 — Inicializar 05-Dev-Log.md

Registre:
- Data de início do projeto
- Dependências que serão instaladas no bootstrap (`resend @react-email/components` + base da stack)
- Estado inicial: "Onboarding concluído. Aguardando aprovação do escopo e contrato."

### Passo 7 — Quality Gate

Antes de finalizar, valide:
- [ ] `01-Escopo.md` tem estrutura completa do template, sem resumo superficial
- [ ] `02-Contrato.md` tem cláusulas dinâmicas de "Frontend do Zero" aplicadas
- [ ] `03-Planejamento.md` tem EAP, cronograma, riscos e DoD
- [ ] `04-Tarefas.md` tem tarefas granulares com critérios de aceite
- [ ] `05-Dev-Log.md` registra dependências do bootstrap
- [ ] Todos os arquivos usam wikilinks `[[]]` para referências internas

### Passo 8 — Anunciar conclusão

Ao finalizar, confirme:

> "Setup concluído. Projeto Ana_Souza-Site_Institucional inicializado em Dev/2 - Projects/Advocacia/. Dependências mapeadas para bootstrap. Spec-Kit pronto para /speckit.implement."

---

## Regras Durante a Execução

- Stack definida em `[[Preferencias Dev]]` — não inventar dependências
- Metodologia Akita: cada tarefa do `04-Tarefas.md` terá teste escrito antes do código (TDD)
- Contrato baseado estritamente em `[[Contract Template]]` com cláusulas do `[[Dynamic Contract Engine]]`
- Wikilinks obrigatórios em todos os documentos gerados
- Em caso de dúvida sobre uma biblioteca, consultar Context7 MCP
