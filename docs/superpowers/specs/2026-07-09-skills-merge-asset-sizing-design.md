# Design — Merge de skills UX/UI + Asset Sizing Standard

**Data:** 2026-07-09
**Status:** Aprovado pelo dev · Implementado

## Objetivo

Incorporar ao vault, como skills/knowledge **primárias**, o conhecimento de três fontes externas, sem
tocar nas skills existentes; e criar um padrão de tamanhos de imagem para eliminar retrabalho/custo.

## Decisões (confirmadas pelo dev)

1. **Não mexer nas skills existentes.** Apenas **adicionar** as duas novas como as **primárias** de UX/UI.
   - `emilkowalski/skills` → skill única **`motion-design-engineering`** (bundle de emil-design-eng +
     review-animations + animation-vocabulary + apple-design).
   - `nextlevelbuilder/ui-ux-pro-max-skill` → skill **`ui-ux-pro-max`** (versão **destilada**, sem motor).
2. **ui-ux-pro-max destilado** — só o conhecimento (regras + checklists + styles.csv/charts.csv);
   motor Python/CSV BM25 **não** vendorizado (pointer ao upstream para instalação sob demanda).
3. **Asset Sizing Standard** — matriz completa amarrada a Tailwind/Next + gpt-image-2/Higgsfield, com
   protocolo "compute before generate".
4. **Instalação** — autorada no vault (`0.3 - Claude Skills Export/`, padrão atual); ativação documentada
   (entram no próximo sync/sessão do mecanismo que já popula as skills `anthropic-skills:*`).
5. **GPT-Image (3ª fonte)** — não é skill; é KB. As **4 galerias preferidas pelo dev** (architecture-
   and-interior, beauty-and-lifestyle, fashion-editorial, product-and-food) ficam marcadas como de maior
   crédito. Motor/CLI (OPENAI_API_KEY, cobra OpenAI) **não** instalado.

## Entregáveis

| Arquivo | Tipo |
|---|---|
| `0.3 - Claude Skills Export/motion-design-engineering/SKILL.md` + `references/*` | Skill primária (5 refs verbatim) |
| `0.3 - Claude Skills Export/ui-ux-pro-max/SKILL.md` + `references/*` | Skill primária destilada |
| `0.4 - Knowledge Base/Asset Sizing Standard.md` | KB novo |
| `0.4 - Knowledge Base/GPT-Image Prompt Galleries.md` + `gpt-image-galleries/*` | KB novo + 4 galerias preferidas |
| `CLAUDE.md`, `0.4 KB/INDEX.md`, `Higgsfield Skills Reference.md` | Wiring/entrypoints |

## Precedência

Em UI/UX: `motion-design-engineering` (motion/interação/gesto/tipografia) e `ui-ux-pro-max` (estilo/cor/
layout/checklist) são primárias. Em divergência com `ai-web-designer-agent` (antiga), vencem as novas;
a antiga fica complementar (extração de design system a partir de código).

## Ativação (como as skills entram em uso)

Não há pasta de plugin local (`~/.claude/skills` inexistente); as skills `anthropic-skills:*` são
injetadas pelo ambiente da sessão a partir dos exports do vault. Logo: os `SKILL.md` novos entram em
vigor no **próximo sync/sessão** desse mecanismo. Nada a rodar em runtime nesta sessão.

## Fora de escopo (decidido)

- Motor Python do ui-ux-pro-max e CLI do GPT-Image (pointers ao upstream, sem vendorizar).
- Remoção/merge das skills existentes (dev pediu para não tocar).
