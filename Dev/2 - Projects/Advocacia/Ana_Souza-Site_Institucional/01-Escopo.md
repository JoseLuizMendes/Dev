---
template: "Requirements & Scope"
version: 2.0
status: "Ativo"
tags:
  - escopo
  - requisitos
  - bdd
  - spec-driven
  - tdd
  - advocacia
cliente: "Dra. Ana Souza"
nicho: "Advocacia"
classificacao: "Frontend do Zero"
data_inicio: "2026-04-07"
data_entrega: "2026-05-19"
valor: "R$ 4.800,00"
tier: "Mid-Ticket"
---

# 📋 Formulário de Escopo e Requisitos: Ana Souza — Site Institucional

> **Nota de Uso:** Documento primário de intake. A IA extrai o frontmatter para gerar automaticamente o Contrato Dinâmico e o Planejamento.
>
> **Papel no fluxo:** consolidação técnica das respostas do cliente em formato estruturado — fonte oficial para [[02-Contrato]], [[03-Planejamento]] e `speckit.specify`.

---

## 1. Metadados do Projeto

| Campo | Valor |
|---|---|
| **Cliente / Empresa** | Dra. Ana Souza |
| **Ponto de Contato (PO)** | ana@anaadvocacia.com.br |
| **Nicho de Mercado** | Advocacia |
| **Tipo de Aplicação** | Landing Page Institucional |
| **Tier Comercial** | Mid-Ticket |
| **Data de Início** | 2026-04-07 |
| **Previsão de Entrega** | 2026-05-19 |
| **Valor do Projeto** | R$ 4.800,00 |

---

## 2. Declaração do Problema e Visão

### 2.1 A Dor Central

A Dra. Ana Souza atua como advogada autônoma e não possui presença digital estruturada. Potenciais clientes não conseguem encontrá-la online, avaliar sua credibilidade ou entrar em contato de forma eficiente. A ausência de um canal de captação digital gera dependência exclusiva de indicações boca a boca, limitando o crescimento do escritório.

### 2.2 A Visão da Solução

Criar um site institucional de alto padrão visual que posicione a Dra. Ana Souza como referência em sua área de atuação, transmita credibilidade através de depoimentos e apresentação de serviços, e converta visitantes em clientes via formulário de contato integrado ao Resend. A solução deve ser rápida (Core Web Vitals aprovados), acessível (WCAG 2.1 AA) e otimizada para SEO técnico.

### 2.3 Público-Alvo

**Persona primária:** Pessoas físicas e empresas de pequeno e médio porte que buscam serviços advocatícios especializados. Contexto de uso: acesso via mobile (60%+) e desktop, buscas orgânicas no Google por termos como "advogada [cidade]" ou "consultoria jurídica". Expectativa: site profissional, rápido e que transmita confiança imediata.

**Persona secundária:** Parceiros e indicadores que encaminham clientes e verificam a presença digital da profissional antes de recomendar.

### 2.4 Métricas de Sucesso (KPIs)

| Tipo | Métrica | Meta |
|---|---|---|
| **Performance** | LCP | < 2.5s |
| **Performance** | FID | < 100ms |
| **Performance** | CLS | < 0.1 |
| **Performance** | Bundle size (gzipped) | < 500kb |
| **Negócio** | Taxa de conversão CTA → Formulário | > 5% |
| **Negócio** | Formulários enviados/mês | > 10 |
| **Qualidade** | Cobertura de Testes E2E (Playwright) | 100% das US |
| **Qualidade** | Conformidade WCAG | 2.1 AA |
| **SEO** | Indexação Google | 100% das páginas |

---

## 3. Classificação do Serviço

> **Gatilho:** esta classificação aciona a **Dynamic Contract Engine** ([[Dynamic Contract Engine]]). Cláusulas dinâmicas aplicadas: Limitação de Responsabilidade de Backend + Dependência de APIs de Terceiros.

- [x] **Frontend do Zero** — UI/UX completa, integrações com APIs de terceiros (Resend)
- [ ] **Full-stack do Zero** — Backend + Frontend + Infraestrutura completa
- [ ] **Refatoração de Frontend** — Modernização de UI existente
- [ ] **Refatoração Full-stack** — Modernização de sistema completo

**Justificativa:** O projeto não requer backend próprio. A lógica de servidor é inexistente além do envio de e-mails via Resend (API de terceiro). O deploy é inteiramente gerenciado pela Vercel. O desenvolvedor entrega exclusivamente a camada de apresentação e a integração com o serviço de e-mail.

---

## 4. Requisitos Funcionais (User Stories BDD)

> **Para IA:** cada requisito vira tarefa via `/speckit.tasks`. TDD obrigatório — teste escrito antes da implementação. Referência: [[Preferencias Dev]].

### Módulo 1: Hero e Identidade

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-1.1** | Como visitante, quero ver uma hero section com headline impactante e CTA para contato, para entender imediatamente o serviço oferecido | **GIVEN** que acesso a página **WHEN** ela carrega **THEN** vejo headline, subheadline e botão de contato visíveis acima da dobra (above the fold) em viewport 375px e 1440px | 🔥 Alta |
| **US-1.2** | Como visitante, quero ver as áreas de atuação da advogada, para avaliar se ela atende meu caso | **GIVEN** que rolo a página **WHEN** chego à seção de serviços **THEN** vejo cards com ícone, título e descrição de cada área de atuação, renderizados corretamente em mobile e desktop | 🔥 Alta |

### Módulo 2: Credibilidade e Contato

