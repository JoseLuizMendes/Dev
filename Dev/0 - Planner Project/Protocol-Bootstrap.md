---
título: "Protocol — Bootstrap"
versão: 1.0
status: "Ativo"
tags:
  - protocolo
  - bootstrap
  - setup
---

# Protocol — Bootstrap do Projeto

> Sub-protocolo do [[Client Onboarding Protocol]]. Responsabilidade única: criar a estrutura de pastas do projeto no vault e gerar o `setup.js` portátil.

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
Registrar: data de início, estado "Onboarding concluído. Aguardando aprovação do escopo e contrato."

**3. Inicializar `06-Erros.md`**
Arquivo vazio com cabeçalho. Erros sempre propagados para [[4 - Error's Memory/INDEX]].

**4. Gerar `setup.js`**
Seguir o [[Setup Script Template]] — o script lê `01-Escopo.md` em runtime, nunca tem conteúdo hardcoded.

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

**6. Instruir o usuário**
```
Para criar o projeto na sua pasta de trabalho, rode em qualquer terminal:

  cd C:\sua\pasta\de\projetos
  node "caminho\para\Dev\2 - Projects\[Nicho]\[Projeto]\setup.js"
```

---

## Quality Gate

- [ ] `05-Dev-Log.md` e `06-Erros.md` criados
- [ ] `setup.js` lê `01-Escopo.md` via `__dirname` (sem conteúdo hardcoded)
- [ ] `setup.js` instala apenas deps declaradas no escopo + base da stack
- [ ] Smoke test roda e passa ao final do script
- [ ] Usuário instruído sobre como usar o `setup.js`

---

## Referências

- [[Setup Script Template]]
- [[Preferencias Dev]]
- [[Client Onboarding Protocol]]
