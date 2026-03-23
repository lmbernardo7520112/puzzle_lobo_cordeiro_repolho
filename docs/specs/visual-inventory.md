# Inventário Visual: Jogo da Travessia 

## 1. Elementos Visuais e Comportamentais Observados

### Personagem Principal (Fazendeiro)
- **Aparência**: Rosto rosa/avermelhado, chapéu de vaqueiro marrom, camisa amarela com detalhe vermelho/branco no peito, calça marrom/azul. Estilo "flat" sem contornos fortes.
- **Escala/Hierarquia**: Elemento central de interação. Maior e mais colorido que os outros itens isolados.
- **Comportamento**: Sempre acompanha o barco. O usuário não consegue colocá-lo na margem sem o barco. Fica "em cima" da canoa quando em movimento.

### Lobo
- **Aparência**: Cor principal cinza escura, formato angular com orelhas finas, pernas da mesma cor.
- **Escala/Hierarquia**: Tamanho semelhante ao da ovelha, visual imponente.
- **Comportamento**: Clicável. Vai da margem para o barco. Se deixado sozinho na margem com a ovelha e o barco estiver do outro lado, devora a ovelha (condição de derrota).

### Ovelha
- **Aparência**: Corpo muito texturizado/felpudo e redondo na cor branca, patas finas e rosto negros.
- **Escala/Hierarquia**: Elemento de contraste muito forte em relação ao gramado verde.
- **Comportamento**: Clicável. É devorada pelo lobo e devora a couve se isolada do fazendeiro.

### Couve
- **Aparência**: Folhas verdes contidas numa espécie de caixote ou cesto retangular bege/marrom de feira.
- **Escala/Hierarquia**: O item um pouco menor dos três. Quase camufla com o verde escuro das árvores e do gramado, dependendo da posição.
- **Comportamento**: Ao ser deixada sozinha com a ovelha e sem fazendeiro, é comida (derrota).

### Barco
- **Aparência**: Canoa simples poligonal de madeira marrom por fora, mais escura por dentro.
- **Escala/Hierarquia**: Tamanho retangular grande no meio do rio. Acomoda exatamente duas figuras: o Fazendeiro de um lado e do outro o animal/planta selecionado. 
- **Posicionamento**: Fica grudado à margem perpendicularmente.

### Rio e Margens (Left e Right)
- **Margens**: Superfícies de base verde ciano sólido, ocupam fatias triangulares consideráveis no canto inferior esquerdo e canto superior direito, dando sensação de vista isométrica de topo.
- **Rio**: Uma grande faixa diagonal em tom de anil claro que corta os dois bancos de terra verde. Não possui ondinhas elaboradas, formato liso.

### Árvores (Background)
- **Aparência**: Tronco marrom simples com a copa em balões circulares sobrepostos, utilizando nuances de cor vinho/magenta.
- **Posição**: Posicionadas atrás e nos arredores da margem de base (esquerda), formam um pequeno bosque puramente estético.

### Interface do Usuário (UI/Botões)
- **Painel de Regras (Modal Intro)**: Fundo verde chapado preenchendo grande parte da tela. Mostra diagrama gráfico ensinando a jogar à esquerda com setas vermelhas, e textos detalhados à direita da caixa.
- **Botão "Começar"**: Retângulo horizontal vermelho sólido posicionado bem em baixo à direita.
- **Canto Superior Direito**: Apresenta três botões vermelhos redondos:
  1. X (Sair)
  2. Mão/Caixa (Créditos/Interações acessórias)
  3. ? (Reabrir Regras/Ajuda)
- **Botão de Atravessar o Rio**: Retângulo vermelho para despachar o barco quando pronto, fica tipicamente no canto inferior durante o gameplay.

---

## 2. Análise Técnica e Sugestão de Utilização dos Assets

A aplicação original observada através do navegador utiliza a tecnologia **Unity WebGL 2018**. Todos os gráficos, texturas, sprites, comportamentos e botões não existem como imagens avulsas na estrutura HTML (como `lobo.png` ou `barco.svg`). Encontram-se todos embutidos em arquivos opacos binários e carregados dentro de um único elemento `<canvas>`.

**Veredito Técnico para Extração Direta:**
Embora seja *possível* usar softwares utilitários offline para "descompilar" o pacote WebGL e vazar as imagens, esse processo não é uma extração simples do navegador, constitui uma forma de raspagem e engenharia reversa que viola boas práticas e pode interferir em restrições de licença. Além disso, screenshots recortados resultam em qualidade de imagem extremamente inferior.

**Diretriz Proposta:**
O projeto não será beneficiado pela extração de imagens corrompidas e estouradas. Exatamente como a **FASE 6** demanda o "polimento", utilizaremos os arquétipos aqui levantados (ovelha fofa branca, árvores circulares magenta, lobo cinza angular) e vamos propor **assets limpos, SVG ou CSS-based, desenhados para a nossa implementação em React**, visando um aplicativo muito mais escalável e em harmonia com os requisitos.

> *O inventory acima reflete com detalhes a arquitetura visual mapeada exclusivamente pela observação passiva (navegação interativa usando o motor Antigravity).*