| ID | User Story | Critério de Aceite (BDD) | Prioridade |
|---|---|---|---|
| **US-2.1** | Como visitante, quero ver depoimentos de clientes, para aumentar minha confiança antes de entrar em contato | **GIVEN** que rolo até a seção de depoimentos **WHEN** ela carrega **THEN** vejo pelo menos 3 depoimentos com nome e texto do cliente, sem erros de layout | 🔥 Alta |
| **US-2.2** | Como visitante, quero preencher um formulário de contato, para solicitar uma consulta sem precisar ligar | **GIVEN** que preencho nome, email e mensagem válidos **WHEN** clico em "Enviar" **THEN** recebo mensagem de confirmação na tela E o email é entregue via Resend ao endereço da advogada | 🔥 Alta |

---

## 5. Arquitetura e Dependências

### 5.1 Stack do Projeto

- **Tipo de Plataforma:** Landing Page Institucional
- **Front-End:** Next.js 16 + React 19 + Tailwind CSS 3.4+ + GSAP 3.12+
- **Back-End & BD:** N/A (Frontend do Zero — sem backend próprio)
- **Infra/Cloud:** Vercel (deploy automático via Git)
- **Animações:** GSAP + Lenis (scroll suave)
- **Email:** Resend (via Next.js Route Handler)

### 5.2 Dependências Extras

> **Para IA:** gatilho do bootstrap automático. Instalar via `pnpm add` após criar estrutura de pastas.

```
resend @react-email/components
```

### 5.3 Integrações com APIs

| Serviço | Tipo | Finalidade |
|---|---|---|
| Resend | Comunicação / Email | Envio de formulário de contato para a advogada |
| N/A | Pagamentos | Não aplicável neste escopo |
| N/A | Armazenamento | Não aplicável neste escopo |

### 5.4 Entidades de Dados

> Não há banco de dados. As entidades abaixo são estruturas de dados estáticos/tipados no frontend.

| Entidade | Campos Principais | Tipo |
|---|---|---|
| `ServicoAdvocacia` | `id`, `icone`, `titulo`, `descricao` | Static data (array TS) |
| `Depoimento` | `id`, `nome`, `texto`, `cargo?` | Static data (array TS) |
| `ContatoFormData` | `nome`, `email`, `mensagem` | Zod schema + React Hook Form |
| `EmailPayload` | `de`, `para`, `assunto`, `corpo` | Resend API type |

### 5.5 Sistemas de Terceiros

- **Resend:** API de envio de email transacional. Configurada via variável de ambiente `RESEND_API_KEY` no painel da Vercel. O Route Handler `/api/contact` recebe o POST do formulário e despacha para o Resend.
- **Vercel:** Plataforma de deploy. CI/CD automático via push para branch `main`. Edge Network para CDN global.

---

## 6. Requisitos Não Funcionais (QoS)

### 6.1 Performance

- [x] LCP < 2.5s | FID < 100ms | CLS < 0.1
- [x] Bundle size < 500kb (gzipped)
- [x] Imagens otimizadas com `next/image` (WebP, lazy loading, tamanhos responsivos)
- [x] Fonte carregada via `next/font` para zero layout shift

### 6.2 Segurança

- [x] HTTPS obrigatório (provisionado pela Vercel)
- [x] Sanitização de inputs do formulário (Zod schema validation)
- [x] Rate limiting no Route Handler `/api/contact` (Vercel Edge)
- [x] `RESEND_API_KEY` jamais exposta no client-side (server-only)
- [x] Headers de segurança configurados no `next.config.ts` (CSP, X-Frame-Options, etc.)

### 6.3 Acessibilidade

- [x] WCAG 2.1 AA obrigatório
- [x] `prefers-reduced-motion` respeitado nas animações GSAP
- [x] Navegação por teclado funcional em todos os elementos interativos
- [x] Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande
- [x] Atributos `aria-label` e `role` adequados

### 6.4 SEO Técnico

- [x] Metadata dinâmica via Next.js `generateMetadata`
- [x] Open Graph e Twitter Card configurados
- [x] `sitemap.xml` gerado automaticamente
- [x] `robots.txt` configurado

### 6.5 Escalabilidade

- [x] Arquitetura stateless (sem servidor próprio)
- [x] CDN global via Vercel Edge Network
- [x] Sem estado persistente no servidor

---

## 7. Limites de Escopo e Exclusões

> **Para IA:** solicitações que violem estas exclusões acionam **Change Request** obrigatório via [[02-Contrato]].

1. **Criação de conteúdo (textos, fotos, vídeos)** — Todo o conteúdo textual, imagens e vídeos são de responsabilidade exclusiva da cliente. O desenvolvedor implementa o conteúdo fornecido, não o produz.
2. **Sistema de agendamento ou área logada** — Funcionalidades como calendário de consultas, login de clientes ou painel administrativo estão fora do escopo deste contrato e exigiriam novo orçamento com backend.
3. **Suporte perpétuo pós-entrega** — Manutenção contínua, atualizações de conteúdo e correções após o período de garantia de 30 dias não estão incluídas neste contrato.

Solicitações novas exigem: ordem de mudança assinada + orçamento adicional + replanejamento via `/speckit.plan`.

---

## 8. Aprovação e Assinaturas

**Cliente:** Dra. Ana Souza — **Data:** _______________

**Desenvolvedor:** JOSÉ LUIZ MENDES — **Data:** _______________

---

> **Próximo Passo:** este documento é processado pela IA para:
> 1. Gerar **Contrato Dinâmico** via [[Dynamic Contract Engine]] → [[02-Contrato]]
> 2. Executar **Bootstrap de Dependências** via [[Preferencias Dev]]
> 3. Criar **Planejamento Técnico** → [[03-Planejamento]]
> 4. Inicializar **Spec-Kit SDD+TDD** para desenvolvimento via [[04-Tarefas]]
