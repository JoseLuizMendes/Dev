# Erros: Sentry

> Erros agrupados por tecnologia: Sentry (SDK de observabilidade — configuração, privacidade dos
> dados capturados, integração com o build).
> Índice global: [[INDEX]]

---

## Erros Registrados

| ID | Título | Severidade | Projeto |
|---|---|---|---|
| ERR-2026-0022 | Apagar a opção de privacidade que sumiu do SDK deixa mais permissivo, não menos | alta | Ecommerce/Belessence |

> Registro completo (YAML canônico) de cada erro: [[INDEX#Registro de Erros]]

---

## Padrão observado

Um erro só, mas com uma lição que vale antes de haver o segundo: **a direção do perigo aqui é
inversa à intuição**. Em quase toda biblioteca, remover configuração deixa o comportamento mais
conservador. Num SDK de observabilidade, não: o padrão do fornecedor é otimizado para diagnóstico,
então o que você não declarar tende a ser capturado.

Daí a regra de leitura para a próxima atualização de SDK deste tipo: **opção de privacidade que
some é mudança de contrato, não limpeza.** Abrir a definição de tipo do pacote instalado e
enumerar o que a substituiu, em vez de deduzir pelo nome antigo.
