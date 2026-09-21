---
template: "Planning"
version: 1.0
status: "Rascunho — aguardando check fase a fase"
tags:
  - planejamento
  - design-system
  - system-design
  - arquitetura-da-informacao
cliente: "Dr. Gabriel Cavalcanti — Vila Velha e Serra (ES)"
nicho: "Saúde / Odontologia"
classificacao: "Site institucional + painel de gestão (mono-tenant)"
data_inicio: "2026-09-16"
data_entrega: "a definir"
repo: "C:/Users/jose.ldsantos/Repos/dr-gabriel-cavalcante-web"
---

# 📐 Plano de Execução: Clínica Dr. Gabriel Cavalcanti

> **Fonte:** diagnóstico do repositório `dr-gabriel-cavalcante-web` (commit `45e776c`) cruzado com
> [[Frontend Creative Protocol]], [[Design System Blueprint]], [[Preferencias Dev]],
> [[Media Workflows (Human Academy)]], [[ui-ux-pro-max]] e [[motion-design-engineering]].
> Docs de libs conferidas via Context7 (Lenis ↔ GSAP).
> Plano do hero: [[Hero-Door-Reveal]].

---

## 1. Resumo Executivo

- **Objetivo:** site da clínica com movimento premium e fácil de usar, mais um painel onde o doutor
  resolve **toda a operação sozinho**. O dev fica só com as questões técnicas.
- **Princípio:** não reinventar a roda. Usar os padrões que pacientes e secretárias já conhecem
  (menu de clínica, WhatsApp, agenda estilo Google Calendar, bottom-nav no celular).
- **Movimento:** Lenis e GSAP **só no site público**. O painel fica sem animação decorativa,
  porque ação usada mais de 100 vezes por dia não deve animar.
- **KPIs:** LCP < 2.5s · CLS < 0.1 · INP < 200ms · WCAG 2.1 AA · 0 erros de console · 375/768/1280px.

---

## 2. Diagnóstico (estado em 2026-09-16)

### 2.1 Críticos
| # | Achado | Onde | Risco |
|---|---|---|---|
| C1 | `/signup` público num sistema mono-tenant | `src/app/api/auth/signup/route.ts` | Qualquer pessoa cria um usuário e entra no painel com dados de pacientes |
| C2 | `/dashboard` listado como rota pública ("legado") | `src/proxy.ts:17` | A página do painel abre sem sessão (a API ainda barra os dados) |
| C3 | Duas árvores de rotas: `app/[tenant]/*` e `app/(app)/*` | `src/app` | Código duplicado e já divergente |
| C4 | `maximumScale: 1` bloqueia o zoom | `src/app/layout.tsx:28` | Viola a WCAG 1.4.4 |
| C5 | A home ainda é o template de SaaS (Pricing, ApiShowcase, meta "multi-tenant") | `components/landing/*`, `layout.tsx` | Não é site de clínica; SEO errado |

### 2.2 Design System
- Paleta grafite/coral monocromática + Bebas Neue: **não reflete a marca**, que é turquesa sobre
  branco com o jaleco preto.
- **Duas libs de gráfico** (ECharts no `finance-chart.tsx`, com fallbacks em hex, e Recharts). Padronizar em uma.
- Cores de gráfico em hex repetidas em `--chart-*` e `--service-*`.
- Faltam tokens de espaçamento (8pt), sombras, easing e duração.
- HTML puro fora do `ui/`: `<label>` (`odontograma-picker.tsx:75`), `<button>` (`api-showcase.tsx`),
  `<input type=file>` (`service-editor-card.tsx`). **Não há lint que impeça.**
- Faltam primitivos: `Form`/`Field` (RHF + Zod, não instalados), `Switch`, `RadioGroup`, `ToggleGroup`,
  `Tooltip`, `Dialog`, `Combobox`/`Command`, `FileUpload`, `Chart`, `EmptyState`.
- GSAP e Lenis não instalados; a landing anima com `useEffect` e IntersectionObserver feitos à mão.

### 2.3 System Design
- "Clientes" é derivado dos agendamentos, e não da tabela `patients`. Na clínica o nome é **Pacientes**.
- Não há tela de **Configurações** (o campo `allowCustomerBooking` existe sem UI), nem CMS leve do site, gestão de usuários ou troca de senha.
- O escopo cita faturamento, mas **não há tabela de pagamentos**. Também não há log de auditoria
  (prontuário = dado sensível pela LGPD).
