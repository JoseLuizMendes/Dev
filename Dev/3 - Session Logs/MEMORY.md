# Memória Episódica — Índice Curado

> Este arquivo é a **Camada 2** do sistema de memória. O agente DEVE lê-lo no boot de toda sessão. Ele é atualizado ao final de cada sessão pela destilação dos logs brutos da Camada 1.
>
> Protocolo completo: [[Session Protocol]]

---

## Estado Atual

- **Projeto em andamento:** Nenhum
- **Fase:** Manutenção do vault cognitivo
- **Último progresso:** Auditoria e correção de inconsistências do vault (2026-03-31)

---

## Decisões Recentes

- [2026-03-31] Vault auditado e inconsistências corrigidas via MCP do Obsidian
- [2026-03-31] `Preferencias Dev.md` confirmado preenchido (v3.0) — item removido dos problemas em aberto
- [2026-03-31] `INDEX.md` sincronizado com entradas do `GLOBAL-ERRORS.md`
- [2026-03-31] `Planning Template.md` criado em `1 - Templates/`
- [2026-03-31] Referência incorreta `[[5 - Error's Memory]]` corrigida para `[[4 - Error's Memory]]` em `Diretrizes.md`
- [2026-03-31] `0.3 - Claude Skills Export/` registrado oficialmente na arquitetura do vault
- [2026-03-21] Estrutura do vault decomposta em 6 módulos independentes conforme [[Cognitive Vault Architecture]]
- [2026-03-21] Sistema de Memória Imunológica implementado com indexação dupla (by-category + by-stack) conforme [[Immunological Error Memory]]

---

## Problemas em Aberto

- [ ] Validar o pipeline SDD com um projeto-piloto real
- [ ] Boot sequence diverge entre [[Session Protocol]] (6 passos) e [[cognitive-vault-manager/SKILL]] (4 passos) — alinhar

---

## Lições Aprendidas

- MCP do Obsidian configurado com sucesso via `uvx mcp-obsidian` + Local REST API (porta 27124)
- Config do Claude Desktop deve usar `uvx` e não `npx` para o servidor `mcp-obsidian`
