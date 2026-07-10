# Regras de UI Profissional + Checklist de Pré-Entrega

> Extraído do `skill-content.md` do ui-ux-pro-max (upstream MIT). São os erros frequentemente
> ignorados que fazem uma UI parecer amadora. Escopo: App UI (iOS/Android/React Native/Flutter);
> a maioria vale também para web.

## Ícones & Elementos Visuais

Biblioteca de ícones padrão: **Phosphor** (`@phosphor-icons/react`); fallback **Heroicons**
(`@heroicons/react`) mantendo estilo consistente (linear/filled, espessura, raio).

| Regra | Padrão | Evitar | Por quê |
|---|---|---|---|
| **Sem emoji como ícone estrutural** | Ícones vetoriais (Phosphor, Heroicons, Lucide, vector-icons) | Emojis (🎨 🚀 ⚙️) em navegação, settings, controles | Emoji é dependente de fonte, inconsistente entre plataformas, não controlável por token |
| **Assets só vetor** | SVG / vetor de plataforma que escala limpo e tematiza | PNG raster que borra/pixela | Escalabilidade, nitidez, adaptação dark/light |
| **Estados de interação estáveis** | Transição de cor/opacidade/elevação sem mudar bounds | Transforms que empurram conteúdo / jitter | Interação estável, motion suave |
| **Logos corretos** | Assets oficiais da marca + guidelines (clear space) | Adivinhar path, recolorir, deformar proporção | Evita mau uso de marca e problema legal |
| **Tamanho de ícone consistente** | Tokens (icon-sm, icon-md=24pt, icon-lg) | Misturar 20/24/28pt aleatório | Ritmo e hierarquia visual |
| **Espessura de traço** | Consistente na mesma camada (1.5px ou 2px) | Misturar grosso e fino | Polish e coesão percebidos |
| **Filled vs Outline** | Um estilo por nível de hierarquia | Misturar filled/outline no mesmo nível | Clareza semântica |
| **Alvo de toque mínimo** | Área interativa ≥44×44pt (hitSlop se o ícone for menor) | Ícone pequeno sem área expandida | Acessibilidade/usabilidade |
| **Alinhamento** | Ícone alinhado à baseline do texto, padding consistente | Ícones tortos, espaçamento irregular | Equilíbrio visual |
| **Contraste** | WCAG: 4.5:1 elementos pequenos, 3:1 glyphs maiores | Ícone que some no fundo | Acessibilidade light/dark |

## Interação (App)

| Regra | Faça | Não faça |
|---|---|---|
| **Feedback de toque** | Pressed claro (ripple/opacity/elevation) em 80–150ms | Sem resposta visual ao toque |
| **Timing de animação** | Micro-interações 150–300ms com easing nativo | Instantâneo ou lento (>500ms) |
| **Foco de acessibilidade** | Ordem de foco do leitor de tela = ordem visual; labels descritivos | Controles sem label, foco confuso |
| **Estado disabled** | Semântica disabled + ênfase reduzida + sem ação | Parece clicável mas não faz nada |
| **Alvo de toque** | ≥44×44pt (iOS) / ≥48×48dp (Android); expandir hit area | Alvos minúsculos |
| **Conflito de gesto** | Um gesto primário por região | Gestos aninhados conflitantes |
| **Controles nativos semânticos** | Primitivas nativas (`Button`, `Pressable`) com roles | Containers genéricos como controle primário |

## Contraste Light/Dark

| Regra | Faça | Não faça |
|---|---|---|
| **Legibilidade de superfície (light)** | Cards separados do fundo por opacidade/elevação | Superfícies transparentes demais |
| **Contraste de texto (light)** | Corpo ≥4.5:1 sobre superfície clara | Cinza sobre cinza |
| **Contraste de texto (dark)** | Primário ≥4.5:1, secundário ≥3:1 no escuro | Texto que some no fundo escuro |
| **Bordas/divisores** | Visíveis nos dois temas | Borda que some em um modo |
| **Paridade de estados** | Pressed/focused/disabled distinguíveis em ambos os temas | Definir estados só para um tema |
| **Theming por token** | Tokens de cor semânticos por tema | Hex hardcoded por tela |
| **Scrim de modal** | Forte o bastante pra isolar o foreground (40–60% preto) | Scrim fraco |

## Layout & Spacing

| Regra | Faça | Não faça |
|---|---|---|
| **Safe-area** | Respeitar top/bottom em headers/tab bars/CTA fixos | UI fixa sob notch/status bar/gesture area |
| **Clearance de system bars** | Espaço p/ status/nav bar e home indicator | Conteúdo colide com chrome do OS |
| **Largura de conteúdo** | Previsível por classe de device | Larguras arbitrárias entre telas |
| **Ritmo 8dp** | Sistema 4/8dp para padding/gaps/seções | Incrementos aleatórios |
| **Medida de texto legível** | Evitar parágrafos edge-to-edge em tablet | Texto full-width que prejudica leitura |
| **Hierarquia de seção** | Tiers de ritmo vertical (16/24/32/48) | Níveis iguais com spacing inconsistente |
| **Gutters adaptativos** | Aumentar insets em telas maiores/landscape | Mesmo gutter estreito em tudo |
| **Coexistência scroll/fixo** | Content insets p/ listas não sumirem sob barras | Scroll obscurecido por header/footer sticky |

## Checklist de Pré-Entrega (App UI)

### Qualidade Visual
- [ ] Nenhum emoji como ícone (usar SVG)
- [ ] Ícones de uma família/estilo consistente
- [ ] Assets de marca oficiais, proporção e clear space corretos
- [ ] Pressed não desloca bounds nem causa jitter
- [ ] Tokens de tema semânticos consistentes (sem hex ad-hoc por tela)

### Interação
- [ ] Todo elemento tocável dá feedback pressed (ripple/opacity/elevation)
- [ ] Alvos ≥44×44pt (iOS) / ≥48×48dp (Android)
- [ ] Micro-interações 150–300ms com easing nativo
- [ ] Disabled visualmente claro e não-interativo
- [ ] Ordem de foco do leitor de tela = ordem visual; labels descritivos
- [ ] Regiões de gesto sem conflito (tap/drag/back-swipe)

### Light/Dark
- [ ] Texto primário ≥4.5:1 em ambos os modos
- [ ] Texto secundário ≥3:1 em ambos os modos
- [ ] Divisores/bordas e estados distinguíveis nos dois modos
- [ ] Scrim de modal/drawer forte o bastante (40–60% preto)
- [ ] Ambos os temas testados (não inferidos de um só)

### Layout
- [ ] Safe areas respeitadas em headers, tab bars, CTA bottom
- [ ] Scroll não escondido atrás de barras fixas
- [ ] Verificado em phone pequeno, phone grande e tablet (portrait + landscape)
- [ ] Insets/gutters adaptam por tamanho e orientação
- [ ] Ritmo 4/8dp mantido em componente, seção e página
- [ ] Medida de texto legível em telas grandes

### Acessibilidade
- [ ] Imagens/ícones com significado têm accessibility label
- [ ] Campos com label, hint e mensagem de erro clara
- [ ] Cor não é o único indicador
- [ ] Reduced motion e dynamic type suportados sem quebrar layout
- [ ] Traits/roles/states (selected, disabled, expanded) anunciados corretamente
