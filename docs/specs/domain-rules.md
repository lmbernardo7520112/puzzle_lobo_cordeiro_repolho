# Domain Rules: Jogo da Travessia

## 1. Entidades de Domínio
- **Bank (Margem)**: `Left` ou `Right`.
- **Item**: `Wolf`, `Sheep`, `Cabbage`.
- **Character**: O estado de posição do Barco/Fazendeiro (se encontra-se ancorado na margem `Left` ou `Right`).

## 2. Regras de Posicionamento e Embarque
- **Regra 2.1**: O Barco só pode abrigar simultaneamente no máximo 1 (um) Item.
- **Regra 2.2**: O Barco sempre carrega implicitamente o Fazendeiro. O movimento do barco é inseparável e equivale ao movimento do Fazendeiro para avaliar posições finais.
- **Regra 2.3**: Um Item só pode ser embarcado (movido para o barco) ou desembarcado (retirado do barco) se a margem atual do Barco for a mesma de destino (ou seja, se a ovelha está na margem `Left`, o barco precisa estar ancorado em `Left` para ela embarcar).

## 3. Regras de Violação (Loss Conditions)
Uma reavaliação de restrição ocorre **apenas após** o barco concluir sua travessia na máquina de estado (quando o fazendeiro não está junto da margem).
- **Derrota A**: Lobo e Ovelha encontram-se na mesma margem (fora do barco) E o Fazendeiro encontra-se na margem oposta (com o barco na outra margem). O lobo devora a ovelha.
- **Derrota B**: Ovelha e Couve encontram-se na mesma margem (fora do barco) E o Fazendeiro encontra-se na margem oposta. A ovelha devora a couve.

## 4. Regra de Sucesso (Win Condition)
- **Vitória**: Fazendeiro, Lobo, Ovelha e Couve encontram-se todos validados e presentes na margem `Right`. A máquina de estado acusa Game Over com flag de sucesso (WinScreen).
