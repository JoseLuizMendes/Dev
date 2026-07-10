---
template: "Project Kickoff Input"
version: 1.2
status: "Template"
tags:
  - template
  - kickoff
  - input
  - dna
  - frontend
projeto: "{{PROJECT_NAME}}"
cliente: "{{CLIENT_NAME}}"
nicho: "{{MARKET_NICHE}}"
tipo: "{{PROJECT_TYPE}}"          # front-only | front+back
execucao_automatica: "{{AUTO}}"   # sim → dispara matriz canon linha 18 sem parada | nao → agente aguarda aprovações
data: "{{DATE}}"
---

# 🚀 Kickoff Input — {{PROJECT_NAME}}

> **Nota de Uso:** Template canon da **porta de entrada de projeto** (matriz canon linha 20 de [[Master Pipeline & Enforcement]]).
> **Como usar:** o dev **copia este arquivo** para `Dev/2 - Projects/{{MARKET_NICHE}}/{{PROJECT_NAME}}/00-Input.md` (cria a pasta se não existir), altera as informações e entrega ao agente. Campo sem informação = deixar em branco ou `[PENDENTE]` — **nunca inventar** (R3).
>
> ⚠️ **O que acontece ao entregar:** o agente processa este input e retorna o **Kickoff Output** (ver seção final), salvo como `00-DNA.md` na mesma pasta. Se `execucao_automatica: sim`, em seguida dispara a cadeia da linha 18 (0→…→17→19).

---

## 1. Briefing

> Notas da call / requisitos do projeto. Pode ser texto direto ou caminho para o arquivo de briefing.

{{BRIEFING_OU_CAMINHO}}

**Objetivo do projeto (1–3 frases):**
{{OBJETIVO}}

**Tipo de entrega:** {{TIPO_ENTREGA}} <!-- ex.: site institucional | landing page | e-commerce | portfólio -->

---

## 2. DNA do Projeto (front)

### 2.1 Referências visuais

> URLs escolhidas (com o cliente ou pelo dev). Vazio = agente segue [[Frontend Creative Protocol]] Fase 1 (busca nas fontes canônicas); projeto de cliente sem refs definidas = `[PENDENTE]`.

| # | Referência (URL) | O que interessa dela |
|---|---|---|
| 1 | {{REF_URL}} | {{REF_INTERESSE}} |

### 2.2 Identidade visual

| Campo | Valor |
|---|---|
| **Paleta** | {{PALETA}} <!-- vazio = default tons pastéis (Frontend Creative Protocol Fase 4) --> |
| **Tipografia** | {{TIPOGRAFIA}} |
| **Tom / mood** | {{TOM_MOOD}} <!-- ex.: sofisticado, minimalista, vibrante --> |
| **Logo / brand assets existentes?** | {{BRAND_ASSETS}} |

### 2.3 Assets recebidos do cliente (o cliente ENVIA; o dev INPUTA)

**Pasta de entrada dos originais:** `{{PASTA_ASSETS}}` <!-- fora do git, mesma regra da refs/ -->

| Arquivo | Tipo (img/vídeo) | Slot previsto | Fundo transparente? | Qualidade OK?* | Licença/direito de uso |
|---|---|---|---|---|---|
| {{ARQUIVO}} | {{TIPO}} | {{SLOT}} | {{ALPHA}} | {{QUALIDADE}} | {{LICENCA}} |

> \* Qualidade mínima: vídeo ≥ 1080p; imagem ≥ alvo @2x do slot ([[Asset Sizing Standard]]). Abaixo disso o agente marca **rejeitado** na ingestão (Fase 6.0) → pedir original melhor ou regenerar.

### 2.4 Assets a gerar

| Slot | Tipo (img/vídeo) | Precisa animar no site? | Fundo transparente? | Vira vídeo? (→ frames inicial+final) |
|---|---|---|---|---|
| {{SLOT}} | {{TIPO}} | {{ANIMAR}} | {{ALPHA}} | {{VIRA_VIDEO}} |

---

## 3. Back-end (se `tipo: front+back`)

> Canon: [[Backend Onboarding Protocol]] (matriz linha 22). Estes campos são os **insumos brutos** da entrevista da Fase 1 (skill `backend-interview-agent` → Tech Brief) — preencha o que souber; a entrevista completa o resto.

