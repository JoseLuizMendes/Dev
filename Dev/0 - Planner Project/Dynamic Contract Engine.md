---
módulo: M4
título: "Dynamic Contract Engine"
versão: 1.0
status: "Ativo"
tags:
  - planner-mode
  - contrato
  - legal
  - automação
  - phase-one
---

# M4 — Dynamic Contract Engine

Este módulo define a **lógica de geração de contratos dinâmicos** baseada no tipo de projeto. O contrato não é estático — é uma representação jurídica fluida que mitiga os riscos exatos associados à natureza do trabalho contratado.

---

## Princípio Fundamental

O agente de IA atua como um **técnico paralegal**: lê a variável `classificação` do `[[Requirements & Scope Project Template|01-Escopo.md]]` e injeta ou remove cláusulas condicionais no `[[Contract Template]]`.

```
Input: classificação_servico (do 01-Escopo.md)
    ↓
Motor de Regras: Matriz Condicional (abaixo)
    ↓
Output: 02-Contrato.md (contrato customizado para o projeto)
```

---

## Cláusulas Imutáveis (Base Universal)

Estas cláusulas estão presentes em **todo** contrato, independentemente da classificação:

### 1. Direitos de Propriedade Intelectual (IP)

A propriedade do código-fonte é transferida ao cliente **apenas** após a liquidação total de todas as faturas. Até o pagamento integral, o desenvolvedor mantém direitos de retenção como alavancagem de proteção.

### 2. Mecanismo de Controle de Escopo

Qualquer funcionalidade solicitada que **não** conste no `01-Escopo.md` original é enquadrada como "Trabalho Fora de Escopo". Exige:
- Ordem de mudança assinada por ambas as partes
- Orçamento adicional com taxas de urgência pré-acordadas
- Novo cronograma para as entregas adicionais

### 3. Cláusula de Confidencialidade (NDA)

Proíbe a divulgação de informações sensíveis do projeto por ambas as partes.

### 4. Mecanismos de Resolução de Disputas

Estabelece foro competente e procedimentos para resolução de conflitos (mediação → arbitragem → judicial).

---

## Matriz Condicional de Cláusulas Dinâmicas

### Classificação: Frontend do Zero

**Cláusulas injetadas:**

| Cláusula | Conteúdo |
|---|---|
| **Limitação de Responsabilidade de Backend** | O desenvolvedor é explicitamente isento de responsabilidade por: estabilidade do servidor, segurança criptográfica, modelagem de banco de dados, falhas de infraestrutura ou escalabilidade gerenciada pelo cliente |
| **Dependência de APIs de Terceiros** | O cronograma de entrega da UI está condicionado ao fornecimento pontual de APIs operacionais e documentadas pelo cliente ou terceiros. Atrasos na API suspendem proporcionalmente as obrigações do desenvolvedor |

**Risco mitigado:** O desenvolvedor frontend não é responsabilizado por falhas fora do escopo do navegador (backend, servidor, APIs).

---

### Classificação: Full-stack do Zero

**Cláusulas injetadas:**

| Cláusula | Conteúdo |
|---|---|
| **Transição de Propriedade de Infraestrutura** | Protocolo exato para entrega de: credenciais de hospedagem cloud, chaves secretas de API, arquitetura de banco de dados e controle de domínio — tudo condicionado ao pagamento final + conclusão do UAT |
| **Termo de Garantia de Segurança de Dados** | Define os padrões de segurança implementados (proteção contra SQL injection, sanitização, HTTPS, autenticação). Limita responsabilidade sobre vulnerabilidades futuras causadas por negligência do cliente pós-entrega |

**Risco mitigado:** O desenvolvedor não se torna provedor de suporte de TI gratuito e perpétuo após a entrega.

---

### Classificação: Refatoração de Frontend

**Cláusulas injetadas:**

| Cláusula | Conteúdo |
|---|---|
| **Descoberta de Dívida Técnica (Tech Debt)** | Isenção absoluta de responsabilidade sobre bugs pré-existentes, vulnerabilidades de segurança ou arquiteturas defeituosas na base de código original do cliente |
| **Recalibragem de Cronograma e Orçamento** | Previsão explícita de renegociação de prazos e faturamento caso a auditoria inicial revele código legado mais acoplado, não documentado ou difícil de manter do que o esperado |

**Risco mitigado:** O desenvolvedor não absorve custos imprevistos de dívida técnica criada por terceiros.

---

### Classificação: Refatoração Full-stack

**Cláusulas injetadas:**

| Cláusula | Conteúdo |
|---|---|
| **Pré-requisito de Auditoria Técnica** | Fase de auditoria de código **remunerada e isolada** antes de qualquer compromisso com a refatoração. O cliente concorda que a refatoração pode ser declarada inviável, resultando em recomendação de reescrita total, sem constituir quebra de contrato |
| **Isenção de Tempo de Inatividade (Downtime)** | Mitigação rigorosa de responsabilidade sobre: indisponibilidade temporária de serviços, perda de receita e degradação de desempenho durante fases ativas de migração de banco de dados e atualizações de infraestrutura |

**Risco mitigado:** O desenvolvedor é protegido contra litígios resultantes de cirurgias operacionais em ecossistemas legados complexos.

---

## Pseudo-código do Motor de Regras

```python
def gerar_contrato(escopo):
    contrato = carregar_template("Contract Template.md")
    classificação = escopo.frontmatter.classificação
    
    # Cláusulas imutáveis (sempre presentes)
    contrato.manter("IP_retencao")
    contrato.manter("controle_escopo")
    contrato.manter("NDA")
    contrato.manter("resolucao_disputas")
    
    # Cláusulas dinâmicas
    if classificação == "Frontend do Zero":
        contrato.injetar("limitacao_backend")
        contrato.injetar("dependencia_apis")
    
    elif classificação == "Full-stack do Zero":
        contrato.injetar("transicao_infraestrutura")
        contrato.injetar("garantia_seguranca_dados")
    
    elif classificação == "Refatoração Frontend":
        contrato.injetar("descoberta_tech_debt")
        contrato.injetar("recalibragem_cronograma")
    
    elif classificação == "Refatoração Full-stack":
        contrato.injetar("auditoria_previa_obrigatoria")
        contrato.injetar("isencao_downtime")
        contrato.remover("garantia_uptime")
    
    # Preencher variáveis do frontmatter
    contrato.substituir("{{CLIENTE}}", escopo.cliente)
    contrato.substituir("{{DATA_INICIO}}", escopo.data_inicio)
    contrato.substituir("{{VALOR}}", escopo.valor)
    
    return contrato.salvar_como("02-Contrato.md")
```

---

## Referências Internas

- [[Contract Template]] — Template base do contrato
- [[Requirements & Scope Project Template]] — Fonte da variável `classificação`
- [[Project Lifecycle Pipeline]] — Quando o contrato é gerado no fluxo
