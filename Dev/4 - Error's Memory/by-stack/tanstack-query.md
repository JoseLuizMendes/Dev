# Erros: TanStack Query

> Erros agrupados por tecnologia: TanStack Query (cascata, hidratação, SSR, invalidação).
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0013 | Gate de autenticação no cliente serializa toda a carga atrás de um /me | alta | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

**`enabled:` é uma cascata declarada.** Ele existe para o caso legítimo de "esta query precisa de
um id que vem da outra". Quando aparece no caminho crítico de ABERTURA de tela — e principalmente
quando a dependência é a sessão —, está comprando um ida-e-volta inteiro para descobrir algo que o
servidor já sabia.

Em App Router, o lugar disso é o Server Component: `prefetchQuery` + `dehydrate` +
`<HydrationBoundary>`. O cliente hidrata com os dados na mão e as queries não precisam de
`enabled`.

Sinal de alarme: um provider que renderiza "Carregando…" no lugar de toda a aplicação enquanto
espera uma query. O tempo dessa tela é o tempo de pelo menos um ida-e-volta, somado ao custo de
hidratar o bundle inteiro antes de ela sequer começar.
