import { useState, useCallback } from 'react';
import { HistoryEntry, HistoryAction } from '../types';

const MAX_HISTORY = 10;

interface HistoryEntryWithAction extends HistoryEntry {
  action: HistoryAction;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntryWithAction[]>([]);

  const addEntry = useCallback((value: number, action: HistoryAction) => {
    const entry: HistoryEntryWithAction = {
      id: crypto.randomUUID(),
      value,
      timestamp: Date.now(),
      action,
    };
    setHistory((prev) => [entry, ...prev].slice(0, MAX_HISTORY));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, addEntry, clearHistory };
}
