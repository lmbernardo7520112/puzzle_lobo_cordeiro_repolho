# Test Strategy: Jogo da Travessia

Seguindo restritamente nossa política inegociável de TDD (Test Driven Development) para domínios, elaboramos esta estratégia para mitigar falhas nos ciclos de desenvolvimento.

## 1. Ponto de Partida: Unit Testing no Domínio
Todos os testes unitários do motor do jogo (reducers e validações) serão escritos **ANTES** do código de execução do domínio.
**Motor**: `Vitest`
**Cobertura Exigida**: 100% de `src/game/domain`.
**Foco**:
- Máquina do Reducer em todas as `Actions` (BOARD_ITEM, UNBOARD_ITEM, CROSS_RIVER, RESET).
- Tratamentos para ações inváidas (embarcar quando barco cheio, embarcar de margem oposta).
- Regras de domínio e checagem assertiva (vitória explícita, quebra da ovelha, quebra do lobo).

## 2. Component Testing e UI
A UI consistirá primariamente de funções Puras React representando e roteando os estados do Domínio.
**Motor**: `Vitest` + `@testing-library/react`
**Foco**:
- Comprovar que componentes como `RiverBoard` disparam corretamente callback clicks providos pelo pai.
- Testar exibição condicional do Modal de Vitoria/Derrota ao renderizar o aplicativo passando mocked states forçando esses finais.

## 3. End-to-End Testing (E2E)
A comprovação de integração contínua do sistema montado correrá via emulação em browser para o fluxo do usuário macro.
**Motor**: `Playwright`
**Cenários Críticos Requeridos**:
1. **Flow A (Vitória / Happy Path)**: Simular transporte impecável.
   ```
   Embarcar Sheep -> Atravessar -> Soltar Sheep na Margem Direita -> Atravessar (volta vazio) -> Embarcar Lobo -> Atravessar -> Troca Lobo por Sheep -> Atravessar -> Solta Sheep, Embarca Couve -> Atravessar -> Solta Couve -> Atravessar (volta vazio) -> Embarca Sheep -> Atravessar -> Verifica Modal WIN.
   ```
2. **Flow B (Derrota Lobo-Ovelha)**: Embarcar Couve -> Atravessar -> Verifica Modal LOSS (Lobo comeu a Ovelha na margem inicial).
3. **Flow C (Derrota Ovelha-Couve)**: Embarcar Lobo -> Atravessar -> Verifica Modal LOSS (Ovelha comeu a couve na margem inicial).
4. **Flow D (Reset Flow)**: Efetua um LOSS, clica em "Recomeçar", certifica que as entidades retornaram à Margem `Left` originais.
