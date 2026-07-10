---
template: "Project Kickoff Input"
version: 1.2
status: "Preenchido"
tags:
  - template
  - kickoff
  - input
  - dna
  - frontend
projeto: "Jaguar F-Type 2024"
cliente: "Projeto próprio (teste ponta a ponta do pipeline do vault)"
nicho: "Automotive"
tipo: "front-only"          # front-only | front+back
execucao_automatica: "nao"   # sim → dispara matriz canon linha 18 sem parada | nao → agente aguarda aprovações
data: "2026-07-10"
---

# 🚀 Kickoff Input — Jaguar F-Type 2024

> **Nota de Uso:** Template canon da **porta de entrada de projeto** (matriz canon linha 20 de [[Master Pipeline & Enforcement]]).
> **Como usar:** o dev **copia este arquivo** para `Dev/2 - Projects/Automotive/Jaguar-FType-2024/00-Input.md` (cria a pasta se não existir), altera as informações e entrega ao agente. Campo sem informação = deixar em branco ou `[PENDENTE]` — **nunca inventar** (R3).
>
> ⚠️ **O que acontece ao entregar:** o agente processa este input e retorna o **Kickoff Output** (ver seção final), salvo como `00-DNA.md` na mesma pasta. Se `execucao_automatica: sim`, em seguida dispara a cadeia da linha 18 (0→…→17→19).

---

## 1. Briefing

> Notas da call / requisitos do projeto. Pode ser texto direto ou caminho para o arquivo de briefing.

Briefing direto do dev (conversa de 2026-07-10, sessão Claude Code):

- Site high-ticket de **venda de um Jaguar F-Type 2024** (carro único, produto premium).
- **Fase atual: SÓ MÍDIAS** — identidade visual, cenários, prompts e obtenção de imagens/vídeos cinematográficos ANTES de qualquer código. O restante do projeto (escopo/contrato/dev) vem depois.
- **Pré-loader assinatura:** o carro vem de uma curva acelerando; a barra de carregamento se comporta como velocidade — "conversa" entre a sensação de velocidade do carro e o progresso do carregamento. Não pode demorar muito, nem ser rápido demais. Técnica aprovada: vídeo IA → extração de ~40–60 frames AVIF → GSAP toca a sequência em canvas sincronizada com o progresso real de load.
- **Figura do animal jaguar** (símbolo da marca) dentro do site: jaguar **preto com detalhes metálicos** — reflexos como se fosse feito de metal, mas preto (como o emblema da marca).
- **Cenários (decisão do dev):** não se prender a um único cenário — mostrar a **versatilidade da marca** em sections diferentes. Preloader = **floresta úmida** (habitat do jaguar). Outra section = **alpino com neve** (1ª imagem-referência). Detalhes do carro = estúdio dark.
- Comunicação que **prende a atenção com mídias cinematográficas** dentro do site.

**Objetivo do projeto (1–3 frases):**
Vender um Jaguar F-Type 2024 por meio de uma experiência web cinematográfica de alto nível, à altura de um produto high-ticket. O site deve traduzir a sensação de velocidade e o caráter predatório/elegante da marca (o jaguar) em mídia e movimento. Serve também como teste ponta a ponta do pipeline do vault (linha 20 → DNA → mídias).

**Tipo de entrega:** landing page / site de produto premium (one-off, um carro)

---

## 2. DNA do Projeto (front)

### 2.1 Referências visuais

> URLs escolhidas (com o cliente ou pelo dev). Vazio = agente segue [[Frontend Creative Protocol]] Fase 1 (busca nas fontes canônicas); projeto de cliente sem refs definidas = `[PENDENTE]`.

| # | Referência (URL) | O que interessa dela |
|---|---|---|
| 1 | Imagem enviada pelo dev (conversa) — F-Type R 75 **preto fosco** em estrada de montanha com **neve**, luz fria lateral | Mood do cenário alpino: carro preto fosco, asfalto molhado, montanhas nevadas, sol baixo — base da section "domínio" |
| 2 | Imagem enviada pelo dev (conversa) — F-Type **verde** em estrada de serra com **mata fechada e asfalto molhado** | Mood do cenário floresta úmida: curva de serra, vegetação densa, reflexos no asfalto — base do preloader (habitat do jaguar) |
| 3 | https://landonorris.com/ | Hero automotivo/motorsport, energia de velocidade, scroll storytelling (site da Fase 1.3 do protocolo) |
| 4 | https://www.igloo.inc/ | Imersão 3D/WebGL de altíssimo nível, transições de cena (Fase 1.3) |
| 5 | https://nextsense.io/ | Sofisticação dark, tipografia e ritmo de sections (Fase 1.3) |
| 6 | https://terminal-industries.com/ | Estética tech premium dark, uso de vídeo em sections (Fase 1.3) |
| 7 | `[PENDENTE — perguntar ao dev: há mais referências específicas de sites automotivos que admira?]` | — |

### 2.2 Identidade visual

