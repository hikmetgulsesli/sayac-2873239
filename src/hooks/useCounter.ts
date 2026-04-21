import { useState, useEffect, useCallback } from 'react';
import type { CounterState } from '../types';

const STORAGE_KEY = 'sayac-counter-state';
const MAX_HISTORY = 10;

export function useCounter() {
  const [state, setState] = useState<CounterState>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return { count: 0, history: [] };
        }
      }
    }
    return { count: 0, history: [] };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const increment = useCallback((amount: number = 1) => {
    setState(prev => ({
      count: prev.count + amount,
      history: [
        { id: Date.now().toString(), value: prev.count + amount, timestamp: Date.now() },
        ...prev.history,
      ].slice(0, MAX_HISTORY),
    }));
  }, []);

  const decrement = useCallback(() => {
    setState(prev => ({
      count: prev.count - 1,
      history: [
        { id: Date.now().toString(), value: prev.count - 1, timestamp: Date.now() },
        ...prev.history,
      ].slice(0, MAX_HISTORY),
    }));
  }, []);

  const reset = useCallback(() => {
    setState(prev => ({
      count: 0,
      history: [
        { id: Date.now().toString(), value: 0, timestamp: Date.now() },
        ...prev.history,
      ].slice(0, MAX_HISTORY),
    }));
  }, []);

  return {
    count: state.count,
    history: state.history,
    increment,
    decrement,
    reset,
  };
}