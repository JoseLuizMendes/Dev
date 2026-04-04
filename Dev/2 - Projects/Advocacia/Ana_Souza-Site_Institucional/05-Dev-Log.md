# 05 — Dev Log: Ana Souza — Site Institucional

> Registro cronológico de progresso, decisões técnicas, comunicações e entregáveis.

---

## 2026-04-01 — Onboarding Concluído

**Status:** Onboarding concluído. Aguardando aprovação do escopo e contrato.

### Artefatos Gerados

| Arquivo | Status |
|---|---|
| [[01-Escopo]] | ✅ Gerado |
| [[02-Contrato]] | ✅ Gerado |
| [[03-Planejamento]] | ✅ Gerado |
| [[04-Tarefas]] | ✅ Gerado |
| [[05-Dev-Log]] | ✅ Inicializado |
| [[06-Erros]] | ✅ Inicializado |

### Dependências Mapeadas para Bootstrap

Após aprovação do escopo e contrato, executar o seguinte bootstrap via `pnpm`:

**Stack base (automática):**
```bash
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir
pnpm add gsap @gsap/react lenis
pnpm add zustand nuqs react-hook-form @hookform/resolvers zod
pnpm add sonner lucide-react
pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom
pnpm add -D playwright @playwright/test
```

**Dependências extras declaradas em [[01-Escopo]] §5.2:**
```bash
pnpm add resend @react-email/components
```

**Infra:**
- Configurar projeto na Vercel (conectar repositório Git)
- Definir variável de ambiente `RESEND_API_KEY` no painel Vercel (produção e preview)
- Solicitar à cliente: credenciais de domínio personalizado (se aplicável)

### Próximas Ações

1. Enviar [[01-Escopo]] e [[02-Contrato]] para revisão e assinatura da Dra. Ana Souza
2. Aguardar confirmação do conteúdo inicial (textos placeholder para kick-off)
3. Após aprovação → executar bootstrap → iniciar Fase 1 (Discovery & Design)

---

> **Próxima entrada:** registrar após kick-off da Fase 1 (2026-04-07).

---

## 2026-04-01 — Bootstrap Executado + MVP Figma Criado

### Bootstrap do Projeto (Next.js Scaffold)

Projeto Next.js scaffoldado em `Dev/2 - Projects/Advocacia/Ana_Souza-Site_Institucional/code/`.

**Stack instalada:**

| Pacote | Tipo | Finalidade |
|---|---|---|
| `next` 15.x | prod | Framework |
| `react` 19.x | prod | UI Library |
| `tailwindcss` 3.x | prod | Styling |
| `typescript` 5.x | prod | Linguagem (strict: true) |
| `gsap` + `@gsap/react` | prod | Animações |
| `lenis` | prod | Scroll suave |
| `react-hook-form` + `@hookform/resolvers` + `zod` | prod | Forms + Validação |
| `sonner` | prod | Toast notifications |
| `lucide-react` | prod | Ícones |
| `resend` | prod | Email transacional |
| `@react-email/components` | prod | Templates de email |
| `vitest` + `jsdom` + `@testing-library/react` | dev | Testes unitários |
| `playwright` + `@playwright/test` | dev | Testes E2E |

**Testes unitários (Vitest):** 4/4 passando ✅
- `ContatoFormSchema > valida dados válidos`
- `ContatoFormSchema > rejeita nome vazio`
- `ContatoFormSchema > rejeita email inválido`
- `ContatoFormSchema > rejeita mensagem curta`

**Arquivos-chave criados:**
- `tsconfig.json` — strict: true + noUncheckedIndexedAccess + noImplicitReturns
- `next.config.ts` — headers de segurança (X-Frame-Options, CSP, etc.)
- `src/lib/schemas/contato.schema.ts` — Zod schema `ContatoFormData`
- `src/app/api/contact/route.ts` — Route Handler Resend (server-only)
- `src/components/sections/HeroSection.tsx` — Hero + GSAP animations
- `src/components/sections/ServicosSection.tsx` — 6 cards + ScrollTrigger
- `src/components/sections/DepoimentosSection.tsx` — 3 depoimentos + ScrollTrigger
- `src/components/sections/ContatoSection.tsx` — Form + React Hook Form + Zod
- `src/data/servicos.ts` + `src/data/depoimentos.ts` — dados estáticos tipados
- `.env.example` — variáveis de ambiente documentadas

**⚠️ Próximo passo:** criar `.env.local` com `RESEND_API_KEY=re_...` (obter em resend.com) e configurar projeto na Vercel.

### MVP Figma Criado

**Arquivo:** [Ana Souza — Site Institucional MVP](https://www.figma.com/design/UIIEZJdDmmtU6EbdSADVfv)
**Seções desenhadas:** Nav + Hero (1440px) + Stats Bar + Serviços (6 cards) + Depoimentos (3) + Formulário de Contato + Footer
**Paleta:** Navy `#1A2342` + Gold `#C7A363` + Off-white `#F7F5F0`
