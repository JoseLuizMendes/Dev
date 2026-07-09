---
título: "Frontend Creative Protocol"
versão: 1.0
status: "Ativo"
tags:
  - protocol
  - frontend
  - design
  - referencias
  - criativo
---

# Frontend Creative Protocol

> ⚠️ **GATILHO:** Projeto com front/UI aprovado (pós-briefing) → antes de qualquer linha de código do front ser escrita.
> ⚠️ **TEMPLATE OBRIGATÓRIO:** Este protocolo (protocolo puro + estrutura canônica da pasta `refs/`).
> ⚠️ **OUTPUT:** Pasta `refs/` no repo do projeto (local, **fora do git**) + Mapa de Referências (`refs/00-MAPA.md`) + paleta aprovada + pipeline de mídia definido.
> ⚠️ **PRÓXIMO PASSO:** Desenvolvimento do front (`/speckit.implement`) com GSAP + Lenis (+ Three.js quando couber).

---

## Contexto

Este protocolo captura o **fluxo criativo canônico do dev para front-end/web**. Ele existe porque a qualidade visual dos projetos não vem de improviso: vem de referências curadas, extração fiel de efeitos, paleta intencional e um pipeline de mídia otimizado. Nenhum front começa sem passar por aqui.

---

## Sub-fluxograma

```mermaid
flowchart TD
    A([Briefing aprovado - projeto tem front/UI]) --> B{Projeto de cliente?}
    B -->|Sim| C[Conversar com cliente sobre referencias]
    B -->|Nao - projeto proprio| D[Dev busca referencias sozinho]
    C --> E[Buscar em Squarespace, Dribbble, Awwwards, Pinterest]
    D --> E
    E --> F[Selecionar sites, sections, componentes, efeitos e insights]
    F --> G[Extrair codigo-fonte HTML/CSS/JS das referencias]
    G --> H[Salvar CF em .md dentro de refs/ + todas as referencias]
    H --> I[Dev declara: componente X da ref Y vai no lugar Z]
    I --> J[Registrar tudo em refs/00-MAPA.md]
    J --> K[Definir paleta - tons pasteis como default]
    K --> L[Carregar skills: Context7 + Impeccable + UX/UI + system design]
    L --> M[Definir pipeline de midia: geracao + enhance + WEBP]
    M --> N([Iniciar desenvolvimento com GSAP + Lenis + Three.js quando couber])
    N -.->|front concluido| O[Deletar refs/ - lixo nao utilizado]
```

---

## Fase 1 — Referências

**1.1 Origem das referências:**
- **Projeto de cliente:** conversar com o cliente sobre referências logo após o briefing.
- **Projeto próprio:** o dev busca as referências sozinho.

**1.2 Fontes de busca canônicas** (buscar sites inteiros, sections, componentes, efeitos e insights):

| Fonte | URL | O que buscar |
|---|---|---|
| Awwwards | https://www.awwwards.com/ | Sites premiados, efeitos de alto nível, insights |
| Dribbble | https://dribbble.com/ | Componentes, UI shots, direção de arte |
| Pinterest | https://www.pinterest.com/ | Moodboards, direção visual, paletas |
| Squarespace | https://www.squarespace.com/templates | Templates, estruturas de sections |

**1.3 Sites-referência de inspiração (paleta + nível de qualidade que o dev admira):**

| # | Site | URL |
|---|---|---|
| 1 | Lando Norris | https://landonorris.com/ |
| 2 | Igloo Inc | https://www.igloo.inc/ |
| 3 | Species in Pieces | http://species-in-pieces.com/# |
| 4 | Loiseau | https://loiseau.framer.website/ |
| 5 | NextSense | https://nextsense.io/ |
| 6 | Bucks Sauce | https://buckssauce.com/ |
| 7 | Nymphai Cosmetics | https://nymphaicosmetics.com/ |
| 8 | More Nutrition | https://more-nutrition.webflow.io/ |
| 9 | Cipher Digital | https://cipherdigital.com/ |
| 10 | Day 1 Run | https://day1-run.webflow.io/ |
| 11 | Nudot | https://nudot.com.tw/ |
| 12 | Terminal Industries | https://terminal-industries.com/ |
| 13 | Oryzo | https://oryzo.ai/ |

