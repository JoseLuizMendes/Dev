---
título: "Mock Pipeline Test — Fixture de aceitação do vault"
versão: 1.0
status: "Ativo"
tags:
  - test
  - fixture
  - acceptance
  - dry-run
---

# Mock Pipeline Test

> **Propósito:** Fixture de aceitação do vault. Use para fazer dry-run completo do pipeline toda vez que você (ou outra IA) mexer em template ou protocol. Se algum estágio falhar contra o output esperado, o vault está quebrado.
>
> **Como usar:** colar as notas da call simulada (Seção 1) numa sessão fresca e pedir à IA "execute o pipeline". Comparar cada output contra a Seção de output esperado.

---

## 1. Input — Notas da call simulada (entregar à IA)

```
Cliente: TestCorp Advocacia LTDA
Contato: Dra. Mariana Souza (sócia, PO)
Email: mariana@testcorp.adv.br
Telefone: (11) 99999-0000
Nicho: Advocacia (direito tributário)

Briefing da call (2026-06-01, 1h):

A Dra. Mariana é sócia de uma banca de direito tributário em São Paulo. Hoje
o site da firma é uma página estática feita em Wix há 4 anos, sem SEO, sem
captação de lead, sem area do cliente. Ela perde 2-3 leads por semana para
concorrentes que tem site moderno com agendamento online.

O que ela quer:
- Site institucional novo, identidade visual mais sóbria, "voz" de banca grande
- Página de áreas de atuação (5 áreas: tributário, societário, consultivo,
  contencioso, planejamento sucessório)
- Blog para SEO (publicação semanal pela equipe dela)
- Formulário de captação com lead scoring básico (não pode mandar pra spam)
- Agendamento online integrado com Google Calendar dela
- Area do cliente protegida (login) para upload de documentos e
  acompanhamento de processos (futuro, não nessa fase)
- WCAG AA — ela teve cliente que reclamou de acessibilidade

Orçamento: R$ 18.000 (tier médio)
Prazo: quer no ar até 15/08/2026 (10 semanas a partir de 01/06)
Stack: ela não tem preferência, "o que for melhor"
Hospedagem: ela já tem Vercel pago, prefere manter
Integração: precisa de Resend pro email transacional do form (já tem conta),
e Stripe NÃO precisa (cobrança é via boleto manual)
Storage: futuro — quando tiver área do cliente, S3

Exclusões explícitas:
- Não precisa de e-commerce
- Não precisa multilíngua
- Sem CMS visual — equipe edita blog via markdown no GitHub mesmo
- Área do cliente (login + upload) fica pra fase 2 (não nessa entrega)

Cronograma combinado: 
- Discovery + Design: 2 sem
- Fundação: 1 sem
- Integrações (Resend + Calendar + form): 2 sem
- Blog + SEO + páginas de área: 3 sem
- Polish + QA + go-live: 2 sem

Próximo passo: vou montar o Master Project Planning e mandar pra ela
revisar/assinar antes de começar.
```

---

## 2. Output esperado — Estágio Pre-Sale

A IA deve invocar `[[Pre-Sale Protocol]]` e produzir um arquivo seguindo `[[Master Project Planning Template]]` com:

**Frontmatter esperado:**
```yaml
cliente: "TestCorp Advocacia LTDA"
nicho: "Advocacia"
classificacao: "Frontend do Zero"
data_inicio: "2026-06-01"
data_entrega: "2026-08-15"
tier: "Médio (R$ 18.000)"
stack_confirmada: "[PENDENTE — confirmar com cliente] | N/A (sem backend nesta fase) | Vercel"
```

**Campos preenchidos:**
- `{{CLIENT_NAME}}`: "TestCorp Advocacia LTDA"
- `{{CLIENT_CONTACT}}`: "Dra. Mariana Souza"
- `{{MARKET_NICHE}}`: "Advocacia (direito tributário)"
- Módulos: Áreas de Atuação, Blog/SEO, Captação, Agendamento (4 módulos)
- Integrações: Resend (email), Google Calendar (agendamento)
- Exclusões: e-commerce, multilíngua, CMS visual, área do cliente fase 2

**Pendências esperadas (a IA deve marcar):**
- `[PENDENTE — confirmar com cliente: stack frontend preferida (Next.js?)]`
- `[PENDENTE — confirmar com cliente: identidade visual já existe ou cria do zero?]`
- `[PENDENTE — confirmar com cliente: KPI de conversão alvo do form (atual = 0?)]`
- `[PENDENTE — confirmar com cliente: SLA pós-entrega?]`

