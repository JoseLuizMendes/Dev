---
template: "Hero Film Storyboard — car ↔ jaguar parallel"
version: 1.0
status: "Em produção take a take. Imagens primeiro (frames OFF/ON, CLOSED/OPEN), depois vídeos (first+last frame). Dev gera no Google Flow; agente escreve prompts + normaliza+integra. 1 vídeo/rodada até reset de créditos (dia 15)."
tags: [midia, storyboard, hero, video, jaguar, prompts]
projeto: "Jaguar F-Type 2024"
data: "2026-08-06"
---

# 🎬🐆 04 — Hero Film (storyboard car ↔ jaguar)

> Hero cinematográfico (Hollywood / "Velozes e Furiosos"), inspirado no ferrari.com. **Conceito:** alterna takes do **carro** com takes do **jaguar-animal** em paralelo — cada beat do carro tem o gêmeo no animal — e no final **os dois se encontram** (o jaguar se esfrega no carro como gato pedindo carinho, mas sempre **sério**). É o fio condutor "Black Jaguar / Liquid Metal" do [[00-DNA]] §3.3/§3.4 virando filme.

## Locks globais (valem em TODOS os takes)
- **Fundo `#080A0A` chapado** — camufla no preto do site (o elemento "some" no escuro até o âmbar cortar).
- **Princípio de luz = CONTRASTE:** ambiente escuro, sujeito **camuflado**; o **âmbar** (farol / olho) é o **único ponto de luz e cor** → é o "pop". Nada de high-key, nada de rosto/carro bem iluminado.
- **Âmbar `#E8A33D`** = MESMA cor no farol do carro e no olho do jaguar (amarra o paralelo).
- **Jaguar:** melânico **preto**, olhos **âmbar**, **SEMPRE sério** (nunca sorrindo/fofo, boca fechada, sem dentes), expressão natural (nunca "fazendo força"). **É um jaguar REAL/fotorrealista — NUNCA metálico / liquid metal / chrome / CGI / escultura** (decisão do dev 2026-08-06; corrige o "liquid obsidian metal" do DNA §3.3, que saía de metal). O "Liquid Metal" do conceito é só a **pintura do carro** — o animal é vivo. Style dos prompts do jaguar = **"Photorealistic Wildlife Cinematography"** (não "sculpture/render"); avoid sempre inclui `metallic fur, chrome, liquid metal, CGI look, statue`.
- **Enquadramento:** completamente **head-on e centrado** (corte casado carro↔jaguar).
- **Ignição limpa:** farol/olho acendem **sem** bloom/flare forte — só "ligar".
- Disciplina de prompt: identidade travada + lista fechada + negative + gerar 3–4 e escolher ([[media-generation-decisions]]).

### Regra de fundo/ambiente (anti-alucinação — decisão do dev 2026-08-06)
- **Takes 1–4** (farol OFF · olho FECHADO · farol ON · olho ABERTO) usam o **MESMO fundo `#080A0A` chapado** — se o fundo variar entre eles, o corte fica desconexo ("nada a ver").
- **Dentro de QUALQUER par A→B, o ambiente/fundo do frame inicial e do final tem que ser IDÊNTICO** — muda só o **estado** (luz/olho/pose), **nunca o cenário**. Se o ambiente muda entre inicial e final, a IA **alucina o ambiente** na renderização do vídeo (first+last frame).
- **Takes 5–8:** não precisam do fundo sólido — **alinhar o ambiente ao que faz sentido pro take** (estúdio, habitat, estrada…), mantendo o **mesmo ambiente** entre inicial/final do par.

## Técnica de vídeo (a que faz funcionar)
Cada take é **estado A → estado B**. Gerar o **frame A**, aprovar, e **derivar o frame B do A via image-edit** (pixel-idêntico — mesmo fundo, escala, sujeito; muda **só** o estado: farol/olho). No **Flow usar first-frame (A) + last-frame (B)** → a IA só preenche o meio = **mínima alucinação**. Ordem: **imagens primeiro** → aprovar corte casado → vídeo.

