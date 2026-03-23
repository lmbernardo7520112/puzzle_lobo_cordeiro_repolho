import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useGameEngine } from './useGameEngine';
import { INITIAL_STATE } from '../domain/types';

describe('useGameEngine Hook (Application Layer)', () => {
  it('should initialize with the initial state', () => {
    const { result } = renderHook(() => useGameEngine());
    expect(result.current.gameState).toEqual(INITIAL_STATE);
  });

  it('should board an item when boardItem is called', () => {
    const { result } = renderHook(() => useGameEngine());
    
    act(() => {
      result.current.boardItem('Sheep');
    });

    expect(result.current.gameState.items.Sheep).toBe('Boat');
  });

  it('should unboard an item when unboardItem is called', () => {
    const { result } = renderHook(() => useGameEngine());
    
    act(() => {
      result.current.boardItem('Sheep');
    });
    
    act(() => {
      result.current.unboardItem('Sheep');
    });

    expect(result.current.gameState.items.Sheep).toBe('Left');
  });

  it('should cross the river and trigger state changes', () => {
    const { result } = renderHook(() => useGameEngine());
    
    act(() => {
      result.current.boardItem('Sheep');
    });
    
    act(() => {
      result.current.crossRiver();
    });

    // Barco leva a ovelha para a direita
    expect(result.current.gameState.farmerBank).toBe('Right');
  });

  it('should reset the game', () => {
    const { result } = renderHook(() => useGameEngine());
    
    act(() => {
      result.current.boardItem('Sheep');
    });
    
    act(() => {
      result.current.resetGame();
    });

    expect(result.current.gameState).toEqual(INITIAL_STATE);
  });
});
