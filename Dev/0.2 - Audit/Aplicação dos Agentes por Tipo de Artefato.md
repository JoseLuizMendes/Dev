---
template: "—  (artefato de metodologia; sem template canon correspondente)"
version: 1.1
status: "Ativo"
tags:
  - auditoria
  - metodologia
  - 3-arquivos
  - e-commerce
origem: "Auditoria Belessence 2026-10-15 §3 e §5.3 item 4"
---

# Aplicação dos Agentes por Tipo de Artefato

> ⚠️ **GATILHO:** auditoria de código cujo artefato **não** é site de portfólio de desenvolvedor.
> ⚠️ **USAR COM:** `[[Audit Template]]` §3 — este documento diz **como preencher** aquelas tabelas, não as substitui.
> ⚠️ **OUTPUT:** critério de transferência aplicado + linhas específicas do tipo de artefato acrescentadas ao relatório.
> ⚠️ **PRÓXIMO PASSO:** seguir o `[[Audit Template]]` normalmente.

---

## 1. O problema que este documento resolve

Os três agentes norteadores de `[[Diretrizes]]` §1 são escritos para **site de
portfólio de desenvolvedor**. Não é acidente nem defeito: está no nome dos
arquivos e nas seções deles.

- `[[ai-portfolio-product-strategist]]` — "Career Positioning", "Project Selection
  Strategy", "Project Tier System", "Portfolio Narrative".
- `[[ai-portfolio-copy-architect]]` — "Hero Section", "About Section", "Projects
  Section", "Case Study Framework", "Skills Section".
- `[[ai-web-designer-agent]]` — este é o mais transferível: fala de design system,
  tokens e componentes, que não têm nada de portfólio.

Quando o artefato é uma loja, um painel interno ou um app, o auditor chega no §3
do `[[Audit Template]]` e tem duas saídas ruins: marcar tudo `N/A` (fuga) ou
fingir que casa (pior). A auditoria do Belessence (2026-10-15) teve que inventar
o critério na hora, e registrou isso como achado contra o cofre, não contra o
código — §5.3 item 4.

**Enquanto este documento não existia, toda auditoria de loja repetia a ressalva.**

---

## 2. O critério de transferência

> **Avalie o princípio quando ele transfere. Declare `N/A` quando o que não
> transfere é o próprio objeto — e diga por quê, na mesma linha.**

Três perguntas, nesta ordem:

1. **O princípio existe fora do portfólio?** "Posicionamento claro" existe em
   qualquer produto. "Project Tier System" não existe fora de portfólio.
2. **O artefato tem um equivalente?** "Authority signals" num portfólio são
   depoimentos e empresas atendidas; numa loja são política de troca, selo de
   pagamento e prova social de terceiro. O princípio é o mesmo: **prova que não
   vem de você mesmo**.
3. **Dá para afirmar com evidência?** Se não há medição, o status é `⚠️`, não
   `✅`. "Conversão otimizada" sem funil instrumentado é opinião.

`N/A` **sempre** vem com motivo escrito. `N/A` sem motivo é indistinguível de
preguiça, e seis meses depois ninguém sabe qual dos dois foi.

---

## 3. O que transfere, por agente

### 3.1 Product Strategist

| Critério | Transfere? | Como ler fora de portfólio |
|---|---|---|
| Posicionamento claro | ✅ sempre | O produto afirma uma coisa e o design/copy sustentam, sem conflito |
| Hierarquia de informação | ✅ sempre | O caminho principal é o caminho curto |
| Conversão otimizada | ✅ sempre | **Exige medição.** Sem funil instrumentado, o máximo honesto é `⚠️` |
| Authority signals | ✅ com tradução | Prova que **não vem de você**: loja = política de troca, selo de pagamento, review de terceiro; SaaS = caso de uso nomeado, SLA, status page |
| Project Selection / Tier System | ❌ | Conceito de portfólio: escolher o que mostrar. Loja mostra o catálogo inteiro |
| Portfolio Narrative | ❌ | Arco de carreira. Sem contraparte |

### 3.2 Web Designer

**Transfere inteiro.** Design system, tokens (tipografia, cor, spacing, motion),
normalização de componentes e dark mode não têm nada de portfólio. É o único dos
três que se aplica sem tradução a qualquer artefato com interface.

> ✅ **Precedência resolvida em 2026-10-16 (decisão do dev: saída "a").** O
> `[[CLAUDE]]` raiz define `[[ui-ux-pro-max]]` e `[[motion-design-engineering]]`
> como **primárias** em UI/UX, vencendo o `[[ai-web-designer-agent]]`. O
> `[[Audit Template]]` §3.2 e o `[[Diretrizes]]` §1 auditavam contra o
> documento rebaixado e não mencionavam as primárias — ficaram para trás
> quando o `CLAUDE` mudou.
>
> Agora o §3.2 tem três partes: **3.2.a** UI/UX pelas 10 prioridades do
> `ui-ux-pro-max` + checklist anti-AI-slop, **3.2.b** motion pelos
> não-negociáveis verificáveis em código, **3.2.c** o `ai-web-designer-agent`
> no escopo em que segue sendo a melhor fonte — extrair design system a
> partir de código (as quatro famílias de token + normalização).
>
> **O que isto significa para a tabela acima:** "Web Designer transfere
> inteiro" continua valendo, e com mais força — acessibilidade, toque,
> performance e motion não têm nada de portfólio.

### 3.3 Copy Architect

