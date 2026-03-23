import { describe, it, expect } from 'vitest';
import { gameReducer } from './gameEngine';
import { INITIAL_STATE, GameState } from './types';

describe('Game Engine Reducer - TDD', () => {
  it('should return initial state on RESET', () => {
    const dirtyState: GameState = {
      farmerBank: 'Right',
      items: { Wolf: 'Right', Sheep: 'Boat', Cabbage: 'Left' },
      status: 'LOSS',
      message: 'Fail'
    };
    const newState = gameReducer(dirtyState, { type: 'RESET' });
    expect(newState).toEqual(INITIAL_STATE);
  });

  describe('Boarding Items', () => {
    it('should board an item if it is on the same bank as the farmer and boat is empty', () => {
      const newState = gameReducer(INITIAL_STATE, { type: 'BOARD_ITEM', payload: 'Sheep' });
      expect(newState.items.Sheep).toBe('Boat');
    });

    it('should not board an item if boat is already occupied', () => {
      const stateWithSheep: GameState = {
        ...INITIAL_STATE,
        items: { ...INITIAL_STATE.items, Sheep: 'Boat' }
      };
      const newState = gameReducer(stateWithSheep, { type: 'BOARD_ITEM', payload: 'Wolf' });
      expect(newState.items.Wolf).toBe('Left'); // Wolf remains on Left
      expect(newState.items.Sheep).toBe('Boat');
    });

    it('should not board an item if it is on the opposite bank from the farmer', () => {
      const state: GameState = {
        ...INITIAL_STATE,
        farmerBank: 'Right', // Farmer is on Right
        items: { ...INITIAL_STATE.items, Wolf: 'Left' } // Wolf is on Left
      };
      const newState = gameReducer(state, { type: 'BOARD_ITEM', payload: 'Wolf' });
      expect(newState.items.Wolf).toBe('Left'); // Should fail to board
    });
  });

  describe('Unboarding Items', () => {
    it('should unboard an item from the boat to the farmer current bank', () => {
      const stateWithSheep: GameState = {
        ...INITIAL_STATE,
        items: { ...INITIAL_STATE.items, Sheep: 'Boat' }
      };
      const newState = gameReducer(stateWithSheep, { type: 'UNBOARD_ITEM', payload: 'Sheep' });
      expect(newState.items.Sheep).toBe('Left'); // Farmer is at Left
    });
  });

  describe('Crossing the River & Win/Loss Conditions', () => {
    it('should switch farmer bank when CROSS_RIVER is dispatched', () => {
      const newState = gameReducer(INITIAL_STATE, { type: 'CROSS_RIVER' });
      expect(newState.farmerBank).toBe('Right');
    });

    it('should result in LOSS if Wolf and Sheep are left alone on the same bank', () => {
      const state: GameState = {
        ...INITIAL_STATE,
        farmerBank: 'Left',
        items: { Wolf: 'Left', Sheep: 'Left', Cabbage: 'Boat' }
      };
      const newState = gameReducer(state, { type: 'CROSS_RIVER' });
      expect(newState.farmerBank).toBe('Right');
      expect(newState.status).toBe('LOSS');
      expect(newState.message).toContain('lobo comeu a ovelha');
    });

    it('should result in LOSS if Sheep and Cabbage are left alone on the same bank', () => {
      const stateToLeave: GameState = {
        ...INITIAL_STATE,
        farmerBank: 'Left',
        items: { Wolf: 'Boat', Sheep: 'Left', Cabbage: 'Left' }
      };
      const newState = gameReducer(stateToLeave, { type: 'CROSS_RIVER' });
      expect(newState.farmerBank).toBe('Right');
      expect(newState.status).toBe('LOSS');
      expect(newState.message).toContain('ovelha comeu a couve');
    });

    it('should result in WIN if all pieces are on Right bank', () => {
      const almostWinState: GameState = {
        farmerBank: 'Right',
        items: { Wolf: 'Right', Sheep: 'Right', Cabbage: 'Boat' },
        status: 'PLAYING',
        message: ''
      };
      const winState = gameReducer(almostWinState, { type: 'UNBOARD_ITEM', payload: 'Cabbage' });
      expect(winState.status).toBe('WIN');
      expect(winState.items.Cabbage).toBe('Right');
    });

    it('should ignore any action if status is not PLAYING (except RESET)', () => {
      const lossState: GameState = {
        ...INITIAL_STATE,
        status: 'LOSS'
      };
      const newState = gameReducer(lossState, { type: 'CROSS_RIVER' });
      expect(newState).toEqual(lossState); // no change
    });
  });
});
