---
template: "Requirements & Scope"
version: 1.0
status: "Concluído"
tags:
  - escopo
  - requisitos
  - full-stack
  - casamento
  - next-js
  - mercado-pago
  - cloudinary
  - prisma
  - personal
projeto: "Wedding-New"
tipo: "Plataforma de Casamento — Full Stack"
classificacao: "Full Stack — Do Zero"
data_inicio: "2026-03-01"
data_entrega: "2026-04-26"
valor: "Projeto Pessoal"
package_manager: "pnpm"
deploy: "Vercel — https://wedding-new-beryl.vercel.app"
repositorio: "F:/1-ZECA/1-Repositorio/Documentos/MeusProjetos/Wedding-New/wedding-new"
github: "https://github.com/JoseLuizMendes/Wedding-New"
---

> [!note] Projeto pré-canon concluído
> Este projeto foi finalizado antes da matriz canon atual. O arquivo foi renomeado de `Requirements & Scope.md` para `01-Escopo.md` na reestruturação de 2026-07-08; os artefatos `02-Contrato` a `06-Erros` e `setup.js` foram dispensados retroativamente (registro em [[MEMORY]]).

# 💍 Wedding-New — Plataforma de Casamento

> Site completo para o casamento de José Luiz Mendes (Zeca) e Marjorie. Inclui RSVP para dois eventos, lista de presentes integrada, fundo de lua de mel com Pix transparente via Mercado Pago, galeria de fotos colaborativa com Cloudinary, e suporte a dark mode.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Projeto** | Wedding-New |
| **Dono** | José Luiz Mendes (Zeca) |
| **Tipo** | Plataforma de Casamento — Full Stack |
| **Deploy** | https://wedding-new-beryl.vercel.app |
| **GitHub** | https://github.com/JoseLuizMendes/Wedding-New |
| **Status Final** | ✅ Concluído e em produção |
| **Data de Conclusão** | 2026-04-26 |

---

## 2. Visão e Objetivo

### 2.1 Propósito

Plataforma personalizada para o casamento, substituindo soluções genéricas (Google Forms, links externos avulsos). O objetivo era ter um site elegante, com identidade visual própria, que centralizasse: confirmação de presença, lista de presentes, contribuição financeira via Pix, e galeria colaborativa de fotos.

### 2.2 Público-Alvo

- Convidados do casamento (confirmação de presença)
- Convidados do chá-panela (confirmação de presença separada)
- Familiares e amigos que desejam presentear ou contribuir para a lua de mel
- Fotógrafa oficial (upload de fotos com autenticação)

### 2.3 Métricas de Sucesso

| Tipo | Meta | Status |
|---|---|---|
| Deploy funcional | Vercel sem erros de build | ✅ |
| RSVP casamento | Formulário funcional com banco | ✅ |
| RSVP chá-panela | Formulário funcional com banco | ✅ |
| Pix transparente | QR Code gerado sem redirecionamento | ✅ |
| Webhook seguro | HMAC-SHA256 verificado | ✅ |
| Galeria colaborativa | Upload por convidados via Cloudinary | ✅ |
| Galeria oficial | Upload admin com autenticação | ✅ |
| Responsividade | Mobile-first | ✅ |
| Dark mode | Suporte completo | ✅ |

---

## 3. Stack e Dependências

### 3.1 Stack Principal

| Camada | Tecnologia | Versão |
|---|---|---|
| **Framework** | Next.js | 14+ (App Router) |
| **Linguagem** | TypeScript | strict mode |
| **Styling** | Tailwind CSS | — |
| **Componentes** | shadcn/ui | — |
| **Animações** | Framer Motion | — |
| **ORM** | Prisma | — |
| **Banco de Dados** | Neon PostgreSQL | serverless |
| **Storage Galeria** | Cloudinary | 25 créditos free (1 crédito = 1GB) |
| **Storage Legacy** | Vercel Blob | substituído pelo Cloudinary |
| **Pagamentos** | Mercado Pago SDK v2 | — |
| **MP Client** | @mercadopago/sdk-react | v1.0.6 |
| **Toasts** | Sonner | — |
| **Deploy** | Vercel | — |
| **Package Manager** | pnpm | — |

### 3.2 Design System (Tokens)

**Paleta (light/dark via CSS variables):**
```
--background:      bege quente (light) / escuro (dark)
--foreground:      cinza escuro (light) / bege (dark)
--primary:         azul-acinzentado (214 14% 59%)
--wedding-accent:  azul-acinzentado
--wedding-warm:    bege quente
```

