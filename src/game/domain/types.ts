export type Bank = 'Left' | 'Right';
export type Item = 'Wolf' | 'Sheep' | 'Cabbage';
export type Location = Bank | 'Boat';
export type GameStatus = 'PLAYING' | 'WIN' | 'LOSS';

export interface GameState {
  farmerBank: Bank;
  items: Record<Item, Location>;
  status: GameStatus;
  message: string;
}

export type GameAction =
  | { type: 'BOARD_ITEM'; payload: Item }
  | { type: 'UNBOARD_ITEM'; payload: Item }
  | { type: 'CROSS_RIVER' }
  | { type: 'RESET' };

export const INITIAL_STATE: GameState = {
  farmerBank: 'Left',
  items: {
    Wolf: 'Left',
    Sheep: 'Left',
    Cabbage: 'Left'
  },
  status: 'PLAYING',
  message: ''
};
