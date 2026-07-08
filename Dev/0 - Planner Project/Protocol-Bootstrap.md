---
título: "Protocol — Bootstrap"
versão: 2.0
status: "Ativo"
tags:
  - protocolo
  - bootstrap
  - setup
---

# Protocol — Bootstrap do Projeto

> ⚠️ **GATILHO:** `01-Escopo.md`, `02-Contrato.md`, `03-Planejamento.md` e `04-Tarefas.md` criados e salvos em `Dev/2 - Projects/[Nicho]/[Projeto]/`.
> ⚠️ **TEMPLATES OBRIGATÓRIOS:** `[[Setup Script Template]]` (para `setup.js`) + `[[Dev Log Template]]` (para `05-Dev-Log.md`) + `[[Errors Template]]` (para `06-Erros.md`) + `[[Project INIT Template]]` (para `INIT.md` da raiz do projeto de código).
> ⚠️ **OUTPUT:** 4 arquivos gerados no diretório do projeto no vault + `INIT.md` na raiz do projeto de código + **ferramentas obrigatórias instaladas** (SpecKit, Impeccable, Higgsfield salvo opt-out, skills Next.js se aplicável — ver `[[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]`).
> ⚠️ **PRÓXIMO PASSO:** desenvolvimento via `/speckit.implement`.
>
> Sub-protocolo do `[[Client Onboarding Protocol]]`. Responsabilidade única: criar a estrutura de pastas do projeto no vault e gerar o `setup.js` portátil + os 3 artefatos de tracking (Dev Log, Errors, INIT).

---

## Sub-fluxograma

```mermaid
flowchart TD
    A([01-04 prontos]) --> B[Criar pasta do projeto no vault]
    B --> C[Copiar Setup Script Template]
    C --> D[Adaptar setup.js para ler 01-Escopo.md]
    D --> E[Copiar Dev Log Template]
    E --> F[Inicializar 05-Dev-Log.md]
    F --> G[Copiar Errors Template]
    G --> H[Inicializar 06-Erros.md]
    H --> I[Copiar Project INIT Template]
    I --> J[Gerar INIT.md na raiz do projeto]
    J --> J2[Instalar ferramentas obrigatorias<br/>SpecKit + Impeccable + Higgsfield + Skills]
    J2 --> K[Quality Gate]
    K --> L([Instruir usuario para rodar setup.js])
```

---

## Gatilho

`01-Escopo.md`, `02-Contrato.md`, `03-Planejamento.md` e `04-Tarefas.md` criados e salvos.

---

## Passos

**1. Criar estrutura de pastas no vault**

```
Dev/2 - Projects/[Nicho]/[Cliente-Projeto]/
├── 01-Escopo.md       ← já existe
├── 02-Contrato.md     ← já existe
├── 03-Planejamento.md ← já existe
├── 04-Tarefas.md      ← já existe
├── 05-Dev-Log.md      ← criar agora
├── 06-Erros.md        ← criar agora
└── setup.js           ← gerar agora
```

**2. Inicializar `05-Dev-Log.md`**
Copiar `[[Dev Log Template]]` como base, substituir variáveis, registrar: data de início, estado "Onboarding concluído. Aguardando aprovação do escopo e contrato."

**3. Inicializar `06-Erros.md`**
Copiar `[[Errors Template]]` como base, substituir variáveis. Arquivo iniciado com schema YAML vazio. Erros sempre propagados para `[[4 - Error's Memory/INDEX]]`.

**4. Gerar `setup.js`**
Seguir o `[[Setup Script Template]]` — o script lê `01-Escopo.md` em runtime, nunca tem conteúdo hardcoded.

O `setup.js` faz apenas bootstrap:
- Lê `01-Escopo.md` via `fs` usando `__dirname`
- Parseia frontmatter (project name, frontend_stack, dependencies)
- Roda scaffold da stack (ex: `npx create-next-app`)
- Instala dependências base + extras do escopo
- Cria arquivos de configuração (tsconfig, next.config, vitest, .env.example)
- Cria estrutura de pastas `src/`
- Roda smoke test ao final