**Tipografia:**
```
Bodoni Moda   → headings românticos
Allura        → títulos cursivos decorativos
Cinzel        → títulos clássicos
Montserrat    → corpo e UI
Playfair Custom → fonte local customizada
```

---

## 4. Arquitetura

### 4.1 Estrutura de Rotas

```
src/app/
├── casamento/
│   ├── page.tsx              → Página principal do casamento
│   └── Casamento.tsx         → Componente com detalhes, presentes, RSVP
├── cha-panela/
│   ├── page.tsx              → Página do chá-panela
│   └── ChaPanela.tsx         → Componente com detalhes e RSVP
├── galeria/
│   ├── page.tsx              → Hub da galeria (2 cards: Gincana + Oficial)
│   ├── gincana/page.tsx      → Galeria colaborativa de convidados
│   └── oficial/page.tsx      → Galeria oficial da fotógrafa
├── api/
│   ├── webhooks/mercadopago/ → Webhook handler (HMAC-SHA256)
│   ├── mercadopago/
│   │   ├── pix-process/      → Cria Payment Pix transparente
│   │   └── verify-return/    → Polling de status do pagamento
│   ├── galeria/
│   │   ├── gincana/upload/   → Salva metadados após upload direto
│   │   └── oficial/
│   │       ├── upload/       → Upload server-side com autenticação
│   │       └── photos/       → Lista fotos oficiais
│   └── admin/login/          → Autenticação admin
└── globals.css               → Design system, tokens, variáveis CSS
```

### 4.2 Componentes Principais

```
src/_components/
├── hero-section.tsx                    → Hero com foto/vídeo do casal
├── honeymoon/
│   ├── HoneymoonProgress.tsx           → Barra de progresso do fundo
│   ├── HoneymoonContribution.tsx       → Card de contribuição (abre modal)
│   └── PixCheckoutModal.tsx            → Modal 3 estados: form → QR → success
├── gifts/
│   └── PixContributionCard.tsx         → Card Pix para presentes avulsos
├── forms/
│   ├── RSVPForm.tsx                    → Formulário de confirmação (casamento)
│   └── RSVPForm.tsx                    → Formulário de confirmação (chá-panela)
├── galeria/
│   ├── Galeria.tsx                     → Grid de fotos da gincana
│   └── UploadPhotoCardCloudinary.tsx   → Upload direto ao Cloudinary (guest)
└── ui/
    ├── LocationDialog.tsx              → Modal com endereço + link Google Maps
    └── (shadcn components)
```

### 4.3 Banco de Dados (Prisma + Neon)

```prisma
model GuestPhoto {
  id           String   @id @default(cuid())
  imageUrl     String   @db.Text
  cloudinaryId String?  @db.Text       // adicionado na Fase 3
  guestName    String
  caption      String?
  visitorId    String                  // "phone_${normalizedPhone}" para compat
  phone        String?  @unique @db.VarChar(20)  // dedup principal
  likes        PhotoLike[]
  comments     PhotoComment[]
  createdAt    DateTime @default(now())
}

model OfficialPhoto {                   // adicionado na Fase 3
  id           String   @id @default(cuid())
  imageUrl     String   @db.Text
  cloudinaryId String   @db.Text
  caption      String?
  isVisible    Boolean  @default(true)
  sortOrder    Int      @default(0)
  createdAt    DateTime @default(now())
}
```

### 4.4 Cloudinary — Arquitetura de Upload

```
Galeria Gincana (convidados):
  Browser → POST api.cloudinary.com (unsigned preset "wedding_gincana")
         → retorna cloudinaryId + imageUrl
         → POST /api/galeria/gincana/upload (salva no DB)

Galeria Oficial (fotógrafa):
  Browser → POST /api/galeria/oficial/upload (autenticado)
         → server-side: uploadToCloudinary() com assinatura SHA1
         → salva OfficialPhoto no DB

CDN:
  cloudinaryUrl(publicId, 'q_auto,f_webp') → res.cloudinary.com/...
  Download: fl_attachment transformation
```

### 4.5 Pix Transparente — Fluxo

```
1. Usuário abre PixCheckoutModal / PixContributionCard
2. Informa valor + email (opcional)
3. POST /api/mercadopago/pix-process
   → cria Payment com payment_method_id: "pix"
   → retorna qr_code (string) + qr_code_base64
4. Modal exibe QR Code + copia-e-cola
5. Polling a cada 2s em /api/mercadopago/verify-return (max 90x ~3min)
6. Webhook /api/webhooks/mercadopago → atualiza status + fundo lua de mel
```