| Campo | Valor |
|---|---|
| **Paleta** | **Dark luxury monocromática** (decisão do dev, 2026-07-10 — desvio consciente do default pastel): preto fosco, grafite, prata metálica, branco gelo + **1 acento** (âmbar dos faróis OU vermelho caliper — decidir na extração de proto-tokens) |
| **Tipografia** | `[PENDENTE — extrair proto-tokens das refs 3–6; dev valida no DNA]` |
| **Tom / mood** | Cinematográfico, predatório, silencioso e veloz; luxo sóbrio ("liquid metal") — o jaguar animal como fio condutor da narrativa |
| **Logo / brand assets existentes?** | Não há assets próprios ainda. Marca Jaguar é de terceiros — uso aqui é projeto de estudo/teste do pipeline (não comercial). `[PENDENTE — nome/logotipo do site em si]` |

### 2.3 Assets recebidos do cliente (o cliente ENVIA; o dev INPUTA)

**Pasta de entrada dos originais:** `N/A — nenhum asset recebido nesta fase (sem press kit)`

| Arquivo | Tipo (img/vídeo) | Slot previsto | Fundo transparente? | Qualidade OK?* | Licença/direito de uso |
|---|---|---|---|---|---|
| N/A — nada recebido; as 2 imagens da conversa são só referência de mood (não entram como asset) | — | — | — | — | — |

> \* Qualidade mínima: vídeo ≥ 1080p; imagem ≥ alvo @2x do slot ([[Asset Sizing Standard]]). Abaixo disso o agente marca **rejeitado** na ingestão (Fase 6.0) → pedir original melhor ou regenerar.

### 2.4 Assets a gerar

| Slot | Tipo (img/vídeo) | Precisa animar no site? | Fundo transparente? | Vira vídeo? (→ frames inicial+final) |
|---|---|---|---|---|
| Preloader — carro saindo da curva (floresta úmida) | vídeo → sequência de frames | Sim (GSAP canvas sync c/ load) | Não | **Sim** → frame inicial + frame final |
| Hero background loop (alpino/neve) | vídeo | Sim (loop autoplay) | Não | **Sim** → frame inicial + frame final |
| Jaguar animal — statement (preto metálico) | imagem | Sim (scroll reveal/parallax → bleed) | **Sim (alpha)** | Não |
| Jaguar animal — motion (caminhada predatória) | vídeo curto | Sim | Desejável (WebM alpha) | **Sim** → frame inicial + frame final |
| Detalhes do carro em estúdio dark (faróis, roda/caliper, interior, traseira) | imagens (4+) | Sim (parallax/zoom leve → bleed) | Não | Não |
| Section alpina — imagem hero + vídeo showcase | imagem + vídeo | Sim | Não | **Sim** (showcase) → frames inicial+final |
| OG / social share | imagem | Não | Não | Não |

---

## 3. Back-end (se `tipo: front+back`)

> Canon: [[Backend Onboarding Protocol]] (matriz linha 22). Estes campos são os **insumos brutos** da entrevista da Fase 1 (skill `backend-interview-agent` → Tech Brief) — preencha o que souber; a entrevista completa o resto.

| Campo | Valor |
|---|---|
| **Requisitos de back** | N/A nesta fase — `[PENDENTE — decidir se haverá captura de lead/agendamento de test-drive → viraria front+back (linha 22)]` |
| **Dados / entidades principais** (fundação — dados primeiro) | N/A |
| **Integrações** (pagamento, e-mail, storage, APIs externas) | N/A |
| **Auth** (quem loga? admin? OAuth?) | N/A |
| **Porte do projeto** | Pequeno (landing premium) → alvo de deploy Vercel ([[Deploy Protocol]]) |

---

## 4. Aprovações pré-autorizadas

> Marque o que o agente NÃO precisa parar para aprovar (vale só se `execucao_automatica: sim`). Item não marcado = ponto de parada normal.

- [ ] Paleta e identidade visual (usa a seção 2.2 / default pastel)
- [ ] Estrutura de sections proposta
- [ ] Contrato (`02-Contrato.md`) gerado sem revisão prévia
- [ ] Prompts de geração de mídia (gera direto sem mostrar antes)
- [ ] Escolha de framework (usa a matriz de [[Preferencias Dev#Frameworks Frontend de Primeira Classe]])

> Nenhum item pré-autorizado — é teste do pipeline; o dev revisa cada saída. `execucao_automatica: nao`.

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

- [x] Arquivo gerado a partir de `[[Project Kickoff Input Template]]` como base (cópia real, não de memória)
- [x] Salvo como `00-Input.md` na pasta correta do projeto no vault
- [x] Todos os assets do cliente inventariados na seção 2.3 (nenhum arquivo da pasta de entrada fora da tabela — N/A: nenhum asset recebido)
- [x] `00-DNA.md` gerado com as 5 partes do contrato de resposta
- [x] Proto-tokens extraídos de cada ref acessível (paleta hex + tipografia + espaçamentos) — igloo.inc inacessível via fetch, marcada `[PENDENTE — extrair na Fase 2 via refs/]`
- [x] `[PENDENTE]` usados onde falta fonte — nada inventado (R3)
