---
template: "Prompt Pack (derivado do 00-DNA — §3.8/3.9, versão premium anti-alucinação)"
version: 1.0
status: "Pronto para uso em qualquer gerador de vídeo (Veo / Sora / Kling / Runway / Hailuo)"
tags:
  - midia
  - prompts
  - geracao
  - video
projeto: "Jaguar F-Type 2024"
data: "2026-07-12"
---

# 🎬 Prompt Pack Premium — Vídeos de detalhe "nível showroom"

> Pedido do dev (2026-07-12, refs Pinterest de brand films automotivos): prompts longos, amarrados e auto-contidos — para colar em **qualquer IA de vídeo** sem contexto prévio e sem espaço para alucinação. Créditos Higgsfield esgotados (saldo 1,18); geração será externa.
>
> **Blindagem usada em todos:** (1) um único take contínuo, zero cortes; (2) câmera travada declarada 2×; (3) identidade do carro fixada em bloco próprio; (4) timeline segundo a segundo; (5) bloco NEGATIVE explícito; (6) paleta canon (preto fosco / prata fria / âmbar #E8A33D).
>
> **Como usar:** duração 8s (ou 6s se o gerador limitar), 16:9, 1080p+ SEMPRE (720p reprova no gate). Se o gerador aceitar imagem inicial (image-to-video), anexar o frame 2K correspondente da Parte 7 do [[00-DNA]] — os prompts funcionam com ou sem. Campo de negative prompt separado: mover o bloco NEGATIVE pra lá.

Os 7 prompts completos estão registrados na conversa da sessão 2026-07-12 e espelhados abaixo (fonte canônica).

---

## Estrutura padrão (todos os prompts)

```
[HEADLINE] — uma frase que define o take
SUBJECT — LOCKED IDENTITY: carro/elemento fixado
SET & LIGHTING — LOCKED: estúdio, luz, paleta
CAMERA — LOCKED: lente, ângulo, "does not move"
TIMELINE: beats com segundos
STYLE: referência de acabamento
STRICT RULES: regras de contenção
NEGATIVE (exclude completely): lista de exclusão
```

## Takes cobertos

| # | Take | Duração | Observação |
|---|---|---|---|
| P1 | Farol — "O Despertar" | 8s | LED acende da ponta interna pra fora |
| P2 | Roda — "Torque parado" | 8s | 1/8 de volta, corpo parado |
| P3 | Volante — macro | 8s | âmbar acorda atrás do volante |
| P4 | Interior — "Cockpit acorda" | 8s | luz viaja pelo painel |
| P5 | Traseira — "Assinatura" | 8s | taillight + heat shimmer |
| P6 | Marca — emblema | 8s | ⚠️ risco de badge alucinado; fallback = jaguar animal (DNA 3.3/3.4) |
| P7 | Motor — "O Coração" | 8s | único take que PODE ter som (pendência #8) |

> Texto integral dos prompts: ver mensagem da sessão (chat) de 2026-07-12 — mantidos em inglês, prontos para colar. Em caso de regeneração, copiar SEMPRE o prompt inteiro, nunca resumir (a blindagem está na redundância).

## Critérios de aceite (Asset Sizing)

- Máster ≥ 1080p, 16:9, sem watermark, sem trilha de áudio embutida (exceto P7 se decisão #8 = com som)
- Um take contínuo sem cortes; câmera parada do primeiro ao último frame
- Carro sempre: preto fosco acetinado, DRL âmbar, rodas gloss black — variou = rejeitar e regenerar
- Sem texto/legenda/logo inventado em frame nenhum (exceção: emblema autêntico no P6)
