# Erros: Performance

> Categoria de erros relacionados a memory leaks, re-renders excessivos, bundle size, cascata de
> requisições, índices de banco e LCP.
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0012 | Prefetch dos Link de navegação baixa o aplicativo inteiro na primeira tela | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0013 | Gate de autenticação no cliente serializa toda a carga atrás de um /me | alta | Saude/Dr-Gabriel-Cavalcante |
| ERR-2026-0015 | Toda a autenticação indexada e nenhuma tabela da operação | alta | Saude/Dr-Gabriel-Cavalcante |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Os três são **lentidão que nenhum ambiente de desenvolvimento mostra**.

- O 0012 não aparece porque na máquina do dev 938 KB descem instantaneamente.
- O 0013 não aparece porque o banco local responde em 2ms, e a cascata de dois níveis custa 4ms.
- O 0015 não aparece porque a tabela tem 200 linhas e varrê-la é mais rápido que ler o índice.

**Regra de leitura para o próximo:** performance se mede com as duas variáveis que o
desenvolvimento zera — **latência de rede** e **volume de dados**. Medição mínima antes de dar
qualquer tela por pronta: CPU estrangulada em 4×, latência injetada na API (150ms é realista para
função serverless falando com banco gerenciado), e payload do tamanho de um ano de operação.

**Ferramenta certa:** `Network.loadingFinished` do CDP para bytes de rede e
`Emulation.setCPUThrottlingRate` para CPU. A tabela de tamanhos do `next build` não mostra o que o
prefetch acrescenta, e o tempo de resposta local não mostra cascata nenhuma.