> Esta lista é viva: novos sites que o dev admirar entram aqui (bump de versão + entrada em `[[MEMORY]]`).

---

## Fase 2 — Extração de Código-Fonte (CF)

Para ter **facilidade e fidelidade** à referência, o dev extrai o código-fonte (HTML, CSS e JS) dos sites selecionados.

**Estrutura canônica da pasta `refs/`** (raiz do repo de código do projeto):

```
refs/
├── 00-MAPA.md                  # Mapa de Referências (ver Fase 3)
├── <nome-da-ref-1>.md          # CF (HTML/CSS/JS) + link + prints + notas do que interessa
├── <nome-da-ref-2>.md
└── assets/                     # screenshots / vídeos de referência (opcional)
```

**Regras inegociáveis da `refs/`:**

1. **`refs/` NUNCA sobe no git.** Entrada obrigatória no `.gitignore` do projeto na criação da pasta. Ela vive apenas no repo local.
2. **Ciclo de vida:** `refs/` permanece no repo local **até o front do projeto ser concluído**. Depois disso, o dev **deleta** a pasta — lixo que não é mais utilizado não fica no projeto.
3. **CF é material de estudo e fidelidade, não de cópia.** O código extraído serve para entender estrutura, timing de animação e técnica do efeito. A implementação final é **re-escrita do zero** dentro da stack canon (`[[Preferencias Dev]]`) — copiar HTML/CSS/JS substancial de terceiros para projeto de cliente é risco de copyright.
4. Como `refs/` é gitignored, ela é **exceção automática à R8** (não precisa de `CLAUDE.md`).

---

## Fase 3 — Mapa de Referências (`refs/00-MAPA.md`)

Depois das refs coletadas, o dev declara ao agente **o que quer de cada referência e onde**. Isso vira o `00-MAPA.md`:

```markdown
# Mapa de Referências — {{PROJETO}}

| Referência | Componente / Efeito | Onde entra no projeto | Observações |
|---|---|---|---|
| landonorris.com | Hero com scroll horizontal | Hero da home | Adaptar pra paleta pastel |
| igloo.inc | Transição de section 3D | Section "Sobre" | Three.js — avaliar peso |
| ... | ... | ... | ... |
```

O agente **só implementa componentes de referência que estejam no mapa**. Referência sem destino declarado = perguntar ao dev (R3/R5).

---

## Fase 4 — Paleta e Identidade Visual

- **Default do dev: tons pastéis** — como nos sites-referência da Fase 1.3.
- A paleta final considera: **equilíbrio visual, contraste (WCAG) e tom**.
- Tokens no `tailwind.config.ts` / `globals.css` — hex hardcoded proibido (`[[Preferencias Dev#Tailwind + Shadcn]]`).
- `/impeccable init` → `DESIGN.md` registra a paleta como fonte da verdade do projeto.

---

## Fase 5 — Skills e Integridade de Código

Antes de desenvolver, garantir carregado/instalado (via `[[Protocol-Bootstrap]]` Passo 7):

| Ferramenta / Skill | Papel |
|---|---|
| **Context7 MCP** | Docs em tempo real de toda lib usada — nunca adivinhar API |
| **Impeccable** | Design QA + anti-AI-slop — `[[Impeccable Reference]]` |
| **Skills de UX/UI e design** | Melhoria contínua de usabilidade e interface |
| **Noções de system design** | Arquitetura do front conforme `[[Preferencias Dev#Filosofia de Construção]]` |

---

## Fase 6 — Pipeline de Mídia

**6.1 Geração de artes e vídeos:**

| Situação | Ferramenta |
|---|---|
| Higgsfield disponível (créditos/pago) | Higgsfield skills — `[[Higgsfield Skills Reference]]` |
| **Sem orçamento (situação atual)** | Alternativas gratuitas abaixo |

