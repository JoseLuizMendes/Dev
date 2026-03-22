# Client Onboarding & Project Initialization Protocol

> **Propósito:** Este protocolo define como o Agente de IA (Claude) deve agir quando receber do usuário o PDF (ou documento exportado) preenchido do *Master Project Planning Template*. Ele atua como a ponte entre o planejamento comercial e a inicialização da engenharia via Spec-Kit.

## Gatilho de Ativação
Sempre que o usuário enviar um arquivo (PDF, Word, Markdown) que contenha a estrutura do `Master Project Planning Template`, a IA deve automaticamente executar as ações descritas abaixo, a menos que o usuário instrua o contrário.

---

## Fluxo Resumido Oficial (Saída Mínima)

Quando não houver instrução contrária, o onboarding deve gerar apenas:

1. Contrato do cliente usando `1 - Templates/Contract Template.md` como fonte base.
2. Resultado do documento de Requisitos e Escopo (fonte para `speckit.specify`).
3. Planejamento de resolução e tarefas em formato Kanban.
4. Erros e aprendizados somente em repositório global (nunca isolado apenas no projeto).

Regras adicionais obrigatórias:

- Não duplicar o template de contrato inteiro no projeto do cliente.
- Personalizar apenas a seção de tipo de serviço (cláusula referente ao escopo executado).
- Manter a pasta do cliente com o mínimo de artefatos necessário para iniciar o Spec-Kit.

Regras operacionais consolidadas (prompts recentes):

- A pasta `MeusProjetos/Freelas` deve conter literalmente o projeto web (código), não documentação de onboarding.
- Documentos de onboarding devem ficar em `Dev/2 - Projects/[Nicho]/[Projeto-do-Cliente]`.
- O `Master Project Planning Template` é o formulário respondido pelo cliente e deve ser a fonte primária da documentação consolidada.
- O `Requirements & Scope Project Template` serve como formato de consolidação técnica estruturada a partir das respostas do Master.

---

## Passo a Passo para o Agente de IA (Claude)

### 1. Extração de Metadados Padrão
A IA deve analisar o documento fornecido e mapear (mentalmente ou em resposta explícita) as variáveis-chave para as próximas etapas:
- `{{CLIENT_NAME}}`
- `{{MARKET_NICHE}}`
- Todas as User Stories (Seção 2)
- Requisitos Arquiteturais (Seção 3)

### 2. Automação de Contrato (Dynamic Contract)
A IA deverá ler o arquivo `1 - Templates/Contract Template.md` e preenchê-lo utilizando os metadados extraídos do planejamento:
- Preencher *Nome*, *Nicho* e escopo acordado baseado no Master Plan.
- Retornar o contrato preenchido ao usuário (ou formatar para que ele exporte o PDF finalizado do contrato para o cliente).

### 3. Setup de Diretório Alvo
A IA deve instruir o sistema (ou confirmar a criação manual com o usuário caso não possua acesso ao filesystem local via MCP) para inicializar o repositório/pasta oficial do cliente no caminho correto:
`2 - Projects/[Nicho extraído]/[Nome do Cliente extraído]/`

### 4. Spec-Kit e Drive-Dev Init
Dentro do novo diretório criado:
1. A IA deve iniciar a metodologia **Spec-Kit**.
2. Transformar a "Seção 2: Requisitos Funcionais e User Stories" extraída do Master Plan no arquivo primário de backlog técnico (ex: `.spec/backlog.md` ou equivalente).
3. Gerar a arquitetura técnica basilar cruzando a Seção 3 do Master Plan e o arquivo global `Preferencias Dev.md`.

### 5. Início do Ciclo de Desenvolvimento (Code Time)
Somente após a execução com sucesso dos Passos de 1 a 4, a IA anunciará que "O Setup Spec-Kit foi concluído com sucesso" e o desenvolvimento do código real poderá ser iniciado seguindo as *Issues/Tickets* previamente mapeadas.
