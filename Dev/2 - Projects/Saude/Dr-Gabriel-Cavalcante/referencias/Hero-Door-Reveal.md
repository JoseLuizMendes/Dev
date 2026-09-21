---
template: "Media Asset Plan (hero)"
version: 1.0
status: "Conceito aprovado pelo dev — aguardando decisões de porta/fundo/gesto e geração dos frames"
tags: [midia, hero, scroll, gsap, lenis, prompts]
projeto: "Dr. Gabriel Cavalcante"
data: "2026-09-16"
---

# 🚪 04 — Hero "A Porta" (scroll reveal)

> **Ideia do dev:** fundo claro com apenas uma porta. Ao rolar, a porta abre, o doutor aparece atrás dela
> e estende a mão para o visitante entrar. O site começa daí.
> Plano geral: [[00-Diagnostico-Inicial]].

---

## 1. Esclarecendo "movimento é código, não vídeo"

O [[Frontend Creative Protocol]] §6.1 diz que site premium **não toca vídeo no hero**. Mas a técnica
recomendada ali mesmo ("3D sem WebGL") é **frames pré-renderizados scrubados no scroll**. Ou seja:

- **Gera-se** um clipe curto (Veo/Flow) **só como fonte de frames**.
- Os frames são extraídos (ffmpeg) e desenhados num `<canvas>`, e o **scroll controla o frame atual** (GSAP ScrollTrigger `scrub`).
- O visitante nunca "assiste a um vídeo": ele **dirige** a cena com o scroll, para frente e para trás.
  É a técnica das páginas de produto da Apple (AirPods, iPhone).

Então o vídeo continua necessário, mas como **matéria-prima** e não como player.

---

## 2. Storyboard (progresso do scroll, seção pinada ~250vh)

| Scroll | Cena | Camada de código (GSAP) |
|---|---|---|
| **0%** | Parede clara, porta fechada centralizada, fio de luz turquesa na fresta de baixo | Nome "Dr. Gabriel Cavalcante" + "Role para entrar" (indicador pulsando) |
| **0–35%** | A maçaneta gira e a porta abre para dentro; a luz vaza | Nome e indicador somem (fade + y) |
| **35–70%** | O doutor aparece, dá um passo à frente e estende a mão | Frase de boas-vindas aparece em stagger ("Seja bem-vindo") |
| **70–100%** | A "câmera" atravessa a porta: `scale` do canvas ~1 → 2.5 com origem no vão, clareando até o fundo do site | Header/nav entra; o pin solta e o conteúdo começa (Tratamentos) |

> O **push-in final é feito em código** (scale no canvas), e não no clipe. Assim a câmera do clipe fica **travada**,
> o que a IA faz muito melhor.

---

## 3. Pipeline de produção

1. **Frame inicial (still):** porta fechada (P-D1).
2. **Frame final (still):** porta aberta + doutor com a mão estendida, **mesmo enquadramento** (P-D2), usando o P0 do character como referência.
3. **Clipe:** Flow → *Frames to video* (Veo) com D1 → D2 (P-D3), 8s, câmera travada. Gerar 3–4 e escolher.
4. **Duas versões:** 16:9 (desktop) e 9:16 (mobile). Repetir 1–3 com o enquadramento vertical.
5. **Extração:**
   ```bash
   ffmpeg -i door-16x9.mp4 -vf "fps=15,scale=1920:-2" frames/desktop/%03d.png
   ffmpeg -i door-9x16.mp4 -vf "fps=12,scale=1080:-2" frames/mobile/%03d.png
   ```
   Isso dá ~120 frames no desktop e ~96 no mobile. Depois, `sharp` para **AVIF (q≈50) + WebP**, com meta de ~40–70KB por frame.
6. **Poster/LCP:** o frame 001 vira `<Image priority>` (aparece instantâneo). Os demais carregam progressivamente:
   primeiro 1 a cada 4 frames, depois o restante.

---

## 4. Prompts

