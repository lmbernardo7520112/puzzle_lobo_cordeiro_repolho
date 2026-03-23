import { useGameEngine } from '../application/useGameEngine';
import type { Item, Location } from '../domain/types';
import { ItemSprite } from './components/ItemSprite';

export default function GameScreen({ onBack }: { onBack: () => void }) {
  const { gameState, boardItem, unboardItem, crossRiver, resetGame } = useGameEngine();

  const handleItemClick = (item: Item, loc: Location) => {
    if (loc === 'Boat') {
      unboardItem(item);
    } else {
      boardItem(item);
    }
  };

  const getItemsForLocation = (target: Location) => {
    return (Object.entries(gameState.items) as [Item, Location][])
      .filter(([, loc]) => loc === target)
      .map(([item]) => item);
  };

  const leftItems = getItemsForLocation('Left');
  const rightItems = getItemsForLocation('Right');
  const boatItems = getItemsForLocation('Boat');

  return (
    <div className="game-screen">
      <div className="board-area">
        {/* Left Bank */}
        <div className="bank left">
          {leftItems.map(item => (
            <ItemSprite key={item} type={item} onClick={() => handleItemClick(item, 'Left')} />
          ))}
        </div>

        {/* River */}
        <div className="river">
          <div className={`boat ${gameState.farmerBank}`} onClick={crossRiver}>
            <ItemSprite type="Farmer" />
            {boatItems.map(item => (
              <ItemSprite key={item} type={item} onClick={(e) => { e?.stopPropagation(); handleItemClick(item, 'Boat'); }} />
            ))}
          </div>
        </div>

        {/* Right Bank */}
        <div className="bank right">
          {rightItems.map(item => (
            <ItemSprite key={item} type={item} onClick={() => handleItemClick(item, 'Right')} />
          ))}
        </div>
      </div>

      <div className="controls">
        <button onClick={crossRiver}>Atravessar</button>
        <button onClick={resetGame} style={{ background: '#7158e2' }}>Reiniciar Jogo</button>
        <button onClick={onBack} style={{ background: '#2f3640' }}>Sair</button>
      </div>

      {/* Modals para Win/Loss renderizados condicionalmente */}
      {gameState.status === 'LOSS' && (
        <div className="modal-overlay">
          <div className="modal loss-modal">
            <h2>Derrota!</h2>
            <p>{gameState.message}</p>
            <button onClick={resetGame}>Tentar Novamente</button>
          </div>
        </div>
      )}

      {gameState.status === 'WIN' && (
        <div className="modal-overlay">
          <div className="modal win-modal">
            <h2>Vitória!</h2>
            <p>{gameState.message}</p>
            <button onClick={resetGame}>Jogar Novamente</button>
          </div>
        </div>
      )}
    </div>
  );
}