**Alternativas gratuitas aprovadas:**

| Tipo | Ferramenta | Observação |
|---|---|---|
| Imagem | Google AI Studio (Gemini) | Free tier generoso, alta qualidade |
| Imagem (assets de design) | Recraft | Free tier, foco em vetor/design pra web |
| Imagem | Leonardo.ai / Ideogram | Créditos diários grátis |
| Imagem (local, ilimitado) | ComfyUI / Fooocus + Flux/SDXL | Exige GPU |
| Vídeo | Kling / Hailuo / Luma Dream Machine | Créditos diários/free tier limitados |
| Vídeo (alternativa) | GSAP/Three.js bem feitos | Muitas vezes substituem vídeo gerado em hero sections |

**6.2 Enhance de imagem:**
- **Upscayl** (open source, local, gratuito) — upscale/enhance padrão.

**6.3 Conversão de formato — REGRA INEGOCIÁVEL:**
- **Toda imagem PNG/JPEG destinada ao navegador é convertida para WEBP** — formato mais comprimido e leve.
- Conversão em lote via **`sharp`** (npm) em script do projeto; avulsa via **Squoosh** (squoosh.app).
- Em projetos Next.js, `next/image` já serve WEBP/AVIF automaticamente — ainda assim, assets estáticos em `public/` entram como WEBP.

---

## Fase 7 — Princípios de Web Design (checklist de desenvolvimento)

Todo front produzido DEVE respeitar os princípios básicos que o dev valoriza:

- [ ] **Arquitetura da informação** clara
- [ ] **Hierarquia visual** bem definida
- [ ] **Projetado para vários dispositivos** (responsivo de verdade)
- [ ] **Acessível e inclusivo** (WCAG)
- [ ] **Cores com equilíbrio visual, contraste e tom**
- [ ] **Layout conduz os olhos do usuário**
- [ ] **Espaço negativo** usado para destacar conteúdo
- [ ] **Informações mais importantes primeiro**
- [ ] **Navegação fácil**
- [ ] **Design que se destaca**

---

## Fase 8 — Ferramentas-Assinatura do Desenvolvimento

O que dá "outro sentimento" ao site e eleva o nível:

| Ferramenta | Uso | Regra |
|---|---|---|
| **GSAP** | Animações | Sempre. `useGSAP` obrigatório, `prefers-reduced-motion` — `[[Preferencias Dev#GSAP + Lenis]]` |
| **Lenis** | Smooth scroll | Sempre. ScrollTrigger integrado via `requestAnimationFrame` |
| **Three.js** | 3D / WebGL | **Quando couber** (peso vs. impacto avaliado no `03-Planejamento`). Aprovado na stack — `[[Preferencias Dev#Three.js]]` |

---

## Quality Gate

- [ ] Referências buscadas nas 4 fontes canônicas (ou justificativa de fonte alternativa)
- [ ] `refs/` criada na raiz do repo com CF em `.md` + **entrada no `.gitignore` no mesmo commit da criação do repo**
- [ ] `refs/00-MAPA.md` preenchido — todo componente de referência tem destino declarado
- [ ] Paleta definida (default pastel) com contraste WCAG validado, registrada no `DESIGN.md`
- [ ] Context7 + Impeccable + skills de UX/UI carregados
- [ ] Pipeline de mídia definido (geração + Upscayl + conversão WEBP)
- [ ] Checklist de princípios de web design (Fase 7) anexado ao `03-Planejamento` ou `DESIGN.md`
- [ ] **Pós-conclusão do front:** `refs/` deletada (registrar no `05-Dev-Log`)

---

## Referências

- `[[Preferencias Dev]]` — stack e regras inegociáveis
- `[[Master Pipeline & Enforcement]]` — matriz canon (linha 19)
- `[[Protocol-Bootstrap]]` — instalação do tooling
- `[[Impeccable Reference]]` — design QA
- `[[Higgsfield Skills Reference]]` — mídia IA (quando disponível)
