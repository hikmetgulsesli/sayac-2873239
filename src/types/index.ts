export interface HistoryEntry {
  id: string;
  value: number;
  timestamp: number;
}

export interface CounterState {
  count: number;
  history: HistoryEntry[];
}

export type Theme = 'dark' | 'light';
