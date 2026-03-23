import { INITIAL_STATE } from './types';
import type { GameState, GameAction, Bank, Item } from './types';

function checkLossCondition(items: Record<Item, Bank | 'Boat'>, farmerBank: Bank): string | null {
  const oppositeBank: Bank = farmerBank === 'Left' ? 'Right' : 'Left';
  
  const wolfUnprotected = items.Wolf === oppositeBank;
  const sheepUnprotected = items.Sheep === oppositeBank;
  const cabbageUnprotected = items.Cabbage === oppositeBank;
  
  if (wolfUnprotected && sheepUnprotected) {
    return 'O lobo comeu a ovelha!';
  }
  if (sheepUnprotected && cabbageUnprotected) {
    return 'A ovelha comeu a couve!';
  }
  
  return null;
}

function checkWinCondition(items: Record<Item, Bank | 'Boat'>, farmerBank: Bank): boolean {
  return farmerBank === 'Right' && 
         items.Wolf === 'Right' && 
         items.Sheep === 'Right' && 
         items.Cabbage === 'Right';
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  if (action.type === 'RESET') {
    return { ...INITIAL_STATE, items: { ...INITIAL_STATE.items } };
  }

  if (state.status !== 'PLAYING') {
    return state;
  }

  switch (action.type) {
    case 'BOARD_ITEM': {
      const isBoatFull = Object.values(state.items).includes('Boat');
      if (isBoatFull) return state;

      if (state.items[action.payload] !== state.farmerBank) return state;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: 'Boat'
        }
      };
    }

    case 'UNBOARD_ITEM': {
      if (state.items[action.payload] !== 'Boat') return state;

      const newItems = {
        ...state.items,
        [action.payload]: state.farmerBank
      };

      if (checkWinCondition(newItems, state.farmerBank)) {
        return {
          ...state,
          items: newItems,
          status: 'WIN',
          message: 'Você venceu!'
        };
      }

      return {
        ...state,
        items: newItems
      };
    }

    case 'CROSS_RIVER': {
      const newFarmerBank: Bank = state.farmerBank === 'Left' ? 'Right' : 'Left';
      
      const lossReason = checkLossCondition(state.items, newFarmerBank);
      
      if (lossReason) {
        return {
          ...state,
          farmerBank: newFarmerBank,
          status: 'LOSS',
          message: lossReason
        };
      }

      return {
        ...state,
        farmerBank: newFarmerBank
      };
    }

    default:
      return state;
  }
}