- Toasts de erro via `useEffect` em cada página: dá para centralizar em `QueryCache.onError`.

---

## 3. Fases (da mais para a menos relevante)

| Fase | Tema | Entregáveis | Tam. | Status |
|---|---|---|---|---|
| **F0** | Limpeza e correções críticas | Fechar `/signup` (seed do 1º OWNER; convites pelo painel) · corrigir proxy · apagar `app/[tenant]` e landing SaaS · liberar zoom · uma lib de gráfico (Recharts) | P | ✅ done (branch `chore/f0-fundacao`, commit 8ec75fe) |
| **F1** | Arquitetura da informação | Sitemap público + painel, nomes padronizados, fluxos principais (§4) | P | 🔎 em revisão ([[Arquitetura-Informacao]]) |
| **F2** | Design System | Tokens da marca (turquesa oklch, 8pt, raios, 3 sombras, easing), tipografia, `DESIGN.md`, primitivos faltantes, **lint proibindo `<input>/<select>/<label>/<button>/<textarea>` fora de `components/ui`** | M | pending |
| **F3** | Mídia | Character do doutor (§6) ✅ imagens geradas · assets do hero da porta ([[Hero-Door-Reveal]]) · AVIF/WebP | P | in progress |
| **F4** | Site público | Hero da porta (scroll) + seções · Lenis + GSAP · WhatsApp · SEO local (JSON-LD `Dentist`, sitemap, robots, OG) | G | pending |
| **F5** | Painel com autonomia | Configurações (Clínica · Horários · Serviços · Site · Usuários · Conta) · Pacientes na tabela real · agendamento online | G | pending |
| **F6** | Gráficos responsivos | `ChartCard` único: no mobile, KPI e sparkline primeiro, legenda embaixo, sem scroll-x, alternativa em tabela, altura por breakpoint | M | pending |
| **F7** | Dados e back-end | Pagamentos, auditoria, LGPD (consentimento e retenção), migrações via **branch Neon** antes da prod | M | pending |
| **F8** | QA | Playwright (claro/escuro × 3 larguras, 0 erros de console), auditoria WCAG, Lighthouse | M | pending |
| **F9** | Infra e cibersegurança | Diagnóstico do dev (fora deste plano) | — | pending |

---

## 4. Arquitetura da Informação (rascunho v0, superado por [[Arquitetura-Informacao]])

### 4.1 Site público
- **Menu:** `Início` · `Tratamentos` (lista → página de cada um) · `Sobre o Dr. Gabriel` · `A Clínica` · `Contato / Como chegar`
- **CTA fixo:** "Agendar pelo WhatsApp". Aparece também "Agendar online" quando `allowCustomerBooking = true`.
- **Ordem da home:** Hero da porta → Tratamentos → Sobre → Estrutura → Depoimentos → FAQ → Localização (mapa) → CTA final.
- Conteúdo (textos, fotos, depoimentos, FAQ, contato) **editável pelo doutor** em Configurações → Site.

### 4.2 Painel do doutor
- **Menu principal:** `Agenda` · `Pacientes` · `Financeiro` · `Relatórios` · `Configurações`
- **Dentro de Configurações:** Clínica · Horários · Serviços · Site · Usuários · Conta
- **Navegação:** sidebar no desktop e **bottom-nav (≤ 5 itens)** no mobile.
- **Regra:** tudo que é operacional tem tela. Se o doutor precisar chamar o dev para algo não técnico, falta uma tela.

---

## 5. Stack e movimento

| Camada | Tecnologia | Regra |
|---|---|---|
| Framework | Next 16 (App Router) + React 19 | Server Components por padrão |
| Dados | React Query + Drizzle + Neon | Sem `useEffect` de fetch; migrations em branch |
| Estilo | Tailwind v4 + shadcn | Só tokens; zero HTML puro fora de `ui/` |
| Forms | React Hook Form + Zod | Adicionar na F2 |
| Gráficos | Recharts | Remover ECharts |
| Movimento | GSAP (`@gsap/react`, ScrollTrigger) + Lenis | Só no site público; `prefers-reduced-motion` |

**Integração Lenis ↔ GSAP (Context7, `/darkroomengineering/lenis`):** `<ReactLenis root options={{ autoRaf: false }} />`
→ `gsap.ticker.add(t => lenis.raf(t * 1000))` → `lenis.on('scroll', ScrollTrigger.update)` →
`gsap.ticker.lagSmoothing(0)`. Animações dentro de `useGSAP` (cleanup automático).

