---
template: "Knowledge Base Index"
version: 1.0
data_criacao: 2026-07-08
tags:
  - knowledge-base
  - index
---

# 0.4 - Knowledge Base — Índice

> Repositório de conhecimento técnico consumido **sob demanda** durante o desenvolvimento. **NÃO faz parte do boot obrigatório (R6)** — a leitura é condicional à stack do projeto, acionada pelo `INIT.md` do projeto e pelos protocolos.

---

## Regra de Consumo

| Se o projeto/tarefa envolve... | Ler antes de trabalhar |
|---|---|
| Next.js na stack | [[Next.js Foundations (Vercel Academy)]] |
| TanStack Start, Query ou Router (React ou Vue) | [[TanStack Reference]] |
| UI / design (todo projeto com frontend) | [[Impeccable Reference]] |
| Geração de mídia (imagens, vídeos, product shots) | [[Higgsfield Skills Reference]] |
| **Gerar QUALQUER imagem/vídeo/asset** (definir tamanho antes) | [[Asset Sizing Standard]] |
| Vídeo / mídia animada (transcode, Lottie, image-to-video) | [[Asset Sizing Standard]] §Vídeo + §Mídia animada |
| Escrever prompt de imagem (gpt-image-2) | [[GPT-Image Prompt Galleries]] |
| Escolher framework frontend (Next vs TanStack vs Vue) | [[TanStack Reference]] §Matriz de decisão + [[Preferencias Dev#Frameworks Frontend de Primeira Classe]] |
| **Escolher ferramenta** (ref visual, recurso de design, mídia, skill/repo, infra) | [[Tool Palette]] — priorizar as ⭐ favoritas |
| Definir design system / paleta / tokens (ou algo "parece barato") | [[Design System Blueprint]] |
| Direção cinematográfica (dark/premium) — site, imagem ou copy | [[Cinematic Sites Kit]] |
| Iniciar front / buscar referência (checar template pronto por nicho) | [[GRIGOLETTO Templates Pack]] |
| Gerar mídia multi-ferramenta (personagem, character sheet, chroma key, upscale, texto na arte) | [[Media Workflows (Human Academy)]] |

> Complemento: para qualquer biblioteca **não coberta** aqui, a regra do vault permanece — consultar **Context7 MCP** antes de decidir ([[Preferencias Dev]] §Context7).

## Documentos

| Documento | Fonte | Conteúdo |
|---|---|---|
| [[Next.js Foundations (Vercel Academy)]] | Vercel Academy (nextjs.org/learn) | Next 16 completo: App Router, Server/Client Components, dynamic routing, DAL/DTO, proxy.ts, cache components (`"use cache"`, cacheLife, cacheTag), Suspense/streaming, imagens, fontes, Web Vitals, segurança em 5 camadas, N+1 |
| [[TanStack Reference]] | Context7 (verificado 2026-07-08) | TanStack Start (RC), server functions, Query como fetching canônico, Router, `@tanstack/vue-query`, matriz de decisão vs Next.js |
| [[Impeccable Reference]] | impeccable.style | 23 comandos de design, AI-slop detector, `DESIGN.md`, instalação e uso no pipeline |
| [[Higgsfield Skills Reference]] | higgsfield-skills-guide.vercel.app | soul-id, generate, product-photoshoot, regra de opt-out (`midia: "nao"`) |
| [[Asset Sizing Standard]] | Padrão interno (Tailwind/Next + gpt-image-2/Higgsfield + ffmpeg) | Protocolo "compute before generate", matriz de assets (card/hero/OG/avatar…) com px + ratio + @2x + formato AVIF/WebP; **v2.0:** vídeo cinematográfico (slots, WebM+MP4, ffmpeg, poster), árvore de mídia animada (Lottie, GIF proibido), frames inicial/final para image-to-video, bleed e alpha |
| [[GPT-Image Prompt Galleries]] | github.com/wuyoscar/GPT-Image2-Skill (MIT) | Bibliotecas de prompts curados; **4 galerias preferidas pelo dev** (Architecture/Interior, Beauty/Lifestyle, Fashion Editorial, Product/Food) + `craft.md` |
| [[Agent Tooling & Plugins]] | Instalação local 2026-07-09 | ecc (plugin CC pesado), graphify (`/graphify`), pxpipe (proxy de tokens opt-in) — o que são, ativação, custo e caveats |
| [[Tool Palette]] | Curadoria do dev + verificação 2026-08-05 | Catálogo vivo de ferramentas por categoria (refs visuais, recursos de design, mídia grátis↔paga, skills/repos Claude Code, infra open-source) com **sistema de estrelas ⭐** (favoritas = prioridade de escolha) |
| [[Design System Blueprint]] | Material do dev, destilado 2026-08-06 | Método tokenizado de design system premium: restrição, escala 8pt, paleta pequena + 1 acento, 2 fontes, família de raios, 3 sombras, easing de assinatura, bloco `:root` |
| [[Cinematic Sites Kit]] | Material do dev, destilado 2026-08-06 | 85+ prompts (site/imagem/copy) + fórmula de 6 blocos + DNA cinematográfico; adaptado ao stack (GSAP/Lenis) |
| [[GRIGOLETTO Templates Pack]] | Material do dev (Notion), catalogado 2026-08-06 | Índice dos 39 templates Figma premium por **nicho** e tipo — pra lembrar o dev quando um projeto casa com um template pronto |
| [[Media Workflows (Human Academy)]] | Deck do dev, destilado 2026-08-06 | 5 workflows de mídia (personagem animado, chroma key, character sheet, texto em arte, upscale) com Midjourney/Nano Banana/Kling + prompts prontos |

## Manutenção

- Todo doc tem frontmatter com `fonte` e data de verificação — comandos/claims de terceiros expiram; revalidar via Context7 quando algo falhar.
- Novos docs entram aqui com o mesmo padrão de frontmatter (`ler_quando` obrigatório) e ganham linha nas duas tabelas acima + entrada no [[INDEX]] raiz do vault.
