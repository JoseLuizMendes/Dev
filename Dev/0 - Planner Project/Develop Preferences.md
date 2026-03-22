---
título: "Develop Preferences"
versão: 1.0
status: "Ativo"
tags:
  - preferences
  - stack
  - regras
---

# Develop Preferences

> Este arquivo é a referência rápida da stack e preferências de desenvolvimento. Para detalhamento completo, consulte [[M5 - Dev Preferences & Quality Standards]].

---

## Stack Aprovada

| Camada | Tecnologia | Regra Principal |
|---|---|---|
| **Linguagem** | TypeScript 5.x | `any` proibido. `strict: true` obrigatório |
| **Backend** | NestJS 10.x | Modular + DI. Lógica nos Services |
| **Frontend** | React 19+ ou Angular 17+ | Functional components + hooks |
| **Styling** | Tailwind 3.4+ + Shadcn/ui | Zero CSS global. Tokens do config |
| **Animações** | GSAP 3.12+ + Lenis | `useGSAP` obrigatório |
| **Package Manager** | pnpm 8.x+ | npm/yarn/bun banidos |
| **Pipeline** | Spec-Kit (Spacify) | SDD obrigatório |

---

## Regras Rápidas

- ❌ Tipo `any` proibido
- ❌ CSS global proibido (exceto edge cases)
- ❌ Hex hardcoded proibido — usar tokens
- ❌ `useEffect` para data fetching proibido — usar React Query/SWR
- ❌ npm/yarn/bun proibidos
- ✅ `strict: true` no tsconfig
- ✅ `useGSAP` para toda animação GSAP
- ✅ Respeitar `prefers-reduced-motion`
- ✅ WCAG 2.1 AA compliance
- ✅ LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Documentos Norteadores (Metodologia dos 3 Arquivos)

- [[ai-portfolio-product-strategist]] — Estratégia de produto e posicionamento
- [[ai-web-designer-agent]] — Design, UX e implementação visual
- [[ai-portfolio-copy-architect]] — Copy, microtextos e comunicação

---

## Referência Completa

Para detalhamento exaustivo de cada tecnologia, regras e padrões de qualidade, consulte:
→ [[M5 - Dev Preferences & Quality Standards]]