> ⚠️ **NUNCA gerar o frame B do zero** (decisão do dev 2026-08-06, pós-teste): se A e B forem gerações separadas, o fundo/escala/sujeito divergem (ex.: carro OFF esverdeado vs ON preto puro; jaguar fechado com rosetas vs aberto "pantera") e o vídeo **faz morph** do ambiente e do bicho no meio. Derivar B de A por edit resolve. Prompts de edit: "keep EVERYTHING pixel-identical, change ONLY [the headlights igniting / the eyes opening to amber]".

> ⚠️ **Dois tipos de take (correção 2026-08-06):** nem tudo é par first+last.
> - **Take de ESTADO** (liga/desliga, abre/fecha): **2 imagens** (A→B), first+last frame. São: **farol** (OFF/ON), **olho** (CLOSED/OPEN), **traseira** (lanterna OFF/ON).
> - **Take de MOVIMENTO contínuo** (girar, passo, varrer): **1 imagem só** + o movimento vem do **prompt do vídeo** (não existe "frame final" — gerar um separado sai igual/inútil, prova: a roda saiu parada). São: **roda** (gira 1/8), **pata** (passo), **cauda** (varre), **habitat** (corrida).

## Takes (alternando carro / jaguar)

| # | Take | Carro | Jaguar (gêmeo) | Estado A → B |
|---|---|---|---|---|
| 1 | **Despertar** | Farol (head-on) | Olho | OFF→ON / CLOSED→OPEN |
| 2 | *(idem, o par do 1)* | — | Olho (ref do dev) | closed→open |
| 3 | Movimento | Rodas | Patas | parado→girando / passo |
| 4 | Traseira | Traseira/ducktail | Dorso/cauda | — |
| 5 | Fôlego | Escapamento (quad) | Respiração/narina | idle |
| 6 | Textura | Interior/volante (materiais, costura) | **Pintas/rosetas e detalhes bonitos do animal** (pelo, textura) | — |
| 7 | Solto | Carro acelerando **nos mesmos cenários do habitat** (alinhar) | **Jaguar correndo em seu habitat** (mesmos ambientes, em paralelo) | — |
| 8 | **Encontro** | Carro parado | Jaguar se esfrega no carro (sério) | convergência final |

> **Consistência:** guardar a melhor geração do **carro** (anchor já aprovado) e do **jaguar** (frame do olho) como referência reusada em todos os takes seguintes — sempre o mesmo carro e o mesmo animal ([[Media Workflows (Human Academy)]] §Character Sheet).

---

## Take 1 — Farol (carro), head-on, fundo chapado

**Frame OFF (inicial):**
```text
/* SCENE_RENDER_CONFIG: FType-T1-Headlight-OFF v2 — Cinematic Automotive Front Film Still */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152",
    "style": "hyper-realistic cinematic HEAD-ON front still, moody, near-black, deliberately understated",
    "camera": "PERFECTLY HEAD-ON, straight in front of the car, CENTERED, eye-level with the headlights, 50mm, zero angle — front fascia symmetric, BOTH slim LED headlights fully in frame and centered; medium-close",
    "render_flags": ["8K_master_detail","sharp_subject","subtle_filmic_grain","no_CGI_tell"]
  },
  "ENVIRONMENT": {
    "background": "FLAT SOLID matte near-black #080A0A filling the entire frame — no gradient, no studio, no wet floor, no walls, no visible light — blends into a black website; car emerges only faintly from the black",
    "lighting": "extremely low, soft, EVEN ambient from behind the camera; just enough to hint the satin surface; NO visible light source, no beams"
  },
  "CORE_ASSETS": {
    "primary_subject": "the FRONT of a 2024 Jaguar F-Type in satin matte black, head-on and symmetric — grille, front splitter and BOTH slim LED headlight units (four amber blades, two per side) centered",
    "state": "headlights OFF — LED signatures dark and dormant; the car is a barely-visible black shape against the black, only faint satin speculars reveal its form",
    "materials": ["satin matte black paint with faintest cold specular","dark dormant headlight glass"]
  },
  "OUTPUT": {
    "mood": "understated, quiet, low expectation — looks like a plain dark site before the spark",
    "avoid": ["any angle or three-quarter view","off-center","lights on","glow","lens flare","smoke","wet floor","gradient background","people","text","badges","bright exposure","grey paint","more than four headlight blades"]
  }
}
```
**Frame ON (final — muda só o estado):**
```text
"state": "headlights ON — BOTH slim LED signatures ignite SYMMETRICALLY in warm amber #E8A33D (four blades total, two per side), cleanly; gentle amber only on the immediate hood/grille edge; NO big bloom, NO lens flare, NO light burst — just the eyes waking, symmetric",
"avoid": ["angle or three-quarter view","off-center","big glow bloom","lens flare","light burst","smoke","wet floor","gradient background","asymmetric lights","more/fewer than four blades","people","text","badges"]
```
**Motion (vídeo, first+last):** "The dormant LED signature ignites cleanly, both amber headlights turning on in one calm beat; a subtle warm accent on the satin front. The car does not move; camera locked; no big glow, no flare. 3s."

