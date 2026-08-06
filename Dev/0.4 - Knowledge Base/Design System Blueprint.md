---
template: "Knowledge Base Doc"
version: 1.0
fonte: "The Design System Blueprint (PT-BR) — material do dev (Notion), destilado 2026-08-06"
data_incorporacao: 2026-08-06
tags:
  - knowledge-base
  - design-system
  - tokens
  - tipografia
  - cor
  - espacamento
  - movimento
ler_quando: "Ao definir o design system de um projeto (paleta, escala, tipografia, raios, sombras, movimento) — é o MÉTODO por trás do DESIGN.md. Usar na Fase 4 do Frontend Creative Protocol e sempre que algo 'parecer barato'."
---

# Design System Blueprint

> **O método por trás de interfaces que parecem caras.** Premium não é *mais*, é **menos decisões, repetidas com disciplina**: uma paleta pequena, 1–2 fontes, um acento, uma escala de espaçamento — aplicados em cada tela sem exceção. O olho lê consistência como intenção, e intenção como qualidade.

> ⚠️ **Método agnóstico de paleta.** Os valores hex abaixo são **um exemplo** (premium dark/editorial). O default do dev continua **pastel** ([[Frontend Creative Protocol]] §Fase 4) — o método (restrição + tokens + 1 acento + escalas fixas) vale para pastel, cinematográfico ou qualquer direção. Este doc é o **como** por trás do `DESIGN.md` (Impeccable). Cruza com [[Impeccable Reference]], [[ui-ux-pro-max]] e a regra "hex hardcoded proibido / tokens" do [[Preferencias Dev]] §Tailwind.

---

## 1. Restrição = premium
Menos escolhas, sem relação, disputando atenção = amador. **Feche a paleta antes de desenhar**, escolha ≤2 fontes, **um** acento, uma escala de espaçamento e uma família de raios — e proíba qualquer valor fora delas. **Evite** a exceção "só dessa vez": o primeiro valor fora do sistema é permissão pros próximos 50.

## 2. Grid & escala modular (base 8pt)
Toda medida (margin, padding, gap, offset) cai numa **escala de 8 pontos**. Espaço em branco generoso e **escalonado** é o sinal mais forte de premium.

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 8px | ícone↔rótulo, inline apertado |
| `space-2` | 16px | padding de controles, itens de lista |
| `space-3` | 24px | padding de card, blocos relacionados |
| `space-4` | 32px | entre componentes numa seção |
| `space-5` | 48px | padding interno de seção |
| `space-6` | 64px | ritmo vertical entre seções |

**Nota óptica:** centralização matemática ≠ visual — desloque setas/triângulos/itálicos 1–2px pra massa visual. **Evite** empurrar "à mão livre" (vibração amadora).

## 3. Cor — método da paleta pequena
Canvas **branco-quebrado quente** (nunca `#FFFFFF`), tinta **quase-preta** (nunca `#000`), **dois** cinzas, e **exatamente um acento com duas variantes** — porque *acento é um momento, nunca uma superfície*.

| Função | Exemplo | Onde |
|---|---|---|
| Canvas (topo→base) | `#FAFAF8`→`#F4F3EF` | fundo, gradiente vertical sutil |
| Tinta | `#16181D` | texto/títulos (quase-preto) |
| Tinta suave | `#1D2027` | títulos 2º, corpo alta ênfase |
| Cinza | `#8B8F98` | legendas, apoio |
| Borda | `rgba(22,24,29,0.12)` | fios finos |
| Acento | `#2F6FED` | **o único** — links, CTA, foco |
| Acento hover/press | `#4C82FF` / `#1E5AD6` | estados do acento |

**Teste em escala de cinza:** se a hierarquia ainda se lê sem cor, os valores estão trabalhando e o acento fica livre pra ser decoração, não muleta. **Evite** encher hero/card/seção com o acento.

## 4. Tipografia — sistema de duas famílias
Uma **serifada de display** (ex.: Fraunces) + uma **sans geométrica de corpo** (ex.: Inter), com escala fixa. Line-height **aperta** conforme o tamanho cresce; tracking se move **ao contrário** do tamanho; caixa alta só em rótulos/botões.

| Token | Tam | LH | Tracking | Caixa | Família |
|---|---|---|---|---|---|
| Rótulo/chip | 12 | 1.3 | +1px | UPPER | Sans |
| Botão | 14 | 1.0 | +1.5px | UPPER | Sans |
| Nav | 16 | 1.4 | 0 | Sentence | Sans |
| Corpo | 18 | 1.5 | 0 | Sentence | Sans |
| Lead | 20 | 1.5 | 0 | Sentence | Sans |
| H1 mobile | 28 | 1.1 | -0.25px | Sentence | Serif |
| H1 desktop | 56 | 0.95–1.0 | -0.5px | Sentence | Serif |

**Evite** display grande com LH de corpo (1.5) — 56px precisa de ~0.95–1.0 pra ler como uma afirmação única.

## 5. Bordas & raios — família de raios
Nunca canto reto de 0px. **Raio combina com o tamanho** do elemento (menores→menores).

| Token | Raio | Aplica |
|---|---|---|
| `radius-input` | 8px | inputs, controles pequenos |
| `radius-card` | 12px | cards, popovers |
| `radius-card-lg` | 16px | cards grandes, modais |
| `radius-button` | 24px | botões, pílulas |
| `radius-pill` | 999px | chips, tags, avatares |