**Fundo e porta (decidir antes):** recomendado **parede off-white quente + porta de madeira clara com puxador preto fosco**
(contraste suave, casa com o balcão real da clínica e com o jaleco preto). Luz com leve tom turquesa (acento da marca).

### P-D1 · Frame inicial — porta fechada (16:9, 2048×1152)
```
Front-facing, perfectly centered, locked-off camera, eye level, 35mm lens. A single closed modern interior door made of light natural oak with a slim matte black lever handle, set flush into a seamless warm off-white wall. A thin line of soft turquoise-tinted light glows through the gap under the door. Minimal, calm, premium dental clinic aesthetic, soft diffused ambient light, subtle wall texture, faint soft shadow on the floor. Floor: pale warm grey polished concrete, only the bottom 15% of the frame. Symmetrical composition, generous empty wall space around the door. 16:9. Nothing else in the frame. No text, no signage, no logos, no people, no plants, no furniture, no watermark.
```

### P-D2 · Frame final — porta aberta + doutor (mesmo enquadramento)
Usar D1 **e** o P0 (character sheet) como referências.
```
Match the first reference image strictly: identical camera position, framing, lens, wall, door frame, floor and lighting. The only changes: the oak door is now swung fully open inward to the left, revealing a bright, softly blurred modern dental clinic interior with white walls and soft turquoise accents; warm light spills through the doorway onto the floor. Standing just inside the doorway, centered, is the dentist from the second reference image — match his identity exactly (face, hair with subtle grey temples, short full beard, black mandarin-collar tunic, light blue collar). He faces the camera with a warm, welcoming smile, taking a small step forward, his right arm extended toward the viewer in an open-palm invitation to come in. Photorealistic, natural hand anatomy with five fingers. 16:9. No text, no logos, no extra people, no watermark.
```
> **Alternativa mais segura (se a mão sair deformada):** trocar o gesto por
> `his right arm extended to his side, open palm gesturing inward, inviting the viewer to come in`.
> Mão apontando para a câmera (escorço) é o ponto em que a IA mais erra.

### P-D3 · Clipe no Veo (Frames to video, D1 → D2)
```
Locked-off static camera, absolutely no camera movement, no zoom, no cuts. The black lever handle turns and the oak door slowly swings open inward to the left. Soft warm light spills out onto the floor. Behind the door the dentist is revealed; he takes one small step forward, smiles, and extends his right hand in a welcoming gesture. Slow, smooth, realistic motion, even pacing across the whole clip, 8 seconds. Keep his identity consistent. No text, no other people, no flicker.
```
> **Pacing uniforme** importa: o scroll é que dá o ritmo. Clipe com aceleração irregular fica estranho no scrub.

### Versão mobile (9:16, 1080×1920)
Nos três prompts, trocar o enquadramento por:
`vertical 9:16, door centered occupying the middle 60% of the height, empty wall above and below`.

---

## 5. Implementação (F4) — esqueleto

```tsx
"use client";
// components/site/door-hero.tsx
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function DoorHero({ frames }: { frames: string[] }) {
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useGSAP(() => {
    const ctx = canvas.current!.getContext("2d")!;
    const images = frames.map((src) => Object.assign(new Image(), { src }));
    const state = { frame: 0 };
    const draw = () => {
      const img = images[Math.round(state.frame)];
      if (img?.complete) ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height); // cover-fit no real
    };
    images[0].onload = draw;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=250%", pin: true, scrub: 0.5 },
      })
        .to(state, { frame: frames.length - 1, ease: "none", duration: 0.7, onUpdate: draw })
        .to(canvas.current, { scale: 2.5, autoAlpha: 0, ease: "power2.in", duration: 0.3 });
    });
    // reduced-motion: só o frame final estático + textos com fade simples
  }, { scope: root });

  return (
    <section ref={root} aria-labelledby="hero-title" className="relative h-dvh overflow-hidden bg-background">
      <canvas ref={canvas} className="absolute inset-0 size-full" aria-hidden />
      <h1 id="hero-title">Dr. Gabriel Cavalcante</h1>
      {/* botão "Pular introdução" (componente Button) → rola até #tratamentos */}
    </section>
  );
}
```
Lenis global no layout do site público conforme [[00-Diagnostico-Inicial]] §5.

