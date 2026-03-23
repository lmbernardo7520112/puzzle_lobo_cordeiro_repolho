# Functional Specification: Jogo da Travessia

## 1. Visão Geral
Um minijogo web frontend-only (React) de puzzle lógico. O objetivo é transpor 3 itens (Lobo, Ovelha, Couve) de uma margem do rio para a outra, através de um barco guiado por um fazendeiro, respeitando restrições vitais.

## 2. Atores
- **Fazendeiro (Player)**: O único que pode pilotar o barco. Sempre acompanha as travessias se elas ocorrerem.
- **Lobo, Ovelha, Couve**: Itens passivos que podem ser transportados no barco (capacidade de carregar: no máximo 1 animal/planta por viagem).

## 3. Telas da Aplicação
- **IntroScreen**: Tela inicial que apresenta a narrativa, a arte visual, as regras ("como jogar e por quê?") e o botão de ação principal "Começar".
- **GameScreen**: A tela principal da aplicação, exibindo:
  - Margem Esquerda do rio (ponto de partida).
  - Rio ao centro cortando na diagonal/reta.
  - Barco.
  - Margem Direita do rio (ponto de chegada final para vencer).
  - Um painel (HUD) contendo botões laterais (reiniciar, modo ajuda) e um botão macro "Atravessar".
- **WinModal**: Modal sobreposto na tela exibido automaticamente após todos os personagens e itens alcançarem a margem direita e o barco estiver estacionado lá com sucesso. Fornece Feedback positivo e botão de reiniciar.
- **LossModal**: Modal sobreposto exibido imediatamente caso um erro estratégico ocorra e uma regra condicional seja quebrada após a travessia. Informa o motivo da derrota (ex: "O lobo comeu a ovelha") e fornece botão de tentar novamente (reset).

## 4. Fluxo Principal
1. O usuário vê a `IntroScreen` e clica em Começar.
2. Na `GameScreen`, o usuário clica sobre a Ovelha. O sistema move a Ovelha da Margem para o Barco.
3. O usuário clica em Atravessar. O barco vai para o outro lado da margem. As regras são validadas (nenhuma regra foi quebrada).
4. O usuário clica na Ovelha do barco; ela vai para a Margem Direita.
5. O jogo segue este ciclo mecânico Point-And-Click (clique nos atores para embarque/desembarque e clique em Atravessar).
6. Modal de finalização de acordo com sucesso ou erro do estado.