---

## 6. Mídia — character do doutor (F3)

> ⚠️ **Referências:** a imagem 3 do primeiro lote mostra **outra pessoa**; usar só as imagens 1, 2 e 4. As imagens base
> estavam marcadas como geradas por IA e o texto da parede sai deformado: **logo real só na pós-produção**.
> Confirmar a **autorização de uso de imagem com IA** com o Dr. Gabriel e respeitar as regras de publicidade do CFO
> (nada de "antes e depois" ou "resultados" gerados por IA).

**Identidade:** homem de 30 e poucos anos, pele oliva clara, cabelo castanho-escuro curto levemente ondulado
com grisalho discreto nas têmporas, barba curta cheia e bem aparada, olhos castanhos, sorriso caloroso.
Jaleco preto de gola padre com logo pequeno bordado no peito esquerdo, crachá creme, gola de camisa azul-clara,
calça grafite. Cenário: parede branca, detalhes turquesa, balcão de madeira clara.

Disciplina: lista fechada · referência travada · negativos explícitos · **um eixo por rodada** · gerar 3–4 e escolher.

**P0 — Âncora de identidade (1º, referência de todos)**
```
Create a professional character reference sheet based strictly on the uploaded reference photos of the same man. Match his identity exactly: man in his early-to-mid 30s, light olive skin, short dark brown hair slightly wavy on top with subtle grey at the temples, well-groomed short full beard, brown eyes, warm genuine smile. Wardrobe: black mandarin-collar dental clinic tunic, long sleeves, small white embroidered logo on the left chest (blank, no readable text), plain cream name badge (blank), light blue shirt collar visible underneath, charcoal trousers. Layout: TOP row four full-body views (front, left profile, right profile, back), relaxed A-pose; BOTTOM row three close-up portraits (front, left profile, right profile). Clean seamless off-white background, soft even studio lighting, consistent scale and head height across panels, photorealistic, accurate anatomy, crisp print-ready. Do not alter face, beard or hairline. No text, no watermark, no extra people, no props.
```

**P1 — Retrato "Sobre" (4:5, 1638×2048)**
```
Using the character reference strictly, editorial portrait of the same dentist standing three-quarter to camera, arms relaxed, confident warm smile, looking at the lens. Setting: bright minimalist dental clinic reception, white walls, soft turquoise accent wall blurred in background, light oak counter. Soft window key light from the left, gentle fill, natural skin texture, 85mm lens, f/2.0, shallow depth of field. Palette: white, soft turquoise, black tunic, warm wood. Vertical 4:5. Match identity exactly. No readable text or logos on walls, no extra people, no dental instruments in hand, no watermark.
```

**P2 — Seção institucional (16:9, 2048×1152)**
```
Using the character reference strictly, wide cinematic shot of the same dentist standing on the right third of the frame in a modern, airy dental clinic corridor, gentle smile, hands loosely together. Left two-thirds: clean white wall with soft turquoise gradient light, uncluttered negative space for headline text. Soft diffused daylight, calm premium healthcare mood, 35mm lens, f/2.8, subtle depth. Palette: off-white, pastel turquoise, black tunic. 16:9. Match identity exactly. No text, no signage, no logos, no extra people, no watermark.
```
**P3 — Variação mobile (9:16, 1080×1920):** P2 com enquadramento `vertical 9:16, dentist centered in lower two-thirds, empty soft turquoise-white space in the top third for headline`.

**P4 — Atendimento (3:2)**
```
Using the character reference strictly, the same dentist seated beside a modern white dental chair, turned toward a seated adult patient seen from behind/over-the-shoulder (patient face not visible), explaining with an open hand gesture, friendly expression. Wearing the same black tunic plus light blue nitrile gloves and a surgical mask lowered under the chin. Bright clean treatment room, soft turquoise accents, overhead soft light. 50mm, f/2.2. Match identity exactly. No visible patient face, no blood, no open mouth close-up, no text, no watermark.
```

**P5 — Avatar (1:1, 1024²)**
```
Using the character reference strictly, head-and-shoulders portrait of the same dentist facing camera, friendly smile, on a seamless soft pastel turquoise background, soft beauty-dish lighting, centered, 1:1. Match identity exactly. No text, no badge text, no watermark.
```

