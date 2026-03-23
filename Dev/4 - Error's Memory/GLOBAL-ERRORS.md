# Global Errors and Learnings

> Registro global de erros e aprendizados que devem servir para todos os projetos.

## Regras
1. Todo erro relevante de projeto deve ser promovido para este arquivo.
2. Cada entrada deve conter causa raiz e prevencao reutilizavel.
3. Se recorrencia >= 2, promover regra para Preferencias Dev.

## Entradas
### GLB-2026-0001
- Titulo: Excesso de artefatos no onboarding inicial
- Contexto: fluxo mockado gerou documentos alem do necessario para o cliente
- Causa raiz: falta de regra explicita de saida minima por projeto
- Correcao aplicada: limitar saida do projeto a 3 arquivos locais + erros globais
- Prevencao: seguir checklist de entrega minima antes de finalizar onboarding
- Data: 2026-03-22
- Status: resolvido

### GLB-2026-0002
- Titulo: Interpretacao incorreta de saida minima como conteudo resumido
- Contexto: escopo e contrato foram entregues com estrutura reduzida, sem aderencia completa aos templates base
- Causa raiz: ambiguidade entre "minimo de artefatos" e "profundidade de preenchimento"
- Correcao aplicada: manter 3 arquivos locais no onboarding mock, porem com escopo e contrato preenchidos na estrutura dos templates oficiais
- Prevencao: validar explicitamente 2 criterios antes de finalizar: (1) quantidade de arquivos, (2) aderencia estrutural ao template
- Data: 2026-03-22
- Status: resolvido