## Take 2 — Olho (jaguar), tight head-on gaze (ref do dev)

**Frame CLOSED (inicial):**
```text
/* SUBJECT_RENDER_CONFIG: Jaguar-T2-Eye-CLOSED v3 (tight head-on gaze) — Premium Brand Sculpture Photography */
{
  "GLOBAL_SETTINGS": {
    "aspect_ratio": "16:9 wide, 2048x1152 (tight crop)",
    "style": "hyper-realistic LOW-KEY macro close-up of a BLACK jaguar's gaze; camouflaged in near-black; fur reads as liquid obsidian only where light grazes it",
    "camera": "EXTREME CLOSE-UP, COMPLETELY HEAD-ON and symmetric — frame filled by the two eyes, brow and bridge of the nose; both eyes centered and level; top of muzzle at lower frame; 100mm macro, sharp on the eyes, shallow depth",
    "render_flags": ["8K_master_detail","micro_texture","sharp_eyes","no_CGI_tell"]
  },
  "BACKGROUND": "flat solid near-black #080A0A filling the frame; no smoke; blends into a black website",
  "LIGHTING": "VERY LOW-KEY — a single faint cold rim light grazes the brow and cheekbones catching a thin obsidian-metal specular; everything else falls into deep shadow and MELTS into the black; deliberately dark; strong contrast RESERVED for when the eyes open",
  "CORE_ASSETS": {
    "primary_subject": "adult melanistic BLACK jaguar, completely head-on, SERIOUS and intense; predatory stillness; face mostly camouflaged in the dark",
    "state": "eyes GENTLY and NATURALLY closed, relaxed and calm — soft smooth eyelids, NO squeezing, NO clenching, NO straining, no tension or wrinkles; the closed eyes almost disappear into the dark fur",
    "materials": ["fur as liquid obsidian metal visible only in thin rim speculars","faint rosette texture only in the speculars","deep shadow swallowing the face"]
  },
  "OUTPUT": {
    "mood": "dormant power in the dark, serious, silent — about to wake",
    "avoid": ["too bright","evenly lit face","high-key","flat lighting","squeezed or clenched eyes","straining","tension or wrinkles around the eyes","three-quarter angle","off-center","looking away","smiling","teeth","cartoon","grey background"]
  }
}
```
**Frame OPEN (final — muda LIGHTING + state; = a ref do dev):**
```text
"LIGHTING": "same low-key dark setup; the two AMBER eyes are the SINGLE point of light and contrast — glowing warm amber, intense, each catching a sharp specular",
"state": "eyes fully OPEN and INTENSE — two glowing amber-orange #E8A33D eyes, symmetric, locked straight on the viewer, sharp detailed irises with a darker pupil (like the reference); the ONLY strong light/color in an otherwise near-black frame; SERIOUS, calm, predatory; head-on and centered",
"avoid": ["dull eyes","too bright face","high-key","three-quarter angle","off-center","looking away","smiling","open mouth","teeth","cartoon","grey background"]
```
**Motion (vídeo, first+last):** "The jaguar slowly opens its eyes — the two amber eyes ignite and lock on the viewer, mirroring the car's headlights turning on. The animal stays perfectly still and serious. Camera locked, 3s, no cuts."

---

## Take 3 — Movimento (roda ↔ pata) — **1 imagem cada** (movimento contínuo, NÃO par)
> Anexar anchors (carro/jaguar) como ref. Carro: estúdio grafite `#141416`→preto. Jaguar: void `#080A0A` low-key. **Gerar 1 still só**; o giro/passo vem do prompt do VÍDEO (dia 15+). Gerar "frame final" separado sai igual/inútil.

