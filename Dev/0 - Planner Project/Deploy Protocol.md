---
título: "Deploy Protocol"
versão: 1.0
status: "Ativo"
tags:
  - protocol
  - deploy
  - producao
  - vercel
  - dns
---

# Deploy Protocol

> ⚠️ **GATILHO:** Front concluído + UAT aprovado → publicar em produção (matriz canon linha 21 de [[Master Pipeline & Enforcement]]).
> ⚠️ **TEMPLATE OBRIGATÓRIO:** Este protocolo (protocolo puro — checklists abaixo).
> ⚠️ **OUTPUT:** Projeto em produção (domínio ativo) + registro completo no `05-Dev-Log.md`.
> ⚠️ **PRÓXIMO PASSO:** Encerramento do projeto (deleção da `refs/`, log de sessão, eventual move para `9 - Archive/`).

---

## Contexto

Publicar é parte do entregável high-ticket — não um "detalhe final". Este protocolo garante que nenhum deploy sai improvisado: memória de erros consultada, checklist pré-deploy verificado, domínio configurado e smoke test pós-deploy registrado.

**Alvo padrão:** **Vercel** (stack Next.js/TanStack — ver matriz de frameworks em [[Preferencias Dev#Frameworks Frontend de Primeira Classe]]). Outro alvo (VPS, Cloudflare, etc.) = decisão registrada no `03-Planejamento` com justificativa.

---

## Fase 0 — Memória imunológica (obrigatório ANTES de tudo)

- [ ] Ler `Dev/4 - Error's Memory/by-category/deployment.md` — erros de deploy já cometidos NÃO se repetem
- [ ] Ler `06-Erros.md` do projeto (erros locais que afetam build/runtime)

---

## Fase 1 — Checklist pré-deploy

**Build e código:**
- [ ] `pnpm build` local limpo (zero erros, zero warnings novos)
- [ ] Testes todos passando (Vitest + Playwright) — nenhuma tarefa pendente marcada como bloqueante
- [ ] `pnpm audit` sem vulnerabilidade high/critical ([[Preferencias Dev#Segurança de Front-end (Cybersecurity)]])

**Configuração:**
- [ ] Env vars mapeadas: lista completa `.env.example` ↔ painel da Vercel (production + preview), sem segredo faltando e sem segredo sobrando no client
- [ ] `metadataBase` / URLs absolutas apontando para o domínio de produção (não localhost/preview)
- [ ] Security headers ativos em produção (CSP, HSTS etc. — Fase 10 do [[Frontend Creative Protocol]])

**Assets e performance:**
- [ ] Imagens/vídeos otimizados conforme [[Asset Sizing Standard]] (AVIF+WebP, vídeo WebM+MP4 dentro do budget de peso)
- [ ] Lighthouse no build de produção: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (mobile) — abaixo disso, corrigir antes de publicar
- [ ] Core Web Vitals sem regressão óbvia (CLS < 0.1, LCP < 2.5s no 4G simulado)

**SEO:**
- [ ] `sitemap.xml` e `robots.txt` respondendo em produção
- [ ] OG image validada (debugger do WhatsApp/LinkedIn/X após deploy)

---

## Fase 2 — Domínio e DNS

- [ ] Domínio do cliente conectado ao projeto na Vercel (A/CNAME conforme instrução do painel)
- [ ] `www` → apex (ou vice-versa) com redirect único — sem conteúdo duplicado
- [ ] HTTPS ativo (certificado emitido) antes de divulgar a URL
- [ ] E-mail do domínio (MX) **não alterado** — deploy de site nunca mexe em MX existente

---

## Fase 3 — Deploy e pós-deploy

- [ ] Deploy de produção via branch principal (preview deploys para branches de feature)
- [ ] **Smoke test em produção:** navegação completa (todas as rotas), formulários enviando de verdade, mídia carregando, animações GSAP/Lenis rodando, mobile real
- [ ] OG/social debugger rodado com a URL final
- [ ] Registro no `05-Dev-Log.md`: data, URL, env vars usadas (nomes, não valores), hash do commit publicado
- [ ] Erros encontrados no processo → `06-Erros.md` (+ propagação se recorrente — [[Immunological Error Memory]])

**Rollback:** qualquer quebra em produção → *Instant Rollback* da Vercel para o deploy anterior (imediato), depois investigar na preview. Nunca "consertar direto na main sob pressão".

---

## Quality Gate

- [ ] Fase 0 executada (memória de erros lida ANTES do deploy)
- [ ] Checklist pré-deploy 100% verificado (não declarado — R2)
- [ ] Domínio + HTTPS ativos e testados
- [ ] Smoke test pós-deploy completo registrado no `05-Dev-Log`
- [ ] `refs/` deletada após conclusão (regra do [[Frontend Creative Protocol]]) — registrada no `05-Dev-Log`

---

## Referências

- `[[Master Pipeline & Enforcement]]` — matriz canon (linha 21)
- `[[Frontend Creative Protocol]]` — Fases 9 (SEO) e 10 (segurança) que este protocolo verifica em produção
- `[[Asset Sizing Standard]]` — budgets de peso de mídia
- `[[Preferencias Dev]]` — segurança de front + stack
- `Dev/4 - Error's Memory/by-category/deployment.md` — memória imunológica de deploy