**Quality Gate esperado:**
- [x] Documento gerado a partir de `[[Master Project Planning Template]]`
- [x] Todas as variáveis substituídas ou marcadas pendentes
- [x] Nada inventado (nenhuma persona, nenhum KPI fora das notas)
- [x] Lista de pendências apresentada ao dev

---

## 3. Output esperado — Estágio Onboarding (após cliente devolver aprovado)

**Premissa:** dev simula que cliente devolveu aprovado, escolheu stack Next.js 16, confirmou que identidade visual será nova.

A IA deve invocar `[[Client Onboarding Protocol]]` → `[[Protocol-Contract]]`.

**Output 01-Escopo.md (via `[[Requirements & Scope Project Template]]`):**

Frontmatter completo (inclui todos os campos novos do sync):
```yaml
cliente: "TestCorp Advocacia LTDA"
projeto: "Site-Institucional"
nicho: "Advocacia"
classificacao: "Frontend do Zero"
data_inicio: "2026-06-01"
data_entrega: "2026-08-15"
valor: "R$ 18.000"
package_manager: "pnpm"
frontend_stack: "Next.js 16 + React 19 + Tailwind 3.4 + Shadcn"
backend_stack: "N/A — sem backend nesta fase"
cloud_stack: "Vercel"
dependencies: "resend @react-email/components"
email_service: "Resend"
storage_service: "N/A — fase 2"
payment_gateway: "N/A — cobrança manual"
```

User Stories esperadas: ~10-12 cobrindo Áreas, Blog, Captação, Agendamento.

**Output 02-Contrato.md (via `[[Contract Template]]` + `[[Dynamic Contract Engine]]`):**
Como classificação = "Frontend do Zero", deve injetar:
- Cláusula de Limitação de Responsabilidade de Backend
- Cláusula de Dependência de APIs de Terceiros

E manter as 4 cláusulas imutáveis (IP, Escopo, NDA, Disputas).

---

## 4. Output esperado — Estágio SpecKit

A IA deve invocar `[[Protocol-SpecKit]]`.

**Output 03-Planejamento.md (via `[[Planning Template]]`):**
- EAP com ~4-5 épicos
- Erros Conhecidos consultados em `[[4 - Error's Memory/INDEX]]`
- Cronograma 5 fases conforme combinado

**Output 04-Tarefas.md (via `[[Tasks Template]]`):**
- Cada User Story do 01-Escopo tem ≥1 tarefa
- Toda `impl` precedida por `[TEST]`
- IDs sequenciais T-1.1, T-1.2, T-2.1...

---

## 5. Output esperado — Estágio Bootstrap

A IA deve invocar `[[Protocol-Bootstrap]]`.

**Outputs:**
- `setup.js` — gerado de `[[Setup Script Template]]`, lê 01-Escopo via `__dirname`
- `05-Dev-Log.md` — gerado de `[[Dev Log Template]]`, estado inicial registrado
- `06-Erros.md` — gerado de `[[Errors Template]]`, schema YAML vazio
- `INIT.md` (para raiz do projeto de código) — gerado de `[[Project INIT Template]]`

---

## 6. Critérios de aceitação do teste

Marque como passou apenas se TODOS forem verdadeiros:

- [ ] Cada output foi gerado a partir do template canon correspondente (não escrito do zero)
- [ ] Frontmatters estão completos (sem `{{ }}` órfãos exceto quando marcados pendentes)
- [ ] Banners ⚠️ presentes em todo protocolo executado
- [ ] Quality Gates avaliados realisticamente (não tudo `[x]` por reflexo)
- [ ] Pendências marcadas onde apropriado (não inventou conteúdo)
- [ ] Contrato classificou corretamente como "Frontend do Zero" e injetou as 2 cláusulas dinâmicas
- [ ] Memória Imunológica foi consultada antes de finalizar o planejamento
- [ ] Sequência foi Pre-Sale → Onboarding → Contract → SpecKit → Bootstrap (na ordem)

---

## 7. Falhas conhecidas detectadas em rodadas anteriores

> Manter histórico de quando o teste detectou regressão.

| Data | Estágio | Falha | Causa | Corrigido em |
|---|---|---|---|---|
| — | — | — | — | — |

---

## Referências

- `[[Master Pipeline & Enforcement]]` — matriz canon que está sendo testada
- `[[Pre-Sale Protocol]]` — estágio 0
- `[[Client Onboarding Protocol]]` — estágio 1+
- Todos os templates em `1 - Templates/`