---

## 5. Features Implementadas

### 5.1 Páginas

| Página | Descrição | Status |
|---|---|---|
| `/casamento` | Detalhes do evento, lua de mel, presentes, RSVP | ✅ |
| `/cha-panela` | Detalhes do evento, presentes, RSVP | ✅ |
| `/galeria` | Hub com cards para Gincana e Oficial | ✅ |
| `/galeria/gincana` | Galeria colaborativa de convidados | ✅ |
| `/galeria/oficial` | Galeria oficial da fotógrafa com download | ✅ |

### 5.2 Features por Módulo

**RSVP**
- Formulário para casamento e chá-panela separados
- Confirmação salva no banco (Prisma + Neon)
- Hash scroll para `#rsvp-form` com detecção de altura estável

**Lista de Presentes**
- Link externo para Casas Bahia: `listas.casasbahia.com.br/josemarjorie`
- Card visual com imagem customizada (`gift_list.png`) via `next/image` com `fill`
- PixContributionCard para contribuição livre

**Fundo Lua de Mel**
- HoneymoonProgress: barra de progresso com meta em R$
- HoneymoonContribution: abre PixCheckoutModal
- PixCheckoutModal: 3 estados (form / QR+polling / success|error)
- Webhook atualiza valor arrecadado automaticamente

**Galeria Gincana**
- Upload direto do browser para Cloudinary (unsigned preset `wedding_gincana`)
- Deduplicação por número de telefone (campo `phone` unique no DB)
- `visitorId = phone_${normalizedPhone}` para compatibilidade com likes/comentários
- Masonry grid com lazy loading

**Galeria Oficial**
- Upload server-side com autenticação admin
- Assinatura SHA1 para upload signed ao Cloudinary
- Masonry grid com lightbox e botão de download (`fl_attachment`)
- Controle de visibilidade e ordem (`isVisible`, `sortOrder`)

**UX**
- Dark mode (CSS variables + `.dark` class)
- LocationDialog com Google Maps embed e link externo
- Framer Motion animations (scroll-triggered, stagger)
- Sonner toasts para feedback de ações
- Mobile-first, responsivo em todos os breakpoints

### 5.3 Segurança

- **HMAC-SHA256** no webhook do Mercado Pago
  - Header: `x-signature: ts=...,v1=...`
  - String assinada: `id:<dataId>;request-id:<xRequestId>;ts:<ts>;`
  - Verificação via `crypto.createHmac('sha256', MERCADOPAGO_WEBHOOK_SECRET)`
- **Admin auth** para upload de fotos oficiais via `getServerSession(adminAuthOptions)`

---

## 6. Correções e Bugs Resolvidos

### 6.1 Erros Críticos de Infraestrutura

| # | Erro | Causa Raiz | Solução |
|---|---|---|---|
| 1 | `Buffer<ArrayBufferLike> not assignable to BlobPart` | `Buffer` do Node tem `ArrayBufferLike` que pode ser `SharedArrayBuffer`, incompatível com `BlobPart` | `new Blob([new Uint8Array(buffer)])` — `Uint8Array` é `ArrayBufferView<ArrayBuffer>` |
| 2 | `authOptions` not found em `/api/galeria/oficial/upload` | Import apontava para `@/lib/auth` inexistente | Alterado para `adminAuthOptions` de `@/app/api/admin/login/auth.ts` |
| 3 | Build errors após mudanças de design | Componentes importados mas não criados (`SectionHeader`, `SectionDivider`) | Revertido para estrutura original, removidos imports órfãos |

### 6.2 Bugs de Galeria

| # | Bug | Causa Raiz | Solução |
|---|---|---|---|
| 4 | Deduplicação frágil por `visitorId` | `visitorId` é localStorage — reseta em modo privado / troca de dispositivo | Substituído por `phone` como campo `@unique` no DB |
| 5 | Compatibilidade quebrada com PhotoLike/Comment | Tabelas relacionam por `visitorId` | `visitorId` setado como `phone_${normalizedPhone}` — backward compat mantido |

### 6.3 Bugs de UI/Design

| # | Bug | Causa Raiz | Solução |
|---|---|---|---|
| 6 | SVG não renderizava com `next/image` + `width`/`height` fixos | next/image otimiza/re-encoda SVG de forma inconsistente | Migrado para `<img>` (SVG) ou `fill` + container `relative` (PNG) |
| 7 | Imagens dos cards esticadas verticalmente | Container sem altura fixa — esticava para preencher o card | `h-52 shrink-0` no container + `object-contain` na imagem |
| 8 | Cards Casas Bahia e Pix desalinhados | Layouts internos diferentes (um vertical, outro horizontal com `md:grid-cols-5`) | Ambos refatorados para layout vertical idêntico (imagem topo, conteúdo abaixo) |

