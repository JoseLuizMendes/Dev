---
template: "Knowledge Base Doc"
version: 1.0
fonte: "https://higgsfield-skills-guide.vercel.app (verificado em 2026-07-08)"
data_incorporacao: 2026-07-08
tags:
  - knowledge-base
  - higgsfield
  - midia
  - marketing
  - bootstrap-padrao-com-opt-out
ler_quando: "Projetos que geram mídia (imagens, vídeos, product shots) — instalação padrão no bootstrap, com opt-out"
---

# Higgsfield Skills — Referência

> **Ferramenta padrão de bootstrap com opt-out** (ver [[Preferencias Dev#Ferramentas Obrigatórias de Bootstrap]]). Pacote de skills de geração de mídia/marketing para agentes de IA (Claude Code, Codex etc.), gerenciado pelo Skills CLI da Vercel Labs.

> ⚠️ **Antes de gerar qualquer imagem, defina o tamanho:** [[Asset Sizing Standard]] (protocolo "compute before generate" — ratio + resolução + formato). Para prompts, ver [[GPT-Image Prompt Galleries]]. Gerar no tamanho certo de primeira = custo mínimo e zero retrabalho de redimensionamento.

---

## O que é

Três skills especializadas que reduzem overhead de tokens, mantêm consistência visual em lotes e eliminam código wrapper repetitivo:

| Skill | Função |
|---|---|
| **soul-id** | Cria identidades digitais reutilizáveis a partir de fotos |
| **generate** | Produz imagens/vídeos com 30+ modelos + templates de marketing embutidos |
| **product-photoshoot** | Gera imagens de produto com qualidade de marca em 10 estilos |

## Instalação (comando verificado em 2026-07-08)

```bash
npx skills add higgsfield-ai/skills
```

## Regra de opt-out (canônica)

- **Padrão:** instala em todo bootstrap.
- **Opt-out:** se o frontmatter do `01-Escopo.md` do projeto tiver `midia: "nao"`, o bootstrap **PULA** a instalação e registra a decisão no `05-Dev-Log.md`.
- O campo `midia` nasce no [[Requirements & Scope Project Template]] (default `"sim"`) e é alimentado pela pergunta correspondente do [[Master Project Planning Template]].

## Workflow típico

1. Treinar identidade digital uma vez (soul-id).
2. Gerar múltiplos vídeos/imagens UGC referenciando essa identidade (generate).
3. Escalar variações mantendo consistência (templates do Marketing Studio automatizam research de produto e criação de script).

## Quando usar no pipeline

| Cenário | Uso |
|---|---|
| Ecommerce | product-photoshoot para catálogo; generate para banners/campanhas |
| Landing pages / portfólio | generate para hero images e assets |
| Social/ads do cliente | soul-id + generate para lotes UGC consistentes |
| Projeto sem mídia (`midia: "nao"`) | Não instalar — registrar opt-out no Dev-Log |
