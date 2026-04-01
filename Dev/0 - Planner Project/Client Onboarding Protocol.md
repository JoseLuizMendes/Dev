# Client Onboarding & Project Initialization Protocol

> **Propósito:** Este protocolo define como o Agente de IA (Claude) deve agir quando receber do usuário o PDF (ou documento exportado) preenchido do *Master Project Planning Template*. Ele atua como a ponte entre o planejamento comercial e a inicialização da engenharia via Spec-Kit.

## Gatilho de Ativação
Sempre que o usuário enviar um arquivo (PDF, Word, Markdown) que contenha a estrutura do `Master Project Planning Template`, a IA deve automaticamente executar as ações descritas abaixo, a menos que o usuário instrua o contrário.

---

## Fluxo Resumido Oficial (Saída Mínima)

Quando não houver instrução contrária, o onboarding deve gerar apenas:

1. Contrato do cliente usando `1 - Templates/Contract Template.md` como fonte base.
2. Documento de Requisitos e Escopo (fonte para `speckit.specify`).
3. Planejamento de resolução e tarefas em formato Kanban.
4. Erros e aprendizados somente em repositório global (nunca isolado apenas no projeto).

Regras adicionais obrigatórias:

- Manter a estrutura contratual completa baseada no template oficial, personalizando variáveis e cláusulas dinâmicas conforme o escopo.
- Personalizar a seção de tipo de serviço (cláusula referente ao escopo executado) e demais campos variáveis do contrato.
- Manter a pasta do cliente com o mínimo de artefatos necessário para iniciar o Spec-Kit.
- Saída mínima significa quantidade mínima de arquivos locais, não conteúdo resumido.
- `01-Escopo.md` deve manter a estrutura do `Requirements & Scope Project Template.md` preenchida.
- `02-Contrato.md` deve manter estrutura contratual completa baseada no `Contract Template.md`, com cláusulas dinâmicas da classificação aplicadas.

Regras operacionais consolidadas:

- A pasta `MeusProjetos/Freelas` deve conter literalmente o projeto web (código), não documentação de onboarding.
- Documentos de onboarding devem ficar em `Dev/2 - Projects/[Nicho]/[Projeto-do-Cliente]`.
- O `Master Project Planning Template` é o formulário respondido pelo cliente e deve ser a fonte primária da documentação consolidada.
- O `Requirements & Scope Project Template` serve como formato de consolidação técnica estruturada a partir das respostas do Master.

### Quality Gate Obrigatório (antes de concluir a saída)

Antes de encerrar o onboarding, a IA deve validar obrigatoriamente:

1. `01-Escopo.md`:
   - Estrutura completa baseada no `1 - Templates/Requirements & Scope Project Template.md`.
   - Conteúdo preenchido, sem resumo superficial.
   - Quantidade de linhas **igual ou maior** que o `Master Project Planning Template.md` vigente.

2. `02-Contrato.md`:
   - Estrutura contratual completa baseada no `1 - Templates/Contract Template.md`.
   - Sem versão resumida.
   - Cláusulas dinâmicas aplicadas conforme `[[Dynamic Contract Engine]]` e classificação do escopo.

3. `03-Planejamento.md`:
   - Plano técnico detalhado (EAP/WBS, cronograma, riscos, critérios de aceite, kanban e governança de execução).
   - Proibição de planejamento raso de poucas seções.

4. Checklist final de consistência:
   - Nicho base reaproveitável mantido (ex: Advocacia).
   - Possibilidade explícita de ramificação por especialidade sem reconstrução total.
   - Referência ao fluxo `[[Project Lifecycle Pipeline]]` respeitada.
   - Bootstrap de dependências confirmado como executado.

---

## Passo a Passo para o Agente de IA (Claude)

### 1. Extração de Metadados Padrão
A IA deve analisar o documento fornecido e mapear as variáveis-chave:
- `{{CLIENT_NAME}}`
- `{{MARKET_NICHE}}`
- `{{SERVICE_TYPE}}` — gatilho para o Dynamic Contract Engine
- `{{DEPENDENCIES}}` — gatilho para o bootstrap de dependências
- Todas as User Stories (Seção 2)
- Requisitos Arquiteturais (Seção 3)

### 2. Automação de Contrato (Dynamic Contract)
A IA deverá ler o arquivo `1 - Templates/Contract Template.md` e preenchê-lo utilizando os metadados extraídos:
- Preencher *Nome*, *Nicho* e escopo acordado baseado no Master Plan.
- Aplicar cláusulas dinâmicas conforme `[[Dynamic Contract Engine]]` e a classificação do serviço.
- Retornar o contrato preenchido ao usuário.

### 3. Setup de Diretório Alvo
Inicializar o repositório/pasta oficial do cliente:
```
Dev/2 - Projects/[Nicho extraído]/[Nome do Cliente extraído]/
├── 01-Escopo.md
├── 02-Contrato.md
├── 03-Planejamento.md
├── 04-Tarefas.md
├── 05-Dev-Log.md
└── 06-Erros.md
```

### 4. Bootstrap de Dependências
> **Gatilho:** campo `{{DEPENDENCIES}}` da Seção 3.2 do Master Plan preenchido.

A IA executa o bootstrap automático conforme definido em `[[Preferencias Dev]]` — Seção "Setup Automático de Projeto":

1. Instalar dependências base da stack (Next.js, Tailwind, Prisma, Zustand, GSAP, Vitest, Playwright, Docker).
2. Instalar dependências extras declaradas em `{{DEPENDENCIES}}` via `pnpm add`.
3. Verificar conflitos com a stack aprovada antes de instalar.
4. Registrar todas as dependências instaladas com versões em `05-Dev-Log.md`.

### 5. Spec-Kit e SDD+TDD Init
Dentro do diretório criado:
1. Iniciar a metodologia **Spec-Kit** com pipeline SDD+TDD.
2. Transformar a Seção 2 (User Stories) do Master Plan no arquivo primário de backlog técnico.
3. Gerar arquitetura técnica cruzando Seção 3 do Master Plan com `[[Preferencias Dev]]`.
4. Confirmar que cada User Story tem critério BDD executável (gatilho para testes TDD).

### 6. Início do Ciclo de Desenvolvimento
Somente após os Passos 1 a 5 concluídos com sucesso, a IA anuncia:

> **"Setup concluído. Dependências instaladas. Spec-Kit inicializado. Pronto para `/speckit.implement`."**

O desenvolvimento segue a metodologia Akita (SDD+TDD): spec aprovada → teste escrito → código implementado → refactor → próxima tarefa.