| Critério | Transfere? | Como ler fora de portfólio |
|---|---|---|
| Clareza | ✅ sempre | Inclui microcópia e mensagem de erro, não só texto de marketing |
| Especificidade | ✅ sempre | Descrição concreta, não texto de catálogo genérico |
| Autoridade | ✅ com tradução | Mesma lacuna do §3.1: afirmar sem prova externa |
| Escaneabilidade | ✅ sempre | — |
| CTAs eficazes | ✅ sempre | Um CTA primário por tela, sem disputa |
| Anti-padrões (buzzword, genérico) | ✅ sempre | — |
| Hero / About / Projects / Case Study / Skills | ❌ | São **seções de portfólio**. A loja tem vitrine, PDP, carrinho, checkout — avaliar pelos critérios acima, não por esta lista |

---

## 4. E-commerce — a instância trabalhada

Primeiro tipo de artefato mapeado, porque foi o que gerou este documento. O §3 do
`[[Audit Template]]` ganha **uma tabela a mais** quando o artefato é loja.

### 4.1 Critérios que só existem em loja

| Critério | O que verificar | Por que é inegociável |
|---|---|---|
| **Preço recalculado no servidor** | O client manda `productId` + `quantity`; preço, estoque e desconto saem do banco | Confiar no client é fraude por design |
| **Estoque conferido antes de cobrar** | Validação na mesma transação que cria o pedido | Vender o que não existe é prejuízo e SAC |
| **Transação atômica** | Pedido + itens + baixa de estoque + uso de cupom numa `$transaction` só | Pedido sem baixa vende duplicado; baixa sem pedido some com mercadoria |
| **Ordem de desconto e frete** | O frete é calculado sobre o subtotal **já com desconto**? | Faixa de frete grátis muda com o cupom — é dinheiro, não estilo |
| **Cupom: quando o uso incrementa** | No checkout ou só na confirmação do pagamento? | Incrementar cedo esgota cupom em pedido que nunca foi pago |
| **Estoque e pagamento pendente** | Debita na criação ou só na confirmação? Tem janela de expiração? | Define se carrinho abandonado trava o catálogo |
| **Idempotência do webhook** | O gateway reenvia. Processar duas vezes duplica? | Retransmissão é normal, não exceção |
| **Confiança visível** | Política de troca, prazo, selo de pagamento, review de terceiro | É o "authority signal" §3.1 traduzido para loja |
| **PDP completa** | Preço, disponibilidade, frete estimado, política, avaliações | É a página que converte |
| **Dado pessoal** | CPF, endereço e telefone fora de log, de erro e de telemetria | LGPD |

### 4.2 Como declarar no relatório

Acrescentar ao §3 do `[[Audit Template]]`:

```markdown
### 3.4 Específicos do artefato — E-commerce
> Fonte: [[Aplicação dos Agentes por Tipo de Artefato]] §4

| Critério | Status | Observações |
|---|---|---|
| Preço recalculado no servidor | [ ] OK / [ ] N/A | |
| Estoque conferido antes de cobrar | [ ] OK / [ ] N/A | |
| Transação atômica (pedido+estoque+cupom) | [ ] OK / [ ] N/A | |
| Ordem de desconto e frete | [ ] OK / [ ] N/A | |
| Cupom — quando o uso incrementa | [ ] OK / [ ] N/A | |
| Estoque sob pagamento pendente | [ ] OK / [ ] N/A | |
| Idempotência do webhook de pagamento | [ ] OK / [ ] N/A | |
| Sinais de confiança (troca, selo, prova) | [ ] OK / [ ] N/A | |
| PDP completa | [ ] OK / [ ] N/A | |
| Dado pessoal fora de log e telemetria | [ ] OK / [ ] N/A | |
```

---

## 5. Outros tipos de artefato

Ainda **não** mapeados. Quando aparecer o primeiro de cada um, mapear aqui em vez
de improvisar de novo — foi improvisar que custou este documento.

| Tipo | Status |
|---|---|
| E-commerce | ✅ §4 |
| Portfólio de desenvolvedor | ✅ é o caso base dos três agentes |
| Painel interno / back-office | ⬜ a mapear |
| SaaS com assinatura | ⬜ a mapear |
| App instalável / PWA | ⬜ a mapear |
| Site institucional de serviço | ⬜ a mapear |

---

## 6. Quality Gate

- [x] Critério de transferência escrito e aplicável a qualquer tipo de artefato
- [x] Os três agentes mapeados linha a linha, com `❌` justificado
- [x] Primeiro tipo não-portfólio (e-commerce) com tabela pronta para colar no relatório
- [x] Conflito de precedência das skills de design reportado e, depois da decisão do dev, **resolvido** pela saída (a)
- [x] Nenhum critério inventado sem fonte: tudo sai dos três agentes, da auditoria Belessence 2026-10-15 ou do código auditado (R3)

---

## 7. Referências

- `[[Audit Template]]` — o relatório que este documento ajuda a preencher
- `[[Diretrizes]]` §1 — onde os três agentes são declarados fonte da verdade
- `[[ai-portfolio-product-strategist]]` · `[[ai-web-designer-agent]]` · `[[ai-portfolio-copy-architect]]`
- `[[CLAUDE]]` raiz — Diretrizes Globais, precedência das skills de design (conflito do §3.2)
- Auditoria Belessence 2026-10-15 §3 (ressalva metodológica) e §5.3 item 4 (o achado)