**Carro · Roda** — 1 still: cam macro side-on na roda dianteira (100mm), rim prata + practical âmbar, chão molhado, roda parada. Vídeo depois: "wheel rotates slowly ~1/8 turn in place, speculars rolling, body static, seamless, 4s."

**Jaguar · Pata** — 1 still: cam baixa na pata/perna dianteira (85mm), low-key, camuflado, pata plantada. Vídeo depois: "paw lifts and steps forward slowly, weight shifting, seamless, 4s."

## Take 4 — Traseira ↔ Cauda (rima: ducktail ↔ cauda)
**Carro · Traseira** — **PAR (estado)**: cam ¾ traseiro baixo (85mm), lanterna LED + ducktail + quad exhaust, estúdio grafite. `A`: lanterna OFF · `B` = **image-edit do A**: lanterna ON (vermelho, ignição limpa, sem bloom). Vídeo: "taillight ignites in one sweep, faint heat shimmer, body static, 4s."

**Jaguar · Cauda/Dorso** — **1 imagem** (movimento): cam por trás/lado, lombar+garupa+cauda (85mm), void low-key, cauda baixa. Vídeo depois: "tail sweeps slowly to the side, haunch flexing, deliberate, seamless, 4s."

> Prompts JSON completos dos Takes 3–4: registrados na conversa da sessão 2026-08-06 (mesma estrutura dos Takes 1–2; copiar inteiros).

## Take 7 — Solto / Corrida (paisagem ↔ selva) — **intercut de velocidade**
- **Ambiente (aprovado):** carro = estrada cênica de montanha ao **fim de tarde / golden hour**, paisagem bonita (vale/montanhas, árvores); **sem noite, sem névoa**. Jaguar = **selva escura, predador** (3/4, olhos âmbar, cara de predador — nunca "sonso"). Stills aprovados = **1º frame**.
- **Motion (vídeo, dia 15+):** carro **acelerando/passando rápido** pela paisagem; jaguar **correndo** pela selva. Técnica segura p/ o carro: **tracking** (câmera acompanha, carro nítido e centrado, cenário borra) — carro em movimento é o beat de **maior risco (R-M1)**, gerar vários.
- **Edição (device):** **montagem paralela** alternando **carro-correndo ↔ jaguar-correndo** — mostra o **poder de corrida dos dois** (gêmeos em velocidade).

## Take 8 — Encontro (final)
- **Coreografia:** o jaguar **entra caminhando com autoridade felina**, **encarando a câmera como se ela fosse a presa**, chega ao carro e **esfrega a bochecha no paralama como gato pedindo carinho** — MAS a **expressão NUNCA muda: sempre sério, olhar de predador** (nunca dócil/sonso/fofo).
- **Frames:** `A` = jaguar chegando, cabeça erguida, encarando a câmera (predador, olhos âmbar) · `B` = esfregando a bochecha no paralama (**image-edit do A**, muda só a cabeça). Anexar **carro ref + jaguar predador aprovado**. Void `#080A0A`, chão molhado. Take mais difícil (2 sujeitos) — se fundir, compor na edição.

## Corte casado (Takes 1+2)
**Farol acende (centro, âmbar) → apagão → Olho abre (centro, âmbar).** Mesma cor, mesmo preto, mesmo enquadramento head-on → a transição é a assinatura do filme. Estes dois são o beat de abertura; validar antes de seguir pros demais.

## Status / próximos
- [x] **T1 OFF/ON aprovado** (head-on + fundo chapado) — dev 2026-08-06
- [x] **T2 CLOSED/OPEN aprovado** (low-key + olho natural + tight head-on) — dev 2026-08-06 (algumas geraç. dá pra melhorar, mas o par serve)
- [ ] 1º vídeo (T1 farol, first+last frame) — 1 vídeo/rodada até **dia 15** (reset de créditos)
- [ ] Demais takes após dia 15
- Referências: [[00-DNA]] §3.3/§3.4 (jaguar) · [[03-Hero-Asset-Plan]] · [[media-generation-decisions]] · [[Media Workflows (Human Academy)]] · [[Asset Sizing Standard]]