### 6.4 Mudanças de Infraestrutura / Decisões

| Mudança | Detalhe |
|---|---|
| Vercel Blob → Cloudinary | Vercel Blob: 1GB free insuficiente. Cloudinary: 25 créditos (25GB) grátis |
| Upload direto browser→Cloudinary | Evita bottleneck de servidor para fotos de convidados. Usa unsigned preset |
| `src/lib/cloudinary.ts` sem SDK | Implementação pura com `fetch` + `node:crypto` — zero dependência extra |
| `next.config.ts` remotePatterns | Adicionado `res.cloudinary.com` para `next/image` funcionar com fotos do Cloudinary |

---

## 7. Decisões Técnicas (ADRs)

### ADR-001: Cloudinary como storage de galeria

**Contexto:** Vercel Blob oferece 1GB grátis — insuficiente para uma galeria de casamento com fotos em alta resolução. Supabase Storage também oferece 1GB grátis e adicionaria complexidade de infra.

**Decisão:** Cloudinary, que oferece 25 créditos no plano gratuito (1 crédito = 1GB de storage OU 1GB de bandwidth OU 1.000 transformações).

**Consequências:** Sem SDK necessário no servidor — implementação via `fetch` puro + `node:crypto`. CDN global incluso. Transformações automáticas (WebP, resize, compressão).

---

### ADR-002: Upload direto browser → Cloudinary para convidados

**Contexto:** Upload via servidor cria bottleneck e aumenta tempo de resposta + custo de função serverless.

**Decisão:** Convidados fazem upload diretamente ao Cloudinary usando unsigned preset `wedding_gincana`. Após upload, apenas os metadados (cloudinaryId, imageUrl) são enviados ao servidor.

**Consequências:** Servidor não processa bytes de imagem. Preset `wedding_gincana` configurado com resize automático (1920px) e conversão WebP — controle de qualidade mantido mesmo sem passar pelo servidor.

---

### ADR-003: Deduplicação por telefone em vez de visitorId

**Contexto:** `visitorId` baseado em localStorage é frágil — reseta em modo privado, troca de browser, ou troca de dispositivo. Um convidado poderia fazer upload múltiplas vezes.

**Decisão:** Campo `phone String? @unique` na tabela `GuestPhoto`. Upload falha com conflito unique se o telefone já existir.

**Consequências:** Deduplicação robusta. `visitorId` mantido como `phone_${normalizedPhone}` para compatibilidade com `PhotoLike` e `PhotoComment` sem migration adicional.

---

### ADR-004: Pix transparente sem redirecionamento

**Contexto:** Fluxo original usava redirect para checkout do Mercado Pago — quebrava a UX do site.

**Decisão:** Criar Payment direto via API MP com `payment_method_id: "pix"`. Retorna `qr_code` e `qr_code_base64`. QR exibido em modal com polling de status a cada 2s.

**Consequências:** UX contínua — usuário nunca sai da página. Polling máx 90 tentativas (~3min). Webhook atualiza o banco quando pagamento é confirmado.

---

### ADR-005: HMAC-SHA256 para segurança do webhook

**Contexto:** Sem verificação de assinatura, qualquer pessoa poderia fazer POST no webhook e simular pagamentos aprovados.

**Decisão:** Verificação com `crypto.createHmac('sha256', secret)` usando o padrão de assinatura do Mercado Pago: `id:<dataId>;request-id:<xRequestId>;ts:<ts>;`.

**Consequências:** Webhook rejeita requests sem assinatura válida. `MERCADOPAGO_WEBHOOK_SECRET` deve ser configurado no Vercel (env var) para funcionar em produção.

---

## 8. Estrutura de Arquivos Final