| Campo | Valor |
|---|---|
| **Requisitos de back** | {{BACK_REQUISITOS}} |
| **Dados / entidades principais** (fundação — dados primeiro) | {{DADOS}} |
| **Integrações** (pagamento, e-mail, storage, APIs externas) | {{INTEGRACOES}} |
| **Auth** (quem loga? admin? OAuth?) | {{AUTH}} <!-- vazio = default Auth.js v5 --> |
| **Porte do projeto** | {{PORTE}} <!-- pequeno/médio → Vercel + Next; médio/grande → VPS Hostinger (framework reavaliado) — define o alvo do [[Deploy Protocol]] --> |

---

## 4. Aprovações pré-autorizadas

> Marque o que o agente NÃO precisa parar para aprovar (vale só se `execucao_automatica: sim`). Item não marcado = ponto de parada normal.

- [ ] Paleta e identidade visual (usa a seção 2.2 / default pastel)
- [ ] Estrutura de sections proposta
- [ ] Contrato (`02-Contrato.md`) gerado sem revisão prévia
- [ ] Prompts de geração de mídia (gera direto sem mostrar antes)
- [ ] Escolha de framework (usa a matriz de [[Preferencias Dev#Frameworks Frontend de Primeira Classe]])

---

## 5. Output esperado do agente (contrato de resposta)

> **Obrigação do agente ao receber este arquivo** (R1/R3/R7): retornar o **Kickoff Output** na conversa E salvá-lo como `00-DNA.md` na pasta do projeto no vault, contendo:

1. **DNA consolidado** — referências + identidade visual + paleta + inventário de assets (recebidos e a gerar), validado contra o [[Frontend Creative Protocol]].
2. **Proto-Design System extraído das referências** — para CADA ref com URL da seção 2.1, o agente acessa/extrai o CSS/CF e registra no `00-DNA.md`:
   - **Paleta** (hex/OKLCH das cores dominantes e de acento) → proposta de **proto-tokens** nomeados (`primary`, `accent`, `surface`…), cruzada com a preferência da seção 2.2 (default pastel) e com contraste WCAG pré-checado;
   - **Tipografia** (famílias, pesos, escala de tamanhos) e **espaçamentos/radii/sombras** notáveis;
   - Extração de design system a partir de código = skill complementar [[ai-web-designer-agent]] (canon de precedência: [[CLAUDE]] raiz §Diretrizes Globais).
   - Estes proto-tokens são o **ponto de partida** da Fase 4 do [[Frontend Creative Protocol]] (paleta → `tailwind.config.ts` + `DESIGN.md`) — não a versão final. Ref inacessível = `[PENDENTE — extrair na Fase 2 via refs/]`.
3. **Prompts completos e complexos** para CADA asset da seção 2.4 — construídos com [[Asset Sizing Standard]] (tamanho/ratio/formato calculado antes) + [[GPT-Image Prompt Galleries]] + paleta/identidade da seção 2.2 (e proto-tokens do item 2); incluindo **frame inicial + frame final** quando `vira vídeo = sim` e instrução explícita de **alpha/fundo transparente** quando marcado.
4. **Direções e próximos passos numerados** — quais linhas da matriz canon seguem, o que o dev precisa fazer, o que o agente fará.
5. **Lista de `[PENDENTE]`** — tudo que falta de informação, com a pergunta específica para cada item.

---

## Quality Gate (do Kickoff)

- [ ] Arquivo gerado a partir de `[[Project Kickoff Input Template]]` como base (cópia real, não de memória)
- [ ] Salvo como `00-Input.md` na pasta correta do projeto no vault
- [ ] Todos os assets do cliente inventariados na seção 2.3 (nenhum arquivo da pasta de entrada fora da tabela)
- [ ] `00-DNA.md` gerado com as 5 partes do contrato de resposta
- [ ] Proto-tokens extraídos de cada ref acessível (paleta hex + tipografia + espaçamentos) — ref inacessível marcada `[PENDENTE]`
- [ ] `[PENDENTE]` usados onde falta fonte — nada inventado (R3)
