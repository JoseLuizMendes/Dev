---
módulo: M2
título: "Session Protocol & Memory Management"
versão: 1.0
status: "Ativo"
tags:
  - planner-mode
  - session-protocol
  - memory-management
  - phase-one
---

# M2 — Session Protocol & Memory Management

Este módulo define **como o agente de IA inicia, opera e encerra** cada sessão de trabalho, e como as 3 camadas de memória são gerenciadas para garantir continuidade cognitiva entre sessões.

---

## Protocolo de Início de Sessão (Boot Sequence)

O agente **DEVE** executar esta sequência ao iniciar qualquer sessão de trabalho, **antes** de gerar qualquer código ou resposta:

```yaml
boot_sequence:
  - passo: 1
    ação: "Ler MEMORY.md"
    arquivo: "Dev/3 - Session Logs/MEMORY.md"
    propósito: "Restaurar estado episódico — decisões recentes, bloqueios, progresso"

  - passo: 2
    ação: "Ler Dev Preferences"
    arquivo: "Dev/0 - Planner Project/Preferencias Dev.md"
    propósito: "Carregar regras inegociáveis da stack e padrões de qualidade"

  - passo: 3
    ação: "Ler Error Memory Index"
    arquivo: "Dev/4 - Error's Memory/INDEX.md"
    propósito: "Carregar memória imunológica — erros conhecidos globalmente"

  - passo: 4
    ação: "Ler Dev-Log do projeto atual"
    arquivo: "[Projeto atual]/05-Dev-Log.md"
    propósito: "Restaurar contexto local do projeto em andamento"

  - passo: 5
    ação: "Resumir estado atual"
    formato: "3 bullets concisos: o que foi feito, estado atual, próximos passos"

  - passo: 6
    ação: "Aguardar instrução"
    propósito: "Nunca agir autonomamente antes de receber direção do desenvolvedor"
```

---

## Protocolo de Encerramento de Sessão (Shutdown)

O agente **DEVE** executar ao finalizar uma sessão ou quando instruído a encerrar:

```yaml
shutdown_sequence:
  - passo: 1
    ação: "Gerar log de sessão"
    destino: "Dev/3 - Session Logs/YYYY-MM-DD_HH-MM.md"
    conteúdo:
      - resumo das ações realizadas
      - decisões tomadas e justificativas
      - erros encontrados (se houver)
      - items pendentes

  - passo: 2
    ação: "Atualizar MEMORY.md"
    destino: "Dev/3 - Session Logs/MEMORY.md"
    regra: "Destilar os aprendizados relevantes do log bruto para o índice curado"

  - passo: 3
    ação: "Atualizar Dev-Log do projeto"
    destino: "[Projeto atual]/05-Dev-Log.md"
    regra: "Registrar progresso, estado e decisões no contexto local do projeto"

  - passo: 4
    ação: "Propagar erros (se aplicável)"
    destino: "Dev/4 - Error's Memory/"
    regra: "Seguir protocolo do [[Immunological Error Memory]]"

  - passo: 5
    ação: "Listar itens pendentes"
    formato: "Checklist clara para a próxima sessão"

  - passo: 6
    ação: "Commitar mudanças via Git"
    condição: "Se versionamento estiver configurado"
    comando: "git add . && git commit -m 'session: YYYY-MM-DD_HH-MM'"
```

---

## As 3 Camadas de Memória

### Camada 1 — Memória de Trabalho (Buffer)

| Atributo | Valor |
|---|---|
| **Localização** | `Dev/3 - Session Logs/*.md` |
| **Persistência** | Temporária / Semi-permanente |
| **Ciclo de vida** | Gerada ao final de cada sessão |
| **Formato** | Template padronizado (ver `[[Session Log Template]]`) |
| **Função** | Buffer de informações brutas — cada arquivo é um snapshot da sessão |

**Regra de limpeza:** Logs com mais de 30 dias e que já foram destilados para a Camada 2 podem ser arquivados ou removidos.

### Camada 2 — Memória Episódica Curada

| Atributo | Valor |
|---|---|
| **Localização** | `Dev/3 - Session Logs/MEMORY.md` |
| **Persistência** | Permanente |
| **Ciclo de vida** | Atualizado ao final de cada sessão pela destilação da Camada 1 |
| **Formato** | Índice estruturado com decisões, estado e lições aprendidas |
| **Função** | O agente lê este arquivo no boot — é a "memória recente" do sistema |

**Estrutura recomendada do MEMORY.md:**
```markdown
# Memória Episódica — Índice Curado

## Estado Atual
- Projeto em andamento: [nome]
- Fase: [planejamento/desenvolvimento/auditoria]
- Último progresso: [descrição]

## Decisões Recentes
- [YYYY-MM-DD] Decisão X — Justificativa Y
- [YYYY-MM-DD] Decisão Z — Justificativa W

## Problemas em Aberto
- [ ] Problema A — contexto
- [ ] Problema B — contexto

## Lições Aprendidas (desta sprint)
- Lição 1
- Lição 2
```

### Camada 3 — Memória Semântica (Base de Conhecimento)

| Atributo | Valor |
|---|---|
| **Localização** | Templates, Preferences, Methodology, Error Memory |
| **Persistência** | Permanente / Imutável (evolução lenta) |
| **Ciclo de vida** | Atualizada apenas por decisão deliberada do desenvolvedor |
| **Acesso** | Via MCP, busca semântica (QMD) ou referência direta |
| **Função** | Base canônica — regras, padrões, templates e conhecimento consolidado |

---

## Heartbeat: Rotinas de Compactação

Para evitar "ruído cognitivo" pela acumulação de logs, o sistema deve implementar heartbeats periódicos:

| Frequência | Ação |
|---|---|
| **A cada sessão** | Destilar log bruto → MEMORY.md |
| **Semanalmente** | Revisar MEMORY.md: remover itens obsoletos, consolidar decisões |
| **Mensalmente** | Arquivar logs antigos da Camada 1, revisar Error Memory INDEX |

---

## Integração com MCP e RAG

O Model Context Protocol (MCP) permite que o agente:
- **Leia** a base de conhecimento do vault de forma segura
- **Pesquise** semanticamente usando busca vetorial (QMD)
- **Recupere** apenas o contexto necessário, otimizando tokens

**Regra:** O agente deve priorizar a navegação por wikilinks `[[]]` antes de recorrer a buscas brutas (`grep`). Isso garante menor consumo de tokens e maior precisão.

---

## Referências Internas

- [[Cognitive Vault Architecture]] — Estrutura de pastas e taxonomia
- [[Immunological Error Memory]] — Protocolo de propagação de erros
- [[Session Log Template]] — Template para logs da Camada 1