```
wedding-new/
├── prisma/
│   └── schema.prisma              → GuestPhoto (+ cloudinaryId, phone) + OfficialPhoto
├── public/
│   └── gifts/
│       └── gift_list.png          → Imagem do card de lista de presentes
├── src/
│   ├── _components/
│   │   ├── hero-section.tsx
│   │   ├── honeymoon/
│   │   │   ├── HoneymoonProgress.tsx
│   │   │   ├── HoneymoonContribution.tsx
│   │   │   └── PixCheckoutModal.tsx
│   │   ├── gifts/
│   │   │   └── PixContributionCard.tsx
│   │   ├── forms/
│   │   │   └── RSVPForm.tsx
│   │   ├── galeria/
│   │   │   ├── Galeria.tsx
│   │   │   └── UploadPhotoCardCloudinary.tsx
│   │   └── ui/
│   │       └── LocationDialog.tsx
│   ├── app/
│   │   ├── casamento/
│   │   │   ├── page.tsx
│   │   │   └── Casamento.tsx
│   │   ├── cha-panela/
│   │   │   ├── page.tsx
│   │   │   └── ChaPanela.tsx
│   │   ├── galeria/
│   │   │   ├── page.tsx           → Hub
│   │   │   ├── gincana/page.tsx
│   │   │   └── oficial/page.tsx
│   │   ├── api/
│   │   │   ├── webhooks/mercadopago/route.ts
│   │   │   ├── mercadopago/
│   │   │   │   ├── pix-process/route.ts
│   │   │   │   └── verify-return/route.ts
│   │   │   └── galeria/
│   │   │       ├── gincana/upload/route.ts
│   │   │       └── oficial/
│   │   │           ├── upload/route.ts
│   │   │           └── photos/route.ts
│   │   └── globals.css
│   └── lib/
│       ├── cloudinary.ts          → generateUploadSignature, uploadToCloudinary, cloudinaryUrl
│       └── mercado-pago.ts        → verifyMercadoPagoSignature (HMAC-SHA256)
├── next.config.ts                  → remotePatterns: res.cloudinary.com
└── package.json
```

---

## 9. Variáveis de Ambiente

### Configuradas (Vercel + local)

| Variável | Uso |
|---|---|
| `MERCADOPAGO_ACCESS_TOKEN` | Criar payments via API MP |
| `NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY` | MP Bricks no cliente |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob (galeria legada) |
| `CLOUDINARY_CLOUD_NAME` | `dct2pffc7` |
| `CLOUDINARY_API_KEY` | Upload signed server-side |
| `CLOUDINARY_API_SECRET` | Assinar uploads server-side |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Upload direto no browser |

### Pendentes (necessário configurar no Vercel)

| Variável | Uso |
|---|---|
| `MERCADOPAGO_WEBHOOK_SECRET` | HMAC-SHA256 — sem isso o webhook rejeita todos os requests em produção |

---

## 10. Migrações Pendentes

```bash
# Deve ser executado para ativar a Fase 3 (Galeria Cloudinary) em produção
pnpm prisma migrate dev --name add_cloudinary_gallery
```

Adiciona: `cloudinaryId` e `phone` à `GuestPhoto`, cria modelo `OfficialPhoto`.

---

## 11. Lições Aprendidas

1. **`next/image` não renderiza SVGs bem com `width`/`height` fixos** — usar `<img>` para SVG ou `fill` + container `relative` para PNG.

2. **Container de imagem sem altura fixa estica verticalmente** em cards de altura variável — sempre definir `h-{n} shrink-0` no container antes de definir `object-contain` na imagem.

3. **`Buffer` do Node não é diretamente atribuível a `BlobPart`** em TypeScript strict — usar `new Uint8Array(buffer)` como intermediário.

4. **Upload direto browser→Cloudinary elimina bottleneck de servidor** para uploads de usuários — sempre preferir esse padrão quando o controle de conteúdo pode ser feito no preset do Cloudinary.

5. **Deduplicação por localStorage (visitorId) é frágil** — para qualquer dado que precise de unicidade real, usar um identificador do usuário (telefone, email) salvo no banco.

6. **HMAC-SHA256 em webhooks de pagamento é mandatório** — sem isso qualquer POST malicioso pode simular pagamentos aprovados.

7. **Polling de 2s com limite de 90 tentativas (~3min) é suficiente** para confirmação de Pix — na prática o pagamento é confirmado em segundos.

---

## 12. Referências

- [[Preferencias Dev]]
- Deploy: https://wedding-new-beryl.vercel.app
- GitHub: https://github.com/JoseLuizMendes/Wedding-New
- Repositório local: `F:/1-ZECA/1-Repositorio/Documentos/MeusProjetos/Wedding-New/wedding-new`
- Cloudinary docs: https://cloudinary.com/documentation
- Mercado Pago Pix API: https://www.mercadopago.com.br/developers/pt/docs/checkout-api/payment-methods/other-payment-methods/pix

---

> **Autor:** José Luiz Mendes — **Concluído em:** 2026-04-26
