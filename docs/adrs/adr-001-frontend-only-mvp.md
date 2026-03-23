# ADR 001: Arquitetura Frontend-Only MVP

## Contexto
O projeto requer um MVP altamente interativo para a educação, focado no ensino do pensamento computacional através do clássico jogo do "Lobo, Ovelha e Couve". Para atingir o objetivo com baixo atrito de implantação inicial e evidenciar separação modular no frontend sem depender de stack externa, precisamos oficializar os limites do produto.

## Decisão Tomada
A aplicação será construída **integralmente do lado do cliente (Single Page Application)**, utilizando React.js, Vite e TypeScript. Todo o estado do jogo existirá efemeramente em memória dentro do runtime Javascript no navegador do usuário.
Bancos de dados, WebSocket, Node.js APIs (Express, Nest, etc.), MongoDB e filas estão expressamente **proibidos** nesta fase do MVP.

## Consequências
**Pontos Fortes (Positivos)**:
- Distribuição muito mais barata via CI/CD gerando assets totalmente estáticos de HTML/JS (S3/Vercel/Github Pages).
- Experiência offline imediata após recarregamento (Zero latência de rede).
- Foco arquitetônico estreitado à componentização limpa e SDD no cliente.

**Riscos Assumidos (Negativos/Trade-Offs)**:
- Não podemos rastrear os estudantes nem salvar o percurso e persistência das tarefas interrompidas (Se dar f5, zera). O MVP aceita isso como estado by-design.
- Autenticação e integrações online são invalidadas no momento.
