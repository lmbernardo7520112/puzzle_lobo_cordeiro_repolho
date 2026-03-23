import { useReducer, useCallback } from 'react';
import { gameReducer } from '../domain/gameEngine';
import { INITIAL_STATE } from '../domain/types';
import type { Item } from '../domain/types';

export function useGameEngine() {
  const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const boardItem = useCallback((item: Item) => {
    dispatch({ type: 'BOARD_ITEM', payload: item });
  }, []);

  const unboardItem = useCallback((item: Item) => {
    dispatch({ type: 'UNBOARD_ITEM', payload: item });
  }, []);

  const crossRiver = useCallback(() => {
    dispatch({ type: 'CROSS_RIVER' });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return {
    gameState,
    boardItem,
    unboardItem,
    crossRiver,
    resetGame
  };
}