**5. Registrar em `05-Dev-Log.md`**
Registrar que o `setup.js` foi gerado e como usá-lo.

**6. Gerar `INIT.md` na raiz do projeto de código**
Copiar `[[Project INIT Template]]` como base, substituir variáveis. Este arquivo NÃO fica no vault — vai para a raiz do projeto de código (`Freelas/[Projeto]/INIT.md`). É o boot per-projeto.

**7. Instalar ferramentas obrigatórias**

Tabela canônica em `[[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]`. Resumo operacional:

| Ferramenta | Comando | Condição |
|---|---|---|
| SpecKit | `uvx --from git+https://github.com/github/spec-kit.git specify init .` | Sempre |
| Impeccable | `npx skills add pbakaus/impeccable` | Sempre (projetos com UI) |
| Higgsfield | `npx skills add higgsfield-ai/skills` | Padrão; pular se `midia: "nao"` no frontmatter do `01-Escopo.md` |
| Skills Next.js | `npx skills add vercel/next.js` | Se `frontend_stack` contém Next.js |
| Context7 | consultar antes de qualquer decisão de lib durante o bootstrap | Sempre (R7 + regra Context7 de `[[Preferencias Dev]]`) |

Regras:
- Os comandos `npx`/`uvx` são de **terminal** — entram na seção TOOLING do `setup.js` (ver `[[Setup Script Template]]`).
- `/impeccable init` é comando de **agente** — roda no Claude Code depois do setup, gera o `DESIGN.md` na raiz do projeto. Nunca dentro do `setup.js`.
- Opt-out do Higgsfield (`midia: "nao"`): registrar a decisão no `05-Dev-Log.md`.
- Versões instaladas: registrar no `05-Dev-Log.md` como nas demais dependências.

**8. Instruir o usuário**
```
Para criar o projeto na sua pasta de trabalho, rode em qualquer terminal:

  cd C:\sua\pasta\de\projetos
  node "caminho\para\Dev\2 - Projects\[Nicho]\[Projeto]\setup.js"

Após o setup.js rodar:
  1. Copie o INIT.md gerado para a raiz do projeto criado.
  2. Abra o projeto no Claude Code e rode /impeccable init (gera o DESIGN.md).
```

---

## Quality Gate

- [ ] **`05-Dev-Log.md` foi gerado a partir de `[[Dev Log Template]]` como base**
- [ ] **`06-Erros.md` foi gerado a partir de `[[Errors Template]]` como base**
- [ ] **`setup.js` foi gerado a partir de `[[Setup Script Template]]` como base**
- [ ] **`INIT.md` foi gerado a partir de `[[Project INIT Template]]` como base**
- [ ] `setup.js` lê `01-Escopo.md` via `__dirname` (sem conteúdo hardcoded)
- [ ] `setup.js` instala apenas deps declaradas no escopo + base da stack
- [ ] Smoke test roda e passa ao final do script
- [ ] **SpecKit inicializado** (`specify init` na seção TOOLING do `setup.js`)
- [ ] **Impeccable instalado** + usuário instruído a rodar `/impeccable init` (`DESIGN.md` gerado)
- [ ] **Higgsfield instalado OU opt-out (`midia: "nao"`) registrado no `05-Dev-Log.md`**
- [ ] **Skills Next.js instaladas** (se `frontend_stack` contém Next.js)
- [ ] **Context7 consultado** para versões das dependências instaladas
- [ ] Usuário instruído sobre como usar o `setup.js`

---

## Referências

- `[[Setup Script Template]]` — base do `setup.js`
- `[[Dev Log Template]]` — base do `05-Dev-Log.md`
- `[[Errors Template]]` — base do `06-Erros.md`
- `[[Project INIT Template]]` — base do `INIT.md` per-projeto
- `[[Preferencias Dev]]` — stack aprovada e regras de bootstrap
- `[[Client Onboarding Protocol]]` — orquestrador
- `[[Master Pipeline & Enforcement]]` — matriz canon do vault
