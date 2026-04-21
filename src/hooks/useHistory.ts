import { useState, useCallback } from 'react';
import type { HistoryEntry } from '../types';

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const addEntry = useCallback((value: number, action: HistoryEntry['action']) => {
    const entry: HistoryEntry = {
      id: `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      value,
      timestamp: Date.now(),
      action,
    };
    setHistory((prev) => [entry, ...prev].slice(0, 10));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addEntry, clearHistory };
}