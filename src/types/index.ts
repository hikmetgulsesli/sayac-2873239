export type HistoryAction = 'increment' | 'decrement' | 'reset';

export interface HistoryEntry {
  id: string;
  value: number;
  timestamp: number;
  action?: HistoryAction;
}

export interface CounterState {
  count: number;
  history: HistoryEntry[];
}

export type Theme = 'dark' | 'light';