Pós: Upscayl se necessário → tamanhos do [[Asset Sizing Standard]] → AVIF + WebP. Originais brutos fora do git.

---

## 7. Decisões pendentes (dev)
- [ ] Cor de fundo do hero/site: off-white quente (recomendado) × branco puro × turquesa pastel
- [ ] Porta: madeira clara × branca com puxador preto × vidro jateado (ver [[Hero-Door-Reveal]])
- [ ] Gesto do doutor: mão estendida para a câmera × gesto lateral de "entre" (mais seguro para a IA)
- [ ] Tipografia: serifada de display + sans (ex.: Fraunces + Inter) no lugar de Bebas Neue
- [ ] Lib de gráfico única: Recharts (recomendado)

## 7b. Fatos do site atual (https://drgabrielcavalcanti.com.br, visto em 2026-09-17)
- **Nome grafado "Cavalcant*i*"** no domínio e no site; o projeto usa "Cavalcant*e*". ⚠️ Confirmar a grafia oficial.
- **Duas unidades:** Vila Velha (Shopping Praia da Costa, sala 705) e Serra (Ative Centro Empresarial,
  Av. Eldes Scherrer 975, sala 514, CEP 29165-680). Tel. (27) 99760-8985. **Não é Guarapari**: a Ortho Implants Guarapari foi só uma parceria no post.
  → impacta schema (unidade por consulta), agenda (filtro por unidade) e SEO (um `Dentist` JSON-LD por endereço).
- **Perfil:** implantodontista, cirurgião bucomaxilofacial (UFMG), mestre em Implantodontia (PUC-MG), graduado pela UFES, +10 anos. Carro-chefe: "dentes fixos em um dia"; "garantia vitalícia nos implantes" (com acompanhamento semestral).
  ⚠️ Revisar promessas ("garantia vitalícia", "resultados") contra o Código de Ética/publicidade do CFO antes de reaproveitar a copy.
- Site atual feito pela LoopfyDesign → **acesso ao registro.br** necessário para apontar o domínio; preservar registros MX se houver e-mail.

## 7c. Decisões tomadas
- **2026-09-17:** site na raiz do domínio + **hub em `/hub`** (login em `/hub/login`). Um app só, cookie first-party; hub com `noindex` e bloqueado no robots. Subdomínio fica para quando o hub crescer.
- **2026-09-17:** equipe com papéis `OWNER` (doutor) e `STAFF`; cadastro público removido; 1º acesso via `scripts/seed-owner.mjs`.
- **2026-09-17:** troca ECharts → Recharts adiada para a F6 (ECharts é exceção documentada pelo zoom por pinça).
- **2026-09-17:** **copy do site atual é a base**, reescrita com técnicas de marketing (F1 define a estrutura, F4 aplica):
  benefício antes de feature, dor → solução → prova, prova social (formação UFES/UFMG/PUC-MG, +10 anos, depoimentos reais),
  quebra de objeções no FAQ (dor, tempo, preço/parcelamento, "funciona pra mim?"), CTA de ação + benefício, CTA fixo no WhatsApp.
  **Limite:** Código de Ética Odontológica / publicidade do CFO. Sem "antes e depois" sem autorização e sem promessa de resultado.
  Validar "garantia vitalícia" e "dentes fixos em um dia" com o doutor.
- **2026-09-17:** estrutura de rotas: `app/hub/(auth)` (login e senha) e `app/hub/(workspace)` (telas com menu), com `noindex` no hub.

## 7d. Pendências da F0
- [x] Grafia oficial do nome: **Cavalcanti** (código atualizado em 2026-09-17; repo/pasta seguem com o nome antigo)
- [ ] Linha existente em `clinic_settings` ainda diz "Cavalcante" (o default do schema já foi corrigido)
- [ ] Wordmark/rodapé do login ainda dizem "Agendamento" (trocar junto com a marca na F2)
- [ ] `JWT_SECRET` de produção na Vercel (o dev vai gerar)
- [ ] **Neon:** só existe o branch `production` e o `.env` local aponta para ele (2 OWNERs de teste lá).
  Criar branch `dev` para uso local e limpar os usuários de teste do `production` antes do go-live (F7/F9).

## 8. Log
- **2026-09-16:** diagnóstico e plano v1 criados. Imagens do character geradas pelo dev. Conceito do hero da porta definido.
- **2026-09-18:** F0 commitada e enviada (8ec75fe). F1 proposta em [[Arquitetura-Informacao]].