**Ordem de decisão pra separar superfícies (escolha a 1ª que resolver, não empilhe):** 1) **FILL** (cor de fundo diferente) → 2) **SHADOW** (elevação) → 3) **BORDER** (só se precisar ficar flush; fio fino, nunca cinza duro). Em superfície escura, borda = `1px solid rgba(255,255,255,0.10)`.

## 6. Sombras & elevação
Máximo **3 níveis**, suaves, baixa opacidade, **tingidos na tinta** (não preto puro) + **um** glow de acento raro.

```css
--shadow-sm: 0 1px 2px rgba(16,18,29,0.06);   /* repouso */
--shadow-md: 0 8px 24px rgba(16,18,29,0.10);  /* elevado */
--shadow-lg: 0 20px 50px rgba(16,18,29,0.16); /* flutuante */
--shadow-glow: 0 0 30px rgba(47,111,237,0.30);/* acento, raríssimo */
```
Blur e offset crescem juntos; opacidade nunca passa ~0.16. Em superfície escura, sombra some — separe com fio fino de alpha e deixe o glow ser a única luz. **Evite** `0 4px 8px rgba(0,0,0,0.5)` (adesivo descolando).

## 7. Componentes = só tokens
Um componente **só referencia tokens já definidos**; se precisa de um valor sem token, falta um **token**, não um componente. Defina um conjunto central (CTA/botão, chip, card, input, header/nav) e **todos os 5 estados** (repouso, hover, foco, ativo, desabilitado). Zero hex cru ou número mágico dentro do componente. **Evite** ajustar uma cor codificada à mão numa variante — aí começa a deriva.

## 8. Movimento — o diferencial premium
**Uma** curva de easing de assinatura, aplicada em todo lugar, com durações consistentes — sem bounce, sem spring.

```css
--ease-signature: cubic-bezier(0.16,1,0.3,1); /* fast-out, gentle-settle */
--dur-ui: .4s;        /* 0.3–0.5s feedback de UI */
--dur-entrance: 1.2s; /* 1.0–1.4s entradas de seção */
```
Reveals = fade + `translateY(24–40px)` (nunca slide de fora da tela), stagger 0.1–0.2s. Hover de link = opacidade ~0.6, não troca de cor. **`prefers-reduced-motion` obrigatório.** No vault isso se implementa com **GSAP + Lenis** ([[Preferencias Dev]] §GSAP+Lenis) — mesma filosofia.

## 9. Tokens & documentação
Todo valor vive num **único bloco `:root`**, nomeado **pelo significado** (`--accent`, `--space-3`), nunca pela aparência (`--blue`, `--px-24`). É o contrato: se não é token, não entra. Uma fonte de verdade — nunca tokens duplicados em design + código que derivam.

```css
:root{
  /* Color */ --ink:#16181D; --paper:#FAFAF8; --accent:#2F6FED;
  --surface-dark:#0E0F12; --hairline:rgba(255,255,255,0.10);
  /* Spacing 8pt */ --space-1:8px; --space-2:16px; --space-3:24px;
  --space-4:32px; --space-6:48px; --space-8:64px;
  /* Radii */ --radius-sm:8px; --radius-md:12px; --radius-lg:16px;
  --radius-xl:24px; --radius-pill:999px;
  /* Type */ --font-display:"Fraunces",serif; --font-body:"Inter",sans-serif;
  /* Shadows */ --shadow-sm:0 1px 2px rgba(16,18,29,0.06);
  --shadow-md:0 8px 24px rgba(16,18,29,0.10);
  --shadow-lg:0 20px 50px rgba(16,18,29,0.16);
  --shadow-glow:0 0 30px rgba(47,111,237,0.30);
  /* Motion */ --ease-signature:cubic-bezier(0.16,1,0.3,1);
  --dur-ui:.4s; --dur-entrance:1.2s;
}
```
> No vault, esses tokens viram o `tailwind.config.ts` / `globals.css` do projeto e o `DESIGN.md` (Impeccable) é a versão final — proto-tokens do `00-DNA.md` são o ponto de partida.

## Checklist (manter aberto ao construir)
- [ ] Paleta fechada: canvas quente, tinta quase-preta, 2 cinzas, 1 acento (2 variantes) — passa no teste em cinza
- [ ] Escala de 8pt como tokens; nada entre os números
- [ ] ≤2 famílias; escala tipográfica fixa; LH aperta com o tamanho; caixa alta só em rótulo/botão
- [ ] Família de raios por tamanho; ordem fill→shadow→border (não empilhar)
- [ ] 3 sombras suaves tingidas na tinta + 1 glow raro
- [ ] Componentes só de tokens, com os 5 estados
- [ ] 1 easing de assinatura + 2 durações + `prefers-reduced-motion`
- [ ] Bloco `:root` único, nomes semânticos, uma fonte de verdade

## Referências
- [[Frontend Creative Protocol]] §Fase 4 (paleta) e §Fase 7 (princípios) — este é o método por trás
- [[Impeccable Reference]] — `DESIGN.md` como fonte da verdade do projeto
- [[ui-ux-pro-max]] + [[motion-design-engineering]] — skills primárias de design/movimento
- [[Cinematic Sites Kit]] — quando a direção for cinematográfica dark
- [[Preferencias Dev]] §Tailwind (tokens, hex proibido) e §GSAP+Lenis (movimento)
