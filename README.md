# 🐺🐑🥬 Puzzle Lobo, Cordeiro e Repolho

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![Vitest](https://img.shields.io/badge/Vitest-Testing-729B1B?style=for-the-badge&logo=vitest)

---

## 📄 Descrição do Projeto

**Puzzle Lobo, Cordeiro e Repolho** é uma implementação interativa web do clássico quebra-cabeça lógico de travessia do rio. Desenvolvido no front-end utilizando **React + Vite** e **TypeScript** puro, sem necessidade de backend.

A aplicação inclui as seguintes funcionalidades:

- Interface gráfica interativa para mover os itens (Lobo, Cordeiro, Repolho e o Fazendeiro) entre as margens.
- Motor de regras de domínio rigoroso para validar movimentos, assegurando que o Lobo não fique com o Cordeiro, nem o Cordeiro com o Repolho sem a presença do Fazendeiro.
- Verificações instantâneas e estado de "Vitória" ou "Game Over" (Derrota).
- Feedbacks visuais customizados.

> 🔎 Contexto: projeto desenvolvido como estudo de caso focado em boas práticas de engenharia de software, utilizando **Test-Driven Development (TDD)**, **Clean Code** e **Specification Driven Development (SDD)** no Front-End.

---

## 🧠 Arquitetura Geral

```text
[Usuário] ----> [Interface React/TS]
                      |
                      |  Interações e Visualização (UI Layer)
                      v
            [Hooks - Application Layer]
                      |
                      |  Orquestração de Estado (useGameEngine)
                      v
               [Game Engine Puro]
         (Domain Layer - Regras de Negócio)
```

🛠️ Tecnologias e Ferramentas

Front-end

- React + Vite
- TypeScript
- CSS Vanilla (focado em performance e leveza)
- React Hooks para gestão de estado local

Testes e Qualidade

- Vitest (Testes Unitários da camada de Domínio)
- Test-Driven Development rigoroso
- Playwright (Testes End-to-End)
- ESLint para validações de qualidade

Arquitetura e Metodologia

- Clean Architecture Front-end (Domain, Application, UI)
- Specification Driven Development (SDD) com regras bem documentadas

---

## 📂 Estrutura do Código

```text
puzzle_lobo_cordeiro_repolho/
│
├── docs/                # Documentação Técnica e SDD
│   ├── adrs/            # Architecture Decision Records
│   └── specs/           # Regras de Negócio e Especificações Funcionais
│
├── src/                 # Front-end (React + TS + Vite)
│   ├── game/
│   │   ├── domain/      # Núcleo da Lógica Pura (gameEngine.ts, types.ts)
│   │   ├── application/ # Hooks e Orquestração (useGameEngine.ts)
│   │   └── ui/          # Componentes Visuais React (GameScreen, ItemSprite, etc...)
│   │
│   ├── assets/          # Ícones e SVGs utilitários
│   ├── App.css          # Estilos gerais
│   └── main.tsx         # Ponto de entrada do React
│
├── tests/               # Testes Automatizados E2E
│
└── package.json / tsconfig.json / vite.config.ts
```

---

## 🔎 Estado Atual

✅ Estrutura modular em camadas bem estabelecida.  
✅ Regras rígidas de Domínio (Engine) implementadas e 100% testadas via TDD.  
✅ Funcionalidades de iniciar as travessias, calcular validade e retornar Vitória/Derrota concluídas.  
✅ Interface gráfica (UI) jogável e integrada fluidamente.  
⏳ Polimento avançado de animações CSS de movimentação de personagens.  
⏳ Deploy estático hospedado (ex: GitHub Pages, Vercel).

---

## 🧪 Próximas Etapas

✅ Suporte melhorado a acessibilidade de teclado e leitores de tela.  
✅ Interações de "arrastar e soltar" (Drag and Drop) para complementar o Click.  
✅ Inclusão de efeitos sonoros situacionais.  
⏳ Configurar CI/CD com GitHub Actions para automatizar a execução de testes.  
⏳ Pipeline automática de Deploy de Produção.

---

## ⚡ Desafios e Soluções

Durante o desenvolvimento do **Puzzle Lobo, Cordeiro e Repolho**, um dos maiores desafios foi garantir que a complexidade da lógica de tabuleiro não se misturasse aos componentes visuais do React. Em aplicações MVP de front-end, frequentemente a UI fica acoplada às regras de negócio, transformando o código num "Spaghetti Code" muito difícil de testar.

Os principais desafios enfrentados foram:

- **Isolamento de Regras Críticas:** Validações de quem come quem na margem precisavam de estabilidade absoluta. Fazer essas aferições rodarem dentro do próprio componente (UI) dificultaria as suites de validação.  
- **Estados de Jogo Precisos:** Garantir que o botão de travessia só aparecesse adequadamente (quando o Fazendeiro está na mesma margem ou pode cruzar).
- **Cobertura Confiável:** Testar tudo interativamente no navegador seria insustentável a longo prazo perante mudanças de requerimentos.

**Soluções implementadas:**

1. O coração do jogo (`gameEngine.ts`) foi modelado no padrão *Functional Core*, dependendo zero centavos de APIs do React.  
2. Aplicação implacável de TDD para construir essa Engine antes sequer de desenhar a UI.
3. Criação da camada *Application* (`useGameEngine.ts`) para servir como "cola" entre o motor do jogo (Core) e o estado volátil nativo do front-end (`useState`).  
4. Os componentes em si ("Presentation Layer") ficaram "burros". Eles apenas disparam intenções e reagem cegamente ao estado ditado pelo *hook*.

> 🎯 Resultado: O **Puzzle** roda com uma coesão admirável. A lógica central de "quem come quem" provou ser altamente blindada a erros de front-end, permitindo que os componentes refatorassem a interface visual múltiplas vezes sem quebrar o laço de jogabilidade principal.

-----

## 📢 Nota Final

O **Puzzle Lobo, Cordeiro e Repolho** demonstra como arquitetar uma aplicação focada no Front-End de forma madura. 
O projeto exemplifica que mesmo desafios com fluxo estritamente interativo (via Navegador) se beneficiam drasticamente da abordagem limpa (arquitetura em camadas, separação de concerns e Domain-Driven adaptado) e de metodologias robustas como Test-Driven Development (TDD).

🚀 A iniciativa resultou numa mini-aplicação não só otimizada em performance por sua extrema leveza, mas notável como material de referência técnica para modelagem de lógicas de negócio no client-side em frameworks reativos.
