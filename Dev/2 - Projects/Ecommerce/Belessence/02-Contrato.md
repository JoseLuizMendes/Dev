---
template: "Contract"
version: 1.0
status: "Auto-contrato (projeto pessoal)"
tags:
  - contrato
  - refatoração-full-stack
  - dynamic-contract
cliente: "Belessence (Mari Beauty)"
projeto: "Belessence"
classificacao: "Refatoração Full-stack"
data_geracao: "2026-05-30"
fonte_canon: "[[Contract Template]] + [[Dynamic Contract Engine]]"
---

# 📝 Contrato — Belessence (Mari Beauty)

> **Nota:** Belessence é um projeto pessoal do próprio dev. Este contrato existe principalmente como **artefato canon do vault** para fechar o ciclo do `[[Client Onboarding Protocol]]` e exercitar o `[[Dynamic Contract Engine]]` com classificação "Refatoração Full-stack". Como o cliente e o desenvolvedor são a mesma pessoa, várias cláusulas que protegeriam o desenvolvedor contra o cliente são auto-aplicáveis (sem efeito prático), mas estão registradas para fidelidade ao processo.

---

## 1. Partes

**CONTRATANTE:** Belessence — marca operada como "Mari Beauty"  
**CONTRATADO(A):** JOSÉ LUIZ DOS SANTOS AZEREDO MENDES, CPF 20858609746, email josemendess004@gmail.com

---

## 2. Objeto

Refatoração estrutural do sistema ecommerce existente (Next.js Standalone Fullstack + Prisma + Postgres) cobrindo:

- Reorganização de `src/lib/` em 12 bounded contexts (auth, cart, wishlist, products, orders, payment, shipping, coupons, reviews, design, motion, shared)
- Aplicação de Arquitetura Hexagonal (Domain/Application/Infrastructure/Presentation) por bounded context
- Aplicação de SOLID + Clean Code em nomeação e responsabilidades
- Rename de `src/api/` para `src/shadcn-utils/` (elimina confusão com `src/app/api/`)
- Criação de `CLAUDE.md` em todas as pastas e sub-pastas (regra R8)
- Sincronização do vault com o estado real do código

Sem mudanças em UI (`src/components/`), rotas (`src/app/*`), schema (`prisma/schema.prisma`) ou design visual.

---

## 3. Cláusulas Imutáveis (Universais)

### 3.1 Propriedade Intelectual (IP)
Código-fonte é propriedade do CONTRATANTE — não há transferência (cliente = dev).

### 3.2 Controle de Escopo
Qualquer feature solicitada fora do escopo desta refatoração é tratada como **Change Request** (nova rodada): exige update do `01-Escopo.md` + replanejamento via `[[Protocol-SpecKit]]` antes de qualquer alteração no código.

### 3.3 Confidencialidade (NDA)
N/A (auto-contrato).

### 3.4 Resolução de Disputas
N/A (auto-contrato).

---

## 4. Cláusulas Dinâmicas — Refatoração Full-stack

> Injetadas pelo `[[Dynamic Contract Engine]]` em função da classificação.

### 4.1 Pré-requisito de Auditoria Técnica

Antes de qualquer commit da Rodada 4 (Hexagonal em `src/lib/`), o CONTRATADO realiza auditoria técnica obrigatória do bounded context alvo:

- Mapear arquivos atuais (`src/lib/<feature>*`)
- Identificar dependências cruzadas (acoplamento implícito)
- Documentar decisão de design no `[[05-Dev-Log]]` ANTES de mover código
- Escrever testes de regressão (Vitest) antes do refactor

**Cláusula de viabilidade:** se a auditoria de um bounded context revelar que a refatoração é inviável (ex: domínio entrelaçado demais), o CONTRATADO pode declarar o bounded context "fora de escopo" e recomendar reescrita futura — sem isso constituir quebra de contrato.

### 4.2 Isenção de Tempo de Inatividade (Downtime)

Como o projeto está em produção (Vercel) e tem usuária real (Mari) usando o admin:

- Durante migrações de `src/lib/` (Rodada 4), pode haver janelas de instabilidade em deploy preview
- Production deploys só acontecem APÓS Vitest + Playwright + smoke test manual passarem 100%
- O CONTRATADO **NÃO** é responsável por perdas operacionais resultantes de janelas de migração devidamente sinalizadas

---

## 5. Pagamento e Cronograma

N/A (projeto pessoal). Cronograma estimado nas Rodadas 2-4 do `[[03-Planejamento]]`.

---

## 6. Vigência

Contrato vigente desde **2026-05-30** até a conclusão da Rodada 4 com `tools/validate-project.js --code-path` passando 100%.

---

## 7. Disposições Gerais

- LGPD aplicável aos dados de usuárias reais do ecommerce (já implementado: privacidade de cart/wishlist por usuário).
- Comunicação via commits + sessões do vault (`[[3 - Session Logs]]`).

---

**Aprovado:** 2026-05-30 — José Luiz Mendes (CONTRATANTE = CONTRATADO)

---

## Quality Gate

- [x] Artefato foi gerado a partir de `[[Contract Template]]` como base
- [x] Cláusulas dinâmicas da classificação "Refatoração Full-stack" aplicadas (Auditoria Prévia + Isenção Downtime)
- [x] Cláusulas imutáveis presentes (IP, Escopo, NDA, Disputas) — algumas N/A por ser auto-contrato
- [x] Variáveis substituídas (CLIENT_NAME, START_DATE, etc)
- [x] Nenhuma seção omitida

## Referências

- `[[Contract Template]]`
- `[[Dynamic Contract Engine]]` §Refatoração Full-stack
- `[[01-Escopo]]` — escopo detalhado
- `[[Master Pipeline & Enforcement]]` — matriz canon do vault
