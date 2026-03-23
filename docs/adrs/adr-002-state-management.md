# ADR 002: Gerenciamento de Estado do Motor de Jogo (Reducer Pattern)

## Contexto
O domínio precisa validar diversas regras lógicas determinísticas em sequência a cada turno em que um usuário realiza uma ação. Abordagens ingênuas manipulando hooks primitivos do próprio React (`useState`, ou `useEffect`) para amarrar fluxo lógico criam código imensamente acoplado e difíceis de cobrir por testes unitários blindados sem instanciar um pseudo-DOM virtual.

## Decisão Tomada
Baseado na disciplina estratégica do SDD, o motor principal do jogo residirá numa arquitetura de **Função Pura tipo Reducer** completamente dissociada do React. 

`gameReducer(state: GameState, action: GameAction): GameState`

O React consumirá a árvore de estado pronta mediante a injeção em camadas de Application, tipicamente um custom hook `useGameEngine.ts` que embala nativamente a utilização de um `useReducer()`.

## Consequências
**Pontos Fortes (Positivos)**:
- Testabilidade brutalmente simples `expect(reducer(initial, BOARD_ITEM)).toEqual(...)` sem depender de pacotes visuais.
- Centralização de efeitos do domínio na mesma estrutura mutável base previsível.
- Limpeza na UI: Componentes React apenas disparam a tipagem respectiva sem "tentar pensar".

**Riscos Assumidos (Negativos/Trade-Offs)**:
- Modelo verbal verboso (Necessidade de catalogar tipos de Action estritas no TypeScript comparada a manipulações diretas). O time deverá manter interfaces disciplinadas unificadas na pasta `@domain`.
