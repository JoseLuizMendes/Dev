# Error Memory — Índice Global 🛡️

> Este arquivo é o catálogo geral de **todos os erros conhecidos** no ecossistema. O agente DEVE lê-lo no boot de toda sessão e consultá-lo antes de cada `/speckit.plan`.
>
> Protocolo completo: [[Immunological Error Memory]]

---

## Estatísticas

| Métrica | Valor |
|---|---|
| **Total de erros registrados** | 2 |
| **Erros com recorrências >= 2** | 0 |
| **Regras promovidas para M5** | 0 |
| **Última atualização** | 2026-03-31 |

---

## Índice de Categorias

| Categoria | Arquivo | Qtd. Erros |
|---|---|---|
| Conflitos de dependências | [[Dependency Breaks]] | 0 |
| Integração de APIs | [[API Integration]] | 0 |
| Autenticação e segurança | [[Auth & Security]] | 0 |
| Performance | [[Performance]] | 0 |
| Gerenciamento de estado | [[State Management]] | 0 |
| Deploy e infraestrutura | [[Deployment]] | 0 |

---

## Índice por Stack

| Tecnologia | Arquivo | Qtd. Erros |
|---|---|---|
| React.js | [[React]] | 0 |
| NestJS | [[NestJS]] | 0 |
| Tailwind + Shadcn | [[Tailwind & Shadcn]] | 0 |
| GSAP + Lenis | [[GSAP & Lenis]] | 0 |

---

## Aprendizados Globais

- [[GLOBAL-ERRORS]]

---

## Registro de Erros

```yaml
- id: ERR-2026-0001
  título: "Excesso de artefatos no onboarding inicial"
  categoria: Deployment
  stack: []
  severidade: baixa
  projeto_origem: "Mock/Onboarding-Teste"
  data_descoberta: 2026-03-22
  sintoma: "Fluxo mockado gerou documentos além do necessário para o cliente"
  causa_raiz: "Falta de regra explícita de saída mínima por projeto"
  solução: "Limitar saída do projeto a 3 arquivos locais + erros globais"
  prevenção: "Seguir checklist de entrega mínima antes de finalizar onboarding"
  recorrências: 0
  links:
    - "[[GLOBAL-ERRORS]]"

- id: ERR-2026-0002
  título: "Interpretação incorreta de saída mínima como conteúdo resumido"
  categoria: Deployment
  stack: []
  severidade: baixa
  projeto_origem: "Mock/Onboarding-Teste"
  data_descoberta: 2026-03-22
  sintoma: "Escopo e contrato entregues com estrutura reduzida, sem aderência aos templates base"
  causa_raiz: "Ambiguidade entre 'mínimo de artefatos' e 'profundidade de preenchimento'"
  solução: "Manter 3 arquivos locais no onboarding, porém com estrutura completa dos templates oficiais"
  prevenção: "Validar 2 critérios antes de finalizar: (1) quantidade de arquivos, (2) aderência estrutural ao template"
  recorrências: 0
  links:
    - "[[GLOBAL-ERRORS]]"
```