### Regras
- **Acessibilidade:** `h1` e conteúdo reais no DOM desde o início; canvas `aria-hidden`; botão **"Pular introdução"**;
  `prefers-reduced-motion` mostra o frame final sem pin.
- **Performance:** poster como LCP; frames lazy e progressivos; `devicePixelRatio` limitado a 2; canvas redimensionado no resize.
- **Mobile:** set 9:16 escolhido por `matchMedia`, pin mais curto (~180%) e menos frames.
- **Não sequestrar a navegação:** quem chega por link âncora (`/#contato`) pula o hero; o menu funciona durante o pin.

---

## 5b. Log de iterações de mídia

| Data | Versão | Resultado | Lição |
|---|---|---|---|
| 2026-09-16 | v1 porta de madeira | ❌ cara de apartamento/galeria; porta pequena no quadro | Porta precisa "gritar clínica" e ocupar ~70% da altura |
| 2026-09-16 | v2 vidro jateado (frame inicial) | ✅ **aprovado** (vestíbulo branco, sanca turquesa, pivô à esquerda, puxador tubular inox) | — |
| 2026-09-16 | v2 frame final | ❌ porta abriu para fora; doutor no corredor | Especificar dobradiça + "abre para dentro, longe da câmera" |
| 2026-09-16 | v3 frame final | ⚠️ doutor ok, mas **porta branca sólida** ≠ vidro jateado do início | Editar só o material da porta |
| 2026-09-16 | v3 clipe Veo | ❌ mão atravessa a porta; **outra pessoa** (jaleco branco + scrub azul); maçaneta de alavanca surge; porta diferente | Ver §5c |

| 2026-09-16 | v4 clipe (15:15) | ❌ gerado no sentido normal, não invertido; o frame final mostrava a porta **no corredor** (abrindo para fora); scrub azul por 7,5s e salto para a túnica preta só no último frame | Corrigir o frame final antes; inverter os slots |
| 2026-09-17 | "v5" (14:05) | ⚠️ **arquivo idêntico ao v4** (mesmo MD5 `189f1068…`), ou seja, re-download do vídeo antigo; o prompt v5 não chegou a ser testado | Conferir no Flow qual geração foi baixada |

## 5c. Estratégia v4 (vigente)

1. **Frame final corrigido:** mesma porta de vidro do início (edição só do material); o doutor **não toca na porta** (a porta abre sozinha).
2. **Gerar o clipe AO CONTRÁRIO:** o 1º frame é o doutor (identidade travada desde o início), o último é a porta fechada.
   A câmera recua e a porta fecha sozinha. Depois inverte com `ffmpeg -vf reverse`. O Veo preserva muito melhor a identidade do 1º frame do que "chega" num último frame.
3. **Nunca escrever "dentist"/"doctor" no prompt de vídeo:** a palavra puxa o estereótipo (jaleco branco + scrub). Descrever "the same man in the black mandarin-collar tunic".
4. Hardware explícito: "only one vertical brushed-steel bar handle; no lever, no knob appears".
5. Conferir no Flow que **os dois slots** (primeiro e último frame) estão preenchidos e usar o modelo **Quality**.

## 6. Checklist
- [ ] Decisões: fundo · porta · gesto
- [ ] D1 e D2 (16:9 e 9:16) aprovados, sem texto nem mãos deformadas
- [ ] Clipes com câmera travada e pacing uniforme
- [ ] Frames extraídos → AVIF/WebP, peso total desktop ≤ ~6MB, mobile ≤ ~4MB
- [ ] Protótipo do scrub testado em 375/768/1280 + reduced-motion
