---
template: "Knowledge Base Doc"
version: 1.0
fonte: "github.com/wuyoscar/GPT-Image2-Skill (MIT) — Reference Gallery Atlas"
data_incorporacao: 2026-07-09
tags:
  - knowledge-base
  - gpt-image
  - imagens
  - prompts
  - midia
  - design
ler_quando: "Ao escrever prompts de geração de imagem (gpt-image-2 / GPT Image 2) — bibliotecas de prompts curados por categoria"
---

# GPT-Image — Prompt Galleries

> Bibliotecas de **prompts curados** para geração de imagem com **gpt-image-2 / GPT Image 2**, extraídas
> do Reference Gallery Atlas do projeto `wuyoscar/GPT-Image2-Skill` (MIT).
>
> **Antes de gerar, defina o tamanho** em [[Asset Sizing Standard]]. Para lotes/consistência de marca,
> ver [[Higgsfield Skills Reference]]. Cada prompt das galerias traz a metadata de tamanho nativo
> (`portrait`/`landscape`/`wide`/`tall` + px) — respeite-a e ajuste ao slot pela matriz.

## ⭐ Galerias preferidas pelo dev (prioridade / mais crédito)

Estas quatro foram **escolhidas explicitamente pelo dev** como as de maior valor — priorize-as ao buscar
padrão de prompt e trate-as como referência de maior autoridade:

| Galeria | Uso típico | Arquivo |
|---|---|---|
| 🏛️ **Architecture & Interior** | renders de interior/arquitetura, espaços, real estate | [`gpt-image-galleries/gallery-architecture-and-interior.md`](gpt-image-galleries/gallery-architecture-and-interior.md) |
| 💄 **Beauty & Lifestyle** | beauty, skincare, lifestyle, editorial de produto pessoal | [`gpt-image-galleries/gallery-beauty-and-lifestyle.md`](gpt-image-galleries/gallery-beauty-and-lifestyle.md) |
| 👗 **Fashion Editorial** | moda editorial, lookbook, campanha de vestuário | [`gpt-image-galleries/gallery-fashion-editorial.md`](gpt-image-galleries/gallery-fashion-editorial.md) |
| 📦 **Product & Food** | packshot, product render, food photography, poster comercial | [`gpt-image-galleries/gallery-product-and-food.md`](gpt-image-galleries/gallery-product-and-food.md) |

Apoio (cross-cutting): [`gpt-image-galleries/craft.md`](gpt-image-galleries/craft.md) — regras de
prompt-craft (texto denso, tipografia, UI, diagramas, multi-painel, reparo de prompt fraco). O índice
completo do atlas está em [`gpt-image-galleries/gallery-index.md`](gpt-image-galleries/gallery-index.md).

## Como usar (loop curto)

1. **Classificar**: `generate` / `edit` / `inpaint` / `multi-reference`; definir tipo de asset, texto
   exato, aspect ratio, referências, restrições.
2. **Buscar referência primeiro**: abrir a galeria preferida da categoria; **ler o texto do `Prompt`**
   antes de escolher um padrão. Carregar 1 categoria para pedido normal; 2–3 para híbridos.
3. **Refinar com `craft.md`**: para texto denso, tipografia, UI, dataviz, multi-painel ou prompt fraco.
4. **Definir tamanho**: aplicar [[Asset Sizing Standard]] (ratio + resolução de geração).
5. **Gerar**: via a ferramenta de imagem disponível no runtime (host-native, Higgsfield, ou o CLI
   `gpt-image` do upstream se instalado). Reportar path + flags.

> **Nota de escopo:** aqui vive só a **biblioteca de prompts** (referência). O **motor/CLI** do
> GPT-Image2-Skill (Python + `OPENAI_API_KEY`, cobra a conta OpenAI) **não foi instalado** — foi
> decisão registrada. Se precisar do CLI, instale o upstream sob demanda:
> `uvx --from git+https://github.com/wuyoscar/gpt_image_2_skill gpt-image -p "..."`.

## Crédito

- Reference Gallery Atlas: `github.com/wuyoscar/GPT-Image2-Skill` (MIT).
- Prompts preservam a metadata `Curated` vs `Author + Source` de origem.
